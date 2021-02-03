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
const currentTheme = localStorage.getItem("mytheme");

if (currentTheme == "dark") {
  theme.href = "/css/dark.css";
  btn.innerHTML = `<img src="/assets/sun.svg" alt="Light" width="42px" />`;
  // console.log("dark-ganja");
} else {
  theme.href = "/css/light.css";
  btn.innerHTML = `<img src="/assets/moon.svg" alt="Light" width="42px" />`;
  // console.log("light-ganja");
}

btn.addEventListener("click", function () {
  if (theme.getAttribute("href") == "/css/light.css") {
    theme.href = "/css/dark.css";
    mytheme = "dark";
    btn.innerHTML = `<img src="/assets/sun.svg" alt="Light" width="42px" />`;
  } else {
    theme.href = "/css/light.css";
    mytheme = "light";
    btn.innerHTML = `<img src="/assets/moon.svg" alt="Dark" width="42px" />`;
  }

  localStorage.setItem("mytheme", mytheme);
});
