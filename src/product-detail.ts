import { products } from "./products.js";

// 商品詳細モーダルの表示
const buttons = document.querySelectorAll<HTMLButtonElement>(
  ".product-detail-button"
);
const productDetail = document.querySelector("#product-detail");
const productModal = document.querySelector("#product-modal");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = Number(button.dataset.productId);
    const product = products.find(
      (product) => product.id === productId
    );

    //console.log(product);

    if (product && productDetail) {
        productDetail.innerHTML = `
            <button id="modal-close">×</button>
            <img src="${product.image}" alt="${product.name}">
            <p><span class="category-icon">${product.category}</span></p>
            <h2>${product.name}</h2>
            <p>${product.price.toLocaleString()}円（税込）</p>
            <p>${product.shortDescription}</p>
            <button id="product-page-button">商品を見る</button>
            `;

            productModal.style.display = "flex";

            const productPageButton = document.querySelector("#product-page-button");
            productPageButton?.addEventListener("click", () => {
                window.location.href = `./product-detail.html?id=${product.id}`;
            });
         }

        const closeButton = document.querySelector("#modal-close");

        closeButton?.addEventListener("click", () => {
        productModal.style.display = "none";
        });
           
  });
});

//商品詳細ページ
const productId = Number(
  new URLSearchParams(location.search).get("id")
);

const product = products.find(
  (product) => product.id === productId
);

const productImage = document.querySelector("#product-image");

if (product && productImage instanceof HTMLImageElement) {
  productImage.src = product.image;
  productImage.alt = product.name;
}

const productName = document.querySelector("#product-name");

if (product && productName) {
  productName.textContent = product.name;
}

const productCategory = document.querySelector("#product-category");

if (product && productCategory) {
  productCategory.innerHTML = `
    <span class="category-icon">${product.category}</span>
  `;
}

const productVolume = document.querySelector("#product-volume");

if (product && productVolume) {
  productVolume.textContent = product.volume;
}

const productPrice = document.querySelector("#product-price");

if (product && productPrice) {
  productPrice.textContent = `${product.price.toLocaleString()}円（税込）`;
}

const productDescription = document.querySelector("#product-description");

if (product && productDescription) {
  productDescription.textContent = product.description;
}

const productUsage = document.querySelector<HTMLElement>("#product-usage");

if (product && productUsage) {
  productUsage.textContent = product.usage;
}

const usageButton = document.querySelector<HTMLButtonElement>("#usage-button");

if (usageButton && productUsage) {
  usageButton.addEventListener("click", () => {
    productUsage.hidden = !productUsage.hidden;
    usageButton.setAttribute("aria-expanded", String(!productUsage.hidden));
  });
}

const productIngredients = document.querySelector<HTMLElement>("#product-ingredients");

if (product && productIngredients) {
  productIngredients.textContent = product.ingredients.join("、");
}

const ingredientsButton = document.querySelector<HTMLButtonElement>("#ingredients-button");

if (ingredientsButton && productIngredients) {
  ingredientsButton.addEventListener("click", () => {
    productIngredients.hidden = !productIngredients.hidden;
    ingredientsButton.setAttribute("aria-expanded", String(!productIngredients.hidden));
  });
}

const addToCartButton = document.querySelector(".add-to-cart-button");
const cartMessage = document.querySelector("#cart-message");
const cartCloseButton = document.querySelector("#cart-close-button");

if (addToCartButton && cartMessage) {
  addToCartButton.addEventListener("click", () => {
    cartMessage.style.display = "flex";
  });
}

if (cartCloseButton && cartMessage) {
  cartCloseButton.addEventListener("click", () => {
    cartMessage.style.display = "none";
  });
}