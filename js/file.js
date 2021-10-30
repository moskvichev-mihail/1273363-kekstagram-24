import {form} from './form.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const file = {
  element: document.querySelector('#upload-file'),
  control: document.querySelector('.img-upload__control'),
};

file.isImg = () => FILE_TYPES.some((it) => file.name.endsWith(it));

file.onUpload = () => {
  const onFileUploadChange = (e) => {
    e.preventDefault();
    file.value = file.element.files[0];
    file.name = file.value.name.toLowerCase();

    if (file.isImg()) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        form.open(file, reader.result);
      });

      reader.readAsDataURL(file.value);
    }
  };

  file.element.addEventListener('change', onFileUploadChange);
};

export {file};
