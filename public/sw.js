if(!self.define){let s,e={};const c=(c,n)=>(c=new URL(c+".js",n).href,e[c]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=c,s.onload=e,document.head.appendChild(s)}else s=c,importScripts(c),e()})).then((()=>{let s=e[c];if(!s)throw new Error(`Module ${c} didn’t register its module`);return s})));self.define=(n,a)=>{const p=s||("document"in self?document.currentScript.src:"")||location.href;if(e[p])return;let i={};const o=s=>c(s,p),t={module:{uri:p},exports:i,require:o};e[p]=Promise.all(n.map((s=>t[s]||o(s)))).then((s=>(a(...s),i)))}}define(["./workbox-5f5b08d6"],(function(s){"use strict";importScripts("fallback-NDvR_suGDcvtOqKTrYAh1.js"),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/20220613_134635.jpg",revision:"b780d6294b5c9567988c01283180a878"},{url:"/20220614_122650.png",revision:"d2344613bdc267098174ce6172b8a5c7"},{url:"/20220617_102853.png",revision:"d2626c6e55c13b652e017c0724dc43df"},{url:"/AppIcons (1)/Assets.xcassets/AppIcon.appiconset/100.png",revision:"e8f2178d92653491a4c3d177ca9ebffb"},{url:"/AppIcons (1)/Assets.xcassets/AppIcon.appiconset/1024.png",revision:"c17753e5edf69e971f69f429805d21ad"},{url:"/AppIcons (1)/Assets.xcassets/AppIcon.appiconset/114.png",revision:"1bded2b989179d757a46831cb004ef96"},{url:"/AppIcons (1)/Assets.xcassets/AppIcon.appiconset/120.png",revision:"de9cfe0202f6ee2bd3965251c646689d"},{url:"/AppIcons (1)/Assets.xcassets/AppIcon.appiconset/128.png",revision:"4e73dc9c7e8d3fd9013da1d8da8c93e1"},{url:"/AppIcons (1)/Assets.xcassets/AppIcon.appiconset/144.png",revision:"dac1f3a65313c2fdb339ca158aedf4cd"},{url:"/AppIcons (1)/Assets.xcassets/AppIcon.appiconset/152.png",revision:"e77c5aa74194084f78120532c31fe944"},{url:"/AppIcons (1)/Assets.xcassets/AppIcon.appiconset/16.png",revision:"8dd1cf12f96aec5818fd387ce0651df9"},{url:"/AppIcons (1)/Assets.xcassets/AppIcon.appiconset/167.png",revision:"b2e47e7d0575e1ddfdf6a0203e84fd88"},{url:"/AppIcons (1)/Assets.xcassets/AppIcon.appiconset/172.png",revision:"5ae60a2685c948a60bda776019dff9a6"},{url:"/AppIcons (1)/Assets.xcassets/AppIcon.appiconset/180.png",revision:"a46d777e38aaa6331608b1d69cd4ab0e"},{url:"/AppIcons (1)/Assets.xcassets/AppIcon.appiconset/196.png",revision:"590dee024d50f14662db9aa116c7a866"},{url:"/AppIcons (1)/Assets.xcassets/AppIcon.appiconset/20.png",revision:"071dea08f7e6d85144cdeda0ae25e8e2"},{url:"/AppIcons (1)/Assets.xcassets/AppIcon.appiconset/216.png",revision:"8872253ec23a321154af93657ed85d46"},{url:"/AppIcons (1)/Assets.xcassets/AppIcon.appiconset/256.png",revision:"1a3dd3ac4d29e6719866ec3a1c3364e6"},{url:"/AppIcons (1)/Assets.xcassets/AppIcon.appiconset/29.png",revision:"9de174ea650ec462b3f573cff7d0c254"},{url:"/AppIcons (1)/Assets.xcassets/AppIcon.appiconset/32.png",revision:"bb755f925fd5ff873e6c575e1463d371"},{url:"/AppIcons (1)/Assets.xcassets/AppIcon.appiconset/40.png",revision:"13eb25db0a215b7073d3fce5eccd914b"},{url:"/AppIcons (1)/Assets.xcassets/AppIcon.appiconset/48.png",revision:"58990c30529cfb40e89417a2ae6605ee"},{url:"/AppIcons (1)/Assets.xcassets/AppIcon.appiconset/50.png",revision:"80ca68805a38411b87053f7cf1aaab43"},{url:"/AppIcons (1)/Assets.xcassets/AppIcon.appiconset/512.png",revision:"e367da1fe7e84961dd7ff6e72d53cd90"},{url:"/AppIcons (1)/Assets.xcassets/AppIcon.appiconset/55.png",revision:"c878ec3775116b70dbaeb40ded1b5139"},{url:"/AppIcons (1)/Assets.xcassets/AppIcon.appiconset/57.png",revision:"b780e955fd7d69940aada9ed8966ff0e"},{url:"/AppIcons (1)/Assets.xcassets/AppIcon.appiconset/58.png",revision:"6760a3ee60e8a2cd93fccf6eac61916d"},{url:"/AppIcons (1)/Assets.xcassets/AppIcon.appiconset/60.png",revision:"44528941cad67cb9cd4ee9cd7bd6466a"},{url:"/AppIcons (1)/Assets.xcassets/AppIcon.appiconset/64.png",revision:"b263d38c03e6411c2c65430693f5b659"},{url:"/AppIcons (1)/Assets.xcassets/AppIcon.appiconset/72.png",revision:"4902d3c044faeb709cf0bbae048ab07c"},{url:"/AppIcons (1)/Assets.xcassets/AppIcon.appiconset/76.png",revision:"8bd88286916a03948b13bddef1897802"},{url:"/AppIcons (1)/Assets.xcassets/AppIcon.appiconset/80.png",revision:"738f69800fc4985ea0b3e50d3fa6a72c"},{url:"/AppIcons (1)/Assets.xcassets/AppIcon.appiconset/87.png",revision:"a15fc0e1519d9cf0b15ad2768e30cf20"},{url:"/AppIcons (1)/Assets.xcassets/AppIcon.appiconset/88.png",revision:"6a9dc629602eba5a34a9ff63b80218d3"},{url:"/AppIcons (1)/Assets.xcassets/AppIcon.appiconset/Contents.json",revision:"b0acb7355194b055decf0c9d45619bc7"},{url:"/AppIcons (1)/android/mipmap-hdpi/ic_launcher.png",revision:"a7458b7c084dece9341a57e0dcbf9dbb"},{url:"/AppIcons (1)/android/mipmap-mdpi/ic_launcher.png",revision:"1bcae70c76ec6ed8d2f31db4df81fbf8"},{url:"/AppIcons (1)/android/mipmap-xhdpi/ic_launcher.png",revision:"ba0508919ed92ae868eb9321ac455d48"},{url:"/AppIcons (1)/android/mipmap-xxhdpi/ic_launcher.png",revision:"ee45c7eaa2a4b0b4522556a51659249a"},{url:"/AppIcons (1)/android/mipmap-xxxhdpi/ic_launcher.png",revision:"48e3aa10f0be361d3ebb551ab4746e1b"},{url:"/AppIcons (1)/appstore.png",revision:"c17753e5edf69e971f69f429805d21ad"},{url:"/AppIcons (1)/playstore.png",revision:"39b7f49653f524732fe7c1bc15a94ef2"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/100.png",revision:"5162fec5efc38b23ef3ecddf815f5176"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/1024.png",revision:"b95218f476e101233ca8668360c9f9db"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/114.png",revision:"406c3f46d5ab1cefb5cfd4fb4801e8b8"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/120.png",revision:"5082bc54d68705bf05c372925c73c29f"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/128.png",revision:"4a94e1934f270dad0fb9fb7d4b29f5f3"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/144.png",revision:"534db59020f569a5a89288e32d24b2e0"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/152.png",revision:"2cedabb55d24ed746d07c0c39105bba9"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/16.png",revision:"fda4abb1badd83881196f3b07645e0e4"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/167.png",revision:"e65b6b4c3f9a60be064beb97cb72fb37"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/172.png",revision:"f73f836899456c6a0b85d84041bac961"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/180.png",revision:"202e3b0b96873f6ec62c3cfb56d2cd31"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/196.png",revision:"1598deb51bd6fc994ef70c67098a7a7e"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/20.png",revision:"dba032b25d3e36b5224c32e044599572"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/216.png",revision:"c9393a52f41a8d160d9c6d70c7336fec"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/256.png",revision:"6d72cb3dc1ef3017a3f52b246ba532a3"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/29.png",revision:"59ca0ae2acd24ae1f4ce7768cec36bdd"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/32.png",revision:"57db26b21103e86b4354705051bedef8"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/40.png",revision:"359d5052c108fc6a45ce413e9b0dd805"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/48.png",revision:"0096a94087061a08eebd96894a080cd0"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/50.png",revision:"0d9f15cde3dc575346097af93edceb6e"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/512.png",revision:"35ee84e2e20c8c7df11dc058609eca99"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/55.png",revision:"8c875b35d0fb122abada281567a640f7"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/57.png",revision:"68ba8beb63876453638abb96ffca9014"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/58.png",revision:"9533bf5376dbe682e6f45664a34c4baf"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/60.png",revision:"fe7e757cd177c9df3c21715721d0031e"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/64.png",revision:"df55ef9b831d5f8c6fa704b9cf6d94f2"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/72.png",revision:"39b4ea56d4ebf9101fba942bec4d72a2"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/76.png",revision:"004509ee3bc6e8821c994a60f4787dd0"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/80.png",revision:"5cc4d8d610f5ef983fa6a69d4f9911ab"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/87.png",revision:"f6452a24259c53e51dce3ab90122b327"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/88.png",revision:"d0d04dbc02f9832d9bad10a4f6f13075"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/Contents.json",revision:"b0acb7355194b055decf0c9d45619bc7"},{url:"/AppIcons/Assets.xcassets/AppIcon.appiconset/maskable.png",revision:"1598deb51bd6fc994ef70c67098a7a7e"},{url:"/AppIcons/android/mipmap-hdpi/devilon.png",revision:"5521c2d3736f0b7cd4369050acfe3d88"},{url:"/AppIcons/android/mipmap-mdpi/devilon.png",revision:"d21611708e2faaadccae4c0161d714d2"},{url:"/AppIcons/android/mipmap-xhdpi/devilon.png",revision:"d877e9e3389824055071dbf4b55a4976"},{url:"/AppIcons/android/mipmap-xxhdpi/devilon.png",revision:"cf183a29e50b35b0ae0461ce80b3a588"},{url:"/AppIcons/android/mipmap-xxxhdpi/devilon.png",revision:"f7ab705a631b77771c6b32c96d4ead0d"},{url:"/AppIcons/appstore.png",revision:"b95218f476e101233ca8668360c9f9db"},{url:"/AppIcons/playstore.png",revision:"9f42bd2bf64be5dbb151812f716cbda8"},{url:"/_next/static/NDvR_suGDcvtOqKTrYAh1/_buildManifest.js",revision:"5bb9402c1859f558a911f49031dbc665"},{url:"/_next/static/NDvR_suGDcvtOqKTrYAh1/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/NDvR_suGDcvtOqKTrYAh1/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0c428ae2-c1135d4c5cac9d1a.js",revision:"c1135d4c5cac9d1a"},{url:"/_next/static/chunks/675-29f7c26d0208341f.js",revision:"29f7c26d0208341f"},{url:"/_next/static/chunks/768-bb92a35f5f40c0c2.js",revision:"bb92a35f5f40c0c2"},{url:"/_next/static/chunks/894.884bc9854a9cfe85.js",revision:"884bc9854a9cfe85"},{url:"/_next/static/chunks/977-8a9a718c8c018cef.js",revision:"8a9a718c8c018cef"},{url:"/_next/static/chunks/996-5dda03bc010437df.js",revision:"5dda03bc010437df"},{url:"/_next/static/chunks/framework-a87821de553db91d.js",revision:"a87821de553db91d"},{url:"/_next/static/chunks/main-21fbc9a5ad2df4ee.js",revision:"21fbc9a5ad2df4ee"},{url:"/_next/static/chunks/pages/_app-2d93a29d74523a3b.js",revision:"2d93a29d74523a3b"},{url:"/_next/static/chunks/pages/_error-777a5f0e462a9bdf.js",revision:"777a5f0e462a9bdf"},{url:"/_next/static/chunks/pages/_offline-8392750cdb61a556.js",revision:"8392750cdb61a556"},{url:"/_next/static/chunks/pages/blog/%5Bid%5D-966bba74197b808c.js",revision:"966bba74197b808c"},{url:"/_next/static/chunks/pages/category/css-d6e91041fea118a1.js",revision:"d6e91041fea118a1"},{url:"/_next/static/chunks/pages/category/git-923ddfb94488d017.js",revision:"923ddfb94488d017"},{url:"/_next/static/chunks/pages/category/html-0323c93181cd6218.js",revision:"0323c93181cd6218"},{url:"/_next/static/chunks/pages/category/javascript-de58e26fcc423d68.js",revision:"de58e26fcc423d68"},{url:"/_next/static/chunks/pages/category/js-frameworks-301ffea48beffa8b.js",revision:"301ffea48beffa8b"},{url:"/_next/static/chunks/pages/category/python-142172f1e496d716.js",revision:"142172f1e496d716"},{url:"/_next/static/chunks/pages/get-in-touch-ee08c08169f5adab.js",revision:"ee08c08169f5adab"},{url:"/_next/static/chunks/pages/index-84c001de7f26f510.js",revision:"84c001de7f26f510"},{url:"/_next/static/chunks/pages/learn-3cd9b4614937db28.js",revision:"3cd9b4614937db28"},{url:"/_next/static/chunks/pages/learn/%5Bslug%5D-3b3274d491ce097e.js",revision:"3b3274d491ce097e"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-726e5955142d1670.js",revision:"726e5955142d1670"},{url:"/_next/static/css/3d44b450e4e47617.css",revision:"3d44b450e4e47617"},{url:"/_next/static/css/630d91b2b02e9537.css",revision:"630d91b2b02e9537"},{url:"/_next/static/css/660deeea23830877.css",revision:"660deeea23830877"},{url:"/_next/static/css/7533e0aa26dd481f.css",revision:"7533e0aa26dd481f"},{url:"/_next/static/css/8fa37ba66abe32b5.css",revision:"8fa37ba66abe32b5"},{url:"/_next/static/css/bc239db5e4fa6a52.css",revision:"bc239db5e4fa6a52"},{url:"/_next/static/css/d593bb26fedf9564.css",revision:"d593bb26fedf9564"},{url:"/_next/static/css/f3b4ea835c73bc65.css",revision:"f3b4ea835c73bc65"},{url:"/_offline",revision:"NDvR_suGDcvtOqKTrYAh1"},{url:"/bmc_icon_black.png",revision:"b17d911018bce798dec5ca87436f65bc"},{url:"/manifest.json",revision:"69bb04d2e0b68deb7e1716d2defd04ea"},{url:"/robots.txt",revision:"5dc97212a763327d572784e040c00ba4"},{url:"/sitemap-0.xml",revision:"e8b0ee9e03a75f0332fd76de58d8fdc4"},{url:"/sitemap.xml",revision:"de1f788c5d7568275a3722f8f0bec55b"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),s.cleanupOutdatedCaches(),s.registerRoute("/",new s.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:s,response:e,event:c,state:n})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e},{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new s.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new s.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new s.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute(/\/_next\/image\?url=.+$/i,new s.StaleWhileRevalidate({cacheName:"next-image",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute(/\.(?:mp3|wav|ogg)$/i,new s.CacheFirst({cacheName:"static-audio-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute(/\.(?:mp4)$/i,new s.CacheFirst({cacheName:"static-video-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute(/\.(?:js)$/i,new s.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute(/\.(?:css|less)$/i,new s.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new s.StaleWhileRevalidate({cacheName:"next-data",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute(/\.(?:json|xml|csv)$/i,new s.NetworkFirst({cacheName:"static-data-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;const e=s.pathname;return!e.startsWith("/api/auth/")&&!!e.startsWith("/api/")}),new s.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;return!s.pathname.startsWith("/api/")}),new s.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET"),s.registerRoute((({url:s})=>!(self.origin===s.origin)),new s.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:s})=>self.fallback(s)}]}),"GET")}));
