import { updateTotalLikes } from "./totalLikes.js";

// Ajout de like sur média 
export function toggleLike(event, likedMedia, mediaDisplay, mediaData, photographerId) {
    const mediaId = parseInt(event.target.closest('.media-likes').getAttribute('data-id'), 10);
    const likesElement = event.target.closest('.media-info').querySelector('.media-likes');
    const sortBtn = document.querySelector('.btn_sort.selected');
    let currentLikes = parseInt(likesElement.textContent.match(/\d+/)[0], 10);
    let mediaItem = mediaData.find(media => media.id === mediaId);

    if (likedMedia.has(mediaId)) {
        currentLikes--;
        likedMedia.delete(mediaId);
    } else {
        currentLikes++;
        likedMedia.add(mediaId);
    }

    mediaItem.likes = currentLikes;
    likesElement.innerHTML = `${currentLikes} <i class="fa fa-heart" aria-hidden="true"></i>`;

    // Met à jour les likes totaux chaque fois que toggleLike est appelé
    updateTotalLikes(photographerId);
    const sortType = sortBtn.getAttribute('data-sort');
    mediaDisplay.displayMedia(sortType);
}