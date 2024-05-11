import { getMediaData } from '../data.js';
import { mediaType } from '../../templates/media.js';
import { lightbox } from './lightbox.js';
import { toggleLike } from './likes.js';
import { initializeTotalLikes } from './totalLikes.js';

export default class MediaDisplay {
    constructor(photographerId, photographerName) {
        this.photographerId = photographerId;
        this.photographerName = photographerName;
        this.likedMedia = new Set();
    }

    // Gestion du tri
    async displayMedia(sortBy = 'title') {
        const { media } = await getMediaData();
        const filteredMedia = media.filter(media => media.photographerId === this.photographerId);

        filteredMedia.sort((a, b) => {
            switch (sortBy) {
                case 'likes':
                    return b.likes - a.likes;
                case 'date':
                    return new Date(b.date) - new Date(a.date);
                case 'title':
                default:
                    return a.title.localeCompare(b.title);
            }
        });

        // Affichage des médias 
        const mediaContainer = document.querySelector('.media-container');
        mediaContainer.innerHTML = '';

        filteredMedia.forEach(media => {
            const mediaElement = mediaType(media);
            const element = document.createElement('figure');
            element.className = 'media-item';

            const mediaPath = `./assets/images/${this.photographerName}/${mediaElement.image || mediaElement.video}`;

            let mediaDomElement;

            if (mediaElement.image) {
                mediaDomElement = document.createElement('img');
                mediaDomElement.src = mediaPath;
                mediaDomElement.alt = mediaElement.title + ", closeup view";
                mediaDomElement.setAttribute('data-type', 'image');
                mediaDomElement.setAttribute('data-title', mediaElement.title);
                mediaDomElement.setAttribute("tabindex", 0);
                element.appendChild(mediaDomElement);
            } else if (mediaElement.video) {
                mediaDomElement = document.createElement('video');
                mediaDomElement.src = mediaPath;
                mediaDomElement.controls = true;
                mediaDomElement.setAttribute('data-type', 'video');
                mediaDomElement.setAttribute('data-title', mediaElement.title);
                mediaDomElement.setAttribute("tabindex", 0);
                element.appendChild(mediaDomElement);
            }

            const infoContainer = document.createElement('figcaption');
            infoContainer.className = 'media-info';

            const title = document.createElement('h2');
            title.className = 'media-title';
            title.textContent = mediaElement.title;
            title.tabIndex = 0;
            infoContainer.appendChild(title);

            const likes = document.createElement('span');
            likes.className = 'media-likes';
            likes.setAttribute('aria-label', 'likes');
            likes.setAttribute('data-id', media.id);
            likes.tabIndex = "0";
            likes.innerHTML = `${mediaElement.likes} <span class="fa fa-heart" role="img" aria-label="like" tabindex="0"></span>`;

            likes.addEventListener('click', (event) => toggleLike(event, this.likedMedia, this, filteredMedia, this.photographerId));

            infoContainer.appendChild(likes);
            element.appendChild(infoContainer);
            mediaContainer.appendChild(element);
        });

        lightbox();
        initializeTotalLikes(this.photographerId);
    }
}