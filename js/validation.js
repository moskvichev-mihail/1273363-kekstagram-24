const HASHTAG_PATTERN = /.[^a-zA-Zа-яА-Я0-9]/g;
const HASHTAG_SYMBOL = '#';
const HASHTAG_MIN_LENGTH = 2;
const HASHTAG_MAX_LENGTH = 20;
const HASHTAG_MAX_COUNT = 5;

const COMMENT_MAX_LENGTH = 140;

const messages = {
  comment: {
    maxLength: 'Длина комментария не может составлять больше 140 символов',
  },
  hashtag: {
    startsWith: 'Хэш-тег должен начинаться с символа # (решётка)',
    minLength: 'Хеш-тег не может состоять только из одной решётки',
    noSeparator: 'Хэш-теги должны быть разделены пробелами',
    noMatchPattern: 'Хэш-тег должен состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.',
    maxLength: 'Максимальная длина одного хэш-тега 20 символов, включая решётку',
    noRepeat: 'Один и тот же хэш-тег не может быть использован дважды',
    maxCount: 'Нельзя указать больше пяти хэш-тегов',
  },
};

const hashtagValidityChecks = {
  startsWith: {
    isValid: (hashtag) => hashtag.startsWith(HASHTAG_SYMBOL),
  },
  minLength: {
    isValid: (hashtag) => hashtag.split('').length >= HASHTAG_MIN_LENGTH,
  },
  noSeparator: {
    isValid: (hashtag) => !(hashtag.indexOf(HASHTAG_SYMBOL, 1) > 0),
  },
  noMatchPattern: {
    isValid: (hashtag) => !hashtag.match(HASHTAG_PATTERN),
  },
  maxLength: {
    isValid: (hashtag) => hashtag.split('').length <= HASHTAG_MAX_LENGTH,
  },
  noRepeat: {
    isValid: (hashtag, arrayHashtags) => [...new Set(arrayHashtags)].length === arrayHashtags.length,
  },
  maxCount: {
    isValid: (hashtag, arrayHashtags) => arrayHashtags.length <= HASHTAG_MAX_COUNT,
  },
};

const validateHashtag = (hashtagInput) => {
  if (hashtagInput.value === '') { return; }
  const hashtags = hashtagInput.value.toLowerCase().split(' ');
  for (let i = 0; i < hashtags.length; i++) {
    for (const key in hashtagValidityChecks) {
      if (!hashtagValidityChecks[key].isValid(hashtags[i], hashtags)) {
        hashtagInput.style.outline = '3px solid red';
        hashtagInput.setCustomValidity(messages.hashtag[key]);
        return;
      }
    }
  }
  hashtagInput.style.outline = 'none';
  hashtagInput.setCustomValidity('');
};

const validateComment = (commentInput) => {
  const comment = commentInput.value;
  if (comment.split('').length > COMMENT_MAX_LENGTH) {
    commentInput.style.outline = '3px solid red';
    commentInput.setCustomValidity(messages.comment.maxLength);
  } else {
    commentInput.setCustomValidity('');
    commentInput.style.outline = 'none';
  }
};

const validateForm = (form) => {
  const onSubmitButtonClick = () => {
    validateHashtag(form.hashtagInput);
    validateComment(form.commentInput);
  };

  const onHashtagInput = () => {
    validateHashtag(form.hashtagInput);
  };

  const onCommentInput = () => {
    validateComment(form.commentInput);
  };

  form.submitButton.addEventListener('click', onSubmitButtonClick);
  form.hashtagInput.addEventListener('input', onHashtagInput);
  form.hashtagInput.addEventListener('keydown', (e) => {
    e.stopPropagation();
  });
  form.commentInput.addEventListener('input', onCommentInput);
  form.commentInput.addEventListener('keydown', (e) => {
    e.stopPropagation();
  });
};

export {validateForm};
