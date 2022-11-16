"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8830],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),b=s(o),f=n,p=b["".concat(c,".").concat(f)]||b[f]||d[f]||l;return o?r.createElement(p,i(i({ref:t},u),{},{components:o})):r.createElement(p,i({ref:t},u))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,i=new Array(l);i[0]=b;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var s=2;s<l;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}b.displayName="MDXCreateElement"},5104:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var r=o(7462),n=(o(7294),o(3905));const l={sidebar_position:3},i="Allow blocks to be referenced through custom block type fields",a={unversionedId:"how-to/allow-blocks-to-be-referenced",id:"how-to/allow-blocks-to-be-referenced",title:"Allow blocks to be referenced through custom block type fields",description:"In order to be able to reference and display a block though a custom block reference field you should first assign it to a region. We have created the \u201cHidden blocks collection\u201d region exactly for this reason.",source:"@site/docs/how-to/allow-blocks-to-be-referenced.md",sourceDirName:"how-to",slug:"/how-to/allow-blocks-to-be-referenced",permalink:"/docs/how-to/allow-blocks-to-be-referenced",draft:!1,editUrl:"https://github.com/morethanthemes/docs/edit/master/docs/how-to/allow-blocks-to-be-referenced.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create new instances (clones) of existing blocks and assign them to regions",permalink:"/docs/how-to/create-new-instances-of-blocks"},next:{title:"Customize the theme",permalink:"/docs/how-to/customize-theme"}},c={},s=[],u={toc:s};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"allow-blocks-to-be-referenced-through-custom-block-type-fields"},"Allow blocks to be referenced through custom block type fields"),(0,n.kt)("p",null,"In order to be able to reference and display a block though a custom block reference field you should first assign it to a region. We have created the \u201cHidden blocks collection\u201d region exactly for this reason.\nBlocks assigned to this region will not be printed through the theme but will be available to reference through the custom block types and will be displayed based on the custom block visibility configuration.\nBlocks that are already assigned to the \u201cHidden blocks collection\u201d region can be used multiple times through different custom blocks."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate to Home > Administration > Structure > Block layout"),(0,n.kt)("li",{parentName:"ol"},"Add the block you want to the \u201cHidden blocks collection\u201d region."),(0,n.kt)("li",{parentName:"ol"},"To be able to easily find this block through the reference field we suggest that you specify a unique title.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"You can go back and configure this title after you have used it in a block reference field"))),(0,n.kt)("li",{parentName:"ol"},"Leave the visibility settings untouched."),(0,n.kt)("li",{parentName:"ol"},"Save your configuration")))}d.isMDXComponent=!0}}]);