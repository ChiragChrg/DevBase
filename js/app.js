// Mobile Nav bar
function openNav() {
  document.getElementById("sidepanel").style.width = "50%";
  document.querySelector("body").style.overflow = "hidden";
}

function closeNav() {
  document.getElementById("sidepanel").style.width = "0%";
  document.querySelector("body").style.overflow = "auto";
}

// console.log(window.matchMedia("(display-mode: standalone)"));

// Dark mode Toggle
const ToggleHolder = document.querySelector(".toggleHolder");
const Toggle = document.querySelector("#toggle");
const Theme = document.querySelector("#theme");
var MobileTheme = document.querySelector("#mTheme");
const AboutThm = document.querySelector("#abtTheme");
const CurrentTheme = localStorage.getItem("Theme");
var SetTheme;

if (CurrentTheme == "dark") {
  Theme.href = "/css/dark.css";
  MobileTheme.href = "/css/Mobile/mDark.css";
  AboutThm.href = "/css/aboutD.css";
  Toggle.className = "fad fa-lightbulb-on fa-2x";
  ToggleHolder.title = "Turn On Light Mode";
  // console.log("dark-ganja");
} else {
  Theme.href = "/css/light.css";
  MobileTheme.href = "/css/Mobile/mLight.css";
  AboutThm.href = "/css/aboutL.css";
  Toggle.className = "fad fa-lightbulb fa-2x";
  ToggleHolder.title = "Turn On Dark Mode";
  // console.log("light-ganja");
}

function changeTheme() {
  if (
    Theme.getAttribute("href") == "/css/light.css" ||
    AboutThm.getAttribute("href") == "/css/aboutL.css"
  ) {
    Theme.href = "/css/dark.css";
    MobileTheme.href = "/css/Mobile/mDark.css";
    AboutThm.href = "/css/aboutD.css";
    SetTheme = "dark";
    Toggle.className = "on fad fa-lightbulb-on fa-2x";
    ToggleHolder.title = "Turn On Light Mode";
    // closeNav();
  } else {
    Theme.href = "/css/light.css";
    MobileTheme.href = "/css/Mobile/mLight.css";
    AboutThm.href = "/css/aboutL.css";
    SetTheme = "light";
    Toggle.className = "off fad fa-lightbulb fa-2x";
    ToggleHolder.title = "Turn On Dark Mode";
    // closeNav();
  }

  localStorage.setItem("Theme", SetTheme);
}
