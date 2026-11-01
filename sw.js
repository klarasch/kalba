// Offline cache. Bump VERSION when files change.
const VERSION = 'pb-v20';
const FILES = [
  './', 'index.html', 'style.css', 'app.js', 'manifest.webmanifest',
  'data/gap-cs.js', 'data/gap-en.js', 'data/vabank-cs.js', 'data/vabank-en.js', 'data/index.txt',
  'data/decks/cs/osobnosti.txt',
  'data/decks/cs/postavy.txt',
  'data/decks/cs/filmy.txt',
  'data/decks/cs/mista.txt',
  'data/decks/cs/realie.txt',
  'data/decks/cs/svet.txt',
  'data/decks/cs/veci.txt',
  'data/decks/cs/zvirata-jidlo.txt',
  'data/decks/cs/povolani-cinnosti.txt',
  'data/decks/en/celebs.txt',
  'data/decks/en/characters.txt',
  'data/decks/en/titles.txt',
  'data/decks/en/places.txt',
  'data/decks/en/things.txt',
  'data/decks/en/animals-food.txt',
  'data/decks/en/actions.txt',
  'data/names/cs.txt', 'data/names/en.txt',
  'data/bomb/cs.txt',
  'data/bomb/en.txt',
  'games/fishbowl.js', 'games/impostor.js', 'games/bomb.js', 'games/guess.js', 'games/gap.js', 'games/vabank.js', 'games/hint.js',
  'fonts/bricolage-latin.woff2', 'fonts/bricolage-latin-ext.woff2', 'fonts/figtree-latin.woff2', 'fonts/figtree-latin-ext.woff2',
  'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png',
];
self.addEventListener('install', (e) => {
  // Also cache every file listed in data/index.txt, so a new deck file works offline without touching this list.
  const extra = (c) => fetch('data/index.txt', { cache: 'no-cache' }).then((r) => r.text()).then((txt) =>
    c.addAll(txt.split(/\r?\n/).map((l) => l.trim()).filter((l) => l && !l.startsWith('//')).map((l) => 'data/' + l))).catch(() => {});
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES).then(() => extra(c))).then(() => self.skipWaiting()));
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
