!function(t){function e(e){for(var n,p,o=e[0],l=e[1],a=e[2],c=0,d=[];c<o.length;c++)p=o[c],Object.prototype.hasOwnProperty.call(r,p)&&r[p]&&d.push(r[p][0]),r[p]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);for(u&&u(e);d.length;)d.shift()();return s.push.apply(s,a||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,o=1;o<i.length;o++){var l=i[o];0!==r[l]&&(n=!1)}n&&(s.splice(e--,1),t=p(p.s=i[0]))}return t}var n={},r={0:0},s=[];function p(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,p),i.l=!0,i.exports}p.m=t,p.c=n,p.d=function(t,e,i){p.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},p.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},p.t=function(t,e){if(1&e&&(t=p(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(p.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)p.d(i,n,function(e){return t[e]}.bind(null,n));return i},p.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return p.d(e,"a",e),e},p.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},p.p="";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var a=0;a<o.length;a++)e(o[a]);var u=l;s.push([232,1]),i()}({10:function(t,e,i){},11:function(t,e,i){},12:function(t,e,i){},16:function(t,e,i){var n={"./base/index.js":23,"./prerender/index.js":231};function r(t){var e=s(t);return i(e)}function s(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=s,t.exports=r,r.id=16},23:function(t,e,i){"use strict";i.r(e);e.default=[{path:"/",redirect:"/prerender/1"}]},231:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"console",nativeOn:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])?null:"button"in e&&0!==e.button?null:t.prevPage(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"right",39,e.key,["Right","ArrowRight"])?null:"button"in e&&2!==e.button?null:t.nextPage(e)}]}},[i("div",{staticClass:"content"},[i("router-view")],1),t._v(" "),i("div",{staticClass:"controls"},[i("div",{staticClass:"controls-btn",attrs:{id:"prev"},on:{click:t.prevPage}}),t._v(" "),i("div",{staticClass:"controls-btn",attrs:{id:"next"},on:{click:t.nextPage}})]),t._v(" "),i("div",{staticClass:"progress"},[i("div",{staticClass:"progress-bar",style:"width: "+t.percentage+"%;"})])])};n._withStripped=!0;var r=i(15),s=i.n(r),p={data:()=>({routesLength:0}),computed:{percentage(){var t=this.$route.fullPath.match(/\d+/);return(t?t[0]:1)/this.routesLength*100}},created(){this.getRoutesLength(),document.addEventListener("keydown",t=>{37===t.keyCode?this.prevPage():39===t.keyCode&&this.nextPage()},!1)},methods:{getRoutesLength(){var t=this.$route.fullPath.match(/^.*(?=\/)/),e=[];const n=i(16);n.keys().forEach(i=>{i.match(new RegExp(t))&&(e=e.concat(n(i).default))}),this.routesLength=e&&e[0]&&e[0].children&&e[0].children.length},prevPage:s()((function(){var t=this.$route.fullPath,e=t.match(/^[^\d]*/),i=t.match(/\d+/),n=i?i[0]:1;n=n>1?Number(n)-1:1,this.$router.push({path:e+n})}),20),nextPage:s()((function(){var t=this.$route.fullPath,e=t.match(/^[^\d]*/),i=t.match(/\d+/),n=i?i[0]:1;n=n<this.routesLength?Number(n)+1:1,this.$router.push({path:e+n})}),20)}},o=(i(32),i(33),i(0)),l=Object(o.a)(p,n,[],!1,null,"4c95458c",null);l.options.__file="src/components/console/index.vue";var a=l.exports,u=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ppt center"},[e("ppt-spokesman",[e("h1",{staticClass:"title"},[this._v("预渲染及其在收银台项目中的运用")]),this._v(" "),e("p",{staticClass:"smalltitle center"},[this._v("promise.li")])])],1)};u._withStripped=!0;var c=Object(o.a)({},u,[],!1,null,null,null);c.options.__file="src/views/prerender/1.vue";var d=c.exports,h=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ppt center"},[e("ppt-chapter",[this._v("第一章 初识预渲染")]),this._v(" "),e("ppt-chapter",[this._v("第二章 如何使用")]),this._v(" "),e("ppt-chapter",[this._v("第三章 在收银台项目中的运用")])],1)};h._withStripped=!0;var v=Object(o.a)({},h,[],!1,null,null,null);v.options.__file="src/views/prerender/2.vue";var _=v.exports,m=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ppt center"},[e("ppt-chapter",[this._v("第一章 初识预渲染")])],1)};m._withStripped=!0;var f=Object(o.a)({},m,[],!1,null,null,null);f.options.__file="src/views/prerender/3.vue";var b=f.exports,x=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ppt superiority"},[e("ppt-title",[this._v("HTMLinJS的弊端")]),this._v(" "),e("ppt-text",[this._v("\n        目前Vue、React在前端界混得风生水起，他们均是采用HTMLinJS的方式构建单页应用。\n        单页面的使用带来了更好的页面切换体验，却也产生了一些其他问题。\n    ")]),this._v(" "),e("ppt-list",{staticStyle:{"margin-top":"20px"},attrs:{list:this.list}})],1)};x._withStripped=!0;var g={data:()=>({list:[{title:"首屏加载慢"},{title:"白屏"},{title:"SEO不友好"}]})},y=Object(o.a)(g,x,[],!1,null,null,null);y.options.__file="src/views/prerender/4.vue";var w=y.exports,S=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ppt superiority"},[e("ppt-title",[this._v("解决方案")]),this._v(" "),e("ppt-text",[this._v("为了解决单页应用首屏加载慢、白屏以及SEO不友好等问题，孜孜不倦的前端朋友们给出了几个解决方案：")]),this._v(" "),e("ppt-list",{staticStyle:{"margin-top":"30px"},attrs:{list:this.list}})],1)};S._withStripped=!0;var O={data:()=>({list:[{title:"Server-side rendering（SSR）"},{title:"Prerendering（预渲染）"}]})},E=Object(o.a)(O,S,[],!1,null,null,null);E.options.__file="src/views/prerender/5.vue";var C=E.exports,j=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ppt superiority"},[e("ppt-title",[this._v("Server-side rendering（SSR）")]),this._v(" "),e("ppt-text",[e("p",[this._v("SSR 直译就是服务端渲染，通过设置 SSR，你就可以在后台的 Node.js 环境中完成渲染逻辑，然后将 HTML 视图直接返回给客户端。")]),this._v(" "),e("p",[this._v("使用服务端渲染无疑带来了更好的 SEO，更快的内容到达时间 (time-to-content)，然而使用服务器端渲染 (SSR) 时还需要注意一些权衡之处：")])]),this._v(" "),e("ppt-list",{attrs:{list:this.list}})],1)};j._withStripped=!0;var k={data:()=>({list:[{title:"开发条件所限。"},{title:"涉及构建设置和部署的更多要求。"},{title:"更多的服务器端负载。"}]})},P=Object(o.a)(k,j,[],!1,null,null,null);P.options.__file="src/views/prerender/6.vue";var $=P.exports,R=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ppt superiority"},[e("ppt-title",[this._v("Prerendering（预渲染）")]),this._v(" "),e("ppt-text",[this._v("Prerendering is basically firing up a headless browser, loading your app's routes, and saving the results to a static HTML file. You can then serve it with whatever static-file-serving solution you were using previously.")]),this._v(" "),e("ppt-steps",{staticStyle:{"margin-top":"60px"},attrs:{steps:this.steps}})],1)};R._withStripped=!0;var L={data:()=>({steps:[{text:"webpack构建"},{text:"puppeteer启动预渲染"},{text:"捕捉页面并输出html"},{text:"dist目录下生成对应页面"}]})},T=Object(o.a)(L,R,[],!1,null,null,null);T.options.__file="src/views/prerender/7.vue";var A=T.exports,X=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ppt superiority"},[e("ppt-title",[this._v("服务器端渲染 vs 预渲染 (SSR vs Prerendering)")]),this._v(" "),e("ppt-text",[e("p",[this._v("如果你调研服务器端渲染 (SSR) 只是用来改善少数营销页面（例如 /, /about, /contact 等）的 SEO，那么你可能需要预渲染。无需使用 web 服务器实时动态编译 HTML，而是使用预渲染方式，在构建时 (build time) 简单地生成针对特定路由的静态 HTML 文件。优点是设置预渲染更简单，并可以将你的前端作为一个完全静态的站点。")])])],1)};X._withStripped=!0;var M=Object(o.a)({},X,[],!1,null,null,null);M.options.__file="src/views/prerender/8.vue";var q=M.exports,D=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ppt superiority"},[e("ppt-title",[this._v("prerender-spa-plugin与puppeteer")]),this._v(" "),e("ppt-text",[e("p",[this._v("prerender-spa-plugin是vue官方推荐的添加预渲染的插件，作者是 Vue 核心团队的成员。")]),this._v(" "),e("p",[this._v("puppeteer是prerender-spa-plugin目前使用的渲染器，它是谷歌出品的一款无头浏览器（headless browser）。")])])],1)};D._withStripped=!0;var B=Object(o.a)({},D,[],!1,null,null,null);B.options.__file="src/views/prerender/9.vue";var I=B.exports,N=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ppt center"},[e("ppt-chapter",[this._v("第二章 如何使用")])],1)};N._withStripped=!0;var H=Object(o.a)({},N,[],!1,null,null,null);H.options.__file="src/views/prerender/10.vue";var U=H.exports,W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ppt superiority"},[i("ppt-title",[t._v("安装")]),t._v(" "),i("ppt-code",{staticStyle:{"margin-top":"30px"}},[i("pre",[i("code",[t._v("yarn add prerender-spa-plugin -D")])])]),t._v(" "),i("ppt-text",[t._v("Or")]),t._v(" "),i("ppt-code",[i("pre",[i("code",[t._v("npm install prerender-spa-plugin --save-dev")])])]),t._v(" "),i("ppt-text",[t._v("puppeteer目录下出现.local-chromium目录，即说明安装成功了")]),t._v(" "),t._m(0)],1)};W._withStripped=!0;var z=Object(o.a)({},W,[function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("img",{attrs:{src:"https://lileyong.github.io/web-ppt/dist/install.png"}})])}],!1,null,null,null);z.options.__file="src/views/prerender/11.vue";var G=z.exports,F=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ppt superiority"},[e("ppt-title",[this._v("安装遇到的问题")]),this._v(" "),e("ppt-text",[this._v("如果你直接采用我上面提供的方式安装，那么你可能会遇到下面的报错：")]),this._v(" "),e("ppt-code",[e("pre",[e("code",[this._v('ERROR: Failed to download Chromium r686378! Set "PUPPETEER_SKIP_CHROMIUM_DOWNLOAD" env variable to skip download.\nError: end of central directory record signature not found\n    at D:\\project\\web-ppt\\node_modules\\yauzl\\index.js:167:14\n    at D:\\project\\web-ppt\\node_modules\\yauzl\\index.js:473:5\n    at D:\\project\\web-ppt\\node_modules\\fd-slicer\\index.js:32:7\n    at FSReqWrap.wrapper [as oncomplete] (fs.js:467:17)')])])]),this._v(" "),e("ppt-text",[this._v("这是因为prerender-spa-plugin依赖puppeteer，而安装puppeteer需要翻墙下载Chromium（大概100-200Mb）。")])],1)};F._withStripped=!0;var J=Object(o.a)({},F,[],!1,null,null,null);J.options.__file="src/views/prerender/12.vue";var V=J.exports,K=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ppt superiority"},[e("ppt-title",[this._v("解决方案")]),this._v(" "),e("ppt-list",{staticStyle:{"margin-top":"10px"},attrs:{list:this.list}})],1)};K._withStripped=!0;var Y={data:()=>({list:[{title:"翻墙",text:"蓝灯等"},{title:"cnpm",code:"cnpm install prerender-spa-plugin --save-dev"},{title:"跳过安装Chromium再手动下载",code:"yarn add prerender-spa-plugin --ignore-scripts"}]})},Q=Object(o.a)(Y,K,[],!1,null,null,null);Q.options.__file="src/views/prerender/13.vue";var Z=Q.exports,tt=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ppt superiority"},[e("ppt-title",[this._v("手动下载链接")]),this._v(" "),e("ppt-code",[e("pre",[e("code",[this._v("const downloadURLs = {\n    linux: '%s/chromium-browser-snapshots/Linux_x64/%d/%s.zip',\n    mac: '%s/chromium-browser-snapshots/Mac/%d/%s.zip',\n    win32: '%s/chromium-browser-snapshots/Win/%d/%s.zip',\n    win64: '%s/chromium-browser-snapshots/Win_x64/%d/%s.zip'\n}")])])]),this._v(" "),e("ppt-list",{staticStyle:{"margin-top":"20px"},attrs:{list:this.list}})],1)};tt._withStripped=!0;var et={data:()=>({list:[{title:"%s",text:"platform，取值mac、linux、win64、win32、darwin等"},{title:"%d",text:"revision，版本号，可在puppeteer安装目录下的packages文件的puppeteer.chromium_revision字段查看"}]})},it=Object(o.a)(et,tt,[],!1,null,null,null);it.options.__file="src/views/prerender/14.vue";var nt=it.exports,rt=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ppt superiority"},[e("ppt-title",[this._v("基础用法")]),this._v(" "),e("ppt-code",[e("pre",[e("code",[this._v("const path = require('path')\nconst PrerenderSPAPlugin = require('prerender-spa-plugin')\n\nmodule.exports = {\n  plugins: [\n    ...\n    new PrerenderSPAPlugin({\n      // Required - The path to the webpack-outputted app to prerender.\n      staticDir: path.join(__dirname, 'dist'),\n      // Required - Routes to render.\n      routes: [ '/', '/about', '/some/deep/nested/route' ],\n    })\n  ]\n}")])])])],1)};rt._withStripped=!0;var st=Object(o.a)({},rt,[],!1,null,null,null);st.options.__file="src/views/prerender/15.vue";var pt=st.exports,ot=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ppt superiority"},[e("ppt-title",[this._v("进阶用法")]),this._v(" "),e("ppt-code",[e("pre",[e("code",[this._v("const path = require('path')\nconst PrerenderSPAPlugin = require('prerender-spa-plugin')\nconst Renderer = PrerenderSPAPlugin.PuppeteerRenderer\n\nmodule.exports = {\n  plugins: [\n    ...\n    new PrerenderSPAPlugin({\n      // Required - The path to the webpack-outputted app to prerender.\n      staticDir: path.join(__dirname, 'dist'),\n\n      // Required - Routes to render.\n      routes: [ '/', '/about', '/some/deep/nested/route' ],\n\n      // The actual renderer to use. (Feel free to write your own)\n      // Available renderers: https://github.com/Tribex/prerenderer/tree/master/renderers\n      renderer: new Renderer({\n        // Optional - Wait to render until the specified event is dispatched on the document.\n        // eg, with `document.dispatchEvent(new Event('custom-render-trigger'))`\n        renderAfterDocumentEvent: 'custom-render-trigger',\n\n        // Optional - Wait to render until the specified element is detected using `document.querySelector`\n        renderAfterElementExists: 'my-app-element',\n\n        // Optional - Wait to render until a certain amount of time has passed.\n        // NOT RECOMMENDED\n        renderAfterTime: 5000, // Wait 5 seconds.\n\n        // Other puppeteer options.\n        // (See here: https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions)\n        headless: false // Display the browser window when rendering. Useful for debugging.\n      })\n    })\n  ]\n}")])])])],1)};ot._withStripped=!0;var lt=Object(o.a)({},ot,[],!1,null,null,null);lt.options.__file="src/views/prerender/16.vue";var at=lt.exports,ut=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ppt superiority"},[e("ppt-title",[this._v("使用注意事项")]),this._v(" "),e("ppt-list",{attrs:{list:this.list}}),this._v(" "),this._m(0)],1)},ct=[function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("img",{attrs:{src:i(34),width:"1200px"}})])}];ut._withStripped=!0;var dt={data:()=>({list:[{title:"预渲染仅支持单页应用的HTML5 history API模式"},{title:'需在根节点设置data-server-rendered="true",否则会渲染出来两个页面。'}]})},ht=Object(o.a)(dt,ut,ct,!1,null,null,null);ht.options.__file="src/views/prerender/17.vue";var vt=ht.exports,_t=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ppt center"},[e("ppt-chapter",[this._v("第三章 在收银台项目中的运用")])],1)};_t._withStripped=!0;var mt=Object(o.a)({},_t,[],!1,null,null,null);mt.options.__file="src/views/prerender/18.vue";var ft=mt.exports,bt=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ppt superiority"},[e("ppt-title",[this._v("改造过程-路由改造")]),this._v(" "),e("ppt-text",[this._v("PC收银台项目最初采用的是多页面的方式构建应用，它没有路由的概念，直接以.html的形式访问。而预渲染仅支持单页应用的HTML5 history API模式。因此需要对收银台项目进行路由改造。")]),this._v(" "),e("ppt-code",[e("pre",[e("code",[this._v("import Index from 'src/views/index.vue'\n\nconst routes = [{\n    path: '/',\n    redirect: '/static/pages/cashier/index.html'\n}, {\n    path: '/static/pages/cashier/index.html',\n    component: Index\n}, {\n    path: '/static/pages/cashier',\n    component: Index\n}]\n\nexport default routes")])])])],1)};bt._withStripped=!0;var xt=Object(o.a)({},bt,[],!1,null,null,null);xt.options.__file="src/views/prerender/19.vue";var gt=xt.exports,yt=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ppt superiority"},[e("ppt-title",[this._v("改造过程-BOSS系统部署调试")]),this._v(" "),e("ppt-text",[this._v("本地构建成功，在BOSS系统构建却失败了。ldd后发现是CentOS上chrome依赖的动态链接库（so文件）缺失。")]),this._v(" "),e("ppt-code",[e("pre",[e("code",[this._v("ldd /var/boss/git@repo.we.com/build/source/dsp-tc-pay.test/node_modules/puppeteer/.local-chromium/linux-686378/chrome-linux/chrome")])])]),this._v(" "),e("ppt-code",[e("pre",[e("code",[this._v("chrome version: linux-686378\nlake:\nlibX11.so.6 => not found\nlibX11-xcb.so.1 => not found\nlibxcb.so.1 => not found\nlibXcomposite.so.1 => not found\nlibXcursor.so.1 => not found\nlibXdamage.so.1 => not found\nlibXext.so.6 => not found\nlibXfixes.so.3 => not found\nlibXi.so.6 => not found\nlibXrender.so.1 => not found\nlibXtst.so.6 => not found\nlibcups.so.2 => not found\nlibXss.so.1 => not found\nlibXrandr.so.2 => not found\nlibatk-1.0.so.0 => not found\nlibatk-bridge-2.0.so.0 => not found\nlibpangocairo-1.0.so.0 => not found\nlibpango-1.0.so.0 => not found\nlibcairo.so.2 => not found\nlibatspi.so.0 => not found\nlibgtk-3.so.0 => not found\nlibgdk-3.so.0 => not found\nlibgdk_pixbuf-2.0.so.0 => not found")])])])],1)};yt._withStripped=!0;var wt=Object(o.a)({},yt,[],!1,null,null,null);wt.options.__file="src/views/prerender/20.vue";var St=wt.exports,Ot=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ppt superiority"},[e("ppt-title",[this._v("探索：在官网找到修复方案")]),this._v(" "),this._m(0)],1)};Ot._withStripped=!0;var Et=Object(o.a)({},Ot,[function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("img",{attrs:{src:"https://lileyong.github.io/web-ppt/dist/centos-dependencies.png"}})])}],!1,null,null,null);Et.options.__file="src/views/prerender/21.vue";var Ct=Et.exports,jt=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ppt superiority"},[e("ppt-title",[this._v("曙光：测试环境BOSS系统构建成功")]),this._v(" "),e("ppt-text",[this._v("根据官网给出的修复文案，执行以下命令，测试环境BOSS系统构建成功！")]),this._v(" "),e("ppt-code",[e("pre",[e("code",[this._v("yum install -y pango.x86_64\nyum install -y libXcomposite.x86_64\nyum install -y libXcursor.x86_64\nyum install -y libXdamage.x86_64\nyum install -y libXext.x86_64\nyum install -y libXi.x86_64\nyum install -y libXtst.x86_64\nyum install -y cups-libs.x86_64\nyum install -y libXScrnSaver.x86_64\nyum install -y libXrandr.x86_64\nyum install -y GConf2.x86_64\nyum install -y alsa-lib.x86_64\nyum install -y atk.x86_64\nyum install -y gtk3.x86_64\nyum install -y ipa-gothic-fonts\nyum install -y xorg-x11-fonts-100dpi\nyum install -y xorg-x11-fonts-75dpi\nyum install -y xorg-x11-utils\nyum install -y xorg-x11-fonts-cyrillic\nyum install -y xorg-x11-fonts-Type1\nyum install -y xorg-x11-fonts-misc\nyum update nss -y\n")])])])],1)};jt._withStripped=!0;var kt=Object(o.a)({},jt,[],!1,null,null,null);kt.options.__file="src/views/prerender/22.vue";var Pt=kt.exports,$t=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ppt superiority"},[e("ppt-title",[this._v("滑铁卢：UAT环境BOSS系统构建失败")]),this._v(" "),e("ppt-text",[this._v("测试环境部署成功，UAT环境依旧部署失败。原因还是部分chrome依赖的动态链接库（so文件）缺失。查找资料发现libatk-bridge-2.0.so.0 CentOS 6.5不支持，需要7以上版本。而我们公司的BOSS系统构建机器测试环境是7版本，UAT/生产环境均是6.5版本。与运维商量升级BOSS系统机器，运维认为存在风险，作罢。")]),this._v(" "),e("ppt-code",[e("pre",[e("code",[this._v("[root@bj-ops3 linux-686378]# ldd /var/boss/git@repo.we.com/build/source/dsp-tc-pay.uat/node_modules/puppeteer/.local-chromium/linux-686378/chrome-linux/chrome| grep \"not found\"\n/var/boss/git@repo.we.com/build/source/dsp-tc-pay.uat/node_modules/puppeteer/.local-chromium/linux-686378/chrome-linux/chrome: /usr/lib64/libnss3.so: version `NSS_3.22' not found (required by /var/boss/git@repo.we.com/build/source/dsp-tc-pay.uat/node_moduleva.s/puppeteer/.local-chromium/linux-686378/chrome-linux/chrome)\n/var/boss/git@repo.we.com/build/source/dsp-tc-pay.uat/node_modules/puppeteer/.local-chromium/linux-686378/chrome-linux/chrome: /lib64/libc.so.6: version `GLIBC_2.14' not found (required by /var/boss/git@repo.we.com/build/source/dsp-tc-pay.uat/node_modules/puppeteer/.local-chromium/linux-686378/chrome-linux/chrome)\n/var/boss/git@repo.we.com/build/source/dsp-tc-pay.uat/node_modules/puppeteer/.local-chromium/linux-686378/chrome-linux/chrome: /lib64/libc.so.6: version `GLIBC_2.15' not found (required by /var/boss/git@repo.we.com/build/source/dsp-tc-pay.uat/node_modules/puppeteer/.local-chromium/linux-686378/chrome-linux/chrome)\n/var/boss/git@repo.we.com/build/source/dsp-tc-pay.uat/node_modules/puppeteer/.local-chromium/linux-686378/chrome-linux/chrome: /lib64/libc.so.6: version `GLIBC_2.16' not found (required by /var/boss/git@repo.we.com/build/source/dsp-tc-pay.uat/node_modules/puppeteer/.local-chromium/linux-686378/chrome-linux/chrome)\n    libatk-bridge-2.0.so.0 => not found\n    libatspi.so.0 => not found\n    libgtk-3.so.0 => not found\n    libgdk-3.so.0 => not found\n[root@bj-ops3 linux-686378]# yum install libatk-bridge-2.0.so.0\nLoaded plugins: fastestmirror, security\nLoading mirror speeds from cached hostfile\nSetting up Install Process\nNo package libatk-bridge-2.0.so.0 available.\nError: Nothing to do\n")])])])],1)};$t._withStripped=!0;var Rt=Object(o.a)({},$t,[],!1,null,null,null);Rt.options.__file="src/views/prerender/23.vue";var Lt=Rt.exports,Tt=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ppt superiority"},[e("ppt-title",[this._v("妥协：本地构建好再部署")]),this._v(" "),e("ppt-text",[this._v("由于运维不同意升级BOSS系统机器，因此只能本地构建好再部署到BOSS系统。")]),this._v(" "),e("ppt-code",[e("pre",[e("code",[this._v('"scripts": {\n    "dev": "vue-cli-service serve",\n    "build": "echo \'build success\'",\n    "build:local": "vue-cli-service build",\n    "lint": "vue-cli-service lint",\n    "lint:fix": "vue-cli-service lint --fix"\n},')])])])],1)};Tt._withStripped=!0;var At=Object(o.a)({},Tt,[],!1,null,null,null);At.options.__file="src/views/prerender/24.vue";var Xt=At.exports,Mt=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ppt superiority"},[e("ppt-title",[this._v("收益：首屏时间减少了1/3")]),this._v(" "),e("ppt-text",[this._v("经过预渲染改造后，用lighthouse测试发现预渲染改造前首屏时间是3.1s，预渲染改造后首屏时间是2.2s，performance评分由82分提升到97分！整体效果还是不错的。")]),this._v(" "),this._m(0)],1)};Mt._withStripped=!0;i(35);var qt=Object(o.a)({},Mt,[function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("img",{attrs:{src:"https://lileyong.github.io/web-ppt/dist/performance-1.png"}}),this._v(" "),e("img",{attrs:{src:"https://lileyong.github.io/web-ppt/dist/performance-2.png"}})])}],!1,null,"426c92b3",null);qt.options.__file="src/views/prerender/25.vue";var Dt=qt.exports,Bt=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ppt superiority"},[e("ppt-title",[this._v("总结")]),this._v(" "),e("ppt-text",[this._v("经过这次收银台预渲染改造，我学到了不少，总结以下几点：")]),this._v(" "),e("ppt-list",{attrs:{list:this.list}})],1)};Bt._withStripped=!0;var It={data:()=>({list:[{title:"需加强Linux命令学习"},{title:"BOSS系统构建机系统过于老旧，需要有话语权的人推动升级"}]})},Nt=Object(o.a)(It,Bt,[],!1,null,null,null);Nt.options.__file="src/views/prerender/26.vue";var Ht=Nt.exports,Ut=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ppt superiority"},[e("ppt-title",[this._v("参考文档")]),this._v(" "),e("ppt-list",{attrs:{list:this.list}})],1)};Ut._withStripped=!0;var Wt={data:()=>({list:[{title:"prerender-spa-plugin：https://github.com/chrisvfritz/prerender-spa-plugin"},{title:"puppeteer：https://github.com/puppeteer/puppeteer"},{title:"troubleshooting：https://github.com/puppeteer/puppeteer/blob/master/docs/troubleshooting.md#chrome-headless-doesnt-launch-on-unix"}]})},zt=Object(o.a)(Wt,Ut,[],!1,null,null,null);zt.options.__file="src/views/prerender/27.vue";const Gt=[{path:"/prerender",component:a,children:[{name:"预渲染及其在收银台项目中的运用",path:"1",component:d},{path:"2",component:_},{path:"3",component:b},{path:"4",component:w},{path:"5",component:C},{path:"6",component:$},{path:"7",component:A},{path:"8",component:q},{path:"9",component:I},{path:"10",component:U},{path:"11",component:G},{path:"12",component:V},{path:"13",component:Z},{path:"14",component:nt},{path:"15",component:pt},{path:"16",component:at},{path:"17",component:vt},{path:"18",component:ft},{path:"19",component:gt},{path:"20",component:St},{path:"21",component:Ct},{path:"22",component:Pt},{path:"23",component:Lt},{path:"24",component:Xt},{path:"25",component:Dt},{path:"26",component:Ht},{path:"27",component:zt.exports}]}];e.default=Gt},232:function(t,e,i){"use strict";i.r(e);var n=i(1),r=i(13);n.default.use(r.default);var s=[];const p=i(16);p.keys().forEach(t=>{s=s.concat(p(t).default)});const o=new r.default({routes:s});o.beforeEach((t,e,i)=>{const n=t.name||window.localStorage.getItem("routeTitle")||"Webpack App";document.title=n,window.localStorage.setItem("routeTitle",n),i()});var l=o,a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app","data-server-rendered":"true"}},[e("router-view")],1)};a._withStripped=!0;i(36);var u=i(0),c=Object(u.a)({},a,[],!1,null,null,null);c.options.__file="src/App.vue";var d=c.exports,h=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"spokesman-box"},[e("img",{staticClass:"spokesman",attrs:{src:"https://lileyong.github.io/web-ppt/dist/install.png"}}),this._v(" "),this._t("default")],2)};h._withStripped=!0;var v={name:"ppt-spokesman"},_=(i(37),Object(u.a)(v,h,[],!1,null,"61889611",null));_.options.__file="src/widgets/ppt-spokesman.vue";var m=_.exports,f=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"ppt-text"},[this._t("default")],2)};f._withStripped=!0;var b={name:"ppt-chapter"},x=(i(38),Object(u.a)(b,f,[],!1,null,"5a309a4b",null));x.options.__file="src/widgets/ppt-chapter.vue";var g=x.exports,y=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"ppt-title"},[this._t("default")],2)};y._withStripped=!0;var w={name:"ppt-title"},S=(i(39),Object(u.a)(w,y,[],!1,null,"18898456",null));S.options.__file="src/widgets/ppt-title.vue";var O=S.exports,E=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"ppt-text"},[this._t("default")],2)};E._withStripped=!0;var C={name:"ppt-text"},j=(i(40),Object(u.a)(C,E,[],!1,null,"7e7e0dc2",null));j.options.__file="src/widgets/ppt-text.vue";var k=j.exports,P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ppt-steps"},t._l(t.steps,(function(e){return i("div",{key:e.text,staticClass:"step-item"},[t._v(t._s(e.text))])})),0)};P._withStripped=!0;var $={name:"ppt-steps",props:{steps:{type:Array,default:()=>[]}}},R=(i(41),Object(u.a)($,P,[],!1,null,"2de594b6",null));R.options.__file="src/widgets/ppt-steps.vue";var L=R.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ppt-list"},t._l(t.list,(function(e){return i("div",{key:e.title},[i("div",{staticClass:"list-item"},[t._v(t._s(e.title))]),t._v(" "),e.text?i("ppt-text",[t._v(t._s(e.text))]):t._e(),t._v(" "),e.code?i("ppt-code",[i("pre",[i("code",[t._v(t._s(e.code))])])]):t._e(),t._v(" "),e.list?i("ppt-list",{attrs:{list:e.list}}):t._e()],1)})),0)};T._withStripped=!0;var A={name:"ppt-list",props:{list:{type:Array,default:()=>[]}}},X=(i(42),Object(u.a)(A,T,[],!1,null,"4cc84410",null));X.options.__file="src/widgets/ppt-list.vue";var M=X.exports,q=function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ppt-code"},[this._t("default")],2)};q._withStripped=!0;var D={name:"ppt-code"},B=Object(u.a)(D,q,[],!1,null,null,null);B.options.__file="src/widgets/ppt-code.vue";var I=B.exports;n.default.use((function(t){t.component(m.name,m),t.component(g.name,g),t.component(O.name,O),t.component(k.name,k),t.component(L.name,L),t.component(M.name,M),t.component(I.name,I)}));var N=i(14),H=i.n(N);i(230);n.default.use(H.a);const U=document.createElement("div");document.body.append(U),new n.default({router:l,render:t=>t(d)}).$mount(U)},3:function(t,e,i){},32:function(t,e,i){"use strict";var n=i(3);i.n(n).a},33:function(t,e,i){"use strict";var n=i(4);i.n(n).a},34:function(t,e,i){t.exports=i.p+"duplicate-content.png"},35:function(t,e,i){"use strict";var n=i(5);i.n(n).a},36:function(t,e,i){"use strict";var n=i(6);i.n(n).a},37:function(t,e,i){"use strict";var n=i(7);i.n(n).a},38:function(t,e,i){"use strict";var n=i(8);i.n(n).a},39:function(t,e,i){"use strict";var n=i(9);i.n(n).a},4:function(t,e,i){},40:function(t,e,i){"use strict";var n=i(10);i.n(n).a},41:function(t,e,i){"use strict";var n=i(11);i.n(n).a},42:function(t,e,i){"use strict";var n=i(12);i.n(n).a},5:function(t,e,i){},6:function(t,e,i){},7:function(t,e,i){},8:function(t,e,i){},9:function(t,e,i){}});