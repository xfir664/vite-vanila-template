import DoubleRangeSlider from "./classes/double-range-slider/double-range-slider";

const rangeDouble = new DoubleRangeSlider(".double-range-wrapper", {
  minValue: 100,
  maxValue: 1000,
  step: 100,
  gap: 100,
});
