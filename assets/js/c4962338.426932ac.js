"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[519],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>f});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,m=u["".concat(p,".").concat(f)]||u[f]||s[f]||o;return r?t.createElement(m,a(a({ref:n},d),{},{components:r})):t.createElement(m,a({ref:n},d))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6252:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=r(7462),i=(r(7294),r(3905));const o={},a="Form Authoring (Things to consider when writing forms)",l={unversionedId:"engineering/android-app/writing-fhir/form-authoring",id:"engineering/android-app/writing-fhir/form-authoring",title:"Form Authoring (Things to consider when writing forms)",description:"- Make sure that the enableWhen expressions are accompanied by the enableBehaviour attribute in order to avoid form crashes.",source:"@site/docs/engineering/android-app/writing-fhir/form-authoring.mdx",sourceDirName:"engineering/android-app/writing-fhir",slug:"/engineering/android-app/writing-fhir/form-authoring",permalink:"/engineering/android-app/writing-fhir/form-authoring",draft:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/docs/engineering/android-app/writing-fhir/form-authoring.mdx",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"FHIRPath expressions",permalink:"/engineering/android-app/writing-fhir/fhir_path"},next:{title:"PlanDefinitions",permalink:"/engineering/android-app/writing-fhir/plan-definiton"}},p={},c=[],d={toc:c};function s(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"form-authoring-things-to-consider-when-writing-forms"},"Form Authoring (Things to consider when writing forms)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure that the ",(0,i.kt)("inlineCode",{parentName:"li"},"enableWhen")," expressions are accompanied by the ",(0,i.kt)("inlineCode",{parentName:"li"},"enableBehaviour")," attribute in order to avoid form crashes."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"enableBehaviour")," defines whether the expressions on the ",(0,i.kt)("inlineCode",{parentName:"li"},"enableWhen")," are to use ",(0,i.kt)("inlineCode",{parentName:"li"},"and")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"or")," logic."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"enableBehaviour")," options are ",(0,i.kt)("inlineCode",{parentName:"li"},"any")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"or")," & ",(0,i.kt)("inlineCode",{parentName:"li"},"all")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"and"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "enableWhen": [\n    {\n      "question": "cf0093a9-1e38-422b-fc81-273caa0bb48a",\n      "operator": "=",\n      "answerCoding": {\n        "system": "urn:uuid:d3051c21-8668-412e-a2dd-105cf274b260",\n        "code": "no"\n      }\n    },\n    {\n      "question": "94357450-e603-49f7-899c-464ecd10ddd1",\n      "operator": "=",\n      "answerCoding": {\n        "system": "urn:uuid:4ae66618-142d-4e2c-dd66-5d63c14b83a9",\n        "code": "no"\n      }\n    },\n    {\n      "question": "14648d8c-c88f-40be-9f25-66d7ba621482",\n      "operator": "=",\n      "answerCoding": {\n        "system": "urn:uuid:08516020-d926-4463-863e-d6f45b0d317b",\n        "code": "no"\n      }\n    }\n  ],\n  "enableBehaviour":"all"\n}\n')))}s.isMDXComponent=!0}}]);