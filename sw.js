if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>i(e,l),u={module:{uri:l},exports:t,require:o};s[l]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_...all_-a7bdf68e.js",revision:null},{url:"assets/_name_-d99ed180.js",revision:null},{url:"assets/About-e9a80ef3.js",revision:null},{url:"assets/buttons-37d4fac2.js",revision:null},{url:"assets/Card-4e5c4bef.js",revision:null},{url:"assets/cards-c513cf7d.js",revision:null},{url:"assets/dashboard-5cafa0fd.js",revision:null},{url:"assets/Dashboard-e1cd9e1c.js",revision:null},{url:"assets/index-28ca0aa9.js",revision:null},{url:"assets/index-e1b9d2eb.css",revision:null},{url:"index.html",revision:"5c84d9a33e1a966f84d93c25ce6f0334"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"b08c338289cd00eed9a5002038e10250"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));