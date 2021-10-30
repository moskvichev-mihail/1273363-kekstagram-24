import {modal} from './modal.js';

const uploadFileModal = {...modal};

const openUploadFileModal = (element, target, callBack = () => {}) => {
  uploadFileModal.init(element, target, callBack);
  uploadFileModal.open();
};

const closeUploadFileModal = (callBack = () => {}) => {
  uploadFileModal.close();
  callBack();
};

export {openUploadFileModal, closeUploadFileModal};
