"use strict";
// Menu data
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

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

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

// Display menu items
function displayMenuItems() {
    // Coffee items
    coffeeMenuContainer.innerHTML = '';
    menuItems.coffee.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300';
        itemElement.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h3 class="font-bold text-lg mb-2 text-coffee-800">${item.name}</h3>
                        <p class="text-coffee-600 text-sm mb-4">${item.description}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-coffee-700 font-bold">$${item.price.toFixed(2)}</span>
                            <button class="bg-coffee-600 text-white px-4 py-2 rounded-lg hover:bg-coffee-700 transition duration-300 add-to-cart" data-id="${item.id}">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                `;
        coffeeMenuContainer.appendChild(itemElement);
    });

    // Food items
    foodMenuContainer.innerHTML = '';
    menuItems.food.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300';
        itemElement.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h3 class="font-bold text-lg mb-2 text-coffee-800">${item.name}</h3>
                        <p class="text-coffee-600 text-sm mb-4">${item.description}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-coffee-700 font-bold">$${item.price.toFixed(2)}</span>
                            <button class="bg-coffee-600 text-white px-4 py-2 rounded-lg hover:bg-coffee-700 transition duration-300 add-to-cart" data-id="${item.id}">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                `;
        foodMenuContainer.appendChild(itemElement);
    });

    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const itemId = parseInt(e.target.getAttribute('data-id'));
            addToCart(itemId);
        });
    });
}

// Add item to cart
function addToCart(itemId) {
    // Find item in coffee or food menu
    let item = menuItems.coffee.find(item => item.id === itemId);
    if (!item) {
        item = menuItems.food.find(item => item.id === itemId);
    }

    if (!item) return;

    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: 1
        });
    }

    updateCart();
    showCart();
}

// Remove item from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
}

// Update quantity
function updateQuantity(itemId, newQuantity) {
    const item = cart.find(item => item.id === itemId);
    if (item) {
        item.quantity = newQuantity;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            updateCart();
        }
    }
}

// Update cart UI and localStorage
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        emptyCartMessage.classList.remove('hidden');
        cartSubtotal.textContent = '$0.00';
        cartTax.textContent = '$0.00';
        cartTotal.textContent = '$0.00';
        return;
    }

    emptyCartMessage.classList.add('hidden');

    let subtotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'py-4 flex';
        cartItemElement.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded">
                    <div class="ml-4 flex-1">
                        <h4 class="font-medium text-coffee-800">${item.name}</h4>
                        <div class="flex justify-between mt-1">
                            <span class="text-coffee-600">$${item.price.toFixed(2)}</span>
                            <div class="flex items-center">
                                <button class="text-coffee-500 hover:text-coffee-700 quantity-decrease" data-id="${item.id}">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <span class="mx-2">${item.quantity}</span>
                                <button class="text-coffee-500 hover:text-coffee-700 quantity-increase" data-id="${item.id}">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <button class="text-red-500 hover:text-red-700 ml-4 remove-item" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                `;
        cartItemsContainer.appendChild(cartItemElement);
    });

    // Update totals
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    cartTax.textContent = `$${tax.toFixed(2)}`;
    cartTotal.textContent = `$${total.toFixed(2)}`;

    // Add event listeners to quantity buttons
    document.querySelectorAll('.quantity-decrease').forEach(button => {
        button.addEventListener('click', (e) => {
            const itemId = parseInt(e.target.closest('button').getAttribute('data-id'));
            const item = cart.find(item => item.id === itemId);
            if (item) {
                updateQuantity(itemId, item.quantity - 1);
            }
        });
    });

    document.querySelectorAll('.quantity-increase').forEach(button => {
        button.addEventListener('click', (e) => {
            const itemId = parseInt(e.target.closest('button').getAttribute('data-id'));
            const item = cart.find(item => item.id === itemId);
            if (item) {
                updateQuantity(itemId, item.quantity + 1);
            }
        });
    });

    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const itemId = parseInt(e.target.closest('button').getAttribute('data-id'));
            removeFromCart(itemId);
        });
    });
}

// Show/hide cart
function showCart() {
    cartSidebar.classList.remove('translate-x-full');
    cartOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function hideCart() {
    cartSidebar.classList.add('translate-x-full');
    cartOverlay.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Toggle mobile menu
function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
}

// Event listeners
cartBtn.addEventListener('click', showCart);
closeCartBtn.addEventListener('click', hideCart);
cartOverlay.addEventListener('click', hideCart);
mobileMenuBtn.addEventListener('click', toggleMobileMenu);

// Checkout button
checkoutBtn.addEventListener('click', () => {
    if (cart.length > 0) {
        alert('Checkout functionality would be implemented here! Redirecting to payment page.');
        // In a real app, you would redirect to a checkout page
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', toggleMobileMenu);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize the page
displayMenuItems();
updateCart();
