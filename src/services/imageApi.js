function fetchImages(name, page) {
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=22561247-42ee984dc1f8b66c15ccf3de0&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`There is no images with name ${name}`));
  });
}
const api = { fetchImages };
export default api;
