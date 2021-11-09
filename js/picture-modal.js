import {modal} from './modal.js';
import {comments} from './comments.js';

const pictureModal = {...modal};

pictureModal.init(document.querySelector('.big-picture'), false);

pictureModal.create = function (picture) {
  const modalImg = this.element.querySelector('img');
  modalImg.src = picture.url;
  modalImg.alt = picture.description;
  this.element.querySelector('.social__caption').textContent = picture.description;
  this.element.querySelector('.likes-count').textContent = picture.likes;

  comments.create(picture.comments);

  this.open();
};

export {pictureModal};
