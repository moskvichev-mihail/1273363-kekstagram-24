const COMMENTS_LOAD_COUNT = 5;

const comments = {
  element: document.querySelector('.social__comments'),
  template: document.querySelector('.social__comment'),
  items: [],
  temp: [],
  totalCount: 0,
  loadedCount: 0,
  loadedCountElement: document.querySelector('.social__comment-count'),
  loadMoreButton: document.querySelector('.social__comments-loader'),
};

comments.createItemTemplate = function (item) {
  const socialCommentElement = this.template.cloneNode(true);
  socialCommentElement.querySelector('.social__picture').src = item.avatar;
  socialCommentElement.querySelector('.social__text').textContent = item.message;
  return socialCommentElement;
};

comments.changeLoadedCountElement = function () {
  this.loadedCountElement.innerHTML = `${this.loadedCount} из <span class="comments-count">${this.totalCount}</span> комментариев`;
};

comments.render = function (items) {
  const listFragment = document.createDocumentFragment();
  items.map((item) => {
    listFragment.appendChild(this.createItemTemplate(item));
  });
  this.element.appendChild(listFragment);
  this.changeLoadedCountElement();
};

comments.load = function() {
  let loadCount = COMMENTS_LOAD_COUNT;
  this.showLoadMoreButton();
  if(this.temp.length <= COMMENTS_LOAD_COUNT) {
    loadCount = this.temp.length;
    this.hideLoadMoreButton();
  }
  this.loadedCount += loadCount;
  this.render(this.temp.splice(0, loadCount));
};

comments.hideLoadMoreButton = function () {
  this.loadMoreButton.classList.add('hidden');
};

comments.showLoadMoreButton = function () {
  this.loadMoreButton.classList.remove('hidden');
};

comments.hideLoadedCountElement = function () {
  this.loadedCountElement.classList.add('hidden');
};

comments.showLoadedCountElement = function () {
  this.loadedCountElement.classList.remove('hidden');
};

const onLoadMoreButtonClick = () => {
  comments.load();
};

comments.create = function (arrayComments = []) {
  this.items = arrayComments;
  this.temp = arrayComments.slice(0);
  this.totalCount = arrayComments.length;
  this.loadedCount = 0;
  this.element.innerHTML = '';
  this.load();
  this.loadMoreButton.addEventListener('click', onLoadMoreButtonClick);
};

export {comments};
