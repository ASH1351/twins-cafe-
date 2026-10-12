export interface ReviewTheme {
  id: string;
  themeTitle: string;
  category: string;
  sentiment: 'positive' | 'balanced';
  highlight: string;
  summary: string;
  dishesMentioned: string[];
  icon: string;
}

export const REVIEWS_OVERVIEW = {
  rating: 4.5,
  maxRating: 5.0,
  totalReviews: 544,
  source: 'Google Maps Reviews',
  lastVerified: 'October 2026',
  disclaimer: 'Based on owner-provided Google Maps reviews (4.5/5 from 544 ratings). Synthesized to reflect genuine diner feedback themes without fabricating individual quotes.',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Twins+Cafe+%26+Restaurant+Durgapur+Reviews'
};

export const REVIEW_THEMES: ReviewTheme[] = [
  {
    id: 'theme-pizza',
    themeTitle: 'Pizza Craving & Fusion Flavors',
    category: 'Food Quality',
    sentiment: 'positive',
    highlight: 'Loved for cheesy toppings and balanced crusts',
    summary: 'Multiple patrons highlight the specialty pizza section, commending the generous mozzarella layering, crust texture, and flavorful Indo-fusion toppings that stand out among City Center cafes.',
    dishesMentioned: ['Handcrafted Fusion Pizza', 'Cheese Crust Specials'],
    icon: 'Pizza'
  },
  {
    id: 'theme-appetizers',
    themeTitle: 'Chicken Lollipop & Crispy Chili Babycorn',
    category: 'Starter Highlights',
    sentiment: 'positive',
    highlight: 'Consistently praised as the top appetizer picks',
    summary: 'The Chicken Lollipop and Crispy Chili Babycorn are frequently singled out for their satisfying crunch, bold spice levels, and accompanying dipping chutneys, making them crowd-favorite conversation starters.',
    dishesMentioned: ['Chicken Lollipop', 'Chili Babycorn', 'Chilly Chicken'],
    icon: 'Flame'
  },
  {
    id: 'theme-coffee-vibes',
    themeTitle: 'Creamy Cold Coffee & Hangout Atmosphere',
    category: 'Ambience & Beverage',
    sentiment: 'positive',
    highlight: 'Ideal spot for lingering catch-ups with friends',
    summary: 'Visitors appreciate the café’s signature thick cold coffee alongside its comfortable modern seating, vibrant wall artwork, and relaxed background music — making it a reliable casual hangout.',
    dishesMentioned: ['Signature Cold Coffee', 'Chilled Coolers'],
    icon: 'Coffee'
  },
  {
    id: 'theme-service',
    themeTitle: 'Cooperative & Attentive Team',
    category: 'Hospitality',
    sentiment: 'positive',
    highlight: 'Warm reception and helpful menu suggestions',
    summary: 'Reviewers note the hospitable and cooperative attitude of the cafe staff, noting prompt assistance when customizing orders or accommodating group seating during peak evening hours.',
    dishesMentioned: ['Service Staff', 'Custom Orders'],
    icon: 'HeartHandshake'
  },
  {
    id: 'theme-pricing',
    themeTitle: 'Value for Spend & Portion Feedback',
    category: 'Price & Value',
    sentiment: 'balanced',
    highlight: 'Average ₹200–₹400/person; specialty dishes reflect premium sizing',
    summary: 'The majority of diners find the cafe comfortably budget-friendly for casual dining, while some reviewers note that select specialty chicken preparations lean slightly premium, balanced by generous 8-piece portions.',
    dishesMentioned: ['Chinese Main Courses (8 Pcs)', 'Specialty Platters'],
    icon: 'Receipt'
  }
];
