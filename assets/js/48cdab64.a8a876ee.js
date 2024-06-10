"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[7278],{9515:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(5893),o=r(1151);const a={},i="Storing Preferences",s={id:"engineering/app/datastore/datastore",title:"Storing Preferences",description:"OpenSRP2 uses the Preferences DataStore and Proto DataStore to store preferences data. Primitive types are stored in the Preferences DataStore and structured types are stored in the Proto DataStore.",source:"@site/docs/engineering/app/datastore/datastore.mdx",sourceDirName:"engineering/app/datastore",slug:"/engineering/app/datastore/",permalink:"/engineering/app/datastore/",draft:!1,unlisted:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/engineering/app/datastore/datastore.mdx",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Tooling",permalink:"/engineering/app/configuring/writing-fhir/tooling/"},next:{title:"Tagging Resources",permalink:"/engineering/app/datastore/tagging"}},d={},c=[{value:"PreferenceDataStore",id:"preferencedatastore",level:2},{value:"ProtoDataStore",id:"protodatastore",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"storing-preferences",children:"Storing Preferences"}),"\n",(0,n.jsxs)(t.p,{children:["OpenSRP2 uses the Preferences ",(0,n.jsx)(t.a,{href:"https://developer.android.com/topic/libraries/architecture/datastore",children:"DataStore"})," and Proto DataStore to store preferences data. Primitive types are stored in the Preferences DataStore and structured types are stored in the Proto DataStore."]}),"\n",(0,n.jsxs)(t.p,{children:["The interfaces exposing access to these two storage options are located in ",(0,n.jsx)(t.code,{children:"engine/datastore/PreferenceDataStore"})," and ",(0,n.jsx)(t.code,{children:"engine/datastore/ProtoDataStore"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"preferencedatastore",children:"PreferenceDataStore"}),"\n",(0,n.jsx)(t.p,{children:"To register a key-value pair that you intend to store in the preferences datastore, add a key that enforces the type of data being stored and the name of the key in the Keys companion object."}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"read()"})," method returns a flow. To observe the flow, call the function in the view model and store the resulting flow. You may then convert it to a ",(0,n.jsx)(t.code,{children:"StateFlow"})," and expose it to the UI."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"write()"})," method can be used in the UI directly but it is preferable to expose it through a view model to follow the MVVM pattern."]}),"\n",(0,n.jsxs)(t.p,{children:["Both ",(0,n.jsx)(t.code,{children:"read()"})," and ",(0,n.jsx)(t.code,{children:"write()"})," are Generic methods."]}),"\n",(0,n.jsx)(t.h2,{id:"protodatastore",children:"ProtoDataStore"}),"\n",(0,n.jsxs)(t.p,{children:["Proto DataStore allows us to store objects in a type-safe way. For ease of adaptation, we use ",(0,n.jsx)(t.a,{href:"https://kotlinlang.org/docs/serialization.html#serialize-and-deserialize-json",children:"Kotlinx serialization"})," to allow us to use Kotlin data classes instead of Protobuf files to define the schema of the data being stored."]}),"\n",(0,n.jsxs)(t.p,{children:["Preferably, any objects made within fhircore with the intent of being persisted in the Proto DataStore should be annotated with ",(0,n.jsx)(t.code,{children:"@Serializable"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["You also need to register a serializer that will serialize and deserialize the object stored within a JSON file on the device. The serializers are found within ",(0,n.jsx)(t.code,{children:"engine/datastore/serializers"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>i});var n=r(7294);const o={},a=n.createContext(o);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);