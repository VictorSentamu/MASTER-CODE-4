// ==========================================
// DATA FILE - UPDATED HERO SLIDES
// ==========================================

// Hero Section Data
const heroSlides = [
    {
        title: "Study Smarter",
        subtitle: "Find the perfect laptop for you in minutes.",
        link: "#finder",
        linkText: "Find My Laptop",
        image: "images/hero-2.jpg"
    },
    {
        title: "Weekly Deals",
        subtitle: "Premium tech at student-friendly prices.",
        link: "#weekly-offers",
        linkText: "Check Offers",
        image: "images/weekly-offers4.png"
    },
    {
        title: "Built for Performance",
        subtitle: "Reliable laptops for every task.",
        link: "#products",
        linkText: "Browse Laptops",
        image: "images/hero-5.jpg"
    },
    {
        title: "Essential Accessories",
        subtitle: "Everything you need to complete your setup.",
        link: "#other-services",
        linkText: "Browse Accessories",
        image: "images/accessories.jpg"
    },
    {
        title: "Campus Delivery",
        subtitle: "Delivered straight to your campus or hostel.",
        link: "#contact",
        linkText: "Contact Us",
        image: "images/muk-campus.jpg"
    },
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
        title: "Best Laptops for Engineering Students in 2026",
        date: "January 23, 2026",
        excerpt: "Discover top laptops that can handle demanding engineering software while staying within a student budget.",
        image: "images/blog1.png", // Engineering/Coding setup image
        link: "#",
        content: `
            <p class="blog-intro">Engineering students in 2026 face a unique challenge: course requirements are getting heavier with 3D modeling and simulation software, yet budgets remain tight. Whether you are at Makerere, Kyambogo, or MUBS, your laptop needs to be a portable workstation capable of running AutoCAD, Revit, SolidWorks, or heavy programming environments without crashing during a final project submission.</p>

            <h3>1. The 2026 Minimum Spec Requirement</h3>
            <p>Software requirements have evolved. While 8GB of RAM was standard a few years ago, modern engineering applications demand more. For a smooth experience in 2026, do not go below these specifications:</p>
            <ul>
                <li><strong>Processor (CPU):</strong> Intel Core i7 (13th Gen or newer) or AMD Ryzen 7 (7000 series). Look for "H-series" chips (e.g., i7-13700H) which are built for high performance, not just battery life.</li>
                <li><strong>RAM:</strong> 16GB is the absolute minimum. If you are doing 3D rendering or running virtual machines for coding, aim for 32GB.</li>
                <li><strong>Graphics (GPU):</strong> A dedicated GPU is crucial. NVIDIA RTX 3050 or 4050 (or newer) handles CAD and rendering much better than integrated graphics.</li>
            </ul>

            <h3>2. Top Pick: The Mobile Workstation</h3>
            <p>For pure reliability and durability on campus, the <strong>Lenovo ThinkPad P-series</strong> or <strong>Dell Precision</strong> remain the kings of engineering laptops. These are "mobile workstations"—built specifically for CAD.</p>
            
            <!-- Provision for Workstation Image -->
            <img src="images/thinkpad-p-series.jpg" alt="Lenovo ThinkPad P Series Workstation" class="blog-inline-image">
            
            <p>While they can be expensive brand new, buying a refurbished ThinkPad P1 or P53 from a trusted vendor in Kampala offers incredible value. Their keyboards are legendary for long typing sessions, and their cooling systems are designed to run heavy simulations for hours without overheating—a common killer of standard "office" laptops in Uganda's climate.</p>

            <h3>3. Best Value: "Gaming" Laptops for Engineering</h3>
            <p>Don't let the label fool you. In the Ugandan market, "Gaming Laptops" are often the most affordable way to get high-end specs. An <strong>ASUS TUF</strong> or <strong>Lenovo LOQ</strong> with an RTX 4050 graphics card is often 30% cheaper than a business workstation with similar power.</p>
            
            <!-- Provision for Gaming Laptop Image -->
            <img src="images/asus-tuf-gaming.jpg" alt="ASUS TUF Gaming Laptop" class="blog-inline-image">
            
            <p>The trade-off? Battery life. These laptops are often heavy and might only give you 3-4 hours of lectures before needing a charge. However, if your main work is in the halls of residence or a computer lab where power is available, this is the most cost-effective route.</p>

            <blockquote class="blog-quote">
                "For engineering students, a dedicated GPU isn't just for gaming—it offloads the heavy processing of 3D geometry from the CPU, making your design software significantly faster and more stable." — AutoDesk Hardware Recommendations
            </blockquote>

            <h3>4. The Mac Decision</h3>
            <p>The <strong>MacBook Pro (M3/M4 chips)</strong> offers mind-blowing battery life and performance. However, engineering students need to be careful. While it runs programming tools perfectly, compatibility with Windows-specific software like Revit or older versions of SolidWorks can be tricky, requiring virtualization software like Parallels Desktop.</p>
            
            <!-- Provision for MacBook Pro Image -->
            <img src="images/macbook-pro-2026.jpg" alt="MacBook Pro M3 Laptop" class="blog-inline-image">

            <p>If your course is heavy on Windows-exclusive CAD, a Windows laptop is still the safer bet for 2026. But for Electrical and Computer Engineering students, the MacBook Pro is often the top choice.</p>

            <h3>Conclusion</h3>
            <p>Your laptop is your most important tool. Don't settle for a basic "Intel Core i3" or "Celeron" just to save money—it will struggle with engineering software and likely crash during exams. Prioritize a Dedicated Graphics Card and 16GB RAM. Whether you choose a rugged ThinkPad or a value-packed gaming laptop, ensure it has the cooling and power to last your four-year journey.</p>

            <div class="blog-sources">
                <strong>Sources:</strong>
                <ul>
                    <li>AutoDesk Knowledge Network, "System Requirements for AutoCAD 2026"</li>
                    <li>SolidWorks System Requirements</li>
                    <li>Tom's Hardware, "Best Laptops for Engineering Students 2026"</li>
                </ul>
            </div>
        `
    },
        {
        id: 2,
        title: "Best Laptops for University Students in Uganda (2026 Guide)",
        date: "January 15, 2026",
        excerpt: "A comprehensive guide to the best laptops for Ugandan students, balancing performance, budget, and durability.",
        image: "images/blog2.jpeg",
        link: "#",
        content: `
            <p class="blog-intro">Choosing a laptop in Uganda is different from other places. You need a machine that can handle UMEME power fluctuations, survive the dust of campus, and still be powerful enough for your coursework—all without breaking the bank. Here is our 2026 guide to the top 5 laptops for general university students in Uganda.</p>

            <h3>1. The All-Rounder: HP Pavilion 15</h3>
            <p>For the average student, the HP Pavilion 15 remains the gold standard. It balances performance, build quality, and price better than almost any other machine on the market in Kampala today.</p>
            
            <!-- Provision for Laptop Image -->
            <img src="images/blog/hp-pavilion-ug.jpg" alt="HP Pavilion 15 Laptop" class="blog-inline-image">
            
            <ul>
                <li><strong>Why it works in Uganda:</strong> Spare parts are readily available in Kampala, and most local technicians know how to service them. It handles heat relatively well compared to thinner metal laptops.</li>
                <li><strong>Best for:</strong> Business, Humanities, and Social Sciences students.</li>
                <li><strong>Expected Budget:</strong> 1,500,000 - 2,300,000 UGX.</li>
            </ul>

            <h3>2. The Battery Champion: MacBook Air (M-series)</h3>
            <p>If your budget allows, the MacBook Air with the M2 or M3 chip is unmatched for efficiency. It is the only laptop that can reliably last through a full day of lectures, library sessions, and group discussions without needing a charger.</p>
            
            <!-- Provision for Laptop Image -->
            <img src="images/blog/macbook-air-ug.jpg" alt="MacBook Air M2" class="blog-inline-image">
            
            <ul>
                <li><strong>Why it works in Uganda:</strong> During load-shedding or power outages, this laptop is a lifesaver. It also holds its resale value incredibly well, meaning you can sell it after graduation to upgrade.</li>
                <li><strong>Best for:</strong> Law, Journalism, and Arts students who prioritize portability.</li>
                <li><strong>Expected Budget:</strong> 3,500,000 - 5,000,000 UGX.</li>
            </ul>

            <h3>3. The Durability King: Lenovo ThinkPad E14/E15</h3>
            <p>Lenovo's ThinkPads are built to military-grade specifications. For a student traversing campus daily, dust, rain, and accidental bumps are real risks. The E-series offers this legendary durability at a student-friendly price point.</p>
            
            <!-- Provision for Laptop Image -->
            <img src="images/blog/thinkpad-ug.jpg" alt="Lenovo ThinkPad Laptop" class="blog-inline-image">
            
            <ul>
                <li><strong>Why it works in Uganda:</strong> The spill-resistant keyboard is a godsend during long study sessions. The rigid chassis protects internal components from the vibrations of boda-boda rides and rough transport.</li>
                <li><strong>Best for:</strong> Computer Science and Engineering students who need a reliable workhorse.</li>
                <li><strong>Expected Budget:</strong> 1,800,000 - 2,800,000 UGX.</li>
            </ul>

            <h3>4. The Reliable Alternative: Dell Inspiron 15</h3>
            <p>Often overshadowed by HP, the Dell Inspiron 15 is a solid workhorse. The 3000 series is budget-friendly, while the 5000 series offers more premium features. Dell’s chassis design often allows for easy upgrades (RAM/SSD) later on.</p>
            
            <!-- Provision for Laptop Image -->
            <img src="images/blog/dell-inspiron-ug.jpg" alt="Dell Inspiron 15 Laptop" class="blog-inline-image">
            
            <ul>
                <li><strong>Why it works in Uganda:</strong> Dell laptops generally have robust charging ports and hinges—common failure points for cheaper laptops. If you want something different from the ubiquitous HP, this is a safe bet.</li>
                <li><strong>Best for:</strong> General Science and Education students.</li>
                <li><strong>Expected Budget:</strong> 1,300,000 - 2,000,000 UGX.</li>
            </ul>

            <h3>5. The Budget Pick: ASUS VivoBook 15</h3>
            <p>For students working with a tighter budget, the ASUS VivoBook 15 is a revelation. It often offers the latest processors and a sleek design for significantly less than competitors. It is lightweight and modern, perfect for a first-year student.</p>
            
            <!-- Provision for Laptop Image -->
            <img src="images/blog/asus-vivobook-ug.jpg" alt="ASUS VivoBook 15" class="blog-inline-image">
            
            <ul>
                <li><strong>Why it works in Uganda:</strong> It maximizes specs per shilling. If you need a Core i5 or i7 but can't afford a premium build, this laptop gives you that processing power without the premium price tag.</li>
                <li><strong>Best for:</strong> First-year students and those on a strict budget.</li>
                <li><strong>Expected Budget:</strong> 1,100,000 - 1,600,000 UGX.</li>
            </ul>

            <h3>Conclusion</h3>
            <p>Ultimately, the "best" laptop depends on your course and budget. For most Ugandan students, the <strong>HP Pavilion</strong> or <strong>Dell Inspiron</strong> offer the safest middle ground. For those prioritizing longevity, the <strong>MacBook Air</strong> is the premium choice, while the <strong>ASUS VivoBook</strong> ensures no student is left behind due to budget constraints.</p>

            <div class="blog-sources">
                <strong>Sources:</strong>
                <ul>
                    <li>Lenovo Product Specifications, "ThinkPad Military Specification Testing"</li>
                    <li>Apple Battery Life Testing Data</li>
                    <li>Local Market Price Averages (Kampala 2026)</li>
                </ul>
            </div>
        `
    },
    {
        id: 3,
        title: "New vs Refurbished: Which is Right for You?",
        date: "March 5, 2026",
        excerpt: "A comprehensive comparison to help you decide between new and refurbished laptops for your university needs.",
        image: "images/blog3.png", // High quality laptop image
        link: "#",
        // YOUR CONTENT STARTS HERE
        content: `
            <p class="blog-intro">Walking into an electronics shop in Kampala, you're faced with a tough choice: a brand-new laptop fresh from the factory, or a refurbished unit that costs significantly less. For a Ugandan university student working with a tight budget, this isn't just a preference—it's a financial strategy. Understanding the difference can save you hundreds of thousands of shillings without sacrificing your academic performance.</p>

            <h3>1. Defining "Refurbished": It's Not Just "Used"</h3>
            <p>There is a massive difference between a "used" laptop sold on OLUC or Jiji and a "refurbished" laptop. According to <strong>Consumer Reports</strong>, refurbished electronics are products that have been returned to the manufacturer or vendor due to a defect, a change of mind, or lease returns. Crucially, they go through a rigorous testing process [^1^].</p>
            
            <ul>
                <li><strong>Factory Refurbished:</strong> These are restored by the original manufacturer (e.g., Dell, Apple, HP). They are tested to meet the same quality standards as new units and often come with a warranty. This is the safest bet.</li>
                <li><strong>Seller Refurbished:</strong> These are restored by third-party vendors. While cheaper, quality varies. At <em>Next Laptops UG</em>, we ensure these units pass strict hardware checks, but in the general market, you must be cautious.</li>
            </ul>

            <blockquote class="blog-quote">
                "Refurbished products often undergo more rigorous testing than new products because they have to prove they are defect-free before being resold." — Consumer Reports Investigation [^1^]
            </blockquote>

            <h3>2. The Depreciation Advantage</h3>
            <p>Laptops lose value incredibly fast—much like a new car driving off the lot. Data from <em>Computer World</em> suggests a laptop can lose 30% of its value in the first year alone [^2^]. </p>
            <p>By buying refurbished, you let the first owner take that depreciation hit. You can often get a high-end business laptop (like a ThinkPad or Latitude) that originally cost 3 million UGX for around 1.5 million UGX. This allows you to get premium build quality and performance—essential for engineering or coding—on a student budget.</p>

            <h3>3. The Warranty Gap: What You Need to Know</h3>
            <p>The biggest downside to refurbished units is the warranty. While new laptops typically come with a 12-month manufacturer warranty, refurbished units often come with a shorter period, usually 3 to 6 months [^3^].</p>
            
            <p>In Uganda, where power surges are common, this is a critical factor. However, many vendors (including us) offer extended warranties on refurbished units because we trust the quality of the hardware. Always ask:</p>
            <ul>
                <li>Does the warranty cover the battery?</li>
                <li>Is there a return window if the laptop fails immediately?</li>
                <li>Is the software genuine? (Refurbished units should have licensed Windows installed).</li>
            </ul>

            <h3>4. The Battery Reality</h3>
            <p>One component that does degrade over time is the battery. A refurbished laptop is only as good as its battery life. A study by <em>Storagereview</em> notes that lithium-ion batteries lose about 20% capacity after 500 charge cycles [^4^].</p>
            <p>When buying refurbished, ask for the "cycle count" (for MacBooks) or ensure the vendor has replaced the battery with a new unit. At Next Laptops UG, we verify battery health on all refurbished units to ensure you aren't tethered to a wall socket after 20 minutes.</p>

            <h3>Conclusion</h3>
            <p>If you are a student in fields requiring high computing power—like Architecture, Engineering, or Computer Science—a refurbished business-class laptop offers the best value for money. You get durability and specs that a new budget laptop at the same price point simply cannot match. However, if peace of mind and a fresh battery are your top priorities, a new laptop with a full warranty is the way to go.</p>

            <div class="blog-sources">
                <strong>Sources:</strong>
                <ul>
                    <li>Consumer Reports, "The Truth About Refurbished Electronics" [^1^]</li>
                    <li>Computer World, "IT Asset Management and Depreciation Rates" [^2^]</li>
                    <li>Intel, "Guide to Buying Refurbished Tech" [^3^]</li>
                    <li>StorageReview, "Lithium-Ion Battery Longevity Study" [^4^]</li>
                </ul>
            </div>
        `
    },
       {
        id: 4,
        title: "How Much RAM & Storage do you really need for university?",
        date: "February 5, 2026",
        excerpt: "Stop guessing about specs. We break down exactly how much memory and disk space you need based on your course and budget.",
        image: "images/blog4.jpeg", // Generic laptop hardware image
        link: "#",
        content: `
            <p class="blog-intro">Walking through the computer shops in Kampala, you'll hear terms like "8GB RAM" and "512GB SSD" thrown around. But what do these numbers actually mean for a university student? Buying too little means a slow, frustrating laptop; buying too much means spending money you could have used for tuition. Here is the definitive guide for 2026.</p>

            <h3>Part 1: RAM (Random Access Memory)</h3>
            <p>Think of RAM as your laptop's short-term memory. It determines how many things you can do at once. If you run out of RAM, your laptop starts using your storage drive as temporary memory, which slows everything down drastically.</p>

            <ul>
                <li><strong>4GB (The "Don't Buy" Zone):</strong> In 2026, 4GB is obsolete. Windows 10/11 alone consumes nearly half of this. Your laptop will lag if you try to open a PDF and a browser at the same time. Avoid these unless your budget is extremely tight and you only plan to type documents.</li>
                <li><strong>8GB (The Baseline):</strong> This is the minimum standard for a functional university laptop. You can browse with 10-15 tabs open, type assignments, and stream music simultaneously. It’s perfect for Arts, Humanities, and basic Business students.</li>
                <li><strong>16GB (The Sweet Spot):</strong> Highly recommended for Engineering, Computing, and Science students. If you are coding, running simulations, or editing video, 16GB ensures smooth performance. It is also more "future-proof," meaning your laptop will still be fast in your 3rd and 4th year.</li>
                <li><strong>32GB+ (The Specialist):</strong> Only necessary for high-end architectural rendering or heavy data science. Most students do not need this.</li>
            </ul>

            <blockquote class="blog-quote">
                "8GB of RAM is the absolute floor for a usable Windows laptop in 2026. 16GB is the target for anyone wanting their device to stay fast for 4 years." — PCMag Hardware Guide
            </blockquote>

            <h3>Part 2: Storage (SSD vs. HDD)</h3>
            <p>Storage is where your files live permanently. The type of storage is actually more important than the amount.</p>
            
            <ul>
                <li><strong>HDD (Hard Disk Drive):</strong> These are the older, spinning mechanical drives. They are cheap and offer huge space (1TB+), but they are slow. A laptop with an HDD will take 2-3 minutes to turn on. Avoid these if possible.</li>
                <li><strong>SSD (Solid State Drive):</strong> These are chips, not moving parts. They are silent and incredibly fast. A laptop with an SSD turns on in 10-15 seconds. <strong>Always prioritize an SSD.</strong> Even a smaller SSD (256GB) is better than a massive HDD (1TB).</li>
            </ul>

            <h3>How Much Storage Do You Need?</h3>
            <p>In Uganda, where internet bundles can be expensive, we tend to download movies, music, and lectures for offline viewing. This fills up storage fast.</p>
            
            <ul>
                <li><strong>Why it works in Uganda:</strong> 256GB SSD is the minimum. It holds your OS, software, and documents. However, if you plan to store a lot of movies or offline courses, 512GB is safer.</li>
                <li><strong>The Cloud Backup Plan:</strong> If you buy a 256GB laptop, you can use Google Drive or OneDrive (many universities offer free accounts) to store your study materials, keeping your hard drive free for system apps.</li>
            </ul>

            <h3>Summary Recommendation by Course</h3>
            <ul>
                <li><strong>Arts/Humanities:</strong> 8GB RAM + 256GB SSD (Budget-friendly).</li>
                <li><strong>Business/Education:</strong> 8GB RAM + 512GB SSD (Extra space for reports/media).</li>
                <li><strong>Engineering/Computing:</strong> 16GB RAM + 512GB SSD (Performance requirement).</li>
            </ul>

            <div class="blog-sources">
                <strong>Sources:</strong>
                <ul>
                    <li>PCMag, "How Much RAM Do You Need?"</li>
                    <li>Tom's Hardware, "SSD vs HDD Guide"</li>
                    <li>Microsoft Windows 11 System Requirements</li>
                </ul>
            </div>
        `
    },
     {
        id: 5,
        title: "Top 5 Budget Laptops for Students Under UGX 1.5 Million",
        date: "April 5, 2026",
        excerpt: "Tight budget? No problem. Here are the best student laptops that offer real performance without breaking the bank.",
        image: "images/blog5.jpeg", // Generic affordable laptop look
        link: "#",
        content: `
            <p class="blog-intro">Let's be honest: not every student can afford a 3 million shilling laptop. But does a tight budget mean you have to buy a slow, frustrating machine? Absolutely not. In Uganda's 2026 market, 1.5 million UGX is a sweet spot where you transition from "cheap toys" to "usable tools." Here are the top 5 laptops that offer the best value for money right now.</p>

            <h3>1. The King of Budget: Lenovo IdeaPad Slim 3</h3>
            <p>The IdeaPad Slim 3 dominates the entry-level market. It usually features AMD Ryzen 3 or Intel Core i3 12th gen processors, which are surprisingly snappy for document editing and web browsing.</p>
            
            <!-- Provision for Laptop Image -->
            <img src="images/blog/lenovo-ideapad-slim.jpg" alt="Lenovo IdeaPad Slim 3" class="blog-inline-image">
            
            <ul>
                <li><strong>Why it works in Uganda:</strong> It has a decent selection of ports (HDMI, USB-A) so you don't need to buy expensive dongles. It’s light enough to carry daily without breaking your back.</li>
                <li><strong>Best for:</strong> General students needing a reliable daily driver.</li>
                <li><strong>Expected Budget:</strong> 1,200,000 - 1,450,000 UGX.</li>
            </ul>

            <h3>2. The Workhorse: HP 15s (or 255 G9/G10)</h3>
            <p>Walking into any computer lab in Kampala, you will see the HP 15 series everywhere. It is the standard "office laptop" re-purposed for students. It often comes with 8GB RAM and a 256GB SSD—exactly the minimum specs you need.</p>
            
            <!-- Provision for Laptop Image -->
            <img src="images/blog/hp-15s-budget.jpg" alt="HP 15s Laptop" class="blog-inline-image">
            
            <ul>
                <li><strong>Why it works in Uganda:</strong> Spare parts are everywhere. If your keyboard or screen has an issue, any technician in Kampala can fix it cheaply. The plastic chassis is durable enough for campus life.</li>
                <li><strong>Best for:</strong> Business and Arts students.</li>
                <li><strong>Expected Budget:</strong> 1,100,000 - 1,400,000 UGX.</li>
            </ul>

            <h3>3. The Smart Choice: Refurbished HP EliteBook 840 G5/G6</h3>
            <p>This is the "insider tip" for smart shoppers. Instead of buying a brand new low-end laptop, buy a refurbished business laptop. The EliteBook was originally a premium corporate device. It has better build quality, screen, and keyboard than any new budget laptop.</p>
            
            <!-- Provision for Laptop Image -->
            <img src="images/blog/elitebook-refurb.jpg" alt="Refurbished HP EliteBook" class="blog-inline-image">
            
            <ul>
                <li><strong>Why it works in Uganda:</strong> You get an Intel Core i5 (8th Gen) processor for the price of an i3. It handles heavy multitasking much better than the other budget options on this list.</li>
                <li><strong>Best for:</strong> Computer Science and Engineering students on a budget.</li>
                <li><strong>Expected Budget:</strong> 1,300,000 - 1,500,000 UGX.</li>
            </ul>

            <h3>4. The Screen Star: ASUS VivoBook Go 15</h3>
            <p>ASUS often includes "Anti-glare" displays on their budget models, which is a lifesaver if you study outdoors or in bright lecture halls. The VivoBook Go is designed specifically for portability and basic productivity.</p>
            
            <!-- Provision for Laptop Image -->
            <img src="images/blog/asus-vivobook-go.jpg" alt="ASUS VivoBook Go" class="blog-inline-image">
            
            <ul>
                <li><strong>Why it works in Uganda:</strong> It's incredibly light (under 1.6kg). It also features a "Lay-flat" hinge that lets you fold the screen flat—great for group discussions around a table.</li>
                <li><strong>Best for:</strong> Students constantly on the move.</li>
                <li><strong>Expected Budget:</strong> 1,000,000 - 1,300,000 UGX.</li>
            </ul>

            <h3>5. The Classic: Dell Inspiron 3520</h3>
            <p>While it might look a bit traditional, the Inspiron 3520 is built like a tank. It prioritizes function over form. It often features a slightly larger chassis, which aids in cooling—a benefit in our warm climate.</p>
            
            <!-- Provision for Laptop Image -->
            <img src="images/blog/dell-inspiron-budget.jpg" alt="Dell Inspiron 3520" class="blog-inline-image">
            
            <ul>
                <li><strong>Why it works in Uganda:</strong> Dell's "ExpressCharge" feature often charges the battery up to 80% in just an hour—perfect for a quick top-up between lectures.</li>
                <li><strong>Best for:</strong> Students who prioritize durability and fast charging.</li>
                <li><strong>Expected Budget:</strong> 1,200,000 - 1,500,000 UGX.</li>
            </ul>

            <h3>Conclusion</h3>
            <p>You don't need to break the bank to get a degree. If you are strictly under 1.5 million UGX, we strongly recommend the <strong>Refurbished EliteBook</strong> for performance or the <strong>Lenovo IdeaPad</strong> for a balance of new hardware and reliability. Avoid laptops with "Celeron" or "Pentium" processors; they are often cheaper (around 800k UGX) but will frustrate you within months.</p>

            <div class="blog-sources">
                <strong>Sources:</strong>
                <ul>
                    <li>Local Vendor Pricing (Kampala 2026)</li>
                    <li>PassMark CPU Benchmarks (Comparing i3 vs Celeron)</li>
                    <li>Dell & HP Official Specifications</li>
                </ul>
            </div>
        `
    },
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