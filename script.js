// Mobile nav toggle
const toggleBtn = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("navMenu");

if (toggleBtn && navMenu) {
  toggleBtn.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu after clicking a link (mobile)
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Simple contact form validation (no backend needed)
const form = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

if (form && feedback) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!email || !message) {
      feedback.textContent = "Please fill out both fields before sending.";
      return;
    }

    // Basic email pattern check
    const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!okEmail) {
      feedback.textContent = "Please enter a valid email address.";
      return;
    }

    feedback.textContent = "Message ready! (No backend attached, so nothing is actually sent.)";
    form.reset();
  });
}
