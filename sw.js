if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>i(e,l),u={module:{uri:l},exports:t,require:o};s[l]=Promise.all(r.map((e=>u[e]||o(e)))).then((e=>(n(...e),t)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_...all_-4be9bcde.js",revision:null},{url:"assets/_name_-6fe742dd.js",revision:null},{url:"assets/About-4f01658d.js",revision:null},{url:"assets/buttons-e1502b07.js",revision:null},{url:"assets/Card-d5b1fc2f.js",revision:null},{url:"assets/cards-2193f4d7.js",revision:null},{url:"assets/Dashboard-6c52db62.js",revision:null},{url:"assets/dashboard-b91d4a17.js",revision:null},{url:"assets/index-d6aca7c8.css",revision:null},{url:"assets/index-f76a1e6a.js",revision:null},{url:"index.html",revision:"804c51d6630e51a2f856e4768ebf1586"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"./img/cfg-logo.jpg",revision:"65102d2cde4a8f679c6e19c9e1326005"},{url:"manifest.webmanifest",revision:"d91aceb310cf3d38a87bd7405070a342"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));