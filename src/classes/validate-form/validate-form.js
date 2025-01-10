import "./validate-form.css";

export default class ValidateForm {
  constructor(selector, settings = {}) {
    const mainSelector = document.querySelector(selector);
    if (!mainSelector) return;

    this.settings = settings;
    this.inputs = mainSelector.querySelectorAll(".validate-input");
    this.submitButton = mainSelector.querySelector(".validate-btn");

    this.submitButton.disabled = true;
    this.settingsArr = settings.inputSetingsArr;
    this.defaultMessage = settings.defaultMessage;

    this.filteredInputs = [...this.inputs].filter((input) => {
      const hasRequired = input.hasAttribute("required");
      const hasClass = this.settingsArr.some((setting) =>
        input.classList.contains(setting.selector)
      );
      return hasRequired || hasClass;
    });

    this.addValidationListeners();
  }

  addValidationListeners() {
    this.filteredInputs.forEach((input) => {
      input.addEventListener("input", () => this.validateInput(input));
    });
  }

  validateInput(input) {
    this.removeErrorMessage(input);

    const setting = this.settingsArr.find((s) =>
      input.classList.contains(s.selector)
    );

    let isValid = true;
    let errorMessage = "";

    if (setting && setting.regExp) {
      isValid = setting.regExp.test(input.value);
      errorMessage = isValid ? "" : setting.errorMessage || this.defaultMessage;
    } else {
      if (input.value.trim().length < 2 || input.value.trim().length > 40) {
        isValid = false;
        errorMessage = setting ? setting.errorMessage : this.defaultMessage;
      }
    }

    if (!isValid) {
      this.showErrorMessage(input, errorMessage);
      this.submitButton.disabled = true;
    } else {
      this.checkAllInputsValidity();
    }
  }

  showErrorMessage(input, message) {
    const errorDiv = document.createElement("div");
    errorDiv.className = this.settings.errorClass || "error-message";
    errorDiv.textContent = message;

    input.parentNode.insertBefore(errorDiv, input.nextSibling);
  }

  removeErrorMessage(input) {
    const existingError = input.parentNode.querySelector(
      this.settings.errorClass
        ? `.${this.settings.errorClass}`
        : ".error-message"
    );
    if (existingError) {
      existingError.remove();
    }
  }

  checkAllInputsValidity() {
    const allValid = this.filteredInputs.every((input) => {
      const setting = this.settingsArr.find((s) =>
        input.classList.contains(s.selector)
      );

      if (setting && setting.regExp) {
        return setting.regExp.test(input.value);
      } else {
        return (
          input.value.trim().length >= 2 && input.value.trim().length <= 40
        );
      }
    });

    this.submitButton.disabled = !allValid;
  }
}
