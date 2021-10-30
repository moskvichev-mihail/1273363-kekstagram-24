import {sendData} from './server.js';
import {openUploadFileModal, closeUploadFileModal} from './upload-modal.js';
import {validateForm} from './validation.js';
import {preview} from './preview.js';
import {message} from './message.js';

const form = {
  element: document.querySelector('.img-upload__form'),
  overlay: document.querySelector('.img-upload__form .img-upload__overlay'),
  hashtagInput: document.querySelector('.img-upload__form .text__hashtags'),
  commentInput: document.querySelector('.img-upload__form .text__description'),
  submitButton: document.querySelector('.img-upload__form #upload-submit'),
  preview: preview,
};

const onSubmitForm = function(e) {
  e.preventDefault();

  closeUploadFileModal();

  sendData(
    new FormData(e.target),
    () => message.render(true),
    () => message.render(false),
  );
};

form.onSubmit = function () {
  form.element.addEventListener('submit', onSubmitForm);
};

form.onClose = () => {
  form.file.element.value = '';
  form.hashtagInput.value = '';
  form.commentInput.value = '';
  form.preview.remove();
  form.element.removeEventListener('submit', onSubmitForm);
};

form.open = function (file, fileSrc) {
  this.file = file;

  this.preview.create(form.element.querySelector('.img-upload__preview'), fileSrc);
  openUploadFileModal(this.element, this.overlay, this.onClose);
  this.onSubmit();
};

validateForm(form);

export {form};
