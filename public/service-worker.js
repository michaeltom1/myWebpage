const CACHE_NAME = "mywebpage-cache-v1";
const METADATA = "mywebpage-cache-metadata-v1";
const OFFLINE_URL = "/offline.html";
// Time to keep cached entries before considered stale (ms). Increased to 90 days.
const CACHE_TTL = 90 * 24 * 60 * 60 * 1000; // 90 days

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Cache the offline page and the root so the app shell works offline
      // include explicit '/index.html' in case the server exposes it
      return cache.addAll([OFFLINE_URL, "/", "/index.html"]).then(() => {
        // record timestamps for the pre-cached resources
        return caches.open(METADATA).then((meta) => {
          const now = Date.now().toString();
          return Promise.all([
            meta.put(new Request(OFFLINE_URL), new Response(now)),
            meta.put(new Request("/"), new Response(now)),
          ]);
        });
      });
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      // delete old caches that don't match current names
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME && key !== METADATA)
          .map((key) => caches.delete(key))
      );
      // perform a sweep of old entries based on metadata TTL
      await cleanOldEntries();
    })()
  );
  self.clients.claim();
});

// Basic runtime caching and navigation fallback
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Only handle GET requests
  if (request.method !== "GET") return;

  // Navigation requests (HTML) -> network-first, fallback to cache/offline
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Put a copy in the cache
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          // record metadata timestamp
          caches
            .open(METADATA)
            .then((meta) =>
              meta.put(request, new Response(String(Date.now())))
            );
          return response;
        })
        .catch(async () => {
          // Try to serve a cached version of the navigation request first
          const cachedRequest = await caches.match(request);
          if (cachedRequest) return cachedRequest;
          // Fallback to the cached root or index.html
          const root =
            (await caches.match("/")) || (await caches.match("/index.html"));
          if (root) return root;
          // fallback to offline page
          return caches.match(OFFLINE_URL);
        })
    );
    return;
  }

  // For other requests: try cache first, then network, then nothing
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request)
        .then((response) => {
          // cache fetched assets for future
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          // record timestamp for this cached resource
          caches.open(METADATA).then((meta) => {
            try {
              meta.put(request, new Response(String(Date.now())));
            } catch (e) {
              // ignore metadata errors
            }
          });
          return response;
        })
        .catch(() => {
          // if request is for an image, optionally return a placeholder
          if (request.destination === "image") {
            return new Response("", { status: 404, statusText: "offline" });
          }
          return null;
        });
    })
  );
});

// Remove cached entries older than CACHE_TTL using metadata timestamps
async function cleanOldEntries() {
  try {
    const meta = await caches.open(METADATA);
    const entries = await meta.keys();
    const now = Date.now();
    await Promise.all(
      entries.map(async (req) => {
        try {
          const res = await meta.match(req);
          if (!res) return;
          const text = await res.text();
          const ts = parseInt(text, 10);
          if (Number.isFinite(ts) && now - ts > CACHE_TTL) {
            // delete from main cache and metadata cache
            await caches.open(CACHE_NAME).then((cache) => cache.delete(req));
            await meta.delete(req);
          }
        } catch (e) {
          // ignore per-entry errors
        }
      })
    );
  } catch (e) {
    // ignore cleanup errors
  }
}
