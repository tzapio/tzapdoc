"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4067],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=l(n),d=i,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||r;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:i,o[1]=p;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var a=n(7462),i=(n(7294),n(3905));const r={id:"prompt",title:"Prompt",sidebar_label:"Tzap prompt",sidebar_position:2},o="Tzap prompt",p={unversionedId:"basics/prompt",id:"basics/prompt",title:"Prompt",description:"The tzap prompt command is used to generate code by combining a user-given prompt and code-searching existing files.",source:"@site/documents/basics/prompt.md",sourceDirName:"basics",slug:"/basics/prompt",permalink:"/tzapdoc/docs/basics/prompt",draft:!1,editUrl:"https://github.com/tzapio/tzapdoc/tree/main/packages/create-docusaurus/templates/shared/documents/basics/prompt.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"prompt",title:"Prompt",sidebar_label:"Tzap prompt",sidebar_position:2},sidebar:"gettingStartedSidebar",previous:{title:"Tzap review (git)",permalink:"/tzapdoc/docs/basics/gitreview"},next:{title:"Tzap editdir",permalink:"/tzapdoc/docs/basics/editdir"}},s={},l=[{value:"Usage",id:"usage",level:2},{value:"Improved Examples for Using Tzap Prompt",id:"improved-examples-for-using-tzap-prompt",level:2},{value:"Configuring prompt options",id:"configuring-prompt-options",level:2},{value:"Including Inspiration Files",id:"including-inspiration-files",level:2},{value:"Conclusion",id:"conclusion",level:2}],m={toc:l},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tzap-prompt"},"Tzap prompt"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"tzap prompt")," command is used to generate code by combining a user-given prompt and code-searching existing files."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"tzap prompt")," command as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"tzap prompt <prompt>\n")),(0,i.kt)("p",null,"Specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"<prompt>")," you want tzap to generate the code from."),(0,i.kt)("p",null,"You can specify various options such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The number of embeddings to use for the prompt generation using the ",(0,i.kt)("inlineCode",{parentName:"li"},"--embeds")," flag."),(0,i.kt)("li",{parentName:"ul"},"The number of embeddings to include in the search space before filtering out the matches with inspiration files using the ",(0,i.kt)("inlineCode",{parentName:"li"},"--searchsize")," flag."),(0,i.kt)("li",{parentName:"ul"},"Whether to disable indexing for large projects to speed up the process using the ",(0,i.kt)("inlineCode",{parentName:"li"},"--disableindex")," flag.")),(0,i.kt)("h1",{id:"getting-started-with-prompts"},"Getting started with prompts"),(0,i.kt)("p",null,"Here are some examples of how to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"tzap prompt")," command:"),(0,i.kt)("h2",{id:"improved-examples-for-using-tzap-prompt"},"Improved Examples for Using Tzap Prompt"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")," Creating an HTTP server endpoint"),(0,i.kt)("p",null,"You want GPT to write a new HTTPS endpoint for a server using express.js with a specific functionality like fetching user data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"tzap prompt \"Write an endpoint named '/fetch-user-data' which fetches user data from the database.\"\n")),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")," Refactoring nested code"),(0,i.kt)("p",null,"You have a complex function is deeply nested and you want to refactor it to make it more readable and maintainable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"tzap prompt --k 30 -m gpt4 -i \"./deepNesting.js\" \"Refactor the function 'processData' in 'deepNesting.js' to reduce nesting and improve code readability.\"\n")),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 3:")," Understanding architectural design"),(0,i.kt)("p",null,"You are learning a new library and want a quick overview of how it is designed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'tzap prompt "Explain the architectural design of this project and give an example of its application."\n')),(0,i.kt)("p",null,"The prompt must be descriptive and specific about what you want GPT to generate. It's like talking to a colleague, sometimes they get it, sometimes you need to explain deeper."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can make your prompts as simple or complex as the situation requires for optimal results.")),(0,i.kt)("h2",{id:"configuring-prompt-options"},"Configuring prompt options"),(0,i.kt)("p",null,"The Tzap CLI provides several flags for configuring the prompt options. Here's how you can use these options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Using `-k` flag to specify the number of embeddings for prompt generation\ntzap prompt -k 10 "Write a python function for calculating factorial of a number."\n')),(0,i.kt)("h1",{id:"reading-prompt-from-a-file"},"Reading prompt from a file"),(0,i.kt)("p",null,"It's possible to use tzap to read prompt from a file instead of a string. Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"-f")," flag to specify the file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'tzap prompt -f "./file.txt"\n')),(0,i.kt)("p",null,"Here, Tzap will read the file ",(0,i.kt)("inlineCode",{parentName:"p"},"file.txt")," and extracts the prompt from it."),(0,i.kt)("h2",{id:"including-inspiration-files"},"Including Inspiration Files"),(0,i.kt)("p",null,"In case you want to refer to certain files while generating the prompt, you can include them as inspiration files:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Using `-i` flag to specify the inspiration files\ntzap prompt -i ./helperFunctions.js -i ./constants.js \"Write a function that uses helper functions from 'helperFunctions.js' to manipulate data defined in 'constants.js'.\"\n")),(0,i.kt)("p",null,"These examples show how to use directives instead of questions when giving a prompt. A directive provides a clear action for GPT to perform, making your prompts more effective."),(0,i.kt)("h1",{id:"adding-inspiration-files"},"Adding Inspiration Files"),(0,i.kt)("p",null,"Tzap allows you to add inspiration files to your commands. This enables the model to base its responses on the contents of specified files."),(0,i.kt)("p",null,"To include the inspiration files, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"-i")," option:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'tzap prompt -i "./file1.js,./file2.js" "<prompt>"\n')),(0,i.kt)("p",null,"For instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'tzap prompt -i "./start.js,./baseClass.js" "Implement a new model user model. Give it email and some simple parameters"\n')),(0,i.kt)("p",null,"This gives the model the context from ",(0,i.kt)("inlineCode",{parentName:"p"},"start.js")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"baseClass.js")," as additional knowledge to answer the question. Sometimes, it might not include a baseClass. "),(0,i.kt)("h1",{id:"configuring-prompt-options-1"},"Configuring prompt options"),(0,i.kt)("p",null,"Tzap also provides several flags for configuring the prompt options. Two primary ones are ",(0,i.kt)("inlineCode",{parentName:"p"},"-k")," (number of embeddings to use for prompt generation) and ",(0,i.kt)("inlineCode",{parentName:"p"},"-n")," (number of embeddings to include in the search space before filtering out the matches with inspiration files):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'tzap prompt -i "./file1.js,./file2.js" -k 10 "<prompt>"\n')),(0,i.kt)("p",null,"In this example, Tzap searches through 15 embeddings (or code pieces) in the files and selects the top 10 embeddings to include in the text generation."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"tzap prompt")," command is general tool for rubberducking and to some extent generate code."),(0,i.kt)("p",null,"For more information and advanced usage options, you can refer to the TZap CLI documentation or the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tzapio/tzap"},"TZap GitHub repository"),"."))}u.isMDXComponent=!0}}]);