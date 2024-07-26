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

package org.smartregister.fhircore.quest.ui.login

import androidx.work.OneTimeWorkRequest
import androidx.work.WorkManager
import androidx.work.WorkRequest
import dagger.hilt.android.testing.HiltAndroidRule
import dagger.hilt.android.testing.HiltAndroidTest
import io.mockk.CapturingSlot
import io.mockk.coEvery
import io.mockk.every
import io.mockk.just
import io.mockk.mockk
import io.mockk.runs
import io.mockk.slot
import io.mockk.spyk
import io.mockk.verify
import java.net.SocketTimeoutException
import java.net.UnknownHostException
import javax.inject.Inject
import kotlin.test.assertEquals
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.runBlocking
import kotlinx.coroutines.test.advanceUntilIdle
import kotlinx.coroutines.test.runTest
import okhttp3.internal.http.RealResponseBody
import org.hl7.fhir.r4.model.Bundle
import org.hl7.fhir.r4.model.CareTeam
import org.hl7.fhir.r4.model.Group
import org.hl7.fhir.r4.model.Identifier
import org.hl7.fhir.r4.model.Location
import org.hl7.fhir.r4.model.Organization
import org.hl7.fhir.r4.model.OrganizationAffiliation
import org.hl7.fhir.r4.model.Practitioner
import org.hl7.fhir.r4.model.PractitionerRole
import org.hl7.fhir.r4.model.ResourceType
import org.hl7.fhir.r4.model.StringType
import org.junit.After
import org.junit.Assert
import org.junit.Before
import org.junit.Rule
import org.junit.Test
import org.robolectric.annotation.Config
import org.smartregister.fhircore.engine.configuration.app.ConfigService
import org.smartregister.fhircore.engine.data.local.DefaultRepository
import org.smartregister.fhircore.engine.data.remote.auth.KeycloakService
import org.smartregister.fhircore.engine.data.remote.fhir.resource.FhirResourceDataSource
import org.smartregister.fhircore.engine.data.remote.fhir.resource.FhirResourceService
import org.smartregister.fhircore.engine.data.remote.model.response.OAuthResponse
import org.smartregister.fhircore.engine.data.remote.model.response.UserInfo
import org.smartregister.fhircore.engine.data.remote.shared.TokenAuthenticator
import org.smartregister.fhircore.engine.util.DispatcherProvider
import org.smartregister.fhircore.engine.util.SecureSharedPreference
import org.smartregister.fhircore.engine.util.SharedPreferenceKey
import org.smartregister.fhircore.engine.util.SharedPreferencesHelper
import org.smartregister.fhircore.engine.util.extension.isDeviceOnline
import org.smartregister.fhircore.engine.util.test.HiltActivityForTest
import org.smartregister.fhircore.quest.app.fakes.Faker
import org.smartregister.fhircore.quest.robolectric.AccountManagerShadow
import org.smartregister.fhircore.quest.robolectric.RobolectricTest
import org.smartregister.model.location.LocationHierarchy
import org.smartregister.model.practitioner.FhirPractitionerDetails
import org.smartregister.model.practitioner.PractitionerDetails
import retrofit2.HttpException
import retrofit2.Response

@ExperimentalCoroutinesApi
@HiltAndroidTest
@Config(shadows = [AccountManagerShadow::class])
internal class LoginViewModelTest : RobolectricTest() {

  @get:Rule(order = 0) val hiltRule = HiltAndroidRule(this)

  @Inject lateinit var sharedPreferencesHelper: SharedPreferencesHelper

  @Inject lateinit var secureSharedPreference: SecureSharedPreference

  @Inject lateinit var configService: ConfigService

  @Inject lateinit var dispatcherProvider: DispatcherProvider
  private lateinit var loginViewModel: LoginViewModel
  private lateinit var fhirResourceDataSource: FhirResourceDataSource
  private val accountAuthenticator: AccountAuthenticator = mockk()
  private val configurationRegistry = Faker.buildTestConfigurationRegistry()
  private val defaultRepository: DefaultRepository = mockk(relaxed = true)
  private val resourceService: FhirResourceService = mockk()
  private val tokenAuthenticator = mockk<TokenAuthenticator>()
  private val keycloakService = mockk<KeycloakService>()
  private val fhirResourceService = mockk<FhirResourceService>()
  private val thisUsername = "demo"
  private val thisPassword = "paswd"
  private val workManager = mockk<WorkManager>()

  @Before
  fun setUp() {
    hiltRule.inject()
    fhirResourceDataSource = spyk(FhirResourceDataSource(resourceService))

    every { workManager.enqueue(any<WorkRequest>()) } returns mockk()

    loginViewModel =
      spyk(
        LoginViewModel(
          configurationRegistry = configurationRegistry,
          accountAuthenticator = accountAuthenticator,
          sharedPreferences = sharedPreferencesHelper,
          defaultRepository = defaultRepository,
          configService = configService,
          keycloakService = keycloakService,
          fhirResourceService = fhirResourceService,
          tokenAuthenticator = tokenAuthenticator,
          secureSharedPreference = secureSharedPreference,
          dispatcherProvider = dispatcherProvider,
          workManager = workManager,
        ),
      )
  }

  @After
  override fun tearDown() {
    secureSharedPreference.deleteCredentials()
    super.tearDown()
  }

  @Test
  fun testOnUsernameUpdated() {
    loginViewModel.onUsernameUpdated("demo")
    Assert.assertNull(loginViewModel.loginErrorState.value)
    Assert.assertEquals("demo", loginViewModel.username.value)
  }

  @Test
  fun testOnPasswordUpdated() {
    loginViewModel.onPasswordUpdated("12345")
    Assert.assertNull(loginViewModel.loginErrorState.value)
    Assert.assertEquals("12345", loginViewModel.password.value)
  }

  @Test
  fun testSuccessfulOfflineLogin() {
    val activity = mockedActivity()
    updateCredentials()
    secureSharedPreference.saveMultiCredentials(thisUsername, this.thisPassword.toCharArray())

    every {
      accountAuthenticator.validateLoginCredentials(thisUsername, thisPassword.toCharArray())
    } returns true

    every {
      tokenAuthenticator.validateSavedLoginCredentials(thisUsername, thisPassword.toCharArray())
    } returns true

    loginViewModel.login(activity)

    Assert.assertNull(loginViewModel.loginErrorState.value)
    Assert.assertFalse(loginViewModel.showProgressBar.value!!)
    Assert.assertTrue(loginViewModel.navigateToHome.value!!)
  }

  @Test
  fun testUnSuccessfulOfflineLogin() {
    val activity = mockedActivity()

    updateCredentials()
    secureSharedPreference.saveMultiCredentials(thisUsername, this.thisPassword.toCharArray())

    every {
      accountAuthenticator.validateLoginCredentials(thisUsername, thisPassword.toCharArray())
    } returns false

    every {
      tokenAuthenticator.validateSavedLoginCredentials(thisUsername, thisPassword.toCharArray())
    } returns false

    loginViewModel.login(activity)

    Assert.assertNotNull(loginViewModel.loginErrorState.value)
    Assert.assertFalse(loginViewModel.showProgressBar.value!!)
    Assert.assertEquals(LoginErrorState.INVALID_CREDENTIALS, loginViewModel.loginErrorState.value!!)
  }

  @Test
  fun testSuccessfulOnlineLoginWithActiveSessionWithSavedPractitionerDetails() {
    updateCredentials()
    coEvery {
      tokenAuthenticator.fetchAccessToken(thisUsername, thisPassword.toCharArray())
    } returns
      Result.success(
        OAuthResponse(
          accessToken = "very_new_top_of_the_class_access_token",
          tokenType = "you_guess_it",
          refreshToken = "another_very_refreshing_token",
          refreshExpiresIn = 540000,
          scope = "open_my_guy",
        ),
      )
    secureSharedPreference.saveMultiCredentials(thisUsername, thisPassword.toCharArray())
    val practitioner =
      practitionerDetails().apply { fhirPractitionerDetails.id = "$thisUsername-practitioner-id" }
    sharedPreferencesHelper.write(
      SharedPreferenceKey.PRACTITIONER_DETAILS.name,
      PractitionerDetails(),
    )
    sharedPreferencesHelper.write(
      SharedPreferenceKey.PRACTITIONER_ID.name,
      practitioner.fhirPractitionerDetails?.id,
    )
    every { tokenAuthenticator.sessionActive() } returns true

    loginViewModel.login(mockedActivity(isDeviceOnline = true))
    Assert.assertFalse(loginViewModel.showProgressBar.value!!)
    Assert.assertTrue(loginViewModel.navigateToHome.value!!)
  }

  @Test
  fun testSuccessfulOnlineLoginWithActiveSessionWithNoPractitionerDetailsSaved() {
    updateCredentials()
    every { tokenAuthenticator.sessionActive() } returns true
    loginViewModel.login(mockedActivity(isDeviceOnline = true))
    Assert.assertFalse(loginViewModel.navigateToHome.value!!)
  }

  @Test
  fun testSuccessfulOnlineLoginForDifferentUserInTheSameLocationWithSyncStrategyLocation() =
    runTest {
      updateCredentials()
      secureSharedPreference.saveMultiCredentials("nativeUser", "n4t1veP5wd".toCharArray())
      sharedPreferencesHelper.write(ResourceType.Location.name, listOf("test-location"))
      sharedPreferencesHelper.write(
        SharedPreferenceKey.PRACTITIONER_ID.name,
        "nativeUser-practitioner-id",
      )

      coEvery {
        tokenAuthenticator.fetchAccessToken(thisUsername, thisPassword.toCharArray())
      } returns
        Result.success(
          OAuthResponse(
            accessToken = "very_new_top_of_the_class_access_token",
            tokenType = "you_guess_it",
            refreshToken = "another_very_refreshing_token",
            refreshExpiresIn = 540000,
            scope = "open_my_guy",
          ),
        )
      coEvery { keycloakService.fetchUserInfo() } returns
        Response.success(UserInfo(keycloakUuid = "awesome_uuid"))
      val bundle =
        Bundle().apply {
          addEntry(
            Bundle.BundleEntryComponent().apply {
              resource =
                practitionerDetails().apply {
                  fhirPractitionerDetails =
                    FhirPractitionerDetails().apply {
                      practitionerId = StringType("my-test-practitioner-id")
                      locations = mutableListOf(Location().apply { id = "test-location" })
                    }
                }
            },
          )
        }
      coEvery { fhirResourceService.getResource(any()) } returns bundle
      every { tokenAuthenticator.sessionActive() } returns false

      loginViewModel.login(mockedActivity(isDeviceOnline = true))
      advanceUntilIdle()

      Assert.assertFalse(loginViewModel.showProgressBar.value!!)
      Assert.assertTrue(loginViewModel.navigateToHome.value!!)

      // Login was successful savePractitionerDetails was called
      val practitionerDetailsSlot = slot<PractitionerDetails>()
      verify {
        loginViewModel.savePractitionerDetails(capture(practitionerDetailsSlot), any(), any())
      }

      Assert.assertNotNull(practitionerDetailsSlot.captured)
    }

  @Test
  fun testUnSuccessfulOnlineLoginForDifferentUserInDifferentLocationWithSyncStrategyLocation() {
    updateCredentials()
    secureSharedPreference.saveMultiCredentials("nativeUser", "n4t1veP5wd".toCharArray())
    sharedPreferencesHelper.write(ResourceType.Location.name, listOf("test-location"))
    sharedPreferencesHelper.write(
      SharedPreferenceKey.PRACTITIONER_ID.name,
      "nativeUser-practitioner-id",
    )

    coEvery {
      tokenAuthenticator.fetchAccessToken(thisUsername, thisPassword.toCharArray())
    } returns
      Result.success(
        OAuthResponse(
          accessToken = "very_new_top_of_the_class_access_token",
          tokenType = "you_guess_it",
          refreshToken = "another_very_refreshing_token",
          refreshExpiresIn = 540000,
          scope = "open_my_guy",
        ),
      )
    coEvery { keycloakService.fetchUserInfo() } returns
      Response.success(UserInfo(keycloakUuid = "awesome_uuid"))
    val bundle =
      Bundle().apply {
        addEntry(
          Bundle.BundleEntryComponent().apply {
            resource =
              practitionerDetails().apply {
                fhirPractitionerDetails =
                  FhirPractitionerDetails().apply {
                    practitionerId = StringType("my-test-practitioner-id")
                    locations = mutableListOf(Location().apply { id = "another-test-location" })
                  }
              }
          },
        )
      }
    coEvery { fhirResourceService.getResource(any()) } returns bundle
    every { tokenAuthenticator.sessionActive() } returns false

    loginViewModel.login(mockedActivity(isDeviceOnline = true))
    Assert.assertEquals(
      LoginErrorState.ERROR_MATCHING_SYNC_STRATEGY,
      loginViewModel.loginErrorState.value!!,
    )
  }

  @Test
  fun testSuccessfulNewOnlineLoginShouldFetchUserInfoAndPractitioner() {
    updateCredentials()
    secureSharedPreference.saveMultiCredentials(thisUsername, thisPassword.toCharArray())
    every { tokenAuthenticator.sessionActive() } returns false
    coEvery {
      tokenAuthenticator.fetchAccessToken(thisUsername, thisPassword.toCharArray())
    } returns
      Result.success(
        OAuthResponse(
          accessToken = "very_new_top_of_the_class_access_token",
          tokenType = "you_guess_it",
          refreshToken = "another_very_refreshing_token",
          refreshExpiresIn = 540000,
          scope = "open_my_guy",
        ),
      )

    // Mock result for fetch user info via keycloak endpoint
    coEvery { keycloakService.fetchUserInfo() } returns
      Response.success(UserInfo(keycloakUuid = "awesome_uuid"))

    // Mock result for retrieving a FHIR resource using user's keycloak uuid
    val bundle = Bundle()
    val bundleEntry =
      Bundle.BundleEntryComponent().apply {
        resource =
          practitionerDetails().apply {
            fhirPractitionerDetails =
              FhirPractitionerDetails().apply {
                practitionerId = StringType("my-test-practitioner-id")
              }
          }
      }
    coEvery { fhirResourceService.getResource(any()) } returns bundle.addEntry(bundleEntry)

    loginViewModel.login(mockedActivity(isDeviceOnline = true))

    Assert.assertFalse(loginViewModel.showProgressBar.value!!)
    Assert.assertTrue(loginViewModel.navigateToHome.value!!)

    // Login was successful savePractitionerDetails was called
    val practitionerDetailsSlot = slot<PractitionerDetails>()
    verify {
      loginViewModel.savePractitionerDetails(capture(practitionerDetailsSlot), any(), any())
    }

    Assert.assertNotNull(practitionerDetailsSlot.captured)
  }

  @Test
  fun testUnSuccessfulOnlineLoginUserInfoNotFetched() {
    updateCredentials()
    secureSharedPreference.saveMultiCredentials(thisUsername, thisPassword.toCharArray())
    every { tokenAuthenticator.sessionActive() } returns false
    coEvery {
      tokenAuthenticator.fetchAccessToken(thisUsername, thisPassword.toCharArray())
    } returns
      Result.success(
        OAuthResponse(
          accessToken = "very_new_top_of_the_class_access_token",
          tokenType = "you_guess_it",
          refreshToken = "another_very_refreshing_token",
          refreshExpiresIn = 540000,
          scope = "open_my_guy",
        ),
      )

    // Mock result for fetch user info via keycloak endpoint
    coEvery { keycloakService.fetchUserInfo() } returns
      Response.error(400, mockk<RealResponseBody>(relaxed = true))

    // Mock result for retrieving a FHIR resource using user's keycloak uuid
    coEvery { fhirResourceService.getResource(any()) } returns Bundle()

    loginViewModel.login(mockedActivity(isDeviceOnline = true))

    Assert.assertFalse(loginViewModel.showProgressBar.value!!)
    Assert.assertEquals(LoginErrorState.ERROR_FETCHING_USER, loginViewModel.loginErrorState.value!!)
  }

  @Test
  fun testUnSuccessfulOnlineLoginWhenAccessTokenNotReceived() {
    updateCredentials()
    secureSharedPreference.saveMultiCredentials(thisUsername, thisPassword.toCharArray())
    every { tokenAuthenticator.sessionActive() } returns false
    coEvery {
      tokenAuthenticator.fetchAccessToken(thisUsername, thisPassword.toCharArray())
    } returns Result.failure(UnknownHostException())

    // Mock result for fetch user info via keycloak endpoint
    coEvery { keycloakService.fetchUserInfo() } returns
      Response.error(400, mockk<RealResponseBody>(relaxed = true))

    // Mock result for retrieving a FHIR resource using user's keycloak uuid
    coEvery { fhirResourceService.getResource(any()) } returns Bundle()

    loginViewModel.login(mockedActivity(isDeviceOnline = true))

    Assert.assertFalse(loginViewModel.showProgressBar.value!!)
    Assert.assertEquals(LoginErrorState.UNKNOWN_HOST, loginViewModel.loginErrorState.value!!)
  }

  @Test
  fun testLoginWhileOfflineWithNoUserCredentialsEmitsInvalidOfflineState() {
    updateCredentials()

    loginViewModel.login(mockedActivity(isDeviceOnline = false))

    Assert.assertFalse(loginViewModel.showProgressBar.value!!)
    Assert.assertEquals(
      LoginErrorState.INVALID_OFFLINE_STATE,
      loginViewModel.loginErrorState.value!!,
    )
  }

  @Test
  fun testUnsuccessfulOnlineLoginWithUnknownHostExceptionEmitsError() {
    updateCredentials()
    secureSharedPreference.saveMultiCredentials(thisUsername, thisPassword.toCharArray())
    every { tokenAuthenticator.sessionActive() } returns false
    coEvery {
      tokenAuthenticator.fetchAccessToken(thisUsername, thisPassword.toCharArray())
    } returns Result.failure(UnknownHostException())

    loginViewModel.login(mockedActivity(isDeviceOnline = true))

    Assert.assertFalse(loginViewModel.showProgressBar.value!!)
    Assert.assertEquals(LoginErrorState.UNKNOWN_HOST, loginViewModel.loginErrorState.value!!)
  }

  @Test
  fun testUnsuccessfulOnlineLoginWithHTTPHostExceptionCode400EmitsErrorFetchingUser() {
    updateCredentials()
    secureSharedPreference.saveMultiCredentials(thisUsername, thisPassword.toCharArray())
    every { tokenAuthenticator.sessionActive() } returns false

    coEvery {
      tokenAuthenticator.fetchAccessToken(thisUsername, thisPassword.toCharArray())
    } returns
      Result.failure(HttpException(Response.error<OAuthResponse>(400, mockk(relaxed = true))))

    loginViewModel.login(mockedActivity(isDeviceOnline = true))

    Assert.assertFalse(loginViewModel.showProgressBar.value!!)
    Assert.assertEquals(LoginErrorState.ERROR_FETCHING_USER, loginViewModel.loginErrorState.value!!)
  }

  @Test
  fun testUnsuccessfulOnlineLoginWithHTTPHostExceptionCode401EmitsInvalidCredentialsError() {
    updateCredentials()
    secureSharedPreference.saveMultiCredentials(thisUsername, thisPassword.toCharArray())
    every { tokenAuthenticator.sessionActive() } returns false

    coEvery {
      tokenAuthenticator.fetchAccessToken(thisUsername, thisPassword.toCharArray())
    } returns
      Result.failure(HttpException(Response.error<OAuthResponse>(401, mockk(relaxed = true))))

    loginViewModel.login(mockedActivity(isDeviceOnline = true))

    Assert.assertFalse(loginViewModel.showProgressBar.value!!)
    Assert.assertEquals(LoginErrorState.INVALID_CREDENTIALS, loginViewModel.loginErrorState.value!!)
  }

  @Test
  fun `loginViewModel#fetchPractitioner() should call onFetchUserInfo with exception when SocketTimeoutException is thrown`() {
    updateCredentials()
    secureSharedPreference.saveMultiCredentials(thisUsername, thisPassword.toCharArray())
    every { tokenAuthenticator.sessionActive() } returns false
    coEvery { keycloakService.fetchUserInfo() }.throws(SocketTimeoutException())

    val fetchUserInfoCallback: (Result<UserInfo>) -> Unit = mockk(relaxed = true)
    val fetchPractitionerCallback: (Result<Bundle>, UserInfo?) -> Unit = mockk(relaxed = true)
    val userInfoSlot = slot<Result<UserInfo>>()

    runBlocking {
      loginViewModel.fetchPractitioner(fetchUserInfoCallback, fetchPractitionerCallback)
    }

    verify { fetchUserInfoCallback(capture(userInfoSlot)) }
    verify(exactly = 0) { fetchPractitionerCallback(any(), any()) }

    Assert.assertTrue(
      getCapturedUserInfoResult(userInfoSlot).exceptionOrNull() is SocketTimeoutException,
    )
  }

  @Test
  fun `loginViewModel#fetchPractitioner() should call onFetchUserInfo with exception when UnknownHostException is thrown`() {
    updateCredentials()
    secureSharedPreference.saveMultiCredentials(thisUsername, thisPassword.toCharArray())
    every { tokenAuthenticator.sessionActive() } returns false
    coEvery { keycloakService.fetchUserInfo() }.throws(UnknownHostException())

    val fetchUserInfoCallback: (Result<UserInfo>) -> Unit = mockk(relaxed = true)
    val fetchPractitionerCallback: (Result<Bundle>, UserInfo?) -> Unit = mockk(relaxed = true)
    val userInfoSlot = slot<Result<UserInfo>>()

    runBlocking {
      loginViewModel.fetchPractitioner(fetchUserInfoCallback, fetchPractitionerCallback)
    }

    verify { fetchUserInfoCallback(capture(userInfoSlot)) }
    verify(exactly = 0) { fetchPractitionerCallback(any(), any()) }

    Assert.assertTrue(
      getCapturedUserInfoResult(userInfoSlot).exceptionOrNull() is UnknownHostException,
    )
  }

  @Test
  fun `loginViewModel#fetchPractitioner() should call onFetchPractitioner with exception when UnknownHostException is thrown`() {
    updateCredentials()
    secureSharedPreference.saveMultiCredentials(thisUsername, thisPassword.toCharArray())
    every { tokenAuthenticator.sessionActive() } returns false
    coEvery { keycloakService.fetchUserInfo() } returns
      Response.success(UserInfo(keycloakUuid = "awesome_uuid"))
    coEvery { fhirResourceService.getResource(any()) }.throws(UnknownHostException())

    val fetchUserInfoCallback: (Result<UserInfo>) -> Unit = mockk(relaxed = true)
    val fetchPractitionerCallback: (Result<Bundle>, UserInfo?) -> Unit = mockk(relaxed = true)
    val bundleSlot = slot<Result<Bundle>>()
    val userInfoSlot = slot<Result<UserInfo>>()

    runBlocking {
      loginViewModel.fetchPractitioner(fetchUserInfoCallback, fetchPractitionerCallback)
    }

    verify { fetchUserInfoCallback(capture(userInfoSlot)) }
    verify { fetchPractitionerCallback(capture(bundleSlot), any()) }

    Assert.assertTrue(userInfoSlot.captured.isSuccess)
    Assert.assertEquals(
      "awesome_uuid",
      getCapturedUserInfoResult(userInfoSlot).getOrThrow().keycloakUuid,
    )
    Assert.assertTrue(getCapturedBundleResult(bundleSlot).exceptionOrNull() is UnknownHostException)
  }

  @Test
  fun `loginViewModel#fetchPractitioner() should call onFetchPractitioner with exception when SocketTimeoutException is thrown`() {
    updateCredentials()
    secureSharedPreference.saveMultiCredentials(thisUsername, thisPassword.toCharArray())
    every { tokenAuthenticator.sessionActive() } returns false
    coEvery { keycloakService.fetchUserInfo() } returns
      Response.success(UserInfo(keycloakUuid = "awesome_uuid"))
    coEvery { fhirResourceService.getResource(any()) }.throws(SocketTimeoutException())

    val fetchUserInfoCallback: (Result<UserInfo>) -> Unit = mockk(relaxed = true)
    val fetchPractitionerCallback: (Result<Bundle>, UserInfo?) -> Unit = mockk(relaxed = true)
    val bundleSlot = slot<Result<Bundle>>()
    val userInfoSlot = slot<Result<UserInfo>>()

    runBlocking {
      loginViewModel.fetchPractitioner(fetchUserInfoCallback, fetchPractitionerCallback)
    }

    verify { fetchUserInfoCallback(capture(userInfoSlot)) }
    verify { fetchPractitionerCallback(capture(bundleSlot), any()) }

    Assert.assertTrue(userInfoSlot.captured.isSuccess)
    Assert.assertEquals(
      "awesome_uuid",
      getCapturedUserInfoResult(userInfoSlot).getOrThrow().keycloakUuid,
    )
    Assert.assertTrue(
      getCapturedBundleResult(bundleSlot).exceptionOrNull() is SocketTimeoutException,
    )
  }

  private fun practitionerDetails(): PractitionerDetails {
    return PractitionerDetails().apply {
      fhirPractitionerDetails =
        FhirPractitionerDetails().apply {
          organizations =
            listOf(
              Organization().apply {
                name = "the.org"
                id = "the.org.id"
              },
            )
        }
    }
  }

  @Test
  fun testSavePractitionerDetailsChaRole() {
    coEvery { defaultRepository.createRemote(true, any()) } just runs
    loginViewModel.savePractitionerDetails(
      practitionerDetails().apply {
        fhirPractitionerDetails =
          FhirPractitionerDetails().apply { practitionerId = StringType("my-test-practitioner-id") }
      },
      UserInfo(),
    ) {}
    Assert.assertNotNull(
      sharedPreferencesHelper.read(SharedPreferenceKey.PRACTITIONER_DETAILS.name),
    )
  }

  @Test
  fun testSavePractitionerDetailsChaRoleWithIdentifier() {
    coEvery { defaultRepository.createRemote(true, any()) } just runs
    loginViewModel.savePractitionerDetails(
      practitionerDetails().apply {
        fhirPractitionerDetails =
          FhirPractitionerDetails().apply {
            practitioners =
              listOf(
                Practitioner().apply {
                  identifier =
                    listOf(
                      Identifier().apply {
                        use = Identifier.IdentifierUse.SECONDARY
                        value = "cha"
                      },
                    )
                },
              )
          }
      },
      UserInfo(
        keycloakUuid = "cha",
      ),
    ) {}
    Assert.assertNotNull(
      sharedPreferencesHelper.read(SharedPreferenceKey.PRACTITIONER_DETAILS.name),
    )
  }

  @Test
  fun testSavePractitionerDetailsSupervisorRole() {
    coEvery { defaultRepository.createRemote(false, any()) } just runs
    loginViewModel.savePractitionerDetails(
      practitionerDetails().apply {
        fhirPractitionerDetails =
          FhirPractitionerDetails().apply {
            practitioners =
              listOf(
                Practitioner().apply {
                  identifier.add(
                    Identifier().apply {
                      use = Identifier.IdentifierUse.SECONDARY
                      value = "my-test-practitioner-id"
                    },
                  )
                },
              )
            careTeams = listOf(CareTeam().apply { id = "my-care-team-id" })
            organizations = listOf(Organization().apply { id = "my-organization-id" })
            locations = listOf(Location().apply { id = "my-organization-id" })
            locationHierarchyList =
              listOf(LocationHierarchy().apply { id = "my-location-hierarchy-id" })
            groups = listOf(Group().apply { id = "my-group-id" })
            practitionerRoles = listOf(PractitionerRole().apply { id = "my-practitioner-role-id" })
            organizationAffiliations =
              listOf(
                OrganizationAffiliation().apply { id = "my-organization-affiliation-id" },
              )
          }
      },
      UserInfo().apply { keycloakUuid = "my-test-practitioner-id" },
    ) {}
    Assert.assertNotNull(
      sharedPreferencesHelper.read(SharedPreferenceKey.PRACTITIONER_DETAILS.name),
    )
  }

  @Test
  fun testForgotPasswordLoadsContact() {
    loginViewModel.forgotPassword()
    Assert.assertEquals("tel:0123456789", loginViewModel.launchDialPad.value)
  }

  @Test
  fun testUpdateNavigateShouldUpdateLiveData() {
    loginViewModel.updateNavigateHome(true)
    Assert.assertNotNull(loginViewModel.navigateToHome.value)
    Assert.assertTrue(loginViewModel.navigateToHome.value!!)
  }

  @Test
  fun testIsPinEnableShouldReturnTrue() {
    Assert.assertTrue(loginViewModel.isPinEnabled())
  }

  @Test
  fun testDownloadNowWorkflowConfigs() {
    loginViewModel.downloadNowWorkflowConfigs()
    verify { workManager.enqueue(any<OneTimeWorkRequest>()) }
  }

  @Test
  fun testWritePractitionerDetailsToShredPrefSavesPractitionerLocationId() {
    val locationId = "ABCD123"
    loginViewModel.writePractitionerDetailsToShredPref(
      careTeams = listOf(""),
      careTeam = listOf(""),
      organization = listOf(""),
      organizations = listOf(""),
      location = listOf(""),
      locations = listOf(locationId),
      fhirPractitionerDetails = PractitionerDetails(),
      locationHierarchies = listOf(LocationHierarchy()),
    )
    assertEquals(
      locationId,
      sharedPreferencesHelper.read(SharedPreferenceKey.PRACTITIONER_LOCATION_ID.name),
    )
  }

  private fun updateCredentials() {
    loginViewModel.run {
      onUsernameUpdated(thisUsername)
      onPasswordUpdated(thisPassword)
    }
  }

  private fun mockedActivity(isDeviceOnline: Boolean = false): HiltActivityForTest {
    val activity = mockk<HiltActivityForTest>(relaxed = true)
    every { activity.isDeviceOnline() } returns isDeviceOnline
    return activity
  }

  private fun getCapturedBundleResult(bundleSlot: CapturingSlot<Result<Bundle>>): Result<Bundle> {
    val capturedResult = (bundleSlot.captured as Result<Any>).getOrNull()
    return capturedResult as Result<Bundle>
  }

  private fun getCapturedUserInfoResult(
    bundleSlot: CapturingSlot<Result<UserInfo>>,
  ): Result<UserInfo> {
    val capturedResult = (bundleSlot.captured as Result<Any>).getOrNull()
    return capturedResult as Result<UserInfo>
  }
}
