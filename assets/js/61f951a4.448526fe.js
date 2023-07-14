"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[379],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1,sidebar_label:"Introduction"},o="Introduction",l={unversionedId:"engineering/android-app/introduction/readme",id:"engineering/android-app/introduction/readme",title:"Introduction",description:'This documentation covers the OpenSRP Android App, which is code-named "FHIR Core" throughout. FHIR Core is a Kotlin application for delivering configurable, offline-capable, and mobile-first healthcare project implementations.',source:"@site/docs/engineering/android-app/introduction/readme.mdx",sourceDirName:"engineering/android-app/introduction",slug:"/engineering/android-app/introduction/",permalink:"/engineering/android-app/introduction/",draft:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/docs/engineering/android-app/introduction/readme.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Introduction"},sidebar:"defaultSidebar",previous:{title:"Supported Domains",permalink:"/features/supported-health-domains/"},next:{title:"Getting started for platform developers",permalink:"/engineering/android-app/getting-started/"}},p={},d=[{value:"Programming Language",id:"programming-language",level:3},{value:"Android Libraries",id:"android-libraries",level:3},{value:"Architecture",id:"architecture",level:3},{value:"Data Access",id:"data-access",level:3},{value:"Configurations",id:"configurations",level:3},{value:"Tests",id:"tests",level:3}],c={toc:d};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,'This documentation covers the OpenSRP Android App, which is code-named "FHIR Core" throughout. FHIR Core is a Kotlin application for delivering configurable, offline-capable, and mobile-first healthcare project implementations.'),(0,a.kt)("p",null,"FHIR Core is architected as a FHIR-native platform powered by Google's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/android-fhir"},"Android FHIR SDK")," and ",(0,a.kt)("a",{parentName:"p",href:"https://hapifhir.io/"},"HAPI FHIR"),". FHIR Core users experience a module-oriented design based on over a decade of real world experience implementing digital health projects with ",(0,a.kt)("a",{parentName:"p",href:"https://opensrp.io/"},"OpenSRP"),". "),(0,a.kt)("p",null,"This repository contains the Android mobile application built to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Load configuration data as FHIR resources"),(0,a.kt)("li",{parentName:"ul"},"Support the WHO Smart Guidelines"),(0,a.kt)("li",{parentName:"ul"},"Manage the identities of healthcare workers (HCWs), community health workers (CHWs), care teams, patients, and clients"),(0,a.kt)("li",{parentName:"ul"},"Collect, view, and edit healthcare data with dynamic forms using FHIR's ",(0,a.kt)("a",{parentName:"li",href:"https://hl7.org/fhir/us/sdc/index.html"},"Structured Data Capture")," (SDC) implementation"),(0,a.kt)("li",{parentName:"ul"},"Securely store healthcare data encrypted at rest and securely transmit healthcare data using TLS"),(0,a.kt)("li",{parentName:"ul"},"Manage location hierarchies defined by community to national and international administrative boundaries")),(0,a.kt)("p",null,"For remote data storage and login, the mobile application requires:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("a",{parentName:"li",href:"https://www.keycloak.org/"},"Keycloak")," server to manage identity, authentication, and authorization;"),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("a",{parentName:"li",href:"https://hapifhir.io/"},"HAPI FHIR")," server to store operation and configuration data that includes the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/opensrp/hapi-fhir-keycloak"},"HAPI FHIR to Keycloak integration"),".")),(0,a.kt)("h3",{id:"programming-language"},"Programming Language"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/"},"Kotlin v1.7.10")),(0,a.kt)("h3",{id:"android-libraries"},"Android Libraries"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://developer.android.com/training/dependency-injection/hilt-multi-module"},"Hilt"),"- for dependency injection"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://developer.android.com/jetpack/compose/documentation"},"Jetpack Compose")," - for building sharable declarative Android UI"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://developer.android.com/jetpack/compose/navigation"},"Jetpack Compose navigation")," - to navigate between compose screens"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://developer.android.com/guide/navigation"},"Android navigation component")," - to navigate between activities and fragments"),(0,a.kt)("li",{parentName:"ol"},"Android Livedata and ViewModel")),(0,a.kt)("h3",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"The app is architectured in the following manner:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The app is built around MVVM architecuture with the data layer implemented using the Repository pattern."),(0,a.kt)("li",{parentName:"ol"},"The entry point of the application also follows Single-Activity architecture after the user is logged in.")),(0,a.kt)("p",null,"Generated documentation is available ",(0,a.kt)("a",{parentName:"p",href:"https://docs.opensrp.io/dokka/"},"here"),"."),(0,a.kt)("h3",{id:"data-access"},"Data Access"),(0,a.kt)("p",null,"The application uses FHIR Engine APIs from Google's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/android-fhir"},"Android FHIR SDK")," (which internally uses\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/jetpack/androidx/releases/room"},"Room")," libary) to access the local Sqlite database."),(0,a.kt)("h3",{id:"configurations"},"Configurations"),(0,a.kt)("p",null,"The application syncs particular resources (conventionally, Composition and Binary) from the HAPI FHIR server to configure the app. The configurations control application workflows as well as the look and feel of the app."),(0,a.kt)("h3",{id:"tests"},"Tests"),(0,a.kt)("p",null,"This FHIR Core repository includes:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Unit tests"),(0,a.kt)("li",{parentName:"ol"},"UI and integration tests")))}s.isMDXComponent=!0}}]);