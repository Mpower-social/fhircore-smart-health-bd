"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[3619],{6836:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=i(5893),r=i(1151);const a={},s="Specific use cases",o={id:"engineering/android-app/configuring/specific-use-cases",title:"Specific use cases",description:"This section of the docs describes specific health care use cases and examples of how to configure FHIR content to be relevant to them.",source:"@site/docs/engineering/android-app/configuring/specific-use-cases.mdx",sourceDirName:"engineering/android-app/configuring",slug:"/engineering/android-app/configuring/specific-use-cases",permalink:"/engineering/android-app/configuring/specific-use-cases",draft:!1,unlisted:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/engineering/android-app/configuring/specific-use-cases.mdx",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"P2P Sync",permalink:"/engineering/android-app/configuring/p2p_sync"},next:{title:"Working with rules",permalink:"/engineering/android-app/configuring/working-with-rules"}},c={},l=[{value:"Antenatal care (ANC)",id:"antenatal-care-anc",level:2},{value:"Multiple births",id:"multiple-births",level:3},{value:"Using repeated groups",id:"using-repeated-groups",level:4},{value:"Using a tasking approach",id:"using-a-tasking-approach",level:4}];function u(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"specific-use-cases",children:"Specific use cases"}),"\n",(0,t.jsx)(n.p,{children:"This section of the docs describes specific health care use cases and examples of how to configure FHIR content to be relevant to them."}),"\n",(0,t.jsx)(n.h2,{id:"antenatal-care-anc",children:"Antenatal care (ANC)"}),"\n",(0,t.jsx)(n.h3,{id:"multiple-births",children:"Multiple births"}),"\n",(0,t.jsx)(n.p,{children:"You can manage recording multiple births by using"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"complex Questionnaires with repeated group functionality to create block sections that can be repeated for the n-times where n is the number of newborns to be registered,"}),"\n",(0,t.jsx)(n.li,{children:"tasking approach that allows you to create mini-tasks for launching a newborn registration Questionnaire, each task will represent a new newborn due for registration hence dynamically generating tasks based on the total number of newborns."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Either of the two options above can be configured to achieve multiple birth registration as explored below."}),"\n",(0,t.jsx)(n.h4,{id:"using-repeated-groups",children:"Using repeated groups"}),"\n",(0,t.jsxs)(n.p,{children:["To create a repeated group Questionnaire, you will need to create a Questionnaire item of type ",(0,t.jsx)(n.code,{children:"group"})," with the ",(0,t.jsx)(n.code,{children:"repeat"})," attribute set to true. This approach assumes the following;"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"all the Questionnaire sections are answered at once, hence combining both pregnancy outcome questions together with newborn registration questions,"}),"\n",(0,t.jsx)(n.li,{children:"all data required to answer the complex Questionnaire is available from the start."}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a new item of type group in the Questionnaire to hold the newborn registration questions then set the repeats to ",(0,t.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'"linkId": "9bee02da-a0a0-4e1f-89ba-56d3c68ad765",\n"type": "group",\n"extension": [\n    {\n        "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-minOccurs",\n        "valueInteger": 1\n    },\n    {\n        "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",\n        "valueInteger": 9\n    },\n    {\n        "url": "http://ehelse.no/fhir/StructureDefinition/repeatstext",\n        "valueString": "Add Child"\n    }\n],\n"required": false,\n"repeats": true,\n"text": "Add Child Details",\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"You can opt to use a single page Questionnaire that scrolls to targeted block sections or alternatively you can use a paginated Questionnaire"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"using-a-tasking-approach",children:"Using a tasking approach"}),"\n",(0,t.jsx)(n.p,{children:"Handling multiple births using the tasking approach requires one to generate child registration tasks using a linked PlanDefinition by defining an evaluation criteria on the ActivityDefinition of the linked PlanDefinition.\nUsing a StructureMap to generate tasks by linking it in the action to create Tasks dynamically based on number children born. Below is a sample PlanDefinition ActivityDefinition action:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n    "prefix": "new-born-registration",\n    "priority": "routine",\n    "condition": [\n        {\n            "kind": "applicability",\n            "expression": {\n                "language": "text/fhirpath",\n                "expression": "fhirpath to evaluate criteria"\n            }\n        }\n    ],\n    "definitionCanonical": "#careplan-new-born-registration",\n    "transform": "http://hl7.org/fhir/StructureMap/uuid"\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"To generate the tasks dynamically, evaluate the number of children born response from the context QuestionnaireResponse and use it to iterate to generate tasks matching the number of children."})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>s});var t=i(7294);const r={},a=t.createContext(r);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);