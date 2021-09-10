(self.webpackChunktgrade_docs=self.webpackChunktgrade_docs||[]).push([[282],{4973:function(e,n,t){"use strict";t.d(n,{Z:function(){return f},I:function(){return l}});var r=t(7294),o=/{\w+}/g,u="{}";function i(e,n){var t=[],i=e.replace(o,(function(e){var o=e.substr(1,e.length-2),i=null==n?void 0:n[o];if(void 0!==i){var a=r.isValidElement(i)?i:String(i);return t.push(a),u}return e}));return 0===t.length?e:t.every((function(e){return"string"==typeof e}))?i.split(u).reduce((function(e,n,r){var o;return e.concat(n).concat(null!==(o=t[r])&&void 0!==o?o:"")}),""):i.split(u).reduce((function(e,n,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},n,t[o])])}),[])}function a(e){var n=e.children,t=e.values;if("string"!=typeof n)throw console.warn("Illegal <Interpolate> children",n),new Error("The Docusaurus <Interpolate> component only accept simple string values");return i(n,t)}var c=t(4644);function s(e){var n,t=e.id,r=e.message;return null!==(n=c[null!=t?t:r])&&void 0!==n?n:r}function l(e,n){var t,r=e.message;return i(null!==(t=s({message:r,id:e.id}))&&void 0!==t?t:r,n)}function f(e){var n,t=e.children,o=e.id,u=e.values;if("string"!=typeof t)throw console.warn("Illegal <Translate> children",t),new Error("The Docusaurus <Translate> component only accept simple string values");var i=null!==(n=s({message:t,id:o}))&&void 0!==n?n:t;return r.createElement(a,{values:u},i)}},8143:function(e,n,t){"use strict";t.r(n),t.d(n,{BrowserRouter:function(){return r.VK},HashRouter:function(){return r.UT},Link:function(){return r.rU},MemoryRouter:function(){return r.VA},NavLink:function(){return r.OL},Prompt:function(){return r.NL},Redirect:function(){return r.l_},Route:function(){return r.AW},Router:function(){return r.F0},StaticRouter:function(){return r.gx},Switch:function(){return r.rs},generatePath:function(){return r.Gn},matchPath:function(){return r.LX},useHistory:function(){return r.k6},useLocation:function(){return r.TH},useParams:function(){return r.UO},useRouteMatch:function(){return r.$B},withRouter:function(){return r.EN}});var r=t(3727)},8084:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o},useAllPluginInstancesData:function(){return u},usePluginData:function(){return i}});var r=t(2263);function o(){var e=(0,r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found.");return e}function u(e){var n=o()[e];if(!n)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin.');return n}function i(e,n){void 0===n&&(n="default");var t=u(e)[n];if(!t)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin with id "'+n+'".');return t}},2389:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(7294),o=t(9913);function u(){return(0,r.useContext)(o._)}},8408:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getDocVersionSuggestions=n.getActiveDocContext=n.getActiveVersion=n.getLatestVersion=n.getActivePlugin=void 0;var r=t(8143);n.getActivePlugin=function(e,n,t){void 0===t&&(t={});var o=Object.entries(e).find((function(e){e[0];var t=e[1];return!!r.matchPath(n,{path:t.path,exact:!1,strict:!1})})),u=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!u&&t.failfast)throw new Error("Can't find active docs plugin for \""+n+'" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: '+Object.values(e).map((function(e){return e.path})).join(", "));return u};n.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))};n.getActiveVersion=function(e,t){var o=n.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!r.matchPath(t,{path:e.path,exact:!1,strict:!1})}))};n.getActiveDocContext=function(e,t){var o,u,i=n.getActiveVersion(e,t),a=null==i?void 0:i.docs.find((function(e){return!!r.matchPath(t,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:a,alternateDocVersions:a?(o=a.id,u={},e.versions.forEach((function(e){e.docs.forEach((function(n){n.id===o&&(u[e.name]=n)}))})),u):{}}};n.getDocVersionSuggestions=function(e,t){var r=n.getLatestVersion(e),o=n.getActiveDocContext(e,t);return{latestDocSuggestion:null==o?void 0:o.alternateDocVersions[r.name],latestVersionSuggestion:r}}},6730:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.useDocVersionSuggestions=n.useActiveDocContext=n.useActiveVersion=n.useLatestVersion=n.useVersions=n.useActivePluginAndVersion=n.useActivePlugin=n.useDocsData=n.useAllDocsData=void 0;var r=t(655),o=t(8143),u=r.__importStar(t(8084)),i=t(8408),a={};n.useAllDocsData=function(){var e;return null!==(e=u.default()["docusaurus-plugin-content-docs"])&&void 0!==e?e:a};n.useDocsData=function(e){return u.usePluginData("docusaurus-plugin-content-docs",e)};n.useActivePlugin=function(e){void 0===e&&(e={});var t=n.useAllDocsData(),r=o.useLocation().pathname;return i.getActivePlugin(t,r,e)};n.useActivePluginAndVersion=function(e){void 0===e&&(e={});var t=n.useActivePlugin(e),r=o.useLocation().pathname;if(t)return{activePlugin:t,activeVersion:i.getActiveVersion(t.pluginData,r)}};n.useVersions=function(e){return n.useDocsData(e).versions};n.useLatestVersion=function(e){var t=n.useDocsData(e);return i.getLatestVersion(t)};n.useActiveVersion=function(e){var t=n.useDocsData(e),r=o.useLocation().pathname;return i.getActiveVersion(t,r)};n.useActiveDocContext=function(e){var t=n.useDocsData(e),r=o.useLocation().pathname;return i.getActiveDocContext(t,r)};n.useDocVersionSuggestions=function(e){var t=n.useDocsData(e),r=o.useLocation().pathname;return i.getDocVersionSuggestions(t,r)}},1217:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(7294),o=t(9105),u=t(941),i=t(4996);function a(e){var n=e.title,t=e.description,a=e.keywords,c=e.image,s=e.children,l=(0,u.pe)(n),f=(0,i.C)().withBaseUrl,d=c?f(c,{absolute:!0}):void 0;return r.createElement(o.default,null,n&&r.createElement("title",null,l),n&&r.createElement("meta",{property:"og:title",content:l}),t&&r.createElement("meta",{name:"description",content:t}),t&&r.createElement("meta",{property:"og:description",content:t}),a&&r.createElement("meta",{name:"keywords",content:Array.isArray(a)?a.join(","):a}),d&&r.createElement("meta",{property:"og:image",content:d}),d&&r.createElement("meta",{name:"twitter:image",content:d}),s)}},3783:function(e,n,t){"use strict";var r=t(7294),o=t(412),u="desktop",i="mobile",a="ssr";function c(){return o.Z.canUseDOM?window.innerWidth>996?u:i:a}n.Z=function(){var e=(0,r.useState)((function(){return c()})),n=e[0],t=e[1];return(0,r.useEffect)((function(){function e(){t(c())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),n}},941:function(e,n,t){"use strict";t.d(n,{pl:function(){return ve},zF:function(){return Z},HX:function(){return p},PO:function(){return X},L5:function(){return oe},Cv:function(){return Y},Cn:function(){return J},kM:function(){return ae},WA:function(){return s},os:function(){return m},Mg:function(){return w},_f:function(){return l},PZ:function(){return be},bc:function(){return g},MA:function(){return he},l5:function(){return d},nT:function(){return ge},uR:function(){return x},J:function(){return ie},Rb:function(){return we},be:function(){return pe},SL:function(){return V},g8:function(){return Q},D9:function(){return A},LU:function(){return o},pe:function(){return D}});var r=t(2263);function o(){return(0,r.default)().siteConfig.themeConfig}var u="localStorage";function i(e){if(void 0===e&&(e=u),"undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(t){return n=t,a||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",n),a=!0),null}var n}var a=!1;var c={get:function(){return null},set:function(){},del:function(){}};var s=function(e,n){if("undefined"==typeof window)return function(e){function n(){throw new Error('Illegal storage API usage for storage key "'+e+'".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.')}return{get:n,set:n,del:n}}(e);var t=i(null==n?void 0:n.persistence);return null===t?c:{get:function(){return t.getItem(e)},set:function(n){return t.setItem(e,n)},del:function(){return t.removeItem(e)}}};function l(e){void 0===e&&(e=u);var n=i(e);if(!n)return[];for(var t=[],r=0;r<n.length;r+=1){var o=n.key(r);null!==o&&t.push(o)}return t}var f=t(5977);function d(){var e=(0,r.default)(),n=e.siteConfig,t=n.baseUrl,o=n.url,u=e.i18n,i=u.defaultLocale,a=u.currentLocale,c=(0,f.TH)().pathname,s=a===i?t:t.replace("/"+a+"/","/"),l=c.replace(t,"");return{createUrl:function(e){var n=e.locale;return""+(e.fullyQualified?o:"")+function(e){return e===i?""+s:""+s+e+"/"}(n)+l}}}var v=/title=(["'])(.*?)\1/;function g(e){var n,t;return null!==(t=null===(n=null==e?void 0:e.match(v))||void 0===n?void 0:n[2])&&void 0!==t?t:""}var p="default";function m(e,n){return"docs-"+e+"-"+n}var h=t(6730),b=!!h.useAllDocsData,w=function(e,n){var t=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return t(e)===t(n)},D=function(e){var n=(0,r.default)().siteConfig,t=n.title,o=n.titleDelimiter;return e&&e.trim().length?e.trim()+" "+o+" "+t:t},y=t(7294),E=["zero","one","two","few","many","other"];function P(e){return E.filter((function(n){return e.includes(n)}))}P(["one","other"]);function A(e){var n=(0,y.useRef)();return(0,y.useEffect)((function(){n.current=e})),n.current}function V(e){var n=(0,f.TH)(),t=A(n),r=(0,y.useRef)(!0);(0,y.useEffect)((function(){r.current?r.current=!1:e({location:n,previousLocation:t})}),[n])}var C=t(9756),S=t(412),L=["collapsed"],k=["lazy"];function x(e){var n=e.initialState,t=(0,y.useState)(null!=n&&n),r=t[0],o=t[1],u=(0,y.useCallback)((function(){o((function(e){return!e}))}),[]);return{collapsed:r,setCollapsed:o,toggleCollapsed:u}}var R={display:"none",overflow:"hidden",height:"0px"},M={display:"block",overflow:"visible",height:"auto"};function T(e,n){var t=n?R:M;e.style.display=t.display,e.style.overflow=t.overflow,e.style.height=t.height}function O(e){var n=e.collapsibleRef,t=e.collapsed,r=e.animation,o=(0,y.useRef)(!1);(0,y.useEffect)((function(){var e,u=n.current;function i(){var e,n,t=u.scrollHeight;return{transition:"height "+(null!==(e=null==r?void 0:r.duration)&&void 0!==e?e:function(e){var n=e/36;return Math.round(10*(4+15*Math.pow(n,.25)+n/5))}(t))+"ms "+(null!==(n=null==r?void 0:r.easing)&&void 0!==n?n:"ease-in-out"),height:t+"px"}}function a(){var e=i();u.style.transition=e.transition,u.style.height=e.height}if(!o.current)return T(u,t),void(o.current=!0);return u.style.willChange="height",e=requestAnimationFrame((function(){t?(a(),requestAnimationFrame((function(){u.style.height=R.height,u.style.overflow=R.overflow}))):(u.style.display="block",requestAnimationFrame((function(){a()})))})),function(){return cancelAnimationFrame(e)}}),[n,t,r])}function I(e){if(!S.Z.canUseDOM)return e?R:M}function j(e){var n=e.as,t=void 0===n?"div":n,r=e.collapsed,o=e.children,u=e.animation,i=e.onCollapseTransitionEnd,a=e.className,c=e.disableSSRStyle,s=(0,y.useRef)(null);return O({collapsibleRef:s,collapsed:r,animation:u}),y.createElement(t,{ref:s,style:c?void 0:I(r),onTransitionEnd:function(e){if("height"===e.propertyName){var n=s.current,t=n.style.height;r||parseInt(t,10)!==n.scrollHeight||(T(n,!1),null==i||i(!1)),t===R.height&&(T(n,!0),null==i||i(!0))}},className:a},o)}function N(e){var n=e.collapsed,t=(0,C.Z)(e,L),r=(0,y.useState)(!n),o=r[0],u=r[1];(0,y.useLayoutEffect)((function(){n||u(!0)}),[n]);var i=(0,y.useState)(n),a=i[0],c=i[1];return(0,y.useLayoutEffect)((function(){o&&c(n)}),[o,n]),o?y.createElement(j,Object.assign({},t,{collapsed:a})):null}function Z(e){var n=e.lazy,t=(0,C.Z)(e,k),r=n?N:j;return y.createElement(r,Object.assign({},t))}var _=t(2389),U=t(6010),B="details_2Ziz",F="isBrowser_2j9b",H="collapsibleContent_3OHp",z=["summary","children"];function W(e){return!!e&&("SUMMARY"===e.tagName||W(e.parentElement))}function q(e,n){return!!e&&(e===n||q(e.parentElement,n))}var X=function(e){var n,t=e.summary,r=e.children,o=(0,C.Z)(e,z),u=(0,_.Z)(),i=(0,y.useRef)(null),a=x({initialState:!o.open}),c=a.collapsed,s=a.setCollapsed,l=(0,y.useState)(o.open),f=l[0],d=l[1];return y.createElement("details",Object.assign({},o,{ref:i,open:f,"data-collapsed":c,className:(0,U.Z)(B,(n={},n[F]=u,n),o.className),onMouseDown:function(e){W(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;W(n)&&q(n,i.current)&&(e.preventDefault(),c?(s(!1),d(!0)):s(!0))}}),t,y.createElement(Z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){s(e),d(!e)}},y.createElement("div",{className:H},r)))};var G=(0,y.createContext)(null);function J(e){var n=e.children;return y.createElement(G.Provider,{value:(0,y.useState)(null)},n)}function K(){var e=(0,y.useContext)(G);if(null===e)throw new Error("MobileSecondaryMenuProvider was not used correctly, context value is null");return e}function Q(){var e=K()[0];if(e){var n=e.component;return function(t){return y.createElement(n,Object.assign({},e.props,t))}}return function(){}}function Y(e){var n,t=e.component,r=e.props,o=K()[1],u=(n=r,(0,y.useMemo)((function(){return n}),[].concat(Object.keys(n),Object.values(n))));return(0,y.useEffect)((function(){o({component:t,props:u})}),[o,t,u]),(0,y.useEffect)((function(){return function(){return o(null)}}),[o]),null}var $=function(e){return"docs-preferred-version-"+e},ee={save:function(e,n,t){s($(e),{persistence:n}).set(t)},read:function(e,n){return s($(e),{persistence:n}).get()},clear:function(e,n){s($(e),{persistence:n}).del()}};function ne(e){var n=e.pluginIds,t=e.versionPersistence,r=e.allDocsData;var o={};return n.forEach((function(e){o[e]=function(e){var n=ee.read(e,t);return r[e].versions.some((function(e){return e.name===n}))?{preferredVersionName:n}:(ee.clear(e,t),{preferredVersionName:null})}(e)})),o}function te(){var e=(0,h.useAllDocsData)(),n=o().docs.versionPersistence,t=(0,y.useMemo)((function(){return Object.keys(e)}),[e]),r=(0,y.useState)((function(){return function(e){var n={};return e.forEach((function(e){n[e]={preferredVersionName:null}})),n}(t)})),u=r[0],i=r[1];return(0,y.useEffect)((function(){i(ne({allDocsData:e,versionPersistence:n,pluginIds:t}))}),[e,n,t]),[u,(0,y.useMemo)((function(){return{savePreferredVersion:function(e,t){ee.save(e,n,t),i((function(n){var r;return Object.assign({},n,((r={})[e]={preferredVersionName:t},r))}))}}}),[i])]}var re=(0,y.createContext)(null);function oe(e){var n=e.children;return b?y.createElement(ue,null,n):y.createElement(y.Fragment,null,n)}function ue(e){var n=e.children,t=te();return y.createElement(re.Provider,{value:t},n)}function ie(e){void 0===e&&(e="default");var n=(0,h.useDocsData)(e),t=function(){var e=(0,y.useContext)(re);if(!e)throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');return e}(),r=t[0],o=t[1],u=r[e].preferredVersionName;return{preferredVersion:u?n.versions.find((function(e){return e.name===u})):null,savePreferredVersionName:(0,y.useCallback)((function(n){o.savePreferredVersion(e,n)}),[o])}}var ae={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagPostListPage:"blog-tags-post-list-page",docsDocPage:"docs-doc-page",docsTagsListPage:"docs-tags-list-page",docsTagDocListPage:"docs-tags-doc-list-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docsPages:"docs-wrapper",mdxPages:"mdx-wrapper"},common:{editThisPage:"theme-edit-this-page",lastUpdated:"theme-last-updated"},layout:{},docs:{docVersionBanner:"theme-doc-version-banner",docVersionBadge:"theme-doc-version-badge",docMarkdown:"theme-doc-markdown",docTocMobile:"theme-doc-toc-mobile",docTocDesktop:"theme-doc-toc-desktop",docFooter:"theme-doc-footer",docFooterTagsRow:"theme-doc-footer-tags-row",docFooterEditMetaRow:"theme-doc-footer-edit-meta-row",docSidebarMenu:"theme-doc-sidebar-menu",docSidebarItemCategory:"theme-doc-sidebar-item-category",docSidebarItemLink:"theme-doc-sidebar-item-link"},blog:{}},ce=s("docusaurus.announcement.dismiss"),se=s("docusaurus.announcement.id"),le=function(){return"true"===ce.get()},fe=function(e){return ce.set(String(e))},de=(0,y.createContext)(null),ve=function(e){var n=e.children,t=function(){var e=o().announcementBar,n=(0,_.Z)(),t=(0,y.useState)((function(){return!!n&&le()})),r=t[0],u=t[1];(0,y.useEffect)((function(){u(le())}),[]);var i=(0,y.useCallback)((function(){fe(!0),u(!0)}),[]);return(0,y.useEffect)((function(){if(e){var n=e.id,t=se.get();"annoucement-bar"===t&&(t="announcement-bar");var r=n!==t;se.set(n),r&&fe(!1),!r&&le()||u(!1)}}),[]),(0,y.useMemo)((function(){return{isClosed:r,close:i}}),[r])}();return y.createElement(de.Provider,{value:t},n)},ge=function(){var e=(0,y.useContext)(de);if(!e)throw new Error("useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree");return e};function pe(){var e=(0,r.default)().siteConfig.baseUrl;return(0,f.TH)().pathname.replace(e,"/")}var me=t(4973),he=function(){return(0,me.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function be(e){var n={};return Object.values(e).forEach((function(e){var t,r=function(e){return e[0].toUpperCase()}(e.name);n[r]=null!==(t=n[r])&&void 0!==t?t:[],n[r].push(e)})),Object.entries(n).sort((function(e,n){var t=e[0],r=n[0];return t.localeCompare(r)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,n){return e.name.localeCompare(n.name)}))}}))}function we(e){!function(e){var n=(0,f.k6)().block,t=(0,y.useRef)(e);(0,y.useEffect)((function(){t.current=e}),[e]),(0,y.useEffect)((function(){return n((function(e,n){return t.current(e,n)}))}),[n,t])}((function(n,t){if("POP"===t)return e(n,t)}))}},6010:function(e,n,t){"use strict";function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function o(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}t.d(n,{Z:function(){return o}})}}]);