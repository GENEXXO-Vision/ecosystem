/* GENEXXO PWA service worker — Tier B, NETWORK-FIRST app shell (2026-08-01).
   ▸ WHY network-first (NOT cache-first): a cache-first SW previously HID updates. Here the
     HTML document is fetched from the NETWORK first every time we're online, so the newest
     build always loads; the cached copy is only a FALLBACK for when the device is offline.
   ▸ version.json is deliberately NOT cached here — it must always hit the network (it's the
     freshness probe the in-app update banner reads). Cross-origin requests pass straight through.
   Only the mobile shell (genexxo-mobile.html) is cached, purely so the app opens offline.
   ▸ v2 FIX (2026-08-01): plain fetch(req) in a "network-first" SW STILL reads the browser
     HTTP cache (max-age=600) — so for up to 10 min it re-served a STALE pre-build HTML while
     version.json (fresh) reported the new build → the in-app update banner kept re-appearing
     on random reopens. The document fetch now uses {cache:'no-cache'} so it ALWAYS revalidates
     with the origin (304 = cheap when unchanged, full fetch when changed) → the running shell
     is always the true latest, and the banner can no longer fire spuriously. CACHE bumped to
     v2 so any poisoned v1 shell (cached from a briefly-inconsistent edge at install) is dropped.
   ▸ v3 MEDIA CACHE (2026-08-04): feed videos previously relied on the browser HTTP cache
     alone (max-age=600), so ~10 min after a visit EVERY clip re-downloaded from the network —
     the "top videos take 15s to start" stall. Clips are now cached here CACHE-FIRST with
     proper 206/Range slicing (iOS Safari refuses video from a SW unless Range requests get
     real 206 responses). Freshness is preserved the GENEXXO way — a cached clip is served
     instantly, then silently REVALIDATED in the background (ETag → 304 = a few bytes, changed
     file = re-download), so a re-uploaded clip at the same path shows up on the NEXT view.
     This is deliberately not the jsDelivr trap: nothing is pinned for days. */
const CACHE = 'genexxo-shell-v2';
const MEDIA = 'genexxo-media-v1';
const SHELL = 'genexxo-mobile.html';

self.addEventListener('install', (e) => {
  self.skipWaiting();                                            // new SW takes over asap
  e.waitUntil(caches.open(CACHE).then(c => c.add(SHELL)).catch(() => {}));
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE && k !== MEDIA).map(k => caches.delete(k)));   // drop old caches
    await self.clients.claim();
  })());
});

/* One background revalidation per clip per SW lifetime (the SW restarts often on mobile, so
   in practice ≈ per session) — Safari fires SEVERAL Range requests per play and each one
   must NOT trigger its own conditional fetch. */
const _revalidated = new Set();
function revalidateMedia(url) {
  if (_revalidated.has(url)) return Promise.resolve();
  _revalidated.add(url);
  return fetch(url, { cache: 'no-cache' })                       // If-None-Match → 304 when unchanged
    .then(async (net) => {
      if (net && net.ok && net.status === 200) {                 // 200 = the clip really changed
        (await caches.open(MEDIA)).put(url, net);
      }
    }).catch(() => {});
}

async function serveMedia(e) {
  const req = e.request;
  const cache = await caches.open(MEDIA);
  let res = await cache.match(req.url);
  if (res) {
    e.waitUntil(revalidateMedia(req.url));                       // instant play now, fresh next view
  } else {
    let net;
    try { net = await fetch(req.url); } catch (_) { return Response.error(); }   // fetch WITHOUT the Range header → full 200 we can cache
    if (!(net && net.ok && net.status === 200)) return net;      // odd response → pass straight through
    await cache.put(req.url, net.clone());
    res = net;
  }
  const range = req.headers.get('range');
  if (!range) return res;
  // Slice the cached full body into a real 206 — required for iOS Safari playback.
  const buf = await res.arrayBuffer();
  const m = /bytes=(\d+)-(\d*)/.exec(range);
  const start = m ? +m[1] : 0;
  const end = (m && m[2]) ? Math.min(+m[2], buf.byteLength - 1) : buf.byteLength - 1;
  if (start >= buf.byteLength) {
    return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${buf.byteLength}` } });
  }
  return new Response(buf.slice(start, end + 1), {
    status: 206, statusText: 'Partial Content',
    headers: {
      'Content-Type': res.headers.get('Content-Type') || 'video/mp4',
      'Content-Range': `bytes ${start}-${end}/${buf.byteLength}`,
      'Content-Length': String(end - start + 1),
      'Accept-Ranges': 'bytes',
    }
  });
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  let url;
  try { url = new URL(req.url); } catch (_) { return; }
  if (url.origin !== self.location.origin) return;              // CDN stills etc. → untouched
  if (url.pathname.endsWith('/version.json')) return;           // freshness probe → always network
  if (/\.(mp4|webm|mov|m4v)$/i.test(url.pathname)) { e.respondWith(serveMedia(e)); return; }   // clips → media cache

  const isDoc = req.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname.endsWith('/');
  if (!isDoc) { e.respondWith(fetch(req).catch(() => caches.match(req))); return; }

  const isShell = url.pathname.endsWith('/genexxo-mobile.html');
  e.respondWith((async () => {
    try {
      // {cache:'no-cache'} = ALWAYS revalidate with origin, never trust the stale HTTP cache.
      const net = await fetch(req.url, { cache: 'no-cache' });   // NETWORK FIRST (truly fresh)
      if (isShell && net && net.ok) { (await caches.open(CACHE)).put(SHELL, net.clone()); }
      return net;
    } catch (_) {
      return (await caches.match(SHELL)) || (await caches.match(req)) || Response.error();
    }
  })());
});
