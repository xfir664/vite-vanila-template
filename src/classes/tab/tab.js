export default class Tab {
  constructor(selector, settings) {
    this.mainSelector = document.querySelector(selector);
    if (!this.selector) return;

    this.tabBtnsContainer = this.mainSelector.querySelector(".tab-btns");
    this.tabConten = this.mainSelector.querySelectorAll(".tab-content");
  }

  createTabsBtn(settings) {}
}
