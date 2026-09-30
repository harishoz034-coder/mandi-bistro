export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  isVeg: boolean;
  isBestseller?: boolean;
  isSpecial?: boolean;
  portion?: string;
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'all', name: 'All Dishes' },
  { id: 'signature-mandi', name: 'Signature Mandi Feasts' },
  { id: 'mutton-mandi', name: 'Mutton & Lamb Mandi' },
  { id: 'chicken-mandi', name: 'Chicken Mandi' },
  { id: 'seafood-mandi', name: 'Seafood & Fish Mandi' },
  { id: 'biryani-rice', name: 'Hyderabadi Dum Biryani' },
  { id: 'chinese-starters', name: 'Chinese & Appetizers' },
  { id: 'desserts-beverages', name: 'Kunafa & Beverages' },
];

export const MENU_ITEMS: MenuItem[] = [
  // Signature Mandi Feasts
  {
    id: 'mb1',
    name: 'Mandi Bistro Special Mutton Juicy Mandi',
    category: 'signature-mandi',
    price: 499,
    originalPrice: 549,
    description: 'Our house-special slow-cooked succulent lamb shanks with rich glistening spicy gravy over aromatic saffron mandi rice with roasted nuts.',
    isVeg: false,
    isBestseller: true,
    isSpecial: true,
    portion: 'Serves 1-2',
    image: '/images/mandi_bistro_dish_1.jpg'
  },
  {
    id: 'mb2',
    name: 'Arabian Al-Faham Char-Grilled Chicken Mandi',
    category: 'signature-mandi',
    price: 369,
    originalPrice: 399,
    description: 'Smoky charcoal-grilled whole spiced chicken served over fragrant long-grain basmati rice with authentic garlic toum dip and tomato salsa.',
    isVeg: false,
    isBestseller: true,
    isSpecial: true,
    portion: 'Serves 1-2',
    image: '/images/mandi_bistro_dish_2.jpg'
  },
  {
    id: 'mb3',
    name: 'Bistro Grand Mixed Meat Feast Mandi (Jumbo)',
    category: 'signature-mandi',
    price: 1299,
    originalPrice: 1449,
    description: 'Royal 4-person feast loaded with mutton juicy shanks, crispy chicken, boiled eggs, fried cashews, and rich mutton broth.',
    isVeg: false,
    isBestseller: true,
    isSpecial: true,
    portion: 'Serves 4 (Jumbo)',
    image: '/images/mandi_bistro_dish_3.jpg'
  },
  {
    id: 'mb4',
    name: 'Royal Arabian Laham Mandi (Roast Lamb)',
    category: 'signature-mandi',
    price: 529,
    description: 'Traditional slow-roasted fall-off-the-bone lamb shoulder served over spiced smoked basmati rice with caramelized onions.',
    isVeg: false,
    isBestseller: true,
    portion: 'Serves 1-2',
    image: '/images/mandi_bistro_dish_4.jpg'
  },

  // Mutton & Lamb Mandi
  {
    id: 'mm1',
    name: 'Mutton Fry Mandi',
    category: 'mutton-mandi',
    price: 469,
    description: 'Crispy spiced tender mutton chunks pan-tossed with curry leaves and black pepper, served on golden saffron mandi rice.',
    isVeg: false,
    isBestseller: true,
    portion: 'Serves 1-2',
    image: '/images/mandi_bistro_dish_5.jpg'
  },
  {
    id: 'mm2',
    name: 'Mutton Roast Mandi (Yemeni Style)',
    category: 'mutton-mandi',
    price: 489,
    description: 'Tender marinated mutton slow-roasted in traditional spices over fragrant long basmati grains.',
    isVeg: false,
    portion: 'Serves 1-2',
    image: '/images/mandi_bistro_dish_6.jpg'
  },
  {
    id: 'mm3',
    name: 'Mini Mutton Juicy Mandi (Single)',
    category: 'mutton-mandi',
    price: 279,
    description: 'Single portion of our famous tender juicy mutton on steaming basmati rice with salsa and soup.',
    isVeg: false,
    portion: 'Single Portion',
    image: '/images/mandi_bistro_dish_7.jpg'
  },

  // Chicken Mandi
  {
    id: 'cm1',
    name: 'Chicken Juicy Mandi (Full Platter)',
    category: 'chicken-mandi',
    price: 349,
    originalPrice: 389,
    description: 'Succulent chicken pieces cooked in thick flavorful gravy served over steaming spiced mandi rice.',
    isVeg: false,
    isBestseller: true,
    portion: 'Serves 1-2',
    image: '/images/mandi_bistro_dish_8.jpg'
  },
  {
    id: 'cm2',
    name: 'BBQ Spicy Chicken Mandi',
    category: 'chicken-mandi',
    price: 379,
    description: 'Grilled chicken glazed with smoky Arabian BBQ sauce served on saffron-tinted basmati rice.',
    isVeg: false,
    isBestseller: true,
    portion: 'Serves 1-2',
    image: '/images/mandi_bistro_dish_9.jpg'
  },
  {
    id: 'cm3',
    name: 'Crispy Fried Chicken Mandi',
    category: 'chicken-mandi',
    price: 359,
    description: 'Golden crispy chicken pieces seasoned with secret spices over traditional aromatic mandi rice.',
    isVeg: false,
    portion: 'Serves 1-2',
    image: '/images/mandi_bistro_dish_10.jpg'
  },
  {
    id: 'cm4',
    name: 'Mini Chicken Al-Faham Mandi',
    category: 'chicken-mandi',
    price: 199,
    description: 'Pocket-friendly single portion char-grilled chicken served with aromatic rice, soup, and tomato salsa.',
    isVeg: false,
    portion: 'Single Portion',
    image: '/images/mandi_bistro_dish_11.jpg'
  },

  // Seafood & Fish Mandi
  {
    id: 'sf1',
    name: 'Tawa Fried Arabian Fish Mandi',
    category: 'seafood-mandi',
    price: 449,
    description: 'Whole crispy seasoned fish fillet cooked on a traditional griddle, served on golden mandi rice with lemon wedges.',
    isVeg: false,
    isBestseller: true,
    portion: 'Serves 1-2',
    image: '/images/mandi_bistro_dish_12.jpg'
  },
  {
    id: 'sf2',
    name: 'Royal Arabian King Prawns Mandi',
    category: 'seafood-mandi',
    price: 489,
    description: 'Garlic butter tossed king prawns seasoned with Middle Eastern spices over steaming saffron mandi rice.',
    isVeg: false,
    isBestseller: true,
    portion: 'Serves 1-2',
    image: '/images/mandi_bistro_dish_13.jpg'
  },

  // Hyderabadi Dum Biryani
  {
    id: 'bi1',
    name: 'Bistro Special Mutton Dum Biryani',
    category: 'biryani-rice',
    price: 380,
    originalPrice: 420,
    description: 'Authentic Hyderabadi kachchi gosht dum biryani with long basmati grains, saffron, and tender mutton chunks.',
    isVeg: false,
    isBestseller: true,
    portion: 'Serves 1-2',
    image: '/images/mandi_bistro_dish_14.jpg'
  },
  {
    id: 'bi2',
    name: 'Hyderabadi Chicken Dum Biryani',
    category: 'biryani-rice',
    price: 260,
    description: 'Rich spiced chicken dum biryani infused with pure ghee, mint, and fried onions.',
    isVeg: false,
    isBestseller: true,
    portion: 'Serves 1-2',
    image: '/images/mandi_bistro_dish_15.jpg'
  },
  {
    id: 'bi3',
    name: 'Paneer Tikka Vegetarian Mandi',
    category: 'biryani-rice',
    price: 289,
    description: 'Tandoori spiced paneer cubes charred to perfection over aromatic vegetarian saffron rice.',
    isVeg: true,
    isBestseller: true,
    portion: 'Serves 1-2'
  },

  // Chinese & Appetizers
  {
    id: 'ch1',
    name: 'Classic Chicken 65 (Hyderabadi Style)',
    category: 'chinese-starters',
    price: 249,
    description: 'Deep-fried battered chicken tossed with spicy red chilli sauce, curry leaves, and yogurt.',
    isVeg: false,
    isBestseller: true,
    portion: 'Serves 1-2'
  },
  {
    id: 'ch2',
    name: 'Crispy Chilli Chicken (Indo-Chinese)',
    category: 'chinese-starters',
    price: 249,
    description: 'Crispy diced chicken tossed with capsicum, spring onions, and garlic in dark soya chilli sauce.',
    isVeg: false,
    portion: 'Serves 1-2'
  },
  {
    id: 'ch3',
    name: 'Veg Manchurian Dry / Gravy',
    category: 'chinese-starters',
    price: 199,
    description: 'Vegetable dumplings tossed in tangy ginger-garlic soya sauce with fresh cilantro.',
    isVeg: true,
    portion: 'Serves 1-2'
  },

  // Kunafa & Beverages
  {
    id: 'db1',
    name: 'Shahi Stretchy Cheese Kunafa',
    category: 'desserts-beverages',
    price: 219,
    originalPrice: 249,
    description: 'Warm crispy shredded kataifi crust filled with molten cheese, soaked in rose syrup and crushed pistachios.',
    isVeg: true,
    isBestseller: true,
    isSpecial: true,
    portion: 'Serves 1-2'
  },
  {
    id: 'db2',
    name: 'Special Arabian Sulaimani Tea',
    category: 'desserts-beverages',
    price: 40,
    description: 'Golden spiced black tea brewed with cardamom, mint, and lemon.',
    isVeg: true,
    portion: '1 Glass'
  },
  {
    id: 'db3',
    name: 'Fresh Mint Lime Cooler',
    category: 'desserts-beverages',
    price: 70,
    description: 'Refreshing chilled lime soda with crushed fresh mint leaves.',
    isVeg: true,
    portion: '300 ml'
  }
];
