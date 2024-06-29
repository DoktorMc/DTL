const hideShowButtons = document.querySelectorAll("[data-show]");

hideShowButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.parentElement.parentElement.classList.contains("show")) {
      resetShowClass(btn.parentElement.parentElement, "show");
      resetShowClass(btn.parentElement, "hide-blur");
      resetShowClass(btn, "rotate");
    } else {
      btn.parentElement.parentElement.classList.add("show");
      btn.parentElement.classList.add("hide-blur");
      btn.classList.add("rotate");
    }
  });
});

function resetShowClass(elem, showClass) {
  elem.classList.remove(showClass);
}
