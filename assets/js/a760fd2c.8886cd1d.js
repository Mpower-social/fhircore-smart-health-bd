"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[1836],{1434:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var i=t(5893),r=t(1151);const o={title:"Geowidget"},s="Geowidget configuration",d={id:"engineering/android-app/configuring/config-types/geowidget",title:"Geowidget",description:"Configurations used to configure map view. FHIR Core uses a mapbox generated UI to position households in a map depending on the location of the household.",source:"@site/docs/engineering/android-app/configuring/config-types/geowidget.mdx",sourceDirName:"engineering/android-app/configuring/config-types",slug:"/engineering/android-app/configuring/config-types/geowidget",permalink:"/engineering/android-app/configuring/config-types/geowidget",draft:!1,unlisted:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/engineering/android-app/configuring/config-types/geowidget.mdx",tags:[],version:"current",frontMatter:{title:"Geowidget"},sidebar:"defaultSidebar",previous:{title:"Validation",permalink:"/engineering/android-app/configuring/config-types/forms/validation"},next:{title:"Measure reports",permalink:"/engineering/android-app/configuring/config-types/measure-report"}},c={},l=[{value:"Sample JSON",id:"sample-json",level:2},{value:"Config properties",id:"config-properties",level:2}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"geowidget-configuration",children:"Geowidget configuration"}),"\n",(0,i.jsx)(n.p,{children:"Configurations used to configure map view. FHIR Core uses a mapbox generated UI to position households in a map depending on the location of the household."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["There can be multiple instances of this configuration type in the application; each should have a unique ",(0,i.jsx)(n.code,{children:"id"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"sample-json",children:"Sample JSON"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "appId": "map",\n    "id": "householdRegistrationMap",\n    "configType": "geoWidget",\n    "profileId": "householdProfile",\n    "registrationQuestionnaire": {\n        "id": "82952-geowidget",\n        "title": "{{add.family}}",\n        "saveButtonText": "ADD FAMILY",\n        "setPractitionerDetails": true,\n        "setOrganizationDetails": true\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"config-properties",children:"Config properties"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"appId"}),(0,i.jsx)(n.td,{children:"Unique identifier for the application"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"configType"}),(0,i.jsx)(n.td,{children:"Type of configuration"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"geoWidget"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"id"}),(0,i.jsx)(n.td,{children:"A unique identifier for this multi-config type"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"profileId"}),(0,i.jsx)(n.td,{children:"The identifier for the profile to be opened when a point on the map (representing a household) is clicked"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"registrationQuestionnaire"}),(0,i.jsx)(n.td,{children:"Configuration for the register questionnaire"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"}})]})]})]})]})}function g(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>s});var i=t(7294);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);