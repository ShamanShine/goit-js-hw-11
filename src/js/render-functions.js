function PicTemplate(pic) {
  return `<div class="image-box">
    <div class="image-container">
      <a href="${pic.largeImageURL}" data-lightbox="gallery">
        <img src="${pic.webformatURL}" alt="${pic.tags}" class="my-image">
      </a>
    </div>
    <div class="image-body">
      <ul>
        <li class="image-like">Likes ${pic.likes}</li>
        <li class="image-views">Views ${pic.views}</li>
        <li class="image-Comments">Comments ${pic.comments}</li>
        <li class="image-Downloads">Downloads ${pic.downloads}</li>
      </ul>
    </div>
  </div>`;
}

export function renderPic(refs, pics) {
  refs.infoEl.innerHTML = ''; // очищаем предыдущие результаты

  if (!pics || pics.length === 0) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'center',
      transitionIn: 'fadeInLeft',
    });
  } else {
    pics.forEach(pic => {
      const markup = PicTemplate(pic);
      refs.infoEl.insertAdjacentHTML('beforeend', markup);
    });

    //     // Инициализация SimpleLightbox после добавления новых элементов
    //     const lightbox = new SimpleLightbox('.image-box', {
    //       overlay: true,
    //       overlayOpacity: 0.9,
    //       animationSpeed: 1000,
    //       scrollZoomFactor: 0.1,
    //       navText: ['←', '→'],

    //       captionsData: 'alt',
    //       captionDelay: 250,
    //     });
    //     lightbox.refresh();
  }
}
