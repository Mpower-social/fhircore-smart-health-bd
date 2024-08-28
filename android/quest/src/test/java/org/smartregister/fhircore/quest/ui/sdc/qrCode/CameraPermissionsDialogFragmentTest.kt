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

package org.smartregister.fhircore.quest.ui.sdc.qrCode

import android.Manifest
import android.app.Application
import androidx.fragment.app.commitNow
import androidx.test.core.app.ApplicationProvider
import dagger.hilt.android.testing.HiltAndroidRule
import dagger.hilt.android.testing.HiltAndroidTest
import io.mockk.spyk
import io.mockk.verify
import org.junit.Before
import org.junit.Rule
import org.junit.Test
import org.robolectric.Shadows.shadowOf
import org.robolectric.util.ReflectionHelpers
import org.smartregister.fhircore.quest.hiltActivityForTestScenario
import org.smartregister.fhircore.quest.robolectric.RobolectricTest

@HiltAndroidTest
class CameraPermissionsDialogFragmentTest : RobolectricTest() {
  @get:Rule(order = 0) var hiltAndroidRule = HiltAndroidRule(this)

  private val applicationContext = ApplicationProvider.getApplicationContext<Application>()

  @Before
  fun setUp() {
    hiltAndroidRule.inject()
  }

  @Test
  fun onResumeShouldNotLaunchCameraPermissionRequestWhenCameraPermissionGranted() {
    shadowOf(applicationContext).grantPermissions(Manifest.permission.CAMERA)
    hiltActivityForTestScenario().use { scenario ->
      scenario.onActivity { activity ->
        val qrCodeFragment = CameraPermissionsDialogFragment()
        val cameraPermissionRequestSpy = spyk(qrCodeFragment.cameraPermissionRequest)
        ReflectionHelpers.setField(
          qrCodeFragment,
          "cameraPermissionRequest",
          cameraPermissionRequestSpy,
        )

        activity.supportFragmentManager.commitNow {
          add(qrCodeFragment, CameraPermissionsDialogFragmentTest::class.java.simpleName)
        }
        verify(exactly = 0) { cameraPermissionRequestSpy.launch(Manifest.permission.CAMERA) }
      }
    }
  }

  @Test
  fun onResumeShouldLaunchCameraPermissionRequestWhenPermissionDenied() {
    shadowOf(applicationContext).denyPermissions(Manifest.permission.CAMERA)
    hiltActivityForTestScenario().use { scenario ->
      scenario.onActivity { activity ->
        val qrCodeFragment = CameraPermissionsDialogFragment()
        val cameraPermissionRequestSpy = spyk(qrCodeFragment.cameraPermissionRequest)
        ReflectionHelpers.setField(
          qrCodeFragment,
          "cameraPermissionRequest",
          cameraPermissionRequestSpy,
        )

        activity.supportFragmentManager.commitNow {
          add(qrCodeFragment, CameraPermissionsDialogFragmentTest::class.java.simpleName)
        }
        verify { cameraPermissionRequestSpy.launch(Manifest.permission.CAMERA) }
      }
    }
  }
}
