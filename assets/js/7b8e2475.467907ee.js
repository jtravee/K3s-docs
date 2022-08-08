"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[79],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),a=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=a(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=a(r),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var a=2;a<i;a++)s[a]=r[a];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2678:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return a},toc:function(){return d}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),s=["components"],c={title:"Security",weight:90},u=void 0,a={unversionedId:"security/security",id:"security/security",title:"Security",description:"This section describes the methodology and means of securing a K3s cluster. It's broken into 2 sections. These guides assume k3s is running with embedded etcd.",source:"@site/docs/security/security.md",sourceDirName:"security",slug:"/security/",permalink:"/docs/docs/security/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/security/security.md",tags:[],version:"current",lastUpdatedAt:1659543069,formattedLastUpdatedAt:"Aug 3, 2022",frontMatter:{title:"Security",weight:90},sidebar:"mySidebar",previous:{title:"Known Issues",permalink:"/docs/docs/known-issues/"},next:{title:"Secrets Encryption",permalink:"/docs/docs/security/secrets-encryption"}},l={},d=[],p={toc:d};function f(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section describes the methodology and means of securing a K3s cluster. It's broken into 2 sections. These guides assume k3s is running with embedded etcd."),(0,i.kt)("p",null,"The documents below apply to CIS Kubernetes Benchmark v1.6."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/docs/security/hardening-guide"},"Hardening Guide")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/docs/security/self-assessment"},"CIS Benchmark Self-Assessment Guide"))))}f.isMDXComponent=!0}}]);