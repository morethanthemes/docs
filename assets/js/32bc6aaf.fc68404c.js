"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7074],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),m=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(o),d=n,h=u["".concat(c,".").concat(d)]||u[d]||s[d]||l;return o?r.createElement(h,a(a({ref:t},p),{},{components:o})):r.createElement(h,a({ref:t},p))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,a=new Array(l);a[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var m=2;m<l;m++)a[m]=o[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},2425:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=o(7462),n=(o(7294),o(3905));const l={sidebar_position:2},a="Customize the color scheme",i={unversionedId:"how-to/custom-color-profile",id:"how-to/custom-color-profile",title:"Customize the color scheme",description:"You can make changes to the colors of the website to make it unique and more personalized.",source:"@site/docs/how-to/custom-color-profile.md",sourceDirName:"how-to",slug:"/how-to/custom-color-profile",permalink:"/docs/how-to/custom-color-profile",draft:!1,editUrl:"https://github.com/morethanthemes/docs/edit/master/docs/how-to/custom-color-profile.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Customize the theme",permalink:"/docs/how-to/customize-theme"},next:{title:"Configure Font Awesome Library for Webmaker+",permalink:"/docs/how-to/font-awesome"}},c={},m=[{value:"Select the Local color profile",id:"select-the-local-color-profile",level:2},{value:"Apply new custom color palette",id:"apply-new-custom-color-palette",level:2}],p={toc:m};function s(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"customize-the-color-scheme"},"Customize the color scheme"),(0,n.kt)("p",null,"You can make changes to the colors of the website to make it unique and more personalized."),(0,n.kt)("h2",{id:"select-the-local-color-profile"},"Select the Local color profile"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Visit the ",(0,n.kt)("strong",{parentName:"li"},"Theme Setting > Look'n'feel"),"."),(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"Local")," Color Scheme.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"color-local-selection",src:o(2546).Z,width:"1365",height:"661"})),(0,n.kt)("p",null,"This will activate the file ",(0,n.kt)("inlineCode",{parentName:"p"},"css/theme/color-local.css"),". It comes with the default theme colors."),(0,n.kt)("h2",{id:"apply-new-custom-color-palette"},"Apply new custom color palette"),(0,n.kt)("p",null,"You can do that by changing the color values that exist in the file mentioned above. For example, the file ",(0,n.kt)("inlineCode",{parentName:"p"},"css/theme/color-local.css")," that Elegant+ theme comes with has the values shown below:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"color-local-code-before",src:o(5029).Z,width:"850",height:"888"})),(0,n.kt)("p",null,"Now we will change the following sections:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Primary color: ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"change ",(0,n.kt)("strong",{parentName:"li"},"--mt-color-primary")," from ",(0,n.kt)("inlineCode",{parentName:"li"},"#016550")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"#654501")),(0,n.kt)("li",{parentName:"ul"},"change ",(0,n.kt)("strong",{parentName:"li"},"--mt-color-primary-dark")," from ",(0,n.kt)("inlineCode",{parentName:"li"},"#004c3c")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"#4d3400")),(0,n.kt)("li",{parentName:"ul"},"change ",(0,n.kt)("strong",{parentName:"li"},"--mt-color-primary-light")," from ",(0,n.kt)("inlineCode",{parentName:"li"},"#01cb9f")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"#cb8b01")))),(0,n.kt)("li",{parentName:"ol"},"Accent color: ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"change ",(0,n.kt)("strong",{parentName:"li"},"--mt-color-accent")," from ",(0,n.kt)("inlineCode",{parentName:"li"},"#f8dcd6")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"#fafa38")),(0,n.kt)("li",{parentName:"ul"},"change ",(0,n.kt)("strong",{parentName:"li"},"--mt-color-accent-dark")," from ",(0,n.kt)("inlineCode",{parentName:"li"},"#f8dcd6")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"#fafa75")),(0,n.kt)("li",{parentName:"ul"},"change ",(0,n.kt)("strong",{parentName:"li"},"--mt-color-accent-light")," from ",(0,n.kt)("inlineCode",{parentName:"li"},"#f8dcd6")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"#f8fa75")))),(0,n.kt)("li",{parentName:"ol"},"Secondary color: ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"change ",(0,n.kt)("strong",{parentName:"li"},"--mt-color-secondary")," from ",(0,n.kt)("inlineCode",{parentName:"li"},"#2a199a")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"#9a1919")),(0,n.kt)("li",{parentName:"ul"},"change ",(0,n.kt)("strong",{parentName:"li"},"--mt-color-secondary-dark")," from ",(0,n.kt)("inlineCode",{parentName:"li"},"#1e126e")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"#6e1212")),(0,n.kt)("li",{parentName:"ul"},"change ",(0,n.kt)("strong",{parentName:"li"},"--mt-color-secondary-light")," from ",(0,n.kt)("inlineCode",{parentName:"li"},"#8a7bea")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"#ea7b7b"))))),(0,n.kt)("p",null,"After the changes, the file ",(0,n.kt)("inlineCode",{parentName:"p"},"css/theme/color-local.css")," should look like this:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"color-local-example-code",src:o(826).Z,width:"844",height:"948"})))}s.isMDXComponent=!0},5029:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/color-local-code-before-73c4f420c06e5648df41e6edf99c9672.png"},826:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/color-local-code-result-2d50a51fa579d5915d17df8a4d88f45e.png"},2546:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/color-local-selection-5223cdd55621a54e1c8cc26edba5c103.png"}}]);