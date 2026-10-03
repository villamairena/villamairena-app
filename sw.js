// Gemmer appen på telefonen, så den virker uden internet. Hent altid nyeste version først.
const CACHE='villamairena-v17';
const FILES=['./','index.html','manifest.webmanifest','content.js','app.js','icons/icon-192.png','icons/icon-512.png','images/logo-light.png','images/logo-dark.png',
 'images/ext.jpg','images/pool.jpg','images/living.jpg','images/kitchen.jpg','images/bath.jpg','images/closet.jpg',
 'images/r1.jpg','images/r2.jpg','images/r3.jpg','images/r4.jpg','images/r5.jpg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request)));
});
