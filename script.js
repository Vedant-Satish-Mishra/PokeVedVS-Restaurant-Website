// Sacred Spoon - Restaurant Script
// Interactions: Shopping Cart (Local Storage), Filter tabs, Search overlay, Sticky Header, Modal dialogues, Toast alerts, FAQ toggles, Reviews slider

// Food Database (Details, Prep time, Calories, Category)
const foodDatabase = {
    "pakoda": {
        id: "pakoda",
        name: "Onion Pakoda",
        price: 5.99,
        img: "image/pakoda.jpeg",
        category: "snacks",
        prep: "10 mins",
        calories: "210 Kcal",
        rating: 4.5,
        stars: '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-fill"></i>',
        desc: "Onion slice fritters seasoned with fresh ginger, chilies, cilantro, and hand-milled spices, cooked to crisp perfection in organic peanut oil."
    },
    "chola-bhatura": {
        id: "chola-bhatura",
        name: "Chole Bhature",
        price: 11.99,
        img: "image/chola bhatura.jpeg",
        category: "main",
        prep: "20 mins",
        calories: "550 Kcal",
        rating: 4.9,
        stars: '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>',
        desc: "Plump chickpeas slow-stewed in an aromatic dark roasted onion-tomato gravy with garam masala, served alongside fluffy, golden puffed flatbreads."
    },
    "dal-tadka": {
        id: "dal-tadka",
        name: "Dal Tadka",
        price: 9.49,
        img: "image/dal tadka.jpeg",
        category: "main",
        prep: "15 mins",
        calories: "290 Kcal",
        rating: 4.2,
        stars: '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-line"></i>',
        desc: "Slow-cooked yellow lentils seasoned and finished with a sizzling tempered garlic, dry red chili, cumin seeds, tomato, and pure ghee tadka."
    },
    "aloo-vada": {
        id: "aloo-vada",
        name: "Aloo Vada",
        price: 4.99,
        img: "image/aioo vada.jpeg",
        category: "snacks",
        prep: "12 mins",
        calories: "240 Kcal",
        rating: 4.6,
        stars: '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-fill"></i>',
        desc: "Savory mashed potato spheres flavored with mustard seeds, curry leaves, and ginger, dipped in a seasoned gram flour batter and fried crispy."
    },
    "french-fries": {
        id: "french-fries",
        name: "Masala French Fries",
        price: 4.49,
        img: "image/french fries.jpeg",
        category: "fastfood",
        prep: "8 mins",
        calories: "320 Kcal",
        rating: 3.8,
        stars: '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-fill"></i><i class="ri-star-line"></i>',
        desc: "Fresh, premium potatoes cut fine, double-fried to crunchy excellence, and tossed in an aromatic, fiery Indian house-secret spices mix."
    },
    "garlic-bread": {
        id: "garlic-bread",
        name: "Cheese Garlic Bread",
        price: 6.49,
        img: "image/garlic breed.jpeg",
        category: "fastfood",
        prep: "10 mins",
        calories: "340 Kcal",
        rating: 4.4,
        stars: '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-fill"></i>',
        desc: "Crusty sourdough baguettes spread with roasted garlic herb butter, finished with an abundant layer of bubbling, toasted mozzarella cheese."
    },
    "kachori": {
        id: "kachori",
        name: "Khasta Kachori",
        price: 3.99,
        img: "image/kachori.jpeg",
        category: "snacks",
        prep: "12 mins",
        calories: "280 Kcal",
        rating: 4.7,
        stars: '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-fill"></i>',
        desc: "Flaky and crispy pastry shells loaded with a spiced yellow moong lentil mash, dressed up with sweet curd, date-tamarind, and spicy mint chutneys."
    },
    "momos": {
        id: "momos",
        name: "Steamed Veg Momos",
        price: 7.49,
        img: "image/momos.jpeg",
        category: "fastfood",
        prep: "15 mins",
        calories: "180 Kcal",
        rating: 4.8,
        stars: '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>',
        desc: "Authentic Tibetan dumplings filled with finely chopped cabbage, carrots, onion, and garlic, steamed hot. Served with a fiery red chili chutney."
    },
    "sabudana-vada": {
        id: "sabudana-vada",
        name: "Sabudana Vada",
        price: 5.49,
        img: "image/sabudana wada.jpeg",
        category: "snacks",
        prep: "12 mins",
        calories: "260 Kcal",
        rating: 4.3,
        stars: '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-line"></i>',
        desc: "Crispy, chewy patties made of tapioca pearls, mashed potato binder, cumin, crushed roasted peanuts, and spicy green chili slivers."
    },
    "samosa": {
        id: "samosa",
        name: "Classic Samosa",
        price: 2.99,
        img: "image/samosa.jpeg",
        category: "snacks",
        prep: "10 mins",
        calories: "250 Kcal",
        rating: 4.9,
        stars: '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>',
        desc: "Fragrant triangle pastry pocket containing a seasoned savory potato and green pea filling, cooked dry with coriander, turmeric, and mango spices."
    },
    "sandwich": {
        id: "sandwich",
        name: "Bombay Grilled Sandwich",
        price: 6.99,
        img: "image/sandwitch.jpeg",
        category: "fastfood",
        prep: "10 mins",
        calories: "380 Kcal",
        rating: 4.5,
        stars: '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-fill"></i>',
        desc: "Multipayer sandwich featuring potato patties, cucumber, onion, beet, and tomatoes, loaded with spicy coriander mint chutney and grilled to a crisp."
    },
    "shiv-thali": {
        id: "shiv-thali",
        name: "Grand Shiv Thali",
        price: 18.99,
        img: "image/shiv_thali.png",
        category: "feasts",
        prep: "25 mins",
        calories: "850 Kcal",
        rating: 5.0,
        stars: '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>',
        desc: "Our legendary house signature. A massive platter containing Paneer Butter Masala, Dal Makhani, Mixed Vegetable Subji, Jeera Rice, two Butter Naans, Raita, Samosa, a sweet Gulab Jamun, and a refreshing glass of Mango Lassi."
    },
    "maharaja-thali": {
        id: "maharaja-thali",
        name: "Royal Maharaja Thali",
        price: 22.99,
        img: "image/maharaja_thali.png",
        category: "feasts",
        prep: "25 mins",
        calories: "920 Kcal",
        rating: 4.9,
        stars: '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>',
        desc: "A luxurious selection of royal Indian delicacies. Paneer Tikka, Shahi Paneer, Aloo Gobhi, saffron Basmati Pulao, two flaky Laccha Parathas, Papdi Chaat, traditional Kheer, and a cup of aromatic Masala Chai."
    }
};

// Blog Database
const blogDatabase = {
    "1": {
        title: "Demystifying Indian Spices: The Art of Tadka",
        date: "May 25, 2026",
        img: "image/bg1.jpg",
        content: `
            <p><strong>Tadka</strong>, also known as tempering or tempering spices, is the absolute heart of Indian cooking. It is a traditional culinary technique where whole or ground spices are roasted briefly in heated ghee or cooking oil to extract their natural essential oils.</p>
            <p>When spices are dropped into hot oil, their cellular structures rupture, releasing intense fragrance and flavor molecules directly into the cooking medium, which is then incorporated into dals, curries, or chutneys.</p>
            <p>To master the perfect tadka, temperature is critical. If the oil is too cold, the spices will soak up oil and become soggy; if the oil is too hot, the spices will burn in a split second, turning bitter. The order is also essential: start with mustard seeds as they take longer to pop, followed by cumin seeds, ginger-garlic paste, and finally, delicate herbs like curry leaves and dry red chilies.</p>
        `
    },
    "2": {
        title: "How Chole Bhature Became India's Favorite Comfort Food",
        date: "May 18, 2026",
        img: "image/chola bhatura.jpeg",
        content: `
            <p>Originating from the streets of Delhi and Punjab post-partition, <strong>Chole Bhature</strong> has grown from a local morning breakfast staple into an iconic nationwide sensation. It represents a culinary balance of texture, spice, and indulgence.</p>
            <p>The dish consists of two elements: Bhatura, a leavened flatbread prepared with all-purpose flour, yogurt, and a pinch of baking soda, rolled and deep-fried to form a massive, crisp balloon; and Chole, a dark, rich chickpea curry simmered with a combination of roasted cumin, dried pomegranate seeds (anardana), tea leaves (for that rich dark color), and complex spice masalas.</p>
            <p>Whether enjoyed as a weekend brunch, a quick street side snack, or a grand restaurant lunch, Chole Bhature remains an unmatched choice for celebrations and comfort dining alike.</p>
        `
    },
    "3": {
        title: "The Sacred Art of Thali Serving: Holistic Wellness",
        date: "May 10, 2026",
        img: "image/shiv_thali.png",
        content: `
            <p>The Indian <strong>Thali</strong> (literally translating to "plate") is far more than just a multi-dish culinary meal. It represents an ancient science of nutrition based on Ayurvedic principles, designed to supply a balanced variety of flavors, textures, and essential vitamins in a single dining session.</p>
            <p>According to Ayurveda, a complete meal must incorporate all the six tastes (Shadrasa) to keep the body's energy elements (Doshas) balanced: Sweet (Madhura), Sour (Amla), Salty (Lavana), Bitter (Tikta), Pungent (Katu), and Astringent (Kashaya).</p>
            <p>In a traditional Thali, rice or flatbreads provide carbohydrates, lentils (dal) offer protein, curries supply essential vitamins, yogurt aids gut digestion, and pickles or chutneys serve to stimulate digestive fire (Agni). It is truly a holistic experience of taste and well-being.</p>
        `
    }
};

// Application State
let cart = [];
let currentSelectedItem = null;

// DOM Elements Loading
document.addEventListener("DOMContentLoaded", () => {
    // Load existing cart from local storage
    if (localStorage.getItem("sacred_spoon_cart")) {
        try {
            cart = JSON.parse(localStorage.getItem("sacred_spoon_cart"));
        } catch (e) {
            cart = [];
        }
    }

    initializeNavActiveHighlight();
    initializeStickyHeader();
    initializeNavbarMobileToggle();
    initializeCartDrawer();
    initializeMenuFiltering();
    initializeFoodDetailModal();
    initializeBlogReaderModal();
    initializeForms();
    initializeSearchOverlay();
    initializeScrollReveal();
    
    // Sub-page Specific Toggles
    initializeTestimonialsSlider();
    initializeFAQAccordion();
    initializeMenuSorting();
    initializeCurrentDayHighlight();

    // Initial cart render to update badges and drawer
    renderCart();
});

// Highlight Active Nav Link dynamically based on filename/pathname
function initializeNavActiveHighlight() {
    const navLinks = document.querySelectorAll(".nav-link");
    const currentPath = window.location.pathname;
    
    // Find filename (e.g. index.html, menu.html)
    const pageName = currentPath.substring(currentPath.lastIndexOf("/") + 1);

    navLinks.forEach(link => {
        link.classList.remove("active");
        const href = link.getAttribute("href");

        // Highlight home if pathname is empty or / or index.html
        if (href === "index.html" && (pageName === "" || pageName === "index.html" || currentPath.endsWith("/"))) {
            link.classList.add("active");
        } else if (pageName !== "" && href === pageName) {
            link.classList.add("active");
        }
    });
}

// Sticky Header
function initializeStickyHeader() {
    const header = document.getElementById("header");
    if (!header) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("sticky");
        } else {
            // Keep it sticky if it's not the index.html page (sub-pages are always sticky by default)
            const path = window.location.pathname;
            const page = path.substring(path.lastIndexOf("/") + 1);
            if (page !== "" && page !== "index.html" && !path.endsWith("/")) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }
    });
}

// Mobile Navbar Hamburger Button
function initializeNavbarMobileToggle() {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-link");

    if (!menuIcon || !navbar) return;

    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("active");
        if (menuIcon.classList.contains("bx-menu")) {
            menuIcon.classList.replace("bx-menu", "bx-x");
        } else {
            menuIcon.classList.replace("bx-x", "bx-menu");
        }
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
            menuIcon.classList.replace("bx-x", "bx-menu");
        });
    });
}

// Shopping Cart Drawer Functions
function initializeCartDrawer() {
    const cartBtn = document.getElementById("cart-btn");
    const closeCartBtn = document.getElementById("close-cart-btn");
    const cartDrawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-drawer-overlay");
    const startShoppingBtn = document.getElementById("start-shopping-btn");

    if (!cartBtn || !cartDrawer || !overlay) return;

    function openCart() {
        cartDrawer.classList.add("active");
        overlay.classList.add("active");
    }

    function closeCart() {
        cartDrawer.classList.remove("active");
        overlay.classList.remove("active");
    }

    cartBtn.addEventListener("click", openCart);
    if (closeCartBtn) closeCartBtn.addEventListener("click", closeCart);
    overlay.addEventListener("click", closeCart);
    
    if (startShoppingBtn) {
        startShoppingBtn.addEventListener("click", closeCart);
    }

    // Attach Add to Cart event to menu card items
    document.body.addEventListener("click", (e) => {
        const addBtn = e.target.closest(".add-to-cart-btn");
        if (addBtn) {
            e.preventDefault();
            const id = addBtn.getAttribute("data-id");
            const item = foodDatabase[id];
            if (item) {
                addToCart(item.id, item.name, item.price, item.img, 1, 'medium');
                
                // Add pop-in micro animation on the button
                addBtn.style.transform = "scale(0.85)";
                setTimeout(() => {
                    addBtn.style.transform = "";
                }, 200);
            }
        }
    });
}

// Local Cart State Management
function addToCart(id, name, price, img, qty = 1, spice = 'medium') {
    const existingIndex = cart.findIndex(item => item.id === id && item.spice === spice);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += qty;
    } else {
        cart.push({
            id,
            name,
            price: parseFloat(price),
            img,
            quantity: parseInt(qty),
            spice
        });
    }

    saveCart();
    renderCart();
    showToast(`Added ${name} to your bag!`);
}

function removeFromCart(id, spice) {
    cart = cart.filter(item => !(item.id === id && item.spice === spice));
    saveCart();
    renderCart();
    showToast("Item removed from cart.", "ri-delete-bin-line");
}

function updateCartQuantity(id, spice, newQty) {
    const item = cart.find(item => item.id === id && item.spice === spice);
    if (item) {
        item.quantity = parseInt(newQty);
        if (item.quantity <= 0) {
            removeFromCart(id, spice);
        } else {
            saveCart();
            renderCart();
        }
    }
}

function saveCart() {
    localStorage.setItem("sacred_spoon_cart", JSON.stringify(cart));
}

function renderCart() {
    const container = document.getElementById("cart-items-container");
    const countBadge = document.getElementById("cart-count");
    const drawerCount = document.getElementById("cart-drawer-count");
    const footer = document.getElementById("cart-footer");
    
    if (!countBadge || !drawerCount || !container) return;

    // Sum total quantity
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    countBadge.textContent = totalQty;
    drawerCount.textContent = totalQty;

    // Pop animation on cart icon badge
    if (totalQty > 0) {
        countBadge.style.transform = "scale(1.3)";
        setTimeout(() => {
            countBadge.style.transform = "scale(1)";
        }, 300);
    }

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart-message">
                <i class="ri-shopping-basket-line"></i>
                <p>Your cart is empty. Let's add some delicious dishes!</p>
                <a href="menu.html" class="btn primary-btn" id="start-shopping-btn-inner">Explore Menu</a>
            </div>
        `;
        const innerBtn = document.getElementById("start-shopping-btn-inner");
        if (innerBtn) {
            innerBtn.addEventListener("click", () => {
                document.getElementById("cart-drawer").classList.remove("active");
                document.getElementById("cart-drawer-overlay").classList.remove("active");
            });
        }
        if (footer) footer.classList.remove("active");
        return;
    }

    if (footer) footer.classList.add("active");
    
    let htmlContent = "";
    let subtotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        htmlContent += `
            <div class="cart-item">
                <img src="${item.img}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <span class="price">$${item.price.toFixed(2)}</span>
                    <span class="item-spice-badge" style="font-size:0.75rem; color:var(--clr-primary); font-weight:700; margin-left:8px; text-transform:capitalize;">(${item.spice})</span>
                    <div class="qty-control">
                        <button class="qty-minus-btn" data-id="${item.id}" data-spice="${item.spice}"><i class="ri-subtract-line"></i></button>
                        <span>${item.quantity}</span>
                        <button class="qty-plus-btn" data-id="${item.id}" data-spice="${item.spice}"><i class="ri-add-line"></i></button>
                    </div>
                </div>
                <button class="remove-cart-item" data-id="${item.id}" data-spice="${item.spice}"><i class="ri-delete-bin-line"></i></button>
            </div>
        `;
    });

    container.innerHTML = htmlContent;

    // Attach listeners inside drawer
    container.querySelectorAll(".qty-minus-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            const spice = btn.getAttribute("data-spice");
            const item = cart.find(i => i.id === id && i.spice === spice);
            if (item) updateCartQuantity(id, spice, item.quantity - 1);
        });
    });

    container.querySelectorAll(".qty-plus-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            const spice = btn.getAttribute("data-spice");
            const item = cart.find(i => i.id === id && i.spice === spice);
            if (item) updateCartQuantity(id, spice, item.quantity + 1);
        });
    });

    container.querySelectorAll(".remove-cart-item").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            const spice = btn.getAttribute("data-spice");
            removeFromCart(id, spice);
        });
    });

    // Calculate final receipt pricing
    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    const subtotalEl = document.getElementById("cart-subtotal");
    const taxEl = document.getElementById("cart-tax");
    const totalEl = document.getElementById("cart-total");

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
}

// Menu Filtering tabs logic
function initializeMenuFiltering() {
    const tabBtns = document.querySelectorAll(".tab-btn");
    const menuCards = document.querySelectorAll(".menu-item-card");

    if (tabBtns.length === 0 || menuCards.length === 0) return;

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            tabBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.getAttribute("data-filter");

            menuCards.forEach(card => {
                const category = card.getAttribute("data-category");
                
                card.style.opacity = "0";
                card.style.transform = "scale(0.8) translateY(10px)";
                
                setTimeout(() => {
                    if (filter === "all" || category === filter) {
                        card.style.display = "block";
                        setTimeout(() => {
                            card.style.opacity = "1";
                            card.style.transform = "scale(1) translateY(0)";
                        }, 50);
                    } else {
                        card.style.display = "none";
                    }
                }, 200);
            });
        });
    });
}

// Food Item Detail Modal Manager
function initializeFoodDetailModal() {
    const overlay = document.getElementById("detail-modal-overlay");
    const closeBtn = document.getElementById("close-modal-btn");
    const qtyMinus = document.getElementById("modal-qty-minus");
    const qtyPlus = document.getElementById("modal-qty-plus");
    const qtyVal = document.getElementById("modal-qty-val");
    const addToCartBtn = document.getElementById("modal-add-to-cart-btn");
    const modalPrice = document.getElementById("modal-total-price");

    if (!overlay || !qtyVal || !modalPrice) return;

    let currentQty = 1;
    let basePrice = 0;

    function openModal(foodId) {
        const food = foodDatabase[foodId];
        if (!food) return;

        currentSelectedItem = food;
        currentQty = 1;
        basePrice = food.price;

        document.getElementById("modal-food-img").src = food.img;
        document.getElementById("modal-food-img").alt = food.name;
        document.getElementById("modal-food-tag").textContent = food.category === 'main' ? 'Main Course' : (food.category === 'fastfood' ? 'Fusion' : 'Snacks');
        document.getElementById("modal-food-title").textContent = food.name;
        document.getElementById("modal-food-desc").textContent = food.desc;
        document.getElementById("modal-food-rating").innerHTML = `${food.stars} <span>(${food.rating})</span>`;
        
        qtyVal.textContent = currentQty;
        updateModalPrice();
        document.querySelector('input[name="spice-level"][value="medium"]').checked = true;

        overlay.classList.add("active");
    }

    function closeModal() {
        overlay.classList.remove("active");
        currentSelectedItem = null;
    }

    function updateModalPrice() {
        const total = basePrice * currentQty;
        modalPrice.textContent = `$${total.toFixed(2)}`;
    }

    document.body.addEventListener("click", (e) => {
        const targetCard = e.target.closest(".menu-item-card");
        if (targetCard && !e.target.closest(".add-to-cart-btn") && !e.target.closest("i")) {
            const foodId = targetCard.getAttribute("data-id");
            openModal(foodId);
        }
    });

    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeModal();
    });

    if (qtyMinus) {
        qtyMinus.addEventListener("click", () => {
            if (currentQty > 1) {
                currentQty--;
                qtyVal.textContent = currentQty;
                updateModalPrice();
            }
        });
    }

    if (qtyPlus) {
        qtyPlus.addEventListener("click", () => {
            currentQty++;
            qtyVal.textContent = currentQty;
            updateModalPrice();
        });
    }

    if (addToCartBtn) {
        addToCartBtn.addEventListener("click", () => {
            if (!currentSelectedItem) return;
            const selectedSpice = document.querySelector('input[name="spice-level"]:checked').value;
            addToCart(
                currentSelectedItem.id,
                currentSelectedItem.name,
                currentSelectedItem.price,
                currentSelectedItem.img,
                currentQty,
                selectedSpice
            );
            closeModal();
        });
    }
}

// Blog Reader Modal Manager
function initializeBlogReaderModal() {
    const overlay = document.getElementById("blog-modal-overlay");
    const closeBtn = document.getElementById("close-blog-btn");
    const image = document.getElementById("blog-modal-image");
    const date = document.getElementById("blog-modal-date");
    const title = document.getElementById("blog-modal-title");
    const content = document.getElementById("blog-modal-text");

    if (!overlay || !image || !date || !title || !content) return;

    function openBlog(id) {
        const post = blogDatabase[id];
        if (!post) return;

        image.src = post.img;
        image.alt = post.title;
        date.innerHTML = `<i class="ri-calendar-line"></i> ${post.date}`;
        title.textContent = post.title;
        content.innerHTML = post.content;

        overlay.classList.add("active");
    }

    function closeBlog() {
        overlay.classList.remove("active");
    }

    document.body.addEventListener("click", (e) => {
        const readBtn = e.target.closest(".read-more-btn");
        if (readBtn) {
            const id = readBtn.getAttribute("data-post-id");
            openBlog(id);
        }
    });

    if (closeBtn) closeBtn.addEventListener("click", closeBlog);
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeBlog();
    });
}

// Form submissions
function initializeForms() {
    const reservationForm = document.getElementById("reservation-form");
    const newsletterForm = document.getElementById("newsletter-form");
    const checkoutBtn = document.getElementById("checkout-btn");

    if (reservationForm) {
        reservationForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("res-name").value;
            const guests = document.getElementById("res-guests").value;
            const date = document.getElementById("res-date").value;
            const time = document.getElementById("res-time").value;

            showToast(`Table booked successfully for ${guests} guests under "${name}" on ${date} at ${time}!`, "ri-calendar-check-line");
            reservationForm.reset();
        });
    }

    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            showToast("Successfully subscribed! Check inbox for coupon codes.", "ri-mail-check-line");
            newsletterForm.reset();
        });
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", () => {
            const drawer = document.getElementById("cart-drawer");
            const overlay = document.getElementById("cart-drawer-overlay");
            if (drawer) drawer.classList.remove("active");
            if (overlay) overlay.classList.remove("active");

            cart = [];
            saveCart();
            renderCart();

            setTimeout(() => {
                showToast("Order placed successfully! Delivery arriving in 30 mins.", "ri-checkbox-circle-fill");
            }, 500);
        });
    }
}

// Header Search overlay Search logic
function initializeSearchOverlay() {
    const searchBtn = document.getElementById("search-btn");
    const closeSearch = document.getElementById("close-search");
    const searchOverlay = document.getElementById("search-overlay");
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");

    if (!searchBtn || !searchOverlay || !searchInput) return;

    function openSearch() {
        searchOverlay.classList.add("active");
        searchInput.focus();
    }

    function closeSearchBox() {
        searchOverlay.classList.remove("active");
        searchInput.value = "";
        if (searchResults) searchResults.classList.remove("active");
    }

    searchBtn.addEventListener("click", openSearch);
    if (closeSearch) closeSearch.addEventListener("click", closeSearchBox);
    searchOverlay.addEventListener("click", (e) => {
        if (e.target === searchOverlay) closeSearchBox();
    });

    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query === "") {
            searchResults.classList.remove("active");
            return;
        }

        const matches = Object.values(foodDatabase).filter(food => 
            food.name.toLowerCase().includes(query) || 
            food.desc.toLowerCase().includes(query) ||
            food.category.toLowerCase().includes(query)
        );

        if (matches.length === 0) {
            searchResults.innerHTML = `
                <div class="search-result-item" style="cursor:default;">
                    <p style="margin: 0; color: var(--clr-text-muted);">No dishes match your search query.</p>
                </div>
            `;
        } else {
            let html = "";
            matches.forEach(item => {
                html += `
                    <div class="search-result-item" data-id="${item.id}">
                        <img src="${item.img}" alt="${item.name}">
                        <div>
                            <h4>${item.name}</h4>
                            <p style="margin:0; font-size:0.85rem; color:var(--clr-primary); font-weight:700;">$${item.price.toFixed(2)}</p>
                        </div>
                    </div>
                `;
            });
            searchResults.innerHTML = html;

            searchResults.querySelectorAll(".search-result-item").forEach(item => {
                item.addEventListener("click", () => {
                    const id = item.getAttribute("data-id");
                    if (id) {
                        closeSearchBox();
                        // Open modal directly on overlay click
                        setTimeout(() => {
                            const overlay = document.getElementById("detail-modal-overlay");
                            const qtyVal = document.getElementById("modal-qty-val");
                            const modalPrice = document.getElementById("modal-total-price");
                            
                            const food = foodDatabase[id];
                            if (food && overlay) {
                                currentSelectedItem = food;
                                currentQty = 1;
                                basePrice = food.price;

                                document.getElementById("modal-food-img").src = food.img;
                                document.getElementById("modal-food-img").alt = food.name;
                                document.getElementById("modal-food-tag").textContent = food.category === 'main' ? 'Main Course' : (food.category === 'fastfood' ? 'Fusion' : 'Snacks');
                                document.getElementById("modal-food-title").textContent = food.name;
                                document.getElementById("modal-food-desc").textContent = food.desc;
                                document.getElementById("modal-food-rating").innerHTML = `${food.stars} <span>(${food.rating})</span>`;
                                
                                qtyVal.textContent = currentQty;
                                const total = basePrice * currentQty;
                                modalPrice.textContent = `$${total.toFixed(2)}`;
                                document.querySelector('input[name="spice-level"][value="medium"]').checked = true;

                                overlay.classList.add("active");
                            }
                        }, 300);
                    }
                });
            });
        }

        searchResults.classList.add("active");
    });
}

// Toast alerts helper
function showToast(message, icon = "ri-checkbox-circle-fill") {
    const container = document.getElementById("alert-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "alert-toast";
    toast.innerHTML = `<i class="${icon}"></i> <span>${message}</span>`;
    
    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 4000);
}

// Intersection observer scroll reveal
function initializeScrollReveal() {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll(".scroll-reveal").forEach(element => {
        revealObserver.observe(element);
    });
}

// Testimonials review carousel slider
function initializeTestimonialsSlider() {
    const wrapper = document.getElementById("testimonial-wrapper");
    const dots = document.querySelectorAll(".slider-dots .dot");

    if (!wrapper || dots.length === 0) return;

    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            const index = parseInt(dot.getAttribute("data-index"));
            
            // Set active dot class
            dots.forEach(d => d.classList.remove("active"));
            dot.classList.add("active");

            // Slide translation
            wrapper.style.transform = `translateX(-${index * 100}%)`;
        });
    });

    // Auto loop slide movement every 6 seconds
    let currentIndex = 0;
    setInterval(() => {
        currentIndex = (currentIndex + 1) % dots.length;
        dots[currentIndex].click();
    }, 6000);
}

// FAQ Toggling Accordions
function initializeFAQAccordion() {
    const triggers = document.querySelectorAll(".faq-trigger");

    if (triggers.length === 0) return;

    triggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            const item = trigger.closest(".faq-item");
            const content = item.querySelector(".faq-content");
            const isActive = item.classList.contains("active");

            // Close all others
            document.querySelectorAll(".faq-item").forEach(i => {
                i.classList.remove("active");
                i.querySelector(".faq-content").style.maxHeight = null;
            });

            // Toggle current click item
            if (!isActive) {
                item.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
}

// Dynamic Sorting & live search on dedicated Menu page
function initializeMenuSorting() {
    const menuGrid = document.getElementById("menu-grid");
    const menuSort = document.getElementById("menu-sort");
    const menuSearch = document.getElementById("menu-search");

    if (!menuGrid) return;

    // Search bar matching
    if (menuSearch) {
        menuSearch.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            const cards = menuGrid.querySelectorAll(".menu-item-card");

            cards.forEach(card => {
                const title = card.querySelector("h3").textContent.toLowerCase();
                const desc = card.querySelector(".description").textContent.toLowerCase();
                
                if (title.includes(query) || desc.includes(query)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }

    // Sorting elements
    if (menuSort) {
        const initialCardsOrder = Array.from(menuGrid.querySelectorAll(".menu-item-card"));

        menuSort.addEventListener("change", () => {
            const criteria = menuSort.value;
            const currentCards = Array.from(menuGrid.querySelectorAll(".menu-item-card"));

            if (criteria === "default") {
                initialCardsOrder.forEach(card => menuGrid.appendChild(card));
                return;
            }

            currentCards.sort((a, b) => {
                if (criteria === "price-low") {
                    return parseFloat(a.getAttribute("data-price")) - parseFloat(b.getAttribute("data-price"));
                } else if (criteria === "price-high") {
                    return parseFloat(b.getAttribute("data-price")) - parseFloat(a.getAttribute("data-price"));
                } else if (criteria === "rating") {
                    return parseFloat(b.getAttribute("data-rating")) - parseFloat(a.getAttribute("data-rating"));
                }
                return 0;
            });

            // Re-append in sorted order
            currentCards.forEach(card => menuGrid.appendChild(card));
        });
    }
}

// Highlight current day's working hours
function initializeCurrentDayHighlight() {
    const day = new Date().getDay(); // 0: Sunday, 1: Monday...
    const monFri = document.getElementById("hours-mon-fri");
    const satSun = document.getElementById("hours-sat-sun");

    if (!monFri || !satSun) return;

    if (day >= 1 && day <= 5) {
        monFri.style.color = "var(--clr-primary)";
        monFri.style.fontWeight = "700";
    } else {
        satSun.style.color = "var(--clr-primary)";
        satSun.style.fontWeight = "700";
    }
}
