import { products } from "./products.js";

//const product = products[0];

//console.log(product);

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
            <p>${product.price}円</p>
            <p>${product.description}</p>
            `;

            productModal.style.display = "flex";
         }

        const closeButton = document.querySelector("#modal-close");

        closeButton?.addEventListener("click", () => {
        productModal.style.display = "none";
        });
           
  });
});
