// Mobile Nav bar
function openNav() {
  document.getElementById("sidepanel").style.width = "50%";
  document.querySelector("body").style.overflow = "hidden";
}

function closeNav() {
  document.getElementById("sidepanel").style.width = "0%";
  document.querySelector("body").style.overflow = "auto";
}

//Check previous Theme on load
window.onload = () => {
  let ToggleHolder = document.querySelector(".toggleHolder");
  let Toggle = document.querySelector("#toggle");
  let Body = document.querySelector("body");

  const currentTheme = localStorage.getItem("myTheme")
    ? localStorage.getItem("myTheme")
    : null;

  if (currentTheme) {
    Body.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
      Toggle.className = "fad fa-lightbulb-on fa-2x";
      ToggleHolder.title = "Turn On Light Mode";
    } else {
      Toggle.className = "fad fa-lightbulb fa-2x";
      ToggleHolder.title = "Turn On Dark Mode";
    }
  }
};

//Toggle Dark Mode
const changeTheme = () => {
  let ToggleHolder = document.querySelector(".toggleHolder");
  let Toggle = document.querySelector("#toggle");
  let Body = document.querySelector("body");
  var DataTheme = Body.getAttribute("data-theme");

  if (DataTheme === "light") {
    Body.setAttribute("data-theme", "dark");
    Toggle.className = "fad fa-lightbulb-on fa-2x";
    ToggleHolder.title = "Turn On Light Mode";
    localStorage.setItem("myTheme", "dark");
  } else {
    Body.setAttribute("data-theme", "light");
    Toggle.className = "fad fa-lightbulb fa-2x";
    ToggleHolder.title = "Turn On Dark Mode";
    localStorage.setItem("myTheme", "light");
  }
};

//Check ONline Status
// window.addEventListener("load", () => {
//   const CacheName = "V-1.0";
//   var online = navigator.onLine;
//   if (online) {
//     console.log("Online");
//   } else {
//     console.log("Offline");
//     caches.delete(CacheName);
//   }
// });
