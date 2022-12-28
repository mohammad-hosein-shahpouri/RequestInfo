const cacheKey = "pwa-cache-v1.0.2-beta";
var urlsToCache = [
    "/RequestInfo/",
    "/RequestInfo/index.html",
    "/RequestInfo/manifest.json",
    "/RequestInfo/favicon.svg",
    "/RequestInfo/earth-dark.svg",
    "/RequestInfo/earth-light.svg",
    "/RequestInfo/assets/index.2b9d8401.css",
    "/RequestInfo/assets/index.2b9d8401.css.gz",
    "/RequestInfo/assets/index.98d6193c.js",
    "/RequestInfo/assets/index.98d6193c.js.gz",
];

self.addEventListener("install", function(event) {
    const preCache = async() => {
        const cache = await caches.open(cacheKey);
        return cache.addAll(urlsToCache);
    };
    event.waitUntil(preCache());
})

self.addEventListener("fetch", function(event) {
    let url = event.request.url.indexOf(self.location.origin) !== -1 ?
        event.request.url.split(`${self.location.origin}/`)[1] : event.request.url;

    let isFileCached = urlsToCache.indexOf(url) !== -1;
    if (isFileCached)
        event.respondWith(
            caches
            .open(cacheKey)
            .then((cache) => {
                return cache.match(url).then((response) => {
                    if (response) {
                        return response;
                    }
                    throw Error("There is not response for such request", url);
                });
            })
            .catch((error) => {
                return fetch(event.request);
            })
        );

    event.respondWith(
        (async function() {
            const cache = await caches.open(cacheKey);
            const cachedResponse = await cache.match(event.request);
            if (cachedResponse) {
                event.waitUntil(cache.add(event.request));
                return cachedResponse;
            }
            return fetch(event.request);
        })()
    );


})

self.addEventListener("activate", function(event) {

    var cacheList = [cacheKey];

    const updateCache = async() => {
        var cacheKeys = await caches.keys();
        return cacheKeys.map((key) => {
            if (cacheList.indexOf(key) == -1) return caches.delete(key);
        });
    };

    event.waitUntil(
        caches
        .open(cacheKey)
        .then((cache) => {
            return cache.keys().then((cacheNames) => {
                return Promise.all(
                    cacheNames
                    .filter((name) => urlsToCache.indexOf(name) === -1)
                    .map((name) => caches.delete(name))
                );
            });
        })
        .then(() => {
            return self.clients.claim();
        })
    );
})
