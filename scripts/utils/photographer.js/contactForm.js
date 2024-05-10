const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const mail = document.getElementById('mail');
const message = document.getElementById('message');

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



const regexContactForm = {
    name: /^[a-z ,.'-]+$/i,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    message: /^[a-zA-Z0-9,#!?.\-+()&"'’\s]+/,
}

function verifyInput(input, regex) {
    return regex.test(input.value);
};

// Récupère les données du form, vérifie avec des regex puis affiche dans la console
const sendBtn = document.querySelector('.send_button');
sendBtn.addEventListener('click', (event) => {
    event.preventDefault();

    let isValid = true;
    if (!verifyInput(firstName, regexContactForm.name)) {
        console.error("Prénom non valide.");
        isValid = false;
    }

    if (!verifyInput(lastName, regexContactForm.name)) {
        console.error("Nom non valide.");
        isValid = false;
    }

    if (!verifyInput(mail, regexContactForm.email)) {
        console.error("Email non valide.");
        isValid = false;
    }

    if (!verifyInput(message, regexContactForm.message)) {
        console.error("Message non valide.");
        isValid = false;
    }

    if (isValid) {
        console.log("Prénom:", firstName.value);
        console.log("Nom:", lastName.value);
        console.log("Email:", mail.value);
        console.log("Message:", message.value);

        firstName.value = '';
        lastName.value = '';
        mail.value = '';
        message.value = '';

        closeModal();
    }
})