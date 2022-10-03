"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6104],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),c=o,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2246:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const i={sidebar_position:2},r="2. Installation",l={unversionedId:"baseplus/installation",id:"baseplus/installation",title:"2. Installation",description:"Webmaker+ installation guidelines for Drupal 9.",source:"@site/docs/baseplus/installation.md",sourceDirName:"baseplus",slug:"/baseplus/installation",permalink:"/mtt-docs/docs/baseplus/installation",draft:!1,editUrl:"https://github.com/morethanthemes/docs/tree/master/docs/baseplus/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Webmaker+ Premium Drupal 9 theme Documentation",permalink:"/mtt-docs/docs/category/webmaker-premium-drupal-9-theme-documentation"},next:{title:"How to",permalink:"/mtt-docs/docs/category/how-to"}},s={},p=[{value:"2.1. Installation on a LAMP stack or a typical hosting environment.",id:"21-installation-on-a-lamp-stack-or-a-typical-hosting-environment",level:2},{value:"2.2 Installation with DDEV",id:"22-installation-with-ddev",level:2},{value:"Install Drush and Login without credentials",id:"install-drush-and-login-without-credentials",level:3},{value:"Post Installation Tasks",id:"post-installation-tasks",level:2},{value:"Check the Status Report",id:"check-the-status-report",level:3},{value:"Edit the admin user and set the password",id:"edit-the-admin-user-and-set-the-password",level:3},{value:"Enable the cache (for production)",id:"enable-the-cache-for-production",level:3},{value:"------- Remove anything after this line",id:"--------remove-anything-after-this-line",level:2},{value:"2.4.2 Install for Commerce Development - Recommended (dev installation)",id:"242-install-for-commerce-development---recommended-dev-installation",level:3},{value:"Before you start",id:"before-you-start",level:4},{value:"Installation steps",id:"installation-steps",level:4}],d={toc:p};function m(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2-installation"},"2. Installation"),(0,o.kt)("p",null,"Webmaker+ installation guidelines for Drupal 9. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"At the end of the installation process documented below you will be able to login to your Drupal site as administrator. "),(0,o.kt)("p",{parentName:"blockquote"},"To login, once you install, go to ",(0,o.kt)("inlineCode",{parentName:"p"},"/user/login")," url and use the following credentials:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"u: ",(0,o.kt)("inlineCode",{parentName:"li"},"admin")),(0,o.kt)("li",{parentName:"ul"},"p: ",(0,o.kt)("inlineCode",{parentName:"li"},"password")))),(0,o.kt)("h2",{id:"21-installation-on-a-lamp-stack-or-a-typical-hosting-environment"},"2.1. Installation on a LAMP stack or a typical hosting environment."),(0,o.kt)("p",null,"To complete and installation please follow the steps below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Place the included ",(0,o.kt)("inlineCode",{parentName:"li"},"full_installation/")," folder under your Apache server path",(0,o.kt)("sup",{parentName:"li",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,o.kt)("li",{parentName:"ol"},"Create an empty MySQL database and ",(0,o.kt)("strong",{parentName:"li"},"take note of the database name"),"."),(0,o.kt)("li",{parentName:"ol"},"In your newly created database, import the ",(0,o.kt)("inlineCode",{parentName:"li"},"database/db_instance.sql")," file. The following screen shows the steps to do this through phpMyAdmin. If your hosting environment does not come with a similar tool installed please ask your hosting provider for assistance on how to import the database file.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image1",src:a(1826).Z,width:"915",height:"513"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Start the Drupal installation wizard by pointing your browser to the recently created folder, in your Apache server path.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image2",src:a(5416).Z,width:"983",height:"626"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},'Continue the installation by selecting the "Standard" installation profile.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image3",src:a(1468).Z,width:"983",height:"538"})),(0,o.kt)("p",null,"If confronted with any ",(0,o.kt)("strong",{parentName:"p"},"warnings"),", click to continue with installation."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image4",src:a(3277).Z,width:"817",height:"218"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Enter your recently created database information. This includes the database name and credentials (username/password) you have chosen when creating it, spelled exactly as in step 3 above.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image5",src:a(5278).Z,width:"983",height:"556"})),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"The installation wizard will recognize that you are using an already populated database and will inform you accordingly. At the same time, the wizard should create all the necessary files your Drupal site needs in order to work properly on your server.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image6",src:a(6689).Z,width:"983",height:"557"})),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},'You are done. Click on the "visit existing site" link, to visit your new site.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image7",src:a(1484).Z,width:"983",height:"557"})),(0,o.kt)("h2",{id:"22-installation-with-ddev"},"2.2 Installation with DDEV"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://ddev.readthedocs.io/"},"DDEV")," is an open source tool that makes it dead simple to get local PHP development environments up and running within minutes. It's powerful and flexible as a result of its per-project environment configurations, which can be extended, version controlled, and shared. In short, DDEV aims to allow development teams to use Docker in their workflow without the complexities of bespoke configuration.")),(0,o.kt)("p",null,"We strongly recommend using DDEV in your local environment for development. "),(0,o.kt)("p",null,"Before you start, please ensure that ",(0,o.kt)("a",{parentName:"p",href:"https://ddev.readthedocs.io/en/latest/users/install/"},"DDEV")," is properly installed in your system. "),(0,o.kt)("p",null,"Installation steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Navigate into the ",(0,o.kt)("inlineCode",{parentName:"li"},"full_installation/")," folder"),(0,o.kt)("li",{parentName:"ul"},"Initialize DDEV: ",(0,o.kt)("inlineCode",{parentName:"li"},"ddev config")),(0,o.kt)("li",{parentName:"ul"},"Select a project name and the platform as follow:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Project name (full_installation): Webmaker\nDocroot Location (current directory):\nProject Type [backdrop, drupal6, drupal7, drupal8, drupal9, laravel, magento, magento2, php, shopware6, typo3, wordpress] (drupal9):\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Start the environment: ",(0,o.kt)("inlineCode",{parentName:"li"},"ddev start")),(0,o.kt)("li",{parentName:"ul"},"Import the database: ",(0,o.kt)("inlineCode",{parentName:"li"},"ddev import-db")),(0,o.kt)("li",{parentName:"ul"},"In the following prompt, provide a relative path to the ",(0,o.kt)("inlineCode",{parentName:"li"},"db_instance.sql")," file. e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"../database/db_instance.sql")),(0,o.kt)("li",{parentName:"ul"},"Open a browser: ",(0,o.kt)("inlineCode",{parentName:"li"},"ddev launch")," ")),(0,o.kt)("h3",{id:"install-drush-and-login-without-credentials"},"Install Drush and Login without credentials"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Require ",(0,o.kt)("inlineCode",{parentName:"li"},"drush"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"ddev composer require drush/drush")),(0,o.kt)("li",{parentName:"ul"},"Get an one time login URL: ",(0,o.kt)("inlineCode",{parentName:"li"},"ddev drush uli")," ")),(0,o.kt)("h2",{id:"post-installation-tasks"},"Post Installation Tasks"),(0,o.kt)("p",null,"Once you are done with the above, please login to this site through the ",(0,o.kt)("inlineCode",{parentName:"p"},"/user/login")," url and by using the following credentials:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"username: ",(0,o.kt)("inlineCode",{parentName:"li"},"admin")),(0,o.kt)("li",{parentName:"ul"},"password: ",(0,o.kt)("inlineCode",{parentName:"li"},"password"))),(0,o.kt)("h3",{id:"check-the-status-report"},"Check the Status Report"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to ",(0,o.kt)("inlineCode",{parentName:"li"},"/admin/reports/status")," and make sure that there are no errors regarding the \u201cFile system\u201d item. In case of errors please make sure to resolve those and then clear the Drupal Cache.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image8",src:a(978).Z,width:"678",height:"168"})),(0,o.kt)("p",null,"Other errors may exist and should also be taken care of."),(0,o.kt)("h3",{id:"edit-the-admin-user-and-set-the-password"},"Edit the admin user and set the password"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to ",(0,o.kt)("inlineCode",{parentName:"li"},"/user/1/edit")," and change the email of the admin user to the one you are using."),(0,o.kt)("li",{parentName:"ol"},"Navigate to ",(0,o.kt)("inlineCode",{parentName:"li"},"/admin/structure/contact")," and change the recipients email of the contact forms so that you receive the messages in your inbox.")),(0,o.kt)("h3",{id:"enable-the-cache-for-production"},"Enable the cache (for production)"),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"By default, our theme distribution comes with Drupal caching ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"deactivated")),", ensuring a smoother experience during any technical work you will need to do post-installation.")),(0,o.kt)("p",null,"Either right after installation, or when you finish building your Drupal site using this theme, it is recommended to activate Drupal caching and aggregation of CSS and JS files, for better performance."),(0,o.kt)("p",null,"To do so, navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"/admin/config/development/performance")," and enable caching (default option: 15 min) as well as the \u201cAggregate CSS files\u201d and \u201cAggregate JavaScript files\u201d options."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image9",src:a(4086).Z,width:"875",height:"527"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"--------remove-anything-after-this-line"},"------- Remove anything after this line"),(0,o.kt)("h3",{id:"242-install-for-commerce-development---recommended-dev-installation"},"2.4.2 Install for Commerce Development - Recommended (dev installation)"),(0,o.kt)("p",null,"This is a Composer based development workflow."),(0,o.kt)("h4",{id:"before-you-start"},"Before you start"),(0,o.kt)("p",null,"Make sure that you read the article \u201c",(0,o.kt)("a",{parentName:"p",href:"https://www.drupal.org/node/2718229"},"Using Composer to manage Drupal site dependencies"),"\u201d at Drupal.org, in order to understand the requirements and procedures of managing a site with Composer:",(0,o.kt)("br",null)),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.drupal.org/node/2718229"},"https://www.drupal.org/node/2718229")),(0,o.kt)("p",null,"Prepare your environment"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make sure that our server is running PHP 7.4 or PHP 8.0. For more information visit:",(0,o.kt)("br",null),(0,o.kt)("a",{parentName:"li",href:"https://www.drupal.org/docs/system-requirements/php-requirements"},"https://www.drupal.org/docs/system-requirements/php-requirements")),(0,o.kt)("li",{parentName:"ol"},"Install Composer on your machine. For more information, visit:",(0,o.kt)("br",null),(0,o.kt)("a",{parentName:"li",href:"https://getcomposer.org/doc/00-intro.md"},"https://getcomposer.org/doc/00-intro.md"))),(0,o.kt)("h4",{id:"installation-steps"},"Installation steps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Place the included \u201c",(0,o.kt)("strong",{parentName:"p"},"d9/dev_installation/site"),"\u201d folder under your Apache server path",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create an empty MySQL database and take note of the database name.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In your newly created database, import the \u201c",(0,o.kt)("strong",{parentName:"p"},"d9/dev_installation/database/db_instance_pro.sql"),"\u201d file that comes with the theme. For additional information, please ask your hosting provider for assistance on how to import the database file.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Require the dependencies. All dependencies, the Drupal core and the contributed modules are managed by Composer"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Download Drupal Core and Modules:\nChange directory to web root and execute the following command:",(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"li"},"composer install")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start the Drupal installation wizard by pointing your browser to the recently created folder, in your Apache server path."))),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"How to find your Apache server path: if you are deploying online, your hosting provider should be able to provide you this. If you are deploying locally, it will be where your XAMPP or MAMP installation is configured to look into (e.g.: htdocs, in the case of MAMP on Mac OS X).",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0},1826:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2.1_image1-e14f08a9415388e0b63ba9835955a1e1.jpg"},5416:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2.1_image2-e2663aa7b219af0a83a696b7dbac26f2.jpg"},1468:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2.1_image3-aa074422677db0b00f321a915092e0ce.jpg"},3277:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2.1_image4-43d9a4f5d69b0015bd4c4fb1f130481b.png"},5278:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2.1_image5-89df7fd4e8fc960157f030a1330010c6.jpg"},6689:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2.1_image6-6c088e8b972542c311ce168c1bfcbc1c.jpg"},1484:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2.1_image7-784a2532ec8f978ff7bec8e2821d980f.jpg"},978:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2.1_image8-172299a3e0328644ff8f7d84e6199a49.jpg"},4086:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2.1_image9-191c9f6aaf4a271bd219f16d98d093f0.jpg"}}]);