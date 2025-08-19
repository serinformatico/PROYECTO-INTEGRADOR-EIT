import { products } from "./data/products-data.js";
import { addToCart, removeFromCart, getCountClosure } from "./cart.js";

const input = document.querySelector(".searcher__word");
const button = document.querySelector(".button--search");
const gallery = document.querySelector(".gallery");

button.addEventListener("click", () => {
  const query = input.value.toLowerCase();
  gallery.innerHTML = "";

  const results = products.filter((p) =>
    p.title.toLowerCase().includes(query) || p.code.includes(query)
  );

  if (results.length === 0) {
    gallery.innerHTML = "<p>No se encontraron productos.</p>";
    return;
  }

  results.forEach((product) => {
    const counter = getCountClosure();

    const card = document.createElement("article");
    card.classList.add("product-card");

    card.innerHTML = `
      <div class="product-card__image-wrapper">
        <img class="product-card__image" src="${product.image}" alt="Imagen de producto">
      </div>
      <h3 class="product-card__title">${product.title}</h3>
      <p class="product-card__description">${product.description}</p>
      <p class="product-card__code">Código: ${product.code}</p>
      <p class="product-card__price">$${product.price}</p>
      <div class="product-card__actions">
        <button class="button button--add">Agregar al carrito</button>
        <span class="product-card__count">0</span>
        <button class="button button--remove">Quitar del carrito</button>
      </div>
    `;

    const addBtn = card.querySelector(".button--add");
    const removeBtn = card.querySelector(".button--remove");
    const counterDisplay = card.querySelector(".product-card__count");

    addBtn.addEventListener("click", () => {
      addToCart(product);
      counterDisplay.textContent = counter(1);
    });

    removeBtn.addEventListener("click", () => {
      removeFromCart(product.id);
      counterDisplay.textContent = counter(-1);
    });

    gallery.appendChild(card);
  });
});


