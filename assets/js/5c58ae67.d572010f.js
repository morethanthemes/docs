"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6058],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),p=n,d=m["".concat(l,".").concat(p)]||m[p]||h[p]||i;return r?o.createElement(d,a(a({ref:t},u),{},{components:r})):o.createElement(d,a({ref:t},u))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1550:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const i={sidebar_position:1},a="Customize the theme",s={unversionedId:"how-to/customize-theme",id:"how-to/customize-theme",title:"Customize the theme",description:"The theme style is written in a SMACSS-inspired approach and is very modular. According to this architecture we have added a local css file for each CSS category that overrides the corresponding category CSS rules.",source:"@site/docs/how-to/customize-theme.md",sourceDirName:"how-to",slug:"/how-to/customize-theme",permalink:"/docs/how-to/customize-theme",draft:!1,editUrl:"https://github.com/morethanthemes/docs/edit/master/docs/how-to/customize-theme.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"How to",permalink:"/docs/category/how-to"},next:{title:"Customize the color scheme",permalink:"/docs/how-to/custom-color-profile"}},l={},c=[],u={toc:c};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"customize-the-theme"},"Customize the theme"),(0,n.kt)("p",null,"The theme style is written in a ",(0,n.kt)("a",{parentName:"p",href:"https://www.google.com/url?q=https://smacss.com/&sa=D&source=editors&ust=1664361389196453&usg=AOvVaw1apL3dJ85YCp3isZ5bTTQL"},"SMACSS-inspired")," approach and is very modular. According to this architecture we have added a local css file for each CSS category that overrides the corresponding category CSS rules."),(0,n.kt)("p",null,"Each of these CSS files is located under the corresponding folder inside the theme folder:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"css/base/local-base.css")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"css/components/local-components.css")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"css/theme/local-theme.css"))),(0,n.kt)("p",null,"This doesn\u2019t mean, though, that you should not be able to easily customize the site you build with it, as much as you want, even if e.g.: the"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Color or"),(0,n.kt)("li",{parentName:"ul"},"Font or"),(0,n.kt)("li",{parentName:"ul"},"Background pattern you would like to use, is not included in the built-in Theme settings, described above.")),(0,n.kt)("p",null,"In general if you do not have the time to research and understand all this architecture we suggest that you use the css/theme/local-theme.css file for your CSS rules."),(0,n.kt)("p",null,"The local-theme.css is designed to override the theme settings and styling currently in use. And because it\u2019s a separate file, any CSS that you add in this file leaves the code codebase of the theme intact, so you can safely roll back anytime."),(0,n.kt)("p",null,"In light of the above local-theme.css is your go-to-file, for customizing the theme with no limits at all."))}h.isMDXComponent=!0}}]);