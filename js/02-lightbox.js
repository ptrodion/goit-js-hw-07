import { galleryItems } from './gallery-items.js';

const refs = {
  listEl: document.querySelector('.gallery'),
};

function createGalleryItemsMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class ="gallery__item">
          <a class ="gallery__link" href="${original}">
            <img class ="gallery__image"
             src="${preview}"
              alt="${description}">
            </a>
        </li>`
    )
    .join('');
}

refs.listEl.insertAdjacentHTML(
  'beforeend',
  createGalleryItemsMarkup(galleryItems)
);

const lightbox = new SimpleLightbox('.gallery li a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
