const POST_AUTHOR = [
  'Иван',
  'Артем',
  'Мария',
  'Михаил',
  'Виктор',
  'Юлия',
  'Максим',
  'Анна',
  'Марк ',
  'Алиса',
  'Виктория',
];

const POST_MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const POST_DESCRIPTION = 'Описание фотографии ';

const POST_COUNT = 25;

function getRandomInt(min, max) {
  if (min >= 0 && max >= 0 && min <= max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  else {
    return -1;
  }
}

// eslint-disable-next-line no-unused-vars
function checkStringLength(string, length) {
  return (string.length <= length);
}

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];
const getRandomCommentsCount = () => getRandomInt(1, 5);

const createComment = (index) => ({
  id: index + 1,
  avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
  message: getRandomArrayElement(POST_MESSAGE),
  name: getRandomArrayElement(POST_AUTHOR),
});

const createComments = () => new Array(getRandomCommentsCount()).fill(null).map((_, index) => createComment(index));

const createPost = (index) => ({
  id: index + 1,
  url: `photos/${index}.jpg`,
  description: POST_DESCRIPTION + index,
  likes: getRandomInt(15, 200),
  comments: createComments(),
});

const posts = new Array(POST_COUNT).fill(null).map((_, index) => createPost(index));

// eslint-disable-next-line no-console
window.console.log(posts);
