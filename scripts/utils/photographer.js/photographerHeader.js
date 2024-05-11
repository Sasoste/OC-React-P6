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
        h1.setAttribute("aria-label", name);
        h1.tabIndex = 0;
        locationSpan.textContent = `${city}, ${country}`;
        locationSpan.className = "location";
        locationSpan.setAttribute("aria-label", `${city}, ${country}`);
        locationSpan.tabIndex = 0;
        taglineSpan.textContent = tagline;
        taglineSpan.className = "tagline";
        taglineSpan.setAttribute("aria-label", tagline);
        taglineSpan.tabIndex = 0;
        img.src = `assets/photographers/${portrait}`;
        img.alt = name;
        img.className = "img";
        img.tabIndex = 0;

        div.appendChild(h1);
        div.appendChild(locationSpan);
        div.appendChild(taglineSpan);
        header.insertBefore(div, header.firstChild);
        header.appendChild(img);

        document.getElementById("contact_modal").setAttribute("aria-label", `Contact me ${name}`)
        document.querySelector(".contact_title").innerHTML = `Contactez-moi ${name}`;
    } else {
        window.location.href = '/index.html';
    }
    return photographer;
}