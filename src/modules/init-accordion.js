import initAccordion from "../classes/accordion/accordion";

export function initNewAccordion() {
  const accordion = new initAccordion(".new-accordion", {
    btnActiveText: "Open",
    btnInActiveText: "Close",
    openAll: false,
  });
}
