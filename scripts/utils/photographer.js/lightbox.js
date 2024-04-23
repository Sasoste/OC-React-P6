export function lightbox() {
    const mediaItems = document.querySelectorAll('.media-item img, .media-item video');
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.querySelector('.lightbox-content');
    let currentIndex = 0;

    // Fonction pour afficher le média dans la lightbox
    const displayMediaInLightbox = (index) => {
        const media = mediaItems[index];
        const mediaType = media.tagName.toLowerCase();
        let mediaInLightbox;
        const mediaTitleText = media.getAttribute('data-title');

        if (mediaType === 'img') {
            mediaInLightbox = document.createElement('img');
            mediaInLightbox.src = media.src;
        } else if (mediaType === 'video') {
            mediaInLightbox = document.createElement('video');
            mediaInLightbox.src = media.src;
            mediaInLightbox.controls = true;
            mediaInLightbox.autoplay = true;
        }

        const mediaTitle = document.createElement('span');
        mediaTitle.className = 'lightbox-title';
        mediaTitle.textContent = mediaTitleText;

        lightboxContent.innerHTML = '';
        lightboxContent.appendChild(mediaInLightbox);
        lightboxContent.appendChild(mediaTitle);
        lightbox.style.display = 'flex';
    };

    mediaItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentIndex = index;
            displayMediaInLightbox(currentIndex);
        });
    });

    document.querySelector('.close').addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Précédent
    document.querySelector('.prev').addEventListener('click', (e) => {
        e.preventDefault(); // Empêche le comportement par défaut des liens
        currentIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length;
        displayMediaInLightbox(currentIndex);
    });

    // Suivant
    document.querySelector('.next').addEventListener('click', (e) => {
        e.preventDefault();
        currentIndex = (currentIndex + 1) % mediaItems.length;
        displayMediaInLightbox(currentIndex);
    });
}