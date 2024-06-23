import { contentForHeader } from "./dataLangForHeader";
import { contentForServices } from "./dataLangForServices";
import { contentForAbout } from "./dataLangForAbout";
import { contentForDetails } from "./dataLangForDetails";
import { contentForFooter } from "./dataLangForFooter";
import { contentForContactForm } from "./dataLangForContactForm";

const allLang = ["ua", "en", "ru"];
let currentLang = "ua";
const langButtons = document.querySelectorAll("[data-btn]");
const currentText = Object.assign(
  contentForHeader,
  contentForServices,
  contentForAbout,
  contentForDetails,
  contentForFooter,
  contentForContactForm
);

function changeLang() {
  for (const key in currentText) {
    console.log("CURR LANG", currentLang);
    const elem = document.querySelector(`[data-lang=${key}]`);
    if (elem) {
      elem.textContent = currentText[key][currentLang];
    }
  }
}
changeLang();

// langButtons.forEach((btn) => {
//   btn.addEventListener("click", (event) => {
//     currentLang = event.target.dataset.btn;

//     resetActiveClass(langButtons, "lang__active");
//     btn.classList.add("lang__active");
//     changeLang();
//   });
// });

langButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (btn.parentElement.classList.contains("spring")) {
      currentLang = event.target.dataset.btn;
      console.log("CURR LANG BTN", currentLang);
      resetActiveClass(langButtons, "lang__active");
      btn.classList.add("lang__active");
      resetSpringClass(btn.parentElement, "spring");
      changeLang();
    } else {
      btn.parentElement.classList.add("spring");
    }
  });
});

function resetActiveClass(arr, activeClass) {
  arr.forEach((elem) => elem.classList.remove(activeClass));
}

function resetSpringClass(elem, springClass) {
  elem.classList.remove(springClass);
}
