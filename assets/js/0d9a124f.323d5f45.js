"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4580],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=i,g=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:3,id:"tzap_include_ignore",title:"Configuring file indexing"},a=void 0,l={unversionedId:"getting-started/tzap_include_ignore",id:"getting-started/tzap_include_ignore",title:"Configuring file indexing",description:"Tzap makes use of two important files for managing noise and focus when scanning and embedding your files: .tzapinclude and .tzapignore. Understanding these files will help you refine your search results and enhance the functionality of Tzap.",source:"@site/documents/getting-started/configuration.mdx",sourceDirName:"getting-started",slug:"/getting-started/tzap_include_ignore",permalink:"/tzapdoc/docs/getting-started/tzap_include_ignore",draft:!1,editUrl:"https://github.com/tzapio/tzapdoc/tree/main/packages/create-docusaurus/templates/shared/documents/getting-started/configuration.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"tzap_include_ignore",title:"Configuring file indexing"},sidebar:"gettingStartedSidebar",previous:{title:"Editor support",permalink:"/tzapdoc/docs/getting-started/editors"},next:{title:"Tzap CLI commands",permalink:"/tzapdoc/docs/category/tzap-cli-commands"}},p={},s=[{value:".tzapinclude",id:"tzapinclude",level:2},{value:".tzapignore",id:"tzapignore",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/tzapio/tzap"},"Tzap")," makes use of two important files for managing noise and focus when scanning and embedding your files: ",(0,i.kt)("inlineCode",{parentName:"p"},".tzapinclude")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".tzapignore"),". Understanding these files will help you refine your search results and enhance the functionality of Tzap."),(0,i.kt)("h2",{id:"tzapinclude"},".tzapinclude"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".tzapinclude")," is a file that should contain the file patterns of the code files you'd wish to include in the embedding and search process. "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"*.go")," content, for example, implies that you wish Tzap to include all ",(0,i.kt)("inlineCode",{parentName:"p"},".go")," files in the process (which is useful when you're working with Go projects)."),(0,i.kt)("p",null,"Here's how to use it:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"tzap init")," to generate the ",(0,i.kt)("inlineCode",{parentName:"li"},".tzapinclude")," file in your root directory."),(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("inlineCode",{parentName:"li"},".tzapinclude"),"."),(0,i.kt)("li",{parentName:"ol"},"Add or remove file patterns as per your needs.")),(0,i.kt)("h2",{id:"tzapignore"},".tzapignore"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".tzapignore"),", on the other hand, is used to ignore files or directories that might interfere with search quality. This file works similarly to .gitignore, but is specifically for Tzap."),(0,i.kt)("p",null,"Here's how to use it:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"tzap init")," to generate the ",(0,i.kt)("inlineCode",{parentName:"li"},".tzapignore")," file in your root directory."),(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("inlineCode",{parentName:"li"},".tzapignore"),"."),(0,i.kt)("li",{parentName:"ol"},"Add the paths of files or directories you wish to ignore.")),(0,i.kt)("p",null,"Together, ",(0,i.kt)("inlineCode",{parentName:"p"},".tzapinclude")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".tzapignore")," give you full control over what you wish to include and exclude from your Tzap searches. If you're facing issues with these files, make sure they're located in your root directory and their paths are written correctly."))}d.isMDXComponent=!0}}]);