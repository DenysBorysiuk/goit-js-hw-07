import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRefs = document.querySelector('.gallery');
const galleryMarkup = createMarkup(galleryItems);

galleryRefs.insertAdjacentHTML('beforeend', galleryMarkup);
galleryRefs.addEventListener('click', onClick);

function createMarkup(galleryMarkup) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`;
    })
    .join('');
}

function onClick(evt) {
  evt.preventDefault();
  console.dir(evt.target.dataset.source);
}
// console.log(galleryItems);
