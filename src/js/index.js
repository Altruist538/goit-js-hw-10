import axios from 'axios';
const myKey =
  'live_eHgRjyqVm2jOcDhnMfrmRItzTCHB9N2lYSquCle74Cchwx1y8tPcxOH6fuxiOKjm';
axios.defaults.headers.common['x-api-key'] = myKey;
const loderPEl = document.querySelector('p .loader');
const loderSpanEl = document.querySelector('span .loader');
const breedSelectEl = document.querySelector('.breed-select');
const errorEl = document.querySelector('.error');
const catInfoEl = document.querySelector('.cat-info');

// fetchCatBtm.addEventListener('click', () => {
//   fetchCat()
//     .then(search => renderCatCad(search))
//     .catch(error => console.log(error));
// });
function fetchCat() {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${myKey}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderCatCad(card) {
  const markup = `<li>
      <img src="${card.url}" loading="lazy" width="360px" alt="Image cat" />
          <h2 class="post-title">${card.breeds[0].name}</h2>
          <p>${card.breeds[0].description}</p>
                  <p>${card.breeds[0].temperament}</p>
        </li>`;
  return (userList.innerHTML = markup);
}
