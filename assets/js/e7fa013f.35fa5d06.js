"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5799],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>c});var o=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(i),c=n,h=m["".concat(s,".").concat(c)]||m[c]||p[c]||r;return i?o.createElement(h,a(a({ref:t},d),{},{components:i})):o.createElement(h,a({ref:t},d))}));function c(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,a=new Array(r);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<r;u++)a[u]=i[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}m.displayName="MDXCreateElement"},8896:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=i(7462),n=(i(7294),i(3905));const r={sidebar_position:4},a="4. Modules & Configuration",l={unversionedId:"extra/modules_and_configuration",id:"extra/modules_and_configuration",title:"4. Modules & Configuration",description:"Overview of the Drupal modules used in Webmaker+:",source:"@site/docs/extra/modules_and_configuration.md",sourceDirName:"extra",slug:"/extra/modules_and_configuration",permalink:"/mtt-docs/docs/extra/modules_and_configuration",draft:!1,editUrl:"https://github.com/morethanthemes/docs/tree/master/docs/extra/modules_and_configuration.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Extra",permalink:"/mtt-docs/docs/category/extra"},next:{title:"6. Views",permalink:"/mtt-docs/docs/extra/views"}},s={},u=[{value:"4.1. Contributed Modules Used",id:"41-contributed-modules-used",level:2},{value:"4.1.1. Superfish",id:"411-superfish",level:3},{value:"4.1.2. Better Exposed Filters",id:"412-better-exposed-filters",level:3},{value:"4.1.3. Entity Reference Revisions",id:"413-entity-reference-revisions",level:3},{value:"4.1.4. Paragraphs",id:"414-paragraphs",level:3},{value:"4.1.5. Video Embed Field",id:"415-video-embed-field",level:3},{value:"4.1.6. Field Group",id:"416-field-group",level:3},{value:"4.1.7. Font Awesome Icons",id:"417-font-awesome-icons",level:3},{value:"4.1.8. Webform",id:"418-webform",level:3},{value:"4.1.9. Crop API",id:"419-crop-api",level:3},{value:"4.1.10. Image Widget Crop",id:"4110-image-widget-crop",level:3},{value:"4.1.11. Inline Entity Form",id:"4111-inline-entity-form",level:3},{value:"4.1.12. Mailchimp",id:"4112-mailchimp",level:3},{value:"4.1.13. Metatag",id:"4113-metatag",level:3},{value:"4.1.14. OneSignal Integration",id:"4114-onesignal-integration",level:3},{value:"4.1.15. Views Infinite Scroll",id:"4115-views-infinite-scroll",level:3},{value:"4.1.16. Flippy",id:"4116-flippy",level:3},{value:"4.2. Custom Modules Used",id:"42-custom-modules-used",level:2},{value:"4.2.1. Mt Cookie Consent",id:"421-mt-cookie-consent",level:3},{value:"4.3. Automated image generation and handling",id:"43-automated-image-generation-and-handling",level:2}],d={toc:u};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"4-modules--configuration"},"4. Modules & Configuration"),(0,n.kt)("p",null,"Overview of the Drupal modules used in Webmaker+:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Superfish"),(0,n.kt)("li",{parentName:"ul"},"Better Exposed Filters"),(0,n.kt)("li",{parentName:"ul"},"Entity Reference Revisions"),(0,n.kt)("li",{parentName:"ul"},"@font-your-face"),(0,n.kt)("li",{parentName:"ul"},"Paragraphs"),(0,n.kt)("li",{parentName:"ul"},"Video Embed Field"),(0,n.kt)("li",{parentName:"ul"},"Field Group"),(0,n.kt)("li",{parentName:"ul"},"Font Awesome Icons"),(0,n.kt)("li",{parentName:"ul"},"Webform"),(0,n.kt)("li",{parentName:"ul"},"Crop API"),(0,n.kt)("li",{parentName:"ul"},"Image Widget Crop"),(0,n.kt)("li",{parentName:"ul"},"Inline Entity Form"),(0,n.kt)("li",{parentName:"ul"},"Mailchimp"),(0,n.kt)("li",{parentName:"ul"},"Metatag"),(0,n.kt)("li",{parentName:"ul"},"OneSignal Integration"),(0,n.kt)("li",{parentName:"ul"},"Views Infinite Scroll "),(0,n.kt)("li",{parentName:"ul"},"Flippy"),(0,n.kt)("li",{parentName:"ul"},"MT Cookie Consent"),(0,n.kt)("li",{parentName:"ul"},"MT Countdown")),(0,n.kt)("h2",{id:"41-contributed-modules-used"},"4.1. Contributed Modules Used"),(0,n.kt)("h3",{id:"411-superfish"},"4.1.1. Superfish"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Webmaker+")," makes use of the Superfish module and the corresponding library to display multi-level menus. To use, simply add the corresponding superfish block to the region you want and Webmaker+ will style the menu accordingly."),(0,n.kt)("p",null,"The Superfish module also implements ",(0,n.kt)("strong",{parentName:"p"},"a mobile menu")," that is configured to activate in narrow screen widths (configured through the block settings)."),(0,n.kt)("h3",{id:"412-better-exposed-filters"},"4.1.2. Better Exposed Filters"),(0,n.kt)("p",null,"This module is used to provide more UX friendly options to use as filters in views. These options are available through the corresponding options in these views"),(0,n.kt)("h3",{id:"413-entity-reference-revisions"},"4.1.3. Entity Reference Revisions"),(0,n.kt)("p",null,"This module is a requirement of the \u201cParagraphs\u201d module."),(0,n.kt)("h3",{id:"414-paragraphs"},"4.1.4. Paragraphs"),(0,n.kt)("p",null,"This module allows you to define collections of fields to be used within other entities. For example the Fancy tabs custom block is powered by a paragraph field that contains a Title field, a Subtitle field as well as the referenced block."),(0,n.kt)("h3",{id:"415-video-embed-field"},"4.1.5. Video Embed Field"),(0,n.kt)("p",null,"This module provides a field that is used in different content types that provides video (Youtube & Vimeo) support."),(0,n.kt)("h3",{id:"416-field-group"},"4.1.6. Field Group"),(0,n.kt)("p",null,"This module is used to group similar fields together in order to provide better Content editing experience."),(0,n.kt)("h3",{id:"417-font-awesome-icons"},"4.1.7. Font Awesome Icons"),(0,n.kt)("p",null,"This module is used to provide deep integration with the ",(0,n.kt)("a",{parentName:"p",href:"https://www.google.com/url?q=https://fontawesome.com/&sa=D&source=editors&ust=1664361389153887&usg=AOvVaw23fb6SfeAkDNPzJLOQNPD0"},"FontAwesome 5 icons"),"."),(0,n.kt)("h3",{id:"418-webform"},"4.1.8. Webform"),(0,n.kt)("p",null,"This module is used to implement the registration forms and also adds support for embedding any form into a block or page."),(0,n.kt)("h3",{id:"419-crop-api"},"4.1.9. Crop API"),(0,n.kt)("p",null,"Provides basic API for image cropping."),(0,n.kt)("h3",{id:"4110-image-widget-crop"},"4.1.10. Image Widget Crop"),(0,n.kt)("p",null,"Provides an interface for using the features of the Crop API. This element provides an UX for using a crop on all fields images or file elements. This module has particularity to purpose capability to crop the same image by \u201cCrop type\u201d configured."),(0,n.kt)("h3",{id:"4111-inline-entity-form"},"4.1.11. Inline Entity Form"),(0,n.kt)("p",null,"Provides a widget for inline management (creation, modification, removal) of referenced entities."),(0,n.kt)("h3",{id:"4112-mailchimp"},"4.1.12. Mailchimp"),(0,n.kt)("p",null,"This module provides integration with ",(0,n.kt)("a",{parentName:"p",href:"https://www.google.com/url?q=http://www.mailchimp.com/&sa=D&source=editors&ust=1664361389155598&usg=AOvVaw1RQlzJm3rbNwx746a8DIWL"},"Mailchimp"),", a popular email delivery service. The module makes it easy for website users or visitors to control which of your email lists they want to be on (or off), lets you generate and send Mailchimp email campaigns from your site."),(0,n.kt)("h3",{id:"4113-metatag"},"4.1.13. Metatag"),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"Metatag"),' module allows you to automatically provide structured metadata, aka "meta tags", about a website.'),(0,n.kt)("h3",{id:"4114-onesignal-integration"},"4.1.14. OneSignal Integration"),(0,n.kt)("p",null,"This module provides integration with the free HTTP Web Push service from ",(0,n.kt)("a",{parentName:"p",href:"https://www.google.com/url?q=http://onesignal.com&sa=D&source=editors&ust=1664361389156795&usg=AOvVaw0Ci205JB9TzIL0-BQJ_NuW"},"OneSignal"),", allowing visitors to subscribe to notifications and site owners to send notifications to the subscribers."),(0,n.kt)("h3",{id:"4115-views-infinite-scroll"},"4.1.15. Views Infinite Scroll"),(0,n.kt)("p",null,"Views infinite scroll allows you to load and display pages of any view inline, using AJAX (this has been called infinite scrolling, load more, autopaging, endless pages and more). The pager can be triggered with the press of a button or automatically as the user scrolls to the bottom of the view's content."),(0,n.kt)("h3",{id:"4116-flippy"},"4.1.16. Flippy"),(0,n.kt)("p",null,"Flippy is an ultra-simple module that generates previous/next pagers for content types."),(0,n.kt)("h2",{id:"42-custom-modules-used"},"4.2. Custom Modules Used"),(0,n.kt)("h3",{id:"421-mt-cookie-consent"},"4.2.1. Mt Cookie Consent"),(0,n.kt)("p",null,"This is a custom module by More than Themes that provides features of the Cookie Consent Javascript library - ",(0,n.kt)("a",{parentName:"p",href:"https://cookieconsent.insites.com/"},"https://cookieconsent.insites.com/")),(0,n.kt)("p",null,"You can configure the content and the messages of this features through:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"admin/config/mt_cookieconsent")),(0,n.kt)("h2",{id:"43-automated-image-generation-and-handling"},"4.3. Automated image generation and handling"),(0,n.kt)("p",null,"Under the hood, ",(0,n.kt)("strong",{parentName:"p"},"Webmaker+")," comes with pre-configured image presets ready to be used."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"All the content types")," make use of this feature and ",(0,n.kt)("strong",{parentName:"p"},"produce all necessary thumbnails and other derived images automatically"),". "),(0,n.kt)("p",null,"To make use of the automated image generation and handling, ",(0,n.kt)("strong",{parentName:"p"},"simply upload your images")," and ",(0,n.kt)("strong",{parentName:"p"},"Base+ Busines")," will use those for the Front Page and any other place where a derived image is needed."))}p.isMDXComponent=!0}}]);