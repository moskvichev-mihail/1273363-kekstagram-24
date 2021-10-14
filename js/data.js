import {getRandomInt} from './util.js';

const POST_AUTHORS = [
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

const POST_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const POST_DESCRIPTION = 'Описание фотографии ';

const POST_COUNT = 25;

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];
const getRandomCommentsCount = () => getRandomInt(1, 5);

const createComment = (index) => ({
  id: index + 1,
  avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
  message: getRandomArrayElement(POST_MESSAGES),
  name: getRandomArrayElement(POST_AUTHORS),
});

const createComments = () => new Array(getRandomCommentsCount()).fill(null).map((_, index) => createComment(index));

const createPost = (index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: POST_DESCRIPTION + index,
  likes: getRandomInt(15, 200),
  comments: createComments(),
});

const createPosts = new Array(POST_COUNT).fill(null).map((_, index) => createPost(index));

export {createPosts};
