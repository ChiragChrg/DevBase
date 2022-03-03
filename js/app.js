// Mobile Nav bar
function openNav() {
  document.getElementById("sidepanel").style.width = "50%";
  document.querySelector("body").style.overflow = "hidden";
}

function closeNav() {
  document.getElementById("sidepanel").style.width = "0%";
  document.querySelector("body").style.overflow = "auto";
}

//Mobile navigation swipe right to left
document.body.addEventListener("touchstart", startTouch, { passive: false });
document.body.addEventListener("touchmove", moveTouch, { passive: false });

var initialX = null;
var initialY = null;

function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
}

function moveTouch(e) {
  if (initialX === null) {
    return;
  }

  if (initialY === null) {
    return;
  }

  var currentX = e.touches[0].clientX;
  var currentY = e.touches[0].clientY;

  var diffX = initialX - currentX;
  var diffY = initialY - currentY;

  if (Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX > 0) {
      // Swiped to Right
      openNav();
    } else {
      // Swiped to Right
      closeNav();
    }
  }

  initialX = null;
  initialY = null;

  e.preventDefault();
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
