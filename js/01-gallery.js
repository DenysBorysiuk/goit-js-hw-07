import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRefs = document.querySelector('.gallery');
const galleryMarkup = createMarkup(galleryItems);
let instance;

galleryRefs.insertAdjacentHTML('beforeend', galleryMarkup);
galleryRefs.addEventListener('click', onModalOpen);

function createMarkup(gallery) {
  return gallery
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item"><a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a></div>`
    )
    .join('');
}

function onModalOpen(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  instance = basicLightbox.create(`
        <img src="${evt.target.dataset.source}" width="1280">
    `);

  instance.show();

  window.addEventListener('keydown', onModalclose);
}

function onModalclose(evt) {
  if (!instance.visible()) {
    window.removeEventListener('keydown', onModalclose);
  } else if (evt.code === 'Escape') {
    instance.close();
    window.removeEventListener('keydown', onModalclose);
  }
}
