// ==========================================
// TEMPLATE.JS
// Lightweight Script for Legal/Service Pages
// ==========================================

// js/template.js

document.addEventListener('DOMContentLoaded', function() {
    
    console.log('DOM Loaded - Initializing Template Components');

    // --- 1. DOM ELEMENTS ---
    const loader = document.getElementById('loader');
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavClose = document.getElementById('mobileNavClose');
    const overlay = document.getElementById('overlay');
    const header = document.getElementById('header');
    const notificationContent = document.getElementById('notificationContent');

    // --- 2. TOP NOTIFICATION TICKER ---
    class TopNotificationTicker {
        constructor(container, items) {
            this.container = container;
            this.items = items;
            this.currentIndex = 0;
            this.interval = null;
            this.init();
        }
        
        init() {
            if (!this.container || !this.items) return;
            this.renderCurrentFeature();
            this.startRotation();
        }
        
        renderCurrentFeature() {
            if (!this.container) return;
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
            if (this.interval) clearInterval(this.interval);
            this.interval = setInterval(() => { this.nextFeature(); }, 4000);
        }
    }

    if (notificationContent && typeof features !== 'undefined') {
        new TopNotificationTicker(notificationContent, features);
    }

    // --- 3. MOBILE MENU LOGIC ---
    if (menuToggle && mobileNav && overlay) {
        const openMenu = () => {
            mobileNav.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        const closeMenu = () => {
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        };

        menuToggle.addEventListener('click', openMenu);
        if (mobileNavClose) mobileNavClose.addEventListener('click', closeMenu);
        if (overlay) overlay.addEventListener('click', closeMenu);
        
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // --- 4. STICKY HEADER SHADOW ---
    window.addEventListener('scroll', () => {
        if (header) {
            if (window.scrollY > 50) header.classList.add('scrolled');
            else header.classList.remove('scrolled');
        }
    });

    // --- 5. FOOTER ACCORDION ---
    const footerSections = document.querySelectorAll('.footer-section');
    footerSections.forEach(section => {
        const headerDiv = section.querySelector('.footer-header');
        if (headerDiv) {
            headerDiv.addEventListener('click', (e) => {
                if (window.innerWidth <= 992) {
                    e.preventDefault();
                    section.classList.toggle('active');
                }
            });
        }
    });

    // --- 6. BACK TO HOME BUTTON ---
    if (!document.querySelector('.back-home-btn')) {
        let btnHref = 'index.html';
        if (window.location.pathname.split('/').length > 2) btnHref = '../index.html';
        
        const logoLink = document.querySelector('.logo');
        if (logoLink && logoLink.getAttribute('href').includes('../')) btnHref = '../index.html';

        const btn = document.createElement('a');
        btn.href = btnHref;
        btn.className = 'back-home-btn';
        btn.innerHTML = '<i class="fas fa-arrow-left"></i> Back to Home';
        document.body.appendChild(btn);
    }

    // --- 7. HIDE LOADER ---
    if (loader) {
        setTimeout(() => { loader.classList.add('hidden'); }, 500);
    }

    // --- 8. HIGHLIGHT PARAMETER HANDLER (Connects Search to Accessories Page) ---
    const urlParams = new URLSearchParams(window.location.search);
    const highlightId = urlParams.get('highlight');
    if (highlightId) {
        // Wait a moment for other scripts (like data.js and services.js) to load
        setTimeout(() => {
            if (typeof openAccessoryQuickView === 'function') {
                openAccessoryQuickView(parseInt(highlightId));
            }
        }, 800);
    }
});

// --- 8. HIGHLIGHT PARAMETER HANDLER (Connects Search to Accessories Page) ---
    const urlParams = new URLSearchParams(window.location.search);
    const highlightId = urlParams.get('highlight');
    
    if (highlightId) {
        // We need to wait a brief moment to ensure the page content and Swiper have initialized
        setTimeout(() => {
            // Check if the openAccessoryQuickView function exists (it's defined in this file)
            if (typeof openAccessoryQuickView === 'function') {
                openAccessoryQuickView(parseInt(highlightId));
            }
        }, 800); // 800ms delay is safe for page load
    }


// ==========================================
// ACCESSORIES QUICK VIEW MODAL (FIXED)
// ==========================================

const accessoryDetails = {
    // --- INPUT DEVICES ---
    101: {
        description: "A reliable wireless optical mouse perfect for everyday use. Features smooth tracking, ergonomic design, and long battery life. Ideal for students and office work.",
        features: ["2.4GHz Wireless", "1000 DPI Optical Sensor", "Ergonomic Grip", "12-Month Battery Life", "Universal Compatibility"]
    },
    102: {
        description: "RGB gaming mouse designed for gamers who demand precision and style. Features customizable RGB lighting, programmable buttons, and a high-precision sensor for competitive gaming.",
        features: ["7-Button Programmable", "Breathing RGB Lights", "7200 DPI Adjustable", "Ergonomic Gaming Design", "Smooth Teflon Feet"]
    },
    103: {
        description: "Mechanical keyboard with satisfying blue switches for tactile feedback. Perfect for typing enthusiasts and gamers who love the classic clicky sound and responsive feel.",
        features: ["Blue Clicky Switches", "Full N-Key Rollover", "Splash-Resistant Design", "Detachable USB Cable", "Ergonomic Wrist Rest"]
    },
    104: {
        description: "Ultra-slim wireless keyboard ideal for small desks and travel. Features quiet low-profile keys and a stable wireless connection for distraction-free typing.",
        features: ["Ultra-Slim Design", "Quiet Low-Profile Keys", "Stable 2.4G Connection", "Spill-Resistant", "On/Off Power Switch"]
    },
    105: {
        description: "USB numeric keypad for efficient data entry in spreadsheets and accounting software. Slim design with large, easy-to-press keys.",
        features: ["Plug & Play USB", "Large Key Caps", "Lightweight & Portable", "Ideal for Excel/Accounting", "Calculator Functionality"]
    },

    // --- BAGS & CASES ---
    106: {
        description: "Heavy-duty waterproof sleeve for 15.6 inch laptops. Provides ultimate protection against rain, spills, and scratches with a soft fleece lining.",
        features: ["IPX4 Waterproof", "Shock-Absorbing Foam", "Soft Fleece Lining", "External Accessory Pocket", "Smooth Zipper Closure"]
    },
    107: {
        description: "Slim and stylish neoprene sleeve for 14 inch laptops. Lightweight protection that fits easily into backpacks or carried alone.",
        features: ["Soft Neoprene Material", "Impact Resistant", "Lightweight & Slim", "Splash Proof", "Trendy Finish"]
    },
    108: {
        description: "Anti-theft student backpack with multiple smart compartments. Features hidden zippers, a USB charging port hole, and breathable padded straps for comfort.",
        features: ["Anti-Theft Hidden Zipper", "USB Charging Port", "Breathable Mesh Back", "Water-Resistant Fabric", "Multi-Compartment Storage"]
    },
    109: {
        description: "Premium genuine leather messenger bag for the modern professional. Features a timeless vintage look with ample space for a 15.6\" laptop and documents.",
        features: ["Genuine Crazy Horse Leather", "Shoulder Strap Included", "Document Dividers", "Brass Hardware", "Fits 15.6\" Laptops"]
    },
    110: {
        description: "Elegant laptop handbag designed for business meetings and daily commute. Structured shape with dedicated padded compartment for device safety.",
        features: ["Professional Structured Design", "Padded Laptop Section", "High-Quality PU Leather", "Metal Feet Protection", "Interior Zip Pockets"]
    },

    // --- STANDS & DESKS ---
    111: {
        description: "Foldable aluminum laptop stand for ergonomic computing. Elevates your screen to eye level to reduce neck strain and improve airflow for cooling.",
        features: ["Lightweight Aluminum Alloy", "Foldable & Portable", "Adjustable Height", "Anti-Slip Silicone Pads", "Heat Dissipation Design"]
    },
    112: {
        description: "Adjustable lap desk for comfortable computing from your couch or bed. Features a cushioned bottom, built-in mouse pad, and device ledge.",
        features: ["Memory Foam Cushion", "Built-in Mouse Pad", "Device Ledge/Stopper", "Carrying Handle", "Wide Surface Area"]
    },
    113: {
        description: "Vertical laptop stand for neat desk organization. Saves space and keeps your laptop upright and secure when connected to external monitors.",
        features: ["Space-Saving Vertical Design", "Adjustable Width Clamp", "Sleek Aluminum Finish", "Cable Management Notches", "Non-Slip Base"]
    },
    114: {
        description: "Sturdy monitor riser stand to elevate your screen for better ergonomics. Features a minimalist design with storage space underneath for keyboards or drives.",
        features: ["Raises Monitor 3 Inches", "Hidden Storage Drawer", "Sturdy Metal Legs", "Neck Pain Relief", "Modern Minimalist Look"]
    },

    // --- AUDIO & VIDEO ---
    115: {
        description: "Full HD 1080p webcam for crystal clear video calls. Features auto-focus, built-in noise-cancelling microphone, and plug & play setup for Zoom/Teams.",
        features: ["1080p Full HD Sensor", "Auto Focus & Light Correction", "Noise-Cancelling Mic", "Wide 90° Angle Lens", "Tripod Ready"]
    },
    116: {
        description: "True wireless earbuds with premium sound quality. Features a compact charging case, touch controls, and comfortable fit for music on the go.",
        features: ["Bluetooth 5.0 Connection", "Touch Control Panel", "24H Total Battery Life", "IPX5 Water Resistant", "Type-C Fast Charging"]
    },
    117: {
        description: "Comfortable over-ear headphones with immersive stereo sound and deep bass. Features soft memory foam ear pads for long listening sessions.",
        features: ["Hi-Fi Stereo Sound", "Soft Memory Foam Cushions", "Adjustable Headband", "Built-in Microphone", "Foldable Design"]
    },
    118: {
        description: "Portable Bluetooth speaker with powerful sound in a compact package. Features waterproof design for outdoor adventures and parties.",
        features: ["IPX7 Waterproof", "360° Surround Sound", "10-Hour Playtime", "Bluetooth 5.0", "Carabiner Clip Included"]
    },

    // --- POWER & CABLES ---
    119: {
        description: "Essential 7-in-1 USB-C hub to expand your laptop's connectivity. Features HDMI output, USB 3.0 ports, SD card reader, and power delivery.",
        features: ["4K HDMI Output", "USB 3.0 x3 Ports", "SD/TF Card Reader", "100W Power Delivery", "Plug & Play"]
    },
    120: {
        description: "Slim 10,000mAh power bank for charging devices on the go. Features fast charging technology and dual USB ports to charge two devices at once.",
        features: ["10,000mAh Capacity", "Dual USB Output", "18W Fast Charging", "LED Battery Indicator", "Slim Pocket Size"]
    },
    121: {
        description: "Universal laptop charger with 65W output suitable for most major brands. Features multiple connector tips and over-voltage protection.",
        features: ["65W High Power", "9 Interchangeable Tips", "Over-Voltage Protection", "Auto Voltage Adjust", "Compact Brick Design"]
    },
    122: {
        description: "High-speed HDMI cable 2 meters long. Supports 4K resolution, audio return channel, and gold-plated connectors for reliable signal transmission.",
        features: ["4K @ 60Hz Support", "Gold-Plated Connectors", "Nylon Braided Jacket", "Audio Return Channel", "2-Meter Length"]
    },

    // --- ACCESSORIES ---
    123: {
        description: "Extra-large gaming mouse pad for full desk coverage. Features a smooth surface for precise tracking, non-slip rubber base, and stitched edges.",
        features: ["900x400mm XL Size", "Ultra-Smooth Cloth Surface", "Non-Slip Rubber Base", "Stitched Anti-Fray Edges", "Water Resistant Coating"]
    },
    124: {
        description: "Complete laptop cleaning kit for keeping your device spotless. Includes microfiber cloth, cleaning solution, brush, and air blower.",
        features: ["Alcohol-Free Solution", "Premium Microfiber Cloth", "Soft Dusting Brush", "Air Blower Bulb", "Safe for Screens"]
    },
    125: {
        description: "Cable organizer clips to keep your desk tidy and professional. Self-adhesive design sticks to any surface for managing USB, power, and audio cables.",
        features: ["Strong 3M Adhesive", "Silicone Material", "6 Clips Per Pack", "Suitable for Cables up to 6mm", "Residue-Free Removal"]
    },

    // Default fallback
    default: {
        description: "High-quality accessory perfect for your laptop setup. Reliable, durable, and great value for money.",
        features: ["High Quality", "Durable", "Great Value", "Easy to Use"]
    }
};

// Accessory Quick View Modal Elements
const accessoryModal = document.getElementById('accessoryQuickViewModal');
const accessoryModalClose = document.getElementById('accessoryModalClose');
const accessoryCloseBtn = document.getElementById('accessoryCloseBtn');
const accessoryMainImage = document.getElementById('accessoryMainImage');
const accessoryThumb1 = document.getElementById('accessoryThumb1');
const accessoryThumb2 = document.getElementById('accessoryThumb2');
const accessoryThumb3 = document.getElementById('accessoryThumb3');
const accessoryCategory = document.getElementById('accessoryCategory');
const accessoryModalTitle = document.getElementById('accessoryModalTitle');
const accessoryModalPrice = document.getElementById('accessoryModalPrice');
const accessoryDescription = document.getElementById('accessoryDescription');
const accessoryFeaturesList = document.getElementById('accessoryFeaturesList');
const accessoryAddToCartBtn = document.getElementById('accessoryAddToCartBtn');

let currentAccessory = null;
let currentImageIndex = 0;
let accessoryImages = [];

// Open Quick View Modal
function openAccessoryQuickView(accessoryId) {
    // Safety check for data
    if (typeof accessoriesData === 'undefined') {
        console.error('accessoriesData is not defined. Make sure data.js is loaded.');
        return;
    }

    const accessory = accessoriesData.find(a => a.id === accessoryId);
    if (!accessory) {
        console.warn('Accessory not found with ID:', accessoryId);
        return;
    }
    
    currentAccessory = accessory;
    currentImageIndex = 0;
    
    // Robust Image Handling: Use dedicated array or fallback to main image
    accessoryImages = (accessory.images && accessory.images.length > 0) 
        ? accessory.images 
        : [accessory.image];
    
    // Ensure we have enough images for the 3 slots
    while (accessoryImages.length < 3) {
        accessoryImages.push(accessoryImages[0]);
    }
    
    // Set main image
    accessoryMainImage.src = accessoryImages[0];
    
    // Set thumbnails
    accessoryThumb1.src = accessoryImages[0];
    accessoryThumb2.src = accessoryImages[1];
    accessoryThumb3.src = accessoryImages[2];
    
    // Reset active state
    document.querySelectorAll('.accessory-gallery-thumb').forEach((thumb, index) => {
        thumb.classList.toggle('active', index === 0);
    });
    
    // Set details
    accessoryCategory.textContent = accessory.category || 'Accessory';
    accessoryModalTitle.textContent = accessory.name;
    accessoryModalPrice.textContent = `UGX ${accessory.price.toLocaleString()}`;
    
    // Set description and features
    const details = accessoryDetails[accessoryId] || accessoryDetails['default'];
    accessoryDescription.textContent = details.description;
    
    // Populate features
    accessoryFeaturesList.innerHTML = '';
    details.features.forEach(feature => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check-circle"></i> ${feature}`;
        accessoryFeaturesList.appendChild(li);
    });
    
    // Show modal
    accessoryModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeAccessoryQuickView() {
    accessoryModal.classList.remove('active');
    document.body.style.overflow = '';
    currentAccessory = null;
}

// Thumbnail Click Handler
document.querySelectorAll('.accessory-gallery-thumb').forEach(thumb => {
    thumb.addEventListener('click', function() {
        const index = parseInt(this.dataset.index);
        currentImageIndex = index;
        
        // Update main image
        accessoryMainImage.src = accessoryImages[index];
        
        // Update active state
        document.querySelectorAll('.accessory-gallery-thumb').forEach((t, i) => {
            t.classList.toggle('active', i === index);
        });
    });
});

// Event Listeners
if (accessoryModalClose) accessoryModalClose.addEventListener('click', closeAccessoryQuickView);
if (accessoryCloseBtn) accessoryCloseBtn.addEventListener('click', closeAccessoryQuickView);

// Close on overlay click
if (accessoryModal) {
    accessoryModal.addEventListener('click', function(e) {
        if (e.target === accessoryModal) {
            closeAccessoryQuickView();
        }
    });
}

// Close on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && accessoryModal && accessoryModal.classList.contains('active')) {
        closeAccessoryQuickView();
    }
});

// Add to Cart Handler
if (accessoryAddToCartBtn) {
    accessoryAddToCartBtn.addEventListener('click', function() {
        if (currentAccessory && window.callReact) {
            window.callReact('reactCart', 'addItem', currentAccessory);
            closeAccessoryQuickView();
        } else if (currentAccessory) {
            console.log("Add to cart (React not ready):", currentAccessory.name);
            alert(`Added ${currentAccessory.name} to cart!`);
        }
    });
}