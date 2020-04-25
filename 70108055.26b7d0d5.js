(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(6),i=(n(0),n(128)),a={id:"hidden",title:"Hidden"},c={id:"hidden",title:"Hidden",description:"`Hidden` takes `below` and `above` props in which you can define when to render components placed within it (based on the current breakpoint).",source:"@site/docs/hidden.md",permalink:"/stacks/docs/hidden",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/hidden.md",sidebar:"someSidebar",previous:{title:"Box",permalink:"/stacks/docs/box"},next:{title:"FillObject",permalink:"/stacks/docs/fill-object"}},l=[{value:"<code>below</code>",id:"below",children:[]},{value:"<code>above</code>",id:"above",children:[]}],b={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Hidden")," takes ",Object(i.b)("inlineCode",{parentName:"p"},"below")," and ",Object(i.b)("inlineCode",{parentName:"p"},"above")," props in which you can define when to render components placed within it (based on the current breakpoint)."),Object(i.b)("h3",{id:"below"},Object(i.b)("inlineCode",{parentName:"h3"},"below")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"type: ",Object(i.b)("inlineCode",{parentName:"li"},"'tablet' | 'desktop'")),Object(i.b)("li",{parentName:"ul"},"required: ",Object(i.b)("inlineCode",{parentName:"li"},"no"))),Object(i.b)("h3",{id:"above"},Object(i.b)("inlineCode",{parentName:"h3"},"above")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"type: ",Object(i.b)("inlineCode",{parentName:"li"},"'mobile' | 'tablet'")),Object(i.b)("li",{parentName:"ul"},"required: ",Object(i.b)("inlineCode",{parentName:"li"},"no"))))}p.isMDXComponent=!0},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),p=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=p(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=p(n),s=r,m=d["".concat(a,".").concat(s)]||d[s]||u[s]||i;return n?o.a.createElement(m,c({ref:t},b,{components:n})):o.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var b=2;b<i;b++)a[b]=n[b];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);