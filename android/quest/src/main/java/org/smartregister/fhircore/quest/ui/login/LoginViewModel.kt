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

import android.content.Context
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import androidx.work.Constraints
import androidx.work.NetworkType
import androidx.work.OneTimeWorkRequest
import androidx.work.OneTimeWorkRequestBuilder
import androidx.work.WorkManager
import dagger.hilt.android.lifecycle.HiltViewModel
import io.sentry.Sentry
import io.sentry.protocol.User
import java.net.SocketTimeoutException
import java.net.UnknownHostException
import javax.inject.Inject
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import org.hl7.fhir.r4.model.Bundle as FhirR4ModelBundle
import org.smartregister.fhircore.engine.configuration.ConfigType
import org.smartregister.fhircore.engine.configuration.ConfigurationRegistry
import org.smartregister.fhircore.engine.configuration.app.ApplicationConfiguration
import org.smartregister.fhircore.engine.configuration.app.ConfigService
import org.smartregister.fhircore.engine.data.local.DefaultRepository
import org.smartregister.fhircore.engine.data.remote.auth.KeycloakService
import org.smartregister.fhircore.engine.data.remote.fhir.resource.FhirResourceService
import org.smartregister.fhircore.engine.data.remote.model.response.UserInfo
import org.smartregister.fhircore.engine.data.remote.shared.TokenAuthenticator
import org.smartregister.fhircore.engine.datastore.PreferencesDataStore
import org.smartregister.fhircore.engine.datastore.ProtoDataStore
import org.smartregister.fhircore.engine.util.DispatcherProvider
import org.smartregister.fhircore.engine.util.SecureSharedPreference
import org.smartregister.fhircore.engine.util.clearPasswordInMemory
import org.smartregister.fhircore.engine.util.extension.extractLogicalIdUuid
import org.smartregister.fhircore.engine.util.extension.getActivity
import org.smartregister.fhircore.engine.util.extension.isDeviceOnline
import org.smartregister.fhircore.engine.util.extension.practitionerEndpointUrl
import org.smartregister.fhircore.engine.util.extension.valueToString
import org.smartregister.fhircore.quest.BuildConfig
import org.smartregister.model.location.LocationHierarchy
import org.smartregister.model.practitioner.PractitionerDetails
import retrofit2.HttpException
import timber.log.Timber

@HiltViewModel
class LoginViewModel
@Inject
constructor(
  val configurationRegistry: ConfigurationRegistry,
  val accountAuthenticator: AccountAuthenticator,
  val preferencesDataStore: PreferencesDataStore,
  val protoDataStore: ProtoDataStore,
  val secureSharedPreference: SecureSharedPreference,
  val defaultRepository: DefaultRepository,
  val configService: ConfigService,
  val keycloakService: KeycloakService,
  val fhirResourceService: FhirResourceService,
  val tokenAuthenticator: TokenAuthenticator,
  val dispatcherProvider: DispatcherProvider,
  val workManager: WorkManager,
) : ViewModel() {

  private val _launchDialPad: MutableLiveData<String?> = MutableLiveData(null)
  val launchDialPad
    get() = _launchDialPad

  private val _navigateToHome = MutableLiveData(false)
  val navigateToHome: LiveData<Boolean>
    get() = _navigateToHome

  private val _username = MutableLiveData("")
  val username: LiveData<String>
    get() = _username

  private val _password = MutableLiveData("")
  val password: LiveData<String>
    get() = _password

  private val _loginErrorState = MutableLiveData<LoginErrorState?>()
  val loginErrorState: LiveData<LoginErrorState?>
    get() = _loginErrorState

  private val _dataMigrationInProgress = MutableLiveData(false)
  val dataMigrationInProgress: LiveData<Boolean>
    get() = _dataMigrationInProgress

  private val _showProgressBar = MutableLiveData(false)
  val showProgressBar
    get() = _showProgressBar

  val applicationConfiguration: ApplicationConfiguration by lazy {
    configurationRegistry.retrieveConfiguration(ConfigType.Application)
  }

  fun onUsernameUpdated(username: String) {
    _loginErrorState.postValue(null)
    _username.value = username
  }

  fun onPasswordUpdated(password: String) {
    _loginErrorState.postValue(null)
    _password.value = password
  }

  fun login(context: Context) {
    if (!username.value.isNullOrBlank() && !password.value.isNullOrBlank()) {
      _loginErrorState.postValue(null)
      _showProgressBar.postValue(true)

      val trimmedUsername = username.value!!.trim()
      val passwordAsCharArray = password.value!!.trim().toCharArray()

      viewModelScope.launch(dispatcherProvider.io()) {
        if (context.getActivity()!!.isDeviceOnline()) {
          fetchToken(
            username = trimmedUsername,
            password = passwordAsCharArray,
            onFetchUserInfo = {
              if (it.isFailure) {
                Timber.e(it.exceptionOrNull())
                _showProgressBar.postValue(false)
                _loginErrorState.postValue(LoginErrorState.ERROR_FETCHING_USER)
              }
            },
            onFetchPractitioner = { bundleResult, userInfo ->
              if (bundleResult.isSuccess) {
                val bundle = bundleResult.getOrDefault(FhirR4ModelBundle())
                savePractitionerDetails(bundle, userInfo) {
                  _showProgressBar.postValue(false)
                  updateNavigateHome(true)
                }
              } else {
                _showProgressBar.postValue(false)
                Timber.e(bundleResult.exceptionOrNull())
                Timber.e(bundleResult.getOrNull().valueToString())
                _loginErrorState.postValue(LoginErrorState.ERROR_FETCHING_USER)
              }
            },
          )
        } else {
          if (secureSharedPreference.retrieveSessionUsername() == null) {
            _showProgressBar.postValue(false)
            _loginErrorState.postValue(LoginErrorState.INVALID_OFFLINE_STATE)
          } else if (
            accountAuthenticator.validateLoginCredentials(
              trimmedUsername,
              passwordAsCharArray,
            )
          ) {
            try {
              // Configure Sentry scope
              Sentry.configureScope { scope ->
                scope.setTag("versionCode", BuildConfig.VERSION_CODE.toString())
                scope.setTag("versionName", BuildConfig.VERSION_NAME)
                scope.user = User().apply { username = trimmedUsername }
              }
            } catch (e: Exception) {
              Timber.e(e)
            }
            _showProgressBar.postValue(false)
            updateNavigateHome(true)
          } else {
            _showProgressBar.postValue(false)
            _loginErrorState.postValue(LoginErrorState.INVALID_CREDENTIALS)
          }
        }
        clearPasswordInMemory(passwordAsCharArray)
      }
    }
  }

  fun forgotPassword() {
    // TODO load supervisor contact e.g.
    _launchDialPad.value = "tel:0123456789"
  }

  fun updateNavigateHome(navigateHome: Boolean = true) {
    _navigateToHome.postValue(navigateHome)
  }

  fun isPinEnabled(): Boolean = applicationConfiguration.loginConfig.enablePin ?: false

  /**
   * This function checks first if the existing token is active otherwise fetches a new token, then
   * gets the user information from the authentication server. The id of the retrieved user is used
   * to obtain the [PractitionerDetails] from the FHIR server.
   */
  private suspend fun fetchToken(
    username: String,
    password: CharArray,
    onFetchUserInfo: (Result<UserInfo>) -> Unit,
    onFetchPractitioner: (Result<FhirR4ModelBundle>, UserInfo?) -> Unit,
  ) {
    val practitionerDetails =
      preferencesDataStore.readOnce<PractitionerDetails>(
        key = PreferencesDataStore.PRACTITIONER_DETAILS,
      )

    // encoding and decoding
    if (tokenAuthenticator.sessionActive() && practitionerDetails != null) {
      _showProgressBar.postValue(false)
      updateNavigateHome(true)
    } else {
      // Prevent user from logging in with different credentials
      val existingCredentials = secureSharedPreference.retrieveCredentials()
      if (
        existingCredentials != null &&
          !username.equals(
            existingCredentials.username,
            true,
          )
      ) {
        _showProgressBar.postValue(false)
        _loginErrorState.postValue(LoginErrorState.MULTI_USER_LOGIN_ATTEMPT)
      } else {
        tokenAuthenticator
          .fetchAccessToken(username, password)
          .onSuccess { fetchPractitioner(onFetchUserInfo, onFetchPractitioner) }
          .onFailure {
            _showProgressBar.postValue(false)
            var errorState = LoginErrorState.ERROR_FETCHING_USER

            if (it is HttpException) {
              when (it.code()) {
                401 -> errorState = LoginErrorState.INVALID_CREDENTIALS
              }
            } else if (it is UnknownHostException) {
              errorState = LoginErrorState.UNKNOWN_HOST
            }

            _loginErrorState.postValue(errorState)
            Timber.e(it)
          }
      }
    }
  }

  suspend fun fetchPractitioner(
    onFetchUserInfo: (Result<UserInfo>) -> Unit,
    onFetchPractitioner: (Result<FhirR4ModelBundle>, UserInfo?) -> Unit,
  ) {
    try {
      val userInfo = keycloakService.fetchUserInfo().body()
      if (userInfo != null && !userInfo.keycloakUuid.isNullOrEmpty()) {
        writeUserInfo(userInfo = userInfo)
        onFetchUserInfo(Result.success(userInfo))
        try {
          val bundle =
            fhirResourceService.getResource(
              url = userInfo.keycloakUuid!!.practitionerEndpointUrl(),
            )
          onFetchPractitioner(Result.success(bundle), userInfo)
        } catch (httpException: HttpException) {
          onFetchPractitioner(Result.failure(httpException), userInfo)
          Timber.e(httpException.response()?.errorBody()?.charStream()?.readText())
        } catch (unknownHostException: UnknownHostException) {
          onFetchPractitioner(Result.failure(unknownHostException), userInfo)
          Timber.e(
            unknownHostException,
            "An error occurred fetching the practitioner details",
          )
        } catch (socketTimeoutException: SocketTimeoutException) {
          onFetchPractitioner(Result.failure(socketTimeoutException), userInfo)
          Timber.e(
            socketTimeoutException,
            "An error occurred fetching the practitioner details",
          )
        } catch (exception: Exception) {
          onFetchPractitioner(Result.failure(exception), userInfo)
          Timber.e(exception, "An error occurred fetching the practitioner details")
        }
      } else {
        onFetchPractitioner(
          Result.failure(NullPointerException("Keycloak user is null. Failed to fetch user.")),
          userInfo,
        )
      }
    } catch (httpException: HttpException) {
      onFetchUserInfo(Result.failure(httpException))
    } catch (unknownHostException: UnknownHostException) {
      onFetchUserInfo(Result.failure(unknownHostException))
      Timber.e(unknownHostException, "An error occurred fetching the practitioner details")
    } catch (socketTimeoutException: SocketTimeoutException) {
      onFetchUserInfo(Result.failure(socketTimeoutException))
      Timber.e(socketTimeoutException, "An error occurred fetching the practitioner details")
    } catch (exception: Exception) {
      onFetchUserInfo(Result.failure(exception))
      Timber.e(exception, "An error occurred fetching the practitioner details")
    }
  }

  fun savePractitionerDetails(
    bundle: FhirR4ModelBundle,
    userInfo: UserInfo?,
    postProcess: () -> Unit,
  ) {
    if (bundle.entry.isNullOrEmpty()) return
    viewModelScope.launch {
      bundle.entry.forEach { entry ->
        val practitionerDetails = entry.resource as PractitionerDetails

        val careTeams = practitionerDetails.fhirPractitionerDetails?.careTeams ?: listOf()
        val organizations = practitionerDetails.fhirPractitionerDetails?.organizations ?: listOf()
        val locations = practitionerDetails.fhirPractitionerDetails?.locations ?: listOf()
        val practitioners = practitionerDetails.fhirPractitionerDetails?.practitioners ?: listOf()
        val practitionerId =
          practitionerDetails.fhirPractitionerDetails?.practitionerId.valueToString()
        val locationHierarchies =
          practitionerDetails.fhirPractitionerDetails?.locationHierarchyList ?: listOf()

        val careTeamIds =
          withContext(dispatcherProvider.io()) {
            defaultRepository.createRemote(false, *careTeams.toTypedArray()).run {
              careTeams.map { it.id.extractLogicalIdUuid() }
            }
          }
        val organizationIds =
          withContext(dispatcherProvider.io()) {
            defaultRepository.createRemote(false, *organizations.toTypedArray()).run {
              organizations.map { it.id.extractLogicalIdUuid() }
            }
          }
        val locationIds =
          withContext(dispatcherProvider.io()) {
            defaultRepository.createRemote(false, *locations.toTypedArray()).run {
              locations.map { it.id.extractLogicalIdUuid() }
            }
          }

        val locationNames =
          withContext(dispatcherProvider.io()) {
            defaultRepository.createRemote(false, *locations.toTypedArray()).run {
              locations.map { it.name }
            }
          }

        val careTeamNames =
          withContext(dispatcherProvider.io()) {
            defaultRepository.createRemote(false, *careTeams.toTypedArray()).run {
              careTeams.map { it.name }
            }
          }
        val organizationNames =
          withContext(dispatcherProvider.io()) {
            defaultRepository.createRemote(false, *organizations.toTypedArray()).run {
              organizations.map { it.name }
            }
          }

        defaultRepository.createRemote(false, *practitioners.toTypedArray())
        practitionerDetails.fhirPractitionerDetails?.groups?.toTypedArray()?.let {
          defaultRepository.createRemote(false, *it)
        }
        practitionerDetails.fhirPractitionerDetails?.practitionerRoles?.toTypedArray()?.let {
          defaultRepository.createRemote(false, *it)
        }
        practitionerDetails.fhirPractitionerDetails?.organizationAffiliations?.toTypedArray()?.let {
          defaultRepository.createRemote(false, *it)
        }

        if (practitionerId.isNotEmpty()) {
          writePractitionerDetailsToShredPref(
            careTeamNames = careTeamNames,
            organizationNames = organizationNames,
            locationNames = locationNames,
            fhirPractitionerDetails = practitionerDetails,
            careTeamIds = careTeamIds,
            organizationIds = organizationIds,
            locationIds = locationIds,
            locationHierarchies = locationHierarchies,
          )
        } else {
          // The assumption here is that only 1 practitioner is returned from the server in the
          // practitioner details
          practitioners.firstOrNull()?.identifier?.forEach { identifier ->
            if (
              identifier.hasUse() &&
                identifier.use == org.hl7.fhir.r4.model.Identifier.IdentifierUse.SECONDARY &&
                identifier.hasValue() &&
                identifier.value == userInfo!!.keycloakUuid
            ) {
              writePractitionerDetailsToShredPref(
                careTeamNames = careTeamNames,
                organizationNames = organizationNames,
                locationNames = locationNames,
                fhirPractitionerDetails = practitionerDetails,
                careTeamIds = careTeamIds,
                organizationIds = organizationIds,
                locationIds = locationIds,
                locationHierarchies = locationHierarchies,
              )
            }
          }
        }
      }
      postProcess()
    }
  }

  private fun writeUserInfo(
    userInfo: UserInfo?,
  ) {
    viewModelScope.launch {
      if (userInfo != null) {
        protoDataStore.writeUserInfo(userInfo)
      }
    }
  }

  private fun writePractitionerDetailsToShredPref(
    fhirPractitionerDetails: PractitionerDetails,
    careTeamIds: List<String>,
    careTeamNames: List<String>,
    locationIds: List<String>,
    locationNames: List<String>,
    locationHierarchies: List<LocationHierarchy>,
    organizationIds: List<String>,
    organizationNames: List<String>,
  ) {
    // TODO: Store the whole object in proto datastore instead of preferencesDataStore
    /*
      preferencesDataStore.write(
      SharedPreferenceKey.PRACTITIONER_DETAILS.name,
      fhirPractitionerDetails,
    )*/

    // Likely incorrect: verify how preferencesDataStore is able to accept the object, where does
    // the
    // serialization happen?
    viewModelScope.launch {
      preferencesDataStore.write(PreferencesDataStore.PRACTITIONER_DETAILS, fhirPractitionerDetails)
    }

    // Store the practitioner details components in the preferences datastore
    viewModelScope.launch {
      preferencesDataStore.write(
        PreferencesDataStore.PRACTITIONER_ID,
        fhirPractitionerDetails.fhirPractitionerDetails,
      )
      preferencesDataStore.write(
        PreferencesDataStore.CARE_TEAM_IDS,
        dataToStore = careTeamIds.joinToString(),
      )
      preferencesDataStore.write(
        PreferencesDataStore.CARE_TEAM_NAMES,
        dataToStore = careTeamNames.joinToString(),
      )
      preferencesDataStore.write(
        PreferencesDataStore.LOCATION_IDS,
        dataToStore = locationIds.joinToString(),
      )
      preferencesDataStore.write(
        PreferencesDataStore.LOCATION_NAMES,
        dataToStore = locationNames.joinToString(),
      )
      preferencesDataStore.write(
        PreferencesDataStore.ORGANIZATION_IDS,
        dataToStore = organizationIds.joinToString(),
      )
      preferencesDataStore.write(
        PreferencesDataStore.ORGANIZATION_NAMES,
        dataToStore = organizationNames.joinToString(),
      )
      preferencesDataStore.write(
        PreferencesDataStore.PRACTITIONER_LOCATION_HIERARCHIES,
        dataToStore = locationHierarchies.joinToString(),
      )
    }
  }

  fun downloadNowWorkflowConfigs() {
    val oneTimeWorkRequest: OneTimeWorkRequest =
      OneTimeWorkRequestBuilder<ConfigDownloadWorker>()
        .setConstraints(
          Constraints.Builder().setRequiredNetworkType(NetworkType.CONNECTED).build(),
        )
        .build()
    workManager.enqueue(oneTimeWorkRequest)
  }

  fun setOnMigrateDataInProgress(inProgress: Boolean) {
    _dataMigrationInProgress.value = inProgress
  }
}
