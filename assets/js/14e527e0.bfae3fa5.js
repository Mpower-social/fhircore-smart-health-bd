"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[601],{8393:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=t(5893),a=t(1151);const s={},r="Immunization",o={id:"features/supported-health-domains/immunization",title:"Immunization",description:"The OpenSRP Electronic Immunization Registries (EIR) Package empowers healthcare workers to seamlessly manage and coordinate immunization delivery at the facility and community level within a WHO standards-based platform. Even in offline settings, Ona\u2019s EIR tool enables you to accurately register households and individuals at both the facility and community level; efficiently enroll patients in their care plans ensuring that no one falls through the cracks; schedule immunization follow-up tasks so that every patient receives their vaccines on time; and record immunizations accurately.   Data is automatically tallied for the health workers with all data flowing in real-time dashboards for decision making reducing the burden of time consuming paper-based reporting.",source:"@site/docs/features/supported-health-domains/immunization.mdx",sourceDirName:"features/supported-health-domains",slug:"/features/supported-health-domains/immunization",permalink:"/features/supported-health-domains/immunization",draft:!1,unlisted:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/features/supported-health-domains/immunization.mdx",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Supported Domains",permalink:"/features/supported-health-domains/"},next:{title:"App Setup",permalink:"/engineering/getting-started/app-setup"}},l={},d=[{value:"Features and functionality",id:"features-and-functionality",level:2},{value:"Quickstart guide",id:"quickstart-guide",level:2},{value:"Deploying the health information infrastructure",id:"deploying-the-health-information-infrastructure",level:3},{value:"Deploying the reference content",id:"deploying-the-reference-content",level:3},{value:"Configuration and adapting the content",id:"configuration-and-adapting-the-content",level:3},{value:"Reference app user guide",id:"reference-app-user-guide",level:2},{value:"Logging in and getting started",id:"logging-in-and-getting-started",level:3},{value:"Registering a patient",id:"registering-a-patient",level:3},{value:"Recording vaccinations",id:"recording-vaccinations",level:3},{value:"Interoperability interfaces",id:"interoperability-interfaces",level:2},{value:"Master patient index",id:"master-patient-index",level:3},{value:"Transmitting a newly registered OpenSRP 2 patient to the MPI",id:"transmitting-a-newly-registered-opensrp-2-patient-to-the-mpi",level:4},{value:"Transmitting changes to an existing OpenSRP 2 patient&#39;s demographic details to the MPI",id:"transmitting-changes-to-an-existing-opensrp-2-patients-demographic-details-to-the-mpi",level:4},{value:"Supply chain",id:"supply-chain",level:3},{value:"Transmitting stock consumption to an LMIS",id:"transmitting-stock-consumption-to-an-lmis",level:4},{value:"Shared health record",id:"shared-health-record",level:3},{value:"Storing an immunization in the shared health record",id:"storing-an-immunization-in-the-shared-health-record",level:4},{value:"Storing conditions from a screening in the shared health record",id:"storing-conditions-from-a-screening-in-the-shared-health-record",level:4}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"immunization",children:"Immunization"}),"\n",(0,i.jsx)(n.p,{children:"The OpenSRP Electronic Immunization Registries (EIR) Package empowers healthcare workers to seamlessly manage and coordinate immunization delivery at the facility and community level within a WHO standards-based platform. Even in offline settings, Ona\u2019s EIR tool enables you to accurately register households and individuals at both the facility and community level; efficiently enroll patients in their care plans ensuring that no one falls through the cracks; schedule immunization follow-up tasks so that every patient receives their vaccines on time; and record immunizations accurately.   Data is automatically tallied for the health workers with all data flowing in real-time dashboards for decision making reducing the burden of time consuming paper-based reporting."}),"\n",(0,i.jsx)(n.p,{children:"The EIR package leverages the next-gen FHIR-native OpenSRP 2 platform, which enables it to support the WHO SMART Guidelines and ensures seamless interoperability with other national platforms like DHIS2."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"immunization record",src:t(4172).Z+"",width:"1150",height:"716"})}),"\n",(0,i.jsx)(n.h2,{id:"features-and-functionality",children:"Features and functionality"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Patient registration and management"})," - register patients, capture demographic data and assign unique user ids while checking to prevent duplicate registrations."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"WHO Immunization Care Guidelines"})," - automatically creates immunization schedules based on WHO guidelines.  The EIR package currently supports all WHO child immunization, Covid-19 and HPV vaccine recommendations.  It can be expanded to support new vaccines (eg. Malaria) and localized to align with MoH country guidelines."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Record Services"})," - record patient immunizations including the antigen/vaccine, dose, lot and date given.  Track when vaccines are refused and capture the reason why."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Optimizes for on and off-line settings"})," - Works offline and is designed to work equally well in a facility or outreach setting."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"CHW Companion App"})," - ensure no child is missed with an included CHW application that enables team based care between facility staff and CHWs at the community level.  Eg. All children registered by CHWs will automatically enroll for care at the facility."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Safety monitoring"})," - record when a patient experiences adverse events and link this to the specific vaccine and lot number to help ensure patient follow-up."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Growth Monitoring"})," - the application supports growth and nutrition monitoring including automatic Z-score calculation and MUAC measurements."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Stock Management"})," - a built in stock module supports stock-taking, resupply, consumption tracking, and wastage that is automatically calculated based on usage in the app.  The stock module can be integrated with LMIS helping to provide important visibility on vaccine demand to prevent stockouts."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Vital Statistics"})," - optional CRVS module to capture birth and death notifications and/or registrations and the issuance of birth certificates."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"In-app Reporting"})," - automatically calculate immunization service data statistics eliminating the need for time consuming paper-based tally sheets."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Real-time Analytics"})," - visualize program data on interactive dashboards with rich geospatial support to show coverage and risk areas."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Client Messaging"})," - leverage built integrations with platforms like RapidPro and Turn to send immunization reminders and educational messaging that can increase vaccine demand and uptake."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Precision health"})," - leverage the built in geo-widget to target at risk communities and households for service delivery."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Integrations"})," - built in integration ensures all data flows seamlessly into DHIS2. Integrations with common LMIS, CRVS are also possible."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Interoperability"})," - OpenSRP is HL7 FHIR native ensuring best-in class interoperability to enable seamless two-way data flows with other systems."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"quickstart-guide",children:"Quickstart guide"}),"\n",(0,i.jsx)(n.p,{children:"[TBC]"}),"\n",(0,i.jsx)(n.h3,{id:"deploying-the-health-information-infrastructure",children:"Deploying the health information infrastructure"}),"\n",(0,i.jsx)(n.p,{children:"[TBC]"}),"\n",(0,i.jsx)(n.h3,{id:"deploying-the-reference-content",children:"Deploying the reference content"}),"\n",(0,i.jsx)(n.p,{children:"[TBC]"}),"\n",(0,i.jsx)(n.h3,{id:"configuration-and-adapting-the-content",children:"Configuration and adapting the content"}),"\n",(0,i.jsx)(n.p,{children:"[TBC]"}),"\n",(0,i.jsx)(n.h2,{id:"reference-app-user-guide",children:"Reference app user guide"}),"\n",(0,i.jsx)(n.p,{children:"[TBC]"}),"\n",(0,i.jsx)(n.h3,{id:"logging-in-and-getting-started",children:"Logging in and getting started"}),"\n",(0,i.jsx)(n.p,{children:"[TBC]"}),"\n",(0,i.jsx)(n.h3,{id:"registering-a-patient",children:"Registering a patient"}),"\n",(0,i.jsx)(n.p,{children:"[TBC]"}),"\n",(0,i.jsx)(n.h3,{id:"recording-vaccinations",children:"Recording vaccinations"}),"\n",(0,i.jsx)(n.p,{children:"[TBC]"}),"\n",(0,i.jsx)(n.h2,{id:"interoperability-interfaces",children:"Interoperability interfaces"}),"\n",(0,i.jsx)(n.p,{children:"A critical component of immuniation tracking is the ability to connect to and share information with other information systems involved in providing and tracking care. Below we describe some common interoperability interfaces that link immunization workflows to broader health systems information infrastructure."}),"\n",(0,i.jsx)(n.h3,{id:"master-patient-index",children:"Master patient index"}),"\n",(0,i.jsx)(n.p,{children:"A Master patient index (MPI) is an information system that maintains an authoritative list of all patients in specific geographic area, typically a country. We will focus on common use cases that are crticial to successful interoperability."}),"\n",(0,i.jsx)(n.h4,{id:"transmitting-a-newly-registered-opensrp-2-patient-to-the-mpi",children:"Transmitting a newly registered OpenSRP 2 patient to the MPI"}),"\n",(0,i.jsx)(n.p,{children:"In this use case a patient or client has been newly registered in the mobile app and the mobile app has syncronized its data with the remote FHIR API that servers as the operational data store for the mobile app. We would now like to send this newly stored patient information to a third-party MPI so that any other participaants in the health system also have access to this new patient's information. We will also want to store the ID assigned to the new patient by the MPI in our operation data store's patient API so that we have a 1-to-1 link between our representation of the patient and the MPI's represenatation of the patient."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"storing a new patient in the MPI",src:t(9118).Z+"",width:"1246",height:"804"})}),"\n",(0,i.jsx)(n.p,{children:"FHIR Resources to transmit:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Patient"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Request:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Path: e.g. ",(0,i.jsx)(n.code,{children:"/patients"})]}),"\n",(0,i.jsxs)(n.li,{children:["Method: ",(0,i.jsx)(n.code,{children:"POST"})]}),"\n",(0,i.jsx)(n.li,{children:"Body: Patient resource"}),"\n",(0,i.jsx)(n.li,{children:"Headers: Authentication token"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Response:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ID assigned by MPI"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"transmitting-changes-to-an-existing-opensrp-2-patients-demographic-details-to-the-mpi",children:"Transmitting changes to an existing OpenSRP 2 patient's demographic details to the MPI"}),"\n",(0,i.jsx)(n.p,{children:"In this use case there is an existing OpenSRP 2 patient that has already been stored in the MPI. OpenSRP 2 has received the patient's ID from the MPI and stored it in its own FHIR Patient resource. Suppose a user of the mobile app edits the patient's details, eventually we would like to propagate these changes to the MPI, ensuring eventually consistency between patient data in the operational FHIR API and the MPI."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"updating a patient in the MPI",src:t(457).Z+"",width:"1238",height:"776"})}),"\n",(0,i.jsx)(n.p,{children:"Request"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Path: e.g. ",(0,i.jsx)(n.code,{children:"/patients"})]}),"\n",(0,i.jsxs)(n.li,{children:["Method: ",(0,i.jsx)(n.code,{children:"PUT"})]}),"\n",(0,i.jsxs)(n.li,{children:["Parameters","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["ID: ",(0,i.jsx)(n.code,{children:"[Patient.identifier[first where type=MPI].value]"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Body: Map of keys and values to change those keys to (potentially nested)"}),"\n",(0,i.jsx)(n.li,{children:"Headers: Authentication token"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Response:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Success or failure"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"supply-chain",children:"Supply chain"}),"\n",(0,i.jsx)(n.p,{children:"It is not possible to deliver vaccines if the physical commodities (doses in vials, hyperdermic needles, gloves, etc) are not available and there is not an effective supply chain and cold chain to move those commodities from their point of creation, or geographic zone entry, to their point or disbursement or delivery."}),"\n",(0,i.jsx)(n.p,{children:"Many countries use a logistics management information system (LMIS) to track commodities that are moving through supply chain, incuding vaccines and related vaccine delivery materials. We will describe the common use cases around transmitting stock consumption data from a FHIR API to an LMIS."}),"\n",(0,i.jsx)(n.h4,{id:"transmitting-stock-consumption-to-an-lmis",children:"Transmitting stock consumption to an LMIS"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"storing data in the LMIS",src:t(8034).Z+"",width:"1246",height:"792"})}),"\n",(0,i.jsx)(n.p,{children:"FHIR Resources to transmit:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Observation"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Request:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Path: e.g. ",(0,i.jsx)(n.code,{children:"/transactions"})]}),"\n",(0,i.jsxs)(n.li,{children:["Method: ",(0,i.jsx)(n.code,{children:"POST"})]}),"\n",(0,i.jsx)(n.li,{children:"Body: Commodity: ID, Stock change: signed integer, Reason: text"}),"\n",(0,i.jsx)(n.li,{children:"Headers: Authentication token"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Response:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Success or failure"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"shared-health-record",children:"Shared health record"}),"\n",(0,i.jsxs)(n.p,{children:["Analogous to the MPI's role as an authoritative list of patients, the shared health record's (SHR) role is to be an authority health record for each patient. Any system that creates or modifies patient health record information is then responsible for transmitting those additions or changes to the shared health record system. Any system that is requires access to the shared health record will have to authenticate itself, prove that it is authorized, and can then retrieve the shared health record. Shared health records are typicall structured to follow a well defined standard within FHIR, such as the ",(0,i.jsx)(n.a,{href:"https://www.hl7.org/fhir/uv/ips/",children:"internation patient summary (IPS)"}),". This way shared health records are portable between any systems that understands the IPS standard."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"updating the SHR",src:t(2299).Z+"",width:"1236",height:"1090"})}),"\n",(0,i.jsx)(n.h4,{id:"storing-an-immunization-in-the-shared-health-record",children:"Storing an immunization in the shared health record"}),"\n",(0,i.jsx)(n.p,{children:"We assume the patient already has a shared health record identified by their MPI ID number. The MPI can manage this by creating an empty shared health record whenever it creates a new patient. The FHIR data store has received new FHIR Observation resources that represent a vaccine being delivered. It then sends the new Observations to the shared health record API along with the patient's MPI. The shared health record services interprets and extracts information from the Observations to update the stored record for the patient."}),"\n",(0,i.jsx)(n.p,{children:"FHIR Resources to transmit:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Observation"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Request:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Path: e.g. ",(0,i.jsx)(n.code,{children:"/update"})]}),"\n",(0,i.jsxs)(n.li,{children:["Method: ",(0,i.jsx)(n.code,{children:"POST"})]}),"\n",(0,i.jsxs)(n.li,{children:["Parameters","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["ID: ",(0,i.jsx)(n.code,{children:"[Patient.identifier[first where type=MPI].value]"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Body: Observations to store"}),"\n",(0,i.jsx)(n.li,{children:"Headers: Authentication token"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Response:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Success or failure"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"storing-conditions-from-a-screening-in-the-shared-health-record",children:"Storing conditions from a screening in the shared health record"}),"\n",(0,i.jsx)(n.p,{children:"This use case is similar to above except that instead a vaccine being delivered and new FHIR Observation resources being created, we assume an assessment or screening has been complianted and a new condition is discovered in the patient, represented by a new FHIR Condition resource. The FHIR data store receives new FHIR Condition resources and sends it to the shared health record API along with the patient's MPI ID. The shared health record services then interprets and extracts information from the Condition to update the stored record for the patient."}),"\n",(0,i.jsx)(n.p,{children:"FHIR Resources to transmit:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Condition"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Request:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Path: e.g. ",(0,i.jsx)(n.code,{children:"/update"})]}),"\n",(0,i.jsxs)(n.li,{children:["Method: ",(0,i.jsx)(n.code,{children:"POST"})]}),"\n",(0,i.jsxs)(n.li,{children:["Parameters","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["ID: ",(0,i.jsx)(n.code,{children:"[Patient.identifier[first where type=MPI].value]"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Body: Conditions to store"}),"\n",(0,i.jsx)(n.li,{children:"Headers: Authentication token"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Response:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Success or failure"}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},4172:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/iz-profile-register-b2f922466b81da662c577241468bc659.png"},9118:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/patient-to-mpi-e9c8ef836e4aacc63c470484fe193944.png"},457:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/patient-updated-mpi-1d53dc6357da90b5f15bbacf32127102.png"},2299:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/shr-updated-b4ba1260207677d171753107b519a4ed.png"},8034:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/stock-to-lmis-b8a34c14bd86419168f09ea7828a3a4a.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var i=t(7294);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);