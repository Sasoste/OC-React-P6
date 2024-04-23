import { setupDropdown } from '../utils/photographer.js/dropdown.js';
import MediaDisplay from '../utils/photographer.js/photographerMedia.js';
import { displayPhotographer } from '../utils/photographer.js/photographerHeader.js';



function init() {
    const urlParams = new URLSearchParams(window.location.search);
    const photographerId = parseInt(urlParams.get('id'), 10);

    if (photographerId) {
        displayPhotographer(photographerId).then(photographer => {
            const photographerName = photographer.name.replace(/\s+/g, '_');
            const mediaDisplay = new MediaDisplay(photographerId, photographerName);
            mediaDisplay.displayMedia().then(() => {
                setupDropdown(mediaDisplay);

            });
        });
    }
}

init();