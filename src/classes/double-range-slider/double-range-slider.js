import "./double-range-slider.css";

export default class DoubleRangeSlider {
  constructor(selector, settings = {}) {
    const mainSelector = document.querySelector(selector);
    if (mainSelector) {
      this.minNumberInput = mainSelector.querySelector(".input-min");
      this.maxNumberInput = mainSelector.querySelector(".input-max");
      this.minRangeInput = mainSelector.querySelector(".range-min");
      this.maxRangeInput = mainSelector.querySelector(".range-max");
      this.rangeBar = mainSelector.querySelector(".range-progress");
      this.#initRangeSlider();
    }

    this.minValue = settings.minValue || 0;
    this.maxValue = settings.maxValue || 100;
    this.step = settings.step || 1;
    this.gap = settings.gap || 0;

    this.#addSettings(this.minNumberInput);
    this.#addSettings(this.maxNumberInput);
    this.#addSettings(this.minRangeInput);
    this.#addSettings(this.maxRangeInput);
  }

  #addSettings(input) {
    if (input) {
      input.min = this.minValue;
      input.max = this.maxValue;
      input.step = this.step;

      input.classList.contains("input-min") ||
      input.classList.contains("range-min")
        ? (input.value = this.minValue)
        : "";
      input.classList.contains("input-max") ||
      input.classList.contains("range-max")
        ? (input.value = this.maxValue)
        : "";
    }
  }

  #initRangeSlider() {
    this.minNumberInput.addEventListener("input", (evt) => {
      this.#updateRangeBar(evt.target);
    });
    this.maxNumberInput.addEventListener("input", (evt) => {
      this.#updateRangeBar(evt.target);
    });
    this.minRangeInput.addEventListener("input", (evt) => {
      this.#updateRangeBar(evt.target);
    });
    this.maxRangeInput.addEventListener("input", (evt) => {
      this.#updateRangeBar(evt.target);
    });
  }

  #updateRangeBar(input) {
    let min = parseInt(this.minNumberInput.value);
    let max = parseInt(this.maxNumberInput.value);

    if (input.classList.contains("number-input")) {
      if (max - min < this.gap) {
        if (input.classList.contains("input-min")) {
          min = max - this.gap;
          this.minNumberInput.value = min;
        } else {
          max = min + this.gap;
          this.maxNumberInput.value = max;
        }
      }

      this.minRangeInput.value = min;
      this.maxRangeInput.value = max;
    } else if (input.classList.contains("range-input")) {
      let rangeMin = parseInt(this.minRangeInput.value);
      let rangeMax = parseInt(this.maxRangeInput.value);

      if (rangeMax - rangeMin < this.gap) {
        if (input.classList.contains("range-min")) {
          rangeMin = rangeMax - this.gap;
          this.minRangeInput.value = rangeMin;
        } else {
          rangeMax = rangeMin + this.gap;
          this.maxRangeInput.value = rangeMax;
        }
      }

      this.minNumberInput.value = rangeMin;
      this.maxNumberInput.value = rangeMax;
    }

    this.#updateProgress();
  }

  #updateProgress() {
    if (this.rangeBar) {
      const min = parseInt(this.minRangeInput.value);
      const max = parseInt(this.maxRangeInput.value);

      const percentMin =
        ((min - parseInt(this.minRangeInput.min)) /
          (this.maxValue - parseInt(this.minRangeInput.min))) *
        100;

      const percentMax =
        ((max - parseInt(this.maxRangeInput.min)) /
          (this.maxValue - parseInt(this.maxRangeInput.min))) *
        100;

      this.rangeBar.style.left = `${percentMin}%`;
      this.rangeBar.style.right = `${100 - percentMax}%`;
    }
  }
}
