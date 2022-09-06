const CacheName = "V-3.1";
const CacheList = [
  "/",
  "css/about.css",
  "css/style.css",
  "/css/Mobile/mobile.css",
  "/js/app.js",
  "/js/icon.js",
  "index.html",
  "about.html",
  "manifest.json",
];

// "/PWA/offline.html",
// "/PWA/PWA.js",
// "ServiceWorker.js",
// "assets/Coder.webp",
// "assets/favicon.webp",
// "assets/nuklearbrain.svg",
// "/PWA/icons/48.png",
// "/PWA/icons/72.png",
// "/PWA/icons/96.png",
// "/PWA/icons/128.png",
// "/PWA/icons/144.png",
// "/PWA/icons/192.png",
// "/PWA/icons/384.png",
// "/PWA/icons/512.png",
// "assets/fonts/quicksand-v28-latin-regular.eot",
// "assets/fonts/quicksand-v28-latin-regular.svg",
// "assets/fonts/quicksand-v28-latin-regular.ttf",
// "assets/fonts/quicksand-v28-latin-regular.woff",
// "assets/fonts/quicksand-v28-latin-regular.woff2",

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
 // Prev Cache deleted on PWA.js  
});
