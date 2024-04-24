function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "flex";
    document.body.style.overflow = 'hidden';
    document.html.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    document.body.style.overflow = 'auto'
}

document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
});