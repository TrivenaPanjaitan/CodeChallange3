if(!self.define){let e,n={};const t=(t,o)=>(t=new URL(t+".js",o).href,n[t]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=n,document.head.appendChild(e)}else e=t,importScripts(t),n()})).then((()=>{let e=n[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(o,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(n[d])return;let i={};const l=e=>t(e,d),r={module:{uri:d},exports:i,require:l};n[d]=Promise.all(o.map((e=>r[e]||l(e)))).then((e=>(s(...e),i)))}}define(["./workbox-788a1184"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/CodeChallange3bundle.js",revision:"32b159961691610e9aa6106df96e6abd"},{url:"/CodeChallange3bundle.js.LICENSE.txt",revision:"1ac23edd848720c87dd7eac90d67e14d"},{url:"/CodeChallange3index.html",revision:"f0b83c38adad2595c997d898ece81108"},{url:"/CodeChallange3styles.css",revision:"3573e26e63543c0239ae78f39af4bd2f"}],{}),e.registerRoute(/^https:\/\/.*/,new e.NetworkFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
