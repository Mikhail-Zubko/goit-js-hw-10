import axios from 'axios';

axios.defaults.headers.common["x-api-key"] =
    "live_VLRLSKg1se1fhsd8NQlfcQFWQ2iTMavlGChe977I9LwkGYVvI91HpWU9A0SIpBdE";

export async function fetchBreeds() {
  return await axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data);
}

export async function fetchCatByBreed(breedId) {
  return await axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data);
}