const cacheKey = "pwa-cache-v1";
var urlsToCache = [
  "/",
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
  "https://fonts.googleapis.com/css2?family=Allerta&family=Archivo:wght@500;700&display=swap"
];

self.addEventListener("install", (e) => {
  e.waitUntill(
    caches.open(cacheKey).then((cache) => {
      console.log("cache opened");
      return cache.addAll(urlsToCache);
    })
  );
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

  e.waitUntill(
    caches.keys().then((names) => {
      return Promise.all((name) => {
        if (cacheList.indexOf(name) == -1) {
          caches.delete(name);
        }
      });
    })
  );
});
