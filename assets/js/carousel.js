document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".teams__group").forEach((group) => {
    const members = group.querySelector(".teams__members");
    const next = group.querySelector(".teams__next");
    const prev = group.querySelector(".teams__prev");

    const scrollAmount = 250;

    next.addEventListener("click", () => {
      members.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    });

    prev.addEventListener("click", () => {
      members.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    });
  });
});
