import ValidateForm from "./../classes/validate-form/validate-form";

export function validateForm() {
  const form = new ValidateForm(".new-form-validate", {
    errorClass: "error",
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
}
