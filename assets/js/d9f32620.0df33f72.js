"use strict";(self.webpackChunkdocusaurus_doc_template=self.webpackChunkdocusaurus_doc_template||[]).push([[914],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},i=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(g,u(u({ref:t},i),{},{components:n})):r.createElement(g,u({ref:t},i))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,u[1]=l;for(var s=2;s<a;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2900:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return i},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),u=["components"],l={slug:"welcome",title:"Welcome",authors:["slorber","yangshun"],tags:["facebook","hello","docusaurus"]},c=void 0,s={permalink:"/docusaurus-doc-template/blog/welcome",editUrl:"https://github.com/rain120/docusaurus-doc-template/edit/main/blog/blog/2021-08-26-welcome/index.md",source:"@site/blog/2021-08-26-welcome/index.md",title:"Welcome",description:"Docusaurus blogging features are powered by the blog plugin.",date:"2021-08-26T00:00:00.000Z",formattedDate:"August 26, 2021",tags:[{label:"facebook",permalink:"/docusaurus-doc-template/blog/tags/facebook"},{label:"hello",permalink:"/docusaurus-doc-template/blog/tags/hello"},{label:"docusaurus",permalink:"/docusaurus-doc-template/blog/tags/docusaurus"}],readingTime:.405,truncated:!1,authors:[{name:"S\xe9bastien Lorber",title:"Docusaurus maintainer",url:"https://sebastienlorber.com",imageURL:"https://github.com/slorber.png",key:"slorber"},{name:"Yangshun Tay",title:"Front End Engineer @ Facebook",url:"https://github.com/yangshun",imageURL:"https://github.com/yangshun.png",key:"yangshun"}],nextItem:{title:"MDX Blog Post",permalink:"/docusaurus-doc-template/blog/mdx-blog-post"}},i={authorsImageUrls:[void 0,void 0]},p=[],m={toc:p};function d(e){var t=e.components,l=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/blog"},"Docusaurus blogging features")," are powered by the ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog"},"blog plugin"),"."),(0,a.kt)("p",null,"Simply add Markdown files (or folders) to the ",(0,a.kt)("inlineCode",{parentName:"p"},"blog")," directory."),(0,a.kt)("p",null,"Regular blog authors can be added to ",(0,a.kt)("inlineCode",{parentName:"p"},"authors.yml"),"."),(0,a.kt)("p",null,"The blog post date can be extracted from filenames, such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome.md")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome/index.md"))),(0,a.kt)("p",null,"A blog post folder can be convenient to co-locate blog post images:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Docusaurus Plushie",src:n(4464).Z})),(0,a.kt)("p",null,"The blog supports tags as well!"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"And if you don't want a blog"),": just delete this directory, and use ",(0,a.kt)("inlineCode",{parentName:"p"},"blog: false")," in your Docusaurus config."))}d.isMDXComponent=!0},4464:function(e,t,n){t.Z=n.p+"assets/images/docusaurus-plushie-banner-a60f7593abca1e3eef26a9afa244e4fb.jpeg"}}]);