"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[1006],{9223:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=i(4848),r=i(8453);const o={},s="P2P Sync",c={id:"engineering/app/configuring/p2p_sync",title:"P2P Sync",description:'OpenSRP supports device-to-device syncing through an additional library. To add the P2P library use `p2p-lib = "XXX-SNAPSHOT` in your libs.version.toml file. After this sync your application to update the added library.',source:"@site/docs/engineering/app/configuring/p2p_sync.mdx",sourceDirName:"engineering/app/configuring",slug:"/engineering/app/configuring/p2p_sync",permalink:"/engineering/app/configuring/p2p_sync",draft:!1,unlisted:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/engineering/app/configuring/p2p_sync.mdx",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Internationalization",permalink:"/engineering/app/configuring/internationalization"},next:{title:"PDF Generation",permalink:"/engineering/app/configuring/pdf-generation"}},a={},d=[{value:"Enabling P2P sync configuration",id:"enabling-p2p-sync-configuration",level:2},{value:"Example P2P configuration",id:"example-p2p-configuration",level:3},{value:"Config properties of P2P sync",id:"config-properties-of-p2p-sync",level:3},{value:"Resources to sync",id:"resources-to-sync",level:3},{value:"Example P2P sync workflow",id:"example-p2p-sync-workflow",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"p2p-sync",children:"P2P Sync"})}),"\n",(0,t.jsxs)(n.p,{children:["OpenSRP supports device-to-device syncing through an additional library. To add the P2P library use ",(0,t.jsx)(n.code,{children:'p2p-lib = "XXX-SNAPSHOT'})," in your ",(0,t.jsx)(n.code,{children:"libs.version.toml"})," file. After this sync your application to update the added library."]}),"\n",(0,t.jsx)(n.h2,{id:"enabling-p2p-sync-configuration",children:"Enabling P2P sync configuration"}),"\n",(0,t.jsx)(n.p,{children:"To enable P2P sync we need to make changes to enable viewing P2P UI elements and configure what to sync over P2P."}),"\n",(0,t.jsx)(n.h3,{id:"example-p2p-configuration",children:"Example P2P configuration"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "id": "p2p_sync",\n    "visible": true,\n    "display": "Transfer Data",\n    "menuIconConfig": {\n        "type": "local",\n        "reference": "ic_p2p"\n    },\n    "actions": [\n        {\n            "trigger": "ON_CLICK",\n            "workflow": "DEVICE_TO_DEVICE_SYNC",\n            "id": "navigateToP2PScreen"\n        }\n    ]\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"config-properties-of-p2p-sync",children:"Config properties of P2P sync"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"id"}),(0,t.jsx)(n.td,{children:"uniquieId of your p2p_sync block"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"visible"}),(0,t.jsx)(n.td,{children:"Boolean to show whether this is to be shown"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"apps"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"display"}),(0,t.jsx)(n.td,{children:"Title text that should be shown on the device"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"menuIconConfig"}),(0,t.jsxs)(n.td,{children:["The icon to show. This can be configured through ICON configuration. ",(0,t.jsx)(n.a,{href:"https://docs.opensrp.io/engineering/android-app/configuring/config-types/widget#how-to-use-button-with-icon-and-copy-ability",children:"See here"})]}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,t.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"actions"}),(0,t.jsx)(n.td,{children:"Action to be performed when once clicks on the display above. See actions parameters under questionnaire"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"DEVICE_TO_DEVICE_SYNC application workflow can be triggered via configurable actions as indicated in the sample navigation configuration above."})}),"\n",(0,t.jsx)(n.h3,{id:"resources-to-sync",children:"Resources to sync"}),"\n",(0,t.jsxs)(n.p,{children:["You also need to define which resources to be synced. This configuration should be added as part of ",(0,t.jsx)(n.a,{href:"https://docs.opensrp.io/engineering/android-app/configuring/config-types/application",children:"Application configuration"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"deviceToDeviceSync": {\n    "resourcesToSync": [\n        "Group",\n        "Patient",\n        "CarePlan",\n        "Task",\n        "Encounter",\n        "Observation",\n        "Condition",\n        "Questionnaire",\n        "QuestionnaireResponse",\n        "RelatedPerson",\n        "Flag",\n        "Immunization"\n    ]\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"example-p2p-sync-workflow",children:"Example P2P sync workflow"}),"\n",(0,t.jsxs)(n.p,{children:["The workflow below shows an example of syncronzing data from device to device.\n",(0,t.jsx)(n.img,{alt:"P2P_SYNC",src:i(3421).A+"",width:"1280",height:"569"})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},3421:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/p2p-7115a3f55d1404b0bb3d3f05dda733a7.png"},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>c});var t=i(6540);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);