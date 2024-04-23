// Permet d'afficher les données dans la partie photograph-header de la page photographer.html ou de renvoyer sur la page d'accueil si pas d'id trouvé.
import { getPhotographerData } from '../data.js';

export async function displayPhotographer(id) {
    const photographer = await getPhotographerData(id);
    if (photographer) {
        const { name, city, country, tagline, portrait } = photographer;
        const header = document.querySelector('.photograph-header');
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        const locationSpan = document.createElement('span');
        const taglineSpan = document.createElement('span');
        const img = document.createElement('img');

        div.className = "textInfo";
        h1.textContent = name;
        h1.className = "name";
        locationSpan.textContent = `${city}, ${country}`;
        locationSpan.className = "location";
        taglineSpan.textContent = tagline;
        taglineSpan.className = "tagline";
        img.src = `assets/photographers/${portrait}`;
        img.alt = name;
        img.className = "img";

        div.appendChild(h1);
        div.appendChild(locationSpan);
        div.appendChild(taglineSpan);
        header.insertBefore(div, header.firstChild);
        header.appendChild(img);
    } else {
        window.location.href = '/index.html';
    }
    return photographer;
}