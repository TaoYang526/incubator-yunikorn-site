(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{198:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(9),o=(n(0),n(206)),r={id:"coding_guidelines",title:"Coding Guidelines"},l={permalink:"/community/coding_guidelines",source:"@site/community/coding_guidelines.md",description:"\x3c!--",date:"2020-06-21T05:19:23.000Z",tags:[],title:"Coding Guidelines",readingTime:4.18,truncated:!1,nextItem:{title:"Apache YuniKorn (Incubating)",permalink:"/community/download"}},c=[{value:"The basics",id:"the-basics",children:[]},{value:"Automated checks",id:"automated-checks",children:[{value:"Installing and running locally",id:"installing-and-running-locally",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Integration in pull requests",id:"integration-in-pull-requests",children:[]}]},{value:"False positives",id:"false-positives",children:[]},{value:"GoLand IDE setup",id:"goland-ide-setup",children:[{value:"Editor preferences",id:"editor-preferences",children:[]},{value:"Inspections",id:"inspections",children:[]}]}],s={rightToc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"the-basics"},"The basics"),Object(o.b)("p",null,"GO as a language provides a build in formatter for the code: ",Object(o.b)("inlineCode",{parentName:"p"},"gofmt"),".\nThe project uses the predefined format as implemented in ",Object(o.b)("inlineCode",{parentName:"p"},"gofmt"),".\nThat means tabs and not spaces etc.\nRead the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://golang.org/doc/effective_go.html"}),"Effective GO")," page for further details.\nBefore creating a pull request make sure the code at least is formatted using ",Object(o.b)("inlineCode",{parentName:"p"},"gofmt"),"."),Object(o.b)("p",null,"Beside the effective GO guide follow the recommendations from the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/golang/go/wiki/CodeReviewComments"}),"CodeReviewComments")," wiki page.\nThe wiki provides a good collection of comments from code reviews.\nMost of the comments will be checked in the automated checks described below."),Object(o.b)("p",null,"When using an IDE, like GoLand or Visual Studio Code, use the builtin options.\nMost IDEs will provide an extensive list of checks or formatting options that help formatting and point out code issues.\nSee ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#goland-ide-setup"}),"IDE setup")," for a basic setup for the GoLand IDE. "),Object(o.b)("h2",{id:"automated-checks"},"Automated checks"),Object(o.b)("p",null,"Not all code will be written using an IDE.\nEven between contributors the settings might not be the same in all installs.\nTo help keep code formatted consistently a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Lint_(software)"}),"lint")," tool is part of the code approval.   "),Object(o.b)("p",null,"There are a large number of lint tools are available for Go.\nMost of the lint tools only check one specific thing.\nSome of the tools will aggregate a number of linters and provide an overview of all the issues found.\nFor the project we have chosen the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/golangci/golangci-lint"}),"golangci-lint")," tool.\nThe tool can be run locally and will be integrated into the GitHub PR flow."),Object(o.b)("h3",{id:"installing-and-running-locally"},"Installing and running locally"),Object(o.b)("p",null,"Depending on your development system the instructions might differ slightly.\nFollow the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/golangci/golangci-lint#install"}),"installation instructions")," provided by the project."),Object(o.b)("p",null,"After the tool is installed you can run it using the standard command line: "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"golangci-lint run\n")),Object(o.b)("p",null,"The projects still generate a number of warnings.\nThe high impact warnings have been fixed or ignored via comments, see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#false-positives"}),"False positives"),"."),Object(o.b)("p",null,"If you have been working on a new feature or a bug you only want to check the files that have changed.\nYou can run the tool with the option ",Object(o.b)("inlineCode",{parentName:"p"},"--new")," or ",Object(o.b)("inlineCode",{parentName:"p"},"--new-from-rev")," option.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"--new")," option will only check uncommitted files.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"--new-from-rev")," option will check changes against a specific committed revision."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"# for uncommitted changes\ngolangci-lint run --new\n# for committed changes against a revision\ngolangci-lint run --new-from-rev=origin/master\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"make")," integration checks two locations for the executable and uses the ",Object(o.b)("inlineCode",{parentName:"p"},"--new")," command line option."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"go env GOPATH)/bin/")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"./bin/")," (relative to the project)")),Object(o.b)("p",null,"The make target is ",Object(o.b)("inlineCode",{parentName:"p"},"lint"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"make lint\n")),Object(o.b)("p",null,"See the golangci-lint product documentation for more options and information on how to run the tool."),Object(o.b)("h3",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"A predefined configuration is provided for the two projects that use them:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/apache/incubator-yunikorn-k8shim"}),"YuniKorn k8shim")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/apache/incubator-yunikorn-core"}),"YuniKorn core"),".  ")),Object(o.b)("p",null,"The configuration is provided in the yaml file: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../.golangci.yml"}),"golangci.yml"),"."),Object(o.b)("p",null,"The web interface is a javascript project and the scheduler interface only has generated Go code and thus do not use it. "),Object(o.b)("h3",{id:"integration-in-pull-requests"},"Integration in pull requests"),Object(o.b)("p",null,"The planning is to integrate the ",Object(o.b)("inlineCode",{parentName:"p"},"golangci-lint")," check into the GitHub PR flow. "),Object(o.b)("h2",{id:"false-positives"},"False positives"),Object(o.b)("p",null,"Tools are never 100% correct and neither is this one.\nCertain issue are too hard to correct or are not important enough to fix."),Object(o.b)("p",null,"The tool allows adding a comment to the code to ignore the issue.\nThese comments should be used sparingly as they could hide issues.\nIf they are used they should be accompanied by a comment to explain why they are used."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'    var s1 = "ignored by all linters" //nolint\n    var s2 = "ignored by the linter unused" //nolint:unused\n')),Object(o.b)("p",null,"Using the ",Object(o.b)("inlineCode",{parentName:"p"},"nolint")," comment without a specific linter is discouraged.  "),Object(o.b)("h2",{id:"goland-ide-setup"},"GoLand IDE setup"),Object(o.b)("p",null,"GoLand has a number of checks turned on by default.\nThese defaults already provide a good coverage and mark a lot of issues found by the linters as issues.\nTo extend the coverage further and help mark issues proactively check the following settings and change them to the settings as per the screenshots."),Object(o.b)("h3",{id:"editor-preferences"},"Editor preferences"),Object(o.b)("p",null,"Open the preferences pane and go to: Editor -> Code Style -> Go.\nThere are three tabs to configure, the first two are crucial to comply with the basic rules from ",Object(o.b)("inlineCode",{parentName:"p"},"gofmt")," and ",Object(o.b)("inlineCode",{parentName:"p"},"goimports"),":"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null})),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null})))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Tabs"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("img",Object(a.a)({parentName:"td"},{src:"/img/goland_ide_pref_tabs.png",alt:"tabs"})))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Imports"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("img",Object(a.a)({parentName:"td"},{src:"/img/goland_ide_pref_imports.png",alt:"imports"})))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Other"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("img",Object(a.a)({parentName:"td"},{src:"/img/goland_ide_pref_other.png",alt:"other"})))))),Object(o.b)("h3",{id:"inspections"},"Inspections"),Object(o.b)("p",null,"The default inspections except for one that helps highlight shadowing variables. "),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/goland_ide_pref_inspections.png",alt:"inspections"}))))}b.isMDXComponent=!0},206:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,h=p["".concat(r,".").concat(d)]||p[d]||u[d]||o;return n?i.a.createElement(h,l(l({ref:t},s),{},{components:n})):i.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);