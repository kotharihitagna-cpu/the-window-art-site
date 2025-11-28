document.addEventListener("DOMContentLoaded", () => {
  // Highlight active nav link
  const path = window.location.pathname.split("/").pop() || "index.html";
  const map = {
    "index.html": "home",
    "about.html": "about",
    "services.html": "services",
    "projects.html": "projects",
    "free-quotation.html": "quotation",
    "location.html": "location",
    "contact.html": "contact",
  };
  const key = map[path] || null;
  if (key) {
    document
      .querySelectorAll(`[data-nav="${key}"]`)
      .forEach((link) => link.classList.add("active"));
  }

  // Mobile nav toggle
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  if (toggle && header) {
    toggle.addEventListener("click", () => {
      header.classList.toggle("nav-open");
    });
  }

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Scroll reveal animation
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("visible"));
  }

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Free quotation form -> WhatsApp
  const quoteForm = document.getElementById("quote-form");
  if (quoteForm) {
    quoteForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("q-name")?.value || "";
      const phone = document.getElementById("q-phone")?.value || "";
      const area = document.getElementById("q-area")?.value || "";
      const service = document.getElementById("q-service")?.value || "";
      const details = document.getElementById("q-details")?.value || "";

      let text = `New quotation request for The Window Art:%0A`;
      text += `Name: ${name}%0A`;
      text += `Phone: ${phone}%0A`;
      if (area) text += `Area: ${area}%0A`;
      if (service) text += `Service: ${service}%0A`;
      text += `Details: ${details}`;

      const phoneNumber = "919712799997";
      window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
    });
  }

  // Contact form -> WhatsApp
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("c-name")?.value || "";
      const phone = document.getElementById("c-phone")?.value || "";
      const message = document.getElementById("c-message")?.value || "";
      let text = `New contact enquiry for The Window Art:%0A`;
      text += `Name: ${name}%0A`;
      text += `Phone: ${phone}%0A`;
      text += `Message: ${message}`;
      const phoneNumber = "919712799997";
      window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
    });
  }
});
