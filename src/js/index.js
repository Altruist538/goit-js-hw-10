import { arrBreed, fetchBreeds, fetchCatByBreed } from '/src/js/cat-api';
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
const loader = document.querySelector('p.loader');
const loaderSpiner = document.querySelector('span.loader');
const breedSelectEl = document.querySelector('.breed-select');

const catInfoEl = document.querySelector('.cat-info');

(async function () {
  await fetchBreeds();
  let select = new SlimSelect({
    select: '#selectElement',
    data: arrBreed,
    placeholder: '--Breed--',
    allowDeselect: true,
    showFirstOption: false,
  });
  select.onChange = info => {
    let selectedBreed = info.value();
    if (selectedBreed) {
      return selectedBreed;
    }
  };
})();

breedSelectEl.addEventListener('change', event => {
  loader.style.visibility = 'visible';
  loaderSpiner.style.visibility = 'visible';
  catInfoEl.innerHTML = '';
  let breedId = event.currentTarget.value;
  return fetchCatByBreed(breedId).then(data =>
    renderCatCad({
      url: data[0].url,
      name: data[0].breeds[0].name,
      description: data[0].breeds[0].description,
      temperament: data[0].breeds[0].temperament,
    })
  );
});

function renderCatCad({ url, name, description, temperament }) {
  const markup = `
      <img src="${url}" class="catImg" loading="lazy" width="360px" alt="Image cat" />
          <div class="catInfo"><h2 class="post-title">${name}</h2>
          <p>${description}</p>
          <p>Temperament: ${temperament}</p>
          </div>
        `;
  loader.style.visibility = 'hidden';
  loaderSpiner.style.visibility = 'hidden';
  return (catInfoEl.innerHTML = markup);
}
