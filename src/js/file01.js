"use strict";

import { fetchProducts } from "./fuctions.js";

let renderProducts = () => {
    fetchProducts('https://samuelchichande.github.io/Proyecto03-landing/coffee-data.json')
        .then(result => {
            if (result.success) {
                let container = document.getElementById("products-container");
                container.innerHTML = "";

                let products = result.body;

                products.forEach(product => {

                    let productHTML = `
                        <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <div class="h-48 bg-cover bg-center"
                        style="background-image: url('[IMAGEURL]')">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">[NAME]</h3>
                        <p class="text-gray-600 mb-4">[DESCRIPTION].</p>
                        <div class="flex justify-between items-center">
                            <span class="text-coffee-gold font-bold text-lg">$[PRICE]</span>
                            <button
                                class="bg-coffee-gold text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-amber-600 transition duration-300">Add
                                to Cart</button>
                        </div>
                    </div>
                </div>`;
                    productHTML = productHTML.replaceAll("[NAME]", product.name);
                    productHTML = productHTML.replaceAll("[DESCRIPTION]", product.description);
                    productHTML = productHTML.replaceAll("[IMAGEURL]", product.image);
                    productHTML = productHTML.replaceAll("[PRICE]", product.price);
                    container.innerHTML += productHTML;

                });
            } else {
                alert(result.body);
            }
        });
};

(() => {
    renderProducts();
})();