(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=b(n),p=a,d=m["".concat(i,".").concat(p)]||m[p]||u[p]||o;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(103)),i={id:"nominator",title:"Nominee",sidebar_label:"Nominee"},c={unversionedId:"learn/nominator",id:"learn/nominator",isDocsHomePage:!1,title:"Nominee",description:"Nominees are individuals who wish to participate in securing the network without being a validator. Unlike the validator, the nominee does not require a machine to perform block validation. Nominees can use their tokens to help strengthen other validators, so that the validators have more chance to be selected and enter the list of validators. As a return, the nominee will receive ARA tokens according to the profit sharing percentage set by the validator.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/learn/nominator.md",sourceDirName:"learn",slug:"/learn/nominator",permalink:"/en/docs/learn/nominator",editUrl:"https://github.com/nusantarachain/wiki/edit/master/docs/learn/nominator.md",version:"current",sidebar_label:"Nominee",frontMatter:{id:"nominator",title:"Nominee",sidebar_label:"Nominee"},sidebar:"tutorialSidebar",previous:{title:"Using Docker",permalink:"/en/docs/learn/docker"},next:{title:"Browser Extension",permalink:"/en/docs/learn/browser-extension"}},l=[{value:"How to Become a Nominee",id:"how-to-become-a-nominee",children:[]}],s={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Nominees are individuals who wish to participate in securing the network without being a validator. Unlike the validator, the nominee does not require a machine to perform block validation. Nominees can use their tokens to help strengthen other validators, so that the validators have more chance to be selected and enter the list of validators. As a return, the nominee will receive ARA tokens according to the profit sharing percentage set by the validator."),Object(o.b)("h2",{id:"how-to-become-a-nominee"},"How to Become a Nominee"),Object(o.b)("p",null,"To be a nominee you need to ",Object(o.b)("a",{parentName:"p",href:"/en/docs/learn/account"},"create an account")," first."),Object(o.b)("p",null,"Go to ",Object(o.b)("a",{parentName:"p",href:"https://dashboard.nuchain.network"},"Nuchain Dashboard"),". Select the ",Object(o.b)("inlineCode",{parentName:"p"},"Network")," menu > ",Object(o.b)("inlineCode",{parentName:"p"},"Staking")," >\n",Object(o.b)("inlineCode",{parentName:"p"},"Account actions")," then click the ",Object(o.b)("inlineCode",{parentName:"p"},"Nominator")," . button"),Object(o.b)("p",null,"There are several inputs that need to be filled in the nominee window."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/z3ZlnIg.png",alt:"Nominee"})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"stash account")," - the account that will be used as ",Object(o.b)("em",{parentName:"li"},"holding")," of the nomination process. This account is not used for daily transactions but only to handle the nomination process. You can use this account to increase the number of ",Object(o.b)("em",{parentName:"li"},"stake")," from each ",Object(o.b)("em",{parentName:"li"},"rewards")," earned."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"controller account")," - the account that controls the ",Object(o.b)("em",{parentName:"li"},"Stash Account"),". This account may be the same account that will be used as the ",Object(o.b)("em",{parentName:"li"},"stash account"),", but it is recommended that you have different account for those two purposes."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"value bonded")," - the number of ARA to be staked. Do not enter all the ARA you have, especially if the stash and controller account are the same, then you may not be able to conduct ",Object(o.b)("em",{parentName:"li"},"payout")," to withdraw rewards in the future. Keep in mind that you need ARA as ",Object(o.b)("em",{parentName:"li"},"fee")," to withdraw ",Object(o.b)("em",{parentName:"li"},"rewards"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"on-chain bonding duration")," - ",Object(o.b)("em",{parentName:"li"},"stake")," waiting period will be locked and cannot be used. If you want to ",Object(o.b)("em",{parentName:"li"},"unstake"),", the realization will be done after the waiting period ends."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"payment destination")," - the account that will be used as the recipient of ",Object(o.b)("strong",{parentName:"li"},"rewards"),".")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/YSW02Zs.png",alt:"payment destination"})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"DESCRIPTION:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Stash account (increase the amount at stake)")," - every ",Object(o.b)("strong",{parentName:"li"},"rewards")," earned will be transferred to the ",Object(o.b)("em",{parentName:"li"},"stash")," account and will increase the amount of ",Object(o.b)("em",{parentName:"li"},"stake")," automatically (locked)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Stash account (do not increase the amount at stake)")," - ",Object(o.b)("em",{parentName:"li"},"rewards")," will be transferred to ",Object(o.b)("em",{parentName:"li"},"stash")," account but it will not increase the amount of ",Object(o.b)("em",{parentName:"li"},"stake"),"; it is unlocked and therefore it can be used."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Controller account")," - ",Object(o.b)("em",{parentName:"li"},"rewards")," will be transferred to ",Object(o.b)("em",{parentName:"li"},"controller")," account and not increase its ",Object(o.b)("em",{parentName:"li"},"stake")," value."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Specified payment account")," - ",Object(o.b)("em",{parentName:"li"},"rewards")," will be transferred to a specific account selected by you other than ",Object(o.b)("em",{parentName:"li"},"stash")," and ",Object(o.b)("em",{parentName:"li"},"controller"),".")),Object(o.b)("p",null,"Then click ",Object(o.b)("strong",{parentName:"p"},"Next")," and the following window will appear:"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/YkLLjtG.png",alt:"Nominator select candidate"})),Object(o.b)("p",null,"In this section you need to choose which validator you will stake the ARA (Can be more than one account). Choose the best validator because doing ",Object(o.b)("em",{parentName:"p"},"stake")," ARA has the same risk as validator; validator engine that is not reliable or often shuts down will affect your ",Object(o.b)("em",{parentName:"p"},"rewards"),". Choose a validator that sets a low commission value for optimal ",Object(o.b)("em",{parentName:"p"},"rewards"),"."),Object(o.b)("p",null,"After you finish selecting, click ",Object(o.b)("strong",{parentName:"p"},"Bond & Nominate"),"."),Object(o.b)("p",null,"You will enter the ",Object(o.b)("em",{parentName:"p"},"Waiting list")," in which your account will be processed as a nominee within 24 hours (1 era)."))}b.isMDXComponent=!0}}]);