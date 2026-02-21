import type { Product, Category } from "./types"

export const WHATSAPP_NUMBER = "254793823013"

export function getWhatsAppLink(productName: string, quantity: number = 1, totalPrice?: number) {
  const priceText = totalPrice ? ` | Total: KES ${totalPrice.toLocaleString("en-KE")}` : ""
  const qtyText = quantity > 1 ? ` x${quantity}` : ""
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello 25FlowElectronics! I want to order:\n\nProduct: ${productName}${qtyText}${priceText}\n\nPlease send me M-Pesa payment details.`
  )}`
}

export const categories: Category[] = [
  {
    name: "Televisions",
    slug: "televisions",
    icon: "Tv",
    brands: ["Hisense", "Samsung", "Sony", "TCL", "Vitron", "Sharp", "Skyworth", "LG", "Panasonic", "Philips"],
    variantType: "Screen Size",
    variantOptions: ['32"', '43"', '50"', '55"', '65"', '75"'],
    productCount: 12,
  },
  {
    name: "Smartphones",
    slug: "smartphones",
    icon: "Smartphone",
    brands: ["Samsung", "Apple", "Xiaomi", "Tecno", "Infinix", "Oppo", "Vivo", "Huawei", "Nokia", "Google Pixel"],
    variantType: "Storage",
    variantOptions: ["64GB", "128GB", "256GB", "512GB"],
    productCount: 10,
  },
  {
    name: "Tablets",
    slug: "tablets",
    icon: "Tablet",
    brands: ["Apple iPad", "Samsung", "Huawei", "Lenovo", "Xiaomi", "Amazon Fire", "Microsoft Surface"],
    variantType: "Storage",
    variantOptions: ["64GB", "128GB", "256GB", "512GB"],
    productCount: 7,
  },
  {
    name: "Refrigerators",
    slug: "refrigerators",
    icon: "Refrigerator",
    brands: ["LG", "Samsung", "Hisense", "Ramtons", "Haier", "Whirlpool", "Bosch", "Midea"],
    variantType: "Capacity",
    variantOptions: ["200L", "300L", "400L+"],
    productCount: 8,
  },
  {
    name: "Washing Machines",
    slug: "washing-machines",
    icon: "WashingMachine",
    brands: ["LG", "Samsung", "Hisense", "Ramtons", "Bosch", "Whirlpool", "Haier"],
    variantType: "Load Size",
    variantOptions: ["6kg", "8kg", "10kg", "12kg"],
    productCount: 7,
  },
  {
    name: "Microwaves",
    slug: "microwaves",
    icon: "Microwave",
    brands: ["Samsung", "LG", "Hisense", "Ramtons", "Panasonic", "Sharp", "Bosch"],
    variantType: "Capacity",
    variantOptions: ["20L", "25L", "30L"],
    productCount: 7,
  },
  {
    name: "Cookers & Ovens",
    slug: "cookers-ovens",
    icon: "CookingPot",
    brands: ["Ramtons", "Hisense", "LG", "Samsung", "Bosch", "Whirlpool", "Midea"],
    variantType: "Type",
    variantOptions: ["Gas", "Electric", "Dual Fuel"],
    productCount: 6,
  },
  {
    name: "Coffee Makers",
    slug: "coffee-makers",
    icon: "Coffee",
    brands: ["DeLonghi", "Nespresso", "Philips", "Bosch", "Braun", "Black+Decker", "Kenwood"],
    variantType: "Type",
    variantOptions: ["Espresso", "Drip", "Capsule"],
    productCount: 6,
  },
  {
    name: "Headphones & Earbuds",
    slug: "headphones-earbuds",
    icon: "Headphones",
    brands: ["Apple AirPods", "Samsung", "Sony", "JBL", "Beats", "Anker", "Skullcandy", "Xiaomi"],
    variantType: "Type",
    variantOptions: ["Over-Ear", "In-Ear", "True Wireless"],
    productCount: 8,
  },
  {
    name: "Speakers & Soundbars",
    slug: "speakers-soundbars",
    icon: "Speaker",
    brands: ["JBL", "Sony", "Samsung", "LG", "Bose", "Harman Kardon", "Anker", "Skyworth"],
    variantType: "Type",
    variantOptions: ["Portable", "Soundbar", "Home Theater"],
    productCount: 8,
  },
  {
    name: "Chargers & Accessories",
    slug: "chargers-accessories",
    icon: "Cable",
    brands: ["Apple", "Samsung", "Anker", "Xiaomi", "Baseus", "Oraimo", "Remax", "Belkin"],
    variantType: "Type",
    variantOptions: ["Power Bank", "Cable", "Adapter", "Smartwatch", "Router", "TV Mount"],
    productCount: 10,
  },
]

export const products: Product[] = [
  // TELEVISIONS
  {
    id: "tv-1",
    name: 'Samsung Crystal UHD 55" Smart TV',
    brand: "Samsung",
    category: "televisions",
    slug: "samsung-crystal-uhd-55-smart-tv",
    description: "Experience the Crystal UHD display that delivers vivid, crystal-clear color with 4K resolution. The Crystal Processor 4K optimizes your content to 4K for picture quality worth watching. With Smart TV features built in, enjoy streaming apps, gaming, and more. AirSlim design blends seamlessly into any room.",
    specifications: { "Screen Size": '55"', "Resolution": "4K UHD (3840 x 2160)", "HDR": "HDR10+", "Smart TV": "Tizen OS", "Connectivity": "Wi-Fi, Bluetooth, HDMI x3, USB x1", "Refresh Rate": "60Hz", "Sound": "20W, 2CH", "Warranty": "2 Years" },
    variants: [{ label: '43"', value: "43", priceModifier: -15000 }, { label: '55"', value: "55" }, { label: '65"', value: "65", priceModifier: 25000 }, { label: '75"', value: "75", priceModifier: 60000 }],
    price: 72999, originalPrice: 89999, rating: 4.6, reviewCount: 234, inStock: true,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&h=800&fit=crop", "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=800&h=800&fit=crop"],
    featured: true, flashSale: true, flashSaleEnds: "2026-02-22T23:59:59",
  },
  {
    id: "tv-2",
    name: 'Hisense A6 Series 43" 4K Smart TV',
    brand: "Hisense",
    category: "televisions",
    slug: "hisense-a6-series-43-4k-smart-tv",
    description: "The Hisense A6 Series delivers stunning 4K visuals with Dolby Vision and HDR10. VIDAA smart platform provides instant access to popular streaming apps. Game Mode Plus ensures smooth gameplay with low input lag.",
    specifications: { "Screen Size": '43"', "Resolution": "4K UHD", "HDR": "Dolby Vision, HDR10", "Smart TV": "VIDAA OS", "Connectivity": "Wi-Fi, Bluetooth, HDMI x3, USB x2", "Refresh Rate": "60Hz", "Warranty": "1 Year" },
    variants: [{ label: '32"', value: "32", priceModifier: -8000 }, { label: '43"', value: "43" }, { label: '50"', value: "50", priceModifier: 8000 }, { label: '55"', value: "55", priceModifier: 15000 }],
    price: 38999, originalPrice: 45999, rating: 4.3, reviewCount: 156, inStock: true,
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1509281373149-e957c6296406?w=800&h=800&fit=crop"],
    dealOfDay: true,
  },
  {
    id: "tv-3",
    name: 'Sony Bravia XR 65" OLED TV',
    brand: "Sony",
    category: "televisions",
    slug: "sony-bravia-xr-65-oled-tv",
    description: "The Sony Bravia XR OLED delivers unmatched contrast with pure blacks and vibrant colors. Cognitive Processor XR understands how humans see to deliver incredibly realistic picture and sound.",
    specifications: { "Screen Size": '65"', "Resolution": "4K OLED", "HDR": "Dolby Vision, HDR10, HLG", "Smart TV": "Google TV", "Connectivity": "Wi-Fi 6, Bluetooth 5.0, HDMI 2.1 x4", "Refresh Rate": "120Hz", "Sound": "Acoustic Surface Audio+", "Warranty": "2 Years" },
    variants: [{ label: '55"', value: "55", priceModifier: -50000 }, { label: '65"', value: "65" }, { label: '75"', value: "75", priceModifier: 80000 }],
    price: 249999, rating: 4.9, reviewCount: 89, inStock: true,
    image: "https://images.unsplash.com/photo-1558888401-3cc1de77652d?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1558888401-3cc1de77652d?w=800&h=800&fit=crop"],
    featured: true,
  },
  {
    id: "tv-4",
    name: 'TCL P635 50" 4K Google TV',
    brand: "TCL",
    category: "televisions",
    slug: "tcl-p635-50-4k-google-tv",
    description: "TCL P635 brings 4K HDR entertainment with Google TV built-in. Metallic bezel-less design and Dolby Audio enhance your viewing experience.",
    specifications: { "Screen Size": '50"', "Resolution": "4K UHD", "HDR": "HDR10", "Smart TV": "Google TV", "Connectivity": "Wi-Fi, Bluetooth, HDMI x3", "Refresh Rate": "60Hz", "Warranty": "1 Year" },
    variants: [{ label: '43"', value: "43", priceModifier: -5000 }, { label: '50"', value: "50" }, { label: '55"', value: "55", priceModifier: 8000 }],
    price: 42999, originalPrice: 49999, rating: 4.2, reviewCount: 198, inStock: true,
    image: "https://images.unsplash.com/photo-1571415060716-baff5f717c37?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1571415060716-baff5f717c37?w=800&h=800&fit=crop"],
  },
  // SMARTPHONES
  {
    id: "phone-1",
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    category: "smartphones",
    slug: "samsung-galaxy-s24-ultra",
    description: "The Galaxy S24 Ultra is the ultimate smartphone with a built-in S Pen, advanced AI features, and a stunning 6.8-inch Dynamic AMOLED display. 200MP camera system captures every detail with remarkable clarity.",
    specifications: { "Display": "6.8\" Dynamic AMOLED 2X, 120Hz", "Processor": "Snapdragon 8 Gen 3", "RAM": "12GB", "Camera": "200MP + 50MP + 12MP + 10MP", "Battery": "5000mAh", "OS": "Android 14, One UI 6.1", "Connectivity": "5G, Wi-Fi 7, Bluetooth 5.3", "Warranty": "1 Year" },
    variants: [{ label: "256GB", value: "256" }, { label: "512GB", value: "512", priceModifier: 15000 }, { label: "1TB", value: "1024", priceModifier: 35000 }],
    price: 189999, originalPrice: 209999, rating: 4.8, reviewCount: 412, inStock: true,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&h=800&fit=crop"],
    featured: true, flashSale: true, flashSaleEnds: "2026-02-22T23:59:59",
  },
  {
    id: "phone-2",
    name: "Apple iPhone 15 Pro Max",
    brand: "Apple",
    category: "smartphones",
    slug: "apple-iphone-15-pro-max",
    description: "iPhone 15 Pro Max features a titanium design, A17 Pro chip, and a powerful 48MP camera system. Action button gives you quick access to your favorite features. USB-C for universal charging.",
    specifications: { "Display": "6.7\" Super Retina XDR OLED, 120Hz", "Processor": "A17 Pro", "RAM": "8GB", "Camera": "48MP + 12MP + 12MP", "Battery": "4441mAh", "OS": "iOS 17", "Connectivity": "5G, Wi-Fi 6E, Bluetooth 5.3", "Warranty": "1 Year" },
    variants: [{ label: "256GB", value: "256" }, { label: "512GB", value: "512", priceModifier: 20000 }, { label: "1TB", value: "1024", priceModifier: 45000 }],
    price: 219999, rating: 4.9, reviewCount: 567, inStock: true,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=800&fit=crop"],
    featured: true,
  },
  {
    id: "phone-3",
    name: "Tecno Camon 20 Premier",
    brand: "Tecno",
    category: "smartphones",
    slug: "tecno-camon-20-premier",
    description: "Tecno Camon 20 Premier features a 108MP camera, 5000mAh battery, and 6.67-inch AMOLED display. Perfect balance of performance and affordability.",
    specifications: { "Display": "6.67\" AMOLED, 120Hz", "Processor": "MediaTek Dimensity 8050", "RAM": "8GB", "Camera": "108MP + 2MP + 2MP", "Battery": "5000mAh", "OS": "Android 13, HiOS 13", "Connectivity": "4G, Wi-Fi, Bluetooth 5.2", "Warranty": "1 Year" },
    variants: [{ label: "128GB", value: "128" }, { label: "256GB", value: "256", priceModifier: 3000 }],
    price: 32999, originalPrice: 38999, rating: 4.2, reviewCount: 287, inStock: true,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&h=800&fit=crop"],
    dealOfDay: true,
  },
  {
    id: "phone-4",
    name: "Xiaomi 14 Ultra",
    brand: "Xiaomi",
    category: "smartphones",
    slug: "xiaomi-14-ultra",
    description: "Xiaomi 14 Ultra combines Leica optics with Snapdragon 8 Gen 3 power. Pro-grade photography with 1-inch sensor and 50MP main camera.",
    specifications: { "Display": "6.73\" LTPO AMOLED, 120Hz", "Processor": "Snapdragon 8 Gen 3", "RAM": "16GB", "Camera": "50MP + 50MP + 50MP", "Battery": "5300mAh", "OS": "Android 14, HyperOS", "Connectivity": "5G, Wi-Fi 7", "Warranty": "1 Year" },
    variants: [{ label: "256GB", value: "256" }, { label: "512GB", value: "512", priceModifier: 10000 }],
    price: 149999, rating: 4.7, reviewCount: 143, inStock: true,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=800&fit=crop"],
  },
  // TABLETS
  {
    id: "tab-1",
    name: "Apple iPad Pro 12.9\" M2",
    brand: "Apple iPad",
    category: "tablets",
    slug: "apple-ipad-pro-12-9-m2",
    description: "iPad Pro with M2 chip delivers next-level performance for creative workflows. Liquid Retina XDR display with ProMotion technology for incredibly fluid visuals.",
    specifications: { "Display": "12.9\" Liquid Retina XDR", "Processor": "Apple M2", "Camera": "12MP + 10MP", "Battery": "Up to 10 hours", "OS": "iPadOS 17", "Connectivity": "Wi-Fi 6E, Bluetooth 5.3", "Warranty": "1 Year" },
    variants: [{ label: "128GB", value: "128" }, { label: "256GB", value: "256", priceModifier: 15000 }, { label: "512GB", value: "512", priceModifier: 35000 }],
    price: 159999, rating: 4.8, reviewCount: 198, inStock: true,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=800&fit=crop"],
    featured: true,
  },
  {
    id: "tab-2",
    name: "Samsung Galaxy Tab S9 FE",
    brand: "Samsung",
    category: "tablets",
    slug: "samsung-galaxy-tab-s9-fe",
    description: "Galaxy Tab S9 FE with S Pen included, IP68 water resistance, and a vivid 10.9-inch display. Perfect for work and play.",
    specifications: { "Display": "10.9\" TFT LCD", "Processor": "Exynos 1380", "Camera": "8MP + 12MP", "Battery": "8000mAh", "OS": "Android 13, One UI 5.1", "Connectivity": "Wi-Fi 6, Bluetooth 5.3", "Warranty": "1 Year" },
    variants: [{ label: "128GB", value: "128" }, { label: "256GB", value: "256", priceModifier: 8000 }],
    price: 54999, originalPrice: 64999, rating: 4.4, reviewCount: 132, inStock: true,
    image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=800&h=800&fit=crop"],
    flashSale: true, flashSaleEnds: "2026-02-21T23:59:59",
  },
  // REFRIGERATORS
  {
    id: "fridge-1",
    name: "LG InstaView Door-in-Door French Refrigerator",
    brand: "LG",
    category: "refrigerators",
    slug: "lg-instaview-door-in-door-french-refrigerator",
    description: "LG InstaView Door-in-Door lets you see inside without opening the door. Linear Cooling technology maintains freshness. Smart Diagnosis for easy troubleshooting.",
    specifications: { "Capacity": "530L", "Type": "French Door", "Energy Rating": "A++", "Cooling": "Linear Cooling", "Features": "InstaView, Door-in-Door, Water Dispenser", "Dimensions": "91.2 x 179.3 x 73.8 cm", "Warranty": "2 Years" },
    variants: [{ label: "530L", value: "530" }],
    price: 189999, originalPrice: 219999, rating: 4.7, reviewCount: 76, inStock: true,
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&h=800&fit=crop"],
    flashSale: true, flashSaleEnds: "2026-02-23T23:59:59",
  },
  {
    id: "fridge-2",
    name: "Samsung Side-by-Side 680L Refrigerator",
    brand: "Samsung",
    category: "refrigerators",
    slug: "samsung-side-by-side-680l-refrigerator",
    description: "Spacious 680L capacity with SpaceMax technology. Digital Inverter Compressor saves energy and reduces noise. All-around cooling ensures even temperature.",
    specifications: { "Capacity": "680L", "Type": "Side-by-Side", "Energy Rating": "A+", "Cooling": "All-Around Cooling", "Features": "SpaceMax, Digital Inverter", "Warranty": "2 Years" },
    variants: [{ label: "680L", value: "680" }],
    price: 159999, rating: 4.5, reviewCount: 94, inStock: true,
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&h=800&fit=crop"],
    dealOfDay: true,
  },
  // WASHING MACHINES
  {
    id: "wash-1",
    name: "LG AI Direct Drive 10kg Front Load Washer",
    brand: "LG",
    category: "washing-machines",
    slug: "lg-ai-direct-drive-10kg-front-load-washer",
    description: "LG AI Direct Drive detects fabric type and optimizes wash motions. TurboWash 360 cleans thoroughly in just 39 minutes. Steam technology removes 99.9% of allergens.",
    specifications: { "Load Size": "10kg", "Type": "Front Load", "Spin Speed": "1400 RPM", "Energy Rating": "A+++", "Features": "AI Direct Drive, TurboWash 360, Steam", "Warranty": "2 Years" },
    variants: [{ label: "8kg", value: "8", priceModifier: -10000 }, { label: "10kg", value: "10" }, { label: "12kg", value: "12", priceModifier: 15000 }],
    price: 89999, originalPrice: 104999, rating: 4.6, reviewCount: 112, inStock: true,
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&h=800&fit=crop"],
    dealOfDay: true,
  },
  // HEADPHONES
  {
    id: "hp-1",
    name: "Apple AirPods Pro 2nd Gen",
    brand: "Apple AirPods",
    category: "headphones-earbuds",
    slug: "apple-airpods-pro-2nd-gen",
    description: "AirPods Pro 2nd gen with Active Noise Cancellation, Adaptive Transparency, and Personalized Spatial Audio. Up to 2x more ANC than the previous generation.",
    specifications: { "Type": "True Wireless", "ANC": "Active Noise Cancellation", "Battery": "6h (30h with case)", "Connectivity": "Bluetooth 5.3", "Water Resistance": "IPX4", "Features": "Spatial Audio, Adaptive EQ", "Warranty": "1 Year" },
    variants: [{ label: "USB-C", value: "usbc" }, { label: "Lightning", value: "lightning", priceModifier: -2000 }],
    price: 38999, rating: 4.8, reviewCount: 456, inStock: true,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&h=800&fit=crop"],
    featured: true,
  },
  {
    id: "hp-2",
    name: "Sony WH-1000XM5 Wireless Headphones",
    brand: "Sony",
    category: "headphones-earbuds",
    slug: "sony-wh-1000xm5-wireless-headphones",
    description: "Industry-leading noise cancellation with 8 microphones and 2 processors. 30-hour battery, multipoint connection, and crystal-clear hands-free calling.",
    specifications: { "Type": "Over-Ear", "ANC": "Industry-Leading NC", "Battery": "30 hours", "Connectivity": "Bluetooth 5.2, 3.5mm", "Features": "LDAC, Speak-to-Chat, Multipoint", "Weight": "250g", "Warranty": "1 Year" },
    variants: [{ label: "Black", value: "black" }, { label: "Silver", value: "silver" }],
    price: 49999, originalPrice: 57999, rating: 4.7, reviewCount: 321, inStock: true,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&h=800&fit=crop"],
    flashSale: true, flashSaleEnds: "2026-02-22T18:00:00",
  },
  // SPEAKERS
  {
    id: "spk-1",
    name: "JBL Charge 5 Bluetooth Speaker",
    brand: "JBL",
    category: "speakers-soundbars",
    slug: "jbl-charge-5-bluetooth-speaker",
    description: "JBL Charge 5 delivers bold JBL Original Pro Sound with optimized long excursion driver. IP67 waterproof and dustproof with 20 hours of playtime.",
    specifications: { "Type": "Portable", "Output": "30W", "Battery": "20 hours", "Water Resistance": "IP67", "Connectivity": "Bluetooth 5.1", "Features": "PartyBoost, Power Bank", "Warranty": "1 Year" },
    variants: [{ label: "Black", value: "black" }, { label: "Blue", value: "blue" }, { label: "Red", value: "red" }],
    price: 21999, originalPrice: 26999, rating: 4.5, reviewCount: 287, inStock: true,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=800&fit=crop"],
    dealOfDay: true,
  },
  // MICROWAVES
  {
    id: "mw-1",
    name: "Samsung 23L Solo Microwave Oven",
    brand: "Samsung",
    category: "microwaves",
    slug: "samsung-23l-solo-microwave-oven",
    description: "Samsung 23L microwave with Ceramic Enamel interior for easy cleaning. Triple Distribution System ensures even cooking every time.",
    specifications: { "Capacity": "23L", "Power": "800W", "Type": "Solo", "Features": "Ceramic Enamel, Quick Defrost", "Dimensions": "48.9 x 27.5 x 37.4 cm", "Warranty": "1 Year" },
    variants: [{ label: "20L", value: "20", priceModifier: -2000 }, { label: "23L", value: "23" }],
    price: 14999, originalPrice: 18999, rating: 4.3, reviewCount: 167, inStock: true,
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=800&h=800&fit=crop"],
  },
  // COFFEE MAKERS
  {
    id: "cf-1",
    name: "DeLonghi Magnifica S Espresso Machine",
    brand: "DeLonghi",
    category: "coffee-makers",
    slug: "delonghi-magnifica-s-espresso-machine",
    description: "Fully automatic espresso machine with integrated grinder. Bean-to-cup freshness with adjustable milk frother for cappuccinos and lattes.",
    specifications: { "Type": "Automatic Espresso", "Pressure": "15 bar", "Grinder": "Built-in Burr Grinder", "Water Tank": "1.8L", "Features": "Milk Frother, Adjustable Grind", "Warranty": "2 Years" },
    variants: [{ label: "Standard", value: "standard" }, { label: "Plus", value: "plus", priceModifier: 15000 }],
    price: 79999, rating: 4.6, reviewCount: 89, inStock: true,
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&h=800&fit=crop"],
  },
  // COOKERS
  {
    id: "ck-1",
    name: "Ramtons 4 Gas + 2 Electric Standing Cooker",
    brand: "Ramtons",
    category: "cookers-ovens",
    slug: "ramtons-4-gas-2-electric-standing-cooker",
    description: "Versatile standing cooker with 4 gas burners and 2 electric plates. Large oven with rotisserie function. Stainless steel design built to last.",
    specifications: { "Type": "Dual Fuel", "Burners": "4 Gas + 2 Electric", "Oven": "60L Electric Oven", "Features": "Rotisserie, Auto Ignition", "Dimensions": "60 x 60 x 85 cm", "Warranty": "1 Year" },
    variants: [{ label: "Silver", value: "silver" }, { label: "Black", value: "black" }],
    price: 54999, originalPrice: 64999, rating: 4.4, reviewCount: 78, inStock: true,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=800&fit=crop"],
  },
  // CHARGERS & ACCESSORIES
  {
    id: "acc-1",
    name: "Anker PowerCore 26800mAh Power Bank",
    brand: "Anker",
    category: "chargers-accessories",
    slug: "anker-powercore-26800mah-power-bank",
    description: "Massive 26800mAh capacity charges most phones over 6 times. Dual USB output, PowerIQ and VoltageBoost for optimized charging. MultiProtect safety system.",
    specifications: { "Capacity": "26800mAh", "Output": "Dual USB 3A", "Input": "Micro-USB / USB-C", "Features": "PowerIQ, VoltageBoost, MultiProtect", "Weight": "495g", "Warranty": "18 Months" },
    variants: [{ label: "26800mAh", value: "26800" }, { label: "20000mAh", value: "20000", priceModifier: -1500 }],
    price: 5999, originalPrice: 7999, rating: 4.5, reviewCount: 534, inStock: true,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&h=800&fit=crop"],
    flashSale: true, flashSaleEnds: "2026-02-21T12:00:00",
  },
  {
    id: "acc-2",
    name: "Oraimo FreePods 4 TWS Earbuds",
    brand: "Oraimo",
    category: "chargers-accessories",
    slug: "oraimo-freepods-4-tws-earbuds",
    description: "Oraimo FreePods 4 with active noise cancellation, 30-hour battery life, and IPX5 water resistance. Perfect for everyday use.",
    specifications: { "Type": "True Wireless Earbuds", "ANC": "Active Noise Cancellation", "Battery": "6h (30h with case)", "Water Resistance": "IPX5", "Connectivity": "Bluetooth 5.3", "Warranty": "1 Year" },
    variants: [{ label: "Black", value: "black" }, { label: "White", value: "white" }],
    price: 3999, originalPrice: 5499, rating: 4.1, reviewCount: 412, inStock: true,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=600&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=800&h=800&fit=crop"],
    dealOfDay: true,
  },  // ========== NEW PRODUCTS ==========
  {
    id: "mika-standing-cooker-60x60-mst6231e6bx",
    name: "MIKA Standing Cooker, 60cm x 60cm,MST6231E6BX",
    brand: "MIKA",
    category: "cookers-ovens",
    slug: "mika-standing-cooker-60x60-mst6231e6bx",
    description: `<p><span><strong>Special Features</strong></span> </p>
<ul>
<li><span><strong>Flame Failure Safety</strong></span><span> </span><span>- prevents gas leak in the event a flame goes out, reducing risk of fire or explosion. </span></li>
<li><span><strong>1 X</strong></span><span> </span><span><strong>1500</strong></span><span> </span><span><strong>Watts Electric Rapid Hot plate</strong></span><span> </span><span>- Heats up quickly, saves on time</span> </li>
<li><span><strong>One hand</strong></span><span> </span><span><strong>Intergrated</strong></span><span> </span><span><strong>auto-ignition</strong></span><span> </span><span>- no need of external flame.</span> </li>
<li><span><strong>Special high density insulation</strong></span><span> </span><span>- faster preheating and cooking, conserving energy</span></li>
<li><span><strong>Turnspit</strong></span><span> </span><span>(Chicken Rotisserie) - allows for fat dripping; healthier meals</span></li>
<li><span><strong>Tripple Oven glass door</strong></span><span> </span><span><strong>with 1</strong></span><span> </span><span><strong>Low-E Glass</strong></span><span> </span><span>– conserves Energy  </span></li>
<li><span><strong>Flap type drawer</strong></span><span> </span><span>– serves as a dish warmer and storage.</span></li>
<li><span>Special unbreakable Glass Top Lid </span> </li>
</ul>
<p><span><strong>General Features</strong></span> </p>
<ul>
<li><span>3 gas burners and</span><span> </span><span>1 Electric Rapid Hot plate</span> </li>
<li><span>Cast iron pan support - additional stability, prevents pan slipping and accidental burns. </span></li>
<li><span>Easily Removable oven glass door - easy cleaning</span> </li>
<li><span>Heavy Duty Matt Finish Burner Caps        </span></li>
<li><span>Mechanical timer        </span></li>
<li><span>Electric oven and grill as 0+6 function            </span></li>
<li><span>Oven lamp </span></li>
<li><span>Width 60cm x Depth 60cm</span></li>
</ul>
<p><span><strong>Free Extra Accessories</strong></span></p>
<ul>
<li><span>1 Round oven tray</span></li>
<li><span>1 Wire Grids</span> </li>
<li><span>1 Deep Oven Tray</span> </li>
</ul>`,
    specifications: {},
    variants: [],
    price: 45000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/MST6231BXTR6_Actual-2.jpg?v=1769420568",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/MST6231BXTR6_Actual-2.jpg?v=1769420568"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "mika-standing-cooker-90x60-mst9041weg6hi",
    name: "MIKA Standing Cooker, 90cm x 60cm, 4 Gas Pool Jet Burners (1 Wok) + 1 RAPID Hot Plate, Half Inox MST9041WEG6HI",
    brand: "MIKA",
    category: "cookers-ovens",
    slug: "mika-standing-cooker-90x60-mst9041weg6hi",
    description: `<p><span><strong>Special Features</strong></span> </p>
<ul>
<li><span><strong>Flame Failure Safety</strong></span><span> </span><span>- prevents gas leak in the event a flame goes out, reducing risk of fire or explosion.         </span></li>
<li><span><strong>1 X</strong></span><span> </span><span><strong>4.2kW Dual WOK burner by Sabaf</strong></span><span> </span><span>- provides more heat with even distribution.</span></li>
<li><span><strong>1 X</strong></span><span> </span><span><strong>2000Watts Electric Rapid Hot plate</strong></span><span> </span><span>- heats up quickly, saves on time.</span> </li>
<li><strong>One Hand Integrated Auto ignition</strong><span> </span><span>- no need of external flame.</span> </li>
<li><span><strong>Special high density insulation</strong></span><span> </span><span>- faster preheating and cooking, conserving energy</span></li>
<li><span><strong>Turnspit</strong></span><span> </span><span>(Chicken Rotisserie) - allows for fat dripping; healthier meals</span></li>
<li><span><strong>Double Oven glass door with 1 Low-E Glass</strong></span><span> </span><span>– conserves Energy         </span></li>
<li><span><strong>Flap type drawer</strong></span><span> </span><span>– serves as a dish warmer and storage.         </span></li>
<li><span>Special unbreakable Glass Top Lid </span></li>
</ul>
<p><span><strong>General Features</strong></span> </p>
<ul>
<li><span>4 gas burners + 1 electric rapid hot plate</span></li>
<li><span>Cast iron pan support - additional stability, prevents pan slipping and accidental burns.   </span></li>
<li><span>Heavy Duty Matt Finish Burner Caps        </span></li>
<li><span>Mechanical timer        </span></li>
<li><span>Electric oven and grill as 0+6 function                     </span></li>
<li><span>Chrome Coated Wire Rack system              </span></li>
<li><span>Oven lamp        </span></li>
<li><span>Half Inox – Frontal Stainless Steel (Tob Hob, Control panel &amp; Bottom drawer)        </span></li>
<li><span>Width 90cm x Depth 60cm        </span></li>
</ul>
<p><span><strong>Free Extra Accessories</strong></span> </p>
<ul>
<li><span>1 Round Oven Trays       </span></li>
<li><span>1 Chrome Coated Wire Grid        </span></li>
<li><span>1 Deep Oven Tray </span></li>
<li><span>Cast Iron Pan Adaptor   </span> </li>
</ul>`,
    specifications: {},
    variants: [],
    price: 68000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/MST9041WEG6HI.jpg?v=1768648408",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/MST9041WEG6HI.jpg?v=1768648408"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "syinix-10-7kg-front-load-washing-machine-wash-and-dry-n10wfdt",
    name: "Syinix 10/7Kg Front Load Washing Machine Wash and Dry N10WFDT",
    brand: "Syinix",
    category: "washing-machines",
    slug: "syinix-10-7kg-front-load-washing-machine-wash-and-dry-n10wfdt",
    description: `<h4>Key Features</h4>
<div class="product-features">
<ul>
<li>Model: Syinix N10WFDT</li>
<li>Washer Capacity: 10Kg</li>
<li>Dryer Capacity: 7Kg</li>
<li>Spin Speed: 1200–1500 RPM</li>
<li>Motor Type: Inverter Motor</li>
<li>Programs: 12–14 wash programs</li>
<li>Add Garment Function: Yes</li>
<li>Child Lock: Yes</li>
<li>Safety Protection: Built-in</li>
<li>Type: Front Load Washer &amp; Dryer Combo</li>
<li>Energy Efficiency: High</li>
<li>Noise Level: Low-noise operation</li>
</ul>
</div>`,
    specifications: {},
    variants: [],
    price: 52000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Syinix_10-7Kg_Front_Load_Washing_Machine_Wash_and_Dry_N10WFDT.jpg?v=1768462335",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Syinix_10-7Kg_Front_Load_Washing_Machine_Wash_and_Dry_N10WFDT.jpg?v=1768462335"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "sony-65-inch-x90l",
    name: "SONY 65 INCH X90L",
    brand: "Sony",
    category: "televisions",
    slug: "sony-65-inch-x90l",
    description: `<h3>📺 Display &amp; Picture</h3>
<ol>
<li><span><strong>Screen size:</strong> 65\" (64.5\" diagonal / 164 cm)</span></li>
<li><span><strong>Resolution:</strong> 3840 × 2160 (4K Ultra HD)</span></li>
<li><span><strong>Panel type:</strong> LCD with <strong>Full Array LED backlight</strong></span></li>
<li><span><strong>Refresh rate:</strong> 100Hz (supports 120Hz via HDMI IN 3 &amp; 4)</span></li>
<li><span><strong>Processor:</strong> Cognitive Processor XR</span></li>
<li><span><strong>Contrast enhancement:</strong> XR Contrast Booster 10, XR HDR Remaster, Dynamic Contrast Enhancer</span></li>
<li><span><strong>Color technologies:</strong> XR TRILUMINOS PRO™, XR Smoothing, Live Colour™</span></li>
<li><span><strong>Clarity enhancement:</strong> XR 4K Upscaling, XR Super Resolution</span></li>
<li><span><strong>Motion:</strong> XR Motion Clarity</span></li>
<li><span><strong>HDR formats supported:</strong> HDR10, HLG, Dolby Vision</span></li>
<li><span><strong>Picture modes:</strong> Vivid, Standard, Cinema, IMAX Enhanced, Game, Graphics, Photo, Custom, Dolby Vision (Vivid/Bright/Dark), Netflix Calibrated, BRAVIA CORE Calibrated</span></li>
</ol>
<div><br></div>
<h3>🔊 Audio</h3>
<ol>
<li><span><strong>Speaker system:</strong> Acoustic Multi-Audio with Sound Positioning Tweeters + X-Balanced Speakers</span></li>
<li><span><strong>Configuration:</strong> 2 × Full Range (Bass Reflex) + 2 × Tweeters</span></li>
<li><span><strong>Output power:</strong> 10W + 10W + 5W + 5W</span></li>
<li><span><strong>Formats supported:</strong> Dolby Audio, Dolby Atmos, DTS Digital Surround</span></li>
<li><span><strong>Features:</strong> Voice Zoom 2, Acoustic Auto Calibration, Acoustic Center Sync (with compatible Sony soundbar)</span></li>
</ol>
<div><br></div>
<h3>🎮 Gaming Features</h3>
<ol>
<li><span><strong>HDMI 2.1 features:</strong> 4K@120Hz, eARC, VRR, ALLM</span></li>
<li><span><strong>PlayStation®5 optimized:</strong> Auto HDR Tone Mapping, Auto Genre Picture Mode</span></li>
</ol>
<div><br></div>
<h3>📡 Connectivity</h3>
<ol>
<li><span><strong>Wi-Fi:</strong> 802.11a/b/g/n/ac (2.4GHz/5GHz)</span></li>
<li><span><strong>Bluetooth:</strong> Version 4.2 (supports HID, HOGP, SPP, A2DP, AVRCP)</span></li>
<li><span><strong>HDMI ports:</strong> 4 (all side), HDCP 2.3</span></li>
<li><span><strong>USB ports:</strong> 2 (side)</span></li>
<li><span><strong>Other ports:</strong> RF input, Hybrid S-Center Speaker input, Digital Audio Out, Headphone Out</span></li>
<li><span><strong>Smart features:</strong> Google TV, Chromecast built-in, Apple AirPlay, Apple HomeKit</span></li>
<li><span><strong>Storage:</strong> 32GB onboard</span></li>
</ol>
<div><br></div>
<h3>⚡ Power &amp; Energy</h3>
<ol>
<li><span><strong>Power consumption (operation):</strong> ~144 W</span></li>
<li><span><strong>Standby consumption:</strong> ~0.5 W</span></li>
<li><span><strong>Power requirements:</strong> 220–240 V AC, 50/60 Hz</span></li>
<li><span><strong>Eco features:</strong> Dynamic Backlight Control, Power Saving Mode, Eco Dashboard</span></li>
</ol>
<div><br></div>
<h3>📐 Dimensions &amp; Weight</h3>
<ol>
<li><span><strong>Without stand (W × H × D):</strong> ~1445 × 831 × 57 mm</span></li>
<li><span><strong>With stand (standard position):</strong> ~1445 × 861 × 345 mm</span></li>
<li><span><strong>With stand (soundbar position):</strong> ~1445 × 901 × 345 mm</span></li>
<li><span><strong>Package carton:</strong> ~1576 × 1015 × 169 mm</span></li>
<li><span><strong>Weight (without stand):</strong> ~24.2 kg</span></li>
<li><span><strong>Weight (with stand):</strong> ~25 kg</span></li>
<li><span><strong>Gross package weight:</strong> ~33 kg</span></li>
<li><span><strong>VESA mount:</strong> 400 × 400 mm</span></li>
</ol>
<div><br></div>
<p><span>✅ In the box: AC power cord, batteries, operating instructions, quick setup guide, table-top stand, voice remote control</span></p>`,
    specifications: {},
    variants: [],
    price: 190000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/71v3q2fGkqL._AC_SL1500.jpg?v=1769424972",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/71v3q2fGkqL._AC_SL1500.jpg?v=1769424972"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-55-u7q-uleq-miniled-smart-tv-4k-144-hz",
    name: "HISENSE 55 '' U7Q | ULED MiniLED Smart TV 4K 144 Hz",
    brand: "Hisense",
    category: "televisions",
    slug: "hisense-55-u7q-uleq-miniled-smart-tv-4k-144-hz",
    description: `<p>Hisense 55U7Q – Key Specs</p>
<p>Screen size: 55″</p>
<p>Resolution: 4K Ultra HD (3840 × 2160)</p>
<p>Panel type: ULED Mini-LED</p>
<p>Built-in Subwoofer</p>
<p>Refresh rate: 144 Hz (native)</p>
<p>Local dimming: Yes (Full Array)</p>
<p>Color technology: Quantum Dot (Wide Color Gamut)</p>
<p>HDR Support</p>
<p>Dolby Vision IQ</p>
<p>HDR10+ Adaptive</p>
<p>HDR10</p>
<p>HLG</p>
<p>Gaming</p>
<p>144 Hz Game Mode Pro</p>
<p>VRR (Variable Refresh Rate)</p>
<p>Low input lag (≈7 ms @ 4K/120Hz)</p>
<p>HDMI 2.1 support</p>
<p>Audio</p>
<p>Dolby Atmos</p>
<p>DTS Virtual:X</p>
<p>Built-in subwoofer</p>
<p>Smart TV</p>
<p>Operating system: VIDAA Smart OS</p>
<p>Voice control support</p>
<p>Connectivity</p>
<p>Wi-Fi (2.4 &amp; 5 GHz)</p>
<p>Bluetooth</p>
<p>Ethernet (LAN)</p>`,
    specifications: {},
    variants: [],
    price: 75000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_99512924-982e-438e-aa60-e754fc4f1b6d.jpg?v=1768244065",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_99512924-982e-438e-aa60-e754fc4f1b6d.jpg?v=1768244065"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "jbl-bar-800mk2",
    name: "JBL Bar 800MK2",
    brand: "JBL",
    category: "speakers-soundbars",
    slug: "jbl-bar-800mk2",
    description: `<h2>JBL BAR 800MK2 Specifications</h2>
<div>
<div>
<table>
<thead>
<tr>
<th><strong><span>Category</span></strong></th>
<th><strong><span>Details</span></strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong><span>Model</span></strong></td>
<td><span>JBL </span><span>BAR </span><span>800MK2</span></td>
</tr>
<tr>
<td><strong><span>Sound </span><span>System</span></strong></td>
<td><span>7.1 </span><span>channel</span></td>
</tr>
<tr>
<td><strong><span>Total </span><span>Power </span><span>Output</span></strong></td>
<td><span>780W </span><span>max</span></td>
</tr>
<tr>
<td><strong><span>Subwoofer</span></strong></td>
<td><span>10\" </span><span>wireless </span><span>subwoofer</span></td>
</tr>
<tr>
<td><strong><span>Detachable </span><span>Speakers</span></strong></td>
<td><span>Wireless, </span><span>rechargeable, </span><span>can </span><span>be </span><span>placed </span><span>behind </span><span>for </span><span>true </span><span>surround </span><span>sound</span></td>
</tr>
<tr>
<td><strong><span>Audio </span><span>Technologies</span></strong></td>
<td><span>Dolby </span><span>Atmos®, </span><span>DTS </span><span>Virtual:X®, </span><span>MultiBeam™ </span><span>3.0</span></td>
</tr>
<tr>
<td><strong><span>Dialogue </span><span>Enhancement</span></strong></td>
<td><span>PureVoice </span><span>2.0 </span><span>(optimizes </span><span>dialogue </span><span>clarity)</span></td>
</tr>
<tr>
<td><strong><span>Sound </span><span>Enhancement</span></strong></td>
<td><span>SmartDetails </span><span>(captures </span><span>subtle </span><span>audio </span><span>details)</span></td>
</tr>
<tr>
<td><strong><span>Special </span><span>Modes</span></strong></td>
<td><span>Night </span><span>listening </span><span>mode, </span><span>broadcasting </span><span>mode </span><span>(carry </span><span>detachable </span><span>speakers </span><span>to </span><span>another </span><span>room)</span></td>
</tr>
<tr>
<td><strong><span>Connectivity</span></strong></td>
<td><span>HDMI </span><span>eARC </span><span>with </span><span>4K </span><span>Dolby </span><span>Vision </span><span>passthrough, </span><span>Bluetooth®, </span><span>AirPlay, </span><span>Google </span><span>Cast, </span><span>Spotify </span><span>Connect, </span><span>Tidal </span><span>Connect, </span><span>Roon </span><span>Ready</span></td>
</tr>
<tr>
<td><strong><span>Voice </span><span>Assistant </span><span>Support</span></strong></td>
<td><span>Works </span><span>with </span><span>Google </span><span>Assistant </span><span>&amp; </span><span>Siri </span><span>(via </span><span>linked </span><span>devices)</span></td>
</tr>
<tr>
<td><strong><span>App </span><span>Support</span></strong></td>
<td><span>JBL </span><span>ONE </span><span>App </span><span>(setup, </span><span>EQ, </span><span>calibration, </span><span>updates)</span></td>
</tr>
<tr>
<td><strong><span>Standby </span><span>Power</span></strong></td>
<td></td>
</tr>
<tr>
<td><strong><span>Calibration</span></strong></td>
<td><span>Automatic </span><span>room </span><span>calibration </span><span>for </span><span>optimized </span><span>surround </span><span>effects</span></td>
</tr>
<tr>
<td><strong><span>Battery </span><span>(Detachable </span><span>Speakers)</span></strong></td>
<td><span>Long-lasting, </span><span>rechargeable </span><span>(exact </span><span>capacity </span><span>not </span><span>listed, </span><span>but </span><span>designed </span><span>for </span><span>hours </span><span>of </span><span>playback)</span></td>
</tr>
</tbody>
</table>
</div>
<div><br></div>
</div>
<div><br></div>
<p> </p>`,
    specifications: {},
    variants: [],
    price: 100000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/LS_JBL_BAR_800MK2_3_4_RIGHT_0190_x5_71948704-2368-497a-a71f-400e1020c0a4.png?v=1768212195",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/LS_JBL_BAR_800MK2_3_4_RIGHT_0190_x5_71948704-2368-497a-a71f-400e1020c0a4.png?v=1768212195"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "jbl-bar-1300mk2",
    name: "JBL Bar 1300MK2",
    brand: "JBL",
    category: "speakers-soundbars",
    slug: "jbl-bar-1300mk2",
    description: `<h2>JBL BAR 1300MK2 Specifications</h2>
<div>
<div>
<table>
<thead>
<tr>
<th><strong><span>Category</span></strong></th>
<th><strong><span>Details</span></strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong><span>Model </span><span>Components</span></strong></td>
<td><span>BAR </span><span>1300MK2 </span><span>(soundbar), </span><span>BAR </span><span>1300MK2 </span><span>SURROUND </span><span>(detachable </span><span>speakers), </span><span>BAR </span><span>1300MK2 </span><span>SUB </span><span>(subwoofer)</span></td>
</tr>
<tr>
<td><strong><span>Sound </span><span>System</span></strong></td>
<td><span>11.1.4 </span><span>channel</span></td>
</tr>
<tr>
<td><strong><span>Power </span><span>Supply</span></strong></td>
<td><span>100–240V </span><span>AC, </span><span>~50/60Hz</span></td>
</tr>
<tr>
<td><strong><span>Total </span><span>Power </span><span>Output</span></strong></td>
<td><span>2470W </span><span>(Max. </span><span>@ </span><span>THD </span><span>1%)</span></td>
</tr>
<tr>
<td><strong><span>Soundbar </span><span>Power</span></strong></td>
<td><span>950W </span><span>(Max. </span><span>@ </span><span>THD </span><span>1%)</span></td>
</tr>
<tr>
<td><strong><span>Surround </span><span>Power</span></strong></td>
<td><span>2 </span><span>× </span><span>160W </span><span>(Max. </span><span>@ </span><span>THD </span><span>1%)</span></td>
</tr>
<tr>
<td><strong><span>Subwoofer </span><span>Power</span></strong></td>
<td><span>1200W </span><span>(Max. </span><span>@ </span><span>THD </span><span>1%)</span></td>
</tr>
<tr>
<td><strong><span>RMS </span><span>Power</span></strong></td>
<td><span>1235W </span><span>(Max. </span><span>@ </span><span>THD </span><span>1%)</span></td>
</tr>
<tr>
<td><strong><span>Soundbar </span><span>Transducers</span></strong></td>
<td><span>8 </span><span>× </span><span>(50 </span><span>× </span><span>75 </span><span>mm) </span><span>racetrack </span><span>drivers, </span><span>7 </span><span>× </span><span>1\" </span><span>(25 </span><span>mm) </span><span>tweeters, </span><span>4 </span><span>× </span><span>3\" </span><span>(75 </span><span>mm) </span><span>up-firing </span><span>full-range </span><span>drivers</span></td>
</tr>
<tr>
<td><strong><span>Surround </span><span>Transducers</span></strong></td>
<td><span>2 </span><span>× </span><span>(50 </span><span>× </span><span>90 </span><span>mm) </span><span>racetrack </span><span>drivers, </span><span>1 </span><span>× </span><span>2\" </span><span>(50 </span><span>mm) </span><span>full-range </span><span>driver, </span><span>1 </span><span>× </span><span>3\" </span><span>(75 </span><span>mm) </span><span>up-firing </span><span>full-range </span><span>driver</span></td>
</tr>
<tr>
<td><strong><span>Subwoofer </span><span>Transducers</span></strong></td>
<td><span>2 </span><span>× </span><span>8\" </span><span>(200 </span><span>mm) </span><span>drivers</span></td>
</tr>
<tr>
<td><strong><span>Frequency </span><span>Response</span></strong></td>
<td><span>33Hz </span><span>– </span><span>20kHz </span><span>(-6dB)</span></td>
</tr>
<tr>
<td><strong><span>Audio </span><span>Inputs</span></strong></td>
<td><span>Optical, </span><span>Bluetooth, </span><span>USB </span><span>(USB </span><span>playback </span><span>in </span><span>US; </span><span>service </span><span>only </span><span>in </span><span>other </span><span>regions)</span></td>
</tr>
<tr>
<td><strong><span>Connectivity</span></strong></td>
<td><span>HDMI </span><span>eARC </span><span>(4K </span><span>Dolby </span><span>Vision </span><span>passthrough), </span><span>Bluetooth®, </span><span>AirPlay, </span><span>Google </span><span>Cast, </span><span>Spotify </span><span>Connect, </span><span>Tidal </span><span>Connect, </span><span>Roon </span><span>Ready</span></td>
</tr>
<tr>
<td><strong><span>App </span><span>Support</span></strong></td>
<td><span>JBL </span><span>ONE </span><span>App </span><span>(setup, </span><span>EQ, </span><span>calibration, </span><span>updates)</span></td>
</tr>
<tr>
<td><strong><span>Battery </span><span>(Surrounds)</span></strong></td>
<td><span>7.2V, </span><span>4722mAh</span></td>
</tr>
<tr>
<td><strong><span>Playtime </span><span>(Surrounds)</span></strong></td>
<td><span>Up </span><span>to </span><span>10 </span><span>hours </span><span>(varies </span><span>by </span><span>content </span><span>&amp; </span><span>volume)</span></td>
</tr>
<tr>
<td><strong><span>Standby </span><span>Power</span></strong></td>
<td></td>
</tr>
<tr>
<td><strong><span>Operating </span><span>Temp.</span></strong></td>
<td><span>0°C </span><span>– </span><span>45°C</span></td>
</tr>
<tr>
<td><strong><span>Soundbar </span><span>Dimensions</span></strong></td>
<td><span>1030 </span><span>× </span><span>58 </span><span>× </span><span>136 </span><span>mm </span><span>/ </span><span>40.6\" </span><span>× </span><span>2.3\" </span><span>× </span><span>5.4\"</span></td>
</tr>
<tr>
<td><strong><span>Detachable </span><span>Surrounds</span></strong></td>
<td><span>202 </span><span>× </span><span>58 </span><span>× </span><span>136 </span><span>mm </span><span>/ </span><span>8\" </span><span>× </span><span>2.3\" </span><span>× </span><span>5.4\"</span></td>
</tr>
<tr>
<td><strong><span>Subwoofer </span><span>Dimensions</span></strong></td>
<td><span>315 </span><span>× </span><span>277 </span><span>× </span><span>275 </span><span>mm </span><span>/ </span><span>12.4\" </span><span>× </span><span>10.9\" </span><span>× </span><span>10.8\"</span></td>
</tr>
<tr>
<td><strong><span>Total </span><span>Dimensions</span></strong></td>
<td><span>1404 </span><span>× </span><span>58 </span><span>× </span><span>136 </span><span>mm </span><span>/ </span><span>55.3\" </span><span>× </span><span>2.3\" </span><span>× </span><span>5.4\"</span></td>
</tr>
<tr>
<td><strong><span>Soundbar </span><span>Weight</span></strong></td>
<td><span>5.93 </span><span>kg </span><span>/ </span><span>13 </span><span>lbs</span></td>
</tr>
<tr>
<td><strong><span>Surround </span><span>Weight</span></strong></td>
<td><span>1.3 </span><span>kg </span><span>/ </span><span>2.8 </span><span>lbs </span><span>(each)</span></td>
</tr>
<tr>
<td><strong><span>Subwoofer </span><span>Weight</span></strong></td>
<td><span>12 </span><span>kg </span><span>/ </span><span>26.5 </span><span>lbs</span></td>
</tr>
<tr>
<td><strong><span>Packaging </span><span>Dimensions</span></strong></td>
<td><span>1124 </span><span>× </span><span>381 </span><span>× </span><span>452 </span><span>mm </span><span>/ </span><span>44.3\" </span><span>× </span><span>15\" </span><span>× </span><span>17.8\"</span></td>
</tr>
<tr>
<td><strong><span>Packaging </span><span>Weight</span></strong></td>
<td><span>24–29 </span><span>kg </span><span>depending </span><span>on </span><span>region </span><span>(e.g., </span><span>28.6 </span><span>kg </span><span>EMEA/UK, </span><span>24.3 </span><span>kg </span><span>JP/IN/CN)</span></td>
</tr>
<tr>
<td><strong><span>Key </span><span>Features</span></strong></td>
<td><span>Dolby </span><span>Atmos® </span><span>&amp; </span><span>DTS:X®, </span><span>MultiBeam™ </span><span>3.0, </span><span>PureVoice </span><span>2.0, </span><span>AI </span><span>Sound </span><span>Boost, </span><span>detachable </span><span>wireless </span><span>speakers </span><span>(Auracast™), </span><span>night </span><span>mode, </span><span>room </span><span>calibration</span></td>
</tr>
</tbody>
</table>
</div>
</div>`,
    specifications: {},
    variants: [],
    price: 170000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/LS_JBL_SOUNDBAR_1300_MK2_DIMENSIONS_0016_x5_3c79e83d-e398-4e12-bb82-072fff60a254.png?v=1768203268",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/LS_JBL_SOUNDBAR_1300_MK2_DIMENSIONS_0016_x5_3c79e83d-e398-4e12-bb82-072fff60a254.png?v=1768203268"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "mika-fridge-529l-no-frost-side-by-side-inox",
    name: "MIKA FRIDGE 529L No frost Side By Side Inox",
    brand: "MIKA",
    category: "refrigerators",
    slug: "mika-fridge-529l-no-frost-side-by-side-inox",
    description: `<p>🧊 Fridge Section</p>
<p><span><strong>Shelves/Baskets:</strong> 6 → The main fridge compartment has six storage levels, giving flexibility for organizing food.</span></p>
<p><span><strong>Vegetable Drawers:</strong> 2 → Dedicated drawers for fresh produce, helping maintain humidity and freshness.</span></p>
<p>⚡ Performance</p>
<p><span><strong>Total Net Capacity:</strong> 529 liters → This is the combined usable space of both fridge and freezer, making it a large-capacity appliance suitable for families.</span></p>
<p><span><strong>Water Dispenser:</strong> Yes → Built-in dispenser for convenience, so you can access chilled water without opening the fridge.</span></p>
<p>📐 Design &amp; Dimensions</p>
<p><span><strong>Size (WxDxH):</strong> 910 × 670 × 1770 mm → Width 91 cm, depth 67 cm, height 177 cm. This means it’s a tall, wide appliance that requires significant kitchen space.</span></p>
<p><span><strong>Finish:</strong> Inox Dark Mat → A modern stainless steel look with a matte finish, designed to blend with contemporary kitchens.</span></p>
<p>🔌 Power</p>
<p><span><strong>Connected Load:</strong> 150W → Indicates the fridge’s electrical power requirement, which is relatively efficient for its size.</span></p>
<p>❄️ Freezer Section</p>
<p><span><strong>Star Rating:</strong> Two-star → Reflects the freezer’s efficiency and performance in maintaining frozen food.</span></p>
<p><span><strong>Net Capacity:</strong> 185 liters → The freezer compartment alone provides ample space for frozen goods.</span></p>
<p><span><strong>Shelves/Baskets:</strong> 6 → Multiple levels for organizing frozen items.</span></p>
<p><span><strong>Position:</strong> Side → This is a side-by-side fridge, meaning the freezer is positioned vertically next to the fridge compartment rather than above or below.</span></p>`,
    specifications: {},
    variants: [],
    price: 85000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/MRNF2DW529XLBV-Front.jpeg-B.jpg?v=1765804922",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/MRNF2DW529XLBV-Front.jpeg-B.jpg?v=1765804922"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "tcl-c512wdg-12kg-8kg-washer-dryer-smart-dd-motor",
    name: "TCL C512WDG 12KG/8KG Washer & Dryer Smart DD Motor",
    brand: "TCL",
    category: "washing-machines",
    slug: "tcl-c512wdg-12kg-8kg-washer-dryer-smart-dd-motor",
    description: `<p><strong>Key Features:</strong></p>
<ul>
<li data-end="178" data-start="139">· Type: Front Load Washer &amp; Dryer Combo</li>
<li data-end="206" data-start="181">· Washing Capacity: 12 KG</li>
<li data-end="232" data-start="209">· Drying Capacity: 8 KG</li>
<li data-end="287" data-start="235">· Motor Type: Smart Direct Drive (DD) Inverter Motor</li>
<li data-end="312" data-start="290">· Spin Speed: 1400 RPM</li>
<li data-end="345" data-start="315">· Display: LED Digital Display</li>
<li data-end="392" data-start="348">· Control Panel: Rotary Knob + Touch Buttons</li>
<li data-end="435" data-start="395">· Programs: Multiple Wash &amp; Dry Programs</li>
<li data-end="459" data-start="438">· Steam Function: Yes</li>
<li data-end="481" data-start="462">· Allergy Care: Yes</li>
<li data-end="512" data-start="484">· Auto Weight Detection: Yes</li>
<li data-end="541" data-start="515">· Drum Clean Function: Yes</li>
<li data-end="562" data-start="544">· Delay Start: Yes</li>
<li data-end="582" data-start="565">· Child Lock: Yes</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 65000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/C512WDG.png?v=1765804491",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/C512WDG.png?v=1765804491"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },  // ========== NEW PRODUCTS CONTINUED ==========
  {
    id: "samsung-75-inch-u8000f-4k-crystal-uhd-smart-tv",
    name: "Samsung 75 inch U8000F 4K Crystal UHD Smart TV",
    brand: "Samsung",
    category: "televisions",
    slug: "samsung-75-inch-u8000f-4k-crystal-uhd-smart-tv",
    description: `<ul>
<li><p><span><strong>Crystal Processor 4K</strong>: Upscales content to near-4K resolution for sharper detail and vibrant colors.</span></p></li>
<li><p><span><strong>4K UHD Resolution</strong>: 4x more pixels than Full HD, delivering ultra-realistic images.</span></p></li>
<li><p><span><strong>HDR (High Dynamic Range)</strong>: Enhances contrast between light and dark scenes for richer detail.</span></p></li>
<li><p><span><strong>PurColor Technology</strong>: Produces a wide color range for lifelike visuals.</span></p></li>
<li><p><span><strong>Contrast Enhancer</strong>: Adds depth by adjusting contrast dynamically.</span></p></li>
</ul>
<h3>🎨 Design</h3>
<ul>
<li><p><span><strong>MetalStream Design</strong>: Sleek, aircraft-inspired metal body with slim bezels for an immersive look.</span></p></li>
<li><p><span><strong>One UI Tizen OS</strong>: Seamless Samsung ecosystem experience with 7 years of OS upgrades starting 2025.</span></p></li>
</ul>
<h3>🔒 Security</h3>
<ul>
<li><p><span><strong>Samsung Knox Security</strong>: Protects passwords, blocks malicious apps/sites, and monitors connected IoT devices.</span></p></li>
</ul>
<h3>🎮 Gaming &amp; Motion</h3>
<ul>
<li><p><span><strong>Motion Xcelerator</strong>: Improves motion clarity for smoother visuals.</span></p></li>
</ul>
<h3>🏠 Smart Features</h3>
<ul>
<li><p><span><strong>SmartThings Hub</strong>: Connects and controls smart home devices (Matter &amp; HCA compatible).</span></p></li>
<li><p><span><strong>Samsung Daily+</strong>: Lifestyle apps like workout tracker, karaoke, and more.</span></p></li>
<li><p><span><strong>Quick Remote</strong>: Control TV directly from your phone.</span></p></li>
<li><p><span><strong>Multi Control</strong>: Use one keyboard/mouse across Galaxy devices and the TV.</span></p></li>
<li><p><span><strong>Universal Gestures</strong>: Control TV with Galaxy Watch hand gestures.</span></p></li>
</ul>
<h3>🔊 Audio</h3>
<ul>
<li><p><span><strong>Q-Symphony</strong>: Syncs TV speakers with Samsung soundbars for richer sound.</span></p></li>
<li><p><span><strong>OTS Lite</strong>: Virtual 3D surround sound with top-channel audio.</span></p></li>
<li><p><span><strong>Adaptive Sound</strong>: Optimizes audio based on scene analysis.</span></p></li>
</ul>
<h3>🌱 Sustainability</h3>
<ul>
<li><p><span><strong>AI Energy Mode</strong>: Adjusts brightness based on ambient light and content to save energy.</span></p></li>
</ul>
<h3>⚙️ Specs</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr>
<td>Screen Size</td>
<td>75"</td>
</tr>
<tr>
<td>Resolution</td>
<td>4K (3840 × 2160)</td>
</tr>
<tr>
<td>Refresh Rate</td>
<td>50Hz</td>
</tr>
<tr>
<td>Product Type</td>
<td>LED</td>
</tr>
<tr>
<td>OS</td>
<td>Tizen </td>
</tr>
</tbody>
</table>
</div>
</div>`,
    specifications: {},
    variants: [],
    price: 125000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/africa-en-uhd-4k-tv-ua75u8000fuxke-front-black-547502132.jpg?v=1763543604",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/africa-en-uhd-4k-tv-ua75u8000fuxke-front-black-547502132.jpg?v=1763543604"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "2kwh-vestwoods-power-station",
    name: "2kWh Vestwoods Power Station",
    brand: "Vestwoods",
    category: "chargers-accessories",
    slug: "2kwh-vestwoods-power-station",
    description: `<p>2kWh Vestwoods Power Station </p>
<p>Top 19 Reasons to Buy the 2kWh Vestwoods Power Station</p>
<p>1. Long-Life LiFePO₄ Battery</p>
<p>Built with premium LiFePO₄ cells that offer up to 4,000–5,000 charge cycles, ensuring many years of dependable service.</p>
<p>2. Enhanced Safety</p>
<p>Comes with an intelligent Battery Management System (BMS) for protection against overcharging, overheating, and short circuits.</p>
<p>3. Reliable Performance</p>
<p>Delivers stable and clean power suitable for sensitive electronics such as TVs, routers, laptops, and medical devices.</p>
<p>4. 1000W Continuous Output</p>
<p>Powers essential appliances including fridges, TVs, fans, lighting systems, and small kitchen appliances with ease.</p>
<p>5. Fast Charging Options</p>
<p>Supports both AC charging and solar DC charging, allowing for quick and flexible recharging.</p>
<p>6. Solar-Ready Power Station</p>
<p>Ideal for off-grid setups thanks to its wide DC input range (10–100V), making solar integration simple and efficient.</p>
<p>7. Highly Efficient Battery Use</p>
<p>LiFePO₄ offers excellent energy efficiency, giving you more usable power per charge compared to traditional batteries.</p>
<p>8. Portable and Compact Design</p>
<p>Easy to move and set up anywhere—perfect for homes, offices, camping, outdoor events, and small businesses.</p>
<p>9. Low Maintenance</p>
<p>Unlike lead-acid batteries, LiFePO₄ technology requires almost no maintenance, saving you time and money.</p>
<p>10. Environmentally Friendly</p>
<p>Made with non-toxic materials and designed for long life, reducing electronic waste and environmental impact.</p>
<p>11. Low Self-Discharge Rate</p>
<p>Holds charge for long periods, making it reliable even if stored for emergency use.</p>
<p>12. Durable in All Climates</p>
<p>Performs well in a wide range of temperatures, ideal for Kenya’s diverse weather conditions.</p>
<p>13. Quiet, Non-Fuel Operation</p>
<p>No fumes, no noise, and no fuel costs—perfect for indoor and night-time use.</p>
<p>14. Versatile Application</p>
<p>Powers household appliances, work tools, medical equipment, CCTV systems, and more.</p>
<p>15. Digital Display &amp; Mobile App</p>
<p>Monitor battery status, input/output power, and run-times directly from the display or via Bluetooth.</p>
<p>16. Cost-Effective Long-Term Investment</p>
<p>With decades of usable life and zero fuel expenses, it offers excellent return on investment.</p>
<p>17. Perfect for Power Outages</p>
<p>Keeps your essential devices running during blackouts—fridges, lights, routers, and phones stay powered.</p>
<p>18. Compatible With Hybrid Setups</p>
<p>Can be integrated with solar systems or used alongside your inverter for extended backup time.</p>
<p>19. Trusted Local Support</p>
<p>Comes from a reputable supplier with local availability, warranty assistance, and after-sales support. </p>`,
    specifications: {},
    variants: [],
    price: 69999,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_0376ef61-b903-4d66-9b76-1579d2fd9450.webp?v=1763364186",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_0376ef61-b903-4d66-9b76-1579d2fd9450.webp?v=1763364186"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "skyworth-60-60q6500h-qled-4k-google-tv",
    name: "Skyworth 60″ 60Q6500H QLED+ 4K Google TV",
    brand: "Skyworth",
    category: "televisions",
    slug: "skyworth-60-60q6500h-qled-4k-google-tv",
    description: `<p>Key Features</p>
<p>Display: 60″ QLED (Quantum Dot LED) Panel</p>
<p>Resolution: 4K Ultra HD (3840 × 2160)</p>
<p>Colour Technology: Quantum Dot + Dynamic Colour Enhancement</p>
<p>Refresh Rate: 60 Hz (Smooth Motion Rate)</p>
<p>HDR Support: Dolby Vision / HDR10+ / HLG</p>
<p>Smart OS: Google TV (Latest Edition 2025)</p>
<p>Voice Assistants: Google Assistant &amp; Works with Alexa</p>
<p>Casting: Chromecast Built-in &amp; Miracast Support</p>
<p>Audio: Dolby Atmos &amp; Dolby Audio Sound Enhancement</p>
<p>Connectivity: Dual-Band Wi-Fi + Ethernet (LAN)</p>
<p>Bluetooth: Yes (Bluetooth 5.x) – Pair Headphones &amp; Speakers</p>
<p>Ports: 3 × HDMI (1 with eARC) | 2 × USB | Optical Out | AUX | LAN</p>
<p>Eye-Care Features: Low Blue Light &amp; Flicker-Free Display</p>
<p>Design: Slim Bezels / Boundless Screen / VESA Wall Mount Support</p>
<p>Processor: Quad-Core Smart Processor with AI Picture Optimisation</p>
<p>Power Consumption: ≤ 130 W (typical)</p>
<p>Warranty: 1-Year Official Skyworth Warranty</p>
<p>Free wall bracket and Tv Guard </p>`,
    specifications: {},
    variants: [],
    price: 55000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_08b076a8-1250-486c-8fe9-1f894befe24f.webp?v=1763238626",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_08b076a8-1250-486c-8fe9-1f894befe24f.webp?v=1763238626"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "tcl-43-inch-s5k-2k-qled-tv",
    name: "TCL 43 inch S5K 2K QLED TV",
    brand: "TCL",
    category: "televisions",
    slug: "tcl-43-inch-s5k-2k-qled-tv",
    description: `<p>· 2K QLED</p>
<p>· FHD</p>
<p>· HDR 10</p>
<p>· Dolby Audio</p>
<p>· Google Cast</p>
<p>· Slim Design</p>
<p>· Multiple Viewing Mode</p>
<p>Choose your model.</p>`,
    specifications: {},
    variants: [],
    price: 26000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_7dfa84df-cdcb-48b6-85ea-a7181b5d10e3.webp?v=1763035313",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_7dfa84df-cdcb-48b6-85ea-a7181b5d10e3.webp?v=1763035313"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "tcl-50-inch-s5k-2k-qled-tv",
    name: "TCL 50 inch S5K 2K QLED TV",
    brand: "TCL",
    category: "televisions",
    slug: "tcl-50-inch-s5k-2k-qled-tv",
    description: `<p>TCL S5K QLED TV</p>
<p>·2K  QLED</p>
<p>· FHD</p>
<p>· HDR 10</p>
<p>· Dolby Audio</p>
<p>· Google Cast</p>
<p>· Slim Design</p>
<p>· Multiple Viewing Mode</p>`,
    specifications: {},
    variants: [],
    price: 36000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_97f196c5-af20-4f33-9c24-6f53ea709d9d.webp?v=1763034976",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_97f196c5-af20-4f33-9c24-6f53ea709d9d.webp?v=1763034976"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-65-inch-q6n-qled-4k-vidaa-smart-tv",
    name: "Hisense 65 Inch Q6N QLED 4K VIDAA Smart TV",
    brand: "Hisense",
    category: "televisions",
    slug: "hisense-65-inch-q6n-qled-4k-vidaa-smart-tv",
    description: `<p>Display and picture</p>
<p>Screen Size: 65 inches</p>
<p>Resolution: 4K Ultra HD (3840 x 2160)</p>
<p>Display Technology: QLED with Quantum Dot Colour</p>
<p>Refresh Rate: 120 Motion Rate (60Hz native)</p>
<p>HDR Support: Dolby Vision and HDR10+</p>
<p>Picture Enhancement: 4K AI Upscaler, Depth Enhancer, and Filmmaker Mode </p>
<p>Audio</p>
<p>Sound Technology: Dolby Atmos </p>
<p>Smart TV and connectivity</p>
<p>Operating System: VIDAA Smart TV OS</p>
<p>Voice Control: Compatible with Google Assistant and Amazon Alexa</p>
<p>Connectivity:</p>
<p>Multiple HDMI and USB ports</p>
<p>Ethernet</p>
<p>Wi-Fi</p>
<p>Bluetooth 5.3 </p>
<p>Gaming features</p>
<p>Game Mode Plus: Provides a smooth and immersive gaming experience </p>
<p>Design</p>
<p>Dimensions with stand (65"): 1453 x 897 x 299 mm</p>
<p>Dimensions without stand (65"): 1453 x 840 x 76 mm</p>
<p>Weight: 15.2kg (with stand) / 15kg (without stand) </p>`,
    specifications: {},
    variants: [],
    price: 65000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_724b2d7a-e3bb-401b-b6af-cbf1edad1b9a.jpg?v=1763033914",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_724b2d7a-e3bb-401b-b6af-cbf1edad1b9a.jpg?v=1763033914"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "sony-65-s20-bravia-2-4k-hdr-google-tv-65s20",
    name: "Sony 65” S20 Bravia 2 4K HDR Google TV – 65S20",
    brand: "Sony",
    category: "televisions",
    slug: "sony-65-s20-bravia-2-4k-hdr-google-tv-65s20",
    description: `<p> </p>
<p>1. 📺 Display Size: 65 inches (Class 65) 4K Ultra HD (3840 × 2160 pixels).</p>
<p> 2. ⚙️ Processor: Sony 4K Processor X1 — enhances color, contrast, and clarity.</p>
<p> 3. 🎨 Display Technology: Direct LED panel with 4K HDR support (HDR10 / HLG).</p>
<p> 4. 🧠 Smart Platform: Google TV (OS based on Android TV) with Google Assistant built-in.</p>
<p> 5. 🎮 Gaming Features: HDMI 2.1 support with VRR (Variable Refresh Rate) and ALLM (Auto Low Latency Mode).</p>
<p> 6. 🔊 Audio System: 20 W (2-channel) Open Baffle Speakers with Dolby Audio and DTS Digital Surround.</p>
<p> 7. 📡 Connectivity: 4 × HDMI, 2 × USB, Ethernet LAN, Wi-Fi 5 (dual band), Bluetooth v5.0, Chromecast built-in.</p>
<p> 8. 🌐 Voice &amp; Smart Control: Works with Google Assistant, Alexa and Apple Home via AirPlay 2 and HomeKit.</p>
<p> 9. 🧩 Design: Slim bezel design with 2-way stand position (standard / soundbar fit).</p>
<p> 10. 🌱 Energy &amp; Build: Eco-friendly packaging (reduced CO₂ footprint) and power-saving modes.</p>
<p>11. Free TV Guard and Wall bracket.</p>
<p> </p>`,
    specifications: {},
    variants: [],
    price: 110000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_786aa8ff-1e20-4219-9eb9-9179e2115973.webp?v=1761813538",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_786aa8ff-1e20-4219-9eb9-9179e2115973.webp?v=1761813538"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "tcl-65-c8k-premium-qd-miniled-tv",
    name: "TCL 65\" C8K Premium QD-MiniLED TV",
    brand: "TCL",
    category: "televisions",
    slug: "tcl-65-c8k-premium-qd-miniled-tv",
    description: `<p>· Precise Dimming Series Up to 3840 Zones</p>
<p>· HDR 4500 nits</p>
<p>· QLED</p>
<p>· CrystGlow WHVA Panel</p>
<p>· ZeroBorder™</p>
<p>· 144Hz Native Refresh Rate</p>
<p>· Audio by Bang &amp; Olufsen</p>
<p>· Slim and Integrated Design </p>`,
    specifications: {},
    variants: [],
    price: 140000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_641834c1-3abe-4888-b7f9-b39c3e77772a.webp?v=1761121098",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_641834c1-3abe-4888-b7f9-b39c3e77772a.webp?v=1761121098"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "tcl-75-c8k-premium-qd-miniled-tv",
    name: "TCL 75\" C8K Premium QD-MiniLED TV",
    brand: "TCL",
    category: "televisions",
    slug: "tcl-75-c8k-premium-qd-miniled-tv",
    description: `<p>· Precise Dimming Series Up to 3840 Zones</p>
<p>· HDR 4500 nits</p>
<p>· QLED</p>
<p>· CrystGlow WHVA Panel</p>
<p>· ZeroBorder™</p>
<p>· 144Hz Native Refresh Rate</p>
<p>· Audio by Bang &amp; Olufsen</p>
<p>· Slim and Integrated Design</p>`,
    specifications: {},
    variants: [],
    price: 185000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_4261f81b-8f71-4a7d-8b5c-e8753640b9ab.webp?v=1761120849",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_4261f81b-8f71-4a7d-8b5c-e8753640b9ab.webp?v=1761120849"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "tcl-85-c8k-premium-qd-miniled-tv",
    name: "TCL 85\" C8K Premium QD-MiniLED TV",
    brand: "TCL",
    category: "televisions",
    slug: "tcl-85-c8k-premium-qd-miniled-tv",
    description: `<p>· Precise Dimming Series Up to 3840 Zones</p>
<p>· HDR 5000 nits</p>
<p>· QLED</p>
<p>· CrystGlow WHVA Panel</p>
<p>· ZeroBorder™</p>
<p>· 144Hz Native Refresh Rate</p>
<p>· Audio by Bang &amp; Olufsen</p>
<p>· Slim and Integrated Design</p>`,
    specifications: {},
    variants: [],
    price: 240000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_4f62095a-9bfa-4cb2-b28c-27210c2c5687.webp?v=1761120330",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_4f62095a-9bfa-4cb2-b28c-27210c2c5687.webp?v=1761120330"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "sony-75-s30-bravia-3-4k-hdr-google-tv-75s30",
    name: "Sony 75” S30 Bravia 3 4K HDR Google TV – 75S30",
    brand: "Sony",
    category: "televisions",
    slug: "sony-75-s30-bravia-3-4k-hdr-google-tv-75s30",
    description: `<h3>🎥 <strong>Picture Quality</strong>
</h3>
<ul>
<li><p><span><strong>4K HDR Processor X1™</strong>: Real-time enhancement of color, contrast, and clarity.</span></p></li>
<li><p><span><strong>Triluminos Pro™</strong>: Displays over a billion accurate colors for vivid, lifelike visuals.</span></p></li>
<li><p><span><strong>4K X-Reality™ PRO</strong>: Upscales content to near-4K resolution, restoring lost detail.</span></p></li>
<li><p><span><strong>Motionflow XR™</strong>: Reduces blur in fast-moving scenes for smoother viewing.</span></p></li>
<li><p><span><strong>Dolby Vision®</strong>: Delivers cinematic visual experience.</span></p></li>
</ul>
<div><br></div>
<h3>🔊 <strong>Audio Experience</strong>
</h3>
<ul>
<li><p><span><strong>X-Balanced Speaker™</strong>: Clear, natural sound.</span></p></li>
<li><p><span><strong>Dolby Atmos®</strong>: Immersive surround sound.</span></p></li>
<li><p><span><strong>Sony Soundbar Compatibility</strong>: Pair for a cinema-like experience.</span></p></li>
</ul>
<div><br></div>
<h3>📺 <strong>Smart TV &amp; Streaming</strong>
</h3>
<ul>
<li><p><span><strong>Google TV™</strong>: Access all your favorite streaming apps in one place.</span></p></li>
<li><p><span><strong>Google Assistant™</strong>: Voice control for search and navigation.</span></p></li>
<li><p><span><strong>Streaming Apps</strong>: Includes Netflix, Prime Video, Disney+, YouTube, Apple TV, Crunchyroll, and more.</span></p></li>
<li><p><span><strong>AirPlay® 2 &amp; Chromecast Built-in™</strong>: Stream content from your devices.</span></p></li>
<li><p><span><strong>SONY PICTURES CORE</strong>: Get movies included (formerly BRAVIA CORE).</span></p></li>
</ul>
<div><br></div>
<h3>🎮 <strong>Gaming Features</strong>
</h3>
<ul>
<li><p><span><strong>PS5® Optimization</strong>: Auto HDR Tone Mapping &amp; Auto Genre Picture Mode.</span></p></li>
<li><p><span><strong>Game Menu</strong>: Centralized access to gaming settings and assist features.</span></p></li>
</ul>
<div><br></div>
<h3>🖼️ <strong>Design &amp; Eco Features</strong>
</h3>
<ul>
<li><p><span><strong>Minimal Flush Surface Bezel</strong>: Sleek, immersive design.</span></p></li>
<li><p><span><strong>Slim Stand</strong>: Stylish and space-efficient.</span></p></li>
<li><p><span><strong>Eco Dashboard</strong>: Manage energy efficiency settings easily.</span></p></li>
</ul>`,
    specifications: {},
    variants: [],
    price: 175000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/55s30-sony-55-2.webp?v=1760693424",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/55s30-sony-55-2.webp?v=1760693424"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "skyworth-43-qled-q5600h-google-tv",
    name: "SKYWORTH 43\" QLED Q5600H GOOGLE TV",
    brand: "Skyworth",
    category: "televisions",
    slug: "skyworth-43-qled-q5600h-google-tv",
    description: `<ul>
<li>skyworth 43″ 2K QLED Google TV</li>
<li>Internal Memory: 8GB (8GB Inclusive of Pre-Installed Applications)</li>
<li>Prolonged Vivid QLED+</li>
<li>Flicker Free</li>
<li>Low Blue Light</li>
<li>Find-my Remote</li>
<li>HDR 10 &amp; HLG</li>
<li>Dolby Audio</li>
<li>Daily Family 2.0</li>
<li>Netflix TV</li>
<li>YouTube TV</li>
<li>HDMI*2</li>
<li>USB*2</li>
<li>Digital Audio in</li>
<li>LAN</li>
<li>DVB-C/T/T2</li>
<li>Free Tv guard and Wall bracket</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 26000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Skyworth-43-Inch-Q5600H-QLED-FHD-Google-TV-1_jpg.webp?v=1760684138",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Skyworth-43-Inch-Q5600H-QLED-FHD-Google-TV-1_jpg.webp?v=1760684138"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "jbl-partybox-club-120",
    name: "JBL PartyBox Club 120",
    brand: "JBL",
    category: "speakers-soundbars",
    slug: "jbl-partybox-club-120",
    description: `<h3>🔊 <strong>General Specifications</strong>
</h3>
<ul>
<li><p><span><strong>Output Power</strong>: 160W</span></p></li>
</ul>
<h3>🎵 <strong>Audio Specifications</strong>
</h3>
<ul>
<li><p><span><strong>Frequency Response</strong>: 40 Hz – 20 kHz (-6dB)</span></p></li>
</ul>
<h3>📐 <strong>Dimensions &amp; Weight</strong>
</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Metric</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>Dimensions (cm)</td>
<td>28.8 x 57 x 29.7</td>
</tr>
<tr>
<td>Dimensions (in)</td>
<td>11.4 x 22.4 x 11.7</td>
</tr>
<tr>
<td>Weight (kg)</td>
<td>11.05</td>
</tr>
<tr>
<td>Weight (lbs)</td>
<td>24.4</td>
</tr>
</tbody>
</table>
</div>
<div><br></div>
</div>
<h3>🔋 <strong>Battery</strong>
</h3>
<ul>
<li><p><span><strong>Charging Time</strong>: 3.5 hours</span></p></li>
<li><p><span><strong>Play Time</strong>: Up to 12 hours</span></p></li>
</ul>
<h3>📡 <strong>Connectivity</strong>
</h3>
<ul>
<li><p><span><strong>Bluetooth Version</strong>: 5.3</span></p></li>
<li><p><span><strong>3.5 mm Audio Input</strong>: Yes</span></p></li>
<li><p><span><strong>AC Power Cable</strong>: Yes</span></p></li>
<li><p><span><strong>Multi-point Connection</strong>: Yes</span></p></li>
<li><p><span><strong>Supports Auracast</strong>: Yes</span></p></li>
</ul>
<h3>💡 <strong>Features</strong>
</h3>
<ul>
<li><p><span><strong>AI Sound Boost</strong>: Yes</span></p></li>
<li><p><span><strong>Lightshow</strong>: Yes</span></p></li>
<li><p><span><strong>Splashproof Rating</strong>: IPX4</span></p></li>
<li><p><span><strong>Karaoke Function</strong>: Yes</span></p></li>
<li><p><span><strong>Mic-In</strong>: Yes</span></p></li>
<li><p><span><strong>Guitar-In</strong>: Yes</span></p></li>
<li><p><span><strong>Dual Mic &amp; Guitar Inputs</strong>: Yes</span></p></li>
</ul>`,
    specifications: {},
    variants: [],
    price: 42000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_1c842528-5280-450d-af7a-eae5695ca518.webp?v=1760439214",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_1c842528-5280-450d-af7a-eae5695ca518.webp?v=1760439214"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "tcl-q85h-pro-7-1-4-channel-sound-bar-with-dolby-atmos-wireless-subwoofer-and-wireless-surround-speakers",
    name: "TCL Q85H  Pro 7.1.4 Channel Sound Bar with Dolby Atmos, Wireless Subwoofer, and Wireless Surround Speakers",
    brand: "TCL",
    category: "speakers-soundbars",
    slug: "tcl-q85h-pro-7-1-4-channel-sound-bar-with-dolby-atmos-wireless-subwoofer-and-wireless-surround-speakers",
    description: `<div>
<div><br></div>
</div>
<table></table>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Specification</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Model</strong></td>
<td>Q85H Pro</td>
</tr>
<tr>
<td><strong>Description</strong></td>
<td>7.1.4 Ch Soundbar with Wireless Subwoofer</td>
</tr>
<tr>
<td><strong>Audio Power</strong></td>
<td>860W (Peak)</td>
</tr>
<tr>
<td><strong>Power Supply</strong></td>
<td>AC 100V–240V, 50/60Hz</td>
</tr>
</tbody>
</table>
<div><br></div>
<div><br></div>
<h3>🧠 System Features</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Channels</strong></td>
<td>7.1.4 CH</td>
</tr>
<tr>
<td><strong>LED Indicator</strong></td>
<td>Yes (Display)</td>
</tr>
<tr>
<td><strong>Keypad Controls</strong></td>
<td>On/Off, Inputs, Bluetooth, Volume -/+, etc.</td>
</tr>
<tr>
<td><strong>AI-Sonic Adaptation</strong></td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>
<div><br></div>
</div>
<div><br></div>
<h3>📣 Soundbar</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Component</th>
<th>Specification</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Drivers</strong></td>
<td>3 × (52mm × 86mm), 4 × (56mm × 80mm)</td>
</tr>
<tr>
<td><strong>Upfiring Drivers</strong></td>
<td>2 × 2"</td>
</tr>
<tr>
<td><strong>Tweeters</strong></td>
<td>3 × 1.2"</td>
</tr>
<tr>
<td><strong>Dolby Processing</strong></td>
<td>Dolby Atmos</td>
</tr>
<tr>
<td><strong>Pass Through</strong></td>
<td>4K, Dolby Vision compatible</td>
</tr>
<tr>
<td><strong>EQ Modes</strong></td>
<td>Music, Voice, Movie, Sports, Game, Standard</td>
</tr>
<tr>
<td><strong>DTS:X</strong></td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>
<div><br></div>
</div>
<div><br></div>
<h3>🔊 Subwoofer</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Specification</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Type</strong></td>
<td>Wireless</td>
</tr>
<tr>
<td><strong>Driver Size</strong></td>
<td>6.5"</td>
</tr>
<tr>
<td><strong>Power Supply</strong></td>
<td>AC 100V–240V, 50/60Hz</td>
</tr>
</tbody>
</table>
</div>
<div><br></div>
</div>
<div><br></div>
<h3>🔊 Rear Speakers</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Specification</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Type</strong></td>
<td>Wireless</td>
</tr>
<tr>
<td><strong>Driver Size</strong></td>
<td>2 × 56mm × 80mm (Forward), 2 × 54mm × 80mm (Upfiring)</td>
</tr>
<tr>
<td><strong>Power Supply</strong></td>
<td>AC 100V–240V, 50/60Hz</td>
</tr>
</tbody>
</table>
</div>
<div><br></div>
</div>
<div><br></div>
<h3>🔌 Connections</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Input/Output</th>
<th>Availability</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>HDMI Input</strong></td>
<td>Yes (2x HDMI 2.1)</td>
</tr>
<tr>
<td><strong>HDMI ARC/eARC</strong></td>
<td>Yes</td>
</tr>
<tr>
<td><strong>Bluetooth</strong></td>
<td>Yes (v5.1)</td>
</tr>
<tr>
<td><strong>Optical</strong></td>
<td>Yes</td>
</tr>
<tr>
<td><strong>USB Playback</strong></td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>
<div><br></div>
</div>
<div><br></div>
<h3>🎵 USB Audio Support</h3>
<ul>
<li><p><span>MP3</span></p></li>
<li><p><span>WMA</span></p></li>
<li><p><span>FLAC</span></p></li>
<li><p><span>WAV</span></p></li>
</ul>
<div><br></div>
<h3>🌐 Connectivity</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Availability</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>WiFi</strong></td>
<td>Yes</td>
</tr>
<tr>
<td><strong>Apple AirPlay</strong></td>
<td>Yes</td>
</tr>
<tr>
<td><strong>TCL Home App</strong></td>
<td>Compatible</td>
</tr>
</tbody>
</table>
</div>
<div><br></div>
</div>
<div><br></div>
<h3>⚡ Energy Info</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Component</th>
<th>Power Consumption</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Soundbar (SB)</strong></td>
<td>58W</td>
</tr>
<tr>
<td><strong>Subwoofer (SW)</strong></td>
<td>40W</td>
</tr>
<tr>
<td><strong>Rear Speakers</strong></td>
<td>2 × 20W</td>
</tr>
<tr>
<td><strong>Standby Power</strong></td>
<td>&lt;0.5W (each)</td>
</tr>
<tr>
<td><strong>Network Standby</strong></td>
<td>Sleep &lt;2W</td>
</tr>
</tbody>
</table>
</div>
<div><br></div>
</div>
<div><br></div>
<h3>📦 Accessories Included</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Item</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Warranty Info</strong></td>
<td>English</td>
</tr>
<tr>
<td><strong>Quick Start Guide</strong></td>
<td>English</td>
</tr>
<tr>
<td><strong>Power Cords</strong></td>
<td>Detachable, 1.5m (SB &amp; SW)</td>
</tr>
<tr>
<td><strong>HDMI Cable</strong></td>
<td>Yes</td>
</tr>
<tr>
<td><strong>Wall Mount Kit</strong></td>
<td>Yes</td>
</tr>
<tr>
<td><strong>Remote Control</strong></td>
<td>Yes (2 × AAA batteries)</td>
</tr>
</tbody>
</table>
</div>
<div><br></div>
</div>
<div><br></div>
<h3>📏 Product &amp; Package Dimensions</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Component</th>
<th>Size (WxHxD)</th>
<th>Weight</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Soundbar</strong></td>
<td>1054 × 68 × 123.5 mm</td>
<td>5.62 kg</td>
</tr>
<tr>
<td><strong>Subwoofer</strong></td>
<td>220 × 368.66 × 275 mm</td>
<td>6.38 kg</td>
</tr>
<tr>
<td><strong>Rear Speakers</strong></td>
<td>100 × 167 × 122 mm</td>
<td>1.19 kg</td>
</tr>
<tr>
<td><strong>Package Size</strong></td>
<td>1129 × 292 × 523 mm</td>
<td>19.68 kg</td>
</tr>
</tbody>
</table>
</div>
</div>`,
    specifications: {},
    variants: [],
    price: 52000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/720x480__0000s_0000_Q85H_Hero.png?v=1760337281",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/720x480__0000s_0000_Q85H_Hero.png?v=1760337281"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "tcl-q75h-5-1-2-channel-soundbar-with-dolby-atmos-ray-danz-technology-and-wireless-subwoofer",
    name: "TCL Q75H 5.1.2 Channel Soundbar with Dolby Atmos, Ray Danz Technology, and Wireless Subwoofer",
    brand: "TCL",
    category: "speakers-soundbars",
    slug: "tcl-q75h-5-1-2-channel-soundbar-with-dolby-atmos-ray-danz-technology-and-wireless-subwoofer",
    description: `<ul>
<li>
<h3>🧠 <strong>Core Overview</strong>
</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Model</strong></td>
<td>Q75H</td>
</tr>
<tr>
<td><strong>System Type</strong></td>
<td>5.1.2 Channel Sound Bar</td>
</tr>
<tr>
<td><strong>Total Audio Power</strong></td>
<td>Up to 620 Watts</td>
</tr>
<tr>
<td><strong>Total Speakers</strong></td>
<td>11</td>
</tr>
<tr>
<td><strong>Sound Bar Length</strong></td>
<td>41.5" (105.4 cm)</td>
</tr>
</tbody>
</table>
</div>
<div><br></div>
</div>
<div><br></div>
<h3>🔊 <strong>Audio Technologies</strong>
</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Included</th>
</tr>
</thead>
<tbody>
<tr>
<td>Dolby Atmos</td>
<td>✅</td>
</tr>
<tr>
<td>DTS:X</td>
<td>✅</td>
</tr>
<tr>
<td>DTS Virtual:X</td>
<td>✅</td>
</tr>
<tr>
<td>Ray Danz Technology</td>
<td>✅ with Acoustic Reflectors</td>
</tr>
<tr>
<td>Up-Firing Speakers</td>
<td>✅</td>
</tr>
<tr>
<td>Tweeters</td>
<td>✅</td>
</tr>
<tr>
<td>Room Calibration</td>
<td>TCL AI Sonic</td>
</tr>
<tr>
<td>EQ Modes</td>
<td>Standard, Movie, Music, Voice, Game, Sports</td>
</tr>
</tbody>
</table>
</div>
<div><br></div>
</div>
<div><br></div>
<h3>📱 <strong>Smart Features</strong>
</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Supported</th>
</tr>
</thead>
<tbody>
<tr>
<td>TCL TV Ready</td>
<td>✅</td>
</tr>
<tr>
<td>Roku TV Ready</td>
<td>✅</td>
</tr>
<tr>
<td>TCL Home Connect App</td>
<td>✅</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td>Bluetooth Version</td>
<td>5.1</td>
</tr>
</tbody>
</table>
</div>
<div><br></div>
</div>
<div><br></div>
<h3>🔌 <strong>Inputs &amp; Connectivity</strong>
</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Input Type</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr>
<td>HDMI</td>
<td>Yes (2.0)</td>
</tr>
<tr>
<td>HDMI eARC</td>
<td>Yes (2.1)</td>
</tr>
<tr>
<td>Optical Digital Audio</td>
<td>✅</td>
</tr>
<tr>
<td>USB Audio Playback</td>
<td>✅</td>
</tr>
<tr>
<td>USB Audio Formats</td>
<td>MP3, WMA, FLAC, WAV</td>
</tr>
<tr>
<td>Software Upgrade</td>
<td>Via USB &amp; TCL Home App</td>
</tr>
</tbody>
</table>
</div>
<div><br></div>
</div>
<div><br></div>
<h3>📦 <strong>Subwoofer &amp; Accessories</strong>
</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Component</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr>
<td>Subwoofer</td>
<td>Wireless, 6.5" Driver, Detachable Power Cord</td>
</tr>
<tr>
<td>Accessories</td>
<td>Remote + Batteries, HDMI Cable (1.5M), Wall Mount Kit &amp; Template, QSG, Online Manual</td>
</tr>
</tbody>
</table>
</div>
<div><br></div>
</div>
<div><br></div>
<h3>📏 <strong>Dimensions &amp; Weight</strong>
</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Component</th>
<th>Size (WxHxD)</th>
<th>Weight (kg)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Sound Bar</td>
<td>105.4 x 12.3 x 6.8 cm</td>
<td><strong>5.39 kg</strong></td>
</tr>
<tr>
<td>Subwoofer</td>
<td>22 x 36.9 x 27.1 cm</td>
<td><strong>6.09 kg</strong></td>
</tr>
<tr>
<td>Package</td>
<td>113.8 x 51.3 x 29.2 cm</td>
<td><strong>13.97 kg</strong></td>
</tr>
</tbody>
</table>
</div>
</div>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 40000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Q75H-1_8e466d15-6a54-450e-b08b-88cd46cb25fd.png?v=1759906429",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Q75H-1_8e466d15-6a54-450e-b08b-88cd46cb25fd.png?v=1759906429"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "tcl-q65h-5-1-channel-soundbar-with-dolby-atmos-dts-x-sound-bar-with-subwoofer",
    name: "TCL Q65H  5.1 Channel Soundbar with Dolby Atmos & DTS:X Sound Bar with Subwoofer",
    brand: "TCL",
    category: "speakers-soundbars",
    slug: "tcl-q65h-5-1-channel-soundbar-with-dolby-atmos-dts-x-sound-bar-with-subwoofer",
    description: `<ul>
<li>
<h3>🧠 <strong>Core Overview</strong>
</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Model</strong></td>
<td>Q65H</td>
</tr>
<tr>
<td><strong>System Type</strong></td>
<td>5.1 Channel Sound Bar</td>
</tr>
<tr>
<td><strong>Total Audio Power</strong></td>
<td>Up to 580 Watts</td>
</tr>
<tr>
<td><strong>Sound Bar Length</strong></td>
<td>41.5" (105.4 cm)</td>
</tr>
</tbody>
</table>
</div>
<div><br></div>
</div>
<div><br></div>
<h3>🔊 <strong>Audio Technologies</strong>
</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Included</th>
</tr>
</thead>
<tbody>
<tr>
<td>Dolby Atmos</td>
<td>✅</td>
</tr>
<tr>
<td>DTS:X</td>
<td>✅</td>
</tr>
<tr>
<td>DTS Virtual:X</td>
<td>✅</td>
</tr>
<tr>
<td>Ray Danz Technology</td>
<td>✅ with Acoustic Reflectors</td>
</tr>
<tr>
<td>Up-Firing Speakers</td>
<td>✅</td>
</tr>
<tr>
<td>Tweeters</td>
<td>✅</td>
</tr>
<tr>
<td>Room Calibration</td>
<td>AI Sonic-Adaptation</td>
</tr>
<tr>
<td>EQ Modes</td>
<td>Standard, Movie, Music, Voice, Game, Sports</td>
</tr>
</tbody>
</table>
</div>
<div><br></div>
</div>
<div><br></div>
<h3>📱 <strong>Smart Features</strong>
</h3>
<div>
<div>
<table style="width: 100.065%; height: 117.5px;">
<thead>
<tr style="height: 19.5833px;">
<th style="width: 65.3398%; height: 19.5833px;">Feature</th>
<th style="width: 31.4887%; height: 19.5833px;">Supported</th>
</tr>
</thead>
<tbody>
<tr style="height: 19.5833px;">
<td style="width: 65.3398%; height: 19.5833px;">TCL TV Ready</td>
<td style="width: 31.4887%; height: 19.5833px;">✅</td>
</tr>
<tr style="height: 19.5833px;">
<td style="width: 65.3398%; height: 19.5833px;">Roku TV Ready</td>
<td style="width: 31.4887%; height: 19.5833px;">✅</td>
</tr>
<tr style="height: 19.5833px;">
<td style="width: 65.3398%; height: 19.5833px;">TCL Home Connect App</td>
<td style="width: 31.4887%; height: 19.5833px;">✅</td>
</tr>
<tr style="height: 19.5833px;">
<td style="width: 65.3398%; height: 19.5833px;"></td>
<td style="width: 31.4887%; height: 19.5833px;"></td>
</tr>
<tr style="height: 19.5833px;">
<td style="width: 65.3398%; height: 19.5833px;">Bluetooth Version</td>
<td style="width: 31.4887%; height: 19.5833px;">5.1</td>
</tr>
</tbody>
</table>
</div>
<div><br></div>
</div>
<div><br></div>
<h3>🔌 <strong>Inputs &amp; Connectivity</strong>
</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Input Type</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr>
<td>HDMI</td>
<td>Yes (2.0)</td>
</tr>
<tr>
<td>HDMI eARC</td>
<td>Yes (2.1)</td>
</tr>
<tr>
<td>Optical Digital Audio</td>
<td>✅</td>
</tr>
<tr>
<td>USB Audio Playback</td>
<td>✅</td>
</tr>
<tr>
<td>USB Audio Formats</td>
<td>MP3, WMA, FLAC, WAV</td>
</tr>
<tr>
<td>Software Upgrade</td>
<td>Via USB &amp; TCL Home App</td>
</tr>
</tbody>
</table>
</div>
<div><br></div>
</div>
<div><br></div>
<h3>📦 <strong>Subwoofer &amp; Accessories</strong>
</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Component</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr>
<td>Subwoofer</td>
<td>Wireless, Detachable Power Cord</td>
</tr>
<tr>
<td>Accessories</td>
<td>Remote + Batteries, HDMI Cable (1.5M), Wall Mount Kit &amp; Template, QSG, Online Manual</td>
</tr>
</tbody>
</table>
</div>
<div><br></div>
</div>
<div><br></div>
<h3>📏 <strong>Dimensions &amp; Weight</strong>
</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Component</th>
<th>Size (WxHxD)</th>
<th>Weight (kg)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Sound Bar</td>
<td>105.4 x 6.8 x 12.3 cm</td>
<td><strong>4.22 kg</strong></td>
</tr>
<tr>
<td>Subwoofer</td>
<td>22 x 36.9 x 27.5 cm</td>
<td><strong>5.99 kg</strong></td>
</tr>
<tr>
<td>Package</td>
<td>113.8 x 29.2 x 51.3 cm</td>
<td><strong>13.06 kg</strong></td>
</tr>
</tbody>
</table>
</div>
</div>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 30000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Q75H-1.png?v=1759906017",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Q75H-1.png?v=1759906017"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "jbl-partybox-stage-320",
    name: "JBL PartyBox Stage 320",
    brand: "JBL",
    category: "speakers-soundbars",
    slug: "jbl-partybox-stage-320",
    description: `<h3>🔊 <strong>General Specifications</strong>
</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Category</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Output Power</strong></td>
<td>240W RMS</td>
</tr>
<tr>
<td><strong>Frequency Response</strong></td>
<td>40Hz – 20kHz (-6dB)</td>
</tr>
</tbody>
</table>
</div>
<div><br></div>
</div>
<div><br></div>
<h3>📐 <strong>Dimensions &amp; Weight</strong>
</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Measurement</th>
<th>Metric</th>
<th>Imperial</th>
</tr>
</thead>
<tbody>
<tr>
<td>Width</td>
<td>33.5 cm</td>
<td>13.3 in</td>
</tr>
<tr>
<td>Height</td>
<td>67 cm</td>
<td>26.3 in</td>
</tr>
<tr>
<td>Depth</td>
<td>38.5 cm</td>
<td>15.2 in</td>
</tr>
<tr>
<td>Weight</td>
<td>16.5 kg</td>
<td>36.38 lbs</td>
</tr>
</tbody>
</table>
</div>
<div><br></div>
</div>
<div><br></div>
<h3>🔋 <strong>Battery &amp; Connectivity</strong>
</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Specification</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Bluetooth Version</strong></td>
<td>5.4</td>
</tr>
<tr>
<td><strong>Charging Time</strong></td>
<td>3 hours</td>
</tr>
<tr>
<td><strong>Max Play Time</strong></td>
<td>Up to 18 hours</td>
</tr>
<tr>
<td><strong>Multi-point Connection</strong></td>
<td>Yes</td>
</tr>
<tr>
<td><strong>Supports Auracast</strong></td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>
<div><br></div>
</div>
<div><br></div>
<h3>🎛️ <strong>Inputs &amp; Controls</strong>
</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Input Type</th>
<th>Availability</th>
</tr>
</thead>
<tbody>
<tr>
<td>3.5 mm Audio Cable</td>
<td>Yes</td>
</tr>
<tr>
<td>AC Power Cable</td>
<td>Yes (varies by region)</td>
</tr>
<tr>
<td>Mic-In</td>
<td>Yes</td>
</tr>
<tr>
<td>Guitar-In</td>
<td>Yes</td>
</tr>
<tr>
<td>Dual Mic &amp; Guitar Inputs</td>
<td>Yes</td>
</tr>
</tbody>
</table>
</div>
<div><br></div>
</div>
<div><br></div>
<h3>🌟 <strong>Features</strong>
</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Available</th>
</tr>
</thead>
<tbody>
<tr>
<td>AI Sound Boost</td>
<td>✅</td>
</tr>
<tr>
<td>Bluetooth</td>
<td>✅</td>
</tr>
<tr>
<td>Lightshow</td>
<td>✅</td>
</tr>
<tr>
<td>Splashproof (IPX4)</td>
<td>✅</td>
</tr>
<tr>
<td>Karaoke Function</td>
<td></td>
</tr>
</tbody>
</table>
</div>
</div>`,
    specifications: {},
    variants: [],
    price: 60000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_1367371f-8d50-4859-9ee6-4653871a55e3.webp?v=1759905636",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_1367371f-8d50-4859-9ee6-4653871a55e3.webp?v=1759905636"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "85-class-qled-q8f-4k-samsung-vision-ai-smart-tv-2025",
    name: "85\" Class QLED Q8F 4K Samsung Vision AI Smart TV (2025)",
    brand: "Samsung",
    category: "televisions",
    slug: "85-class-qled-q8f-4k-samsung-vision-ai-smart-tv-2025",
    description: `<p>1. Screen Size: 85" QLED 4K UHD</p>
<p>2. Processor: Quantum Q4 AI Processor</p>
<p>3. Refresh Rate: Up to 144 Hz (PC gaming support)</p>
<p>4. HDR: Quantum HDR+</p>
<p>5. Color: 100% Color Volume with Quantum Dot</p>
<p>6. Smart Features: Samsung Vision AI &amp; Smart TV apps</p>
<p>7. Remote: SolarCell rechargeable remote (solar/USB)</p>
<p>8. Security: Samsung Knox protection</p>
<p>9. Design: Slim, modern bezel with wall-mount support</p>
<p>10. Audio: Object Tracking Sound &amp; Adaptive Sound+</p>
<p>11. Free Bracket and Tv Guard.</p>
<p> </p>`,
    specifications: {},
    variants: [],
    price: 240000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_21f2df99-2581-4db3-8c6e-dcba21502a8f.jpg?v=1759499576",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_21f2df99-2581-4db3-8c6e-dcba21502a8f.jpg?v=1759499576"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "jbl-partybox-520",
    name: "JBL PartyBox 520",
    brand: "JBL",
    category: "speakers-soundbars",
    slug: "jbl-partybox-520",
    description: `<p> </p>
<h3>🔊 General Specifications</h3>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>Output Power</td>
<td>400W</td>
</tr>
<tr>
<td>Power Input</td>
<td>100 – 240 V ~ 50-60 Hz</td>
</tr>
<tr>
<td>Signal-to-Noise Ratio</td>
<td>&gt; 80 dB</td>
</tr>
</tbody>
</table>
<hr>
<h3>🎧 Audio Specifications</h3>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>Frequency Response</td>
<td>40 Hz – 20 kHz</td>
</tr>
<tr>
<td>Transducers</td>
<td>2 × 7.5" (208 mm) woofers</td>
</tr>
<tr>
<td></td>
<td>2 × 1" (25 mm) dome tweeters</td>
</tr>
</tbody>
</table>
<hr>
<h3>📐 Dimensions &amp; Weight</h3>
<table>
<thead>
<tr>
<th>Measurement</th>
<th>Metric (cm)</th>
<th>Imperial (in)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Width × Height × Depth</td>
<td>42 × 77 × 37</td>
<td>16 × 30 × 15</td>
</tr>
<tr>
<td>Weight</td>
<td>26 kg</td>
<td>56 lbs</td>
</tr>
</tbody>
</table>
<hr>
<h3>📡 Control &amp; Connectivity</h3>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Specification</th>
</tr>
</thead>
<tbody>
<tr>
<td>Bluetooth Version</td>
<td>5.4</td>
</tr>
<tr>
<td>Bluetooth Profiles</td>
<td>A2DP V1.4, AVRCP V1.6</td>
</tr>
<tr>
<td>Transmitter Frequency Range</td>
<td>2.4 – 2.4835 GHz</td>
</tr>
<tr>
<td>Transmitter Modulation</td>
<td>GFSK, π/4 DQPSK, 8DPSK</td>
</tr>
<tr>
<td>Transmitter Power</td>
<td>≤ 18 dBm (EIRP)</td>
</tr>
<tr>
<td>USB-C Charge Out</td>
<td>PDO: 5V/3A, 9V/3A, 15V/2A, 20V/1.5A</td>
</tr>
<tr>
<td></td>
<td>PPS: 5–11V/2.7A, 5–16V/1.85A</td>
</tr>
<tr>
<td>Aux-In</td>
<td>250 mV RMS (3.5 mm connector)</td>
</tr>
<tr>
<td>Mic-In</td>
<td>20 mV RMS</td>
</tr>
<tr>
<td>Guitar-In</td>
<td>100 mV RMS</td>
</tr>
<tr>
<td>Line-In</td>
<td>100 mV RMS</td>
</tr>
<tr>
<td>Bluetooth Input</td>
<td>-12 dBFS</td>
</tr>
<tr>
<td>USB Input</td>
<td>-12 dBFS</td>
</tr>
<tr>
<td>USB Format</td>
<td>FAT16, FAT32</td>
</tr>
<tr>
<td>Supported Music File Formats</td>
<td>.MP3, .WAV, .WMA, .FLAC</td>
</tr>
</tbody>
</table>
<hr>
<h3>🔋 Battery &amp; Power</h3>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>Battery Type</td>
<td>JBL BATTERY 600, Li-ion 99.02 Wh</td>
</tr>
<tr>
<td>Charging Time</td>
<td>3 hours</td>
</tr>
<tr>
<td>Max Play Time</td>
<td>Up to 15 hours</td>
</tr>
<tr>
<td>Cable Type</td>
<td>AC power cable</td>
</tr>
<tr>
<td>Cable Length</td>
<td>2 m / 6.6 ft</td>
</tr>
</tbody>
</table>
<hr>
<h3>🌟 Features</h3>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Availability</th>
</tr>
</thead>
<tbody>
<tr>
<td>AI Sound Boost</td>
<td>Yes</td>
</tr>
<tr>
<td>JBL PartyBox App</td>
<td>Yes</td>
</tr>
<tr>
<td>Lightshow</td>
<td>Yes</td>
</tr>
<tr>
<td>Supports Auracast</td>
<td>Yes</td>
</tr>
<tr>
<td>Comes with App</td>
<td>Yes</td>
</tr>
</tbody>
</table>
<hr>
<p><br></p>`,
    specifications: {},
    variants: [],
    price: 80000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/JBL_Partybox_520_Box_Image_SKU_1605x1605px.webp?v=1759484323",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/JBL_Partybox_520_Box_Image_SKU_1605x1605px.webp?v=1759484323"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "65-class-qled-q7f-4k-samsung-vision-ai-smart-tv-2025",
    name: "65\" Class QLED Q7F 4K Samsung Vision AI Smart TV (2025)",
    brand: "Samsung",
    category: "televisions",
    slug: "65-class-qled-q7f-4k-samsung-vision-ai-smart-tv-2025",
    description: `<p> </p>
<p>1. 65-inch class display (64.5" diagonal) </p>
<p> </p>
<p> </p>
<p>2. 4K UHD resolution: 3,840 × 2,160 pixels </p>
<p> </p>
<p> </p>
<p>3. QLED panel technology with Quantum Dot for full color volume </p>
<p> </p>
<p> </p>
<p>4. Motion Xcelerator 60Hz native refresh rate </p>
<p> </p>
<p> </p>
<p>5. HDR support via “Quantum HDR” standard (not “+”) </p>
<p> </p>
<p> </p>
<p>6. It uses the Q4 AI Processor for upscaling, content analysis, etc. </p>
<p> </p>
<p> </p>
<p>7. Integrated “Vision AI” branding / smart features (on-device intelligence) </p>
<p> </p>
<p> </p>
<p>8. Runs Samsung’s Tizen OS / One UI smart platform </p>
<p> </p>
<p> </p>
<p>9. Supports HDR formats: HDR10, HLG (but no Dolby Vision) </p>
<p> </p>
<p> </p>
<p>10. Input lag is low at 4K/60Hz in Game Mode (≈ 9.8 ms) </p>
<p> </p>
<p> </p>
<p>11. No variable refresh rate (VRR) support — only fixed 60 Hz </p>
<p> </p>
<p> </p>
<p>12. Auto Low Latency Mode (ALLM) is supported for game consoles </p>
<p> </p>
<p> </p>
<p>13. Good support for common resolutions (480p, 720p, 1080p, 4K at 60Hz) </p>
<p> </p>
<p> </p>
<p>14. Slim / relatively basic feature set — lacking local dimming, advanced motion features </p>
<p> </p>
<p> </p>
<p>15. Connectivity: 4 × HDMI (HDMI 2.0 full bandwidth) </p>
<p> </p>
<p> </p>
<p>16. Other inputs: USB, optical audio out, Ethernet, tuner (cable/antenna) </p>
<p> </p>
<p> </p>
<p>17. Wi-Fi support (2.4 GHz and 5 GHz) </p>
<p> </p>
<p> </p>
<p>18. Power consumption: 79 W typical, up to 167 W max </p>
<p> </p>
<p> </p>
<p>19. Weight (TV alone): approx. 37.7 lbs (~17.1 kg) </p>
<p> </p>
<p> </p>
<p>20. Wall-mountable / VESA compatible, and includes a SolarCell Remote (eco-smart remote) </p>
<p> </p>
<p> </p>`,
    specifications: {},
    variants: [],
    price: 85000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_3004db55-8c12-4657-a2c8-f3ea8dcde08e.webp?v=1759392845",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_3004db55-8c12-4657-a2c8-f3ea8dcde08e.webp?v=1759392845"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
{
    id: "tcl-65-inch-c745-4k-qled-tv-with-google-tv",
    name: "TCL 65 inch C745 4K QLED TV with Google TV",
    brand: "TCL",
    category: "televisions",
    slug: "tcl-65-inch-c745-4k-qled-tv-with-google-tv",
    description: `<p> TCL QLED</p>
<p>· Full Array Local Dimming (FALD).</p>
<p>· 4K HDR PRO 1000.</p>
<p>· 144Hz Motion Clarity Pro.</p>
<p>· Multi HDR Format DV I HDR10.</p>
<p>· Game Master Pro 2.0.</p>
<p>· 240Hz Game Accelerator.</p>
<p>· Dolby Atmos.</p>
<p>· Google TV.</p>
<p>· Hands-free Google Assistant.</p>
<p>· Google Duo.</p>
<p>· Works With Alexa.</p>
<p>· Netflix, Amazon Prime, Disney.</p>
<p>· Bezeless slim metal and dual position stand.</p>
<p>Free Tv Guard and bracket . </p>`,
    specifications: {},
    variants: [],
    price: 100000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_03736969-6384-4213-acfc-6d7df78f46de.jpg?v=1758530451",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_03736969-6384-4213-acfc-6d7df78f46de.jpg?v=1758530451"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "jbl-partybox-710",
    name: "JBL PartyBox 710",
    brand: "JBL",
    category: "speakers-soundbars",
    slug: "jbl-partybox-710",
    description: `<p><br></p>
<hr>
<h3>🔊 General Specifications</h3>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>Output Power</td>
<td>800W RMS</td>
</tr>
</tbody>
</table>
<hr>
<h3>🎧 Audio Specifications</h3>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>Dynamic Frequency Response</td>
<td>35Hz – 20kHz (-6dB)</td>
</tr>
</tbody>
</table>
<hr>
<h3>📐 Dimensions &amp; Weight</h3>
<table>
<thead>
<tr>
<th>Measurement</th>
<th>Metric (cm)</th>
<th>Imperial (in)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Width</td>
<td>39.9</td>
<td>15.70</td>
</tr>
<tr>
<td>Height</td>
<td>90.5</td>
<td>35.60</td>
</tr>
<tr>
<td>Depth</td>
<td>43.6</td>
<td>17.20</td>
</tr>
<tr>
<td>Weight</td>
<td>27.8 kg</td>
<td>61.3 lbs</td>
</tr>
</tbody>
</table>
<hr>
<h3>📡 Control &amp; Connectivity</h3>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Specification</th>
</tr>
</thead>
<tbody>
<tr>
<td>Bluetooth Version</td>
<td>5.1</td>
</tr>
<tr>
<td>Bluetooth Profiles</td>
<td>A2DP V1.3, AVRCP V1.6</td>
</tr>
<tr>
<td>Bluetooth Frequency</td>
<td>2400 MHz – 2483.5 MHz</td>
</tr>
<tr>
<td>Modulation Types</td>
<td>GFSK, π/4 DQPSK, 8DPSK</td>
</tr>
<tr>
<td>Transmitter Power</td>
<td>≤ 11dBm</td>
</tr>
</tbody>
</table>
<hr>
<h3>🌟 Features</h3>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Availability</th>
</tr>
</thead>
<tbody>
<tr>
<td>Splashproof</td>
<td>Yes (IPX4)</td>
</tr>
<tr>
<td>Bluetooth</td>
<td>Yes</td>
</tr>
<tr>
<td>Lightshow</td>
<td>Yes</td>
</tr>
</tbody>
</table>
<hr>
<p><br></p>`,
    specifications: {},
    variants: [],
    price: 80000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_f0887672-ce7e-410e-a12d-722982d88b3f.jpg?v=1758359099",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_f0887672-ce7e-410e-a12d-722982d88b3f.jpg?v=1758359099"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "lg-75-75nano80t6a-nanocell-tv-4k",
    name: "LG 75\" 75NANO80T6A NanoCell TV 4K.",
    brand: "LG",
    category: "televisions",
    slug: "lg-75-75nano80t6a-nanocell-tv-4k",
    description: `<h4>Key Features</h4>
<div class="product-features">
<ul>
<li>NanoCell Technology – Essential Color Technology – LG NanoCell technology uses nanoparticles to filter out impure colours from RGB wavelengths. This results in 4K vivid colours, which pop and create a sharp stunning visual symphony</li>
<li>Smart α5 AI Processor Gen7 with 4K Upscaling– This auto-optimizes audio, colour, and brightness, for full immersion in the action.</li>
<li>True Cinema Experience with FILMMAKER MODE, HDR10 Pro, HLG, and advanced Dynamic Tone Mapping</li>
<li>ThinQ AI webOS 2024 TV with Magic Remote for exceptional content and seamless navigation</li>
<li>AI Sound Pro ensures the audio is tailored to the content with 2.0CH Speakers and 20W RMS Output</li>
<li>Wow, Sound Interface - Access WOW Interface on LG TV for simple soundbar control, like modes, profiles, and handy features.</li>
<li>Gaming Support Features – HGiG, ALLM, HDMI2.0 eARC, Game Optimizer And Maximum refresh rate of 60Hz</li>
<li>Smart Assistant &amp; Connectivity: LG TV takes convenience to a new level with support for Apple AirPlay, Apple Home, and Chromecast.</li>
<li>Connectivity: Optical, HDMI2.0, USB, Bluetooth, LAN &amp; WiFi</li>
<li>Free Tv Guard and Wall bracket </li>
</ul>
</div>`,
    specifications: {},
    variants: [],
    price: 165000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_a7038d9c-1516-4cbc-bc98-a6606829a5ba.jpg?v=1758008624",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_a7038d9c-1516-4cbc-bc98-a6606829a5ba.jpg?v=1758008624"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "75-inch-q7f-4k-qled-samsung-vision-ai-tv-2025",
    name: "75 inch Q7F 4K QLED Samsung Vision AI TV (2025)",
    brand: "Samsung",
    category: "televisions",
    slug: "75-inch-q7f-4k-qled-samsung-vision-ai-tv-2025",
    description: `<p>Quick Specs</p>
<ol>
<li>
<strong>75-inch 4K UHD QLED</strong> display (3840×2160) with Quantum Dot technology.</li>
<li>
<strong>Quantum HDR &amp; HDR10+</strong> for enhanced brightness and scene-by-scene optimization.</li>
<li>Powered by the <strong>Q4 AI Processor</strong> for picture and sound upscaling.</li>
<li>
<strong>Tizen OS Smart TV</strong> with Samsung TV Plus, streaming apps, AirPlay, Multi-View, and voice assistants (Bixby, Alexa, Google).</li>
<li>
<strong>Slim bezel-less design</strong> with adjustable stand and no-gap wall mount option.</li>
<li>
<strong>Native 60 Hz refresh rate</strong> with Motion Xcelerator—smooth for casual use but not top-tier for gaming.</li>
<li>
<strong>3× HDMI 2.0 ports</strong> (with ARC/eARC), USB, Wi-Fi, and Bluetooth connectivity.</li>
<li>
<strong>20 W 2.0-channel speakers</strong> with Object Tracking Sound Lite &amp; Q-Symphony (works with Samsung soundbars).</li>
<li>
<strong>AI Energy Mode</strong> to reduce power consumption by adjusting brightness intelligently.</li>
<li>Strengths: <strong>excellent color accuracy &amp; smart features</strong>; Limitations: <strong>modest brightness, no HDMI 2.1, not ideal for gaming or bright rooms</strong>.</li>
</ol>
<p>Comes with a TV Guard and Wall bracket.</p>`,
    specifications: {},
    variants: [],
    price: 145000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_a822ae36-17e5-40ce-a054-e3e4e0241ae3.webp?v=1757576804",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_a822ae36-17e5-40ce-a054-e3e4e0241ae3.webp?v=1757576804"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "sony-65-x75k-kd-65x75k",
    name: "Sony 65″ X75K (KD-65X75K)",
    brand: "Sony",
    category: "televisions",
    slug: "sony-65-x75k-kd-65x75k",
    description: `<h3>📺 Sony X75K 65" (2022)</h3>
<p><span><strong>🖥️ Display</strong></span></p>
<ul>
<li><p><span>65" 4K UHD (3840 × 2160), VA panel</span></p></li>
<li><p><span>Direct LED, 60Hz refresh (Motionflow XR 240)</span></p></li>
<li><p><span>HDR10 &amp; HLG, 4K Processor X1™, X-Reality PRO</span></p></li>
</ul>
<p><span><strong>🔊 Audio</strong></span></p>
<ul>
<li><p><span>2 full-range speakers, 20W total</span></p></li>
<li><p><span>Dolby Audio supported</span></p></li>
</ul>
<p><span><strong>🔌 Ports &amp; Connectivity</strong></span></p>
<ul>
<li><p><span>HDMI x3 (eARC/ARC), USB x2, Composite, RF, LAN</span></p></li>
<li><p><span>Headphone jack ✅ (AUX supported)</span></p></li>
<li><p><span>Optical audio out, Bluetooth 5.0, Wi-Fi (2.4/5GHz)</span></p></li>
<li><p><span>Chromecast, AirPlay, HomeKit built-in</span></p></li>
</ul>
<p><span><strong>💻 Smart Features</strong></span></p>
<ul>
<li><p><span>Google TV (Android base), 16GB storage</span></p></li>
<li><p><span>Voice search, Google Play apps</span></p></li>
</ul>
<p><span><strong>🎮 Gaming</strong></span></p>
<ul>
<li><p><span>No VRR, ALLM, or PS5-specific features</span></p></li>
</ul>
<p><span><strong>📐 Dimensions</strong></span></p>
<ul>
<li><p><span>Without stand: 57.63 × 33.63 × 3.5", 47.2 lb</span></p></li>
<li><p><span>With stand: 57.63 × 36 × 13.38", 48.7 lb</span></p></li>
<li><p><span>VESA: 400 × 200 mm</span></p></li>
</ul>
<p><span><strong>♿ Accessibility</strong></span></p>
<ul>
<li><p> </p></li>
</ul>`,
    specifications: {},
    variants: [],
    price: 100000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_389d8f7f-3b2f-4082-8da3-219720a092c1.webp?v=1757492190",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_389d8f7f-3b2f-4082-8da3-219720a092c1.webp?v=1757492190"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-55-inch-q6n-4k-qled-tv-q6-series",
    name: "Hisense 55 Inch Q6N 4K QLED TV Q6 Series",
    brand: "Hisense",
    category: "televisions",
    slug: "hisense-55-inch-q6n-4k-qled-tv-q6-series",
    description: `<ul>
<li>Highlights<br>Display &amp; Picture</li>
<li>Screen Size:&nbsp;55 Inches (~139 cm)</li>
<li>Resolution:&nbsp;4K Ultra HD (3840 × 2160)</li>
<li>Display Type:&nbsp;QLED with Quantum Dot Color for vivid, accurate visuals</li>
<li>HDR Support:&nbsp;Dolby Vision, HDR10+, HLG</li>
<li>Upscaler:&nbsp;AI 4K Upscaler &amp; AI Picture Enhancements</li>
<li>Motion Rate / Refresh Rate:&nbsp;Smooth Motion (MEMC), 120 Hz smooth motion rate, 60 Hz panel with VRR &amp; ALLM support</li>
<li>Contrast &amp; Brightness:&nbsp;Native contrast ~4000:1, typical brightness ~350–400 nits</li>
<li>Response Time:&nbsp;~8 ms</li>
<li>Audio &amp; Sound</li>
<li>Audio Output:&nbsp;Approx. 24 W (10 W × 2)</li>
<li>Sound Technology:&nbsp;Dolby Atmos, Dolby Digital, Audio Equalizer, Automatic Volume Level, various sound modes (Sports, Theatre, Music, Speech, etc.)</li>
<li>Smart Features &amp; OS</li>
<li>Operating System:&nbsp;Google TV or VIDAA OS depending on region—both offer top streaming experiences</li>
<li>Built-In Apps:&nbsp;Netflix, YouTube, Prime Video, Showmax, Disney+ (region dependent)</li>
<li>Voice Control:&nbsp;Google Assistant / Far‑Field Voice, Voi</li>
<li>Smart Modes:&nbsp;Game Mode Plus (ALLM, VRR), AI Sports Mode, Filmmaker Mode, Adaptive Picture modes</li>
<li>Connectivity</li>
<li>HDMI Ports:&nbsp;3 × HDMI 2.0, with eARC</li>
<li>USB Ports:&nbsp;2 × USB 2.0</li>
<li>Other Inputs/Outputs:&nbsp;Optical SPDIF, Earphone Jack, Ethernet (RJ45), AV input, RF tuner</li>
<li>Wireless:&nbsp;Wi‑Fi (2.4 / 5 GHz, a/b/g/n/ac), Bluetooth 5.3</li>
<li>Screen Casting:&nbsp;Chromecast built-in, AirPlay, Miracast, DLNA, Anyview Cast</li>
<li>Hardware &amp; Power</li>
<li>Processor:&nbsp;Quad-Core (MT9603EAATAC)</li>
<li>Memory &amp; Storage:&nbsp;RAM approx. 2 GB, Storage ~16 GB (Google TV variants)</li>
<li>Power Consumption:&nbsp;~110 W, standby &lt; 0.5 W</li>
<li>Dimensions &amp; Mounting</li>
<li>Dimensions (Without Stand):&nbsp;1233 × 717 × 80 mm</li>
<li>Dimensions (With Stand):&nbsp;1233 × 751 × 298 mm</li>
<li>Weight (Without/With Stand):&nbsp;Approx. 11.3 kg / 11.6 kg</li>
<li>Free Wall Mount and Tv Guard </li>
<li>Other Features</li>
<li>Design:&nbsp;Bezel-less / slim design in grey finish</li>
<li>Warranty:&nbsp;Up to 2 years</li>
<li>Misc Tech:&nbsp;Dynamic backlight control, Adaptive Light Sensor, Motion enhancement, ISF modes, etc.</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 45000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_52affd52-fe34-4053-8a87-427619ea1b11.jpg?v=1756817035",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_52affd52-fe34-4053-8a87-427619ea1b11.jpg?v=1756817035"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "skyworth-65-g6500-4k-uhd-google-tv-65g6500",
    name: "Skyworth 65″ G6500 4K UHD Google TV – 65G6500",
    brand: "Skyworth",
    category: "televisions",
    slug: "skyworth-65-g6500-4k-uhd-google-tv-65g6500",
    description: `<h2>Features</h2>
<ul>
<li>Resolution: 3840 x 2160</li>
<li>Display Type: 65 inches</li>
<li>Display Technology: 4K UHD</li>
<li>Built-in Apps – Youtube, Netflix, Prime Videos, Etc</li>
<li>Built-in Decoder Free-to-air Channels</li>
<li>HDMI: 3</li>
<li>USB: 2</li>
<li>Android TV</li>
<li>Infinity Screen</li>
<li>Digital DVB-T2</li>
<li>Bluetooth 5.0, WIFI, LAN</li>
<li>Optical port: Yes</li>
<li>Ethernet: Yes</li>
<li>Color: Black</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 65000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_a283bf25-3969-45db-b249-49ab81cb2899.jpg?v=1756815002",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_a283bf25-3969-45db-b249-49ab81cb2899.jpg?v=1756815002"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "sony-bravia-theater-system-6-5-1ch-1000w",
    name: "Sony BRAVIA Theater System 6, 5.1ch 1,000W",
    brand: "Sony",
    category: "speakers-soundbars",
    slug: "sony-bravia-theater-system-6-5-1ch-1000w",
    description: `<div id="productOverview_feature_div" class="celwidget" data-feature-name="productOverviewForNonBeauty_T1" data-csa-c-type="widget" data-csa-c-content-id="productOverviewForNonBeauty_T1" data-csa-c-slot-id="productOverview_feature_div" data-csa-c-asin="" data-csa-c-is-in-initial-active-row="false" data-csa-c-id="oor5fy-hn3php-ttstnf-li0h10" data-cel-widget="productOverview_feature_div">
<div id="productOverview_hoc_view_div" class="a-section a-spacing-small">
<p> </p>
<ul class="a-unordered-list a-nostyle a-vertical" role="list">
<li role="listitem">
<div class="a-row a-spacing-top-base po-connectivity_technology" role="presentation">
<div class="a-column a-span5" role="presentation">
<span class="a-size-base a-color-base a-text-bold">Connectivity Technology</span><span class="a-size-base a-color-base">-Bluetooth</span>
</div>
</div>
</li>
<li role="listitem">
<div class="a-row a-spacing-top-base po-audio_output_mode" role="presentation">
<div class="a-column a-span5" role="presentation">
<span class="a-size-base a-color-base a-text-bold">Audio Output Mode</span><span class="a-size-base a-color-base">-Surround</span>
</div>
</div>
</li>
<li role="listitem">
<div class="a-row a-spacing-top-base po-mounting_type" role="presentation">
<div class="a-column a-span5" role="presentation">
<span class="a-size-base a-color-base a-text-bold">Mounting Type</span><span class="a-size-base a-color-base">-Tabletop or Wall Mount</span>
</div>
</div>
</li>
<li role="listitem">
<div class="a-row a-spacing-top-base po-model_name" role="presentation">
<div class="a-column a-span5" role="presentation">
<span class="a-size-base a-color-base a-text-bold">Model Name-</span><span class="a-size-base a-color-base">BRAVIA Theater System 6</span>
</div>
</div>
</li>
<li role="listitem">
<div class="a-row a-spacing-top-base po-speaker_type" role="presentation">
<div class="a-column a-span5" role="presentation">
<span class="a-size-base a-color-base a-text-bold">Speaker Type-</span><span class="a-size-base a-color-base">Soundbar</span>
</div>
</div>
</li>
</ul>
</div>
</div>
<div id="featureBulletsAndDescription_hoc_feature_div" class="celwidget" data-feature-name="featureBulletsAndDescription_hoc" data-csa-c-type="widget" data-csa-c-content-id="featureBulletsAndDescription_hoc" data-csa-c-slot-id="featureBulletsAndDescription_hoc_feature_div" data-csa-c-asin="" data-csa-c-is-in-initial-active-row="false" data-csa-c-id="u92dnb-jmxhkk-6xfli1-5zykx6" data-cel-widget="featureBulletsAndDescription_hoc_feature_div">
<div id="featurebullets_secondary_view_div" class="a-section a-spacing-small a-spacing-top-medium">
<div id="feature-bullets" class="a-section a-spacing-small featureBulletsDiv">
<ul class="a-unordered-list a-vertical a-spacing-none">
<li class="a-spacing-mini"><span class="a-list-item">5.1CH SURROUND SOUND: Hear cinematic surround sound and deep bass with 3 front-firing speakers, two rear speakers, and included subwoofer.</span></li>
<li class="a-spacing-mini"><span class="a-list-item">SOUND STRAIGHT FROM CINEMA: Get the best streaming experience with support for Dolby Atmos and DTS:X.</span></li>
<li class="a-spacing-mini"><span class="a-list-item">CLEAR DIALOGUE: Catch every word in the scene with dedicated center channel speaker.</span></li>
<li class="a-spacing-mini"><span class="a-list-item">ROOM FILLING SOUND: Multi Stereo enhances your listening experience by playing the same sound from all speakers, creating a room-filling sound boost.</span></li>
<li class="a-spacing-mini"><span class="a-list-item">BRAVIA THEATER AND BRAVIA TV, THE PERFECT PAIR: Pair with compatible BRAVIA TVs to control the soundbar from the TV menu and take advantage of Voice Zoom 3 for enhanced dialogue.</span></li>
<li class="a-spacing-mini"><span class="a-list-item">BRAVIA CONNECT APP: Use BRAVIA Connect app to easily control BRAVIA Theater from your smartphone and change volume, sound profiles, and advanced settings.</span></li>
<li class="a-spacing-mini"><span class="a-list-item">WIRELESS BLUETOOTHS STREAMING: Enjoy wireless music streaming from your smartphone with Bluetooth technology.</span></li>
<li class="a-spacing-mini"><span class="a-list-item">SUPREME MUSIC QUALITY: Your music is up-mixed, restoring acoustic details for a richer listening experience.</span></li>
</ul>
</div>
</div>
</div>`,
    specifications: {},
    variants: [],
    price: 62000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_31559989-27f9-4e43-b56e-b8b09a9dbce0.webp?v=1756366675",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_31559989-27f9-4e43-b56e-b8b09a9dbce0.webp?v=1756366675"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "bjs-elegance-cooker-60x60-3-1e",
    name: "BJs  Elegance Cooker 60x60 3+1E",
    brand: "BJs",
    category: "cookers-ovens",
    slug: "bjs-elegance-cooker-60x60-3-1e",
    description: `<p>KEY FEATURES</p>
<ul>
<li>Free standing cooker</li>
<li>60cmby 60cm</li>
<li>Electric Oven</li>
<li>Turbo Fan</li>
<li>Food warmer at the bottom</li>
<li>Unbreakable top glass</li>
<li>Strong glass lid</li>
<li>12 months warranty</li>
<li>Grill</li>
<li>Timer</li>
<li>Rotisserie rod</li>
<li>Rapid hot plate 1500W</li>
<li>Cast iron pan support</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 32000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_bd4a4aa4-45c1-4b19-baab-9d7793aacf46.jpg?v=1756291821",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_bd4a4aa4-45c1-4b19-baab-9d7793aacf46.jpg?v=1756291821"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "tcl-75-c755-qd-mini-led-4k-tv",
    name: "TCL 75\" C755 QD-Mini LED 4K TV",
    brand: "TCL",
    category: "televisions",
    slug: "tcl-75-c755-qd-mini-led-4k-tv",
    description: `<ul class="highlights" data-bind="foreach: characteristics">
<li class="highlight-item"><span data-bind="text: pictureDesc">QD-Mini LED</span></li>
<li class="highlight-item">·<span> </span><span data-bind="text: pictureDesc">1344 Local Dimming Zones</span>
</li>
<li class="highlight-item">·<span> </span><span data-bind="text: pictureDesc">HDR 1300 nits</span>
</li>
<li class="highlight-item">·<span> </span><span data-bind="text: pictureDesc">144Hz VRR</span>
</li>
<li class="highlight-item">·<span> </span><span data-bind="text: pictureDesc">AiPQ PROCESSOR 3.0</span>
</li>
<li class="highlight-item">·<span> </span><span data-bind="text: pictureDesc">IMAX Enhanced</span>
</li>
<li class="highlight-item">·<span> </span><span data-bind="text: pictureDesc">HDR 10+</span>
</li>
<li class="highlight-item">·<span> </span><span data-bind="text: pictureDesc">Dolby Vision · Atmos</span>
</li>
<li class="highlight-item">·<span> </span><span data-bind="text: pictureDesc">Game Master 2.0</span>
</li>
<li class="highlight-item">·<span> </span><span data-bind="text: pictureDesc">AMD FreeSync Premium Pro</span>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 170000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_5201d3f5-fe10-464d-8670-1c368e4c34a8.webp?v=1755872766",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_5201d3f5-fe10-464d-8670-1c368e4c34a8.webp?v=1755872766"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "syinix-washing-machine-front-loading-ai-wash-babycare-grey-8kg-p8wtt",
    name: "Syinix Washing Machine Front Loading AI Wash Babycare Grey 8KG P8WTT",
    brand: "Syinix",
    category: "washing-machines",
    slug: "syinix-washing-machine-front-loading-ai-wash-babycare-grey-8kg-p8wtt",
    description: `<h4>Key Features:</h4>
<ol>
<li>
<strong>8Kg Capacity</strong>: This Syinix washing machine offers a large 8Kg capacity, making it ideal for families with significant laundry needs. You can easily wash bulky items such as blankets and curtains.</li>
<li>
<strong>Top Load Design</strong>: The top load design ensures easy loading and unloading of laundry, reducing strain on your back.</li>
<li>
<strong>Automatic Washing Programs</strong>: The Syinix washing machine comes with 10 automatic washing programs, allowing you to select the perfect wash cycle for different fabric types and soil levels.</li>
<li>
<strong>Energy Efficient</strong>: Designed with energy efficiency in mind, this washing machine helps you save on electricity bills while reducing your carbon footprint.</li>
<li>
<strong>Easy to Use</strong>: The intuitive control panel with a clear display makes it simple to choose and customize your washing settings.</li>
<li>
<strong>Color</strong>: Sleek grey finish that complements modern interiors.</li>
<li>it's a solid contender its baby care and smart wash features.</li>
</ol>`,
    specifications: {},
    variants: [],
    price: 32000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Screenshot_24-7-2025_153952.webp?v=1755591763",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Screenshot_24-7-2025_153952.webp?v=1755591763"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "von-vcf663151fsy-freestanding-cooker",
    name: "VON VCF663151FSY Freestanding Cooker",
    brand: "VON",
    category: "cookers-ovens",
    slug: "von-vcf663151fsy-freestanding-cooker",
    description: `<h4>Key Features</h4>
<div class="product-features">
<ul>
<li>60x60</li>
<li>3 Gas + 1 Electric hotplate</li>
<li>Euro pool type burners &amp; Rapid hotplate</li>
<li>Electric oven</li>
<li>Flame failure safety device</li>
<li>Thick Matt enamel grid</li>
<li>5 functions</li>
<li>Easy to clean enamel panel</li>
<li>Silver enamel oven cavity</li>
<li>Integrated ignition</li>
<li>Mechanical control</li>
<li>Glass lid</li>
<li>Double glass oven door - for enhanced ventilation</li>
<li>Easily removable glass oven door for easy cleaning</li>
<li>1 Tray + 1 Grid + 1 Round Tray</li>
<li>Adjustable feet</li>
<li>Inox Grey</li>
</ul>
</div>`,
    specifications: {},
    variants: [],
    price: 38000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/72a7fcf7bd1274cbb1a1d9bf9ba76f80_1.png?v=1755504541",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/72a7fcf7bd1274cbb1a1d9bf9ba76f80_1.png?v=1755504541"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "vision-plus-43-fhd-frameless-android-smart-tv",
    name: "Vision Plus 43″ FHD Frameless Android Smart TV",
    brand: "Vision Plus",
    category: "televisions",
    slug: "vision-plus-43-fhd-frameless-android-smart-tv",
    description: `<div class="ocm-effect-wrap">
<div class="ocm-effect-wrap-inner">
<div id="ajax-content-wrap">
<div class="container-wrap" data-midnight="dark">
<div class="container main-content has_overflow">
<div class="row">
<div itemscope="" data-project-style="minimal" data-gallery-variant="default" data-n-lazy="1" data-hide-product-sku="false" data-gallery-style="ios_slider" data-tab-pos="fullwidth" id="product-24302" class="product type-product post-24302 status-publish first instock product_cat-39 product_cat-televisions product_tag-40 has-post-thumbnail sale taxable shipping-taxable purchasable product-type-simple">
<div class="nectar-prod-wrap">
<div class="summary entry-summary">
<div class="woocommerce-product-details__short-description">
<ul>
<li>
<strong>Screen size:</strong><span> </span>43″</li>
<li>
<strong>Operating system:</strong><span> </span>Android 14</li>
<li>
<strong>Resolution:</strong><span> </span>FHD Resolution 1080p</li>
<li>
<strong>Warranty:</strong><span> </span>2 Years</li>
<li>
<strong>Refresh Rate:</strong><span> </span>60Hz</li>
<li>
<strong>Audio:</strong><span> </span>Dolby Audio</li>
<li>
<strong>Connectivity:</strong><span> </span>BT / WIFI / HDMI (ARC) /OPTICAL / RF IN / USB / AUX / ETHERNET</li>
<li>
<strong>TV Input:</strong><span> </span>ATV/DVB-C/T,DVB-T2/DVB-S/S2</li>
<li>Free Tv Guard.</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>`,
    specifications: {},
    variants: [],
    price: 22000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_c7c38b6e-99c9-42c9-a8d0-eb7f16c3c4be.webp?v=1755258633",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_c7c38b6e-99c9-42c9-a8d0-eb7f16c3c4be.webp?v=1755258633"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "vp2113sb-deep-bass-360watts-2-1ch-sound-bar",
    name: "VP2113SB Deep Bass 360Watts 2.1CH Sound Bar",
    brand: "Vision Plus",
    category: "speakers-soundbars",
    slug: "vp2113sb-deep-bass-360watts-2-1ch-sound-bar",
    description: `<ul>
<li>
<strong>Power output:</strong><span> </span>360W Max Power</li>
<li>
<strong>Power:</strong><span> </span>SMPS 100V-240V ~ 50/60Hz</li>
<li>
<strong>Source input:</strong><span> </span>HDMI(ARC), Optical, USB</li>
<li>
<strong>FM Radio:</strong><span> </span>None</li>
<li>
<strong>Bluetooth:</strong><span> </span>Version: 5.0</li>
<li>
<strong>Dimension(mm):</strong><span> </span><strong>Sound bar:</strong><span> </span>L1140*H90*D85 mm,</li>
<li>
<span> </span><strong>Subwoofer:</strong><span> </span>W200*H345*D300 mm</li>
<li>24 Months Warranty</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 12000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Wesbite-Images-3.webp?v=1755154813",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Wesbite-Images-3.webp?v=1755154813"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "samsung-55-qled-4k-q60d-smart-tv-2024",
    name: "Samsung 55\" QLED 4K Q60D Smart TV (2024)",
    brand: "Samsung",
    category: "televisions",
    slug: "samsung-55-qled-4k-q60d-smart-tv-2024",
    description: `<ul>
<li><p><span>📺 Display: 55-inch QLED panel with 4K UHD resolution</span></p></li>
<li class="ps-2"><p><span>🌈 Color Volume: 100% Color Volume with Quantum Dot for vivid, accurate colors</span></p></li>
<li class="ps-2"><p><span>🎨 HDR: Quantum HDR with HDR10+ dynamic tone mapping for enhanced contrast</span></p></li>
<li class="ps-2"><p><span>🔍 Upscaling: Quantum Processor Lite 4K upscales non-4K content to near-4K clarity</span></p></li>
<li class="ps-2"><p><span>🧠 Smart Platform: Samsung Tizen OS with Samsung TV Plus, Gaming Hub, Daily+ &amp; SmartThings</span></p></li>
<li class="ps-2"><p><span>🔊 Audio: Object Tracking Sound Lite (OTS Lite) with Adaptive Sound for immersive surround</span></p></li>
<li class="ps-2"><p><span>🎶 Q-Symphony: Synchronizes TV and compatible Samsung soundbar audio</span></p></li>
<li class="ps-2"><p><span>🎮 Gaming Features: Motion Xcelerator, Auto Low Latency Mode (ALLM) &amp; HGiG support</span></p></li>
<li class="ps-2"><p><span>🧩 Design: AirSlim profile and VESA-compatible wall-mounting design</span></p></li>
<li class="ps-2"><p><span>🎁 Extras: Free TV guard and free wall bracket included</span></p></li>
</ul>`,
    specifications: {},
    variants: [],
    price: 72000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/africa-en-qled-tv-qa55q60dauxke-front-black-542481901.webp?v=1754578855",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/africa-en-qled-tv-qa55q60dauxke-front-black-542481901.webp?v=1754578855"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "samsung-65-inch-qled-4k-q60d-tizen-os-smart-tv-2024",
    name: "SAMSUNG 65 Inch QLED 4K Q60D Tizen OS Smart TV (2024)",
    brand: "Samsung",
    category: "televisions",
    slug: "samsung-65-inch-qled-4k-q60d-tizen-os-smart-tv-2024",
    description: `<ul>
<li><p><span>📺 <strong>Display</strong>: 65-inch QLED panel with 4K resolution</span></p></li>
<li><p><span>🌈 <strong>Color Technology</strong>: 100% Color Volume with Quantum Dot</span></p></li>
<li><p><span>🧠 <strong>Smart Platform</strong>: Samsung Tizen OS with access to apps and Samsung TV Plus</span></p></li>
<li><p><span>🔍 <strong>Upscaling</strong>: Powerful 4K Upscaling for non-4K content</span></p></li>
<li><p><span>🎨 <strong>HDR</strong>: Quantum HDR with HDR10+ dynamic tone mapping</span></p></li>
<li><p><span>🧪 <strong>Color Accuracy</strong>: PANTONE Validated for lifelike skin tones and colors</span></p></li>
<li><p><span>🔊 <strong>Audio</strong>: Object Tracking Sound Lite (OTS Lite) and Adaptive Sound</span></p></li>
<li><p><span>🎶 <strong>Q-Symphony</strong>: Syncs TV and soundbar for immersive sound</span></p></li>
<li><p><span>🧩 <strong>Design</strong>: AirSlim profile for sleek wall-mounting</span></p></li>
<li><p><span>🏠 <strong>SmartThings Hub</strong>: Built-in hub to control smart home devices</span></p></li>
<li><span>Free Tv Guard and Wall bracket</span></li>
</ul>`,
    specifications: {},
    variants: [],
    price: 100000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/africa-en-qled-tv-qa65q60dauxke-front-black-542482008.webp?v=1754557454",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/africa-en-qled-tv-qa65q60dauxke-front-black-542482008.webp?v=1754557454"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "samsung-32-hd-h5000f-smart-tv-2025",
    name: "SAMSUNG 32\" HD H5000F  Smart TV (2025)",
    brand: "Samsung",
    category: "televisions",
    slug: "samsung-32-hd-h5000f-smart-tv-2025",
    description: `<ul>
<li><p><span>📺 <strong>Screen Size</strong>: 32 inches</span></p></li>
<li><p><span>🖥️ <strong>Resolution</strong>: HD (1366 x 768)</span></p></li>
<li><p><span>🌈 <strong>PurColour</strong>: Rich, lifelike color reproduction</span></p></li>
<li><p><span>🌟 <strong>HDR Format</strong>: HDR10 for enhanced contrast</span></p></li>
<li><p><span>🧠 <strong>Smart TV Platform</strong>: Tizen OS</span></p></li>
<li><p><span>📡 <strong>Connectivity</strong>: Wi-Fi &amp; Bluetooth supported</span></p></li>
<li><p><span>🔊 <strong>Audio</strong>: Object Tracking Sound Lite (OTS Lite)</span></p></li>
<li><p><span>🎶 <strong>Q-Symphony</strong>: Syncs TV and soundbar audio</span></p></li>
<li><p><span>🔌 <strong>HDMI Ports</strong>: Yes (2 ports)</span></p></li>
<li><p><span>🎁 <strong>Extras</strong>: Free TV bracket and TV guard included</span></p></li>
</ul>`,
    specifications: {},
    variants: [],
    price: 22000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/us-hd-h5000-un32h5000ffxza-546106591.png?v=1754555030",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/us-hd-h5000-un32h5000ffxza-546106591.png?v=1754555030"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "tcl-c6k-85-inch-premium-qd-miniled-google-tv",
    name: "TCL C6K 85 Inch Premium QD-MiniLED Google TV",
    brand: "TCL",
    category: "televisions",
    slug: "tcl-c6k-85-inch-premium-qd-miniled-google-tv",
    description: `<ul data-bind="foreach: characteristics" class="highlights">
<li>
<a rel="noopener" title="TCL QD MINILED C6K VS C7K COMPARISON" href="https://www.tiktok.com/@digital_city_electronics/video/7496540890236865847?" target="_blank"><span style="color: rgb(43, 0, 255);"><strong>CLICK TO WATCH REVIEW VIDEO</strong></span></a><span></span>
</li>
<li class="highlight-item"><span>Google TV</span></li>
<li class="highlight-item"><span>Free Wall Bracket and TV Guard</span></li>
<li class="highlight-item"><span>32GB ROM &amp; 3GB RAM</span></li>
<li class="highlight-item"><span>QD Mini-LED</span></li>
<li class="highlight-item">
<span data-bind="text: pictureDesc">Precise Dimming Series Up to 512 Zones</span><br>
</li>
<li class="highlight-item"><span data-bind="text: pictureDesc">System Brightness: High HDR Brightness </span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">Contrast Ratio: 55<span>00:1 (typ.)</span></span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">HVA Panel</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">ONKYO 2.1 Hi-Fi System</span></li>
<li>2.1 Audio Channel</li>
<li>Audio Power <span>2*10W+20W</span>
</li>
<li>DTS Virtual X<span data-bind="text: pictureDesc"></span>
</li>
<li>Dolby Atmos</li>
<li class="highlight-item"><span data-bind="text: pictureDesc">AiPQ Pro Processor</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">144Hz Native Refresh Rate</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">Ultra Slim Design</span></li>
<li>
<span class="feature-item-name" data-bind="text: name">IMAX Enhanced:<span> YES</span></span><span class="feature-item-name" data-bind="text: name"><span></span></span>
</li>
<li><span class="feature-item-name" data-bind="text: name"><span>Refresh Rate: MEMC 120HZ; VRR 48HZ~288Hz; DLG 240Hz</span></span></li>
<li>
<span class="feature-item-name" data-bind="text: name"><span>Dolby Vision IQ</span></span><span class="feature-item-name" data-bind="text: name"><span></span></span>
</li>
<li><span class="feature-item-name" data-bind="text: name"><span>HLG</span></span></li>
<li><span class="feature-item-name" data-bind="text: name"><span>HDR 10+</span></span></li>
<li>
<div class="feature-item">
<span class="feature-item-name" data-bind="text: name">Game Master:<span> </span></span><span class="feature-item-value" data-bind="text: value">Yes</span>
</div>
</li>
<li>
<div class="feature-item">
<span class="feature-item-value" data-bind="text: value"></span>
<div class="feature-item">
<span class="feature-item-name" data-bind="text: name">Video Chat: </span><span class="feature-item-value" data-bind="text: value">Yes</span>
</div>
</div>
</li>
<li>
<div class="feature-item">
<span class="feature-item-name" data-bind="text: name">Miracast (Wireless Display):<span> </span></span><span class="feature-item-value" data-bind="text: value">Yes</span>
</div>
</li>
<li><span class="feature-item-value" data-bind="text: value">Airplay Built In</span></li>
<li><span class="feature-item-value" data-bind="text: value">Google Assistant Built In</span></li>
<li><span class="feature-item-value" data-bind="text: value">Hands Free Voice Control</span></li>
<li><span class="feature-item-value" data-bind="text: value">Google Cast Formerly (Chromecast)</span></li>
<li><span class="feature-item-value" data-bind="text: value"><span class="feature-item-name" data-bind="text: name">Quick Settings: </span>Yes</span></li>
<li>Bluetooth: BT5.4</li>
<li>Wi-Fi: Wi-Fi 5</li>
<li><span>HDMI1.4 &amp; HDMI2.0 &amp; HDMI2.1, HDCP1.4 &amp; HDCP2.2</span></li>
<li>HDMI 2.1(eARC/ARC): YES</li>
<li>HDMI CEC: YES</li>
<li>AMD Free Sync: YES</li>
<li>PVR/Timeshift: YES</li>
<li>
<div class="product__description rte quick-add-hidden">
<p><span class="feature-item-value" data-bind="text: value"><span data-bind="text: name" class="feature-item-name">Program Guide(EPG):<span> </span></span>Yes (for DTV programmes only)</span></p>
<span data-bind="text: pictureDesc"></span>
</div>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 180000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/85C6K1.webp?v=1745843959",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/85C6K1.webp?v=1745843959"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "samsung-du8000-85-inch-crystal-uhd-4k-smart-tv",
    name: "Samsung DU8000 85-inch Crystal UHD 4K Smart TV",
    brand: "Samsung",
    category: "televisions",
    slug: "samsung-du8000-85-inch-crystal-uhd-4k-smart-tv",
    description: `<p>✅ <strong>Key Specs</strong></p>
<ul>
<li>
<strong>Screen Size:</strong> 85 inches</li>
<li>
<strong>Resolution:</strong> 4K UHD (3840 × 2160)</li>
<li>
<strong>Display Type:</strong> Crystal UHD</li>
<li>
<strong>Processor:</strong> Crystal Processor 4K</li>
<li>
<strong>HDR:</strong> HDR10+ support</li>
<li>
<strong>Operating System:</strong> Tizen OS (Smart TV)</li>
<li>
<strong>Audio:</strong>
<ul>
<li>2CH speakers</li>
<li>Adaptive Sound</li>
</ul>
</li>
<li>
<strong>Gaming Features:</strong>
<ul>
<li>Auto Low Latency Mode (ALLM)</li>
<li>Motion Xcelerator</li>
</ul>
</li>
<li>
<strong>Smart Features:</strong>
<ul>
<li>Built-in apps (YouTube, Netflix, Prime Video, etc.)</li>
<li>Samsung Smart Hub</li>
<li>Bixby, Alexa, and Google Assistant compatible</li>
</ul>
</li>
<li>
<strong>Connectivity:</strong>
<ul>
<li>3 HDMI ports</li>
<li>2 USB ports</li>
<li>Wi-Fi &amp; Bluetooth</li>
</ul>
</li>
<li>
<strong>Design:</strong> Slim design with narrow bezels</li>
<li>
<strong>Other Features:</strong>
<ul>
<li>Eco Sensor for energy efficiency</li>
<li>Universal Guide</li>
</ul>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 210000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_4680108d-1a50-43f0-958a-13c4c14bce6d.webp?v=1753521713",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_4680108d-1a50-43f0-958a-13c4c14bce6d.webp?v=1753521713"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-43-inches-qled-tv-q6-series",
    name: "Hisense 43 inches QLED TV Q6 Series",
    brand: "Hisense",
    category: "televisions",
    slug: "hisense-43-inches-qled-tv-q6-series",
    description: `<p>Hisense 43 inches QLED TV Q6 Series• 43" 4K QLED Display - Vibrant colors thanks to Quantum Dot technology.</p>
<p>• VIDAA Smart OS with Voice Control - FastUI, favorite apps, no Google TV required.</p>
<p>Dolby Vision, HDRI0+, HLG- Cinematiccontrast and clarity.</p>
<p>• Dolby Atmos Audio - Immersive sound formovies and sports.</p>
<p>• Al Sports Mode &amp; Filmmaker Mode - Auto-tuned visuals for sports fidelity.</p>`,
    specifications: {},
    variants: [],
    price: 32000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_506f774f-aa1a-496e-a129-0c8508e2da9a.jpg?v=1753345416",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_506f774f-aa1a-496e-a129-0c8508e2da9a.jpg?v=1753345416"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-ax3100g-280w-3-1ch-soundbar",
    name: "Hisense AX3100G 280W 3.1CH Soundbar",
    brand: "Hisense",
    category: "speakers-soundbars",
    slug: "hisense-ax3100g-280w-3-1ch-soundbar",
    description: `<ul>
<li>3.1CH Dolby Atmos Soundbar</li>
<li>280W</li>
<li>6.5″ Wireless Subwoofer</li>
<li>5 Speakers</li>
<li>EzPlay</li>
<li>Bluetooth 5.0</li>
<li>AI EQ Mode</li>
<li>2 Year Warranty</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 24000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_968262ae-63c7-4893-8569-38ff2898b838.jpg?v=1753085444",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_968262ae-63c7-4893-8569-38ff2898b838.jpg?v=1753085444"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-12kg-8kg-front-load-wash-dry-washing-machine-wd5s1245bb",
    name: "Hisense 12KG/8KG Front Load Wash & Dry Washing Machine WD5S1245BB",
    brand: "Hisense",
    category: "washing-machines",
    slug: "hisense-12kg-8kg-front-load-wash-dry-washing-machine-wd5s1245bb",
    description: `<ul>
<li>Model:<a href="https://global.hisense.com/"><span> </span>WD5S1245BB</a>
</li>
<li>
<strong>Washing capacity</strong>: 12kg</li>
<li>
<strong>Dry Capacity</strong>: 8kg</li>
<li>
<strong>Spin speed</strong>:<span> </span><span style="text-decoration: underline;"><a href="https://www.hisensedealers.co.ke/">1400rpm</a></span>
</li>
<li>
<strong>Washing capacity</strong>: 12kg</li>
<li>
<strong>Spin speed</strong>: 1400rpm</li>
<li>
<strong>Energy Class</strong>: A</li>
<li>
<strong>Dimensions</strong>:  595 x 660 x 845mm</li>
<li>Fully Automatic</li>
<li>
<strong>Spin Drying Performance Class</strong>: B</li>
<li>2 years warranty</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 80000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/12kg-wd.webp?v=1750064308",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/12kg-wd.webp?v=1750064308"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-hs1800-soundbar-2-1-channel-soundbar",
    name: "Hisense HS1800 Soundbar | 2.1 Channel Soundbar",
    brand: "Hisense",
    category: "speakers-soundbars",
    slug: "hisense-hs1800-soundbar-2-1-channel-soundbar",
    description: `<ul>
<li>140W Max Audio power</li>
<li>2.1 Ch with Wireless subwoofer</li>
<li>Bass Boost</li>
<li>HDMI ARC</li>
<li>Bluetooth streaming</li>
<li>USB port</li>
<li>2 Year Warranty</li>
<li>Dolby Atmos:No</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 10000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Audio-Imagery-HS1800_1.jpg?v=1749647978",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Audio-Imagery-HS1800_1.jpg?v=1749647978"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-ax5100q-5-1-channel-580w-soundbar",
    name: "Hisense AX5100Q 5.1 Channel 580W Soundbar",
    brand: "Hisense",
    category: "speakers-soundbars",
    slug: "hisense-ax5100q-5-1-channel-580w-soundbar",
    description: `<ul>
<li>
<strong>5.1 Channel Surround Sound</strong> – Soundbar, subwoofer, and rear speakers for immersive audio</li>
<li>
<strong>580W Total Power Output</strong> – Powerful and room-filling sound</li>
<li>
<strong>Dolby Atmos &amp; DTS:X</strong> – 3D surround sound for realistic audio</li>
<li>
<strong>6.5″ Wireless Subwoofer</strong> – Deep, impactful bass with flexible placement</li>
<li>
<strong>Semi-Wireless Rear Speakers</strong> – True surround with minimal cabling</li>
<li>
<strong>Bluetooth 5.3</strong> – Seamless wireless audio streaming</li>
<li>
<strong>Multiple Sound Modes</strong> – Presets for Movie, Music, News, Game, Sport, Night &amp; AI</li>
<li>
<strong>EzPlay</strong> – Control soundbar with Hisense TV remote</li>
<li>
<strong>HDMI eARC &amp; HDMI 2.1 Input</strong> – High-quality, lag-free audio and video passthrough</li>
<li>
<strong>Wall-Mountable Design</strong> – Space-saving, clean setup</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 26000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/AX5100Q-promo-scaled1.jpg?v=1749647566",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/AX5100Q-promo-scaled1.jpg?v=1749647566"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-ax3100q-3-1-channel-500w-soundbar",
    name: "Hisense AX3100Q 3.1 Channel 500W Soundbar",
    brand: "Hisense",
    category: "speakers-soundbars",
    slug: "hisense-ax3100q-3-1-channel-500w-soundbar",
    description: `<ul>
<li>
<strong>3.1 Channel Dolby Atmos Sound</strong>: Delivers spatial audio for a cinematic experience.</li>
<li>
<strong>Powerful Output</strong>: Total system power of 500W, ensuring rich and dynamic sound.</li>
<li>
<strong>Wireless Subwoofer</strong>: 6.5″ subwoofer provides deep bass without the clutter of wires.</li>
<li>
<strong>Multiple Connectivity Options</strong>: Includes HDMI eARC, USB, Optical, AUX, Coaxial, and Bluetooth 5.0 for versatile connections.</li>
<li>
<strong>AI EQ &amp; Preset Modes</strong>: Automatically optimizes sound settings or choose from modes like Movie, Music, Night, News, Sports, and Game.</li>
<li>
<strong>EzPlay Compatibility</strong>: Seamless integration with Hisense TVs, allowing control via the TV remote.</li>
<li>
<strong>Wall-Mountable Design</strong>: Sleek and space-saving, suitable for various room setups.</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 22000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/AX3100Q-1-Badge__ScaleMaxHeightWzc1MF0.png?v=1749648258",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/AX3100Q-1-Badge__ScaleMaxHeightWzc1MF0.png?v=1749648258"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "roch-reck-631-bl-60x60-3-1-standing-cooker",
    name: "Roch RECK-631-BL 60×60 3+1 Standing Cooker",
    brand: "Roch",
    category: "cookers-ovens",
    slug: "roch-reck-631-bl-60x60-3-1-standing-cooker",
    description: `<ul>
<li><p><span><strong>3 Gas Burners + 1 Hotplate</strong> for flexible cooking options.</span></p></li>
<li><p><span><strong>Shiny Black Finish</strong> with <strong>Shiny Enamel Pan Support</strong> for durability and style.</span></p></li>
<li><p><span><strong>Electric Oven</strong> with a <strong>Rotisserie Function</strong>, perfect for roasting meats.</span></p></li>
<li><p><span><strong>Oven Lamp</strong> for better visibility while cooking.</span></p></li>
<li><p><span><strong>Mechanical Timer</strong> to help manage cooking times.</span></p></li>
<li><p><span><strong>Push Button Ignition</strong> for easy startup.</span></p></li>
<li><p><span><strong>Double Glass Oven Door</strong> for heat retention and safety.</span></p></li>
<li><p><span><strong>1-Year Warranty</strong> for peace of mind.</span></p></li>
</ul>`,
    specifications: {},
    variants: [],
    price: 26000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rochreck-631.jpg?v=1749300712",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rochreck-631.jpg?v=1749300712"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },  {
    id: "roch-rfr-325dtn-1-225-litres-no-frost",
    name: "ROCH RFR-325DTN-1 | 225 Litres No frost",
    brand: "Roch",
    category: "refrigerators",
    slug: "roch-rfr-325dtn-1-225-litres-no-frost",
    description: `<ul>
<li><p><span><strong>No-Frost Technology</strong>: Prevents ice buildup, eliminating the need for manual defrosting.</span></p></li>
<li><p><span><strong>Electronic Control System</strong>: Allows precise temperature adjustments for optimal food storage.</span></p></li>
<li><p><span><strong>Energy Saving &amp; Low Noise</strong>: Helps reduce electricity consumption while operating quietly.</span></p></li>
<li><p><span><strong>Power Cool Function</strong>: Quickly cools newly added items to preserve freshness.</span></p></li>
<li><p><span><strong>Stylish LED Control Panel</strong>: Provides clear visibility of settings and temperatures.</span></p></li>
<li><p><span><strong>Adjustable Front Feet</strong>: Ensures stability on uneven surfaces.</span></p></li>
<li><p><span><strong>Removable Gasket</strong>: Makes cleaning easier and prevents mold buildup.</span></p></li>
<li><p><span><strong>Big Crisper with Humidity Control</strong>: Helps keep fruits and vegetables fresh longer.</span></p></li>
</ul>`,
    specifications: {},
    variants: [],
    price: 48000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/roch325l.webp?v=1749299440",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/roch325l.webp?v=1749299440"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "bluetti-ac180p-portable-power-station-1800w-1440wh",
    name: "BLUETTI AC180P Portable Power Station | 1,800W 1440Wh",
    brand: "BLUETTI",
    category: "chargers-accessories",
    slug: "bluetti-ac180p-portable-power-station-1800w-1440wh",
    description: `<ul>
<li><p><span><strong>1,800W AC Output</strong> with a <strong>2,700W Power Lifting Mode</strong>, allowing it to handle high-powered devices.</span></p></li>
<li><p><span><strong>1,440Wh capacity</strong>, ensuring long-lasting power.</span></p></li>
<li><p><span><strong>11 output ports</strong>, making it compatible with multiple devices.</span></p></li>
<li><p><span><strong>Four flexible recharging methods</strong>: AC, solar, car, and generator.</span></p></li>
<li><p><span><strong>Smart control &amp; monitoring</strong> via the BLUETTI App.</span></p></li>
<li><p><span><strong>Fast charging</strong>, reaching <strong>0-80% in just 45 minutes</strong>  or <strong>0-100% in just 90 minutes</strong> with <strong>1,440W AC input</strong>.</span></p></li>
<li><span>5 Year Hassle Free<br>Warranty</span></li>
<li><span>24/7 UPS</span></li>
<li><span>3500 lifecycles.</span></li>
</ul>`,
    specifications: {},
    variants: [],
    price: 70000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/bluetti1440wh.webp?v=1749298128",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/bluetti1440wh.webp?v=1749298128"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "bluetti-eb70-portable-power-station-1000w-716wh",
    name: "BLUETTI EB70 Portable Power Station | 1,000W 716Wh",
    brand: "BLUETTI",
    category: "chargers-accessories",
    slug: "bluetti-eb70-portable-power-station-1000w-716wh",
    description: `<ul class="uk-list uk-list-disc uk-text-small uk-text-500">
<li>Massive 716Wh capacity and 1000W rated wattage(1,400W Surge)</li>
<li>The ultra-stable LiFePO4 battery chemistry,2500+ life cycles</li>
<li>2*230V AC outlets, 2*100W PD ports, 2*5V/3A USB-A ports, 2*regulated 12V/10A DC outputs, 1*12V/10A car port,1*15W wireless charging pad.</li>
<li>With max input of 200W, this power station can be fully recharged in 3-4 hrs with solar panels (OCV 12-28V, 200W)</li>
<li>It can also get fully recharged from an AC wall outlet in 3-4 hrs or a 12V car port in 7-8 hrs.</li>
<li><span>2-year Hassle Free Warranty.</span></li>
</ul>`,
    specifications: {},
    variants: [],
    price: 50000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/bluettieb-70.webp?v=1749296577",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/bluettieb-70.webp?v=1749296577"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-hs2100-2-1-channel-240w-soundbar-with-subwoofer",
    name: "Hisense HS2100 | 2.1 Channel 240W Soundbar with Subwoofer",
    brand: "Hisense",
    category: "speakers-soundbars",
    slug: "hisense-hs2100-2-1-channel-240w-soundbar-with-subwoofer",
    description: `<ul>
<li>240W Max Audio power</li>
<li>2.1 Dolby Digital Plus &amp; DTS Virtual:X</li>
<li>Wireless Subwoofer</li>
<li>Bass Boost</li>
<li>TV mode</li>
<li>EzPlay(Easy Control with Hisense TV)</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 16000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/HS210042.jpg?v=1749224707",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/HS210042.jpg?v=1749224707"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "skyworth-2-2ch-soundbar-ss888",
    name: "SKYWORTH 2.2CH SOUNDBAR SS888",
    brand: "Skyworth",
    category: "speakers-soundbars",
    slug: "skyworth-2-2ch-soundbar-ss888",
    description: `<ul>
<li>2.2 CH soundbar</li>
<li>up to 300W output</li>
<li>BT 5.0 connection</li>
<li>Built-in Subwoofer</li>
<li>HDMI (arc) input</li>
<li>Optical AUX USB Support</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 10000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/SS888-6.png?v=1749225150",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/SS888-6.png?v=1749225150"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "skyworth-5-1ch-soundbar-ss586",
    name: "SKYWORTH 5.1CH SOUNDBAR SS586",
    brand: "Skyworth",
    category: "speakers-soundbars",
    slug: "skyworth-5-1ch-soundbar-ss586",
    description: `<ul>
<li>5.1CH Soundbar</li>
<li>Wireless surround speaker</li>
<li>Dolby digital plus</li>
<li>Bluetooth ver 5.0</li>
<li>Input: USB, aux, optical, HDMI ARC</li>
<li>Remote control</li>
<li>Total max audio power output: 630W</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 22000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/SS586-8.png?v=1749223195",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/SS586-8.png?v=1749223195"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "vp2111sb-240-watts-2-1-ch-sound-bar",
    name: "VP2111SB 240 Watts 2.1 CH Sound Bar",
    brand: "Vision Plus",
    category: "speakers-soundbars",
    slug: "vp2111sb-240-watts-2-1-ch-sound-bar",
    description: `<ul>
<li>Power Output: 240W Max Power</li>
<li>Sub Woofer Speaker: 5.25-inch</li>
<li>Sound Bar Speakers: 2.25-inch X2</li>
<li>Source input: BT/ USB/ OPTICAL/ HDMI/ AUX</li>
<li>FM Radio: None</li>
<li>Bluetooth: Version: 5.0</li>
<li>Sound bar dimensions: W150*D280*H340MM</li>
<li>Subwoofer dimensions: L700*D88*H73MM</li>
<li>24 Months Warranty</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 10000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/vp21121.webp?v=1749222860",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/vp21121.webp?v=1749222860"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "skyworth-3-1ch-ss531-soundbar",
    name: "Skyworth 3.1Ch SS531 Soundbar",
    brand: "Skyworth",
    category: "speakers-soundbars",
    slug: "skyworth-3-1ch-ss531-soundbar",
    description: `<ul>
<li>Skyworth 3.1Ch Soundbar SS531 </li>
<li>Skyworth SS531 Soundbar with Wireless Subwoofer</li>
<li>Bluetooth Soundbar 3.1 Channel</li>
<li>HDMI ARC Soundbar for Home Theater</li>
<li>12 Months warranty</li>
<li>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 18000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Skyworth-3.1Ch-SS531-Soundbar.jpg?v=1749222170",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Skyworth-3.1Ch-SS531-Soundbar.jpg?v=1749222170"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "bolesi-t-shaped-90cm-hood-t555b",
    name: "BOLESI T SHAPED 90CM HOOD T555B",
    brand: "BOLESI",
    category: "cookers-ovens",
    slug: "bolesi-t-shaped-90cm-hood-t555b",
    description: `<ul>
<li><span>Can be equipped with a smoke pipe.</span></li>
<li><span>Can be used for internal circulation.</span></li>
<li><span>Touch screen switch.</span></li>
<li>
<span></span><span>Gesture switch.</span>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 24000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/BOLESIT555B.png?v=1748689391",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/BOLESIT555B.png?v=1748689391"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "tcl-p7k-55-inch-qled-4k-hdr-tv",
    name: "TCL P7K 55 Inch QLED 4K HDR TV",
    brand: "TCL",
    category: "televisions",
    slug: "tcl-p7k-55-inch-qled-4k-hdr-tv",
    description: `<ul>
<li>QLED</li>
<li>HVA Screen</li>
<li> AiPQ Processor</li>
<li>Multi HDR Format</li>
<li>Game Master</li>
<li>120Hz Game Accelerator in FHD resolution</li>
<li> Dolby Atmos</li>
<li>Google TV</li>
<li>Hands-Free Google Assistant.</li>
<li>Works with Alexa</li>
<li>Free wall bracket and Tv Guard.</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 62000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/P7K-55.webp?v=1748613031",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/P7K-55.webp?v=1748613031"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "simfer-cooker-5-gas-inox",
    name: "Simfer Cooker 5 Gas – Inox",
    brand: "Simfer",
    category: "cookers-ovens",
    slug: "simfer-cooker-5-gas-inox",
    description: `<table border="1">
<tbody>
<tr>
<th colspan="1">Specifications</th>
</tr>
<tr>
<td>
<ul>
<li>DIMENSIONS WXD 900 X 600 MM</li>
<li>5 Gas Cooker</li>
<li>FFD For Hobs</li>
<li>Triple Wok Burner 3.6 Kw</li>
<li>1 Oven Tray</li>
<li>1 0ven Grid</li>
<li>Oven Lamp</li>
<li>Electrical Oven with Fan (0+6 Functions)</li>
<li>Turnspit, With Drawer</li>
<li>Mechanic Timer</li>
<li>Adjustable Feet</li>
<li>Half Inox (Sides Are Silver Color Painted)</li>
</ul>
</td>
</tr>
</tbody>
</table>`,
    specifications: {},
    variants: [],
    price: 75000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/FB9507SEWIM_sim_5g.png?v=1748522163",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/FB9507SEWIM_sim_5g.png?v=1748522163"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "simfer-cooker-4-gas-2-electric",
    name: "Simfer Cooker 4 Gas +2 Electric",
    brand: "Simfer",
    category: "cookers-ovens",
    slug: "simfer-cooker-4-gas-2-electric",
    description: `<table border="1">
<tbody>
<tr>
<th colspan="1">Specifications</th>
</tr>
<tr>
<td>
<ul>
<li>90*60CM</li>
<li>4 Gas Euro Type Pool Burners (SABAF)</li>
<li>2 Hot Plate (RAPID)</li>
<li>Thermostat</li>
<li>FFD for Hobs</li>
<li>Bottle Compartment</li>
<li>Double Glass Oven Door, 1 Oven Tray, 1 Oven Grid</li>
<li>Electric Oven 0+6 Functions</li>
<li>Turnspit</li>
<li>Mechanic Timer</li>
<li>Adjustable Feet</li>
<li>Flap Opened Drawer Lid</li>
<li>Can fit a 13Kg Gas Cylinder</li>
</ul>
</td>
</tr>
</tbody>
</table>`,
    specifications: {},
    variants: [],
    price: 78000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/simfer4g2e2.png?v=1748517743",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/simfer4g2e2.png?v=1748517743"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-q6nken-75-inch-4k-qled-smart-tv",
    name: "HISENSE Q6NKEN 75 INCH 4K QLED SMART TV",
    brand: "Hisense",
    category: "televisions",
    slug: "hisense-q6nken-75-inch-4k-qled-smart-tv",
    description: `<ul>
<li>Size:75 Inch</li>
<li>Model Number: 75Q6NKEN</li>
<li>Series: Q6NKEN</li>
<li>Category: QLED</li>
<li>Screen Size: 75 Inch</li>
<li>Model Year: 2024</li>
<li>Front Colour: Black</li>
<li>Resolution: 4K / 3840 x 2160</li>
<li>Smooth Motion Rate: 120Hz</li>
<li>Accessories: Free Tv Guard and Wall bracket</li>
<li>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 115000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Hisense-Q6NKEN-75-Inch.webp?v=1748513979",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Hisense-Q6NKEN-75-Inch.webp?v=1748513979"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-75-inch-a6-series",
    name: "Hisense 75'' inch A6 Series",
    brand: "Hisense",
    category: "televisions",
    slug: "hisense-75-inch-a6-series",
    description: `<ul>
<li>Display Size : 75″</li>
<li>Display Feature: 4K Ultra HD</li>
<li>Smart TV: Yes</li>
<li>Resolution: 4K (3840 x 2160)</li>
<li>HDMI: 3 x HDMI 2.0</li>
<li>USB Slots: 2 x USB 2.0</li>
<li>Dimensions: 123.2 x 71.1 x 7.4 cm</li>
<li>Dimensions (W x H x D) with Stand: 1865 x 1150 x 201 mm</li>
<li>Accessories;Free Wall bracket and Tv Guard</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 100000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/hisense_television_led_uhd_a6_75_inch_tv.webp?v=1748513226",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/hisense_television_led_uhd_a6_75_inch_tv.webp?v=1748513226"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "tcl-t6c-50-inch-qled-smart-tv",
    name: "TCL T6C 50 inch QLED Smart TV",
    brand: "TCL",
    category: "televisions",
    slug: "tcl-t6c-50-inch-qled-smart-tv",
    description: `<ul>
<li>Year: 2025</li>
<li>QLED – Colorful Quantum Crystal</li>
<li>Google TV &amp; Google Assistant</li>
<li>Hands free voice control</li>
<li>Color optimization technology</li>
<li>Slim &amp; Metallic Uni-body</li>
<li>AiPQ Processor: Ai contrast, Ai Clarity, Ai Motion, Ai HDR</li>
<li>Game Accelerator 120VRR</li>
<li>Dolby Atmos</li>
<li>Google Meet</li>
<li>HDR10+</li>
<li>Display Type; QLED with Quantum Dot Technology</li>
<li>Audio; Dolby Atmos, 40W, DTS:X</li>
<li>Memory; 2GB RAM, 16GB Storage</li>
<li>Brightness; 350nits</li>
<li>Design; Slim &amp; Metallic Uni-body</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 42000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/55T6C1_948ebe0b-657d-4950-9ff6-4dc768562531.webp?v=1748337524",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/55T6C1_948ebe0b-657d-4950-9ff6-4dc768562531.webp?v=1748337524"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-10kg-wash-dry-front-load-washing-machine-wd3q1043bt",
    name: "Hisense 10Kg Wash & Dry Front Load Washing Machine WD3Q1043BT",
    brand: "Hisense",
    category: "washing-machines",
    slug: "hisense-10kg-wash-dry-front-load-washing-machine-wd3q1043bt",
    description: `<ul>
<li>Spin speed: 1400RPM</li>
<li>Wi-Fi Control</li>
<li>Max. Temperature: 95 degrees</li>
<li>Washing capacity: 10Kg</li>
<li>Drying capacity: 6Kg</li>
<li>Dimensions: 595 x 610 x 845mm</li>
<li>Energy class efficiency wash: B/A</li>
<li>Energy efficiency class Wash &amp; Dry: E</li>
<li>Voltage: 220-240V</li>
<li>Tub/Drum Material: Plastic/ Stainless steel</li>
<li>Buttons: Push buttons</li>
<li>Intelligent LED Display</li>
<li>Washer &amp; Dryer 2 In 1</li>
<li>Pure Jet</li>
<li>Durable Inverter</li>
<li>Allergy / Baby Steam Care</li>
<li>1400rpm spin speed</li>
<li>Snowflake drum</li>
<li>Memory back</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 60000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/10Kg-wd.webp?v=1748268075",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/10Kg-wd.webp?v=1748268075"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "syinix-12kg-front-load-wash-spin-washing-machine",
    name: "Syinix 12kg Front Load, Wash & Spin, Washing Machine",
    brand: "Syinix",
    category: "washing-machines",
    slug: "syinix-12kg-front-load-wash-spin-washing-machine",
    description: `<ul>
<li><p><span><strong>Capacity</strong>: 12kg Large Capacity – Ideal for medium to large households, handling bulky laundry like bedding, curtains, and large clothing loads.</span></p></li>
<li><p><span><strong>Design</strong>: Front Load – Saves space, uses less water, and provides efficient cleaning compared to top-load machines.</span></p></li>
<li><p><span><strong>Wash &amp; Spin Functionality</strong>: Combines washing and spinning in one cycle for convenience and time-saving.</span></p></li>
<li><p><span><strong>Energy Efficiency</strong>: Designed to consume less power and water, making it eco-friendly and cost-effective.</span></p></li>
<li><p><span><strong>Wash Programs</strong>: Multiple preset programs for different fabric types and laundry needs (e.g., cotton, synthetic, delicate, quick wash).</span></p></li>
<li><p><span><strong>User Interface</strong>: LED Display – A user-friendly interface with a clear display for easy operation and cycle monitoring.</span></p></li>
<li><p><span><strong>Convenience Features</strong>:</span></p>
<ul>
<li><p><span><strong>Delay Start Feature</strong> – Set a timer for the wash cycle to start later, perfect for busy schedules.</span></p></li>
<li><p><span><strong>Child Lock</strong> – Ensures safety by preventing accidental changes to settings.</span></p></li>
<li><p><span><strong>Self-Cleaning Function</strong> – Maintains hygiene by cleaning the drum and preventing odor buildup.</span></p></li>
</ul>
</li>
<li><p><span><strong>Performance Enhancements</strong>:</span></p>
<ul>
<li><p><span><strong>High Spin Speed</strong> – Effectively removes excess water from clothes, reducing drying time.</span></p></li>
<li><p><span><strong>Quiet Operation</strong> – Engineered for low noise levels, making it ideal for home use.</span></p></li>
<li><p><span><strong>Stainless Steel Drum</strong> – Durable, rust-resistant, and gentle on clothes.</span></p></li>
</ul>
</li>
<li><p><span><strong>Safety &amp; Stability Features</strong>:</span></p>
<ul>
<li><p><span><strong>Overflow Protection</strong> – Prevents water overflow for safe operation.</span></p></li>
<li><p><span><strong>Adjustable Feet</strong> – Provides stability on uneven surfaces for smooth performance.</span></p></li>
</ul>
</li>
<li><p><span><strong>Aesthetic &amp; Build Quality</strong>:</span></p>
<ul>
<li><p><span><strong>Compact and Stylish Design</strong></span></p></li>
</ul>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 55000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Syinix-WMFrontLoadSeries_12.webp?v=1748265288",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Syinix-WMFrontLoadSeries_12.webp?v=1748265288"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "syinix-washing-machine-8kg-front-load-wash-spin",
    name: "Syinix Washing Machine - 8kg Front Load Wash & Spin",
    brand: "Syinix",
    category: "washing-machines",
    slug: "syinix-washing-machine-8kg-front-load-wash-spin",
    description: `<ul>
<li>Automatic Washing</li>
<li>Smart Washing</li>
<li>90 degrees Sterilization Wash</li>
<li>15min Quick Wash</li>
<li>LED Lighting</li>
<li>8Kg Spin Capacity</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 38000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Syinix-WMFrontLoadSeries8-0.webp?v=1748264238",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Syinix-WMFrontLoadSeries8-0.webp?v=1748264238"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "syinix-10kg-front-load-washing-machine-wash-spin",
    name: "Syinix 10Kg Front Load Washing Machine Wash & Spin",
    brand: "Syinix",
    category: "washing-machines",
    slug: "syinix-10kg-front-load-washing-machine-wash-spin",
    description: `<p><span><strong>Brand &amp; Model</strong>: Syinix 10Kg Front Load</span></p>
<p><span><strong>Capacity</strong>: 10 Kg</span></p>
<p><span><strong>Type</strong>: Front Load</span></p>
<p><span><strong>Motor Type</strong>: Inverter Motor</span></p>
<p><span><strong>Spin Speed</strong>: Up to 1400 RPM</span></p>
<p><span><strong>Wash Programs</strong>: Multiple (cotton, quick wash, delicate, etc.)</span></p>
<p><span><strong>Energy Efficiency</strong>: High, inverter motor reduces power usage</span></p>
<p><span><strong>Control Type</strong>: Digital display with touch buttons</span></p>
<p><span><strong>Special Features</strong>: Child lock, delay start, anti-wrinkle cycle</span></p>
<p><span><strong>Noise Level</strong>: Low noise, quiet operation</span></p>
<p><span><strong>Design</strong>: Compact and modern front load</span></p>
<p><strong>A<span>dditional smart connectivity: </span></strong>No</p>`,
    specifications: {},
    variants: [],
    price: 50000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Syinix-10Kg-Front-Load-Washing-Machine-Wash-Spin.jpg?v=1748262454",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Syinix-10Kg-Front-Load-Washing-Machine-Wash-Spin.jpg?v=1748262454"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "syinix-10kg-twin-tub-washing-machine",
    name: "Syinix 10kg Twin Tub Washing Machine",
    brand: "Syinix",
    category: "washing-machines",
    slug: "syinix-10kg-twin-tub-washing-machine",
    description: `<ul>
<li>Wash Capacity: 10kgs</li>
<li>Spin Capacity: 5.5kgs</li>
<li>Dual Motor– Air Dry and Soft Vortex Wash</li>
<li>Powerful Wash and Spin Motor</li>
<li>Remove Moisture Remaining</li>
<li>20 Min Pre-soaking Deep-whirl Flow Wash</li>
<li>Fine-tuning Hand-wash</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 25000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/10kgtwin-syinix.png?v=1748262100",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/10kgtwin-syinix.png?v=1748262100"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hithium-hero-ee1",
    name: "Hithium Hero EE1",
    brand: "Hithium",
    category: "chargers-accessories",
    slug: "hithium-hero-ee1",
    description: `<ul>
<li>2 Years warranty.</li>
<li>Three-in-One Design – It combines an inverter, lithium battery, and MPPT solar charge controller in one compact unit.</li>
<li>Solar Compatibility – Supports solar input voltage range of 12V–36V, allowing users to harness renewable energy.</li>
<li>Three-in-One Design – Combines an inverter, lithium battery, and MPPT solar charge controller in one compact unit.</li>
<li>Solar Compatibility – Supports solar input voltage range of 12V–36V, allowing users to harness renewable energy.<br>
</li>
<li>Plug &amp; Play Convenience – No complex setup required—just plug it in and start using it immediately.</li>
<li>High Battery Capacity – With a 1004Wh battery, it provides several hours of backup power depending on usage.</li>
<li>200W Rated Power – Suitable for low to moderate power appliances like laptops, TVs, routers, printers, and small fans.</li>
<li>4-Level Charge Indicator – Features 4 LED lights to display battery charge levels, making it easy to monitor power status.</li>
<li>Compact &amp; Portable – Designed for easy transport, making it ideal for off-grid and emergency power solutions.</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 32000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/EE2.webp?v=1747913006",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/EE2.webp?v=1747913006"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "syinix-460l-non-frost-fridge-side-by-side",
    name: "Syinix 460L Non Frost Fridge Side by Side",
    brand: "Syinix",
    category: "refrigerators",
    slug: "syinix-460l-non-frost-fridge-side-by-side",
    description: `<ul>
<li>Large Capacity Frost-Free Fridge</li>
<li>Energy-Efficient</li>
<li>Top Freezer Refrigerator in Kenya</li>
<li>Water Dispenser</li>
<li>Large 460L capacity ideal for medium to large households</li>
<li>Frost-free technology eliminates the need for manual defrosting</li>
<li>Energy-efficient A+ rating reduces electricity costs</li>
<li>Adjustable shelves for customizable storage</li>
<li>Bright LED lighting enhances visibility</li>
<li>Stylish design with durable materials</li>
<li>Free Fridge guard </li>
</ul>`,
    specifications: {},
    variants: [],
    price: 85000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Syinix-FridgeSBSSeries-01_900x-460l.webp?v=1748620656",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Syinix-FridgeSBSSeries-01_900x-460l.webp?v=1748620656"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "syinix-210l-frost-fridges-with-dispenser",
    name: "Syinix 210L Frost Fridges With Dispenser.",
    brand: "Syinix",
    category: "refrigerators",
    slug: "syinix-210l-frost-fridges-with-dispenser",
    description: `<ul>
<li>210L Capacity</li>
<li>110W</li>
<li>Silver Grey</li>
<li>3star</li>
<li>215 kWh/per year<br>
</li>
<li>Water dispenser with a fast freezing to -18 degrees Celsius</li>
<li>5 Years warranty on the inverter compressor.</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 40000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Syinix-Fridge210LwithDispenser-01_1800x1800_7ea3af48-380a-48fd-9dd4-deadde6a7b72.webp?v=1749655541",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Syinix-Fridge210LwithDispenser-01_1800x1800_7ea3af48-380a-48fd-9dd4-deadde6a7b72.webp?v=1749655541"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "syinix-210l-frost-fridges-no-dispenser",
    name: "Syinix 210L Frost Fridges No Dispenser",
    brand: "Syinix",
    category: "refrigerators",
    slug: "syinix-210l-frost-fridges-no-dispenser",
    description: `<ul>
<li>30% Energy saving</li>
<li>-25 Degrees deep freezing</li>
<li>Freezer room plus</li>
<li>delicate appearance</li>
<li>137 L</li>
<li>50/60HZ rated frequency</li>
<li>220-240V rated voltage</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 35000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Syinix-DefrostSeries210L-01_1800x1800_507a2e6c-5ad6-41cf-a764-33e9f0074a8d.webp?v=1747642819",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Syinix-DefrostSeries210L-01_1800x1800_507a2e6c-5ad6-41cf-a764-33e9f0074a8d.webp?v=1747642819"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "cp-602-double-arm-tv-wall-mount-40-to-80inches",
    name: "CP 602 Double Arm TV Wall Mount 40 to 80inches",
    brand: "CP",
    category: "chargers-accessories",
    slug: "cp-602-double-arm-tv-wall-mount-40-to-80inches",
    description: `<ul>
<li><span>Swivel double arm tv wall mount </span></li>
<li><span>Suitable for 40 inches to 80 inches </span></li>
<li><span>It's a best quality </span></li>
</ul>`,
    specifications: {},
    variants: [],
    price: 4000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Cp602_1.jpg?v=1746607264",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Cp602_1.jpg?v=1746607264"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "ecoflow-e980-powerstation-980wh",
    name: "Ecoflow E980 Powerstation 980Wh",
    brand: "Ecoflow",
    category: "chargers-accessories",
    slug: "ecoflow-e980-powerstation-980wh",
    description: `<ol>
<li>Quick &amp; Efficient Charging</li>
<li> Power Multiple Devices Simultaneously </li>
<li>Long-Lasting &amp; Durable<br>
</li>
<li>Versatile Solar Charging</li>
<li>Lightweight &amp; Portable Design</li>
<li> FREE GIFT: 6-in-1 Multifunctional Fan</li>
<li><span>980Wh</span></li>
</ol>`,
    specifications: {},
    variants: [],
    price: 60000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/980W_3.jpg?v=1746540010",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/980W_3.jpg?v=1746540010"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "ecoflow-60w-portable-solar-panel",
    name: "EcoFlow 60W Portable Solar Panel",
    brand: "Ecoflow",
    category: "chargers-accessories",
    slug: "ecoflow-60w-portable-solar-panel",
    description: `<ul>
<li>Take solar power on the go</li>
<li>Charge faster with high 23.4% conversion rate.</li>
<li>Easy 10-second setup.</li>
<li>IP68 rating ensured with multi-layer materials.</li>
<li>3.2kg &amp; easy one-hand carry design.</li>
<li><br></li>
</ul>`,
    specifications: {},
    variants: [],
    price: 12000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/eco60w2.jpg?v=1746532669",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/eco60w2.jpg?v=1746532669"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "ecoflow-220w-bifacial-portable-solar-panel",
    name: "EcoFlow 220W Bifacial Portable Solar Panel",
    brand: "Ecoflow",
    category: "chargers-accessories",
    slug: "ecoflow-220w-bifacial-portable-solar-panel",
    description: `<p><span class="font-family-semibold">Dimensions (folded) (cm)</span><span class="specValue">82.0*50.0*3.2 </span></p>
<p><span class="font-family-semibold">Weight (with kickstand case) (kg)</span><span class="specValue">14kg</span></p>
<p><span class="specValue"><span>220W (±5W)* front, 155W (±5W)* rear</span></span></p>`,
    specifications: {},
    variants: [],
    price: 36000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/ecoflow220w1.png?v=1746529234",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/ecoflow220w1.png?v=1746529234"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "ecoflow-110w-portable-solar-panel",
    name: "Ecoflow 110W Portable Solar Panel",
    brand: "Ecoflow",
    category: "chargers-accessories",
    slug: "ecoflow-110w-portable-solar-panel",
    description: `<p>Folded Dimention;53.5x42.5x2.5cm</p>
<p>Rated power;110w </p>
<p>Weight;4Kg</p>
<p> </p>`,
    specifications: {},
    variants: [],
    price: 20000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/3_51aaf42f-ae3e-4c45-bdd4-5f03fb45c21d.jpg?v=1746531719",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/3_51aaf42f-ae3e-4c45-bdd4-5f03fb45c21d.jpg?v=1746531719"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-airfryer-8-6l",
    name: "Hisense Airfryer 8.6L",
    brand: "Hisense",
    category: "cookers-ovens",
    slug: "hisense-airfryer-8-6l",
    description: `<ul>
<li>Capacity: 8.6Liters</li>
<li>Total power: 2700W</li>
<li>Finish: Matt black</li>
<li>Two independent cooking baskets</li>
<li>Multi LED control</li>
<li>Non-stick coated crisper plates</li>
<li>Non-stick coated detachable baskets</li>
<li>Cool touch handle</li>
<li>Temperature range: 80-200℃</li>
<li>Anti-slip feet</li>
<li>Overheat protection</li>
<li>8 preset cooking menus</li>
<li>Memory function</li>
<li>Dual: Removable frying baskets and pots</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 15000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/HISENSE_8.6_1.webp?v=1746103142",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/HISENSE_8.6_1.webp?v=1746103142"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-6-3-l-airfryer",
    name: "Hisense 6.3 L Airfryer",
    brand: "Hisense",
    category: "cookers-ovens",
    slug: "hisense-6-3-l-airfryer",
    description: `<ul>
<li>Touch Control With LCD Display</li>
<li>Dual baskets</li>
<li>1700W</li>
<li>Memory Function</li>
<li>6.3L capacity</li>
<li>5.0L Frying Basket Capacity</li>
<li>Adjustable Thermostat Control Temperature Cooking</li>
<li>0-60 Minute Timer</li>
<li>Non-Stick Surface</li>
<li>Detachable Pot &amp; Frying Basket</li>
<li>Overheat Protection</li>
<li>Operation Light Indicator</li>
<li>Non Slip Fee</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 10000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/HISENSE1.webp?v=1746102886",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/HISENSE1.webp?v=1746102886"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "syinix-7-5l-air-fryer",
    name: "Syinix 7.5L Air Fryer",
    brand: "Syinix",
    category: "cookers-ovens",
    slug: "syinix-7-5l-air-fryer",
    description: `<ul>
<li>7.5l extra large capacity frying basket</li>
<li>electronic control; touch keys</li>
<li>pump the barrel automatically to power off</li>
<li>8 smart menus</li>
<li>viewable window</li>
<li>nonslip and non-hot handle</li>
<li>1650 watts</li>
<li><br></li>
</ul>`,
    specifications: {},
    variants: [],
    price: 9000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Synix-Air-Fryer-7.5-Liter.webp?v=1746097825",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Synix-Air-Fryer-7.5-Liter.webp?v=1746097825"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "smartpro-5l-airfryer",
    name: "Smartpro 5L Airfryer",
    brand: "Smartpro",
    category: "cookers-ovens",
    slug: "smartpro-5l-airfryer",
    description: `<ul>
<li>5.0Ltrs Air Fryer Hot Air Oven</li>
<li>Fry Force 360 Technology Cooks Food quickly and even with little no oil</li>
<li>Rotary Temperature Control Knob up to 200 degrees</li>
<li>Non-Stick Dish wash safe oil basket</li>
<li>Rated Power: 220-240V – 50/60Hz</li>
<li>Power Input: 1500W</li>
<li>Capacity 5ltrs.</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 5000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/SMARTPRO5L.jpg?v=1746094531",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/SMARTPRO5L.jpg?v=1746094531"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "syinix-8l-air-fryer",
    name: "Syinix 8L Air Fryer",
    brand: "Syinix",
    category: "cookers-ovens",
    slug: "syinix-8l-air-fryer",
    description: `<p>8L extra-large capacity<br>1650W large power<br>Temperature control: up to 200℃<br>7 cooking preset functions&amp;nbsp;<br>12+1 month warranty</p>`,
    specifications: {},
    variants: [],
    price: 10000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/SYNIX8L.webp?v=1746094948",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/SYNIX8L.webp?v=1746094948"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "nunix-5l-airfryer",
    name: "Nunix 5L Airfryer",
    brand: "Nunix",
    category: "cookers-ovens",
    slug: "nunix-5l-airfryer",
    description: `<ul>
<li>Safe to use.</li>
<li>1400 watts</li>
<li>The hollow basket is not stained and easy to clean thus hygienic for cooking</li>
<li>360° high-speed hot air circulation. </li>
<li>Good heat resistance.</li>
<li> High quality non-stick pan liner. </li>
<li>Inner liner material: Non-stick pot coating.</li>
<li>Pot capacity: 5L.</li>
<li>Adjustable Time &amp; Temperature</li>
<li>Easy to clean<br>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 5000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/nunix5l.jpg?v=1746093298",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/nunix5l.jpg?v=1746093298"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "nunix-c20pg-20l-digital-microwave-oven-with-grill",
    name: "Nunix C20PG 20L Digital Microwave Oven with Grill",
    brand: "Nunix",
    category: "microwaves",
    slug: "nunix-c20pg-20l-digital-microwave-oven-with-grill",
    description: `<p><strong>Key Features:</strong></p>
<ul>
<li>20 Litres Microwave</li>
<li>800 Watts</li>
<li>Digital control panel</li>
<li>Child lock</li>
<li>End reminder signal</li>
<li>Push &amp; Pull Handle</li>
<li>Glass Turntable</li>
<li>Defrost setting</li>
<li>Grill</li>
<li>10 Power Levels</li>
<li>6 Preset Auto Cooking Settings</li>
<li>Digital Display</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 9000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/1-79-1.jpg?v=1746007949",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/1-79-1.jpg?v=1746007949"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "ugali-cooker",
    name: "Ugali Cooker",
    brand: "Syinix",
    category: "cookers-ovens",
    slug: "ugali-cooker",
    description: `<ul>
<li>Fully Automatic All-Purpose<span> Machine.</span>
</li>
<li>All-purpose swallow food; such<span> as Amala, Fufu, Pounded yam, Semolina, Eba, Wheat, Banku, Ugali to mention but a few.</span>
</li>
<li>5-liter large capacity.</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 12000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Syinix-UgaliCooker1.webp?v=1746005609",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Syinix-UgaliCooker1.webp?v=1746005609"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "ugali-cooker-eco",
    name: "Ugali Cooker Eco",
    brand: "Syinix",
    category: "cookers-ovens",
    slug: "ugali-cooker-eco",
    description: `<ul>
<li>Multifunctional food processor</li>
<li>Fully automatic</li>
<li>Fast cooking, saves time</li>
<li>Natural taste</li>
<li>6 Litre large capacity</li>
<li>1000W pounding</li>
<li>900W heating<br>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 10000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Syinix-UgaliCookerEco-01.webp?v=1746005103",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Syinix-UgaliCookerEco-01.webp?v=1746005103"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "smart-pro-20l-digital-microwave-oven",
    name: "Smart Pro 20L Digital Microwave Oven",
    brand: "Smart Pro",
    category: "microwaves",
    slug: "smart-pro-20l-digital-microwave-oven",
    description: `<p><span><strong>Capacity</strong>: 20L size, great for smaller households to reheat or defrost meals.</span></p>
<p><span><strong>Control</strong>: Easy-to-use digital panel for cooking functions and timers.</span></p>
<p><span><strong>Power Levels</strong>: Multiple settings for flexible cooking.</span></p>
<p><span><strong>Defrost</strong>: Quick thawing for frozen food.</span></p>
<p><span><strong>Design</strong>: Sleek black finish, blends with any kitchen décor.</span></p>`,
    specifications: {},
    variants: [],
    price: 8500,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/smart_pro_20l_microwave_1.jpg?v=1745937556",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/smart_pro_20l_microwave_1.jpg?v=1745937556"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "synix-manual-microwave-20l",
    name: "Synix Manual Microwave 20L",
    brand: "Synix",
    category: "microwaves",
    slug: "synix-manual-microwave-20l",
    description: `<ul>
<li>Highly efficient magnetron for fast and reliable performance</li>
<li>360-degree rotating heating plate for even cooking</li>
<li>Durable structural design for long-lasting use</li>
<li>Safe radiation protection with advanced shielding</li>
<li>Noise insulation for quiet operation</li>
<li>Easy-to-clean interior cavity</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 7000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Syinix-20L-Manual-Microwave_3.jpg?v=1745935308",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Syinix-20L-Manual-Microwave_3.jpg?v=1745935308"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hanmac-hmr20m2-20l-manual-microwave",
    name: "HANMAC HMR20M2 20L Manual Microwave",
    brand: "HANMAC",
    category: "microwaves",
    slug: "hanmac-hmr20m2-20l-manual-microwave",
    description: `<p>5 Power Levels – Customize your cooking with 5 different power settings to perfectly cook a variety of dishes.35-Minute</p>
<p>Digital Timer: Precisely time your meals with an easy-to-set 35-minute digital timer, ensuring perfect results every time.</p>
<p>Defrost Function-Thaw your frozen foods quickly and evenly with our efficient defrost setting, saving you time and preserving food quality.</p>
<p>Speedy Cooking -Get your meals ready in no time with our rapid cooking feature that doesn’t compromise on taste or texture.</p>
<p>Cooking Completion Signal-Never miss the moment your food is perfectly cooked with our audible alert that lets you know when it’s time to feast.</p>
<p>255mm Glass Turntable -The sturdy glass turntable ensures even cooking and is easily removable for cleaning.</p>
<p>20 Liters Capacity</p>`,
    specifications: {},
    variants: [],
    price: 9000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/hanmacmanual20lmicrowave1.webp?v=1745934683",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/hanmacmanual20lmicrowave1.webp?v=1745934683"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "von-vams-20dgx-microwave-oven-solo-20l",
    name: "Von VAMS-20DGX Microwave Oven Solo - 20L",
    brand: "Von",
    category: "microwaves",
    slug: "von-vams-20dgx-microwave-oven-solo-20l",
    description: `<ul>
<li>Solo microwave</li>
<li>Power: 700W</li>
<li>Capacity: 20 Litres.</li>
<li>Digital Control</li>
<li>Touch control panel</li>
<li>7 auto-cook menus</li>
<li>Memory cooking (a combination of different programs)</li>
<li>Strong glass door</li>
<li>Grey interior cavity</li>
<li>Extra large cavity space</li>
<li>Normal cooking programs (power and time setting)</li>
<li>External door handle</li>
<li>Easy-to-clean interior</li>
<li>Silver</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 9000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/VON20LSILVER.png?v=1745930791",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/VON20LSILVER.png?v=1745930791"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "mika-microwave-23l-without-grill-black",
    name: "Mika Microwave 23L Without Grill-Black",
    brand: "MIKA",
    category: "microwaves",
    slug: "mika-microwave-23l-without-grill-black",
    description: `<ul>
<li>Output: 800W.</li>
<li>Capacity: 23 Liters.</li>
<li>Voltage: AC 230-240V/50Hz.</li>
<li>Digital Control.</li>
<li>6 Auto Cooking Menus</li>
<li>11 Power Levels</li>
<li>Intelligent Memory</li>
<li>Speed &amp; Weight Defrost Function</li>
<li>Express Cooking</li>
<li>Digital clock, Time &amp; Display</li>
<li>Child Lock</li>
<li>Durable Glass Door</li>
<li>Outside Handle Door Opening.</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 12000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/mika23lblacknogrill.jpg?v=1745930459",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/mika23lblacknogrill.jpg?v=1745930459"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "mika-microwave-oven-23l-digital-with-grill-silver",
    name: "Mika Microwave Oven 23L Digital With Grill-Silver",
    brand: "MIKA",
    category: "microwaves",
    slug: "mika-microwave-oven-23l-digital-with-grill-silver",
    description: `<ul>
<li>Output: 800W</li>
<li>Capacity: 23 Litres</li>
<li>Voltage: AC 230-240V/50Hz</li>
<li>Grill Function – 1000 Watts</li>
<li>Digital Control</li>
<li>6 Auto Cooking Menus</li>
<li>5 Power Levels</li>
<li>Intelligent Memory – Can save the preferred cooking option</li>
<li>Multi-Stage Cooking – Can set 2 different functions to run continuously</li>
<li>Time Defrost Function</li>
<li>Express Cooking</li>
<li>Digital clock, Time &amp; Display</li>
<li>Child Lock</li>
<li>Durable Glass Door</li>
<li>Outside Handle Door Opening</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 14000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/MIKA_23L_WITH_GRILL_-GREY.webp?v=1745932836",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/MIKA_23L_WITH_GRILL_-GREY.webp?v=1745932836"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "synix-20l-microwave-oven-silver",
    name: "Synix 20L Microwave Oven-Silver",
    brand: "Synix",
    category: "microwaves",
    slug: "synix-20l-microwave-oven-silver",
    description: `<ul>
<li>20L - Large Capacity</li>
<li>700W - High power fast heating</li>
<li>11 microwave power levels</li>
<li>Safe radiation protection</li>
<li>Noise reduction</li>
<li>Easy to clean</li>
<li>270mm glass turntable</li>
<li>Multi-function design</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 9000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Syinix-MicrowaveMW720-05E-01_1800x18001_9d06f26c-6c34-45ce-a665-306bdd73dd8f.webp?v=1745928665",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Syinix-MicrowaveMW720-05E-01_1800x18001_9d06f26c-6c34-45ce-a665-306bdd73dd8f.webp?v=1745928665"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "von-25l-digital-microwave",
    name: "Von 25L Digital Microwave",
    brand: "Von",
    category: "microwaves",
    slug: "von-25l-digital-microwave",
    description: `<ul>
<li>Grill microwave</li>
<li>Power: 900W</li>
<li>Capacity: 25 Liters.</li>
<li>6 power levels</li>
<li>Digital Control</li>
<li>Auto-cook menus</li>
<li>Memory cooking (a combination of different programs)</li>
<li>Child lock</li>
<li>Mirror glass door</li>
<li>Grey interior cavity</li>
<li>Extra large cavity space</li>
<li>Normal cooking programs (power and time setting)</li>
<li>External door handle</li>
<li>Easy-to-clean interior</li>
<li>Black</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 15000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/VON25LMICROWAVE.png?v=1745928463",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/VON25LMICROWAVE.png?v=1745928463"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "mika-microwave-oven-20l-digital-with-grill-combi-silver",
    name: "MIKA Microwave Oven, 20L, Digital, With Grill (Combi), Silver",
    brand: "MIKA",
    category: "microwaves",
    slug: "mika-microwave-oven-20l-digital-with-grill-combi-silver",
    description: `<p>Digital clock, Time &amp; Display<br>Digital Control<br>9 Auto Cooking Menus<br>11 Power Levels<br>Weight Defrost Function<br>Express Cooking<br>Grill Function – 1000Watts<br>Child Lock.<br>Durable Glass Door<br>Button Press Door Opening<br>Output: 700W.<br>Voltage: AC 230-240V/50Hz<br>Product Dimensions MM (W x D x H): 440 x 333 x259</p>`,
    specifications: {},
    variants: [],
    price: 12000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/mika20lmicrowave1_e53cdca7-58dc-4c86-ab3f-14192307aefc.jpg?v=1745926898",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/mika20lmicrowave1_e53cdca7-58dc-4c86-ab3f-14192307aefc.jpg?v=1745926898"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "ramtons-rm-458-digital-glass-microwave-700w-20l",
    name: "Ramtons RM/458 - Digital Glass Microwave, 700W - 20L",
    brand: "Ramtons",
    category: "microwaves",
    slug: "ramtons-rm-458-digital-glass-microwave-700w-20l",
    description: `<p>20litres</p>
<p>Microwave Power output:700W</p>
<p>5 microwave power levels</p>
<p>95 minutes digital timer</p>
<p>Defrost by weight/time</p>
<p>Cooking end signal</p>
<p>8 auto menus</p>
<p>Glass turntable</p>
<p>Child lock safety</p>
<p>Pull handle door</p>`,
    specifications: {},
    variants: [],
    price: 12000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/4_12.jpg?v=1745925772",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/4_12.jpg?v=1745925772"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "von-vamg-20dgb-20l-microwave-oven-grill-black",
    name: "Von VAMG-20DGB 20L Microwave Oven Grill - Black",
    brand: "Von",
    category: "microwaves",
    slug: "von-vamg-20dgb-20l-microwave-oven-grill-black",
    description: `<ul>
<li>Grill microwave</li>
<li>Power : 700W</li>
<li>Quartz grill</li>
<li>Capacity: 20 Litres.</li>
<li>Digital Control</li>
<li>Touch control panel</li>
<li>7 auto cook menus</li>
<li>Memory cooking (a combination of different programs)</li>
<li>Srong glass door</li>
<li>Grey interior cavity</li>
<li>Extra large cavity space</li>
<li>Normal cooking programs (power and time setting)</li>
<li>External door handle</li>
<li>Easy to clean interior</li>
<li>Black</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 9000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/VON20LDIGITAL.png?v=1745925270",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/VON20LDIGITAL.png?v=1745925270"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "nunix-20l-digital-microwave-black-no-grill",
    name: "Nunix 20L Digital Microwave  Black No Grill",
    brand: "Nunix",
    category: "microwaves",
    slug: "nunix-20l-digital-microwave-black-no-grill",
    description: `<ul>
<li><span><strong>Compact Design</strong>: At 44 cm long, the Nunix Black Microwave is ideal for dorms, apartments, or workplace kitchens.</span></li>
<li><span><strong>Digital Panel</strong>: Equipped with a user-friendly digital control panel for express cooking, power adjustments, delayed start, timer settings, and stop/cancel functions.</span></li>
<li><span><strong>Defrost Timers</strong>: Offers two defrost timer options for personalized control over food warming.</span></li>
<li><span><strong>Child Safety Lock</strong>: Features a child safety lock to prevent unintended use and ensure safety.</span></li>
<li><span><strong>Large Display</strong>: Includes a clear display for easy monitoring of cooking progress.</span></li>
<li><span><strong>Cooking Settings</strong>: Smart sensor technology with six auto-cooking modes (popcorn, baked potato, pizza, frozen food, reheat, beverage) simplifies meal preparation.</span></li>
</ul>`,
    specifications: {},
    variants: [],
    price: 8500,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/nunix20lblackmicrowavenogrill.jpg?v=1745918120",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/nunix20lblackmicrowavenogrill.jpg?v=1745918120"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "nunix-20l-digital-microwave-silver-with-grill",
    name: "Nunix 20L Digital Microwave Silver With Grill",
    brand: "Nunix",
    category: "microwaves",
    slug: "nunix-20l-digital-microwave-silver-with-grill",
    description: `<p><span><strong>Compact Design</strong>: At 44 cm long, the Nunix Silver Microwave is ideal for dorms, apartments, or workplace kitchens.</span></p>
<p><span><strong>Digital Panel</strong>: Equipped with a user-friendly digital control panel for express cooking, power adjustments, delayed start, timer settings, and stop/cancel functions.</span></p>
<p><span><strong>Defrost Timers</strong>: Offers two defrost timer options for personalized control over food warming.</span></p>
<p><span><strong>Child Safety Lock</strong>: Features a child safety lock to prevent unintended use and ensure safety.</span></p>
<p><span><strong>Large Display</strong>: Includes a clear display for easy monitoring of cooking progress.</span></p>
<p><span><strong>Cooking Settings</strong>: Smart sensor technology with six auto-cooking modes (popcorn, baked potato, pizza, frozen food, reheat, beverage) simplifies meal preparation.</span></p>`,
    specifications: {},
    variants: [],
    price: 9000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/nunix20lmicrowavesilverwithgrill.jpg?v=1745917670",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/nunix20lmicrowavesilverwithgrill.jpg?v=1745917670"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-20l-digital-microwave-black",
    name: "Hisense 20L Digital Microwave (Black)",
    brand: "Hisense",
    category: "microwaves",
    slug: "hisense-20l-digital-microwave-black",
    description: `<ul>
<li>20L Microwave oven</li>
<li>11 power levels</li>
<li>defrost by weight</li>
<li>microwave output power 700w</li>
<li>99’99 min cooking timer</li>
<li>push button door</li>
<li>black color&amp; black door</li>
<li>255mm diameter glass plat</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 10000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/hisense-h20mobs11-20l.png?v=1745916345",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/hisense-h20mobs11-20l.png?v=1745916345"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-20l-microwave-silver",
    name: "Hisense 20L Microwave  (Silver)",
    brand: "Hisense",
    category: "microwaves",
    slug: "hisense-20l-microwave-silver",
    description: `<ul>
<li>Child safety lock</li>
<li>Blue LED display</li>
<li>Memory cooking set</li>
<li>24h clock setting</li>
<li>6 auto cooking menus</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 10000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Hisense-20L-Digital-Microwave-H20MOMS11-Silver.jpg?v=1745916151",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Hisense-20L-Digital-Microwave-H20MOMS11-Silver.jpg?v=1745916151"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-20l-digital-microwave-oven-white",
    name: "Hisense 20L Digital Microwave Oven (White)",
    brand: "Hisense",
    category: "microwaves",
    slug: "hisense-20l-digital-microwave-oven-white",
    description: `<ul>
<li>Capacity: 20L</li>
<li>Power Output: 700W</li>
<li>Defrost: by Weight</li>
<li>Power Levels: 5</li>
<li>Cooking Timer: 30 mins</li>
<li>Diameter Glass Plate: 255mm</li>
<li>Mirror Door: Yes</li>
<li>Push Button Door: Yes</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 10000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/HISENSE20LWHITE.png?v=1745915781",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/HISENSE20LWHITE.png?v=1745915781"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "tcl-s55h-2-1-channel-sound-bar-with-dolby-atmos-wireless-subwoofer-and-bluetooth-music-streaming",
    name: "TCL S55H 2.1 Channel Sound Bar with Dolby Atmos, Wireless Subwoofer, and Bluetooth Music Streaming",
    brand: "TCL",
    category: "speakers-soundbars",
    slug: "tcl-s55h-2-1-channel-sound-bar-with-dolby-atmos-wireless-subwoofer-and-bluetooth-music-streaming",
    description: `<ul>
<li>
<h3>🧠 <strong>Core Overview</strong>
</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Model</strong></td>
<td>S55H</td>
</tr>
<tr>
<td><strong>System Type</strong></td>
<td>2.1 Channel Sound Bar</td>
</tr>
<tr>
<td><strong>Total Audio Power</strong></td>
<td>220 Watts</td>
</tr>
<tr>
<td><strong>Total Speakers</strong></td>
<td>3</td>
</tr>
<tr>
<td><strong>Sound Bar Length</strong></td>
<td>31.9" (81 cm)</td>
</tr>
</tbody>
</table>
</div>
<div><br></div>
</div>
<div><br></div>
<h3>🔊 <strong>Audio Technologies</strong>
</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Included</th>
</tr>
</thead>
<tbody>
<tr>
<td>Dolby Atmos</td>
<td>✅</td>
</tr>
<tr>
<td>DTS Virtual:X</td>
<td>✅</td>
</tr>
<tr>
<td>Room Calibration</td>
<td>TCL Ai Sonic</td>
</tr>
<tr>
<td>EQ Modes</td>
<td>Standard, Movie, Music, Voice, Game, Sports</td>
</tr>
</tbody>
</table>
</div>
<div><br></div>
</div>
<div><br></div>
<h3>📱 <strong>Smart Features</strong>
</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Supported</th>
</tr>
</thead>
<tbody>
<tr>
<td>Bluetooth Version</td>
<td>5.2</td>
</tr>
<tr>
<td>TCL Home App</td>
<td>✅</td>
</tr>
</tbody>
</table>
</div>
<div><br></div>
</div>
<div><br></div>
<h3>🔌 <strong>Inputs &amp; Connectivity</strong>
</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Input Type</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr>
<td>HDMI Input</td>
<td>❌</td>
</tr>
<tr>
<td>HDMI eARC</td>
<td>Yes (2.0)</td>
</tr>
<tr>
<td>Optical Digital Audio</td>
<td>✅</td>
</tr>
<tr>
<td>3.5mm AUX Input</td>
<td>✅</td>
</tr>
<tr>
<td>USB Audio Playback</td>
<td>✅</td>
</tr>
<tr>
<td>Audio Format Support</td>
<td>MP3, WMA, FLAC, WAV</td>
</tr>
</tbody>
</table>
</div>
<div><br></div>
</div>
<div><br></div>
<h3>📦 <strong>Subwoofer &amp; Accessories</strong>
</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Component</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr>
<td>Subwoofer</td>
<td>Wireless, 5.5" Driver, Detachable Power Cord</td>
</tr>
<tr>
<td>Accessories</td>
<td>Remote + Batteries, RCA 3.5mm Cable, Wall Mount Kit, QSG, Warranty Info</td>
</tr>
</tbody>
</table>
</div>
<div><br></div>
</div>
<div><br></div>
<h3>📏 <strong>Dimensions &amp; Weight</strong>
</h3>
<div>
<div>
<table>
<thead>
<tr>
<th>Component</th>
<th>Size (WxHxD)</th>
<th>Weight (kg)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Sound Bar</td>
<td>81 x 6 x 9.8 cm</td>
<td><strong>2.05 kg</strong></td>
</tr>
<tr>
<td>Subwoofer</td>
<td>19.5 x 32 x 19.5 cm</td>
<td><strong>3.06 kg</strong></td>
</tr>
<tr>
<td>Package</td>
<td>87.5 x 25.7 x 32.7 cm</td>
<td><strong>6.75 kg</strong></td>
</tr>
</tbody>
</table>
</div>
</div>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 18000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/S55H1.webp?v=1745842954",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/S55H1.webp?v=1745842954"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "jbl-boombox-3-black",
    name: "JBL Boombox 3 Black",
    brand: "JBL",
    category: "speakers-soundbars",
    slug: "jbl-boombox-3-black",
    description: `<ul>
<li style="font-weight: bold; color: rgb(43, 0, 255);"><a href="https://www.tiktok.com/@digital_city_electronics/video/7490832816087862534?" target="_blank" title="JBL PORTABLE SPEAKERS" rel="noopener"><strong><span style="color: rgb(43, 0, 255);">CLICK TO WATCH REVIEW VIDEO</span></strong></a></li>
<li>
<div style="text-align: left;">JBL Original Pro sound with a built-in subwoofer, two midrange drivers, and dual tweeters.</div>
</li>
<li style="text-align: left;">
<div>24-hour battery life.</div>
</li>
<li style="text-align: left;">
<div>IP67 waterproof rating.<img src="https://cdn.shopify.com/s/files/1/0751/6395/9546/files/boombox32.jpg?v=1745618131" alt="">
</div>
</li>
<li style="text-align: left;">
<div>Built-in power bank.</div>
</li>
<li style="text-align: left;">
<div>Self-tuning feature.</div>
</li>
<li style="text-align: left;">
<div>Dimensions: 48.2 x 25.7 x 20 cm.</div>
</li>
<li style="text-align: left;">
<div>Weight: 6.7 kg</div>
</li>
<li>
<div style="text-align: left;">AC mode: 80W for the sub, 40W for midrange drivers, and 10W for each tweeter.<img alt="" src="https://cdn.shopify.com/s/files/1/0751/6395/9546/files/boombox31.jpg?v=1745618131">
<ol type="disc" style="margin-top: 0in;">
<li class="MsoNormal" style="text-align: left;">3-Way Speaker System</li>
<li class="MsoNormal" style="text-align: left;">Up to 136W (Battery)/180W (AC) of Power</li>
<li class="MsoNormal" style="text-align: left;">Up to 24 Hours of Playback</li>
<li class="MsoNormal" style="text-align: left;">Water &amp; Dustproof Design</li>
<li class="MsoNormal" style="text-align: left;">Metal Carry Handle with Silicone Grips</li>
<li class="MsoNormal" style="text-align: left;">1 x Woofer, 2 x Midrange &amp; 2 x Tweeters</li>
<li class="MsoNormal" style="text-align: left;">Power &amp; Recharge via Included AC Cable</li>
<li class="MsoNormal" style="text-align: left;">Pair Up to 2 Devices with Bluetooth 5.3</li>
<li class="MsoNormal" style="text-align: left;">Link Multiple Speakers with PartyBoost</li>
<li class="MsoNormal" style="text-align: left;">AUX Input for Playing Wired Sources</li>
</ol>
</div>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 50000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/boombox31.jpg?v=1745618131",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/boombox31.jpg?v=1745618131", "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/boombox32.jpg?v=1745618131"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "ecoflow-river-2-portable-power-station-256wh",
    name: "EcoFlow RIVER 2 – Portable Power Station 256Wh",
    brand: "Ecoflow",
    category: "chargers-accessories",
    slug: "ecoflow-river-2-portable-power-station-256wh",
    description: `<ul>
<li data-line="true" data-line-index="0" data-zone-id="0" style="font-weight: bold; color: rgb(43, 0, 255);"><span style="color: rgb(43, 0, 255);"><a href="https://www.tiktok.com/@digital_city_electronics/video/7493636119943302406?is_from_webapp=1&amp;sender_device=pc&amp;web_id=7492018079045174789" title="ECOFLOW RIVER 2 SERIES REVIEW VIDEO" rel="noopener" style="color: rgb(43, 0, 255);" target="_blank"><strong>CLICK TO WATCH VIDEO REVIEW</strong></a></span></li>
<li data-line="true" data-line-index="0" data-zone-id="0">256Wh capacity and 300W output.</li>
<li data-line="true" data-line-index="1" data-zone-id="0">Provide up to 0.8kWh a day with solar charging.</li>
<li data-line="true" data-line-index="2" data-zone-id="0">Fastest Recharge 0-100% in only 60 min.</li>
<li data-line="true" data-line-index="3" data-zone-id="0">Safest LFP battery provides 10 years of use.</li>
<li data-line="true" data-line-index="4" data-zone-id="0">Lightweight at only 3.5kg.</li>
<li data-line="true" data-line-index="5" data-zone-id="0">First power station with a TÜV Rheinland safety certification.</li>
<li data-line="true" data-line-index="5" data-zone-id="0">X-Boost output to 600W and run 99% of consumer electronic</li>
<li data-line="true" data-line-index="5" data-zone-id="0">4 ways to charge: AC, car, solar, and USB-C.</li>
<li data-line="true" data-line-index="5" data-zone-id="0">&lt;30ms EPS auto-switch for essential devices.</li>
<li data-line="true" data-line-index="5" data-zone-id="0">Smart app control with Bluetooth or Wi-Fi.</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 28000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/RIVER21.jpg?v=1745613311",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/RIVER21.jpg?v=1745613311"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "ecoflow-portable-power-station-river-2-max-512wh",
    name: "ECOFLOW Portable Power Station RIVER 2 MAX, 512Wh",
    brand: "Ecoflow",
    category: "chargers-accessories",
    slug: "ecoflow-portable-power-station-river-2-max-512wh",
    description: `<div data-zone-id="0" data-line-index="0" data-line="true">
<p><span style="color: rgb(43, 0, 255);"><a href="https://www.tiktok.com/@digital_city_electronics/video/7493636119943302406?is_from_webapp=1&amp;sender_device=pc&amp;web_id=7492018079045174789" title="ECOFLOW RIVER 2 SERIES REVIEW VIDEO" rel="noopener" style="color: rgb(43, 0, 255);" target="_blank"><strong>CLICK TO WATCH VIDEO REVIEW</strong></a></span></p>
</div>
<div data-zone-id="0" data-line-index="0" data-line="true">•512Wh capacity and 500W output.</div>
<div data-zone-id="0" data-line-index="1" data-line="true">•Provide up to 1.5kWh a day with solar charging.</div>
<div data-zone-id="0" data-line-index="2" data-line="true">•Fastest Recharge 0-100% in only 60 min.</div>
<div data-zone-id="0" data-line-index="3" data-line="true">•Safest LFP battery provides 10 years of use.</div>
<div data-zone-id="0" data-line-index="4" data-line="true">•First power station with a TÜV Rheinland safety certification.</div>
<div data-zone-id="0" data-line-index="5" data-line="true">•Lightweight at only 6.1kg.</div>
<div data-zone-id="0" data-line-index="6" data-line="true">•Boost output to 1000W and run 80% of essential appliances.</div>
<div data-zone-id="0" data-line-index="7" data-line="true">•4 ways to charge: AC, car, solar, and USB-C.</div>
<div data-zone-id="0" data-line-index="8" data-line="true">•&lt;30ms EPS auto-switch for essential devices.</div>
<div data-zone-id="0" data-line-index="9" data-line="true">•Smart app control with Bluetooth or Wi-Fi</div>`,
    specifications: {},
    variants: [],
    price: 42000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/RIVER2MAX1.jpg?v=1745610185",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/RIVER2MAX1.jpg?v=1745610185"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "ecoflow-portable-power-station-river-2-pro-768wh",
    name: "ECOFLOW Portable Power Station RIVER 2 Pro, 768Wh",
    brand: "Ecoflow",
    category: "chargers-accessories",
    slug: "ecoflow-portable-power-station-river-2-pro-768wh",
    description: `<div data-line="true" data-line-index="0" data-zone-id="0">
<ul>
<li style="color: rgb(43, 0, 255);"><span style="color: rgb(43, 0, 255);"><a href="https://www.tiktok.com/@digital_city_electronics/video/7493636119943302406?is_from_webapp=1&amp;sender_device=pc&amp;web_id=7492018079045174789" title="ECOFLOW RIVER 2 SERIES REVIEW VIDEO" rel="noopener" style="color: rgb(43, 0, 255);" target="_blank"><strong>CLICK TO WATCH VIDEO REVIEW</strong></a></span></li>
</ul>
</div>
<div data-line="true" data-line-index="0" data-zone-id="0">Sizeable 768Wh capacity and 800W output.</div>
<div data-line="true" data-line-index="1" data-zone-id="0">•Provide up to 1.8kWh a day with solar charging.</div>
<div data-line="true" data-line-index="2" data-zone-id="0">•Fastest Recharge 0-100% in only 70 min.</div>
<div data-line="true" data-line-index="3" data-zone-id="0">•Safest LFP battery provides 10 years of use.</div>
<div data-line="true" data-line-index="4" data-zone-id="0">•First power station with a TÜV Rheinland safety certification.</div>
<div data-line="true" data-line-index="5" data-zone-id="0">•Boost output to 1600W and run 80% of home appliances.</div>
<div data-line="true" data-line-index="6" data-zone-id="0">•4 ways to charge: AC, car, solar, and USB-C.</div>
<div data-line="true" data-line-index="7" data-zone-id="0">•Lightweight at only 7.8kg.</div>
<div data-line="true" data-line-index="8" data-zone-id="0">•&lt;30ms EPS auto-switch for essential devices.</div>
<div data-line="true" data-line-index="9" data-zone-id="0">•Smart app control with Bluetooth or Wi-Fi.</div>`,
    specifications: {},
    variants: [],
    price: 60000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/RIVER2PRO2.jpg?v=1745608725",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/RIVER2PRO2.jpg?v=1745608725"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hdmi-cable-3-meters-high-speed-cable-2-0",
    name: "HDMI CABLE 3 Meters High-Speed Cable 2.0",
    brand: "Generic",
    category: "chargers-accessories",
    slug: "hdmi-cable-3-meters-high-speed-cable-2-0",
    description: `<p><span><strong>Length</strong>: A 3-meter cable designed for connecting devices over longer distances.</span></p>
<p><span><strong>Resolution Support</strong>: Supports Full HD (1080p) and 4K Ultra HD resolutions with HDR for vibrant visuals.</span></p>
<p><span><strong>Speed</strong>: High-speed data transfer of up to 18Gbps for seamless audio, video, Ethernet, and 3D support.</span></p>
<p><span><strong>Durability</strong>: Flexible, tangle-resistant, and built with long-lasting materials.</span></p>
<p><span><strong>Gold-Plated Connectors</strong>: Ensures optimal signal transfer and corrosion resistance.</span></p>`,
    specifications: {},
    variants: [],
    price: 500,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/HDMICABLES1_81e45e3e-c808-4875-aeb1-e587fc3b3e7d.jpg?v=1745589779",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/HDMICABLES1_81e45e3e-c808-4875-aeb1-e587fc3b3e7d.jpg?v=1745589779"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hdmi-cable-5-meters-high-speed-cable-2-0",
    name: "HDMI CABLE 5 Meters High-Speed Cable 2.0",
    brand: "Generic",
    category: "chargers-accessories",
    slug: "hdmi-cable-5-meters-high-speed-cable-2-0",
    description: `<p><span><strong>Length</strong>: A 5-meter cable designed for connecting devices over longer distances.</span></p>
<p><span><strong>Resolution Support</strong>: Supports Full HD (1080p) and 4K Ultra HD resolutions with HDR for vibrant visuals.</span></p>
<p><span><strong>Speed</strong>: High-speed data transfer of up to 18Gbps for seamless audio, video, Ethernet, and 3D support.</span></p>
<p><span><strong>Durability</strong>: Flexible, tangle-resistant, and built with long-lasting materials.</span></p>
<p><span><strong>Gold-Plated Connectors</strong>: Ensures optimal signal transfer and corrosion resistance.</span></p>`,
    specifications: {},
    variants: [],
    price: 1000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/HDMICABLES1.jpg?v=1745588714",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/HDMICABLES1.jpg?v=1745588714"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "samsung-65-inch-du7010-crystal-uhd-smart-tv",
    name: "Samsung 65 Inch DU7010 Crystal UHD Smart TV",
    brand: "Samsung",
    category: "televisions",
    slug: "samsung-65-inch-du7010-crystal-uhd-smart-tv",
    description: `<meta charset="UTF-8">
<div class="pdd32-product-spec__item pdd32-product-spec__item--overview pdd32-product-spec__item--active">
<div class="pdd32-product-spec__content-wrap">
<div class="pdd32-product-spec__content">
<ul class="pdd32-product-spec__content-list">
<li>Smart Tizen TV</li>
<li>Resolution: 4K (3,840 x 2,160)</li>
<li>Product Type : Direct LED</li>
<li>Refresh Rate: 50Hz</li>
</ul>
</div>
</div>
</div>
<div class="pdd32-product-spec__item pdd32-product-spec__item--active">
<div class="pdd32-product-spec__content-wrap">
<div class="pdd32-product-spec__content">
<ul class="pdd32-product-spec__content-list">
<li>Resolution: 4K (3,840 x 2,160)Crystal Processor 4K</li>
</ul>
</div>
</div>
</div>
<div class="pdd32-product-spec__item pdd32-product-spec__item--active">
<div class="pdd32-product-spec__content-wrap">
<div class="pdd32-product-spec__content">
<ul class="pdd32-product-spec__content-list">
<li>HDR (High Dynamic Range)</li>
<li>HDR 10+</li>
<li>Contrast: Mega Contrast</li>
<li>Micro Dimming</li>
<li>UHD Dimming</li>
<li>Contrast Enhancer: Yes</li>
<li>Motion Technology</li>
<li>Motion Xcelerator</li>
<li>AI Upscale</li>
<li>4K Upscaling</li>
<li>Filmmaker Mode (FMM): Yes</li>
<li>Audio: Adaptive SoundAdaptive Sound</li>
</ul>
</div>
</div>
</div>
<div class="pdd32-product-spec__item pdd32-product-spec__item--active">
<div class="pdd32-product-spec__content-wrap">
<div class="pdd32-product-spec__content">
<ul class="pdd32-product-spec__content-list">
<li>Object Tracking Sound</li>
<li>OTS Lite</li>
<li>Q-Symphony: Yes</li>
<li>Sound Output (RMS):20W</li>
<li>Speaker Type: 2CH</li>
<li>Multiroom Link: No</li>
<li>Smart Service</li>
<li>Operating System: Tizen™ Smart TV</li>
<li>Security: Knox</li>
</ul>
</div>
</div>
</div>
<div class="pdd32-product-spec__item pdd32-product-spec__item--active">
<div class="pdd32-product-spec__content-wrap">
<div class="pdd32-product-spec__content">
<ul class="pdd32-product-spec__content-list">
<li>Bixby: Yes (Voice Ready)</li>
<li>Web Browser:Yes</li>
<li>SmartThings:Yes</li>
<li>Multi Device Experience: Mobile to TV, Sound Mirroring, Wireless TV On</li>
</ul>
</div>
</div>
</div>
<div class="pdd32-product-spec__item pdd32-product-spec__item--active">
<div class="pdd32-product-spec__content-wrap">
<div class="pdd32-product-spec__content">
<ul class="pdd32-product-spec__content-list">
<li>NFT: Nifty Gateway</li>
<li>Apple AirPlay: Yes (w/o Syrian Arab Republic, Yemen)</li>
<li>Daily+: Yes</li>
<li>Auto Game Mode (ALLM)Yes</li>
</ul>
</div>
</div>
</div>
<div class="pdd32-product-spec__item pdd32-product-spec__item--active">
<div class="pdd32-product-spec__content-wrap">
<div class="pdd32-product-spec__content">
<ul class="pdd32-product-spec__content-list">
<li>VRR: Yes</li>
<li>HGiG:Yes</li>
<li>Tuner/Broadcasting</li>
<li>Digital Broadcasting:DVB-T2CS2</li>
</ul>
</div>
</div>
</div>
<div class="pdd32-product-spec__item pdd32-product-spec__item--active">
<div class="pdd32-product-spec__content-wrap">
<div class="pdd32-product-spec__content">
<ul class="pdd32-product-spec__content-list">
<li>Analog Tuner: Yes</li>
<li>TV Key: Yes</li>
<li>Wi-Fi: (Wi-Fi 5)</li>
</ul>
</div>
</div>
</div>
<div class="pdd32-product-spec__item pdd32-product-spec__item--active">
<div class="pdd32-product-spec__content-wrap">
<div class="pdd32-product-spec__content">
<ul class="pdd32-product-spec__content-list">
<li>Bluetooth:(BT5.2)</li>
<li>HDMI: 3</li>
<li>HDMI (High Frame Rate): 4K 60Hz (for HDMI 1/2/3)</li>
<li>HDMI Audio Return Channel(eARC/ARC)</li>
<li>HDMI-CEC:Yes</li>
<li>USB: 1 x USB-A</li>
<li>Ethernet (LAN):1</li>
<li>RF In (Terrestrial / Cable input): 1/1(Common Use for Terrestrial)/1Slim Look</li>
</ul>
</div>
</div>
</div>
<div class="pdd32-product-spec__item pdd32-product-spec__item--active">
<div class="pdd32-product-spec__content-wrap">
<div class="pdd32-product-spec__content">
<ul class="pdd32-product-spec__content-list">
<li>EPG Support: Yes</li>
<li>IP Control: Yes</li>
<li>OSD Language: Local Languages</li>
<li>Accessibillity - Voice Guide: UK English, France French, Korean, Russian, Hindi</li>
</ul>
</div>
</div>
</div>
<div class="pdd32-product-spec__item pdd32-product-spec__item--active">
<div class="pdd32-product-spec__content-wrap">
<div class="pdd32-product-spec__content">
<ul class="pdd32-product-spec__content-list">
<li>Low Vision Support</li>
<li>Audio Description, Zoom Menu and Text, High Contrast, SeeColors, Color Inversion, Grayscale, Picture Off</li>
<li>Hearing Impaired Support</li>
<li>Closed Caption (Subtitle), Multi-output Audio, Sign Language Zoom</li>
<li>Motor Impaired Support</li>
<li>Slow Button Repeat, Remote Control App. for All</li>
<li>Power &amp; Eco Solution</li>
<li>Power Supply:AC100-240V~ 50/60Hz</li>
</ul>
</div>
</div>
</div>
<div class="pdd32-product-spec__item pdd32-product-spec__item--active">
<div class="pdd32-product-spec__content-wrap">
<div class="pdd32-product-spec__content">
<ul>
<li>Power Consumption (Max): 125 W</li>
<li>Eco Sensor:Yes</li>
<li>Auto Power Off: Yes</li>
<li>Auto Power Saving: Yes</li>
</ul>
<p class="pdd32-product-spec__content-item-desc"> </p>
</div>
</div>
</div>`,
    specifications: {},
    variants: [],
    price: 85000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/IMG-8147.jpg?v=1745589052",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/IMG-8147.jpg?v=1745589052"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "samsung-55-inch-du7010-crystal-uhd-smart-tv",
    name: "Samsung 55 Inch DU7010 Crystal UHD Smart TV",
    brand: "Samsung",
    category: "televisions",
    slug: "samsung-55-inch-du7010-crystal-uhd-smart-tv",
    description: `<meta charset="UTF-8">
<div class="pdd32-product-spec__item pdd32-product-spec__item--overview pdd32-product-spec__item--active">
<div class="pdd32-product-spec__content-wrap">
<div class="pdd32-product-spec__content">
<ul class="pdd32-product-spec__content-list">
<li>Smart Tizen TV</li>
<li>Resolution: 4K (3,840 x 2,160)</li>
<li>Product Type : Direct LED</li>
<li>Refresh Rate: 50Hz</li>
</ul>
</div>
</div>
</div>
<div class="pdd32-product-spec__item pdd32-product-spec__item--active">
<div class="pdd32-product-spec__content-wrap">
<div class="pdd32-product-spec__content">
<ul class="pdd32-product-spec__content-list">
<li>Resolution: 4K (3,840 x 2,160)Crystal Processor 4K</li>
</ul>
</div>
</div>
</div>
<div class="pdd32-product-spec__item pdd32-product-spec__item--active">
<div class="pdd32-product-spec__content-wrap">
<div class="pdd32-product-spec__content">
<ul class="pdd32-product-spec__content-list">
<li>HDR (High Dynamic Range)</li>
<li>HDR 10+</li>
<li>Contrast: Mega Contrast</li>
<li>Micro Dimming</li>
<li>UHD Dimming</li>
<li>Contrast Enhancer: Yes</li>
<li>Motion Technology</li>
<li>Motion Xcelerator</li>
<li>AI Upscale</li>
<li>4K Upscaling</li>
<li>Filmmaker Mode (FMM): Yes</li>
<li>Audio: Adaptive SoundAdaptive Sound</li>
</ul>
</div>
</div>
</div>
<div class="pdd32-product-spec__item pdd32-product-spec__item--active">
<div class="pdd32-product-spec__content-wrap">
<div class="pdd32-product-spec__content">
<ul class="pdd32-product-spec__content-list">
<li>Object Tracking Sound</li>
<li>OTS Lite</li>
<li>Q-Symphony: Yes</li>
<li>Sound Output (RMS):20W</li>
<li>Speaker Type: 2CH</li>
<li>Multiroom Link: No</li>
<li>Smart Service</li>
<li>Operating System: Tizen™ Smart TV</li>
<li>Security: Knox</li>
</ul>
</div>
</div>
</div>
<div class="pdd32-product-spec__item pdd32-product-spec__item--active">
<div class="pdd32-product-spec__content-wrap">
<div class="pdd32-product-spec__content">
<ul class="pdd32-product-spec__content-list">
<li>Bixby: Yes (Voice Ready)</li>
<li>Web Browser:Yes</li>
<li>SmartThings:Yes</li>
<li>Multi Device Experience: Mobile to TV, Sound Mirroring, Wireless TV On</li>
</ul>
</div>
</div>
</div>
<div class="pdd32-product-spec__item pdd32-product-spec__item--active">
<div class="pdd32-product-spec__content-wrap">
<div class="pdd32-product-spec__content">
<ul class="pdd32-product-spec__content-list">
<li>NFT: Nifty Gateway</li>
<li>Apple AirPlay: Yes (w/o Syrian Arab Republic, Yemen)</li>
<li>Daily+: Yes</li>
<li>Auto Game Mode (ALLM)Yes</li>
</ul>
</div>
</div>
</div>
<div class="pdd32-product-spec__item pdd32-product-spec__item--active">
<div class="pdd32-product-spec__content-wrap">
<div class="pdd32-product-spec__content">
<ul class="pdd32-product-spec__content-list">
<li>VRR: Yes</li>
<li>HGiG:Yes</li>
<li>Tuner/Broadcasting</li>
<li>Digital Broadcasting:DVB-T2CS2</li>
</ul>
</div>
</div>
</div>
<div class="pdd32-product-spec__item pdd32-product-spec__item--active">
<div class="pdd32-product-spec__content-wrap">
<div class="pdd32-product-spec__content">
<ul class="pdd32-product-spec__content-list">
<li>Analog Tuner: Yes</li>
<li>TV Key: Yes</li>
<li>Wi-Fi: (Wi-Fi 5)</li>
</ul>
</div>
</div>
</div>
<div class="pdd32-product-spec__item pdd32-product-spec__item--active">
<div class="pdd32-product-spec__content-wrap">
<div class="pdd32-product-spec__content">
<ul class="pdd32-product-spec__content-list">
<li>Bluetooth:(BT5.2)</li>
<li>HDMI: 3</li>
<li>HDMI (High Frame Rate): 4K 60Hz (for HDMI 1/2/3)</li>
<li>HDMI Audio Return Channel(eARC/ARC)</li>
<li>HDMI-CEC:Yes</li>
<li>USB: 1 x USB-A</li>
<li>Ethernet (LAN):1</li>
<li>RF In (Terrestrial / Cable input): 1/1(Common Use for Terrestrial)/1Slim Look</li>
</ul>
</div>
</div>
</div>
<div class="pdd32-product-spec__item pdd32-product-spec__item--active">
<div class="pdd32-product-spec__content-wrap">
<div class="pdd32-product-spec__content">
<ul class="pdd32-product-spec__content-list">
<li>EPG Support: Yes</li>
<li>IP Control: Yes</li>
<li>OSD Language: Local Languages</li>
<li>Accessibillity - Voice Guide: UK English, France French, Korean, Russian, Hindi</li>
</ul>
</div>
</div>
</div>
<div class="pdd32-product-spec__item pdd32-product-spec__item--active">
<div class="pdd32-product-spec__content-wrap">
<div class="pdd32-product-spec__content">
<ul class="pdd32-product-spec__content-list">
<li>Low Vision Support</li>
<li>Audio Description, Zoom Menu and Text, High Contrast, SeeColors, Color Inversion, Grayscale, Picture Off</li>
<li>Hearing Impaired Support</li>
<li>Closed Caption (Subtitle), Multi-output Audio, Sign Language Zoom</li>
<li>Motor Impaired Support</li>
<li>Slow Button Repeat, Remote Control App. for All</li>
<li>Power &amp; Eco Solution</li>
<li>Power Supply:AC100-240V~ 50/60Hz</li>
</ul>
</div>
</div>
</div>
<div class="pdd32-product-spec__item pdd32-product-spec__item--active">
<div class="pdd32-product-spec__content-wrap">
<div class="pdd32-product-spec__content">
<ul>
<li>Power Consumption (Max): 125 W</li>
<li>Eco Sensor:Yes</li>
<li>Auto Power Off: Yes</li>
<li>Auto Power Saving: Yes</li>
</ul>
<p class="pdd32-product-spec__content-item-desc"> </p>
</div>
</div>
</div>`,
    specifications: {},
    variants: [],
    price: 60000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/sm5.jpg?v=1744151926",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/sm5.jpg?v=1744151926"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "lg-uhd-4k-tv-65-inch-ut80-series",
    name: "LG UHD 4K TV 65 Inch UT80 series",
    brand: "LG",
    category: "televisions",
    slug: "lg-uhd-4k-tv-65-inch-ut80-series",
    description: `<ul class="feature-list">
<li>Free wall bracket and Tv guard</li>
<li>Real 4K UHD picture, Breathtaking color and detail with 4K HDR10 Pro</li>
<li>ThinQ AI webOS with Magic Remote and 4 years of upgrades guaranteed over 5 years with webOS Re:NewProgram</li>
<li>True Cinema Experience suported with 4K HDR10,HLG,Filmmaker Mode Advanced Dynamic Tone Mapping</li>
<li>Enhanced picture and sound quality with the α5 AI Processor 4K Gen7e</li>
<li>Unlimited Gameplay with HGiG , ALLM , HDMI 2.0 eARC , Game Optimizer</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 90000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/65ut801.png?v=1745585739",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/65ut801.png?v=1745585739"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "lg-uhd-4k-tv-55-inch-ut80-series",
    name: "LG UHD 4K TV 55 Inch UT80 series",
    brand: "LG",
    category: "televisions",
    slug: "lg-uhd-4k-tv-55-inch-ut80-series",
    description: `<ul class="feature-list">
<li>Free wall bracket and Fridge guard</li>
<li>Real 4K UHD picture, Breathtaking color and detail with 4K HDR10 Pro</li>
<li>Enhanced picture and sound quality with the α5 AI Processor 4K Gen7</li>
<li>ThinQ AI webOS with Magic Remote and 4 years of upgrades guaranteed over 5 years with webOS Re:NewProgram</li>
<li>True Cinema Experience suported with 4K HDR10,HLG,Filmmaker Mode Advanced Dynamic Tone Mapping Unlimited Gameplay with HGiG , ALLM , HDMI 2.0 eARC , Game Optimizer</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 65000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/55UT801.png?v=1745585216",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/55UT801.png?v=1745585216"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "lg-uhd-4k-tv-50-inch-ut80-series",
    name: "LG UHD 4K TV 50 Inch UT80 series",
    brand: "LG",
    category: "televisions",
    slug: "lg-uhd-4k-tv-50-inch-ut80-series",
    description: `<ul class="feature-list">
<li>Free wall bracket and Tv Guard</li>
<li>Real 4K UHD picture, Breathtaking color and detail with 4K HDR10 Pro</li>
<li>Enhanced picture and sound quality with the α5 AI Processor 4K Gen7</li>
<li>ThinQ AI webOS with Magic Remote and 4 years of upgrades guaranteed over 5 years with</li>
<li>webOS Re:NewProgram</li>
<li>True Cinema Experience suported with 4K HDR10,HLG,Filmmaker Mode Advanced Dynamic Tone Mapping</li>
<li>Unlimited Gameplay with HGiG , ALLM , HDMI 2.0 eARC , Game Optimizer</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 55000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/50UT801.jpg?v=1745584579",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/50UT801.jpg?v=1745584579"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "skyworth-75-g6500g-4k-qled-google-tv",
    name: "Skyworth 75\" G6500G 4K QLED Google TV",
    brand: "Skyworth",
    category: "televisions",
    slug: "skyworth-75-g6500g-4k-qled-google-tv",
    description: `<ul>
<li><span>Free wall bracket</span></li>
<li><span>Smart Google TV - hands-free voice control</span></li>
<li><span>Flicker free-HDR10+</span></li>
<li><span>Netflix, Prime Video, Disney+, YouTube, YouTube HDR, Dolby Vision, HDR10+</span></li>
<li><span>Dolby Atmos for TV - cinematic sound</span></li>
<li><span>Chromecast built-in</span></li>
<li><span>Google Assistant</span></li>
<li><span>Google far field voice control</span></li>
<li><span>Dolby Atmos for TV</span></li>
<li><span>Bluetooth 5.1</span></li>
<li><span>Picture quality tuning</span></li>
<li><span>Chameleon Extreme 2.0 processor</span></li>
<li><span>Health platform</span></li>
<li><span>Google Play Store</span></li>
<li><span>Game mode</span></li>
<li><span>Storage 16GB, RAM 2GB</span></li>
<li><span>HDMI * 3</span></li>
<li><span>USB * 2</span></li>
</ul>`,
    specifications: {},
    variants: [],
    price: 130000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Untitled-design-2024-08-29T173108.820-1024x1024.jpg?v=1745581728",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Untitled-design-2024-08-29T173108.820-1024x1024.jpg?v=1745581728"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "skyworth-65-inch-4k-qled-google-tv-free-premium-sound-bar",
    name: "Skyworth 65 inch 4K QLED Google TV+ Free Premium Sound Bar.",
    brand: "Skyworth",
    category: "televisions",
    slug: "skyworth-65-inch-4k-qled-google-tv-free-premium-sound-bar",
    description: `<ul>
<li>Special Offer of 4K Qled Google TV + FREE Premium Soundbar (worth KSh 10,000).</li>
<li>Free Tv Guard</li>
<li>Free sound bar</li>
<li>Total value KSh 90,000, but you pay KSh 80,000 only — save KSh 10,000.</li>
<li>Only a few units available with the free soundbar bonus. While stock lasts. </li>
<li>Display Resolution - 4K/UHD( 3840 x2160)</li>
<li>Panel Type - A+ Grade</li>
<li>Contrast Ratio - 4500:1</li>
<li>The brightness of the Panel - 300Nits</li>
<li>Response Time - 8.5Ms</li>
<li>Clear Motion Rate - 60Hz</li>
<li>Speaker Type - Down firing</li>
<li>Sound Output (RMS) - 10X2W RMS</li>
<li>Dolby Digital / DTS Audio support - DTS TruSurround</li>
<li>Operating System - Android 10.0</li>
<li>CPU - Quad Core A53*4</li>
<li>RAM - 2.5GB</li>
<li>ROM - 16GB</li>
<li>Google AI System - Yes</li>
<li>Powerful 3D Game Engine - Yes</li>
<li>Voice Search - Yes</li>
<li>Chrome Cast Built-in - Yes</li>
<li>Google Play store - Yes</li>
<li>Bluetooth - 4.2 Version</li>
<li>Wifi inbuilt - 4G (2.4GHz 1T1R )</li>
<li>Netflix - Yes</li>
<li>HDMI Input - 3 ( HDMI-1isARC)</li>
<li>USB - 2(USB-1 is 3.0ver)</li>
<li>AV Input - 1</li>
<li>Digital Audio Out - 1( Optical)</li>
<li>Lan Port - 1</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 80000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Untitled-design-88.jpg?v=1745581258",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Untitled-design-88.jpg?v=1745581258"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "skyworth-55-4k-qled-q6500h-google-tv",
    name: "Skyworth 55\" 4K QLED+ Q6500H Google Tv",
    brand: "Skyworth",
    category: "televisions",
    slug: "skyworth-55-4k-qled-q6500h-google-tv",
    description: `<p><span>Free wall bracket</span></p>
<p><span>Google TV</span></p>
<p><span></span><span>Hands free voice control</span></p>
<p><span>Frameless screen</span></p>
<p><span>4K QLED TV</span></p>
<p><span>Android 10 TV</span></p>
<p><span>In-built Wi-Fi</span></p>
<p><span>Netflix</span></p>
<p><span>YouTube</span></p>
<p><span>Google Assistant</span></p>
<p><span>Google Playstore</span></p>
<p><span>Chromecast</span></p>
<p><span>Amazon Prime Video</span></p>
<p><span>Bluetooth</span></p>
<p><span>4K Quantum Processor</span></p>
<p><span>4K High Dynamic Range</span></p>
<p><span>4K Ultra HD</span></p>
<p><span>Infinity Vision</span></p>
<p><span>3,840 x 2160 screen resolution</span></p>
<p><span>Chameleon Extreme 2.0</span></p>
<p><span>Dolby Vision, Dolby Atmos, Dolby Digital Audio</span></p>
<p><span>DTS Studio Sound</span></p>
<p><span>Boundless design</span></p>
<p><span>2GB + 32GB storage</span></p>
<p><span>3 HDMI ports</span><br></p>`,
    specifications: {},
    variants: [],
    price: 45000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/1_9.jpg?v=1745580728",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/1_9.jpg?v=1745580728"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "skyworth-50-4k-qled-google-tv",
    name: "Skyworth 50\" 4K QLED Google Tv",
    brand: "Skyworth",
    category: "televisions",
    slug: "skyworth-50-4k-qled-google-tv",
    description: `<p>Key Features:</p>
<ul>
<li>Free wall bracket</li>
<li>Google TV, Bluetooth 5.1, Boundless Screen, Chromecast Built-in, Dolby Atmos, Google Play Store, Netflix</li>
<li>Resolution - 3840*2160</li>
<li>Brightness - 300nit</li>
<li>DMR - 60Hz</li>
<li>Color Gamut - DCI-P3 90%</li>
<li>Response Time - 6ms</li>
<li>Contrast Ratio - 5000:1</li>
<li>OSD Language - English</li>
<li>HDR10 / HDR10+ / HLG - Yes</li>
<li>Dolby Digital / Dolby Digital Plus/ Dolby Vision </li>
<li>Operating System - Google TV</li>
<li>Google Play Store -Yes</li>
<li>Bluetooth - Yes</li>
<li>DDR - 2GB<br>
</li>
<li>Stand - Yes</li>
<li>Remote Control (IR + BT) - Yes</li>
<li>Power Supply AC 100-240V~ 50/60Hz</li>
<li>Power Consumption 130W</li>
<li>RF Input 1</li>
<li>Composite Input (RCA) 1</li>
<li>HDMI Input 3 (HDMI 2.0)</li>
<li>SPDIF Output 1 (Optical)</li>
<li>LAN 1</li>
<li>USB (Multi-media) 2 (USB 2.0)</li>
<li>WiFi 2.4G+5G, 2T2R</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 42000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/1_8.jpg?v=1745580147",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/1_8.jpg?v=1745580147"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "skyworth-43-full-hd-e3500g-google-tv",
    name: "Skyworth 43\"Full HD E3500G Google TV,",
    brand: "Skyworth",
    category: "televisions",
    slug: "skyworth-43-full-hd-e3500g-google-tv",
    description: `<ul>
<li style="font-weight: bold; color: rgb(43, 0, 255);"><span style="color: rgb(43, 0, 255);"><a href="https://www.tiktok.com/@digital_city_electronics/video/7488051876080979205?" title="SKYWORTH 43 INCH FULL HD E3500G GOOGLE TV" rel="noopener" style="color: rgb(43, 0, 255);" target="_blank"><strong>CLICK TO WATCH REVIEW VIDEO</strong></a></span></li>
<li>Free Wall Bracket</li>
<li>Internal Memory: 8GB (8GB Inclusive of Pre-Installed Applications)</li>
<li>RAM: 1.5GB</li>
<li>Google TV</li>
<li>Frameless Design</li>
<li>Google Assistant</li>
<li>Google Play Store</li>
<li>Netflix, Prime Video, YouTube</li>
<li>Remote Voice Control</li>
<li>Bluetooth 5.0</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 24000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/5_1.jpg?v=1745579131",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/5_1.jpg?v=1745579131"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "skyworth-43-4k-uhd-g3500g-google-tv",
    name: "Skyworth 43\" 4K UHD G3500G Google TV",
    brand: "Skyworth",
    category: "televisions",
    slug: "skyworth-43-4k-uhd-g3500g-google-tv",
    description: `<ul>
<li style="color: rgb(43, 0, 255); font-weight: bold;"><a href="https://www.tiktok.com/@digital_city_electronics/video/7488051876080979205?" title="SKYWORTH 43 INCH G3500G UHD GOOGLE TV REVIEW" rel="noopener" target="_blank"><strong><span style="color: rgb(43, 0, 255);">CLICK TO WATCH VIDEO REVIEW</span></strong></a></li>
<li>Free Wall Bracket</li>
<li>Internal Memory: 16GB (16GB Inclusive of Pre-Installed Applications)</li>
<li>Resolution: UHD(3840 x 2160)</li>
<li>RAM: 2GB</li>
<li>Google TV</li>
<li>Frameless Design</li>
<li>Google Assistant</li>
<li>Google Play Store</li>
<li>Netflix, Prime Video, YouTube</li>
<li>Remote Voice Control</li>
<li>Bluetooth 5.1</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 28000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/1_5.jpg?v=1745578893",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/1_5.jpg?v=1745578893"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "skyworth-32-full-hd-e3500-google-tv",
    name: "Skyworth 32\" Full HD E3500 Google TV",
    brand: "Skyworth",
    category: "televisions",
    slug: "skyworth-32-full-hd-e3500-google-tv",
    description: `<ul>
<li style="color: #2b00ff;"><span style="color: #2b00ff;"><strong><a href="https://www.tiktok.com/@digital_city_electronics/video/7488597100494605574?is_from_webapp=1&amp;sender_device=pc&amp;web_id=7492018079045174789" title="SKYWORTH 32 INCH GOOGLE TV REVIEW" rel="noopener noreferrer" style="color: #2b00ff;" target="_blank">C</a></strong><strong><a href="https://www.tiktok.com/@digital_city_electronics/video/7488597100494605574?" title="SKYWORTH 32 INCH E3500 GOOGLE TV REVIEW" rel="noopener noreferrer" style="color: #2b00ff;" target="_blank">LICK TO WATCH VIDEO REVIEW</a></strong></span></li>
<li>Smart Features:</li>
<li>Free Wall bracket</li>
<li>Free Tv Guard</li>
<li>Operating System: Android 9.0 Pie</li>
<li>CPU/GPU: Quad Core</li>
<li>Internal Memory: 8GB (includes pre-installed apps)</li>
<li>RAM: 1GB</li>
<li>Voice Search and Google Assistant: Yes</li>
<li>Chromecast: Built-in</li>
<li>Bluetooth: Version 5.0</li>
<li>Wi-Fi Connectivity: Yes</li>
<li>Home KTV Built-in: Yes</li>
<li>USB Media Playback: Supports photo, video, music, and text (HEVC)</li>
<li>Display:</li>
<li>Screen Size: 32 inches (diagonal)</li>
<li>Resolution: Full HD 1920x1080</li>
<li>Backlight: Direct LED</li>
<li>Panel: IPS</li>
<li>Viewing Angle: 178°</li>
<li>Motion Rate: 60 Hz</li>
<li>Video Enhancements: Trochilus Extreme, Brilliance Clear Enhancer, and adjustable DNR (Low, Medium, High)</li>
<li>Connectivity:</li>
<li>USB Ports: 2 (1x 2.0, 1x 3.0)</li>
<li>HDMI Ports: 3</li>
<li>Ethernet Port: 1</li>
<li>RF In: Cable &amp; Air</li>
<li>Digital Output: Optical</li>
<li>Design:</li>
<li>Finish: Glossy silver-dark</li>
<li>Stand Base: Silver metal</li>
<li>Bezel: Borderless design</li>
<li>Manual Button: Yes</li>
<li>Tuner:</li>
<li>Video Colour Systems: PAL M/N, NTSC</li>
<li>Broadcast: Digital (DVB)</li>
<li>Power:</li>
<li>Voltage: 100-240V, 50-60Hz</li>
<li>Power Consumption: 150W</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 16000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/1_4.jpg?v=1745577920",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/1_4.jpg?v=1745577920"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "syinix-50-inch-premium-4k-uhd-google-tv-50u61g",
    name: "Syinix 50 inch Premium 4K UHD Google TV-50U61G",
    brand: "Syinix",
    category: "televisions",
    slug: "syinix-50-inch-premium-4k-uhd-google-tv-50u61g",
    description: `<p>High-end Smart Google TV</p>
<p>Satellite DTV</p>
<p>Voice control</p>
<p>4K HDR</p>
<p>24W HiFi</p>`,
    specifications: {},
    variants: [],
    price: 40000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/IMG-4506.jpg?v=1745576196",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/IMG-4506.jpg?v=1745576196"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "syinix-55-inch-uhd-4k-tv-55u61g",
    name: "SYINIX 55 Inch UHD 4K TV - 55U61G",
    brand: "Syinix",
    category: "televisions",
    slug: "syinix-55-inch-uhd-4k-tv-55u61g",
    description: `<p>Google TV</p>
<p>Direct LED Backlight</p>
<p>4K HDR</p>
<p>Dolby Audio</p>
<p>2.0 Audio channel</p>
<p>2*12W Audio Power</p>
<p>Google Assistant Built in</p>
<p>Miracast: YES</p>
<p>Bluetooth:</p>
<p>WiFi:</p>
<p>Built-in Satellite TV</p>
<p>Built-in Stabilizer</p>`,
    specifications: {},
    variants: [],
    price: 45000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/IMG-4501.jpg?v=1745570114",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/IMG-4501.jpg?v=1745570114"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "tcl-c7k-98-inch-premium-qd-miniled-google-tv",
    name: "TCL C7K 98 Inch Premium QD-MiniLED Google TV",
    brand: "TCL",
    category: "televisions",
    slug: "tcl-c7k-98-inch-premium-qd-miniled-google-tv",
    description: `<ul class="highlights" data-bind="foreach: characteristics">
<li class="highlight-item" style="font-weight: bold; color: rgb(43, 0, 255);"><a href="https://www.tiktok.com/@digital_city_electronics/video/7496540890236865847?" target="_blank" title="TCL QD MINILED C6K VS C7K COMPARISON" rel="noopener"><span style="color: rgb(43, 0, 255);"><strong>CLICK TO WATCH REVIEW VIDEO</strong></span></a></li>
<li class="highlight-item"><span>Google TV</span></li>
<li class="highlight-item"><span>Free Wall Bracket and TV Guard</span></li>
<li class="highlight-item"><span>64GB ROM &amp; 3GB RAM</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">Precise Dimming Series Up to 2048 Zones</span></li>
<li class="highlight-item">
<span data-bind="text: pictureDesc">HDR 3000 nits(peak)</span><br>
</li>
<li class="highlight-item"><span data-bind="text: pictureDesc">Contrast Ratio: 6000:1</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">CrystGlow HVA Panel</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">AiPQ Pro Processor</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">144Hz Native Refresh Rate</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">Audio by Bang &amp; Olufsen</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">DTS Premium Sound: NO</span></li>
<li>Dolby Atmos<span data-bind="text: pictureDesc"></span>
</li>
<li class="highlight-item">
<span data-bind="text: pictureDesc">Ultra Slim Design</span><br>
</li>
<li class="highlight-item"><span data-bind="text: pictureDesc">AiPQ Pro Processor</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">144Hz Native Refresh Rate</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">Ultra Slim Design</span></li>
<li>
<span data-bind="text: name" class="feature-item-name">IMAX Enhanced:<span> YES</span></span><span data-bind="text: name" class="feature-item-name"><span></span></span>
</li>
<li><span data-bind="text: name" class="feature-item-name"><span>Refresh Rate: MEMC 120HZ; VRR 48HZ~288HZ; DLG 240Hz</span></span></li>
<li>
<span data-bind="text: name" class="feature-item-name"><span>Dolby Vision IQ</span></span><span data-bind="text: name" class="feature-item-name"><span></span></span>
</li>
<li><span data-bind="text: name" class="feature-item-name"><span>HLG</span></span></li>
<li><span data-bind="text: name" class="feature-item-name"><span>HDR 10+</span></span></li>
<li>
<div class="feature-item">
<span data-bind="text: name" class="feature-item-name">Game Master:<span> </span></span><span data-bind="text: value" class="feature-item-value">Yes</span>
</div>
</li>
<li>
<div class="feature-item">
<span data-bind="text: value" class="feature-item-value"></span>
<div class="feature-item">
<span data-bind="text: name" class="feature-item-name">Video Chat: </span><span data-bind="text: value" class="feature-item-value">Yes</span>
</div>
</div>
</li>
<li>
<div class="feature-item">
<span data-bind="text: name" class="feature-item-name">Miracast (Wireless Display):<span> </span></span><span data-bind="text: value" class="feature-item-value">Yes</span>
</div>
</li>
<li><span data-bind="text: value" class="feature-item-value">Airplay Built In</span></li>
<li><span data-bind="text: value" class="feature-item-value">Google Assistant Built In</span></li>
<li><span data-bind="text: value" class="feature-item-value">Hands Free Voice Control</span></li>
<li><span data-bind="text: value" class="feature-item-value">Google Cast Formerly (Chromecast)</span></li>
<li><span data-bind="text: value" class="feature-item-value"><span data-bind="text: name" class="feature-item-name">Quick Settings: </span>Yes</span></li>
<li>Bluetooth: BT5.4</li>
<li>Wi-Fi: Wi-Fi 5</li>
<li><span>HDMI1.4 &amp; HDMI2.0 &amp; HDMI2.1, HDCP1.4 &amp; HDCP2.2</span></li>
<li>HDMI 2.1(eARC/ARC): YES</li>
<li>HDMI CEC: YES</li>
<li>AMD Free Sync: YES</li>
<li>PVR/Timeshift: YES</li>
<li>
<div class="product__description rte quick-add-hidden">
<p><span data-bind="text: value" class="feature-item-value"><span class="feature-item-name" data-bind="text: name">Program Guide(EPG):<span> </span></span>Yes (for DTV programmes only)</span></p>
<span data-bind="text: pictureDesc"></span>
</div>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 370000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/98C7K3.webp?v=1745525040",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/98C7K3.webp?v=1745525040"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "tcl-c7k-85-inch-premium-qd-miniled-google-tv",
    name: "TCL C7K 85 Inch Premium QD-MiniLED Google TV",
    brand: "TCL",
    category: "televisions",
    slug: "tcl-c7k-85-inch-premium-qd-miniled-google-tv",
    description: `<ul data-bind="foreach: characteristics" class="highlights">
<li>
<a rel="noopener" title="TCL QD MINILED C6K VS C7K COMPARISON" href="https://www.tiktok.com/@digital_city_electronics/video/7496540890236865847?" target="_blank"><span style="color: rgb(43, 0, 255);"><strong>CLICK TO WATCH REVIEW VIDEO</strong></span></a><span></span>
</li>
<li class="highlight-item"><span>Google TV</span></li>
<li class="highlight-item"><span>Free Wall Bracket and TV Guard</span></li>
<li class="highlight-item"><span>64GB ROM &amp; 3GB RAM</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">Precise Dimming Series Up to 2048 Zones</span></li>
<li class="highlight-item">
<span data-bind="text: pictureDesc">HDR 3000 nits(peak)</span><br>
</li>
<li class="highlight-item"><span data-bind="text: pictureDesc">Contrast Ratio: 6000:1</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">CrystGlow HVA Panel</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">AiPQ Pro Processor</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">144Hz Native Refresh Rate</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">Audio by Bang &amp; Olufsen</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">DTS Premium Sound: NO</span></li>
<li>Dolby Atmos<span data-bind="text: pictureDesc"></span>
</li>
<li class="highlight-item">
<span data-bind="text: pictureDesc">Ultra Slim Design</span><br>
</li>
<li class="highlight-item"><span data-bind="text: pictureDesc">AiPQ Pro Processor</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">144Hz Native Refresh Rate</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">Ultra Slim Design</span></li>
<li>
<span class="feature-item-name" data-bind="text: name">IMAX Enhanced:<span> YES</span></span><span class="feature-item-name" data-bind="text: name"><span></span></span>
</li>
<li><span class="feature-item-name" data-bind="text: name"><span>Refresh Rate: MEMC 120HZ; VRR 48HZ~288HZ; DLG 240Hz</span></span></li>
<li>
<span class="feature-item-name" data-bind="text: name"><span>Dolby Vision IQ</span></span><span class="feature-item-name" data-bind="text: name"><span></span></span>
</li>
<li><span class="feature-item-name" data-bind="text: name"><span>HLG</span></span></li>
<li><span class="feature-item-name" data-bind="text: name"><span>HDR 10+</span></span></li>
<li>
<div class="feature-item">
<span class="feature-item-name" data-bind="text: name">Game Master:<span> </span></span><span class="feature-item-value" data-bind="text: value">Yes</span>
</div>
</li>
<li>
<div class="feature-item">
<span class="feature-item-value" data-bind="text: value"></span>
<div class="feature-item">
<span class="feature-item-name" data-bind="text: name">Video Chat: </span><span class="feature-item-value" data-bind="text: value">Yes</span>
</div>
</div>
</li>
<li>
<div class="feature-item">
<span class="feature-item-name" data-bind="text: name">Miracast (Wireless Display):<span> </span></span><span class="feature-item-value" data-bind="text: value">Yes</span>
</div>
</li>
<li><span class="feature-item-value" data-bind="text: value">Airplay Built In</span></li>
<li><span class="feature-item-value" data-bind="text: value">Google Assistant Built In</span></li>
<li><span class="feature-item-value" data-bind="text: value">Hands Free Voice Control</span></li>
<li><span class="feature-item-value" data-bind="text: value">Google Cast Formerly (Chromecast)</span></li>
<li><span class="feature-item-value" data-bind="text: value"><span class="feature-item-name" data-bind="text: name">Quick Settings: </span>Yes</span></li>
<li>Bluetooth: BT5.4</li>
<li>Wi-Fi: Wi-Fi 5</li>
<li><span>HDMI1.4 &amp; HDMI2.0 &amp; HDMI2.1, HDCP1.4 &amp; HDCP2.2</span></li>
<li>HDMI 2.1(eARC/ARC): YES</li>
<li>HDMI CEC: YES</li>
<li>AMD Free Sync: YES</li>
<li>PVR/Timeshift: YES</li>
<li>
<div class="product__description rte quick-add-hidden">
<p><span class="feature-item-value" data-bind="text: value"><span data-bind="text: name" class="feature-item-name">Program Guide(EPG):<span> </span></span>Yes (for DTV programmes only)</span></p>
<span data-bind="text: pictureDesc"></span>
</div>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 230000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/85C7K3.webp?v=1745525095",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/85C7K3.webp?v=1745525095"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "tcl-c7k-75-inch-premium-qd-miniled-google-tv",
    name: "TCL C7K 75 Inch Premium QD-MiniLED Google TV",
    brand: "TCL",
    category: "televisions",
    slug: "tcl-c7k-75-inch-premium-qd-miniled-google-tv",
    description: `<ul data-bind="foreach: characteristics" class="highlights">
<li>
<a rel="noopener" title="TCL QD MINILED C6K VS C7K COMPARISON" href="https://www.tiktok.com/@digital_city_electronics/video/7496540890236865847?" target="_blank"><span style="color: rgb(43, 0, 255);"><strong>CLICK TO WATCH REVIEW VIDEO</strong></span></a><span></span>
</li>
<li class="highlight-item"><span>Google TV</span></li>
<li class="highlight-item"><span>Free Wall Bracket and TV Guard</span></li>
<li class="highlight-item"><span>64GB ROM &amp; 3GB RAM</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">Precise Dimming Series Up to 2048 Zones</span></li>
<li class="highlight-item">
<span data-bind="text: pictureDesc">HDR 3000 nits(peak)</span><br>
</li>
<li class="highlight-item"><span data-bind="text: pictureDesc">Contrast Ratio: 7000:1</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">CrystGlow HVA Panel</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">AiPQ Pro Processor</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">144Hz Native Refresh Rate</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">Audio by Bang &amp; Olufsen</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">DTS Premium Sound: NO</span></li>
<li>Dolby Atmos<span data-bind="text: pictureDesc"></span>
</li>
<li class="highlight-item">
<span data-bind="text: pictureDesc">Ultra Slim Design</span><br>
</li>
<li class="highlight-item"><span data-bind="text: pictureDesc">AiPQ Pro Processor</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">144Hz Native Refresh Rate</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">Ultra Slim Design</span></li>
<li>
<span class="feature-item-name" data-bind="text: name">IMAX Enhanced:<span> YES</span></span><span class="feature-item-name" data-bind="text: name"><span></span></span>
</li>
<li><span class="feature-item-name" data-bind="text: name"><span>Refresh Rate: MEMC 120HZ; VRR 48HZ~288HZ; DLG 240Hz</span></span></li>
<li>
<span class="feature-item-name" data-bind="text: name"><span>Dolby Vision IQ</span></span><span class="feature-item-name" data-bind="text: name"><span></span></span>
</li>
<li><span class="feature-item-name" data-bind="text: name"><span>HLG</span></span></li>
<li><span class="feature-item-name" data-bind="text: name"><span>HDR 10+</span></span></li>
<li>
<div class="feature-item">
<span class="feature-item-name" data-bind="text: name">Game Master:<span> </span></span><span class="feature-item-value" data-bind="text: value">Yes</span>
</div>
</li>
<li>
<div class="feature-item">
<span class="feature-item-value" data-bind="text: value"></span>
<div class="feature-item">
<span class="feature-item-name" data-bind="text: name">Video Chat: </span><span class="feature-item-value" data-bind="text: value">Yes</span>
</div>
</div>
</li>
<li>
<div class="feature-item">
<span class="feature-item-name" data-bind="text: name">Miracast (Wireless Display):<span> </span></span><span class="feature-item-value" data-bind="text: value">Yes</span>
</div>
</li>
<li><span class="feature-item-value" data-bind="text: value">Airplay Built In</span></li>
<li><span class="feature-item-value" data-bind="text: value">Google Assistant Built In</span></li>
<li><span class="feature-item-value" data-bind="text: value">Hands Free Voice Control</span></li>
<li><span class="feature-item-value" data-bind="text: value">Google Cast Formerly (Chromecast)</span></li>
<li><span class="feature-item-value" data-bind="text: value"><span class="feature-item-name" data-bind="text: name">Quick Settings: </span>Yes</span></li>
<li>Bluetooth: BT5.4</li>
<li>Wi-Fi: Wi-Fi 5</li>
<li><span>HDMI1.4 &amp; HDMI2.0 &amp; HDMI2.1, HDCP1.4 &amp; HDCP2.2</span></li>
<li>HDMI 2.1(eARC/ARC): YES</li>
<li>HDMI CEC: YES</li>
<li>AMD Free Sync: YES</li>
<li>PVR/Timeshift: YES</li>
<li>
<div class="product__description rte quick-add-hidden">
<p><span class="feature-item-value" data-bind="text: value"><span data-bind="text: name" class="feature-item-name">Program Guide(EPG):<span> </span></span>Yes (for DTV programmes only)</span></p>
<span data-bind="text: pictureDesc"></span>
</div>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 160000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/75C7K2.webp?v=1745843916",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/75C7K2.webp?v=1745843916"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "tcl-c7k-65-inch-premium-qd-miniled-google-tv",
    name: "TCL C7K 65 Inch Premium QD-MiniLED Google TV",
    brand: "TCL",
    category: "televisions",
    slug: "tcl-c7k-65-inch-premium-qd-miniled-google-tv",
    description: `<ul data-bind="foreach: characteristics" class="highlights">
<li>
<a rel="noopener" title="TCL QD MINILED C6K VS C7K COMPARISON" href="https://www.tiktok.com/@digital_city_electronics/video/7496540890236865847?" target="_blank"><span style="color: rgb(43, 0, 255);"><strong>CLICK TO WATCH REVIEW VIDEO</strong></span></a><span></span>
</li>
<li class="highlight-item"><span>Google TV</span></li>
<li class="highlight-item"><span>Free Wall Bracket and TV Guard</span></li>
<li class="highlight-item"><span>64GB ROM &amp; 3GB RAM</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">Precise Dimming Series Up to 2048 Zones</span></li>
<li class="highlight-item">
<span data-bind="text: pictureDesc">HDR 2600 nits(peak)</span><br>
</li>
<li class="highlight-item"><span data-bind="text: pictureDesc">Contrast Ratio: 7000:1</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">CrystGlow HVA Panel</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">AiPQ Pro Processor</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">144Hz Native Refresh Rate</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">Audio by Bang &amp; Olufsen</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">DTS Premium Sound: NO</span></li>
<li>Dolby Atmos<span data-bind="text: pictureDesc"></span>
</li>
<li class="highlight-item">
<span data-bind="text: pictureDesc">Ultra Slim Design</span><br>
</li>
<li class="highlight-item"><span data-bind="text: pictureDesc">AiPQ Pro Processor</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">144Hz Native Refresh Rate</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">Ultra Slim Design</span></li>
<li>
<span class="feature-item-name" data-bind="text: name">IMAX Enhanced:<span> YES</span></span><span class="feature-item-name" data-bind="text: name"><span></span></span>
</li>
<li><span class="feature-item-name" data-bind="text: name"><span>Refresh Rate: MEMC 120HZ; VRR 48HZ~288HZ; DLG 240Hz</span></span></li>
<li>
<span class="feature-item-name" data-bind="text: name"><span>Dolby Vision IQ</span></span><span class="feature-item-name" data-bind="text: name"><span></span></span>
</li>
<li><span class="feature-item-name" data-bind="text: name"><span>HLG</span></span></li>
<li><span class="feature-item-name" data-bind="text: name"><span>HDR 10+</span></span></li>
<li>
<div class="feature-item">
<span class="feature-item-name" data-bind="text: name">Game Master:<span> </span></span><span class="feature-item-value" data-bind="text: value">Yes</span>
</div>
</li>
<li>
<div class="feature-item">
<span class="feature-item-value" data-bind="text: value"></span>
<div class="feature-item">
<span class="feature-item-name" data-bind="text: name">Video Chat: </span><span class="feature-item-value" data-bind="text: value">Yes</span>
</div>
</div>
</li>
<li>
<div class="feature-item">
<span class="feature-item-name" data-bind="text: name">Miracast (Wireless Display):<span> </span></span><span class="feature-item-value" data-bind="text: value">Yes</span>
</div>
</li>
<li><span class="feature-item-value" data-bind="text: value">Airplay Built In</span></li>
<li><span class="feature-item-value" data-bind="text: value">Google Assistant Built In</span></li>
<li><span class="feature-item-value" data-bind="text: value">Hands Free Voice Control</span></li>
<li><span class="feature-item-value" data-bind="text: value">Google Cast Formerly (Chromecast)</span></li>
<li><span class="feature-item-value" data-bind="text: value"><span class="feature-item-name" data-bind="text: name">Quick Settings: </span>Yes</span></li>
<li>Bluetooth: BT5.4</li>
<li>Wi-Fi: Wi-Fi 5</li>
<li><span>HDMI1.4 &amp; HDMI2.0 &amp; HDMI2.1, HDCP1.4 &amp; HDCP2.2</span></li>
<li>HDMI 2.1(eARC/ARC): YES</li>
<li>HDMI CEC: YES</li>
<li>AMD Free Sync: YES</li>
<li>PVR/Timeshift: YES</li>
<li>
<div class="product__description rte quick-add-hidden">
<p><span class="feature-item-value" data-bind="text: value"><span data-bind="text: name" class="feature-item-name">Program Guide(EPG):<span> </span></span>Yes (for DTV programmes only)</span></p>
<span data-bind="text: pictureDesc"></span>
</div>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 125000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/65C7K3.webp?v=1745843931",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/65C7K3.webp?v=1745843931"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "tcl-c7k-55-inch-premium-qd-miniled-google-tv",
    name: "TCL C7K 55 Inch Premium QD-MiniLED Google TV",
    brand: "TCL",
    category: "televisions",
    slug: "tcl-c7k-55-inch-premium-qd-miniled-google-tv",
    description: `<ul class="highlights" data-bind="foreach: characteristics">
<li class="highlight-item"><span>Google TV</span></li>
<li class="highlight-item"><span>Free Wall Bracket and TV Guard</span></li>
<li class="highlight-item"><span>64GB ROM &amp; 3GB RAM</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">Precise Dimming Series Up to 2048 Zones</span></li>
<li class="highlight-item">
<span data-bind="text: pictureDesc">HDR 2600 nits(peak)</span><br>
</li>
<li class="highlight-item"><span data-bind="text: pictureDesc">Contrast Ratio: 6500:1</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">CrystGlow HVA Panel</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">AiPQ Pro Processor</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">144Hz Native Refresh Rate</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">Audio by Bang &amp; Olufsen</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">DTS Premium Sound: NO</span></li>
<li>Dolby Atmos<span data-bind="text: pictureDesc"></span>
</li>
<li class="highlight-item">
<span data-bind="text: pictureDesc">Ultra Slim Design</span><br>
</li>
<li class="highlight-item"><span data-bind="text: pictureDesc">AiPQ Pro Processor</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">144Hz Native Refresh Rate</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">Ultra Slim Design</span></li>
<li>
<span data-bind="text: name" class="feature-item-name">IMAX Enhanced:<span> YES</span></span><span data-bind="text: name" class="feature-item-name"><span></span></span>
</li>
<li><span data-bind="text: name" class="feature-item-name"><span>Refresh Rate: MEMC 120HZ; VRR 48HZ~240HZ; DLG 240Hz</span></span></li>
<li>
<span data-bind="text: name" class="feature-item-name"><span>Dolby Vision IQ</span></span><span data-bind="text: name" class="feature-item-name"><span></span></span>
</li>
<li><span data-bind="text: name" class="feature-item-name"><span>HLG</span></span></li>
<li><span data-bind="text: name" class="feature-item-name"><span>HDR 10+</span></span></li>
<li>
<div class="feature-item">
<span data-bind="text: name" class="feature-item-name">Game Master:<span> </span></span><span data-bind="text: value" class="feature-item-value">Yes</span>
</div>
</li>
<li>
<div class="feature-item">
<span data-bind="text: value" class="feature-item-value"></span>
<div class="feature-item">
<span data-bind="text: name" class="feature-item-name">Video Chat: </span><span data-bind="text: value" class="feature-item-value">Yes</span>
</div>
</div>
</li>
<li>
<div class="feature-item">
<span data-bind="text: name" class="feature-item-name">Miracast (Wireless Display):<span> </span></span><span data-bind="text: value" class="feature-item-value">Yes</span>
</div>
</li>
<li><span data-bind="text: value" class="feature-item-value">Airplay Built In</span></li>
<li><span data-bind="text: value" class="feature-item-value">Google Assistant Built In</span></li>
<li><span data-bind="text: value" class="feature-item-value">Hands Free Voice Control</span></li>
<li><span data-bind="text: value" class="feature-item-value">Google Cast Formerly (Chromecast)</span></li>
<li><span data-bind="text: value" class="feature-item-value"><span data-bind="text: name" class="feature-item-name">Quick Settings: </span>Yes</span></li>
<li>Bluetooth: BT5.4</li>
<li>Wi-Fi: Wi-Fi 5</li>
<li><span>HDMI1.4 &amp; HDMI2.0 &amp; HDMI2.1, HDCP1.4 &amp; HDCP2.2</span></li>
<li>HDMI 2.1(eARC/ARC): YES</li>
<li>HDMI CEC: YES</li>
<li>AMD Free Sync: YES</li>
<li>PVR/Timeshift: YES</li>
<li>
<div class="product__description rte quick-add-hidden">
<p><span data-bind="text: value" class="feature-item-value"><span class="feature-item-name" data-bind="text: name">Program Guide(EPG):<span> </span></span>Yes (for DTV programmes only)</span></p>
<span data-bind="text: pictureDesc"></span>
</div>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 90000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/55C7K3.webp?v=1745843946",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/55C7K3.webp?v=1745843946"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "tcl-c6k-75-inch-premium-qd-miniled-google-tv",
    name: "TCL C6K 75 Inch Premium QD-MiniLED Google TV",
    brand: "TCL",
    category: "televisions",
    slug: "tcl-c6k-75-inch-premium-qd-miniled-google-tv",
    description: `<ul class="highlights" data-bind="foreach: characteristics">
<li>
<a href="https://www.tiktok.com/@digital_city_electronics/video/7496540890236865847?" title="TCL QD MINILED C6K VS C7K COMPARISON" rel="noopener" target="_blank"><span style="color: rgb(43, 0, 255);"><strong>CLICK TO WATCH REVIEW VIDEO</strong></span></a><span></span>
</li>
<li class="highlight-item"><span>Google TV</span></li>
<li class="highlight-item"><span>Free Wall Bracket and TV Guard</span></li>
<li class="highlight-item"><span>32GB ROM &amp; 3GB RAM</span></li>
<li class="highlight-item"><span>QD Mini-LED</span></li>
<li class="highlight-item">
<span data-bind="text: pictureDesc">Precise Dimming Series Up to 512 Zones</span><br>
</li>
<li class="highlight-item"><span data-bind="text: pictureDesc">System Brightness: High HDR Brightness </span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">Contrast Ratio: 7<span>000:1 (typ.)</span></span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">HVA Panel</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">ONKYO 2.1 Hi-Fi System</span></li>
<li>2.1 Audio Channel</li>
<li>Audio Power <span>2*10W+20W</span>
</li>
<li>DTS Virtual X<span data-bind="text: pictureDesc"></span>
</li>
<li>Dolby Atmos</li>
<li class="highlight-item"><span data-bind="text: pictureDesc">AiPQ Pro Processor</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">144Hz Native Refresh Rate</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">Ultra Slim Design</span></li>
<li>
<span data-bind="text: name" class="feature-item-name">IMAX Enhanced:<span> YES</span></span><span data-bind="text: name" class="feature-item-name"><span></span></span>
</li>
<li><span data-bind="text: name" class="feature-item-name"><span>Refresh Rate: MEMC 120HZ; VRR 48HZ~288Hz; DLG 240Hz</span></span></li>
<li>
<span data-bind="text: name" class="feature-item-name"><span>Dolby Vision IQ</span></span><span data-bind="text: name" class="feature-item-name"><span></span></span>
</li>
<li><span data-bind="text: name" class="feature-item-name"><span>HLG</span></span></li>
<li><span data-bind="text: name" class="feature-item-name"><span>HDR 10+</span></span></li>
<li>
<div class="feature-item">
<span data-bind="text: name" class="feature-item-name">Game Master:<span> </span></span><span data-bind="text: value" class="feature-item-value">Yes</span>
</div>
</li>
<li>
<div class="feature-item">
<span data-bind="text: value" class="feature-item-value"></span>
<div class="feature-item">
<span data-bind="text: name" class="feature-item-name">Video Chat: </span><span data-bind="text: value" class="feature-item-value">Yes</span>
</div>
</div>
</li>
<li>
<div class="feature-item">
<span data-bind="text: name" class="feature-item-name">Miracast (Wireless Display):<span> </span></span><span data-bind="text: value" class="feature-item-value">Yes</span>
</div>
</li>
<li><span data-bind="text: value" class="feature-item-value">Airplay Built In</span></li>
<li><span data-bind="text: value" class="feature-item-value">Google Assistant Built In</span></li>
<li><span data-bind="text: value" class="feature-item-value">Hands Free Voice Control</span></li>
<li><span data-bind="text: value" class="feature-item-value">Google Cast Formerly (Chromecast)</span></li>
<li><span data-bind="text: value" class="feature-item-value"><span data-bind="text: name" class="feature-item-name">Quick Settings: </span>Yes</span></li>
<li>Bluetooth: BT5.4</li>
<li>Wi-Fi: Wi-Fi 5</li>
<li><span>HDMI1.4 &amp; HDMI2.0 &amp; HDMI2.1, HDCP1.4 &amp; HDCP2.2</span></li>
<li>HDMI 2.1(eARC/ARC): YES</li>
<li>HDMI CEC: YES</li>
<li>AMD Free Sync: YES</li>
<li>PVR/Timeshift: YES</li>
<li>
<div class="product__description rte quick-add-hidden">
<p><span data-bind="text: value" class="feature-item-value"><span class="feature-item-name" data-bind="text: name">Program Guide(EPG):<span> DTV EPG(without IP EPG)</span></span></span></p>
<br>
</div>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 135000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/75C6K1.webp?v=1745843975",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/75C6K1.webp?v=1745843975"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "tcl-c6k-65-inch-premium-qd-miniled-google-tv",
    name: "TCL C6K 65 Inch Premium QD-MiniLED Google TV",
    brand: "TCL",
    category: "televisions",
    slug: "tcl-c6k-65-inch-premium-qd-miniled-google-tv",
    description: `<ul class="highlights" data-bind="foreach: characteristics">
<li>
<a href="https://www.tiktok.com/@digital_city_electronics/video/7496540890236865847?" title="TCL QD MINILED C6K VS C7K COMPARISON" rel="noopener" target="_blank"><span style="color: rgb(43, 0, 255);"><strong>CLICK TO WATCH REVIEW VIDEO</strong></span></a><span></span>
</li>
<li class="highlight-item"><span>Google TV</span></li>
<li>
<span>32GB ROM &amp; 3GB RAM</span><span></span>
</li>
<li class="highlight-item"><span>Free Wall Bracket and TV Guard</span></li>
<li class="highlight-item"><span>QD Mini-LED</span></li>
<li class="highlight-item">
<span data-bind="text: pictureDesc">Precise Dimming Series Up to 512 Zones</span><br>
</li>
<li class="highlight-item"><span data-bind="text: pictureDesc">System Brightness: High HDR Brightness </span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">Contrast Ratio: <span>7000:1 (typ.)</span></span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">HVA Panel</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">ONKYO 2.1 Hi-Fi System</span></li>
<li>2.1 Audio Channel</li>
<li>Audio Power <span>2*10W+20W</span>
</li>
<li>DTS Virtual X<span data-bind="text: pictureDesc"></span>
</li>
<li>Dolby Atmos</li>
<li class="highlight-item"><span data-bind="text: pictureDesc">AiPQ Pro Processor</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">144Hz Native Refresh Rate</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">Ultra Slim Design</span></li>
<li>
<span data-bind="text: name" class="feature-item-name">IMAX Enhanced:<span> YES</span></span><span data-bind="text: name" class="feature-item-name"><span></span></span>
</li>
<li><span data-bind="text: name" class="feature-item-name"><span>Refresh Rate: MEMC 120HZ; VRR 48HZ~288Hz; DLG 240Hz</span></span></li>
<li>
<span data-bind="text: name" class="feature-item-name"><span>Dolby Vision IQ</span></span><span data-bind="text: name" class="feature-item-name"><span></span></span>
</li>
<li><span data-bind="text: name" class="feature-item-name"><span>HLG</span></span></li>
<li><span data-bind="text: name" class="feature-item-name"><span>HDR 10+</span></span></li>
<li>
<div class="feature-item">
<span data-bind="text: name" class="feature-item-name">Game Master:<span> </span></span><span data-bind="text: value" class="feature-item-value">Yes</span>
</div>
</li>
<li>
<div class="feature-item">
<span data-bind="text: value" class="feature-item-value"></span>
<div class="feature-item">
<span data-bind="text: name" class="feature-item-name">Video Chat: </span><span data-bind="text: value" class="feature-item-value">Yes</span>
</div>
</div>
</li>
<li>
<div class="feature-item">
<span data-bind="text: name" class="feature-item-name">Miracast (Wireless Display):<span> </span></span><span data-bind="text: value" class="feature-item-value">Yes</span>
</div>
</li>
<li><span data-bind="text: value" class="feature-item-value">Airplay Built In</span></li>
<li><span data-bind="text: value" class="feature-item-value">Google Assistant Built In</span></li>
<li><span data-bind="text: value" class="feature-item-value">Hands Free Voice Control</span></li>
<li><span data-bind="text: value" class="feature-item-value">Google Cast Formerly (Chromecast)</span></li>
<li><span data-bind="text: value" class="feature-item-value"><span data-bind="text: name" class="feature-item-name">Quick Settings: </span>Yes</span></li>
<li>Bluetooth: BT5.4</li>
<li>Wi-Fi: Wi-Fi 5</li>
<li><span>HDMI1.4 &amp; HDMI2.0 &amp; HDMI2.1, HDCP1.4 &amp; HDCP2.2</span></li>
<li>HDMI 2.1(eARC/ARC): YES</li>
<li>HDMI CEC: YES</li>
<li>AMD Free Sync: YES</li>
<li>PVR/Timeshift: YES</li>
<li>
<div class="product__description rte quick-add-hidden">
<p><span data-bind="text: value" class="feature-item-value"><span class="feature-item-name" data-bind="text: name">Program Guide(EPG):<span> DTV EPG(without IP EPG)</span></span></span></p>
<br>
</div>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 90000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/65C6K1.webp?v=1745844026",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/65C6K1.webp?v=1745844026"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "tcl-c6k-55-inch-premium-qd-miniled-google-tv",
    name: "TCL C6K 55 Inch Premium QD-MiniLED Google TV",
    brand: "TCL",
    category: "televisions",
    slug: "tcl-c6k-55-inch-premium-qd-miniled-google-tv",
    description: `<ul class="highlights" data-bind="foreach: characteristics">
<li>
<a href="https://www.tiktok.com/@digital_city_electronics/video/7496540890236865847?" title="TCL QD MINILED C6K VS C7K COMPARISON" rel="noopener" target="_blank"><span style="color: rgb(43, 0, 255);"><strong>CLICK TO WATCH REVIEW VIDEO</strong></span></a><span></span>
</li>
<li class="highlight-item"><span>Google TV</span></li>
<li>
<span>32GB ROM &amp; 3GB RAM</span><span></span>
</li>
<li class="highlight-item"><span>Free Wall Bracket and TV Guard</span></li>
<li class="highlight-item"><span>QD Mini-LED</span></li>
<li class="highlight-item">
<span data-bind="text: pictureDesc">Precise Dimming Series Up to 512 Zones</span><br>
</li>
<li class="highlight-item"><span data-bind="text: pictureDesc">System Brightness: High HDR Brightness </span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">Contrast Ratio: 6<span>000:1 (typ.)</span></span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">HVA Panel</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">ONKYO 2.1 Hi-Fi System</span></li>
<li>2.1 Audio Channel</li>
<li>Audio Power <span>2*10W+20W</span>
</li>
<li>DTS Virtual X<span data-bind="text: pictureDesc"></span>
</li>
<li>Dolby Atmos</li>
<li class="highlight-item"><span data-bind="text: pictureDesc">AiPQ Pro Processor</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">144Hz Native Refresh Rate</span></li>
<li class="highlight-item"><span data-bind="text: pictureDesc">Ultra Slim Design</span></li>
<li>
<span data-bind="text: name" class="feature-item-name">IMAX Enhanced:<span> YES</span></span><span data-bind="text: name" class="feature-item-name"><span></span></span>
</li>
<li><span data-bind="text: name" class="feature-item-name"><span>Refresh Rate: MEMC 120HZ; VRR 48HZ~240Hz; DLG 240Hz</span></span></li>
<li>
<span data-bind="text: name" class="feature-item-name"><span>Dolby Vision IQ</span></span><span data-bind="text: name" class="feature-item-name"><span></span></span>
</li>
<li><span data-bind="text: name" class="feature-item-name"><span>HLG</span></span></li>
<li><span data-bind="text: name" class="feature-item-name"><span>HDR 10+</span></span></li>
<li>
<div class="feature-item">
<span data-bind="text: name" class="feature-item-name">Game Master:<span> </span></span><span data-bind="text: value" class="feature-item-value">Yes</span>
</div>
</li>
<li>
<div class="feature-item">
<span data-bind="text: value" class="feature-item-value"></span>
<div class="feature-item">
<span data-bind="text: name" class="feature-item-name">Video Chat: </span><span data-bind="text: value" class="feature-item-value">Yes</span>
</div>
</div>
</li>
<li>
<div class="feature-item">
<span data-bind="text: name" class="feature-item-name">Miracast (Wireless Display):<span> </span></span><span data-bind="text: value" class="feature-item-value">Yes</span>
</div>
</li>
<li><span data-bind="text: value" class="feature-item-value">Airplay Built In</span></li>
<li><span data-bind="text: value" class="feature-item-value">Google Assistant Built In</span></li>
<li><span data-bind="text: value" class="feature-item-value">Hands Free Voice Control</span></li>
<li><span data-bind="text: value" class="feature-item-value">Google Cast Formerly (Chromecast)</span></li>
<li><span data-bind="text: value" class="feature-item-value"><span data-bind="text: name" class="feature-item-name">Quick Settings: </span>Yes</span></li>
<li>Bluetooth: BT5.4</li>
<li>Wi-Fi: Wi-Fi 5</li>
<li><span>HDMI1.4 &amp; HDMI2.0 &amp; HDMI2.1, HDCP1.4 &amp; HDCP2.2</span></li>
<li>HDMI 2.1(eARC/ARC): YES</li>
<li>HDMI CEC: YES</li>
<li>AMD Free Sync: YES</li>
<li>PVR/Timeshift: YES</li>
<li>
<div class="product__description rte quick-add-hidden">
<p><span data-bind="text: value" class="feature-item-value"><span class="feature-item-name" data-bind="text: name">Program Guide(EPG):<span> DTV EPG(without IP EPG)</span></span></span></p>
<br>
</div>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 62000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/55C6K1-Copy.webp?v=1745843996",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/55C6K1-Copy.webp?v=1745843996"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "tcl-v6c-75-inch-direct-led-4k-hdr-google-tv",
    name: "TCL V6C 75 Inch Direct LED 4K HDR Google TV",
    brand: "TCL",
    category: "televisions",
    slug: "tcl-v6c-75-inch-direct-led-4k-hdr-google-tv",
    description: `<ul>
<li>4K HDR Direct LED</li>
<li>Free Wall Bracket &amp; TV Guard</li>
<li>Google TV</li>
<li>
<span class="feature-item-name" data-bind="text: name">Refresh Rate: </span><span class="feature-item-value" data-bind="text: value">60Hz</span>
</li>
<li><span class="feature-item-name" data-bind="text: name">HDR 10</span></li>
<li><span>MEMC</span></li>
<li><span>16GB ROM + 2G RAM</span></li>
<li>
<span class="feature-item-name" data-bind="text: name">System Brightness 330</span><span class="feature-item-value" data-bind="text: value">nit(typ)</span>
</li>
<li>HVA Panel</li>
<li>AiPQ Processor</li>
<li>
<span class="feature-item-name" data-bind="text: name">Audio Power </span><span class="feature-item-value" data-bind="text: value">2*10W</span><br>
</li>
<li>Google Cast</li>
<li>Dolby Audio</li>
<li><span class="feature-item-name" data-bind="text: name">Google Assistant Built-in</span></li>
<li><span class="feature-item-value" data-bind="text: value"><span class="feature-item-name" data-bind="text: name">No Hands-free Voice Control</span></span></li>
<li>
<span class="feature-item-name" data-bind="text: name">IMAX Enhanced: </span><span class="feature-item-value" data-bind="text: value">No</span>
</li>
<li>
<div class="feature-item">
<span class="feature-item-name" data-bind="text: name">Game Master: </span><span class="feature-item-value" data-bind="text: value">Yes</span>
</div>
</li>
<li>
<div class="feature-item">
<span class="feature-item-value" data-bind="text: value"></span>
<div class="feature-item">
<span class="feature-item-name" data-bind="text: name">Video Chat: </span><span class="feature-item-value" data-bind="text: value">Yes</span>
</div>
</div>
</li>
<li>
<div class="feature-item">
<span class="feature-item-name" data-bind="text: name">Miracast (Wireless Display): </span><span class="feature-item-value" data-bind="text: value">Yes</span>
</div>
</li>
<li><span class="feature-item-value" data-bind="text: value">Airplay</span></li>
<li><span class="feature-item-value" data-bind="text: value">Google Cast Formerly (Chromecast)</span></li>
<li><span class="feature-item-value" data-bind="text: value"><span class="feature-item-name" data-bind="text: name">Quick Settings: </span>Yes</span></li>
<li>
<div class="feature-item">
<span class="feature-item-name" data-bind="text: name">Bluetooth: </span><span class="feature-item-value" data-bind="text: value">BT5.2</span>
</div>
</li>
<li><span class="feature-item-value" data-bind="text: value"><span data-bind="text: name" class="feature-item-name">Wi-Fi: </span>WiFi 5</span></li>
<li><span class="feature-item-value" data-bind="text: value"><span data-bind="text: name" class="feature-item-name">HDMI2.1 (eARC&amp;ARC): </span>Yes</span></li>
<li><span class="feature-item-value" data-bind="text: value"><span data-bind="text: name" class="feature-item-name">HDMI CEC: </span>Yes</span></li>
<li><span class="feature-item-value" data-bind="text: value"><span data-bind="text: name" class="feature-item-name">Program Guide(EPG): </span>Yes (for DTV programmes only)</span></li>
</ul>`,
    specifications: {},
    variants: [],
    price: 105000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/V6C751.webp?v=1745497504",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/V6C751.webp?v=1745497504"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "tcl-v6c-65-inch-direct-led-4k-hdr-google-tv",
    name: "TCL V6C 65 Inch Direct LED 4K HDR Google TV",
    brand: "TCL",
    category: "televisions",
    slug: "tcl-v6c-65-inch-direct-led-4k-hdr-google-tv",
    description: `<ul>
<li>4K HDR Direct LED</li>
<li>Free Wall Bracket &amp; TV Guard</li>
<li>Google TV</li>
<li>
<span data-bind="text: name" class="feature-item-name">Refresh Rate: </span><span data-bind="text: value" class="feature-item-value">60Hz</span>
</li>
<li><span data-bind="text: name" class="feature-item-name">HDR 10</span></li>
<li><span>MEMC</span></li>
<li><span>16GB ROM + 2G RAM</span></li>
<li>
<span data-bind="text: name" class="feature-item-name">System Brightness 280</span><span data-bind="text: value" class="feature-item-value">nit(typ)</span>
</li>
<li>HVA Panel</li>
<li>AiPQ Processor</li>
<li>
<span data-bind="text: name" class="feature-item-name">Audio Power </span><span data-bind="text: value" class="feature-item-value">2*10W</span><br>
</li>
<li>Google Cast</li>
<li>Dolby Audio</li>
<li><span data-bind="text: name" class="feature-item-name">Google Assistant Built-in</span></li>
<li><span data-bind="text: value" class="feature-item-value"><span data-bind="text: name" class="feature-item-name">No Hands-free Voice Control</span></span></li>
<li>
<span data-bind="text: name" class="feature-item-name">IMAX Enhanced: </span><span data-bind="text: value" class="feature-item-value">No</span>
</li>
<li>
<div class="feature-item">
<span data-bind="text: name" class="feature-item-name">Game Master: </span><span data-bind="text: value" class="feature-item-value">Yes</span>
</div>
</li>
<li>
<div class="feature-item">
<span data-bind="text: value" class="feature-item-value"></span>
<div class="feature-item">
<span data-bind="text: name" class="feature-item-name">Video Chat: </span><span data-bind="text: value" class="feature-item-value">Yes</span>
</div>
</div>
</li>
<li>
<div class="feature-item">
<span data-bind="text: name" class="feature-item-name">Miracast (Wireless Display): </span><span data-bind="text: value" class="feature-item-value">Yes</span>
</div>
</li>
<li><span data-bind="text: value" class="feature-item-value">Airplay</span></li>
<li><span data-bind="text: value" class="feature-item-value">Google Cast Formerly (Chromecast)</span></li>
<li><span data-bind="text: value" class="feature-item-value"><span data-bind="text: name" class="feature-item-name">Quick Settings: </span>Yes</span></li>
<li>
<div class="feature-item">
<span data-bind="text: name" class="feature-item-name">Bluetooth: </span><span data-bind="text: value" class="feature-item-value">BT5.2</span>
</div>
</li>
<li><span data-bind="text: value" class="feature-item-value"><span class="feature-item-name" data-bind="text: name">Wi-Fi: </span>WiFi 5</span></li>
<li><span data-bind="text: value" class="feature-item-value"><span class="feature-item-name" data-bind="text: name">HDMI2.1 (eARC&amp;ARC): </span>Yes</span></li>
<li><span data-bind="text: value" class="feature-item-value"><span class="feature-item-name" data-bind="text: name">HDMI CEC: </span>Yes</span></li>
<li><span data-bind="text: value" class="feature-item-value"><span class="feature-item-name" data-bind="text: name">Program Guide(EPG): </span>Yes (for DTV programmes only)</span></li>
</ul>`,
    specifications: {},
    variants: [],
    price: 65000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/65V6C1.webp?v=1745844080",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/65V6C1.webp?v=1745844080"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "tcl-v6c-55-inch-direct-led-4k-hdr-google-tv",
    name: "TCL V6C 55 Inch Direct LED 4K HDR Google TV",
    brand: "TCL",
    category: "televisions",
    slug: "tcl-v6c-55-inch-direct-led-4k-hdr-google-tv",
    description: `<ul>
<li style="font-weight: bold; color: rgb(43, 0, 255);"><span style="color: rgb(43, 0, 255);"><a href="https://www.tiktok.com/@digital_city_electronics/video/7485422805970930950?" target="_blank" title="TCL 55 INCH V6C 2025 REVIEW" style="color: rgb(43, 0, 255);" rel="noopener"><strong>CLICK TO WATCH VIDEO REVIEW</strong></a></span></li>
<li>4K HDR Direct LED</li>
<li>Free Wall Bracket &amp; TV Guard</li>
<li>Google TV</li>
<li>
<span data-bind="text: name" class="feature-item-name">Refresh Rate: </span><span data-bind="text: value" class="feature-item-value">60Hz</span>
</li>
<li><span data-bind="text: name" class="feature-item-name">HDR 10</span></li>
<li><span>MEMC</span></li>
<li><span>16GB ROM + 2G RAM</span></li>
<li>
<span data-bind="text: name" class="feature-item-name">System Brightness 270</span><span data-bind="text: value" class="feature-item-value">nit(typ)</span>
</li>
<li>HVA Panel</li>
<li>AiPQ Processor</li>
<li>
<span data-bind="text: name" class="feature-item-name">Audio Power </span><span data-bind="text: value" class="feature-item-value">2*10W</span><br>
</li>
<li>Google Cast</li>
<li>Dolby Audio</li>
<li><span data-bind="text: name" class="feature-item-name">Google Assistant Built-in</span></li>
<li><span data-bind="text: value" class="feature-item-value"><span data-bind="text: name" class="feature-item-name">No Hands-free Voice Control</span></span></li>
<li>
<span data-bind="text: name" class="feature-item-name">IMAX Enhanced: </span><span data-bind="text: value" class="feature-item-value">No</span>
</li>
<li>
<div class="feature-item">
<span data-bind="text: name" class="feature-item-name">Game Master: </span><span data-bind="text: value" class="feature-item-value">Yes</span>
</div>
</li>
<li>
<div class="feature-item">
<span data-bind="text: value" class="feature-item-value"></span>
<div class="feature-item">
<span data-bind="text: name" class="feature-item-name">Video Chat: </span><span data-bind="text: value" class="feature-item-value">Yes</span>
</div>
</div>
</li>
<li>
<div class="feature-item">
<span data-bind="text: name" class="feature-item-name">Miracast (Wireless Display): </span><span data-bind="text: value" class="feature-item-value">Yes</span>
</div>
</li>
<li><span data-bind="text: value" class="feature-item-value">Airplay</span></li>
<li><span data-bind="text: value" class="feature-item-value">Google Cast Formerly (Chromecast)</span></li>
<li><span data-bind="text: value" class="feature-item-value"><span data-bind="text: name" class="feature-item-name">Quick Settings: </span>Yes</span></li>
<li>
<div class="feature-item">
<span data-bind="text: name" class="feature-item-name">Bluetooth: </span><span data-bind="text: value" class="feature-item-value">BT5.2</span>
</div>
</li>
<li><span data-bind="text: value" class="feature-item-value"><span class="feature-item-name" data-bind="text: name">Wi-Fi: </span>WiFi 5</span></li>
<li><span data-bind="text: value" class="feature-item-value"><span class="feature-item-name" data-bind="text: name">HDMI2.1 (eARC&amp;ARC): </span>Yes</span></li>
<li><span data-bind="text: value" class="feature-item-value"><span class="feature-item-name" data-bind="text: name">HDMI CEC: </span>Yes</span></li>
<li><span data-bind="text: value" class="feature-item-value"><span class="feature-item-name" data-bind="text: name">Program Guide(EPG): </span>Yes (for DTV programmes only)</span></li>
</ul>`,
    specifications: {},
    variants: [],
    price: 45000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/55V6C1.webp?v=1745495258",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/55V6C1.webp?v=1745495258"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "tcl-v6c-50-inch-direct-led-4k-hdr-google-tv",
    name: "TCL V6C 50 Inch Direct LED 4K HDR Google TV",
    brand: "TCL",
    category: "televisions",
    slug: "tcl-v6c-50-inch-direct-led-4k-hdr-google-tv",
    description: `<ul>
<li>4K HDR Direct LED</li>
<li>Free Wall Bracket &amp; TV Guard</li>
<li>Google TV</li>
<li>
<span data-bind="text: name" class="feature-item-name">Refresh Rate: </span><span data-bind="text: value" class="feature-item-value">60Hz</span>
</li>
<li><span data-bind="text: name" class="feature-item-name">HDR 10</span></li>
<li><span>MEMC</span></li>
<li><span>16GB ROM + 2G RAM</span></li>
<li>
<span data-bind="text: name" class="feature-item-name">System Brightness 260</span><span data-bind="text: value" class="feature-item-value">nit(typ)</span>
</li>
<li>HVA Panel</li>
<li>AiPQ Processor</li>
<li>
<span data-bind="text: name" class="feature-item-name">Audio Power </span><span data-bind="text: value" class="feature-item-value">2*10W</span><br>
</li>
<li>Google Cast</li>
<li>Dolby Audio</li>
<li><span data-bind="text: name" class="feature-item-name">Google Assistant Built-in</span></li>
<li><span data-bind="text: value" class="feature-item-value"><span data-bind="text: name" class="feature-item-name">No Hands-free Voice Control</span></span></li>
<li>
<span data-bind="text: name" class="feature-item-name">IMAX Enhanced: </span><span data-bind="text: value" class="feature-item-value">No</span>
</li>
<li>
<div class="feature-item">
<span data-bind="text: name" class="feature-item-name">Game Master: </span><span data-bind="text: value" class="feature-item-value">Yes</span>
</div>
</li>
<li>
<div class="feature-item">
<span data-bind="text: value" class="feature-item-value"></span>
<div class="feature-item">
<span data-bind="text: name" class="feature-item-name">Video Chat: </span><span data-bind="text: value" class="feature-item-value">Yes</span>
</div>
</div>
</li>
<li>
<div class="feature-item">
<span data-bind="text: name" class="feature-item-name">Miracast (Wireless Display): </span><span data-bind="text: value" class="feature-item-value">Yes</span>
</div>
</li>
<li><span data-bind="text: value" class="feature-item-value">Airplay</span></li>
<li><span data-bind="text: value" class="feature-item-value">Google Cast Formerly (Chromecast)</span></li>
<li><span data-bind="text: value" class="feature-item-value"><span data-bind="text: name" class="feature-item-name">Quick Settings: </span>Yes</span></li>
<li>
<div class="feature-item">
<span data-bind="text: name" class="feature-item-name">Bluetooth: </span><span data-bind="text: value" class="feature-item-value">BT5.2</span>
</div>
</li>
<li><span data-bind="text: value" class="feature-item-value"><span class="feature-item-name" data-bind="text: name">Wi-Fi: </span>WiFi 5</span></li>
<li><span data-bind="text: value" class="feature-item-value"><span class="feature-item-name" data-bind="text: name">HDMI2.1 (eARC&amp;ARC): </span>Yes</span></li>
<li><span data-bind="text: value" class="feature-item-value"><span class="feature-item-name" data-bind="text: name">HDMI CEC: </span>Yes</span></li>
<li><span data-bind="text: value" class="feature-item-value"><span class="feature-item-name" data-bind="text: name">Program Guide(EPG): </span>Yes (for DTV programmes only)</span></li>
</ul>`,
    specifications: {},
    variants: [],
    price: 40000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/50V6C1.webp?v=1745844063",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/50V6C1.webp?v=1745844063"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "mika-595l-no-frost-mrnf2dw595xdmv",
    name: "Mika 595L no frost MRNF2DW595XDMV",
    brand: "MIKA",
    category: "refrigerators",
    slug: "mika-595l-no-frost-mrnf2dw595xdmv",
    description: `<p>Special Features:</p>
<p>AI Inverter Technology – optimum cooling efficiency,maximum freshness with less energy</p>
<p>3 Independent, Digitally Controlled Zones - fridge zone, convertible zone &amp; freezer zone</p>
<p>4 Food Preservation Zones - for different uses</p>
<p>Fridge zone - for storage of perishble foods above freezing, helping maintain freshness</p>
<p>Crisper zone - ideal for fruits &amp; vegetables</p>
<p>Convertible Zone - use as fridge or freezer depending on your current storage needs</p>
<p>Organized Freezer Zone with drawers - for easy access and arrangement of long term storage items </p>
<p>Multiple Modes - convenient to suit different needs</p>
<p>ECO Mode - Saves on energy</p>
<p>Vacation Mode - removes functionality of the fridge zone, leaving convertible and freezer zones functional, saving on power.</p>
<p>Super Freeze Mode - quickly achieves &amp; maintains freezer temp at - 25°C , ideal for fresh foods that require rapid freezing to maintain nutritional value and taste</p>
<p>Multi Airflow - ensures efficient &amp; even cooling through out the whole fridge</p>
<p>Water Dispenser - get cold water anytime</p>
<p>Ultimate Lighting - light on fridge &amp; freezer side</p>
<p>General Features:</p>
<p> </p>
<p>Toughened Glass Shelves - easy to clean and resilient to heavy loads. </p>
<p>Door Balconies - additional space for storage of drinks and condiments</p>
<p>Wide voltage tolerance compressor AC 180V-250V - reliable performance during power fluctuations preventing costly compressor damage and food wastage.</p>
<p>Capacity: 595 Litres</p>
<p>Gross freezer Volume: 367 Litres</p>
<p>Gross Refrigerator Volume: 225 Litres</p>
<p>Total Power Input: 150W</p>
<p>Gas type: R600a</p>
<p>Product Dimensions MM (WxDxH): 910x670x1770</p>
<p>***Star rating</p>
<p>Free Extra Accessories</p>
<p>2 x Twist Ice tray</p>
<p>Cool Pack</p>
<p>Wine Rack</p>
<p> </p>
<p> </p>`,
    specifications: {},
    variants: [],
    price: 105000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/MK11.webp?v=1744818545",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/MK11.webp?v=1744818545"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "mika-528l-no-frost-mrnfw528xlbv",
    name: "Mika 528L no frost MRNFW528XLBV",
    brand: "MIKA",
    category: "refrigerators",
    slug: "mika-528l-no-frost-mrnfw528xlbv",
    description: `<p><span>Capacity: 528 Litres</span><br><span>Gross freezer Volume: 117 Litres</span><br><span>Gross Refrigerator Volume: 411 Litres</span><br><span>Total Power Input: 220 W</span><br><span>Wide voltage tolerance compressor AC 180V-250V</span><br><span>Gas type: R600a – Eco Friendly</span><br><span>Toughened Glass Shelves – Durable</span><br><span>Door Balconies – for small item storage</span><br><span>Egg Tray</span><br><span>Inox Line Brush</span><br><span>Product Dimensions MM (WxDxH): 800x720x1840</span></p>`,
    specifications: {},
    variants: [],
    price: 90000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/mk10.webp?v=1744818210",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/mk10.webp?v=1744818210"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "mika-255l-no-frost-mrnf255ds",
    name: "Mika 255L no frost MRNF255DS",
    brand: "MIKA",
    category: "refrigerators",
    slug: "mika-255l-no-frost-mrnf255ds",
    description: `<ul>
<li>Capacity: 255 Litres</li>
<li>Double Door</li>
<li>3D Cooling</li>
<li>Wide voltage tolerance 187V-250V</li>
<li>Deodorizer – Smell Buster</li>
<li>Twist Ice tray provided</li>
<li>Toughened Glass Shelves – For Durability</li>
<li>Egg tray</li>
<li>Energy Saving</li>
<li>Large vegetable box</li>
<li>CFC Free – Ozone Friendly</li>
<li>Product Dimensions MM (WxDxH): 580 x 630 x 1710</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 56000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/mk9.webp?v=1744817954",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/mk9.webp?v=1744817954"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "mika-247l-no-frost-mrnf247xlb",
    name: "Mika 247L no frost MRNF247XLB",
    brand: "MIKA",
    category: "refrigerators",
    slug: "mika-247l-no-frost-mrnf247xlb",
    description: `<ul>
<li>Advanced cooling technology for longer food freshness with even cooling.</li>
<li>247-litre capacity provides ample storage space.</li>
<li>Operates within 187V-250V for reliable performance during power surges.</li>
<li>Large vegetable box extends freshness of delicate produce.</li>
<li>CFC-free design for eco-friendly operation.</li>
<li>Toughened glass shelves are durable, easy to clean, and support heavy loads.</li>
<li>Built-in deodorizer removes smells and bacteria for freshness.</li>
<li>Twist ice tray included for convenience.</li>
<li>Energy-saving features reduce electricity consumption.</li>
<li>Product dimensions: 580 mm (W) x 630 mm (D) x 1710 mm (H).</li>
<li>Energy-efficient rating.</li>
<li>Extra accessory: Egg tray for organized storage.</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 50000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/mk8.jpg?v=1744817822",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/mk8.jpg?v=1744817822"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "mika-202l-no-frost-double-door-top-mount-freezer-fridge-mrnf202ds",
    name: "Mika 202L No Frost Double Door Top Mount Freezer Fridge MRNF202DS",
    brand: "MIKA",
    category: "refrigerators",
    slug: "mika-202l-no-frost-double-door-top-mount-freezer-fridge-mrnf202ds",
    description: `<ul>
<li>Capacity: 202 Litres</li>
<li>Double Door</li>
<li>3D Cooling</li>
<li>Wide voltage tolerance 187V-250V</li>
<li>Deodorizer – Smell Buster</li>
<li>Twist Ice tray provided</li>
<li>Toughened Glass Shelves – For Durability</li>
<li>Egg tray</li>
<li>Energy Saving</li>
<li>Large vegetable box</li>
<li>CFC Free – Ozone Friendly</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 46000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/mk7.jpg?v=1744817626",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/mk7.jpg?v=1744817626"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "mika197l-no-frost-mrnf197xlb",
    name: "Mika197L no frost MRNF197XLB",
    brand: "MIKA",
    category: "refrigerators",
    slug: "mika197l-no-frost-mrnf197xlb",
    description: `<p><strong>Chiller Zone</strong>: Retains the freshness of meat, fish, and dairy products for short-term storage.</p>
<p><strong>Capacity</strong>:</p>
<p>Total: 197 liters</p>
<p>Freezer: 52 liters</p>
<p>Refrigerator: 145 liters</p>
<p><strong>Power &amp; Efficiency</strong>:</p>
<p>Power input: 140W</p>
<p>Wide voltage tolerance (AC 180V-250V)</p>
<p>Eco-friendly R600a gas</p>
<p><strong>Features</strong>:</p>
<p>Toughened glass shelves (durable and easy to clean)</p>
<p>Crisper Zone (ideal for fruits and vegetables)</p>
<p>Door balconies (for small item storage)</p>
<p>Egg tray</p>
<p>Inox Line Brush finish</p>`,
    specifications: {},
    variants: [],
    price: 40000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/mk6.jpg?v=1744817465",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/mk6.jpg?v=1744817465"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "mika-211l-mrdcd211xdm",
    name: "Mika 211L MRDCD211XDM",
    brand: "MIKA",
    category: "refrigerators",
    slug: "mika-211l-mrdcd211xdm",
    description: `<ul>
<li>High Voltage Tolerance Compressor</li>
<li>Toughened Glass Shelves</li>
<li>Deodorizer (Smell &amp; Germ buster)</li>
<li>Ultra Smart Twist Ice Tray</li>
<li>Portable Cool Pack</li>
<li>Egg Tray</li>
<li>V Front Recessed Handle</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 40000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/mk5.jpg?v=1744817221",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/mk5.jpg?v=1744817221"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "mika-168l-mrdcd168lsd",
    name: "Mika 168L MRDCD168LSD",
    brand: "MIKA",
    category: "refrigerators",
    slug: "mika-168l-mrdcd168lsd",
    description: `<ul>
<li>Capacity: 168 Litres</li>
<li>Power: 120W</li>
<li>Double door</li>
<li>VC Filter</li>
<li>Cool Pack – Maintains Cold During Power Cuts</li>
<li>Glass shelves</li>
<li>Large freezer section</li>
<li>Twist Ice tray provided</li>
<li>Egg Tray</li>
<li>Large vegetable box</li>
<li>Lock &amp; Key</li>
<li>CFC Free</li>
<li>High voltage tolerance compressor 220V-240V</li>
<li>Line Silver Dark<br>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 34000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/mk4.jpg?v=1744817072",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/mk4.jpg?v=1744817072"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "mika-138l-mrdcd138lsd",
    name: "Mika 138L MRDCD138LSD",
    brand: "MIKA",
    category: "refrigerators",
    slug: "mika-138l-mrdcd138lsd",
    description: `<ul>
<li>High voltage tolerance compressor 220V-240V - prevents compressor damage</li>
<li>Cool Pack – Maintains cold during power cuts </li>
<li>VC Filter – Germ Buster </li>
<li>CFC Free - Eco friendly </li>
<li>Glass shelves - durable and easy to clean</li>
<li>Large vegetable box - prolongs shelf life of fruits and vegetables. </li>
<li>Large freezer section </li>
<li>Power: 80W</li>
<li>Twist Ice tray provided</li>
<li>Egg Tray</li>
<li>Lock &amp; Key</li>
<li>Defrost Function</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 30000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/mk3.jpg?v=1744816835",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/mk3.jpg?v=1744816835"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "mika-112l-mrdcd112lsd",
    name: "Mika 112L MRDCD112LSD",
    brand: "MIKA",
    category: "refrigerators",
    slug: "mika-112l-mrdcd112lsd",
    description: `<p><span>Capacity: 112 Litres</span><br><span>Gross freezer Volume: 25 Litres</span><br><span>Gross Refrigerator Volume: 87 Litres</span><br><span>Power: 65W</span><br><span>Wide voltage tolerance compressor 220V-240V</span><br><span>Gas type: R600a – Eco Friendly</span><br><span>Toughened Glass Shelves – Durable</span><br><span>Door Balconies – for small item storage</span><br><span>Egg Tray</span><br><span>Vegetable box</span><br><span>Defrost Function</span><br><span>VC Filter – Germ Buster</span><br><span>Dark Silver</span></p>`,
    specifications: {},
    variants: [],
    price: 28000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/mk2.jpg?v=1744816421",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/mk2.jpg?v=1744816421"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "mika-92l-mrdcs92xlb",
    name: "Mika 92L MRDCS92XLB",
    brand: "MIKA",
    category: "refrigerators",
    slug: "mika-92l-mrdcs92xlb",
    description: `<ul>
<li>Capacity: 92 Liters</li>
<li>High voltage tolerance compressor 220v-240v</li>
<li>Vegetable box - prolongs shelf life of fruits and vegetables.</li>
<li>CFC Free - Eco friendly</li>
<li>Glass shelves - durable and easy to clean</li>
<li>Power: 60W</li>
<li>Egg and ice tray provided</li>
<li>VC Filter</li>
<li>Lamp</li>
<li>Lock &amp; Key</li>
<li>Product Dimensions MM (WxDxH): 510 x 470 x 850</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 18000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/mk1.webp?v=1744816278",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/mk1.webp?v=1744816278"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "smart-pro-sfr-435-dt-i-double-door-refrigerator-348l",
    name: "Smart Pro SFR-435-DT-I Double Door Refrigerator, 348L",
    brand: "Smart Pro",
    category: "refrigerators",
    slug: "smart-pro-sfr-435-dt-i-double-door-refrigerator-348l",
    description: `<ul>
<li>Total No-Frost</li>
<li>348L Capacity</li>
<li>Electronic Control</li>
<li>Power Cool Function</li>
<li>Energy Saving and Low Noise</li>
<li>Stylish LED Control</li>
<li>Adjust Front Feet</li>
<li>Removable (easy clean) Gasket</li>
<li>Big Crisper with Humidity Control</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 65000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/SP4.jpg?v=1744815150",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/SP4.jpg?v=1744815150"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "smart-pro-sfr-325-dt-i-double-door-refrigerator-255l-silver",
    name: "Smart Pro SFR-325-DT-I Double Door Refrigerator, 255L silver",
    brand: "Smart Pro",
    category: "refrigerators",
    slug: "smart-pro-sfr-325-dt-i-double-door-refrigerator-255l-silver",
    description: `<ul>
<li>Total No-Frost</li>
<li>255L Capacity</li>
<li>Electronic Control</li>
<li>Power Cool Function</li>
<li>Energy Saving and Low Noise</li>
<li>Stylish LED Control</li>
<li>Adjust Front Feet</li>
<li>Removable (easy clean) Gasket</li>
<li>Big Crisper with Humidity Control</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 52000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/SP3.jpg?v=1744814993",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/SP3.jpg?v=1744814993"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "smart-pro-sfr-210-dt-i-double-door-refrigerator-169l-silver",
    name: "Smart Pro SFR-210-DT-I Double Door Refrigerator, 169L- Silver",
    brand: "Smart Pro",
    category: "refrigerators",
    slug: "smart-pro-sfr-210-dt-i-double-door-refrigerator-169l-silver",
    description: `<ul>
<li>Type: Refrigerator</li>
<li>Double Door</li>
<li>Brand: SmartPro</li>
<li>Mechanical control</li>
<li>Energy saving and low noise</li>
<li>Stylish LED Light</li>
<li>Capacity: 169L</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 34000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/sp2.jpg?v=1744814758",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/sp2.jpg?v=1744814758"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "smart-pro-sfr-120s-i-single-door-refrigerator-90-litres-silver",
    name: "Smart Pro SFR-120S-I Single Door Refrigerator - 90 Litres - Silver",
    brand: "Smart Pro",
    category: "refrigerators",
    slug: "smart-pro-sfr-120s-i-single-door-refrigerator-90-litres-silver",
    description: `<ul>
<li>Mechanical control</li>
<li>Interior LED light</li>
<li>Energy-saving and low noise</li>
<li>Adjustable front feet</li>
<li>Lock &amp; key</li>
<li>Product(mm) : 450*490*831</li>
<li>Volume (L): 90</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 18000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/sp1.jpg?v=1744814504",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/sp1.jpg?v=1744814504"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "roch-434l-4-door-fridge-rfr-525-iwd4-1",
    name: "Roch 434L 4 Door Fridge RFR-525-IWD4-1",
    brand: "Roch",
    category: "refrigerators",
    slug: "roch-434l-4-door-fridge-rfr-525-iwd4-1",
    description: `<ul>
<li>Capacity: 434l</li>
<li>External Soft touch digital display</li>
<li>Interior LED light</li>
<li>1 Crystal crisper drawer</li>
<li>ECO/Holiday/Super freeze function</li>
<li>Door open alarm</li>
<li>DC centrifugal fan</li>
<li>Twist ice maker optional</li>
<li>Metal cooling optional</li>
<li>Inverter Technology</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 90000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/ro5.jpg?v=1744814350",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/ro5.jpg?v=1744814350"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "roch-439l-side-by-side-fridge-rfr-540-sbwb",
    name: "Roch 439L Side by Side Fridge RFR-540-SBWB",
    brand: "Roch",
    category: "refrigerators",
    slug: "roch-439l-side-by-side-fridge-rfr-540-sbwb",
    description: `<div class="woocommerce-product-details__short-description">
<ul>
<li>Type: Side by Side</li>
<li>Controls: Electronic</li>
<li>Energy Consumption: EC</li>
<li>Certification: GS/CE/CB/SAA/SASO</li>
<li>Dimensions (WxHxD) (mm): 912 x 704 x 1770</li>
<li>Loading Quantity: 48</li>
<li>Electronic Control with Inverter</li>
<li>Water Dispenser (Optional)</li>
<li>Total No Frost Design</li>
<li>Interior LED Light</li>
<li>Electronic Touch LED Display</li>
<li>Multi Air Flow Cooling System</li>
<li>Frameless Design</li>
</ul>
</div>`,
    specifications: {},
    variants: [],
    price: 90000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/RO4.jpg?v=1744814176",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/RO4.jpg?v=1744814176"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "roch-168l-double-door-fridge-rfr-210dt",
    name: "Roch 168L Double Door Fridge RFR - 210DT",
    brand: "Roch",
    category: "refrigerators",
    slug: "roch-168l-double-door-fridge-rfr-210dt",
    description: `<ul>
<li>Double door</li>
<li>Glass shelves</li>
<li>Big vegetable box</li>
<li>Big freezer</li>
<li>Door storage compartment</li>
<li>Dark silver, brush stainless steal</li>
<li>Energy consumption per year 265kw</li>
<li>It is a 2 star rating , 50w</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 32000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/RO3.jpg?v=1744813969",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/RO3.jpg?v=1744813969"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "roch-138-l-double-door-fridge-rfr-180dt",
    name: "Roch 138 L Double Door Fridge RFR-180DT",
    brand: "Roch",
    category: "refrigerators",
    slug: "roch-138-l-double-door-fridge-rfr-180dt",
    description: `<ul>
<li>Mechanical control</li>
<li>Energy saving and low noise</li>
<li>Stylish LED Light</li>
<li>Reversible door</li>
<li>Removable (easy clean) gasket</li>
<li>Capacity: 138L</li>
<li>Energy Saving</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 28000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/RO2.jpg?v=1744813534",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/RO2.jpg?v=1744813534"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "roch-85l-double-door-fridge-rfr-110d-b",
    name: "Roch 85L Double Door Fridge RFR-110D-B",
    brand: "Roch",
    category: "refrigerators",
    slug: "roch-85l-double-door-fridge-rfr-110d-b",
    description: `<ul>
<li>Model: RFR-110D-B</li>
<li>Capacity: <strong>85L</strong>
</li>
<li>Mechanical Control Interior</li>
<li>Comes equipped with big crisper drawer to make your life easier when selecting fresh ingredients.</li>
<li>Silent operation, making it ideal for family rooms or bedrooms.</li>
<li>Removable (easy clean) gasket</li>
<li>Adjustable front feet<br>
</li>
<li>The interior features glass shelves, vegetable bins, and an egg holder. With its smart design, this unit takes up less space in your kitchen.</li>
<li>LED light</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 19000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/RO1.jpg?v=1744813171",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/RO1.jpg?v=1744813171"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "volstmart-138l-double-door-fridge-vl-bcd138",
    name: "Volstmart 138L Double door fridge VL-BCD138",
    brand: "Volstmart",
    category: "refrigerators",
    slug: "volstmart-138l-double-door-fridge-vl-bcd138",
    description: `<ul>
<li>High voltage tolerance compressor 220v-240v</li>
<li>Capacity:138L</li>
<li>Vegetable box - prolongs shelf life of fruits and vegetables.</li>
<li>CFC Free - Eco friendly</li>
<li>Glass shelves - durable and easy to clean</li>
<li>Power: 50W                           </li>
<li>Lock &amp; Key</li>
<li>Silver</li>
<li>Product Dimensions MM (WxDxH): 450 x470 x 933</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 25000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/VL3.jpg?v=1744812409",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/VL3.jpg?v=1744812409"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "volstmart-108l-double-door-fridge-vl-bcd108",
    name: "Volstmart 108L Double door fridge VL-BCD108",
    brand: "Volstmart",
    category: "refrigerators",
    slug: "volstmart-108l-double-door-fridge-vl-bcd108",
    description: `<ul>
<li>The refrigerator uses LED lighting design, easy to take food at night</li>
<li>7 system temperature control, accurate control temperature, can be based on food requirements free adjustment temperature</li>
<li>With 2 movable glass layer, free to adjust the space</li>
<li>The refrigerator with energy-saving R600A compressors, energy saving, noise low</li>
<li>Double doors and double temperature design, you can separate storage of various foods</li>
<li>Anti-fruit fruit basket, strong durable</li>
<li>The refrigerator liner with HIPS environmental protection, food contact more accidental heart</li>
<li>Double door Comes with two Shelf, increase storage space</li>
<li>Detachable door seal, good seal, can be removed cleaning Light bench board , beautiful and generous</li>
<li>Embossed refrigerator side, aesthetical appearance, cooling uniform</li>
<li>Equipped with door lock, safer protection</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 20000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/VL1.jpg?v=1744811920",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/VL1.jpg?v=1744811920"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "vision-plus-91l-vpfd91sd-s",
    name: "Vision plus 91L VPFD91SD-S",
    brand: "Vision Plus",
    category: "refrigerators",
    slug: "vision-plus-91l-vpfd91sd-s",
    description: `<ul>
<li><span>Spacious 91L capacity</span></li>
<li><span>Built-in freezer compartment</span></li>
<li><span>Durable glass shelves for easy organization</span></li>
<li><span>Secure lockable door for added peace of mind</span></li>
<li><span>Energy-efficient direct cooling technology</span></li>
<li><span>3 Year Compressor Warranty</span></li>
</ul>`,
    specifications: {},
    variants: [],
    price: 20000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/vs4.webp?v=1744811656",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/vs4.webp?v=1744811656"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "vision-plus-108l-vpfd108dd-s",
    name: "Vision plus 108L VPFD108DD-S",
    brand: "Vision Plus",
    category: "refrigerators",
    slug: "vision-plus-108l-vpfd108dd-s",
    description: `<ul>
<li><span>Generous 108L capacity</span></li>
<li><span>Dual-door design for separate fridge and freezer compartments</span></li>
<li><span>Quick Freeze technology for rapid cooling</span></li>
<li><span>Sturdy glass shelves for optimal organization</span></li>
<li><span>Secure lockable doors for added safety</span></li>
<li><span>2 Year Appliance Warranty</span></li>
<li><span>3 Year Compressor Warranty</span></li>
</ul>`,
    specifications: {},
    variants: [],
    price: 26000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/vs3.webp?v=1744811529",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/vs3.webp?v=1744811529"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "vision-plus-220l-vpfd220dd-i",
    name: "Vision plus 220L VPFD220DD-I",
    brand: "Vision Plus",
    category: "refrigerators",
    slug: "vision-plus-220l-vpfd220dd-i",
    description: `<ul>
<li><span>Generous 220L capacity</span></li>
<li><span>Double door design with large freezer compartment</span></li>
<li><span>Quick Freeze technology for rapid cooling</span></li>
<li><span>Durable glass shelves for easy organization</span></li>
<li><span>Secure lockable doors for added safety</span></li>
<li><span>3 Year Compressor Warranty</span></li>
</ul>`,
    specifications: {},
    variants: [],
    price: 36000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/vs1.webp?v=1744811334",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/vs1.webp?v=1744811334"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "lg-519l-no-frost-side-by-side-gcfb507pqam",
    name: "LG 519L no frost side by side GCFB507PQAM",
    brand: "LG",
    category: "refrigerators",
    slug: "lg-519l-no-frost-side-by-side-gcfb507pqam",
    description: `<ul>
<li>519L no frost refrigerator<br>
</li>
<li>Inverter compressor (10 years warranty)</li>
<li>External display</li>
<li>LED lighting</li>
<li>Tempered glass shelves x 2</li>
<li>Flat door, open pocket handle</li>
<li>Door alarm</li>
<li>Silver finish</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 130000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/lg4.jpg?v=1744811035",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/lg4.jpg?v=1744811035"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "lg-438l-no-frost-gl-f652hlhu",
    name: "LG 438L no frost GL-F652HLHU",
    brand: "LG",
    category: "refrigerators",
    slug: "lg-438l-no-frost-gl-f652hlhu",
    description: `<ul>
<li data-start="154" data-end="212">438L Capacity – Spacious enough for large households</li>
<li data-start="215" data-end="283">Inverter Linear Compressor – Energy-saving, quiet, and durable</li>
<li data-start="286" data-end="364">DoorCooling+™ – Faster and even cooling, perfect for hot Kenyan climates</li>
<li data-start="367" data-end="434">SmartThinQ™ – Wi-Fi enabled for remote control via smartphone</li>
<li data-start="437" data-end="495">HygieneFresh+™ – Removes 99.999% bacteria and odours</li>
<li data-start="498" data-end="560">Multi Air Flow – Uniform cooling across all compartments</li>
<li data-start="563" data-end="631">Fresh 0 Zone – Keeps meat and fish fresh, no defrosting needed</li>
<li data-start="634" data-end="697">LED Lighting – Bright, energy-efficient interior lighting</li>
<li data-start="700" data-end="762">Movable Ice Maker – Flexible space management in freezer</li>
<li data-start="765" data-end="828">Tempered Glass Shelves – Strong, stylish, and easy to clean</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 100000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/lg3.webp?v=1744810807",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/lg3.webp?v=1744810807"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "lg-234l-no-frost-gl-c252slbb",
    name: "LG 234L no frost GL-C252SLBB",
    brand: "LG",
    category: "refrigerators",
    slug: "lg-234l-no-frost-gl-c252slbb",
    description: `<ul>
<li>234L no frost refrigerator</li>
<li>2 year warranty</li>
<li>Smart Inverter compressor (10 years warranty)</li>
<li>Big Vegetable box</li>
<li>Deep utility door pockets</li>
<li>Trimless tempered glass shelves</li>
<li>Pocket handle</li>
<li>Ice tray</li>
<li>Multi air flow</li>
<li>Moist balance crisper</li>
<li>Silver finish</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 56000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/lg1.png?v=1744810255",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/lg1.png?v=1744810255"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "von-varz-20nhk-side-by-side-fridge-429l-black",
    name: "Von VARZ-20NHK Side by Side Fridge, 429L - Black",
    brand: "Von",
    category: "refrigerators",
    slug: "von-varz-20nhk-side-by-side-fridge-429l-black",
    description: `<ul>
<li>429Lts no frost refrigerator<br>External digital temperature control<br>In-built deodorizer<br>LED lighting in both fridge &amp; freezer compartment<br>Tampered glass shelves<br>Large fruit and vegetable box<br>Large utility door pockets<br>Egg and ice tray provided<br>Super freeze mode (freezer compartment)<br>Super cool mode (fridge compartment)<br>Smart mode (refrigerator monitors ambient and internal temperature to self-regulate cooling in order to maintain set temperatures)<br>Eco mode (refrigerator runs with lowest energy consumption setting)<br>Black mirror glass finish</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 100000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/vn2.png?v=1744809978",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/vn2.png?v=1744809978"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "von-vrt-181draxf-double-door-fridge-181l",
    name: "Von VRT-181DRAX Double Door Fridge - 181L",
    brand: "Von",
    category: "refrigerators",
    slug: "von-vrt-181draxf-double-door-fridge-181l",
    description: `<ul>
<li>Twist ice tray</li>
<li>181L no frost refrigerator</li>
<li>5-year compressor warranty</li>
<li>Large vegetable box</li>
<li>Deep utility door pockets</li>
<li>LED lighting in the fridge compartment</li>
<li>Reversible door</li>
<li>Toughened glass shelves</li>
<li>Ice and egg tray provided</li>
<li>Elegant recessed handle</li>
<li>Dark inox finish</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 44000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/vn1.webp?v=1744809770",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/vn1.webp?v=1744809770"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "von-vrt-138drhx-double-door-fridge-138l-inox",
    name: "Von VRT-138DRHX Double Door Fridge 138L - Inox",
    brand: "Von",
    category: "refrigerators",
    slug: "von-vrt-138drhx-double-door-fridge-138l-inox",
    description: `<ul>
<li>138L Bottom Mount No Frost Fridge</li>
<li>Fridge capacity- 104L &amp; Freezer capacity- 34L</li>
<li>Tropicalised compressor- ensures reliable performance even in hot and humid environments.</li>
<li>3Yr compressor warranty- enjoy peace of mind with long-lasting performance backed by a reliable warranty.</li>
<li>Thick thermal insulation- enhances energy efficiency by reducing temperature fluctuations.</li>
<li>Deep utility door pockets- additional storage space for bottles, and jars.</li>
<li>Mechanical temperature control- allows easy and precise adjustment of the fridge temperature.</li>
<li>Interior lighting- provides clear visibility inside the fridge.</li>
<li>Recessed handle design- sleek, space-saving design for a modern look and comfortable grip.</li>
<li>Tampered glass shelves- durable, resistant to breakage, and easy to clean.</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 34000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/VH3.png?v=1744807566",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/VH3.png?v=1744807566"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "von-vart-19dhs-double-door-fridge-136l-silver",
    name: "Von VART-19DHS Double Door Fridge 136L - Silver",
    brand: "Von",
    category: "refrigerators",
    slug: "von-vart-19dhs-double-door-fridge-136l-silver",
    description: `<ul>
<li>136L Double door refrigerator</li>
<li>Direct cooling</li>
<li>Freezer compartment with a flap lid</li>
<li>Vegetable box</li>
<li>Adjustable glass shelves</li>
<li>Transparent door racks</li>
<li>Recessed handle design</li>
<li>External condenser (better cooling efficiency).</li>
<li>Egg &amp; Ice tray provided</li>
<li>Shiny Silver finish</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 34000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/VH2.jpg?v=1744807381",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/VH2.jpg?v=1744807381"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "von-vart-22dhs-double-door-fridge-134l-silver",
    name: "Von VART-22DHS Double Door Fridge 134L - Silver",
    brand: "Von",
    category: "refrigerators",
    slug: "von-vart-22dhs-double-door-fridge-134l-silver",
    description: `<ul>
<li>134L direct cool refrigerator</li>
<li>3-year compressor warranty</li>
<li>Tropicalised compressor</li>
<li>Thick thermal insulation</li>
<li>Toughened glass shelves</li>
<li>Deep utility door pockets</li>
<li>Interior lighting</li>
<li>Ice and egg tray provided</li>
<li>Large vegetable box</li>
<li>Lock with the key provided</li>
<li>Elegant recessed handle</li>
<li>Silver</li>
<li>4-star freezer rating (freezer temperature can drop below -18 degrees)</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 34000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/VF1.jpg?v=1744807070",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/VF1.jpg?v=1744807070"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "legacy-90x60-hob-4g-1e-ny-qmd5004",
    name: "LEGACY 90x60 HOB 4G+1E NY-QMD5004",
    brand: "LEGACY",
    category: "cookers-ovens",
    slug: "legacy-90x60-hob-4g-1e-ny-qmd5004",
    description: `<ul>
<li>Size 60cm by 60cm</li>
<li>3 Gas+ 1 Hot plate</li>
<li>Stainless steel</li>
<li>Auto ignition</li>
<li>Safety device</li>
<li>Easy to use knobs</li>
<li>Cast iron pan support<br>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 30000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/jl1.jpg?v=1744806426",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/jl1.jpg?v=1744806426"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "legacy-90x60-hob-5g-ny-qm5663",
    name: "LEGACY 90X60 HOB 5G NY-QM5663",
    brand: "LEGACY",
    category: "cookers-ovens",
    slug: "legacy-90x60-hob-5g-ny-qm5663",
    description: `<ul>
<li>Size 90cm by 60cm</li>
<li>5 Gas burner</li>
<li>Middle Wok Burner/double flame</li>
<li>Stainless steel</li>
<li>Strong gas support Metal</li>
<li>Auto ignition</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 28000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/hl10.jpg?v=1744805374",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/hl10.jpg?v=1744805374"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-90x60-inbuilt-oven-75l-hbo60202",
    name: "HISENSE 90x60 INBUILT OVEN 75L HBO60202",
    brand: "Hisense",
    category: "cookers-ovens",
    slug: "hisense-90x60-inbuilt-oven-75l-hbo60202",
    description: `<p><span><strong>Features</strong></span></p>
<ul>
<li><span>60cm Built‑In Electric Oven</span></li>
<li><span>Black glass door, stainless steel control panel</span></li>
<li><span>Mechanical control, 120‑min mechanical timer</span></li>
<li><span>4 functions + oven light</span></li>
<li><span>Power &amp; temperature indicators</span></li>
<li><span>5 shelf positions</span></li>
<li><span><strong>No convection fan</strong></span></li>
<li><span>2‑layer removable full glass oven door</span></li>
<li><span>Easy‑clean black enamel interior</span></li>
<li><span>Accessories: 1 baking tray, 1 grill rack</span></li>
</ul>
<p><span><strong>Specifications</strong></span></p>
<ul>
<li><span>Voltage/Frequency: 220–240V ~ 50/60Hz</span></li>
<li><span>Total Power: 2200W</span></li>
<li><span>Temp Range: 50–250°C</span></li>
<li><span>Usable Volume: 67L</span></li>
<li><span>Product Size: W595 × D530 × H595 mm</span></li>
<li><span>Cut‑out Size: W560 × D560 × H590 mm</span></li>
<li><span>Packing Size: W650 × D600 × H660 mm</span></li>
<li><span>Net/Gross Weight: 22.7kg / 26.3kg</span></li>
</ul>`,
    specifications: {},
    variants: [],
    price: 26000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/hl9.png?v=1744805145",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/hl9.png?v=1744805145"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-60x60-inbuilt-oven-75l-with-fan-hbo60203",
    name: "HISENSE 60x60 INBUILT OVEN 75L WITH FAN HBO60203",
    brand: "Hisense",
    category: "cookers-ovens",
    slug: "hisense-60x60-inbuilt-oven-75l-with-fan-hbo60203",
    description: `<ul>
<li>
<p><span><strong>Features</strong></span></p>
<ul>
<li>
<p><span>60cm Built‑In Electric Oven</span></p>
</li>
<li>
<p><span>Black glass + stainless steel door, stainless steel control panel</span></p>
</li>
<li>
<p><span>Mechanical control, 120‑min mechanical timer</span></p>
</li>
<li>
<p><span>6 functions + oven light</span></p>
</li>
<li>
<p><span>Convection fan (without circle heater)</span></p>
</li>
<li>
<p><span>Power &amp; temperature indicators</span></p>
</li>
<li>
<p><span>5 shelf positions</span></p>
</li>
<li>
<p><span>2‑layer removable full glass oven door</span></p>
</li>
<li>
<p><span>Easy‑clean black enamel interior</span></p>
</li>
<li>
<p><span>Accessories: 1 baking tray, 1 grill rack</span></p>
</li>
</ul>
<p><span><strong>Specifications</strong></span></p>
<ul>
<li>
<p><span>Voltage/Frequency: 220–240V ~ 50/60Hz</span></p>
</li>
<li>
<p><span>Total Power: 2900W</span></p>
</li>
<li>
<p><span>Temp Range: 50–250°C</span></p>
</li>
<li>
<p><span>Usable Volume: 61L</span></p>
</li>
<li>
<p><span>Product Size: W595 × D530 × H595 mm</span></p>
</li>
<li>
<p><span>Cut‑out Size: W560 × D560 × H590 mm</span></p>
</li>
<li>
<p><span>Packing Size: W650 × D600 × H660 mm</span></p>
</li>
<li>
<p><span>Net/Gross Weight: 25.8kg / 29.4kg</span></p>
</li>
</ul>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 28000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/hl8.jpg?v=1744804927",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/hl8.jpg?v=1744804927"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-90x60-inbuilt-oven-125l-heo901sso3",
    name: "HISENSE 90x60 INBUILT OVEN 125L HEO901SSO3",
    brand: "Hisense",
    category: "cookers-ovens",
    slug: "hisense-90x60-inbuilt-oven-125l-heo901sso3",
    description: `<ul>
<li>90cm width for a spacious cooking area</li>
<li>125-litre capacity for larger meals</li>
<li>9 cooking functions including rotisserie</li>
<li>Energy-efficient with Class A rating</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 70000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/hl7.webp?v=1744804806",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/hl7.webp?v=1744804806"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-90x60-hood-hho90tass",
    name: "HISENSE 90x60 H00D HHO90TASS",
    brand: "Hisense",
    category: "cookers-ovens",
    slug: "hisense-90x60-hood-hho90tass",
    description: `<ul>
<li>Hisense HHO90TASS pyramid hood</li>
<li>90cm kitchen hood</li>
<li>Wall-mounted ventilation hood</li>
<li>Stainless steel pyramid hood</li>
<li>High extraction performance hood</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 32000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/hl6.jpg?v=1744804663",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/hl6.jpg?v=1744804663"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-60x60-hood-hho60pass",
    name: "HISENSE 60x60 HOOD HHO60PASS",
    brand: "Hisense",
    category: "cookers-ovens",
    slug: "hisense-60x60-hood-hho60pass",
    description: `<ul>
<li class="product-card__option">200M³/HR Extraction Power</li>
<li class="product-card__option">Stainless Steel Body</li>
<li class="product-card__option">Led Lamp</li>
<li class="product-card__option">3-Speed Operation</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 16000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/hl5.webp?v=1744804533",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/hl5.webp?v=1744804533"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-90x60-hood-hho90pass",
    name: "Hisense 90x60 HooD HHO90PASS",
    brand: "Hisense",
    category: "cookers-ovens",
    slug: "hisense-90x60-hood-hho90pass",
    description: `<ul>
<li><span>Powerful extraction system for smoke and odor removal.</span></li>
<li><span>90cm wide stainless steel design for modern aesthetics.</span></li>
<li><span>High-performance motor for efficient air purification.</span></li>
<li><span>Adjustable fan speeds to suit your cooking needs.</span></li>
<li><span>Integrated LED lighting for better cooktop visibility.</span></li>
<li><span>Easy-to-clean grease filters for hassle-free maintenance.</span></li>
</ul>`,
    specifications: {},
    variants: [],
    price: 22000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/hl4.png?v=1744804392",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/hl4.png?v=1744804392"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-90x60-hob-5g-hhu90gass",
    name: "HISENSE 90x60 HOB 5G HHU90GASS",
    brand: "Hisense",
    category: "cookers-ovens",
    slug: "hisense-90x60-hob-5g-hhu90gass",
    description: `<ul>
<li>5 burners</li>
<li>Fuel type GAS</li>
<li>Saftey switch</li>
<li>Auto ignition</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 30000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/hl3.jpg?v=1744803086",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/hl3.jpg?v=1744803086"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-60x60-hob-4g-hhu60gagr",
    name: "HISENSE 60x60 HOB 4G HHU60GAGR",
    brand: "Hisense",
    category: "cookers-ovens",
    slug: "hisense-60x60-hob-4g-hhu60gagr",
    description: `<ul>
<li>Stainless Steel Surface</li>
<li>Front Knobs Control</li>
<li>Auto Ignition Function</li>
<li>Cast Iron Pan Stand</li>
<li>Flame Failure Technology</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 22000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/hl2.jpg?v=1744802657",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/hl2.jpg?v=1744802657"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "bolesi-60x60-hood-ha9002-curved",
    name: "BOLESI 60x60 H00D HA9002 CURVED",
    brand: "BOLESI",
    category: "cookers-ovens",
    slug: "bolesi-60x60-hood-ha9002-curved",
    description: `<ul>
<li>
<span>Brand:BOLESI</span><br><span>Model:HA9002</span><br><span>Name: Range hood</span><br><span>Machine size:900MM</span>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 16000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/bl8.jpg?v=1744801942",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/bl8.jpg?v=1744801942"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "bolesi-60x60-hood-c60-c-rangehood",
    name: "BoCESI 60x60 HOOD C60-C RangeHOOD",
    brand: "BOLESI",
    category: "cookers-ovens",
    slug: "bolesi-60x60-hood-c60-c-rangehood",
    description: `<ul>
<li>60CM wide kitchen hood</li>
<li>Touch and gesture control</li>
<li>3 Speed</li>
<li>1pc Filter</li>
<li>Strong copper motor</li>
<li>Powerful motor for efficient ventilation</li>
<li>touch and hand wave control</li>
<li>Stylish stainless steel design</li>
<li>Easy-to-use controls with LED lighting</li>
<li>Quiet operation for a peaceful kitchen</li>
<li>Removable and washable filters</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 20000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/bl6.webp?v=1744801579",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/bl6.webp?v=1744801579"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "bolesi-90x60-hood-b2-90w-s",
    name: "BOLESI 90x60 HOOD B2-90W-S",
    brand: "BOLESI",
    category: "cookers-ovens",
    slug: "bolesi-90x60-hood-b2-90w-s",
    description: `<ul>
<li>
<span>Brand:BOLESI</span><br><span>Model:B2-60/90W</span><br><span>Name: KITCHEN HOOD</span><br><span>Machine size:600/900MM</span><br><span>Illustrte:can be equipped with smoke pipe, can be internal circulation</span>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 18000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/bl5.png?v=1744798826",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/bl5.png?v=1744798826"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "bolesi-90x60-hob-4g-1e-hb-59035d-daq",
    name: "BOLESI 90x60 HOB 4G+1E HB-59035D-DAQ",
    brand: "BOLESI",
    category: "cookers-ovens",
    slug: "bolesi-90x60-hob-4g-1e-hb-59035d-daq",
    description: `<ul>
<li>
<span>Brand:BOLESI</span><br><span>Model:HOB-HB-59305D</span><br><span>Name: BUILT-IN4+1 COOKER HOB</span><br><span>Panel size:900*520MM Class panel</span><br><span>Hole size:860*480MM</span>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 26000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/bl4_8bc38d2d-63a3-4db1-a320-ae87700cf207.png?v=1744798492",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/bl4_8bc38d2d-63a3-4db1-a320-ae87700cf207.png?v=1744798492"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "bolesi-90x60-hob-5g-h87-5022g",
    name: "BOLESI 90x60 HOB 5G H87-5022G",
    brand: "BOLESI",
    category: "cookers-ovens",
    slug: "bolesi-90x60-hob-5g-h87-5022g",
    description: `<ul>
<li>
<span>Brand:BOLESI</span><br><span>Model:HOB-HB-5022G</span><br><span>Panel size:760*520MM Class panel</span><br><span>Hole size:730*480MM</span>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 25000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/bl3.png?v=1744798144",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/bl3.png?v=1744798144"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "bolesi-60x60-mob-3g-1e-hm-t46007-b",
    name: "BOLESI 60x60 MOB 3G+1E HM-T46007-B",
    brand: "BOLESI",
    category: "cookers-ovens",
    slug: "bolesi-60x60-mob-3g-1e-hm-t46007-b",
    description: `<ul>
<li>
<span>Brand:BOLESI</span><br><span>Model:HOB-HM-T46007-A</span><br><span>Name: BUILT-IN 3+1 COOKER HOB</span><br><span>Panel size:600*520MM Class panel</span><br><span>Hole size:560*480MM</span>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 20000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/bl2.png?v=1744797769",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/bl2.png?v=1744797769"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "bolesi-60x60-hob-4g-h59-4006b",
    name: "BOLESI 60x60 HOB 4G H59-4006B",
    brand: "BOLESI",
    category: "cookers-ovens",
    slug: "bolesi-60x60-hob-4g-h59-4006b",
    description: `<ul>
<li>
<span>Brand:BOLESI</span><br><span>Model:HOB-H59-4006B</span><br><span>COOKER HOB Stainless steel panel</span><br><span>Panel size:600*520MM</span><br><span>Hole size:560*480MM</span>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 20000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/bl1.png?v=1744797472",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/bl1.png?v=1744797472"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-h96wdtb3s2-topload-dispenser",
    name: "HISENSE H96WDTB3S2 TOPLOAD DISPENSER",
    brand: "Hisense",
    category: "chargers-accessories",
    slug: "hisense-h96wdtb3s2-topload-dispenser",
    description: `<ul>
<li>Three Temperature Options: Dispenses hot (85-95°C), cold (5-10°C), and room temperature water, catering to diverse hydration needs.</li>
<li>Stable Compressor Cooling: Equipped with a reliable compressor cooling system to maintain consistent cold water temperatures.</li>
<li>Stainless Steel Water Tank: Ensures clean and fresh water, maintaining optimal hygiene.</li>
<li>Child Safety Lock: Integrated safety lock on the hot water tap prevents accidental scalding, enhancing safety for families.</li>
<li>Storage Compartment: Features a 12-liter spacious cabinet for convenient storage of cups and other essentials</li>
<li>LED Indicator Lights: Provides clear indicators for temperature status and water refill alerts, enhancing usability.</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 15000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/ds10.webp?v=1744755136",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/ds10.webp?v=1744755136"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-h96wdtb3s1-topload-dispenser",
    name: "HISENSE H96WDTB3S1 TOPLOAD DISPENSER",
    brand: "Hisense",
    category: "chargers-accessories",
    slug: "hisense-h96wdtb3s1-topload-dispenser",
    description: `<ul class="marker:text-secondary" dir="auto">
<li class="break-words">Three Taps: Hot, cold, and normal water for versatility.</li>
<li class="break-words">Child Safety Lock: Prevents accidental hot water dispensing.</li>
<li class="break-words">Efficient Compressor: Ensures consistent cooling and heating.</li>
<li class="break-words">Stainless Steel Tank: Keeps water clean and fresh.</li>
<li class="break-words">Sleek Black Design: Complements modern interiors.</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 14000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/ds9.jpg?v=1744754947",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/ds9.jpg?v=1744754947"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "nunix-z16c-top-load-water-dispenser-hot-normal-cold",
    name: "Nunix Z16C Top Load Water Dispenser - Hot, Normal & Cold",
    brand: "Nunix",
    category: "chargers-accessories",
    slug: "nunix-z16c-top-load-water-dispenser-hot-normal-cold",
    description: `<ul>
<li>Hot, Normal &amp; Cold Top Load water dispenser</li>
<li>Smarter and Stronger</li>
<li>Storage Cabinet at the bottom</li>
<li>Overheat Protection</li>
<li>Low power consumption</li>
<li>Durable push taps</li>
<li>Dry burning prevention for safety</li>
<li>Easy to use</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 7000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/IMG-8223.heic?v=1745908765",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/IMG-8223.heic?v=1745908765"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "nunix-z188c-hot-normal-cold-bottom-load-water-dispenser",
    name: "Nunix Z188C Hot,Normal And Cold Bottom Load Water Dispenser",
    brand: "Nunix",
    category: "chargers-accessories",
    slug: "nunix-z188c-hot-normal-cold-bottom-load-water-dispenser",
    description: `<ul>
<li>Hot, Normal &amp; Cold Bottom Load water dispenser</li>
<li>Smarter and Stronger</li>
<li>Water Container cabinet at the bottom</li>
<li>Overheat Protection</li>
<li>Low power consumption</li>
<li>Durable push taps</li>
<li>Dry burning prevention for safety</li>
<li>Easy to use</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 10000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/IMG-8248.heic?v=1745908817",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/IMG-8248.heic?v=1745908817"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "nunix-a1c-bottom-load-hot-cold-water-dispenser-with-coffee-maker",
    name: "Nunix A1C bottom load hot and cold water dispenser with coffee maker",
    brand: "Nunix",
    category: "chargers-accessories",
    slug: "nunix-a1c-bottom-load-hot-cold-water-dispenser-with-coffee-maker",
    description: `<ul>
<li>Hot &amp; cold Bottom Load water dispenser</li>
<li>Smarter and Stronger</li>
<li>Automatic Kettle Filling</li>
<li>Two free electric Kettles</li>
<li>Water Container cabinet at the bottom</li>
<li>Overheat Protection</li>
<li>Low power consumption</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 10000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/IMG-8227.heic?v=1745908935",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/IMG-8227.heic?v=1745908935"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "premier-bottomload-dispenser-white-c502",
    name: "PREMIER BOTTOMLOAD DISPENSER WHITE C502",
    brand: "Premier",
    category: "chargers-accessories",
    slug: "premier-bottomload-dispenser-white-c502",
    description: `<ul>
<li style="font-weight: bold; color: rgb(43, 0, 255);"><span style="color: rgb(43, 0, 255);"><a href="https://www.tiktok.com/@digital_city_electronics/video/7492140834536557830?is_from_webapp=1&amp;sender_device=pc&amp;web_id=7492018079045174789" title="BOTTOMLOAD WATER DISPENSERS REVIEW" style="color: rgb(43, 0, 255);"><strong>CLICK TO WATCH VIDEO REVIEW</strong></a></span></li>
<li>Double water outlets</li>
<li>Touch screen panel</li>
<li>Remote operation</li>
<li>Food grade hot kettle</li>
<li>Easy cleaning</li>
<li>Fast cooling</li>
<li>Child lock protection</li>
<li>Bottom loading</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 16000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/E0A4C95B-4D6F-4D36-8F71-F690D0882B92.jpg?v=1745791164",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/E0A4C95B-4D6F-4D36-8F71-F690D0882B92.jpg?v=1745791164"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "premier-c208-dispenser-bottomload-green-coffee-15k",
    name: "PREMIER C208 DISPENSER BOTTOMLOAD (GREEN AND COFFEE COLOUR) 15K",
    brand: "Premier",
    category: "chargers-accessories",
    slug: "premier-c208-dispenser-bottomload-green-coffee-15k",
    description: `<ul>
<li>Double water outlets</li>
<li>Touch screen panel</li>
<li>Remote operation</li>
<li>Food grade hot kettle</li>
<li>Easy cleaning</li>
<li>Fast cooling, electric cooling</li>
<li>Child lock protection</li>
<li>Bottom loading</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 15000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/IMG-8242.heic?v=1755246523",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/IMG-8242.heic?v=1755246523"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "sarahtech-3-taps-hot-normal-cold-dispenser",
    name: "Sarahtech 3 taps hot ,normal and cold dispenser",
    brand: "Sarahtech",
    category: "chargers-accessories",
    slug: "sarahtech-3-taps-hot-normal-cold-dispenser",
    description: `<ul>
<li>Hot and cold water dispenser</li>
<li>Push tap Dispenser</li>
<li>Low power consumption</li>
<li>Child lock feature for safety</li>
<li>Storage cabinet</li>
<li>Power indicator</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 6500,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/IMG-8217.heic?v=1745909244",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/IMG-8217.heic?v=1745909244"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "saratech-water-dispenser-2-taps-hot-normal-stainless-steel-tank",
    name: "Saratech Water Dispenser , 2 Taps Hot and Normal.2taps ; hot, normal and cold -Stainless steel tank -Heating power 550w - black and white in colour",
    brand: "Sarahtech",
    category: "chargers-accessories",
    slug: "saratech-water-dispenser-2-taps-hot-normal-stainless-steel-tank",
    description: `<ul>
<li>
<span>Hot &amp; Cold &amp; Normal Water Dispenser</span><span></span>
</li>
<li><span>Button Control</span></li>
<li><span>ABS Plastic</span></li>
<li><span>2000 g</span></li>
</ul>`,
    specifications: {},
    variants: [],
    price: 6000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/ds1.webp?v=1744753104",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/ds1.webp?v=1744753104"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "roch-60x60-rgc-60g1ho-g-cooker",
    name: "ROCH 60x60 RGC-60G1HO-G COOKER",
    brand: "Roch",
    category: "cookers-ovens",
    slug: "roch-60x60-rgc-60g1ho-g-cooker",
    description: `<ul>
<li>60x60cm 3 gas+ 1 electic hotplate+ with electric oven</li>
<li>Stainless steel table top plate</li>
<li>Black painting body finish</li>
<li>With 1 rapid hotplate (1 large) +3 gas burner</li>
<li>Iron cast top grill, 220-240V,50Hz</li>
<li>Top hotplate power: 1*1500W Gas burner: sabaf burner copy (1 large, 1 medium, 1 small)</li>
<li>Pulse ignition</li>
<li>Oven lamp</li>
<li>Rotisserie</li>
<li>Electric oven with upper and down heating tube</li>
<li>With glass cover lid</li>
<li>With adjustable leg</li>
<li>1pc chromed oven grill &amp; 1pc oven tray</li>
<li>Full glass door with black door handle</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 25000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/CK16.jpg?v=1744751582",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/CK16.jpg?v=1744751582"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "roch-rgc-50g1eo-g-50x50cm-3-gas-burners-1-hotplate-cooker",
    name: "Roch RGC-50G1EO-G 50x50cm 3 Gas Burners + 1 Hotplate Cooker",
    brand: "Roch",
    category: "cookers-ovens",
    slug: "roch-rgc-50g1eo-g-50x50cm-3-gas-burners-1-hotplate-cooker",
    description: `<ul>
<li>3 Gas Burners + 1 Hot Plate</li>
<li>Electric oven with upper and down heating tube</li>
<li>With 1 big rapid hotplate</li>
<li>Pulse ignition for the gas burners</li>
<li>With Rotisserie and oven lamp</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 20000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/roch_50g1eo.jpg?v=1749299838",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/roch_50g1eo.jpg?v=1749299838"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "syinix-cooker-60x60-q60gc1-3g-1e",
    name: "SYINIX Cooker 60x60 Q60GC1 3G+1E",
    brand: "Syinix",
    category: "cookers-ovens",
    slug: "syinix-cooker-60x60-q60gc1-3g-1e",
    description: `<ul>
<li>3 Gas and 1 Electric burner<br>Glass lid<br>Jet valve flame<br>Flame failure sensor<br>Electric Oven feature with grill<br>Auto ignition<br>Easily removable oven glass door</li>
<li>Easy to clean</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 32000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/CK14.webp?v=1744751336",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/CK14.webp?v=1744751336"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "nunix-kz-660-3g1e-3-1-standing-gas-cooker",
    name: "Nunix KZ-660-3G1E, 3+1 standing Nunix gas Cooker 3 Gas Burners 1 electric Hot Plate",
    brand: "Nunix",
    category: "cookers-ovens",
    slug: "nunix-kz-660-3g1e-3-1-standing-gas-cooker",
    description: `<ul>
<li>Push Button manual ignition burner</li>
<li>3 gas burners 1 eletcric</li>
<li>Gas oven</li>
<li>Special burners for unique flame for evenly cooking</li>
<li>Special high-density insulation- for faster &amp; quick baking</li>
<li>1 electric hotplate</li>
<li>Wide Matt finish enamel pan support &amp; Burner Caps</li>
<li>oven tray provided</li>
<li>Baking tray &amp; Wire shelf (Grid)</li>
<li>Width 55*50CM</li>
<li>Special unbreakable Top Lid</li>
<li>Silver color body</li>
<li>Enamel Rack</li>
<li>Turnspit (Chicken Rotisserie)</li>
<li>3 gas burners and 1 electric Rapid Hot plate</li>
<li>Warranty: 1 year.</li>
<li>Strong body for durability</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 25000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/CK13.webp?v=1744751136",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/CK13.webp?v=1744751136"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "nunix-kz-560-3g1e-free-standing-3-gas-cooker-1-hotplate-with-electric-oven",
    name: "Nunix KZ-560-3G1E Free Standing 3 Gas Cooker+1 Hotplate With Electric Oven",
    brand: "Nunix",
    category: "cookers-ovens",
    slug: "nunix-kz-560-3g1e-free-standing-3-gas-cooker-1-hotplate-with-electric-oven",
    description: `<ul>
<li>Push Button manual ignition burner<br>3 gas burners 1 eletcric<br>Gas oven<br>Special burners for unique flame for evenly cooking<br>Special high-density insulation- for faster &amp; quick baking<br>1 electric hotplate<br>Wide Matt finish enamel pan support &amp; Burner Caps<br>oven tray provided<br>Baking tray &amp; Wire shelf (Grid)<br>Width 55*50CM<br>Special unbreakable Top Lid<br>Silver color body<br>Enamel Rack<br>Turnspit (Chicken Rotisserie)<br>3 gas burners and 1 electric Rapid Hot plate<br>Warranty: 1 year.<br>Strong body for durability</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 22000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/CK11.jpg?v=1744750926",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/CK11.jpg?v=1744750926"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "volsmart-50x60-vgs-681-3g-1e",
    name: "VOLSMART 50x60 VGS-681 3G+IE",
    brand: "Volsmart",
    category: "cookers-ovens",
    slug: "volsmart-50x60-vgs-681-3g-1e",
    description: `<ul>
<li>
<span> Model: VGS-581, featuring 3 gas burners and 1 electric hot plate.</span><br><span>– Equipped with an electric oven with a lamp and a capacity of 60 liters.</span><br><span>– Includes auto ignition for convenience and safety.</span><br><span>– Comes with a built-in timer and temperature controller.</span><br><span>– Designed with a sturdy glass top and stainless steel panel.</span><br><span>– Oven door is double-glazed for better insulation.</span><br><span>– Accessories include a heavy chromed oven grill and one oven tray.</span><br><span>– The cooker operates on 220V/50Hz and is suitable for LPG gas type.</span>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 25000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/CK10_f06818f3-6a09-4a7c-bb4a-adf2bfedf94f.jpg?v=1744750764",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/CK10_f06818f3-6a09-4a7c-bb4a-adf2bfedf94f.jpg?v=1744750764"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "volsmart-50x50-vgs-581-3g-1e",
    name: "VOLSMART 50x50 VGS-581 3G+1E",
    brand: "Volsmart",
    category: "cookers-ovens",
    slug: "volsmart-50x50-vgs-581-3g-1e",
    description: `<ul>
<li>3 Euro Pool Gas Burners + 1 Rapid Hotplate.</li>
<li>Size 50cm by 50cm</li>
<li>Electric oven</li>
<li>Auto ignition</li>
<li>Oven grill/rottiserie</li>
<li>Oven degress</li>
<li>Oven lamp</li>
<li>Double glass oven door</li>
<li>jet valve</li>
<li>Black body</li>
<li>Top silver</li>
<li>Strong glass lid</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 22000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/CK10.jpg?v=1744750600",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/CK10.jpg?v=1744750600"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "sarahtech-50x60-st60fs3e1",
    name: "SARAHTECH 50x60 ST60FS3E1",
    brand: "Sarahtech",
    category: "cookers-ovens",
    slug: "sarahtech-50x60-st60fs3e1",
    description: `<ul>
<li>Size 3 gas burners+ 1 Electric plate</li>
<li>Size 60cm by 55cm</li>
<li>Electric oven</li>
<li>Auto ignition</li>
<li>Oven lamp</li>
<li>Oven grill/rottiserie</li>
<li>Strong glass lid</li>
<li>Oven degrees</li>
<li>Silver top</li>
<li>Black body</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 26000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/CK9.jpg?v=1744750287",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/CK9.jpg?v=1744750287"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "sarahtech-st50fs3e1-50x50-cooker",
    name: "Sarahtech ST50FS3E1 50X50 COOKER",
    brand: "Sarahtech",
    category: "cookers-ovens",
    slug: "sarahtech-st50fs3e1-50x50-cooker",
    description: `<ul>
<li>Push Button manual ignition burner</li>
<li>3 gas burners 1 electric</li>
<li>Electric oven</li>
<li>Special burners for unique flame for evenly cooking</li>
<li>Special high-density insulation- for faster &amp; quick baking</li>
<li>1 electric plate</li>
<li>Wide Matt finish enamel pan support &amp; Burner Caps</li>
<li>oven tray provided</li>
<li>Baking tray &amp; Wire shelf (Grid)</li>
<li>Width 50x50CM</li>
<li>Special unbreakable Top Lid</li>
<li>Black color body</li>
<li>Enamel Rack</li>
<li>Turnspit (Chicken Rotisserie)</li>
<li>3 gas burners and 1 electric Rapid Hot plate</li>
<li>Strong body for durability</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 22000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/CK8.jpg?v=1744750007",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/CK8.jpg?v=1744750007"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "legacy-60x60-lgkb60-60",
    name: "LEGACY 60x60 LGKB60*60",
    brand: "LEGACY",
    category: "cookers-ovens",
    slug: "legacy-60x60-lgkb60-60",
    description: `<ul>
<li>60CM BY 60CM</li>
<li>3 + 1 ELECTRIC OVEN</li>
<li>GLASS LID</li>
<li>IGNITION LAMP</li>
<li>TURN SPEED</li>
<li>TURBO FAN</li>
<li>FOOD WARMER</li>
<li>METRE TIMER</li>
<li>CAST IRON FULL</li>
<li>ELECTRIC OVEN</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 36000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/ck7.jpg?v=1744749612",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/ck7.jpg?v=1744749612"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "mika-standing-cooker-58cm-x-58cm-silver-body-slem",
    name: "MIKA Standing Cooker, 58cm x 58cm, Silver Body SLEM",
    brand: "MIKA",
    category: "cookers-ovens",
    slug: "mika-standing-cooker-58cm-x-58cm-silver-body-slem",
    description: `<ul>
<li>Has jet valve</li>
<li>3 Pool gas burners &amp; 1×1,500W Electric Rapid Hot plate</li>
<li>3 Function Electric oven</li>
<li>Special Unbreakable Glass Top Lid</li>
<li>Heavy Duty Matt Finish Burner Caps</li>
<li>Wide Matt Enamel coated pan support</li>
<li>Easily Removable oven glass door – easy cleaning</li>
<li>Mechanical timer</li>
<li>Oven lamp</li>
<li>Adjustable Feet – align to adjacent appliances; adjusting to uneven floor</li>
<li>Limit Thermostat – prevent overheating and regulates temperature, ensuring safe and efficient use.</li>
<li>Silver</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 30000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/MST58U31E3SLEM.jpg?v=1768647589",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/MST58U31E3SLEM.jpg?v=1768647589"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "mika-standing-cooker-58cm-x-58cm-matt-black-blem",
    name: "MIKA Standing Cooker, 58cm x 58cm, Matt Black BLEM",
    brand: "MIKA",
    category: "cookers-ovens",
    slug: "mika-standing-cooker-58cm-x-58cm-matt-black-blem",
    description: `<ul>
<li>
<span>3 Pool gas burners &amp; 1x1500W Electric Rapid Hot plate</span><br><span>3 Function Electric oven</span><br><span>Special Unbreakable Glass Top Lid</span><br><span>Heavy Duty Matt Finish Burner Caps</span><br><span>Wide Matt Enamel coated pan support</span><br><span>Easily Removable oven glass door – easy cleaning</span><br><span>Mechanical timer</span><br><span>Oven lamp</span><br><span>Adjustable Feet – align to adjacent appliances; adjusting to uneven floor</span><br><span>Limit Thermostat – prevent overheating and regulates temperature, ensuring safe and efficient use.</span><br><span>Matt Black</span><br><span>Product Dimensions MM (WxD): 570×570</span>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 30000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/MST58U31E3BLEM.jpg?v=1768647732",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/MST58U31E3BLEM.jpg?v=1768647732"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "mika-free-standing-all-gas-cooker-50x60-with-gas-oven",
    name: "Mika Free Standing All Gas- Cooker- 50x60 with Gas Oven",
    brand: "MIKA",
    category: "cookers-ovens",
    slug: "mika-free-standing-all-gas-cooker-50x60-with-gas-oven",
    description: `<ul>
<li>Gas Oven</li>
<li>50 by 60</li>
<li>Push Button Auto Ignition</li>
<li>4 Euro Pipe Gas burners</li>
<li>Wide &amp; Matt Enamel Coated Pan Support</li>
<li>Wide Cooking Area</li>
<li>Special High-density insulation - for faster &amp; quick baking</li>
<li>Mechanical Timer.</li>
<li>Oven Lamp.</li>
<li>Double Glass Oven Door.</li>
<li>Metal Lid . </li>
<li>Color: Silver Cooker </li>
</ul>`,
    specifications: {},
    variants: [],
    price: 27000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/ck4.jpg?v=1744748919",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/ck4.jpg?v=1744748919"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "bjs-elite-cooker-60x60-3-1e",
    name: "BJs Elite Cooker 60x60 3+1E",
    brand: "BJs",
    category: "cookers-ovens",
    slug: "bjs-elite-cooker-60x60-3-1e",
    description: `<ul>
<li _msttexthash="1033266" _msthash="240">3 Gas+1 Hot Plate 1000W with Electric Oven</li>
<li _msttexthash="1412723" _msthash="241">Pool burner / Jet valve for Less GAS Consumption </li>
<li _msttexthash="1431261" _msthash="242">Self Auto ignition/grill 60cmx60cm WITH Turbo FAN</li>
<li _msttexthash="1618097" _msthash="243">Rotisserie Mechanical Timer Thermostat Oven Lamp</li>
<li _msttexthash="403507" _msthash="244">Double Glass Oven Door</li>
<li _msttexthash="335114" _msthash="245">Strong Pan Support,</li>
<li _msttexthash="111631" _msthash="246">Glass-TOP</li>
<li _msttexthash="223067" _msthash="247"> 2-Baking  trays</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 32000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_7b2e9870-a880-4411-a6c9-35790b94df83.jpg?v=1756292686",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/rn-image_picker_lib_temp_7b2e9870-a880-4411-a6c9-35790b94df83.jpg?v=1756292686"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "bjs-90x60-silver-5g-1e",
    name: "BJ'S 90x60 SILVER 5G+1E",
    brand: "BJs",
    category: "cookers-ovens",
    slug: "bjs-90x60-silver-5g-1e",
    description: `<ul>
<li>
<strong>45Gas Burners + 1 Hot Plates (1000W)</strong>: Versatile cooking options with gas burners and electric hot plates for all your culinary tasks.</li>
<li>
<strong>90L Electric Oven with Turbo Fan</strong>: Ensures even heat distribution for faster, energy-efficient cooking and baking.</li>
<li>
<strong>Pool Burner Jet Valve</strong>: Enhances gas consumption efficiency, saving energy and reducing costs.</li>
<li>
<strong>Electric Oven &amp; Grill</strong>: Perfect for baking, roasting, and grilling with precise temperature control.</li>
<li>
<strong>Double Glass Oven Door (145mm)</strong>: Provides enhanced insulation and safety while allowing you to monitor your cooking.</li>
<li>
<strong>Auto-Ignition</strong>: Hassle-free ignition with the push of a button—no need for matchsticks.</li>
<li>
<strong>Mechanical Timer &amp; Thermostat</strong>: Ensures precise cooking times and temperatures for perfect results every time.</li>
<li>
<strong>Rotisserie Stick &amp; Accessories</strong>: Includes a rotisserie stick, baking tray, and grid shelf for added convenience.</li>
<li>
<strong>Easy-to-Clean Design</strong>: Features removable panels and a smooth glass-top surface for effortless cleaning.</li>
<li>
<strong>6-Pan Support &amp; Storage Compartment</strong>: Provides ample space for cookware and utensils, keeping your kitchen organized.</li>
<li>
<strong>Gas Sensor</strong>: Enhances safety by detecting gas leaks and ensuring secure operation.</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 62000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/CK1.jpg?v=1744748186",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/CK1.jpg?v=1744748186"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-ref628dr-628l-infinite-side-by-side-refrigerator",
    name: "Hisense REF628DR 628L Infinite Side By Side Refrigerator",
    brand: "Hisense",
    category: "refrigerators",
    slug: "hisense-ref628dr-628l-infinite-side-by-side-refrigerator",
    description: `<ul>
<li>628L Capacity</li>
<li>Wi-Fi connectivity: Update fridge settings via ConnectLife App</li>
<li>Non-plumbed water dispenser</li>
<li>2 Star Energy Rating</li>
<li>Multi Air Flow system</li>
<li>Electronic temperature control</li>
<li>Interior LED lighting</li>
<li>Dual freezer drawer</li>
<li>Wine rack</li>
<li>10-year warranty</li>
<li>Digital Sensors</li>
<li>Total no frost</li>
<li>Bigger Racks,160mm depth for 2L beverage bottle</li>
<li>A+ Energy rating</li>
<li>Metal Cooling</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 160000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/F15.webp?v=1744747432",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/F15.webp?v=1744747432"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-side-by-side-fridge-518l-ref518dr",
    name: "Hisense Side by Side Fridge 518L REF518DR",
    brand: "Hisense",
    category: "refrigerators",
    slug: "hisense-side-by-side-fridge-518l-ref518dr",
    description: `<ul>
<li>Capacity: 518L</li>
<li>Type: Bottom Mounted Refrigerator</li>
<li>Refrigerant: R600a</li>
<li>Soft LED lighting</li>
<li>Electronic Touch Control</li>
<li>Top Freezer: Yes</li>
<li>Tampered glass shelves: Yes</li>
<li>Low Noise: Yes</li>
<li>Color: Silver</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 115000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/F14.jpg?v=1744747152",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/F14.jpg?v=1744747152"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-483l-4-door-no-frost-ref470drz",
    name: "Hisense 483L 4 Door NO Frost REF470DRZ",
    brand: "Hisense",
    category: "refrigerators",
    slug: "hisense-483l-4-door-no-frost-ref470drz",
    description: `<ul>
<li style="font-weight: bold; color: rgb(43, 0, 255);"><a title="HISENSE 483L 4 DOOR FRIDGE 470DRZ REVIEW" href="https://www.tiktok.com/@digital_city_electronics/video/7497184678462426423?is_from_webapp=1&amp;sender_device=pc&amp;web_id=7492018079045174789"><strong><span style="color: rgb(43, 0, 255);">CLICK TO WATCH VIDEO REVIEW</span></strong></a></li>
<li>Antibacterial Dark Interior Liner</li>
<li>Triple Zone</li>
<li>Inverter Tech</li>
<li>Smart connectivity</li>
<li>Ice &amp; water dispenser</li>
<li>Antibacterial guard</li>
<li>Cantilever shelves</li>
<li>Triple zone cooling</li>
<li>My fresh choice</li>
<li>10 YEARS WARRANTY ON COMPRESSOR</li>
<li>
<strong>483L Capacity</strong>: Perfect for larger families needing extra storage</li>
<li>
<strong>Four-Door Design</strong>: Easy organization and quick access to food</li>
<li>
<strong>Built-In Water Dispenser</strong>: Enjoy cool, fresh water without opening the fridge</li>
<li>
<strong>No Frost Technology</strong>: Prevents ice build-up and eliminates manual defrosting</li>
<li>
<strong>Multi-Air Flow System</strong>: Ensures even cooling throughout the fridge</li>
<li>
<strong>Energy-Efficient Compressor</strong>: Saves on electricity costs</li>
<li>
<strong>Sleek and Modern Design</strong>: Adds a stylish touch to your kitchen</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 150000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/IMG-4505.png?v=1745574750",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/IMG-4505.png?v=1745574750"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-4-door-fridge-470l-ref470dr",
    name: "Hisense 4 Door Fridge 470L REF470DR",
    brand: "Hisense",
    category: "refrigerators",
    slug: "hisense-4-door-fridge-470l-ref470dr",
    description: `<ul data-sourcepos="9:1-9:42">
<li data-sourcepos="9:1-9:42">
<strong>Inverter Compressor:</strong><span> </span>Enjoy quiet and energy-efficient operation.</li>
<li data-sourcepos="10:1-10:62">
<strong>Frost-Free Technology:</strong><span> </span>Say goodbye to manual defrosting.</li>
<li data-sourcepos="11:1-11:64">
<strong>Multi Air Flow System:</strong><span> </span>Ensures even cooling throughout the fridge.</li>
<li data-sourcepos="12:1-12:62">
<strong>Touch Control Panel:</strong><span> </span>Intuitive and easy-to-use controls.</li>
<li data-sourcepos="13:1-13:76">
<strong>LED Lighting:</strong><span> </span>Brightly illuminates the interior for better visibility.</li>
<li data-sourcepos="14:1-14:81">
<strong>Large Fruit &amp; Vegetable Crisper:</strong><span> </span>Keep your produce fresh and organized.</li>
<li data-sourcepos="15:1-15:73">
<strong>Adjustable Shelves:</strong><span> </span>Customize your storage space to fit your needs.</li>
<li data-sourcepos="16:1-16:50">
<strong>Bottle Rack:</strong><span> </span>Store your drinks conveniently.</li>
<li data-sourcepos="17:1-18:0">
<strong>Egg Tray:</strong><span> </span>Keep your eggs organized and fresh.</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 100000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/F12.jpg?v=1744746461",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/F12.jpg?v=1744746461"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-454l-4-door-no-frost-refrigerator",
    name: "Hisense 454L 4-Door No-Frost Refrigerator",
    brand: "Hisense",
    category: "refrigerators",
    slug: "hisense-454l-4-door-no-frost-refrigerator",
    description: `<ul>
<li>No-Frost Refrigerator</li>
<li>Water Dispenser</li>
<li>Tempered Glass Shelves</li>
<li>Freezer Cooling Backup</li>
<li>R600a Environment-Friendly Gas</li>
<li>Stainless Steel Colour</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 130000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/F11.jpg?v=1744746250",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/F11.jpg?v=1744746250"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-double-door-fridge-320l-ref320dr",
    name: "Hisense Double Door Fridge 320L REF320DR",
    brand: "Hisense",
    category: "refrigerators",
    slug: "hisense-double-door-fridge-320l-ref320dr",
    description: `<ul>
<li>
<strong>Model</strong>: Hisense REF320DR</li>
<li>
<strong>Type</strong>: Double Door Fridge</li>
<li>
<strong>Color</strong>: Black</li>
<li>
<strong>Capacity</strong>: 320 liters</li>
<li>
<strong>Cooling System</strong>: No Frost technology</li>
<li>
<strong>Energy Efficiency</strong>: 2-star rating</li>
<li>
<strong>Dimensions</strong>: 595mm (W) x 635mm (D) x 1720mm (H)</li>
<li>
<strong>Shelving</strong>: Adjustable glass shelves</li>
<li>
<strong>Door Storage</strong>: Multiple door bins for convenient storage</li>
<li>
<strong>Crisper Drawer</strong>: Yes, for fruits and vegetables</li>
<li>
<strong>Temperature Control</strong>: Electronic temperature control</li>
<li>
<strong>Freezer</strong>: Top-mounted freezer with ample storage</li>
<li>
<strong>Reversible Door</strong>: Yes, for flexible installation</li>
<li>
<strong>Defrosting</strong>: Automatic defrost</li>
<li>
<strong>Interior Lighting</strong>: LED lighting for better visibility</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 65000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/F10.png?v=1744746028",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/F10.png?v=1744746028"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-286l-no-frost-bottom-freezer-ref286dr",
    name: "Hisense 286L no frost bottom freezer REF286DR",
    brand: "Hisense",
    category: "refrigerators",
    slug: "hisense-286l-no-frost-bottom-freezer-ref286dr",
    description: `<ul>
<li>Net capacity: 286L</li>
<li>Defrost Cooling</li>
<li>A energy efficiency class</li>
<li>Recessed handle</li>
<li>Ultra-thin Water Dispenser</li>
<li>Easy to take out, easy to fill and easy to</li>
<li>clean 2L water tank</li>
<li>Big guard for 2L bottles and bulk can storage</li>
<li>Long life LED light, energy saving</li>
<li>Removable tempered glass shelves</li>
<li>Adjustable level feet</li>
<li>Reversible door design</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 85000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/F9.png?v=1744745761",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/F9.png?v=1744745761"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-265l-bottom-freezer-fridge-ref265dr",
    name: "Hisense 265L Bottom Freezer Fridge REF265DR",
    brand: "Hisense",
    category: "refrigerators",
    slug: "hisense-265l-bottom-freezer-fridge-ref265dr",
    description: `<ul>
<li>Frost free/combi defrost</li>
<li>Bottom freezer</li>
<li>3 Star power ratting</li>
<li>Adjustable glass shelves</li>
<li>Vegetables and fruits crisper</li>
<li>Door shelves</li>
<li>Interior light</li>
<li>Eggs tray</li>
<li>Ice cube maker</li>
<li>Reversable door</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 75000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/F8.jpg?v=1744745560",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/F8.jpg?v=1744745560"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-ref205dr-205l-double-door-frost-fridge",
    name: "Hisense REF205DR 205L DOUBLE DOOR FROST FRIDGE",
    brand: "Hisense",
    category: "refrigerators",
    slug: "hisense-ref205dr-205l-double-door-frost-fridge",
    description: `<ul>
<li><strong>205L Capacity</strong></li>
<li><strong>Double Door Design</strong></li>
<li><strong> Frost Technology</strong></li>
<li><strong>Adjustable Shelves</strong></li>
<li><strong>Energy-Efficient Compressor</strong></li>
<li><strong>Sleek Modern Design</strong></li>
</ul>`,
    specifications: {},
    variants: [],
    price: 40000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/f7_68230c3c-33ae-4316-b783-28858056106c.jpg?v=1744745156",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/f7_68230c3c-33ae-4316-b783-28858056106c.jpg?v=1744745156"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-ref203dr-203l-double-door-frost-free",
    name: "Hisense REF203DR 203L DOUBLE DOOR FROST FREE",
    brand: "Hisense",
    category: "refrigerators",
    slug: "hisense-ref203dr-203l-double-door-frost-free",
    description: `<ul>
<li>
<a href="https://hisensecentre.co.ke/">Hisense</a><span> </span>203L Double Door No Frost Fridge<span> </span><a href="https://www.youtube.com/@HisenseInternational">REF203DR</a>
</li>
<li>CAPACITY: 203L</li>
<li>FROST FREE</li>
<li>SPACE-SAVING STORAGE</li>
<li>TRIPLE CHOICE</li>
<li>SUPERCOOLING FUNCTION</li>
<li>EASY-GLIDE DRAWERS</li>
<li>INVERTER TECHNOLOGY</li>
<li>ONE-LINE HANDLE</li>
<li>90 DEGREE DOOR DESIGN</li>
<li>R600A GAS RECESSED HANDLE</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 46000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/f7.jpg?v=1744744987",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/f7.jpg?v=1744744987"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "205l-frost-double-door-ref205dr",
    name: "205L frost double door REF205DR",
    brand: "Hisense",
    category: "refrigerators",
    slug: "205l-frost-double-door-ref205dr",
    description: `<ul open="">
<li>Capacity (Liter): 205</li>
<li>Type: Bottom Mounted Refrigerator</li>
<li>Refrigerant:  Gas R600A</li>
<li>Color: SILVER</li>
<li>Water Dispenser: No</li>
<li>Low Noise: Yes</li>
<li> Frost:  Yes</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 46000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/f6.jpg?v=1744744706",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/f6.jpg?v=1744744706"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-ref176dr-176l-single-door-fridge-with-water-dispenser",
    name: "Hisense REF176DR 176L SINGLE DOOR FRIDGE WITH WATER DISPENSER",
    brand: "Hisense",
    category: "refrigerators",
    slug: "hisense-ref176dr-176l-single-door-fridge-with-water-dispenser",
    description: `<ul>
<li style="font-weight: bold; color: rgb(43, 0, 255);">
<span style="color: rgb(43, 0, 255);"><a rel="noopener" title="HISENSE 176L FROST FRIDGE REVIEW" href="https://www.tiktok.com/@digital_city_electronics/video/7496400991185571077?is_from_webapp=1&amp;sender_device=pc&amp;web_id=7492018079045174789" style="color: rgb(43, 0, 255);" target="_blank"><strong>CLICK TO WATCH VIDEO REVIEW</strong></a><a rel="noopener" title="HISENSE 176L FROST FRIDGE REVIEW" href="https://www.tiktok.com/@digital_city_electronics/video/7496400991185571077?is_from_webapp=1&amp;sender_device=pc&amp;web_id=7492018079045174789" style="color: rgb(43, 0, 255);" target="_blank"><strong></strong></a></span><span style="color: rgb(0, 0, 0);"><a rel="noopener" title="HISENSE 176L FROST FRIDGE REVIEW" href="https://www.tiktok.com/@digital_city_electronics/video/7496400991185571077?is_from_webapp=1&amp;sender_device=pc&amp;web_id=7492018079045174789" style="color: rgb(0, 0, 0);" target="_blank"><strong></strong></a></span>
</li>
<li>176L Capacity: Ideal for small families, offices, or extra storage</li>
<li>No Frost Technology: No more ice build-up</li>
<li>Energy-Efficient Compressor: Saves on electricity</li>
<li>Adjustable Shelves: Customizable storage space</li>
<li>Sleek Black Design: Modern and stylish look for any space</li>
<li>Single Door Design: Easy access to your food and beverages</li>
<li>CAPACITY 6.5 CU. FT</li>
<li>COME WITH AN INBUILT-WATER DISPENSER</li>
<li>INDEPENDENT FREEZER</li>
<li>LARGER RACK</li>
<li>BIG VEGETABLE BOX</li>
<li>COOL FRESH ROOM</li>
<li>DOUBLE HANDEL DESIGN</li>
<li>SEMI-AUTOMATIC DEFROSTING</li>
<li>ADJUSTABLE SPILL-PROOF SHELVES</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 36000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/176L.jpg?v=1745605386",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/176L.jpg?v=1745605386"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-ref154dr-154l-fridge",
    name: "Hisense REF154DR 154L Fridge",
    brand: "Hisense",
    category: "refrigerators",
    slug: "hisense-ref154dr-154l-fridge",
    description: `<ul>
<li>Hisense 8.0 cu.ft</li>
<li>Gross Volume 154Lts</li>
<li>2- Door</li>
<li>Silver Colour</li>
<li>Smart Electronic Control</li>
<li>A++,A+,A Energy Saving</li>
<li>Mechanical Temperature Control</li>
<li>Four Star Freezer Design</li>
<li>Broad Climate Design</li>
<li>Environment Friendly Technology</li>
<li>Low Noise</li>
<li>Adjustable Leg</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 34000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/f4.jpg?v=1744744226",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/f4.jpg?v=1744744226"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-fridge-120liters-two-door-ref120dr",
    name: "Hisense Fridge 120Liters Two Door REF120DR",
    brand: "Hisense",
    category: "refrigerators",
    slug: "hisense-fridge-120liters-two-door-ref120dr",
    description: `<ul style="font-size: 14px; line-height: 24px; margin: 0px; padding: 0px; font-family: Montserrat;">
<li>Capacity 120L</li>
<li>Brand Hisense</li>
<li>Low Noise</li>
<li>Color Silver</li>
<li>Frost: Yes</li>
<li>Double Door</li>
<li>Mechanical Temperature Control Technology: Yes</li>
<li>Refrigerant: Gas R600A</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 28000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/f3.jpg?v=1744744055",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/f3.jpg?v=1744744055"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-ref094dr-94-liters-fridge-silver",
    name: "Hisense REF094DR - 94 Liters Fridge - Silver",
    brand: "Hisense",
    category: "refrigerators",
    slug: "hisense-ref094dr-94-liters-fridge-silver",
    description: `<ul>
<li>Hisense Fridge single door</li>
<li>Capacity (Liters): 94L</li>
<li>Single Door</li>
<li>Color: SILVER</li>
<li>Water Dispenser: No</li>
<li>Low Noise: Yes</li>
<li>Frost: Yes</li>
<li>Mechanical Temperature Control Technology: Yes</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 19000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/f2.jpg?v=1744743849",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/f2.jpg?v=1744743849"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "hisense-ref091dr-91l-double-door-refrigerator",
    name: "Hisense REF091DR 91L Double Door Refrigerator",
    brand: "Hisense",
    category: "refrigerators",
    slug: "hisense-ref091dr-91l-double-door-refrigerator",
    description: `<table width="1054" style="height: 176.344px;">
<tbody>
<tr style="height: 19.5938px;">
<td width="225" style="height: 19.5938px;">Net capacity</td>
<td width="225" style="height: 19.5938px;">91L</td>
</tr>
<tr style="height: 19.5938px;">
<td width="225" style="height: 19.5938px;">Door Design</td>
<td width="225" style="height: 19.5938px;">Reversible Design</td>
</tr>
<tr style="height: 19.5938px;">
<td width="225" style="height: 19.5938px;">Energy consumption</td>
<td width="225" style="height: 19.5938px;">256 kWh per year</td>
</tr>
<tr style="height: 19.5938px;">
<td width="225" style="height: 19.5938px;">Noise Level</td>
<td width="225" style="height: 19.5938px;">39 dB</td>
</tr>
<tr style="height: 19.5938px;">
<td width="225" style="height: 19.5938px;">Energy Rating</td>
<td width="225" style="height: 19.5938px;">F</td>
</tr>
<tr style="height: 19.5938px;">
<td width="225" style="height: 19.5938px;">Climatic class</td>
<td width="225" style="height: 19.5938px;">N,ST,T</td>
</tr>
<tr style="height: 19.5938px;">
<td width="225" style="height: 19.5938px;">Fridge compartment defrosting method</td>
<td width="225" style="height: 19.5938px;">Automatic</td>
</tr>
<tr style="height: 19.5938px;">
<td width="225" style="height: 19.5938px;">Freezing capacity</td>
<td width="225" style="height: 19.5938px;">2KG</td>
</tr>
<tr style="height: 19.5938px;">
<td width="225" style="height: 19.5938px;">Dimensions</td>
<td width="225" style="height: 19.5938px;">492x466x873mm</td>
</tr>
</tbody>
</table>`,
    specifications: {},
    variants: [],
    price: 20000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/f1.png?v=1744743571",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/f1.png?v=1744743571"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "ramtons-steam-iron-rm-584",
    name: "Ramtons Steam Iron - RM/584",
    brand: "Ramtons",
    category: "chargers-accessories",
    slug: "ramtons-steam-iron-rm-584",
    description: `<ul>
<li><span>Steam 2400 Watts</span></li>
<li>Non stick soleplate</li>
<li>Spray function</li>
<li>Capacity of the tank:320ml</li>
<li>Mechanical temperature control</li>
<li>Dry Iron Function</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 3500,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/r8.jpg?v=1744644482",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/r8.jpg?v=1744644482"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "ramtons-steam-iron-non-stick-sole-plate-rm-694",
    name: "Ramtons Steam Iron - Non Stick Sole Plate - RM/694",
    brand: "Ramtons",
    category: "chargers-accessories",
    slug: "ramtons-steam-iron-non-stick-sole-plate-rm-694",
    description: `<ul>
<li>1460-1740W</li>
<li>Non-Stick Sole Plate</li>
<li>Continous Steam</li>
<li>Vertical Steam</li>
<li>Temperature Indicator</li>
<li>Over-heating Protection</li>
<li>200-ml Water Tank</li>
<li>Fitted with 3-pin square plug</li>
<li>220-240V 50/60Hz</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 2500,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/r6.jpg?v=1744644123",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/r6.jpg?v=1744644123"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "ramtons-dry-iron-with-spray-rm-693",
    name: "Ramtons DRY IRON WITH SPRAY- RM/693",
    brand: "Ramtons",
    category: "chargers-accessories",
    slug: "ramtons-dry-iron-with-spray-rm-693",
    description: `<ul>
<li>1100-1300W</li>
<li>Non-Stick Soleplate</li>
<li>Temperature Indicator</li>
<li>Over heating protection </li>
<li>Detachable 30-ml water tank</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 2000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/r3.jpg?v=1744643938",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/r3.jpg?v=1744643938"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "ramtons-dry-iron-rm-692",
    name: "Ramtons DRY IRON - RM/692",
    brand: "Ramtons",
    category: "chargers-accessories",
    slug: "ramtons-dry-iron-rm-692",
    description: `<ul>
<li>1100-1300W</li>
<li>Non-Stick Soleplate</li>
<li>Temperature Indicator</li>
<li>Overheating Protection</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 1800,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/r1.jpg?v=1744643781",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/r1.jpg?v=1744643781"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "wall-mount-double-arm-upto-75",
    name: "WALL MOUNT Double arm upto 75\"",
    brand: "Generic",
    category: "chargers-accessories",
    slug: "wall-mount-double-arm-upto-75",
    description: `<ul>
<li>
<span>Universal &amp; High Quality</span><br><span>Suitable for 32″-75″ inch screen</span><br><span>Vesa Size: 600*400</span><br><span>Distance to wall: 80-460mm</span><br><span>Load capacity: 50KGS</span><br><span>Color: Black</span><br><span>Tilt: -15 degrees +15 degrees</span><br><span>All screws available</span>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 4000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Y2.webp?v=1744223358",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Y2.webp?v=1744223358"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "wall-mount-ay598-swivel-single-arm",
    name: "WALL MOUNT AY598 swivel single arm",
    brand: "Generic",
    category: "chargers-accessories",
    slug: "wall-mount-ay598-swivel-single-arm",
    description: `<ul>
<li>Bracket Type: Articulated;</li>
<li>Way of installation: wall;</li>
<li>Compatibility: TVs with a diagonal from 14 "to 55" inches;</li>
<li>Mount: VESA (50x50 / 75x75 / 100x100 / 100x200 / 200x200 mm.);</li>
<li>The distance from the wall to the TV: 80-460 mm;</li>
<li>Swing Angle: +/- 90 °;</li>
<li>Material: cold rolled steel;</li>
<li>Maximum load: 50 kg;</li>
<li>Bracket Weight: 1.75 kg.</li>
<li>Black color.</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 2500,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Y1.jpg?v=1744223132",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Y1.jpg?v=1744223132"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "wall-mount-cp304-single-arm",
    name: "WALL MOUNT CP304 SINGLE ARM",
    brand: "Generic",
    category: "chargers-accessories",
    slug: "wall-mount-cp304-single-arm",
    description: `<ul>
<li>Bracket Type: Articulated;</li>
<li>Way of installation: wall;</li>
<li>Compatibility: TVs with a diagonal from 14 "to 55" inches;</li>
<li>Mount: VESA (50x50 / 75x75 / 100x100 / 100x200 / 200x200 mm.);</li>
<li>The distance from the wall to the TV: 80-460 mm;</li>
<li>Swing Angle: +/- 90 °;</li>
<li>Material: cold rolled steel;</li>
<li>Maximum load: 50 kg;</li>
<li>Bracket Weight: 1.75 kg.</li>
<li>Black color.</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 2000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/K2.jpg?v=1744222837",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/K2.jpg?v=1744222837"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "wallmount-63t-upto-85-inch",
    name: "WALLMOUNT 63T upto 85\"INCH",
    brand: "Generic",
    category: "chargers-accessories",
    slug: "wallmount-63t-upto-85-inch",
    description: `<ul>
<li><span>Tilt wall mountUniversal</span></li>
<li><span>23" to 85" LED/ LCD televisionCan </span></li>
<li><span>Carry 65KgsTilt -15 degrees / +15 degrees</span></li>
</ul>`,
    specifications: {},
    variants: [],
    price: 4000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/D1.jpg?v=1744220708",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/D1.jpg?v=1744220708"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "skill-tech-wall-mount-tilting-tv-bracket-23-to-65-sh-44t",
    name: "Skill Tech Wall Mount-Tilting TV Bracket. 23\" To 65\" Sh 44T",
    brand: "Skill Tech",
    category: "chargers-accessories",
    slug: "skill-tech-wall-mount-tilting-tv-bracket-23-to-65-sh-44t",
    description: `<ul>
<li>
<strong>Perfect for mounting al your Led Tvs</strong>/Curved tvs AND LCD Tvs.</li>
<li>Strong, Durable and Quality wall mount Brackets to mount your television</li>
<li>safe on the wall without fear of it falling or being broken</li>
<li>tilt wall mount</li>
<li>Universal</li>
<li>23" to 65" LED/ LCD television</li>
<li>Can carry 75Kgs</li>
<li>Tilt -15 degrees / +15 degrees</li>
<li>Profile 68mm</li>
<li>Specification:TV wall mountBy</li>
<li>Function:Tilt Wall MountBy Mounting</li>
<li>Pattern:Universal</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 2000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Q6.jpg?v=1744220090",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Q6.jpg?v=1744220090"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "20t-wallmount-32-43",
    name: "20T WALLMOUNT 32''- 43''",
    brand: "Generic",
    category: "chargers-accessories",
    slug: "20t-wallmount-32-43",
    description: `<ul>
<li>Fits 32'- 43"</li>
<li>Load Capacity 55lbs (25kg)</li>
<li>VESA 75X75 to 200X200mm</li>
<li>For Indoor/Outdoor use</li>
<li>Easy &amp; Fast Installation</li>
<li>All Hardware included</li>
<li>Mounts to Wood, Concrete or Metal</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 1000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Q5.jpg?v=1744219945",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Q5.jpg?v=1744219945"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "marken-5way-extension",
    name: "Marken 5way Extension",
    brand: "Marken",
    category: "chargers-accessories",
    slug: "marken-5way-extension",
    description: `<ul>
<li>Marken 5way Extension With 2 USB Ports With 3M Cable.</li>
<li>Quality Product</li>
<li>long cable for extra reach</li>
<li>Heat resistant hard ABS plastic to withstand overheating</li>
<li>Safety shuttered sockets</li>
<li>Ideal for all electrical devices</li>
<li>Ideal for both indoor &amp; outdoor</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 1000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Q4.jpg?v=1744219566",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Q4.jpg?v=1744219566"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "power-king-4-way-quality-extension-socket-with-long-cable",
    name: "Power King PowerKing 4 Way Quality Extension Socket With A Long Cable",
    brand: "Power King",
    category: "chargers-accessories",
    slug: "power-king-4-way-quality-extension-socket-with-long-cable",
    description: `<ul>
<li>Quality Product</li>
<li>long cable for extra reach</li>
<li>Heat resistant hard ABS plastic to withstand overheating</li>
<li>Safety shuttered sockets</li>
<li>Ideal for all electrical devices</li>
<li>Ideal for both indoor &amp; outdoor</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 500,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Q3.jpg?v=1744219334",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Q3.jpg?v=1744219334"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "tv-guard",
    name: "Tv GUARD",
    brand: "Generic",
    category: "chargers-accessories",
    slug: "tv-guard",
    description: `<ul>
<li>High Voltage disconnect &amp; Low Voltage protection</li>
<li>Microprocessor control</li>
<li>Spike/surge protection</li>
<li>Power back surge protection</li>
<li>Lightning protection</li>
<li>Protects LED/LCD TV up to 65-inch &amp; Home Entertainment System</li>
<li>6 Feet long cable for extra reach</li>
<li>Heat resistant hard ABS plastic to withstand overheating</li>
<li>Safety shuttered sockets</li>
<li>Ideal for all electrical devices</li>
<li>Ideal for both indoor &amp; outdoor</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 1000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Q2.jpg?v=1744219136",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Q2.jpg?v=1744219136"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "digital-antenna-ariel-20-metres-coaxial-cable",
    name: "Digital Antenna Ariel+20 Metres Coaxial Cable",
    brand: "Generic",
    category: "chargers-accessories",
    slug: "digital-antenna-ariel-20-metres-coaxial-cable",
    description: `<ul>
<li>Low voltage protection</li>
<li>High voltage disconnect 265VMicro process</li>
<li>Control spike/surge </li>
<li>Protection very </li>
<li>Durable high</li>
<li>Portability Affordable</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 1000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Q1.jpg?v=1744218924",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/Q1.jpg?v=1744218924"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "lg-380w-soundbar-system-3-1-2-channel-spd7y",
    name: "LG 380W SOUNDBAR SYSTEM, 3.1.2 CHANNEL SPD7Y",
    brand: "LG",
    category: "speakers-soundbars",
    slug: "lg-380w-soundbar-system-3-1-2-channel-spd7y",
    description: `<ul>
<li>380W Total Power</li>
<li>3.1.2 Channels</li>
<li>Dolby Atmos &amp; DTS:X</li>
<li>AI Sound Pro</li>
<li>Smart Connectivity</li>
<li>Hi-Res Audio</li>
<li>Modern Design</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 70000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/n3.jpg?v=1744218484",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/n3.jpg?v=1744218484"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "lg-400w-soundbar-system-sc9",
    name: "LG 400W SOUNDBAR SYSTEM SC9",
    brand: "LG",
    category: "speakers-soundbars",
    slug: "lg-400w-soundbar-system-sc9",
    description: `<ul>
<li>3.1.3-Channel Configuration</li>
<li>220W Wireless Subwoofer</li>
<li>3 x Up-Firing Height Effect Drivers</li>
<li>IMAX Enhanced, Dolby Atmos &amp; DTS:X</li>
<li>Synergy Bracket for Select LG TVs</li>
<li>4K HDR10 / Dolby Vision Pass-Through</li>
<li>VRR &amp; ALLM for Responsive Gameplay</li>
<li>Up to 24-bit/96 kHz High-Res Audio</li>
<li>Dual-Band Wi-Fi &amp; Bluetooth 5.0</li>
<li>AI Room Calibration Pro</li>
<li>Dolby Atmos &amp; DTS:X</li>
<li>400W Total Power</li>
<li>Meridian Audio</li>
<li>AI Sound Pro</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 115000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/n2.jpg?v=1744218142",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/n2.jpg?v=1744218142"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "lg-420w-soundbar-system-s80",
    name: "LG 420W SOUNDBAR SYSTEM S80",
    brand: "LG",
    category: "speakers-soundbars",
    slug: "lg-420w-soundbar-system-s80",
    description: `<ul>
<li>3.1.2 Channels</li>
<li>Dolby Atmos &amp; DTS:X</li>
<li>Meridian Technology</li>
<li>AI Sound Pro</li>
<li>Smart Connectivity</li>
<li>Sleek Design</li>
<li>Custom Modes</li>
<li>220W wireless subwoofer </li>
<li>200W from the main soundbar unit, </li>
</ul>`,
    specifications: {},
    variants: [],
    price: 95000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/n1.jpg?v=1744217935",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/n1.jpg?v=1744217935"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "lg-sp8a-3-1-2-ch-sound-bar-w-dolby-atmos",
    name: "LG SP8A 3.1.2 Ch Sound Bar W/ Dolby Atmos",
    brand: "LG",
    category: "speakers-soundbars",
    slug: "lg-sp8a-3-1-2-ch-sound-bar-w-dolby-atmos",
    description: `<ul>
<li>Meridian</li>
<li>TV Sound Mode Share &amp; Soundbar Mode Control</li>
<li>High-Resolution Audio</li>
<li>Dolby Atmos &amp; DTS:X3.1.2 Channel 440W</li>
<li color="">Bluetooth Connectivity</li>
<li color="">AI Sound Pro &amp; Sound Up-converting</li>
<li color="">3.1.2Ch (2 Up firing Speakers) &amp; 440W output</li>
<li color="">Meridian &amp; Hi-Res Audio for premium classic sound</li>
<li color="">Seamless TV connection with HDMI (eARC) &amp; Optical</li>
<li color="">Multiple connectivity with Wi-Fi, Google, Alexa, Airplay 2, 4K Pass-through</li>
<li color="">Dolby Atmos &amp; DTS:X for Immersive</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 85000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/m10.jpg?v=1744217640",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/m10.jpg?v=1744217640"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "lg-s75-3-1-2-channel-sound-bar",
    name: "LG S75 3.1.2 Channel Sound Bar",
    brand: "LG",
    category: "speakers-soundbars",
    slug: "lg-s75-3-1-2-channel-sound-bar",
    description: `<ul>
<li>LG S75 Sound Bar</li>
<li>3.1.2 Channel Audio</li>
<li>Dolby Atmos</li>
<li>DTS</li>
<li>Meridian Audio Technology</li>
<li>AI Sound Pro</li>
<li>Wireless Subwoofer</li>
<li>Adaptive Room Calibration</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 85000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/m9.webp?v=1744216932",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/m9.webp?v=1744216932"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "lg-600w-soundbar-system-snh5",
    name: "LG 600W SOUNDBAR SYSTEM SNH5",
    brand: "LG",
    category: "speakers-soundbars",
    slug: "lg-600w-soundbar-system-snh5",
    description: `<ul>
<li>LG 600W SOUNDBAR SYSTEM</li>
<li>600W Total Power: </li>
<li>4.1 Channel System</li>
<li>DTS Virtual:X</li>
<li>AI Sound Pro</li>
<li>Smart Connectivity</li>
<li>Modern Design</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 48000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/m8.jpg?v=1744216672",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/m8.jpg?v=1744216672"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "lg-400w-high-res-audio-soundbar-2-1ch-dts-x-sn5y",
    name: "LG 400W HIGH RES AUDIO SOUNDBAR, 2.1CH, DTS:X SN5Y",
    brand: "LG",
    category: "speakers-soundbars",
    slug: "lg-400w-high-res-audio-soundbar-2-1ch-dts-x-sn5y",
    description: `<ul>
<li>LG 400W SOUNDBAR,</li>
<li>400W POWER OUTPUT</li>
<li>2.1CH SURROUND SOUND</li>
<li>BLUETOOTH CONNECTIIVITY</li>
<li>WIRELESS ACTIVE SUB-WOOFER</li>
<li>DOLBY DIGITAL AUDIO</li>
<li>DTS DIGITAL SURROUND SOUND</li>
<li>DTS VIRTUAL X</li>
<li>HI-RESOLUTION AUDIO</li>
<li>AI SOUND PRO </li>
<li>STANDARD BASS BLAST</li>
<li>BASS TREBLE</li>
<li>AUTO VOLUME LEVELER</li>
<li>DYNAMIC RANGE CONTROL</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 42000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/M6.jpg?v=1744216196",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/M6.jpg?v=1744216196"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "lg-300w-soundbar-system-2-1ch-deep-bass-sn4",
    name: "LG 300W SOUNDBAR SYSTEM, 2.1CH, DEEP BASS SN4",
    brand: "LG",
    category: "speakers-soundbars",
    slug: "lg-300w-soundbar-system-2-1ch-deep-bass-sn4",
    description: `<ul>
<li>300W T<br>2.1 <br>AI Sound Pro<br>Smart Connectivity: Bluetooth and HDMI<br>Stylish Design<br>TV Sync Ready<br>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 35000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/M5.jpg?v=1744215992",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/M5.jpg?v=1744215992"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "lg-x-boom-cl98-3500w-mini-audio-x-shiny-woofer-x-flash-lighting-dj-effects-sampler-creator",
    name: "LG X BOOM CL98 3500W, Mini Audio, X-Shiny woofer, X-Flash lighting, DJ Effects and sampler Creator",
    brand: "LG",
    category: "speakers-soundbars",
    slug: "lg-x-boom-cl98-3500w-mini-audio-x-shiny-woofer-x-flash-lighting-dj-effects-sampler-creator",
    description: `<ul class="feature-list on">
<li>3500 Watts</li>
<li>X-Shiny Woofer &amp; Compression Horn</li>
<li>DJ Effects &amp; Sampler Creator</li>
<li>X-Flash Lighting</li>
<li>Karaoke Creator</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 98000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/M4.jpg?v=1744215459",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/M4.jpg?v=1744215459"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "lg-2900w-xboom-hi-fi-system-bluetooth-karaoke-cl88",
    name: "LG 2900W XBOOM HI-FI SYSTEM, BLUETOOTH, KARAOKE CL88",
    brand: "LG",
    category: "speakers-soundbars",
    slug: "lg-2900w-xboom-hi-fi-system-bluetooth-karaoke-cl88",
    description: `<ul>
<li>LG XBOOM 2900W MINI-HI-FI SYSTEM</li>
<li>HI-FI SYSTEM</li>
<li>2900 WATTS TOTAL POWER OUTPUT</li>
<li>MULTI COLOR LIGHTING</li>
<li>KARAOKE STAR</li>
<li>VOCAL EFFECTS</li>
<li>BLUETOOTH CONNECTIVITY</li>
<li>BLUETOOTH REMOTE APP</li>
<li>MULTI BLUETOOTH</li>
<li>AUTO DJ FEATURE</li>
<li>DJ APP</li>
<li>SOUND EQUALISER</li>
<li>SPECIAL EQUALIZER</li>
<li>JUKE BOX</li>
<li>MULTI-JUKE BOX</li>
<li>VOICE CANCELLER</li>
<li>WIRELESS PARTY LINK</li>
<li>WIRELESS TV SOUND SYNC</li>
<li>AUTO MUSIC PLAY</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 80000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/M2.jpg?v=1744215215",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/M2.jpg?v=1744215215"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "lg-1100w-rms-xboom-mini-ck57",
    name: "LG 1100W RMS XBOOM MINI CK57",
    brand: "LG",
    category: "speakers-soundbars",
    slug: "lg-1100w-rms-xboom-mini-ck57",
    description: `<ul>
<li>LG 1100W RMS XBOOM MINI HI-FI SYSTEM, POWERFUL BASS BLAST, KARAOKE, DOLBY DIGITAL AUDIO, BLUETOOTH, HDMI, CK57</li>
<li>LG 1100W RMS XBOOM MINI HI-FI SYSTEM</li>
<li>DOLBY DIGITAL AUDIO</li>
<li>POWERFUL BASS BLAST </li>
<li>LG HI-FI SYSTEM</li>
<li>1100WATTS TOTAL OUTPUT POWER</li>
<li>MULTI-COLOUR LIGHTING FOR MAXIMUM CLUB EXPERIENCE</li>
<li>BLUETOOTH FEATURE AVAILABLE FOR WIRELESS PLAY OF MUSIC</li>
<li>WIRELESS PARTY LINK</li>
<li>AUTO MUSIC PLAY</li>
<li>LG MUSIC FLOW BLUETOOTH FEATURE</li>
<li>MULTI JUKEBOX</li>
<li>BLUETOOTH STANDBY</li>
<li>DUAL USB INPUT</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 55000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/M1.jpg?v=1744215045",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/M1.jpg?v=1744215045"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "lg-xboom-ck43-300-watts-black",
    name: "LG XBOOM CK43 300 Watts – Black",
    brand: "LG",
    category: "speakers-soundbars",
    slug: "lg-xboom-ck43-300-watts-black",
    description: `<ul>
<li>
<span>300 Watts</span><br><span>EZ File Search</span><br><span>Wireless Party Link</span><br><span>TV Sound Sync</span><br><span>Multi Bluetooth</span><br><span>FM Radio</span>
</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 30000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/G3.webp?v=1744214765",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/G3.webp?v=1744214765"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "lg-950w-xboom-hi-fi-system-multi-color-lighting-cl65",
    name: "LG 950W XBOOM HI-FI SYSTEM MULTI COLOR LIGHTING CL65",
    brand: "LG",
    category: "speakers-soundbars",
    slug: "lg-950w-xboom-hi-fi-system-multi-color-lighting-cl65",
    description: `<ul>
<li>LG XBOOM 950W MINI-HI-FI SYSTEM</li>
<li>HI-FI SYSTEM</li>
<li>950 WATTS TOTAL POWER OUTPUT</li>
<li>MULTI COLOR LIGHTING</li>
<li>KARAOKE STAR</li>
<li>VOCAL EFFECTS</li>
<li>BLUETOOTH CONNECTIVITY</li>
<li>BLUETOOTH REMOTE APP</li>
<li>MULTI BLUETOOTH</li>
<li>AUTO DJ FEATURE</li>
<li>SOUND EQUALISER</li>
<li>SPECIAL EQUALIZER</li>
<li>JUKE BOX</li>
<li>MULTI-JUKE BOX</li>
<li>VOICE CANCELLER</li>
<li>WIRELESS PARTY LINK</li>
<li>WIRELESS TV SOUND SYNC</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 45000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/G2.jpg?v=1744214533",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/G2.jpg?v=1744214533"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "lg-480w-xboom-hi-fi-system-bluetooth-karaoke-cj44",
    name: "LG 480W XBOOM HI-FI SYSTEM, BLUETOOTH, KARAOKE CJ44",
    brand: "LG",
    category: "speakers-soundbars",
    slug: "lg-480w-xboom-hi-fi-system-bluetooth-karaoke-cj44",
    description: `<ul>
<li>LG XBOOM 480W MINI-HI-FI SYSTEM</li>
<li>480 WATTS TOTAL POWER OUTPUT</li>
<li>AUTO DJ FEATURE</li>
<li>KARAOKE STAR</li>
<li>VOCAL EFFECTS</li>
<li>BLUETOOTH CONNECTIVITY</li>
<li>BLUETOOTH REMOTE APP</li>
<li>MULTI BLUETOOTH</li>
<li>SOUND EQUALISER</li>
<li>SPECIAL EQUALIZER</li>
<li>JUKE BOX</li>
<li>MULTI-JUKE BOX</li>
<li>VOICE CANCELLER</li>
<li>WIRELESS PARTY LINK</li>
<li>WIRELESS TV SOUND SYNC</li>
<li>AUTO MUSIC PLAY</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 35000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/G1.jpg?v=1744214324",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/G1.jpg?v=1744214324"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "lg-lhd-70c-1000w-5-1ch-home-theatre-system",
    name: "LG LHD-70C – 1000W 5.1Ch Home Theatre System",
    brand: "LG",
    category: "speakers-soundbars",
    slug: "lg-lhd-70c-1000w-5-1ch-home-theatre-system",
    description: `<ul>
<li>DVD HTS</li>
<li>5.1 Channel</li>
<li>1000W</li>
<li>Bluetooth</li>
<li>USB Direct Recording</li>
<li>Bass Blast Subwoofer</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 45000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/X8.jpg?v=1744214070",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/X8.jpg?v=1744214070"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "lg-lhd-457-330w-5-1ch-dvd-home-theatre-system-black",
    name: "LG LHD 457- 330W 5.1Ch DVD Home Theatre System -Black",
    brand: "LG",
    category: "speakers-soundbars",
    slug: "lg-lhd-457-330w-5-1ch-dvd-home-theatre-system-black",
    description: `<ul>
<li>Channel: 5.1 Channel</li>
<li>Powerful Sound 1000W</li>
<li>4 Tallboy<br>
</li>
<li>DVD HTS</li>
<li>Bluetooth</li>
<li>USB Direct Recording</li>
<li>Bass Blast Subwoofer</li>
<li>1080p Up-scaling</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 29000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/X7.jpg?v=1744213883",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/X7.jpg?v=1744213883"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "lg-lhd677-1000w-4-1ch-dvd-home-theatre-system-black",
    name: "LG LHD677- 1000W 4.1Ch DVD Home Theatre System -Black",
    brand: "LG",
    category: "speakers-soundbars",
    slug: "lg-lhd677-1000w-4-1ch-dvd-home-theatre-system-black",
    description: `<ul class="c-list c-list--single-column on" id="keyFeatureList" role="list" aria-expanded="true">
<li class="c-list__item" role="listitem"><span class="font-w-normal-16 font-m-normal-14">1000W 4.2Ch. Home Theater</span></li>
<li class="c-list__item" role="listitem"><span class="font-w-normal-16 font-m-normal-14">DVD/ CD Playback</span></li>
<li class="c-list__item" role="listitem"><span class="font-w-normal-16 font-m-normal-14">Dualsubwoofers built-in</span></li>
<li class="c-list__item" role="listitem"><span class="font-w-normal-16 font-m-normal-14">Space Saving &amp; Simple Installation</span></li>
<li class="c-list__item" role="listitem"><span class="font-w-normal-16 font-m-normal-14">Bluetooth Standby</span></li>
<li class="c-list__item" role="listitem"><span class="font-w-normal-16 font-m-normal-14">Wireless sound streaming from LG TVs</span></li>
</ul>`,
    specifications: {},
    variants: [],
    price: 44000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/X5.jpg?v=1744213214",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/X5.jpg?v=1744213214"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "lg-lhd657-1000w-5-1ch-home-theatre-4-tallboy",
    name: "LG Lhd657 - 1000W, 5.1CH Home Theatre (4 Tallboy)",
    brand: "LG",
    category: "speakers-soundbars",
    slug: "lg-lhd657-1000w-5-1ch-home-theatre-4-tallboy",
    description: `<ul>
<li>DVD HTS</li>
<li>5.1 Channel</li>
<li>Bluetooth</li>
<li>USB Direct Recording</li>
<li>Bass Blast Subwoofer</li>
<li>1080p Up-scaling</li>
<li>1 HDMI Out</li>
<li>Radio Antenna</li>
<li>Optical Audio Input</li>
<li>Video Composite Output</li>
<li>1 USB Input</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 40000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/X3.jpg?v=1744212863",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/X3.jpg?v=1744212863"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "lg-lhd647-1000w-5-1ch-2tb-dvd-home-theater",
    name: "LG LHD647 - 1000W 5.1ch 2TB DVD Home Theater",
    brand: "LG",
    category: "speakers-soundbars",
    slug: "lg-lhd647-1000w-5-1ch-2tb-dvd-home-theater",
    description: `<ul>
<li>5.1 Channel </li>
<li>Powerful Bass Sound</li>
<li>1000W power output</li>
<li>2BT</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 38000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/X2.jpg?v=1744212725",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/X2.jpg?v=1744212725"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "lg-lhd627-home-5-1-channel-1000w-bluetooth",
    name: "LG LHD627 Home 5.1 Channel, 1000W, Bluetooth",
    brand: "LG",
    category: "speakers-soundbars",
    slug: "lg-lhd627-home-5-1-channel-1000w-bluetooth",
    description: `<ul>
<li>5.1 Channel</li>
<li>POWER OUTPUT – Total 1000W</li>
<li>1 USB Port</li>
<li>Video Out – Composite</li>
<li>1 Optical Port</li>
<li>1 HDMI Port</li>
<li>Radio Antenna – FM</li>
<li>A/V Sync Delay (Audio Delay)</li>
<li>Bluetooth (Rx /Tx)</li>
<li>DVD – 1080p Upscaling</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 36000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/x1.jpg?v=1744212546",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/x1.jpg?v=1744212546"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },
  {
    id: "vision-plus-210w-vp-5120sb-home-cinema-soundbar",
    name: "Vision Plus 210W VP-5120SB HOME CINEMA SOUNDBAR",
    brand: "Vision Plus",
    category: "speakers-soundbars",
    slug: "vision-plus-210w-vp-5120sb-home-cinema-soundbar",
    description: `<ul>
<li>POWER: 210W RMS</li>
<li>5.5-INCH SUB</li>
<li>5.1 CH</li>
<li>4 SPEAKERS (IN ONE BAR)</li>
<li>SOURCE INPUT: USB/SD/BT/FM/LINE IN/TV IN</li>
<li>THE DEVICE SUPPORTS: USB/SD/MMC</li>
<li>BLUETOOTH 5.0</li>
<li>HDMI (ARC) </li>
<li>USB INPUT</li>
<li>OPTICAL OUT/IN</li>
<li>DIGITAL FM RADIO: YES</li>
<li>FM RADIO CHANNEL STORE CAPACITY: 20 CHANNEL</li>
<li>FM FREQUENCY RANGE: 87.5MHZ – 108MH</li>
</ul>`,
    specifications: {},
    variants: [],
    price: 26000,
    rating: 4.5,
    reviewCount: 0,
    inStock: true,
    image: "https://cdn.shopify.com/s/files/1/0751/6395/9546/files/z5.jpg?v=1744212282",
    images: ["https://cdn.shopify.com/s/files/1/0751/6395/9546/files/z5.jpg?v=1744212282"],
    featured: false,
    flashSale: false,
    dealOfDay: false,
  },


