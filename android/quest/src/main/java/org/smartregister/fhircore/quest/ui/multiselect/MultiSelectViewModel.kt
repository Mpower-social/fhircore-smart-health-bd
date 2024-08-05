/*
 * Copyright 2021-2024 Ona Systems, Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.smartregister.fhircore.quest.ui.multiselect

import android.content.Context
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.snapshots.SnapshotStateList
import androidx.compose.runtime.snapshots.SnapshotStateMap
import androidx.compose.ui.state.ToggleableState
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.google.android.fhir.datacapture.extensions.logicalId
import dagger.hilt.android.lifecycle.HiltViewModel
import java.util.LinkedList
import javax.inject.Inject
import kotlinx.coroutines.flow.firstOrNull
import kotlinx.coroutines.launch
import org.smartregister.fhircore.engine.data.local.DefaultRepository
import org.smartregister.fhircore.engine.datastore.syncLocationIdsProtoStore
import org.smartregister.fhircore.engine.domain.model.MultiSelectViewConfig
import org.smartregister.fhircore.engine.domain.model.SyncLocationToggleableState
import org.smartregister.fhircore.engine.ui.multiselect.TreeBuilder
import org.smartregister.fhircore.engine.ui.multiselect.TreeNode
import org.smartregister.fhircore.engine.util.extension.extractLogicalIdUuid
import org.smartregister.fhircore.engine.util.fhirpath.FhirPathDataExtractor

@HiltViewModel
class MultiSelectViewModel
@Inject
constructor(
  val defaultRepository: DefaultRepository,
  val fhirPathDataExtractor: FhirPathDataExtractor,
) : ViewModel() {

  val searchTextState: MutableState<String> = mutableStateOf("")
  val rootTreeNodes: SnapshotStateList<TreeNode<String>> = SnapshotStateList()
  val selectedNodes: SnapshotStateMap<String, ToggleableState> = SnapshotStateMap()
  val flag = MutableLiveData(false)
  private var _rootTreeNodes: List<TreeNode<String>> = mutableListOf()

  fun populateLookupMap(context: Context, multiSelectViewConfig: MultiSelectViewConfig) {
    // Mark previously selected nodes
    viewModelScope.launch {
      flag.postValue(true)
      val previouslySelectedNodes = context.syncLocationIdsProtoStore.data.firstOrNull()
      if (!previouslySelectedNodes.isNullOrEmpty()) {
        previouslySelectedNodes.forEach { selectedNodes[it.locationId] = it.toggleableState }
      }

      val resourcesMap =
        defaultRepository
          .searchResourcesRecursively(
            fhirResourceConfig = multiSelectViewConfig.resourceConfig,
            filterActiveResources = null,
            secondaryResourceConfigs = null,
            configRules = null,
          )
          .associateByTo(mutableMapOf(), { it.resource.logicalId }, { it.resource })
      val rootNodeIds = mutableSetOf<String>()

      val lookupItems: List<TreeNode<String>> =
        resourcesMap.values.map { resource ->
          val parentId =
            fhirPathDataExtractor
              .extractValue(
                resource,
                multiSelectViewConfig.parentIdFhirPathExpression,
              )
              .extractLogicalIdUuid()
          val data =
            fhirPathDataExtractor
              .extractValue(
                resource,
                multiSelectViewConfig.contentFhirPathExpression,
              )
              .extractLogicalIdUuid()
          val isRootNode =
            fhirPathDataExtractor
              .extractValue(
                resource,
                multiSelectViewConfig.rootNodeFhirPathExpression.key,
              )
              .equals(multiSelectViewConfig.rootNodeFhirPathExpression.value, ignoreCase = true)
          if (isRootNode) {
            rootNodeIds.add(resource.logicalId)
          }

          val parentResource = resourcesMap[parentId]

          TreeNode(
            id = resource.logicalId,
            parent =
              if (parentResource != null) {
                TreeNode(
                  id = parentResource.logicalId,
                  parent = null,
                  data =
                    fhirPathDataExtractor
                      .extractValue(
                        parentResource,
                        multiSelectViewConfig.contentFhirPathExpression,
                      )
                      .extractLogicalIdUuid(),
                )
              } else {
                null
              },
            data = data,
          )
        }
      flag.postValue(false)
      _rootTreeNodes = TreeBuilder.buildTrees(lookupItems, rootNodeIds)
      rootTreeNodes.addAll(_rootTreeNodes)
    }
  }

  fun onTextChanged(searchTerm: String) {
    searchTextState.value = searchTerm
    if (searchTerm.isEmpty() || searchTerm.isBlank()) {
      rootTreeNodes.run {
        clear()
        addAll(_rootTreeNodes)
      }
    }
  }

  fun saveSelectedLocations(context: Context) {
    viewModelScope.launch {
      context.syncLocationIdsProtoStore.updateData {
        selectedNodes.map { SyncLocationToggleableState(it.key, it.value) }
      }
    }
  }

  fun search() {
    val searchTerm = searchTextState.value
    if (searchTerm.isNotEmpty() && searchTerm.isNotEmpty()) {
      val rootTreeNodeMap = mutableMapOf<String, TreeNode<String>>()
      rootTreeNodes.clear()
      _rootTreeNodes.forEach { rootTreeNode ->
        if (
          rootTreeNode.data.contains(searchTerm, true) &&
            !rootTreeNodeMap.containsKey(rootTreeNode.id)
        ) {
          rootTreeNodeMap[rootTreeNode.id] = rootTreeNode
          return@forEach
        }
        val childrenList = LinkedList(rootTreeNode.children)
        while (childrenList.isNotEmpty()) {
          val currentNode = childrenList.removeFirst()
          if (currentNode.data.contains(other = searchTerm, ignoreCase = true)) {
            when {
              rootTreeNodeMap.containsKey(rootTreeNode.id) -> return@forEach
              else -> {
                rootTreeNodeMap[rootTreeNode.id] = rootTreeNode
                return@forEach
              }
            }
          }
          currentNode.children.forEach { childrenList.add(it) }
        }
      }
      rootTreeNodes.addAll(rootTreeNodeMap.values)
    }
  }
}
