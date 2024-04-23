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
    const img = document.createElement("img");
    img.className = "img";
    img.src = this.picture;
    img.alt = "";
    const h2 = document.createElement("h2");
    h2.textContent = this.name;
    h2.className = "name";
    const h3 = document.createElement("h3");
    h3.textContent = `${this.city}, ${this.country}`;
    h3.className = "location";
    const taglineSpan = document.createElement("span");
    taglineSpan.textContent = this.tagline;
    taglineSpan.className = "tagline";
    const priceSpan = document.createElement("span");
    priceSpan.textContent = `${this.price}€/jour`;
    priceSpan.className = "price";

    article.appendChild(link);
    link.appendChild(img);
    link.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(taglineSpan);
    article.appendChild(priceSpan);

    return article;
  }
}