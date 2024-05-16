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

package org.smartregister.fhircore.engine.ui.settings.views

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import kotlinx.coroutines.launch
import org.smartregister.fhircore.engine.ui.settings.DevViewModel
import org.smartregister.fhircore.engine.util.annotation.ExcludeFromJacocoGeneratedReport

@Composable
fun ReportBottomSheet(viewModel: DevViewModel, viewReport: () -> Unit) {
  val context = LocalContext.current
  val scope = rememberCoroutineScope()
  Column(
    modifier = Modifier.padding(16.dp).padding(vertical = 20.dp).fillMaxWidth(),
  ) {
    SectionTitle(text = "Application Reports")
    UserProfileRow(
      text = "Export Report Resources",
      clickListener =
        @ExcludeFromJacocoGeneratedReport {
          scope.launch @ExcludeFromJacocoGeneratedReport { viewModel.createResourceReport(context) }
        },
    )
    UserProfileRow(
      text = "View Report Resources",
      clickListener = viewReport,
    )
  }
}
