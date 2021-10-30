const effect = {
  level: document.querySelector('.img-upload__effect-level'),
  slider: document.querySelector('.img-upload__effect-level .effect-level__slider'),
  input: document.querySelector('.img-upload__effect-level .effect-level__value'),
  controls: document.querySelector('.effects__list'),
  type: 'none',
};

effect.hideLevel = () => effect.level.classList.add('hidden');
effect.showLevel = () => effect.level.classList.remove('hidden');

effect.createNoUiSlider = () => {
  noUiSlider.create(effect.slider, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    connect: 'lower',
  });
};

effect.resetNoUiSlider = () => effect.slider.noUiSlider.reset();
effect.destroyNoUiSlider = () => effect.slider.noUiSlider.destroy();

effect.set = function (type = 'none', value = 100) {
  this.type = type;
  switch (type) {
    case 'chrome':
      return `grayscale(${Math.floor(value / 10) * 0.1})`;
    case 'sepia':
      return `sepia(${Math.floor(value / 10) * 0.1})`;
    case 'marvin':
      return `invert(${value}%)`;
    case 'phobos':
      return `blur(${Math.floor(value * 0.3) * 0.1}px)`;
    case 'heat':
      return `brightness(${1 + Math.floor(value * 0.2) * 0.1})`;
    case 'none':
    default:
      return '';
  }
};

effect.setDefault = function () {
  this.set();
  this.hideLevel();
};

effect.add = function () {
  if (this.slider.noUiSlider === undefined) {
    this.createNoUiSlider();
  }
  this.setDefault();
};

effect.remove = function () {
  this.controls.querySelector('#effect-none').checked = true;
  this.resetNoUiSlider();
};

export {effect};
