// Offline cache. Bump VERSION when files change.
const VERSION = 'pb-v11';
const FILES = [
  './', 'index.html', 'style.css', 'app.js', 'manifest.webmanifest',
  'data/decks-cs.js', 'data/decks-en.js', 'data/bomb-cs.js', 'data/bomb-en.js', 'data/gap-cs.js', 'data/gap-en.js',
  'games/fishbowl.js', 'games/impostor.js', 'games/bomb.js', 'games/guess.js', 'games/gap.js',
  'fonts/bricolage-latin.woff2', 'fonts/bricolage-latin-ext.woff2', 'fonts/figtree-latin.woff2', 'fonts/figtree-latin-ext.woff2',
  'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png',
];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
// Network first (so updates arrive when online), cache as offline fallback.
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then((r) => {
      const copy = r.clone();
      caches.open(VERSION).then((c) => c.put(e.request, copy));
      return r;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }).then((r) => r || caches.match('index.html')))
  );
});
