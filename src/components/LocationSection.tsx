import React from 'react';
import { MapPin, Phone, Clock, Navigation, IndianRupee, Compass, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 sm:py-28 bg-[#121212] text-[#F6F0E6] relative">
      {/* Background soft glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#C7A56A]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F1F1F] border border-[#C7A56A]/30 mb-3">
            <Compass className="w-3.5 h-3.5 text-[#C7A56A]" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#C7A56A]">
              Visit & Contact
            </span>
          </div>

          <div className="text-xs sm:text-sm font-bengali text-[#C7A56A]/90 font-medium tracking-wide mb-2">
            আসুন এবং আমাদের স্বাদ উপভোগ করুন
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F6F0E6] tracking-tight">
            Come Find Your Happy Place.
          </h2>

          <div className="w-16 h-0.5 bg-[#C7A56A] mx-auto mt-4 mb-4"></div>

          <p className="text-sm sm:text-base text-[#ded2bd] leading-relaxed font-light">
            Conveniently located in Non-Company Housing Estate, City Center, Durgapur. Drop in for a quick bite, an evening catch-up, or call us ahead.
          </p>
        </div>

        {/* Location Grid: Details & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Column 1: Restaurant Address & Verified Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-[#1A1A1A] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
              {/* Brand Tag */}
              <div className="border-b border-white/10 pb-5">
                <span className="text-xs font-serif font-bold text-[#C7A56A] uppercase tracking-wider">
                  Official Café & Restaurant
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#F6F0E6] mt-1">
                  TWINS CAFE & RESTAURANT
                </h3>
                <p className="text-xs font-bengali text-[#ded2bd]/80 mt-0.5">
                  টুইন ক্যাফে & রেস্টুরেন্ট
                </p>
              </div>

              {/* Address Details */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#262626] border border-white/10 flex items-center justify-center text-[#C7A56A] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#85817A] font-semibold mb-1">
                    Address
                  </h4>
                  <p className="text-sm text-[#F6F0E6] font-medium leading-relaxed">
                    B 18, Non-Company Housing Estate,
                    <br />
                    City Center, Durgapur,
                    <br />
                    West Bengal 713216, India
                  </p>
                  <p className="text-xs text-[#85817A] mt-1">
                    Landmark: City Center Hub, Durgapur
                  </p>
                </div>
              </div>

              {/* Phone Details */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#262626] border border-white/10 flex items-center justify-center text-[#C7A56A] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#85817A] font-semibold mb-1">
                    Telephone Inquiry
                  </h4>
                  <a
                    href={RESTAURANT_INFO.links.callTel}
                    className="text-base text-[#C7A56A] hover:text-[#ded2bd] font-serif font-bold transition-colors inline-block"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                  <p className="text-xs text-[#85817A] mt-0.5">
                    Click to dial directly on mobile devices
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#262626] border border-white/10 flex items-center justify-center text-[#C7A56A] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#85817A] font-semibold mb-1">
                    Operating Schedule
                  </h4>
                  <p className="text-sm text-[#F6F0E6] font-medium">
                    Reported Closing: {RESTAURANT_INFO.timings.closingTime}
                  </p>
                  <p className="text-xs text-[#85817A] mt-0.5">
                    {RESTAURANT_INFO.timings.dailyHours}
                  </p>
                  <span className="inline-block mt-1 text-[11px] text-[#C7A56A]">
                    *Subject to periodic seasonal confirmation
                  </span>
                </div>
              </div>

              {/* Reported Budget */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#262626] border border-white/10 flex items-center justify-center text-[#C7A56A] shrink-0 mt-0.5">
                  <IndianRupee className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#85817A] font-semibold mb-1">
                    Reported Average Budget
                  </h4>
                  <p className="text-sm text-[#F6F0E6] font-medium">
                    {RESTAURANT_INFO.pricing.averageBudget} per person
                  </p>
                  <p className="text-xs text-[#85817A] mt-0.5">
                    {RESTAURANT_INFO.pricing.note}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={RESTAURANT_INFO.links.callTel}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#1F1F1F] hover:bg-[#262626] border border-[#C7A56A]/50 text-[#F6F0E6] text-xs font-bold uppercase tracking-wider transition-all"
              >
                <Phone className="w-4 h-4 text-[#C7A56A]" />
                <span>Call Now: {RESTAURANT_INFO.phone}</span>
              </a>

              <a
                href={RESTAURANT_INFO.links.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#C7A56A] hover:bg-[#d8b97c] text-[#171717] text-xs font-bold uppercase tracking-wider transition-all shadow-md group"
              >
                <Navigation className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Column 2: Embedded Google Map */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full min-h-[380px] lg:min-h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-[#1A1A1A]">
              {/* Google Map Embed centered on City Center Durgapur */}
              <iframe
                title="Twins Cafe and Restaurant Location in City Center Durgapur"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.4893796859336!2d87.29651587600874!3d23.535805578817345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f771df6c88888b%3A0x6789abcdef123456!2sCity%20Center%2C%20Durgapur%2C%20West%20Bengal%20713216!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                className="w-full h-full min-h-[380px] lg:min-h-[500px] border-0 grayscale-[20%] contrast-[1.05]"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Floating Map Helper Badge */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto bg-[#171717]/90 backdrop-blur-md border border-[#C7A56A]/40 p-3 sm:p-4 rounded-xl shadow-xl flex items-center justify-between sm:justify-start gap-4 pointer-events-auto">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <div>
                    <div className="text-xs font-bold text-[#F6F0E6]">
                      City Center, Durgapur
                    </div>
                    <div className="text-[10px] text-[#85817A]">
                      B 18, Non-Company Housing Estate
                    </div>
                  </div>
                </div>

                <a
                  href={RESTAURANT_INFO.links.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-[#C7A56A] hover:underline font-semibold"
                >
                  <span>Open in App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
