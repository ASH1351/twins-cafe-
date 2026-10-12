import React from 'react';
import { Star, MapPin, Clock, ArrowDown, Sparkles, Navigation, FileText, ChevronRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroSectionProps {
  onOpenMenuModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenMenuModal }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#121212]"
    >
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#C7A56A]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-[#A94F36]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Editorial Typography & CTAs */}
        <div className="lg:col-span-6 z-10 flex flex-col items-start text-left pt-4 lg:pt-0">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F1F1F] border border-[#C7A56A]/30 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#C7A56A]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-[#C7A56A]">
              TWINS CAFE & RESTAURANT · DURGAPUR
            </span>
          </div>

          {/* Bengali Sub-Heading */}
          <div className="text-sm sm:text-base font-bengali text-[#C7A56A]/90 font-medium tracking-wide mb-2">
            টুইন ক্যাফে & রেস্টুরেন্ট · সিটি সেন্টার, দুর্গাপুর
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#F6F0E6] leading-[1.12] tracking-tight mb-5">
            Good Food.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C7A56A] via-[#E2CBA0] to-[#C7A56A]">
              Great Company.
            </span>
            <br />
            Unforgettable Moments.
          </h1>

          {/* Supporting Copy */}
          <p className="text-sm sm:text-base lg:text-lg text-[#ded2bd] leading-relaxed max-w-xl mb-7 font-light">
            Discover your cozy café destination in City Center, Durgapur — serving satisfying bites, comforting favorites, and moments worth sharing.
          </p>

          {/* Key Quick Facts Badges */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 text-xs text-[#ded2bd]">
            <div className="inline-flex items-center gap-1.5 bg-[#1C1C1C] px-3 py-1.5 rounded-lg border border-white/10">
              <Star className="w-3.5 h-3.5 text-[#C7A56A] fill-[#C7A56A]" />
              <span className="font-semibold text-white">4.5 / 5.0</span>
              <span className="text-[#85817A]">(544+ Google Reviews)</span>
            </div>

            <div className="inline-flex items-center gap-1.5 bg-[#1C1C1C] px-3 py-1.5 rounded-lg border border-white/10">
              <Clock className="w-3.5 h-3.5 text-[#C7A56A]" />
              <span>Closing: 10:30 PM</span>
            </div>

            <div className="inline-flex items-center gap-1.5 bg-[#1C1C1C] px-3 py-1.5 rounded-lg border border-white/10">
              <span className="text-[#C7A56A] font-bold">₹</span>
              <span>₹200–₹400 / Person</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href="#menu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C7A56A] hover:bg-[#d8b97c] text-[#171717] px-6 sm:px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-[#C7A56A]/20 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#C7A56A]"
            >
              <span>Explore Our Menu</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="#location"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1F1F1F] hover:bg-[#262626] text-[#F6F0E6] border border-[#C7A56A]/40 hover:border-[#C7A56A] px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all"
            >
              <Navigation className="w-4 h-4 text-[#C7A56A]" />
              <span>Find Our Café</span>
            </a>

            <button
              type="button"
              onClick={onOpenMenuModal}
              className="inline-flex items-center gap-1.5 text-xs text-[#C7A56A] hover:text-white underline underline-offset-4 py-2 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Original Printed Menu Card</span>
            </button>
          </div>
        </div>

        {/* Right Column: Hero Real Storefront Image Composition */}
        <div className="lg:col-span-6 relative mt-6 lg:mt-0">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Elegant Decorative Frame Border */}
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#C7A56A]/30 via-transparent to-[#A94F36]/20 blur-sm pointer-events-none"></div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C7A56A]/40 bg-[#171717] group">
              <img
                src="/images/twins_cafe_storefront.png"
                alt="Twins Cafe & Restaurant actual storefront in City Center Durgapur with bold black and gold signage and outdoor seating"
                className="w-full h-[360px] sm:h-[450px] lg:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />

              {/* Subtle gradient vignette for readability and elegance */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

              {/* Floating Verified Storefront Badge */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#C7A56A]/40 text-xs text-[#F6F0E6]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-medium">Real Storefront · Durgapur</span>
              </div>

              {/* Bottom Card Overlay on Image */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#C7A56A] font-semibold">
                    City Center Destination
                  </div>
                  <div className="text-xs text-[#ded2bd] flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#C7A56A] shrink-0" />
                    <span>B 18, Non-Company Housing Estate, Durgapur</span>
                  </div>
                </div>

                <a
                  href={RESTAURANT_INFO.links.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 bg-[#C7A56A] hover:bg-[#d8b97c] text-[#171717] text-xs font-bold rounded-lg transition-colors shrink-0"
                >
                  <Navigation className="w-3 h-3 fill-current" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gentle Scroll-down Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-[#85817A] text-[10px] uppercase tracking-widest pointer-events-none">
        <span>Scroll to Explore</span>
        <ArrowDown className="w-3.5 h-3.5 text-[#C7A56A] animate-bounce" />
      </div>
    </section>
  );
};
