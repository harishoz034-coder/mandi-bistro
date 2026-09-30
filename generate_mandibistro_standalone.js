const fs = require('fs');
const path = require('path');

const projectDir = 'C:\\Users\\haris\\.gemini\\antigravity\\scratch\\mandi-bistro';
const imagesDir = path.join(projectDir, 'public', 'images');
const outputHtmlPath = 'C:\\Users\\haris\\Downloads\\mandi-bistro.html';
const artifactHtmlPath = 'C:\\Users\\haris\\.gemini\\antigravity\\brain\\23f98256-8721-42b1-9de6-55b0debcd5d0\\mandi-bistro.html';

// Helper to convert local image to base64 data URI
function getBase64Image(filename) {
  const filePath = path.join(imagesDir, filename);
  if (fs.existsSync(filePath)) {
    const ext = path.extname(filename).toLowerCase().replace('.', '');
    let mimeType = 'image/jpeg';
    if (ext === 'png') mimeType = 'image/png';
    if (ext === 'webp') mimeType = 'image/webp';
    const base64Data = fs.readFileSync(filePath).toString('base64');
    return `data:${mimeType};base64,${base64Data}`;
  }
  return '';
}

console.log('Encoding authentic Zomato images to Base64...');
const imgHero = getBase64Image('mandi_bistro_main_hero.jpg');
const imgAmbience1 = getBase64Image('mandi_bistro_ambience_1.jpg');
const imgAmbience2 = getBase64Image('mandi_bistro_ambience_2.jpg');
const imgAmbience3 = getBase64Image('mandi_bistro_ambience_3.jpg');
const imgAmbience4 = getBase64Image('mandi_bistro_ambience_4.jpg');

const imgDish1 = getBase64Image('mandi_bistro_dish_1.jpg');
const imgDish2 = getBase64Image('mandi_bistro_dish_2.jpg');
const imgDish3 = getBase64Image('mandi_bistro_dish_3.jpg');
const imgDish4 = getBase64Image('mandi_bistro_dish_4.jpg');
const imgDish5 = getBase64Image('mandi_bistro_dish_5.jpg');
const imgDish6 = getBase64Image('mandi_bistro_dish_6.jpg');
const imgDish7 = getBase64Image('mandi_bistro_dish_7.jpg');
const imgDish8 = getBase64Image('mandi_bistro_dish_8.jpg');
const imgDish9 = getBase64Image('mandi_bistro_dish_9.jpg');
const imgDish10 = getBase64Image('mandi_bistro_dish_10.jpg');
const imgDish11 = getBase64Image('mandi_bistro_dish_11.jpg');
const imgDish12 = getBase64Image('mandi_bistro_dish_12.jpg');
const imgDish13 = getBase64Image('mandi_bistro_dish_13.jpg');
const imgDish14 = getBase64Image('mandi_bistro_dish_14.jpg');
const imgDish15 = getBase64Image('mandi_bistro_dish_15.jpg');

const menuData = [
  // Signature Mandi Feasts
  { id: 'mb1', name: 'Mandi Bistro Special Mutton Juicy Mandi', category: 'signature-mandi', price: 499, originalPrice: 549, description: 'Our house-special slow-cooked succulent lamb shanks with rich glistening spicy gravy over aromatic saffron mandi rice with roasted nuts.', isVeg: false, isBestseller: true, isSpecial: true, portion: 'Serves 1-2', image: imgDish1 },
  { id: 'mb2', name: 'Arabian Al-Faham Char-Grilled Chicken Mandi', category: 'signature-mandi', price: 369, originalPrice: 399, description: 'Smoky charcoal-grilled whole spiced chicken served over fragrant long-grain basmati rice with authentic garlic toum dip and tomato salsa.', isVeg: false, isBestseller: true, isSpecial: true, portion: 'Serves 1-2', image: imgDish2 },
  { id: 'mb3', name: 'Bistro Grand Mixed Meat Feast Mandi (Jumbo)', category: 'signature-mandi', price: 1299, originalPrice: 1449, description: 'Royal 4-person feast loaded with mutton juicy shanks, crispy chicken, boiled eggs, fried cashews, and rich mutton broth.', isVeg: false, isBestseller: true, isSpecial: true, portion: 'Serves 4 (Jumbo)', image: imgDish3 },
  { id: 'mb4', name: 'Royal Arabian Laham Mandi (Roast Lamb)', category: 'signature-mandi', price: 529, description: 'Traditional slow-roasted fall-off-the-bone lamb shoulder served over spiced smoked basmati rice with caramelized onions.', isVeg: false, isBestseller: true, portion: 'Serves 1-2', image: imgDish4 },

  // Mutton & Lamb Mandi
  { id: 'mm1', name: 'Mutton Fry Mandi', category: 'mutton-mandi', price: 469, description: 'Crispy spiced tender mutton chunks pan-tossed with curry leaves and black pepper, served on golden saffron mandi rice.', isVeg: false, isBestseller: true, portion: 'Serves 1-2', image: imgDish5 },
  { id: 'mm2', name: 'Mutton Roast Mandi (Yemeni Style)', category: 'mutton-mandi', price: 489, description: 'Tender marinated mutton slow-roasted in traditional spices over fragrant long basmati grains.', isVeg: false, portion: 'Serves 1-2', image: imgDish6 },
  { id: 'mm3', name: 'Mini Mutton Juicy Mandi (Single)', category: 'mutton-mandi', price: 279, description: 'Single portion of our famous tender juicy mutton on steaming basmati rice with salsa and soup.', isVeg: false, portion: 'Single Portion', image: imgDish7 },

  // Chicken Mandi
  { id: 'cm1', name: 'Chicken Juicy Mandi (Full Platter)', category: 'chicken-mandi', price: 349, originalPrice: 389, description: 'Succulent chicken pieces cooked in thick flavorful gravy served over steaming spiced mandi rice.', isVeg: false, isBestseller: true, portion: 'Serves 1-2', image: imgDish8 },
  { id: 'cm2', name: 'BBQ Spicy Chicken Mandi', category: 'chicken-mandi', price: 379, description: 'Grilled chicken glazed with smoky Arabian BBQ sauce served on saffron-tinted basmati rice.', isVeg: false, isBestseller: true, portion: 'Serves 1-2', image: imgDish9 },
  { id: 'cm3', name: 'Crispy Fried Chicken Mandi', category: 'chicken-mandi', price: 359, description: 'Golden crispy chicken pieces seasoned with secret spices over traditional aromatic mandi rice.', isVeg: false, portion: 'Serves 1-2', image: imgDish10 },
  { id: 'cm4', name: 'Mini Chicken Al-Faham Mandi', category: 'chicken-mandi', price: 199, description: 'Pocket-friendly single portion char-grilled chicken served with aromatic rice, soup, and tomato salsa.', isVeg: false, portion: 'Single Portion', image: imgDish11 },

  // Seafood & Fish Mandi
  { id: 'sf1', name: 'Tawa Fried Arabian Fish Mandi', category: 'seafood-mandi', price: 449, description: 'Whole crispy seasoned fish fillet cooked on a traditional griddle, served on golden mandi rice with lemon wedges.', isVeg: false, isBestseller: true, portion: 'Serves 1-2', image: imgDish12 },
  { id: 'sf2', name: 'Royal Arabian King Prawns Mandi', category: 'seafood-mandi', price: 489, description: 'Garlic butter tossed king prawns seasoned with Middle Eastern spices over steaming saffron mandi rice.', isVeg: false, isBestseller: true, portion: 'Serves 1-2', image: imgDish13 },

  // Hyderabadi Dum Biryani
  { id: 'bi1', name: 'Bistro Special Mutton Dum Biryani', category: 'biryani-rice', price: 380, originalPrice: 420, description: 'Authentic Hyderabadi kachchi gosht dum biryani with long basmati grains, saffron, and tender mutton chunks.', isVeg: false, isBestseller: true, portion: 'Serves 1-2', image: imgDish14 },
  { id: 'bi2', name: 'Hyderabadi Chicken Dum Biryani', category: 'biryani-rice', price: 260, description: 'Rich spiced chicken dum biryani infused with pure ghee, mint, and fried onions.', isVeg: false, isBestseller: true, portion: 'Serves 1-2', image: imgDish15 },
  { id: 'bi3', name: 'Paneer Tikka Vegetarian Mandi', category: 'biryani-rice', price: 289, description: 'Tandoori spiced paneer cubes charred to perfection over aromatic vegetarian saffron rice.', isVeg: true, isBestseller: true, portion: 'Serves 1-2' },

  // Chinese & Appetizers
  { id: 'ch1', name: 'Classic Chicken 65 (Hyderabadi Style)', category: 'chinese-starters', price: 249, description: 'Deep-fried battered chicken tossed with spicy red chilli sauce, curry leaves, and yogurt.', isVeg: false, isBestseller: true, portion: 'Serves 1-2' },
  { id: 'ch2', name: 'Crispy Chilli Chicken (Indo-Chinese)', category: 'chinese-starters', price: 249, description: 'Crispy diced chicken tossed with capsicum, spring onions, and garlic in dark soya chilli sauce.', isVeg: false, portion: 'Serves 1-2' },
  { id: 'ch3', name: 'Veg Manchurian Dry / Gravy', category: 'chinese-starters', price: 199, description: 'Vegetable dumplings tossed in tangy ginger-garlic soya sauce with fresh cilantro.', isVeg: true, portion: 'Serves 1-2' },

  // Kunafa & Beverages
  { id: 'db1', name: 'Shahi Stretchy Cheese Kunafa', category: 'desserts-beverages', price: 219, originalPrice: 249, description: 'Warm crispy shredded kataifi crust filled with molten cheese, soaked in rose syrup and crushed pistachios.', isVeg: true, isBestseller: true, isSpecial: true, portion: 'Serves 1-2' },
  { id: 'db2', name: 'Special Arabian Sulaimani Tea', category: 'desserts-beverages', price: 40, description: 'Golden spiced black tea brewed with cardamom, mint, and lemon.', isVeg: true, portion: '1 Glass' },
  { id: 'db3', name: 'Fresh Mint Lime Cooler', category: 'desserts-beverages', price: 70, description: 'Refreshing chilled lime soda with crushed fresh mint leaves.', isVeg: true, portion: '300 ml' }
];

const htmlContent = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mandi Bistro | Authentic Arabian Mandi & Biryani • Madhapur, Hyderabad</title>
  <meta name="description" content="Experience royal Arabian Mandi dining at Mandi Bistro Madhapur. Signature Mutton Juicy Mandi, Al-Faham Char-Grilled Chicken, Laham Mandi, Fish Mandi & Late Night Dining till 2:30 AM.">
  
  <!-- Google Fonts: Playfair Display & Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700&display=swap" rel="stylesheet">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            burgundy: {
              50: '#FDF2F3',
              100: '#FCE7E9',
              200: '#F7C5CA',
              300: '#F099A3',
              600: '#A41E30',
              700: '#7E1725',
              800: '#63111C',
              900: '#480B13',
              950: '#2A060B',
            },
            gold: {
              400: '#DFC280',
              500: '#C5A05A',
              600: '#A6823B',
            },
            charcoal: {
              100: '#F3F4F6',
              200: '#E5E7EB',
              300: '#D1D5DB',
              400: '#9CA3AF',
              500: '#6B7280',
              600: '#4B5563',
              700: '#374151',
              800: '#1F2937',
              900: '#111827',
              950: '#0B0F19',
            },
            alabaster: {
              50: '#FAF8F5',
              100: '#F5F2EC',
              200: '#ECE6DC',
            },
            ivory: {
              50: '#FDFCF9',
              100: '#FAF7F0',
            }
          },
          fontFamily: {
            serif: ['"Playfair Display"', 'Georgia', 'serif'],
            sans: ['"Inter"', 'system-ui', 'sans-serif'],
          }
        }
      }
    }
  </script>
  <style>
    body {
      background-color: #FAF8F5;
      color: #111827;
      font-family: 'Inter', sans-serif;
    }
    .font-serif {
      font-family: 'Playfair Display', Georgia, serif;
    }
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  </style>
</head>
<body class="antialiased min-h-screen flex flex-col">

  <!-- TOP BRAND NAVBAR (Exact Amogha Pure White & Burgundy Accents) -->
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-charcoal-200/80 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
      
      <!-- Brand Title (Exact Amogha Font & Single Line) -->
      <a href="#" class="flex items-center gap-2">
        <span class="font-serif text-2xl sm:text-3xl font-black text-burgundy-700 tracking-tight whitespace-nowrap">
          MANDI BISTRO
        </span>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center gap-7 text-sm font-semibold text-charcoal-700">
        <a href="#menu" class="hover:text-burgundy-700 transition">Our Menu</a>
        <a href="#specialities" class="hover:text-burgundy-700 transition">Specialities</a>
        <a href="#about" class="hover:text-burgundy-700 transition">About</a>
        <a href="#gallery" class="hover:text-burgundy-700 transition">Ambience</a>
        <a href="#offers" class="hover:text-burgundy-700 transition">Offers</a>
        <a href="#location" class="hover:text-burgundy-700 transition">Location</a>
      </nav>

      <!-- Action Buttons -->
      <div class="hidden sm:flex items-center gap-3">
        <a href="tel:+918143271516" class="px-4 py-2 rounded-full border border-charcoal-300 text-charcoal-800 hover:bg-alabaster-100 font-bold text-xs transition">
          📞 +91 81432 71516
        </a>
        <a href="https://www.zomato.com/hyderabad/mandi-bistro-madhapur/book" target="_blank" rel="noopener noreferrer" class="px-4 py-2.5 rounded-full bg-gold-500 hover:bg-gold-600 text-burgundy-950 font-bold text-xs shadow-sm transition transform hover:-translate-y-0.5">
          Book Table (15% OFF)
        </a>
        <a href="https://www.zomato.com/hyderabad/mandi-bistro-madhapur/order" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-full bg-burgundy-700 hover:bg-burgundy-800 text-white font-bold text-xs shadow-sm transition transform hover:-translate-y-0.5">
          Order on Zomato
        </a>
      </div>

      <!-- Mobile Hamburger Button -->
      <button id="mobileMenuBtn" class="md:hidden p-2 text-charcoal-700 focus:outline-none" onclick="toggleMobileMenu()">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div id="mobileMenu" class="hidden md:hidden bg-white border-b border-charcoal-200 px-4 py-4 space-y-3">
      <a href="#menu" onclick="toggleMobileMenu()" class="block text-sm font-semibold text-charcoal-700 py-1">Our Menu</a>
      <a href="#specialities" onclick="toggleMobileMenu()" class="block text-sm font-semibold text-charcoal-700 py-1">Specialities</a>
      <a href="#about" onclick="toggleMobileMenu()" class="block text-sm font-semibold text-charcoal-700 py-1">About Mandi Bistro</a>
      <a href="#gallery" onclick="toggleMobileMenu()" class="block text-sm font-semibold text-charcoal-700 py-1">Ambience Gallery</a>
      <a href="#offers" onclick="toggleMobileMenu()" class="block text-sm font-semibold text-charcoal-700 py-1">Dining Offers</a>
      <a href="#location" onclick="toggleMobileMenu()" class="block text-sm font-semibold text-charcoal-700 py-1">Location & Contact</a>
      <div class="pt-2 flex flex-col gap-2">
        <a href="tel:+918143271516" class="text-center py-2.5 rounded-full border border-charcoal-300 text-charcoal-800 font-bold text-xs">
          📞 +91 81432 71516
        </a>
        <a href="https://www.zomato.com/hyderabad/mandi-bistro-madhapur/book" target="_blank" class="text-center py-2.5 rounded-full bg-gold-500 text-burgundy-950 font-bold text-xs">
          Book Table (15% OFF)
        </a>
        <a href="https://www.zomato.com/hyderabad/mandi-bistro-madhapur/order" target="_blank" class="text-center py-2.5 rounded-full bg-burgundy-700 text-white font-bold text-xs">
          Order on Zomato
        </a>
      </div>
    </div>
  </header>

  <main class="flex-grow pt-[72px]">

    <!-- HERO SECTION (Exact Amogha Proportions, Single-Line Title, Authentic Zomato Ambience Photo) -->
    <section class="relative min-h-[72vh] lg:min-h-[78vh] flex items-center justify-center pt-12 pb-14 sm:pt-16 sm:pb-16 lg:pt-16 lg:pb-18 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <!-- Background Image: Real Zomato Photo -->
      <div class="absolute inset-0 z-0 bg-ivory-100">
        <img src="${imgHero}" alt="Mandi Bistro Ambience Madhapur" class="w-full h-full object-cover brightness-[0.88] contrast-[1.04]" />
        <!-- Amogha Luxury Light Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-alabaster-100/95 via-alabaster-100/80 to-alabaster-100/60"></div>
        <div class="absolute inset-0 bg-white/30"></div>
      </div>

      <div class="relative z-10 max-w-5xl sm:max-w-6xl mx-auto text-center flex flex-col items-center">
        <!-- Eyebrow Pill Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-burgundy-200/80 text-burgundy-700 text-xs sm:text-sm font-bold tracking-widest uppercase mb-5 shadow-sm backdrop-blur-md">
          <span>✨ Top-Rated Arabian Mandi • Madhapur</span>
          <span class="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
          <span>Hyderabad</span>
        </div>

        <!-- Single-Line Heading (Exact Amogha Font & Placement) -->
        <h1 class="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-burgundy-700 tracking-tight leading-none mb-4 whitespace-nowrap drop-shadow-sm">
          MANDI BISTRO
        </h1>

        <p class="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl text-charcoal-800 font-semibold max-w-2xl mb-3 leading-snug">
          Authentic Arabian Mandi, Juicy Mutton & Late Night Feasts
        </p>

        <p class="text-xs sm:text-sm md:text-base text-charcoal-600 font-normal leading-relaxed max-w-2xl mb-7">
          Madhapur's favourite destination for slow-cooked Mutton Juicy Mandi, smoky Al-Faham chicken, royal family majlis platters, and midnight cravings open till 2:30 AM.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md sm:max-w-none mb-8">
          <a href="#menu" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-burgundy-700 hover:bg-burgundy-800 text-white font-bold text-sm shadow-md transition transform hover:-translate-y-0.5">
            Explore Menu (35+ Dishes) →
          </a>
          <a href="https://www.zomato.com/hyderabad/mandi-bistro-madhapur/book" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gold-500 hover:bg-gold-600 text-burgundy-950 font-bold text-sm shadow-md transition transform hover:-translate-y-0.5">
            📅 Book Table (Flat 15% OFF)
          </a>
          <a href="https://www.zomato.com/hyderabad/mandi-bistro-madhapur/order" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-ivory-50 text-charcoal-800 border border-charcoal-200 font-semibold text-sm shadow-sm transition">
            🛍️ Order on Zomato
          </a>
        </div>

        <!-- Hero Information Chips -->
        <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-semibold text-charcoal-700">
          <span class="px-3.5 py-1.5 rounded-full bg-white/90 border border-charcoal-200/80 shadow-sm flex items-center gap-1.5">
            ⭐ 4.4 Rating (1,953+ Reviews)
          </span>
          <span class="px-3.5 py-1.5 rounded-full bg-white/90 border border-charcoal-200/80 shadow-sm flex items-center gap-1.5">
            🍖 Signature Mutton Juicy Mandi
          </span>
          <span class="px-3.5 py-1.5 rounded-full bg-white/90 border border-charcoal-200/80 shadow-sm flex items-center gap-1.5">
            🔥 Smoky Al-Faham BBQ
          </span>
          <span class="px-3.5 py-1.5 rounded-full bg-white/90 border border-charcoal-200/80 shadow-sm flex items-center gap-1.5">
            🌙 Open Till 2:30 AM (Late Night)
          </span>
        </div>
      </div>
    </section>

    <!-- QUICK INFO STRIP (4-Column Amogha Operational Facts) -->
    <section class="bg-white border-y border-charcoal-200/80 py-8 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="flex items-start gap-4 p-4 rounded-xl bg-alabaster-50/70 border border-charcoal-100">
            <div class="w-12 h-12 rounded-xl bg-burgundy-50 border border-burgundy-100 flex items-center justify-center shrink-0 text-burgundy-700 text-xl">
              🍲
            </div>
            <div>
              <h3 class="text-xs font-bold uppercase tracking-wider text-burgundy-700 mb-1">Cuisine & Specialities</h3>
              <p class="text-sm font-bold text-charcoal-900 leading-snug">Biryani, Mandi, Arabic & Chinese</p>
              <p class="text-xs text-charcoal-500 mt-0.5">Juicy Mutton, Al-Faham & Arabian Feasts</p>
            </div>
          </div>

          <div class="flex items-start gap-4 p-4 rounded-xl bg-alabaster-50/70 border border-charcoal-100">
            <div class="w-12 h-12 rounded-xl bg-burgundy-50 border border-burgundy-100 flex items-center justify-center shrink-0 text-burgundy-700 text-xl">
              ⏰
            </div>
            <div>
              <h3 class="text-xs font-bold uppercase tracking-wider text-burgundy-700 mb-1">Dining Hours & Late Night</h3>
              <p class="text-sm font-bold text-charcoal-900 leading-snug">12:00 Noon – 2:30 AM Daily</p>
              <p class="text-xs text-charcoal-500 mt-0.5">Open continuously till 2:30 AM every day</p>
            </div>
          </div>

          <div class="flex items-start gap-4 p-4 rounded-xl bg-alabaster-50/70 border border-charcoal-100">
            <div class="w-12 h-12 rounded-xl bg-burgundy-50 border border-burgundy-100 flex items-center justify-center shrink-0 text-burgundy-700 text-xl">
              ₹
            </div>
            <div>
              <h3 class="text-xs font-bold uppercase tracking-wider text-burgundy-700 mb-1">Cost for Two</h3>
              <p class="text-sm font-bold text-charcoal-900 leading-snug">₹800 for two people (approx.)</p>
              <p class="text-xs text-charcoal-500 mt-0.5">Generous value feast platters</p>
            </div>
          </div>

          <div class="flex items-start gap-4 p-4 rounded-xl bg-alabaster-50/70 border border-charcoal-100">
            <div class="w-12 h-12 rounded-xl bg-burgundy-50 border border-burgundy-100 flex items-center justify-center shrink-0 text-burgundy-700 text-xl">
              📍
            </div>
            <div>
              <h3 class="text-xs font-bold uppercase tracking-wider text-burgundy-700 mb-1">Madhapur Location</h3>
              <p class="text-sm font-bold text-charcoal-900 leading-snug">Premier Building, 1st Floor</p>
              <p class="text-xs text-charcoal-500 mt-0.5">Plot 35, 36, Survey 76, Madhapur</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CHEF SPECIALITIES / RECOMMENDATIONS -->
    <section id="specialities" class="py-16 sm:py-20 bg-ivory-50/60 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-14">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-700 text-xs font-bold tracking-widest uppercase mb-3">
            <span>✨ Chef's Signature Recommendations</span>
          </div>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight mb-4">
            Authentic Arabian Mandi Delicacies
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed">
            Slow-cooked over fragrant long-grain basmati with Yemeni spices, succulent meat reductions, and smoky charcoal grills.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <!-- Dish 1 -->
          <div class="bg-white rounded-2xl overflow-hidden border border-charcoal-200/80 shadow-sm hover:shadow-xl hover:border-burgundy-300 transition-all duration-300 flex flex-col group">
            <div class="relative h-56 w-full overflow-hidden bg-charcoal-100">
              <img src="${imgDish1}" alt="Mandi Bistro Special Mutton Juicy Mandi" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div class="absolute top-3 left-3 flex gap-1.5">
                <span class="px-2.5 py-1 rounded-full bg-burgundy-700 text-white text-[11px] font-bold uppercase tracking-wider">Bestseller</span>
                <span class="px-2.5 py-1 rounded-full bg-gold-500 text-burgundy-950 text-[11px] font-bold uppercase tracking-wider">Must Try</span>
              </div>
              <span class="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-charcoal-950/80 text-white text-[11px]">Serves 1-2</span>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="font-serif text-lg font-bold text-charcoal-900 group-hover:text-burgundy-700 transition mb-2">Mandi Bistro Special Mutton Juicy Mandi</h3>
                <p class="text-xs sm:text-sm text-charcoal-600 line-clamp-2 mb-4">Our house-special slow-cooked succulent lamb shanks with rich glistening spicy gravy over aromatic saffron mandi rice with roasted nuts.</p>
              </div>
              <div class="pt-4 border-t border-charcoal-100 flex items-center justify-between">
                <div class="flex items-baseline gap-2">
                  <span class="text-xl font-black text-burgundy-700">₹499</span>
                  <span class="text-xs text-charcoal-400 line-through">₹549</span>
                </div>
                <a href="https://www.zomato.com/hyderabad/mandi-bistro-madhapur/order" target="_blank" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-burgundy-50 hover:bg-burgundy-700 text-burgundy-700 hover:text-white text-xs font-bold transition">
                  🛍️ Order Now
                </a>
              </div>
            </div>
          </div>

          <!-- Dish 2 -->
          <div class="bg-white rounded-2xl overflow-hidden border border-charcoal-200/80 shadow-sm hover:shadow-xl hover:border-burgundy-300 transition-all duration-300 flex flex-col group">
            <div class="relative h-56 w-full overflow-hidden bg-charcoal-100">
              <img src="${imgDish2}" alt="Arabian Al-Faham Char-Grilled Chicken Mandi" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div class="absolute top-3 left-3 flex gap-1.5">
                <span class="px-2.5 py-1 rounded-full bg-burgundy-700 text-white text-[11px] font-bold uppercase tracking-wider">Bestseller</span>
                <span class="px-2.5 py-1 rounded-full bg-gold-500 text-burgundy-950 text-[11px] font-bold uppercase tracking-wider">Must Try</span>
              </div>
              <span class="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-charcoal-950/80 text-white text-[11px]">Serves 1-2</span>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="font-serif text-lg font-bold text-charcoal-900 group-hover:text-burgundy-700 transition mb-2">Arabian Al-Faham Char-Grilled Chicken Mandi</h3>
                <p class="text-xs sm:text-sm text-charcoal-600 line-clamp-2 mb-4">Smoky charcoal-grilled whole spiced chicken served over fragrant long-grain basmati rice with authentic garlic toum dip and tomato salsa.</p>
              </div>
              <div class="pt-4 border-t border-charcoal-100 flex items-center justify-between">
                <div class="flex items-baseline gap-2">
                  <span class="text-xl font-black text-burgundy-700">₹369</span>
                  <span class="text-xs text-charcoal-400 line-through">₹399</span>
                </div>
                <a href="https://www.zomato.com/hyderabad/mandi-bistro-madhapur/order" target="_blank" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-burgundy-50 hover:bg-burgundy-700 text-burgundy-700 hover:text-white text-xs font-bold transition">
                  🛍️ Order Now
                </a>
              </div>
            </div>
          </div>

          <!-- Dish 3 -->
          <div class="bg-white rounded-2xl overflow-hidden border border-charcoal-200/80 shadow-sm hover:shadow-xl hover:border-burgundy-300 transition-all duration-300 flex flex-col group">
            <div class="relative h-56 w-full overflow-hidden bg-charcoal-100">
              <img src="${imgDish3}" alt="Bistro Grand Mixed Meat Feast Mandi" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div class="absolute top-3 left-3 flex gap-1.5">
                <span class="px-2.5 py-1 rounded-full bg-burgundy-700 text-white text-[11px] font-bold uppercase tracking-wider">Jumbo Feast</span>
                <span class="px-2.5 py-1 rounded-full bg-gold-500 text-burgundy-950 text-[11px] font-bold uppercase tracking-wider">Must Try</span>
              </div>
              <span class="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-charcoal-950/80 text-white text-[11px]">Serves 4 (Jumbo)</span>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="font-serif text-lg font-bold text-charcoal-900 group-hover:text-burgundy-700 transition mb-2">Bistro Grand Mixed Meat Feast Mandi (Jumbo)</h3>
                <p class="text-xs sm:text-sm text-charcoal-600 line-clamp-2 mb-4">Royal 4-person feast loaded with mutton juicy shanks, crispy chicken, boiled eggs, fried cashews, and rich mutton broth.</p>
              </div>
              <div class="pt-4 border-t border-charcoal-100 flex items-center justify-between">
                <div class="flex items-baseline gap-2">
                  <span class="text-xl font-black text-burgundy-700">₹1,299</span>
                  <span class="text-xs text-charcoal-400 line-through">₹1,449</span>
                </div>
                <a href="https://www.zomato.com/hyderabad/mandi-bistro-madhapur/order" target="_blank" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-burgundy-50 hover:bg-burgundy-700 text-burgundy-700 hover:text-white text-xs font-bold transition">
                  🛍️ Order Now
                </a>
              </div>
            </div>
          </div>

          <!-- Dish 4 -->
          <div class="bg-white rounded-2xl overflow-hidden border border-charcoal-200/80 shadow-sm hover:shadow-xl hover:border-burgundy-300 transition-all duration-300 flex flex-col group">
            <div class="relative h-56 w-full overflow-hidden bg-charcoal-100">
              <img src="${imgDish4}" alt="Royal Arabian Laham Mandi" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div class="absolute top-3 left-3 flex gap-1.5">
                <span class="px-2.5 py-1 rounded-full bg-burgundy-700 text-white text-[11px] font-bold uppercase tracking-wider">Chef Special</span>
              </div>
              <span class="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-charcoal-950/80 text-white text-[11px]">Serves 1-2</span>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="font-serif text-lg font-bold text-charcoal-900 group-hover:text-burgundy-700 transition mb-2">Royal Arabian Laham Mandi (Roast Lamb)</h3>
                <p class="text-xs sm:text-sm text-charcoal-600 line-clamp-2 mb-4">Traditional slow-roasted fall-off-the-bone lamb shoulder served over spiced smoked basmati rice with caramelized onions.</p>
              </div>
              <div class="pt-4 border-t border-charcoal-100 flex items-center justify-between">
                <span class="text-xl font-black text-burgundy-700">₹529</span>
                <a href="https://www.zomato.com/hyderabad/mandi-bistro-madhapur/order" target="_blank" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-burgundy-50 hover:bg-burgundy-700 text-burgundy-700 hover:text-white text-xs font-bold transition">
                  🛍️ Order Now
                </a>
              </div>
            </div>
          </div>

          <!-- Dish 5 -->
          <div class="bg-white rounded-2xl overflow-hidden border border-charcoal-200/80 shadow-sm hover:shadow-xl hover:border-burgundy-300 transition-all duration-300 flex flex-col group">
            <div class="relative h-56 w-full overflow-hidden bg-charcoal-100">
              <img src="${imgDish5}" alt="Mutton Fry Mandi" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div class="absolute top-3 left-3 flex gap-1.5">
                <span class="px-2.5 py-1 rounded-full bg-burgundy-700 text-white text-[11px] font-bold uppercase tracking-wider">Bestseller</span>
              </div>
              <span class="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-charcoal-950/80 text-white text-[11px]">Serves 1-2</span>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="font-serif text-lg font-bold text-charcoal-900 group-hover:text-burgundy-700 transition mb-2">Mutton Fry Mandi</h3>
                <p class="text-xs sm:text-sm text-charcoal-600 line-clamp-2 mb-4">Crispy spiced tender mutton chunks pan-tossed with curry leaves and black pepper, served on golden saffron mandi rice.</p>
              </div>
              <div class="pt-4 border-t border-charcoal-100 flex items-center justify-between">
                <span class="text-xl font-black text-burgundy-700">₹469</span>
                <a href="https://www.zomato.com/hyderabad/mandi-bistro-madhapur/order" target="_blank" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-burgundy-50 hover:bg-burgundy-700 text-burgundy-700 hover:text-white text-xs font-bold transition">
                  🛍️ Order Now
                </a>
              </div>
            </div>
          </div>

          <!-- Dish 6 -->
          <div class="bg-white rounded-2xl overflow-hidden border border-charcoal-200/80 shadow-sm hover:shadow-xl hover:border-burgundy-300 transition-all duration-300 flex flex-col group">
            <div class="relative h-56 w-full overflow-hidden bg-charcoal-100">
              <img src="${imgDish8}" alt="Chicken Juicy Mandi" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div class="absolute top-3 left-3 flex gap-1.5">
                <span class="px-2.5 py-1 rounded-full bg-burgundy-700 text-white text-[11px] font-bold uppercase tracking-wider">Bestseller</span>
              </div>
              <span class="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-charcoal-950/80 text-white text-[11px]">Serves 1-2</span>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="font-serif text-lg font-bold text-charcoal-900 group-hover:text-burgundy-700 transition mb-2">Chicken Juicy Mandi (Full Platter)</h3>
                <p class="text-xs sm:text-sm text-charcoal-600 line-clamp-2 mb-4">Succulent chicken pieces cooked in thick flavorful gravy served over steaming spiced mandi rice.</p>
              </div>
              <div class="pt-4 border-t border-charcoal-100 flex items-center justify-between">
                <div class="flex items-baseline gap-2">
                  <span class="text-xl font-black text-burgundy-700">₹349</span>
                  <span class="text-xs text-charcoal-400 line-through">₹389</span>
                </div>
                <a href="https://www.zomato.com/hyderabad/mandi-bistro-madhapur/order" target="_blank" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-burgundy-50 hover:bg-burgundy-700 text-burgundy-700 hover:text-white text-xs font-bold transition">
                  🛍️ Order Now
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center">
          <a href="#menu" class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-burgundy-700 hover:bg-burgundy-800 text-white font-bold text-sm shadow-md transition transform hover:-translate-y-0.5">
            Explore Complete Menu →
          </a>
        </div>
      </div>
    </section>

    <!-- FULL INTERACTIVE MENU SECTION (Search + Category Filter + Veg/Non-Veg) -->
    <section id="menu" class="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-10">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-700 text-xs font-bold tracking-widest uppercase mb-3">
            <span>🍽️ Grand Arabian Dining Menu</span>
          </div>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight mb-4">
            Explore Mandi Bistro Offerings
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base">
            From single portions to royal 4-person jumbo majlis platters, savour the true taste of Yemen & Hyderabad.
          </p>
        </div>

        <!-- Search & Dietary Filter -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div class="relative w-full sm:w-80">
            <input
              id="menuSearchInput"
              type="text"
              placeholder="Search Mutton Mandi, Faham, Biryani..."
              oninput="filterMenu()"
              class="w-full pl-10 pr-4 py-2.5 rounded-full border border-charcoal-200 bg-alabaster-50 focus:bg-white focus:outline-none focus:border-burgundy-600 text-sm text-charcoal-900 transition"
            />
            <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal-400">🔍</span>
          </div>

          <div class="inline-flex p-1 rounded-full bg-alabaster-100 border border-charcoal-200 text-xs font-semibold">
            <button onclick="setDiet('all')" id="diet-all" class="diet-btn px-4 py-1.5 rounded-full bg-burgundy-700 text-white shadow-sm font-bold transition">
              All Items (${menuData.length})
            </button>
            <button onclick="setDiet('non-veg')" id="diet-non-veg" class="diet-btn px-4 py-1.5 rounded-full text-charcoal-600 hover:text-charcoal-900 transition">
              🔴 Non-Veg
            </button>
            <button onclick="setDiet('veg')" id="diet-veg" class="diet-btn px-4 py-1.5 rounded-full text-charcoal-600 hover:text-charcoal-900 transition">
              🟢 Pure Veg
            </button>
          </div>
        </div>

        <!-- Category Filter Pills -->
        <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-8 hide-scrollbar">
          <button onclick="setCategory('all')" id="cat-all" class="cat-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap bg-burgundy-700 text-white shadow-md shrink-0 transition">
            All Dishes
          </button>
          <button onclick="setCategory('signature-mandi')" id="cat-signature-mandi" class="cat-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap bg-alabaster-50 text-charcoal-700 border border-charcoal-200 shrink-0 hover:bg-alabaster-100 transition">
            Signature Mandi Feasts
          </button>
          <button onclick="setCategory('mutton-mandi')" id="cat-mutton-mandi" class="cat-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap bg-alabaster-50 text-charcoal-700 border border-charcoal-200 shrink-0 hover:bg-alabaster-100 transition">
            Mutton & Lamb Mandi
          </button>
          <button onclick="setCategory('chicken-mandi')" id="cat-chicken-mandi" class="cat-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap bg-alabaster-50 text-charcoal-700 border border-charcoal-200 shrink-0 hover:bg-alabaster-100 transition">
            Chicken Mandi
          </button>
          <button onclick="setCategory('seafood-mandi')" id="cat-seafood-mandi" class="cat-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap bg-alabaster-50 text-charcoal-700 border border-charcoal-200 shrink-0 hover:bg-alabaster-100 transition">
            Seafood & Fish Mandi
          </button>
          <button onclick="setCategory('biryani-rice')" id="cat-biryani-rice" class="cat-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap bg-alabaster-50 text-charcoal-700 border border-charcoal-200 shrink-0 hover:bg-alabaster-100 transition">
            Hyderabadi Dum Biryani
          </button>
          <button onclick="setCategory('chinese-starters')" id="cat-chinese-starters" class="cat-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap bg-alabaster-50 text-charcoal-700 border border-charcoal-200 shrink-0 hover:bg-alabaster-100 transition">
            Chinese & Appetizers
          </button>
          <button onclick="setCategory('desserts-beverages')" id="cat-desserts-beverages" class="cat-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap bg-alabaster-50 text-charcoal-700 border border-charcoal-200 shrink-0 hover:bg-alabaster-100 transition">
            Kunafa & Beverages
          </button>
        </div>

        <!-- Menu Items Grid Container -->
        <div id="menuGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Populated by JavaScript -->
        </div>
      </div>
    </section>

    <!-- ABOUT SECTION (Heritage, Majlis Seating & Late Night) -->
    <section id="about" class="py-16 sm:py-20 bg-ivory-50/70 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-6 relative">
            <div class="relative z-10 grid grid-cols-2 gap-4">
              <div class="space-y-4">
                <div class="rounded-2xl overflow-hidden shadow-md border border-charcoal-200">
                  <img src="${imgAmbience1}" alt="Mandi Bistro Majlis Floor Dining" class="w-full h-52 sm:h-64 object-cover" />
                </div>
                <div class="rounded-2xl overflow-hidden shadow-md border border-charcoal-200">
                  <img src="${imgAmbience3}" alt="Mandi Bistro Interior" class="w-full h-40 sm:h-48 object-cover" />
                </div>
              </div>
              <div class="space-y-4 pt-6">
                <div class="rounded-2xl overflow-hidden shadow-md border border-charcoal-200">
                  <img src="${imgAmbience2}" alt="Mandi Bistro Seating" class="w-full h-44 sm:h-52 object-cover" />
                </div>
                <div class="rounded-2xl overflow-hidden shadow-md border border-charcoal-200 bg-burgundy-700 text-white p-6 flex flex-col justify-center text-center">
                  <span class="font-serif text-3xl sm:text-4xl font-black text-gold-400 mb-1">4.4 ★</span>
                  <p class="text-xs uppercase tracking-widest font-semibold text-alabaster-100">1,953+ Dining Reviews</p>
                  <p class="text-[11px] text-alabaster-200 mt-2">Madhapur's Highest-Rated Late Night Mandi</p>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6">
            <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-700 text-xs font-bold tracking-widest uppercase mb-4">
              <span>✨ The Mandi Bistro Experience</span>
            </div>

            <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight mb-6 leading-tight">
              Authentic Arabian Feasts in the Heart of Madhapur
            </h2>

            <p class="text-charcoal-700 text-sm sm:text-base leading-relaxed mb-6">
              Located on the <strong>1st Floor, Premier Building, Madhapur</strong>, <strong>Mandi Bistro</strong> has earned over 1,950+ stellar reviews for serving authentic Middle Eastern Mandi. Featuring melt-in-mouth juicy mutton, smoky Al-Faham grilled chicken, and rich Yemeni rice served on traditional community majlis trays.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div class="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-charcoal-200/80">
                <span class="text-2xl">🔥</span>
                <div>
                  <h4 class="text-xs font-bold text-charcoal-900 mb-0.5">Authentic Yemeni Pit-Dum Method</h4>
                  <p class="text-[11px] text-charcoal-500">Slow-steamed spiced basmati rice and fall-apart tender mutton cooked using traditional Arabic pit techniques.</p>
                </div>
              </div>
              <div class="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-charcoal-200/80">
                <span class="text-2xl">👥</span>
                <div>
                  <h4 class="text-xs font-bold text-charcoal-900 mb-0.5">Private Majlis & Floor Dining</h4>
                  <p class="text-[11px] text-charcoal-500">Enjoy traditional Arabian dining on plush carpeted majlis setups designed for family gatherings & friends.</p>
                </div>
              </div>
              <div class="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-charcoal-200/80">
                <span class="text-2xl">🌙</span>
                <div>
                  <h4 class="text-xs font-bold text-charcoal-900 mb-0.5">Open Late Night till 2:30 AM</h4>
                  <p class="text-[11px] text-charcoal-500">Satisfy midnight hunger pangs with piping hot Mandi and sizzling char-grills in the heart of Madhapur.</p>
                </div>
              </div>
              <div class="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-charcoal-200/80">
                <span class="text-2xl">🏆</span>
                <div>
                  <h4 class="text-xs font-bold text-charcoal-900 mb-0.5">Exceptional Value & Portions</h4>
                  <p class="text-[11px] text-charcoal-500">Generous royal feast platters starting at just ₹800 for two people with rich soup and tomato salsa.</p>
                </div>
              </div>
            </div>

            <div class="flex items-center gap-4 text-xs font-bold text-burgundy-800">
              <span>✅ Halal Certified</span>
              <span>✅ Family Majlis Rooms</span>
              <span>✅ Open Till 2:30 AM</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- REAL AMBIENCE GALLERY (Authentic Zomato Restaurant Photos) -->
    <section id="gallery" class="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-700 text-xs font-bold tracking-widest uppercase mb-3">
            <span>📸 Authentic Dining Ambience</span>
          </div>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight mb-4">
            Experience Mandi Bistro
          </h2>
          <p class="text-charcoal-600 text-sm sm:text-base">
            Take a look inside our spacious dining halls and traditional Arabic Majlis booths designed for memorable gatherings.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div class="group relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-charcoal-200 shadow-sm hover:shadow-xl transition duration-300">
            <img src="${imgHero}" alt="Grand Dining Hall" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <span class="text-[11px] font-bold text-gold-400 uppercase tracking-wider block mb-1">Spacious Group Seating</span>
              <h4 class="font-serif text-lg font-bold text-white">Grand Dining Hall</h4>
            </div>
          </div>

          <div class="group relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-charcoal-200 shadow-sm hover:shadow-xl transition duration-300">
            <img src="${imgAmbience1}" alt="Traditional Majlis Cabins" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <span class="text-[11px] font-bold text-gold-400 uppercase tracking-wider block mb-1">Arabian Floor Seating</span>
              <h4 class="font-serif text-lg font-bold text-white">Traditional Majlis Cabins</h4>
            </div>
          </div>

          <div class="group relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-charcoal-200 shadow-sm hover:shadow-xl transition duration-300">
            <img src="${imgAmbience2}" alt="Family Dining Enclosures" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <span class="text-[11px] font-bold text-gold-400 uppercase tracking-wider block mb-1">Private & Comfortable</span>
              <h4 class="font-serif text-lg font-bold text-white">Family Dining Enclosures</h4>
            </div>
          </div>

          <div class="group relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-charcoal-200 shadow-sm hover:shadow-xl transition duration-300">
            <img src="${imgAmbience3}" alt="Warm Ambient Interiors" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <span class="text-[11px] font-bold text-gold-400 uppercase tracking-wider block mb-1">Middle Eastern Decor</span>
              <h4 class="font-serif text-lg font-bold text-white">Warm Ambient Interiors</h4>
            </div>
          </div>

          <div class="group relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-charcoal-200 shadow-sm hover:shadow-xl transition duration-300">
            <img src="${imgAmbience4}" alt="Late Night Dining Hall" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <span class="text-[11px] font-bold text-gold-400 uppercase tracking-wider block mb-1">Open till 2:30 AM</span>
              <h4 class="font-serif text-lg font-bold text-white">Late Night Dining Hall</h4>
            </div>
          </div>

          <div class="group relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-charcoal-200 shadow-sm hover:shadow-xl transition duration-300">
            <img src="${imgDish3}" alt="Grand Feast Table Setup" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <span class="text-[11px] font-bold text-gold-400 uppercase tracking-wider block mb-1">Royal Mandi Feasts</span>
              <h4 class="font-serif text-lg font-bold text-white">Grand Feast Table Setup</h4>
            </div>
          </div>
        </div>

        <div class="text-center">
          <a href="https://www.zomato.com/hyderabad/mandi-bistro-madhapur/photos" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-alabaster-50 hover:bg-alabaster-100 text-charcoal-800 border border-charcoal-300 font-bold text-sm shadow-sm transition">
            <span>View All Photos on Zomato ↗</span>
          </a>
        </div>
      </div>
    </section>

    <!-- OFFERS & PROMOTIONS (From Zomato Mandi Bistro Listing) -->
    <section id="offers" class="py-16 bg-ivory-50/70 px-4 sm:px-6 lg:px-8 border-t border-charcoal-200/80">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-700 text-xs font-bold tracking-widest uppercase mb-3">
            <span>🏷️ Special Deals & Savings</span>
          </div>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight mb-4">
            Exclusive Dining & Table Offers
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base">
            Take advantage of exclusive discounts when pre-booking your table or ordering online.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-2xl p-6 border border-charcoal-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-full bg-burgundy-50 text-burgundy-700 text-xs font-bold uppercase">Pre-Book Offer</span>
                <span class="text-xl">📅</span>
              </div>
              <h3 class="font-serif text-lg font-bold text-charcoal-900 mb-2">Flat 15% OFF on Dining Bill</h3>
              <p class="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6">Reserve your table or private majlis cabin on Zomato in advance. Valid for dinner dining (6:15 PM to 11:55 PM).</p>
            </div>
            <div class="pt-4 border-t border-charcoal-100 flex items-center justify-between">
              <span class="text-xs font-mono font-bold text-charcoal-700 bg-alabaster-100 px-2.5 py-1 rounded border border-charcoal-200">CODE: PREBOOK15</span>
              <a href="https://www.zomato.com/hyderabad/mandi-bistro-madhapur/book" target="_blank" class="text-xs font-bold text-burgundy-700 hover:text-burgundy-900">Book Table →</a>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-charcoal-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-full bg-burgundy-50 text-burgundy-700 text-xs font-bold uppercase">Bank Offer</span>
                <span class="text-xl">🏦</span>
              </div>
              <h3 class="font-serif text-lg font-bold text-charcoal-900 mb-2">25% OFF up to ₹5,000</h3>
              <p class="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6">Exclusive savings on dining bills using RBL Bank LUMIÈRE Credit Card and partner bank cards.</p>
            </div>
            <div class="pt-4 border-t border-charcoal-100 flex items-center justify-between">
              <span class="text-xs font-mono font-bold text-charcoal-700 bg-alabaster-100 px-2.5 py-1 rounded border border-charcoal-200">CODE: RBL25</span>
              <a href="https://www.zomato.com/hyderabad/mandi-bistro-madhapur" target="_blank" class="text-xs font-bold text-burgundy-700 hover:text-burgundy-900">Check Offers →</a>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-charcoal-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-full bg-burgundy-50 text-burgundy-700 text-xs font-bold uppercase">Exclusive Voucher</span>
                <span class="text-xl">🎟️</span>
              </div>
              <h3 class="font-serif text-lg font-bold text-charcoal-900 mb-2">FLAT ₹175 OFF Voucher</h3>
              <p class="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6">Receive an exclusive flat ₹175 discount voucher valid on your next dining bill payment via Zomato.</p>
            </div>
            <div class="pt-4 border-t border-charcoal-100 flex items-center justify-between">
              <span class="text-xs font-mono font-bold text-charcoal-700 bg-alabaster-100 px-2.5 py-1 rounded border border-charcoal-200">CODE: BISTRO175</span>
              <a href="https://www.zomato.com/hyderabad/mandi-bistro-madhapur" target="_blank" class="text-xs font-bold text-burgundy-700 hover:text-burgundy-900">View Offers →</a>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-charcoal-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-full bg-burgundy-50 text-burgundy-700 text-xs font-bold uppercase">Surprise Reward</span>
                <span class="text-xl">🎁</span>
              </div>
              <h3 class="font-serif text-lg font-bold text-charcoal-900 mb-2">Scratch Card on Every Bill</h3>
              <p class="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6">Get an instant surprise cashback / discount scratch card reward after every dining transaction.</p>
            </div>
            <div class="pt-4 border-t border-charcoal-100 flex items-center justify-between">
              <span class="text-xs font-mono font-bold text-charcoal-700 bg-alabaster-100 px-2.5 py-1 rounded border border-charcoal-200">CODE: SCRATCHCARD</span>
              <a href="https://www.zomato.com/hyderabad/mandi-bistro-madhapur" target="_blank" class="text-xs font-bold text-burgundy-700 hover:text-burgundy-900">View Rewards →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ORDER ONLINE & TABLE RESERVATIONS -->
    <section id="order" class="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-700 text-xs font-bold tracking-widest uppercase mb-3">
            <span>🛍️ Reservations & Orders</span>
          </div>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight mb-4">
            Reserve Your Majlis or Order Online
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base">
            Enjoy Mandi Bistro's celebrated cuisine at our Madhapur restaurant or delivered to your doorstep.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div class="p-6 rounded-2xl bg-alabaster-50/70 border border-charcoal-200 hover:border-burgundy-300 shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white border border-charcoal-200 text-charcoal-700">Flat 15% OFF</span>
              <h3 class="font-serif text-xl font-bold text-charcoal-900 mt-3 mb-1">Table & Majlis Booking</h3>
              <p class="text-xs font-semibold text-burgundy-700 mb-2">Pre-book on Zomato</p>
              <p class="text-xs text-charcoal-600 leading-relaxed mb-6">Reserve your private Arabian Majlis cabin or dining table in advance with flat 15% OFF on total bill.</p>
            </div>
            <a href="https://www.zomato.com/hyderabad/mandi-bistro-madhapur/book" target="_blank" class="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full font-bold text-xs shadow-sm bg-gold-500 hover:bg-gold-600 text-burgundy-950">
              Book a Table (15% OFF) →
            </a>
          </div>

          <div class="p-6 rounded-2xl bg-alabaster-50/70 border border-charcoal-200 hover:border-burgundy-300 shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white border border-charcoal-200 text-charcoal-700">Fast Delivery</span>
              <h3 class="font-serif text-xl font-bold text-charcoal-900 mt-3 mb-1">Zomato Delivery</h3>
              <p class="text-xs font-semibold text-burgundy-700 mb-2">Online Delivery & Takeaway</p>
              <p class="text-xs text-charcoal-600 leading-relaxed mb-6">Hot Mutton Juicy Mandi and Al-Faham chicken delivered quickly across Madhapur, Hitech City & Jubilee Hills.</p>
            </div>
            <a href="https://www.zomato.com/hyderabad/mandi-bistro-madhapur/order" target="_blank" class="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full font-bold text-xs shadow-sm bg-[#CB202D] hover:bg-[#b01a25] text-white">
              Order on Zomato →
            </a>
          </div>

          <div class="p-6 rounded-2xl bg-alabaster-50/70 border border-charcoal-200 hover:border-burgundy-300 shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white border border-charcoal-200 text-charcoal-700">Quick Delivery</span>
              <h3 class="font-serif text-xl font-bold text-charcoal-900 mt-3 mb-1">Swiggy Delivery</h3>
              <p class="text-xs font-semibold text-burgundy-700 mb-2">Doorstep Delivery</p>
              <p class="text-xs text-charcoal-600 leading-relaxed mb-6">Order your favourite Mandi Bistro feasts and biryanis comfortably through Swiggy with live GPS tracking.</p>
            </div>
            <a href="https://www.swiggy.com/restaurants/mandi-bistro-madhapur-hyderabad" target="_blank" class="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full font-bold text-xs shadow-sm bg-[#FC8019] hover:bg-[#e67312] text-white">
              Order on Swiggy →
            </a>
          </div>

          <div class="p-6 rounded-2xl bg-alabaster-50/70 border border-charcoal-200 hover:border-burgundy-300 shadow-sm flex flex-col justify-between">
            <div>
              <span class="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white border border-charcoal-200 text-charcoal-700">Direct Support</span>
              <h3 class="font-serif text-xl font-bold text-charcoal-900 mt-3 mb-1">Direct Phone Call</h3>
              <p class="text-xs font-semibold text-burgundy-700 mb-2">Group Bookings & Late Night</p>
              <p class="text-xs text-charcoal-600 leading-relaxed mb-6">Planning a party, family gathering, or late night feast? Call the restaurant team directly.</p>
            </div>
            <a href="tel:+918143271516" class="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full font-bold text-xs shadow-sm bg-charcoal-900 hover:bg-charcoal-800 text-white">
              Call +91 81432 71516 →
            </a>
          </div>
        </div>

        <!-- Late Night Banner -->
        <div class="p-6 rounded-2xl bg-burgundy-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div class="flex items-center gap-4 text-center md:text-left">
            <span class="text-3xl">🌙</span>
            <div>
              <h4 class="font-serif text-lg sm:text-xl font-bold text-white mb-0.5">
                Late Night Mandi Craving? Open Till 2:30 AM!
              </h4>
              <p class="text-xs sm:text-sm text-alabaster-200">
                Full kitchen operating daily from 12:00 PM to 2:30 AM for dining, takeaway & delivery.
              </p>
            </div>
          </div>
          <a href="tel:+918143271516" class="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-500 hover:bg-gold-600 text-burgundy-950 font-bold text-xs sm:text-sm transition shadow-md">
            📞 Call for Late Night Order
          </a>
        </div>
      </div>
    </section>

    <!-- LOCATION & ADDRESS (Warm Light Brown Background #F4ECE1 with High-Contrast Dark Text & 3 Info Cards Below Map) -->
    <section id="location" class="py-16 sm:py-20 bg-[#F4ECE1] border-t border-[#D8C5AE] px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-100 border border-burgundy-300 text-burgundy-900 text-xs font-bold tracking-widest uppercase mb-3">
            <span>📍 Visit Us in Madhapur</span>
          </div>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-950 tracking-tight mb-4">
            Find Mandi Bistro
          </h2>
          <p className="text-charcoal-800 text-sm sm:text-base font-medium">
            Conveniently situated in Premier Building, 1st Floor, Madhapur, Hyderabad.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          <!-- Address & Details Card -->
          <div class="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-charcoal-200 shadow-md flex flex-col justify-between">
            <div>
              <h3 class="font-serif text-2xl font-black text-burgundy-800 mb-4">
                Mandi Bistro Madhapur
              </h3>

              <div class="space-y-4 text-sm text-charcoal-800 mb-6">
                <div class="flex items-start gap-3">
                  <span class="text-xl text-burgundy-700 mt-0.5">📍</span>
                  <div>
                    <strong class="block text-charcoal-950 font-bold mb-0.5">Address:</strong>
                    <p className="text-charcoal-800 leading-relaxed font-normal">
                      102, 1st Floor, Plot 35, 36, 41, 42, Survey 76, Premier Building, Madhapur, Hyderabad, Telangana 500081
                    </p>
                    <p className="text-xs text-charcoal-600 mt-1 font-medium">
                      Landmark: Premier Building, 1st Floor, Near Madhapur Metro & Hitech City
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <span class="text-xl text-burgundy-700 mt-0.5">⏰</span>
                  <div>
                    <strong class="block text-charcoal-950 font-bold mb-0.5">Hours:</strong>
                    <p className="text-charcoal-800 font-medium">
                      12:00 Noon – 2:30 AM Daily
                    </p>
                    <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                      Open Late Night Every Day till 2:30 AM
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <span class="text-xl text-burgundy-700 mt-0.5">📞</span>
                  <div>
                    <strong class="block text-charcoal-950 font-bold mb-0.5">Contact:</strong>
                    <a href="tel:+918143271516" class="text-burgundy-800 hover:text-burgundy-950 font-bold">
                      +91 81432 71516
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="pt-4 border-t border-charcoal-200 flex flex-col sm:flex-row gap-3">
              <a href="https://maps.google.com/?q=Mandi+Bistro+Premier+Building+Madhapur+Hyderabad" target="_blank" rel="noopener noreferrer" class="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-burgundy-700 hover:bg-burgundy-800 text-white font-bold text-xs shadow-md transition">
                🧭 Get Directions
              </a>
              <a href="tel:+918143271516" class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-alabaster-100 hover:bg-alabaster-200 text-charcoal-900 border border-charcoal-300 font-bold text-xs transition">
                📞 Call Restaurant
              </a>
            </div>
          </div>

          <!-- Google Maps Iframe Embed -->
          <div class="lg:col-span-7 bg-white rounded-2xl overflow-hidden border border-charcoal-200 shadow-md h-80 sm:h-96">
            <iframe
              src="https://maps.google.com/maps?q=Mandi+Bistro+Premier+Building+Madhapur+Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Mandi Bistro Google Maps Location"
            ></iframe>
          </div>
        </div>

        <!-- 3 High-Contrast Info Cards Directly Below the Map -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-5 rounded-xl bg-white border border-charcoal-200 shadow-sm">
            <div class="flex items-center gap-3 mb-2">
              <span class="text-2xl">🚗</span>
              <h4 class="font-serif font-bold text-charcoal-950 text-base">
                Parking & Access
              </h4>
            </div>
            <p className="text-xs text-charcoal-700 leading-relaxed font-medium">
              Free road-front and valet parking space available for both two-wheelers and four-wheelers.
            </p>
          </div>

          <div class="p-5 rounded-xl bg-white border border-charcoal-200 shadow-sm">
            <div class="flex items-center gap-3 mb-2">
              <span class="text-2xl">🛡️</span>
              <h4 class="font-serif font-bold text-charcoal-950 text-base">
                Family Majlis Cabins
              </h4>
            </div>
            <p className="text-xs text-charcoal-700 leading-relaxed font-medium">
              Private partitioned curtains and traditional majlis seating sections for family and group feasts.
            </p>
          </div>

          <div class="p-5 rounded-xl bg-white border border-charcoal-200 shadow-sm">
            <div class="flex items-center gap-3 mb-2">
              <span class="text-2xl">⏰</span>
              <h4 class="font-serif font-bold text-charcoal-950 text-base">
                Late Night Hot Kitchen
              </h4>
            </div>
            <p className="text-xs text-charcoal-700 leading-relaxed font-medium">
              Open continuously until 2:30 AM every night. Fresh piping hot Mandi served till late night.
            </p>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- FOOTER -->
  <footer class="bg-burgundy-950 text-white border-t border-burgundy-900 pt-16 pb-24 sm:pb-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div class="space-y-4">
          <h3 class="font-serif text-2xl font-black text-gold-400">MANDI BISTRO</h3>
          <p class="text-xs text-alabaster-200 leading-relaxed">
            Madhapur's top-rated Arabian Mandi & Biryani bistro. Sizzling juicy mutton shanks, fragrant Al-Faham chicken, and royal group majlis dining open late night until 2:30 AM.
          </p>
          <div class="flex items-center gap-3 text-xs text-gold-400 font-semibold">
            <span>⭐ 4.4 Dining (1,953+ Reviews) • 3.9 Delivery</span>
          </div>
        </div>

        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-gold-400 mb-4">Explore & Dine</h4>
          <ul class="space-y-2.5 text-xs text-alabaster-200">
            <li><a href="#menu" class="hover:text-white transition">Complete Menu (35+ Items)</a></li>
            <li><a href="#specialities" class="hover:text-white transition">Signature Mutton Juicy Mandi</a></li>
            <li><a href="#about" class="hover:text-white transition">Our Arabian Heritage</a></li>
            <li><a href="#gallery" class="hover:text-white transition">Majlis & Ambience Gallery</a></li>
            <li><a href="#offers" class="hover:text-white transition">Table Booking & Bank Offers</a></li>
            <li><a href="#location" class="hover:text-white transition">Location & Directions</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-gold-400 mb-4">Timings & Details</h4>
          <div class="space-y-2.5 text-xs text-alabaster-200">
            <p><strong>Open Daily:</strong> 12:00 PM – 2:30 AM</p>
            <p><strong>Late Night Kitchen:</strong> Active Till 2:30 AM</p>
            <p><strong>Reservations:</strong> +91 81432 71516</p>
            <p><strong>Cost for Two:</strong> ₹800 approx.</p>
            <p><strong>Free Parking:</strong> Available</p>
          </div>
        </div>

        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-gold-400 mb-4">Table Booking & Delivery</h4>
          <div class="flex flex-col gap-2.5">
            <a href="https://www.zomato.com/hyderabad/mandi-bistro-madhapur/book" target="_blank" class="px-4 py-2 rounded-full bg-gold-500 hover:bg-gold-600 text-burgundy-950 text-xs font-bold text-center transition">
              Pre-Book Table (Flat 15% OFF)
            </a>
            <a href="https://www.zomato.com/hyderabad/mandi-bistro-madhapur/order" target="_blank" class="px-4 py-2 rounded-full bg-burgundy-800 hover:bg-burgundy-700 text-white text-xs font-bold text-center transition">
              Order on Zomato
            </a>
            <a href="https://www.swiggy.com/restaurants/mandi-bistro-madhapur-hyderabad" target="_blank" class="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold text-center transition">
              Order on Swiggy
            </a>
          </div>
        </div>
      </div>

      <div class="pt-8 border-t border-burgundy-900 text-center text-xs text-alabaster-300">
        <p>© 2026 Mandi Bistro. 102, 1st Floor, Premier Building, Plot 35, 36, 41, 42, Survey 76, Madhapur, Hyderabad, Telangana 500081. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <!-- MOBILE BOTTOM STICKY QUICK BAR -->
  <div class="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-charcoal-200 p-2.5 flex items-center gap-2 shadow-2xl">
    <a href="tel:+918143271516" class="flex-1 py-2.5 rounded-full bg-alabaster-100 text-charcoal-900 border border-charcoal-300 font-bold text-xs text-center flex items-center justify-center gap-1">
      📞 Call
    </a>
    <a href="https://maps.google.com/?q=Mandi+Bistro+Premier+Building+Madhapur+Hyderabad" target="_blank" class="flex-1 py-2.5 rounded-full bg-alabaster-100 text-charcoal-900 border border-charcoal-300 font-bold text-xs text-center flex items-center justify-center gap-1">
      📍 Map
    </a>
    <a href="https://www.zomato.com/hyderabad/mandi-bistro-madhapur/book" target="_blank" class="flex-1 py-2.5 rounded-full bg-gold-500 text-burgundy-950 font-bold text-xs text-center flex items-center justify-center gap-1 shadow-sm">
      Book Table
    </a>
    <a href="https://www.zomato.com/hyderabad/mandi-bistro-madhapur/order" target="_blank" class="flex-1 py-2.5 rounded-full bg-burgundy-700 text-white font-bold text-xs text-center flex items-center justify-center gap-1 shadow-sm">
      Order
    </a>
  </div>

  <!-- INTERACTIVE JAVASCRIPT FOR MENU FILTERING -->
  <script>
    const allMenuData = ${JSON.stringify(menuData)};
    let currentCategory = 'all';
    let currentDiet = 'all';

    function toggleMobileMenu() {
      const menu = document.getElementById('mobileMenu');
      menu.classList.toggle('hidden');
    }

    function setCategory(catId) {
      currentCategory = catId;
      document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.className = 'cat-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap bg-alabaster-50 text-charcoal-700 border border-charcoal-200 shrink-0 hover:bg-alabaster-100 transition';
      });
      const activeBtn = document.getElementById('cat-' + catId);
      if (activeBtn) {
        activeBtn.className = 'cat-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap bg-burgundy-700 text-white shadow-md shrink-0 transition';
      }
      renderMenuItems();
    }

    function setDiet(diet) {
      currentDiet = diet;
      document.querySelectorAll('.diet-btn').forEach(btn => {
        btn.className = 'diet-btn px-4 py-1.5 rounded-full text-charcoal-600 hover:text-charcoal-900 transition';
      });
      const activeBtn = document.getElementById('diet-' + diet);
      if (activeBtn) {
        activeBtn.className = 'diet-btn px-4 py-1.5 rounded-full bg-burgundy-700 text-white shadow-sm font-bold transition';
      }
      renderMenuItems();
    }

    function filterMenu() {
      renderMenuItems();
    }

    function renderMenuItems() {
      const query = (document.getElementById('menuSearchInput').value || '').toLowerCase().trim();
      const grid = document.getElementById('menuGrid');

      const filtered = allMenuData.filter(item => {
        if (currentCategory !== 'all' && item.category !== currentCategory) return false;
        if (currentDiet === 'veg' && !item.isVeg) return false;
        if (currentDiet === 'non-veg' && item.isVeg) return false;
        if (query) {
          const matchName = item.name.toLowerCase().includes(query);
          const matchDesc = item.description.toLowerCase().includes(query);
          if (!matchName && !matchDesc) return false;
        }
        return true;
      });

      if (filtered.length === 0) {
        grid.innerHTML = '<div class="col-span-full text-center py-16 bg-alabaster-50 rounded-2xl border border-charcoal-200"><p class="text-charcoal-500 font-medium">No dishes match your selection.</p></div>';
        return;
      }

      grid.innerHTML = filtered.map(item => {
        return \`
          <div class="bg-white rounded-xl p-5 border border-charcoal-200/80 hover:border-burgundy-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div class="flex items-start justify-between gap-2 mb-2">
                <div class="flex items-center gap-2">
                  <span class="w-3.5 h-3.5 rounded-sm border flex items-center justify-center shrink-0 \${item.isVeg ? 'border-emerald-600' : 'border-burgundy-600'}">
                    <span class="w-1.5 h-1.5 rounded-full \${item.isVeg ? 'bg-emerald-600' : 'bg-burgundy-600'}"></span>
                  </span>
                  <h4 class="font-serif font-bold text-charcoal-900 group-hover:text-burgundy-700 transition-colors text-base">\${item.name}</h4>
                </div>
              </div>

              <div class="flex flex-wrap gap-1.5 mb-2">
                \${item.isBestseller ? '<span class="px-2 py-0.5 rounded bg-burgundy-50 text-burgundy-700 border border-burgundy-200 text-[10px] font-bold uppercase">Bestseller</span>' : ''}
                \${item.isSpecial ? '<span class="px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-bold uppercase">Chef Special</span>' : ''}
                \${item.portion ? '<span class="px-2 py-0.5 rounded bg-charcoal-100 text-charcoal-600 text-[10px] font-medium">' + item.portion + '</span>' : ''}
              </div>

              <p class="text-xs text-charcoal-600 leading-relaxed line-clamp-2 mb-4">\${item.description}</p>
            </div>

            <div class="pt-3 border-t border-charcoal-100 flex items-center justify-between mt-auto">
              <div class="flex items-baseline gap-2">
                <span class="text-lg font-black text-burgundy-700">₹\${item.price}</span>
                \${item.originalPrice ? '<span class="text-xs text-charcoal-400 line-through">₹' + item.originalPrice + '</span>' : ''}
              </div>

              <a href="https://www.zomato.com/hyderabad/mandi-bistro-madhapur/order" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burgundy-50 hover:bg-burgundy-700 text-burgundy-700 hover:text-white text-xs font-bold transition">
                🛍️ Order
              </a>
            </div>
          </div>
        \`;
      }).join('');
    }

    // Initial render
    renderMenuItems();
  </script>
</body>
</html>
`;

console.log('Writing standalone HTML file to Downloads and Artifacts...');
fs.writeFileSync(outputHtmlPath, htmlContent, 'utf-8');
fs.writeFileSync(artifactHtmlPath, htmlContent, 'utf-8');
console.log('Successfully generated standalone mandi-bistro.html!');
