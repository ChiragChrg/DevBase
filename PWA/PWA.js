if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/ServiceWorker.js")
      .then((registration) => {
        console.log(`Service Worker Registered Successfully! ${registration}`);
      })
      .catch((err) => {
        console.log(`Error registring ${err}`);
      });
  });
} else {
  console.log(`Service Worker is not supported in this browser.`);
}

//BeforeInstallPromptEvent
let deferredPrompt;
window.addEventListener("beforeinstallprompt", (e) => {
  console.log(e);
  e.preventDefault();
  deferredPrompt = e;
  showInstallButton();
  console.log(`'beforeinstallprompt' event was fired.`);
});

//On Install Button Click
const installButton = document.querySelector(".pwaButton");
installButton.addEventListener("click", async () => {
  // const installPWA = async () => {
  if (deferredPrompt) {
    console.log("clicked");
    console.log(deferredPrompt);
    hideInstallButton();
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    deferredPrompt = null;
  } else {
    alert("Prompt Failed");
  }
});

//Check App Installed
window.addEventListener("appinstalled", () => {
  hideInstallButton();
  deferredPrompt = null;
  console.log("PWA was installed");
});

const buttonHolder = document.querySelector(".pwaButtonHolder");
//Show/Hide Install Promotion
function showInstallButton() {
  buttonHolder.style.display = "flex";
}

function hideInstallButton() {
  buttonHolder.style.display = "none";
}

function closePWA() {
  buttonHolder.style.display = "none";
}
