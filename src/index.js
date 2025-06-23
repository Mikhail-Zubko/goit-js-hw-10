import SlimSelect from 'slim-select';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api.js';


const select = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const spinner = document.querySelector('.spinner');
const slimSelect = new SlimSelect({
    select: select,
    settings: {
        placeholderText: 'Search breeds',
    }
});

const errorMessage = {
    title: 'Error',
    message: '❌ Oops! Something went wrong! Try reloading the page!',
    position: 'topRight',
    color: 'red',
};

function showElement(element) {
    element.style.display = 'flex';
}

function hideElement(element) {
    element.style.display = 'none';
}

