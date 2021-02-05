// Mobile Nav bar
function openNav() {
  document.getElementById("sidepanel").style.width = "50%";
}

function closeNav() {
  document.getElementById("sidepanel").style.width = "0%";
}

// Dark mode Toggle
const btn = document.querySelector("#toggle");
const theme = document.querySelector("#theme");
const mTheme = document.querySelector("#mTheme");
const currentTheme = localStorage.getItem("mytheme");

if (currentTheme == "dark") {
  theme.href = "/css/dark.css";
  mTheme.href = "/css/mDark.css";
  btn.innerHTML = `<img id="Dark-icon" src="/assets/sun.svg" alt="Light" width="42px" />`;
  // console.log("dark-ganja");
} else {
  theme.href = "/css/light.css";
  mTheme.href = "/css/mLight.css";
  btn.innerHTML = `<img id="Dark-icon" src="/assets/moon.svg" alt="Light" width="42px" />`;
  // console.log("light-ganja");
}

btn.addEventListener("click", function () {
  if (theme.getAttribute("href") == "/css/light.css") {
    theme.href = "/css/dark.css";
    mTheme.href = "/css/mDark.css";
    mytheme = "dark";
    btn.innerHTML = `<img id="Dark-icon" src="/assets/sun.svg" alt="Light" width="42px" />`;
    // closeNav();
  } else {
    theme.href = "/css/light.css";
    mTheme.href = "/css/mLight.css";
    mytheme = "light";
    btn.innerHTML = `<img id="Dark-icon" src="/assets/moon.svg" alt="Dark" width="42px" />`;
    // closeNav();
  }

  localStorage.setItem("mytheme", mytheme);
});
