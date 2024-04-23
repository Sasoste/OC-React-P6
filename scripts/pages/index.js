import Photographer from '../templates/photographer.js';
import { getPhotographers } from '../utils/data.js';

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerInstance = new Photographer(photographer);
    const userCardDOM = photographerInstance.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();