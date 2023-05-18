(function(){"use strict";var e={6659:function(e,t,n){var r=n(9242),o=n(3396),i=n(7718),u=n(9271);function f(e,t,n,r,f,a){const c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(i.q,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u.O,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c)])),_:1})])),_:1})}var a={name:"App",data:()=>({})},c=n(89);const l=(0,c.Z)(a,[["render",f]]);var s=l,d=n(1120),p=(n(9773),n(8685)),v=(0,p.Rd)({icons:{iconfont:"mdi"}});async function h(){const e=await n.e(461).then(n.t.bind(n,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}h(),(0,r.ri)(s).use(d.Z).use(v).mount("#app")},1120:function(e,t,n){var r=n(2483);const o=[{path:"/fbx/:no",name:"fbx",component:()=>Promise.all([n.e(864),n.e(904)]).then(n.bind(n,2904)),props:!0},{path:"/",name:"Card",component:()=>Promise.all([n.e(864),n.e(162)]).then(n.bind(n,9162))}],i=(0,r.p7)({history:(0,r.PO)("/"),routes:o});t["Z"]=i}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var u=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var f=!0,a=0;a<r.length;a++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[a])}))?r.splice(a--,1):(f=!1,i<u&&(u=i));if(f){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var u={};e=e||[null,t({}),t([]),t(t)];for(var f=2&o&&r;"object"==typeof f&&!~e.indexOf(f);f=t(f))Object.getOwnPropertyNames(f).forEach((function(e){u[e]=function(){return r[e]}}));return u["default"]=function(){return r},n.d(i,u),i}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(461===e?"webfontloader":e)+"."+{162:"2c2a7d26",187:"af1f4114",461:"ec021ffd",864:"ec83b334",904:"49734ef9"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{162:"6d2acd67",904:"1bda1ed6"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-threejs:";n.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var f,a;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var s=c[l];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+i){f=s;break}}f||(a=!0,f=document.createElement("script"),f.charset="utf-8",f.timeout=120,n.nc&&f.setAttribute("nonce",n.nc),f.setAttribute("data-webpack",t+i),f.src=r),e[r]=[o];var d=function(t,n){f.onerror=f.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=d.bind(null,f.onerror),f.onload=d.bind(null,f.onload),a&&document.head.appendChild(f)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var u=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var u=n&&("load"===n.type?"missing":n.type),f=n&&n.target&&n.target.href||t,a=new Error("Loading CSS chunk "+e+" failed.\n("+f+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=u,a.request=f,i.parentNode&&i.parentNode.removeChild(i),o(a)}};return i.onerror=i.onload=u,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var u=n.miniCssF(r),f=n.p+u;if(t(u,f))return o();e(r,f,null,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={162:1,904:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(t),f=new Error,a=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;f.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",f.name="ChunkLoadError",f.type=i,f.request=u,o[1](f)}};n.l(u,a,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,u=r[0],f=r[1],a=r[2],c=0;if(u.some((function(t){return 0!==e[t]}))){for(o in f)n.o(f,o)&&(n.m[o]=f[o]);if(a)var l=a(n)}for(t&&t(r);c<u.length;c++)i=u[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkvue_threejs"]=self["webpackChunkvue_threejs"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6659)}));r=n.O(r)})();
//# sourceMappingURL=app.41cf0f47.js.map