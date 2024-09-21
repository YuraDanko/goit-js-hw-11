
export const API_KEY = '46037450-a04b7b74a12a46e49ae394c24';
export const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(searchQuery) {

  return fetch(`${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`).then(
    response => {
      if (!response.ok) {
        throw new Error("Sorry, there are no images matching your search query. Please try again!");
      }
    return response.json();
  })

}





