"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[46],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return a?r.createElement(h,o(o({ref:t},s),{},{components:a})):r.createElement(h,o({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6615:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:2,sidebar_label:"Android App"},o="OpenSRP Android App",l={unversionedId:"android-app/readme",id:"android-app/readme",title:"OpenSRP Android App",description:'This documentation covers the OpenSRP Android app, which is code-named "FHIR Core" throughout. FHIR Core is a Kotlin application for delivering configurable, offline-capable, mobile-first healthcare project implementations from local community to national and international scale using FHIR and the WHO Smart Guidelines on Android.',source:"@site/docs/android-app/readme.mdx",sourceDirName:"android-app",slug:"/android-app/",permalink:"/android-app/",draft:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/docs/android-app/readme.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Android App"},sidebar:"defaultSidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"Getting started",permalink:"/android-app/getting-started/"}},p={},d=[{value:"Programming Language",id:"programming-language",level:4},{value:"Android libraries used",id:"android-libraries-used",level:4},{value:"Architecture",id:"architecture",level:4},{value:"Data access",id:"data-access",level:4},{value:"Configurations",id:"configurations",level:4},{value:"Tests",id:"tests",level:4}],s={toc:d};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"opensrp-android-app"},"OpenSRP Android App"),(0,n.kt)("p",null,'This documentation covers the OpenSRP Android app, which is code-named "FHIR Core" throughout. FHIR Core is a Kotlin application for delivering configurable, offline-capable, mobile-first healthcare project implementations from local community to national and international scale using FHIR and the WHO Smart Guidelines on Android.'),(0,n.kt)("p",null,"FHIR Core is architected as a FHIR native digital health platform powered by Google's ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/google/android-fhir"},"Android FHIR SDK")," and ",(0,n.kt)("a",{parentName:"p",href:"https://hapifhir.io/"},"HAPI FHIR"),". FHIR Core users experience a module oriented design based on over a decade of real world experience implementing digital health projects with ",(0,n.kt)("a",{parentName:"p",href:"https://smartregister.org/"},"OpenSRP"),". This repository contains the Android mobile application built to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Load configuration data as FHIR resources"),(0,n.kt)("li",{parentName:"ul"},"Support the WHO Smart Guidelines"),(0,n.kt)("li",{parentName:"ul"},"Manage the identities of healthcare workers (HCWs), community health workers (CHWs), care teams, patients, and clients"),(0,n.kt)("li",{parentName:"ul"},"Collect, view, and edit healthcare data with dynamic forms using FHIR's ",(0,n.kt)("a",{parentName:"li",href:"https://hl7.org/fhir/us/sdc/index.html"},"Structured Data Capture")," (SDC) implementation"),(0,n.kt)("li",{parentName:"ul"},"Securely store healthcare data encrypted at rest and securely transmit healthcare data using TLS"),(0,n.kt)("li",{parentName:"ul"},"Manage location hierarchies defined by community to national and international administrative boundaries")),(0,n.kt)("p",null,"For remote data storage and login, the mobile application requires:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("a",{parentName:"li",href:"https://www.keycloak.org/"},"Keycloak")," server to manage identity, authentication, and authorization;"),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("a",{parentName:"li",href:"https://hapifhir.io/"},"HAPI FHIR")," server to store operation and configuration data that includes the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/opensrp/hapi-fhir-keycloak"},"HAPI FHIR to Keycloak integration"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"OpenSRP the FHIR frontier logo",src:a(8885).Z,width:"1226",height:"1072"})),(0,n.kt)("h4",{id:"programming-language"},"Programming Language"),(0,n.kt)("p",null,"Kotlin -",(0,n.kt)("a",{parentName:"p",href:"https://kotlinlang.org/"},"v1.7.10")),(0,n.kt)("h4",{id:"android-libraries-used"},"Android libraries used"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://developer.android.com/training/dependency-injection/hilt-multi-module"},"Hilt"),"- for dependency injection"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://developer.android.com/jetpack/compose/documentation"},"Jetpack Compose")," - for building sharable declarative Android UI"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://developer.android.com/jetpack/compose/navigation"},"Jetpack Compose navigation")," - to navigate between compose screens"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://developer.android.com/guide/navigation"},"Android navigation component")," - to navigate between activities and fragments"),(0,n.kt)("li",{parentName:"ol"},"Android Livedata and ViewModel")),(0,n.kt)("h4",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,"The app is architectured in the following manner:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The app is built around MVVM architecuture with the data layer implemented using the Repository pattern."),(0,n.kt)("li",{parentName:"ol"},"The entry point of the application also follows Single-Activity architecture after the user is logged in.")),(0,n.kt)("h4",{id:"data-access"},"Data access"),(0,n.kt)("p",null,"The application uses FHIR Engine APIs from Google's ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/google/android-fhir"},"Android FHIR SDK")," (which internally uses\n",(0,n.kt)("a",{parentName:"p",href:"https://developer.android.com/jetpack/androidx/releases/room"},"Room")," libary) to access the local Sqlite database."),(0,n.kt)("h4",{id:"configurations"},"Configurations"),(0,n.kt)("p",null,"The application syncs particular resources (conventionally, Composition and Binary) from the HAPI FHIR server to configure the app. The configurations control application workflows as well as the look and feel of the app."),(0,n.kt)("h4",{id:"tests"},"Tests"),(0,n.kt)("p",null,"This FHIR Core repository includes:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Unit tests"),(0,n.kt)("li",{parentName:"ol"},"UI and integration tests")))}c.isMDXComponent=!0},8885:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/fhircore-48f30b657b8c79f66a99913ef5df9554.png"}}]);