export interface MenuItem {
  id: string;
  name: string;
  bengaliName?: string;
  category: 'soups' | 'chinese-veg' | 'chinese-nonveg' | 'starters' | 'pizza' | 'momos' | 'beverages' | 'desserts';
  categoryLabel: string;
  dietary: 'veg' | 'non-veg' | 'dual';
  price: string;
  vegPrice?: number;
  nonVegPrice?: number;
  portion?: string;
  description: string;
  isVerifiedFromMenuPhoto: boolean;
  isCustomerFavorite?: boolean;
  illustrativeImage: string;
  imageAlt: string;
  tags?: string[];
}

export interface MenuCategory {
  id: string;
  label: string;
  shortLabel: string;
  description: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'all', label: 'All Specialties', shortLabel: 'All', description: 'Explore our complete selection of authentic Chinese dishes and café favorites.' },
  { id: 'soups', label: 'Chinese Soups', shortLabel: 'Soups', description: 'Comforting, steaming broths made with wholesome ingredients and oriental aromatics.' },
  { id: 'chinese-veg', label: 'Chinese Veg Main Course', shortLabel: 'Veg Mains', description: 'Wok-tossed vegetarian delights with Manchurian, chilly paneer, and mushrooms.' },
  { id: 'chinese-nonveg', label: 'Chinese Non-Veg Main Course', shortLabel: 'Non-Veg Mains', description: 'Tender chicken preparations in classic chilly, ginger, lemon, and garlic gravies.' },
  { id: 'starters', label: 'Starters & Appetizers', shortLabel: 'Starters', description: 'Popular crispy bites including customer-loved Chicken Lollipop and Chili Babycorn.' },
  { id: 'pizza', label: 'Handcrafted Pizzas', shortLabel: 'Pizzas', description: 'Freshly baked pizzas layered with mozzarella, vibrant toppings, and herbs.' },
  { id: 'momos', label: 'Momos & Dumplings', shortLabel: 'Momos', description: 'Steamed or crispy fried dumplings accompanied by our signature spicy red dip.' },
  { id: 'beverages', label: 'Cold Coffee & Drinks', shortLabel: 'Beverages', description: 'Thick creamy cold coffees, chilled coolers, and refreshing sodas.' },
  { id: 'desserts', label: 'Desserts & Ice Cream', shortLabel: 'Desserts', description: 'Sweet indulgences including our famous Triple Scoop Ice Cream sundaes.' }
];

export const MENU_ITEMS: MenuItem[] = [
  // CHINESE SOUPS (Directly verified from authentic menu card photo)
  {
    id: 'soup-sweet-corn',
    name: 'Sweet Corn Soup',
    bengaliName: 'সুইট কর্ন স্যুপ',
    category: 'soups',
    categoryLabel: 'Chinese Soup',
    dietary: 'dual',
    price: '₹149 / ₹169',
    vegPrice: 149,
    nonVegPrice: 169,
    portion: 'Bowl (Veg / Chicken)',
    description: 'Delicate, velvety golden sweet corn broth gently simmered with celery, aromatic herbs, and light seasoning.',
    isVerifiedFromMenuPhoto: true,
    illustrativeImage: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Steaming bowl of warm sweet corn soup with herbs (Illustrative presentation)',
    tags: ['Verified from Menu', 'Popular Comfort Food']
  },
  {
    id: 'soup-hot-sour',
    name: 'Hot & Sour Soup',
    bengaliName: 'হট অ্যান্ড সাওয়ার স্যুপ',
    category: 'soups',
    categoryLabel: 'Chinese Soup',
    dietary: 'dual',
    price: '₹149 / ₹169',
    vegPrice: 149,
    nonVegPrice: 169,
    portion: 'Bowl (Veg / Chicken)',
    description: 'Traditional peppery and tangy oriental broth loaded with shredded vegetables, bamboo shoots, and crushed black pepper.',
    isVerifiedFromMenuPhoto: true,
    illustrativeImage: 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Rich dark hot and sour soup with spring onions (Illustrative presentation)',
    tags: ['Verified from Menu', 'Spicy & Tangy']
  },
  {
    id: 'soup-noodles',
    name: 'Noodles Soup',
    bengaliName: 'নুডুলস স্যুপ',
    category: 'soups',
    categoryLabel: 'Chinese Soup',
    dietary: 'dual',
    price: '₹159 / ₹189',
    vegPrice: 159,
    nonVegPrice: 189,
    portion: 'Bowl (Veg / Chicken)',
    description: 'Clear, fragrant broth swimming with silky noodles, finely julienned veggies, and delicate sesame notes.',
    isVerifiedFromMenuPhoto: true,
    illustrativeImage: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Bowl of noodle soup with fresh scallions (Illustrative presentation)',
    tags: ['Verified from Menu', 'Hearty Broth']
  },
  {
    id: 'soup-manchow',
    name: 'Manchow Soup',
    bengaliName: 'মাঞ্চাও স্যুপ',
    category: 'soups',
    categoryLabel: 'Chinese Soup',
    dietary: 'dual',
    price: '₹159 / ₹189',
    vegPrice: 159,
    nonVegPrice: 189,
    portion: 'Bowl (Veg / Chicken)',
    description: 'Robust garlic and chilli infused brown soup served with signature golden crispy fried noodles on top.',
    isVerifiedFromMenuPhoto: true,
    illustrativeImage: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Bowl of dark spicy Manchow soup with crispy noodle topping (Illustrative presentation)',
    tags: ['Verified from Menu', 'Crispy Noodles']
  },
  {
    id: 'soup-chicken-lemon-coriander',
    name: 'Chicken Lemon Coriander Soup',
    bengaliName: 'চিকেন লেমন কোরিয়েন্ডার স্যুপ',
    category: 'soups',
    categoryLabel: 'Chinese Soup',
    dietary: 'non-veg',
    price: '₹189',
    nonVegPrice: 189,
    portion: 'Bowl',
    description: 'Light and revitalizing clear chicken broth brightened with freshly squeezed lemon juice and aromatic hand-picked coriander.',
    isVerifiedFromMenuPhoto: true,
    illustrativeImage: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Clear chicken soup with fresh lemon and herbs (Illustrative presentation)',
    tags: ['Verified from Menu', 'Citrus & Herb']
  },
  {
    id: 'soup-twins-special',
    name: 'Twins (TCR) Special Soup',
    bengaliName: 'টুইনস স্পেশাল স্যুপ',
    category: 'soups',
    categoryLabel: 'Chinese Soup',
    dietary: 'dual',
    price: '₹189 / ₹209',
    vegPrice: 189,
    nonVegPrice: 209,
    portion: 'Bowl (Veg / Chicken)',
    description: 'House specialty soup crafted with a secret chef seasoning blend, loaded with assorted garden vegetables or tender chicken.',
    isVerifiedFromMenuPhoto: true,
    isCustomerFavorite: true,
    illustrativeImage: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Specialty loaded Chinese soup with ingredients (Illustrative presentation)',
    tags: ['Verified from Menu', "Chef's Signature"]
  },

  // CHINESE MAIN COURSE - VEG (Verified from Menu Photo)
  {
    id: 'veg-manchurian',
    name: 'Veg Manchurian',
    bengaliName: 'ভেজ মাঞ্চুরিয়ান',
    category: 'chinese-veg',
    categoryLabel: 'Chinese Main Course (Veg)',
    dietary: 'veg',
    price: '₹189',
    portion: '8 Pcs',
    description: 'Eight deep-fried minced vegetable rounds tossed in a glossy, pungent dark soy, garlic, and ginger sauce.',
    isVerifiedFromMenuPhoto: true,
    illustrativeImage: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Veg Manchurian balls in rich savoury sauce (Illustrative presentation)',
    tags: ['Verified from Menu', '8 Pcs Portion']
  },
  {
    id: 'veg-gobi-chilly',
    name: 'Gobi Chilly',
    bengaliName: 'গোবি চিলি',
    category: 'chinese-veg',
    categoryLabel: 'Chinese Main Course (Veg)',
    dietary: 'veg',
    price: '₹199',
    portion: 'Generous Plate',
    description: 'Crisp battered cauliflower florets wok-tossed with fresh capsicum, diced onions, green chillies, and soy glaze.',
    isVerifiedFromMenuPhoto: true,
    illustrativeImage: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Crispy chili cauliflower tossed with capsicum (Illustrative presentation)',
    tags: ['Verified from Menu', 'Crispy Cauliflower']
  },
  {
    id: 'veg-paneer-chilly',
    name: 'Paneer Chilly',
    bengaliName: 'পনির চিলি',
    category: 'chinese-veg',
    categoryLabel: 'Chinese Main Course (Veg)',
    dietary: 'veg',
    price: '₹259',
    portion: '8 Pcs',
    description: 'Eight melt-in-mouth cubes of fresh cottage cheese crisped to perfection and glazed with fiery oriental peppers and spring onion.',
    isVerifiedFromMenuPhoto: true,
    isCustomerFavorite: true,
    illustrativeImage: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Chili paneer cubes with bell peppers and onions (Illustrative presentation)',
    tags: ['Verified from Menu', '8 Pcs Portion', 'Top Rated Veg']
  },
  {
    id: 'veg-mushroom-manchurian',
    name: 'Mushroom Manchurian',
    bengaliName: 'মাশরুম মাঞ্চুরিয়ান',
    category: 'chinese-veg',
    categoryLabel: 'Chinese Main Course (Veg)',
    dietary: 'veg',
    price: '₹279',
    portion: '8 Pcs',
    description: 'Eight tender button mushrooms coated in seasoned batter and simmered in an aromatic Indo-Chinese Manchurian glaze.',
    isVerifiedFromMenuPhoto: true,
    illustrativeImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Sautéed mushroom dish in savory brown sauce (Illustrative presentation)',
    tags: ['Verified from Menu', '8 Pcs Portion']
  },
  {
    id: 'veg-mushroom-chilly',
    name: 'Mushroom Chilly',
    bengaliName: 'মাশরুম চিলি',
    category: 'chinese-veg',
    categoryLabel: 'Chinese Main Course (Veg)',
    dietary: 'veg',
    price: '₹289',
    portion: 'Generous Plate',
    description: 'Fresh plump mushrooms tossed high-flame with crunchy bell peppers, sliced scallions, and dark soya chilli reduction.',
    isVerifiedFromMenuPhoto: true,
    illustrativeImage: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Spicy chili mushrooms wok-tossed with greens (Illustrative presentation)',
    tags: ['Verified from Menu', 'High-Flame Wok']
  },

  // CHINESE MAIN COURSE - NON-VEG (Verified from Menu Photo)
  {
    id: 'nonveg-chilly-chicken',
    name: 'Chilly Chicken',
    bengaliName: 'চিলি চিকেন',
    category: 'chinese-nonveg',
    categoryLabel: 'Chinese Main Course (Non-Veg)',
    dietary: 'non-veg',
    price: '₹229',
    portion: '8 Pcs',
    description: 'Eight succulent bites of fried chicken tossed with capsicum, crunchy onion petals, and aromatic green chilli soy sauce.',
    isVerifiedFromMenuPhoto: true,
    isCustomerFavorite: true,
    illustrativeImage: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Succulent Chilly Chicken with peppers and sauce (Illustrative presentation)',
    tags: ['Verified from Menu', '8 Pcs Portion', 'House Classic']
  },
  {
    id: 'nonveg-ginger-chicken',
    name: 'Ginger Chicken',
    bengaliName: 'জিঞ্জার চিকেন',
    category: 'chinese-nonveg',
    categoryLabel: 'Chinese Main Course (Non-Veg)',
    dietary: 'non-veg',
    price: '₹259',
    portion: '8 Pcs',
    description: 'Eight pieces of juicy chicken infused with fragrant freshly slivered ginger, scallions, and a savory amber sauce.',
    isVerifiedFromMenuPhoto: true,
    illustrativeImage: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Aromatic ginger chicken pieces in warm sauce (Illustrative presentation)',
    tags: ['Verified from Menu', '8 Pcs Portion']
  },
  {
    id: 'nonveg-lemon-chicken',
    name: 'Lemon Chicken',
    bengaliName: 'লেমন চিকেন',
    category: 'chinese-nonveg',
    categoryLabel: 'Chinese Main Course (Non-Veg)',
    dietary: 'non-veg',
    price: '₹309',
    portion: '8 Pcs',
    description: 'Eight pieces of golden chicken tossed in an invigorating tangy lemon reduction balanced with mild oriental sweetness.',
    isVerifiedFromMenuPhoto: true,
    illustrativeImage: 'https://images.unsplash.com/photo-1527477378378-43d9426f4326?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Crisp lemon chicken in vibrant glaze (Illustrative presentation)',
    tags: ['Verified from Menu', '8 Pcs Portion']
  },
  {
    id: 'nonveg-hot-garlic-chicken',
    name: 'Hot Garlic Chicken',
    bengaliName: 'হট গার্লিক চিকেন',
    category: 'chinese-nonveg',
    categoryLabel: 'Chinese Main Course (Non-Veg)',
    dietary: 'non-veg',
    price: '₹309',
    portion: '8 Pcs',
    description: 'Eight crispy chicken pieces finished in an intensely flavored roasted garlic, fiery red pepper, and scallion sauce.',
    isVerifiedFromMenuPhoto: true,
    illustrativeImage: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Hot garlic chicken garnished with spring onion (Illustrative presentation)',
    tags: ['Verified from Menu', '8 Pcs Portion', 'Spicy Garlic']
  },

  // POPULAR CAFE & RESTAURANT HIGHLIGHTS (Customer favorites from reviews & info)
  {
    id: 'starters-chicken-lollipop',
    name: 'Chicken Lollipop',
    bengaliName: 'চিকেন ললিপপ',
    category: 'starters',
    categoryLabel: 'Starters & Appetizers',
    dietary: 'non-veg',
    price: '₹220 – ₹260*',
    portion: '6 Pcs Platter',
    description: 'Crispy fried frenched chicken winglets marinated in spicy batter and served with homemade piquant schezwan chutney.',
    isVerifiedFromMenuPhoto: false,
    isCustomerFavorite: true,
    illustrativeImage: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Crispy chicken lollipops with spicy dipping sauce (Illustrative presentation)',
    tags: ['Customer Favorite', 'Highly Reviewed', '*Confirm price at cafe']
  },
  {
    id: 'starters-chili-babycorn',
    name: 'Crispy Chili Babycorn',
    bengaliName: 'ক্রিস্পি চিলি বেবিকর্ন',
    category: 'starters',
    categoryLabel: 'Starters & Appetizers',
    dietary: 'veg',
    price: '₹190 – ₹220*',
    portion: 'Sharing Plate',
    description: 'Golden crunchy babycorn fingers tossed with diced peppers, sweet onions, and a spicy garlic soy coating.',
    isVerifiedFromMenuPhoto: false,
    isCustomerFavorite: true,
    illustrativeImage: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Golden crispy babycorn tossed with peppers (Illustrative presentation)',
    tags: ['Customer Favorite', 'Crunchy Veg', '*Confirm price at cafe']
  },
  {
    id: 'pizza-special-fusion',
    name: 'Twins Special Handcrafted Pizza',
    bengaliName: 'টুইনস স্পেশাল পিজ্জা',
    category: 'pizza',
    categoryLabel: 'Handcrafted Pizzas',
    dietary: 'dual',
    price: '₹240 – ₹320*',
    portion: 'Regular / Medium',
    description: 'Diner-acclaimed fusion pizza with stringy mozzarella, seasoned toppings, house-made marinara, and herb sprinkles.',
    isVerifiedFromMenuPhoto: false,
    isCustomerFavorite: true,
    illustrativeImage: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Hot stone-baked pizza with melted mozzarella cheese (Illustrative presentation)',
    tags: ['Pizza Specialty', 'Cheesy Crust', '*Confirm price at cafe']
  },
  {
    id: 'momos-steamed-fried',
    name: 'Steamed & Fried Momos',
    bengaliName: 'স্টিমড & ফ্রাইড মোমো',
    category: 'momos',
    categoryLabel: 'Momos & Dumplings',
    dietary: 'dual',
    price: '₹120 – ₹160*',
    portion: '6 / 8 Pcs',
    description: 'Hand-pleated thin dough pockets filled with finely spiced vegetables or chicken mince, accompanied by fiery hot garlic dip.',
    isVerifiedFromMenuPhoto: false,
    isCustomerFavorite: true,
    illustrativeImage: 'https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Steamed momos with hot red dipping chutney (Illustrative presentation)',
    tags: ['Street Food Classic', 'Fiery Dip', '*Confirm price at cafe']
  },
  {
    id: 'beverage-signature-cold-coffee',
    name: 'Signature Thick Cold Coffee',
    bengaliName: 'সিগনেচার কোল্ড কফি',
    category: 'beverages',
    categoryLabel: 'Cold Coffee & Drinks',
    dietary: 'veg',
    price: '₹120 – ₹160*',
    portion: 'Tall Glass',
    description: 'Customer-celebrated creamy blended cold coffee made with rich roast espresso, milk, and dark chocolate drizzle.',
    isVerifiedFromMenuPhoto: false,
    isCustomerFavorite: true,
    illustrativeImage: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Tall glass of rich iced cold coffee with chocolate swirls (Illustrative presentation)',
    tags: ['Highly Reviewed', 'Chilled Brew', '*Confirm price at cafe']
  },
  {
    id: 'dessert-triple-scoop',
    name: 'Triple Scoop Ice Cream Sundae',
    bengaliName: 'ট্রিপল স্কুপ আইসক্রিম',
    category: 'desserts',
    categoryLabel: 'Desserts & Ice Cream',
    dietary: 'veg',
    price: '₹150 – ₹190*',
    portion: 'Sundae Bowl',
    description: 'Three generous scoops of premium ice cream served with chocolate syrup, roasted nuts, and waffle crisp.',
    isVerifiedFromMenuPhoto: false,
    isCustomerFavorite: true,
    illustrativeImage: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Triple scoop ice cream sundae with chocolate sauce (Illustrative presentation)',
    tags: ['Signature Dessert', 'Sweet Finale', '*Confirm price at cafe']
  }
];
