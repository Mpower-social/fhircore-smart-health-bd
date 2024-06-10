"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[8123],{3008:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var n=o(5893),t=o(1151);const i={},s="Converting CQL to a library",c={id:"engineering/app/configuring/writing-fhir/cql/convert-cql-to-library",title:"Converting CQL to a library",description:"This document discusses how to convert a CQL script to a FHIR library.",source:"@site/docs/engineering/app/configuring/writing-fhir/cql/convert-cql-to-library.mdx",sourceDirName:"engineering/app/configuring/writing-fhir/cql",slug:"/engineering/app/configuring/writing-fhir/cql/convert-cql-to-library",permalink:"/engineering/app/configuring/writing-fhir/cql/convert-cql-to-library",draft:!1,unlisted:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/engineering/app/configuring/writing-fhir/cql/convert-cql-to-library.mdx",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"CQL",permalink:"/engineering/app/configuring/writing-fhir/cql/"},next:{title:"CQL use cases",permalink:"/engineering/app/configuring/writing-fhir/cql/sample-usage"}},l={},a=[{value:"Android FHIR SDK CQL Builder",id:"android-fhir-sdk-cql-builder",level:2},{value:"FHIR Core CQL Testing Module",id:"fhir-core-cql-testing-module",level:2},{value:"FHIR Core Tooling Library",id:"fhir-core-tooling-library",level:2},{value:"Unrecommended conversion methods",id:"unrecommended-conversion-methods",level:2},{value:"CQL to ELM REST Translator",id:"cql-to-elm-rest-translator",level:3},{value:"CQL to ELM JAVA Translator",id:"cql-to-elm-java-translator",level:3}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"converting-cql-to-a-library",children:"Converting CQL to a library"}),"\n",(0,n.jsx)(r.p,{children:"This document discusses how to convert a CQL script to a FHIR library."}),"\n",(0,n.jsx)(r.h2,{id:"android-fhir-sdk-cql-builder",children:"Android FHIR SDK CQL Builder"}),"\n",(0,n.jsxs)(r.p,{children:["SDK workflow testing module has ",(0,n.jsx)(r.a,{href:"https://github.com/google/android-fhir/blob/master/workflow-testing/src/main/java/com/google/android/fhir/workflow/testing/CqlBuilder.kt",children:(0,n.jsx)(r.code,{children:"com.google.android.fhir.workflow.testing.CqlBuilder"})})," which can do translation from a ",(0,n.jsx)(r.code,{children:"CQL"})," to ",(0,n.jsx)(r.code,{children:"Library"})," resource. This automatically does the ",(0,n.jsx)(r.code,{children:"elm"})," conversion for you internally."]}),"\n",(0,n.jsxs)(r.p,{children:["An example usage can be seen in tests found ",(0,n.jsx)(r.a,{href:"https://github.com/google/android-fhir/blob/master/workflow/src/test/java/com/google/android/fhir/workflow/FhirOperatorTest.kt#L150",children:"here"})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"val library = CqlBuilder.compileAndBuild(cqlScriptInputStream)\n"})}),"\n",(0,n.jsx)(r.h2,{id:"fhir-core-cql-testing-module",children:"FHIR Core CQL Testing Module"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.a,{href:"https://github.com/opensrp/fhir-resources/blob/main/fhircore-testing",children:"fhir-resources"})," repository has a testing module which allows to not only get the complete Library resource to directly save to the server but also allows to test the output and make changes on the fly. Check the cucumber tests ",(0,n.jsx)(r.a,{href:"https://github.com/opensrp/fhir-resources/blob/main/fhircore-testing/fhircore-tests/src/androidTest/resources/measure-report/household-members.feature",children:"Feature File"}),", the ",(0,n.jsx)(r.a,{href:"https://github.com/opensrp/fhir-resources/blob/main/fhircore-testing/fhircore-tests/src/androidTest/kotlin/com/fhircore/resources/testing/measure/HouseholdMembersMeasureTest.kt#L28",children:"Test Code File"})," and the ",(0,n.jsx)(r.a,{href:"https://github.com/opensrp/fhir-resources/blob/main/fhircore-testing/fhircore-tests/src/androidTest/kotlin/com/fhircore/resources/testing/CqlUtils.kt",children:"Convertor Util Method"})]}),"\n",(0,n.jsx)(r.h2,{id:"fhir-core-tooling-library",children:"FHIR Core Tooling Library"}),"\n",(0,n.jsxs)(r.p,{children:["FHIR Core tooling library can also be used to get a Library by running the command below. Details on the tool can be found ",(0,n.jsx)(r.a,{href:"https://github.com/opensrp/fhircore-tooling#converting-library-cql-to-json",children:"here"}),"."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"fct convert -t cql -i /some/path/Patient-1.0.0.cql\n"})}),"\n",(0,n.jsx)(r.h2,{id:"unrecommended-conversion-methods",children:"Unrecommended conversion methods"}),"\n",(0,n.jsx)(r.p,{children:"These are other methods to convert a CQL script to elm+json."}),"\n",(0,n.jsx)(r.admonition,{type:"info",children:(0,n.jsxs)(r.p,{children:["The below approaches output a ",(0,n.jsx)(r.code,{children:"json-elm"})," which then needs to be Base64 decoded and copied to the ",(0,n.jsx)(r.a,{href:"http://hl7.org/fhir/R4/library.html",children:"Library"})," content as Attachment."]})}),"\n",(0,n.jsx)(r.h3,{id:"cql-to-elm-rest-translator",children:"CQL to ELM REST Translator"}),"\n",(0,n.jsxs)(r.p,{children:["A ",(0,n.jsx)(r.a,{href:"https://github.com/cqframework/cql-translation-service/blob/master/README.md",children:"elm REST app"})," that can be used to run elm microservice and convert CQL via a REST API."]}),"\n",(0,n.jsx)(r.h3,{id:"cql-to-elm-java-translator",children:"CQL to ELM JAVA Translator"}),"\n",(0,n.jsxs)(r.p,{children:["Her is an ",(0,n.jsx)(r.a,{href:"https://github.com/cqframework/clinical_quality_language/blob/master/Src/java/READM.md",children:"elm java app"})," that can be used as an elm translator on related files and get an output. Instructions can be found ",(0,n.jsx)(r.a,{href:"https://github.com/cqframework/cql-execution#to-execute-your-cql",children:"here"})]})]})}function d(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,r,o)=>{o.d(r,{Z:()=>c,a:()=>s});var n=o(7294);const t={},i=n.createContext(t);function s(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);