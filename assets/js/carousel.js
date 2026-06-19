document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".testimonials__wrapper");
  const next = document.querySelector(".testimonials__next");
  const prev = document.querySelector(".testimonials__prev");

  if (!wrapper) return;

  next.addEventListener("click", () => {
    wrapper.scrollBy({
      left: 380,
      behavior: "smooth",
    });
  });

  prev.addEventListener("click", () => {
    wrapper.scrollBy({
      left: -380,
      behavior: "smooth",
    });
  });
});
