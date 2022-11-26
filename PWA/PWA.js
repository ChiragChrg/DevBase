// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker
//       .register("ServiceWorker.js")
//       .then(console.log(`Service Worker Registered Successfully! `))
//       .catch((err) => {
//         console.log(`Error registring ${err}`);
//       });
//   });
// } else {
//   console.log(`Service Worker is not supported in this browser.`);
// }

// window.isUpdateAvailable = new Promise(function(resolve, reject) {
//   // lazy way of disabling service workers while developing
//   if ('serviceWorker' in navigator && ['localhost', '127'].indexOf(location.hostname) === -1) {
//     // register service worker file
//     navigator.serviceWorker.register('ServiceWorker.js')
//       .then(reg => {
//         reg.onupdatefound = () => {
//           const installingWorker = reg.installing;
//           installingWorker.onstatechange = () => {
//             switch (installingWorker.state) {
//               case 'installed':
//                 if (navigator.serviceWorker.controller) {
//                   // new update available
//                   resolve(true);
//                 } else {
//                   // no update available
//                   resolve(false);
//                 }
//                 break;
//             }
//           };
//         };
//       })
//       .catch(err => console.error('[SW ERROR]', err));

//     //Delete Previous Cache
//     caches.keys().then(function(cacheNames) {
//       let currentCache = cacheNames[cacheNames.length - 1];
//       // console.log(cacheNames.length);  
//       // console.log("Current : ",currentCache);

//       cacheNames.filter(itm => {
//         if (itm !== currentCache) {
//             // console.log("Deleteing : ",itm);
//           caches.delete(itm);
//         }
//       })
//     });
//   }
// });

// window["isUpdateAvailable"]
//   .then((isUpdateAvailable) => {
//     if (isUpdateAvailable) {
//       // console.log("Update Available");
//       window.location.reload();
//     }
//   })
//   .catch((err) => {
//     console.error(err);
//   }
// );

const buttonHolder = document.querySelector(".pwaButtonHolder");
//BeforeInstallPromptEvent
let deferredPrompt;
self.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  buttonHolder.style.display = "flex";
});

//On Install Button Click
const installButton = document.querySelector(".pwaButtonHolder .pwaButton");
installButton.addEventListener("click", async () => {
  if (deferredPrompt) {
    buttonHolder.style.display = "none";
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    deferredPrompt = null;
  } else {
    alert("Prompt Failed");
  }
});

//Check App Installed
self.addEventListener("appinstalled", () => {
  deferredPrompt = null;
  console.log("PWA was installed");
});

//Hide PWA Button if already installed
if (
  window.matchMedia("(display-mode: standalone)").matches ||
  window.navigator.standalone === true
) {
  buttonHolder.style.display = "none";
}

//Close Button PWA
function closePWA() {
  buttonHolder.style.display = "none";
}
