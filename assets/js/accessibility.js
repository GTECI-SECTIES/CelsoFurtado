document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".font-btn");

  let fontSize = localStorage.getItem("fontSize") || 100;

  document.documentElement.style.fontSize = fontSize + "%";

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const action = btn.dataset.action;

      if (action === "increase" && fontSize < 130)
        fontSize = parseInt(fontSize) + 10;
      if (action === "decrease" && fontSize > 80)
        fontSize = parseInt(fontSize) - 10;

      document.documentElement.style.fontSize = fontSize + "%";
      localStorage.setItem("fontSize", fontSize);
    });
  });
});
