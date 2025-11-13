"use strict";

// Sistema de estrellas simplificado
document.addEventListener('DOMContentLoaded', function() {
    //Obtenemos todas las estrellas del contenedor
    const stars = document.querySelectorAll('#star-rating span');
    //Obtenemos el input oculto donde se guardará la calificación para despues guardarla en la base de datos
    const ratingInput = document.getElementById('rating_value');
    //Agregamos un evento click en el que a cada estrella se cambia el color
    stars.forEach(star => {
        star.addEventListener('click', function() {
            //Obtenemos el valor de la calificación del atributo data-rating
            const rating = this.getAttribute('data-rating');
            //Guardamos la calificación en el input oculto
            ratingInput.value = rating;
            
            //Recorremos todas las estrellas para actualizar su apariencia
            stars.forEach((s, index) => {
                s.classList.toggle('text-amber-400', index < rating);
                s.classList.toggle('text-gray-300', index >= rating);
            });
        });
    });
});