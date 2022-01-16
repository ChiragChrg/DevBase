// Mobile Nav bar
function openNav() {
  document.getElementById("sidepanel").style.width = "50%";
}

function closeNav() {
  document.getElementById("sidepanel").style.width = "0%";
}

// Dark mode Toggle
const Toggle = document.querySelector("#toggle");
const ToggleHolder = document.querySelector(".toggleHolder");

const Theme = document.querySelector("#theme");
// const Root = document.documentElement.style;
// const Root = getComputedStyle(Theme, ":root");
// var Root = document.styleSheets[0].cssRules[0].style[0];
// console.log(Root.getPropertyValue("--background"));
// console.log(Root);

var MobileTheme = document.querySelector("#mTheme");
const CurrentTheme = localStorage.getItem("Theme");
var SetTheme;

if (CurrentTheme == "dark") {
  Theme.href = "/css/dark.css";
  MobileTheme.href = "/css/Mobile/mDark.css";
  Toggle.className = "fad fa-lightbulb-on fa-2x";
  ToggleHolder.title = "Turn On Light Mode";
  // console.log("dark-ganja");
} else {
  Theme.href = "/css/light.css";
  MobileTheme.href = "/css/Mobile/mLight.css";
  Toggle.className = "fad fa-lightbulb fa-2x";
  ToggleHolder.title = "Turn On Dark Mode";
  // console.log("light-ganja");
}

function changeTheme() {
  if (Theme.getAttribute("href") == "/css/light.css") {
    Theme.href = "/css/dark.css";
    MobileTheme.href = "/css/Mobile/mDark.css";
    SetTheme = "dark";
    Toggle.className = "on fad fa-lightbulb-on fa-2x";
    ToggleHolder.title = "Turn On Light Mode";
    // closeNav();
  } else {
    Theme.href = "/css/light.css";
    MobileTheme.href = "/css/Mobile/mLight.css";
    SetTheme = "light";
    Toggle.className = "off fad fa-lightbulb fa-2x";
    ToggleHolder.title = "Turn On Dark Mode";
    // closeNav();
  }

  localStorage.setItem("Theme", SetTheme);
}
