import DoubleRangeSlider from "./classes/double-range-slider/double-range-slider";
import initAccordion from "./classes/accordion/accordion";

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
