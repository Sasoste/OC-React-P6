export function setupDropdown(mediaDisplay) {

    const selectedBtn = document.querySelector('.btn_sort.selected');
    // Fonction pour mettre à jour les options du menu déroulant
    function updateDropdownOptions(selectedCriteria) {
        const options = [{ text: "Titre", sort: "title" }, { text: "Popularité", sort: "likes" }, { text: "Date", sort: "date" }];
        const dropdownContent = document.querySelector('.dropdown_content');

        // Efface les options existantes
        dropdownContent.innerHTML = '';

        // Crée de nouvelles options pour les critères non sélectionnés
        options.forEach(option => {
            if (option.sort !== selectedCriteria) {
                const button = document.createElement('button');
                button.textContent = option.text;
                button.setAttribute('data-sort', option.sort); // Utilisez 'likes' au lieu de 'popularité'
                button.className = 'btn_sort';
                button.addEventListener('click', function () {
                    selectSortOption(this);
                });
                dropdownContent.appendChild(button);
            }
        });
    }

    // Fonction pour gérer la sélection d'une option de tri
    function selectSortOption(button) {
        const selectedSort = button.getAttribute('data-sort');
        const selectedBtn = document.querySelector('.btn_sort.selected');

        // Met à jour le bouton principal avec le nouveau choix
        selectedBtn.innerHTML = button.textContent + ' <span class="fa fa-chevron-down"></span>';
        selectedBtn.setAttribute('data-sort', selectedSort);
        selectedBtn.classList.remove('active');

        // Met à jour les options du menu déroulant
        updateDropdownOptions(selectedSort);

        // Appelle displayMedia avec le nouveau critère de tri
        mediaDisplay.displayMedia(selectedSort);

        // Ferme le menu déroulant
        document.querySelector('.dropdown_content').style.display = 'none';
    }


    // Initialisation
    selectedBtn.addEventListener('click', function () {
        const dropdownContent = document.querySelector('.dropdown_content');
        const isDropdownOpen = dropdownContent.style.display === 'flex';
        dropdownContent.style.display = isDropdownOpen ? 'none' : 'flex';

        // Bascule la classe 'active' basée sur l'état ouvert/fermé
        this.classList.toggle('active', !isDropdownOpen);

        // Bascule également l'icône de flèche
        this.querySelector('.fa-chevron-down').classList.toggle('rotated', !isDropdownOpen);
    });

    // Applique le gestionnaire de clics à chaque bouton du menu déroulant initial
    document.querySelectorAll('.dropdown_content button').forEach(button => {
        button.addEventListener('click', function () {
            selectSortOption(this);
        });
    });
}