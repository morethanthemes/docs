"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[469],{3905:(e,t,s)=>{s.d(t,{Zo:()=>p,kt:()=>c});var o=s(7294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function l(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function r(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?l(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function n(e,t){if(null==e)return{};var s,o,a=function(e,t){if(null==e)return{};var s,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)s=l[o],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)s=l[o],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var i=o.createContext({}),u=function(e){var t=o.useContext(i),s=t;return e&&(s="function"==typeof e?e(t):r(r({},t),e)),s},p=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var s=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),d=u(s),c=a,h=d["".concat(i,".").concat(c)]||d[c]||m[c]||l;return s?o.createElement(h,r(r({ref:t},p),{},{components:s})):o.createElement(h,r({ref:t},p))}));function c(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=s.length,r=new Array(l);r[0]=d;var n={};for(var i in t)hasOwnProperty.call(t,i)&&(n[i]=t[i]);n.originalType=e,n.mdxType="string"==typeof e?e:a,r[1]=n;for(var u=2;u<l;u++)r[u]=s[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,s)}d.displayName="MDXCreateElement"},7373:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>n,toc:()=>u});var o=s(7462),a=(s(7294),s(3905));const l={sidebar_position:6},r="6. Views",n={unversionedId:"baseplus/views",id:"baseplus/views",title:"6. Views",description:"One of the most powerful features of Drupal is the Views module, which in Drupal 8 is anymore in core.",source:"@site/docs/baseplus/views.md",sourceDirName:"baseplus",slug:"/baseplus/views",permalink:"/mtt-docs/docs/baseplus/views",draft:!1,editUrl:"https://github.com/morethanthemes/docs/tree/master/docs/baseplus/views.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"5. Content Types",permalink:"/mtt-docs/docs/baseplus/content_types"},next:{title:"7. Custom Block Types",permalink:"/mtt-docs/docs/baseplus/custom_block_types"}},i={},u=[{value:"6.1. Isotope",id:"61-isotope",level:2},{value:"6.2. Latest",id:"62-latest",level:2},{value:"6.3. Popular Tags",id:"63-popular-tags",level:2},{value:"6.4. Pricing tables",id:"64-pricing-tables",level:2},{value:"6.5. Related nodes",id:"65-related-nodes",level:2},{value:"6.6. Albums",id:"66-albums",level:2},{value:"6.7. Slideshow",id:"67-slideshow",level:2},{value:"6.7.1 Configuration",id:"671-configuration",level:3},{value:"6.8. Team members",id:"68-team-members",level:2},{value:"6.9. Testimonials",id:"69-testimonials",level:2},{value:"6.10. Products",id:"610-products",level:2}],p={toc:u};function m(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"6-views"},"6. Views"),(0,a.kt)("p",null,"One of the most powerful features of Drupal is the Views module, which in Drupal 8 is anymore in core."),(0,a.kt)("p",null,"Further to the default Views blocks, like"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Recent Comments"),(0,a.kt)("li",{parentName:"ul"},"Who's new"),(0,a.kt)("li",{parentName:"ul"},"Etc.,")),(0,a.kt)("p",null,"Webmaker+ distribution comes with many Views implementations, including pages and blocks, that enable you to automate the collection and presentation of information throughout the site. These Views are listed under"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/admin/structure/views")),(0,a.kt)("p",null,"Every one of those is also editable via the front-end interface, when logged in as Drupal admin, by clicking the corresponding action link, when hovering, as shown below:"),(0,a.kt)("h2",{id:"61-isotope"},"6.1. Isotope"),(0,a.kt)("p",null,"This view consist of 3 different pages that each displays the corresponding nodes in a grid layout with additional Isotope filters at the top. There is one page for each of the \u201cAccommodation\u201d, \u201cAlbum\u201d and \u201cMerchandise\u201d content types."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/albums-isotope&sa=D&source=editors&ust=1664361389164854&usg=AOvVaw35FhSWNZ61-ifTvi2U9ckf"},"/albums-isotope")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/products-isotope&sa=D&source=editors&ust=1664361389165348&usg=AOvVaw3XDgVdKaAQP6f43JUmShjU"},"/products-isotope")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/services-isotope&sa=D&source=editors&ust=1664361389165768&usg=AOvVaw3wzH-dCUfgs6YGZCFP_adQ"},"/services-isotope")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/showcases-isotope&sa=D&source=editors&ust=1664361389166127&usg=AOvVaw2HfDvClKtOzXz_94z-GmqK"},"/showcases-isotope")),(0,a.kt)("h2",{id:"62-latest"},"6.2. Latest"),(0,a.kt)("p",null,"This view consists of four separate view blocks that each displays the latest nodes of the corresponding content type. There are view blocks available for the \u201cArticle\u201d, \u201cProducts\u201d and \u201cService\u201d content types."),(0,a.kt)("h2",{id:"63-popular-tags"},"6.3. Popular Tags"),(0,a.kt)("p",null,"This view block collects and displays all the taxonomy terms used on the site, sorted from the most to the least used."),(0,a.kt)("h2",{id:"64-pricing-tables"},"6.4. Pricing tables"),(0,a.kt)("p",null,"Collects and displays the latest Merchandise nodes in a pricing table style. There are 2, 3 and 4 column view blocks available. You can also find the corresponding view page under:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/pricing-tables&sa=D&source=editors&ust=1664361389167196&usg=AOvVaw1NqYvKYAp_5u3LTN8vtfNf"},"/pricing-tables")),(0,a.kt)("h2",{id:"65-related-nodes"},"6.5. Related nodes"),(0,a.kt)("p",null,"There are view blocks that display related products based on the\nproduct content type."),(0,a.kt)("h2",{id:"66-albums"},"6.6. Albums"),(0,a.kt)("p",null,"Collects and displays Album nodes in the corresponding grid style. The available options are available at the following pages:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/albums&sa=D&source=editors&ust=1664361389168195&usg=AOvVaw1bAtvxWCl3FecsenZXrvQ2"},"/albums")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/albums-list&sa=D&source=editors&ust=1664361389168493&usg=AOvVaw2UOiFH6masu2owYnkAH1wC"},"/albums-list")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/albums-metro-tiles&sa=D&source=editors&ust=1664361389168820&usg=AOvVaw1YOeeGvRNBu4ExUyVti0t6"},"/albums-metro-tiles")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/albums-isotope&sa=D&source=editors&ust=1664361389169117&usg=AOvVaw0K1YftVSRXAQ8kan_OyUx3"},"/albums-isotope")),(0,a.kt)("h2",{id:"67-slideshow"},"6.7. Slideshow"),(0,a.kt)("p",null,"Collects and displays nodes that are marked as promoted to slideshow. There are 3 different flavours of the slideshow,  Boxed, Full screen and Full width. You can see each of these blocks at the corresponding demonstration pages:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/boxed-slideshow&sa=D&source=editors&ust=1664361389169876&usg=AOvVaw2IhCFgVFrGLIfbHO7LgSlP"},"Boxed")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/slideshow-fullwidth&sa=D&source=editors&ust=1664361389170241&usg=AOvVaw0xNz_w8pcqGCQ4SdtITYpp"},"Full Width")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/fullscreen-slideshow&sa=D&source=editors&ust=1664361389170549&usg=AOvVaw0QviSxNm0n3RQ29lfVPsmM"},"Full Screen")),(0,a.kt)("h3",{id:"671-configuration"},"6.7.1 Configuration"),(0,a.kt)("p",null,"In this theme, these three slideshow implementations are initialized in the twig template and the javascript files available under the paths:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Twig:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"baseplus/templates/views-view-field--mt_slideshow_boxed_width--nothing.html.twig")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"baseplus/templates/views-view-field--mt_slideshow_full_screen--nothing.html.twig")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"baseplus/templates/views-view-field--mt_slideshow_full_width--nothing.html.twig")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Javascript:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"baseplus/js/init/slider-revolution-boxed-width-init.js")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"baseplus/js/init/slider-revolution-full-screen-init.js")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"baseplus/js/init/slider-revolution-full-width-init.js"))))),(0,a.kt)("p",null,"In these files you could configure the way the slideshows and their internal elements are   positioned and laid out."),(0,a.kt)("p",null,"For more information, and all the available options, please refer to the official documentation of Revolution Slider"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.themepunch.com/revsliderjquery-doc/slider-revolution-jquery-5-x-documentation/"},"https://www.themepunch.com/revsliderjquery-doc/slider-revolution-jquery-5-x-documentation/"))),(0,a.kt)("h2",{id:"68-team-members"},"6.8. Team members"),(0,a.kt)("p",null,"Collects and displays \u201cTeam Member\u201d nodes in a grid layout or as a list. You can find the corresponding view pages under:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/team-members&sa=D&source=editors&ust=1664361389172804&usg=AOvVaw10rHwZs7qI5XmzTgm_mX1W"},"/team-members")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/team-members-2&sa=D&source=editors&ust=1664361389173232&usg=AOvVaw0mKEIaeL_72KMOutgNgQEd"},"/team-members-2")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/team-members-masonry&sa=D&source=editors&ust=1664361389173601&usg=AOvVaw1XFpizm3cb26a0tLsHCcjU"},"/team-members-masonry")),(0,a.kt)("h2",{id:"69-testimonials"},"6.9. Testimonials"),(0,a.kt)("p",null,"Collects and displays testimonials nodes in a simple and stylish list. There is also available a simple view block that displays the last 2 testimonials as well as Slideshow powered view block that loops through all of them. The view pages are accessible through:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/testimonials&sa=D&source=editors&ust=1664361389174208&usg=AOvVaw2eKzHSNx6jXwUyZbmE3yfP"},"/testimonials")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/testimonials-3-col&sa=D&source=editors&ust=1664361389174511&usg=AOvVaw1MCqm1PftWtD1UBIsspVTc"},"/testimonials-3-col")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/testimonials-3-col-2&sa=D&source=editors&ust=1664361389174879&usg=AOvVaw2ZK3q6Oh1w3SUwO3ndXOLu"},"/testimonials-3-col-2")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/testimonials-masonry&sa=D&source=editors&ust=1664361389175176&usg=AOvVaw3Hxn1UdengCG8RApQTAtV_"},"/testimonials-masonry")),(0,a.kt)("h2",{id:"610-products"},"6.10. Products"),(0,a.kt)("p",null,"Collects and displays Product nodes in the corresponding grid style. The available options are available at the following pages:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/products-2-col&sa=D&source=editors&ust=1664361389175739&usg=AOvVaw1H8nJtSKeWH0xLy4JoVoty"},"/products-2-col"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/products&sa=D&source=editors&ust=1664361389175979&usg=AOvVaw0iMIxx6uzAOAlILvt910B2"},"/products-3-col"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/products-isotope&sa=D&source=editors&ust=1664361389176224&usg=AOvVaw2ce3jWSak9Acvtgjxymn9_"},"/products-isotope"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/products-list&sa=D&source=editors&ust=1664361389176501&usg=AOvVaw1UbRFR4PChJi-1cm1ShZyd"},"/products-list"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.google.com/url?q=https://demo.morethanthemes.com/baseplus-business/default/products-metro-tiles&sa=D&source=editors&ust=1664361389176758&usg=AOvVaw2aXVqxtjlzow5EloGUfo48"},"/products-metro-tiles")))}m.isMDXComponent=!0}}]);