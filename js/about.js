// Mobile Nav bar
function openNav() {
  document.getElementById("sidepanel").style.width = "50%";
}

function closeNav() {
  document.getElementById("sidepanel").style.width = "0%";
}

// About Dark Toggle
const abtBtn = document.querySelector("#toggle");
const abtTheme = document.querySelector("#abtTheme");
const currentTheme = localStorage.getItem("mytheme");

if (currentTheme == "dark") {
  abtTheme.href = "/css/aboutD.css";
  abtBtn.innerHTML = `<img id="Dark-icon" src="/assets/sun.svg" alt="Light" width="42px" />`;
  // console.log("dark-ganja");
} else {
  abtTheme.href = "/css/aboutL.css";
  abtBtn.innerHTML = `<img id="Dark-icon" src="/assets/moon.svg" alt="Light" width="42px" />`;
  // console.log("light-ganja");
}

abtBtn.addEventListener("click", function () {
  if (abtTheme.getAttribute("href") == "/css/aboutL.css") {
    abtTheme.href = "/css/aboutD.css";
    mytheme = "dark";
    abtBtn.innerHTML = `<img id="Dark-icon" src="/assets/sun.svg" alt="Light" width="42px" />`;
    // closeNav();
  } else {
    abtTheme.href = "/css/aboutL.css";
    mytheme = "light";
    abtBtn.innerHTML = `<img id="Dark-icon" src="/assets/moon.svg" alt="Dark" width="42px" />`;
    // closeNav();
  }

  localStorage.setItem("mytheme", mytheme);
});
