"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6058],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>p});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(o),p=n,d=m["".concat(l,".").concat(p)]||m[p]||h[p]||i;return o?r.createElement(d,a(a({ref:t},u),{},{components:o})):r.createElement(d,a({ref:t},u))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},1550:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const i={sidebar_position:4},a="Customize the theme",s={unversionedId:"how-to/customize-theme",id:"how-to/customize-theme",title:"Customize the theme",description:"The theme style is written in a SMACSS-inspired approach and is very modular. According to this architecture we have added a local css file for each CSS category that overrides the corresponding category CSS rules.",source:"@site/docs/how-to/customize-theme.md",sourceDirName:"how-to",slug:"/how-to/customize-theme",permalink:"/mtt-docs/docs/how-to/customize-theme",draft:!1,editUrl:"https://github.com/morethanthemes/docs/tree/master/docs/how-to/customize-theme.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Allow blocks to be referenced through custom block type fields",permalink:"/mtt-docs/docs/how-to/allow-blocks-to-be-referenced"},next:{title:"Implement One signal push notifications.",permalink:"/mtt-docs/docs/how-to/implement-one-signal-push-notifications"}},l={},c=[],u={toc:c};function h(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"customize-the-theme"},"Customize the theme"),(0,n.kt)("p",null,"The theme style is written in a ",(0,n.kt)("a",{parentName:"p",href:"https://www.google.com/url?q=https://smacss.com/&sa=D&source=editors&ust=1664361389196453&usg=AOvVaw1apL3dJ85YCp3isZ5bTTQL"},"SMACSS-inspired")," approach and is very modular. According to this architecture we have added a local css file for each CSS category that overrides the corresponding category CSS rules."),(0,n.kt)("p",null,"Each of these CSS files is located under the corresponding folder inside the theme folder:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"css/base/local-base.css")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"css/components/local-components.css")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"css/theme/local-theme.css"))),(0,n.kt)("p",null,"This doesn\u2019t mean, though, that you should not be able to easily customize the site you build with it, as much as you want, even if e.g.: the"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Color or"),(0,n.kt)("li",{parentName:"ul"},"Font or"),(0,n.kt)("li",{parentName:"ul"},"Background pattern you would like to use, is not included in the built-in Theme settings, described above.")),(0,n.kt)("p",null,"In general if you do not have the time to research and understand all this architecture we suggest that you use the css/theme/local-theme.css file for your CSS rules."),(0,n.kt)("p",null,"The local-theme.css is designed to override the theme settings and styling currently in use. And because it\u2019s a separate file, any CSS that you add in this file leaves the code codebase of the theme intact, so you can safely roll back anytime."),(0,n.kt)("p",null,"In light of the above local-theme.css is your go-to-file, for customizing the theme with no limits at all."))}h.isMDXComponent=!0}}]);