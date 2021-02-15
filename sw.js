var cacheName = 'hello-pwa';
var filesToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(cacheName)
      .then(function (cache) {
        return cache.addAll(filesToCache);
      })
      .catch(function (error) {
        console.log('Cache failed, error:', error);
      })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request)
      .then(function (response) {
        return response || fetch(e.request);
      })
      .catch(function (error) {
        console.log("fetch failed:", error)
      })

  );
});