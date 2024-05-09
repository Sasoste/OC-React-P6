// Affichage et fermeture de la modale
function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "flex";
    document.body.style.overflow = 'hidden';
}

const contactBtn = document.querySelector('.contact_button')
contactBtn.addEventListener('click', () => {
    displayModal();
});

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    document.body.style.overflow = 'auto'
}

const closeBtn = document.querySelector('.close_button');
closeBtn.addEventListener('click', () => {
    closeModal();
});

document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
});

// Récupère les données du form et affiche dans la console
const sendBtn = document.querySelector('.send_button');
sendBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const mail = document.getElementById('mail').value;
    const message = document.getElementById('message').value;

    console.log(firstName);
    console.log(lastName);
    console.log(mail);
    console.log(message);
})