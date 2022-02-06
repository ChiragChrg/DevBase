// const OFFLINE_VERSION = 1;
// const CACHE_NAME = "offline";
// const OFFLINE_URL = "/PWA/offline.html";

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

self.addEventListener("install", () => {
  // console.log(`Installing service worker`);
});

self.addEventListener("activate", () => {
  // console.log(`Activating service worker`);
});

self.addEventListener("fetch", (event) => {
  // console.log(`fetching...${event.request.url}`);
});
