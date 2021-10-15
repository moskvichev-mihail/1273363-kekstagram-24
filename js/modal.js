import {keyboard} from './util.js';

const initModalSocialComments = (template, comments) => {
  const listFragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const socialComment = template.cloneNode(true);
    socialComment.querySelector('.social__picture').src = comment.avatar;
    socialComment.querySelector('.social__text').textContent = comment.message;
    listFragment.appendChild(socialComment);
  });
  return listFragment;
};

const hideModalSocialCommentsCount = (element) => {
  element.querySelector('.social__comment-count').classList.add('hidden');
  element.querySelector('.comments-loader').classList.add('hidden');
};

const createModal = (element, picture) => {
  const modalImg = element.querySelector('img');
  const modalSocialComments = element.querySelector('.social__comments');
  const socialCommentTemplate = modalSocialComments.querySelector('.social__comment');
  modalImg.src = picture.url;
  modalImg.alt = picture.description;
  element.querySelector('.social__caption').textContent = picture.description;
  element.querySelector('.likes-count').textContent = picture.likes;
  element.querySelector('.comments-count').textContent = picture.comments.length;
  modalSocialComments.innerHTML = '';
  modalSocialComments.appendChild(initModalSocialComments(socialCommentTemplate, picture.comments));

  hideModalSocialCommentsCount(element);
};

const onDocumentKeydown = (evt) => {
  // eslint-disable-next-line no-use-before-define
  keyboard.isEsc(evt, modal.close());
};

const onCloseButtonClick = (evt) => {
  evt.preventDefault();
  // eslint-disable-next-line no-use-before-define
  modal.close();
};

const close = function() {
  this.element.classList.add('hidden');
  document.body.classList.remove('modal-open');
  this.closeButton.removeEventListener('click', onCloseButtonClick);
  document.removeEventListener('keydown', onDocumentKeydown);
};

const open = function(picture) {
  createModal(this.element, picture);
  this.element.classList.remove('hidden');
  document.body.classList.add('modal-open');
  this.closeButton = this.element.querySelector('.big-picture__cancel');
  this.closeButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

const modal = {
  element: document.querySelector('.big-picture'),
  open,
  close,
};

export {modal};
