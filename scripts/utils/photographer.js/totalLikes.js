import { getPhotographerData } from '../data.js';

export async function updateTotalLikes(id) {
    const photographerp = await getPhotographerData(id);
    if (!photographerp) {
        console.error('Aucun photographe trouvé avec l\'ID:', id);
        return; // Arrêt de la fonction si aucun photographe n'est trouvé
    }
    const price = photographerp.price;
    if (price === undefined) {
        console.error('Le champ "price" est manquant pour le photographe:', id);
    }
    const totalLikesContainer = document.querySelector('.likes-and-price');
    const totalLikes = [...document.querySelectorAll('.media-likes')]
        .reduce((sum, likesElement) => sum + parseInt(likesElement.textContent.match(/\d+/)[0], 10), 0);

    totalLikesContainer.innerHTML = `<span>${totalLikes} <i class="fa fa-heart" aria-hidden="true"></i></span><span class="price">${price}€/jour</span>`;
}


export function initializeTotalLikes(id) {
    updateTotalLikes(id);
}