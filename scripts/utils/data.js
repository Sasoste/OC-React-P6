// La variable jsonData permet d'éviter de recharger les données comme elles seront déjà stockées dans celle-ci. 
let jsonData = null;

async function loadPhotographerData() {
    if (!jsonData) {
        const response = await fetch("../../data/photographers.json");
        jsonData = await response.json();
    }
    return jsonData;
}

async function getPhotographers() {
    const data = await loadPhotographerData();
    return { photographers: data.photographers };
}

async function getPhotographerData(id) {
    const data = await loadPhotographerData();
    return data.photographers.find(photographer => photographer.id === parseInt(id, 10));
}

async function getMediaData() {
    const data = await loadPhotographerData();
    return { media: data.media };
}

export { getPhotographers, getPhotographerData, getMediaData };