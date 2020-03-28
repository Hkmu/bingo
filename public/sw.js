const CACHE = "site-cache";
const CACHE_LIST = ["./global.css", "./build/bundle.css", "./build/bundle.js", "./logo.svg"];

self.addEventListener("install", function(evt) {
  evt.waitUntil(preCache());
});

self.addEventListener("fetch", function(evt) {
  evt.respondWith(fromCache(evt.request));
});

function precache() {
  return caches.open(CACHE).then(function(cache) {
    return cache.addAll(CACHE_LIST);
  });
}

function fromCache(request) {
  return caches.open(CACHE).then(function(cache) {
    return cache.match(request).then(function(matching) {
      if (matching) {
        return matching;
      }
      const req = request.clone();

      return fetch(req).then(function(resp) {
        if (!resp || resp.status !== 200) {
          return resp;
        }

        const respClone = resp.clone();
        caches.open(CACHE).then(function(cache) {
          cache.put(request, respClone);
        });

        return resp;
      });
    });
  });
}
