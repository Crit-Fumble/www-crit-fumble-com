if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let t={};const o=s=>i(s,l),u={module:{uri:l},exports:t,require:o};e[l]=Promise.all(n.map((s=>u[s]||o(s)))).then((s=>(r(...s),t)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...all_-1eb8793b.js",revision:null},{url:"assets/_name_-8b5dff01.js",revision:null},{url:"assets/About-9ea04506.js",revision:null},{url:"assets/buttons-2d9d8b9f.js",revision:null},{url:"assets/Card-5ec8c550.js",revision:null},{url:"assets/cards-f624ce12.js",revision:null},{url:"assets/dashboard-1ebfbbde.js",revision:null},{url:"assets/Dashboard-6fa6febd.js",revision:null},{url:"assets/index-6fd08765.css",revision:null},{url:"assets/index-959d0f8a.js",revision:null},{url:"index.html",revision:"465cfd5b4847869807ccaa29d39e951a"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
