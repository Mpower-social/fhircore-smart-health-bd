/*
 * Copyright 2021-2023 Ona Systems, Inc
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

package org.smartregister.fhircore.engine.sync

import android.content.Context
import androidx.lifecycle.asFlow
import androidx.work.Constraints
import androidx.work.NetworkType
import androidx.work.WorkManager
import androidx.work.hasKeyWithValueOfType
import com.google.android.fhir.FhirEngine
import com.google.android.fhir.sync.FhirSyncWorker
import com.google.android.fhir.sync.PeriodicSyncConfiguration
import com.google.android.fhir.sync.RepeatInterval
import com.google.android.fhir.sync.Sync
import com.google.android.fhir.sync.SyncJobStatus
import com.google.android.fhir.sync.download.ResourceParamsBasedDownloadWorkManager
import dagger.hilt.android.qualifiers.ApplicationContext
import java.util.concurrent.TimeUnit
import javax.inject.Inject
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.MutableSharedFlow
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.filter
import kotlinx.coroutines.flow.flatMapConcat
import kotlinx.coroutines.flow.flowOf
import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.mapNotNull
import kotlinx.coroutines.flow.onEach
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import org.smartregister.fhircore.engine.configuration.ConfigurationRegistry
import org.smartregister.fhircore.engine.util.DispatcherProvider
import timber.log.Timber

/**
 * This class is used to trigger one time and periodic syncs. A new instance of this class is
 * created each time because a new instance of [ResourceParamsBasedDownloadWorkManager] is needed
 * everytime sync is triggered. This class should not be provided as a singleton. The
 * [SyncJobStatus] events are sent to the registered [OnSyncListener] maintained by the
 * [SyncListenerManager]
 */
class SyncBroadcaster
@Inject
constructor(
  val configurationRegistry: ConfigurationRegistry,
  val fhirEngine: FhirEngine,
  val syncListenerManager: SyncListenerManager,
  val dispatcherProvider: DispatcherProvider,
  @ApplicationContext val context: Context,
) {

  /**
   * Workaround to ensure terminal SyncJobStatus, i.e SyncJobStatus.Failed and
   * SyncJobStatus.Finished, get emitted
   *
   * Gets the worker info for the [FhirSyncWorker], including outputData
   */
  @OptIn(FlowPreview::class)
  inline fun <reified W : FhirSyncWorker> getWorkerInfo(): Flow<SyncJobStatus> {
    return WorkManager.getInstance(context)
      .getWorkInfosForUniqueWorkLiveData(W::class.java.name)
      .asFlow()
      .flatMapConcat { it.asFlow() }
      .flatMapConcat { workInfo ->
        flowOf(workInfo.progress, workInfo.outputData)
          .filter { it.keyValueMap.isNotEmpty() && it.hasKeyWithValueOfType<String>("StateType") }
          .mapNotNull {
            val state = it.getString("StateType")!!
            val stateData = it.getString("State")
            Sync.gson.fromJson(stateData, Class.forName(state)) as SyncJobStatus
          }
      }
  }

  fun runSync(syncSharedFlow: MutableSharedFlow<SyncJobStatus>) {
    val coroutineScope = CoroutineScope(dispatcherProvider.main())
    Timber.i("Running one time sync...")
    coroutineScope.launch {
      syncSharedFlow
        .onEach {
          syncListenerManager.onSyncListeners.forEach { onSyncListener ->
            onSyncListener.onSync(it)
          }
        }
        .handleErrors()
        .launchIn(this)
    }

    coroutineScope.launch(dispatcherProvider.main()) {
      Sync.oneTimeSync<AppSyncWorker>(context)
      getWorkerInfo<AppSyncWorker>().collect { syncSharedFlow.emit(it) }
    }
  }

  private fun <T> Flow<T>.handleErrors(): Flow<T> = catch { throwable -> Timber.e(throwable) }

  /**
   * Schedule periodic sync periodically as defined in the application config interval. The
   * [SyncJobStatus] will be broadcast to the listeners
   */
  @OptIn(ExperimentalCoroutinesApi::class)
  fun schedulePeriodicSync(periodicSyncSharedFlow: MutableSharedFlow<SyncJobStatus>) {
    Timber.i("Scheduling periodic sync...")

    // Launch in main to observer UI updates that should ONLY happen on main thread
    val coroutineScope = CoroutineScope(dispatcherProvider.main())
    coroutineScope.launch {
      periodicSyncSharedFlow
        .onEach {
          syncListenerManager.onSyncListeners.forEach { onSyncListener ->
            onSyncListener.onSync(it)
          }
        }
        .handleErrors()
        .launchIn(this)

      // Switch to io thread when triggering periodic sync
      withContext(dispatcherProvider.io()) {
        Sync.periodicSync<AppSyncWorker>(
            context,
            PeriodicSyncConfiguration(
              syncConstraints =
                Constraints.Builder().setRequiredNetworkType(NetworkType.CONNECTED).build(),
              repeat = RepeatInterval(interval = 15, timeUnit = TimeUnit.MINUTES)
            )
          )
          .collect { periodicSyncSharedFlow.emit(it) }
      }
    }
  }
}
