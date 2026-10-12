import React from 'react';
import { Coffee, Utensils, Users, CheckCircle2, MapPin } from 'lucide-react';

interface BrandStoryProps {
  onOpenStorefrontModal?: () => void;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ onOpenStorefrontModal }) => {
  return (
    <section id="story" className="py-20 sm:py-28 bg-[#F6F0E6] text-[#171717] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE4D4] border border-[#C7A56A]/40 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A94F36]"></span>
            <span className="text-[11px] uppercase tracking-widest font-bold text-[#A94F36]">
              Our Story & Philosophy
            </span>
          </div>

          <div className="text-xs sm:text-sm font-bengali text-[#85817A] font-semibold tracking-wider mb-2">
            স্বাগতম টুইন ক্যাফে ও রেস্টুরেন্টে
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171717] tracking-tight">
            Your Everyday Escape, Served Fresh.
          </h2>

          <div className="w-16 h-0.5 bg-[#C7A56A] mx-auto mt-4 mb-5"></div>

          <p className="text-sm sm:text-base text-[#4A4742] leading-relaxed font-light">
            Located in City Center, Durgapur, TWINS CAFE & RESTAURANT is a neighborhood gathering place created for people who love honest comfort food, great conversations, and unhurried moments.
          </p>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column 1: Narrative & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="prose text-[#33312E] space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                Whether you're stopping by after college classes, dropping in for an evening coffee with friends, or enjoying a casual weekend dinner with family, TWINS CAFE & RESTAURANT brings a warm, laid-back atmosphere right to the Non-Company Housing Estate in City Center.
              </p>
              <p>
                From steaming bowls of Sweet Corn and Manchow soups to sizzling wok-tossed Chilly Chicken and crispy babycorn, our kitchen focuses on comforting favorites made to order. Paired with thick cold coffees, cheesy pizzas, and delicious momos, there's always something tempting to share.
              </p>
              <p className="font-medium text-[#171717]">
                No pretension — just authentic hospitality, generous portions, and a welcoming table ready for you.
              </p>
            </div>

            {/* Three Experience Highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white/80 border border-[#ded2bd] shadow-sm hover:border-[#C7A56A] transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#F6F0E6] flex items-center justify-center text-[#A94F36] mb-3">
                  <Coffee className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-sm text-[#171717] mb-1">
                  Welcoming Café Vibe
                </h3>
                <p className="text-xs text-[#66625C] leading-snug">
                  Modern indoor seating and shaded outdoor umbrella tables for pleasant evenings.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/80 border border-[#ded2bd] shadow-sm hover:border-[#C7A56A] transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#F6F0E6] flex items-center justify-center text-[#C7A56A] mb-3">
                  <Utensils className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-sm text-[#171717] mb-1">
                  Veg & Non-Veg Variety
                </h3>
                <p className="text-xs text-[#66625C] leading-snug">
                  Thoughtfully balanced Chinese soups, wok mains, appetizers, and snacks for all diners.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/80 border border-[#ded2bd] shadow-sm hover:border-[#C7A56A] transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#F6F0E6] flex items-center justify-center text-[#A94F36] mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-sm text-[#171717] mb-1">
                  Gather & Unwind
                </h3>
                <p className="text-xs text-[#66625C] leading-snug">
                  The ideal destination for friends, couples, and family get-togethers in Durgapur.
                </p>
              </div>
            </div>

            {/* Address & Verified Info Snippet */}
            <div className="pt-2 flex items-center gap-3 text-xs text-[#66625C]">
              <MapPin className="w-4 h-4 text-[#A94F36] shrink-0" />
              <span>B 18, Non-Company Housing Estate, City Center, Durgapur · Spend ₹200–₹400 / person</span>
            </div>
          </div>

          {/* Column 2: Editorial Photo Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white group">
              <img
                src="/images/twins_cafe_storefront.png"
                alt="Twins Cafe & Restaurant facade and patio in City Center Durgapur"
                className="w-full h-[380px] sm:h-[460px] object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />

              {/* Bottom authentic verification card */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#171717]/90 backdrop-blur-md p-4 rounded-xl text-white border border-[#C7A56A]/40 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-semibold tracking-wide text-[#F6F0E6]">
                      Actual Restaurant Storefront
                    </span>
                  </div>
                  <p className="text-[11px] text-[#ded2bd] mt-0.5">
                    Featuring the authentic black and gold fascia, outdoor dining patio, and colorful murals.
                  </p>
                </div>

                {onOpenStorefrontModal && (
                  <button
                    type="button"
                    onClick={onOpenStorefrontModal}
                    className="text-xs text-[#C7A56A] hover:text-white underline underline-offset-2 shrink-0 ml-3"
                  >
                    View Photo
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
