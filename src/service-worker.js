// importScripts('https://cdn.ampproject.org/sw/amp-sw.js');

// AMP_SW.init({
//     assetCachingOptions: [{
//       regexp: /\.(png|jpg|woff2|woff|css|js)/,
//       cachingStrategy: 'CACHE_FIRST',
//     }],
//     offlinePageOptions: {
//       url: '/offline.html',
//       assets: [],
//     },
//   });

var CACHE_NAME = 'v3';

var REQUIRED_FILES = [
  'index.html',
  'offline.html',
  'coffee-crawl.html'
];


self.addEventListener('install', function(event) {

  var offlineRequest = new Request('offline.html');

  event.waitUntil(caches.open(CACHE_NAME).then(function(cache) {
    console.log('[install] Caches opened, adding core components to cache');
    return cache.addAll(REQUIRED_FILES);
  }).then(function() {
    console.log('[install] All resources cached, good to go');
    return self.skipWaiting();
  }));

  event.waitUntil(fetch(offlineRequest).then(function(response) {
    return caches.open('index').then(function(cache) {
      console.log('[oninstall] Cached offline page', response.url);
      return cache.put(offlineRequest, response);
    });
  }));
});

self.addEventListener('activate', function(event) {
  console.log('[activate] Activating SW');
  console.log('[activate] Claiming SW');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {

  var request = event.request;
  if (request.method === 'GET') {
    event.respondWith(fetch(request).catch(function(error) {
      console.error('[onfetch] Failed. Serving fallback: ', error);
      return caches.open('offline').then(function(cache) {
        return cache.match('offline.html');
      });
    }));
  }
});