"use strict";

let renderProducts = () => {
    fetchProducts('https://data-dawm.github.io/datum/reseller/products.json')
        .then(result => {
            if (result.success) {
                let container = document.getElementById("products-container");
                container.innerHTML = "";

                let products = result.body.slice(0, 6);

                products.forEach(product => {

                    let productHTML = `
                        <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <div class="h-48 bg-cover bg-center"
                        style="background-image: url('[IMAGEURL]')">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">[NAME]</h3>
                        <p class="text-gray-600 mb-4">[PRODUCT.IMGURL].</p>
                        <div class="flex justify-between items-center">
                            <span class="text-coffee-gold font-bold text-lg">$3.50</span>
                            <button
                                class="bg-coffee-gold text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-amber-600 transition duration-300">Add
                                to Cart</button>
                        </div>
                    </div>
                </div>`;
                    productHTML = productHTML.replaceAll("[PRODUCT.TITLE]", product.title.length > 20 ? product.title.substring(0, 20) + "..." : product.title);
                    productHTML = productHTML.replaceAll("[PRODUCT.IMGURL]", product.imgUrl);
                    productHTML = productHTML.replaceAll("[PRODUCT.PRICE]", product.price);
                    productHTML = productHTML.replaceAll("[PRODUCT.PRODUCTURL]", product.productURL);
                    productHTML = productHTML.replaceAll('[PRODUCT.CATEGORY_ID]', product.category_id);

                    container.innerHTML += productHTML;

                });
            } else {
                alert(result.body);
            }
        });
};