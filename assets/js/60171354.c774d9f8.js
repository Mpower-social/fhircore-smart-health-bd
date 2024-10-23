"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[8738],{4816:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=i(4848),r=i(8453);const s={},a="Tagging Resources",o={id:"engineering/app/datastore/tagging",title:"Tagging Resources",description:"OpenSRP2 uses meta.tag to add additional information to resources for filtering during sycronization and analysis.",source:"@site/docs/engineering/app/datastore/tagging.mdx",sourceDirName:"engineering/app/datastore",slug:"/engineering/app/datastore/tagging",permalink:"/engineering/app/datastore/tagging",draft:!1,unlisted:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/engineering/app/datastore/tagging.mdx",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Storing Preferences",permalink:"/engineering/app/datastore/"},next:{title:"App Content Versioning",permalink:"/engineering/app/system-design/configs-versioning"}},d={},c=[{value:"Description of Tags",id:"description-of-tags",level:2},{value:"Example Tags",id:"example-tags",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"tagging-resources",children:"Tagging Resources"})}),"\n",(0,n.jsxs)(t.p,{children:["OpenSRP2 uses ",(0,n.jsx)(t.code,{children:"meta.tag"})," to add additional information to resources for filtering during sycronization and analysis."]}),"\n",(0,n.jsxs)(t.p,{children:["All tags have the system prefix ",(0,n.jsx)(t.code,{children:"https://smartregister.org/"})," and a system suffix based on the type of codes that they manage."]}),"\n",(0,n.jsx)(t.h2,{id:"description-of-tags",children:"Description of Tags"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"meta.tag"})," field is set to a ",(0,n.jsx)(t.code,{children:"code"}),". We require the ",(0,n.jsx)(t.code,{children:"system"})," and ",(0,n.jsx)(t.code,{children:"code"})," fields to be complete to properly use the tag and rely on the ",(0,n.jsx)(t.code,{children:"display"})," field for a human readable description, although we do not surface this information to any app users."]}),"\n",(0,n.jsxs)(t.p,{children:["In the FHIR specification the ",(0,n.jsx)(t.code,{children:"system"})," field is the defined as the terminology service that defines the code. Our tagging interprets that as defining a sub-terminology relevant for the specific tags purpose. For example, in the ",(0,n.jsx)(t.code,{children:"app-version"})," tag the ",(0,n.jsx)(t.code,{children:'"https://smartregister.org/app-version"'})," system defines the set of app version ",(0,n.jsx)(t.code,{children:"code"}),"s that are considered valid ",(0,n.jsx)(t.code,{children:"app-version"}),"s."]}),"\n",(0,n.jsx)(t.p,{children:"The tags we currently set are shown below."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"System Suffix"}),(0,n.jsx)(t.th,{children:"Display"}),(0,n.jsx)(t.th,{children:"Purpose"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"app-version"})}),(0,n.jsx)(t.td,{children:"Application Version"}),(0,n.jsx)(t.td,{children:"This is the application version as defined in the compiled app."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"care-team-tag-id"})}),(0,n.jsx)(t.td,{children:"Practitioner CareTeam"}),(0,n.jsx)(t.td,{children:"This is the CareTeam linked to the Practitioner that is logged into the app when the resource is created."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"practitioner-tag-id"})}),(0,n.jsx)(t.td,{children:"Practitioner"}),(0,n.jsx)(t.td,{children:"This is the Practitioner that is logged into the app when the resource is created."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"location-tag-id"})}),(0,n.jsx)(t.td,{children:"Practitioner Location"}),(0,n.jsx)(t.td,{children:"This is the Location linked to the Organization of the Practitioner that is logged into the app when the resource is created."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"organisation-tag-id"})}),(0,n.jsx)(t.td,{children:"Practitioner Organization"}),(0,n.jsx)(t.td,{children:"This is the Organization linked to the Practitioner that is logged into the app when the resource is created."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"related-entity-location-tag-id"})}),(0,n.jsx)(t.td,{children:"Related Entity Location"}),(0,n.jsxs)(t.td,{children:['"Entity" here is a ',(0,n.jsx)(t.code,{children:"Patient"}),", ",(0,n.jsx)(t.code,{children:"Group"}),", Point of Service (as a ",(0,n.jsx)(t.code,{children:"Location"})," resource), or other organizing unit, and this stores the ID of a ",(0,n.jsx)(t.code,{children:"Location"})," resource (or the resource itself if it is a ",(0,n.jsx)(t.code,{children:"Location"}),") lnked to that entity."]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"example-tags",children:"Example Tags"}),"\n",(0,n.jsx)(t.p,{children:"Below is an example of the above tags as it would appear in the JSON serialization of a FHIR resource."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'    {\n      "system": "https://smartregister.org/app-version",\n      "code": "1.1.0-sidBunda",\n      "display": "Application Version"\n    },\n    {\n      "system": "https://smartregister.org/care-team-tag-id",\n      "code": "47d68cac-306f-4b75-9704-b4ed48b24f76",\n      "display": "Practitioner CareTeam"\n    },\n    {\n      "system": "https://smartregister.org/practitioner-tag-id",\n      "code": "9db48504-9f63-411b-b61e-28351d7af5e8",\n      "display": "Practitioner"\n    },\n    {\n      "system": "https://smartregister.org/location-tag-id",\n      "code": "Not defined",\n      "display": "Practitioner Location"\n    },\n    {\n      "system": "https://smartregister.org/organisation-tag-id",\n      "code": "ca7d3362-8048-4fa0-8fdd-6da33423cc6b",\n      "display": "Practitioner Organization"\n    },\n    {\n      "system": "https://smartregister.org/related-entity-location-tag-id",\n      "code": "33f45e09-f96e-41d3-9916-fb96455a4cb2",\n      "display": "Related Entity Location"\n    }\n'})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var n=i(6540);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);