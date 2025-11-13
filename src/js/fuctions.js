"use strict";

let fetchProducts = (url) => {

    return fetch(url)
        .then(response => {

            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }

            return response.json();

        })
        .then(data => {

            return {
                success: true,
                body: data.products
            };

        })
        .catch(error => {

            return {
                success: false,
                body: error.message
            };

        });
}

let formatDateToYMD = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

let qualification = (numberStr) => {
    const number = parseInt(numberStr);
    return '★'.repeat(number) + '☆'.repeat(5 - number);
};

export { fetchProducts, formatDateToYMD, qualification }