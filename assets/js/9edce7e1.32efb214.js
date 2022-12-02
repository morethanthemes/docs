"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4880],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var n=o(7294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,l=function(e,t){if(null==e)return{};var o,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var i=n.createContext({}),c=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(o),d=l,u=m["".concat(i,".").concat(d)]||m[d]||f[d]||r;return o?n.createElement(u,a(a({ref:t},p),{},{components:o})):n.createElement(u,a({ref:t},p))}));function d(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=o.length,a=new Array(r);a[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,a[1]=s;for(var c=2;c<r;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9556:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>f,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=o(7462),l=(o(7294),o(3905));const r={sidebar_position:3},a="Host Google fonts locally",s={unversionedId:"how-to/google-fonts-locally",id:"how-to/google-fonts-locally",title:"Host Google fonts locally",description:"The guide provides step-by-step instructions for hosting Google fonts on your own web server. The steps below refer to the Base+ theme and the PT Serif font, as an example, but they can be applied to any other font loaded in our theme distributions.",source:"@site/docs/how-to/google-fonts-locally.md",sourceDirName:"how-to",slug:"/how-to/google-fonts-locally",permalink:"/docs/how-to/google-fonts-locally",draft:!1,editUrl:"https://github.com/morethanthemes/docs/edit/master/docs/how-to/google-fonts-locally.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Customize the color scheme",permalink:"/docs/how-to/custom-color-profile"},next:{title:"Create new instances (clones) of existing blocks and assign them to regions",permalink:"/docs/how-to/create-new-instances-of-blocks"}},i={},c=[{value:"Download the Google font using the webfonts-helper",id:"download-the-google-font-using-the-webfonts-helper",level:2},{value:"Download fonts directly from Google\u2019s servers",id:"download-fonts-directly-from-googles-servers",level:2}],p={toc:c};function f(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"host-google-fonts-locally"},"Host Google fonts locally"),(0,l.kt)("p",null,"The guide provides step-by-step instructions for hosting Google fonts on your own web server. The steps below refer to the Base+ theme and the PT Serif font, as an example, but they can be applied to any other font loaded in our theme distributions."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create the folder: ",(0,l.kt)("inlineCode",{parentName:"li"},"themes/custom/baseplus/fonts"),"."),(0,l.kt)("li",{parentName:"ol"},"Create the file: ",(0,l.kt)("inlineCode",{parentName:"li"},"themes/custom/baseplus/css/theme/local-fonts.css"),"."),(0,l.kt)("li",{parentName:"ol"},"Download the font. There are two different ways:",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#download-the-google-font-using-the-webfonts-helper"},"Download via webfonts-helper")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#download-fonts-directly-from-googles-servers"},"Download directly from Google servers")))),(0,l.kt)("li",{parentName:"ol"},"Place the font files of the extracted zip in the created folder: ",(0,l.kt)("inlineCode",{parentName:"li"},"themes/custom/baseplus/fonts"),".\nThe file structure should look as in the following screen capture:")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Screen capture"),(0,l.kt)("img",{src:"/img/docs_img/google-fonts-locally-1.png"})),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Navigate to the file: ",(0,l.kt)("inlineCode",{parentName:"li"},"themes/custom/baseplus/baseplus.libraries.yml"),". Comment the first ",(0,l.kt)("inlineCode",{parentName:"li"},"fonts-pt-serif:")," section and uncomment the next ",(0,l.kt)("inlineCode",{parentName:"li"},"fonts-pt-serif:")," one as in the screen capture below:")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Screen capture"),(0,l.kt)("img",{src:"/img/docs_img/google-fonts-locally-2.png"})),(0,l.kt)("h2",{id:"download-the-google-font-using-the-webfonts-helper"},"Download the Google font using the webfonts-helper"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Visit the google-webfonts-helper tool:\n",(0,l.kt)("a",{parentName:"li",href:"https://google-webfonts-helper.herokuapp.com/fonts"},"https://google-webfonts-helper.herokuapp.com/fonts")),(0,l.kt)("li",{parentName:"ol"},"Pick the desired font."),(0,l.kt)("li",{parentName:"ol"},"Choose the charset and the styles you want to use for this font.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Screen capture"),(0,l.kt)("img",{src:"/img/docs_img/google-fonts-locally-3.png"})),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Make sure to choose the ",(0,l.kt)("strong",{parentName:"li"},"Modern Browser")," option and in the  ",(0,l.kt)("strong",{parentName:"li"},"Customize folder prefix")," option set the value to ",(0,l.kt)("inlineCode",{parentName:"li"},"../../fonts/")," and copy the CSS that is automatically generated.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Screen capture"),(0,l.kt)("img",{src:"/img/docs_img/google-fonts-locally-4.png"})),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Paste the generated css in the file: ",(0,l.kt)("inlineCode",{parentName:"li"},"themes/custom/baseplus/fonts/pt-serif/pt-serif-local.css"),". In our case we used only the woff2 format."),(0,l.kt)("li",{parentName:"ol"},"Download the fonts."),(0,l.kt)("li",{parentName:"ol"},"Place the font files of the extracted zip file in the newly created folder: ",(0,l.kt)("inlineCode",{parentName:"li"},"themes/custom/baseplus/fonts"),".  ")),(0,l.kt)("h2",{id:"download-fonts-directly-from-googles-servers"},"Download fonts directly from Google\u2019s servers"),(0,l.kt)("p",null,"This is an alternative to the above download method."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Visit ",(0,l.kt)("a",{parentName:"li",href:"https://fonts.google.com/"},"Google Fonts"),", pick ",(0,l.kt)("strong",{parentName:"li"},"PT Serif")," as the font family, and choose the font weights."),(0,l.kt)("li",{parentName:"ol"},"Copy the highlighted link tag with query parameters and open it in a new tab.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Screen capture"),(0,l.kt)("img",{src:"/img/docs_img/google-fonts-locally-5.png"})),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Each ",(0,l.kt)("inlineCode",{parentName:"li"},"@font-face")," rule, specifies a src to download those font files. Open each URL and download the font.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Screen capture"),(0,l.kt)("img",{src:"/img/docs_img/google-fonts-locally-6.png"})))}f.isMDXComponent=!0}}]);