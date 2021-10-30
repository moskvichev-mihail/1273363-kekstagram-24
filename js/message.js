import {keyboard} from './util.js';

const main = document.querySelector('main');

const message = {
  successTemplate: document.querySelector('#success').content.querySelector('.success'),
  errorTemplate: document.querySelector('#error').content.querySelector('.error'),
  element: null,
};

const onDocumentKeydown = (e) => keyboard.isEsc(e, message.close);

const onOverlayClick = () => message.close();

message.render = (success = false, text = '', button = '') => {
  message.element = (success) ? message.successTemplate.cloneNode(true) : message.errorTemplate.cloneNode(true);
  if (text !== '') {
    message.element.querySelector('[class*="__title"]').textContent = text;
  }
  if (button !== '') {
    message.element.querySelector('button').textContent = button;
  }
  main.appendChild(message.element);
  document.addEventListener('keydown', onDocumentKeydown);
  message.element.addEventListener('click', onOverlayClick);
};

message.close = () => {
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('keydown', onOverlayClick);
  main.removeChild(message.element);
};

export {message};
