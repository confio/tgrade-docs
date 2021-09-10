(self.webpackChunktgrade_docs=self.webpackChunktgrade_docs||[]).push([[278],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2382:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),s=["components"],i={sidebar_position:4},c="Downloading and Compiling Contract",l={unversionedId:"smart-contracts/compile-contract",id:"smart-contracts/compile-contract",isDocsHomePage:!1,title:"Downloading and Compiling Contract",description:"In this section, we will download a sample contract, compile to it to wasm binary executable.",source:"@site/developer/02-smart-contracts/04-compile-contract.md",sourceDirName:"02-smart-contracts",slug:"/smart-contracts/compile-contract",permalink:"/tgrade-docs/developer/smart-contracts/smart-contracts/compile-contract",editUrl:"https://github.com/confio/tgrade-docs/edit/main/developer/02-smart-contracts/04-compile-contract.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"wikiSidebar",previous:{title:"Setting Up Environment",permalink:"/tgrade-docs/developer/smart-contracts/smart-contracts/setting-env"},next:{title:"Uploading and Interacting",permalink:"/tgrade-docs/developer/smart-contracts/smart-contracts/interact-with-contract"}},p=[{value:"Compiling and Testing Contract",id:"compiling-and-testing-contract",children:[]},{value:"Unit Tests",id:"unit-tests",children:[]},{value:"Optimized Compilation",id:"optimized-compilation",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"downloading-and-compiling-contract"},"Downloading and Compiling Contract"),(0,a.kt)("p",null,"In this section, we will download a sample contract, compile to it to wasm binary executable."),(0,a.kt)("p",null,"Please first review the ",(0,a.kt)("a",{parentName:"p",href:"/tgrade-docs/developer/smart-contracts/smart-contracts/setting-env"},"client setup instructions"),", and configure and verify a client."),(0,a.kt)("h2",{id:"compiling-and-testing-contract"},"Compiling and Testing Contract"),(0,a.kt)("p",null,"Let's download the repo in which we collect\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-examples"},(0,a.kt)("inlineCode",{parentName:"a"},"cw-examples"))," and try out an existing simple name service\ncontract where mimics a name service marketplace on tgrade. You can run any CosmWasm smart contract on Tgrade network. We picked this contract due to its simplicity.\nFirst, clone the repo and try to build the wasm bundle:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# get the code\ngit clone https://github.com/CosmWasm/cw-examples\ncd cw-examples\ngit fetch --tags\ngit checkout nameservice-0.11.0\ncd nameservice\n\ncargo wasm\n")),(0,a.kt)("p",null,"After this compiles, it should produce a file in\n",(0,a.kt)("inlineCode",{parentName:"p"},"target/wasm32-unknown-unknown/release/cw_nameservice.wasm"),". A quick ",(0,a.kt)("inlineCode",{parentName:"p"},"ls -lh")," should show around 1.7MB. This is a release\nbuild,\nbut not stripped of all unneeded code. To produce a much smaller version, you can run this which tells the compiler to\nstrip all unused code out:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"RUSTFLAGS='-C link-arg=-s' cargo wasm\n")),(0,a.kt)("p",null,"This produces a file around 160kB. We use this and another optimizer in the next ",(0,a.kt)("a",{parentName:"p",href:"#optimized-compilation"},"last section"),"\nto produce the final product uploaded to the blockchain. You don't need to worry about running this yourself (unless you\nare curious), but you should have an idea of the final size of your contract this way."),(0,a.kt)("h2",{id:"unit-tests"},"Unit Tests"),(0,a.kt)("p",null,"Let's try running the unit tests:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"RUST_BACKTRACE=1 cargo unit-test\n")),(0,a.kt)("p",null,"After some compilation steps, you should see:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\nrunning 15 tests\ntest coin_helpers::test::assert_sent_sufficient_coin_works ... ok\ntest tests::tests::fails_on_register_already_taken_name ... ok\ntest tests::tests::fails_on_register_wrong_fee_denom ... ok\ntest tests::tests::fails_on_register_insufficient_fees ... ok\ntest tests::tests::fails_on_transfer_from_nonowner ... ok\ntest tests::tests::fails_on_transfer_non_existent ... ok\ntest tests::tests::proper_init_no_fees ... ok\ntest tests::tests::fails_on_transfer_insufficient_fees ... ok\ntest tests::tests::register_available_name_and_query_works ... ok\ntest tests::tests::proper_init_with_fees ... ok\ntest tests::tests::register_available_name_and_query_works_with_fees ... ok\ntest tests::tests::register_available_name_fails_with_invalid_name ... ok\ntest tests::tests::returns_empty_on_query_unregistered_name ... ok\ntest tests::tests::transfer_works_with_fees ... ok\ntest tests::tests::transfer_works ... ok\n\ntest result: ok. 15 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"RUST_BACKTRACE=1")," will provide you with full stack traces on any error, which is super useful. This only works for unit\ntests (which test native rust code, not the compiled wasm). Also, if you want to know where ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo wasm"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo unit-test")," come from, they are just aliases defined in\n",(0,a.kt)("inlineCode",{parentName:"p"},".cargo/config"),". Take a look there to understand the cargo flags more."),(0,a.kt)("h2",{id:"optimized-compilation"},"Optimized Compilation"),(0,a.kt)("p",null,"Optimized Compilation process will provide a binary ready to be deployed on a network.\nSmart contract binary size must be as small as possible for reduced gas cost. This will not only cost less on\ndeployment, also for every single interaction. Simply, ",(0,a.kt)("strong",{parentName:"p"},"optimize production code"),"\nusing ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/rust-optimizer"},"cosmwasm/rust-optimizer"),".\n",(0,a.kt)("strong",{parentName:"p"},"rust-optimizer")," also produces reproducible builds of smart contracts. This means third parties can verify\nthe contract is actually the claimed code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'docker run --rm -v "$(pwd)":/code \\\n  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \\\n  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \\\n  cosmwasm/rust-optimizer:0.11.5\n')),(0,a.kt)("p",null,"Binary will be at ",(0,a.kt)("inlineCode",{parentName:"p"},"artifacts")," and its size will be ",(0,a.kt)("inlineCode",{parentName:"p"},"137k"),"."))}m.isMDXComponent=!0}}]);