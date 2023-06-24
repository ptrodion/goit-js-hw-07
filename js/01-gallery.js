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
              alt="${description}"
              data-source = "${original}">
            </a>
        </li>`
    )
    .join('');
}

refs.listEl.insertAdjacentHTML(
  'beforeend',
  createGalleryItemsMarkup(galleryItems)
);

refs.listEl.addEventListener('click', onLiIncreaseImage);

function onLiIncreaseImage(e) {
  e.preventDefault();

  if (!e.target.classList.contains('gallery__image')) {
    return;
  }

  const imageUrl = e.target.dataset.source;
  const imageAlt = e.target.alt;

  const instance = basicLightbox.create(
    `
	<img
      src="${imageUrl}" 
      alt="${imageAlt}" width="1400" height="900" >`,
    {
      onShow: () => {
        document.addEventListener('keydown', onEscapeCloseModalWindow);
      },
      onClose: () => {
        document.removeEventListener('keydown', onEscapeCloseModalWindow);
      },
    }
  );
  instance.show();

  function onEscapeCloseModalWindow(e) {
    if (e.code === 'Escape') {
      instance.close();
    }
  }
}
