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

package org.smartregister.fhircore.quest.ui.shared.components

import android.graphics.Bitmap
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.material.ScrollableTabRow
import androidx.compose.material.Tab
import androidx.compose.material.TabRow
import androidx.compose.material.TabRowDefaults
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.snapshotFlow
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import androidx.navigation.compose.rememberNavController
import com.google.accompanist.pager.ExperimentalPagerApi
import com.google.accompanist.pager.HorizontalPager
import com.google.accompanist.pager.PagerState
import com.google.accompanist.pager.pagerTabIndicatorOffset
import com.google.accompanist.pager.rememberPagerState
import kotlinx.coroutines.launch
import org.hl7.fhir.r4.model.ResourceType
import org.smartregister.fhircore.engine.configuration.view.CompoundTextProperties
import org.smartregister.fhircore.engine.configuration.view.TabViewContent
import org.smartregister.fhircore.engine.configuration.view.TabViewProperties
import org.smartregister.fhircore.engine.domain.model.ResourceData
import org.smartregister.fhircore.engine.domain.model.ViewType
import org.smartregister.fhircore.engine.util.annotation.PreviewWithBackgroundExcludeGenerated
import org.smartregister.fhircore.engine.util.extension.parseColor

@OptIn(ExperimentalPagerApi::class)
@Composable
fun TabView(
  modifier: Modifier = Modifier,
  viewProperties: TabViewProperties,
  resourceData: ResourceData,
  navController: NavController,
  decodeImage: ((String) -> Bitmap?)?,
  selectedTabIndex: Int? = null,
  tabChangedEvent: ((Int) -> Unit)? = null,
) {
  val pagerState =
    rememberPagerState(initialPage = selectedTabIndex ?: viewProperties.selectedTabIndex)

  LaunchedEffect(pagerState) {
    snapshotFlow { pagerState.currentPage }.collect { page -> tabChangedEvent?.let { it(page) } }
  }

  Column(
    modifier = modifier.fillMaxSize().background(viewProperties.tabBackgroundColor.parseColor()),
  ) {
    // tabs header
    Tabs(
      pagerState = pagerState,
      viewProperties = viewProperties,
    )

    // tabs content
    TabContents(
      pagerState = pagerState,
      viewProperties = viewProperties,
      resourceData = resourceData,
      navController = navController,
      decodeImage = decodeImage,
    )
  }
}

@OptIn(ExperimentalPagerApi::class)
@Composable
fun Tabs(
  pagerState: PagerState,
  viewProperties: TabViewProperties,
) {
  val scope = rememberCoroutineScope()
  val tabs = viewProperties.tabContents.filter { it.visible == "true" }.map { it.title }

  if (tabs.size > 3) {
    ScrollableTabRow(
      selectedTabIndex = pagerState.currentPage,
      edgePadding = 10.dp,
      indicator = { tabPositions ->
        TabRowDefaults.Indicator(
          Modifier.pagerTabIndicatorOffset(pagerState, tabPositions),
          height = 5.dp,
          color = viewProperties.tabIndicatorColor.parseColor(),
        )
      },
    ) {
      tabs.forEachIndexed { index, _ ->
        Tab(
          selected = pagerState.currentPage == index,
          onClick = { scope.launch { pagerState.animateScrollToPage(index) } },
          text = {
            Text(
              tabs[index],
              color = if (pagerState.currentPage == index) Color.White else Color.LightGray,
              fontWeight =
                if (pagerState.currentPage == index) FontWeight.Bold else FontWeight.Normal,
            )
          },
        )
      }
    }
  } else {
    TabRow(
      selectedTabIndex = pagerState.currentPage,
      indicator = { tabPositions ->
        TabRowDefaults.Indicator(
          Modifier.pagerTabIndicatorOffset(pagerState, tabPositions),
          height = 5.dp,
          color = viewProperties.tabIndicatorColor.parseColor(),
        )
      },
    ) {
      tabs.forEachIndexed { index, _ ->
        Tab(
          selected = pagerState.currentPage == index,
          onClick = { scope.launch { pagerState.animateScrollToPage(index) } },
          text = {
            Text(
              tabs[index],
              color = if (pagerState.currentPage == index) Color.White else Color.LightGray,
              fontWeight =
                if (pagerState.currentPage == index) FontWeight.Bold else FontWeight.Normal,
            )
          },
        )
      }
    }
  }
}

@OptIn(ExperimentalPagerApi::class)
@Composable
fun TabContents(
  pagerState: PagerState,
  viewProperties: TabViewProperties,
  resourceData: ResourceData,
  navController: NavController,
  decodeImage: ((String) -> Bitmap?)?,
) {
  val tabContents = viewProperties.tabContents.filter { it.visible == "true" }.map { it.contents }

  HorizontalPager(
    verticalAlignment = Alignment.Top,
    count = tabContents.size,
    state = pagerState,
    userScrollEnabled = false,
  ) { pageIndex ->
    if (viewProperties.contentScrollable) {
      LazyColumn(
        state = rememberLazyListState(),
        contentPadding = PaddingValues(bottom = 20.dp),
      ) {
        item(key = resourceData.baseResourceId) {
          ViewRenderer(
            viewProperties = tabContents[pageIndex],
            resourceData = resourceData,
            navController = navController,
            decodeImage = decodeImage,
          )
        }
      }
    } else {
      ViewRenderer(
        viewProperties = tabContents[pageIndex],
        resourceData = resourceData,
        navController = navController,
        decodeImage = decodeImage,
      )
    }
  }
}

@OptIn(ExperimentalPagerApi::class)
@PreviewWithBackgroundExcludeGenerated
@Composable
private fun TabViewPreview() {
  val pagerState =
    rememberPagerState(
      initialPage = 0,
    )

  val viewProperties =
    TabViewProperties(
      viewType = ViewType.TABS,
      tabContents =
        listOf(
          TabViewContent(
            title = "Tab1",
            contents = listOf(
              CompoundTextProperties(
                primaryText = "Tab1",
                primaryTextColor = "#000000",
              )
            )
          ),
          TabViewContent(
            title = "Tab2",
            contents = listOf(
              CompoundTextProperties(
                primaryText = "Tab2",
                primaryTextColor = "#000000",
              )
            )
          ),
          TabViewContent(
            title = "Tab3",
            contents = listOf(
              CompoundTextProperties(
                primaryText = "Tab3",
                primaryTextColor = "#000000",
              )
            )
          ),
        ),
    )

  Column(modifier = Modifier.fillMaxWidth()) {
    // tabs header
    Tabs(
      pagerState = pagerState,
      viewProperties = viewProperties,
    )

    // tabs content
    TabContents(
      pagerState = pagerState,
      viewProperties = viewProperties,
      resourceData = ResourceData("id", ResourceType.Patient, emptyMap()),
      navController = rememberNavController(),
      decodeImage = null,
    )
  }
}
