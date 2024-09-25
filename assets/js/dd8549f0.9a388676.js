"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[6745],{2227:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(4848),i=n(8453);const s={title:"Syncronization"},c="Sync configuration",o={id:"engineering/app/configuring/config-types/sync",title:"Syncronization",description:"This configuration is used to configure which resources are to be synced to and from the server. For every resource there is an optional property for indicating how the data (per resource) should be filter (search parameter).",source:"@site/docs/engineering/app/configuring/config-types/sync.mdx",sourceDirName:"engineering/app/configuring/config-types",slug:"/engineering/app/configuring/config-types/sync",permalink:"/engineering/app/configuring/config-types/sync",draft:!1,unlisted:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/engineering/app/configuring/config-types/sync.mdx",tags:[],version:"current",frontMatter:{title:"Syncronization"},sidebar:"defaultSidebar",previous:{title:"Registers",permalink:"/engineering/app/configuring/config-types/register"},next:{title:"Widgets",permalink:"/engineering/app/configuring/config-types/widget"}},a={},l=[{value:"Configuration Details",id:"configuration-details",level:2},{value:"Parameter Resource",id:"parameter-resource",level:3},{value:"List of Search Parameters",id:"list-of-search-parameters",level:2},{value:"Config properties",id:"config-properties",level:2},{value:"Full Configuration",id:"full-configuration",level:2}];function d(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"sync-configuration",children:"Sync configuration"}),"\n",(0,r.jsx)(t.p,{children:"This configuration is used to configure which resources are to be synced to and from the server. For every resource there is an optional property for indicating how the data (per resource) should be filter (search parameter)."}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["An application should only have one ",(0,r.jsx)(t.code,{children:"sync"})," configuration"]})}),"\n",(0,r.jsx)(t.h2,{id:"configuration-details",children:"Configuration Details"}),"\n",(0,r.jsx)(t.h3,{id:"parameter-resource",children:"Parameter Resource"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "resourceType": "Parameters",\n  "configType": "sync",\n  "parameter": [\n    // ... list of search parameters ...\n  ]\n}\n\n'})}),"\n",(0,r.jsx)(t.h2,{id:"list-of-search-parameters",children:"List of Search Parameters"}),"\n",(0,r.jsx)(t.p,{children:"The configration includes a list of search parameters, each represented as an object within the 'parameter' array."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "resource": {\n    "resourceType": "SearchParameter",\n    "name": "organization",\n    "code": "organization",\n    "base": ["Patient"],\n    "type": "token",\n    "expression": "#organization"\n  }\n}\n\n'})}),"\n",(0,r.jsx)(t.h2,{id:"config-properties",children:"Config properties"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Required"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"appId"}),(0,r.jsx)(t.td,{children:"Unique identifier for the application"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"configType"}),(0,r.jsx)(t.td,{children:"Type of configuration"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"sync"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"resource"}),(0,r.jsx)(t.td,{children:"Represents a serach parameter configuration"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"resourceType"}),(0,r.jsx)(t.td,{children:'Specifies that the resource is a "SearchParameter"'}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"name"}),(0,r.jsx)(t.td,{children:'Describes the name of the search parameter such as "organization"'}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"code"}),(0,r.jsx)(t.td,{children:'Represents the code associated with the search parameter such as "organization"'}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"base"}),(0,r.jsx)(t.td,{children:'Lists the resource types that this search parameter is applicable to, such as "Patient."'}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"type"}),(0,r.jsx)(t.td,{children:'Specifies the type of the search parameter, e.g., "token."'}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"expression"}),(0,r.jsx)(t.td,{children:': Defines the FHIRPath expression used for searching, e.g., "#organization."'}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"full-configuration",children:"Full Configuration"}),"\n",(0,r.jsx)(t.p,{children:'The file can consist of  multiple search parameters, each represented as an object within the "parameter" array. The parameters cover a variety of FHIR resources such as Patient, Group, Encounter, Observation, Condition, CarePlan, QuestionnaireResponse, Questionnaire, StructureMap, Task, Library, Measure, MeasureReport, and Location.'})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var r=n(6540);const i={},s=r.createContext(i);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);