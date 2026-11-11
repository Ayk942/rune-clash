// Rune Clash 3D : fonctionne hors ligne après la première ouverture
const V = 'rune-clash-mwbyhwqs';
const CORE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png', './favicon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET') return;
  const u = new URL(r.url);
  // le serveur du jeu (Firebase) passe toujours par le réseau ; seuls le jeu, les polices et la bibliothèque Firebase sont mis en cache
  if (u.origin !== location.origin && !/^(fonts.googleapis.com|fonts.gstatic.com|www.gstatic.com)$/.test(u.hostname)) return;
  if (u.pathname.endsWith('/version.json')) return; // toujours le réseau : sert à détecter une nouvelle version
  if (u.pathname.endsWith('/config.js')) { e.respondWith(fetch(r).then(res => { const cp = res.clone(); caches.open(V).then(c => c.put(r, cp)); return res; }).catch(() => caches.match(r))); return; }
  if (r.mode === 'navigate') { e.respondWith(fetch(r).then(res => { const cp = res.clone(); caches.open(V).then(c => c.put('./index.html', cp)); return res; }).catch(() => caches.match('./index.html'))); return; }
  e.respondWith(caches.match(r).then(hit => hit || fetch(r).then(res => { if (res && (res.ok || res.type === 'opaque')) { const cp = res.clone(); caches.open(V).then(c => c.put(r, cp)); } return res; })));
});
