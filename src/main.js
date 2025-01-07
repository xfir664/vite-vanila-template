import DoubleRangeSlider from "./classes/double-range-slider/double-range-slider";
import initAccordion from "./classes/accordion/accordion";
import ValidateForm from "./classes/validate-form/validate-form";

const rangeDouble = new DoubleRangeSlider(".double-range-wrapper", {
  minValue: 100,
  maxValue: 1000,
  step: 10,
  gap: 100,
});

const accordion = new initAccordion(".new-accordion", {
  btnActiveText: "Open",
  btnInActiveText: "Close",
  openAll: false,
});

const form = new ValidateForm(".new-form-validate", {
  errorClass: 'error',
  defaultMessage: "Неправильно",
  inputSetingsArr: [
    {
      selector: "email-input",
      errorMessage: "Неверный формат email",
      regExp: null,
    },
    {
      selector: "phone-input",
      errorMessage: "Неправильный телефон",
      regExp: /^\+7\d{10}$/,
    },
  ],
});
