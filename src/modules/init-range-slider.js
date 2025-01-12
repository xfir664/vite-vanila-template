import DoubleRangeSlider from "./../classes/double-range-slider/double-range-slider";

export function initDoubleRangeSlider() {
  const rangeDouble = new DoubleRangeSlider(".double-range-wrapper", {
    minValue: 100,
    maxValue: 1000,
    step: 10,
    gap: 100,
  });
}
