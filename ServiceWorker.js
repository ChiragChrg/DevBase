const CacheName = "V-1.0";
const CacheList = [
  "/",
  "assets/Coder.png",
  "assets/favicon.png",
  "assets/nuklearbrain.svg",
  "assets/fonts/quicksand-v28-latin-regular.eot",
  "assets/fonts/quicksand-v28-latin-regular.svg",
  "assets/fonts/quicksand-v28-latin-regular.ttf",
  "assets/fonts/quicksand-v28-latin-regular.woff",
  "assets/fonts/quicksand-v28-latin-regular.woff2",
  "css/about.css",
  "css/style.css",
  "/css/Mobile/mobile.css",
  "/js/app.js",
  "/js/icon.js",
  "/PWA/offline.html",
  "/PWA/PWA.js",
  "/PWA/icons/48.png",
  "/PWA/icons/72.png",
  "/PWA/icons/96.png",
  "/PWA/icons/128.png",
  "/PWA/icons/144.png",
  "/PWA/icons/192.png",
  "/PWA/icons/384.png",
  "/PWA/icons/512.png",
  "index.html",
  "about.html",
  "manifest.json",
  "ServiceWorker.js",
];

//Installing Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CacheName).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(CacheList);
    })
  );
});

//Fetching Service Worker
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).catch(() => caches.match("/PWA/offline.html"))
      );
    })
  );
});

//Activating Service Worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (CacheName !== cacheName) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// const OFFLINE_VERSION = 1;
// const CACHE_NAME = "V-1.0";
// const OFFLINE_URL = "offline.html";

// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     (async () => {
//       const cache = await caches.open(CACHE_NAME);
//       await cache.add(new Request(OFFLINE_URL, { cache: "reload" }));
//     })()
//   );
//   console.log(`Installing service worker`);
//   self.skipWaiting();
// });

// self.addEventListener("activate", (event) => {
//   event.waitUntil(
//     (async () => {
//       if ("navigationPreload" in self.registration) {
//         await self.registration.navigationPreload.enable();
//       }
//     })()
//   );
//   console.log(`Activating service worker`);
//   self.clients.claim();
// });

// self.addEventListener("fetch", (event) => {
//   if (event.request.mode === "navigate") {
//     event.respondWith(
//       (async () => {
//         try {
//           const preloadResponse = await event.preloadResponse;
//           if (preloadResponse) {
//             return preloadResponse;
//           }

//           const networkResponse = await fetch(event.request);
//           return networkResponse;
//         } catch (error) {
//           console.log("Fetch failed; returning offline page instead.", error);

//           const cache = await caches.open(CACHE_NAME);
//           const cachedResponse = await cache.match(OFFLINE_URL);
//           return cachedResponse;
//         }
//       })()
//     );
//     console.log(`Fetching service worker`);
//   }
// });

// self.addEventListener("install", () => {
//   // console.log(`Installing service worker`);
// });

// self.addEventListener("activate", () => {
//   // console.log(`Activating service worker`);
// });

// self.addEventListener("fetch", (event) => {
//   // console.log(`fetching...${event.request.url}`);
// });
