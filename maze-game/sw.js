self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('maze-cache-v4').then((cache) => {
      return cache.addAll([
        './index.html',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});