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

package org.smartregister.fhircore.quest.ui.report.other

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.compose.ui.platform.ComposeView
import androidx.compose.ui.platform.ViewCompositionStrategy
import androidx.fragment.app.Fragment
import androidx.fragment.app.viewModels
import androidx.lifecycle.lifecycleScope
import androidx.navigation.findNavController
import androidx.navigation.fragment.navArgs
import dagger.hilt.android.AndroidEntryPoint
import kotlinx.coroutines.launch
import org.smartregister.fhircore.engine.ui.theme.AppTheme

@AndroidEntryPoint
class OtherReportFragment : Fragment() {

  private val otherReportFragmentArgs by navArgs<OtherReportFragmentArgs>()
  private val otherReportViewModel by viewModels<OtherReportViewModel>()

  override fun onCreateView(
    inflater: LayoutInflater,
    container: ViewGroup?,
    savedInstanceState: Bundle?,
  ): View {
    with(otherReportFragmentArgs) {
      lifecycleScope.launch { otherReportViewModel.run { retrieveReportUiState(reportId) } }
    }

    return ComposeView(requireContext()).apply {
      setViewCompositionStrategy(ViewCompositionStrategy.DisposeOnViewTreeLifecycleDestroyed)
      setContent {
        AppTheme {
          OtherReportScreen(
            initialDateRange = otherReportViewModel.dateRange.value,
            otherReportUiState = otherReportViewModel.otherReportUiState.value,
            onEvent = otherReportViewModel::onEvent,
            navController = findNavController(),
            decodeImage = { otherReportViewModel.getImageBitmap(it) },
          )
        }
      }
    }
  }
}
