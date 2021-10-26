const ESC_KEYCODE = 27;
const keyboard = {
  isEsc: (e, callBack) => e.keyCode === ESC_KEYCODE && callBack,
};

const getRandomInt = function (min, max) {
  if (min >= 0 && max >= 0 && min <= max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  else {
    return -1;
  }
};

// eslint-disable-next-line no-unused-vars
const checkStringLength = function (string, length) {
  return (string.length <= length);
};

export {getRandomInt, checkStringLength, keyboard};
