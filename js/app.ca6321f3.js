(function(e){function t(t){for(var c,a,u=t[0],i=t[1],s=t[2],l=0,b=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&b.push(r[a][0]),r[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);p&&p(t);while(b.length)b.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(c=!1)}c&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var c={},r={app:0},o=[];function a(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"19838b56"}[e]+".js"}function u(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,c){n=r[e]=[t,c]}));t.push(n[2]=c);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=a(e);var s=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+c+": "+o+")",s.name="ChunkLoadError",s.type=c,s.request=o,n[1](s)}r[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=c,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)u.d(n,c,function(t){return e[t]}.bind(null,c));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var p=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"438c":function(e,t,n){e.exports=n.p+"img/Logo-desktop.e347b98a.svg"},4926:function(e,t,n){},"6a86":function(e,t,n){"use strict";n("d7e1")},ba8c:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function r(e,t,n,r,o,a){var u=Object(c["x"])("Header"),i=Object(c["x"])("router-view");return Object(c["q"])(),Object(c["d"])(c["a"],null,[Object(c["g"])(u),Object(c["g"])(i)],64)}var o=n("1da1"),a=(n("96cf"),n("d81d"),n("4272"),n("438c")),u=n.n(a),i={class:"border-b"},s={class:"container mx-auto py-8 flex items-center justify-between"},l=Object(c["e"])("img",{src:u.a,alt:"Logo"},null,-1),p=Object(c["e"])("span",{class:"text-lg mr-5"},"探索景點",-1),b=Object(c["e"])("span",{class:"text-lg mr-5"},"節慶活動",-1),d=Object(c["e"])("span",{class:"text-lg"},"品嘗美食",-1);function f(e,t,n,r,o,a){var u=Object(c["x"])("router-link");return Object(c["q"])(),Object(c["d"])("div",i,[Object(c["e"])("div",s,[Object(c["g"])(u,{to:"/"},{default:Object(c["B"])((function(){return[l]})),_:1}),Object(c["e"])("div",null,[Object(c["g"])(u,{to:"/scenicspot"},{default:Object(c["B"])((function(){return[p]})),_:1}),Object(c["g"])(u,{to:"/activity"},{default:Object(c["B"])((function(){return[b]})),_:1}),Object(c["g"])(u,{to:"/restaurant"},{default:Object(c["B"])((function(){return[d]})),_:1})])])])}var j=Object(c["h"])({name:"Header",props:{}}),m=n("6b0d"),O=n.n(m);const v=O()(j,[["render",f]]);var g=v,h={name:"App",components:{Header:g},setup:function(){Object(c["u"])({google:null,map:null,markers:null});Object(c["o"])(Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))))}};n("e086");const x=O()(h,[["render",r]]);var y=x,S=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),w=n("f479"),_=n.n(w),T=n("d255"),k=n.n(T),C=function(e){return Object(c["t"])("data-v-0680a5c7"),e=e(),Object(c["r"])(),e},P=C((function(){return Object(c["e"])("section",{class:"container mx-auto pt-20 pb-14 px-24 flex justify-between"},[Object(c["e"])("div",null,[Object(c["e"])("h1",{class:"text-5xl text-left font-light mb-4"},[Object(c["f"])(" 探索"),Object(c["e"])("span",{class:"border-b-2 border-highlight"},"台灣之美"),Object(c["e"])("br"),Object(c["f"])(" 讓我們更親近這片土地 ")]),Object(c["e"])("div",{class:"flex items-center"},[Object(c["e"])("img",{src:_.a,alt:"",class:"mr-1.5"}),Object(c["e"])("span",{class:"text-xl mr-1.5"},"台灣旅遊景點導覽"),Object(c["e"])("span",{class:"text-lg"},"Taiwan Travel Guide")])]),Object(c["e"])("div",{class:"home__form"},[Object(c["e"])("select",{name:"searchScenicSpot",id:"searchScenicSpot",class:"h-12 w-full rounded-md border-gray-200 text-primary mb-1.5 px-7"},[Object(c["e"])("option",{value:""},"test")]),Object(c["e"])("input",{type:"text",placeholder:"你想去哪裡？請輸入關鍵字",class:"w-full h-12 rounded-md border-gray-200 bg-gray-50 text-red mb-1.5 px-7"}),Object(c["e"])("button",{class:"w-full h-12 rounded-md bg-primary text-white flex justify-center items-center"},[Object(c["e"])("img",{src:k.a,alt:"",class:"mr-2"}),Object(c["e"])("span",{class:"mr-6"},"搜"),Object(c["e"])("span",null,"尋")])])],-1)})),q={class:"container"};function A(e,t,n,r,o,a){var u=Object(c["x"])("Carousel");return Object(c["q"])(),Object(c["d"])(c["a"],null,[P,Object(c["e"])("section",q,[Object(c["g"])(u,{scenicSpotData:r.scenicSpotData},null,8,["scenicSpotData"])])],64)}var D=n("5502"),H=Object(c["e"])("h1",null,"Carousel",-1),M=["src"];function R(e,t,n,r,o,a){return Object(c["q"])(),Object(c["d"])(c["a"],null,[H,(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(n.scenicSpotData,(function(e){return Object(c["q"])(),Object(c["d"])("div",{key:e.ID},[Object(c["e"])("img",{src:e.Picture.PictureUrl1},null,8,M)])})),128))],64)}var B={name:"Carousel",props:{scenicSpotData:{}},setup:function(){return{}}};const E=O()(B,[["render",R]]);var L=E,I={name:"Home",components:{Carousel:L},setup:function(){var e=Object(D["b"])();return e.commit("getScenicSpot"),Object(c["o"])((function(){console.log("onMounted")})),{scenicSpotData:Object(c["b"])((function(){return e.state.scenicSpot}))}}};n("6a86");const J=O()(I,[["render",A],["__scopeId","data-v-0680a5c7"]]);var U=J;function X(e,t,n,r,o,a){return Object(c["q"])(),Object(c["d"])("div",null,"ScenicSpot")}var G={name:"ScenicSpot",setup:function(){return{}}};const N=O()(G,[["render",X]]);var $=N;function z(e,t,n,r,o,a){return Object(c["q"])(),Object(c["d"])("div",null,"Activity")}var K={name:"Activity",setup:function(){return{}}};const Q=O()(K,[["render",z]]);var V=Q;function W(e,t,n,r,o,a){return Object(c["q"])(),Object(c["d"])("div",null,"Restaurant")}var F={name:"Restaurant",setup:function(){return{}}};const Y=O()(F,[["render",W]]);var Z=Y,ee=[{path:"/",name:"Home",component:U},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/scenicspot",name:"ScenicSpot",component:$},{path:"/activity",name:"Activity",component:V},{path:"/restaurant",name:"Restaurant",component:Z}],te=Object(S["a"])({history:Object(S["b"])(),routes:ee}),ne=te,ce={getScenicSpot:function(e){e.commit()}},re=n("bc3a"),oe=n.n(re),ae=n("6c2d");function ue(){var e="8c62ce33fcdc4ef48048f66d78608de1",t="Q8ImsvuvjN9dUpCWt9m6Gl4jb54",n=(new Date).toUTCString(),c=new ae["a"]("SHA-1","TEXT");c.setHMACKey(t,"TEXT"),c.update("x-date: "+n);var r=c.getHMAC("B64"),o='hmac username="'.concat(e,'", algorithm="hmac-sha1", headers="x-date", signature="').concat(r,'"');return{headers:{Authorization:o,"X-Date":n}}}var ie={getScenicSpot:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n="https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON",oe.a.get(n,ue()).then((function(t){e.scenicSpot=t.data,console.log("response",t.data)})).catch((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)})))()}},se=Object(D["a"])({state:{scenicSpot:{}},getters:{scenicSpot:function(e){return e.scenicSpot}},mutations:ie,actions:ce,modules:{}});n("ba8c");Object(c["c"])(y).use(se).use(ne).mount("#app")},d255:function(e,t,n){e.exports=n.p+"img/Search30.ba28d8d7.svg"},d7e1:function(e,t,n){},e086:function(e,t,n){"use strict";n("4926")},f479:function(e,t,n){e.exports=n.p+"img/Vector.387a6cad.svg"}});
//# sourceMappingURL=app.ca6321f3.js.map