// Desktop Navslide
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    // Navbar Mobile Animation toggle
    nav.classList.toggle("nav-active");

    // Burger Animation
    // burger.classList.toggle('toggle');
  });
};

navSlide();

// Mobile Navslide
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});
