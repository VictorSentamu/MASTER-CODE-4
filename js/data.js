// ==========================================
// DATA FILE
// ==========================================

// PlayStation Hero Section Data
const heroSlides = [
    {
        title: "Find Your Perfect Laptop",
        subtitle: "Browse our collection of quality laptops for university students in Uganda.",
        link: "#products",
        linkText: "Browse Products",
        image: "https://picsum.photos/seed/laptop-hero-1/1920x1080.jpg"
    },
    {
        title: "Explore with Quick View",
        subtitle: "Click on any laptop to see detailed images, specifications, and condition before you decide.",
        link: "#products",
        linkText: "Browse Products",
        image: "https://picsum.photos/seed/laptop-hero-2/1920x1080.jpg"
    },
    {
        title: "Student Tech Insights",
        subtitle: "Read our latest blog posts for laptop reviews, study tips and tech news for Ugandan students.",
        link: "#blog",
        linkText: "Read Our Blog",
        image: "https://picsum.photos/seed/laptop-hero-3/1920x1080.jpg"
    },
    {
        title: "Check out our Weekly Offers",
        subtitle: "Don't miss out on amazing deals and discounts on selected laptops. Limited time offers available now!",
        link: "#weekly-offers",
        linkText: "View Weekly Offers",
        image: "https://picsum.photos/seed/laptop-hero-4/1920x1080.jpg"
    },
    {
        title: "We deliver to your campus",
        subtitle: "Free delivery to university campuses across Uganda. Get your laptop right where you need it.",
        link: "#contact",
        linkText: "Contact Us",
        image: "https://picsum.photos/seed/laptop-hero-5/1920x1080.jpg"
    }
];

// Product Section Data
const products = [
    {
        id: 1,
        name: "Dell Inspiron 15",
        brand: "Dell",
        processor: "Intel Core i5-1135G7",
        display: "15.6\" Display",
        category: "new",
        condition: "new",
        price: 1800000,
        originalPrice: 2100000,
        image: "https://picsum.photos/seed/dell-inspiron/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/dell-inspiron-1/600/400.jpg", 
            "https://picsum.photos/seed/dell-inspiron-2/600/400.jpg", 
            "https://picsum.photos/seed/dell-inspiron-3/600/400.jpg"
        ], 
        specs: ["Intel Core i5-1135G7", "8GB RAM", "512GB SSD", "15.6\" Display"],
        batteryLife: "8 hours",
        hasGPU: false,
        gpu: "Intel UHD Graphics",
        badge: "Student",
        badgeClass: "",
        tagline: "Most Popular for Business Students",
        weight: 1.8,
        goodForCourses: ["business", "arts", "education", "social"]
    },
    {
        id: 2,
        name: "HP Pavilion 14",
        brand: "HP",
        processor: "Intel Core i5-1035G1",
        display: "14\" Display",
        category: "refurbished",
        condition: "refurbished",
        price: 1200000,
        originalPrice: 1800000,
        image: "https://picsum.photos/seed/hp-pavilion/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/hp-pavilion-1/600/400.jpg", 
            "https://picsum.photos/seed/hp-pavilion-2/600/400.jpg", 
            "https://picsum.photos/seed/hp-pavilion-3/600/400.jpg"
        ], 
        specs: ["Intel Core i5-1035G1", "8GB RAM", "256GB SSD", "14\" Display"],
        batteryLife: "7 hours",
        hasGPU: false,
        gpu: "Intel UHD Graphics",
        badge: "Student",
        badgeClass: "",
        tagline: "Best Under 1.5M",
        weight: 1.6,
        goodForCourses: ["business", "arts", "education", "social"]
    },
    {
        id: 3,
        name: "MacBook Air M1",
        brand: "Apple",
        processor: "Apple M1 Chip (8-core)",
        display: "13\" Display",
        category: "new",
        condition: "new",
        price: 3500000,
        originalPrice: 4000000,
        image: "https://picsum.photos/seed/macbook-air/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/macbook-air-1/600/400.jpg", 
            "https://picsum.photos/seed/macbook-air-2/600/400.jpg", 
            "https://picsum.photos/seed/macbook-air-3/600/400.jpg"
        ], 
        specs: ["Apple M1 Chip (8-core)", "8GB RAM", "256GB SSD", "13\" Display"],
        batteryLife: "18 hours",
        hasGPU: false,
        gpu: "Apple M1 GPU",
        badge: "Creator",
        badgeClass: "",
        tagline: "Top Choice for Computing Students",
        weight: 1.29,
        goodForCourses: ["computing", "business", "arts", "education"]
    },
    {
        id: 4,
        name: "Lenovo ThinkPad E14",
        brand: "Lenovo",
        processor: "Intel Core i5-10210U",
        display: "14\" Display",
        category: "new",
        condition: "new",
        price: 2000000,
        originalPrice: 2300000,
        image: "https://picsum.photos/seed/thinkpad-e14/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/thinkpad-e14-1/600/400.jpg", 
            "https://picsum.photos/seed/thinkpad-e14-2/600/400.jpg", 
            "https://picsum.photos/seed/thinkpad-e14-3/600/400.jpg"
        ], 
        specs: ["Intel Core i5-10210U", "8GB RAM", "512GB SSD", "14\" Display"],
        batteryLife: "10 hours",
        hasGPU: false,
        gpu: "Intel UHD Graphics",
        badge: "Business",
        badgeClass: "",
        tagline: "Best for Engineering Students",
        weight: 1.7,
        goodForCourses: ["business", "computing", "engineering", "sciences"]
    },
    {
        id: 5,
        name: "Acer Aspire 5",
        brand: "Acer",
        processor: "Intel Core i3-1115G4",
        display: "15.6\" Display",
        category: "used",
        condition: "used",
        price: 950000,
        originalPrice: 1200000,
        image: "https://picsum.photos/seed/acer-aspire/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/acer-aspire-1/600/400.jpg", 
            "https://picsum.photos/seed/acer-aspire-2/600/400.jpg", 
            "https://picsum.photos/seed/acer-aspire-3/600/400.jpg"
        ], 
        specs: ["Intel Core i3-1115G4", "4GB RAM", "256GB SSD", "15.6\" Display"],
        batteryLife: "8 hours",
        hasGPU: false,
        gpu: "Intel UHD Graphics",
        badge: "Student",
        badgeClass: "",
        tagline: "Best Value for Money",
        weight: 1.9,
        goodForCourses: ["arts", "education", "social", "agriculture"]
    },
    {
        id: 6,
        name: "Microsoft Surface Pro 7",
        brand: "Microsoft",
        processor: "Intel Core i5-1035G4",
        display: "12.3\" Display",
        category: "refurbished",
        condition: "refurbished",
        price: 1800000,
        originalPrice: 2500000,
        image: "https://picsum.photos/seed/surface-pro/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/surface-pro-1/600/400.jpg", 
            "https://picsum.photos/seed/surface-pro-2/600/400.jpg", 
            "https://picsum.photos/seed/surface-pro-3/600/400.jpg"
        ], 
        specs: ["Intel Core i5-1035G4", "8GB RAM", "256GB SSD", "12.3\" Display"],
        batteryLife: "10.5 hours",
        hasGPU: false,
        gpu: "Intel UHD Graphics",
        badge: "Creator",
        badgeClass: "",
        tagline: "Perfect for Medical Students",
        weight: 0.77,
        goodForCourses: ["business", "arts", "medicine", "computing"],
        hasTouchscreen: true
    },
    {
        id: 7,
        name: "ASUS VivoBook 15",
        brand: "ASUS",
        processor: "AMD Ryzen 5 3500U",
        display: "15.6\" Display",
        category: "used",
        condition: "used",
        price: 1100000,
        originalPrice: 1400000,
        image: "https://picsum.photos/seed/vivobook/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/vivobook-1/600/400.jpg", 
            "https://picsum.photos/seed/vivobook-2/600/400.jpg", 
            "https://picsum.photos/seed/vivobook-3/600/400.jpg"
        ], 
        specs: ["AMD Ryzen 5 3500U", "8GB RAM", "512GB SSD", "15.6\" Display"],
        batteryLife: "8 hours",
        hasGPU: false,
        gpu: "AMD Radeon Graphics",
        badge: "Student",
        badgeClass: "",
        tagline: "Great for Arts Students",
        weight: 1.8,
        goodForCourses: ["business", "arts", "education", "social"]
    },
    {
        id: 8,
        name: "Dell XPS 13",
        brand: "Dell",
        processor: "Intel Core i7-1165G7",
        display: "13.4\" Display",
        category: "new",
        condition: "new",
        price: 3800000,
        originalPrice: 4200000,
        image: "https://picsum.photos/seed/dell-xps/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/dell-xps-1/600/400.jpg", 
            "https://picsum.photos/seed/dell-xps-2/600/400.jpg", 
            "https://picsum.photos/seed/dell-xps-3/600/400.jpg"
        ], 
        specs: ["Intel Core i7-1165G7", "16GB RAM", "512GB SSD", "13.4\" Display"],
        batteryLife: "14 hours",
        hasGPU: false,
        gpu: "Intel Iris Xe Graphics",
        badge: "Business",
        badgeClass: "",
        tagline: "Ultra-Portable Powerhouse",
        weight: 1.2,
        goodForCourses: ["computing", "business", "engineering", "sciences"]
    },
    {
        id: 9,
        name: "HP EliteBook 840",
        brand: "HP",
        processor: "Intel Core i5-8365U",
        display: "14\" Display",
        category: "refurbished",
        condition: "refurbished",
        price: 1500000,
        originalPrice: 2200000,
        image: "https://picsum.photos/seed/elitebook/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/elitebook-1/600/400.jpg", 
            "https://picsum.photos/seed/elitebook-2/600/400.jpg", 
            "https://picsum.photos/seed/elitebook-3/600/400.jpg"
        ], 
        specs: ["Intel Core i5-8365U", "8GB RAM", "256GB SSD", "14\" Display"],
        batteryLife: "12 hours",
        hasGPU: false,
        gpu: "Intel UHD Graphics",
        badge: "Business",
        badgeClass: "",
        tagline: "Business Professional Choice",
        weight: 1.5,
        goodForCourses: ["business", "computing", "engineering", "medicine"]
    },
    {
        id: 10,
        name: "Lenovo IdeaPad 3",
        brand: "Lenovo",
        processor: "AMD Ryzen 3 3250U",
        display: "15.6\" Display",
        category: "used",
        condition: "used",
        price: 900000,
        originalPrice: 1200000,
        image: "https://picsum.photos/seed/ideapad/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/ideapad-1/600/400.jpg", 
            "https://picsum.photos/seed/ideapad-2/600/400.jpg", 
            "https://picsum.photos/seed/ideapad-3/600/400.jpg"
        ], 
        specs: ["AMD Ryzen 3 3250U", "4GB RAM", "256GB SSD", "15.6\" Display"],
        batteryLife: "7 hours",
        hasGPU: false,
        gpu: "AMD Radeon Graphics",
        badge: "Student",
        badgeClass: "",
        tagline: "Most Affordable Option",
        weight: 1.9,
        goodForCourses: ["arts", "education", "social", "agriculture"]
    },
    {
        id: 11,
        name: "MacBook Pro 13",
        brand: "Apple",
        processor: "Apple M2 Chip (8-core)",
        display: "13.3\" Display",
        category: "new",
        condition: "new",
        price: 4500000,
        originalPrice: 5000000,
        image: "https://picsum.photos/seed/macbook-pro/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/macbook-pro-1/600/400.jpg", 
            "https://picsum.photos/seed/macbook-pro-2/600/400.jpg", 
            "https://picsum.photos/seed/macbook-pro-3/600/400.jpg"
        ], 
        specs: ["Apple M2 Chip (8-core)", "8GB RAM", "512GB SSD", "13.3\" Display"],
        batteryLife: "20 hours",
        hasGPU: false,
        gpu: "Apple M2 GPU",
        badge: "Creator",
        badgeClass: "",
        tagline: "Creative Professionals' Choice",
        weight: 1.4,
        goodForCourses: ["computing", "business", "arts", "engineering"]
    },
    {
        id: 12,
        name: "Dell Latitude 7420",
        brand: "Dell",
        processor: "Intel Core i7-1185G7",
        display: "14\" Display",
        category: "new",
        condition: "new",
        price: 2800000,
        originalPrice: 3000000, 
        image: "https://picsum.photos/seed/latitude-new/400/300.jpg",
        images: [
            "https://picsum.photos/seed/latitude-new-1/600/400.jpg", 
            "https://picsum.photos/seed/latitude-new-2/600/400.jpg", 
            "https://picsum.photos/seed/latitude-new-3/600/400.jpg"
        ],              
        specs: ["Intel Core i7-1185G7", "16GB RAM", "512GB SSD", "14\" Display"],
        batteryLife: "13 hours",
        hasGPU: false,
        gpu: "Intel Iris Xe Graphics",
        badge: "Business",
        badgeClass: "",
        tagline: "Executive Performance",
        weight: 1.3,
        goodForCourses: ["business", "computing", "engineering", "medicine"]
    },
    {
        id: 13,
        name: "HP Spectre x360",
        brand: "HP",
        processor: "Intel Core i7-1165G7",
        display: "13.5\" Touch",
        category: "new",
        condition: "new",
        price: 4200000,
        originalPrice: 4800000,
        image: "https://picsum.photos/seed/spectre/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/spectre-1/600/400.jpg", 
            "https://picsum.photos/seed/spectre-2/600/400.jpg", 
            "https://picsum.photos/seed/spectre-3/600/400.jpg"
        ], 
        specs: ["Intel Core i7-1165G7", "16GB RAM", "1TB SSD", "13.5\" Touch"],
        batteryLife: "16 hours",
        hasGPU: false,
        gpu: "Intel Iris Xe Graphics",
        badge: "Creator",
        badgeClass: "",
        tagline: "Versatile 2-in-1 Design",
        weight: 1.4,
        goodForCourses: ["computing", "business", "arts", "engineering"],
        hasTouchscreen: true
    },
    {
        id: 14,
        name: "ASUS ZenBook 14",
        brand: "ASUS",
        processor: "Intel Core i5-1135G7",
        display: "14\" Display",
        category: "new",
        condition: "new",
        price: 2500000,
        originalPrice: 2900000,
        image: "https://picsum.photos/seed/zenbook/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/zenbook-1/600/400.jpg", 
            "https://picsum.photos/seed/zenbook-2/600/400.jpg", 
            "https://picsum.photos/seed/zenbook-3/600/400.jpg"
        ], 
        specs: ["Intel Core i5-1135G7", "8GB RAM", "512GB SSD", "14\" Display"],
        batteryLife: "12 hours",
        hasGPU: false,
        gpu: "Intel UHD Graphics",
        badge: "Business",
        badgeClass: "",
        tagline: "Ultra-Thin & Light",
        weight: 1.3,
        goodForCourses: ["computing", "business", "arts", "sciences"]
    },
    {
        id: 15,
        name: "Lenovo Yoga 7i",
        brand: "Lenovo",
        processor: "Intel Core i7-1165G7",
        display: "14\" Touch",
        category: "refurbished",
        condition: "refurbished",
        price: 2200000,
        originalPrice: 3000000,
        image: "https://picsum.photos/seed/yoga/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/yoga-1/600/400.jpg", 
            "https://picsum.photos/seed/yoga-2/600/400.jpg", 
            "https://picsum.photos/seed/yoga-3/600/400.jpg"
        ], 
        specs: ["Intel Core i7-1165G7", "16GB RAM", "512GB SSD", "14\" Touch"],
        batteryLife: "15 hours",
        hasGPU: false,
        gpu: "Intel Iris Xe Graphics",
        badge: "Creator",
        badgeClass: "",
        tagline: "Flexible & Powerful",
        weight: 1.4,
        goodForCourses: ["computing", "business", "arts", "engineering"],
        hasTouchscreen: true
    },
    {
        id: 16,
        name: "Dell G15 Gaming",
        brand: "Dell",
        processor: "Intel Core i7-11800H",
        display: "15.6\" 144Hz",
        category: "new",
        condition: "new",
        price: 3200000,
        originalPrice: 3700000,
        image: "https://picsum.photos/seed/dell-g15/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/dell-g15-1/600/400.jpg", 
            "https://picsum.photos/seed/dell-g15-2/600/400.jpg", 
            "https://picsum.photos/seed/dell-g15-3/600/400.jpg"
        ], 
        specs: ["Intel Core i7-11800H", "16GB RAM", "1TB SSD", "15.6\" 144Hz"],
        batteryLife: "6 hours",
        hasGPU: true,
        gpu: "NVIDIA GeForce RTX 3050",
        badge: "Gaming",
        badgeClass: "",
        tagline: "Gaming Powerhouse",
        weight: 2.5,
        goodForCourses: ["computing", "engineering", "gaming"]
    },
    {
        id: 17,
        name: "HP Omen 16",
        brand: "HP",
        processor: "AMD Ryzen 7 5800H",
        display: "16.1\" 144Hz",
        category: "new",
        condition: "new",
        price: 3800000,
        originalPrice: 4300000,
        image: "https://picsum.photos/seed/omen/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/omen-1/600/400.jpg", 
            "https://picsum.photos/seed/omen-2/600/400.jpg", 
            "https://picsum.photos/seed/omen-3/600/400.jpg"
        ], 
        specs: ["AMD Ryzen 7 5800H", "16GB RAM", "1TB SSD", "16.1\" 144Hz"],
        batteryLife: "7 hours",
        hasGPU: true,
        gpu: "NVIDIA GeForce RTX 3060",
        badge: "Gaming",
        badgeClass: "",
        tagline: "Ultimate Gaming Experience",
        weight: 2.4,
        goodForCourses: ["computing", "engineering", "gaming"]
    },
    {
        id: 18,
        name: "ASUS ROG Zephyrus",
        brand: "ASUS",
        processor: "AMD Ryzen 9 5900HS",
        display: "15.6\" 165Hz",
        category: "new",
        condition: "new",
        price: 4500000,
        originalPrice: 5200000,
        image: "https://picsum.photos/seed/zephyrus/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/zephyrus-1/600/400.jpg", 
            "https://picsum.photos/seed/zephyrus-2/600/400.jpg", 
            "https://picsum.photos/seed/zephyrus-3/600/400.jpg"
        ], 
        specs: ["AMD Ryzen 9 5900HS", "32GB RAM", "1TB SSD", "15.6\" 165Hz"],
        batteryLife: "8 hours",
        hasGPU: true,
        gpu: "NVIDIA GeForce RTX 3070",
        badge: "Gaming",
        badgeClass: "",
        tagline: "Pro-Level Gaming",
        weight: 2.1,
        goodForCourses: ["computing", "engineering", "gaming"]
    },
    {
        id: 19,
        name: "Acer Nitro 5",
        brand: "Acer",
        processor: "Intel Core i5-11400H",
        display: "15.6\" 144Hz",
        category: "used",
        condition: "used",
        price: 2500000,
        originalPrice: 3000000,
        image: "https://picsum.photos/seed/nitro/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/nitro-1/600/400.jpg", 
            "https://picsum.photos/seed/nitro-2/600/400.jpg", 
            "https://picsum.photos/seed/nitro-3/600/400.jpg"
        ], 
        specs: ["Intel Core i5-11400H", "8GB RAM", "512GB SSD", "15.6\" 144Hz"],
        batteryLife: "8 hours",
        hasGPU: true,
        gpu: "NVIDIA GeForce RTX 3050",
        badge: "Gaming",
        badgeClass: "",
        tagline: "Affordable Gaming",
        weight: 2.3,
        goodForCourses: ["computing", "engineering", "gaming"]
    },
    {
        id: 20,
        name: "MSI Katana GF66",
        brand: "MSI",
        processor: "Intel Core i7-11800H",
        display: "15.6\" 144Hz",
        category: "refurbished",
        condition: "refurbished",
        price: 3000000,
        originalPrice: 3500000,
        image: "https://picsum.photos/seed/katana/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/katana-1/600/400.jpg", 
            "https://picsum.photos/seed/katana-2/600/400.jpg", 
            "https://picsum.photos/seed/katana-3/600/400.jpg"
        ], 
        specs: ["Intel Core i7-11800H", "16GB RAM", "512GB SSD", "15.6\" 144Hz"],
        batteryLife: "7 hours",
        hasGPU: true,
        gpu: "NVIDIA GeForce RTX 3060",
        badge: "Gaming",
        badgeClass: "",
        tagline: "Slim Gaming Design",
        weight: 2.3,
        goodForCourses: ["computing", "engineering", "gaming"]
    },
    {
        id: 21,
        name: "Dell Vostro 15",
        brand: "Dell",
        processor: "Intel Core i5-1135G7",
        display: "15.6\" Display",
        category: "new",
        condition: "new",
        price: 1600000,
        originalPrice: 1900000,
        image: "https://picsum.photos/seed/vostro/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/vostro-1/600/400.jpg", 
            "https://picsum.photos/seed/vostro-2/600/400.jpg", 
            "https://picsum.photos/seed/vostro-3/600/400.jpg"
        ], 
        specs: ["Intel Core i5-1135G7", "8GB RAM", "256GB SSD", "15.6\" Display"],
        batteryLife: "8 hours",
        hasGPU: false,
        gpu: "Intel UHD Graphics",
        badge: "Business",
        badgeClass: "",
        tagline: "Reliable Business Choice",
        weight: 1.8,
        goodForCourses: ["business", "arts", "education", "social"]
    },
    {
        id: 22,
        name: "HP ProBook 450",
        brand: "HP",
        processor: "Intel Core i5-1135G7",
        display: "15.6\" Display",
        category: "refurbished",
        condition: "refurbished",
        price: 1700000,
        originalPrice: 2000000,
        image: "https://picsum.photos/seed/probook/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/probook-1/600/400.jpg", 
            "https://picsum.photos/seed/probook-2/600/400.jpg", 
            "https://picsum.photos/seed/probook-3/600/400.jpg"
        ], 
        specs: ["Intel Core i5-1135G7", "8GB RAM", "512GB SSD", "15.6\" Display"],
        batteryLife: "9 hours",
        hasGPU: false,
        gpu: "Intel UHD Graphics",
        badge: "Business",
        badgeClass: "",
        tagline: "Secure & Professional",
        weight: 1.7,
        goodForCourses: ["business", "computing", "engineering", "sciences"]
    },
    {
        id: 23,
        name: "Lenovo ThinkBook 15",
        brand: "Lenovo",
        processor: "Intel Core i5-1135G7",
        display: "15.6\" Display",
        category: "new",
        condition: "new",
        price: 1800000,
        originalPrice: 2100000,
        image: "https://picsum.photos/seed/thinkbook/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/thinkbook-1/600/400.jpg", 
            "https://picsum.photos/seed/thinkbook-2/600/400.jpg", 
            "https://picsum.photos/seed/thinkbook-3/600/400.jpg"
        ], 
        specs: ["Intel Core i5-1135G7", "8GB RAM", "512GB SSD", "15.6\" Display"],
        batteryLife: "10 hours",
        hasGPU: false,
        gpu: "Intel UHD Graphics",
        badge: "Business",
        badgeClass: "",
        tagline: "Modern Business Laptop",
        weight: 1.7,
        goodForCourses: ["business", "computing", "engineering", "sciences"]
    },
    {
        id: 24,
        name: "ASUS ExpertBook B1",
        brand: "ASUS",
        processor: "Intel Core i3-1115G4",
        display: "14\" Display",
        category: "used",
        condition: "used",
        price: 1500000,
        originalPrice: 1800000,
        image: "https://picsum.photos/seed/expertbook/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/expertbook-1/600/400.jpg", 
            "https://picsum.photos/seed/expertbook-2/600/400.jpg", 
            "https://picsum.photos/seed/expertbook-3/600/400.jpg"
        ], 
        specs: ["Intel Core i3-1115G4", "8GB RAM", "256GB SSD", "14\" Display"],
        batteryLife: "9 hours",
        hasGPU: false,
        gpu: "Intel UHD Graphics",
        badge: "Business",
        badgeClass: "",
        tagline: "Budget Business Option",
        weight: 1.5,
        goodForCourses: ["business", "arts", "education", "social"]
    },
    {
        id: 25,
        name: "Dell Inspiron 14",
        brand: "Dell",
        processor: "Intel Core i3-1115G4",
        display: "14\" Display",
        category: "new",
        condition: "new",
        price: 1400000,
        originalPrice: 1700000,
        image: "https://picsum.photos/seed/inspiron14/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/inspiron14-1/600/400.jpg", 
            "https://picsum.photos/seed/inspiron14-2/600/400.jpg", 
            "https://picsum.photos/seed/inspiron14-3/600/400.jpg"
        ], 
        specs: ["Intel Core i3-1115G4", "4GB RAM", "256GB SSD", "14\" Display"],
        batteryLife: "7 hours",
        hasGPU: false,
        gpu: "Intel UHD Graphics",
        badge: "Student",
        badgeClass: "",
        tagline: "Compact & Efficient",
        weight: 1.4,
        goodForCourses: ["arts", "education", "social", "agriculture"]
    },
    {
        id: 26,
        name: "HP Stream 14",
        brand: "HP",
        processor: "Intel Celeron N4020",
        display: "14\" Display",
        category: "used",
        condition: "used",
        price: 750000,
        originalPrice: 950000,
        image: "https://picsum.photos/seed/stream/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/stream-1/600/400.jpg", 
            "https://picsum.photos/seed/stream-2/600/400.jpg", 
            "https://picsum.photos/seed/stream-3/600/400.jpg"
        ], 
        specs: ["Intel Celeron N4020", "4GB RAM", "64GB eMMC", "14\" Display"],
        batteryLife: "10 hours",
        hasGPU: false,
        gpu: "Intel UHD Graphics",
        badge: "Student",
        badgeClass: "",
        tagline: "Most Affordable",
        weight: 1.4,
        goodForCourses: ["arts", "education", "social", "agriculture"]
    },
    {
        id: 27,
        name: "Lenovo 100e Chromebook",
        brand: "Lenovo",
        processor: "Intel Celeron N3350",
        display: "11.6\" Display",
        category: "refurbished",
        condition: "refurbished",
        price: 650000,
        originalPrice: 850000,
        image: "https://picsum.photos/seed/100e/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/100e-1/600/400.jpg", 
            "https://picsum.photos/seed/100e-2/600/400.jpg", 
            "https://picsum.photos/seed/100e-3/600/400.jpg"
        ], 
        specs: ["Intel Celeron N3350", "4GB RAM", "32GB SSD", "11.6\" Display"],
        batteryLife: "10 hours",
        hasGPU: false,
        gpu: "Intel UHD Graphics",
        badge: "Student",
        badgeClass: "",
        tagline: "Simple & Reliable",
        weight: 1.2,
        goodForCourses: ["arts", "education", "social", "agriculture"]
    },
    {
        id: 28,
        name: "Acer Chromebook 315",
        brand: "Acer",
        processor: "Intel Celeron N4020",
        display: "15.6\" Display",
        category: "used",
        condition: "used",
        price: 700000,
        originalPrice: 900000,
        image: "https://picsum.photos/seed/c315/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/c315-1/600/400.jpg", 
            "https://picsum.photos/seed/c315-2/600/400.jpg", 
            "https://picsum.photos/seed/c315-3/600/400.jpg"
        ], 
        specs: ["Intel Celeron N4020", "4GB RAM", "64GB SSD", "15.6\" Display"],
        batteryLife: "10 hours",
        hasGPU: false,
        gpu: "Intel UHD Graphics",
        badge: "Student",
        badgeClass: "",
        tagline: "Large Display Chromebook",
        weight: 1.7,
        goodForCourses: ["arts", "education", "social", "agriculture"]
    },
    {
        id: 29,
        name: "Dell Chromebook 11",
        brand: "Dell",
        processor: "Intel Celeron N3350",
        display: "11.6\" Display",
        category: "refurbished",
        condition: "refurbished",
        price: 600000,
        originalPrice: 800000,
        image: "https://picsum.photos/seed/c11/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/c11-1/600/400.jpg", 
            "https://picsum.photos/seed/c11-2/600/400.jpg", 
            "https://picsum.photos/seed/c11-3/600/400.jpg"
        ], 
        specs: ["Intel Celeron N3350", "4GB RAM", "32GB SSD", "11.6\" Display"],
        batteryLife: "10 hours",
        hasGPU: false,
        gpu: "Intel UHD Graphics",
        badge: "Student",
        badgeClass: "",
        tagline: "Ultra-Portable",
        weight: 1.2,
        goodForCourses: ["arts", "education", "social", "agriculture"]
    },
    {
        id: 30,
        name: "HP Chromebook x360",
        brand: "HP",
        processor: "Intel Celeron N4120",
        display: "11.6\" Touch",
        category: "used",
        condition: "used",
        price: 850000,
        originalPrice: 1050000,
        image: "https://picsum.photos/seed/x360/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/x360-1/600/400.jpg", 
            "https://picsum.photos/seed/x360-2/600/400.jpg", 
            "https://picsum.photos/seed/x360-3/600/400.jpg"
        ], 
        specs: ["Intel Celeron N4120", "4GB RAM", "64GB SSD", "11.6\" Touch"],
        batteryLife: "11 hours",
        hasGPU: false,
        gpu: "Intel UHD Graphics",
        badge: "Student",
        badgeClass: "",
        tagline: "Flexible 2-in-1 Design",
        weight: 1.4,
        goodForCourses: ["arts", "education", "social", "agriculture"],
        hasTouchscreen: true
    },
    // Extra Product data with added properties
    {
        id: 31,
        name: "Dell XPS 15",
        brand: "Dell",
        processor: "Intel Core i7-12700H",
        display: "15.6\" OLED Display",
        category: "new",
        condition: "new",
        price: 4200000,
        originalPrice: 4800000,
        image: "https://picsum.photos/seed/xps15/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/xps15-1/600/400.jpg", 
            "https://picsum.photos/seed/xps15-2/600/400.jpg", 
            "https://picsum.photos/seed/xps15-3/600/400.jpg"
        ], 
        specs: ["Intel Core i7-12700H", "16GB RAM", "1TB SSD", "15.6\" OLED Display"],
        batteryLife: "14 hours",
        hasGPU: true,
        gpu: "NVIDIA GeForce RTX 4050",
        badge: "Creator",
        badgeClass: "",
        tagline: "Ultimate Performance Laptop",
        weight: 1.8,
        goodForCourses: ["computing", "engineering", "business", "arts"]
    },
    {
        id: 32,
        name: "HP Spectre x360 14",
        brand: "HP",
        processor: "Intel Core i7-1165G7",
        display: "14\" Touch Display",
        category: "new",
        condition: "new",
        price: 3800000,
        originalPrice: 4300000,
        image: "https://picsum.photos/seed/spectre14/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/spectre14-1/600/400.jpg", 
            "https://picsum.photos/seed/spectre14-2/600/400.jpg", 
            "https://picsum.photos/seed/spectre14-3/600/400.jpg"
        ], 
        specs: ["Intel Core i7-1165G7", "16GB RAM", "512GB SSD", "14\" Touch Display"],
        batteryLife: "16 hours",
        hasGPU: false,
        gpu: "Intel Iris Xe Graphics",
        badge: "Creator",
        badgeClass: "",
        tagline: "Versatile 2-in-1 Design",
        weight: 1.4,
        goodForCourses: ["computing", "business", "arts", "education"],
        hasTouchscreen: true
    },
    {
        id: 33,
        name: "ASUS ROG Strix G15",
        brand: "ASUS",
        processor: "AMD Ryzen 7 6800H",
        display: "15.6\" 165Hz",
        category: "new",
        condition: "new",
        price: 3500000,
        originalPrice: 4000000,
        image: "https://picsum.photos/seed/strix/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/strix-1/600/400.jpg", 
            "https://picsum.photos/seed/strix-2/600/400.jpg", 
            "https://picsum.photos/seed/strix-3/600/400.jpg"
        ], 
        specs: ["AMD Ryzen 7 6800H", "16GB RAM", "1TB SSD", "15.6\" 165Hz"],
        batteryLife: "8 hours",
        hasGPU: true,
        gpu: "NVIDIA GeForce RTX 4060",
        badge: "Gaming",
        badgeClass: "",
        tagline: "Next-Gen Gaming Power",
        weight: 2.3,
        goodForCourses: ["computing", "engineering", "gaming"]
    },     
    {
        id: 34,
        name: "Microsoft Surface Laptop 5",
        brand: "Microsoft",
        processor: "Intel Core i5-1235U",
        display: "13.5\" Touch",
        category: "new",
        condition: "new",
        price: 2900000,
        originalPrice: 3300000,
        image: "https://picsum.photos/seed/surface5/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/surface5-1/600/400.jpg", 
            "https://picsum.photos/seed/surface5-2/600/400.jpg", 
            "https://picsum.photos/seed/surface5-3/600/400.jpg"
        ], 
        specs: ["Intel Core i5-1235U", "8GB RAM", "256GB SSD", "13.5\" Touch"],
        batteryLife: "18 hours",
        hasGPU: false,
        gpu: "Intel Iris Xe Graphics",
        badge: "Creator",
        tagline: "Premium Touch Experience",
        weight: 1.2,
        goodForCourses: ["business", "arts", "education", "medicine"],
        hasTouchscreen: true
    },
    {
        id: 35,
        name: "Dell Latitude 7420 (Refurb)",
        brand: "Dell",
        processor: "Intel Core i7-1165G7",
        display: "14\" Display",
        category: "refurbished",
        condition: "refurbished",
        price: 2200000,
        originalPrice: 2800000,
        image: "https://picsum.photos/seed/lat7420/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/lat7420-1/600/400.jpg", 
            "https://picsum.photos/seed/lat7420-2/600/400.jpg", 
            "https://picsum.photos/seed/lat7420-3/600/400.jpg"
        ], 
        specs: ["Intel Core i7-1165G7", "16GB RAM", "512GB SSD", "14\" Display"],
        batteryLife: "13 hours",
        hasGPU: false,
        gpu: "Intel Iris Xe Graphics",
        badge: "Business",
        tagline: "Enterprise Performance",
        weight: 1.3,
        goodForCourses: ["business", "computing", "engineering", "medicine"]
    },
    {
        id: 36,
        name: "Lenovo Legion 5i",
        brand: "Lenovo",
        processor: "Intel Core i5-11400H",
        display: "15.6\" 144Hz",
        category: "new",
        condition: "new",
        price: 3100000,
        originalPrice: 3600000,
        image: "https://picsum.photos/seed/legion/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/legion-1/600/400.jpg", 
            "https://picsum.photos/seed/legion-2/600/400.jpg", 
            "https://picsum.photos/seed/legion-3/600/400.jpg"
        ], 
        specs: ["Intel Core i5-11400H", "16GB RAM", "512GB SSD", "15.6\" 144Hz"],
        batteryLife: "8 hours",
        hasGPU: true,
        gpu: "NVIDIA GeForce RTX 3060",
        badge: "Gaming",
        tagline: "Affordable Gaming Power",
        weight: 2.1,
        goodForCourses: ["computing", "engineering", "gaming"]
    },
    {
        id: 37,
        name: "Apple MacBook Air M2",
        brand: "Apple",
        processor: "Apple M2 Chip (8-core CPU)",
        display: "13.6\" Display",
        category: "new",
        condition: "new",
        price: 4000000,
        originalPrice: 4500000,
        image: "https://picsum.photos/seed/airm2/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/airm2-1/600/400.jpg", 
            "https://picsum.photos/seed/airm2-2/600/400.jpg", 
            "https://picsum.photos/seed/airm2-3/600/400.jpg"
        ], 
        specs: ["Apple M2 Chip (8-core CPU)", "8GB RAM", "256GB SSD", "13.6\" Display"],
        batteryLife: "20 hours",
        hasGPU: false,
        gpu: "Apple M2 GPU",
        badge: "Creator",
        tagline: "Silent Powerhouse",
        weight: 1.24,
        goodForCourses: ["computing", "business", "arts", "education"]
    },
    {
        id: 38,
        name: "HP Elite Dragonfly",
        brand: "HP",
        processor: "Intel Core i7-1165G7",
        display: "13.3\" OLED",
        category: "new",
        condition: "new",
        price: 3700000,
        originalPrice: 4200000,
        image: "https://picsum.photos/seed/dragonfly/400/300.jpg", 
        images: [
            "https://picsum.photos/seed/dragonfly-1/600/400.jpg", 
            "https://picsum.photos/seed/dragonfly-2/600/400.jpg", 
            "https://picsum.photos/seed/dragonfly-3/600/400.jpg"
        ], 
        specs: ["Intel Core i7-1165G7", "16GB RAM", "1TB SSD", "13.3\" OLED"],
        batteryLife: "16 hours",
        hasGPU: false,
        gpu: "Intel Arc Graphics",
        badge: "Creator",
        tagline: "Stunning OLED Display",
        weight: 0.99,
        goodForCourses: ["computing", "business", "arts", "media"]
    },
    {
        id: 39,
        name: "HP Spectre x360 14 (New)",
        brand: "HP",
        processor: "Intel Core i7-1255U",
        display: "14\" Touch",
        category: "new",
        condition: "new",
        price: 2800000,
        originalPrice: 3200000,
        image: "https://picsum.photos/seed/spectre14new/400/300.jpg",
        images: [
            "https://picsum.photos/seed/spectre14new-1/600/400.jpg", 
            "https://picsum.photos/seed/spectre14new-2/600/400.jpg", 
            "https://picsum.photos/seed/spectre14new-3/600/400.jpg"
        ],
        specs: ["Intel Core i7-1255U", "16GB RAM", "1TB SSD", "14\" Touch"],
        batteryLife: "16 hours",
        hasGPU: false,
        gpu: "Intel Iris Xe Graphics",
        badge: "Creator",
        tagline: "Versatile 2-in-1 Design",
        weight: 1.4,
        goodForCourses: ["computing", "business", "arts", "engineering"],
        hasTouchscreen: true,
    },
    {
        id: 40,
        name: "ASUS ROG Zephyrus G14",
        brand: "ASUS",
        processor: "AMD Ryzen 9 6900HX",
        display: "14\" 165Hz",
        category: "new",
        condition: "new",
        price: 4500000,
        originalPrice: 5200000,
        image: "https://picsum.photos/seed/zephyrusg14/400/300.jpg",
        images: [
            "https://picsum.photos/seed/zephyrusg14-1/600/400.jpg", 
            "https://picsum.photos/seed/zephyrusg14-2/600/400.jpg", 
            "https://picsum.photos/seed/zephyrusg14-3/600/400.jpg"
        ],
        specs: ["AMD Ryzen 9 6900HX", "32GB RAM", "1TB SSD", "14\" 165Hz"],
        batteryLife: "8 hours",
        hasGPU: true,
        gpu: "NVIDIA GeForce RTX 4060",
        badge: "Gaming",
        badgeClass: "",
        tagline: "Ultra-Portable Gaming Power",
        weight: 1.4,
        goodForCourses: ["computing", "engineering", "gaming"],
        hasTouchscreen: false,
    }
   
];


// Weekly offers data
const weeklyOffers = [
    {
        id: 1,
        name: "Dell Inspiron 15",
        price: 1500000,
        originalPrice: 2100000,
        image: "https://picsum.photos/seed/offer-dell/400/300.jpg", 
        specs: ["Intel Core i5-1135G7", "8GB RAM", "512GB SSD", "15.6\" Display"],
        badge: "Student",
        badgeClass: "",
        tagline: "Most Popular for Business Students",
        countdown: "2 days left"
    },
    {
        id: 2,
        name: "HP Pavilion 14",
        price: 1200000,
        originalPrice: 1800000,
        image: "https://picsum.photos/seed/offer-hp/400/300.jpg", 
        specs: ["Intel Core i5-1035G1", "8GB RAM", "256GB SSD", "14\" Display"],
        badge: "Student",
        badgeClass: "",
        tagline: "Best Under 1.5M",
        countdown: "3 days left"
    },
    {
        id: 3,
        name: "MacBook Air M1",
        price: 3200000,
        originalPrice: 4000000,
        image: "https://picsum.photos/seed/offer-mac/400/300.jpg", 
        specs: ["Apple M1 Chip (8-core)", "8GB RAM", "256GB SSD", "13\" Display"],
        badge: "Creator",
        badgeClass: "",
        tagline: "Top Choice for Computing Students",
        countdown: "5 days left"
    },
    {
        id: 4,
        name: "Lenovo ThinkPad E14",
        price: 2000000,
        originalPrice: 2300000,
        image: "https://picsum.photos/seed/offer-lenovo/400/300.jpg", 
        specs: ["Intel Core i5-10210U", "8GB RAM", "512GB SSD", "14\" Display"],
        badge: "Business",
        badgeClass: "",
        tagline: "Best for Engineering Students",
        countdown: "1 day left"
    }
];

// Blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Best Laptops for Engineering Students in 2025",
        date: "May 15, 2025",
        excerpt: "Discover top laptops that can handle demanding engineering software while staying within a student budget.",
        image: "https://picsum.photos/seed/blog1/400/200.jpg", 
        link: "#"
    },
    {
        id: 2,
        title: "How to Extend Your Laptop's Battery Life",
        date: "May 10, 2025",
        excerpt: "Simple tips and tricks to help you get most out of your laptop's battery during long study sessions.",
        image: "https://picsum.photos/seed/blog2/400/200.jpg", 
        link: "#"
    },
    {
        id: 3,
        title: "New vs Refurbished: Which is Right for You?",
        date: "May 5, 2025",
        excerpt: "A comprehensive comparison to help you decide between new and refurbished laptops for your university needs.",
        image: "https://picsum.photos/seed/blog3/400/200.jpg", 
        link: "#"
    },
    {
        id: 4,
        title: "Essential Software for University Students",
        date: "April 28, 2025",
        excerpt: "A guide to must-have software applications that will help you succeed in your academic journey.",
        image: "https://picsum.photos/seed/blog4/400/200.jpg", 
        link: "#"
    },
    {
        id: 5,
        title: "Laptop Maintenance Tips for Longevity",
        date: "April 20, 2025",
        excerpt: "Learn how to properly maintain your laptop to ensure it lasts throughout your university years and beyond.",
        image: "https://picsum.photos/seed/blog5/400/200.jpg", 
        link: "#"
    }
];

// Features data for ticker
const features = [
    { title: "Campus delivery", description: "Free delivery to university campuses across Uganda.", subtext: "Delivered within 24 hours.", icon: "fa-truck" },
    { title: "Quality Assurance", description: "All our laptops undergo rigorous testing.", subtext: "Tested for reliability.", icon: "fa-shield-alt" },
    { title: "Student Discounts", description: "Special pricing for university students.", subtext: "Save up to 30%.", icon: "fa-hand-holding-usd" },
    { title: "After-Sales Support", description: "Comprehensive warranty and technical support.", subtext: "1-year warranty.", icon: "fa-tools" },
    { title: "Verified Suppliers", description: "We partner with trusted suppliers.", subtext: "100% authentic.", icon: "fa-check-circle" },
    { title: "1-Month Warranty", description: "Minimum 1-month warranty for peace of mind.", subtext: "Extended options available.", icon: "fa-shield-alt" },
    { title: "Course Based Recommendations", description: "Personalized laptop recommendations.", subtext: "AI-powered matching.", icon: "fa-graduation-cap" },
    { title: "Weekly Offers", description: "Exclusive weekly deals and discounts.", subtext: "Savings up to 40%.", icon: "fa-tag" }
];

// ==========================================
// ACCESSORIES DATA (Updated with Images & Tagline)
// ==========================================
const accessoriesData = [
    // INPUT DEVICES
    { 
        id: 101, 
        name: "Wireless Optical Mouse", 
        category: "Input", 
        price: 45000, 
        image: "https://picsum.photos/seed/mouse1/400/400.jpg",
        images: [
            "https://picsum.photos/seed/mouse1/600/400.jpg",
            "https://picsum.photos/seed/mouse1-side/600/400.jpg",
            "https://picsum.photos/seed/mouse1-box/600/400.jpg"
        ],
        tagline: "Smooth & Ergonomic",
        badge: "Best Seller"
    },
    { 
        id: 102, 
        name: "Gaming Mouse (RGB)", 
        category: "Input", 
        price: 75000, 
        image: "https://picsum.photos/seed/mouse2/400/400.jpg",
        images: [
            "https://picsum.photos/seed/mouse2/600/400.jpg",
            "https://picsum.photos/seed/mouse2-glow/600/400.jpg",
            "https://picsum.photos/seed/mouse2-rgb/600/400.jpg"
        ],
        tagline: "Precision Gaming",
        badge: "Gaming"
    },
    { 
        id: 103, 
        name: "Mechanical Keyboard (Blue Switch)", 
        category: "Input", 
        price: 120000, 
        image: "https://picsum.photos/seed/keyboard1/400/400.jpg",
        images: [
            "https://picsum.photos/seed/keyboard1/600/400.jpg",
            "https://picsum.photos/seed/keyboard1-keys/600/400.jpg",
            "https://picsum.photos/seed/keyboard1-back/600/400.jpg"
        ],
        tagline: "Tactile Feedback",
        badge: "Premium"
    },
    { 
        id: 104, 
        name: "Wireless Compact Keyboard", 
        category: "Input", 
        price: 65000, 
        image: "https://picsum.photos/seed/keyboard2/400/400.jpg",
        images: [
            "https://picsum.photos/seed/keyboard2/600/400.jpg",
            "https://picsum.photos/seed/keyboard2-stand/600/400.jpg"
        ],
        tagline: "Portable Typing",
        badge: "Student"
    },
    { 
        id: 105, 
        name: "Numeric Keypad (USB)", 
        category: "Input", 
        price: 35000, 
        image: "https://picsum.photos/seed/numpad/400/400.jpg",
        images: [
            "https://picsum.photos/seed/numpad/600/400.jpg"
        ],
        tagline: "Data Entry Essential",
        badge: "Office"
    },

    // BAGS & CASES
    { 
        id: 106, 
        name: "Laptop Sleeve 15.6\" (Waterproof)", 
        category: "Bags", 
        price: 35000, 
        image: "https://picsum.photos/seed/sleeve1/400/400.jpg",
        images: [
            "https://picsum.photos/seed/sleeve1/600/400.jpg",
            "https://picsum.photos/seed/sleeve1-open/600/400.jpg"
        ],
        tagline: "Ultimate Protection",
        badge: "Waterproof"
    },
    { 
        id: 107, 
        name: "Laptop Sleeve 14\"", 
        category: "Bags", 
        price: 30000, 
        image: "https://picsum.photos/seed/sleeve2/400/400.jpg",
        images: [
            "https://picsum.photos/seed/sleeve2/600/400.jpg"
        ],
        tagline: "Slim Fit",
        badge: "Popular"
    },
    { 
        id: 108, 
        name: "Student Backpack (Anti-theft)", 
        category: "Bags", 
        price: 85000, 
        image: "https://picsum.photos/seed/backpack1/400/400.jpg",
        images: [
            "https://picsum.photos/seed/backpack1/600/400.jpg",
            "https://picsum.photos/seed/backpack1-pocket/600/400.jpg"
        ],
        tagline: "Secure & Spacious",
        badge: "Student"
    },
    { 
        id: 109, 
        name: "Leather Messenger Bag", 
        category: "Bags", 
        price: 120000, 
        image: "https://picsum.photos/seed/bag1/400/400.jpg",
        images: [
            "https://picsum.photos/seed/bag1/600/400.jpg"
        ],
        tagline: "Professional Style",
        badge: "Premium"
    },
    { 
        id: 110, 
        name: "Laptop Handbag (Professional)", 
        category: "Bags", 
        price: 65000, 
        image: "https://picsum.photos/seed/handbag/400/400.jpg",
        images: [
            "https://picsum.photos/seed/handbag/600/400.jpg"
        ],
        tagline: "Office Ready",
        badge: "Business"
    },

    // STANDS & DESKS
    { 
        id: 111, 
        name: "Aluminum Laptop Stand (Foldable)", 
        category: "Stands", 
        price: 55000, 
        image: "https://picsum.photos/seed/stand1/400/400.jpg",
        images: [
            "https://picsum.photos/seed/stand1/600/400.jpg",
            "https://picsum.photos/seed/stand1-fold/600/400.jpg"
        ],
        tagline: "Ergonomic Setup",
        badge: "Ergonomic"
    },
    { 
        id: 112, 
        name: "Adjustable Lap Desk", 
        category: "Stands", 
        price: 45000, 
        image: "https://picsum.photos/seed/lapdesk/400/400.jpg",
        images: [
            "https://picsum.photos/seed/lapdesk/600/400.jpg"
        ],
        tagline: "Comfort Anywhere",
        badge: "Home Office"
    },
    { 
        id: 113, 
        name: "Vertical Laptop Stand", 
        category: "Stands", 
        price: 40000, 
        image: "https://picsum.photos/seed/stand2/400/400.jpg",
        images: [
            "https://picsum.photos/seed/stand2/600/400.jpg"
        ],
        tagline: "Desk Organizer",
        badge: "Space Saver"
    },
    { 
        id: 114, 
        name: "Monitor Riser Stand", 
        category: "Stands", 
        price: 50000, 
        image: "https://picsum.photos/seed/riser/400/400.jpg",
        images: [
            "https://picsum.photos/seed/riser/600/400.jpg"
        ],
        tagline: "Better Posture",
        badge: "Office"
    },

    // AUDIO & VIDEO
    { 
        id: 115, 
        name: "Full HD Webcam 1080p", 
        category: "Audio", 
        price: 95000, 
        image: "https://picsum.photos/seed/webcam/400/400.jpg",
        images: [
            "https://picsum.photos/seed/webcam/600/400.jpg"
        ],
        tagline: "Crystal Clear Calls",
        badge: "Remote Work"
    },
    { 
        id: 116, 
        name: "Wireless Earbuds", 
        category: "Audio", 
        price: 55000, 
        image: "https://picsum.photos/seed/earbuds/400/400.jpg",
        images: [
            "https://picsum.photos/seed/earbuds/600/400.jpg",
            "https://picsum.photos/seed/earbuds-case/600/400.jpg"
        ],
        tagline: "True Wireless",
        badge: "Audio"
    },
    { 
        id: 117, 
        name: "Over-Ear Headphones", 
        category: "Audio", 
        price: 80000, 
        image: "https://picsum.photos/seed/headphones/400/400.jpg",
        images: [
            "https://picsum.photos/seed/headphones/600/400.jpg"
        ],
        tagline: "Immersive Sound",
        badge: "Gaming"
    },
    { 
        id: 118, 
        name: "Portable Bluetooth Speaker", 
        category: "Audio", 
        price: 45000, 
        image: "https://picsum.photos/seed/speaker/400/400.jpg",
        images: [
            "https://picsum.photos/seed/speaker/600/400.jpg"
        ],
        tagline: "Music On The Go",
        badge: "Portable"
    },

    // POWER & CABLES
    { 
        id: 119, 
        name: "7-in-1 USB-C Hub", 
        category: "Power", 
        price: 85000, 
        image: "https://picsum.photos/seed/hub/400/400.jpg",
        images: [
            "https://picsum.photos/seed/hub/600/400.jpg"
        ],
        tagline: "Connect Everything",
        badge: "Essential"
    },
    { 
        id: 120, 
        name: "Power Bank 10,000mAh", 
        category: "Power", 
        price: 60000, 
        image: "https://picsum.photos/seed/powerbank1/400/400.jpg",
        images: [
            "https://picsum.photos/seed/powerbank1/600/400.jpg"
        ],
        tagline: "Stay Charged",
        badge: "Travel"
    },
    { 
        id: 121, 
        name: "Universal Laptop Charger (65W)", 
        category: "Power", 
        price: 75000, 
        image: "https://picsum.photos/seed/charger/400/400.jpg",
        images: [
            "https://picsum.photos/seed/charger/600/400.jpg"
        ],
        tagline: "Fast Charging",
        badge: "Essential"
    },
    { 
        id: 122, 
        name: "HDMI Cable 2m", 
        category: "Power", 
        price: 25000, 
        image: "https://picsum.photos/seed/hdmi/400/400.jpg",
        images: [
            "https://picsum.photos/seed/hdmi/600/400.jpg"
        ],
        tagline: "4K Ready",
        badge: "Accessories"
    },

    // ACCESSORIES
    { 
        id: 123, 
        name: "XL Mouse Pad (Gaming)", 
        category: "Other", 
        price: 25000, 
        image: "https://picsum.photos/seed/mousepad/400/400.jpg",
        images: [
            "https://picsum.photos/seed/mousepad/600/400.jpg"
        ],
        tagline: "Full Desk Coverage",
        badge: "Gaming"
    },
    { 
        id: 124, 
        name: "Laptop Cleaning Kit", 
        category: "Other", 
        price: 15000, 
        image: "https://picsum.photos/seed/cleaning/400/400.jpg",
        images: [
            "https://picsum.photos/seed/cleaning/600/400.jpg"
        ],
        tagline: "Keep It Clean",
        badge: "Care"
    },
    { 
        id: 125, 
        name: "Cable Organizer Clips", 
        category: "Other", 
        price: 10000, 
        image: "https://picsum.photos/seed/cables/400/400.jpg",
        images: [
            "https://picsum.photos/seed/cables/600/400.jpg"
        ],
        tagline: "Tidy Workspace",
        badge: "Office"
    }
];