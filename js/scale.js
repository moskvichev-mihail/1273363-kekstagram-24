const scale = {
  element: document.querySelector('.img-upload__scale'),
  input: document.querySelector('.img-upload__scale input.scale__control--value'),
  step: 25,
  default: 100,
};

scale.set = function (step) {
  if (parseFloat(this.input.value) + step > 0 && parseFloat(this.input.value) + step <= 100) {
    this.input.value = `${parseFloat(this.input.value) + step}%`;
    this.value = `${parseFloat(this.input.value) / 100}`;
  }
  return this.value;
};

scale.setDefault = function () {
  this.input.value = `${scale.default}%`;
  this.value = `${parseFloat(this.input.value) / 100}`;
};

scale.add = function () {
  this.setDefault();
};

export {scale};
