import React from 'react';
import { MapPin, Phone, Clock, ArrowUp, Sparkles, FileText } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onOpenMenuModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenMenuModal }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0D0D] text-[#F6F0E6] border-t border-[#C7A56A]/20 pt-16 pb-24 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Final CTA Banner */}
        <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#171717] via-[#1F1F1F] to-[#171717] border border-[#C7A56A]/30 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C7A56A]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-xl text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#C7A56A] font-semibold flex items-center justify-center md:justify-start gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C7A56A]" />
              City Center, Durgapur
            </span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#F6F0E6] leading-tight">
              Your Next Favorite Meal Is Waiting.
            </h3>
            <p className="text-xs sm:text-sm text-[#ded2bd] mt-2 font-light">
              Drop by for comforting Chinese soups, sizzling main courses, thick cold coffee, and great conversations.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={RESTAURANT_INFO.links.callTel}
              className="px-6 py-3.5 rounded-full bg-[#262626] hover:bg-[#333] border border-white/10 text-white font-semibold text-xs uppercase tracking-wider transition-all"
            >
              Call: {RESTAURANT_INFO.phone}
            </a>

            <a
              href={RESTAURANT_INFO.links.googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#C7A56A] hover:bg-[#d8b97c] text-[#171717] font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#C7A56A]/20"
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* Footer Navigation & Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl sm:text-2xl text-[#F6F0E6] tracking-wider uppercase">
                {RESTAURANT_INFO.name}
              </span>
              <span className="text-xs font-bengali text-[#C7A56A] mt-0.5">
                {RESTAURANT_INFO.bengaliName}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#85817A] max-w-sm leading-relaxed font-light">
              A premium, welcoming café and restaurant in City Center, Durgapur, serving verified Chinese favorites, handcrafted pizzas, savory momos, and chilled beverages.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#ded2bd]">
              <span className="px-2.5 py-1 rounded-md bg-[#1A1A1A] border border-white/10 text-[11px]">
                Reported Budget: {RESTAURANT_INFO.pricing.averageBudget}/person
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#1A1A1A] border border-white/10 text-[11px]">
                Closes: {RESTAURANT_INFO.timings.closingTime}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-[#C7A56A]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#85817A]">
              <li>
                <a href="#home" className="hover:text-[#F6F0E6] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#F6F0E6] transition-colors">
                  Our Story & Philosophy
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#F6F0E6] transition-colors">
                  Signature Menu & Soups
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#F6F0E6] transition-colors">
                  Food Experience & Specials
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#F6F0E6] transition-colors">
                  Why Visit Twins?
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#F6F0E6] transition-colors">
                  Photo Gallery & Storefront
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#F6F0E6] transition-colors">
                  Customer Reviews (4.5★)
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#F6F0E6] transition-colors">
                  Location & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-[#C7A56A]">
              Find & Contact
            </h4>
            <div className="space-y-3 text-xs text-[#85817A]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C7A56A] shrink-0 mt-0.5" />
                <span className="text-[#ded2bd] leading-relaxed">
                  {RESTAURANT_INFO.address.full}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C7A56A] shrink-0" />
                <a
                  href={RESTAURANT_INFO.links.callTel}
                  className="text-[#F6F0E6] hover:text-[#C7A56A] font-semibold transition-colors"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C7A56A] shrink-0" />
                <span>{RESTAURANT_INFO.timings.dailyHours}</span>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenMenuModal}
                  className="inline-flex items-center gap-1.5 text-xs text-[#C7A56A] hover:underline cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Inspect Physical Menu Card</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#66625C]">
          <div>
            © {currentYear} {RESTAURANT_INFO.name}. All Rights Reserved. City Center, Durgapur, West Bengal.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#85817A]">
              Verified Restaurant Information
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-[#C7A56A] hover:text-white transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
