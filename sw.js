/* Service worker de "Aprende programación con Yuli".
   Regla: primero internet (así siempre ves la versión más nueva).
   Si no hay internet o tarda mucho, usa la copia guardada en el dispositivo. */
const CACHE = 'yuli-app-v1';
const FONTS = 'yuli-fonts-v1';
const CORE = [
  './', 'index.html', 'manifest.webmanifest', 'logo.webp',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/maskable-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE && k !== FONTS).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function networkFirst(req) {
  return new Promise((resolve) => {
    let done = false;
    const fromCache = () =>
      caches.match(req, { ignoreSearch: true }).then((r) => r || (req.mode === 'navigate' ? caches.match('index.html') : undefined));
    const slow = setTimeout(() => {
      fromCache().then((r) => { if (r && !done) { done = true; resolve(r); } });
    }, 5000);
    fetch(req, { cache: 'no-cache' })
      .then((res) => {
        clearTimeout(slow);
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
        if (!done) { done = true; resolve(res); }
      })
      .catch(() => {
        clearTimeout(slow);
        fromCache().then((r) => { if (!done) { done = true; resolve(r || Response.error()); } });
      });
  });
}

function cacheFirst(req) {
  return caches.match(req).then((hit) => hit || fetch(req).then((res) => {
    if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(FONTS).then((c) => c.put(req, copy)); }
    return res;
  }));
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === self.location.origin) {
    e.respondWith(networkFirst(req));
  } else if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(cacheFirst(req));
  }
});
