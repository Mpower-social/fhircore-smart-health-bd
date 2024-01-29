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

package org.smartregister.fhircore.engine

import android.app.Application
import androidx.test.core.app.ApplicationProvider
import com.google.gson.Gson
import dagger.hilt.android.testing.HiltAndroidRule
import dagger.hilt.android.testing.HiltAndroidTest
import io.mockk.spyk
import javax.inject.Inject
import kotlinx.coroutines.test.runTest
import org.junit.Assert
import org.junit.Before
import org.junit.Rule
import org.junit.Test
import org.smartregister.fhircore.engine.app.AppConfigService
import org.smartregister.fhircore.engine.datastore.ProtoDataStore
import org.smartregister.fhircore.engine.datastore.PreferencesDataStore
import org.smartregister.fhircore.engine.robolectric.RobolectricTest

@HiltAndroidTest
class ConfigServiceTest : RobolectricTest() {

  @get:Rule(order = 0) val hiltRule = HiltAndroidRule(this)

  @Inject lateinit var gson: Gson

  private val application = ApplicationProvider.getApplicationContext<Application>()

  @Inject lateinit var preferencesDataStore: PreferencesDataStore

  @Inject lateinit var protoDataStore: ProtoDataStore

  private val configService = spyk(AppConfigService(ApplicationProvider.getApplicationContext()))

  @Before
  fun setUp() {
    hiltRule.inject()
  }

  @Test
  fun testProvideSyncTagsShouldHavePractitionerId() {
    val practitionerId = "practitioner-id"

    runTest {
      preferencesDataStore.write(PreferencesDataStore.PRACTITIONER_ID, practitionerId)
    }

    val resourceTags = configService.provideResourceTags(preferencesDataStore)
    val practitionerTag =
      resourceTags.firstOrNull { it.system == AppConfigService.PRACTITIONER_SYSTEM }
    Assert.assertEquals(practitionerId, practitionerTag?.code)
  }

  @Test
  fun testProvideSyncTagsShouldHaveLocationIds() {
    val locationId1 = "location-id1"
    val locationId2 = "location-id2"

    runTest {
      protoDataStore.write(
        ProtoDataStore.Keys.LOCATION_IDS,
        listOf(locationId1, locationId2)
      )
    }

    val resourceTags = configService.provideResourceTags(preferencesDataStore)
    val locationTags = resourceTags.filter { it.system == AppConfigService.LOCATION_SYSTEM }
    Assert.assertTrue(locationTags.any { it.code == locationId1 })
    Assert.assertTrue(locationTags.any { it.code == locationId2 })
  }

  @Test
  fun testProvideSyncTagsShouldHaveOrganizationIds() {
    val organizationId1 = "organization-id1"
    val organizationId2 = "organization-id2"
    runTest {
      protoDataStore.write(
        ProtoDataStore.Keys.ORGANIZATION_IDS,
        listOf(organizationId1, organizationId2)
      )
    }

    val resourceTags = configService.provideResourceTags(preferencesDataStore)
    val organizationTags = resourceTags.filter { it.system == AppConfigService.ORGANIZATION_SYSTEM }

    Assert.assertTrue(organizationTags.any { it.code == organizationId1 })
    Assert.assertTrue(organizationTags.any { it.code == organizationId2 })
  }

  @Test
  fun testProvideSyncTagsShouldHaveCareTeamIds() {
    val careTeamId1 = "careteam-id1"
    val careTeamId2 = "careteam-id2"

    runTest {
      protoDataStore.write(
        ProtoDataStore.Keys.CARE_TEAM_IDS,
        listOf(careTeamId1, careTeamId2)
      )
    }

    val resourceTags = configService.provideResourceTags(preferencesDataStore)
    val organizationTags = resourceTags.filter { it.system == AppConfigService.CARETEAM_SYSTEM }

    Assert.assertTrue(organizationTags.any { it.code == careTeamId1 })
    Assert.assertTrue(organizationTags.any { it.code == careTeamId2 })
  }
}
