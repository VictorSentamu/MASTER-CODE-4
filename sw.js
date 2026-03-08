const CACHE_NAME = "next-laptops-v1";
const ASSETS_TO_CACHE = [
  "./",
  "./next-laptopsug.html",
  // You should list your CSS and JS files here if they are separate
  // "./style.css", 
  // "./script.js"
];

// 1. Install Event: Fired when user visits first time
self.addEventListener("install", (event) => {
  console.log("🛠️ Service Worker Installing...");
  
  // 'waitUntil' ensures installation finishes before worker activates
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("🛠️ Caching files...");
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 2. Fetch Event: Fired every time user clicks a link
self.addEventListener("fetch", (event) => {
  // Don't intercept non-GET requests (like POST to WhatsApp)
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      // 3. Check if file is in Cache (Offline?)
      return cache.match(event.request).then((cachedResponse) => {
        
        // 4. STRATEGY: Cache First (Offline First)
        if (cachedResponse) {
          console.log("📦 Serving from Cache:", event.request.url);
          return cachedResponse; // Show Offline Version
        }

        // 5. If not in cache, fetch from Internet
        console.log("🌐 Fetching from Network:", event.request.url);
        return fetch(event.request).then((networkResponse) => {
          // Save new version to cache for next time
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
    })
  );
});

// 6. Activate Event: Clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => {
            return cacheName !== CACHE_NAME;
          })
          .map((cacheName) => {
            console.log("🧹 Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          })
      );
    })
  );
});