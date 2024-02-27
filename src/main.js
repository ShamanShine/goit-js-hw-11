// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { searchImages } from './js/pixabay-api.js';
import { renderPic } from './js/render-functions.js';

const refs = {
  formEl: document.querySelector('.search-form'),
  infoEl: document.querySelector('.img-container'),
};

refs.formEl.addEventListener('submit', async event => {
  event.preventDefault();

  const query = event.target.elements.query.value.trim();

  if (query === '') {
    iziToast.error({
      message: 'Please enter a search query',
      position: 'center',
      transitionIn: 'fadeInLeft',
    });
    return;
  }

  try {
    const data = await searchImages(query);

    if (data.hits && data.hits.length > 0) {
      renderPic(refs, data.hits, 9); // Указываем количество изображений для отображения.Надо 9
    } else {
      iziToast.error({
        message: 'No images found for the given query',
        position: 'center',
        transitionIn: 'fadeInLeft',
      });
    }
  } catch (error) {
    console.error(error);
    iziToast.error({
      message: 'Failed to fetch images. Please try again later.',
      position: 'center',
      transitionIn: 'fadeInLeft',
    });
  }

  event.target.reset();

  refs.infoEl.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

const lightbox = new SimpleLightbox('.img-container', {
  overlay: true,
  overlayOpacity: 0.9,
  animationSpeed: 1000,
  scrollZoomFactor: 0.1,
  navText: ['←', '→'],
  captionsData: 'alt',
  captionDelay: 250,
});
// lightbox.refresh();
