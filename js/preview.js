import {scale} from './scale.js';
import {effect} from './effect.js';

const preview = {
  element: null,
  img: null,
  scale: scale,
  effect: effect,
  className: false,
};

const onScaleControlClick = (e) => {
  e.preventDefault();
  if (e.target.type === 'button') {
    preview.setScaleValue(preview.scale.set(e.target.classList.contains('scale__control--smaller') ? -preview.scale.step : preview.scale.step));
  }
};

const onEffectChange = (e) => {
  if (e.target.matches('input[type="radio"]')) {
    preview.effect.type = e.target.value;
    (preview.effect.type === 'none') ? preview.effect.hideLevel() : preview.effect.showLevel();
    preview.effect.resetNoUiSlider();
    preview.resetScale();
    preview.setEffectClass(preview.renderEffectClass());
  }
};

preview.createScale = function () {
  this.scale.add();
  this.scale.element.addEventListener('click', onScaleControlClick);
};

preview.setScaleValue = function (value) {
  this.img.style.transform = `scale(${value})`;
};

preview.resetScale = function () {
  this.scale.setDefault();
  this.img.style.transform = '';
};

preview.removeScale = function () {
  this.resetScale();
  this.scale.element.removeEventListener('click', onScaleControlClick);
};

preview.createEffect = function () {
  this.effect.add();
  this.effect.controls.addEventListener('change', onEffectChange);
};

preview.renderEffectClass = function () {
  return `effects__preview--${this.effect.type}`;
};

preview.setEffectClass = function (className) {
  this.resetEffectClass();
  this.className = className;
  this.element.classList.add(className);
};

preview.resetEffectClass = function () {
  this.className && this.element.classList.remove(this.className);
};

preview.removeEffect = function () {
  this.effect.remove();
  this.resetEffectClass();
  this.effect.controls.removeEventListener('change', onEffectChange);
};

preview.create = function (element, imgSrc) {
  this.element = element;
  this.img = element.querySelector('img');
  this.img.src = imgSrc;
  this.createScale();
  this.createEffect();

  this.effect.slider.noUiSlider.on('update', (___, handle, unencoded) => {
    this.effect.input.value = unencoded[handle];
    this.element.style.filter = this.effect.set(this.effect.type, this.effect.input.value);
  });
};

preview.remove = function () {
  this.removeScale();
  this.removeEffect();
};

export {preview};
