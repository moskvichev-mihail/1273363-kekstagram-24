import {pictureModal} from './picture-modal.js';

const renderPictures = (posts, isFirstRendering = false) => {
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const pictureListElement = document.querySelector('.pictures');
  const listFragment = document.createDocumentFragment();

  const onPicturesClick = (e) => {
    if (e.target.classList.contains('picture__img')) {
      e.preventDefault();
      const pictureIndex = e.target.parentElement.dataset.index;
      pictureModal.create(posts[pictureIndex]);
    }
  };

  const removePictures = (container) => {
    const elements = container.querySelectorAll('.picture');
    elements.forEach((element) => {
      container.removeChild(element);
    });
  };

  posts.forEach((post, index) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.dataset.index = index;
    pictureElement.querySelector('.picture__img').src = post.url;
    pictureElement.querySelector('.picture__comments').textContent = post.comments.length;
    pictureElement.querySelector('.picture__likes').textContent = post.likes;
    listFragment.appendChild(pictureElement);
  });

  if (isFirstRendering) {
    pictureListElement.addEventListener('click', onPicturesClick);
  }
  removePictures(pictureListElement);
  pictureListElement.appendChild(listFragment);
};

export {renderPictures};
