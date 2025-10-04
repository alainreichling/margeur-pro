
// SW v6.9.1 — network-first for HTML
const CACHE_NAME = 'margeurpro-v6-9-1';
const ASSETS = [
  './',
  './index.html?v=6.9.1',
  './manifest.webmanifest?v=6.9.1',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable.png'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE_NAME && caches.delete(k)))));
  self.clients.claim();
});
async function networkFirst(req) {
  try {
    const fresh = await fetch(req, { cache: 'no-store' });
    const cache = await caches.open(CACHE_NAME);
    cache.put(req, fresh.clone());
    return fresh;
  } catch (e) {
    const cached = await caches.match(req);
    return cached || Response.error();
  }
}
self.addEventListener('fetch', event => {
  const req = event.request;
  const isHTML = req.mode === 'navigate' || (req.destination === 'document');
  if (isHTML) {
    event.respondWith(networkFirst(req));
  } else {
    event.respondWith(caches.match(req).then(cached => cached || fetch(req)));
  }
});
