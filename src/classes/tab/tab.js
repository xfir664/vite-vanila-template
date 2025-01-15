import "./tab.css";

export default class TabClass {
  constructor(selector, settings = {}) {
    this.mainSelector = document.querySelector(selector);
    if (!this.mainSelector) return;
    this.settings = settings;
    this.tabBtnsContainer = this.mainSelector.querySelector(".tab-btns");
    this.tabContent = Array.from(
      this.mainSelector.querySelectorAll(".tab-content")
    );
    this.createBtns();
  }

  createBtns() {
    const {
      tabBtnsClass = "tab-btn",
      tabBtnsClassAtive = "tab-btn-active",
      tabBtnsName,
    } = this.settings;

    this.tabContent.forEach((element, index) => {
      const btn = document.createElement("button");
      btn.classList.add(tabBtnsClass);
      if (element.classList.contains("tab-content-active")) {
        btn.classList.add(tabBtnsClassAtive);
      }
      btn.textContent = tabBtnsName?.[index] || `Tab ${index + 1}`;
      btn.addEventListener("click", () =>
        this.handleTabClick(index, tabBtnsClassAtive)
      );
      this.tabBtnsContainer.append(btn);
    });

    this.btns = this.tabBtnsContainer.querySelectorAll(`.${tabBtnsClass}`);
  }

  handleTabClick(index, activeClass) {
    this.tabContent.forEach((item) =>
      item.classList.remove("tab-content-active")
    );
    this.btns.forEach((btn) => btn.classList.remove(activeClass));

    this.tabContent[index].classList.add("tab-content-active");
    this.btns[index].classList.add(activeClass);
  }
}
