"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1638],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||o;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},i="Tzap refactor",c={unversionedId:"basics/refactor",id:"basics/refactor",title:"Tzap refactor",description:"The tzap refactor command is used to refactor code using either command-line flags or a configuration file.",source:"@site/documents/basics/refactor.md",sourceDirName:"basics",slug:"/basics/refactor",permalink:"/tzapdoc/docs/basics/refactor",draft:!1,editUrl:"https://github.com/tzapio/tzapdoc/tree/main/packages/create-docusaurus/templates/shared/documents/basics/refactor.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"gettingStartedSidebar",previous:{title:"Tzap init",permalink:"/tzapdoc/docs/basics/init"},next:{title:"Tzap search",permalink:"/tzapdoc/docs/basics/search"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Examples",id:"examples",level:2},{value:"Conclusion",id:"conclusion",level:2}],s={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tzap-refactor"},"Tzap refactor"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"tzap refactor")," command is used to refactor code using either command-line flags or a configuration file."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"tzap refactor")," command in the following ways:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Command-line flags:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tzap refactor [filein] [fileout]\n")),(0,r.kt)("p",null,"Specify the input file ",(0,r.kt)("inlineCode",{parentName:"p"},"[filein]")," to refactor and optionally specify the output file ",(0,r.kt)("inlineCode",{parentName:"p"},"[fileout]")," to save the refactored code. If ",(0,r.kt)("inlineCode",{parentName:"p"},"[fileout]")," is not provided, the refactored code will be saved back to the input file."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Configuration file:")),(0,r.kt)("p",null,"You can also use a configuration file to specify the refactor task. Here is an example of a JSON configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "filein": "[filein]",\n  "fileout": "[fileout]",\n  "mission": "Improve code readability and maintainability",\n  "task": "Analyze what can be improved. Refactor code to use better variable names and remove duplication. Refactor the following file to be more readable. Add documentation. Do not add any new public functions, only rewrite.",\n  "plan": "Do not write any text because this file will be saved directly to output.go",\n  "outputformat": "golang code",\n  "example": "func doSomething(w http.ResponseWriter, r *http.Request, db *sql.DB) error {\\n          // function logic\\n    }",\n  "inspirationfiles": [\n    "/path/to/inspiration/file1.go",\n    "/path/to/inspiration/file2.go"\n  ]\n}\n')),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"[filein]")," with the path to the file you want to refactor and ",(0,r.kt)("inlineCode",{parentName:"p"},"[fileout]")," with the desired output file path. Adjust the other parameter to refactor according to your specification."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Here are some examples of how to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"tzap refactor")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Refactor a file using command-line flags\ntzap refactor main.go main_refactored.go\n\n# Refactor a file using a configuration file\ntzap refactor --refactorconfig refactorconfig.json\n")),(0,r.kt)("p",null,"Make sure to provide the appropriate file paths and configuration data based on your project requirements."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"tzap refactor")," command is a powerful tool for refactoring code and improving code readability and maintainability. It provides flexibility in how you specify the refactor task, whether through command-line flags or a configuration file."),(0,r.kt)("p",null,"For more information and advanced usage options, you can refer to the Tzap CLI documentation or the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tzapio/tzap"},"TZap GitHub repository"),"."))}f.isMDXComponent=!0}}]);