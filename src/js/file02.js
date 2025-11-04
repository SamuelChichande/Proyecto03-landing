"use strict";

const menuItems = {
    coffee: [
        {
            id: 1,
            name: "Espresso",
            description: "A concentrated coffee beverage brewed by forcing hot water under pressure through finely ground coffee",
            price: 3.50,
            image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            id: 2,
            name: "Cappuccino",
            description: "Equal parts espresso, steamed milk and milk foam",
            price: 4.50,
            image: "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
            id: 3,
            name: "Latte",
            description: "Espresso with steamed milk and a light layer of foam",
            price: 4.75,
            image: "https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            id: 4,
            name: "Americano",
            description: "Espresso diluted with hot water, similar to drip coffee but with a different flavor profile",
            price: 3.75,
            image: "https://images.unsplash.com/photo-1551030173-122a2d19f587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
            id: 5,
            name: "Mocha",
            description: "Espresso with chocolate syrup or powder, steamed milk, and often topped with whipped cream",
            price: 5.00,
            image: "https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            id: 6,
            name: "Cold Brew",
            description: "Coffee steeped in cold water for 12-24 hours, resulting in a smooth, less acidic flavor",
            price: 4.50,
            image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a37c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        }
    ],
    food: [
        {
            id: 7,
            name: "Avocado Toast",
            description: "Sourdough bread topped with smashed avocado, cherry tomatoes, and feta cheese",
            price: 8.50,
            image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            id: 8,
            name: "Blueberry Muffin",
            description: "Freshly baked muffin packed with juicy blueberries",
            price: 3.75,
            image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
        },
        {
            id: 9,
            name: "Croissant",
            description: "Buttery, flaky French pastry",
            price: 3.50,
            image: "https://images.unsplash.com/photo-1568405048060-d0bed0a1d2d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
        },
        {
            id: 10,
            name: "Breakfast Sandwich",
            description: "Egg, cheese, and your choice of bacon or sausage on an English muffin",
            price: 7.50,
            image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=749&q=80"
        },
        {
            id: 11,
            name: "Yogurt Parfait",
            description: "Greek yogurt layered with granola and fresh berries",
            price: 6.50,
            image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
            id: 12,
            name: "Chocolate Chip Cookie",
            description: "Classic cookie with melty chocolate chips",
            price: 2.75,
            image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
        }
    ]
};

// DOM elements
const coffeeMenuContainer = document.getElementById('coffee-menu');
const foodMenuContainer = document.getElementById('food-menu');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const cartBtn = document.getElementById('cart-btn');
const closeCartBtn = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartTax = document.getElementById('cart-tax');
const cartTotal = document.getElementById('cart-total');
const emptyCartMessage = document.getElementById('empty-cart-message');
const checkoutBtn = document.getElementById('checkout-btn');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

(() => {

})();