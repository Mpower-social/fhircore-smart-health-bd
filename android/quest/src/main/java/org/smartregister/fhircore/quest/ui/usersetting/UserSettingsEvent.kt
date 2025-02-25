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

package org.smartregister.fhircore.quest.ui.usersetting

import android.content.Context
import androidx.navigation.NavController
import org.smartregister.fhircore.engine.domain.model.Language

sealed class UserSettingsEvent {
  data class SwitchLanguage(val language: Language, val context: Context) : UserSettingsEvent()

  data class ShowResetDatabaseConfirmationDialog(val isShow: Boolean) : UserSettingsEvent()

  data class SwitchToP2PScreen(val context: Context) : UserSettingsEvent()

  data class ResetDatabaseFlag(val isReset: Boolean, val context: Context) : UserSettingsEvent()

  data class Logout(val context: Context) : UserSettingsEvent()

  data class ShowLoaderView(val show: Boolean, val messageResourceId: Int) : UserSettingsEvent()

  data class SyncData(val context: Context) : UserSettingsEvent()

  data class ShowContactView(val isShow: Boolean, val context: Context) : UserSettingsEvent()

  data class OnLaunchOfflineMap(val isShow: Boolean, val context: Context) : UserSettingsEvent()

  data class ShowInsightsScreen(val navController: NavController) : UserSettingsEvent()

  data class ExportDB(val isShow: Boolean, val context: Context) : UserSettingsEvent()
}
