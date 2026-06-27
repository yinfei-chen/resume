const languageToggle = document.querySelector("#languageToggle");
const printResume = document.querySelector("#printResume");
const currentYear = document.querySelector("#currentYear");
const translatableNodes = document.querySelectorAll("[data-zh][data-en]");

let currentLanguage = "zh";

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

  translatableNodes.forEach((node) => {
    node.textContent = node.dataset[language];
  });

  languageToggle.textContent = language === "zh" ? "中 / EN" : "EN / 中";
}

languageToggle.addEventListener("click", () => {
  setLanguage(currentLanguage === "zh" ? "en" : "zh");
});

printResume.addEventListener("click", () => {
  window.print();
});

currentYear.textContent = new Date().getFullYear();
