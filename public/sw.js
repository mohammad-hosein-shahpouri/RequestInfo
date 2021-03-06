const cacheKey = "pwa-cache-v1.0.1";
var urlsToCache = [
    "/RequestInfo/",
    "/RequestInfo/index.html",
    "/RequestInfo/styles.compiled.css",
    "/RequestInfo/assets/styles.compiled.css.gz",
    "/RequestInfo/manifest.json",
    "/RequestInfo/favicon.svg",
    "/RequestInfo/earth-dark.svg",
    "/RequestInfo/earth-light.svg",
    "/RequestInfo/assets/index.5f014e0e.js",
    "/RequestInfo/assets/index.5f014e0e.js.gz",
    "/RequestInfo/assets/index.d8313b66.css",
    "/RequestInfo/assets/index.d8313b66.css.gz",
];

self.addEventListener("install", (e) => {
    const preCache = async() => {
        const cache = await caches.open(cacheKey);
        return cache.addAll(urlsToCache);
    };

    e.waitUntil(caches.open(cacheKey).then((c) => c.addAll(urlsToCache)));
});

self.addEventListener("fetch", (event) => {
    let url = event.request.url.indexOf(self.location.origin) !== -1 ?
        event.request.url.split(`${self.location.origin}/`)[1] : event.request.url;

    let isFileCached = urlsToCache.indexOf(url) !== -1;

    if (isFileCached) {
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
    }

    e.respondWith(
        (async function() {
            const cache = await caches.open(cacheKey);
            const cachedResponse = await cache.match(e.request);
            if (cachedResponse) {
                e.waitUntil(cache.add(e.request));
                return cachedResponse;
            }
            return fetch(e.request);
        })()
    );
});

self.addEventListener("activate", (e) => {
    var cacheList = [cacheKey];

    const updateCache = async() => {
        var cacheKeys = await caches.keys();
        return cacheKeys.map((key) => {
            if (cacheList.indexOf(key) == -1) return caches.delete(key);
        });
    };

    e.waitUntil(
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
});