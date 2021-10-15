import {modal} from './modal.js';

const addPictureClickHandler = (element, posts) => {
  element.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (evt.target.classList.contains('picture__img')) {
      const pictureIndex = evt.target.parentElement.dataset.index;
      modal.open(posts[pictureIndex]);
    }
  });
};

const renderPictures = (posts) => {
  const pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');
  const pictureListElement = document.querySelector('.pictures');
  const listFragment = document.createDocumentFragment();

  posts.forEach((post, index) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.dataset.index = index;
    pictureElement.querySelector('.picture__img').src = post.url;
    pictureElement.querySelector('.picture__comments').textContent = post.comments.length;
    pictureElement.querySelector('.picture__likes').textContent = post.likes;
    listFragment.appendChild(pictureElement);
  });

  pictureListElement.appendChild(listFragment);
  addPictureClickHandler(pictureListElement, posts);
};

export {renderPictures};
