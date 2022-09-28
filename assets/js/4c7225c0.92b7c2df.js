"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6104],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),c=l,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2246:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const o={sidebar_position:2},r="2. Installation",i={unversionedId:"baseplus/installation",id:"baseplus/installation",title:"2. Installation",description:"Theme installation guidelines for Drupal 9.",source:"@site/docs/baseplus/installation.md",sourceDirName:"baseplus",slug:"/baseplus/installation",permalink:"/mtt-docs/docs/baseplus/installation",draft:!1,editUrl:"https://github.com/morethanthemes/docs/tree/master/docs/baseplus/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. Introduction",permalink:"/mtt-docs/docs/baseplus/introduction"},next:{title:"3. Basic Theme Overview",permalink:"/mtt-docs/docs/baseplus/basic_theme_overview"}},s={},p=[{value:"2.1. Install as a full Drupal distribution (with all features as seen in demo)",id:"21-install-as-a-full-drupal-distribution-with-all-features-as-seen-in-demo",level:2},{value:"2.2. Install as a simple theme over existing Drupal site",id:"22-install-as-a-simple-theme-over-existing-drupal-site",level:2},{value:"2.3. Install over existing Drupal installation, with the special features",id:"23-install-over-existing-drupal-installation-with-the-special-features",level:2},{value:"2.4 Install Drupal Commerce",id:"24-install-drupal-commerce",level:2},{value:"2.4.1 Install as a full Drupal Distribution (full installation)",id:"241-install-as-a-full-drupal-distribution-full-installation",level:3},{value:"2.4.2 Install for Commerce Development - Recommended (dev installation)",id:"242-install-for-commerce-development---recommended-dev-installation",level:3},{value:"Before you start",id:"before-you-start",level:4},{value:"Installation steps",id:"installation-steps",level:4}],u={toc:p};function d(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"2-installation"},"2. Installation"),(0,l.kt)("p",null,"Theme installation guidelines for Drupal 9.\nThere are two main ways to use Base+ Business: (1) install as a full-featured Drupal distribution, and (2) apply as a simple Drupal theme, on top of an existing Drupal 8 core installation."),(0,l.kt)("h2",{id:"21-install-as-a-full-drupal-distribution-with-all-features-as-seen-in-demo"},"2.1. Install as a full Drupal distribution (with all features as seen in demo)"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"At the end of the installation process documented below you will be able to log\nin to your Drupal site as administrator. To login, once you install, go to ",(0,l.kt)("br",null)," ",(0,l.kt)("br",null),"\n/user/login url ",(0,l.kt)("br",null)," ",(0,l.kt)("br",null),"\nand use the following credentials: ",(0,l.kt)("br",null),"\nu: ",(0,l.kt)("strong",{parentName:"p"},"admin"),",",(0,l.kt)("br",null),"\np: ",(0,l.kt)("strong",{parentName:"p"},"password"))),(0,l.kt)("p",null,"To install Base+ Business for Drupal 9, with the demo content and the full functionality, including Content types, Slider(s), Views pages and blocks, and special layouts, please follow the steps below."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Place the included ",(0,l.kt)("strong",{parentName:"li"},"\u201cd9/full_installation/site\u201d")," folder under your Apache server path",(0,l.kt)("sup",{parentName:"li",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,l.kt)("li",{parentName:"ol"},"Create an empty MySQL database and ",(0,l.kt)("strong",{parentName:"li"},"take note of the database name"),"."),(0,l.kt)("li",{parentName:"ol"},"In your newly created database, import the ",(0,l.kt)("strong",{parentName:"li"},"\u201cd9/full_installation/database/db_instance.sql\u201d")," or the ",(0,l.kt)("strong",{parentName:"li"},"\u201cd9/full_installation/database/db_instance_pro.sql\u201d")," file (for the pro installation) that comes with the theme. The following screen shows the steps to do this through phpMyAdmin. If your hosting environment does not come with a similar tool installed please ask your hosting provider for assistance on how to import the database file.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image1",src:a(6501).Z,width:"915",height:"513"})),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Start the Drupal installation wizard by pointing your browser to the recently created folder, in your Apache server path.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image2",src:a(1786).Z,width:"983",height:"626"})),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},'Continue the installation by selecting the "Standard" installation profile.')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image3",src:a(2778).Z,width:"983",height:"538"})),(0,l.kt)("p",null,"If confronted with any ",(0,l.kt)("strong",{parentName:"p"},"warnings"),", click to continue with installation."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image4",src:a(1574).Z,width:"817",height:"218"})),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"Enter your recently created database information. This includes the database name and credentials (username/password) you have chosen when creating it, spelled exactly as in step 3 above.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image5",src:a(8514).Z,width:"983",height:"556"})),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},"The installation wizard will recognize that you are using an already populated database and will inform you accordingly. At the same time, the wizard should create all the necessary files your Drupal site needs in order to work properly on your server.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image6",src:a(4899).Z,width:"983",height:"557"})),(0,l.kt)("ol",{start:8},(0,l.kt)("li",{parentName:"ol"},'You are done. Click on the "visit existing site" link, to visit your new site.')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image7",src:a(5067).Z,width:"983",height:"557"})),(0,l.kt)("ol",{start:9},(0,l.kt)("li",{parentName:"ol"},"Once you are done with the above, please login to this site through the /user/login url and by using the following credentials:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"username: ",(0,l.kt)("strong",{parentName:"li"},"admin")),(0,l.kt)("li",{parentName:"ul"},"password: ",(0,l.kt)("strong",{parentName:"li"},"password"))),(0,l.kt)("ol",{start:10},(0,l.kt)("li",{parentName:"ol"},"Navigate to ",(0,l.kt)("strong",{parentName:"li"},"/admin/reports/status")," and make sure that there are no errors regarding the \u201cFile system\u201d item. In case of errors please make sure to resolve those and then clear the Drupal Cache.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image8",src:a(2729).Z,width:"678",height:"168"})),(0,l.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Other errors may exist and should also be taken care of."),(0,l.kt)("ol",{start:11},(0,l.kt)("li",{parentName:"ol"},"Navigate to ",(0,l.kt)("strong",{parentName:"li"},"/user/1/edit")," and change the email of the admin user to the one you are using."),(0,l.kt)("li",{parentName:"ol"},"Navigate to ",(0,l.kt)("strong",{parentName:"li"},"/admin/structure/contact")," and change the recipients email of the contact forms so that you receive the messages in your inbox."),(0,l.kt)("li",{parentName:"ol"},"By default, our theme distribution comes with Drupal 8 caching ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"deactivated")),", ensuring a smoother experience during any technical work you will need to do post-installation.")),(0,l.kt)("p",null,"Either right after installation, or when you finish building your Drupal 8 site using this theme, it is recommended to activate Drupal caching and aggregation of CSS and JS files, for better performance."),(0,l.kt)("p",null,"To do so, navigate to ",(0,l.kt)("strong",{parentName:"p"},"/admin/config/development/performance")," and enable caching (default option: 15 min) as well as the \u201cAggregate CSS files\u201d and \u201cAggregate JavaScript files\u201d options."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image9",src:a(7189).Z,width:"875",height:"527"})),(0,l.kt)("h2",{id:"22-install-as-a-simple-theme-over-existing-drupal-site"},"2.2. Install as a simple theme over existing Drupal site"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Open the ",(0,l.kt)("strong",{parentName:"li"},"simple_theme_installation/theme")," folder, that came in the pack."),(0,l.kt)("li",{parentName:"ol"},"If working on a local environment, copy the ",(0,l.kt)("strong",{parentName:"li"},"\u201cbaseplus\u201d")," folder. If working directly on your web environment, select the ",(0,l.kt)("strong",{parentName:"li"},"\u201cbaseplus\u201d")," folder in order to upload it in the next step."),(0,l.kt)("li",{parentName:"ol"},"Paste or upload the ",(0,l.kt)("strong",{parentName:"li"},"\u201cbaseplus\u201d")," folder into the corresponding path ",(0,l.kt)("strong",{parentName:"li"},"themes \xbb custom"),", in your existing Drupal 8 installation. If you don\u2019t have a \u201ccustom\u201d folder under themes, it\u2019s strongly recommended to create one."),(0,l.kt)("li",{parentName:"ol"},"Log in to your existing Drupal 8 installation as admin, with your credentials."),(0,l.kt)("li",{parentName:"ol"},"Browse to the ",(0,l.kt)("strong",{parentName:"li"},'"Appearance"')," section of the Drupal admin environment."),(0,l.kt)("li",{parentName:"ol"},"Find the theme and activate it by clicking \u201cinstall\u201d."),(0,l.kt)("li",{parentName:"ol"},"Click \u201cSet as default\u201d to make it your default theme."),(0,l.kt)("li",{parentName:"ol"},'Browse to the homepage, then hit "refresh" in your browser. You should now see your site styled using Base+.')),(0,l.kt)("h2",{id:"23-install-over-existing-drupal-installation-with-the-special-features"},"2.3. Install over existing Drupal installation, with the special features"),(0,l.kt)("p",null,"Important notice: It is strongly recommended that you execute the instructions below on ",(0,l.kt)("strong",{parentName:"p"},"a cloned instance of your production site.")," This is the safest way to handle this, ensuring that your production site remains unaffected if you make any mistakes in any of the steps below."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Start by creating a ",(0,l.kt)("strong",{parentName:"p"},"full installation")," of your purchased theme product, with its content types, Views blocks and pages and special features, as advised in section 2.1. This will be used for reference and exporting features only and can therefore be installed on your test dev environment.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Copy the simple Drupal theme from your full product installation above or from the product folder you downloaded, into the clone of your existing Drupal installation, then activate the theme, as described in section ",(0,l.kt)("strong",{parentName:"p"},"2.2"),". Your existing Drupal installation should be now re-styled according to the looks of your purchased product. However, the parts of the purchased theme product that you are still not seeing are:",(0,l.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0","a. Special Content Types",(0,l.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0","b. Special Views and Blocks",(0,l.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0","c. Special Menus",(0,l.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0","d. Other Special features")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install the theme required libraries. Just copy the  content of the ",(0,l.kt)("strong",{parentName:"p"},"d9/simple_theme_installation/libraries")," folder of the theme pack into the ",(0,l.kt)("strong",{parentName:"p"},"libraries")," folder of your installation. If your installation does not have a libraries folder please create it.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install the theme required modules. Just copy the content of ",(0,l.kt)("strong",{parentName:"p"},"d9/simple_theme_installation/modules")," folder of the theme pack into the modules folder of your installation. Finally enable those modules through the Drupal administration interface.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Adjust Image styles through Home \xbb Administration \xbb Configuration \xbb Media \xbb Image Styles. Use the full installation of the product mentioned in step 1 for reference:",(0,l.kt)("br",null)),(0,l.kt)("p",{parentName:"li"},"Home \xbb Administration \xbb Configuration \xbb Media \xbb Image Styles")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Reproduce all custom Content Types by using the full installation as a reference to guide you. Make sure you are ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"using the same machine names for the content type and the fields of the content type")),"."),(0,l.kt)("p",{parentName:"li"},"Use the full installation of the product mentioned in step 1 for reference."),(0,l.kt)("p",{parentName:"li"},"Finally make sure that you have also reproduced the display settings in the ",(0,l.kt)("strong",{parentName:"p"},"\u201cManage form display\u201d")," and ",(0,l.kt)("strong",{parentName:"p"},"\u201cManage display\u201d")," tabs as well as for the ",(0,l.kt)("strong",{parentName:"p"},"teaser")," and ",(0,l.kt)("strong",{parentName:"p"},"default")," display.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Export all the views from the ",(0,l.kt)("strong",{parentName:"p"},"full installation")," created on step 1 and import the views in your main installation."))),(0,l.kt)("p",null,"Navigate to"),(0,l.kt)("p",null,"Home \xbb Administration \xbb Configuration \xbb Development \xbb Synchronize \xbb Import"),(0,l.kt)("p",null,"and select the single item tab. Make sure you select the \u201cView\u201d configuration type, paste the content of each .yml file into the text area and save the configuration. You will have to do this for each file you exported."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image1",src:a(7202).Z,width:"569",height:"699"})),(0,l.kt)("ol",{start:8},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Reproduce all custom block types by using the full installation as a reference to guide you. Navigate to Home \xbb Administration \xbb Structure \xbb Block layout \xbb Custom block library and select the ",(0,l.kt)("strong",{parentName:"p"},"Types")," tab."),(0,l.kt)("p",{parentName:"li"},"Make sure you are ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"using the same machine names for the custom block type as well as the corresponding fields."))," This procedure is similar to step 6 above."),(0,l.kt)("p",{parentName:"li"},"Finally make sure that you have also reproduced the display settings in the ",(0,l.kt)("strong",{parentName:"p"},"\u201cManage form display\u201d")," and ",(0,l.kt)("strong",{parentName:"p"},"\u201cManage display\u201d")," tabs.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Configure your existing blocks to make use of the new regions the premium theme provides. You can use multiple instances of the various blocks, as well."))),(0,l.kt)("h2",{id:"24-install-drupal-commerce"},"2.4 Install Drupal Commerce"),(0,l.kt)("p",null,"The pack contains two installation options for the Flashy+ commerce distribution. The full installation under the ",(0,l.kt)("strong",{parentName:"p"},"flashyplus_commerce/d9/full_installation")," path and the dev installation under the ",(0,l.kt)("strong",{parentName:"p"},"flashyplus_commerce/d9/dev_installation")," path. The full_installation is provided for demonstration purposes only. Consider using the  dev_installation for development."),(0,l.kt)("h3",{id:"241-install-as-a-full-drupal-distribution-full-installation"},"2.4.1 Install as a full Drupal Distribution (full installation)"),(0,l.kt)("p",null,"This section explains how to perform the full installation for demonstration purposes only.\nCommerce 2.x should only be installed via Composer. The files on this pack are provided for demonstration purposes only.",(0,l.kt)("br",null),"\n",(0,l.kt)("a",{parentName:"p",href:"https://www.drupal.org/project/commerce"},"https://www.drupal.org/project/commerce")),(0,l.kt)("p",null,"This installation method does not require the Composer dependency manager. All dependencies are pre-installed and all you need to do is to import the database and start the  Drupal installation wizard as in section:\n",(0,l.kt)("a",{parentName:"p",href:"#21-install-as-a-full-drupal-distribution-with-all-features-as-seen-in-demo"},"2.1. Install as a full Drupal distribution (with all features as seen in demo)")," "),(0,l.kt)("h3",{id:"242-install-for-commerce-development---recommended-dev-installation"},"2.4.2 Install for Commerce Development - Recommended (dev installation)"),(0,l.kt)("p",null,"This is a Composer based development workflow."),(0,l.kt)("h4",{id:"before-you-start"},"Before you start"),(0,l.kt)("p",null,"Make sure that you read the article \u201c",(0,l.kt)("a",{parentName:"p",href:"https://www.drupal.org/node/2718229"},"Using Composer to manage Drupal site dependencies"),"\u201d at Drupal.org, in order to understand the requirements and procedures of managing a site with Composer:",(0,l.kt)("br",null)),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.drupal.org/node/2718229"},"https://www.drupal.org/node/2718229")),(0,l.kt)("p",null,"Prepare your environment"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Make sure that our server is running PHP 7.4 or PHP 8.0. For more information visit:",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"li",href:"https://www.drupal.org/docs/system-requirements/php-requirements"},"https://www.drupal.org/docs/system-requirements/php-requirements")),(0,l.kt)("li",{parentName:"ol"},"Install Composer on your machine. For more information, visit:",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"li",href:"https://getcomposer.org/doc/00-intro.md"},"https://getcomposer.org/doc/00-intro.md"))),(0,l.kt)("h4",{id:"installation-steps"},"Installation steps"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Place the included \u201c",(0,l.kt)("strong",{parentName:"p"},"d9/dev_installation/site"),"\u201d folder under your Apache server path",(0,l.kt)("sup",{parentName:"p",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create an empty MySQL database and take note of the database name.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In your newly created database, import the \u201c",(0,l.kt)("strong",{parentName:"p"},"d9/dev_installation/database/db_instance_pro.sql"),"\u201d file that comes with the theme. For additional information, please ask your hosting provider for assistance on how to import the database file.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Require the dependencies. All dependencies, the Drupal core and the contributed modules are managed by Composer"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Download Drupal Core and Modules:\nChange directory to web root and execute the following command:",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"li"},"composer install")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Start the Drupal installation wizard by pointing your browser to the recently created folder, in your Apache server path."))),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-1"},"How to find your Apache server path: if you are deploying online, your hosting provider should be able to provide you this. If you are deploying locally, it will be where your XAMPP or MAMP installation is configured to look into (e.g.: htdocs, in the case of MAMP on Mac OS X).",(0,l.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0},6501:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2.1_image1-e14f08a9415388e0b63ba9835955a1e1.jpg"},1786:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2.1_image2-e2663aa7b219af0a83a696b7dbac26f2.jpg"},2778:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2.1_image3-aa074422677db0b00f321a915092e0ce.jpg"},1574:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2.1_image4-43d9a4f5d69b0015bd4c4fb1f130481b.png"},8514:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2.1_image5-89df7fd4e8fc960157f030a1330010c6.jpg"},4899:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2.1_image6-6c088e8b972542c311ce168c1bfcbc1c.jpg"},5067:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2.1_image7-784a2532ec8f978ff7bec8e2821d980f.jpg"},2729:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2.1_image8-172299a3e0328644ff8f7d84e6199a49.jpg"},7189:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2.1_image9-191c9f6aaf4a271bd219f16d98d093f0.jpg"},7202:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2.3_image1-4e7b066b5959bff010c6cf960f2c49d4.png"}}]);