const CACHE = 'aula-acessivel-v4';
const FILES = ['./','./index.html','./styles.css','./app.js','./manifest.json','./assets/icon.svg'];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)).catch(()=>{})); });
self.addEventListener('fetch', event => { event.respondWith(caches.match(event.request).then(resp => resp || fetch(event.request))); });
