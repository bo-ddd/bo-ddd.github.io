(()=>{"use strict";var t,e,r={},n={};function o(t){var e=n[t];if(void 0!==e)return e.exports;var i=n[t]={exports:{}};return r[t](i,i.exports,o),i.exports}o.m=r,o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.f={},o.e=t=>Promise.all(Object.keys(o.f).reduce(((e,r)=>(o.f[r](t,e),e)),[])),o.u=t=>"articleContent/articleContent.315bc0055435dfa6a248.js",o.miniCssF=t=>"home/home.6119d9eb31dd5ef33a97.css",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t={},e="webpack-multpart-framework:",o.l=(r,n,i,l)=>{if(t[r])t[r].push(n);else{var a,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+i){a=d;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",e+i),a.src=r),t[r]=[n];var h=(e,n)=>{a.onerror=a.onload=null,clearTimeout(f);var o=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((t=>t(n))),e)return e(n)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),s&&document.head.appendChild(a)}},o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t+"../"})(),(()=>{var t={177:0};o.f.j=(e,r)=>{var n=o.o(t,e)?t[e]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise(((r,o)=>n=t[e]=[r,o]));r.push(n[2]=i);var l=o.p+o.u(e),a=new Error;o.l(l,(r=>{if(o.o(t,e)&&(0!==(n=t[e])&&(t[e]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+l+")",a.name="ChunkLoadError",a.type=i,a.request=l,n[1](a)}}),"chunk-"+e,e)}};var e=(e,r)=>{var n,i,[l,a,s]=r,c=0;if(l.some((e=>0!==t[e]))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);s&&s(o)}for(e&&e(r);c<l.length;c++)i=l[c],o.o(t,i)&&t[i]&&t[i][0](),t[l[c]]=0},r=self.webpackChunkwebpack_multpart_framework=self.webpackChunkwebpack_multpart_framework||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),(()=>{let t=new class{constructor(t){this.el=t.el,this.text="",this.textCount=t.textCount,this.findAllButtonText=t.findAllButtonText||"查看全文",this.ellipsisButtonText=t.ellipsisButtonText||"收起",this.showFindAllButton=t.showFindAllButton||!1,this.flag=!0}get buttonText(){return this.flag?this.findAllButtonText:this.ellipsisButtonText}beforeMount(){}exec(){if(this.text=this.el.textContent,!this.text)throw new Error("文本内容不能为空");this.el.innerHTML=this.format(this.text,this.textCount),this.showFindAllButton&&this.addButton(),this.beforeMount(this.el)}addButton(){var t=document.createElement("a");t.textContent=this.findAllButtonText,t.style.cssText="\n            color:blue;\n            cursor: pointer;\n        ";var e=this;t.addEventListener("click",(function(){e.flag=!e.flag,this.textContent=e.buttonText,e.el.childNodes[0].textContent=e.flag?e.format(e.text,e.textCount):e.text})),this.el.appendChild(t,this.el.childNodes[0])}format(t,e){return t.length<e?t:t.substring(0,e)+"..."}}({textCount:80,showFindAllButton:!0});const e=[{id:1,title:"如何看待知乎上的男拳",article:async()=>function(e,r){let n=function(t){let e=document.createElement("div");return e.innerHTML=t,e.querySelector("template").content}(e),o=n.querySelector("article");return n.querySelector("h3").onclick=function(){window.location.href=`./articleDetail.html?id=${r}`},t.el=o,t.exec(),n}((await o.e(982).then(o.bind(o,632))).default,1)}];var r=document.querySelector(".tab-item"),n=r.querySelector(".main"),i=r.querySelector(".item");i.remove(),e.forEach((async t=>{var e=i.cloneNode(!0);let r=await t.article();e.insertBefore(r,e.querySelector(".nav")),n.appendChild(e)}))})()})();