// public/service-worker.js
self.addEventListener('install', function(event) {
    // Perform install steps
});

self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request)
        .then(function(response) {
                // Cache hit - return the response from the cached version
                if (response) {
                    return response;
                }

                // Not in cache - return the result from the live server
                return fetch(event.request);
            }
        ));
});