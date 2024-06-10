"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[3782],{7456:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var s=r(5893),i=r(1151);const t={sidebar_label:"Publishing SDK Artifacts"},a="Publishing FHIR SDK Library Artifacts",o={id:"engineering/app/developer-setup/publishing-fhir-sdk-artifacts",title:"Publishing FHIR SDK Library Artifacts",description:"Local Publishing",source:"@site/docs/engineering/app/developer-setup/publishing-fhir-sdk-artifacts.mdx",sourceDirName:"engineering/app/developer-setup",slug:"/engineering/app/developer-setup/publishing-fhir-sdk-artifacts",permalink:"/engineering/app/developer-setup/publishing-fhir-sdk-artifacts",draft:!1,unlisted:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/engineering/app/developer-setup/publishing-fhir-sdk-artifacts.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Publishing SDK Artifacts"},sidebar:"defaultSidebar",previous:{title:"Code Standards",permalink:"/engineering/app/developer-setup/code-standards"},next:{title:"Sentry setup",permalink:"/engineering/app/developer-setup/sentry"}},l={},d=[{value:"Local Publishing",id:"local-publishing",level:3},{value:"Remote Publishing",id:"remote-publishing",level:3},{value:"Credentials",id:"credentials",level:4},{value:"Processes",id:"processes",level:4},{value:"Commits",id:"commits",level:4},{value:"Versioning",id:"versioning",level:4},{value:"Publishing",id:"publishing",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"publishing-fhir-sdk-library-artifacts",children:"Publishing FHIR SDK Library Artifacts"}),"\n",(0,s.jsx)(n.h3,{id:"local-publishing",children:"Local Publishing"}),"\n",(0,s.jsx)(n.p,{children:"At the moment, we have the following FHIR SDK artifacts that need to be released so that they can be included as dependencies on reliant applications e.g. FHIR Core"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Android FHIR Common Library"}),"\n",(0,s.jsx)(n.li,{children:"Android FHIR Engine Library"}),"\n",(0,s.jsx)(n.li,{children:"Android FHIR Structured Data Capture Library"}),"\n",(0,s.jsx)(n.li,{children:"Android FHIR Workflow Library"}),"\n",(0,s.jsx)(n.li,{children:"Android FHIR Structured Data Capture - Barcode Extensions (contrib)"}),"\n",(0,s.jsx)(n.li,{children:"Android FHIR Structured Data Capture - Location Widget Extensions (contrib)"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Sometimes one wants to test the changes on the repo e.g. on the ",(0,s.jsx)(n.code,{children:"master"})," branch without doing a remote release to ",(0,s.jsx)(n.em,{children:"Sonatype"})," during development. It is possible to do this locally."]}),"\n",(0,s.jsxs)(n.p,{children:["We can use the ",(0,s.jsx)(n.em,{children:"Android FHIR Structured Data Capture(SDC) Library"})," as an example:"]}),"\n",(0,s.jsxs)(n.p,{children:["First,  one needs to edit the ",(0,s.jsx)(n.em,{children:"Releases"})," file ",(0,s.jsx)(n.code,{children:"buildSrc/src/main/kotlin/Releases.kt"})," and add a unique(to your local machine) artifact identifier for the SDC library version.\nFor instance, if on the ",(0,s.jsx)(n.code,{children:"master"})," branch under the ",(0,s.jsx)(n.code,{children:"object DataCapture : LibraryArtifact"})," the version reads ",(0,s.jsx)(n.code,{children:"0.1.0-beta02"}),", you might want to change that to ",(0,s.jsx)(n.code,{children:"0.1.0-beta02-dev"}),". Then later for new changes use ",(0,s.jsx)(n.code,{children:"0.1.0-beta02-dev2"})," and so on."]}),"\n",(0,s.jsx)(n.p,{children:"This approach allows for multiple variations of local artifacts with your development changes and also helps avoid clashes with any remote artifact versions with a similar identifier."}),"\n",(0,s.jsxs)(n.p,{children:["Using the above example you then need to include the new version as a dependency in your ",(0,s.jsx)(n.code,{children:"build.gradle"})," file and reference it like this: ",(0,s.jsx)("br",{})," ",(0,s.jsx)(n.code,{children:"api('org.smartregister.android.fhir:data-capture:0.1.0-beta02-dev') {"})]}),"\n",(0,s.jsxs)(n.p,{children:["Once all the above is in place you just need to run the command: ",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.code,{children:"./gradlew :datacapture:publishReleasePublicationToMavenLocal"}),". ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(n.p,{children:["Your artifact should now be available under your maven local repo. location ",(0,s.jsx)(n.code,{children:"~/.m2/repository/org/smartregister/android/fhir/data-capture/0.1.0-beta02-dev/"})]}),"\n",(0,s.jsx)(n.p,{children:"Building FHIR Core should now import the new artifact version. MavenLocal is already configured as an artifact source."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Note:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This process needs to be repeated for all of the above aforementioned artifacts incase there are changes required there as well for testing."}),"\n",(0,s.jsx)(n.li,{children:"If you need to test changes present in other un-merged branches, you'd need to build the release artifact from a release branch that has all the other (un-merged) branch changes as well."}),"\n",(0,s.jsxs)(n.li,{children:["For unmerged changes, always pay special attention to this file ",(0,s.jsx)(n.a,{href:"https://github.com/google/android-fhir/blob/master/engine/src/main/java/com/google/android/fhir/db/impl/ResourceDatabase.kt",children:"ResourceDatabase"}),". The file contains migration scripts for the database. If the scripts end up in an illegal state, it would load to inconsistencies with the schema."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"remote-publishing",children:"Remote Publishing"}),"\n",(0,s.jsx)(n.h4,{id:"credentials",children:"Credentials"}),"\n",(0,s.jsxs)(n.p,{children:["In order to publish artifacts in OpenSRP's ",(0,s.jsx)(n.code,{children:"org.smartregister"})," ",(0,s.jsx)(n.em,{children:"Sonatype"})," group on maven, you need to be authenticated (and authorized). With the current configuration you need to set up your client credentials in the ",(0,s.jsx)(n.em,{children:"global"})," ",(0,s.jsx)(n.code,{children:"gradle.properties"})," file as show below"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-properties",children:"~/.gradle/gradle.properties\n\n  sonatypeUsername=<username>\n  sonatypePassword=<password>\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," Name the property keys exactly as shown above. The credentials should not be pushed for version control else they will be available publicly. This set up will also work if you have your own Sonatype account you want to publish to."]}),"\n",(0,s.jsx)(n.h4,{id:"processes",children:"Processes"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["On ",(0,s.jsx)(n.a,{href:"https://github.com/opensrp/android-fhir",children:"OpenSRP's Github fork of the Android FHIR SDK"})," (Assuming there are new changes) click on ",(0,s.jsx)(n.em,{children:"Sync fork"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Check out"})," to ",(0,s.jsx)(n.code,{children:"master"})," branch locally and ",(0,s.jsx)(n.em,{children:"pull"})," the latest changes"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Checkout"})," to ",(0,s.jsx)(n.code,{children:"master-release"})," branch and ",(0,s.jsx)(n.em,{children:"merge"})," in ",(0,s.jsx)(n.code,{children:"master"})," changes"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Update the versions"})," of the various modules you want to publish in the ",(0,s.jsx)(n.code,{children:"buildSrc/src/main/kotlin/Releases.kt"})," file"]}),"\n",(0,s.jsxs)(n.li,{children:["Update the ",(0,s.jsx)(n.a,{href:"https://github.com/google/android-fhir/blob/master/buildSrc/src/main/kotlin/Dependencies.kt#L250-L252",children:"versions of the dependencies here"})," used internally by the SDK"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Make a commit"})," with the updated versions and ",(0,s.jsx)(n.em,{children:"add a commit message"})," in the format shown in the ",(0,s.jsx)(n.a,{href:"#commits",children:"Commits section below"})]}),"\n",(0,s.jsxs)(n.li,{children:["Push the commit to the ",(0,s.jsx)(n.code,{children:"master-release"})," branch for tracking"]}),"\n",(0,s.jsxs)(n.li,{children:["Now that the ",(0,s.jsx)(n.code,{children:"master-release"})," branch has all the latest updates from parent ",(0,s.jsx)(n.code,{children:"master"}),", ",(0,s.jsx)(n.em,{children:"Check out"})," to a new branch on your local with today's date in the dot separated double digit format ",(0,s.jsx)(n.strong,{children:"DD-MM-YYYY"})," and prefixe with ",(0,s.jsx)(n.code,{children:"release-"})," e.g. ",(0,s.jsx)(n.code,{children:"release-20.10.2023"})]}),"\n",(0,s.jsxs)(n.li,{children:["Merge in any other unmerged PR branches mentioned in the previous commit message and have not been merged to ",(0,s.jsx)(n.code,{children:"master"})," yet. Ensure they branches have been updated with the latest master/main branch."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Publish"})," the specific modules that you wanted. See the ",(0,s.jsx)(n.a,{href:"#publishing",children:"Publishing section below"})]}),"\n",(0,s.jsx)(n.li,{children:"After a successful publish to Maven push your release branch above for versioning."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," Always remember to check out the ",(0,s.jsx)(n.em,{children:"commits diff"})," to tell which modules were affected by the latest changes. You can confirm that your module artifact was uploaded as it is available at ",(0,s.jsx)(n.a,{href:"https://oss.sonatype.org/content/repositories/snapshots/org/smartregister/",children:"https://oss.sonatype.org/content/repositories/snapshots/org/smartregister/"})]}),"\n",(0,s.jsx)(n.h4,{id:"commits",children:"Commits"}),"\n",(0,s.jsxs)(n.p,{children:["Each new commit message on the ",(0,s.jsx)(n.code,{children:"master-release"})," branch should build upon the previous commit message. The format is as shown below, with the title listing all modules.\nCopy over the whole message and remove any entries for PRs already merged into ",(0,s.jsx)(n.code,{children:"master"})," and add any new ones."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:" SDK Release: Engine, SDC, Workflow, Contrib:Barcode, Common, Knowledger\n - With unmerged PR #1344\n - With unmerged PR #1542\n"})}),"\n",(0,s.jsxs)(n.p,{children:["See related ",(0,s.jsx)(n.a,{href:"https://github.com/google/android-fhir/commit/10e46a0eac5f41b68b5bb1caa87069b83d36c6b1",children:"sample commit here"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," The above helps the next person doing a release to include exactly all the code updates that had been merged in previeously. If by the time we are publishing again the branch has already been merged into ",(0,s.jsx)(n.code,{children:"master"})," branch then there'd be no need to add the message again. Also a glance at the header shows which specific modules were affected. Other than confirming the module changes that were incorporated after merging in ",(0,s.jsx)(n.code,{children:"master"}),", check out which modules the unmerged PRs updated. The commit message is additive hence always use the previous commit message as a template for the new commit message (to either reduct or add the current required unmerged PRs)."]}),"\n",(0,s.jsx)(n.h4,{id:"versioning",children:"Versioning"}),"\n",(0,s.jsxs)(n.p,{children:["When versioning we extend from the current versions of the SDK library by adding ",(0,s.jsx)(n.code,{children:"-preview-SNAPSHOT"})," suffix. Subsequently in future updates we increment that version e.g. ",(0,s.jsx)(n.code,{children:"-preview2-SNAPSHOT"})]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.code,{children:"buildSrc/src/main/kotlin/Releases.kt"})," file, we edit the entry as shown below"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'buildSrc/src/main/kotlin/Releases.kt\n\nobject DataCapture : LibraryArtifact {\n  override val artifactId = "data-capture"\n  override val version = "1.0.0-preview-SNAPSHOT"\n  override val name = "Android FHIR Structured Data Capture Library"\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"publishing",children:"Publishing"}),"\n",(0,s.jsxs)(n.p,{children:["Once all the above is in place you just need to run the command: ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"./gradlew :datacapture:publishReleasePublicationToSonatypeRepository --stacktrace\n"})}),"\n",(0,s.jsxs)(n.p,{children:["All the other modules follow a similar format, you only need to change the module you are targeting, e.g. to publish ",(0,s.jsx)(n.em,{children:"engine"})," use the command: ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"./gradlew :engine:publishReleasePublicationToSonatypeRepository --stacktrace\n"})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.p,{children:["Your artifact should now be available under the corresponding artifact group under your org. on Sonatype ",(0,s.jsx)("br",{})," e.g. see ",(0,s.jsx)(n.a,{href:"https://oss.sonatype.org/content/repositories/snapshots/org/smartregister/data-capture/",children:"OpenSRP Standard Data Capture Artifacts"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>a});var s=r(7294);const i={},t=s.createContext(i);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);