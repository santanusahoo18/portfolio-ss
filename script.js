const sideMenu = document.getElementById("sidemenu");
const html = document.documentElement;

// ====== MOBILE MENU ======
function openmenu() {
  sideMenu.style.right = "0";
}

function closemenu() {
  sideMenu.style.right = "-16rem";
}

// ====== THEME TOGGLE ======
function toggleTheme() {
  html.classList.toggle("dark");
  localStorage.theme = html.classList.contains("dark") ? "dark" : "light";
  updateMobileMenuBg();
}

// ====== UPDATE MOBILE MENU BACKGROUND ======
function updateMobileMenuBg() {
  if (html.classList.contains("dark")) {
    sideMenu.style.backgroundColor = "#6B46C1"; // dark purple
    sideMenu.style.color = "white";
  } else {
    sideMenu.style.backgroundColor = "#BFDBFE"; // light blue
    sideMenu.style.color = "black";
  }
}

// ====== INITIAL PAGE LOAD ======
window.addEventListener("DOMContentLoaded", () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
  updateMobileMenuBg();
  document
    .querySelectorAll(".section")
    .forEach((s) => s.classList.add("hidden"));
  document.getElementById("home").classList.remove("hidden");
});

// ====== SECTION SWITCHING ======
function showSection(id) {
  document
    .querySelectorAll(".section")
    .forEach((s) => s.classList.add("hidden"));
  const selected = document.getElementById(id);
  if (selected) selected.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
  closemenu();
}

// ====== NAVBAR SCROLL EFFECT ======
const navbar = document.querySelector("nav");
const navlinks = document.querySelector("nav ul");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add(
      "bg-white",
      "dark:bg-darkThem",
      "dark:shadow-white/20",
    );
    navlinks.classList.remove(
      "dark:border",
      "dark:border-white/50",
      "dark:bg-transparent",
    );
  } else {
    navbar.classList.remove(
      "bg-white",
      "dark:bg-darkThem",
      "dark:shadow-white/20",
    );
    navlinks.classList.add("bg-white", "shadow-sm", "bg-opacity-50");
  }
});
