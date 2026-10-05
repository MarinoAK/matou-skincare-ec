import { defineConfig } from "vite";
import { resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  base: "/matou-skincare-ec/",

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        products: resolve(__dirname, "pages/products.html"),
        productDetail: resolve(__dirname, "pages/product-detail.html"),
        campaign: resolve(__dirname, "pages/campaign.html"),
        firstGuide: resolve(__dirname, "pages/first-guide.html"),
      },
    },
  },
});