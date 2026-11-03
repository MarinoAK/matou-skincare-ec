import { products } from "./products.js";

const categoryFilter = document.querySelector<HTMLSelectElement>("#category-filter");
const priceFilter = document.querySelector<HTMLSelectElement>("#price-filter");
const keywordFilter = document.querySelector<HTMLInputElement>("#keyword-filter");
const productList = document.querySelector("#product-list");
const searchButton = document.querySelector("#search-button");
const productItems = productList.querySelectorAll<HTMLElement>(".product-item");

function matchesPrice(price: number, priceRange: string): boolean {
    if (priceRange === "all") {
        return true;
    }

    if (priceRange === "2000-3000") {
        return price >= 2000 && price <= 3000;
    }

    if (priceRange === "3001-4000") {
        return price >= 3001 && price <= 4000;
    }

    if (priceRange === "4001-5000") {
        return price >= 4001 && price <= 5000;
    }

    if (priceRange === "5001-") {
        return price >= 5001;
    }

    return false;
}

if (searchButton && categoryFilter && priceFilter && keywordFilter) {
    searchButton.addEventListener("click", () => {
        const displayProducts = products.filter((product) => {
            const matchesCategory =
                categoryFilter.value === "all" || product.category === categoryFilter.value;

            const matchesSelectedPrice = matchesPrice(product.price, priceFilter.value);
            const matchesKeyword = product.name.includes(keywordFilter.value);

            return matchesCategory && matchesSelectedPrice && matchesKeyword;
        });


        if (productList) {
            productItems.forEach((item) => {
                const productId = Number(
                    item.querySelector<HTMLButtonElement>(".product-detail-button")?.dataset.productId
                );

                const shouldDisplay = displayProducts.some(
                    (product) => product.id === productId
                );

                if (shouldDisplay) {
                    item.style.display = "";
                } else {
                    item.style.display = "none";
                }
                    });
                }

            });
        }

