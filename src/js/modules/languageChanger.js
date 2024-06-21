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
    const elem = document.querySelector(`[data-lang=${key}]`);
    if (elem) {
      elem.textContent = currentText[key][currentLang];
    }
  }
}
changeLang();

langButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    currentLang = event.target.dataset.btn;
    resetActiveClass(langButtons, "lang__active");
    btn.classList.add("lang__active");
    changeLang();
  });
});

function resetActiveClass(arr, activeClass) {
  arr.forEach((elem) => elem.classList.remove(activeClass));
}
