if(!self.define){let e,n={};const t=(t,o)=>(t=new URL(t+".js",o).href,n[t]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=n,document.head.appendChild(e)}else e=t,importScripts(t),n()})).then((()=>{let e=n[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(o,s)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(n[i])return;let l={};const r=e=>t(e,i),d={module:{uri:i},exports:l,require:r};n[i]=Promise.all(o.map((e=>d[e]||r(e)))).then((e=>(s(...e),l)))}}define(["./workbox-788a1184"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/CodeChallange3/bundle.js",revision:"538cb43803c212b4664aa25b04e5c541"},{url:"/CodeChallange3/bundle.js.LICENSE.txt",revision:"1ac23edd848720c87dd7eac90d67e14d"},{url:"/CodeChallange3/index.html",revision:"f0b83c38adad2595c997d898ece81108"},{url:"/CodeChallange3/styles.css",revision:"3573e26e63543c0239ae78f39af4bd2f"}],{}),e.registerRoute(/^https:\/\/.*/,new e.NetworkFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
