const cacheKey = "pwa-cache-v1";
var urlsToCache = [
  "/RequestInfo",
  "/RequestInfo/index.html",
  "/RequestInfo/styles.css",
  "/RequestInfo/manifest.json",
  "/RequestInfo/favicon.svg",
  "/RequestInfo/earth-dark.svg",
  "/RequestInfo/earth-light.svg",
  "/RequestInfo/static/js/2.43a1e59c.chunk.js",
  "/RequestInfo/static/js/main.c36798b4.chunk.js",
  "/RequestInfo/static/css/2.9d3f7eb1.chunk.css",
  //Font
  "https://fonts.googleapis.com/css2?family=Allerta&family=Archivo:wght@500;700&display=swap",
];

self.addEventListener("install", (e) => {
  const preCache = async () => {
    const cache = await caches.open(cacheKey);
    return cache.addAll(urlsToCache);
  };

  e.waitUntil(preCache());
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((respose) => {
      if (respose) return respose;
      return fetch(e.request);
    })
  );
});

self.addEventListener("activate", (e) => {
  var cacheList = [cacheKey];

  const updateCache = async () => {
    var cacheKeys = await caches.keys();
    return cacheKeys.map((key) => {
      if (cacheList.indexOf(key) == -1) return caches.delete(key);
    });
  };

  e.waitUntil(updateCache());
});