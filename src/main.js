import { getImages } from './js/pixabay-api';
import { imageTemplate } from './js/render-functions';
import { imagesTemplate } from './js/render-functions';

export const refs = {
  galleryElem: document.querySelector('.gallery'),
  searchBtn: document.querySelector('.search-btn'),
  formElem: document.querySelector('.search-form'),
  inputElem: document.querySelector('.search-input'),
};

refs.formElem.addEventListener('submit', e => {
  e.preventDefault();
  const userText = refs.inputElem.value;
  getImages(userText)
    .then(data => {
      const markup = imagesTemplate(data);
      refs.galleryElem.innerHTML = markup;
    })
    .catch(error => console.log('error'));
  refs.formElem.reset();
});
