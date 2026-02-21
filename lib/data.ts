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
  },
]

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}

export function getFlashSaleProducts(): Product[] {
  return products.filter((p) => p.flashSale)
}

export function getDealOfDayProducts(): Product[] {
  return products.filter((p) => p.dealOfDay)
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase()
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
  )
}

export function filterProducts(
  productList: Product[],
  filters: {
    brands?: string[]
    minPrice?: number
    maxPrice?: number
    minRating?: number
  }
): Product[] {
  return productList.filter((p) => {
    if (filters.brands && filters.brands.length > 0 && !filters.brands.includes(p.brand)) return false
    if (filters.minPrice && p.price < filters.minPrice) return false
    if (filters.maxPrice && p.price > filters.maxPrice) return false
    if (filters.minRating && p.rating < filters.minRating) return false
    return true
  })
}

export function formatPrice(price: number): string {
  return `KES ${price.toLocaleString("en-KE")}`
}
