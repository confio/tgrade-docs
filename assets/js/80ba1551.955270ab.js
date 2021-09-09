(self.webpackChunktgrade_docs=self.webpackChunktgrade_docs||[]).push([[706],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),l=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),p=l(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(h,i(i({ref:e},d),{},{components:n})):r.createElement(h,i({ref:e},d))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7978:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:1},s="Your First Contract",l={unversionedId:"smart-contracts/first-contract",id:"smart-contracts/first-contract",isDocsHomePage:!1,title:"Your First Contract",description:"Buckle up, we will now get first-hand experience with CosmWasm, by starting up our own CosmWasm-enabled blockchain (just",source:"@site/developer/02-smart-contracts/01-first-contract.md",sourceDirName:"02-smart-contracts",slug:"/smart-contracts/first-contract",permalink:"/tgrade-docs/developer/smart-contracts/smart-contracts/first-contract",editUrl:"https://github.com/confio/tgrade-docs/edit/main/developer/02-smart-contracts/01-first-contract.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"wikiSidebar",previous:{title:"Smart Contracts",permalink:"/tgrade-docs/developer/smart-contracts/smart-contracts/intro"},next:{title:"Installation",permalink:"/tgrade-docs/developer/smart-contracts/smart-contracts/installation"}},d=[{value:"Sections",id:"sections",children:[]},{value:"Video Version",id:"video-version",children:[]}],u={toc:d};function p(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"your-first-contract"},"Your First Contract"),(0,a.kt)("p",null,"Buckle up, we will now get first-hand experience with CosmWasm, by starting up our own CosmWasm-enabled blockchain (just\none node for now), modifying an existing contract, deploying it to our system, and executing it via the cli. If you are\nmore ",(0,a.kt)("em",{parentName:"p"},"research first then get your hands dirty second")," person, you should go ahead\nto ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cosmwasm.com/docs/architecture/multichain/"},"Architecture")," read it first and then head back here."),(0,a.kt)("p",null,"We will not dive into smart contract development in this section to provide an easy to digest introduction. Also, you\ncan follow the steps here to test out smart contracts live on a testnet without drowning in smart contract development\ndetails. We will demonstrate setting up environment, compiling, deploying, and interacting. Then to make things a bit\nmore interesting, we will show modifying the example escrow contract by adding a backdoor to it in\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cosmwasm.com/tutorials/hijack-escrow/intro"},"Hijack Escrow tutorial"),". It exposes an identical API to the original one, but has\none hidden command added. This also shows the importance of verifying the source code behind any contract you run."),(0,a.kt)("p",null,"This is designed for programmers who are comfortable with the command-line and using Linux or MacOS. It is helpful to\nhave a basic understanding of Rust and Go, but we will lead you through, so fast learners need no prior knowledge."),(0,a.kt)("h2",{id:"sections"},"Sections"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/tgrade-docs/developer/smart-contracts/smart-contracts/installation"},"Installation")," will show you how to setup the required software tooling for CosmWasm."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/tgrade-docs/developer/smart-contracts/smart-contracts/setting-env"},"Setting up Environment")," will show you how to setup the client environment, interacting with faucet."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/tgrade-docs/developer/smart-contracts/smart-contracts/compile-contract"},"Downloading and Compiling Contract")," will demonstrate downloading and compiling smart contract code\nto wasm byte code."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/tgrade-docs/developer/smart-contracts/smart-contracts/interact-with-contract"},"Interacting with Contracts")," will show deploying, initializing and executing smart contracts."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/tgrade-docs/developer/smart-contracts/smart-contracts/next-steps"},"Next Steps")," is the last part of the tutorial that wraps up and sails you to the next dock, meaning new\nlearning resources."),(0,a.kt)("h2",{id:"video-version"},"Video Version"),(0,a.kt)("p",null,"The coding sections for smart contracts are also available as\na ",(0,a.kt)("a",{parentName:"p",href:"https://vimeo.com/showcase/6671477"},"series of videos, leading you through the code structure"),"."))}p.isMDXComponent=!0}}]);