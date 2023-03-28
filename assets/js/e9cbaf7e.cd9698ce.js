"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[151],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8501:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i="Working with rules",l={unversionedId:"rules-engine/working-with-rules",id:"rules-engine/working-with-rules",title:"Working with rules",description:"Rules are used to define logic and conditions for evaluating and processing healthcare data. FHIR rules can be used to validate data, create alerts and notifications based on certain conditions, or trigger workflows and other automated processes.",source:"@site/docs/rules-engine/working-with-rules.mdx",sourceDirName:"rules-engine",slug:"/rules-engine/working-with-rules",permalink:"/rules-engine/working-with-rules",draft:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/docs/rules-engine/working-with-rules.mdx",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"rules-engine-service",permalink:"/rules-engine/rules-engine-service"},next:{title:"Sample FHIR Resources",permalink:"/sample-fhir-resources/"}},u={},c=[{value:"extractValue() rule",id:"extractvalue-rule",level:2},{value:"Config properties of extractValue() rule using the above json config",id:"config-properties-of-extractvalue-rule-using-the-above-json-config",level:2}],s={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"working-with-rules"},"Working with rules"),(0,a.kt)("p",null,"Rules are used to define logic and conditions for evaluating and processing healthcare data. FHIR rules can be used to validate data, create alerts and notifications based on certain conditions, or trigger workflows and other automated processes.\nRules can also be used to extract specific data from a FHIR resource or to transform data from one format to another."),(0,a.kt)("admonition",{type:"info"}),(0,a.kt)("h2",{id:"extractvalue-rule"},"extractValue() rule"),(0,a.kt)("p",null,"To extract specific data value in the sample JSON below, include ",(0,a.kt)("strong",{parentName:"p"},"extractValue()")," and add the required parameters to the method in order to extract the required value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"rules": [\n    {\n      "name": "familyName",\n      "condition": "true",\n      "actions": [\n        "data.put(\'familyName\', fhirPath.extractValue(Group, \'Group.name\'))"\n      ]\n    },\n    {\n      "name": "familyId",\n      "condition": "true",\n      "actions": [\n        "data.put(\'familyId\', fhirPath.extractValue(Group, \'Group.identifier[0].value\'))"\n      ]\n    },\n    {\n      "name": "familyLogicalId",\n      "condition": "true",\n      "actions": [\n        "data.put(\'familyLogicalId\', fhirPath.extractValue(Group, \'Group.id\'))"\n      ]\n    }\n  ],\n')),(0,a.kt)("h2",{id:"config-properties-of-extractvalue-rule-using-the-above-json-config"},"Config properties of extractValue() rule using the above json config"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"Provides a descriptive name for the rule to be extracted"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"condition"),(0,a.kt)("td",{parentName:"tr",align:null},"Indicates that the rule should always be evaluated"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"actions"),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies the specific operations to be performed when the rule is evaluated"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},'"data.put()"')," function is used to store the extracted data in a data object, using a key-value pair format."))}p.isMDXComponent=!0}}]);