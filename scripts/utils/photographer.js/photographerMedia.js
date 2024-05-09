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



        const mediaContainer = document.querySelector('.media-container');
        mediaContainer.innerHTML = '';

        filteredMedia.forEach(media => {
            const mediaElement = mediaType(media);
            const element = document.createElement('div');
            element.className = 'media-item';

            const mediaPath = `./assets/images/${this.photographerName}/${mediaElement.image || mediaElement.video}`;

            let mediaDomElement;

            if (mediaElement.image) {
                mediaDomElement = document.createElement('img');
                mediaDomElement.src = mediaPath;
                mediaDomElement.alt = mediaElement.title + ", closeup view";
                mediaDomElement.setAttribute('data-type', 'image');
                mediaDomElement.setAttribute('data-title', mediaElement.title);
                element.appendChild(mediaDomElement);
            } else if (mediaElement.video) {
                mediaDomElement = document.createElement('video');
                mediaDomElement.src = mediaPath;
                mediaDomElement.controls = true;
                mediaDomElement.setAttribute('data-type', 'video');
                mediaDomElement.setAttribute('data-title', mediaElement.title);
                element.appendChild(mediaDomElement);
            }

            const infoContainer = document.createElement('div');
            infoContainer.className = 'media-info';

            const title = document.createElement('span');
            title.className = 'media-title';
            title.textContent = mediaElement.title;
            infoContainer.appendChild(title);

            const likes = document.createElement('span');
            likes.className = 'media-likes';
            likes.setAttribute('aria-label', 'likes');
            likes.setAttribute('data-id', media.id);
            likes.innerHTML = `${mediaElement.likes} <i class="fa fa-heart" aria-hidden="true"></i>`;

            likes.addEventListener('click', (event) => toggleLike(event, this.likedMedia, this, filteredMedia, this.photographerId));

            infoContainer.appendChild(likes);
            element.appendChild(infoContainer);
            mediaContainer.appendChild(element);
        });

        lightbox();
        initializeTotalLikes(this.photographerId);
    }
}