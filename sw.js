/* GENEXXO PWA service worker — Tier B, NETWORK-FIRST app shell (2026-08-01).
   ▸ WHY network-first (NOT cache-first): a cache-first SW previously HID updates. Here the
     HTML document is fetched from the NETWORK first every time we're online, so the newest
     build always loads; the cached copy is only a FALLBACK for when the device is offline.
   ▸ version.json and media (*.mp4 …) are deliberately NOT cached here — version.json must
     always hit the network (it's the freshness probe the in-app update banner reads), and
     the browser HTTP cache handles big media. Cross-origin requests pass straight through.
   Only the mobile shell (genexxo-mobile.html) is cached, purely so the app opens offline. */
const CACHE = 'genexxo-shell-v1';
const SHELL = 'genexxo-mobile.html';

self.addEventListener('install', (e) => {
  self.skipWaiting();                                            // new SW takes over asap
  e.waitUntil(caches.open(CACHE).then(c => c.add(SHELL)).catch(() => {}));
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));   // drop old shells
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  let url;
  try { url = new URL(req.url); } catch (_) { return; }
  if (url.origin !== self.location.origin) return;              // CDN stills etc. → untouched
  if (url.pathname.endsWith('/version.json')) return;           // freshness probe → always network
  if (/\.(mp4|webm|mov|m4v)$/i.test(url.pathname)) return;      // big media → browser HTTP cache

  const isDoc = req.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname.endsWith('/');
  if (!isDoc) { e.respondWith(fetch(req).catch(() => caches.match(req))); return; }

  const isShell = url.pathname.endsWith('/genexxo-mobile.html');
  e.respondWith((async () => {
    try {
      const net = await fetch(req);                             // NETWORK FIRST
      if (isShell && net && net.ok) { (await caches.open(CACHE)).put(SHELL, net.clone()); }
      return net;
    } catch (_) {
      return (await caches.match(SHELL)) || (await caches.match(req)) || Response.error();
    }
  })());
});
