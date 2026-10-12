import React from 'react';
import { ArrowRight, Sparkles, UtensilsCrossed } from 'lucide-react';

export const FeaturedFood: React.FC = () => {
  const features = [
    {
      title: 'Chinese Wok Classics',
      bengaliTitle: 'চীনা স্বাদের সেরা সম্ভার',
      subtitle: 'Sizzling Sauté & Rich Gravies',
      description: 'From peppery Manchow soups to eight-piece platters of Chilly Chicken and Garlic Chicken, tossed with authentic spices on roaring woks.',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      badge: 'Signature Wok Craft',
      dishes: 'Manchurian · Chilly Chicken · Hot Garlic',
      span: 'lg:col-span-7',
      aspect: 'h-80 sm:h-96'
    },
    {
      title: 'Handcrafted Fusion Pizzas',
      bengaliTitle: 'হ্যান্ডক্রাফটেড ফিউশন পিজ্জা',
      subtitle: 'Crispy Crusts & Melted Cheese',
      description: 'Golden crusts baked with gooey mozzarella, seasoned bell peppers, and fusion herbs — highly acclaimed in diner reviews.',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
      badge: 'Diner Favorite',
      dishes: 'Special Crust · Mozzarella · Fresh Herbs',
      span: 'lg:col-span-5',
      aspect: 'h-80 sm:h-96'
    },
    {
      title: 'Momos & Fiery Chutney',
      bengaliTitle: 'স্টিমড & ফ্রাইড মোমো',
      subtitle: 'Hand-Pleated Pocket Delights',
      description: 'Steamed to succulent tenderness or fried golden crisp, served piping hot alongside our fiery house chili garlic sauce.',
      image: 'https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=800&q=80',
      badge: 'Street Food Sensation',
      dishes: 'Steamed & Fried · Spicy Garlic Red Dip',
      span: 'lg:col-span-4',
      aspect: 'h-72 sm:h-80'
    },
    {
      title: 'Signature Thick Cold Coffee',
      bengaliTitle: 'সিগনেচার কোল্ড কফি',
      subtitle: 'Creamy Roast & Cocoa Swirls',
      description: 'Thick, creamy, and blended to chilled perfection. The quintessential beverage for long afternoons and casual conversations.',
      image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
      badge: 'Cafe Essential',
      dishes: 'Rich Espresso Roast · Dark Chocolate',
      span: 'lg:col-span-4',
      aspect: 'h-72 sm:h-80'
    },
    {
      title: 'Desserts & Triple Scoop Sundaes',
      bengaliTitle: 'আইসক্রিম ও মিষ্টি মুহূর্ত',
      subtitle: 'The Sweet Finale to Every Visit',
      description: 'Indulgent Triple Scoop Ice Cream sundaes topped with chocolate drizzle and nuts — celebrated as a favorite group indulgence.',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
      badge: 'Sweet Finale',
      dishes: 'Triple Scoop · Fudge Drizzle · Nut Topping',
      span: 'lg:col-span-4',
      aspect: 'h-72 sm:h-80'
    }
  ];

  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#121212] text-[#F6F0E6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F1F1F] border border-[#C7A56A]/30 mb-3">
            <UtensilsCrossed className="w-3.5 h-3.5 text-[#C7A56A]" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#C7A56A]">
              Culinary Highlights
            </span>
          </div>

          <div className="text-xs sm:text-sm font-bengali text-[#C7A56A]/90 font-medium tracking-wide mb-2">
            প্রতিটি স্বাদে তৃপ্তির ছোঁয়া
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F6F0E6] tracking-tight">
            Made for Every Craving.
          </h2>

          <div className="w-16 h-0.5 bg-[#C7A56A] mx-auto mt-4 mb-4"></div>

          <p className="text-sm sm:text-base text-[#ded2bd] leading-relaxed font-light">
            Whether your mood calls for fiery Indo-Chinese gravies, loaded cheesy pizza, or refreshing coffee brews, explore the flavors that define the Twins dining experience.
          </p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`${feature.span} group relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#C7A56A]/50 bg-[#1A1A1A] transition-all duration-300 shadow-xl`}
            >
              {/* Background Image Container */}
              <div className={`relative w-full ${feature.aspect} overflow-hidden`}>
                <img
                  src={feature.image}
                  alt={`${feature.title} at Twins Cafe & Restaurant Durgapur (Illustrative presentation)`}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Rich cinematic gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20 group-hover:via-black/50 transition-colors"></div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#C7A56A]/40 text-[11px] font-semibold tracking-wider uppercase text-[#C7A56A]">
                    <Sparkles className="w-3 h-3 text-[#C7A56A]" />
                    {feature.badge}
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                  <div className="text-xs uppercase tracking-widest text-[#C7A56A] font-semibold mb-1">
                    {feature.subtitle}
                  </div>

                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#F6F0E6] leading-tight mb-1">
                    {feature.title}
                  </h3>

                  <div className="text-xs font-bengali text-[#ded2bd]/70 mb-2">
                    {feature.bengaliTitle}
                  </div>

                  <p className="text-xs sm:text-sm text-[#ded2bd]/90 font-light leading-relaxed mb-3 line-clamp-2">
                    {feature.description}
                  </p>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-[#85817A]">
                    <span className="font-medium text-[#ded2bd] text-[11px]">
                      {feature.dishes}
                    </span>
                    <a
                      href="#menu"
                      className="inline-flex items-center gap-1 text-[#C7A56A] hover:text-white font-semibold text-xs transition-colors"
                    >
                      <span>Menu</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Note & Action Button */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-[#1A1A1A] border border-white/10">
          <p className="text-xs text-[#85817A] text-center sm:text-left">
            *Culinary styling imagery is presented illustratively to highlight preparation styles; authentic recipes and generous portions are made fresh to order.
          </p>

          <a
            href="#menu"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C7A56A] hover:bg-[#d8b97c] text-[#171717] font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0"
          >
            <span>Explore Complete Menu</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
