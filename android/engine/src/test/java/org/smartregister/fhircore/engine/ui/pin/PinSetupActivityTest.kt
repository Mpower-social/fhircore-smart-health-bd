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

package org.smartregister.fhircore.engine.ui.pin

import android.app.Activity
import android.app.Application
import android.content.Context
import android.content.Intent
import androidx.lifecycle.MutableLiveData
import androidx.test.core.app.ApplicationProvider
import com.google.android.fhir.sync.Sync
import dagger.hilt.android.testing.BindValue
import dagger.hilt.android.testing.HiltAndroidRule
import dagger.hilt.android.testing.HiltAndroidTest
import dagger.hilt.android.testing.UninstallModules
import io.mockk.coEvery
import io.mockk.every
import io.mockk.mockk
import io.mockk.spyk
import io.mockk.unmockkObject
import javax.inject.Inject
import org.junit.After
import org.junit.Assert
import org.junit.Before
import org.junit.Rule
import org.junit.Test
import org.robolectric.Robolectric
import org.robolectric.Shadows
import org.robolectric.util.ReflectionHelpers
import org.smartregister.fhircore.engine.R
import org.smartregister.fhircore.engine.di.AnalyticsModule
import org.smartregister.fhircore.engine.robolectric.ActivityRobolectricTest
import org.smartregister.fhircore.engine.trace.FakePerformanceReporter
import org.smartregister.fhircore.engine.trace.PerformanceReporter
import org.smartregister.fhircore.engine.ui.appsetting.AppSettingActivity
import org.smartregister.fhircore.engine.ui.login.LoginActivity
import org.smartregister.fhircore.engine.util.FORCE_LOGIN_VIA_USERNAME
import org.smartregister.fhircore.engine.util.FORCE_LOGIN_VIA_USERNAME_FROM_PIN_SETUP
import org.smartregister.fhircore.engine.util.SharedPreferencesHelper

@UninstallModules(AnalyticsModule::class)
@HiltAndroidTest
class PinSetupActivityTest : ActivityRobolectricTest() {

  @get:Rule(order = 0) val hiltRule = HiltAndroidRule(this)

  @Inject lateinit var sharedPreferencesHelper: SharedPreferencesHelper

  private val application = ApplicationProvider.getApplicationContext<Application>()

  private val testPin = MutableLiveData("1234")

  private lateinit var pinViewModel: PinViewModel

  private lateinit var pinSetupActivity: PinSetupActivity

  private lateinit var pinSetupActivitySpy: PinSetupActivity

  @BindValue @JvmField val performanceReporter: PerformanceReporter = FakePerformanceReporter()

  @Before
  fun setUp() {
    hiltRule.inject()

    ApplicationProvider.getApplicationContext<Context>().apply { setTheme(R.style.AppTheme) }
    pinSetupActivity =
      Robolectric.buildActivity(PinSetupActivity::class.java).create().resume().get()

    pinSetupActivitySpy = spyk(pinSetupActivity, recordPrivateCalls = true)
    every { pinSetupActivitySpy.finish() } returns Unit

    pinViewModel = mockk()
    coEvery { pinViewModel.savedPin } returns "1234"
    coEvery { pinViewModel.enterUserLoginMessage } returns "demo"
    coEvery { pinViewModel.pin } returns testPin
  }

  @After
  fun cleanup() {
    unmockkObject(Sync)
  }

  @Test
  fun testActivityShouldNotNull() {
    Assert.assertNotNull(getActivity())
  }

  @Test
  fun testNavigateToSettingShouldVerifyExpectedIntent() {
    pinSetupActivity.pinViewModel.onMenuSettingClicked()
    val expectedIntent = Intent(pinSetupActivity, AppSettingActivity::class.java)
    val actualIntent = Shadows.shadowOf(application).nextStartedActivity
    Assert.assertEquals(expectedIntent.component, actualIntent.component)
  }

  @Test
  fun testNavigateToHomeShouldVerifyExpectedIntent() {
    pinSetupActivity.pinViewModel.onPinConfirmed()
    Assert.assertEquals("1234", testPin.value.toString())
    Assert.assertEquals(false, pinSetupActivity.pinViewModel.showError.value)
  }

  @Test
  fun testNavigateToLoginShouldVerifyExpectedIntent() {
    pinSetupActivity.pinViewModel.onMenuLoginClicked(FORCE_LOGIN_VIA_USERNAME_FROM_PIN_SETUP)
    val expectedIntent = Intent(pinSetupActivity, LoginActivity::class.java)
    val actualIntent = Shadows.shadowOf(application).nextStartedActivity
    Assert.assertEquals(expectedIntent.component, actualIntent.component)
  }

  @Test
  fun testMoveToHome() {
    ReflectionHelpers.callInstanceMethod<Any>(pinSetupActivity, "moveToHome")
    Assert.assertNotNull(sharedPreferencesHelper.read(FORCE_LOGIN_VIA_USERNAME, false))
  }

  override fun getActivity(): Activity {
    return pinSetupActivity
  }
}