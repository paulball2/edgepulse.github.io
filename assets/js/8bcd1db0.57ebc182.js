"use strict";(self.webpackChunkedgepulse=self.webpackChunkedgepulse||[]).push([[965],{4650:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var t=n(4848),s=n(8453);const r={sidebar_position:1},o="Installation Guide",d={id:"tutorial-extras/installation-guide",title:"Installation Guide",description:"A quickstart guide to get started with EdgePulse on Android",source:"@site/docs/tutorial-extras/installation-guide.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/installation-guide",permalink:"/tutorial/tutorial-extras/installation-guide",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Congratulations!",permalink:"/tutorial/tutorial-basics/congratulations"},next:{title:"Integrate SDK",permalink:"/tutorial/tutorial-extras/integrate-sdk"}},l={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Add EdgePulse to Your Gradle File",id:"add-edgepulse-to-your-gradle-file",level:2},{value:"Set Required Permissions",id:"set-required-permissions",level:2}];function u(e){const i={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"installation-guide",children:"Installation Guide"}),"\n",(0,t.jsxs)(i.p,{children:["A quickstart guide to get started with ",(0,t.jsx)(i.strong,{children:"EdgePulse on Android"})]}),"\n",(0,t.jsx)(i.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Android Studio installed on your development machine"}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"minimal"})," Android development experience"]}),"\n",(0,t.jsx)(i.li,{children:"An EdgePulse account with an access token"}),"\n",(0,t.jsx)(i.li,{children:"A project with a minimum deployment target of Android 10 (API level 29)"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"add-edgepulse-to-your-gradle-file",children:"Add EdgePulse to Your Gradle File"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Open your Android project in Android Studio."}),"\n",(0,t.jsxs)(i.li,{children:["Navigate to the ",(0,t.jsx)(i.strong,{children:"app"})," module's ",(0,t.jsx)(i.strong,{children:"build.gradle"})," file."]}),"\n",(0,t.jsxs)(i.li,{children:["Add the following implementation line to the dependencies section:","\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-kotlin",metastring:'title="build.gradle"',children:'implementation("com.edge.pulse:1.x.x")\n'})}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:"Sync your project to apply the changes."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"set-required-permissions",children:"Set Required Permissions"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Open the ",(0,t.jsx)(i.strong,{children:"AndroidManifest.xml"})," file for your project."]}),"\n",(0,t.jsxs)(i.li,{children:["Add the following permissions:","\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",metastring:'title="AndroidManifest.xml"',children:'<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />\n<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />\n<uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />\n<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />\n<uses-permission android:name="android.permission.READ_PHONE_STATE" />\n<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />\n'})}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>d});var t=n(6540);const s={},r=t.createContext(s);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);