webpackJsonp([0xd2a57dc1d883],{82:function(n,e,t){"use strict";function o(n,e,t){var o=a.map(function(t){if(t.plugin[n]){var o=t.plugin[n](e,t.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:t?[t]:[]}function r(n,e,t){return a.reduce(function(t,o){return o.plugin[n]?t.then(function(){return o.plugin[n](e,o.options)}):t},Promise.resolve())}e.__esModule=!0,e.apiRunner=o,e.apiRunnerAsync=r;var a=[{plugin:t(378),options:{plugins:[],trackingId:"UA-35980893-3"}},{plugin:t(380),options:{plugins:[]}},{plugin:t(377),options:{plugins:[]}}]},213:function(n,e,t){"use strict";e.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":t(339),"component---src-templates-post-template-jsx":t(348),"component---src-templates-tag-template-jsx":t(349),"component---src-templates-category-template-jsx":t(346),"component---src-templates-page-template-jsx":t(347),"component---src-pages-404-jsx":t(341),"component---src-pages-categories-jsx":t(342),"component---src-pages-index-jsx":t(343),"component---src-pages-news-jsx":t(344),"component---src-pages-tags-jsx":t(345)},e.json={"layout-index.json":t(350),"offline-plugin-app-shell-fallback.json":t(367),"news-arpa-lm.json":t(360),"tags-n-gram.json":t(372),"tags-book-of-mormon.json":t(369),"categories-data-science.json":t(355),"news-using-textgrams-jl.json":t(366),"tags-presentation.json":t(373),"news-site-update.json":t(365),"tags-website.json":t(375),"categories-organization.json":t(356),"news-ngram-tools.json":t(363),"about.json":t(353),"news-curiosity-science-i-nephi.json":t(361),"tags-grep.json":t(371),"tags-cli.json":t(370),"news-presentation-the-late-war-the-book-of-mormon.json":t(364),"categories-presentation.json":t(357),"news-diy-mosiah-priority.json":t(362),"tags-tools.json":t(374),"404.json":t(351),"categories.json":t(354),"index.json":t(358),"news.json":t(359),"tags.json":t(368),"404-html.json":t(352)},e.layouts={"layout---index":t(340)}},214:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},s=t(1),c=o(s),l=t(8),p=o(l),f=t(143),d=o(f),m=t(57),h=o(m),g=t(82),y=t(575),x=o(y),j=function(n){var e=n.children;return c.default.createElement("div",null,e())},v=function(n){function e(t){r(this,e);var o=a(this,n.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=i({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var t=d.default.getResourcesForPathname(n.location.pathname);if(t)this.setState({location:n.location,pageResources:t});else{var o=n.location;d.default.getPage(o.pathname)||(o=i({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(n){e.setState({location:o,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,x.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,s.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,s.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:j,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);v.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=v,n.exports=e.default},57:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(457),a=o(r),u=(0,a.default)();n.exports=u},215:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(81),a=t(144),u=o(a),i={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),a=(0,u.default)(o,e);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),i[a])return i[a];var s=void 0;return n.some(function(n){if(n.matchPath){if((0,r.matchPath)(a,{path:n.path})||(0,r.matchPath)(a,{path:n.matchPath}))return s=n,i[a]=n,!0}else{if((0,r.matchPath)(a,{path:n.path,exact:!0}))return s=n,i[a]=n,!0;if((0,r.matchPath)(a,{path:n.path+"index.html"}))return s=n,i[a]=n,!0}return!1}),s}}},216:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(387),a=o(r),u=t(82),i=(0,u.apiRunner)("replaceHistory"),s=i[0],c=s||(0,a.default)();n.exports=c},352:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa2868bfb69fc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(390)})})}},351:function(n,e,t){t(3),n.exports=function(n){return t.e(0xe70826b53c04,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(391)})})}},353:function(n,e,t){t(3),n.exports=function(n){return t.e(0xf927f8900006,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(392)})})}},355:function(n,e,t){t(3),n.exports=function(n){return t.e(53449123926071,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(393)})})}},356:function(n,e,t){t(3),n.exports=function(n){return t.e(0x714af8913098,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(394)})})}},357:function(n,e,t){t(3),n.exports=function(n){return t.e(93648908945983,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(395)})})}},354:function(n,e,t){t(3),n.exports=function(n){return t.e(30875753179511,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(396)})})}},358:function(n,e,t){t(3),n.exports=function(n){return t.e(0x81b8806e4260,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(397)})})}},350:function(n,e,t){t(3),n.exports=function(n){return t.e(60335399758886,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(108)})})}},360:function(n,e,t){t(3),n.exports=function(n){return t.e(0xe87f48c4f16b,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(398)})})}},361:function(n,e,t){t(3),n.exports=function(n){return t.e(0x8abe2e04fcd6,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(399)})})}},362:function(n,e,t){t(3),n.exports=function(n){return t.e(0x8132d92bed7d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(400)})})}},363:function(n,e,t){t(3),n.exports=function(n){return t.e(0xe38d8fdfb104,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(401)})})}},364:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa2179b9bfa81,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(402)})})}},365:function(n,e,t){t(3),n.exports=function(n){return t.e(0x8fc30a1a2b68,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(403)})})}},366:function(n,e,t){t(3),n.exports=function(n){return t.e(0x8ef2e1a3839c,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(404)})})}},359:function(n,e,t){t(3),n.exports=function(n){return t.e(0xbdf5ef12e5c5,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(405)})})}},367:function(n,e,t){t(3),n.exports=function(n){return t.e(0xbf4c176e203a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(406)})})}},369:function(n,e,t){t(3),n.exports=function(n){return t.e(61870005613940,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(407)})})}},370:function(n,e,t){t(3),n.exports=function(n){return t.e(0xb04591b41ac4,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(408)})})}},371:function(n,e,t){t(3),n.exports=function(n){return t.e(75192766776157,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(409)})})}},372:function(n,e,t){t(3),n.exports=function(n){return t.e(0xde962c6e46e6,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(410)})})}},373:function(n,e,t){t(3),n.exports=function(n){return t.e(0xd82409803332,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(411)})})}},374:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa36a794a7633,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(412)})})}},375:function(n,e,t){t(3),n.exports=function(n){return t.e(0x9336e33a0036,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(413)})})}},368:function(n,e,t){t(3),n.exports=function(n){return t.e(55702396619907,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(414)})})}},340:function(n,e,t){t(3),n.exports=function(n){return t.e(79611799117203,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(217)})})}},143:function(n,e,t){(function(n){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var r=t(1),a=(o(r),t(215)),u=o(a),i=t(57),s=o(i),c=t(144),l=o(c),p=void 0,f={},d={},m={},h={},g={},y=[],x=[],j={},v="",w=[],N={},b=function(n){return n&&n.default||n},C=void 0,R=!0,k=[],_={},P={},E=5;C=t(218)({getNextQueuedResources:function(){return w.slice(-1)[0]},createResourceDownload:function(n){L(n,function(){w=w.filter(function(e){return e!==n}),C.onResourcedFinished(n)})}}),s.default.on("onPreLoadPageResources",function(n){C.onPreLoadPageResources(n)}),s.default.on("onPostLoadPageResources",function(n){C.onPostLoadPageResources(n)});var O=function(n,e){return N[n]>N[e]?1:N[n]<N[e]?-1:0},T=function(n,e){return j[n]>j[e]?1:j[n]<j[e]?-1:0},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[e])n.nextTick(function(){t(null,h[e])});else{var o=void 0;o="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],o(function(n,o){h[e]=o,k.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),k=k.slice(-E),t(n,o)})}},S=function(e,t){g[e]?n.nextTick(function(){t(null,g[e])}):P[e]?n.nextTick(function(){t(P[e])}):L(e,function(n,o){if(n)t(n);else{var r=b(o());g[e]=r,t(n,r)}})},A=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=k.find(function(n){return n.succeeded});return!!e},D=function(n,e){console.log(e),_[n]||(_[n]=e),A()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},F=1,M={empty:function(){x=[],j={},N={},w=[],y=[],v=""},addPagesArray:function(n){y=n,p=(0,u.default)(n,v)},addDevRequires:function(n){f=n},addProdRequires:function(n){d=n},dequeue:function(){return x.pop()},enqueue:function(n){var e=(0,l.default)(n,v);if(!y.some(function(n){return n.path===e}))return!1;var t=1/F;F+=1,j[e]?j[e]+=1:j[e]=1,M.has(e)||x.unshift(e),x.sort(T);var o=p(e);return o.jsonName&&(N[o.jsonName]?N[o.jsonName]+=1+t:N[o.jsonName]=1+t,w.indexOf(o.jsonName)!==-1||h[o.jsonName]||w.unshift(o.jsonName)),o.componentChunkName&&(N[o.componentChunkName]?N[o.componentChunkName]+=1+t:N[o.componentChunkName]=1+t,w.indexOf(o.componentChunkName)!==-1||h[o.jsonName]||w.unshift(o.componentChunkName)),w.sort(O),C.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:w,resourcesCount:N}},getPages:function(){return{pathArray:x,pathCount:j}},getPage:function(n){return p(n)},has:function(n){return x.some(function(e){return e===n})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};R&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,t=Array.isArray(e),o=0,e=t?e:e[Symbol.iterator]();;){var r;if(t){if(o>=e.length)break;r=e[o++]}else{if(o=e.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),R=!1;if(_[e])return D(e,'Previously detected load failure for "'+e+'"'),t();var o=p(e);if(!o)return D(e,"A page wasn't found for \""+e+'"'),t();if(e=o.path,m[e])return n.nextTick(function(){t(m[e]),s.default.emit("onPostLoadPageResources",{page:o,pageResources:m[e]})}),m[e];s.default.emit("onPreLoadPageResources",{path:e});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){m[e]={component:r,json:a,layout:u,page:o};var n={component:r,json:a,layout:u,page:o};t(n),s.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return S(o.componentChunkName,function(n,e){n&&D(o.path,"Loading the component for "+o.path+" failed"),r=e,i()}),S(o.jsonName,function(n,e){n&&D(o.path,"Loading the JSON for "+o.path+" failed"),a=e,i()}),void(o.layoutComponentChunkName&&S(o.layout,function(n,e){n&&D(o.path,"Loading the Layout for "+o.path+" failed"),u=e,i()}))},peek:function(n){return x.slice(-1)[0]},length:function(){return x.length},indexOf:function(n){return x.length-x.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:M.getResourcesForPathname};e.default=M}).call(e,t(123))},415:function(n,e){n.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"news-arpa-lm.json",path:"/news/arpa-lm"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-n-gram.json",path:"/tags/n-gram/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-book-of-mormon.json",path:"/tags/book-of-mormon/"},{componentChunkName:"component---src-templates-category-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-data-science.json",path:"/categories/data-science/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"news-using-textgrams-jl.json",path:"/news/using-textgrams-jl"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-presentation.json",path:"/tags/presentation/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"news-site-update.json",path:"/news/site-update"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-website.json",path:"/tags/website/"},{componentChunkName:"component---src-templates-category-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-organization.json",path:"/categories/organization/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"news-ngram-tools.json",path:"/news/ngram-tools"},{componentChunkName:"component---src-templates-page-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"about.json",path:"/about"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"news-curiosity-science-i-nephi.json",path:"/news/curiosity-science-i-nephi"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-grep.json",path:"/tags/grep/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-cli.json",path:"/tags/cli/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"news-presentation-the-late-war-the-book-of-mormon.json",path:"/news/presentation-the-late-war-the-book-of-mormon"},{componentChunkName:"component---src-templates-category-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-presentation.json",path:"/categories/presentation/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"news-diy-mosiah-priority.json",path:"/news/diy-mosiah-priority"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-tools.json",path:"/tags/tools/"},{componentChunkName:"component---src-pages-404-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-categories-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories.json",path:"/categories/"},{componentChunkName:"component---src-pages-index-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-news-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"news.json",path:"/news/"},{componentChunkName:"component---src-pages-tags-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags.json",path:"/tags/"},{componentChunkName:"component---src-pages-404-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"404-html.json",path:"/404.html"}]},218:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,t=n.createResourceDownload,o=[],r=[],a=function(){var n=e();n&&(r.push(n),t(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},a=t(82),u=t(1),i=o(u),s=t(181),c=o(s),l=t(81),p=t(384),f=t(323),d=o(f),m=t(17),h=t(216),g=o(h),y=t(57),x=o(y),j=t(415),v=o(j),w=t(416),N=o(w),b=t(214),C=o(b),R=t(213),k=o(R),_=t(143),P=o(_);t(247),window.___history=g.default,window.___emitter=x.default,P.default.addPagesArray(v.default),P.default.addProdRequires(k.default),window.asyncRequires=k.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=N.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),O=function(n){var e=E[n];return null!=e&&(g.default.replace(e.toPath),!0)};O(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&s!==!1||(window.___history=n,s=!0,n.listen(function(n,e){O(n.pathname)||setTimeout(function(){(0,a.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var t=e.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:t});if(o.length>0)return o[0];if(n){var r=n.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(219);var o=function(n,e){function t(n){n.page.path===P.default.getPage(r).path&&(x.default.off("onPostLoadPageResources",t),clearTimeout(s),i(o))}var o=(0,m.createLocation)(n,null,null,g.default.location),r=o.pathname,a=E[r];a&&(r=a.toPath);var u=window.location;if(u.pathname!==o.pathname||u.search!==o.search||u.hash!==o.hash){var i=e?window.___history.replace:window.___history.push,s=setTimeout(function(){x.default.off("onPostLoadPageResources",t),x.default.emit("onDelayedLoadPageResources",{pathname:r}),i(o)},1e3);P.default.getResourcesForPathname(r)?(clearTimeout(s),i(o)):x.default.on("onPostLoadPageResources",t)}};window.___push=function(n){return o(n,!1)},window.___replace=function(n){return o(n,!0)},window.___navigateTo=window.___push,(0,a.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var s=!1,f=(0,a.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(n){var e=n.children;return i.default.createElement(l.Router,{history:g.default},e)},y=(0,l.withRouter)(C.default);P.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(f?f:h,null,(0,u.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(y,{layout:!0,children:function(e){return(0,u.createElement)(l.Route,{render:function(t){n(t.history);var o=e?e:t;return P.default.getPage(o.location.pathname)?(0,u.createElement)(C.default,r({page:!0},o)):(0,u.createElement)(C.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0],s=(0,a.apiRunner)("replaceHydrateFunction",void 0,c.default.render)[0];(0,d.default)(function(){return s(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},416:function(n,e){n.exports=[]},219:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(57),a=o(r),u="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},144:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},43:function(n,e){function t(n){return n&&n.__esModule?n:{default:n}}n.exports=t},323:function(n,e,t){!function(e,t){n.exports=t()}("domready",function(){var n,e=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,n=function(){for(t.removeEventListener(r,n),a=1;n=e.shift();)n()}),function(n){a?setTimeout(n,0):e.push(n)}})},324:function(n,e){"use strict";var t=/[|\\{}()[\]^$+*?.]/g;n.exports=function(n){if("string"!=typeof n)throw new TypeError("Expected a string");return n.replace(t,"\\$&")}},3:function(n,e,t){"use strict";function o(){function n(n){var e=o.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var i=!1,s=!0,c=function(n){u&&(u(t,n),u=null)};return!a&&e&&e[o]?void c(!0):(r(o,function(){i||(i=!0,s?setTimeout(function(){c()}):c())}),void(i||(s=!1,n(function(){i||(i=!0,a?a[o]=void 0:(e||(e={}),e[o]=!0),c(!0))}))))}}o()},376:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.routeThroughBrowserOrApp=e.hashShouldBeFollowed=e.pathIsNotHandledByApp=e.urlsAreOnSameOrigin=e.authorIsForcingNavigation=e.anchorsTargetIsEquivalentToSelf=e.findClosestAnchor=e.navigationWasHandledElsewhere=e.slashedPathname=e.userIsForcingNavigation=void 0,e.default=function(n,e){var t=g(e);return n.addEventListener("click",t),function(){return n.removeEventListener("click",t)}};var r=t(324),a=o(r),u=t(12),i=e.userIsForcingNavigation=function(n){return 0!==n.button||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey},s=e.slashedPathname=function(n){return"/"===n[0]?n:"/"+n},c=e.navigationWasHandledElsewhere=function(n){return n.defaultPrevented},l=e.findClosestAnchor=function(n){for(;n.parentNode;n=n.parentNode)if("a"===n.nodeName.toLowerCase())return n;return null},p=e.anchorsTargetIsEquivalentToSelf=function(n){return n.hasAttribute("target")===!1||null==n.target||["_self",""].indexOf(n.target)!==-1||"_parent"===n.target&&(!n.ownerDocument.defaultView.parent||n.ownerDocument.defaultView.parent===n.ownerDocument.defaultView)||"_top"===n.target&&(!n.ownerDocument.defaultView.top||n.ownerDocument.defaultView.top===n.ownerDocument.defaultView)},f=e.authorIsForcingNavigation=function(n){return n.hasAttribute("download")===!0||p(n)===!1},d=e.urlsAreOnSameOrigin=function(n,e){return n.protocol===e.protocol&&n.host===e.host},m=e.pathIsNotHandledByApp=function(n){var e=new RegExp("^"+(0,a.default)((0,u.withPrefix)("/"))),t=/^.*\.((?!htm)[a-z0-9]{1,5})$/i;return e.test(s(n.pathname))===!1||n.pathname.search(t)!==-1},h=e.hashShouldBeFollowed=function(n,e){return""!==e.hash&&(""===e.pathname||e.pathname===n.pathname)},g=e.routeThroughBrowserOrApp=function(n){return function(e){if(i(e))return!0;if(c(e))return!0;var t=l(e.target);if(null==t)return!0;if(f(t))return!0;var o=document.createElement("a");o.href=t.href;var r=document.createElement("a");return r.href=window.location.href,d(r,o)===!1||(!!m(o)||(!!h(r,o)||(e.preventDefault(),n(""+s(o.pathname)+o.search+o.hash),!1)))}}},377:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(12),a=t(376),u=o(a);e.onClientEntry=function(){(0,u.default)(window,function(n){(0,r.navigateTo)(n)})}},378:function(n,e,t){"use strict";e.onRouteUpdate=function(n){var e=n.location;if("function"==typeof ga){if(e&&"undefined"!=typeof window.excludeGAPaths&&window.excludeGAPaths.some(function(n){return n.test(e.pathname)}))return;window.ga("set","page",e?e.pathname+e.search+e.hash:void 0),window.ga("send","pageview")}}},339:function(n,e,t){t(3),n.exports=function(n){return t.e(99219681209289,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(379)})})}},380:function(n,e){"use strict";e.registerServiceWorker=function(){return!0}},457:function(n,e){function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).slice().map(function(n){n(t)}),(n["*"]||[]).slice().map(function(n){n(e,t)})}}}n.exports=t},123:function(n,e){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(n){if(l===setTimeout)return setTimeout(n,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function a(n){if(p===clearTimeout)return clearTimeout(n);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(n);try{return p(n)}catch(e){try{return p.call(null,n)}catch(e){return p.call(this,n)}}}function u(){h&&d&&(h=!1,d.length?m=d.concat(m):g=-1,m.length&&i())}function i(){if(!h){var n=r(u);h=!0;for(var e=m.length;e;){for(d=m,m=[];++g<e;)d&&d[g].run();g=-1,e=m.length}d=null,h=!1,a(n)}}function s(n,e){this.fun=n,this.array=e}function c(){}var l,p,f=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(n){l=t}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(n){p=o}}();var d,m=[],h=!1,g=-1;f.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];m.push(new s(n,e)),1!==m.length||h||r(i)},s.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(n){return[]},f.binding=function(n){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(n){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},575:function(n,e){"use strict";function t(n,e){for(var t in n)if(!(t in e))return!0;for(var o in e)if(n[o]!==e[o])return!0;return!1}e.__esModule=!0,e.default=function(n,e,o){return t(n.props,e)||t(n.state,o)},n.exports=e.default},341:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa6bc690a59e9,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(229)})})}},342:function(n,e,t){t(3),n.exports=function(n){return t.e(0x81a450a7cd7a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(230)})})}},343:function(n,e,t){t(3),n.exports=function(n){return t.e(0xc23565d713b7,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(231)})})}},344:function(n,e,t){
t(3),n.exports=function(n){return t.e(22738258146681,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(232)})})}},345:function(n,e,t){t(3),n.exports=function(n){return t.e(36530248567819,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(233)})})}},346:function(n,e,t){t(3),n.exports=function(n){return t.e(90179704293519,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(234)})})}},347:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa485d5bf544,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(235)})})}},348:function(n,e,t){t(3),n.exports=function(n){return t.e(0x623bdfc73907,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(236)})})}},349:function(n,e,t){t(3),n.exports=function(n){return t.e(2638498282051,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(237)})})}}});
//# sourceMappingURL=app-a5ebbf879c6d2972bdc1.js.map