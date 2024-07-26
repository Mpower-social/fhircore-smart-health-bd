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

package org.smartregister.fhircore.quest.data

import android.util.Log
import com.google.android.fhir.FhirEngine
import com.google.android.fhir.datacapture.XFhirQueryResolver
import com.google.android.fhir.search.Search
import com.google.android.fhir.search.search
import javax.inject.Inject
import javax.inject.Singleton
import org.hl7.fhir.r4.model.QuestionnaireResponse
import org.hl7.fhir.r4.model.Resource
import org.hl7.fhir.r4.model.ResourceType

@Singleton
class QuestXFhirQueryResolver @Inject constructor(val fhirEngine: FhirEngine) : XFhirQueryResolver {

  // TODO: Fix bug creating XFhirQuery from expression https://github.com/google/android-fhir/issues/2451
  override suspend fun resolve(xFhirQuery: String): List<Resource> {
    Log.d("XFHIRQUERY", xFhirQuery)

    if (xFhirQuery.contains("QuestionnaireResponse")) {
      val strParams = xFhirQuery.removePrefix("QuestionnaireResponse?")
      val params = strParams.split("&")
      val search =
        Search(ResourceType.QuestionnaireResponse).apply {
          params.forEach {
            val paramType = it.split("=").first()
            val paramValue = it.split("=").last()
            Log.d("XFHIRQUERY PARAM", "$paramType $paramValue")

            if (paramType == QuestionnaireResponse.SP_SUBJECT) {
              this.filter(QuestionnaireResponse.SUBJECT, { value = paramValue })
            }
            if (paramType == QuestionnaireResponse.SP_QUESTIONNAIRE) {
              this.filter(QuestionnaireResponse.QUESTIONNAIRE, { value = paramValue })
            }
          }
        }

      val lists = fhirEngine.search<QuestionnaireResponse>(search).sortedByDescending { it.resource.meta.lastUpdated }
      Log.d("XFHIRQUERY TOTAL RESOURCE", lists.size.toString())
      return lists.map { it.resource }
    } else {
      return fhirEngine.search(xFhirQuery).map { it.resource }
    }
  }
}
