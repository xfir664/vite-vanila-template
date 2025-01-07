import "./accordion.css";

export default class InitAccordion {
  constructor(selector, settings = {}) {
    const mainSelector = document.querySelector(selector);
    if (!mainSelector) return;

    this.btns = mainSelector.querySelectorAll(".accordion-btn");
    this.containers = mainSelector.querySelectorAll(".accordion-container");

    this.activeBtnText =
      settings.btnActiveText !== undefined ? settings.btnActiveText : "";
    this.inActiveBtnText =
      settings.btnInActiveText !== undefined ? settings.btnInActiveText : "";
    this.openAll = settings.openAll || false;

    this.init();
  }

  init() {
    this.btns.forEach((btn, index) => {
      btn.addEventListener("click", () => this.toggleAccordion(index));

      btn.querySelector(".accordion-btn-text").textContent = this.activeBtnText;

      this.containers[index].style.gridTemplateRows = "0fr";
    });
  }

  toggleAccordion(index) {
    const btn = this.btns[index];
    const container = this.containers[index];

    if (!this.openAll) {
      this.btns.forEach((otherBtn, otherIndex) => {
        if (otherIndex !== index) {
          otherBtn.querySelector(".accordion-btn-text").textContent =
            this.activeBtnText;
          this.containers[otherIndex].style.gridTemplateRows = "0fr";
        }
      });
    }

    if (container.style.gridTemplateRows === "1fr") {
      btn.querySelector(".accordion-btn-text").textContent = this.activeBtnText;
      container.style.gridTemplateRows = "0fr";
    } else {
      btn.querySelector(".accordion-btn-text").textContent =
        this.inActiveBtnText;
      container.style.gridTemplateRows = "1fr";
    }
  }
}
