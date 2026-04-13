// ==========================================
// 🛡️ UNIVERSAL REACT BRIDGE STABILIZER
// ==========================================

window.callReact = function(componentName, methodName, ...args) {
    // 1. Define Max Retries (How long to wait before giving up)
    const MAX_RETRIES = 20; // 20 * 50ms = 1 second wait time
    const RETRY_DELAY = 50; 
    
    // Internal retry counter
    if (!window._reactBridgeRetries) {
        window._reactBridgeRetries = {};
    }
    
    // Initialize retry count for this specific action if new
    if (!window._reactBridgeRetries[componentName]) {
        window._reactBridgeRetries[componentName] = 0;
    }

    // 2. Check if Component (React) is ready
    if (!window[componentName]) {
        console.log(`⏳ Bridge Waiting for ${componentName}...`);
        
        // 3. Safety: Don't wait forever
        if (window._reactBridgeRetries[componentName] < MAX_RETRIES) {
            window._reactBridgeRetries[componentName]++;
            
            // Recursively call function after delay
            setTimeout(() => {
                window.callReact(componentName, methodName, ...args);
            }, RETRY_DELAY);
        } else {
            // 4. Failure Fallback
            console.error(`❌ React Bridge Timeout: ${componentName} is not ready.`);
            alert("System loading... Please try again in a moment.");
        }
        return; // Stop execution
    }

    // 5. Execute: If we are here, Component is ready and Method exists
    if (typeof window[componentName][methodName] === 'function') {
        // Reset retry counter on success
        delete window._reactBridgeRetries[componentName];
        window[componentName][methodName](...args);
    } else {
        console.error(`❌ Method ${methodName} not found on ${componentName}`);
    }
};

        // DOM elements
        const loader = document.getElementById('loader');
        const menuToggle = document.getElementById('menuToggle');
        const mobileNavClose = document.getElementById('mobileNavClose');
        const navLinks = document.getElementById('navLinks');
        const mobileNav = document.getElementById('mobileNav');
        const overlay = document.getElementById('overlay');
        const header = document.getElementById('header');
        const productTrack = document.getElementById('productTrack');
        const productIndicators = document.getElementById('productIndicators');
        const productPrevBtn = document.getElementById('productPrevBtn');
        const productNextBtn = document.getElementById('productNextBtn');
        const blogTrack = document.getElementById('blogTrack');
        const blogIndicators = document.getElementById('blogIndicators');
        const blogPrevBtn = document.getElementById('blogPrevBtn');
        const blogNextBtn = document.getElementById('blogNextBtn');
        const toast = document.getElementById('toast');
        const heroSlidesElements = document.querySelectorAll('.hero-slide');
        const heroIndicators = document.querySelectorAll('.hero-indicator');
        const headlineText = document.querySelector('.headline-text');
        const headlineSubtext = document.querySelector('.headline-subtext');
        const btnGroup = document.querySelector('.btn-group');
        
        // Ticker track element
        const tickerTrack = document.getElementById('tickerTrack');
        
        // Quick View Modal elements
        const quickViewModal = document.getElementById('quickViewModal');
        const modalClose = document.getElementById('modalClose');
        const modalCloseBtn = document.getElementById('modalCloseBtn');
        const modalTitle = document.getElementById('modalTitle');
        const modalCurrentPrice = document.getElementById('modalCurrentPrice');
        const modalSpecsList = document.getElementById('modalSpecsList');
        const modalWhatsAppBtn = document.getElementById('modalWhatsAppBtn');
        const modalGalleryTrack = document.getElementById('modalGalleryTrack');
        const modalGalleryPrev = document.getElementById('modalGalleryPrev');
        const modalGalleryNext = document.getElementById('modalGalleryNext');
        const modalGalleryIndicators = document.getElementById('modalGalleryIndicators');
        const modalConditionTag = document.getElementById('modalConditionTag');
        const compareCheckbox = document.getElementById('compareCheckbox');
        
        // Comparison Modal elements
        const comparisonModal = document.getElementById('comparisonModal');
        const comparisonClose = document.getElementById('comparisonClose');
        const comparisonBody = document.getElementById('comparisonBody');
        const compareButton = document.getElementById('compareButton');
        const compareCount = document.getElementById('compareCount');

        // Top notification elements
        const topNotification = document.getElementById('topNotification');
        const notificationContent = document.getElementById('notificationContent');


// ============================================
// PERFECT PRODUCT CAROUSEL - CLEAN VERSION
// ============================================
class PerfectProductCarousel {
    constructor(container, items, renderItem, options = {}) {
        this.container = container;
        this.items = items;
        this.renderItem = renderItem;
        this.currentIndex = 0;
        this.autoplayInterval = null;
        this.isTransitioning = false;
        this.cardsPerView = this.getCardsPerView();
        this.totalPages = Math.ceil(this.items.length / this.cardsPerView);
        this.currentPage = 0;
        this.bounceBackTimeout = null;
        this.maxIndex = Math.max(0, this.items.length - this.cardsPerView);
        
        // Default options
        this.options = {
            autoplay: options.autoplay !== undefined ? options.autoplay : true,
            autoplaySpeed: options.autoplaySpeed ||10000,
            showArrows: options.showArrows !== undefined ? options.showArrows : true,
            showPagination: options.showPagination !== undefined ? options.showPagination : true,
            enableSwipe: options.enableSwipe !== undefined ? options.enableSwipe : true,
            ...options
        };
        
        this.init();
    }
    
    init() {
        this.renderItems();
        this.setupPagination();
        this.setupEventListeners();
        this.setupAutoplay();
        this.setupSwipeGestures();
        this.updateUI();
        
        // Handle window resize
        window.addEventListener('resize', debounce(() => {
            const newCardsPerView = this.getCardsPerView();
            if (newCardsPerView !== this.cardsPerView) {
                this.cardsPerView = newCardsPerView;
                this.totalPages = Math.ceil(this.items.length / this.cardsPerView);
                this.maxIndex = Math.max(0, this.items.length - this.cardsPerView);
                this.currentPage = Math.min(this.currentPage, this.totalPages - 1);
                this.currentIndex = this.currentPage * this.cardsPerView;
                this.updateUI();
            }
        }, 250));
    }
    
    getCardsPerView() {
        const width = window.innerWidth;
        if (width >= 1200) return 4; // 4 cards on desktop
        if (width >= 768) return 2; // 2 cards on tablet
        return 1; // 1 card on mobile
    }
    
    renderItems() {
        this.container.innerHTML = '';
        
        this.items.forEach((item, index) => {
            const element = this.renderItem(item, index);
            element.setAttribute('data-index', index);
            this.container.appendChild(element);
        });
    }
    
    setupPagination() {
        if (!this.options.showPagination) return;
        
        const paginationContainer = document.getElementById('productPagination');
        if (!paginationContainer) return;
        
        paginationContainer.innerHTML = '';
        
        // Create dots for each page (not each item)
        for (let i = 0; i < this.totalPages; i++) {
            const dot = document.createElement('button');
            dot.className = 'product-carousel-dot';
            if (i === 0) dot.classList.add('active');
            dot.setAttribute('role', 'tab');
            dot.setAttribute('aria-label', `Go to page ${i + 1}`);
            dot.setAttribute('data-page', i);
            
            dot.addEventListener('click', () => this.goToPage(i));
            
            paginationContainer.appendChild(dot);
        }
    }
    
    setupEventListeners() {
    if (!this.options.showArrows) return;
    
    const prevBtn = document.getElementById('productPrevBtn');
    const nextBtn = document.getElementById('productNextBtn');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => this.prev());
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => this.next());
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            this.prev();
        } else if (e.key === 'ArrowRight') {
            this.next();
        }
    });
    
    // Pause autoplay on hover
    this.container.addEventListener('mouseenter', () => this.pauseAutoplay());
    this.container.addEventListener('mouseleave', () => this.startAutoplay());
    
    // 🔥 ENHANCED TOUCH EVENTS
    this.setupEnhancedTouchEvents();
    
    // 🔥 ENHANCED MOUSE EVENTS
    this.setupEnhancedMouseEvents();
}
    
// ============================================
// ENHANCED TOUCH EVENTS - MOBILE FIRST
// ============================================
setupEnhancedTouchEvents() {
    if (!this.options.enableSwipe) return;
    
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;
    let isDragging = false;
    let dragStartX = 0;
    let dragThreshold = 5; // Minimum drag distance
    
    // Touch start
    this.container.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
        isDragging = false;
        dragStartX = touchStartX;
        
        console.log('Touch start:', touchStartX);
    }, { passive: true });
    
    // Touch move
    this.container.addEventListener('touchmove', (e) => {
        if (!isDragging) {
            const currentX = e.changedTouches[0].screenX;
            const dragDistance = Math.abs(currentX - dragStartX);
            
            if (dragDistance > dragThreshold) {
                isDragging = true;
                console.log('Touch drag detected:', dragDistance);
            }
        }
    }, { passive: true });
    
    // Touch end
    this.container.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        
        const diffX = touchStartX - touchEndX;
        const diffY = touchStartY - touchEndY;
        
        console.log('Touch end:', { diffX, diffY, isDragging });
        
        if (isDragging) {
            // Drag gesture - ignore for now
            isDragging = false;
            return;
        }
        
        // Swipe gesture
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 30) {
            console.log('Swipe detected:', diffX > 0 ? 'LEFT' : 'RIGHT');
            
            if (diffX > 0) {
                // Swiped left - go to next page
                this.next();
            } else {
                // Swiped right - go to previous page
                this.prev();
            }
        }
    }, { passive: true });
}

// ============================================
// ENHANCED MOUSE EVENTS - DRAG & SWIPE
// ============================================
setupEnhancedMouseEvents() {
    let mouseDown = false;
    let mouseStartX = 0;
    let mouseEndX = 0;
    let dragThreshold = 30; // Minimum drag distance
    
    // Mouse down
    this.container.addEventListener('mousedown', (e) => {
        mouseDown = true;
        mouseStartX = e.clientX;
        console.log('Mouse down:', mouseStartX);
    });
    
    // Mouse move
    this.container.addEventListener('mousemove', (e) => {
        if (mouseDown) {
            const dragDistance = Math.abs(e.clientX - mouseStartX);
            
            if (dragDistance > dragThreshold) {
                console.log('Mouse drag detected:', dragDistance);
            }
        }
    });
    
    // Mouse up
    this.container.addEventListener('mouseup', (e) => {
        mouseDown = false;
        mouseEndX = e.clientX;
        
        const diffX = mouseStartX - mouseEndX;
        console.log('Mouse up:', diffX);
        
        // Swipe gesture
        if (Math.abs(diffX) > 50) {
            console.log('Mouse swipe detected:', diffX > 0 ? 'LEFT' : 'RIGHT');
            
            if (diffX > 0) {
                // Swiped left - go to next page
                this.next();
            } else {
                // Swiped right - go to previous page
                this.prev();
            }
        }
    });
    
    // Prevent text selection during drag
    this.container.addEventListener('selectstart', (e) => {
        if (mouseDown) {
            e.preventDefault();
        }
    });
}

    setupAutoplay() {
        if (!this.options.autoplay) return;
        
        this.startAutoplay();
    }
    
    startAutoplay() {
    if (!this.options.autoplay) return;
    
    // Clear any existing interval
    if (this.autoplayInterval) {
        clearInterval(this.autoplayInterval);
        this.autoplayInterval = null;
    }
    
    // 🔥 MOBILE-FIRST AUTOPLAY
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
        console.log('Starting mobile autoplay (10s)');
        this.autoplayInterval = setInterval(() => {
            this.next();
        }, 10000); // 10 seconds for mobile
    } else {
        console.log('Starting desktop autoplay (10s)');
        this.autoplayInterval = setInterval(() => {
            this.next();
        }, 10000); // 10 seconds for desktop too
    }
    
    // 🔥 DEBUG LOGGING
    console.log('Autoplay started:', {
        isMobile: isMobile,
        interval: this.autoplayInterval,
        speed: 10000
    });
}
    
    pauseAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
    
    setupSwipeGestures() {
        if (!this.options.enableSwipe) return;
        
        let touchStartX = 0;
        let touchEndX = 0;
        let touchStartY = 0;
        let touchEndY = 0;
        
        this.container.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });
        
        this.container.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            touchEndY = e.changedTouches[0].screenY;
            this.handleSwipe(touchStartX, touchEndX, touchStartY, touchEndY);
        }, { passive: true });
    }
    
   handleSwipe(startX, endX, startY, endY) {
    const diffX = startX - endX;
    const diffY = startY - endY;
    
    // Dynamic threshold based on device
    const threshold = this.getSwipeThreshold();
    const minSwipeDistance = this.getMinSwipeDistance();
    
    // Check if swipe is horizontal and significant enough
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > minSwipeDistance) {
        // Prevent multiple rapid swipes
        if (this.isTransitioning) return;
        
        if (diffX > 0) {
            // Swiped left - go to next
            this.next();
        } else {
            // Swiped right - go to previous
            this.prev();
        }
    }
}

// Add these helper methods to your class
getSwipeThreshold() {
    const width = window.innerWidth;
    if (width < 768) return 30; // Mobile: more sensitive
    if (width < 1024) return 40; // Tablet: medium sensitive
    return 50; // Desktop: standard sensitive
}

getMinSwipeDistance() {
    const width = window.innerWidth;
    if (width < 768) return 20; // Mobile: shorter distance
    return 30; // Desktop/tablet: standard distance
}
    
    next() {
        if (this.isTransitioning) return;
        
        // Go to next page (not just next item)
        if (this.currentPage < this.totalPages - 1) {
            this.currentPage++;
            this.currentIndex = this.currentPage * this.cardsPerView;
            this.updateUI();
        } else {
            // At the end - loop back to start or bounce
            if (this.options.autoplay) {
                // Loop back to start for autoplay
                this.goToPage(0);
            } else {
                // Bounce back for manual navigation
                this.bounceBack();
            }
        }
    }
    
    prev() {
        if (this.isTransitioning) return;
        
        // Go to previous page (not just previous item)
        if (this.currentPage > 0) {
            this.currentPage--;
            this.currentIndex = this.currentPage * this.cardsPerView;
            this.updateUI();
        } else {
            // At the start - bounce back
            this.bounceBack();
        }
    }
    
    bounceBack() {
        // Clear any existing bounce timeout
        if (this.bounceBackTimeout) {
            clearTimeout(this.bounceBackTimeout);
        }
        
        // Add bounce animation
        this.container.style.transition = 'transform 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        
        // Calculate bounce distance
        const bounceDistance = this.currentPage >= this.totalPages - 1 ? -15 : 15;
        const currentOffset = -this.currentIndex * (100 / this.cardsPerView);
        
        // Apply bounce
        this.container.style.transform = `translateX(${currentOffset + bounceDistance}%)`;
        
        // Reset after bounce
        this.bounceBackTimeout = setTimeout(() => {
            this.container.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            this.container.style.transform = `translateX(${currentOffset}%)`;
        }, 200);
    }
    
    goToPage(pageIndex) {
        if (this.isTransitioning || pageIndex < 0 || pageIndex >= this.totalPages) return;
        
        this.currentPage = pageIndex;
        this.currentIndex = pageIndex * this.cardsPerView;
        this.updateUI();
    }
    
    updateUI() {
        // Update position
        this.updatePosition();
        
        // Update pagination dots
        this.updatePagination();
        
        // Update arrow states
        this.updateArrowStates();
        
        // Set transition flag
        this.isTransitioning = true;
        
        // Reset transition flag after animation completes
        setTimeout(() => {
            this.isTransitioning = false;
        }, 600);
    }
    
    updatePosition() {
        // Calculate exact position based on current page
        const offset = -this.currentIndex * (100 / this.cardsPerView);
        this.container.style.transform = `translateX(${offset}%)`;
    }
    
    updatePagination() {
        if (!this.options.showPagination) return;
        
        const dots = document.querySelectorAll('.product-carousel-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentPage);
            dot.setAttribute('aria-selected', index === this.currentPage);
        });
    }
    
    updateArrowStates() {
        const prevBtn = document.getElementById('productPrevBtn');
        const nextBtn = document.getElementById('productNextBtn');
        
        if (prevBtn) {
            prevBtn.disabled = this.currentPage <= 0;
            prevBtn.style.opacity = this.currentPage <= 0 ? '0.5' : '1';
            prevBtn.style.cursor = this.currentPage <= 0 ? 'not-allowed' : 'pointer';
        }
        
        if (nextBtn) {
            nextBtn.disabled = this.currentPage >= this.totalPages - 1;
            nextBtn.style.opacity = this.currentPage >= this.totalPages - 1 ? '0.5' : '1';
            nextBtn.style.cursor = this.currentPage >= this.totalPages - 1 ? 'not-allowed' : 'pointer';
        }
    }
    
    // Method to add new items dynamically
    addItems(newItems) {
        // Add new items to the items array
        this.items = [...this.items, ...newItems];
        
        // Recalculate pagination
        this.totalPages = Math.ceil(this.items.length / this.cardsPerView);
        this.maxIndex = Math.max(0, this.items.length - this.cardsPerView);
        
        // Re-render items
        this.renderItems();
        
        // Re-setup pagination
        this.setupPagination();
        
        // Update UI
        this.updateUI();
        
        console.log(`Added ${newItems.length} new items. Total: ${this.items.length}, Pages: ${this.totalPages}`);
    }
    
    // Method to remove items
    removeItems(itemIds) {
        // Remove items by ID
        this.items = this.items.filter(item => !itemIds.includes(item.id));
        
        // Recalculate pagination
        this.totalPages = Math.ceil(this.items.length / this.cardsPerView);
        this.maxIndex = Math.max(0, this.items.length - this.cardsPerView);
        
        // Adjust current page if needed
        if (this.currentPage >= this.totalPages) {
            this.currentPage = this.totalPages - 1;
            this.currentIndex = this.currentPage * this.cardsPerView;
        }
        
        // Re-render items
        this.renderItems();
        
        // Re-setup pagination
        this.setupPagination();
        
        // Update UI
        this.updateUI();
        
        console.log(`Removed items. Total: ${this.items.length}, Pages: ${this.totalPages}`);
    }
    
    // Method to update an existing item
    updateItem(itemId, updatedItem) {
        // Find and update the item
        const index = this.items.findIndex(item => item.id === itemId);
        if (index > -1) {
            this.items[index] = { ...this.items[index], ...updatedItem };
            
            // Re-render the specific item
            const element = this.container.querySelector(`[data-index="${index}"]`);
            if (element) {
                const newElement = this.renderItem(this.items[index], index);
                element.replaceWith(newElement);
            }
        }
    }
    
    destroy() {
        this.pauseAutoplay();
        
        // Remove event listeners
        // This is a simplified version - in production, you'd want to properly track and remove all listeners
    }
}
    

        // Top Notification Ticker - Features rotating one at a time
        class TopNotificationTicker {
            constructor(container, items) {
                this.container = container;
                this.items = items;
                this.currentIndex = 0;
                this.init();
            }
            
            init() {
                this.renderCurrentFeature();
                this.startRotation();
            }
            
            renderCurrentFeature() {
                const feature = this.items[this.currentIndex];
                this.container.innerHTML = `
                    <div class="top-notification-item">
                        <i class="fas ${feature.icon}"></i>
                        <span>${feature.title}</span>
                    </div>
                `;
            }
            
            nextFeature() {
                this.currentIndex = (this.currentIndex + 1) % this.items.length;
                this.renderCurrentFeature();
            }
            
            startRotation() {
                // Rotate features every 4 seconds
                setInterval(() => {
                    this.nextFeature();
                }, 4000);
            }
        }

        // Weekly Offers Slider - Restored to original horizontal scroll
        class WeeklyOffersSlider {
            constructor(container, offers) {
                this.container = container;
                this.offers = offers;
                this.init();
            }
            
            init() {
                this.renderOffers();
            }
            
            renderOffers() {
                this.container.innerHTML = '';
                
                this.offers.forEach(offer => {
                    const element = this.createOfferCard(offer);
                    this.container.appendChild(element);
                });
            }
            
            createOfferCard(offer) {
                const offerCard = document.createElement('div');
                offerCard.className = 'offer-card';
                offerCard.setAttribute('data-product-id', offer.id);
                offerCard.innerHTML = `
                    <div class="offer-countdown">${offer.countdown}</div>
                    <div class="offer-image">
                        <!-- Placeholder for image -->
                    </div>
                    <div class="offer-info">
                        <h3 class="offer-title">${offer.name}</h3>
                        <div class="offer-price">
                            <span class="offer-current-price">UGX ${offer.price.toLocaleString()}</span>
                            <span class="offer-original-price">UGX ${offer.originalPrice.toLocaleString()}</span>
                            <span class="offer-discount">${Math.round((1 - offer.price/offer.originalPrice) * 100)}% OFF</span>
                        </div>
                        <div class="offer-actions">
                            <button class="btn btn-primary add-to-cart-btn">Add to Cart 🛒</button>
                        </div>
                    </div>
                `;
                
                // Add click event to open quick view modal
                offerCard.addEventListener('click', (e) => {
                    // Don't open modal if clicking on Add to Cart button
                    if (!e.target.closest('.add-to-cart-btn')) {
                        openQuickView(offer.id);
                    }
                });

             // 2. Add to Cart Logic (FIXED)
    const addToCartBtn = offerCard.querySelector('.add-to-cart-btn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // ✅ NEW: Use React cart with proper product object
            // Find the full product object from the products array
            const productObj = products.find(p => p.id === offer.id);
            if (productObj) {
                window.callReact('reactCart', 'addItem', productObj);
            } else {
                console.error('Product not found for ID:', offer.id);
            }
        });
    }

// 1. Add Wishlist Heart
        const heartButton = document.createElement('button');
        heartButton.className = 'wishlist-heart';
        heartButton.setAttribute('aria-label', 'Add to Wishlist');
        heartButton.innerHTML = '<i class="far fa-heart"></i>';
        
        // Click Handler
        heartButton.onclick = (e) => {
            e.stopImmediatePropagation();
            e.preventDefault();
            
            const productObj = products.find(p => p.id === offer.id);
            if (window.reactWishlist && productObj) {
                window.reactWishlist.toggle(productObj);
            }
        };
        
        offerCard.appendChild(heartButton);
        
        // 2. Update Click Handler to ignore heart
        offerCard.addEventListener('click', (e) => {
            if (!e.target.closest('.add-to-cart-btn') && !e.target.closest('.wishlist-heart')) {
                openQuickView(offer.id);
            }
        });

                
                return offerCard;
            }

        }

        // Quick View Modal functions
        let modalGallery = null;
        let currentProductId = null;

        function openQuickView(productId) {
                addToRecentlyViewed(productId); 
            // Find product by ID
            let product = products.find(p => p.id === productId);
        
            // If not found in main products, check weekly offers
            if (!product) {
                product = weeklyOffers.find(p => p.id === productId);
            }
            
            if (!product) return;
            
            currentProductId = productId;
            
            // Populate modal with product details
            modalTitle.textContent = product.name;
            modalCurrentPrice.textContent = `UGX ${product.price.toLocaleString()}`;
            
            // Set condition tag
            modalConditionTag.textContent = product.condition.charAt(0).toUpperCase() + product.condition.slice(1);
            modalConditionTag.className = `modal-condition-tag ${product.condition}`;
            
            // Check if product is in compare list
            const isInCompareList = comparisonFeature.compareList.some(item => item.id === productId);
            compareCheckbox.checked = isInCompareList;
            
            // Populate image gallery
            if (product.images && product.images.length > 0) {
                modalGallery = new ModalGallery(
                    modalGalleryTrack,
                    product.images,
                    modalGalleryIndicators,
                    modalGalleryPrev,
                    modalGalleryNext
                );
            }
            
            // Populate specs including battery life and GPU
            modalSpecsList.innerHTML = '';
            
            // Add original specs
            product.specs.forEach(spec => {
                const specItem = document.createElement('div');
                specItem.className = 'modal-spec-item';
                specItem.textContent = spec;
                modalSpecsList.appendChild(specItem);
            });
            
            // Add battery life if available
            if (product.batteryLife) {
                const batteryItem = document.createElement('div');
                batteryItem.className = 'modal-spec-item';
                batteryItem.textContent = `Battery: ${product.batteryLife}`;
                modalSpecsList.appendChild(batteryItem);
            }
            
            // Add GPU if available
            if (product.gpu) {
                const gpuItem = document.createElement('div');
                gpuItem.className = 'modal-spec-item';
                gpuItem.textContent = `GPU: ${product.gpu}`;
                modalSpecsList.appendChild(gpuItem);
            }
                        
            // Hide the WhatsApp button
            modalWhatsAppBtn.style.display = 'none';

            // Update Modal Actions to include Add to Cart
            const modalActions = document.querySelector('.modal-actions');
            if (modalActions) {
                // Remove existing add to cart button if any to prevent duplicates
                const existingBtn = modalActions.querySelector('#modalAddToCartBtn');
                if (existingBtn) existingBtn.remove();

                // Create Add to Cart button
                const addToCartBtn = document.createElement('button');
                addToCartBtn.id = 'modalAddToCartBtn';
                addToCartBtn.className = 'btn btn-primary';
                addToCartBtn.textContent = 'Add to Cart 🛒';
                addToCartBtn.style.flex = '1';
                
                // Add event listener
                addToCartBtn.addEventListener('click', () => {

             // ✅ NEW: Use React cart
                window.callReact('reactCart', 'addItem', product);
                });
                
                // Insert before the Close button
                const closeBtn = modalActions.querySelector('#modalCloseBtn');
                modalActions.insertBefore(addToCartBtn, closeBtn);
            }
 
            // FIX TAGLINE DISPLAY - This is the main issue you're asking about
               const modalTaglineText = document.querySelector('.modal-tagline-text');
               const modalTaglineSection = document.querySelector('.modal-tagline-section');
    
            if (modalTaglineText && modalTaglineSection && product.tagline) {

             // Directly set the tagline text content
                modalTaglineText.textContent = product.tagline;
        
            // Ensure the tagline section is visible
                 modalTaglineSection.style.display = 'block';
            }

            // Show modal
            quickViewModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        }

        function closeQuickView() {
            quickViewModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
            modalGallery = null; // Clean up gallery instance
            currentProductId = null;
        }

        // Modal Image Gallery
        class ModalGallery {
            constructor(track, images, indicators, prevBtn, nextBtn) {
                this.track = track;
                this.images = images;
                this.indicators = indicators;
                this.prevBtn = prevBtn;
                this.nextBtn = nextBtn;
                this.currentIndex = 0;
                
                this.init();
            }
            
            init() {
                this.renderImages();
                this.createIndicators();
                this.setupEventListeners();
            }
            
            renderImages() {
                this.track.innerHTML = '';
                
                this.images.forEach((image, index) => {
                    const slide = document.createElement('div');
                    slide.className = 'modal-gallery-slide';
                    slide.innerHTML = `<img src="${image}" alt="Product image ${index + 1}">`;
                    this.track.appendChild(slide);
                });
                
                this.updatePosition();
            }
            
            createIndicators() {
                this.indicators.innerHTML = '';
                
                this.images.forEach((_, index) => {
                    const indicator = document.createElement('button');
                    indicator.className = 'modal-gallery-indicator';
                    if (index === 0) indicator.classList.add('active');
                    indicator.setAttribute('aria-label', `Go to image ${index + 1}`);
                    indicator.addEventListener('click', () => this.goToSlide(index));
                    this.indicators.appendChild(indicator);
                });
            }
            
            setupEventListeners() {
                this.prevBtn.addEventListener('click', () => this.prev());
                this.nextBtn.addEventListener('click', () => this.next());
                
                // Touch events
                let touchStartX = 0;
                let touchEndX = 0;
                
                this.track.addEventListener('touchstart', (e) => {
                    touchStartX = e.changedTouches[0].screenX;
                });
                
                this.track.addEventListener('touchend', (e) => {
                    touchEndX = e.changedTouches[0].screenX;
                    this.handleSwipe(touchStartX, touchEndX);
                });
            }
            
            handleSwipe(startX, endX) {
                const swipeThreshold = 50;
                if (endX < startX - swipeThreshold) {
                    this.prev();
                } else if (endX > startX + swipeThreshold) {
                    this.next();
                }
            }
            
            next() {
                this.currentIndex = (this.currentIndex + 1) % this.images.length;
                this.updatePosition();
            }
            
            prev() {
                this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
                this.updatePosition();
            }
            
            goToSlide(index) {
                this.currentIndex = index;
                this.updatePosition();
            }
            
            updatePosition() {
                const offset = this.currentIndex * -100;
                this.track.style.transform = `translateX(${offset}%)`;
                
                // Update indicators
                const indicators = this.indicators.querySelectorAll('.modal-gallery-indicator');
                indicators.forEach((indicator, index) => {
                    indicator.classList.toggle('active', index === this.currentIndex);
                });
            }
        }

        // Comparison Feature
        // Comparison Feature - UPDATED
class ComparisonFeature {
    constructor() {
        this.compareList = [];
        this.maxItems = 3;
        this.comparisonBody = document.getElementById('comparisonBody');
        this.comparisonModal = document.getElementById('comparisonModal');
        this.compareButton = document.getElementById('compareButton');
        this.compareCount = document.getElementById('compareCount');
        this.init();
    }
    
    init() {
        // Setup event listeners
        if (this.compareButton) {
            this.compareButton.addEventListener('click', () => this.openComparisonModal());         
        }
    }
    
    addToCompare(productId) {
        // Check if product is already in compare list
        if (this.compareList.find(item => item.id === productId)) {
            // Remove from compare list
            this.compareList = this.compareList.filter(item => item.id !== productId);
            showToast(`Removed from comparison list`);
        } else {
            // Add to compare list
            if (this.compareList.length >= this.maxItems) {
                showToast(`You can only compare up to ${this.maxItems} laptops at a time`);
                return false;
            }
            
            const product = products.find(p => p.id === productId);
            if (product) {
                this.compareList.push(product);
                showToast(`Added ${product.name} to comparison list`);
            }
        }
        
        this.updateCompareButton();
        return true;
    }
    
    // NEW: Remove single item
    removeFromCompare(productId) {
        this.compareList = this.compareList.filter(item => item.id !== productId);
        this.renderComparisonTable(); // Re-render table
        this.updateCompareButton(); // Update floating button
        showToast("Item removed");
    }
    
    // NEW: Clear all items
    clearComparison() {
        this.compareList = [];
        this.closeComparisonModal();
        this.updateCompareButton();
        showToast("Comparison cleared");
    }
    
    updateCompareButton() {
        if (this.compareList.length >= 2) {
            this.compareButton.classList.add('active');
            this.compareCount.textContent = this.compareList.length;
        } else {
            this.compareButton.classList.remove('active');
        }
    }
    
    openComparisonModal() {
        if (this.compareList.length < 2) {
            showToast(`Please select at least 2 laptops to compare`);
            return;
        }
        
        this.comparisonModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        this.renderComparisonTable();
    }
    
    closeComparisonModal() {
        this.comparisonModal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    renderComparisonTable() {
        this.comparisonBody.innerHTML = '';
        
        // Create comparison table
        const table = document.createElement('table');
        table.className = 'comparison-table';
        
        // Create table header
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        
        // Add empty cell for row headers
        const emptyHeader = document.createElement('th');
        emptyHeader.textContent = '';
        headerRow.appendChild(emptyHeader);
        
        // Add product headers with "X" button
        this.compareList.forEach(product => {
            const th = document.createElement('th');
            th.className = 'product-cell';
            th.style.position = 'relative'; // Important for layout
            
            // Container for Image + Name + X button
            const headerContent = document.createElement('div');
            headerContent.style.textAlign = 'center';

            // 1. The "X" Button
            const removeBtn = document.createElement('button');
            removeBtn.className = 'compare-remove-btn';
            removeBtn.innerHTML = '<i class="fas fa-times"></i>';
            removeBtn.title = "Remove from comparison";
            // Using arrow function to preserve 'this' context
            removeBtn.onclick = () => this.removeFromCompare(product.id);
            
            // 2. Image
            const img = document.createElement('img');
            img.src = product.image;
            img.className = 'product-image';
            img.alt = product.name;

            // 3. Name
            const nameDiv = document.createElement('div');
            nameDiv.className = 'product-name';
            nameDiv.textContent = product.name;

            // Assemble Header
            th.appendChild(removeBtn); // Add X first (top-right)
            th.appendChild(img);
            th.appendChild(nameDiv);
            headerRow.appendChild(th);
        });
        
        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        // Create table body
        const tbody = document.createElement('tbody');
        
        // Add spec rows
        const specsToCompare = [
            { name: 'Price', getValue: (p) => `UGX ${p.price.toLocaleString()}` },
            { name: 'Condition', getValue: (p) => p.condition.charAt(0).toUpperCase() + p.condition.slice(1) },
            { name: 'Processor', getValue: (p) => p.specs.find(s => s.includes('Intel') || s.includes('AMD') || s.includes('Apple')) || 'N/A' },
            { name: 'RAM', getValue: (p) => p.specs.find(s => s.includes('GB RAM')) || 'N/A' },
            { name: 'Storage', getValue: (p) => p.specs.find(s => s.includes('GB SSD') || s.includes('TB SSD')) || 'N/A' },
            { name: 'Display', getValue: (p) => p.specs.find(s => s.includes('" Display')) || 'N/A' },
            { name: 'Battery Life', getValue: (p) => p.batteryLife || 'N/A' },
            { name: 'Weight', getValue: (p) => `${p.weight} kg` },
            { name: 'GPU', getValue: (p) => p.gpu || 'Integrated Graphics' }
        ];
        
        specsToCompare.forEach(spec => {
            const row = document.createElement('tr');
            
            // Add spec name
            const specNameCell = document.createElement('td');
            specNameCell.textContent = spec.name;
            row.appendChild(specNameCell);
            
            // Add spec values for each product
            this.compareList.forEach(product => {
                const specCell = document.createElement('td');
                specCell.textContent = spec.getValue(product);
                
                // Highlight better specs
                if (this.isBetterSpec(spec.name, product, this.compareList)) {
                    specCell.classList.add('better-spec');
                } else if (this.isWorseSpec(spec.name, product, this.compareList)) {
                    specCell.classList.add('worse-spec');
                }
                
                row.appendChild(specCell);
            });
            
            tbody.appendChild(row);
        });
        
        table.appendChild(tbody);
        this.comparisonBody.appendChild(table);
        
        // Add recommendation section
        this.addRecommendation();
        
        // NEW: Add "Clear All" button at bottom
        this.addClearButton();
    }
    
    addClearButton() {
        const footerDiv = document.createElement('div');
        footerDiv.style.textAlign = 'center';
        footerDiv.style.marginTop = '30px';
        footerDiv.style.paddingTop = '20px';
        footerDiv.style.borderTop = '1px solid #eee';

        const clearBtn = document.createElement('button');
        clearBtn.className = 'btn btn-danger'; // NEW
        clearBtn.textContent = 'Clear Comparison List';
        clearBtn.style.marginTop = '10px';
        clearBtn.onclick = () => this.clearComparison();

        footerDiv.appendChild(clearBtn);
        this.comparisonBody.appendChild(footerDiv);
    }
    
    isBetterSpec(specName, product, productList) {
        // Logic for Price (Lower is better)
        if (specName === 'Price') {
            return product.price === Math.min(...productList.map(p => p.price));
        }
        
        // Logic for Battery (Higher is better)
        if (specName === 'Battery Life') {
            const batteryHours = parseInt(product.batteryLife) || 0;
            return batteryHours === Math.max(...productList.map(p => parseInt(p.batteryLife) || 0));
        }
        
        // Logic for Weight (Lower is better)
        if (specName === 'Weight') {
            return product.weight === Math.min(...productList.map(p => p.weight));
        }
        
        // Logic for RAM (Higher is better)
        if (specName === 'RAM') {
            const ramValue = this.extractNumericValue(product.specs.find(s => s.includes('GB RAM')) || '0 GB');
            return ramValue === Math.max(...productList.map(p => this.extractNumericValue(p.specs.find(s => s.includes('GB RAM')) || '0 GB')));
        }
        
        // Logic for Storage (Higher is better)
        if (specName === 'Storage') {
            const storageSpec = product.specs.find(s => s.includes('GB SSD') || s.includes('TB SSD')) || '0 GB';
            const storageValue = this.extractNumericValue(storageSpec);
            return storageValue === Math.max(...productList.map(p => {
                const spec = p.specs.find(s => s.includes('GB SSD') || s.includes('TB SSD')) || '0 GB';
                return this.extractNumericValue(spec);
            }));
        }
        
        return false;
    }
    
    isWorseSpec(specName, product, productList) {
        // Logic for Price (Higher is worse)
        if (specName === 'Price') {
            return product.price === Math.max(...productList.map(p => p.price));
        }
        
        // Logic for Battery (Lower is worse)
        if (specName === 'Battery Life') {
            const batteryHours = parseInt(product.batteryLife) || 0;
            return batteryHours === Math.min(...productList.map(p => parseInt(p.batteryLife) || 0));
        }
        
        // Logic for Weight (Higher is worse)
        if (specName === 'Weight') {
            return product.weight === Math.max(...productList.map(p => p.weight));
        }
        
        // Logic for RAM (Lower is worse)
        if (specName === 'RAM') {
            const ramValue = this.extractNumericValue(product.specs.find(s => s.includes('GB RAM')) || '0 GB');
            return ramValue === Math.min(...productList.map(p => this.extractNumericValue(p.specs.find(s => s.includes('GB RAM')) || '0 GB')));
        }
        
        // Logic for Storage (Lower is worse)
        if (specName === 'Storage') {
            const storageSpec = product.specs.find(s => s.includes('GB SSD') || s.includes('TB SSD')) || '0 GB';
            const storageValue = this.extractNumericValue(storageSpec);
            return storageValue === Math.min(...productList.map(p => {
                const spec = p.specs.find(s => s.includes('GB SSD') || s.includes('TB SSD')) || '0 GB';
                return this.extractNumericValue(spec);
            }));
        }
        
        return false;
    }
    
    extractNumericValue(specString) {
        const match = specString.match(/(\d+)/);
        return match ? parseInt(match[0]) : 0;
    }
    
    addRecommendation() {
        // (Keep your existing addRecommendation logic here, it works fine)
        const scoredProducts = this.compareList.map(product => {
            const score = this.calculateProductScore(product);
            return { ...product, score };
        });
        
        scoredProducts.sort((a, b) => b.score - a.score);
        
        const recommendation = document.createElement('div');
        recommendation.className = 'comparison-recommendation';
        
        const winner = scoredProducts[0];
        recommendation.innerHTML = `
            <h3>Recommendation: ${winner.name}</h3>
            <p>Based on our analysis, <strong>${winner.name}</strong> offers best overall value for your needs.</p>
            <div class="tradeoffs">
                <h4>Key Advantages:</h4>
                <ul>
                    ${this.getAdvantages(winner, scoredProducts).map(adv => `<li>${adv}</li>`).join('')}
                </ul>
                <h4>Trade-offs to Consider:</h4>
                <ul>
                    ${this.getTradeoffs(winner, scoredProducts).map(tradeoff => `<li>${tradeoff}</li>`).join('')}
                </ul>
            </div>
        `;
        
        this.comparisonBody.appendChild(recommendation);
    }
    
    calculateProductScore(product) {
        // (Keep your existing calculateProductScore logic here)
        let score = 0;
        const minPrice = Math.min(...this.compareList.map(p => p.price));
        const maxPrice = Math.max(...this.compareList.map(p => p.price));
        const priceScore = 1 - ((product.price - minPrice) / (maxPrice - minPrice));
        score += priceScore * 30;
        
        if (product.batteryLife) {
            const batteryHours = parseInt(product.batteryLife);
            const maxBattery = Math.max(...this.compareList.map(p => parseInt(p.batteryLife) || 0));
            score += (batteryHours / maxBattery) * 20;
        }
        
        const minWeight = Math.min(...this.compareList.map(p => p.weight));
        const maxWeight = Math.max(...this.compareList.map(p => p.weight));
        const weightScore = 1 - ((product.weight - minWeight) / (maxWeight - minWeight));
        score += weightScore * 15;
        
        if (product.condition === 'new') {
            score += 15;
        } else if (product.condition === 'refurbished') {
            score += 10;
        }
        
        if (product.hasGPU) {
            score += 10;
        }
        
        const ramSpec = product.specs.find(s => s.includes('GB RAM')) || '0 GB';
        const ramValue = this.extractNumericValue(ramSpec);
        const maxRam = Math.max(...this.compareList.map(p => {
            const spec = p.specs.find(s => s.includes('GB RAM')) || '0 GB';
            return this.extractNumericValue(spec);
        }));
        score += (ramValue / maxRam) * 10;
        
        return Math.round(score);
    }
    
    getAdvantages(product, allProducts) {
        // (Keep your existing getAdvantages logic here)
        const advantages = [];
        if (product.price === Math.min(...allProducts.map(p => p.price))) {
            advantages.push(`Best price at UGX ${product.price.toLocaleString()}`);
        }
        if (product.batteryLife) {
            const batteryHours = parseInt(product.batteryLife);
            const maxBattery = Math.max(...allProducts.map(p => parseInt(p.batteryLife) || 0));
            if (batteryHours === maxBattery) {
                advantages.push(`Longest battery life at ${product.batteryLife}`);
            }
        }
        if (product.weight === Math.min(...allProducts.map(p => p.weight))) {
            advantages.push(`Lightest at ${product.weight} kg`);
        }
        if (product.condition === 'new') {
            advantages.push('Brand new condition');
        }
        if (product.hasGPU && !allProducts.every(p => p.hasGPU)) {
            advantages.push('Dedicated graphics card');
        }
        const ramSpec = product.specs.find(s => s.includes('GB RAM')) || '0 GB';
        const ramValue = this.extractNumericValue(ramSpec);
        const maxRam = Math.max(...allProducts.map(p => {
            const spec = p.specs.find(s => s.includes('GB RAM')) || '0 GB';
            return this.extractNumericValue(spec);
        }));
        if (ramValue === maxRam) {
            advantages.push(`Most RAM at ${ramSpec}`);
        }
        return advantages;
    }
    
    getTradeoffs(product, allProducts) {
        // (Keep your existing getTradeoffs logic here)
        const tradeoffs = [];
        if (product.price > Math.min(...allProducts.map(p => p.price))) {
            const cheapest = allProducts.find(p => p.price === Math.min(...allProducts.map(p => p.price)));
            tradeoffs.push(`More expensive than ${cheapest.name} by UGX ${(product.price - cheapest.price).toLocaleString()}`);
        }
        if (product.batteryLife) {
            const batteryHours = parseInt(product.batteryLife);
            const maxBattery = Math.max(...allProducts.map(p => parseInt(p.batteryLife) || 0));
            if (batteryHours < maxBattery) {
                const bestBattery = allProducts.find(p => parseInt(p.batteryLife || 0) === maxBattery);
                tradeoffs.push(`Shorter battery life than ${bestBattery.name} (${maxBattery - batteryHours} hours less)`);
            }
        }
        if (product.weight > Math.min(...allProducts.map(p => p.weight))) {
            const lightest = allProducts.find(p => p.weight === Math.min(...allProducts.map(p => p.weight)));
            tradeoffs.push(`Heavier than ${lightest.name} by ${(product.weight - lightest.weight).toFixed(1)} kg`);
        }
        if (product.condition === 'used') {
            tradeoffs.push('Used condition (may have signs of wear)');
        } else if (product.condition === 'refurbished') {
            tradeoffs.push('Refurbished (previously used but restored)');
        }
        if (!product.hasGPU && allProducts.some(p => p.hasGPU)) {
            tradeoffs.push('Integrated graphics (less powerful for demanding tasks)');
        }
        return tradeoffs;
    }
}

        // Initialize comparison feature
        const comparisonFeature = new ComparisonFeature();

// Page load
window.addEventListener('load', () => {
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1000);
    
    // Initialize all components
    initializePerfectProductCarousel(); // Use new perfect carousel
    initializeBlogCarousel();
    initializeTopNotificationTicker();
    startHeroCarousel();
    initializeKeyboardNavigation();
    initializeFooterDropdowns();
    initializeQuickViewModal();
    initializeWeeklyOffersSlider();
});


// Initialize perfect product carousel
function initializePerfectProductCarousel() {
    window.productCarousel = new PerfectProductCarousel(
        document.getElementById('productTrack'),
        products,
        (product, index) => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.setAttribute('role', 'listitem');
            productCard.setAttribute('data-product-id', product.id);
            
            productCard.innerHTML = `
                <div class="product-badge ${product.badgeClass}">${product.badge}</div>
                <div class="product-image">
                    <!-- Placeholder for image -->
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-specs">
                        ${product.specs.map(spec => `<span class="spec-tag">${spec}</span>`).join('')}
                    </div>
                    <div class="product-price">
                        <div>
                            <span class="price">UGX ${product.price.toLocaleString()}</span>
                        </div>
                        <div>
                            <button class="btn btn-primary add-to-cart-btn" style="flex:1">Add to Cart 🛒</button>
                        </div>
                    </div>
                </div>
            `;
            
            // 1. Quick View Click
            productCard.addEventListener('click', (e) => {
                if (!e.target.closest('.add-to-cart-btn') && !e.target.closest('.wishlist-heart')) {
                    openQuickView(product.id);
                }
            });

            // 2. Cart Button
            const addToCartBtn = productCard.querySelector('.add-to-cart-btn');
            if (addToCartBtn) {
                addToCartBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    window.callReact('reactCart', 'addItem', product);
                });
            }

            // 3. ✅ ADD WISHLIST HEART
            const heartButton = document.createElement('button');
            heartButton.className = 'wishlist-heart';
            heartButton.setAttribute('aria-label', 'Add to Wishlist');
            heartButton.innerHTML = '<i class="far fa-heart"></i>';
            
            // Click Handler
            heartButton.onclick = (e) => {
                e.stopImmediatePropagation();
                e.preventDefault();
                
                const productObj = products.find(p => p.id === product.id);
                if (window.reactWishlist && productObj) {
                    window.reactWishlist.toggle(productObj);
                }
            };
            
            productCard.appendChild(heartButton);
            
            return productCard;
        },
            
        {
            autoplay: true,
            autoplaySpeed: 5000,
            showArrows: true,
            showPagination: true,
            enableSwipe: true
        }        
    );
}
                    

// Initialize blog carousel with Swiper - Clean mobile solution
function initializeBlogCarousel() {
    // Create blog slides
    const blogTrack = document.getElementById('blogTrack');
    blogTrack.innerHTML = '';
    
    blogPosts.forEach((post, index) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="blog-card">
                <div class="blog-image">
                    <img src="${post.image}" alt="${post.title}">
                </div>
                <div class="blog-content">
                    <div class="blog-date">${post.date}</div>
                    <h3 class="blog-title">${post.title}</h3>
                    <p class="blog-excerpt">${post.excerpt}</p>
                   <a href="blog-post.html?id=${post.id}" class="blog-link">Read More <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        `;
        
       // Add click event to navigate to blog post
       slide.addEventListener('click', (e) => {
      // Don't navigate if clicking on "Read More" link specifically (to avoid double trigger)
       if (!e.target.closest('.blog-link')) {
        window.location.href = `blog-post.html?id=${post.id}`;
      }
   });
        
        blogTrack.appendChild(slide);
    });

// Add these functions after your initializeBlogCarousel function
function addBlogPosts(newPosts) {
    console.log('Adding new blog posts:', newPosts.length);
    
    // Add to global blogPosts array
    blogPosts.push(...newPosts);
    
    // Re-initialize Swiper with new content
    reinitializeBlogSwiper();
    
    console.log(`Total blog posts: ${blogPosts.length}`);
}

function removeBlogPosts(postIds) {
    console.log('Removing blog posts:', postIds);
    
    // Remove from global blogPosts array
    blogPosts = blogPosts.filter(post => !postIds.includes(post.id));
    
    // Re-initialize Swiper with updated content
    reinitializeBlogSwiper();
    
    console.log(`Total blog posts: ${blogPosts.length}`);
}

function updateBlogPost(postId, updatedPost) {
    console.log('Updating blog post:', postId);
    
    // Find and update in global blogPosts array
    const index = blogPosts.findIndex(post => post.id === postId);
    if (index > -1) {
        blogPosts[index] = { ...blogPosts[index], ...updatedPost };
        
        // Re-initialize Swiper with updated content
        reinitializeBlogSwiper();
    }
}

function reinitializeBlogSwiper() {
    // Destroy existing Swiper
    if (window.blogSwiper) {
        window.blogSwiper.destroy();
    }
    
    // Clear existing slides
    const blogTrack = document.getElementById('blogTrack');
    blogTrack.innerHTML = '';
    
    // Create new slides
    blogPosts.forEach((post, index) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="blog-card">
                <div class="blog-image">
                    <!-- Placeholder for image -->
                </div>
                <div class="blog-content">
                    <div class="blog-date">${post.date}</div>
                    <h3 class="blog-title">${post.title}</h3>
                    <p class="blog-excerpt">${post.excerpt}</p>
                    <a href="${post.link}" class="blog-link">Read More <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        `;
        
        // Add click event
        slide.addEventListener('click', (e) => {
            if (!e.target.closest('.blog-link')) {
                window.location.href = post.link;
            }
        });
        
        blogTrack.appendChild(slide);
    });
    
    // Re-initialize Swiper
    window.blogSwiper = new Swiper('.blogSwiper', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
            renderBullet: function (index, className) {
                return `<span class="${className}"></span>`;
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
                effect: 'coverflow',
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: false
                }
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
                effect: 'coverflow',
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: false
                }
            },
            320: {
                slidesPerView: 1.2,
                spaceBetween: 10,
                effect: 'slide'
            }
        }
    });
}


    // Initialize safe mobile override
initializeSafeMobileOverride();

    // Initialize Swiper with conditional effects
    window.blogSwiper = new Swiper('.blogSwiper', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
            renderBullet: function (index, className) {
                return `<span class="${className}"></span>`;
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        // Clean approach: Different configs for different screen sizes
        breakpoints: {
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
                effect: 'coverflow',
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: false
                }
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
                effect: 'coverflow',
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: false
                }
            },
            320: {
                slidesPerView: 1.2,
                spaceBetween: 10,
                effect: 'slide' // Simple slide for mobile
            }
        }
    });
}

/* ============================================
   BLOG CAROUSEL MOBILE OVERRIDE - SAFE VERSION
   Purpose: Force mobile styles for blog carousel
   Why needed: Swiper applies inline styles that override CSS
   Target: Blog carousel on mobile devices only
   ============================================ */

/**
 * Safely force mobile override for blog carousel
 * Only runs on mobile devices to avoid desktop interference
 */
function safeMobileOverride() {
    // Feature detection and safety check
    if (!window.matchMedia || !document.querySelectorAll) {
        console.warn('Blog carousel override: Browser not supported');
        return;
    }
    
    // Only run on mobile
    if (!window.matchMedia('(max-width: 767px)').matches) {
        return;
    }
    
    try {
        // Target only blog carousel slides
        const blogSlides = document.querySelectorAll('.blogSwiper .swiper-slide');
        
        if (blogSlides.length === 0) {
            console.warn('Blog carousel override: No slides found');
            return;
        }
        
        // Apply styles with error handling
        blogSlides.forEach((slide, index) => {
            try {
                slide.style.setProperty('opacity', '1', 'important');
                slide.style.setProperty('transform', 'none', 'important');
                slide.style.setProperty('filter', 'none', 'important');
                slide.style.setProperty('-webkit-filter', 'none', 'important');
            } catch (error) {
                console.error(`Blog carousel override: Error on slide ${index}:`, error);
            }
        });
        
    } catch (error) {
        console.error('Blog carousel override: Critical error:', error);
    }
}

/**
 * Initialize safe mobile override with proper timing
 */
function initializeSafeMobileOverride() {
    // Feature detection and safety check
    if (!window.matchMedia || !document.querySelectorAll) {
        console.warn('Blog carousel override: Browser not supported');
        return;
    }
    
    // Only run on mobile
    if (!window.matchMedia('(max-width: 767px)').matches) {
        return;
    }
    
    // Prevent multiple initializations
    if (window.mobileOverrideInitialized) {
        console.log('Blog carousel override: Already initialized');
        return;
    }
    
    // Set initialization flag
    window.mobileOverrideInitialized = true;
    
    try {
        // Target only blog carousel slides
        const blogSlides = document.querySelectorAll('.blogSwiper .swiper-slide');
        
        if (blogSlides.length === 0) {
            console.warn('Blog carousel override: No slides found');
            return;
        }
        
        // Apply styles with error handling
        blogSlides.forEach((slide, index) => {
            try {
                slide.style.setProperty('opacity', '1', 'important');
                slide.style.setProperty('transform', 'none', 'important');
                slide.style.setProperty('filter', 'none', 'important');
                slide.style.setProperty('-webkit-filter', 'none', 'important');
            } catch (error) {
                console.error(`Blog carousel override: Error on slide ${index}:`, error);
            }
        });
        
        console.log(`Blog carousel override: Applied styles to ${blogSlides.length} slides`);
    } catch (error) {
        console.error('Blog carousel override: Critical error:', error);
    }
}


        // Initialize top notification ticker with rotating features
        function initializeTopNotificationTicker() {
            window.topNotificationTicker = new TopNotificationTicker(
                notificationContent,
                features
            );
        }

        // Initialize weekly offers slider
        function initializeWeeklyOffersSlider() {
            const weeklyOffersContainer = document.getElementById('weeklyOffersSlider');
            if (weeklyOffersContainer) {
                window.weeklyOffersSlider = new WeeklyOffersSlider(
                    weeklyOffersContainer,
                    weeklyOffers
                );
            }
        }

        // Initialize keyboard navigation
        function initializeKeyboardNavigation() {
            // Global keyboard shortcuts
            document.addEventListener('keydown', (e) => {
                // Alt + M: Toggle mobile menu
                if (e.altKey && e.key === 'm') {
                    e.preventDefault();
                    menuToggle.click();
                }
                
                // Alt + H: Go to home
                if (e.altKey && e.key === 'h') {
                    e.preventDefault();
                    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
                }
                
                // Alt + P: Go to products
                if (e.altKey && e.key === 'p') {
                    e.preventDefault();
                    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
                }
                
                // Escape: Close mobile menu if open
                if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
                    mobileNavClose.click();
                }
                
                // Escape: Close modal if open
                if (e.key === 'Escape' && quickViewModal.classList.contains('active')) {
                    closeQuickView();
                }
                
                // Escape: Close comparison modal if open
                if (e.key === 'Escape' && comparisonModal.classList.contains('active')) {
                    comparisonFeature.closeComparisonModal();
                }
            });
        }

        // Initialize footer dropdowns
        function initializeFooterDropdowns() {
            const footerSections = document.querySelectorAll('.footer-section');
            
            footerSections.forEach(section => {
                const header = section.querySelector('.footer-header');
                
                header.addEventListener('click', () => {
                    // Toggle active class on clicked section
                    section.classList.toggle('active');
                    
                    // Close other sections on mobile
                    if (window.innerWidth < 992) {
                        footerSections.forEach(otherSection => {
                            if (otherSection !== section) {
                                otherSection.classList.remove('active');
                            }
                        });
                    }
                });
            });
        }

        // Initialize Quick View Modal
        function initializeQuickViewModal() {
            // Add click event to offer cards in weekly offers
            const offerCards = document.querySelectorAll('.offer-card');
            offerCards.forEach(card => {
                card.addEventListener('click', (e) => {
                    // Don't open modal if clicking on WhatsApp button
                    if (!e.target.closest('.add-to-cart-btn')) {
                        const productId = parseInt(card.getAttribute('data-product-id'));
                        openQuickView(productId);
                    }
                });
            });
            
            // Close modal events
            modalClose.addEventListener('click', closeQuickView);
            modalCloseBtn.addEventListener('click', closeQuickView);
            
            // Close modal when clicking outside
            quickViewModal.addEventListener('click', (e) => {
                if (e.target === quickViewModal) {
                    closeQuickView();
                }
            });
            
            // Compare checkbox event
            compareCheckbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    // Add to compare list
                    if (!comparisonFeature.addToCompare(currentProductId)) {
                        // If failed to add (e.g., already at max), uncheck
                        e.target.checked = false;
                    }
                } else {
                    // Remove from compare list
                    comparisonFeature.addToCompare(currentProductId);
                }
            });
        }

        // ==========================================
        // HERO CAROUSEL LOGIC (UPDATED)
        // ==========================================

        // DOM Elements - Updated Selectors
        const heroSection = document.querySelector('.hero');
        // Updated: Look for indicators globally since they moved in HTML
        const heroHeadline = document.querySelector('.hero-headline');
        const heroSubheadline = document.querySelector('.hero-subheadline');
        const heroCtaGroup = document.querySelector('.hero-cta-group');

        let currentSlideIndex = 0;
        let heroCarouselInterval;

        function showSlide(index) {
            // Update Slides
            heroSlidesElements.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });

            // Update Indicators
            heroIndicators.forEach((indicator, i) => {
                indicator.classList.toggle('active', i === index);
                indicator.setAttribute('aria-selected', i === index);
            });

            // Update Content with Fade Effect
            // 1. Fade out
            heroHeadline.style.opacity = '0';
            heroSubheadline.style.opacity = '0';
            heroCtaGroup.style.opacity = '0';

            // 2. Change content
            setTimeout(() => {
                heroHeadline.textContent = heroSlides[index].title;
                heroSubheadline.textContent = heroSlides[index].subtitle;
                heroCtaGroup.innerHTML = `
                    <a href="${heroSlides[index].link}" class="btn btn-primary">
                        ${heroSlides[index].linkText}
                    </a>
                `;

                // 3. Fade in
                heroHeadline.style.opacity = '1';
                heroSubheadline.style.opacity = '1';
                heroCtaGroup.style.opacity = '1';
            }, 300);

            currentSlideIndex = index;
        }
        
        function nextSlide() {
            currentSlideIndex = (currentSlideIndex + 1) % heroSlides.length;
            showSlide(currentSlideIndex);
        }
        
        function startHeroCarousel() {
            if (heroCarouselInterval) clearInterval(heroCarouselInterval);
            heroCarouselInterval = setInterval(nextSlide, 5000);
        }

        // Initialize Hero
        if (heroSection && heroSlidesElements.length > 0) {
            // Set initial content
            showSlide(0);
            startHeroCarousel();

            // Manual Navigation
            heroIndicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    showSlide(index);
                    startHeroCarousel(); // Reset timer
                });
            });

            // Touch Events for Mobile
            let touchStartX = 0;
            let touchEndX = 0;

            heroSection.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });

            heroSection.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                if (touchEndX < touchStartX - 50) {
                    nextSlide(); // Swipe Left
                    startHeroCarousel();
                }
                if (touchEndX > touchStartX + 50) {
                    // Previous Slide
                    currentSlideIndex = (currentSlideIndex - 1 + heroSlides.length) % heroSlides.length;
                    showSlide(currentSlideIndex);
                    startHeroCarousel();
                }
            }, { passive: true });

            // Pause on hover (Desktop)
            if (window.matchMedia('(hover: hover)').matches) {
                heroSection.addEventListener('mouseenter', () => clearInterval(heroCarouselInterval));
                heroSection.addEventListener('mouseleave', () => startHeroCarousel());
            }
        }

        
        // Manual carousel navigation
        heroIndicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                showSlide(index);
                startHeroCarousel(); // Reset timer
            });
            
            indicator.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    showSlide(index);
                    startHeroCarousel();
                }
            });
        });

        // Touch events for hero carousel on mobile - simultaneous swipe
        let heroTouchStartX = 0;
        let heroTouchEndX = 0;

        heroSection.addEventListener('touchstart', (e) => {
            heroTouchStartX = e.changedTouches[0].screenX;
        });

        heroSection.addEventListener('touchend', (e) => {
            heroTouchEndX = e.changedTouches[0].screenX;
            handleHeroSwipe();
        });

        function handleHeroSwipe() {
            if (heroTouchEndX < heroTouchStartX - 50) {
                // Swiped left - next slide
                nextSlide();
                startHeroCarousel();
            }
            if (heroTouchEndX > heroTouchStartX + 50) {
                // Swiped right - previous slide
                currentSlideIndex = (currentSlideIndex - 1 + heroSlides.length) % heroSlides.length;
                showSlide(currentSlideIndex);
                startHeroCarousel();
            }
        }
 
        // Product actions
        function viewDetails(productId) {
            const product = products.find(p => p.id === productId);
            showToast(`Viewing details for ${product.name}`);
            // In a real application, this would navigate to a product details page
        }

        // Toast notification
        function showToast(message) {
            toast.textContent = message;
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Handle window resize with performance optimization
        let resizeTimer;
        window.addEventListener('resize', debounce(() => {
            // Recalculate products per view
            if (window.productCarousel) {
                window.productCarousel.renderItems();
            }
            
          // Recalculate blog carousel
if (window.blogSwiper) {
    window.blogSwiper.update();
}
            
            // Recalculate weekly offers slider
            if (window.weeklyOffersSlider) {
                window.weeklyOffersSlider.renderOffers();
            }
        }, 250));

        // Debounce function to improve performance
        function debounce(func, wait) {
            let timeout;
            return function() {
                const context = this;
                const args = arguments;
                clearTimeout(timeout);
                timeout = setTimeout(() => func.apply(context, args), wait);
            };
        }

        // Mobile menu toggle
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            overlay.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', mobileNav.classList.contains('active'));
        });

        mobileNavClose.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });

        overlay.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });

        // Close mobile menu when clicking on a link
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                overlay.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Comparison modal close
        comparisonClose.addEventListener('click', () => {
            comparisonFeature.closeComparisonModal();
        });

        comparisonModal.addEventListener('click', (e) => {
            if (e.target === comparisonModal) {
                comparisonFeature.closeComparisonModal();
            }
        });


// Laptop Finder Class - "TRUST WITH YOUR LIFE" Accuracy Algorithm
class LaptopFinder {
    constructor() {
        this.form = document.getElementById('laptopFinderForm');
        this.courseSelect = document.getElementById('course');
        this.budgetSelect = document.getElementById('budget');
        this.conditionSelect = document.getElementById('condition');
        this.budgetDisplay = document.getElementById('budgetDisplay');
        this.analysisLoading = document.getElementById('analysisLoading');
        this.analysisResults = document.getElementById('analysisResults');
        this.resultsSection = document.getElementById('finderResults');
        this.resultsContainer = document.getElementById('resultsContainer');
        this.viewAllResultsBtn = document.getElementById('viewAllResults');
        this.resetFinderBtn = document.getElementById('resetFinder');
        
        // === ULTRA-PRECISE SCORING CONSTANTS ===
        this.SCORING_CONSTANTS = {
            CONDITION_BONUS: 10,           // Bonus for matching preferred condition
            CONDITION_PENALTY_PER_STEP: 12, // Graduated penalty per condition step difference
            MAX_RAM_SCORE: 100,
            MAX_STORAGE_SCORE: 100,
            MAX_BATTERY_SCORE: 100,
            MAX_GPU_SCORE: 100,
            MAX_CPU_SCORE: 100,
            VALUE_BONUS: { EXCEPTIONAL: 15, GOOD: 8, FAIR: 3, SLIGHT_OVER: -2, OVER: -8, VERY_OVER: -15 },
            WEIGHT_PENALTY_PER_KG: 5,
            MAX_WEIGHT_PENALTY: 10,
            WEIGHT_TOLERANCE: 0.3,         // No penalty within this tolerance (kg)
            BRAND_MAX_BONUS: 10,
            DISPLAY_BONUS: { DESIGN_4K: 15, DESIGN_QHD: 10, GAMING_HIGH: 8 }
        };
        
        this.errorElement = null;
        
        // === UPDATED COURSE PROFILES WITH CPU WEIGHTS ===
        this.courseProfiles = {
            engineering: { 
                name: "Engineering", 
                weights: { ram: 30, storage: 20, gpu: 25, cpu: 15, battery: 5, brand: 5 }, 
                thresholds: { ram: 16, storage: 512, gpuScore: 20, cpuScore: 70 },
                idealWeight: 2.4,
                requiresHighPerformance: true 
            },
            medicine: { 
                name: "Medicine", 
                weights: { ram: 20, storage: 20, gpu: 5, cpu: 10, battery: 40, brand: 5 }, 
                thresholds: { ram: 8, storage: 256, gpuScore: 0, cpuScore: 50 },
                idealWeight: 1.5,
                requiresHighBattery: true 
            },
            computing: { 
                name: "Computing", 
                weights: { ram: 30, storage: 20, gpu: 20, cpu: 20, battery: 5, brand: 5 }, 
                thresholds: { ram: 16, storage: 512, gpuScore: 20, cpuScore: 75 },
                idealWeight: 2.2,
                requiresHighPerformance: true 
            },
            business: { 
                name: "Business", 
                weights: { ram: 25, storage: 20, gpu: 5, cpu: 15, battery: 30, brand: 5 }, 
                thresholds: { ram: 8, storage: 256, gpuScore: 0, cpuScore: 60 },
                idealWeight: 1.6,
                requiresPortability: true 
            },
            arts: { 
                name: "Arts", 
                weights: { ram: 20, storage: 25, gpu: 10, cpu: 15, battery: 25, brand: 5 }, 
                thresholds: { ram: 8, storage: 256, gpuScore: 5, cpuScore: 55 },
                idealWeight: 1.5,
                requiresHighBattery: true 
            },
            sciences: { 
                name: "Sciences", 
                weights: { ram: 25, storage: 25, gpu: 15, cpu: 20, battery: 10, brand: 5 }, 
                thresholds: { ram: 8, storage: 512, gpuScore: 10, cpuScore: 65 },
                idealWeight: 2.0,
                requiresHighPerformance: true 
            },
            agriculture: { 
                name: "Agriculture", 
                weights: { ram: 20, storage: 20, gpu: 5, cpu: 10, battery: 40, brand: 5 }, 
                thresholds: { ram: 8, storage: 256, gpuScore: 0, cpuScore: 50 },
                idealWeight: 2.5,
                requiresHighBattery: true 
            },
            education: { 
                name: "Education", 
                weights: { ram: 15, storage: 15, gpu: 5, cpu: 10, battery: 50, brand: 5 }, 
                thresholds: { ram: 8, storage: 256, gpuScore: 0, cpuScore: 50 },
                idealWeight: 1.6,
                requiresHighBattery: true 
            },
            law: { 
                name: "Law", 
                weights: { ram: 20, storage: 25, gpu: 5, cpu: 15, battery: 30, brand: 5 }, 
                thresholds: { ram: 8, storage: 256, gpuScore: 0, cpuScore: 55 },
                idealWeight: 1.6,
                requiresPortability: true 
            },
            social: { 
                name: "Social Sciences", 
                weights: { ram: 15, storage: 15, gpu: 5, cpu: 10, battery: 50, brand: 5 }, 
                thresholds: { ram: 8, storage: 256, gpuScore: 0, cpuScore: 50 },
                idealWeight: 1.6,
                requiresHighBattery: true 
            }
        };
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.setupBudgetDisplay();
        this.createErrorElement();
    }
    
    createErrorElement() {
        const existingError = document.getElementById('finderError');
        if (existingError) {
            this.errorElement = existingError;
            return;
        }
        
        const errorEl = document.createElement('div');
        errorEl.id = 'finderError';
        errorEl.className = 'finder-error glass-card';
        errorEl.style.cssText = `
            display: none;
            margin: 20px auto;
            padding: 20px;
            text-align: center;
            background: rgba(220, 53, 69, 0.1);
            border-left: 4px solid var(--danger);
            max-width: 600px;
        `;
        errorEl.innerHTML = `
            <i class="fas fa-exclamation-circle" style="color: var(--danger); font-size: 24px; margin-bottom: 10px;"></i>
            <p class="error-message" style="margin: 0; color: #fff;"></p>
        `;
        
        this.form.parentElement.insertBefore(errorEl, this.form.nextSibling);
        this.errorElement = errorEl;
    }

    showError(message) {
        this.hideLoadingState();
        if (this.errorElement) {
            const messageEl = this.errorElement.querySelector('.error-message');
            if (messageEl) messageEl.textContent = message;
            
            // Reset styles from showNoResults
            this.errorElement.style.background = 'rgba(220, 53, 69, 0.1)';
            this.errorElement.style.borderLeftColor = 'var(--danger)';
            
            const icon = this.errorElement.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-exclamation-circle';
                icon.style.color = 'var(--danger)';
            }
            
            this.errorElement.style.display = 'block';
            
            setTimeout(() => {
                this.errorElement.style.display = 'none';
            }, 5000);
        }
    }

    showNoResults() {
        this.hideLoadingState();
        if (this.errorElement) {
            const messageEl = this.errorElement.querySelector('.error-message');
            if (messageEl) messageEl.textContent = 'No laptops found matching your criteria. Try adjusting your budget or preferences.';
            this.errorElement.style.display = 'block';
            this.errorElement.style.background = 'rgba(255, 193, 7, 0.1)';
            this.errorElement.style.borderLeftColor = 'var(--warning)';
            
            const icon = this.errorElement.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-search';
                icon.style.color = 'var(--warning)';
            }
        }
    }
    
    setupEventListeners() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.analyzeRequirements();
        });
        
        this.viewAllResultsBtn.addEventListener('click', () => {
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
        
        this.resetFinderBtn.addEventListener('click', () => {
            this.resetFinder();
        });
    }
    
    setupBudgetDisplay() {
        this.budgetSelect.addEventListener('change', (e) => {
            const value = e.target.value;
            if (value) {
                this.budgetDisplay.textContent = `Selected: ${e.target.options[e.target.selectedIndex].text}`;
                this.budgetDisplay.style.display = 'block';
            } else {
                this.budgetDisplay.style.display = 'none';
            }
        });
    }

    analyzeRequirements() {
        try {
            const course = this.courseSelect.value;
            const budgetValue = this.budgetSelect.value;
            const conditionPref = this.conditionSelect.value;
            const primaryUse = document.querySelector('input[name="primaryUse"]:checked')?.value;
            
            if (!course || !budgetValue || !primaryUse) {
                this.showError('Please fill in all required fields');
                return;
            }
            
            if (this.errorElement) {
                this.errorElement.style.display = 'none';
            }
            
            let minBudget, maxBudget;
            if (budgetValue === '5000000+') {
                minBudget = 5000000;
                maxBudget = 100000000;
            } else {
                const parts = budgetValue.split('-');
                if (parts.length !== 2) {
                    this.showError('Invalid budget range selected');
                    return;
                }
                minBudget = parseInt(parts[0]);
                maxBudget = parseInt(parts[1]);
                
                if (isNaN(minBudget) || isNaN(maxBudget) || minBudget >= maxBudget) {
                    this.showError('Invalid budget range');
                    return;
                }
            }
            
            this.showLoadingState();
            
            setTimeout(() => {
                try {
                    const recommendations = this.getRecommendations({
                        course,
                        primaryUse,
                        conditionPref,
                        minBudget,
                        maxBudget
                    });
                    
                    if (recommendations.length === 0) {
                        this.showNoResults();
                        return;
                    }
                    
                    this.hideLoadingState();
                    this.showResults(recommendations);
                    this.resultsSection.scrollIntoView({ behavior: 'smooth' });
                    
                } catch (error) {
                    console.error('Recommendation generation error:', error);
                    this.showError('Failed to generate recommendations. Please try again.');
                }
            }, 2000);
            
        } catch (error) {
            console.error('Unexpected error:', error);
            this.showError('An unexpected error occurred. Please refresh and try again.');
        }
    }

    getRecommendations(criteria) {
        const profile = this.courseProfiles[criteria.course];
        
        const budgetFiltered = products.filter(p => 
            p.price >= criteria.minBudget && 
            p.price <= criteria.maxBudget
        );
        
        if (budgetFiltered.length === 0) return [];
        
        const scoredProducts = budgetFiltered
            .map(product => ({
                product,
                score: this.calculatePreciseScore(product, criteria, profile),
                matchReasons: this.generateDynamicReasons(product, criteria, profile)
            }))
            .sort((a, b) => b.score - a.score);
        
        return scoredProducts.slice(0, 3).map(item => ({
            ...item.product,
            score: item.score,
            matchReasons: item.matchReasons
        }));
    }

            calculatePreciseScore(product, criteria, profile) {
        let totalScore = 0;

        // === PRIORITY OVERRIDES ===
        // We define the "Ultimate" weights for each specific lifestyle.
        // If the user selects one of these, we use these weights, ignoring the course.
        const useOverrides = {
            gaming: { 
                // Gamers need GPU above all, but we keep 10% battery to avoid "Brick" laptops
                ram: 25, storage: 10, gpu: 40, cpu: 15, battery: 10, brand: 0 
            },
            design: { 
                // Designers work in coffee shops. They need battery AND RAM.
                ram: 30, storage: 20, gpu: 20, cpu: 15, battery: 15, brand: 0 
            },
            programming: { 
                // Programmers compile code (CPU heat) and run Docker (RAM eats battery).
                // They need decent battery to work from libraries/cafes.
                ram: 30, storage: 15, gpu: 10, cpu: 30, battery: 15, brand: 0 
            }
        };

        // Decide which weights to use
        let weights = profile.weights; // Default to Course weights

        if (useOverrides[criteria.primaryUse]) {
            console.log(`🔀 OVERRIDE ACTIVE: Switching to ${criteria.primaryUse} Profile`);
            weights = useOverrides[criteria.primaryUse];
        }
        // If "study" is selected, we stick to 'profile.weights' (Academic mode)
        
        // === END OVERRIDES ===
    

        // 1. RAM SCORE
        const ramVal = this.extractNumericSpec(product.specs, 'GB RAM');
        const ramScore = Math.min(this.SCORING_CONSTANTS.MAX_RAM_SCORE, (ramVal / profile.thresholds.ram) * 100);
        totalScore += (ramScore / 100) * weights.ram;
        
        // 2. STORAGE SCORE
        const storageSpec = product.specs.find(s => s.includes('SSD') || s.includes('HDD'));
        let storageVal = this.extractNumericSpec([storageSpec || ''], 'GB') || 0;
        if (storageSpec && storageSpec.includes('TB')) storageVal *= 1000;
        
        let storageScore = 0;
        if (storageSpec) {
            const storageText = storageSpec.toLowerCase();
            let baseScore = storageVal >= profile.thresholds.storage ? 100 : (storageVal / profile.thresholds.storage) * 100;
            
            if (storageText.includes('nvme') || storageText.includes('pcie 4.0')) {
                baseScore = Math.min(120, baseScore * 1.2);
            } else if (storageText.includes('ssd')) {
                baseScore = Math.min(110, baseScore * 1.1);
            }
            
            storageScore = Math.min(this.SCORING_CONSTANTS.MAX_STORAGE_SCORE, baseScore);
        }
        totalScore += (storageScore / 100) * weights.storage;
        
        // 3. GPU SCORE
        const gpuScore = this.calculateGPUScore(product, profile);
        totalScore += (gpuScore / 100) * weights.gpu;
        
        // 4. CPU SCORE
        const cpuScore = this.calculateCPUScore(product.processor);
        totalScore += (cpuScore / 100) * weights.cpu;
        
        // 5. BATTERY SCORE
        let batteryHours = 0;
        if (product.batteryLife) {
            const match = product.batteryLife.match(/(\d+)/);
            if (match) batteryHours = parseInt(match[0]);
        }
        
        // We keep the battery requirement based on the course, but weight it based on the Override.
        // This means a Social Science Gamer still needs *some* battery, but it matters less.
        const requiredHours = profile.requiresHighBattery ? 8 : 6;
        const batteryScore = Math.min(
            this.SCORING_CONSTANTS.MAX_BATTERY_SCORE, 
            (batteryHours / requiredHours) * 100
        );
        totalScore += (batteryScore / 100) * weights.battery;
        
        // 6. WEIGHT PENALTY (with 0.3kg tolerance zone)
        const weightDiff = Math.abs((product.weight || profile.idealWeight) - profile.idealWeight);
        const weightPenalty = weightDiff > 0.3
            ? Math.min(this.SCORING_CONSTANTS.MAX_WEIGHT_PENALTY, (weightDiff - 0.3) * this.SCORING_CONSTANTS.WEIGHT_PENALTY_PER_KG)
            : 0;
        totalScore -= weightPenalty;
        
        // 7. CONDITION PREFERENCE (graduated penalty instead of harsh -50)
        if (criteria.conditionPref !== 'any') {
            if (product.condition === criteria.conditionPref) {
                totalScore += this.SCORING_CONSTANTS.CONDITION_BONUS;
            } else {
                // Graduated penalty: new→refurbished is -15, new→used is -25
                const conditionRank = { 'new': 3, 'refurbished': 2, 'used': 1 };
                const prefRank = conditionRank[criteria.conditionPref] || 2;
                const prodRank = conditionRank[product.condition] || 2;
                const rankDiff = Math.abs(prefRank - prodRank);
                totalScore -= rankDiff * 12; // -12 for 1 step, -24 for 2 steps
            }
        }
        
        // 8. VALUE SCORE
        const midBudget = (criteria.minBudget + criteria.maxBudget) / 2;
        const valueRatio = product.price / midBudget;
        
        if (valueRatio <= 0.7) {
            totalScore += this.SCORING_CONSTANTS.VALUE_BONUS.EXCEPTIONAL;
        } else if (valueRatio <= 0.85) {
            totalScore += this.SCORING_CONSTANTS.VALUE_BONUS.GOOD;
        } else if (valueRatio <= 1.0) {
            totalScore += this.SCORING_CONSTANTS.VALUE_BONUS.FAIR;
        } else if (valueRatio <= 1.15) {
            totalScore += this.SCORING_CONSTANTS.VALUE_BONUS.SLIGHT_OVER;
        } else if (valueRatio <= 1.3) {
            totalScore += this.SCORING_CONSTANTS.VALUE_BONUS.OVER;
        } else {
            totalScore += this.SCORING_CONSTANTS.VALUE_BONUS.VERY_OVER;
        }

        // 9. BRAND RELIABILITY
        const brandBonus = this.getBrandReliability(product.brand);
        totalScore += brandBonus;
        
        // 10. DISPLAY BONUS
        if (criteria.primaryUse === 'design' && product.display) {
            if (product.display.includes('4K') || product.display.includes('Retina')) {
                totalScore += this.SCORING_CONSTANTS.DISPLAY_BONUS.DESIGN_4K;
            } else if (product.display.includes('QHD') || product.display.includes('1440p')) {
                totalScore += this.SCORING_CONSTANTS.DISPLAY_BONUS.DESIGN_QHD;
            }
        }
        
        // 11. HIGH REFRESH RATE
        if (criteria.primaryUse === 'gaming' && product.display && product.display.includes('144Hz')) {
            totalScore += this.SCORING_CONSTANTS.DISPLAY_BONUS.GAMING_HIGH;
        }
        
        // 12. PRIMARY USE MODIFIERS (Flat penalties/bonuses)
        if (criteria.primaryUse === 'programming' && product.hasGPU) totalScore += 5;
        if (criteria.primaryUse === 'design' && product.hasTouchscreen) totalScore += 8;
        if (criteria.primaryUse === 'gaming' && !product.hasGPU) totalScore -= 20;
        if (criteria.primaryUse === 'gaming' && product.gpu && product.gpu.includes('RTX')) totalScore += 10;
        
        return Math.max(0, Math.round(totalScore));
    }
    
    // === NEW: ADVANCED GPU SCORING ===
    calculateGPUScore(product, profile) {
        let gpuScore = 0;
        
        if (product.hasGPU && product.gpu) {
            const gpu = product.gpu.toLowerCase();
            
            // Premium Tier (100)
            if (gpu.includes('rtx 4090') || gpu.includes('rtx 4080') || 
                gpu.includes('rx 7900') || gpu.includes('rx 7800')) {
                gpuScore = 100;
            }
            // High Tier (90)
            else if (gpu.includes('rtx 4070') || gpu.includes('rtx 4060') || 
                     gpu.includes('rtx 3080') || gpu.includes('rtx 3070') ||
                     gpu.includes('rx 7700') || gpu.includes('rx 7600')) {
                gpuScore = 90;
            }
            // Mid-High Tier (80)
            else if (gpu.includes('rtx 3060') || gpu.includes('rtx 3050') ||
                     gpu.includes('rtx 2070') || gpu.includes('rtx 2060') ||
                     gpu.includes('rx 6700') || gpu.includes('rx 6600')) {
                gpuScore = 80;
            }
            // Mid Tier (70)
            else if (gpu.includes('rtx 2050') || gpu.includes('gtx 1660') ||
                     gpu.includes('gtx 1650') || gpu.includes('rx 6500')) {
                gpuScore = 70;
            }
            // Entry Gaming (60) - removed duplicate gtx 1650
            else if (gpu.includes('gtx 1050') || gpu.includes('mx') || gpu.includes('rx 6400')) {
                gpuScore = 60;
            }
            // Basic Dedicated (50)
            else {
                gpuScore = 50;
            }
        } else if (profile.thresholds.gpuScore > 0) {
            // Course needs GPU but product doesn't have one
            gpuScore = 0;
        } else {
            // Course doesn't need GPU, integrated is fine - return threshold score
            gpuScore = profile.thresholds.gpuScore === 0 ? 100 : 30;
        }
        
        return gpuScore;
    }
    
    // === NEW: ADVANCED CPU SCORING ===
    calculateCPUScore(processor) {
        if (!processor) return 30;
        
        const cpu = processor.toLowerCase();
        
        // Apple Silicon (M-series)
        if (cpu.includes('m3 max') || cpu.includes('m3 pro') || cpu.includes('m3 ultra')) return 100;
        if (cpu.includes('m3') || cpu.includes('m2 max') || cpu.includes('m2 pro')) return 95;
        if (cpu.includes('m2') || cpu.includes('m1 max') || cpu.includes('m1 pro')) return 90;
        if (cpu.includes('m1')) return 85;
        
        // Intel Core 13th/14th Gen
        if (cpu.includes('i9-149') || cpu.includes('i9-139')) return 100;
        if (cpu.includes('i9-14') || cpu.includes('i9-13')) return 95;
        if (cpu.includes('i7-149') || cpu.includes('i7-139')) return 90;
        if (cpu.includes('i7-14') || cpu.includes('i7-13')) return 85;
        if (cpu.includes('i5-145') || cpu.includes('i5-135')) return 80;
        if (cpu.includes('i5-14') || cpu.includes('i5-13')) return 75;
        
        // Intel Core 12th Gen
        if (cpu.includes('i9-12')) return 85;
        if (cpu.includes('i7-12')) return 80;
        if (cpu.includes('i5-12')) return 70;
        
        // Older Intel
        if (cpu.includes('i9-11') || cpu.includes('i9-10')) return 75;
        if (cpu.includes('i7-11') || cpu.includes('i7-10')) return 70;
        if (cpu.includes('i5-11') || cpu.includes('i5-10')) return 65;
        if (cpu.includes('i3-11') || cpu.includes('i3-10')) return 50;
        
        // AMD Ryzen 7000 Series
        if (cpu.includes('ryzen 9 794') || cpu.includes('ryzen 9 795')) return 95;
        if (cpu.includes('ryzen 9 79')) return 90;
        if (cpu.includes('ryzen 7 784') || cpu.includes('ryzen 7 774')) return 85;
        if (cpu.includes('ryzen 7 77') || cpu.includes('ryzen 7 78')) return 80;
        if (cpu.includes('ryzen 5 764') || cpu.includes('ryzen 5 754')) return 75;
        if (cpu.includes('ryzen 5 76') || cpu.includes('ryzen 5 75')) return 70;
        
        // AMD Ryzen 6000 Series
        if (cpu.includes('ryzen 9 69')) return 85;
        if (cpu.includes('ryzen 7 68') || cpu.includes('ryzen 7 67')) return 80;
        if (cpu.includes('ryzen 5 66') || cpu.includes('ryzen 5 65')) return 70;
        
        // Older AMD
        if (cpu.includes('ryzen 9 59') || cpu.includes('ryzen 9 58')) return 75;
        if (cpu.includes('ryzen 7 58') || cpu.includes('ryzen 7 57')) return 70;
        if (cpu.includes('ryzen 5 56') || cpu.includes('ryzen 5 55')) return 65;
        if (cpu.includes('ryzen 3')) return 45;
        
        // Intel Pentium/Celeron
        if (cpu.includes('pentium') || cpu.includes('celeron')) return 30;
        
        return 30; // Basic/unknown processor
    }
    
    // === NEW: BRAND RELIABILITY SCORING ===
    getBrandReliability(brand) {
        if (!brand) return 0;
        
        const brandLower = brand.toLowerCase();
        const brandScores = {
            'apple': 10,     // Premium build, excellent support
            'dell': 9,       // Top-tier business support
            'lenovo': 8,     // Excellent keyboards, ThinkPad reliability
            'hp': 7,         // Good overall, decent support
            'asus': 8,       // Great gaming/performance, good build
            'acer': 6,       // Budget-friendly, decent quality
            'microsoft': 9,  // Surface line premium quality
            'razer': 9,      // Premium gaming, great build
            'msi': 8,        // Gaming performance focused
            'huawei': 7,     // Excellent build quality
            'samsung': 8,    // Great displays, good quality
            'lg': 7,         // Good quality, premium
            'fujitsu': 7,    // Business reliability
            'toshiba': 6,    // Decent, getting rarer
            'xiaomi': 6,     // Good value, decent quality
            'google': 8,     // Chromebook premium
            'framework': 9   // Repairability and sustainability
        };
        
        for (const [key, score] of Object.entries(brandScores)) {
            if (brandLower.includes(key)) return score;
        }
        
        return 3; // Unknown brand
    }

    generateDynamicReasons(product, criteria, profile) {
        const reasons = [];
        
        // RAM Reason
        const ramVal = this.extractNumericSpec(product.specs, 'GB RAM');
        if (ramVal >= profile.thresholds.ram) {
            reasons.push(`✅ ${ramVal}GB RAM (Meets ${profile.name} requirements)`);
        } else if (ramVal >= profile.thresholds.ram * 0.75) {
            reasons.push(`⚠️ ${ramVal}GB RAM (Adequate for ${profile.name})`);
        } else {
            reasons.push(`❌ ${ramVal}GB RAM (Below ${profile.name} recommendation)`);
        }
        
        // Storage Reason
        const storageSpec = product.specs.find(s => s.includes('SSD') || s.includes('HDD'));
        let storageVal = this.extractNumericSpec([storageSpec || ''], 'GB') || 0;
        if (storageSpec && storageSpec.includes('TB')) storageVal *= 1000;
        
        if (storageVal >= profile.thresholds.storage) {
            const typeBonus = storageSpec.toLowerCase().includes('nvme') ? ' (NVMe SSD)' : 
                             storageSpec.toLowerCase().includes('ssd') ? ' (SSD)' : '';
            reasons.push(`✅ ${storageVal >= 1000 ? (storageVal/1000) + 'TB' : storageVal + 'GB'} Storage${typeBonus}`);
        }
        
        // CPU Reason
        const cpuScore = this.calculateCPUScore(product.processor);
        if (cpuScore >= 80) reasons.push(`🚀 High-Performance CPU`);
        else if (cpuScore >= 60) reasons.push(`⚡ Solid Processor`);
        
        // GPU Reason
        if (product.hasGPU) {
            const gpuScore = this.calculateGPUScore(product, profile);
            if (gpuScore >= 80) reasons.push(`🎮 Premium Graphics`);
            else if (gpuScore >= 60) reasons.push(`🎨 Dedicated GPU`);
        }
        
        // Battery Reason
        if (product.batteryLife) {
            const match = product.batteryLife.match(/(\d+)/);
            if (match) {
                const hours = parseInt(match[0]);
                if (hours >= 8) reasons.push(`🔋 All-Day Battery (${hours}hrs)`);
                else if (hours >= 6) reasons.push(`🔋 Good Battery Life`);
            }
        }
        
        // Value Reason
        const midBudget = (criteria.minBudget + criteria.maxBudget) / 2;
        const valueRatio = product.price / midBudget;
        if (valueRatio <= 0.7) reasons.push(`💰 Exceptional Value`);
        else if (valueRatio <= 0.85) reasons.push(`💰 Good Value`);
        
        // Condition Reason
        if (criteria.conditionPref !== 'any' && product.condition === criteria.conditionPref) {
            reasons.push(`🆕 ${product.condition.charAt(0).toUpperCase() + product.condition.slice(1)} Condition`);
        }
        
        // Display Reason (for design/gaming)
        if (criteria.primaryUse === 'design' && product.display) {
            if (product.display.includes('4K') || product.display.includes('Retina')) {
                reasons.push(`🖥️ 4K Display for Design`);
            } else if (product.display.includes('QHD') || product.display.includes('1440p')) {
                reasons.push(`🖥️ High-Res Display`);
            }
        }
        
        // Brand Reliability
        const brandBonus = this.getBrandReliability(product.brand);
        if (brandBonus >= 8) reasons.push(`🏆 Premium Brand Reliability`);
        
        return reasons.slice(0, 4); // Limit to top 4 reasons
    }
    
    extractNumericSpec(specArray, keyword) {
        const spec = specArray.find(s => s.includes(keyword));
        if (!spec) return 0;
        const match = spec.match(/(\d+)/);
        return match ? parseInt(match[0]) : 0;
    }
    
    showLoadingState() {
        const course = this.courseSelect.value;
        const profile = this.courseProfiles[course];
        
        this.analysisLoading.classList.add('active');
        this.analysisResults.classList.remove('active');
        
        const typingText = this.analysisLoading.querySelector('.analysis-loading-text');
        typingText.textContent = '';
        
        const sentences = [
            `Checking ${profile?.name || 'course'} requirements...`,
            'Calculating price-to-performance ratio...',
            'Finalizing top 3 picks...'
        ];
        
        let currentSentenceIndex = 0;
        
        const showNextSentence = () => {
            if (currentSentenceIndex >= sentences.length) return;
            
            typingText.textContent = sentences[currentSentenceIndex];
            
            setTimeout(() => {
                currentSentenceIndex++;
                if (currentSentenceIndex < sentences.length) {
                    showNextSentence();
                }
            }, 2000);
        };
        
        showNextSentence();
    }
    
    hideLoadingState() {
        this.analysisLoading.classList.remove('active');
        
        const typingText = this.analysisLoading.querySelector('.analysis-loading-text');
        if (typingText) typingText.textContent = '';
    }
    
    showResults(recommendations) {
        this.resultsSection.style.display = 'block';
        this.analysisResults.classList.add('show');
        this.renderResultCards(recommendations);
    }
    
    renderResultCards(recommendations) {
        this.resultsContainer.innerHTML = '';
        recommendations.forEach((product, index) => {
            const card = this.createResultCard(product, index);
            this.resultsContainer.appendChild(card);
        });
    }

    createResultCard(product, index) {
        const resultCard = document.createElement('div');
        let cardClass = 'result-card glass-card';
        let badgeText = 'RECOMMENDED';
        let buttonClass = 'btn-primary';
        let badgeIcon = 'star';

        if (index === 0) {
            cardClass += ' glass-card-top pulsing-card';
            badgeText = 'TOP PICK';
            badgeIcon = 'trophy';
        } else {
            buttonClass = 'btn-outline';
        }
        
        resultCard.className = cardClass;
        resultCard.setAttribute('role', 'listitem');
        resultCard.setAttribute('data-product-id', product.id);
        resultCard.setAttribute('data-index', index);

        const productImage = product.image || `https://picsum.photos/seed/${product.id}/400/300.jpg`;
        
        resultCard.innerHTML = `
            <div class="glass-badge">
                <i class="fas fa-${badgeIcon}"></i> ${badgeText}
            </div>
            <div class="result-image-container">
                <img src="${productImage}" alt="${product.name}" class="result-img" loading="lazy">
            </div>
            <div class="result-info">
                <div class="result-tagline">${product.tagline}</div>
                <h3 class="result-title">${product.name}</h3>
                <div class="match-reasons">
                    ${product.matchReasons.slice(0, 3).map(reason => 
                        `<div class="match-reason">${reason}</div>`
                    ).join('')}
                </div>
                <div class="result-specs">
                    ${product.specs.slice(0, 4).map(spec => `<span class="spec-tag">${spec}</span>`).join('')}
                </div>
                <div class="result-price">
                    <span class="price">UGX ${product.price.toLocaleString()}</span>
                    <button class="btn ${buttonClass} add-to-cart-result-btn">Add to Cart 🛒</button>
                </div>
            </div>
        `;
        
        resultCard.addEventListener('click', (e) => {
            if (!e.target.closest('.add-to-cart-result-btn') && !e.target.closest('.wishlist-heart')) {
                openQuickView(product.id);
            }
        });

        const addToCartBtn = resultCard.querySelector('.add-to-cart-result-btn');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                window.callReact('reactCart', 'addItem', product);
            });
        }
        
        const heartButton = document.createElement('button');
        heartButton.className = 'wishlist-heart';
        heartButton.setAttribute('aria-label', 'Add to Wishlist');
        heartButton.innerHTML = '<i class="far fa-heart"></i>';
        
        heartButton.onclick = (e) => {
            e.stopPropagation();
            const productObj = products.find(p => p.id === product.id);
            if (window.reactWishlist && productObj) {
                window.reactWishlist.toggle(productObj);
            }
        };
        
        resultCard.appendChild(heartButton);
        return resultCard;
    }
    
    resetFinder() {
        this.form.reset();
        this.budgetDisplay.style.display = 'none';
        this.resultsSection.style.display = 'none';
        this.analysisResults.classList.remove('active');
        
        document.getElementById('finder').scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize laptop finder when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.laptopFinder = new LaptopFinder();
});


// Add this JavaScript to your existing script section 
// Currency Converter - Improved version
class CurrencyConverter {
    constructor() {
        this.currentCurrency = 'UGX';
        this.exchangeRates = {
            UGX:1,
            USD: 0.00027,
            GBP: 0.00022,
            EUR: 0.00025,
            KSH: 0.33
        };
        this.currencySymbols = {
            UGX: 'UGX',
            USD: '$',
            GBP: '£',
            EUR: '€',
            KSH: 'KSH'
        };
        
        this.init();
    }
    
    init() {
        this.setupCurrencySelector();
        this.loadSavedCurrency();
        this.storeBasePrices(); // Store base prices on initialization
    }
    
    setupCurrencySelector() {
        const currentCurrency = document.querySelector('.current-currency');
        const currencyDropdown = document.getElementById('currencyDropdown');
        const currencyOptions = document.querySelectorAll('.currency-option');
        const currencyArrow = document.querySelector('.currency-arrow');
        
        // Toggle dropdown
        currentCurrency.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event bubbling
            currencyDropdown.classList.toggle('active');
            currencyArrow.style.transform = currencyDropdown.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0)';
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.currency-selector')) {
                currencyDropdown.classList.remove('active');
                currencyArrow.style.transform = 'rotate(0)';
            }
        });
        
        // Handle currency selection
        currencyOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent event bubbling
                const selectedCurrency = option.getAttribute('data-currency');
                this.changeCurrency(selectedCurrency);
                
                // Update active state
                currencyOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                
                // Close dropdown
                currencyDropdown.classList.remove('active');
                currencyArrow.style.transform = 'rotate(0)';
            });
        });
        
        // Set initial active state
        const defaultOption = document.querySelector(`.currency-option[data-currency="${this.currentCurrency}"]`);
        if (defaultOption) {
            defaultOption.classList.add('active');
        }
    }

    changeCurrency(newCurrency) {
        if (newCurrency === this.currentCurrency) return;
        
        this.currentCurrency = newCurrency;
        
        // Update current currency display
        document.getElementById('currentCurrencyLabel').textContent = newCurrency;
        
        // Update all prices on the page
        this.updateAllPrices();
        
        // Show notification
        this.showCurrencyChangedNotification(newCurrency);
        
        // Save to localStorage
        localStorage.setItem('selectedCurrency', newCurrency);
    }
    
    updateAllPrices() {
        // Update product prices
        const priceElements = document.querySelectorAll('.price');
        priceElements.forEach(element => {
            const basePrice = parseInt(element.getAttribute('data-base-price') || element.textContent.replace(/[^0-9]/g, ''));
            if (!isNaN(basePrice)) {
                const convertedPrice = this.convertPrice(basePrice);
                element.textContent = `${this.currencySymbols[this.currentCurrency]} ${convertedPrice.toLocaleString()}`;
                
                // Store base price if not already stored
                if (!element.getAttribute('data-base-price')) {
                    element.setAttribute('data-base-price', basePrice);
                }
            }
        });
        
        // Update current price in modal
        const modalCurrentPrice = document.getElementById('modalCurrentPrice');
        if (modalCurrentPrice) {
            const basePrice = parseInt(modalCurrentPrice.getAttribute('data-base-price') || modalCurrentPrice.textContent.replace(/[^0-9]/g, ''));
            if (!isNaN(basePrice)) {
                const convertedPrice = this.convertPrice(basePrice);
                modalCurrentPrice.textContent = `${this.currencySymbols[this.currentCurrency]} ${convertedPrice.toLocaleString()}`;
                
                // Store base price if not already stored
                if (!modalCurrentPrice.getAttribute('data-base-price')) {
                    modalCurrentPrice.setAttribute('data-base-price', basePrice);
                }
            }
        }
        
        // Update offer prices
        const offerCurrentPrices = document.querySelectorAll('.offer-current-price');
        offerCurrentPrices.forEach(element => {
            const basePrice = parseInt(element.getAttribute('data-base-price') || element.textContent.replace(/[^0-9]/g, ''));
            if (!isNaN(basePrice)) {
                const convertedPrice = this.convertPrice(basePrice);
                element.textContent = `${this.currencySymbols[this.currentCurrency]} ${convertedPrice.toLocaleString()}`;
                
                // Store base price if not already stored
                if (!element.getAttribute('data-base-price')) {
                    element.setAttribute('data-base-price', basePrice);
                }
            }
        });
        
        // Update offer original prices
        const offerOriginalPrices = document.querySelectorAll('.offer-original-price');
        offerOriginalPrices.forEach(element => {
            const basePrice = parseInt(element.getAttribute('data-base-price') || element.textContent.replace(/[^0-9]/g, ''));
            if (!isNaN(basePrice)) {
                const convertedPrice = this.convertPrice(basePrice);
                element.textContent = `${this.currencySymbols[this.currentCurrency]} ${convertedPrice.toLocaleString()}`;
                
                // Store base price if not already stored
                if (!element.getAttribute('data-base-price')) {
                    element.setAttribute('data-base-price', basePrice);
                }
            }
        });
    }
    
    convertPrice(price) {
        // All base prices are in UGX
        const rate = this.exchangeRates[this.currentCurrency];
        return Math.round(price * rate);
    }
    
    // Find this function in CurrencyConverter class
showCurrencyChangedNotification(currency) {
    const notification = document.getElementById('currencyNotification');
    const currencyChangedText = document.getElementById('currencyChangedText');
    
    // Set currency text
    currencyChangedText.textContent = currency;
    
    // Show notification
    notification.classList.add('show');
    
    // Hide notification after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}
    
    loadSavedCurrency() {
        const savedCurrency = localStorage.getItem('selectedCurrency');
        if (savedCurrency && this.exchangeRates[savedCurrency]) {
            this.changeCurrency(savedCurrency);
        }
    }
    
    storeBasePrices() {
        // Store base prices for all price elements
        const priceElements = document.querySelectorAll('.price');
        priceElements.forEach(element => {
            const priceText = element.textContent;
            const priceValue = parseInt(priceText.replace(/[^0-9]/g, ''));
            if (!isNaN(priceValue) && !element.getAttribute('data-base-price')) {
                element.setAttribute('data-base-price', priceValue);
            }
        });
        
        // Store base prices for modal prices
        const modalCurrentPrice = document.getElementById('modalCurrentPrice');
        if (modalCurrentPrice && !modalCurrentPrice.getAttribute('data-base-price')) {
            const priceText = modalCurrentPrice.textContent;
            const priceValue = parseInt(priceText.replace(/[^0-9]/g, ''));
            if (!isNaN(priceValue)) {
                modalCurrentPrice.setAttribute('data-base-price', priceValue);
            }
        }
        
        // Store base prices for offer prices
        const offerCurrentPrices = document.querySelectorAll('.offer-current-price');
        offerCurrentPrices.forEach(element => {
            const priceText = element.textContent;
            const priceValue = parseInt(priceText.replace(/[^0-9]/g, ''));
            if (!isNaN(priceValue) && !element.getAttribute('data-base-price')) {
                element.setAttribute('data-base-price', priceValue);
            }
        });
        
        const offerOriginalPrices = document.querySelectorAll('.offer-original-price');
        offerOriginalPrices.forEach(element => {
            const priceText = element.textContent;
            const priceValue = parseInt(priceText.replace(/[^0-9]/g, ''));
            if (!isNaN(priceValue) && !element.getAttribute('data-base-price')) {
                element.setAttribute('data-base-price', priceValue);
            }
        });
    }
}

// Initialize currency converter when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.currencyConverter = new CurrencyConverter();
});

// Store base prices when products are rendered
function storeBasePrices() {
    // This function is now called from CurrencyConverter constructor
    if (window.currencyConverter) {
        window.currencyConverter.storeBasePrices();
    }
}



// ============================================
// RECENTLY VIEWED FEATURE
// ============================================

const MAX_RECENT_ITEMS = 20;

function addToRecentlyViewed(productId) {
    // Get existing history with timestamps
    let viewedData = JSON.parse(localStorage.getItem('nextLaptops_recent_v2')) || [];
    
    // Remove this product if it's already in the list (so it moves to top)
    viewedData = viewedData.filter(item => item.id !== productId);
    
    // Add new item to the beginning with timestamp
    viewedData.unshift({ id: productId, timestamp: Date.now() });
    
    // Keep only the top MAX_RECENT_ITEMS
    viewedData = viewedData.slice(0, MAX_RECENT_ITEMS);
    
    // Save back to browser storage
    localStorage.setItem('nextLaptops_recent_v2', JSON.stringify(viewedData));
    
    // Trigger a UI update
    renderRecentlyViewed();
}

function renderRecentlyViewed() {
    const container = document.getElementById('recentlyViewedContainer');
    if (!container) return;
    
    const viewedData = JSON.parse(localStorage.getItem('nextLaptops_recent_v2')) || [];
    
    // Migrate old format if exists
    const oldViewedIds = JSON.parse(localStorage.getItem('nextLaptops_recent')) || [];
    if (oldViewedIds.length > 0 && viewedData.length === 0) {
        const migratedData = oldViewedIds.map(id => ({ id, timestamp: Date.now() }));
        localStorage.setItem('nextLaptops_recent_v2', JSON.stringify(migratedData));
        localStorage.removeItem('nextLaptops_recent');
        viewedData.push(...migratedData);
    }
    
    if (viewedData.length === 0) {
        container.innerHTML = '';
        return;
    }
    
    // Limit to 8 most recent items
    const recentItems = viewedData.slice(0, 8);
    
    container.innerHTML = `
        <div class="recently-viewed-header">
            <h3><i class="fas fa-history"></i> Recently Viewed</h3>
            <button class="clear-recent-btn" onclick="clearRecentlyViewed()" title="Clear history">
                <i class="fas fa-trash-alt"></i> Clear
            </button>
        </div>
        <div class="recent-track-wrapper">
            <button class="recent-nav recent-prev" onclick="scrollRecentTrack(-1)" aria-label="Scroll left">
                <i class="fas fa-chevron-left"></i>
            </button>
            <div class="recent-track"></div>
            <button class="recent-nav recent-next" onclick="scrollRecentTrack(1)" aria-label="Scroll right">
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    `;
    
    const track = container.querySelector('.recent-track');
    
    recentItems.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (product) {
            const timeAgo = getTimeAgo(item.timestamp);
            const card = document.createElement('div');
            card.className = 'recent-card';
            card.innerHTML = `
                <div class="recent-card-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <div class="recent-card-overlay">
                        <button class="quick-view-btn" onclick="event.stopPropagation(); openQuickView(${product.id})">
                            <i class="fas fa-eye"></i> Quick View
                        </button>
                    </div>
                </div>
                <div class="recent-card-info">
                    <h4>${product.name}</h4>
                    <p class="recent-price">UGX ${product.price.toLocaleString()}</p>
                    <span class="recent-time">${timeAgo}</span>
                </div>
                <button class="remove-recent" onclick="event.stopPropagation(); removeFromRecent(${product.id})" title="Remove">
                    <i class="fas fa-times"></i>
                </button>
            `;
            card.onclick = () => openQuickView(product.id);
            track.appendChild(card);
        }
    });
    
    updateRecentNavButtons();
}

function getTimeAgo(timestamp) {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    if (seconds < 60) return 'Just now';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days}d ago`;
    return new Date(timestamp).toLocaleDateString();
}

function clearRecentlyViewed() {
    if (confirm('Clear all recently viewed items?')) {
        localStorage.removeItem('nextLaptops_recent_v2');
        localStorage.removeItem('nextLaptops_recent');
        renderRecentlyViewed();
    }
}

function removeFromRecent(productId) {
    let viewedData = JSON.parse(localStorage.getItem('nextLaptops_recent_v2')) || [];
    viewedData = viewedData.filter(item => item.id !== productId);
    localStorage.setItem('nextLaptops_recent_v2', JSON.stringify(viewedData));
    renderRecentlyViewed();
}

function scrollRecentTrack(direction) {
    const track = document.querySelector('.recent-track');
    if (!track) return;
    const cardWidth = track.querySelector('.recent-card')?.offsetWidth || 200;
    const scrollAmount = (cardWidth + 16) * 2; // Scroll 2 cards at a time
    track.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    setTimeout(updateRecentNavButtons, 300);
}

function updateRecentNavButtons() {
    const track = document.querySelector('.recent-track');
    const prevBtn = document.querySelector('.recent-prev');
    const nextBtn = document.querySelector('.recent-next');
    if (!track || !prevBtn || !nextBtn) return;
    
    prevBtn.style.opacity = track.scrollLeft <= 0 ? '0.3' : '1';
    prevBtn.style.pointerEvents = track.scrollLeft <= 0 ? 'none' : 'auto';
    
    const maxScroll = track.scrollWidth - track.clientWidth;
    nextBtn.style.opacity = track.scrollLeft >= maxScroll - 5 ? '0.3' : '1';
    nextBtn.style.pointerEvents = track.scrollLeft >= maxScroll - 5 ? 'none' : 'auto';
}

// Update the trackRecentlyViewed function to use new format
function trackRecentlyViewedV2(productId) {
    let viewedData = JSON.parse(localStorage.getItem('nextLaptops_recent_v2')) || [];
    
    // Remove if already exists
    viewedData = viewedData.filter(item => item.id !== productId);
    
    // Add to beginning with timestamp
    viewedData.unshift({ id: productId, timestamp: Date.now() });
    
    // Keep only last 20 items
    viewedData = viewedData.slice(0, 20);
    
    localStorage.setItem('nextLaptops_recent_v2', JSON.stringify(viewedData));
    renderRecentlyViewed();
}

// ============================================
// SIMPLE SERVICES CAROUSEL
// ============================================
// Enhanced SimpleServicesCarousel with improved auto-swiping
class SimpleServicesCarousel {
    constructor() {
        this.track = document.getElementById('servicesTrack');
        this.pagination = document.getElementById('servicesPagination');
        this.prevBtn = document.getElementById('servicesPrev');
        this.nextBtn = document.getElementById('servicesNext');
        
        this.cards = [];
        this.currentSlide = 0;
        this.isAnimating = false;
        this.autoScrollInterval = null;
        this.isMobile = window.innerWidth <= 767;
        this.touchStartX = 0;
        this.touchEndX = 0;
        
        this.init();
    }
    
    init() {
        if (!this.track) return;
        this.cards = Array.from(this.track.querySelectorAll('.service-card'));
        if (this.cards.length === 0) return;
        
        this.setupPagination();
        this.setupEventListeners();
        this.startAutoScroll();
        this.updateUI();
        
        window.addEventListener('resize', () => this.handleResize());
    }
    
    getCardsPerView() {
        if (window.innerWidth <= 767) return 1;
        if (window.innerWidth <= 992) return 2;
        return 3;
    }
    
    getTotalSlides() {
        const cardsPerView = this.getCardsPerView();
        return Math.ceil(this.cards.length / cardsPerView);
    }
    
    setupPagination() {
        if (!this.pagination) return;
        this.pagination.innerHTML = '';
        const totalSlides = this.getTotalSlides();
        
        if (window.innerWidth <= 767) {
            this.pagination.classList.add('mobile-layout');
            for (let i = 0; i < this.cards.length; i++) {
                this.pagination.appendChild(this.createDot(i, `Card ${i + 1}`));
            }
        } else {
            this.pagination.classList.remove('mobile-layout');
            for (let i = 0; i < totalSlides; i++) {
                this.pagination.appendChild(this.createDot(i, `Slide ${i + 1}`));
            }
        }
    }
    
    createDot(index, label) {
        const dot = document.createElement('button');
        dot.className = 'services-dot';
        dot.setAttribute('data-index', index);
        dot.setAttribute('aria-label', label);
        dot.addEventListener('click', () => {
            if (!this.isAnimating) this.goToSlide(index);
        });
        return dot;
    }
    
    setupEventListeners() {
        if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prev());
        if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });
        
        // Enhanced touch/swipe for mobile
        this.setupEnhancedTouchEvents();
        
        // Pause auto-scroll on hover/touch
        if (this.track) {
            this.track.addEventListener('mouseenter', () => this.pauseAutoScroll());
            this.track.addEventListener('mouseleave', () => this.resumeAutoScroll());
            this.track.addEventListener('touchstart', () => this.pauseAutoScroll());
            this.track.addEventListener('touchend', () => {
                setTimeout(() => this.resumeAutoScroll(), 5000);
            });
        }
    }
    
    setupEnhancedTouchEvents() {
        if (!this.track) return;
        
        const threshold = 30;
        let isDragging = false;
        
        this.track.addEventListener('touchstart', (e) => {
            this.touchStartX = e.changedTouches[0].screenX;
            isDragging = false;
            this.pauseAutoScroll();
        }, { passive: true });
        
        this.track.addEventListener('touchmove', (e) => {
            const currentX = e.changedTouches[0].screenX;
            const diff = Math.abs(currentX - this.touchStartX);
            if (diff > 10) isDragging = true;
        }, { passive: true });
        
        this.track.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].screenX;
            const diffX = this.touchStartX - this.touchEndX;
            
            if (isDragging && Math.abs(diffX) > threshold) {
                if (diffX > 0) this.next();
                else this.prev();
            }
            
            setTimeout(() => this.resumeAutoScroll(), 5000);
        }, { passive: true });
    }
    
    next() {
        if (this.isAnimating) return;
        const totalSlides = this.getTotalSlides();
        
        if (this.currentSlide < totalSlides - 1) {
            this.currentSlide++;
            this.updatePosition();
        } else {
            this.currentSlide = 0;
            this.updatePosition();
        }
    }
    
    prev() {
        if (this.isAnimating) return;
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.updatePosition();
        } else {
            this.currentSlide = this.getTotalSlides() - 1;
            this.updatePosition();
        }
    }
    
    goToSlide(index) {
        if (this.isAnimating || index === this.currentSlide) return;
        this.currentSlide = index;
        this.updatePosition();
    }
    
    updatePosition() {
        if (this.isAnimating || !this.track) return;
        this.isAnimating = true;
        
        const cardsPerView = this.getCardsPerView();
        let offset;
        
        if (window.innerWidth <= 767) {
            offset = -this.currentSlide * 85;
            this.cards.forEach((card, index) => {
                card.classList.toggle('active', index === this.currentSlide);
            });
        } else {
            offset = -this.currentSlide * 100;
        }
        
        this.track.style.transform = `translateX(${offset}%)`;
        this.updateUI();
        
        setTimeout(() => { this.isAnimating = false; }, 600);
    }
    
    updateUI() {
        const dots = this.pagination.querySelectorAll('.services-dot');
        const totalSlides = this.getTotalSlides();
        
        if (window.innerWidth <= 767) {
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === this.currentSlide);
            });
        } else {
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === this.currentSlide);
            });
        }
        
        if (this.prevBtn) {
            this.prevBtn.disabled = false;
            this.prevBtn.style.opacity = '1';
        }
        if (this.nextBtn) {
            this.nextBtn.disabled = false;
            this.nextBtn.style.opacity = '1';
        }
    }
    
    startAutoScroll() {
        if (this.autoScrollInterval) clearInterval(this.autoScrollInterval);
        
        // Faster auto-swiping for better UX
        this.autoScrollInterval = setInterval(() => {
            if (!this.isAnimating && !this.isDragging) {
                this.next();
            }
        }, 6000); // 6 seconds - smooth and not too fast
    }
    
    pauseAutoScroll() {
        if (this.autoScrollInterval) {
            clearInterval(this.autoScrollInterval);
            this.autoScrollInterval = null;
        }
    }
    
    resumeAutoScroll() {
        if (!this.autoScrollInterval) this.startAutoScroll();
    }
    
    handleResize() {
        this.setupPagination();
        this.currentSlide = 0;
        this.updatePosition();
        this.updateUI();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        window.servicesCarousel = new SimpleServicesCarousel();
        
    }, 500);
});

// Notification modal for "Coming Soon" services
function showNotification(serviceName) {
    event.preventDefault();
    
    // Create modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;
    
    modal.innerHTML = `
        <div style="
            background: white;
            border-radius: var(--border-radius);
            padding: 30px;
            max-width: 400px;
            width: 90%;
            text-align: center;
            animation: slideUp 0.3s ease;
            position: relative;
        ">
            <!-- Close X button -->
            <button class="modal-close-x" style="
                position: absolute;
                top: 15px;
                right: 15px;
                background: none;
                border: none;
                color: #64748b;
                cursor: pointer;
                font-size: 1.2rem;
                width: 32px;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all 0.2s ease;
            " onmouseover="this.style.color='var(--primary-color)'; this.style.backgroundColor='#f8fafc'"
               onmouseout="this.style.color='#64748b'; this.style.backgroundColor='transparent'">
                <i class="fas fa-times"></i>
            </button>
            
            <div style="
                width: 60px; height: 60px;
                background: #fef3c7;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 20px;
            ">
                <i class="fas fa-bell" style="font-size: 24px; color: #f59e0b;"></i>
            </div>
            
            <h3 style="margin: 0 0 10px 0; color: var(--primary-color);">
                ${serviceName} Coming Soon!
            </h3>
            
             <!-- Work in progress message -->
            <p style="
                color: #64748b; 
                margin-bottom: 30px;
                line-height:1.5;
                font-size: 1rem;
            ">
                This service is currently in development.<br>
                We're working hard to bring it to you soon!
            </p>
            
            <!-- Close button -->
            <button class="modal-close-btn" style="
                background: none;
                border: none;
                color: #64748b;
                cursor: pointer;
                font-size: 0.95rem;
                padding: 12px 24px;
                border-radius: 8px;
                transition: all 0.2s ease;
                display: inline-flex;
                align-items: center;
                gap: 8px;
            " onmouseover="this.style.color='var(--primary-color)'; this.style.backgroundColor='#f8fafc'"
               onmouseout="this.style.color='#64748b'; this.style.backgroundColor='transparent'">
                <i class="fas fa-arrow-left"></i>
                I'll check back later
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close on X button click
    modal.querySelector('.modal-close-x').addEventListener('click', () => {
        modal.remove();
    });
    
    // Close on "I'll check back later" button click
    modal.querySelector('.modal-close-btn').addEventListener('click', () => {
        modal.remove();
    });
    
    // Close on outside click
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.remove();
        }
    });
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideUp {
        from { 
            opacity: 0; 
            transform: translateY(20px); 
        }
        to { 
            opacity: 1; 
            transform: translateY(0); 
        }
    }
`;
document.head.appendChild(style);


    /**
     * Dynamic Testimonials Manager
     * Fetches and displays testimonials from Google Business, Instagram, and WhatsApp
     *
     * SETUP INSTRUCTIONS:
     *
     * 1. GOOGLE BUSINESS PROFILE:
     *    - Go to Google Cloud Console (console.cloud.google.com)
     *    - Create a project and enable "Google My Business API" and "Places API"
     *    - Create API credentials (API Key)
     *    - Get your Place ID from Google Maps
     *    - Replace GOOGLE_API_KEY and GOOGLE_PLACE_ID below
     *
     * 2. INSTAGRAM:
     *    - Create a Facebook Developer account (developers.facebook.com)
     *    - Create an app and add Instagram Basic Display API
     *    - Get your Instagram Business Account ID and Access Token
     *    - Replace INSTAGRAM_ACCESS_TOKEN and INSTAGRAM_USER_ID below
     *    - Note: You'll need to manually tag/save testimonial posts or use hashtags
     *
     * 3. WHATSAPP:
     *    - WhatsApp doesn't have a public API for fetching messages
     *    - Option A: Use WhatsApp Business API (requires approval)
     *    - Option B: Manually curate testimonials in a JSON file or database
     *    - Option C: Use a backend service to collect and store WhatsApp testimonials
     *    - The code below uses a JSON endpoint for WhatsApp testimonials
     */
    
    const TestimonialsManager = (function() {
        'use strict';
        
        // Configuration - REPLACE THESE WITH YOUR ACTUAL CREDENTIALS
        const CONFIG = {
            // Google Places API
            google: {
                apiKey: 'AIzaSyBKfWzh547HwfafiFBrGnO6KZg2yYPE9lQ', // Get from Google Cloud Console
                placeId: 'ChIJ8aYiUWO7fRcR5dId3sPy6-E', // Your business Place ID
                enabled: true // Set to true when configured
            },
            // WhatsApp testimonials endpoint (your backend)
            whatsapp: {
                endpoint: 'api/testimonials/whatsapp.json', // Your backend endpoint
                enabled: true // Set to true when configured
            },
            // Cache settings
            cache: {
                duration: 3600000, // 1 hour in milliseconds
                key: 'nextlaptops_testimonials'
            },
            // Display settings
            display: {
                initialCount: 3,
                loadMoreCount: 3
            }
        };
        
        // Fallback testimonials (shown when APIs fail or aren't configured)
        const FALLBACK_TESTIMONIALS = [
            {
                id: 'fallback-1',
                text: "The Dell Inspiron I got was perfect for my engineering course. Great performance and price was unbeatable!",
                author: "John Mwaniki",
                title: "Engineering Student, Makerere",
                avatar: null,
                initials: "JM",
                rating: 5,
                source: "google",
                date: "2024-01-15",
                verified: true
            },
            {
                id: 'fallback-2',
                text: "Fast delivery to campus and excellent customer service. My MacBook Air works perfectly for my computing course.",
                author: "Sarah Nankya",
                title: "Computing Student, Kyambogo",
                avatar: null,
                initials: "SN",
                rating: 5,
                source: "google",
                date: "2024-01-10",
                verified: true
            },
            {
                id: 'fallback-3',
                text: "Great value refurbished laptop that works perfectly for my business studies. Highly recommend!",
                author: "Peter Ateka",
                title: "Business Student, MUBS",
                avatar: null,
                initials: "PA",
                rating: 4.5,
                source: "whatsapp",
                date: "2024-01-05",
                verified: true
            },
            {
                id: 'fallback-4',
                text: "Amazing service! Got my HP laptop delivered the same day. Perfect for my graphic design work.",
                author: "Grace Achieng",
                title: "Design Student, UCU",
                avatar: null,
                initials: "GA",
                rating: 5,
                source: "whatsapp",
                date: "2024-01-20",
                verified: true
            },
            {
                id: 'fallback-5',
                text: "Best laptop prices in Kampala! The ThinkPad I bought is still running strong after 2 years.",
                author: "David Okello",
                title: "IT Professional",
                avatar: null,
                initials: "DO",
                rating: 5,
                source: "google",
                date: "2023-12-28",
                verified: true
            },
            {
                id: 'fallback-6',
                text: "Excellent customer support. They helped me choose the right laptop for my medical studies.",
                author: "Faith Namugga",
                title: "Medical Student, MakCHS",
                avatar: null,
                initials: "FN",
                rating: 5,
                source: "whatsapp",
                date: "2024-01-18",
                verified: true
            }
        ];
        
        // State
        let allTestimonials = [];
        let displayedCount = 0;
        let currentFilter = 'all';
        let isLoading = false;
        
        // DOM Elements
        const elements = {
            container: null,
            loading: null,
            error: null,
            pagination: null,
            loadMoreBtn: null,
            sourceTabs: null
        };
        
        /**
         * Initialize the testimonials manager
         */
        function init() {
            // Cache DOM elements
            elements.container = document.getElementById('testimonials-container');
            elements.loading = document.getElementById('testimonials-loading');
            elements.error = document.getElementById('testimonials-error');
            elements.pagination = document.getElementById('testimonials-pagination');
            elements.loadMoreBtn = document.getElementById('load-more-testimonials');
            elements.sourceTabs = document.querySelectorAll('.source-tab');
            
            if (!elements.container) {
                console.error('Testimonials container not found');
                return;
            }
            
            // Set up event listeners
            setupEventListeners();
            
            // Load testimonials
            loadTestimonials();
        }
        
        /**
         * Set up event listeners
         */
        function setupEventListeners() {
            // Source filter tabs
            elements.sourceTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const source = tab.dataset.source;
                    filterBySource(source);
                    
                    // Update active state
                    elements.sourceTabs.forEach(t => {
                        t.classList.remove('active');
                        t.setAttribute('aria-selected', 'false');
                    });
                    tab.classList.add('active');
                    tab.setAttribute('aria-selected', 'true');
                });
            });
            
            // Load more button
            if (elements.loadMoreBtn) {
                elements.loadMoreBtn.addEventListener('click', loadMore);
            }
        }
        
        /**
         * Load testimonials from all sources
         */
        async function loadTestimonials() {
            showLoading(true);
            
            // Check cache first
            const cached = getFromCache();
            if (cached) {
                allTestimonials = cached;
                renderTestimonials();
                showLoading(false);
                return;
            }
            
            // Fetch from all enabled sources
            const promises = [];
            
            if (CONFIG.google.enabled) {
                promises.push(fetchGoogleReviews());
            }
            if (CONFIG.whatsapp.enabled) {
                promises.push(fetchWhatsAppTestimonials());
            }
            
            try {
                if (promises.length > 0) {
                    const results = await Promise.allSettled(promises);
                    allTestimonials = results
                        .filter(r => r.status === 'fulfilled')
                        .flatMap(r => r.value || []);
                    
                    // Preserve order from JSON file - do not sort
                    
                    // Cache the results
                    saveToCache(allTestimonials);
                }
                
                // Use fallback if no testimonials loaded
                if (allTestimonials.length === 0) {
                    allTestimonials = FALLBACK_TESTIMONIALS;
                }
                
                renderTestimonials();
            } catch (error) {
                console.error('Error loading testimonials:', error);
                showError(true);
                allTestimonials = FALLBACK_TESTIMONIALS;
                renderTestimonials();
            } finally {
                showLoading(false);
            }
        }
        
        /**
         * Fetch reviews from Google Places API
         */
        async function fetchGoogleReviews() {
            const { apiKey, placeId } = CONFIG.google;
            
            // Use PHP proxy to avoid CORS issues
            // The proxy file is at: api/google-reviews.php
            const response = await fetch(`api/google-reviews.php?placeId=${encodeURIComponent(placeId)}`);
            
            if (!response.ok) {
                console.error('Google Reviews API error:', response.status);
                return [];
            }
            
            const data = await response.json();
            
            if (data.error) {
                console.error('Google API error:', data.error);
                return [];
            }
            
            if (!data.result?.reviews) {
                console.warn('No reviews found in Google response');
                return [];
            }
            
            return data.result.reviews.map((review, index) => ({
                id: `google-${index}`,
                text: review.text,
                author: review.author_name,
                title: 'Google Review',
                avatar: review.profile_photo_url,
                initials: getInitials(review.author_name),
                rating: review.rating,
                source: 'google',
                date: new Date(review.time * 1000).toISOString().split('T')[0],
                verified: true
            }));
        }
        
        /**
         * Fetch testimonials from WhatsApp (via your backend)
         */
        async function fetchWhatsAppTestimonials() {
            const response = await fetch(CONFIG.whatsapp.endpoint);
            const data = await response.json();
            
            if (!Array.isArray(data)) return [];
            
            return data.map((item, index) => ({
                id: `whatsapp-${index}`,
                text: item.message,
                author: item.name,
                title: item.title || 'WhatsApp Review',
                avatar: null,
                initials: getInitials(item.name),
                rating: item.rating || 5,
                source: 'whatsapp',
                date: item.date,
                verified: true
            }));
        }
        
        /**
         * Render testimonials to the DOM
         */
        function renderTestimonials() {
            const filtered = currentFilter === 'all'
                ? allTestimonials
                : allTestimonials.filter(t => t.source === currentFilter);
            
            const toShow = filtered.slice(0, displayedCount || CONFIG.display.initialCount);
            displayedCount = toShow.length;
            
            elements.container.innerHTML = toShow.map(createTestimonialCard).join('');
            
            // Show/hide load more button
            if (elements.pagination) {
                elements.pagination.style.display = filtered.length > displayedCount ? 'flex' : 'none';
            }
            
            // Animate cards
            requestAnimationFrame(() => {
                elements.container.querySelectorAll('.social-proof-card').forEach((card, i) => {
                    card.style.animationDelay = `${i * 0.1}s`;
                    card.classList.add('fade-in');
                });
            });
        }
        
        /**
         * Create HTML for a testimonial card
         */
        function createTestimonialCard(testimonial) {
            const stars = createStarRating(testimonial.rating);
            const sourceIcon = getSourceIcon(testimonial.source);
            const avatarHtml = testimonial.avatar
                ? `<img src="${escapeHtml(testimonial.avatar)}" alt="${escapeHtml(testimonial.author)}" loading="lazy">`
                : `<span>${escapeHtml(testimonial.initials)}</span>`;
            
            return `
                <article class="social-proof-card" data-source="${testimonial.source}" itemscope itemtype="https://schema.org/Review">
                    <div class="social-proof-content">
                        <div class="testimonial-source-badge" title="Review from ${testimonial.source}">
                            ${sourceIcon}
                        </div>
                        <blockquote class="social-proof-text" itemprop="reviewBody">
                            "${escapeHtml(testimonial.text)}"
                        </blockquote>
                        <div class="social-proof-author" itemprop="author" itemscope itemtype="https://schema.org/Person">
                            <div class="social-proof-avatar" aria-hidden="true">
                                ${avatarHtml}
                            </div>
                            <div class="social-proof-info">
                                <div class="social-proof-name" itemprop="name">${escapeHtml(testimonial.author)}</div>
                                <div class="social-proof-title">${escapeHtml(testimonial.title)}</div>
                                <div class="social-proof-rating" itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
                                    <meta itemprop="ratingValue" content="${testimonial.rating}">
                                    <meta itemprop="bestRating" content="5">
                                    ${stars}
                                </div>
                                ${testimonial.verified ? '<div class="verified-badge"><i class="fas fa-check-circle"></i> Verified</div>' : ''}
                            </div>
                        </div>
                    </div>
                </article>
            `;
        }
        
        /**
         * Create star rating HTML
         */
        function createStarRating(rating) {
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 >= 0.5;
            const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
            
            let html = '';
            for (let i = 0; i < fullStars; i++) {
                html += '<i class="fas fa-star" aria-hidden="true"></i>';
            }
            if (hasHalfStar) {
                html += '<i class="fas fa-star-half-alt" aria-hidden="true"></i>';
            }
            for (let i = 0; i < emptyStars; i++) {
                html += '<i class="far fa-star" aria-hidden="true"></i>';
            }
            return html;
        }
        
        /**
         * Get source icon HTML
         */
        function getSourceIcon(source) {
            const icons = {
                google: '<i class="fab fa-google" style="color: #4285F4;"></i>',
                whatsapp: '<i class="fab fa-whatsapp" style="color: #25D366;"></i>'
            };
            return icons[source] || '<i class="fas fa-comment"></i>';
        }
        
        /**
         * Filter testimonials by source
         */
        function filterBySource(source) {
            currentFilter = source;
            displayedCount = CONFIG.display.initialCount;
            renderTestimonials();
        }
        
        /**
         * Load more testimonials
         */
        function loadMore() {
            displayedCount += CONFIG.display.loadMoreCount;
            renderTestimonials();
        }
        
        /**
         * Show/hide loading state
         */
        function showLoading(show) {
            isLoading = show;
            if (elements.loading) {
                elements.loading.style.display = show ? 'flex' : 'none';
            }
            if (elements.container) {
                elements.container.style.display = show ? 'none' : 'grid';
            }
        }
        
        /**
         * Show/hide error state
         */
        function showError(show) {
            if (elements.error) {
                elements.error.style.display = show ? 'flex' : 'none';
            }
        }
        
        /**
         * Get initials from name
         */
        function getInitials(name) {
            if (!name) return '??';
            return name.split(' ')
                .map(word => word[0])
                .join('')
                .toUpperCase()
                .substring(0, 2);
        }
        
        /**
         * Escape HTML to prevent XSS
         */
        function escapeHtml(text) {
            if (!text) return '';
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }
        
        /**
         * Cache management
         */
        function getFromCache() {
            try {
                const cached = localStorage.getItem(CONFIG.cache.key);
                if (!cached) return null;
                
                const { data, timestamp } = JSON.parse(cached);
                if (Date.now() - timestamp > CONFIG.cache.duration) {
                    localStorage.removeItem(CONFIG.cache.key);
                    return null;
                }
                return data;
            } catch {
                return null;
            }
        }
        
        function saveToCache(data) {
            try {
                localStorage.setItem(CONFIG.cache.key, JSON.stringify({
                    data,
                    timestamp: Date.now()
                }));
            } catch (e) {
                console.warn('Failed to cache testimonials:', e);
            }
        }
        
        // Initialize when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }
        
        // Public API
        return {
            refresh: loadTestimonials,
            filter: filterBySource
        };
    })();

// ==========================================
// GLOBAL SEARCH FUNCTIONALITY (TARGET STYLE)
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Desktop Elements
    const searchInputDesktop = document.getElementById('globalSearchInput');
    const searchBtnDesktop = document.getElementById('globalSearchBtn');
    const searchResultsDesktop = document.getElementById('searchResults');

    // Mobile Elements
    const searchInputMobile = document.getElementById('globalSearchInputMobile');
    const searchBtnMobile = document.getElementById('globalSearchBtnMobile');
    const searchResultsMobile = document.getElementById('searchResultsMobile');

    // Quick Links Dropdown
    const quickLinksWrapper = document.getElementById('quickLinksWrapper');
    const quickLinksToggle = document.getElementById('quickLinksToggle');

    // Safety check
    if (!searchInputDesktop && !searchInputMobile) return;

    const searchConfig = {
        minChars: 2,
        maxResults: 8,
        debounceTime: 300
    };

    let searchTimeout = null;

    // 1. Prepare Search Data
    function getSearchData() {
        let laptopResults = [];
        let accessoryResults = [];

        if (typeof products !== 'undefined' && Array.isArray(products)) {
            laptopResults = products.map(p => ({
                id: p.id,
                name: p.name,
                image: p.image || (p.images && p.images[0]) || 'https://picsum.photos/seed/placeholder/100/100.jpg',
                price: p.price,
                type: 'laptop',
                category: p.badge || 'Laptop',
                brand: p.brand || '',
                processor: p.processor || '',
                tagline: p.tagline || ''
            }));
        }

        if (typeof accessoriesData !== 'undefined' && Array.isArray(accessoriesData)) {
            accessoryResults = accessoriesData.map(a => ({
                id: a.id,
                name: a.name,
                image: a.image || (a.images && a.images[0]) || 'https://picsum.photos/seed/placeholder/100/100.jpg',
                price: a.price,
                type: 'accessory',
                category: a.category || 'Accessory',
                brand: '', 
                processor: '',
                tagline: a.tagline || ''
            }));
        }

        return [...laptopResults, ...accessoryResults];
    }

    // 2. Perform Search
    function performSearch(query, resultsContainer) {
        if (!resultsContainer) return;
        
        if (!query || query.length < searchConfig.minChars) {
            resultsContainer.classList.remove('active');
            return;
        }

        const searchData = getSearchData();
        const normalizedQuery = query.toLowerCase().trim();
        
        const results = searchData.filter(item => {
            let score = 0;
            const name = (item.name || '').toLowerCase();
            const brand = (item.brand || '').toLowerCase();
            const category = (item.category || '').toLowerCase();
            const processor = (item.processor || '').toLowerCase();

            if (name === normalizedQuery) score += 100;
            else if (name.startsWith(normalizedQuery)) score += 80;
            else if (name.includes(normalizedQuery)) score += 60;

            if (brand === normalizedQuery) score += 70;
            else if (brand.includes(normalizedQuery)) score += 50;

            if (processor.includes(normalizedQuery)) score += 40;
            if (category.includes(normalizedQuery)) score += 30;

            item.searchScore = score;
            return score > 0;
        });

        results.sort((a, b) => b.searchScore - a.searchScore);
        displaySearchResults(results.slice(0, searchConfig.maxResults), query, resultsContainer);
    }

    // 3. Display Results
    function displaySearchResults(results, query, container) {
        if (!container) return;

        if (results.length === 0) {
            container.innerHTML = `
                <div class="search-no-results">
                    <i class="fas fa-search"></i>
                    <h4>No results found for "${escapeHtml(query)}"</h4>
                    <p>Try different keywords or browse our suggestions below.</p>
                    <div class="search-suggestions">
                        <span class="search-suggestion-tag" onclick="triggerSearch('Dell')">Dell</span>
                        <span class="search-suggestion-tag" onclick="triggerSearch('Mouse')">Mouse</span>
                        <span class="search-suggestion-tag" onclick="triggerSearch('Gaming')">Gaming</span>
                    </div>
                </div>
            `;
            container.classList.add('active');
            return;
        }

        const laptopsCount = results.filter(r => r.type === 'laptop').length;
        const accessoriesCount = results.filter(r => r.type === 'accessory').length;

        let html = `<div class="search-results-header">
            Found ${results.length} result${results.length !== 1 ? 's' : ''} 
            (${laptopsCount} laptop${laptopsCount !== 1 ? 's' : ''}, ${accessoriesCount} accessor${accessoriesCount !== 1 ? 'ies' : 'y'})
        </div>`;

        results.forEach(item => {
            const priceFormatted = `UGX ${item.price.toLocaleString()}`;
            const typeLabel = item.type === 'laptop' ? 'Laptop' : 'Accessory';
            
            html += `
                <div class="search-result-item" data-id="${item.id}" data-type="${item.type}">
                    <div class="search-result-image">
                        <img src="${item.image}" alt="${escapeHtml(item.name)}" onerror="this.src='https://picsum.photos/seed/fallback${item.id}/100/100.jpg'">
                    </div>
                    <div class="search-result-info">
                        <div class="search-result-name">${escapeHtml(item.name)}</div>
                        <div class="search-result-meta">
                            <span class="search-result-category ${item.type}">${typeLabel}</span>
                            ${item.brand ? `<span class="search-result-category">${escapeHtml(item.brand)}</span>` : ''}
                            <span class="search-result-price">${priceFormatted}</span>
                        </div>
                    </div>
                    <span class="search-result-type">${item.category}</span>
                </div>
            `;
        });

        container.innerHTML = html;
        container.classList.add('active');
    }

    // 4. Handle Clicks
    function handleResultClick(e, container) {
        const item = e.target.closest('.search-result-item');
        if (!item) return;

        const id = parseInt(item.dataset.id);
        const type = item.dataset.type;

        // Close results and clear inputs
        if (container) container.classList.remove('active');
        if (searchInputDesktop) searchInputDesktop.value = '';
        if (searchInputMobile) searchInputMobile.value = '';

        if (type === 'laptop') {
            if (typeof openQuickView === 'function') {
                openQuickView(id);
            }
        } else if (type === 'accessory') {
            window.location.href = `pages/accessories.html?highlight=${id}`;
        }
    }

    // 5. Setup Event Listeners for Desktop
    if (searchInputDesktop && searchResultsDesktop) {
        searchInputDesktop.addEventListener('input', function(e) {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                performSearch(e.target.value, searchResultsDesktop);
            }, searchConfig.debounceTime);
        });

        searchInputDesktop.addEventListener('focus', function() {
            if (this.value.length >= searchConfig.minChars) {
                performSearch(this.value, searchResultsDesktop);
            }
        });

        searchResultsDesktop.addEventListener('click', (e) => handleResultClick(e, searchResultsDesktop));

        searchInputDesktop.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                clearTimeout(searchTimeout);
                performSearch(this.value, searchResultsDesktop);
            }
            if (e.key === 'Escape') {
                searchResultsDesktop.classList.remove('active');
            }
        });
    }

    // 6. Setup Event Listeners for Mobile
    if (searchInputMobile && searchResultsMobile) {
        searchInputMobile.addEventListener('input', function(e) {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                performSearch(e.target.value, searchResultsMobile);
            }, searchConfig.debounceTime);
        });

        searchInputMobile.addEventListener('focus', function() {
            if (this.value.length >= searchConfig.minChars) {
                performSearch(this.value, searchResultsMobile);
            }
        });

        searchResultsMobile.addEventListener('click', (e) => handleResultClick(e, searchResultsMobile));

        searchInputMobile.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                clearTimeout(searchTimeout);
                performSearch(this.value, searchResultsMobile);
            }
            if (e.key === 'Escape') {
                searchResultsMobile.classList.remove('active');
            }
        });
    }

    // 7. Close results when clicking outside
    document.addEventListener('click', function(e) {
        if (searchResultsDesktop && !e.target.closest('.header-search-desktop') && !e.target.closest('.search-results')) {
            searchResultsDesktop.classList.remove('active');
        }
        if (searchResultsMobile && !e.target.closest('.header-search-mobile') && !e.target.closest('.search-results')) {
            searchResultsMobile.classList.remove('active');
        }
    });

    // 8. Quick Links Dropdown Logic
    if (quickLinksToggle && quickLinksWrapper) {
        quickLinksToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            quickLinksWrapper.classList.toggle('active');
        });

        document.addEventListener('click', function(e) {
            if (!e.target.closest('.quick-links-wrapper')) {
                quickLinksWrapper.classList.remove('active');
            }
        });

        quickLinksWrapper.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                quickLinksWrapper.classList.remove('active');
            });
        });
    }

    // Helper: Trigger search
    window.triggerSearch = function(term) {
        if (searchInputDesktop) {
            searchInputDesktop.value = term;
            performSearch(term, searchResultsDesktop);
        }
        if (searchInputMobile) {
            searchInputMobile.value = term;
            performSearch(term, searchResultsMobile);
        }
    };

    function escapeHtml(text) {
        if (!text) return '';
        const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
        return String(text).replace(/[&<>"']/g, function(m) { return map[m]; });
    }

});