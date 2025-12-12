// -------------------------------
// MOBILE NAV TOGGLE
// -------------------------------
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".nav");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("nav-open");
    navToggle.classList.toggle("open");
  });
}

// -------------------------------
// ACTIVE NAV LINK HIGHLIGHT
// -------------------------------
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav a").forEach(link => {
  const linkPage = link.getAttribute("href");
  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});

// -------------------------------
// UPDATE FOOTER YEAR
// -------------------------------
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
