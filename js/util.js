const ESC_KEYCODE = 27;
const ENTER_KEYCODE = 13;

const keyboard = {
  isEsc: (e, callBack = () => {}) => e.keyCode === ESC_KEYCODE && callBack(),
  isEnter: (e, callBack = () => {}) => e.keyCode === ENTER_KEYCODE && callBack(),
};


const debounce = (callback, timeout = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeout);
  };
};

export {keyboard, debounce};
