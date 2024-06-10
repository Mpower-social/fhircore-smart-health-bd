"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[5895],{7582:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=t(5893),r=t(1151);const s={},o="Production setup",c={id:"engineering/backend/production",title:"Production setup",description:"This page provides recommendations when setting up a production deployment.",source:"@site/docs/engineering/backend/production.mdx",sourceDirName:"engineering/backend",slug:"/engineering/backend/production",permalink:"/engineering/backend/production",draft:!1,unlisted:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/engineering/backend/production.mdx",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Keycloak",permalink:"/engineering/backend/keycloak"},next:{title:"DHIS2",permalink:"/engineering/integrations/dhis2"}},l={},d=[{value:"Keycloak Oauth2 clients",id:"keycloak-oauth2-clients",level:3},{value:"Android client",id:"android-client",level:4},{value:"FHIR Web client",id:"fhir-web-client",level:4},{value:"Data pipelines/Analytics client",id:"data-pipelinesanalytics-client",level:4}];function a(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"production-setup",children:"Production setup"}),"\n",(0,i.jsx)(n.p,{children:"This page provides recommendations when setting up a production deployment."}),"\n",(0,i.jsx)(n.h3,{id:"keycloak-oauth2-clients",children:"Keycloak Oauth2 clients"}),"\n",(0,i.jsxs)(n.p,{children:["We use ",(0,i.jsx)(n.a,{href:"https://www.keycloak.org/",children:"Keycloak"})," as our IAM server that stores users, groups, and the access roles of those groups. Before starting the set up of the Keycloak Oauth clients ensure the ",(0,i.jsx)(n.code,{children:"Service Account"})," Role is ",(0,i.jsx)(n.strong,{children:"disabled"}),".",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.em,{children:"Separate"})," OAuth clients should be configured for the ETL Pipes/Analytics and the FHIR Web systems."]}),"\n",(0,i.jsx)(n.h4,{id:"android-client",children:"Android client"}),"\n",(0,i.jsxs)(n.p,{children:["Enable ",(0,i.jsx)(n.strong,{children:"Direct Access Grant only"})," - This client should be configured as a ",(0,i.jsx)(n.code,{children:"Public"})," client. To fetch a token you will not need the client secret.\nThis will use the ",(0,i.jsx)(n.code,{children:"Resource Credentials/Password"})," Grant type."]}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsxs)(n.p,{children:["Do not store any sensitive data like ",(0,i.jsx)(n.em,{children:"password credentials"})," or ",(0,i.jsx)(n.em,{children:"secrets"})," in your production APK e.g. in the ",(0,i.jsx)(n.code,{children:"local.properties"})," file."]})}),"\n",(0,i.jsx)(n.h4,{id:"fhir-web-client",children:"FHIR Web client"}),"\n",(0,i.jsxs)(n.p,{children:["Enable ",(0,i.jsx)(n.strong,{children:"Client Authentication"})," and enable ",(0,i.jsx)(n.strong,{children:"Standard flow"}),". ",(0,i.jsx)(n.em,{children:"Implicit flow should only be used for local dev testing - it can be configured for stage and maybe preview but NOT production."}),".\nThis will use the ",(0,i.jsx)(n.code,{children:"Authorization Code"})," Grant type"]}),"\n",(0,i.jsx)(n.h4,{id:"data-pipelinesanalytics-client",children:"Data pipelines/Analytics client"}),"\n",(0,i.jsxs)(n.p,{children:["Enable ",(0,i.jsx)(n.strong,{children:"Client Authentication"})," and enable ",(0,i.jsx)(n.strong,{children:"Service Account Roles"}),".\nThis will use the ",(0,i.jsx)(n.code,{children:"Client Credentials"})," Grant type."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var i=t(7294);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);