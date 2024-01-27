function photographerTemplate(data) {
  const { name, portrait, city, country, tagline, price } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const divImg = document.createElement("div");
    divImg.className = "imgContainer";
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    h2.textContent = name;
    const h3 = document.createElement("h3");
    h3.textContent = city + ", " + country;
    h3.className = "location";
    const taglineSpan = document.createElement("span");
    taglineSpan.textContent = tagline;
    taglineSpan.classeName = "tagline";
    const priceSpan = document.createElement("span");
    priceSpan.textContent = price + "€/jour";
    priceSpan.className = "price";
    article.appendChild(divImg);
    divImg.appendChild(img);
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(taglineSpan);
    article.appendChild(priceSpan);
    return article;
  }
  return { name, picture, getUserCardDOM };
}
// mettre conteneur sur l'img, overflow hidden, height width fix, et scale sur l'img
