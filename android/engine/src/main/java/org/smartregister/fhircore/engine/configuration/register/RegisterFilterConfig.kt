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

package org.smartregister.fhircore.engine.configuration.register

import kotlinx.serialization.Serializable
import org.smartregister.fhircore.engine.domain.model.ActionConfig
import org.smartregister.fhircore.engine.domain.model.DataQuery

@Serializable
data class RegisterFilterConfig(
  val dataFilterActions: List<ActionConfig>? = null,
  val dataFilterFields: List<RegisterFilterField> = emptyList(),
) : java.io.Serializable

@Serializable
data class RegisterFilterField(
  val dataQueries: List<DataQuery>,
  val filterId: String,
) : java.io.Serializable