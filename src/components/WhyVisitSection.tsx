import React from 'react';
import { Utensils, Leaf, Users, MapPin, IndianRupee, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const WhyVisitSection: React.FC = () => {
  const points = [
    {
      icon: Utensils,
      title: 'A Varied Café & Restaurant Menu',
      bengaliTitle: 'বৈচিত্র্যময় খাবার ও পানীয়',
      description: 'From peppery soups and wok-tossed gravies to cheesy pizzas, crispy momos, and sweet desserts — satisfying diverse cravings under one roof.'
    },
    {
      icon: Leaf,
      title: 'Options for Veg & Non-Veg Diners',
      bengaliTitle: 'নিরামিষ ও আমিষ উভয়ের জন্যই উপযুক্ত',
      description: 'Carefully curated menu selections featuring dedicated vegetarian delights alongside robust chicken and non-veg specialties.'
    },
    {
      icon: Users,
      title: 'A Casual Setting for Catching Up',
      bengaliTitle: 'আড্ডা ও প্রিয়জনের সাথে সময় কাটানোর ঠিকানা',
      description: 'A cozy, relaxed atmosphere with artistic murals and outdoor patio seating — tailored for college groups, couples, and family meals.'
    },
    {
      icon: MapPin,
      title: 'Prime City Center, Durgapur Location',
      bengaliTitle: 'সিটি সেন্টারের প্রাণকেন্দ্রে অবস্থিত',
      description: 'Situated at B 18, Non-Company Housing Estate in City Center, easily accessible for residents and visitors across Durgapur.'
    },
    {
      icon: IndianRupee,
      title: 'Reported Budget: ₹200–₹400 / Person',
      bengaliTitle: 'সাশ্রয়ী মূল্যে মানসম্মত খাবার',
      description: 'Generous portions and honest pricing make it comfortable for casual dining and group celebrations without burning a hole in your pocket.'
    }
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#F6F0E6] text-[#171717] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE4D4] border border-[#C7A56A]/40 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A94F36]"></span>
            <span className="text-[11px] uppercase tracking-widest font-bold text-[#A94F36]">
              Honest Hospitality
            </span>
          </div>

          <div className="text-xs sm:text-sm font-bengali text-[#85817A] font-semibold tracking-wider mb-2">
            কেন আসবেন টুইন ক্যাফে ও রেস্টুরেন্টে?
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171717] tracking-tight">
            Why Visit Twins?
          </h2>

          <div className="w-16 h-0.5 bg-[#C7A56A] mx-auto mt-4 mb-4"></div>

          <p className="text-sm sm:text-base text-[#4A4742] leading-relaxed font-light">
            Rooted in our City Center community, we keep things simple: good food, welcoming service, and an easygoing space to relax.
          </p>
        </div>

        {/* 5 Grounded Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.title}
                className={`p-6 sm:p-8 rounded-2xl bg-white border border-[#DED2BD] shadow-sm hover:shadow-md hover:border-[#C7A56A] transition-all group ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#F6F0E6] text-[#A94F36] group-hover:text-[#C7A56A] flex items-center justify-center mb-5 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="text-xs font-bengali text-[#85817A] mb-1 font-medium">
                  {pt.bengaliTitle}
                </div>

                <h3 className="font-serif font-bold text-lg text-[#171717] mb-2 leading-snug">
                  {pt.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5C5852] leading-relaxed">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Grounded Summary Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-[#EDE4D4] border border-[#D4C3A3] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#A94F36] shrink-0" />
            <div className="text-xs sm:text-sm text-[#4A4742]">
              <strong className="text-[#171717]">Transparent dining promise:</strong> Information on this website reflects verified restaurant details, supplied menu pricing, and customer feedback.
            </div>
          </div>

          <a
            href={RESTAURANT_INFO.links.googleMapsDirections}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#171717] hover:bg-[#262626] text-[#F6F0E6] text-xs font-bold uppercase tracking-wider transition-colors shrink-0"
          >
            Find Directions
          </a>
        </div>
      </div>
    </section>
  );
};
