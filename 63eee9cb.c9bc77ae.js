(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(1),o=n(6),a=(n(0),n(128)),c={id:"breakpoints",title:"Breakpoints"},i={id:"breakpoints",title:"Breakpoints",description:"`Stacks`, similarly to `Braid` supports the `responsive props` format which allows you to specify an array of values for different screen sizes. Therefore, if you need to customize the spacing, number of columns, or alignments per screen size, then the `responsive props` are for you.",source:"@site/docs/breakpoints.md",permalink:"/stacks/docs/breakpoints",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/breakpoints.md",sidebar:"someSidebar",previous:{title:"Prerequisites",permalink:"/stacks/docs/prerequisites"},next:{title:"Stack",permalink:"/stacks/docs/stack"}},p=[],s={rightToc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Stacks"),", similarly to ",Object(a.b)("inlineCode",{parentName:"p"},"Braid")," supports the ",Object(a.b)("inlineCode",{parentName:"p"},"responsive props")," format which allows you to specify an array of values for different screen sizes. Therefore, if you need to customize the spacing, number of columns, or alignments per screen size, then the ",Object(a.b)("inlineCode",{parentName:"p"},"responsive props")," are for you."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"type ResponsiveProp<T> = T | Readonly<[T, T]> | Readonly<[T, T, T]>\n")),Object(a.b)("p",null,"There are three available breakpoints: ",Object(a.b)("inlineCode",{parentName:"p"},"mobile")," (default, ",Object(a.b)("inlineCode",{parentName:"p"},"Stacks")," components are mobile-first), ",Object(a.b)("inlineCode",{parentName:"p"},"tablet")," and ",Object(a.b)("inlineCode",{parentName:"p"},"desktop"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"type Breakpoint = 'mobile' | 'tablet' | 'desktop'\n")),Object(a.b)("p",null,"You can define custom breakpoints in the provider."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import { StacksProvider } from '@mobily/stacks'\n\nconst App = () => {\n  return (\n    <StacksProvider spacing={4} breakpoints={{ tablet: 762, desktop: 992 }}>\n      \u2026\n    </StacksProvider>\n  )\n}\n")),Object(a.b)("p",null,"For example, if you wanted small spacing on mobile but medium spacing from tablet upwards."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"<Stack space={[1, 4]}>\n  \u2026\n</Stack>\n")),Object(a.b)("p",null,"If you wanted top alignment on mobile and center on tablet upwards."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"<Columns space={1} alignY={['top', 'center']}>\n  <Column>\n    \u2026\n  </Column>\n  <Column>\n    \u2026\n  </Column>\n</Columns>\n")),Object(a.b)("p",null,"If you would like the columns to stack vertically on smaller screens, you can provide the ",Object(a.b)("inlineCode",{parentName:"p"},"collapseBelow")," prop."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),'<Columns space={1} collapseBelow="tablet">\n  <Column>\n    \u2026\n  </Column>\n  <Column>\n    \u2026\n  </Column>\n</Columns>\n')))}l.isMDXComponent=!0},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,d=u["".concat(c,".").concat(m)]||u[m]||b[m]||a;return n?o.a.createElement(d,i({ref:t},s,{components:n})):o.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);