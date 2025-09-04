/* Smooth scrolling for in-page links */
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (href.length > 1) {
      e.preventDefault();
      document
        .querySelector(href)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

/* Mobile nav toggle */
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
if (burger && nav) {
  burger.addEventListener("click", () => {
    const open = nav.style.display === "block";
    nav.style.display = open ? "none" : "block";
    burger.setAttribute("aria-expanded", String(!open));
  });
}

/* Fake form submit (no backend) */
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    alert(
      `Thanks, ${data.name || "friend"}!\nI'll be in touch at ${data.email}.`
    );
    form.reset();
  });
}

/* Close mobile nav when a nav link is clicked */
document.querySelectorAll('.nav a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    // only collapse on small screens where the burger menu is used
    if (window.matchMedia("(max-width: 720px)").matches) {
      nav.style.display = "none";
      burger.setAttribute("aria-expanded", "false");
    }
  });
});
