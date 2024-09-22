
const gallery = document.querySelector(`.js-gallery`);
export function renderMarkup(data) {
  gallery.innerHTML = '';
  const markup = data.hits.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
     return `
      <a href="${largeImageURL}" class="gallery-item">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        <ul class="info">
          <li><p>Likes</p> ${likes}</li>
          <li><p>Views</p> ${views}</li>
          <li><p>Comments</p> ${comments}</li>
          <li><p>Downloads</p> ${downloads}</li>
        </ul>
      </a>
    `;
  }).join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  
  
}
