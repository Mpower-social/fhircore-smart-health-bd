/*
 * Copyright 2021 Ona Systems, Inc
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

package org.smartregister.fhircore.engine.ui.patient.register

import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import androidx.paging.Pager
import androidx.paging.PagingConfig
import androidx.paging.PagingData
import androidx.paging.filter
import dagger.hilt.android.lifecycle.HiltViewModel
import javax.inject.Inject
import kotlin.math.ceil
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.emptyFlow
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.launch
import org.smartregister.fhircore.engine.appfeature.model.HealthModule
import org.smartregister.fhircore.engine.data.local.patient.PatientRegisterPagingSource
import org.smartregister.fhircore.engine.data.local.patient.PatientRegisterPagingSource.Companion.DEFAULT_INITIAL_LOAD_SIZE
import org.smartregister.fhircore.engine.data.local.patient.PatientRegisterPagingSource.Companion.DEFAULT_PAGE_SIZE
import org.smartregister.fhircore.engine.data.local.patient.PatientRepository
import org.smartregister.fhircore.engine.data.local.patient.model.PatientPagingSourceState
import org.smartregister.fhircore.engine.domain.model.RegisterRow

@HiltViewModel
class PatientRegisterViewModel @Inject constructor(val patientRepository: PatientRepository) :
  ViewModel() {

  private val _currentPage = MutableLiveData(0)
  val currentPage
    get() = _currentPage

  private val _searchText = mutableStateOf("")
  val searchText: androidx.compose.runtime.State<String>
    get() = _searchText

  private val _totalRecordsCount = MutableLiveData(1L)

  val paginatedRegisterData: MutableStateFlow<Flow<PagingData<RegisterRow>>> =
    MutableStateFlow(emptyFlow())

  fun paginateRegisterData(
    appFeatureName: String?,
    healthModule: HealthModule?,
    loadAll: Boolean = false
  ) {
    paginatedRegisterData.value = getPager(appFeatureName, healthModule, loadAll).flow
  }

  private fun getPager(
    appFeatureName: String?,
    healthModule: HealthModule?,
    loadAll: Boolean = false
  ) =
    Pager(
      config =
        PagingConfig(pageSize = DEFAULT_PAGE_SIZE, initialLoadSize = DEFAULT_INITIAL_LOAD_SIZE),
      pagingSourceFactory = {
        PatientRegisterPagingSource(patientRepository).apply {
          setPatientPagingSourceState(
            PatientPagingSourceState(
              appFeatureName = appFeatureName,
              healthModule = healthModule,
              loadAll = loadAll,
              currentPage = if (loadAll) 0 else currentPage.value!!
            )
          )
        }
      }
    )

  fun setTotalRecordsCount(appFeatureName: String?, healthModule: HealthModule?) {
    viewModelScope.launch {
      _totalRecordsCount.postValue(
        patientRepository.countRegisterData(appFeatureName, healthModule)
      )
    }
  }

  fun countPages(): Int =
    _totalRecordsCount.value?.toDouble()?.div(DEFAULT_PAGE_SIZE.toLong())?.let { ceil(it).toInt() }
      ?: 1

  fun onEvent(event: PatientRegisterEvent) {
    when (event) {
      // Search using name or patient logicalId or identifier. Modify to add more search params
      is PatientRegisterEvent.SearchRegister -> {
        _searchText.value = event.searchText
        if (event.searchText.isEmpty())
          paginateRegisterData(event.appFeatureName, event.healthModule)
        else filterRegisterData(event)
      }
      is PatientRegisterEvent.MoveToNextPage -> {
        this._currentPage.value = this._currentPage.value?.plus(1)
        paginateRegisterData(event.appFeatureName, event.healthModule)
      }
      is PatientRegisterEvent.MoveToPreviousPage -> {
        this._currentPage.value?.let { if (it > 0) _currentPage.value = it.minus(1) }
        paginateRegisterData(event.appFeatureName, event.healthModule)
      }
    }
  }

  private fun filterRegisterData(event: PatientRegisterEvent.SearchRegister) {
    paginatedRegisterData.value =
      getPager(event.appFeatureName, event.healthModule, true).flow.map {
        pagingData: PagingData<RegisterRow> ->
        pagingData.filter {
          it.name.contains(event.searchText, ignoreCase = true) ||
            it.identifier.contentEquals(event.searchText, ignoreCase = true) ||
            it.logicalId.contentEquals(event.searchText, ignoreCase = true)
        }
      }
  }
}
