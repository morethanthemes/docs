"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4880],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var n=o(7294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,l=function(e,t){if(null==e)return{};var o,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var i=n.createContext({}),c=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(o),d=l,g=h["".concat(i,".").concat(d)]||h[d]||f[d]||a;return o?n.createElement(g,r(r({ref:t},p),{},{components:o})):n.createElement(g,r({ref:t},p))}));function d(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=o.length,r=new Array(a);r[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var c=2;c<a;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},9556:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=o(7462),l=(o(7294),o(3905));const a={sidebar_position:7},r="How to host Google fonts locally",s={unversionedId:"how-to/google-fonts-locally",id:"how-to/google-fonts-locally",title:"How to host Google fonts locally",description:"The guide provides step-by-step instructions for hosting Google fonts on your own web server. The steps below refer to the Base+ theme and the PT Serif font, as an example, but they can be applied to any other font loaded in our theme distributions.",source:"@site/docs/how-to/google-fonts-locally.md",sourceDirName:"how-to",slug:"/how-to/google-fonts-locally",permalink:"/docs/how-to/google-fonts-locally",draft:!1,editUrl:"https://github.com/morethanthemes/docs/edit/master/docs/how-to/google-fonts-locally.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Change PWA application name.",permalink:"/docs/how-to/change-pwa-application-name"},next:{title:"Custom Block Types",permalink:"/docs/category/custom-block-types"}},i={},c=[{value:"Download the Google font using the webfonts-helper",id:"download-the-google-font-using-the-webfonts-helper",level:2},{value:"Download fonts directly from Google\u2019s servers",id:"download-fonts-directly-from-googles-servers",level:2}],p={toc:c};function f(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"how-to-host-google-fonts-locally"},"How to host Google fonts locally"),(0,l.kt)("p",null,"The guide provides step-by-step instructions for hosting Google fonts on your own web server. The steps below refer to the Base+ theme and the PT Serif font, as an example, but they can be applied to any other font loaded in our theme distributions."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create the folder ",(0,l.kt)("inlineCode",{parentName:"li"},"themes/custom/baseplus/fonts"),"."),(0,l.kt)("li",{parentName:"ol"},"Create the ",(0,l.kt)("inlineCode",{parentName:"li"},"themes/custom/baseplus/css/theme/local-fonts.css")," file."),(0,l.kt)("li",{parentName:"ol"},"Download the font. There are two different ways on how to do that in the chapters below(",(0,l.kt)("a",{parentName:"li",href:"#download-the-google-font-using-the-webfonts-helper"},"1"),", ",(0,l.kt)("a",{parentName:"li",href:"#download-fonts-directly-from-googles-servers"},"2"),")."),(0,l.kt)("li",{parentName:"ol"},"Place the font files of the extracted zip in the created ",(0,l.kt)("inlineCode",{parentName:"li"},"themes/custom/baseplus/fonts")," folder.\nThe file structure should look as in the following screen capture:")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"google-fonts-locally-1",src:o(4983).Z,width:"1242",height:"863"})),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Navigate to the ",(0,l.kt)("inlineCode",{parentName:"li"},"themes/custom/baseplus/baseplus.libraries.yml")," file and comment the ",(0,l.kt)("inlineCode",{parentName:"li"},"fonts-pt-serif:")," line. Then, uncomment the following ",(0,l.kt)("inlineCode",{parentName:"li"},"fonts-pt-serif:")," as in the screen capture below:")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"google-fonts-locally-2",src:o(3143).Z,width:"1095",height:"842"})),(0,l.kt)("h2",{id:"download-the-google-font-using-the-webfonts-helper"},"Download the Google font using the webfonts-helper"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Visit the google-webfonts-helper tool:\n",(0,l.kt)("a",{parentName:"li",href:"https://google-webfonts-helper.herokuapp.com/fonts"},"https://google-webfonts-helper.herokuapp.com/fonts")),(0,l.kt)("li",{parentName:"ol"},"Pick the desired font."),(0,l.kt)("li",{parentName:"ol"},"Choose the charset and the styles you want to use for this font.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"google-fonts-locally-3",src:o(6873).Z,width:"1185",height:"593"})),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Make sure to choose the ",(0,l.kt)("strong",{parentName:"li"},"Modern Browser")," option and in the  ",(0,l.kt)("strong",{parentName:"li"},"Customize folder prefix")," option set the value to ",(0,l.kt)("inlineCode",{parentName:"li"},"../../fonts/")," and copy the CSS that is automatically generated.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"google-fonts-locally-4",src:o(4238).Z,width:"948",height:"794"})),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Paste the generated css in the ",(0,l.kt)("inlineCode",{parentName:"li"},"themes/custom/baseplus/fonts/pt-serif/pt-serif-local.css"),". In our case we used only the woff2 format."),(0,l.kt)("li",{parentName:"ol"},"Download the fonts."),(0,l.kt)("li",{parentName:"ol"},"Place the font files of the extracted zip file in the newly created ",(0,l.kt)("inlineCode",{parentName:"li"},"themes/custom/baseplus/fonts")," folder.  ")),(0,l.kt)("h2",{id:"download-fonts-directly-from-googles-servers"},"Download fonts directly from Google\u2019s servers"),(0,l.kt)("p",null,"This is an alternative to the above download method."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Visit Google Fonts, pick ",(0,l.kt)("strong",{parentName:"li"},"PT Serif")," as the font family, and choose the font weights.\n",(0,l.kt)("a",{parentName:"li",href:"https://fonts.google.com/"},"https://fonts.google.com/")),(0,l.kt)("li",{parentName:"ol"},"Copy the highlighted link tag with query parameters and open it in a new tab.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"google-fonts-locally-5",src:o(6501).Z,width:"1600",height:"755"})),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Each ",(0,l.kt)("inlineCode",{parentName:"li"},"@font-face")," rule, specifies a src to download those font files. Open each URL and download the font.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"google-fonts-locally-6",src:o(1685).Z,width:"1246",height:"593"})))}f.isMDXComponent=!0},4983:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/google-fonts-locally-1-a45d33890075b4770ca48fd9c271a681.png"},3143:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/google-fonts-locally-2-18e31cbf006f7a06975dd8474c94484c.png"},6873:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/google-fonts-locally-3-6f5de1697d19c2ad8080444785ae0b51.png"},4238:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/google-fonts-locally-4-b5b1aa4b7dd2d4d64840f5715e2de0d3.png"},6501:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/google-fonts-locally-5-505729af227aeb74c0e34b8998645511.png"},1685:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/google-fonts-locally-6-b8fcafca7756d57f3f2bfae7d7028125.png"}}]);