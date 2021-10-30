import {renderPictures} from './picture.js';
import {debounce} from './util.js';

const RANDOM_POSTS_COUNT = 10;
const RERENDER_DELAY = 500;

const filter = {
  element: document.querySelector('.img-filters'),
  controls: document.querySelectorAll('.img-filters__button'),
};

const comparePosts = (firstPost, secondPost) => secondPost.comments.length - firstPost.comments.length;

const onFilterControlClick = (debounce(
  (e) => {
    filter.changeActive(e.target);
    renderPictures(filter.render(e.target.id));
  },
  RERENDER_DELAY,
));

filter.show = (data) => {
  filter.element.classList.remove('img-filters--inactive');
  filter.data = data;

  filter.controls.forEach((control) => {
    control.addEventListener('click', onFilterControlClick);
  });
};

filter.render = (type) => {
  switch (type) {
    case 'filter-random':
      return filter.data.slice().sort(() => 0.5 - Math.random()).slice(0, RANDOM_POSTS_COUNT);
    case 'filter-discussed':
      return filter.data.slice().sort(comparePosts);
    case 'filter-default':
    default:
      return filter.data;
  }
};

filter.changeActive = (selectedControl) => {
  for (let i = 0; i < filter.controls.length; i++) {
    if (filter.controls[i].classList.contains('img-filters__button--active')) {
      filter.controls[i].classList.remove('img-filters__button--active');
      break;
    }
  }
  selectedControl.classList.add('img-filters__button--active');
};

export {filter};
