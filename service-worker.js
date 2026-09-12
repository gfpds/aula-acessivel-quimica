const CACHE = "aula-acessivel-v7";

const FILES = [
  "./",
  "./index.html",
  "./smart.html",
  "./styles.css",
  "./app.js",
  "./manifest.json",
  "./assets/icon.svg"
];

self.addEventListener("install", event => {
  self.skipWaiting();

  event.waitUntil(
    caches
      .open(CACHE)
      .then(cache => cache.addAll(FILES))
      .catch(() => {})
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys =>
        Promise.all(
          keys
            .filter(key => key !== CACHE)
            .map(key => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;

  if (request.method !== "GET") return;

  event.respondWith(
    fetch(request)
      .then(response => {
        const copy = response.clone();

        caches
          .open(CACHE)
          .then(cache => cache.put(request, copy));

        return response;
      })
      .catch(() => caches.match(request))
  );
});
