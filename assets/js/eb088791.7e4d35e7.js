"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[2545],{7184:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var i=t(5893),r=t(1151);const s={title:"Application"},c="Application configuration",d={id:"engineering/android-app/configuring/config-types/application",title:"Application",description:"These are app wide configurations used to control the application behaviour globally e.g. application theme, app language etc.",source:"@site/docs/engineering/android-app/configuring/config-types/application.mdx",sourceDirName:"engineering/android-app/configuring/config-types",slug:"/engineering/android-app/configuring/config-types/application",permalink:"/engineering/android-app/configuring/config-types/application",draft:!1,unlisted:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/engineering/android-app/configuring/config-types/application.mdx",tags:[],version:"current",frontMatter:{title:"Application"},sidebar:"defaultSidebar",previous:{title:"App flavors",permalink:"/engineering/android-app/configuring/add-application-flavors"},next:{title:"Questionnaires",permalink:"/engineering/android-app/configuring/config-types/forms/questionnaire"}},l={},o=[{value:"Sample JSON",id:"sample-json",level:2},{value:"Config properties",id:"config-properties",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"application-configuration",children:"Application configuration"}),"\n",(0,i.jsx)(n.p,{children:"These are app wide configurations used to control the application behaviour globally e.g. application theme, app language etc."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["There can only be one instance of application configuration for the entire application. There are instances where the ",(0,i.jsx)(n.code,{children:"Event Workflow"})," is added to the application config. See ",(0,i.jsx)(n.a,{href:"https://docs.opensrp.io/engineering/android-app/configuring/event-management/resource-closure-by-background-worker",children:"here"}),"\nThe ",(0,i.jsx)(n.code,{children:"logGpsLocation"})," config takes in a list of ",(0,i.jsx)(n.code,{children:"LocationLogOptions"})," to toggle whether to capture GPS coordinates in the application. We can currently define this to capture Location GPS on Questionnaire submission by passing the log option ",(0,i.jsx)(n.code,{children:"QUESTIONNAIRE"})," as shown in the sample JSON."]})}),"\n",(0,i.jsx)(n.h2,{id:"sample-json",children:"Sample JSON"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "appId": "app",\n    "configType": "application",\n    "appTitle": "eCBIS (CHA & CHSS)",\n    "remoteSyncPageSize": 100,\n    "languages": [\n        "en"\n    ],\n    "useDarkTheme": false,\n    "syncInterval": 15,\n    "syncStrategies": [\n        "Location",\n        "Organization",\n        "CareTeam",\n        "Practitioner"\n    ],\n    "loginConfig": {\n        "showLogo": true,\n        "enablePin": true,\n        "showAppTitle" : true,\n        "logoHeight" : 120,\n        "logoWidth" : 140\n    },\n    "deviceToDeviceSync": {\n        "resourcesToSync": [\n            "Group",\n            "Patient",\n            "CarePlan",\n            "Task",\n            "Encounter",\n            "Observation",\n            "Condition",\n            "Questionnaire",\n            "QuestionnaireResponse"\n        ]\n    },\n    "logGpsLocations": [\n        "QUESTIONNAIRE"\n    ]\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"config-properties",children:"Config properties"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"appId"})}),(0,i.jsx)(n.td,{children:"Unique identifier for the application"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"configType"})}),(0,i.jsx)(n.td,{children:"Type of configuration"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"application"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"appTitle"})}),(0,i.jsx)(n.td,{children:"Name of the application displayed on side menu (drawer)"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:'""'})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"remoteSyncPageSize"})}),(0,i.jsx)(n.td,{children:"Sync batch size"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"100"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"languages"})}),(0,i.jsx)(n.td,{children:"Supported languages"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"['en']"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"useDarkTheme"})}),(0,i.jsx)(n.td,{children:"Indicate whether to apply dark theme"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"false"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"syncInterval"})}),(0,i.jsx)(n.td,{children:"Configuration duration for periodic sync"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"30"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"syncStrategies"})}),(0,i.jsx)(n.td,{children:"Tag every resource with the values for the resource types indicated here"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"emptyList()"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"loginConfig.showLogo"})}),(0,i.jsx)(n.td,{children:"Display logo in login page"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"true"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"loginConfig.enablePin"})}),(0,i.jsx)(n.td,{children:"Request user for pin after login; to be used for subsequent logins"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"false"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"loginConfig.logoHeight"})}),(0,i.jsx)(n.td,{children:"Set the maximum height a logo can have"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"120"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"loginConfig.logoWidth"})}),(0,i.jsx)(n.td,{children:"Set the maximum width a logo can have"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"140"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"loginConfig.showAppTitle"})}),(0,i.jsx)(n.td,{children:"Toggle App title in LoginScreen visibility"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"true"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"deviceToDeviceSync.resourcesToSync"})}),(0,i.jsx)(n.td,{children:"Types of resource to be synced from one device to another during peer connection"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"false"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"snackBarTheme"})}),(0,i.jsx)(n.td,{children:"Color styling for the SnackBar"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"SnackBarThemeConfig()"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"reportRepeatTime"})}),(0,i.jsx)(n.td,{children:"Time when to re-run reporting"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:'""'})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"taskStatusUpdateJobDuration"})}),(0,i.jsx)(n.td,{children:"Interval of when to run status update service"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"PT15M"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"taskExpireJobDuration"})}),(0,i.jsx)(n.td,{children:"Interval of when to run task expiry service"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"PT30M"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"taskCompleteCarePlanJobDuration"})}),(0,i.jsx)(n.td,{children:"Interval of when to run task completion service"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"PT60M"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"showLogo"})}),(0,i.jsx)(n.td,{children:"Toggle whether to show the logo"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"true"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"taskBackgroundWorkerBatchSize"})}),(0,i.jsx)(n.td,{children:"Batch size of tasks to be fetched from the server"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"500"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"eventWorkflows"})}),(0,i.jsxs)(n.td,{children:["A list of ",(0,i.jsx)(n.code,{children:"EventWorkflow"}),"s"]}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"emptyList()"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"logGpsLocation"})}),(0,i.jsxs)(n.td,{children:["A list of ",(0,i.jsx)(n.code,{children:"LocationLogOptions"})," to toggle whether to capture GPS coordinates"]}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"emptyList()"})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>c});var i=t(7294);const r={},s=i.createContext(r);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);