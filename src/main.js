import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
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
    renderPic(refs, data.hits);
  } catch (error) {
    console.error(error);
    iziToast.error({
      message: 'Failed to fetch images. Please try again later.',
      position: 'center',
      transitionIn: 'fadeInLeft',
    });
  }

  event.target.reset();

  refs.formEl.scrollIntoView({
    behavior: 'smooth', // Плавный скроллинг
    block: 'start', // Выравнивание по верхней границе видимой области
  });
});

// Инициализация SimpleLightbox после добавления новых элементов
const lightbox = new SimpleLightbox('.image-box', {
  overlay: true,
  overlayOpacity: 0.9,
  animationSpeed: 1000,
  scrollZoomFactor: 0.1,
  navText: ['←', '→'],

  captionsData: 'alt',
  captionDelay: 250,
});
lightbox.refresh();
