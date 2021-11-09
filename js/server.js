const SERVER_URL = 'https://24.javascript.pages.academy/kekstagram';

const getData = (onSuccess, onError) => {
  fetch(`${SERVER_URL}/data`,
    {
      method: 'GET',
      credentials: 'same-origin',
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((json) => {
      onSuccess(json);
    })
    .catch((err) => {
      onError(err);
    });
};


const sendData = (data, onSuccess, onError) => {
  fetch(
    SERVER_URL,
    {
      method: 'POST',
      mode: 'no-cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: data,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }
    })
    .catch(() => {
      onError();
    });
};

export {getData, sendData};
