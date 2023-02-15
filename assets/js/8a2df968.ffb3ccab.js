"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[498],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=a,m=c["".concat(s,".").concat(g)]||c[g]||u[g]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o="Widget configurations",l={unversionedId:"configurations/widgets/widget-config",id:"configurations/widgets/widget-config",title:"Widget configurations",description:"Configurations used to configure widgets. FHIR Core uses widgets to render views. Examples are rows, columns, cards, buttons",source:"@site/docs/configurations/widgets/widget-config.mdx",sourceDirName:"configurations/widgets",slug:"/configurations/widgets/widget-config",permalink:"/configurations/widgets/widget-config",draft:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/docs/configurations/widgets/widget-config.mdx",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Sync configuration",permalink:"/configurations/sync-config"},next:{title:"Developer Setup",permalink:"/developer-setup/"}},s={},p=[{value:"Flex Alignment widgets",id:"flex-alignment-widgets",level:2},{value:"Display other resources (List Resources) inside another list",id:"display-other-resources-list-resources-inside-another-list",level:2},{value:"Config properties of list resources using the above json config",id:"config-properties-of-list-resources-using-the-above-json-config",level:2},{value:"Config properties of a List Widget",id:"config-properties-of-a-list-widget",level:2},{value:"How to use COMPOUND_TEXT",id:"how-to-use-compound_text",level:2},{value:"Config properties of COMPOUND_TEXT",id:"config-properties-of-compound_text",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"widget-configurations"},"Widget configurations"),(0,a.kt)("p",null,"Configurations used to configure widgets. FHIR Core uses widgets to render views. Examples are rows, columns, cards, buttons"),(0,a.kt)("admonition",{type:"info"}),(0,a.kt)("h2",{id:"flex-alignment-widgets"},"Flex Alignment widgets"),(0,a.kt)("p",null,"To display items in flexRow below sample JSON config works fine. Replace ",(0,a.kt)("strong",{parentName:"p"},"COMPOUND_TEXT")," with your preferred widget component. Please note, the below json borrows from ",(0,a.kt)("strong",{parentName:"p"},"LIST")," component properties"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n     "viewType": "LIST",\n      "id": "give_your_list_an_id",\n      "baseResource": "Resource_to_use",\n      "orientation": "HORIZONTAL",\n       "emptyList": {\n        "message": ""\n                     },\n        "registerCard": {\n        "rules": [],\n         "views": [\n          {\n           "viewType": "COMPOUND_TEXT",\n            "primaryTextBackgroundColor": "#F9CFD1",\n             "primaryText": "@{carePlanTitle}",\n             "primaryTextColor": "@{carePlanTextColor}",\n             "fontSize": 13,\n             "padding": 7,\n              "borderRadius": 6\n      }\n    ]\n    }\n   }\n')),(0,a.kt)("h2",{id:"display-other-resources-list-resources-inside-another-list"},"Display other resources (List Resources) inside another list"),(0,a.kt)("p",null,"To display list resources inside a list and execute it's rules , add it an attribute called ",(0,a.kt)("strong",{parentName:"p"},"resources")," inside your list and define it's parameters as shown in the list below\nIf the config doesn't have a ",(0,a.kt)("strong",{parentName:"p"},"resources")," attribute, the app logic defaults to using relatedResources and executes rules in the rule config section."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "viewType": "LIST",\n  "id": "readyTasksList",\n  "resources": [\n    {\n      "id": "availableTask",\n      "relatedResourceId": "availableTasks",\n      "resourceType": "Task",\n      "conditionalFhirPathExpression": "((Task.status = \'ready\' or Task.status = \'cancelled\' or  Task.status = \'failed\') and (Task.code.empty()))"\n    }\n  ],\n  "emptyList": {\n    "message": "No visit tasks available for this patient at the moment"\n  },\n  "registerCard": {\n    "rules": [\n      {\n        "name": "taskStatus",\n        "condition": "true",\n        "actions": [\n          "data.put(\'taskStatus\', fhirPath.extractValue(Task, \'Task.status\'))"\n        ]\n      }\n    ],\n    "views": [\n      {\n        "viewType": "BUTTON",\n        "smallSized": "true",\n        "text": "@{taskDescriptionWithStartDate}",\n        "status": "@{taskStatusColorCode}",\n        "visible": "true",\n        "enabled": "@{patientActive}",\n        "actions": [\n          {\n            "trigger": "ON_CLICK",\n            "workflow": "LAUNCH_QUESTIONNAIRE",\n            "questionnaire": {\n              "id": "@{taskQuestionnaireId}",\n              "title": "@{taskDescription}",\n              "saveButtonText": "Save",\n              "taskId": "@{taskId}",\n              "resourceIdentifier": "@{taskFor}"\n            }\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,a.kt)("h2",{id:"config-properties-of-list-resources-using-the-above-json-config"},"Config properties of list resources using the above json config"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"Unique identifier for the resource"),(0,a.kt)("td",{parentName:"tr",align:"center"},"no but highly recommended"),(0,a.kt)("td",{parentName:"tr",align:"center"},"app defaults to using resourceType.Name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"relatedResourceId"),(0,a.kt)("td",{parentName:"tr",align:null},"Unique identifier for the relatedResources"),(0,a.kt)("td",{parentName:"tr",align:"center"},"no but highly recommended"),(0,a.kt)("td",{parentName:"tr",align:"center"},"app defaults to using resourceType.Name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resourceType"),(0,a.kt)("td",{parentName:"tr",align:null},"The resource to to get/fetch data from e.g Task or Careplan"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"conditionalFhirPathExpression"),(0,a.kt)("td",{parentName:"tr",align:null},"FhirPathExpression to get to use when filtering the resource defined in resourceType section"),(0,a.kt)("td",{parentName:"tr",align:"center"},"no"),(0,a.kt)("td",{parentName:"tr",align:"center"},"app defaults to using relatedResources types and fhirPathexpression")))),(0,a.kt)("h2",{id:"config-properties-of-a-list-widget"},"Config properties of a List Widget"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"Unique identifier for the application"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"viewType"),(0,a.kt)("td",{parentName:"tr",align:null},"First viewType should be a list. This will help in iterating over the data to display"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"baseResource"),(0,a.kt)("td",{parentName:"tr",align:null},"Resource to get data from"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"orientation"),(0,a.kt)("td",{parentName:"tr",align:null},"This is the direction you want to the widgets to flex"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"VERTICAL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"emptyList"),(0,a.kt)("td",{parentName:"tr",align:null},"empty list json with a message to show in case the resource data to display is empty"),(0,a.kt)("td",{parentName:"tr",align:"center"},"no but highly recommended"),(0,a.kt)("td",{parentName:"tr",align:"center"},"no visits")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"registerCard"),(0,a.kt)("td",{parentName:"tr",align:null},"card to display widgets at"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"views"),(0,a.kt)("td",{parentName:"tr",align:null},"the desired widgets and their properties to be displayed"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resources"),(0,a.kt)("td",{parentName:"tr",align:null},"the list resources to execute rules for"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No but should be included if you want to display data as described in the sub-title"),(0,a.kt)("td",{parentName:"tr",align:"center"},"emptyList()")))),(0,a.kt)("h2",{id:"how-to-use-compound_text"},"How to use COMPOUND_TEXT"),(0,a.kt)("p",null,"This view type allows for the display of multiple lines of text, where each line can be formatted separately."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n               "viewType": "COMPOUND_TEXT",\n               "primaryTextBackgroundColor": "#F9CFD1",\n               "primaryText": "@{taskName}",\n               "primaryTextColor": "#000000",\n               "padding": 7,\n               "borderRadius": 6\n             },\n             {\n               "viewType": "COMPOUND_TEXT",\n               "primaryText": "Start date: @{taskStartDate}",\n               "primaryTextColor": "#5A5A5A",\n               "fontSize": 20.0\n\n             }\n')),(0,a.kt)("h2",{id:"config-properties-of-compound_text"},"Config properties of COMPOUND_TEXT"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"viewType"),(0,a.kt)("td",{parentName:"tr",align:null},"First viewType should be a list. This will help in iterating over the data to display"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"primaryTextBackgroundColor"),(0,a.kt)("td",{parentName:"tr",align:null},"Background color of the primary text to be displayed. This should not overshadow the primary text to be displayed"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"primaryText"),(0,a.kt)("td",{parentName:"tr",align:null},"The primary text to be displayed"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"primaryTextColor"),(0,a.kt)("td",{parentName:"tr",align:null},"The color of the primary text to be displayed. This should be visible"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fontSize"),(0,a.kt)("td",{parentName:"tr",align:null},"The font size should be a number."),(0,a.kt)("td",{parentName:"tr",align:"center"},"No but you can override if you want to display a different size of text"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"padding"),(0,a.kt)("td",{parentName:"tr",align:null},"Offsets the content of the view by a specific number of pixels. This should be a number"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"borderRadius"),(0,a.kt)("td",{parentName:"tr",align:null},"Rounds the corners of the view's outer edge"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}u.isMDXComponent=!0}}]);