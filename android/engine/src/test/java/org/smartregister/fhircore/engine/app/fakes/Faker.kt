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

package org.smartregister.fhircore.engine.app.fakes

import android.app.Application
import androidx.datastore.preferences.core.PreferenceDataStoreFactory
import androidx.datastore.preferences.preferencesDataStore
import androidx.datastore.preferences.preferencesDataStoreFile
import androidx.test.core.app.ApplicationProvider
import androidx.test.platform.app.InstrumentationRegistry
import com.google.gson.Gson
import dagger.hilt.android.qualifiers.ApplicationContext
import io.mockk.coEvery
import io.mockk.just
import io.mockk.mockk
import io.mockk.runs
import io.mockk.spyk
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Job
import java.util.Calendar
import java.util.Date
import kotlinx.coroutines.runBlocking
import kotlinx.coroutines.test.UnconfinedTestDispatcher
import kotlinx.serialization.json.Json
import org.hl7.fhir.r4.model.Bundle
import org.hl7.fhir.r4.model.CarePlan
import org.hl7.fhir.r4.model.DateType
import org.hl7.fhir.r4.model.Enumerations
import org.hl7.fhir.r4.model.Identifier
import org.hl7.fhir.r4.model.Patient
import org.hl7.fhir.r4.model.Reference
import org.hl7.fhir.r4.model.StringType
import org.smartregister.fhircore.engine.configuration.ConfigurationRegistry
import org.smartregister.fhircore.engine.data.remote.fhir.resource.FhirResourceDataSource
import org.smartregister.fhircore.engine.data.remote.fhir.resource.FhirResourceService
import org.smartregister.fhircore.engine.datastore.PreferencesDataStore
import org.smartregister.fhircore.engine.util.DispatcherProvider

object Faker {

  private const val APP_DEBUG = "app/debug"

  val json = Json {
    encodeDefaults = true
    ignoreUnknownKeys = true
    isLenient = true
    useAlternativeNames = true
  }

  private val testDispatcher = UnconfinedTestDispatcher()

  val testDispatcherProvider =
    object : DispatcherProvider {
      override fun default() = testDispatcher

      override fun io() = testDispatcher

      override fun main() = testDispatcher

      override fun unconfined() = testDispatcher
    }

  private val testCoroutineScope = CoroutineScope(testDispatcher + Job())
  private val testDataStoreName = "test_datastore"
  val testDataStore =
    PreferenceDataStoreFactory.create(
      scope = testCoroutineScope,
      produceFile = {
        ApplicationProvider.getApplicationContext<Application>().preferencesDataStoreFile(testDataStoreName)
      },
    )

  fun buildTestConfigurationRegistry(
    preferencesDataStore: PreferencesDataStore = PreferencesDataStore(
      ApplicationProvider.getApplicationContext<Application>(),
      testDataStore,
    ),
    dispatcherProvider: DispatcherProvider = testDispatcherProvider,
  ): ConfigurationRegistry {
    val fhirResourceService = mockk<FhirResourceService>()
    val fhirResourceDataSource = spyk(FhirResourceDataSource(fhirResourceService))
    return buildTestConfigurationRegistry(
      fhirResourceService,
      fhirResourceDataSource,
      preferencesDataStore,
      dispatcherProvider,
    )
  }

  fun buildTestConfigurationRegistry(
    fhirResourceService: FhirResourceService,
    fhirResourceDataSource: FhirResourceDataSource,
    preferencesDataStore: PreferencesDataStore,
    dispatcherProvider: DispatcherProvider,
  ): ConfigurationRegistry {
    coEvery { fhirResourceService.getResource(any()) } returns Bundle()

    val configurationRegistry =
      spyk(
        ConfigurationRegistry(
          fhirEngine = mockk(),
          fhirResourceDataSource = fhirResourceDataSource,
          preferencesDataStore = preferencesDataStore,
          dispatcherProvider = dispatcherProvider,
          configService = mockk(),
          json = json,
        ),
      )

    coEvery { configurationRegistry.addOrUpdate(any()) } just runs

    runBlocking {
      configurationRegistry.loadConfigurations(
        appId = APP_DEBUG,
        context = InstrumentationRegistry.getInstrumentation().targetContext,
      ) {}
    }

    return configurationRegistry
  }

  fun buildPatient(
    id: String = "sampleId",
    family: String = "Mandela",
    given: String = "Nelson",
    age: Int = 78,
    gender: Enumerations.AdministrativeGender = Enumerations.AdministrativeGender.MALE,
  ): Patient {
    return Patient().apply {
      this.id = id
      this.active = true
      this.identifierFirstRep.value = id
      this.addName().apply {
        this.family = family
        this.given.add(StringType(given))
      }
      this.gender = gender
      this.birthDate = DateType(Date()).apply { add(Calendar.YEAR, -age) }.dateTimeValue().value

      this.addAddress().apply {
        district = "Dist 1"
        city = "City 1"
      }
    }
  }

  fun buildCarePlan(referenceString: String = "Patient/sampleId"): CarePlan {
    val carePlan: CarePlan =
      CarePlan().apply {
        id = "careplan-1"
        identifier =
          mutableListOf(
            Identifier().apply {
              use = Identifier.IdentifierUse.OFFICIAL
              value = "value-1"
            },
          )
        subject = Reference().apply { reference = referenceString }
      }
    return carePlan
  }
}
