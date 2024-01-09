

const navMenu = document.getElementById("nav-menu"),
  navLinks = document.querySelectorAll(".nav__link"),
  navOpen = document.getElementById("nav-open"),
  navClose = document.getElementById("nav-close");

/*  open mobile menu
======================================= */
navOpen.addEventListener("click", () => {
  navMenu.classList.add("nav__menu--open");
});

/* close mobile menu
======================================= */
navClose.addEventListener("click", () => {
  navMenu.classList.remove("nav__menu--open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu--open");
  });
});

/* Show scrolltop button
======================================= */
const scrolltop = document.getElementById("scrolltop");

window.addEventListener("scroll", () => {
  window.scrollY > 150
    ? scrolltop.classList.add("scrolltop--active")
    : scrolltop.classList.remove("scrolltop--active");
});

/* Scrollreveal Animations
======================================= */
const sr = ScrollReveal({
  distance: "100px",
  duration: 2500,
  delay: 200,
  reset: false,
});

sr.reveal(".home__content", { origin: "top" });
sr.reveal(".home__image, .footer__data", { origin: "bottom", interval: 200 });
sr.reveal(
  ".feature__image, .discover__content, .game__image, .newsletter__image",
  { origin: "left" }
);
sr.reveal(
  ".feature__data, .discover__image, .game__content, .newsletter__content",
  { origin: "right" }
);
