self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('menonbread-cache-v1').then(cache =>
      cache.addAll([
        '/menonbread',
        '/menonbread/index.html',
        '/menonbread/manifest.json',
        '/menonbread/logo.png'
      ])
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
