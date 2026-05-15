export const products = [
  {
    id: 1,
    title: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    category: "Electronics",
    price: 24990,
    originalPrice: 34990,
    discount: 29,
    rating: 4.6,
    reviews: 8432,
    prime: true,
    delivery: "Tomorrow",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    brand: "Sony",
    badge: "Best Seller",
    aiSummary: {
      keyFeatures: [
        "Industry-leading noise cancellation with 8 microphones",
        "30-hour battery life with quick charge (3 min = 3 hrs)",
        "Crystal clear hands-free calling",
        "Multipoint connection to 2 devices simultaneously",
        "Speak-to-Chat pauses music automatically"
      ],
      bestUseCases: ["Remote work & focus sessions", "Long-haul flights", "Commuting", "Music production"],
      targetAudience: "Professionals, frequent travelers, audiophiles who demand premium sound quality",
      valueProposition: "Best-in-class noise cancellation with exceptional sound quality and all-day comfort",
      reviewSummary: {
        lovedFeatures: ["Noise cancellation is phenomenal", "Incredibly comfortable for long sessions", "Clear call quality", "Intuitive touch controls"],
        complaints: ["Slightly bulky to carry", "Plastic headband may feel less premium", "App can be glitchy occasionally"],
        sentiment: 92,
        durability: "Excellent - most users report 2+ years of daily use without issues",
        valueForMoney: "Worth every rupee for power users; budget buyers may prefer cheaper alternatives"
      },
      pros: ["Best ANC on the market", "Exceptional 30hr battery", "Premium audio quality", "Multi-device support", "Comfortable for 8+ hours"],
      cons: ["Premium price point", "Slightly bulky", "Occasional app bugs"],
      recommendation: {
        shouldBuy: "Professionals, travelers, remote workers, audiophiles",
        shouldAvoid: "Casual listeners on a tight budget or those needing a gym headphone",
        alternatives: ["Bose QuietComfort 45", "Apple AirPods Max", "Sennheiser Momentum 4"],
        buyingScore: 91
      }
    },
    specs: { connectivity: "Bluetooth 5.2", battery: "30 hours", weight: "250g", color: "Black/Silver" }
  },
  {
    id: 2,
    title: "Apple MacBook Air M2 Chip 13-inch Laptop",
    category: "Electronics",
    price: 99900,
    originalPrice: 114900,
    discount: 13,
    rating: 4.8,
    reviews: 5621,
    prime: true,
    delivery: "Tomorrow",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    brand: "Apple",
    badge: "Amazon's Choice",
    aiSummary: {
      keyFeatures: [
        "Apple M2 chip with 8-core CPU and 10-core GPU",
        "18-hour battery life - all day productivity",
        "Fanless design - completely silent operation",
        "Liquid Retina display with 500 nits brightness",
        "MagSafe charging, USB-C, and headphone jack"
      ],
      bestUseCases: ["Software development", "Video editing", "College & university", "Creative work"],
      targetAudience: "Students, developers, creative professionals seeking a lightweight powerhouse",
      valueProposition: "Unmatched performance-per-watt ratio in an ultra-thin silent package",
      reviewSummary: {
        lovedFeatures: ["Blazing fast M2 performance", "Silent fanless operation", "All-day battery is real", "Build quality is exceptional"],
        complaints: ["Only 2 USB-C ports", "RAM not upgradeable", "Premium pricing", "Limited gaming support"],
        sentiment: 95,
        durability: "Outstanding - Apple builds last 5-7 years with proper care",
        valueForMoney: "Excellent for professionals who use it daily; overkill for basic tasks"
      },
      pros: ["M2 chip is incredibly fast", "18hr real-world battery", "Silent & cool always", "Perfect display", "MacOS ecosystem"],
      cons: ["Only 2 ports", "Non-upgradeable RAM/storage", "Expensive", "Limited gaming"],
      recommendation: {
        shouldBuy: "Developers, students, content creators, anyone in Apple ecosystem",
        shouldAvoid: "Windows power users, hardcore gamers, budget-conscious buyers",
        alternatives: ["Dell XPS 13", "Microsoft Surface Pro 9", "ASUS ZenBook 14"],
        buyingScore: 94
      }
    },
    specs: { processor: "Apple M2", ram: "8GB", storage: "256GB SSD", display: "13.6-inch Retina" }
  },
  {
    id: 3,
    title: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
    category: "Home Appliances",
    price: 6499,
    originalPrice: 9999,
    discount: 35,
    rating: 4.5,
    reviews: 12847,
    prime: true,
    delivery: "Day after tomorrow",
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=400&fit=crop",
    brand: "Instant Pot",
    badge: "Best Seller",
    aiSummary: {
      keyFeatures: [
        "7 appliances in 1: pressure cooker, slow cooker, rice cooker, steamer, sauté, yogurt maker, warmer",
        "Up to 70% faster cooking than traditional methods",
        "14 smart programs for easy one-touch cooking",
        "Stainless steel inner pot - dishwasher safe",
        "Advanced safety features with 10 proven mechanisms"
      ],
      bestUseCases: ["Daily Indian cooking", "Meal prep", "One-pot meals", "Batch cooking", "Yogurt making"],
      targetAudience: "Busy families, health-conscious cooks, meal preppers, kitchen minimalists",
      valueProposition: "Replace 7 appliances with one, save time and counter space",
      reviewSummary: {
        lovedFeatures: ["Saves huge time making dal & rice", "Easy to clean", "Safe to use", "Energy efficient"],
        complaints: ["Learning curve for first-timers", "Lid seal needs regular cleaning", "Can be noisy during pressure release"],
        sentiment: 88,
        durability: "Very good - most users report 3-5 years of heavy daily use",
        valueForMoney: "Exceptional value - saves time, energy, and replaces multiple appliances"
      },
      pros: ["Replaces 7 appliances", "70% faster cooking", "Energy efficient", "Very safe to use", "Easy cleanup"],
      cons: ["Learning curve", "Seal needs maintenance", "Noisy steam release"],
      recommendation: {
        shouldBuy: "Families, busy professionals, meal preppers, anyone wanting to simplify cooking",
        shouldAvoid: "Those who prefer traditional slow cooking methods",
        alternatives: ["Philips Electric Pressure Cooker", "Prestige Smart Plus", "Havells Pronto Plus"],
        buyingScore: 88
      }
    },
    specs: { capacity: "6 Quart", power: "1000W", material: "Stainless Steel", programs: "14 Smart Programs" }
  },
  {
    id: 4,
    title: "Fitbit Charge 6 Advanced Fitness Tracker",
    category: "Fitness",
    price: 12999,
    originalPrice: 17999,
    discount: 28,
    rating: 4.3,
    reviews: 3284,
    prime: true,
    delivery: "Tomorrow",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop",
    brand: "Fitbit",
    badge: "New Launch",
    aiSummary: {
      keyFeatures: [
        "Built-in GPS for accurate outdoor tracking",
        "Google Maps & Wallet integration",
        "Heart rate, SpO2, and stress monitoring",
        "7-day battery life",
        "YouTube Music controls on wrist"
      ],
      bestUseCases: ["Running & cycling", "Gym workouts", "Sleep tracking", "Daily activity monitoring"],
      targetAudience: "Fitness enthusiasts, runners, health-conscious individuals in the Google ecosystem",
      valueProposition: "Best fitness tracker for Google users with integrated Maps and Wallet",
      reviewSummary: {
        lovedFeatures: ["GPS accuracy is great", "Google integration is seamless", "Sleep tracking insightful", "Slim and comfortable"],
        complaints: ["Limited smartwatch features vs Apple Watch", "Fitbit app less intuitive post-Google acquisition", "Price feels steep"],
        sentiment: 82,
        durability: "Good - typical lifespan 2-3 years with regular use",
        valueForMoney: "Good for dedicated fitness users; casual users may prefer cheaper options"
      },
      pros: ["Accurate built-in GPS", "Google Maps & Wallet", "Excellent health sensors", "7-day battery"],
      cons: ["Limited app ecosystem", "Pricier than Xiaomi alternatives", "No voice assistant"],
      recommendation: {
        shouldBuy: "Runners, cyclists, Google Pixel users, fitness enthusiasts",
        shouldAvoid: "iPhone users, those wanting full smartwatch features",
        alternatives: ["Garmin Vivosmart 5", "Mi Smart Band 8 Pro", "Samsung Galaxy Fit 3"],
        buyingScore: 82
      }
    },
    specs: { battery: "7 days", GPS: "Built-in", waterproof: "50m", compatibility: "Android & iOS" }
  },
  {
    id: 5,
    title: "Razer BlackShark V2 X Gaming Headset 7.1 Surround",
    category: "Gaming",
    price: 4999,
    originalPrice: 7999,
    discount: 38,
    rating: 4.4,
    reviews: 6741,
    prime: true,
    delivery: "Tomorrow",
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=400&h=400&fit=crop",
    brand: "Razer",
    badge: "Deal of the Day",
    aiSummary: {
      keyFeatures: [
        "7.1 Surround Sound for immersive gaming audio",
        "TriForce Titanium 50mm drivers",
        "Cardioid microphone with superb voice clarity",
        "Memory foam ear cushions - ultra comfortable",
        "Lightweight 240g design for long sessions"
      ],
      bestUseCases: ["FPS games (BGMI, Valorant)", "Streaming & content creation", "Online multiplayer", "Casual music listening"],
      targetAudience: "PC gamers, streamers, casual to competitive players seeking audio advantage",
      valueProposition: "Pro gaming audio quality at an accessible price point",
      reviewSummary: {
        lovedFeatures: ["7.1 surround makes footsteps very clear", "Extremely comfortable for 6+ hour sessions", "Mic quality is great for calls", "Build quality feels premium"],
        complaints: ["Wired only - no Bluetooth", "USB dongle adapter needed for PS5", "Can feel warm after long hours"],
        sentiment: 87,
        durability: "Good - cable quality noted as potential weak point by some users",
        valueForMoney: "Excellent value - competes with headsets costing 2-3x more"
      },
      pros: ["Outstanding 7.1 surround", "Very comfortable", "Clear mic", "Budget-friendly price", "Great for FPS"],
      cons: ["Wired only", "No wireless option", "Cable durability concern"],
      recommendation: {
        shouldBuy: "PC gamers, streamers, anyone wanting quality gaming audio under ₹5000",
        shouldAvoid: "Console-primary players, those needing wireless freedom",
        alternatives: ["HyperX Cloud Alpha", "SteelSeries Arctis 1", "Logitech G432"],
        buyingScore: 87
      }
    },
    specs: { connectivity: "3.5mm + USB", drivers: "50mm TriForce Titanium", weight: "240g", compatibility: "PC/Mac/PS4/Nintendo Switch" }
  },
  {
    id: 6,
    title: "Logitech MX Master 3S Wireless Performance Mouse",
    category: "Office Accessories",
    price: 8495,
    originalPrice: 10995,
    discount: 23,
    rating: 4.7,
    reviews: 4123,
    prime: true,
    delivery: "Tomorrow",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    brand: "Logitech",
    badge: "Amazon's Choice",
    aiSummary: {
      keyFeatures: [
        "8000 DPI Darkfield sensor - works on glass",
        "MagSpeed electromagnetic scroll wheel",
        "Quiet click buttons (90% less noise)",
        "Connect to 3 devices, switch with one button",
        "70-day battery life on full charge"
      ],
      bestUseCases: ["Software development", "Graphic design", "Video editing", "Multi-device workflows", "Office productivity"],
      targetAudience: "Power users, developers, designers who use multiple computers daily",
      valueProposition: "The ultimate productivity mouse for professionals who demand precision and flexibility",
      reviewSummary: {
        lovedFeatures: ["Scroll wheel is absolutely magical", "Multi-device switching is seamless", "70-day battery is incredible", "Ergonomic shape reduces wrist fatigue"],
        complaints: ["Right-hand only design", "Heavy at 141g", "Premium price", "No RGB (which some see as a pro)"],
        sentiment: 94,
        durability: "Exceptional - Logitech MX series known for 4-6 year lifespans",
        valueForMoney: "Excellent for daily professional use; overkill for occasional users"
      },
      pros: ["Magical scroll wheel", "Glass surface tracking", "70-day battery", "3-device multi-pair", "Quiet clicks"],
      cons: ["Right-handed only", "Slightly heavy", "High price"],
      recommendation: {
        shouldBuy: "Developers, designers, power users with multi-device setups",
        shouldAvoid: "Left-handed users, casual users, gamers needing low latency",
        alternatives: ["Logitech MX Anywhere 3", "Microsoft Arc Mouse", "Apple Magic Mouse"],
        buyingScore: 93
      }
    },
    specs: { sensor: "8000 DPI Darkfield", battery: "70 days", connectivity: "Bluetooth + USB", weight: "141g" }
  },
  {
    id: 7,
    title: "Samsung 55\" 4K QLED Smart TV (2024 Model)",
    category: "Electronics",
    price: 54990,
    originalPrice: 79900,
    discount: 31,
    rating: 4.5,
    reviews: 2891,
    prime: true,
    delivery: "In 3-5 days",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=400&fit=crop",
    brand: "Samsung",
    badge: "Limited Deal",
    aiSummary: {
      keyFeatures: [
        "Quantum Dot technology for 100% Color Volume",
        "4K UHD with AI upscaling for all content",
        "Tizen OS with 600+ streaming apps",
        "Motion Xcelerator 120Hz for gaming",
        "Object Tracking Sound+ audio system"
      ],
      bestUseCases: ["Home theater", "Gaming (PS5/Xbox)", "Sports viewing", "Daily streaming (Netflix/Prime)"],
      targetAudience: "Movie enthusiasts, gamers, families wanting a premium TV experience",
      valueProposition: "Cinema-quality QLED colors with smart features at a mid-premium price",
      reviewSummary: {
        lovedFeatures: ["Colors are absolutely stunning", "Smart TV features work flawlessly", "120Hz gaming mode is excellent", "Easy setup via SmartThings"],
        complaints: ["No Dolby Vision support", "Sound could be better without soundbar", "Bezels wider than competitors"],
        sentiment: 89,
        durability: "Excellent - Samsung TVs typically last 7-10 years",
        valueForMoney: "Great deal for the price; QLED at this price point is rare"
      },
      pros: ["Quantum Dot colors", "120Hz gaming", "Excellent smart features", "AI upscaling", "Great brightness"],
      cons: ["No Dolby Vision", "Average built-in speakers", "Slightly chunky bezels"],
      recommendation: {
        shouldBuy: "Gamers, movie lovers, families wanting premium picture quality",
        shouldAvoid: "Those needing Dolby Vision, audiophiles who won't use a soundbar",
        alternatives: ["LG C3 OLED 55\"", "Sony Bravia XR 55\"", "Mi QLED TV 55\""],
        buyingScore: 89
      }
    },
    specs: { resolution: "4K UHD (3840x2160)", panel: "QLED", refresh: "120Hz", OS: "Tizen 2024" }
  },
  {
    id: 8,
    title: "boAt Rockerz 450 Bluetooth On-Ear Headphones",
    category: "Electronics",
    price: 1299,
    originalPrice: 3990,
    discount: 67,
    rating: 4.1,
    reviews: 45231,
    prime: true,
    delivery: "Tomorrow",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop",
    brand: "boAt",
    badge: "Bestseller #1",
    aiSummary: {
      keyFeatures: [
        "15-hour playback battery life",
        "40mm dynamic drivers for powerful bass",
        "Foldable design for easy portability",
        "Built-in mic for hands-free calls",
        "Bluetooth 4.2 with 10m range"
      ],
      bestUseCases: ["Daily commute", "Casual music listening", "Work from home calls", "College students"],
      targetAudience: "Budget-conscious students and young professionals wanting decent audio without breaking the bank",
      valueProposition: "Best value audio experience under ₹1500 in India",
      reviewSummary: {
        lovedFeatures: ["Punchy bass for the price", "Comfortable and lightweight", "15-hour battery", "Stylish design"],
        complaints: ["Treble can sound harsh", "Build quality feels plastic-y", "Mic quality is mediocre", "No active noise cancellation"],
        sentiment: 79,
        durability: "Average - hinge mechanism reported as weak by some users after 1 year",
        valueForMoney: "Outstanding - best ₹1299 you can spend on audio"
      },
      pros: ["Unbeatable price", "Good bass response", "15hr battery", "Foldable", "Wide color options"],
      cons: ["No ANC", "Mediocre mic", "Average build quality", "Bluetooth 4.2 (older)"],
      recommendation: {
        shouldBuy: "Students, budget buyers, casual listeners, first headphone buyers",
        shouldAvoid: "Audiophiles, professionals needing call quality, users wanting ANC",
        alternatives: ["JBL Tune 510BT", "Realme Buds Wireless 3", "Noise One"],
        buyingScore: 76
      }
    },
    specs: { battery: "15 hours", drivers: "40mm Dynamic", bluetooth: "4.2", range: "10 meters" }
  },
  {
    id: 9,
    title: "Dyson V15 Detect Cordless Vacuum Cleaner",
    category: "Home Appliances",
    price: 54900,
    originalPrice: 64900,
    discount: 15,
    rating: 4.6,
    reviews: 1847,
    prime: true,
    delivery: "In 2-3 days",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=400&fit=crop",
    brand: "Dyson",
    badge: "Premium Pick",
    aiSummary: {
      keyFeatures: [
        "Laser reveals microscopic dust particles on floors",
        "HEPA filtration traps 99.99% of particles",
        "60-minute run time on low mode",
        "LCD screen shows real-time particle count",
        "Acoustic piezo sensor auto-adjusts suction power"
      ],
      bestUseCases: ["Pet hair removal", "Deep cleaning carpets", "Allergy sufferers", "Multi-surface homes"],
      targetAudience: "Premium home owners, allergy sufferers, pet owners who want the best clean",
      valueProposition: "See what you're cleaning - Dyson's laser technology reveals invisible dust",
      reviewSummary: {
        lovedFeatures: ["Laser dust detection is a game changer", "Incredibly powerful suction", "Easy to maintain filters", "LCD screen is very useful"],
        complaints: ["Very expensive", "Battery degrades over years", "Heavy for extended use", "Accessories can get lost"],
        sentiment: 91,
        durability: "Excellent - Dyson motors built to last 10+ years; battery replaceable",
        valueForMoney: "Expensive but worth it for those who clean frequently; overkill for small homes"
      },
      pros: ["Revolutionary laser dust detection", "HEPA filtration", "60min battery", "Multiple attachments", "LCD insights"],
      cons: ["Premium price", "Heavy at 3.1kg", "Battery replacement costly"],
      recommendation: {
        shouldBuy: "Pet owners, allergy sufferers, large homes, cleaning enthusiasts",
        shouldAvoid: "Small apartment owners, budget shoppers, infrequent cleaners",
        alternatives: ["Dyson V12 Detect", "Shark IZ462H", "Roborock H7"],
        buyingScore: 88
      }
    },
    specs: { suction: "240 AW", filtration: "HEPA", battery: "60 min", weight: "3.1kg" }
  },
  {
    id: 10,
    title: "Kindle Paperwhite (11th Gen) E-Reader 6.8\"",
    category: "Electronics",
    price: 13999,
    originalPrice: 16999,
    discount: 18,
    rating: 4.7,
    reviews: 9834,
    prime: true,
    delivery: "Tomorrow",
    image: "https://images.unsplash.com/photo-1510124656628-44e14c9d7f10?w=400&h=400&fit=crop",
    brand: "Amazon",
    badge: "Amazon's Choice",
    aiSummary: {
      keyFeatures: [
        "300 ppi glare-free display - like reading real paper",
        "10 weeks battery life - charge and forget",
        "IPX8 waterproof - read in the bath or pool",
        "Adjustable warm light for night reading",
        "8GB storage holds thousands of books"
      ],
      bestUseCases: ["Avid readers", "Travel reading", "Bedtime reading", "Students", "Commuters"],
      targetAudience: "Book lovers, students, professionals who read 1+ books per month",
      valueProposition: "The best digital reading experience that doesn't strain your eyes",
      reviewSummary: {
        lovedFeatures: ["Display is absolutely stunning", "10-week battery is incredible", "Warm light perfect for night reading", "Lightweight and comfortable to hold"],
        complaints: ["Page turn speed slightly slower than previous gen", "No color display", "Expensive for an e-reader"],
        sentiment: 96,
        durability: "Exceptional - Kindles last 5-8 years with care",
        valueForMoney: "Excellent long-term investment for readers - saves money vs physical books"
      },
      pros: ["Best-in-class 300ppi display", "10-week battery", "Waterproof", "Warm light", "Massive library access"],
      cons: ["No color display", "Page turns could be faster", "Kindle ecosystem lock-in"],
      recommendation: {
        shouldBuy: "Anyone who reads 2+ books per month, travelers, students",
        shouldAvoid: "Occasional readers, those wanting tablet-like features",
        alternatives: ["Kobo Libra 2", "Kindle Oasis", "PocketBook InkPad 4"],
        buyingScore: 95
      }
    },
    specs: { display: "6.8\" 300ppi", storage: "8GB", battery: "10 weeks", waterproof: "IPX8" }
  },
  {
    id: 11,
    title: "Whirlpool 1.5 Ton 5 Star Inverter Split AC",
    category: "Home Appliances",
    price: 36990,
    originalPrice: 49990,
    discount: 26,
    rating: 4.3,
    reviews: 3421,
    prime: false,
    delivery: "In 5-7 days",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop",
    brand: "Whirlpool",
    badge: "Energy Saver",
    aiSummary: {
      keyFeatures: [
        "5 Star BEE rating - saves up to 40% on electricity",
        "Intellisense Inverter Technology for precise cooling",
        "6th Sense Auto Restart after power cuts",
        "MOIST LOCK + MICRO GUARD filters for clean air",
        "Wi-Fi enabled remote control via app"
      ],
      bestUseCases: ["Bedroom cooling", "Indian summer conditions", "24/7 operation", "Energy-conscious homes"],
      targetAudience: "Indian homeowners wanting energy-efficient cooling for harsh summers",
      valueProposition: "5-star energy savings that pay for themselves in 3-4 years vs 3-star AC",
      reviewSummary: {
        lovedFeatures: ["Cools very fast even in 45°C", "Electricity bill noticeably lower", "Silent operation", "Wi-Fi control works well"],
        complaints: ["Installation team can be unprofessional", "Customer service response times slow", "Remote control feels cheap"],
        sentiment: 83,
        durability: "Good - Whirlpool compressors carry 10-year warranty",
        valueForMoney: "Very good - energy savings justify premium over 3-star models"
      },
      pros: ["5-star energy efficiency", "Fast cooling", "Wi-Fi enabled", "Auto restart", "Air purification"],
      cons: ["Installation quality varies", "Slow customer service", "No built-in air purifier"],
      recommendation: {
        shouldBuy: "Homeowners planning 5+ years of use, energy-conscious buyers",
        shouldAvoid: "Renters, those needing immediate installation guarantees",
        alternatives: ["Daikin 1.5 Ton 5 Star", "Voltas 1.5 Ton 5 Star", "Panasonic 1.5 Ton Inverter"],
        buyingScore: 83
      }
    },
    specs: { capacity: "1.5 Ton", starRating: "5 Star BEE", type: "Inverter", warranty: "5 years comprehensive" }
  },
  {
    id: 12,
    title: "PowerUp Pro X Gaming Chair with Lumbar Support",
    category: "Gaming",
    price: 18999,
    originalPrice: 29999,
    discount: 37,
    rating: 4.2,
    reviews: 2156,
    prime: true,
    delivery: "In 3-4 days",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&h=400&fit=crop",
    brand: "PowerUp",
    badge: "Gaming Choice",
    aiSummary: {
      keyFeatures: [
        "4D adjustable armrests for precise positioning",
        "Built-in lumbar and neck massage pillows",
        "Recline up to 180° for nap mode",
        "Cold-cure foam padding - doesn't flatten",
        "Supports up to 150kg body weight"
      ],
      bestUseCases: ["Long gaming sessions", "Work from home", "Streaming setups", "Content creation"],
      targetAudience: "Gamers, streamers, work-from-home professionals who sit 6+ hours daily",
      valueProposition: "Ergonomic support that prevents back pain for marathon gaming sessions",
      reviewSummary: {
        lovedFeatures: ["Back support makes 8hr sessions comfortable", "Looks amazing on stream", "Solid build quality", "Massage pillows actually work"],
        complaints: ["Assembly takes 45-60 minutes", "Armrests can wobble over time", "Cold in AC rooms despite leather"],
        sentiment: 81,
        durability: "Average-Good - PU leather may crack after 2-3 years of heavy use",
        valueForMoney: "Good value at this price; avoid cheaper chairs that cause back problems"
      },
      pros: ["Excellent back support", "4D armrests", "180° recline", "Great aesthetics", "Massage feature"],
      cons: ["Complex assembly", "PU leather durability concerns", "Heavy at 25kg"],
      recommendation: {
        shouldBuy: "Gamers and WFH folks with back issues, streamers wanting aesthetics",
        shouldAvoid: "Those wanting real leather, people with limited assembly patience",
        alternatives: ["Secretlab Titan", "Green Soul Monster Ultimate", "AKRacing Core Series"],
        buyingScore: 80
      }
    },
    specs: { maxWeight: "150kg", material: "PU Leather", recline: "90-180°", armrests: "4D Adjustable" }
  }
];

export const voiceResponses = {
  "gaming headphones under 5000": {
    response: "I found 3 excellent gaming headphones under ₹5000! The **Razer BlackShark V2 X at ₹4,999** is your best bet — it has 7.1 surround sound that makes BGMI and Valorant significantly better. The TriForce drivers are exceptional at this price. Want me to pull up more details or compare it with something?",
    products: [5]
  },
  "laptop for coding": {
    response: "For coding, the **Apple MacBook Air M2 at ₹99,900** is outstanding. The M2 chip compiles code blazing fast, the 18-hour battery means you never hunt for outlets, and the silent fanless design is perfect for offices. VS Code, Xcode, and terminal all run flawlessly. Downside — only 2 ports, so grab a hub. Want specs or alternatives?",
    products: [2]
  },
  "compare headphones airpods": {
    response: "Great question! Comparing the **Sony WH-1000XM5 (₹24,990)** vs AirPods Max (₹59,900): Sony wins on noise cancellation and battery (30hrs vs 20hrs). AirPods Max wins on Apple ecosystem integration and premium build (aluminum vs plastic). For non-Apple users, Sony is the clear winner at less than half the price. Which matters more to you — noise cancellation or ecosystem?",
    products: [1]
  },
  "best battery life": {
    response: "Top battery life products: **Kindle Paperwhite** wins with 10 **weeks** (insane!), followed by **Logitech MX Master 3S Mouse** at 70 days. For headphones, **Sony WH-1000XM5** gives 30 hours. For fitness, **Fitbit Charge 6** lasts 7 days. The Kindle is genuinely unmatched for battery — you charge it monthly.",
    products: [6, 10, 1, 4]
  },
  "summarize reviews": {
    response: "Here's the sentiment snapshot: **Sony headphones** 92% positive — people love the noise cancellation. **Kindle** 96% positive — best-rated product on the page. **MacBook Air** 95% positive — M2 performance wows everyone. **boAt headphones** 79% positive — great value but build quality concerns. Want detailed reviews for any specific product?",
    products: [1, 10, 2, 8]
  },
  "worth the price": {
    response: "Based on AI review analysis: Best value right now is **boAt Rockerz 450 at ₹1,299** (₹2,691 off!). Premium pick that's worth every rupee — **Logitech MX Master 3S** at ₹8,495. Hidden gem — **Instant Pot at ₹6,499** replaces 7 appliances. Overpriced for casual users — the Dyson V15. What's your budget range?",
    products: [8, 6, 3, 9]
  },
  "kitchen appliances": {
    response: "Top-rated kitchen appliances I see: **Instant Pot Duo 7-in-1 at ₹6,499** is the star — rated 4.5 stars with 12,847 reviews. It replaces your pressure cooker, slow cooker, and rice cooker in one. 35% off right now is a great deal. The **Whirlpool AC at ₹36,990** is also great for summer. Want me to find more kitchen-specific items?",
    products: [3]
  },
  "fewer complaints": {
    response: "Products with fewest complaints based on AI review analysis: **Kindle Paperwhite** (only minor complaint: slower page turns), **MacBook Air M2** (complaints mainly about limited ports — easy to work around), **Logitech MX Master 3S** (right-hand only is the main gripe). The Kindle genuinely has almost no real complaints — it's near-perfect at what it does.",
    products: [10, 2, 6]
  },
  "default": {
    response: "I'm your AI Shopping Copilot! I can help you find the best products, compare options, summarize reviews, and give personalized recommendations. Try asking me: 'Find gaming headphones under ₹5000', 'Is the MacBook good for coding?', or 'Which product has the best battery life?' What are you shopping for today?",
    products: []
  }
};

export const categories = [
  { name: "All", count: 12 },
  { name: "Electronics", count: 6 },
  { name: "Home Appliances", count: 3 },
  { name: "Fitness", count: 1 },
  { name: "Gaming", count: 2 },
  { name: "Office Accessories", count: 1 },
];

export const suggestedSearches = [
  "Gaming mouse under ₹3000",
  "Best wireless earbuds",
  "4K TV under ₹50000",
  "Air purifier for home",
  "Standing desk accessories",
  "Mechanical keyboard",
  "Portable SSD",
  "Smart home devices"
];

export const trendingSearches = [
  "Sony headphones",
  "MacBook Air M2",
  "Instant Pot",
  "Gaming chair",
  "Kindle Paperwhite"
];
