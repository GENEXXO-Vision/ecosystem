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
     instantly, then silently REVALIDATED in the background (v4: HEAD + size compare — see
     revalidateMedia), so a re-uploaded clip at the same path shows up on the NEXT view.
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
   must NOT trigger its own fetch.
   ▸ v4 FIX (2026-08-04): the check is a HEAD + Content-Length compare, deliberately NOT a
     conditional GET. GitHub Pages resets last-modified/ETag for EVERY file on EVERY site
     deploy (etag = deploy-time + size), so If-None-Match came back 200 after each deploy and
     every cached clip silently RE-DOWNLOADED IN FULL in the background — with several
     deploys a day the pipe filled with hidden re-pulls of unchanged clips, and whatever the
     user tapped next queued behind them (the "random stickiness"). A HEAD is a few hundred
     bytes; the full re-GET now fires only when the clip really changed (a swapped video
     essentially always changes size). */
const _revalidated = new Set();
function revalidateMedia(url, cachedRes) {
  if (_revalidated.has(url)) return Promise.resolve();
  _revalidated.add(url);
  return (async () => {
    const oldLen = cachedRes && cachedRes.headers.get('content-length');
    if (oldLen) {
      const head = await fetch(url, { method: 'HEAD', cache: 'no-cache' });
      if (head && head.ok && head.headers.get('content-length') === oldLen) return;   // same size = same clip, keep the cache
    }
    const net = await fetch(url, { cache: 'no-cache' });
    if (net && net.ok && net.status === 200) (await caches.open(MEDIA)).put(url, net);
  })().catch(() => {});
}

/* Build a real 206 from an in-memory buffer — required for iOS Safari playback. */
function slice206(buf, range, type) {
  const m = /bytes=(\d+)-(\d*)/.exec(range);
  const start = m ? +m[1] : 0;
  const end = (m && m[2]) ? Math.min(+m[2], buf.byteLength - 1) : buf.byteLength - 1;
  if (start >= buf.byteLength) {
    return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${buf.byteLength}` } });
  }
  return new Response(buf.slice(start, end + 1), {
    status: 206, statusText: 'Partial Content',
    headers: {
      'Content-Type': type || 'video/mp4',
      'Content-Range': `bytes ${start}-${end}/${buf.byteLength}`,
      'Content-Length': String(end - start + 1),
      'Accept-Ranges': 'bytes',
    }
  });
}

async function serveMedia(e) {
  const req = e.request;
  const range = req.headers.get('range');
  const cache = await caches.open(MEDIA);
  const cached = await cache.match(req.url);
  if (cached) {
    e.waitUntil(revalidateMedia(req.url, cached));               // instant play now, fresh next view (headers-only size check)
    if (!range) return cached;
    return slice206(await cached.arrayBuffer(), range, cached.headers.get('Content-Type'));
  }
  /* MISS — v4 STREAMING FIX (2026-08-04): the old path did `await cache.put(...)` before
     responding, which blocks until the ENTIRE clip has downloaded — the player got its
     FIRST byte only after the LAST byte arrived. That was the remaining 10-15s "frozen
     start" on every first visit to a gateway (pre-SW, video streamed progressively and
     started after ~100KB). Now: ONE download, cloned — the clone fills the cache as it
     arrives (background), the original streams to the player immediately. */
  let net;
  try { net = await fetch(req.url); } catch (_) { return Response.error(); }   // fetch WITHOUT the Range header → full 200 we can cache
  if (!(net && net.ok && net.status === 200)) return net;        // odd response → pass straight through
  e.waitUntil(cache.put(req.url, net.clone()).catch(() => {}));  // fills as the download progresses
  if (!net.body) return net;                                     // exotic engine without streams → plain pass-through
  const total = +net.headers.get('content-length') || 0;
  const type = net.headers.get('content-type') || 'video/mp4';
  const m = range && /bytes=(\d+)-(\d*)/.exec(range);
  if (!m) return net;                                            // no Range → stream straight through
  const start = +m[1], boundedEnd = m[2] ? +m[2] : null;
  if (start === 0 && boundedEnd === null && total) {
    // bytes=0- (the normal first request): the whole file as a 206, streamed as it arrives
    return new Response(net.body, { status: 206, statusText: 'Partial Content',
      headers: { 'Content-Type': type, 'Content-Range': `bytes 0-${total - 1}/${total}`,
                 'Content-Length': String(total), 'Accept-Ranges': 'bytes' } });
  }
  if (!total) return net;                                        // can't build a valid 206 without the size
  // Bounded / offset range on a COLD clip (e.g. Safari's 2-byte bytes=0-1 probe): read
  // only what's needed from the live stream, answer, and stop reading this branch — the
  // cache clone keeps downloading to completion regardless.
  const end = Math.min(boundedEnd === null ? total - 1 : boundedEnd, total - 1);
  const reader = net.body.getReader();
  const chunks = []; let got = 0;
  while (got <= end) {
    const r = await reader.read();
    if (r.done) break;
    chunks.push(r.value); got += r.value.byteLength;
  }
  reader.cancel().catch(() => {});
  if (start >= got) return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${total}` } });
  const all = new Uint8Array(got);
  let off = 0; for (const c of chunks) { all.set(c, off); off += c.byteLength; }
  const endGot = Math.min(end, got - 1);
  return new Response(all.buffer.slice(start, endGot + 1), { status: 206, statusText: 'Partial Content',
    headers: { 'Content-Type': type, 'Content-Range': `bytes ${start}-${endGot}/${total}`,
               'Content-Length': String(endGot - start + 1), 'Accept-Ranges': 'bytes' } });
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
