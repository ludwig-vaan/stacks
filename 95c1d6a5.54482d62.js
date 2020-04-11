(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var r=n(1),i=n(6),a=(n(0),n(124)),c=n(126),l={id:"inline",title:"Inline"},o={id:"inline",title:"Inline",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs/inline.mdx",permalink:"/stacks/docs/inline",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/inline.mdx",sidebar:"someSidebar",previous:{title:"Tiles",permalink:"/stacks/docs/tiles"},next:{title:"Box",permalink:"/stacks/docs/box"}},b=[{value:"<code>space</code>",id:"space",children:[]},{value:"<code>testID</code>",id:"testid",children:[]},{value:"<code>style</code>",id:"style",children:[]}],p={rightToc:b};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"use ",Object(a.b)("inlineCode",{parentName:"li"},"Inline")," to render a set of components in a row with equal spacing around them, wrapping onto multiple lines when necessary"),Object(a.b)("li",{parentName:"ul"},"multiple ",Object(a.b)("inlineCode",{parentName:"li"},"Inline")," components can be nested to create more complex white space rules")),Object(a.b)("h3",{id:"space"},Object(a.b)("inlineCode",{parentName:"h3"},"space")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"type: ",Object(a.b)("inlineCode",{parentName:"li"},"number")),Object(a.b)("li",{parentName:"ul"},"required: ",Object(a.b)("inlineCode",{parentName:"li"},"no")),Object(a.b)("li",{parentName:"ul"},"default: ",Object(a.b)("inlineCode",{parentName:"li"},"0"))),Object(a.b)("div",{className:"doc-example"},Object(a.b)("pre",{parentName:"div"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"<Inline space={2}>\n  <Placeholder height={60} width={90} />\n  <Placeholder height={60} width={60} />\n  <Placeholder height={60} width={120} />\n  <Placeholder height={60} width={200} />\n  <Placeholder height={60} width={100} />\n  <Placeholder height={60} width={140} />\n</Inline>\n")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"doc-example__image"}),"  ",Object(a.b)("img",{src:Object(c.a)("img/inline-space-1.png")}))),Object(a.b)("div",{className:"doc-example"},Object(a.b)("pre",{parentName:"div"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"<Inline space={6}>\n  <Inline space={2}>\n    <Placeholder height={60} width={60} />\n    <Placeholder height={60} width={90} />\n  </Inline>\n  <Inline space={2}>\n    <Placeholder height={60} width={60} />\n    <Placeholder height={60} width={90} />\n  </Inline>\n</Inline>\n")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"doc-example__image"}),"  ",Object(a.b)("img",{src:Object(c.a)("img/inline-space-2.png")}))),Object(a.b)("h3",{id:"testid"},Object(a.b)("inlineCode",{parentName:"h3"},"testID")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"type: ",Object(a.b)("inlineCode",{parentName:"li"},"string")),Object(a.b)("li",{parentName:"ul"},"required: ",Object(a.b)("inlineCode",{parentName:"li"},"no"))),Object(a.b)("h3",{id:"style"},Object(a.b)("inlineCode",{parentName:"h3"},"style")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"type: ",Object(a.b)("inlineCode",{parentName:"li"},"StyleProp<ViewStyle>")),Object(a.b)("li",{parentName:"ul"},"required: ",Object(a.b)("inlineCode",{parentName:"li"},"no"))))}s.isMDXComponent=!0},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),p=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},s=function(e){var t=p(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||a;return n?i.a.createElement(m,l({ref:t},b,{components:n})):i.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var b=2;b<a;b++)c[b]=n[b];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},125:function(e,t,n){"use strict";var r=n(0),i=n(35);t.a=function(){return Object(r.useContext)(i.a)}},126:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(125);function i(e){const{siteConfig:t}=Object(r.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);