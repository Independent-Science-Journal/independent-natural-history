
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".inh-hero img");

  if (slides.length < 2) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  let current = 0;

  setInterval(() => {
    slides[current].classList.remove("active");

    current = (current + 1) % slides.length;

    slides[current].classList.add("active");
  }, 6000);
});

