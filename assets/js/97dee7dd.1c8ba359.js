"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1516],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2},i="Post Installation Tasks",s={unversionedId:"baseplus/post-installation",id:"baseplus/post-installation",title:"Post Installation Tasks",description:"Once you are done with the above, please login to this site through the /user/login url and by using the following credentials:",source:"@site/docs/baseplus/post-installation.md",sourceDirName:"baseplus",slug:"/baseplus/post-installation",permalink:"/docs/baseplus/post-installation",draft:!1,editUrl:"https://github.com/morethanthemes/docs/edit/master/docs/baseplus/post-installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/baseplus/installation"},next:{title:"Themes",permalink:"/docs/themes"}},l={},p=[{value:"Check the Status Report",id:"check-the-status-report",level:2},{value:"Edit the admin user and set the password",id:"edit-the-admin-user-and-set-the-password",level:2},{value:"Enable the cache (for production)",id:"enable-the-cache-for-production",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"post-installation-tasks"},"Post Installation Tasks"),(0,r.kt)("p",null,"Once you are done with the above, please login to this site through the ",(0,r.kt)("inlineCode",{parentName:"p"},"/user/login")," url and by using the following credentials:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"username: ",(0,r.kt)("inlineCode",{parentName:"li"},"admin")),(0,r.kt)("li",{parentName:"ul"},"password: ",(0,r.kt)("inlineCode",{parentName:"li"},"password"))),(0,r.kt)("h2",{id:"check-the-status-report"},"Check the Status Report"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to ",(0,r.kt)("inlineCode",{parentName:"li"},"/admin/reports/status")," and make sure that there are no errors regarding the \u201cFile system\u201d item. In case of errors please make sure to resolve those and then clear the Drupal Cache.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image8",src:n(978).Z,width:"678",height:"168"})),(0,r.kt)("p",null,"Other errors may exist and should also be taken care of."),(0,r.kt)("h2",{id:"edit-the-admin-user-and-set-the-password"},"Edit the admin user and set the password"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to ",(0,r.kt)("inlineCode",{parentName:"li"},"/user/1/edit")," and change the email of the admin user to the one you are using."),(0,r.kt)("li",{parentName:"ol"},"Navigate to ",(0,r.kt)("inlineCode",{parentName:"li"},"/admin/structure/contact")," and change the recipients email of the contact forms so that you receive the messages in your inbox.")),(0,r.kt)("h2",{id:"enable-the-cache-for-production"},"Enable the cache (for production)"),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"By default, our theme distribution comes with Drupal caching ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"deactivated")),", ensuring a smoother experience during any technical work you will need to do post-installation.")),(0,r.kt)("p",null,"Either right after installation, or when you finish building your Drupal site using this theme, it is recommended to activate Drupal caching and aggregation of CSS and JS files, for better performance."),(0,r.kt)("p",null,"To do so, navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"/admin/config/development/performance")," and enable caching (default option: 15 min) as well as the \u201cAggregate CSS files\u201d and \u201cAggregate JavaScript files\u201d options."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image9",src:n(4086).Z,width:"875",height:"527"})))}u.isMDXComponent=!0},978:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2.1_image8-172299a3e0328644ff8f7d84e6199a49.jpg"},4086:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2.1_image9-191c9f6aaf4a271bd219f16d98d093f0.jpg"}}]);