const myApiKey =
  'live_eHgRjyqVm2jOcDhnMfrmRItzTCHB9N2lYSquCle74Cchwx1y8tPcxOH6fuxiOKjm';
import axios from 'axios';
const errorEl = document.querySelector('.error');
axios.defaults.headers.common['x-api-key'] = myApiKey;
let arrBreed;
async function fetchBreeds() {
  errorEl.style.visibility = 'hidden';
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    arrBreed = response.data.map(breed => ({
      value: breed.id,
      text: breed.name,
    }));
  } catch (error) {
    errorEl.style.visibility = 'visible';
    console.error(error);
  }
}

function fetchCatByBreed(breedId) {
  errorEl.style.visibility = 'hidden';
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data)
    .catch(error => {
      errorEl.style.visibility = 'visible';
      throw error;
    });
}
export { arrBreed, fetchBreeds, fetchCatByBreed };
