// Classe pour l'affichage des photographes sur index.html

export default class Photographer {
  constructor(data) {
    const { name, portrait, city, country, tagline, price, id } = data;
    this.name = name;
    this.portrait = portrait;
    this.city = city;
    this.country = country;
    this.tagline = tagline;
    this.price = price;
    this.id = id;
    this.picture = `assets/photographers/${portrait}`;
  }

  getUserCardDOM() {
    const article = document.createElement("article");
    const link = document.createElement("a");
    link.href = `../../photographer.html?id=${this.id}`;
    link.tabIndex = 0;
    const img = document.createElement("img");
    img.className = "img";
    img.src = this.picture;
    img.alt = `${this.name}`;
    const h2 = document.createElement("h2");
    h2.textContent = this.name;
    h2.className = "name";
    h2.setAttribute("aria-label", this.name);
    h2.tabIndex = 0;
    const h3 = document.createElement("h3");
    h3.textContent = `${this.city}, ${this.country}`;
    h3.className = "location";
    h3.setAttribute("aria-label", `${this.city}, ${this.country}`);
    h3.tabIndex = 0;
    const taglineSpan = document.createElement("span");
    taglineSpan.textContent = this.tagline;
    taglineSpan.className = "tagline";
    taglineSpan.setAttribute("aria-label", `${this.tagline}`);
    taglineSpan.tabIndex = 0;
    const priceSpan = document.createElement("span");
    priceSpan.textContent = `${this.price}€/jour`;
    priceSpan.className = "price";
    priceSpan.setAttribute("aria-label", `${this.price}€/jour`);
    priceSpan.tabIndex = 0;

    article.appendChild(link);
    link.appendChild(img);
    link.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(taglineSpan);
    article.appendChild(priceSpan);

    return article;
  }
}