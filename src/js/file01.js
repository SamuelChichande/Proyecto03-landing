"use strict";

import { fetchProducts, formatDateToYMD, qualification } from "./fuctions.js";
import { saveReview, getReviews } from "./firebase.js";

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

let enableForm = () => {
    const form = document.getElementById("form_review");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const selectName = document.getElementById("user_name");
            const selectQualification = document.getElementById("rating_value");
            const selectComment = document.getElementById("user_comment");
            const selectProduct = document.getElementById("favorite_product");

            const name = selectName ? selectName.value : "";
            const qualification = selectQualification ? selectQualification.value : "";
            const comment = selectComment ? selectComment.value : "";
            const product = selectProduct ? selectProduct.value : "";

            saveReview(name, qualification, comment, product)
                .then(result => {
                    if (result && result.status === "success") {
                        alert("¡La reseña se ha guardado exitosamente!");
                    } else {
                        alert("Error al guardar la reseña: " + (result?.message || "Error desconocido"));
                    }
                })
                .catch(err => {
                    alert("Error al guardar la reseña: " + (err?.message || String(err)));
                });

            //Limpiamos el formulario
            document.getElementById('form_review').reset();
        });
    }
};

let showReviews = async () => {
    try {
        const result = await getReviews();
        if (result.status === "success") {
            // Convertir el objeto a array si es necesario
            const reviewsArray = Object.values(result.data);

            // Mostrar en el HTML
            const container = document.getElementById("reviews");

            container.innerHTML = "";

            reviewsArray.forEach(review => {

                    let reviewsHTML = `
                        <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
                            <div class="flex items-center mb-4">
                                <div class="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                                    <span class="text-amber-900 font-bold">[FIRST_CHARACTER]</span>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-800">[NAME]</h4>
                                    <div class="flex items-center">
                                        <span class="text-amber-400 text-lg">[SCORES]</span>
                                        <span class="text-gray-500 text-sm ml-2">[DATE]</span>
                                    </div>
                                </div>
                            </div>
                            <p class="text-gray-600 mb-3">"[COMMENT]."</p>
                            <p class="text-amber-700 text-sm"><strong>Favorito:</strong> [FAVORITE_DRINK]</p>
                        </div>`;
                    reviewsHTML = reviewsHTML.replaceAll("[FIRST_CHARACTER]", review.name.charAt(0).toUpperCase());
                    reviewsHTML = reviewsHTML.replaceAll("[NAME]", review.name);
                    reviewsHTML = reviewsHTML.replaceAll("[SCORES]", qualification(review.scores));
                    reviewsHTML = reviewsHTML.replaceAll("[DATE]", formatDateToYMD(review.timestamp));
                    reviewsHTML = reviewsHTML.replaceAll("[COMMENT]", review.review);
                    reviewsHTML = reviewsHTML.replaceAll("[FAVORITE_DRINK]", review.favoriteDrink);
                    container.innerHTML += reviewsHTML;

                });
        } else if (result.status === "empty") {
            document.getElementById("reviews").innerHTML = 
                '<p class="text-gray-500 text-center py-8">No hay reseñas aún</p>';
        } else {
            alert('Error: ' + result.message);
        }
    } catch (error) {
        console.error("Error en showReviews:", error);
        alert('Error al cargar las reseñas');
    }
};

(() => {
    renderProducts();
    enableForm();
    showReviews();
})();