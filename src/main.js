
import { fetchImages } from './js/pixabay-api.js';
import { renderMarkup } from './js/render-functions.js';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector(`.js-search-form`);
let lightbox = new SimpleLightbox('.gallery-item', {
  captionsData: 'alt',
  captionDelay: 250,
});


form.addEventListener(`submit`, onFormSubmit)

function onFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const { query } = form.elements;

  if (query.value.trim() === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return; // Зупиняємо виконання, якщо поле порожнє
  }

fetchImages(query.value)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'No Results',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return; // Зупиняємо виконання, якщо немає результатів
      }
      renderMarkup(data);
    })
    .catch(error => {
    iziToast.error({
      title: ``,
      message: error.message,
      position: 'topRight',
    });
    })
     .finally(() => {
      // Очищення форми завжди виконується після запиту
      form.reset();
    });
    ;
  
    
}
