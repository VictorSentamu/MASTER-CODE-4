// ==========================================
// SERVICES.JS
// Logic for Repairs, Setup, and Accessories
// ==========================================

// Global cart functions
window.addToCart = function(id) {
    const product = accessoriesData.find(p => p.id === id);
    if (!product) return;
    
    // Try to use React cart if available (preferred method)
    if (window.reactCart && typeof window.reactCart.addItem === 'function') {
        window.reactCart.addItem(product);
    } else {
        // Fallback: Store in localStorage using the CORRECT keys
        // Keys must match cart-wishlist.js: 'nextLaptops_cart'
        let cart = JSON.parse(localStorage.getItem('nextLaptops_cart') || '[]');
        const existingItem = cart.find(item => item.id === id);
        
        if (existingItem) {
            existingItem.quantity = (existingItem.quantity || 1) + 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        
        localStorage.setItem('nextLaptops_cart', JSON.stringify(cart));
        
        // Dispatch event so other components (like header) can update
        window.dispatchEvent(new Event('storage'));
        
        // Feedback
        alert(`${product.name} added to cart!`);
    }
};

window.addToWishlist = function(id) {
    const product = accessoriesData.find(p => p.id === id);
    if (!product) return;
    
    // Try to use React wishlist if available
    if (window.reactWishlist && typeof window.reactWishlist.toggle === 'function') {
        window.reactWishlist.toggle(product);
    } else {
        // Fallback: Store in localStorage using the CORRECT keys
        // Keys must match cart-wishlist.js: 'nextLaptops_wishlist'
        let wishlist = JSON.parse(localStorage.getItem('nextLaptops_wishlist') || '[]');
        
        if (!wishlist.some(item => item.id === id)) {
            wishlist.push(product);
            localStorage.setItem('nextLaptops_wishlist', JSON.stringify(wishlist));
            alert(`${product.name} added to wishlist!`);
            
            // Dispatch event
            window.dispatchEvent(new Event('storage'));
        } else {
            alert(`${product.name} is already in your wishlist!`);
        }
    }
};

// 1. REPAIRS & SETUP FORM LOGIC
function initServiceForms() {
    const repairForm = document.getElementById('repairForm');
    const setupForm = document.getElementById('setupForm');

    if (repairForm) {
        repairForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const laptop = document.getElementById('laptop').value;
            const issue = document.getElementById('issue').value;
            const details = document.getElementById('details').value;

            const message = `*REPAIR REQUEST*%0A%0A` +
                            `*Name:* ${name}%0A` +
                            `*Laptop:* ${laptop}%0A` +
                            `*Issue:* ${issue}%0A` +
                            `*Details:* ${details}`;

            window.open(`https://wa.me/256771368136?text=${message}`, '_blank');
        });
    }

    if (setupForm) {
        setupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const os = document.getElementById('os').value;
            const software = document.getElementById('software').value;
            const data = document.getElementById('datatransfer').value;

            const message = `*SETUP REQUEST*%0A%0A` +
                            `*Name:* ${name}%0A` +
                            `*OS:* ${os}%0A` +
                            `*Software:* ${software}%0A` +
                            `*Data Transfer:* ${data}`;

            window.open(`https://wa.me/256771368136?text=${message}`, '_blank');
        });
    }

    // Custom Request Form for Accessories
    const customRequestForm = document.getElementById('customRequestForm');
    if (customRequestForm) {
        customRequestForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('customName').value;
            const item = document.getElementById('customItem').value;

            if (!name || !item) {
                alert('Please fill in all fields');
                return;
            }

            const message = `*CUSTOM ACCESSORY REQUEST*%0A%0A` +
                            `*Name:* ${name}%0A` +
                            `*Item Needed:* ${item}`;

            window.open(`https://wa.me/256771368136?text=${encodeURIComponent(message)}`, '_blank');
            customRequestForm.reset();
        });
    }
}

// 2. ACCESSORIES RENDERING WITH FILTERS AND CAROUSEL
let swiperInstance = null;
let currentFilter = 'All';

function initAccessories() {
    const grid = document.getElementById('accessoriesGrid');
    if (!grid) return; 

    renderAccessories(grid, 'All');
    initFilterTabs(grid);
    initCustomRequestForm(); // Called here to ensure form exists
}

function renderAccessories(grid, filter) {
    grid.innerHTML = '';
    
    let filteredItems = accessoriesData;
    if (filter !== 'All') {
        filteredItems = accessoriesData.filter(item => item.category === filter);
    }
    
    if (filteredItems.length === 0) {
        const emptySlide = document.createElement('div');
        emptySlide.className = 'swiper-slide';
        emptySlide.innerHTML = `
            <div class="no-items-message">
                <i class="fas fa-box-open"></i>
                <p>No items in this category yet.</p>
            </div>
        `;
        grid.appendChild(emptySlide);
    } else {
        filteredItems.forEach(item => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            
            const card = document.createElement('div');
            card.className = 'acc-card';
            
            card.innerHTML = `
                <div class="acc-img-container">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </div>
                <div class="acc-info">
                    <h3 class="acc-title">${item.name}</h3>
                    <div class="acc-price">UGX ${item.price.toLocaleString()}</div>
                    <div style="display: flex; gap: 8px;">
                        <button class="acc-btn" onclick="addToCart(${item.id})" style="flex: 2;">
                            <i class="fas fa-cart-plus"></i> Add
                        </button>
                        <button class="acc-btn" onclick="addToWishlist(${item.id})" style="flex: 1; background: #ff6b6b;">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            `;
            
            slide.appendChild(card);
            grid.appendChild(slide);
        });
    }
    
    setTimeout(() => initializeSwiper(filteredItems.length), 100);
}

function initFilterTabs(grid) {
    const filterTabs = document.querySelectorAll('.filter-tab');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const filter = tab.getAttribute('data-filter');
            currentFilter = filter;
            
            renderAccessories(grid, filter);
        });
    });
}

function initializeSwiper(itemCount) {
    if (swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
    }
    
    const swiperElement = document.querySelector('.acc-swiper');
    if (!swiperElement) return;
    
    swiperInstance = new Swiper('.acc-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: itemCount > 4, 
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initServiceForms();
    initAccessories();
});

// Handle window resize
window.addEventListener('resize', () => {
    if (swiperInstance) {
        swiperInstance.update();
    }
});

// js/services.js

document.addEventListener('DOMContentLoaded', function() {
    // Check if we are on the accessories page
    const accessoriesGrid = document.getElementById('accessoriesGrid');
    if (!accessoriesGrid) return;

    // Render Accessories
    function renderAccessories(filter = 'All') {
        accessoriesGrid.innerHTML = '';
        
        const filteredData = filter === 'All' 
            ? accessoriesData 
            : accessoriesData.filter(item => item.category === filter);

        if (filteredData.length === 0) {
            accessoriesGrid.innerHTML = '<p style="text-align:center; width:100%; grid-column: 1/-1;">No items found in this category.</p>';
            return;
        }

        filteredData.forEach(item => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            
            slide.innerHTML = `
                <div class="service-card accessory-card" data-id="${item.id}" style="cursor: pointer; display: flex; flex-direction: column; height: 100%;">
                    
                    <!-- Image Container -->
                    <div style="
                        width: 100%; 
                        height: 180px; 
                        background: #f8f9fa; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        overflow: hidden; 
                        border-radius: 8px;
                        margin-bottom: 20px;
                    ">
                        <img src="${item.image}" alt="${item.name}" style="
                            width: 100%; 
                            height: 100%; 
                            object-fit: contain;
                            transition: transform 0.3s ease;
                        ">
                    </div>

                    <!-- Details Section -->
                    <div style="flex: 1; display: flex; flex-direction: column;">
                        <h3 class="service-title" style="font-size: 1rem; margin-bottom: 5px;">${item.name}</h3>
                        <p style="font-weight: 700; color: var(--accent-color); margin: 0 0 10px 0;">
                            UGX ${item.price.toLocaleString()}
                        </p>
                        <p style="font-size: 0.8rem; color: #666; margin-bottom: 15px; flex-grow: 1;">
                            ${item.tagline || 'Quality accessory'}
                        </p>
                    </div>

                    <!-- Actions Container: Side by Side -->
                    <div style="display: flex; gap: 10px; margin-top: auto;">
                        
                        <!-- Add to Cart Button (Reduced Size) -->
                        <button class="btn btn-primary add-to-cart-btn" data-id="${item.id}" style="
                            flex: 1; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center; 
                            gap: 6px;
                            padding: 8px 10px; /* Reduced padding */
                            font-size: 0.9rem; /* Slightly smaller text */
                        ">
                            Add to Cart <i class="fas fa-cart-plus"></i>
                        </button>
                        
                        <!-- Wishlist Button (Increased Size) -->
                        <button class="btn btn-outline wishlist-btn" data-id="${item.id}" aria-label="Add to Wishlist" style="
                            width: 50px; /* Increased width */
                            height: 50px; /* Increased height */
                            min-width: 50px; 
                            padding: 0; 
                            display: flex; 
                            align-items: center; 
                            justify-content: center;
                            border-color: #e0e0e0;
                            color: #ffffff;
                            background: #0ea5e9;
                            transition: all 0.3s ease;
                            border-radius: 8px; /* Slightly rounder corners */
                        ">
                            <i class="far fa-heart" style="font-size: 1.2rem;"></i>
                        </button>
                    </div>
                </div>
            `;
            accessoriesGrid.appendChild(slide);
        });

        // Initialize Swiper
        if (window.accessorySwiper) window.accessorySwiper.destroy();
        
        window.accessorySwiper = new Swiper('.acc-swiper', {
            slidesPerView: 'auto',
            spaceBetween: 20,
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            breakpoints: {
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
            }
        });
    }

    // Initial Render
    renderAccessories();

    // Filter Tabs Logic
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            renderAccessories(this.dataset.filter);
        });
    });

    // Event Delegation for Clicks
    accessoriesGrid.addEventListener('click', function(e) {
        // 1. Handle Wishlist Click
        const wishlistBtn = e.target.closest('.wishlist-btn');
        if (wishlistBtn) {
            e.stopPropagation();
            const id = parseInt(wishlistBtn.dataset.id);
            const item = accessoriesData.find(acc => acc.id === id);
            
            if (item && window.reactWishlist) {
                window.reactWishlist.toggle(item);
                
                // Toggle visual state
                const icon = wishlistBtn.querySelector('i');
                const isFilled = icon.classList.contains('fas');
                
                if (isFilled) {
                    icon.classList.remove('fas');
                    icon.classList.add('far');
                    wishlistBtn.style.color = '#888';
                    wishlistBtn.style.borderColor = '#e0e0e0';
                    wishlistBtn.style.background = '#0ea5e9';
                } else {
                    icon.classList.remove('far');
                    icon.classList.add('fas');
                    wishlistBtn.style.color = 'white';
                    wishlistBtn.style.borderColor = 'var(--compare-color)';
                    wishlistBtn.style.background = '#0ea5e9';
                }
            }
            return;
        }

        // 2. Handle Add to Cart Click
        const cartBtn = e.target.closest('.add-to-cart-btn');
        if (cartBtn) {
            e.stopPropagation();
            const id = parseInt(cartBtn.dataset.id);
            const item = accessoriesData.find(acc => acc.id === id);
            if (item && window.callReact) {
                window.callReact('reactCart', 'addItem', item);
            }
            return;
        }

        // 3. Handle Card Click (Quick View)
        const card = e.target.closest('.accessory-card');
        if (card && !e.target.closest('button')) {
            const id = parseInt(card.dataset.id);
            if (typeof openAccessoryQuickView === 'function') {
                openAccessoryQuickView(id);
            }
        }
    });
});