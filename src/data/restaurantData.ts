export interface RestaurantInfo {
  name: string;
  bengaliName: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  category: string;
  address: {
    line1: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
  };
  phone: string;
  phoneDisplay: string;
  rating: {
    score: number;
    maxScore: number;
    reviewCount: number;
    source: string;
    note: string;
  };
  pricing: {
    averageBudget: string;
    note: string;
  };
  timings: {
    closingTime: string;
    scheduleNote: string;
    dailyHours: string;
  };
  links: {
    googleMapsDirections: string;
    googleMapsReviews: string;
    callTel: string;
  };
  highlights: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const RESTAURANT_INFO: RestaurantInfo = {
  name: "TWINS CAFE & RESTAURANT",
  bengaliName: "টুইন ক্যাফে & রেস্টুরেন্ট",
  tagline: "Good Food. Great Company. Unforgettable Moments.",
  heroHeadline: "Good Food. Great Company. Unforgettable Moments.",
  heroSubheadline: "Discover your cozy café destination in City Center, Durgapur — serving satisfying bites, comforting favorites, and moments worth sharing.",
  category: "Café and Restaurant",
  address: {
    line1: "B 18, Non-Company Housing Estate",
    locality: "City Center",
    city: "Durgapur",
    state: "West Bengal",
    pincode: "713216",
    country: "India",
    full: "B 18, Non-Company Housing Estate, City Center, Durgapur, West Bengal 713216, India"
  },
  phone: "082502 04770",
  phoneDisplay: "+91 82502 04770",
  rating: {
    score: 4.5,
    maxScore: 5.0,
    reviewCount: 544,
    source: "Google Maps Rating",
    note: "Owner-supplied benchmark from 544+ customer reviews"
  },
  pricing: {
    averageBudget: "₹200 – ₹400",
    note: "Reported average spend per person based on diner feedback"
  },
  timings: {
    closingTime: "10:30 PM",
    dailyHours: "11:30 AM – 10:30 PM Daily",
    scheduleNote: "Closing at 10:30 PM. Subject to periodic operational verification."
  },
  links: {
    googleMapsDirections: "https://www.google.com/maps/search/?api=1&query=Twins+Cafe+%26+Restaurant+B+18+Non-Company+Housing+Estate+City+Center+Durgapur+West+Bengal+713216",
    googleMapsReviews: "https://www.google.com/maps/search/?api=1&query=Twins+Cafe+%26+Restaurant+Durgapur+Reviews",
    callTel: "tel:08250204770"
  },
  highlights: [
    {
      title: "Warm & Cozy Ambience",
      description: "Inviting black & gold storefront, artistic wall murals, indoor air-conditioned seating, and outdoor patio umbrella tables.",
      icon: "Coffee"
    },
    {
      title: "Authentic Chinese & Cafe Fare",
      description: "Generous wok-tossed specialties, steaming soups, fresh momos, handcrafted pizzas, and ice-cold refreshments.",
      icon: "UtensilsCrossed"
    },
    {
      title: "Prime City Center Location",
      description: "Conveniently situated in Non-Company Housing Estate, City Center Durgapur — ideal for friends, couples, and family gatherings.",
      icon: "MapPin"
    },
    {
      title: "Pocket-Friendly Indulgence",
      description: "Quality cafe dining with an average budget of ₹200–₹400 per person without compromising on taste or portion sizes.",
      icon: "Wallet"
    }
  ]
};
