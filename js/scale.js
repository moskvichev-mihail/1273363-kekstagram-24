const TOTAL_PERCENT = 100;

const scale = {
  element: document.querySelector('.img-upload__scale'),
  input: document.querySelector('.img-upload__scale input.scale__control--value'),
  step: 25,
  default: 100,
  range: {
    min: 0,
    max: 100,
  },
};

scale.set = function (step) {
  if (parseFloat(this.input.value) + step > this.range.min && parseFloat(this.input.value) + step <= this.range.max) {
    this.input.value = `${parseFloat(this.input.value) + step}%`;
    this.value = `${parseFloat(this.input.value) / TOTAL_PERCENT}`;
  }
  return this.value;
};

scale.setDefault = function () {
  this.input.value = `${scale.default}%`;
  this.value = `${parseFloat(this.input.value) / TOTAL_PERCENT}`;
};

scale.add = function () {
  this.setDefault();
};

export {scale};
