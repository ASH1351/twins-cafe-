import React from 'react';
import { Star, MessageSquareQuote, ExternalLink, ShieldCheck, ThumbsUp, Pizza, Flame, Coffee, HeartHandshake, Receipt } from 'lucide-react';
import { REVIEW_THEMES, REVIEWS_OVERVIEW } from '../data/reviewsData';

export const ReviewsSection: React.FC = () => {
  const getThemeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Pizza':
        return <Pizza className="w-5 h-5 text-[#A94F36]" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#A94F36]" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-[#C7A56A]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#C7A56A]" />;
      case 'Receipt':
        return <Receipt className="w-5 h-5 text-[#85817A]" />;
      default:
        return <ThumbsUp className="w-5 h-5 text-[#C7A56A]" />;
    }
  };

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#F6F0E6] text-[#171717] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE4D4] border border-[#C7A56A]/40 mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#A94F36]" />
            <span className="text-[11px] uppercase tracking-widest font-bold text-[#A94F36]">
              Customer Feedback
            </span>
          </div>

          <div className="text-xs sm:text-sm font-bengali text-[#85817A] font-semibold tracking-wider mb-2">
            অতিথিদের ভালোবাসা ও মতামত
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171717] tracking-tight">
            Good Food. Shared Moments.
          </h2>

          <div className="w-16 h-0.5 bg-[#C7A56A] mx-auto mt-4 mb-4"></div>

          <p className="text-sm sm:text-base text-[#4A4742] leading-relaxed font-light">
            Genuine diner sentiment synthesized from owner-supplied Google Maps reviews. No fabricated names or quotes — just honest takeaway themes from over 540 community ratings.
          </p>
        </div>

        {/* Rating Overview Card */}
        <div className="max-w-4xl mx-auto mb-14 bg-white rounded-3xl p-6 sm:p-10 border border-[#DED2BD] shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Big Score Display */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="flex flex-col items-center justify-center w-28 h-28 rounded-2xl bg-[#171717] text-[#F6F0E6] border-2 border-[#C7A56A] shadow-md shrink-0">
              <span className="font-serif font-bold text-4xl text-[#C7A56A]">
                {REVIEWS_OVERVIEW.rating}
              </span>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < 4
                        ? 'text-[#C7A56A] fill-[#C7A56A]'
                        : 'text-[#C7A56A] fill-[#C7A56A]/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A94F36]">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Google Maps Verified Listing
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#171717] mt-1">
                Based on {REVIEWS_OVERVIEW.totalReviews}+ Customer Reviews
              </h3>
              <p className="text-xs text-[#66625C] mt-1 max-w-md">
                Reflecting genuine ratings from patrons enjoying our Chinese favorites, pizzas, and café hospitality in Durgapur.
              </p>
            </div>
          </div>

          {/* Read Google Reviews Button */}
          <a
            href={REVIEWS_OVERVIEW.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#171717] hover:bg-[#262626] text-[#F6F0E6] font-bold text-xs uppercase tracking-wider transition-all shadow-md group shrink-0"
          >
            <span>Read Reviews on Google Maps</span>
            <ExternalLink className="w-4 h-4 text-[#C7A56A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* 5 Real Feedback Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEW_THEMES.map((theme, index) => (
            <div
              key={theme.id}
              className={`p-6 sm:p-7 rounded-2xl bg-white border border-[#DED2BD] shadow-sm hover:shadow-md hover:border-[#C7A56A] transition-all flex flex-col justify-between ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F6F0E6] flex items-center justify-center">
                    {getThemeIcon(theme.icon)}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#EDE4D4] text-[#4A4742]">
                    {theme.category}
                  </span>
                </div>

                <div className="text-xs font-semibold text-[#A94F36] mb-1">
                  {theme.highlight}
                </div>

                <h4 className="font-serif font-bold text-lg text-[#171717] mb-2 leading-snug">
                  {theme.themeTitle}
                </h4>

                <p className="text-xs sm:text-sm text-[#5C5852] leading-relaxed mb-4">
                  {theme.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-[#F0E8DC]">
                <span className="text-[11px] text-[#85817A] font-medium">
                  Frequently cited: {theme.dishesMentioned.join(' · ')}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Transparency Disclaimer */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-[11px] text-[#85817A] leading-relaxed">
            *In accordance with our strict accuracy guidelines, we do not fabricate customer testimonials or quote unverified individuals. All feedback themes are synthesized directly from owner-supplied public Google Maps ratings for TWINS CAFE & RESTAURANT.
          </p>
        </div>
      </div>
    </section>
  );
};
