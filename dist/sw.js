const CACHE = 'cache';
var urls = [
  '/'
];
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE)
      .then(function(cache) {
        // Open a cache and cache our files
        return cache.addAll(urls);
      })
  );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});