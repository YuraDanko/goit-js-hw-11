
import 'loaders.css';

import { fetchImages } from './js/pixabay-api.js';
import { renderMarkup } from './js/render-functions.js';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector(`.js-search-form`);
const loader = document.getElementById('loader'); 
const gallery = document.querySelector('.gallery');

let lightbox = new SimpleLightbox('.gallery-item', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener(`submit`, onFormSubmit);

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
    return; 
  }

  loader.style.display = 'block';
  gallery.innerHTML = '';  

  fetchImages(query.value)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'No Results',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return; 
      }
      renderMarkup(data);
      lightbox.refresh();
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: error.message,
        position: 'topRight',
      });
    })
    .finally(() => {
      form.reset();
      loader.style.display = 'none';
    });
}