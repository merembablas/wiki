(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(h,s(s({ref:t},l),{},{components:n})):o.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},115:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/nuchain-app-web-extension1-7eed3e5bdbd7628f07b14762a2096625.png"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(103)),i={id:"browser-extension",title:"Browser Extension",sidebar_label:"Extension"},s={unversionedId:"learn/browser-extension",id:"learn/browser-extension",isDocsHomePage:!1,title:"Browser Extension",description:"A login is usually required to access a service/application, but the term login in the Web3 world is irrelevant. What is needed in Web3 for authentication and authorization is a cryptographic key instead of user name and password as in the centralized world.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/learn/extension.md",sourceDirName:"learn",slug:"/learn/browser-extension",permalink:"/en/docs/learn/browser-extension",editUrl:"https://github.com/nusantarachain/wiki/edit/master/docs/learn/extension.md",version:"current",sidebar_label:"Extension",frontMatter:{id:"browser-extension",title:"Browser Extension",sidebar_label:"Extension"},sidebar:"tutorialSidebar",previous:{title:"Nominee",permalink:"/en/docs/learn/nominator"},next:{title:"Build",permalink:"/en/docs/build/build-intro"}},c=[{value:"Installing the extension",id:"installing-the-extension",children:[]},{value:"Extension function",id:"extension-function",children:[]},{value:"Create an account",id:"create-an-account",children:[]}],l={toc:c};function u(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A login is usually required to access a service/application, but the term login in the Web3 world is irrelevant. What is needed in Web3 for authentication and authorization is a cryptographic key instead of ",Object(a.b)("em",{parentName:"p"},"user name")," and ",Object(a.b)("em",{parentName:"p"},"password")," as in the centralized world."),Object(a.b)("p",null,"Currently, the development of Web3 has not been supported by a native frontend in the browser, so that access to the Web3 network still requires tools. For example, on the Ethereum ecosystem there is the Metamask tool, on Polkadot there is the Polkadot JS app. The existence of this tools is to make it easier for users to access Web3. In the future, when all browsers (",Object(a.b)("em",{parentName:"p"},"browser"),") already support Web3 then tools (",Object(a.b)("em",{parentName:"p"},"extension"),") like this will no longer be needed, because they are available natively in the browser."),Object(a.b)("h2",{id:"installing-the-extension"},"Installing the extension"),Object(a.b)("p",null,"At the present until the majority of browsers support Web3, we need a tool to access the Nuchain network. This tool is a ",Object(a.b)("em",{parentName:"p"},"browser extension"),", which you can get at:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/nuchain-app/hfcdboaniimgkememgmilhmnkdgggkne"},"Nuchain App for Chrome browser")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",{parentName:"li",href:"https://addons.mozilla.org/en-US/firefox/addon/nuchain-app/"},"Nuchain App for Firefox browser"))),Object(a.b)("p",null,"Once installed in the browser, the Nuchain icon will appear as shown in the following image:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Nuchain App web extension",src:n(115).default})),Object(a.b)("h2",{id:"extension-function"},"Extension function"),Object(a.b)("p",null,"The function of this Nuchain App browser extension is to store a ",Object(a.b)("em",{parentName:"p"},"private key")," and secure it offline in your browser with a password. Furthermore, when you access a website that supports Web3 this extension will be active and ask for your permission to authorize the necessary operations/transactions on the Nuchain network securely without needing to expose your private key."),Object(a.b)("p",null,"This is more secure than you putting the private key into a 3rd party application. It is recommended not to save your key in 3rd party app."),Object(a.b)("h2",{id:"create-an-account"},"Create an account"),Object(a.b)("p",null,"Browser extensions can be used to create accounts. Basically, accounts in the Web3 are just asymmetric cryptographic key pairs, so this extension only generates random cryptographic keys. For more details, please read the section ",Object(a.b)("a",{parentName:"p",href:"/en/docs/learn/account#using-browser-extension"},"Creating an account using a browser extension"),"."))}u.isMDXComponent=!0}}]);