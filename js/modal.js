import {keyboard} from './util.js';

const modal = {};

modal.init = function (element, target = false, callBack = () => {}) {
  const onDocumentKeydown = (e) => {
    keyboard.isEsc(e, this.close);
  };

  const onCloseButtonClick = (e) => {
    e.preventDefault();
    this.close();
  };

  this.element = element;
  this.target = (target) ? target : element;
  this.closeButton = element.querySelector('.cancel');

  this.open = () => {
    this.target.classList.remove('hidden');
    document.body.classList.add('modal-open');
    this.closeButton.addEventListener('click', onCloseButtonClick);
    document.addEventListener('keydown', onDocumentKeydown);
  };

  this.close = () => {
    this.target.classList.add('hidden');
    document.body.classList.remove('modal-open');
    this.closeButton.removeEventListener('click', onCloseButtonClick);
    document.removeEventListener('keydown', onDocumentKeydown);
    callBack();
  };
};

modal.setElement = function (element) {
  this.element = element;
};

modal.getElement = function () {
  return this.element;
};

export {modal};
