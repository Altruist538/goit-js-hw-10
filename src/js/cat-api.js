const myApiKey =
  'live_eHgRjyqVm2jOcDhnMfrmRItzTCHB9N2lYSquCle74Cchwx1y8tPcxOH6fuxiOKjm';
import axios from 'axios';
import Notiflix from 'notiflix';
const errorEl = document.querySelector('.error');
axios.defaults.headers.common['x-api-key'] = myApiKey;
let arrBreed;
async function fetchBreeds() {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    arrBreed = response.data.map(breed => ({
      value: breed.id,
      text: breed.name,
    }));
  } catch (error) {
    Notiflix.Notify.failure(`Failed to fetch breeds: ${error}`);
  }
}

function fetchCatByBreed(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data)
    .catch(error => {
      Notiflix.Notify.failure(`Failed to fetch breeds: ${error}`);
    });
}
export { arrBreed, fetchBreeds, fetchCatByBreed };
