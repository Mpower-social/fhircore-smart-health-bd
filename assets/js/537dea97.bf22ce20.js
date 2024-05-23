"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[1165],{1453:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>t,metadata:()=>o,toc:()=>h});var s=i(5893),r=i(1151);const t={},a="FHIRPath expressions",o={id:"engineering/writing-fhir/fhir_path",title:"FHIRPath expressions",description:"Paths are defined using FhirPath, which is an expression language defined by FHIR. In its simplest form, this can take the form of a single dotted path:",source:"@site/docs/engineering/writing-fhir/fhir_path.mdx",sourceDirName:"engineering/writing-fhir",slug:"/engineering/writing-fhir/fhir_path",permalink:"/engineering/writing-fhir/fhir_path",draft:!1,unlisted:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/engineering/writing-fhir/fhir_path.mdx",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"CQL use cases",permalink:"/engineering/writing-fhir/cql/sample-usage"},next:{title:"Form Authoring",permalink:"/engineering/writing-fhir/form-authoring"}},l={},h=[{value:"Variable",id:"variable",level:2},{value:"How to evaluate the variable expression",id:"how-to-evaluate-the-variable-expression",level:3},{value:"Sample Questionnaire for Questionnaire level variable expressions",id:"sample-questionnaire-for-questionnaire-level-variable-expressions",level:4},{value:"API to evaluate variable expressions defined at the questionnaire level",id:"api-to-evaluate-variable-expressions-defined-at-the-questionnaire-level",level:4},{value:"Sample Questionnaire for Questionnaire item level variable expressions",id:"sample-questionnaire-for-questionnaire-item-level-variable-expressions",level:4},{value:"API to evaluate variable expressions defined at Questionnaire item level",id:"api-to-evaluate-variable-expressions-defined-at-questionnaire-item-level",level:4},{value:"Sample of retrieving resources from the database using variable expression",id:"sample-of-retrieving-resources-from-the-database-using-variable-expression",level:4},{value:"Initial Expression",id:"initial-expression",level:2},{value:"EnableWhen Expression",id:"enablewhen-expression",level:2},{value:"Calculated expression",id:"calculated-expression",level:2},{value:"Answer expression",id:"answer-expression",level:2},{value:"CQF expression",id:"cqf-expression",level:2},{value:"Answer Options Toggle Expression",id:"answer-options-toggle-expression",level:2},{value:"Nested extension: option and expression",id:"nested-extension-option-and-expression",level:3},{value:"Option extension defines which option to show/hide",id:"option-extension-defines-which-option-to-showhide",level:4},{value:"Expression extension decides whether to show/hide the option",id:"expression-extension-decides-whether-to-showhide-the-option",level:4},{value:"Full example:",id:"full-example",level:3},{value:"Gotchas",id:"gotchas",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"fhirpath-expressions",children:"FHIRPath expressions"}),"\n",(0,s.jsxs)(n.p,{children:["Paths are defined using ",(0,s.jsx)(n.a,{href:"http://hl7.org/fhirpath",children:"FhirPath"}),", which is an expression language defined by FHIR. In its simplest form, this can take the form of a single dotted path:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Patient.name.given\n"})}),"\n",(0,s.jsx)(n.p,{children:"In the example above, the FHIRPath expression matches all of the patient's given names."}),"\n",(0,s.jsx)(n.h1,{id:"using-expressions",children:"Using expressions"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"http://build.fhir.org/ig/HL7/sdc/behavior.html",children:"Form Behavior"}),", ",(0,s.jsx)(n.a,{href:"http://build.fhir.org/ig/HL7/sdc/populate.html",children:"Questionnaire Population"})," and ",(0,s.jsx)(n.a,{href:"http://build.fhir.org/ig/HL7/sdc/extraction.html",children:"Data Extraction"})," all rely on (or have features that rely on) the use of ",(0,s.jsx)(n.a,{href:"http://hl7.org/fhir/R4/metadatatypes.html#Expression",children:"expressions"}),"."]}),"\n",(0,s.jsx)(n.h1,{id:"expression-extensions",children:"Expression extensions"}),"\n",(0,s.jsxs)(n.p,{children:["Expressions are introduced into Questionnaires using extensions - none of the 'core' data elements of Questionnaire makes use of extensions because they're considered an 'advanced' capability that is not currently supported by a large portion of the systems that make use of the Questioannaire resource. The extensions that make use of expressions and are supported in Android FHIR SDK are shown in the table below. Check out all types of ",(0,s.jsx)(n.a,{href:"http://build.fhir.org/ig/HL7/sdc/expressions.html#expression-extensions",children:"available expression extensions"})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Extension"}),(0,s.jsx)(n.th,{children:"Specs"}),(0,s.jsx)(n.th,{children:"Example"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"http://hl7.org/fhir/R4/extension-variable.html",children:"variable"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"http://build.fhir.org/ig/HL7/sdc/expressions.html#expression-extensions",children:"purpose and usage"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"http://build.fhir.org/ig/HL7/sdc/examples.html#calculatedexpression",children:"Using variable"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"http://build.fhir.org/ig/HL7/sdc/StructureDefinition-sdc-questionnaire-initialExpression.html",children:"initialExpression"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"http://build.fhir.org/ig/HL7/sdc/expressions.html#expression-extensions",children:"purpose and usage"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"http://build.fhir.org/ig/HL7/sdc/examples.html#initialexpression",children:"Using initialExpression"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"http://build.fhir.org/ig/HL7/sdc/StructureDefinition-sdc-questionnaire-enableWhenExpression.html",children:"enableWhenExpression"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"http://build.fhir.org/ig/HL7/sdc/expressions.html#expression-extensions",children:"purpose and usage"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"http://build.fhir.org/ig/HL7/sdc/examples.html#enableexamples",children:"Using enableWhenExpression"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"http://build.fhir.org/ig/HL7/sdc/StructureDefinition-sdc-questionnaire-calculatedExpression.html",children:"calculatedExpression"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"http://build.fhir.org/ig/HL7/sdc/expressions.html#expression-extensions",children:"purpose and usage"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"http://build.fhir.org/ig/HL7/sdc/examples.html#calculatedexpression",children:"Using calculatedExpression"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"http://build.fhir.org/ig/HL7/sdc/StructureDefinition-sdc-questionnaire-answerExpression.html",children:"answerExpression"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"http://build.fhir.org/ig/HL7/sdc/expressions.html#expression-extensions",children:"purpose and usage"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"http://build.fhir.org/ig/HL7/sdc/examples.html#reference-resource-profile-lookup",children:"Using answerExpression"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"http://build.fhir.org/ig/HL7/sdc/StructureDefinition-sdc-questionnaire-candidateExpression.html",children:"candidateExpression"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"http://build.fhir.org/ig/HL7/sdc/expressions.html#expression-extensions",children:"purpose and usage"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"http://build.fhir.org/ig/HL7/sdc/examples.html#candidateExpression",children:"Using candidateExpression"})})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"variable",children:"Variable"}),"\n",(0,s.jsx)(n.p,{children:"The variable expression sets a variable that is available for use in expressions within the same item and any descendant items. It has three main uses:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"It allows a complex calculation to be done once and used in multiple other places. (E.g. Determining the score for one group within the questionnaire response that will then be used in calculations on subsequent groups.)"}),"\n",(0,s.jsx)(n.li,{children:"It allows a calculation to be done closer to the root of the questionnaire response or at the root of the questionnaire response where there is access to more of or all the answers from the questionnaire response. The calculated value might then be used as the answer to a descendant question. (Expressions cannot access answers that are not descendants of the current node.)"}),"\n",(0,s.jsx)(n.li,{children:"It allows the retrieval of FHIR resources from the database by using X-FHIR-Query when the questionnaire is opened. The retrieved information can then be utilized within the questionnaire through other variables or extensions that utilize expressions"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The content type of a variable can be pretty much anything. It can be a collection or an individual item. It can be a simple element, a complex type, a resource or even a Bundle of resources.\nThe variable can be referenced by its name. Variable expressions SHALL specify a name. It is not allowed to define variable names that are already reserved by the base specification or by other variables in the questionnaire."}),"\n",(0,s.jsx)(n.h3,{id:"how-to-evaluate-the-variable-expression",children:"How to evaluate the variable expression"}),"\n",(0,s.jsx)(n.p,{children:"Variable expressions can be defined at the questionnaire and questionnaire item levels. The Structure Data Capture Library provides separate APIs to evaluate variable expressions defined at either questionnaire or questionnaire item level."}),"\n",(0,s.jsx)(n.h4,{id:"sample-questionnaire-for-questionnaire-level-variable-expressions",children:"Sample Questionnaire for Questionnaire level variable expressions"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n  "resourceType": "Questionnaire",\n  "extension": [\n    {\n      "url": "http://hl7.org/fhir/StructureDefinition/variable",\n      "valueExpression": {\n        "name": "weight",\n        "language": "text/fhirpath",\n        "expression": "%resource.repeat(item).where(linkId=\'3.3.1\').item.answer.valueDecimal"\n      }\n    }\n  ],\n  "item": [\n    {\n      "extension": [\n        {\n          "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",\n          "valueCoding": {\n            "system": "http://unitsofmeasure.org",\n            "code": "kg"\n          }\n        }\n      ],\n      "linkId": "3.3.1",\n      "text": "Weight (kg)",\n      "type": "decimal"\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"api-to-evaluate-variable-expressions-defined-at-the-questionnaire-level",children:"API to evaluate variable expressions defined at the questionnaire level"}),"\n",(0,s.jsx)(n.p,{children:"To evaluate variable expressions defined at Questionnaire level, we have to pass a variable expression, Questionnaire, QuestionnaireResponse and an optional varaiblesMap"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:" internal fun evaluateQuestionnaireVariableExpression(\n    expression: Expression,\n    questionnaire: Questionnaire,\n    questionnaireResponse: QuestionnaireResponse,\n    variablesMap: MutableMap<String, Base?> = mutableMapOf()\n  ): Base?\n"})}),"\n",(0,s.jsx)(n.h4,{id:"sample-questionnaire-for-questionnaire-item-level-variable-expressions",children:"Sample Questionnaire for Questionnaire item level variable expressions"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'"item": [\n  {\n    "linkId": "/groupA",\n    "text": "Group A",\n    "type": "group",\n    "extension": [\n      {\n        "url": "http://hl7.org/fhir/StructureDefinition/variable",\n        "valueExpression": {\n          "name": "X",\n          "language": "text/fhirpath",\n          "expression": "item.where(linkId=\'/groupA/fieldB\').answer[0].valueInteger"\n        }\n      },\n      {\n        "url": "http://hl7.org/fhir/StructureDefinition/variable",\n        "valueExpression": {\n          "name": "Y",\n          "language": "text/fhirpath",\n          "expression": "%X + 2",\n          "comment": "References another variable on the same group"\n        }\n      }\n    ],\n    "item": [\n      {\n        "linkId": "/groupA/fieldB",\n        "text": "Field B",\n        "type": "integer"\n      }\n    ]\n  }\n]\n'})}),"\n",(0,s.jsx)(n.h4,{id:"api-to-evaluate-variable-expressions-defined-at-questionnaire-item-level",children:"API to evaluate variable expressions defined at Questionnaire item level"}),"\n",(0,s.jsx)(n.p,{children:"To evaluate variable expressions defined at Questionnaire item level, we have to pass a variable expression, questionnaire, QuestionnaireResponse, questionnaireItemParentMap,QuestionnaireItem and an optional varaiblesMap"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"internal fun evaluateQuestionnaireItemVariableExpression(\n    expression: Expression,\n    questionnaire: Questionnaire,\n    questionnaireResponse: QuestionnaireResponse,\n    questionnaireItemParentMap:\n      Map<Questionnaire.QuestionnaireItemComponent, Questionnaire.QuestionnaireItemComponent>,\n    questionnaireItem: Questionnaire.QuestionnaireItemComponent,\n    variablesMap: MutableMap<String, Base?> = mutableMapOf()\n  ): Base?\n"})}),"\n",(0,s.jsx)(n.h4,{id:"sample-of-retrieving-resources-from-the-database-using-variable-expression",children:"Sample of retrieving resources from the database using variable expression"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n  "resourceType": "Questionnaire",\n  "extension": [\n    {\n        "url": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-launchContext",\n        "extension": [\n            {\n                "url": "name",\n                "valueCoding": {\n                    "system": "http://hl7.org/fhir/uv/sdc/CodeSystem/launchContext",\n                    "code": "patient",\n                    "display": "Patient"\n                }\n            },\n            {\n                "url": "type",\n                "valueCode": "Patient"\n            }\n        ]\n    },\n    {\n        "url": "http://hl7.org/fhir/StructureDefinition/variable",\n        "valueExpression": {\n            "name": "qrs-searched",\n            "language": "application/x-fhir-query",\n            "expression": "QuestionnaireResponse?subject={{%patient.id.replaceMatches(\'/_history/.*\', \'\')}}&questionnaire=Questionnaire/54"\n        }\n    },\n    {\n        "url": "http://hl7.org/fhir/StructureDefinition/variable",\n        "valueExpression": {\n            "name": "qr-resource",\n            "language": "text/fhirpath",\n            "expression": "%qrs-searched.entry.first().resource"\n        }\n    },\n    {\n        "url": "http://hl7.org/fhir/StructureDefinition/variable",\n        "valueExpression": {\n            "name": "answer-1",\n            "language": "text/fhirpath",\n            "expression": "%qr-resource.item.descendants().where(linkId=\'1\').answer.value"\n        }\n    }\n  ],\n  "item": [\n  ...\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"initial-expression",children:"Initial Expression"}),"\n",(0,s.jsxs)(n.p,{children:["Besides using ",(0,s.jsx)(n.a,{href:"http://hl7.org/fhir/R4/questionnaire-definitions.html#Questionnaire.item.initial",children:"initial"})," property in ",(0,s.jsx)(n.a,{href:"https://hl7.org/fhir/R4/questionnaire.html",children:"Questionnaire.item"})," for providing a default answer on questionnaire load, ",(0,s.jsx)(n.a,{href:"https://build.fhir.org/ig/HL7/sdc/StructureDefinition-sdc-questionnaire-initialExpression.html",children:"initial expression"})," is another alternate way of providing default answer based on a FHIRPath expression i.e. rather than specifying a fixed value, the value is calculable."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"It is a Questionnaire.item-level extension"}),"\n",(0,s.jsxs)(n.li,{children:["Examples could be","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["current date i.e. ",(0,s.jsx)(n.code,{children:"today() + 7 days"})," or"]}),"\n",(0,s.jsxs)(n.li,{children:["an expression based on current QuestionnaireResponse.item.answer. The QuestionnaireResponse in the current context can be referred to by %resource. i.e. ",(0,s.jsx)(n.code,{children:"%resource.item.where(linkId='weight').answer.first()"})]}),"\n",(0,s.jsxs)(n.li,{children:["an expression of based on launch context or information queried from external sources i.e. ",(0,s.jsx)(n.code,{children:"%patient.birthDate"}),", full example questionnaire can be found ",(0,s.jsx)(n.a,{href:"https://build.fhir.org/ig/HL7/sdc/Questionnaire-demographics.json.html",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["an expression based on ",(0,s.jsx)(n.code,{children:"variable"})," extension. i.e. ",(0,s.jsx)(n.code,{children:"%weight * 0.25"}),". See variable rules ",(0,s.jsx)(n.a,{href:"http://hl7.org/fhir/R4/extension-variable.html",children:"here"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Both of the approaches are mutually exclusive and only one of these can be specified."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ "item": [\n          {\n            "extension": [\n              {\n                "url": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression",\n                "valueExpression": {\n                  "language": "text/fhirpath",\n                  "expression": "today() + 7 days"\n                }\n              }\n            ],\n            "linkId": "3.1",\n            "text": "Next follow up date",\n            "type": "date",\n          }\n        ]\n\t}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"enablewhen-expression",children:"EnableWhen Expression"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"enableWhen"})," aka skip logic controls which questions, groups and display items would show or hide based on answers of other referenced questions within the response.\nBesides using ",(0,s.jsx)(n.a,{href:"http://hl7.org/fhir/R4/questionnaire-definitions.html#Questionnaire.item.enableWhen",children:"enableWhen"})," property in ",(0,s.jsx)(n.a,{href:"https://hl7.org/fhir/R4/questionnaire.html",children:"Questionnaire.item"})," for providing skip logic, ",(0,s.jsx)(n.a,{href:"https://build.fhir.org/ig/HL7/sdc/StructureDefinition-sdc-questionnaire-enableWhenExpression.html",children:"enableWhen expression"})," is another alternate way of providing skip logic based on a dynamic fhirpath expression."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Elements that are not enabled are hidden from the user and can not be edited"}),"\n",(0,s.jsx)(n.li,{children:"It needs to be evaluated each time any of the answers it depends on changes"}),"\n",(0,s.jsxs)(n.li,{children:["Any constraints associated with non-enabled elements i.e. ",(0,s.jsx)(n.a,{href:"https://build.fhir.org/ig/HL7/sdc/behavior.html#required",children:"required"})," or ",(0,s.jsx)(n.a,{href:"https://build.fhir.org/ig/HL7/sdc/behavior.html#minOccurs",children:"minOccurs"})," are ignored and no answers are stored for these."]}),"\n",(0,s.jsxs)(n.li,{children:["Examples could be","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["an expression based on current QuestionnaireResponse.item.answer. The QuestionnaireResponse in current context can be referred by %resource. i.e. ",(0,s.jsx)(n.code,{children:"%resource.item.where(linkId='weight').answer.first() > 45"})]}),"\n",(0,s.jsxs)(n.li,{children:["an expression of based on launch context or information queried from external sources i.e. ",(0,s.jsx)(n.code,{children:"%patient.deceased = flase"}),", full example questionnaire can be found ",(0,s.jsx)(n.a,{href:"https://build.fhir.org/ig/HL7/sdc/Questionnaire-demographics.json.html",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["an expression based on ",(0,s.jsx)(n.code,{children:"variable"})," extension. i.e. ",(0,s.jsx)(n.code,{children:"%weight > 60"}),". See variable rules ",(0,s.jsx)(n.a,{href:"http://hl7.org/fhir/R4/extension-variable.html",children:"here"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Both of the approaches are mutually exclusive and only one of these can specified."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n   "extension":[\n      {\n         "url":"http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression",\n         "valueExpression":{\n            "language":"text/fhirpath",\n            "expression":"%resource.repeat(item).where(linkId=\'gender\').answer.value.code =\'female\' and %resource.repeat(item).where(linkId=\'age\').answer.value > 49"\n         }\n      }\n   ],\n   "linkId":"3.1",\n   "text":"Is women or non reproductive age",\n   "type":"boolean"\n}\n\n'})}),"\n",(0,s.jsx)(n.h2,{id:"calculated-expression",children:"Calculated expression"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://build.fhir.org/ig/HL7/sdc/StructureDefinition-sdc-questionnaire-calculatedExpression.html",children:"Calculated Expression"})," is an extension which allows to set answers to ",(0,s.jsx)(n.a,{href:"https://hl7.org/fhir/R4/questionnaire.html",children:"Questionnaire.item"})," (generally but not limited to ",(0,s.jsx)(n.a,{href:"https://build.fhir.org/ig/HL7/sdc/behavior.html#readOnly",children:"readOnly"})," or ",(0,s.jsx)(n.a,{href:"https://build.fhir.org/ig/HL7/sdc/rendering.html#hidden",children:"hidden"}),"). The calculation is dynamic via a ",(0,s.jsx)(n.a,{href:"http://hl7.org/fhirpath",children:"fhirpath"})," expression which can be based on answers of other Questionnaire.items."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Unlike ",(0,s.jsx)(n.a,{href:"https://build.fhir.org/ig/HL7/sdc/expressions.html#initialExpression",children:"initialExpression"})," extension, instead of only setting value on Questionnaire.item loading, this extension- keeps updating the value as soon as the answers of dependent questions change."]}),"\n",(0,s.jsx)(n.li,{children:"Mostly it is used for displaying or calculating scores, patient age, BMI, estimated cost etc"}),"\n",(0,s.jsx)(n.li,{children:"In most cases, 'calculated' answers are 'readOnly', however, the extension can be applied to any Questionnaire.item."}),"\n",(0,s.jsx)(n.li,{children:"For modifiable Questionnaire.item if a user has edited the answer of calculated expression, it can no longer be changed based on expression i.e. an edited item does not update by expression anymore"}),"\n",(0,s.jsxs)(n.li,{children:["Examples could be","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["an expression based on current QuestionnaireResponse.item.answer. The QuestionnaireResponse in current context can be referred by %resource. i.e. ",(0,s.jsx)(n.code,{children:"%resource.item.where(linkId='weight').answer.first()"})]}),"\n",(0,s.jsxs)(n.li,{children:["an expression of based on launch context or information queried from external sources i.e. ",(0,s.jsx)(n.code,{children:"%patient.active"}),", full example questionnaire can be found ",(0,s.jsx)(n.a,{href:"https://build.fhir.org/ig/HL7/sdc/Questionnaire-demographics.json.html",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["an expression based on ",(0,s.jsx)(n.code,{children:"variable"})," extension. i.e. ",(0,s.jsx)(n.code,{children:"%weight + 20"}),". See variable rules ",(0,s.jsx)(n.a,{href:"http://hl7.org/fhir/R4/extension-variable.html",children:"here"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{"item": [\n    {\n      "linkId": "birthdate",\n      "text": "Birth Date",\n      "type": "date",\n      "extension": [\n        {\n          "url": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression",\n          "valueExpression": {\n            "language": "text/fhirpath",\n            "expression": "%resource.repeat(item).where(linkId=\'age-years\' and answer.empty().not()).select(today() - answer.value)"\n          }\n        }\n      ]\n    },\n    {\n      "linkId": "age-years",\n      "text": "Age years",\n      "type": "quantity",\n      "initial": [{\n        "valueQuantity": {\n          "unit": "years",\n          "system": "http://unitsofmeasure.org",\n          "code": "years"\n        }\n      }]\n    }\n  ]\n  }\n'})}),"\n",(0,s.jsx)(n.h2,{id:"answer-expression",children:"Answer expression"}),"\n",(0,s.jsxs)(n.p,{children:["The possible answers for a ",(0,s.jsx)(n.a,{href:"https://hl7.org/fhir/R4/questionnaire.html",children:"Questionnaire.item"})," are restricted or validated based on it type. The allowed value of a Questionnaire.item must conform to an enumerated set. The answerOption the possible allowed values and the type of  answerOption must match the type of the question. (Coding type is used for choice and open-choice)"]}),"\n",(0,s.jsx)(n.p,{children:"Mainly answers can be enumerated  by three ways"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://build.fhir.org/ig/HL7/sdc/examples.html#answeroption",children:"answerOption"})," are hardcoded set of option values and works well when there is a small number of choices and support variety of question types"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://build.fhir.org/ig/HL7/sdc/behavior.html#answerValueSet",children:"answerValueSet"})," element only supports 'string' and Coding elements. It is better when set of codes is large or dynamic e.g. SNOMED or LOINC codes"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.a,{href:"https://build.fhir.org/ig/HL7/sdc/expressions.html#answerExpression",children:"answerExpression"})," extension"]})," allows a FHIR Query, FHIRPath, or CQL (not implemented yet) expression that can be resolved to a list of permitted answers.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Expression must evaluate to a collection with the same type as the Questionnaire.item.type"}),"\n",(0,s.jsx)(n.li,{children:"If the type is Reference it should evaluate to resources allowed as the referenced type"}),"\n",(0,s.jsxs)(n.li,{children:["It is often used with ",(0,s.jsx)(n.a,{href:"https://build.fhir.org/ig/HL7/sdc/StructureDefinition-sdc-questionnaire-choiceColumn.html",children:"Choice Column"})," extension to provide display or UI definitions"]}),"\n",(0,s.jsxs)(n.li,{children:["Currently Choice Column is applicable only for reference type. With a Reference choiceColumn allows selection of fields from the resource evaulated by x-fhir-query e.g. ",(0,s.jsx)(n.code,{children:"name.first().given.first() + ' ' + name.first().family"})," for the full name of a Patient or Practitioner."]}),"\n",(0,s.jsxs)(n.li,{children:["For multiple repetitions of the Choice Column extension the columns (concatenated values separated by space) are displayed in the same order as the extensions appear on the Questionnaire.item. If multiple columns are marked with ",(0,s.jsx)(n.code,{children:'"forDisplay": true'}),", the display value used will be a space-separated concatenation of all column"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Examples of expression are","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"http://hl7.org/fhir/R4/search.html",children:"FHIR Query"})," i.e. ",(0,s.jsx)(n.code,{children:"Patient?active=true&name=john"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"http://hl7.org/fhirpath",children:"FHIRPath"})," which must conform to item type i.e. ",(0,s.jsx)(n.code,{children:"%resource.item.where(type='choice' and answer.empty().not()).answer"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"http://cql.hl7.org/",children:"CQL"})," - not implemented yet"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"All three mechanisms are mutually exclusive and only one can appear on same question"}),"\n",(0,s.jsxs)(n.p,{children:["Use of other ",(0,s.jsx)(n.a,{href:"https://build.fhir.org/ig/HL7/sdc/behavior.html#value-constraint",children:"Value Constraint"})," elements is redundant and confusing, hence, when using any of these to restrict answers do not make use of any of the other Value Constraint extensions."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{"item": [\n  {\n    "extension": [\n      {\n        "url": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-answerExpression",\n        "valueExpression": {\n          "language": "application/x-fhir-query",\n          "expression": "Practitioner?active=true&_sort=family,given"\n        }\n      },\n      {\n        "extension": [\n          {\n            "url": "path",\n            "valueString": "name.where(use=\'official\').family + \', \' + name.where(use=\'official\').given.first()"\n          },\n          {\n            "url": "forDisplay",\n            "valueBoolean": true\n          }\n        ],\n        "url": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-choiceColumn"\n      },\n      {\n        "extension": [\n          {\n            "url": "path",\n            "valueString": "\'(\' + gender + \')\'"\n          },\n          {\n            "url": "forDisplay",\n            "valueBoolean": true\n          }\n        ],\n        "url": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-choiceColumn"\n      }\n    ],\n    "linkId": "1.0.0",\n    "text": "Preferred practitioner",\n    "type": "reference"\n  }\n]\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"cqf-expression",children:"CQF expression"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"http://hl7.org/fhir/R4B/extension-cqf-expression.html",children:"Cqf-expression"})," is used in ",(0,s.jsx)(n.a,{href:"https://build.fhir.org/questionnaire-definitions.html#Questionnaire.item.text",children:"Questionnaire.item.text"})," to make it a dynamic text. Dynamic text in this context refers to the ability to run FHIRPath, including variables, to the text content. As a result, the displayed text can dynamically change based on various parameters, such as the responses to other questionnaire items. In essence, the content of ",(0,s.jsx)(n.a,{href:"https://build.fhir.org/questionnaire-definitions.html#Questionnaire.item.text",children:"Questionnaire.item.text"})," can adapt and respond to the answers provided to other questions within the questionnaire."]}),"\n",(0,s.jsx)(n.p,{children:"Facts about Cqf-expression:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Cqf-expression is declared in the ",(0,s.jsx)(n.code,{children:"_text"})," property as extension"]}),"\n",(0,s.jsx)(n.li,{children:"If the Cqf-expression has NOT been evaluated yet, you will see the text declared in the text property"}),"\n",(0,s.jsxs)(n.li,{children:["Using the ",(0,s.jsx)(n.a,{href:"https://build.fhir.org/ig/HL7/fhir-extensions/StructureDefinition-translation.html",children:"translation extension"})," alongside Cqf-expression is not supported"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n  "linkId": "1",\n  "text": "The text you will ONLY see, if cqf-expression has NOT been evaluated yet",\n  "_text": {\n    "extension": [\n      {\n        "url": "http://hl7.org/fhir/StructureDefinition/cqf-expression",\n        "valueExpression": {\n          "language": "text/fhirpath",\n          "expression": "\'My name is \' + %name"\n        }\n      }\n    ]\n  },\n  "type": "display"\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"answer-options-toggle-expression",children:"Answer Options Toggle Expression"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://build.fhir.org/ig/HL7/sdc/StructureDefinition-sdc-questionnaire-answerOptionsToggleExpression.html",children:"Answer Options Toggle Expression"})," extension is used to show/hide an option of choice type (Radio Button, Checkboxes, etc) questionnaire item based on a defined predicate."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n  "extension": [\n    {\n      "url": "option",\n      "valueCoding": {\n        "code": "option-A"\n      }\n    },\n    {\n      "url": "expression",\n      "valueExpression": {\n        "language": "text/fhirpath",\n        "expression": "true"\n      }\n    }\n  ],\n  "url": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-answerOptionsToggleExpression"\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"nested-extension-option-and-expression",children:"Nested extension: option and expression"}),"\n",(0,s.jsx)(n.h4,{id:"option-extension-defines-which-option-to-showhide",children:"Option extension defines which option to show/hide"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n  "url": "option",\n  "valueCoding": {\n    "code": "option-A"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"expression-extension-decides-whether-to-showhide-the-option",children:"Expression extension decides whether to show/hide the option"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Accepts a FHIRPath expression, which means you can also pass a ",(0,s.jsx)(n.a,{href:"https://docs.opensrp.io/engineering/android-app/writing-fhir/fhir_path#variable",children:"variable"})," to it, to make the expression short"]}),"\n",(0,s.jsx)(n.li,{children:"If the evaluated result is true, the option will be shown. If the evaluated result is false, the option will be hidden"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n  "url": "expression",\n  "valueExpression": {\n    "language": "text/fhirpath",\n    "expression": "%should-show-option-a"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"full-example",children:"Full example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n  "extension": [\n    {\n      "extension": [\n        {\n          "url": "option",\n          "valueCoding": {\n            "code": "option-A"\n          }\n        },\n        {\n          "url": "expression",\n          "valueExpression": {\n            "language": "text/fhirpath",\n            "expression": "%should-show-option-a"\n          }\n        }\n      ],\n      "url": "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-answerOptionsToggleExpression"\n    }\n  ],\n  "linkId": "1",\n  "text": "question",\n  "type": "choice",\n  "answerOption": [\n    {\n      "valueCoding": {\n        "code": "option-a",\n        "display": "A"\n      }\n    },\n    {\n      "valueCoding": {\n        "code": "option-b",\n        "display": "B"\n      }\n    },\n    {\n      "valueCoding": {\n        "code": "option-c",\n        "display": "C"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"gotchas",children:"Gotchas"}),"\n",(0,s.jsxs)(n.p,{children:["When working with dates, please note that according to the FHIR spec, if the duration value is specified as a whole number ",(0,s.jsx)(n.em,{children:"(e.g. 1 month)"})," such as when you write ",(0,s.jsx)(n.code,{children:"today + '1 month'"}),", then when the duration is added or subtracted to a given date(time), the outcome is rounded to the nearest natural calendar division - e.g. Feb. 1 + 1 mo = March 1, not March 2 or 3 (since 1 month is defined in UCUM as 30 days)."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples of rounding off to closest calendar division:"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Normal calculation - Feb 1, 2023 + 30 days = March 3, 2023.\nFHIR Path spec - Feb 1, 2023 + 1 month  = March 1, 2023"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Check out the FHIR documentation link here for reference ",(0,s.jsx)(n.a,{href:"https://hl7.org/fhir/R4/datatypes.html#Distance",children:"https://hl7.org/fhir/R4/datatypes.html#Distance"})]})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>a});var s=i(7294);const r={},t=s.createContext(r);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);