(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{135:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return n?a.a.createElement(d,s(s({ref:t},u),{},{components:n})):a.a.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),i=(n(0),n(135)),o={id:"roadmap",title:"Roadmap"},s={permalink:"/community/roadmap",source:"@site/community/roadmap.md",description:"\x3c!--",date:"2020-07-28T04:58:37.754Z",tags:[],title:"Roadmap",readingTime:3.885,truncated:!1,prevItem:{title:"Reporting Issues",permalink:"/community/reporting_issues"},nextItem:{title:"Sessions and Demos",permalink:"/community/sessions"}},c=[{value:"What&#39;s next",id:"whats-next",children:[]},{value:"v0.9.0",id:"v090",children:[{value:"Resource Quota Management",id:"resource-quota-management",children:[]},{value:"Job Ordering Policy: StateAware (optimized FIFO)",id:"job-ordering-policy-stateaware-optimized-fifo",children:[]},{value:"Work with the cluster-autoscaler",id:"work-with-the-cluster-autoscaler",children:[]},{value:"Even cache system",id:"even-cache-system",children:[]},{value:"More comprehensive web UI",id:"more-comprehensive-web-ui",children:[]}]},{value:"v0.8.0 (May 4, 2020)",id:"v080-may-4-2020",children:[]}],u={rightToc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"whats-next"},"What's next"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Kubernetes 1.16/1.17 support"),Object(i.b)("li",{parentName:"ul"},"Gang scheduling"),Object(i.b)("li",{parentName:"ul"},"App tracking API and CRD"),Object(i.b)("li",{parentName:"ul"},"Preemption phase 2"),Object(i.b)("li",{parentName:"ul"},"App/task priority support"),Object(i.b)("li",{parentName:"ul"},"Support spot instances for Spark scheduling"),Object(i.b)("li",{parentName:"ul"},"Web UI refurbishment")),Object(i.b)("h2",{id:"v090"},"v0.9.0"),Object(i.b)("p",null,"In this version, the Apache YuniKorn (Incubating) community is focusing on improving the user experience, and usability\nto running Apache Spark and Flink workloads. The main features delivered in this release includes:"),Object(i.b)("h3",{id:"resource-quota-management"},"Resource Quota Management"),Object(i.b)("p",null,"This version YuniKorn provides a seamless way to manage resource quota for a Kubernetes cluster, it can work as an\nalternative to the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/"}),"namespace resource quota"),". There are\n2 main advantages of using this feature comparing to the namespace resource quota:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The namespace resource quota is counting resources at the admission phase, irrespective of the pod is using the resources or not.\nThis can lead up to issues that the namespace resources could not be efficiently used."),Object(i.b)("li",{parentName:"ol"},"The namespace resource quota is flat, it doesn't support hierarchy resource quota management."),Object(i.b)("li",{parentName:"ol"},"The resource quota admission controller rejects the pods as long as it goes over the quota, this increases the complexity\nof the client side code.")),Object(i.b)("p",null,"By using the resource quota management provided by YuniKorn, it is more efficient, seamlessly setup and it provides the\njob queue to handle common scheduling ordering requirements."),Object(i.b)("h3",{id:"job-ordering-policy-stateaware-optimized-fifo"},"Job Ordering Policy: StateAware (optimized FIFO)"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"StateAware")," app sorting policy orders jobs in a queue in FIFO order, and schedule them one by one on conditions.\nThe condition is to wait for the application enters a runnable state. This avoids the common race condition while submitting\nlots of batch jobs, e.g Spark, to a single namespace (or cluster). By enforcing the certain ordering of jobs, it also improves\nthe scheduling of jobs to be more predictable. More explanation of this feature can be found in doc here."),Object(i.b)("h3",{id:"work-with-the-cluster-autoscaler"},"Work with the cluster-autoscaler"),Object(i.b)("p",null,"In this release, YuniKorn has been tested heavily to work nicely with the Kubernetes ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler"}),"cluster-autoscaler"),".\nIt brings the maximum elasticity to the Kubernetes cluster by working efficiently with the cluster-autoscaler. Some bugs\nare fixed and some improvements are done in this release."),Object(i.b)("h3",{id:"even-cache-system"},"Even cache system"),Object(i.b)("p",null,"In this release, an efficient even cache system is added into the scheduler. This system caches some key scheduling\nevents in a memory store and publishes them to Kubernetes event system when needed. More scheduling events are visible\ndirectly from Kubernetes by using kubectl command. This helps to improve the usability and debuggability a lot."),Object(i.b)("h3",{id:"more-comprehensive-web-ui"},"More comprehensive web UI"),Object(i.b)("p",null,"YuniKorn UI provides a better centralized view for resource management. An nodes page has been added to the UI, to display\nthe detailed nodes info in the cluster. The apps page has been enhanced, it now provides a search box to search apps by\nqueue or application ID."),Object(i.b)("h2",{id:"v080-may-4-2020"},"v0.8.0 (May 4, 2020)"),Object(i.b)("p",null,"This release ships a fully functional resource scheduler for Kubernetes with a number of useful features that empower\nto run Big Data workloads on K8s. See more at ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://yunikorn.apache.org/release/v0.8.0.html"}),"Release Notes"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"yunikorn-scheduler-interface")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Communication protocols between RM and scheduler-shim."),Object(i.b)("li",{parentName:"ul"},"gRPC interfaces."),Object(i.b)("li",{parentName:"ul"},"Scheduler plugin interfaces.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"yunikorn-core")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Hierarchy queues with min/max resource quotas."),Object(i.b)("li",{parentName:"ul"},"Resource fairness between queues, users and apps."),Object(i.b)("li",{parentName:"ul"},"Cross-queue preemption based on fairness."),Object(i.b)("li",{parentName:"ul"},"Fair/Bin-packing scheduling policies."),Object(i.b)("li",{parentName:"ul"},"Placement rules (auto queue creation/mapping)."),Object(i.b)("li",{parentName:"ul"},"Customized resource types (like GPU) scheduling support."),Object(i.b)("li",{parentName:"ul"},"Rich placement constraints support."),Object(i.b)("li",{parentName:"ul"},"Automatically map incoming container requests to queues by policies."),Object(i.b)("li",{parentName:"ul"},"Node partition: partition cluster to sub-clusters with dedicated quota/ACL management."),Object(i.b)("li",{parentName:"ul"},"Configuration hot-refresh."),Object(i.b)("li",{parentName:"ul"},"Stateful recovery."),Object(i.b)("li",{parentName:"ul"},"Metrics framework.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"yunikorn-k8shim")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Support K8s predicates. Such as pod affinity/anti-affinity, node selectors."),Object(i.b)("li",{parentName:"ul"},"Support Persistent Volumes, Persistent Volume Claims, etc."),Object(i.b)("li",{parentName:"ul"},"Load scheduler configuration from configmap dynamically (hot-refresh)."),Object(i.b)("li",{parentName:"ul"},"3rd Operator/controller integration, pluggable app discovery."),Object(i.b)("li",{parentName:"ul"},"Helm chart support.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"yunikorn-web")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Cluster overview page with brief info about the cluster."),Object(i.b)("li",{parentName:"ul"},"Read-only application view, including app info and task breakdown info."),Object(i.b)("li",{parentName:"ul"},"Read-only queue view, displaying queue structure, queue resource, usage info dynamically.")))}l.isMDXComponent=!0}}]);