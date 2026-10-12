import React, { useState, useMemo } from 'react';
import { Search, Sparkles, CheckCircle2, FileText, ChevronRight, Filter, AlertCircle } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';

interface MenuSectionProps {
  onOpenMenuModal: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenMenuModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      const categoryMatch =
        selectedCategory === 'all' || item.category === selectedCategory;

      // Dietary match
      const dietaryMatch =
        dietaryFilter === 'all' ||
        item.dietary === dietaryFilter ||
        item.dietary === 'dual';

      // Search match
      const searchMatch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.bengaliName && item.bengaliName.includes(searchQuery)) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());

      return categoryMatch && dietaryMatch && searchMatch;
    });
  }, [selectedCategory, dietaryFilter, searchQuery]);

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#171717] text-[#F6F0E6] relative">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#C7A56A]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F1F1F] border border-[#C7A56A]/30 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C7A56A]" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#C7A56A]">
              Authentic Dining Selections
            </span>
          </div>

          <div className="text-xs sm:text-sm font-bengali text-[#C7A56A]/90 font-medium tracking-wide mb-2">
            আমাদের সুস্বাদু মেনু সম্ভার
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F6F0E6] tracking-tight">
            Something Delicious Awaits.
          </h2>

          <div className="w-16 h-0.5 bg-[#C7A56A] mx-auto mt-4 mb-4"></div>

          <p className="text-sm sm:text-base text-[#ded2bd] leading-relaxed font-light">
            Explore comforting favorites and tempting bites for every kind of craving. Items marked with verified badges reflect exact pricing and portions from our physical printed menu card.
          </p>
        </div>

        {/* Authentic Menu Card Interactive Banner Callout */}
        <div className="mb-10 bg-gradient-to-r from-[#1C1C1C] via-[#222222] to-[#1C1C1C] border border-[#C7A56A]/30 rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#C7A56A]/10 border border-[#C7A56A]/30 flex items-center justify-center text-[#C7A56A] shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-semibold text-base sm:text-lg text-[#F6F0E6]">
                  Authentic Printed Menu Card Reference
                </h3>
                <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2 py-0.5 rounded-full font-bold">
                  Verified Photo
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#85817A] mt-0.5">
                Inspect the original menu card photograph featuring confirmed prices for Chinese Soups & Main Courses.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenMenuModal}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#C7A56A] hover:bg-[#d8b97c] text-[#171717] font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0 cursor-pointer"
          >
            <span>View Full Menu Card</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Controls: Category Filter Tabs, Dietary Filter, and Search Bar */}
        <div className="space-y-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#C7A56A] text-[#171717] shadow-lg shadow-[#C7A56A]/20 scale-102'
                      : 'bg-[#1F1F1F] text-[#ded2bd] hover:bg-[#262626] hover:text-white border border-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Bar & Dietary Filter Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-[#85817A] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search soups, chicken, paneer, coffee..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#1F1F1F] border border-white/10 rounded-xl text-xs text-[#F6F0E6] placeholder-[#85817A] focus:outline-none focus:border-[#C7A56A] transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#85817A] hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dietary Preference Filter */}
            <div className="flex items-center gap-1.5 bg-[#1F1F1F] p-1 rounded-xl border border-white/10 text-xs self-start sm:self-auto">
              <span className="text-[11px] text-[#85817A] px-2 flex items-center gap-1">
                <Filter className="w-3 h-3" /> Diet:
              </span>
              <button
                type="button"
                onClick={() => setDietaryFilter('all')}
                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                  dietaryFilter === 'all'
                    ? 'bg-[#2E2E2E] text-white font-medium'
                    : 'text-[#85817A] hover:text-white'
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setDietaryFilter('veg')}
                className={`px-3 py-1 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
                  dietaryFilter === 'veg'
                    ? 'bg-emerald-950 text-emerald-400 font-medium border border-emerald-500/40'
                    : 'text-[#85817A] hover:text-emerald-400'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Veg Only
              </button>
              <button
                type="button"
                onClick={() => setDietaryFilter('non-veg')}
                className={`px-3 py-1 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
                  dietaryFilter === 'non-veg'
                    ? 'bg-rose-950 text-rose-400 font-medium border border-rose-500/40'
                    : 'text-[#85817A] hover:text-rose-400'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                Non-Veg Only
              </button>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-6 flex items-center justify-between text-xs text-[#85817A]">
          <span>
            Showing <strong className="text-white">{filteredItems.length}</strong> items
            {selectedCategory !== 'all' && ` in ${MENU_CATEGORIES.find(c => c.id === selectedCategory)?.label}`}
          </span>
          <span className="italic text-[11px]">
            *Images are illustrative culinary styling; dishes prepared authentic on order.
          </span>
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#1A1A1A] rounded-2xl border border-white/5">
            <AlertCircle className="w-10 h-10 text-[#C7A56A] mx-auto mb-3" />
            <h3 className="font-serif text-lg text-[#F6F0E6] mb-1">No dishes found matching your query</h3>
            <p className="text-xs text-[#85817A] max-w-sm mx-auto mb-4">
              Try searching for "soup", "paneer", "chicken", or clear your current dietary filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setDietaryFilter('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#C7A56A] text-[#171717] text-xs font-bold rounded-lg hover:bg-[#d8b97c] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-[#1A1A1A] hover:bg-[#202020] border border-white/10 hover:border-[#C7A56A]/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                <div>
                  {/* Dish Image Container */}
                  <div className="relative h-48 w-full overflow-hidden bg-black/40">
                    <img
                      src={item.illustrativeImage}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-black/30"></div>

                    {/* Dietary badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      {item.dietary === 'veg' && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-emerald-500/50 text-[10px] text-emerald-400 font-bold tracking-wider uppercase">
                          <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Veg
                        </span>
                      )}
                      {item.dietary === 'non-veg' && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-rose-500/50 text-[10px] text-rose-400 font-bold tracking-wider uppercase">
                          <span className="w-2 h-2 rounded-full bg-rose-500"></span> Non-Veg
                        </span>
                      )}
                      {item.dietary === 'dual' && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-amber-500/50 text-[10px] text-amber-300 font-bold tracking-wider uppercase">
                          Veg / Non-Veg
                        </span>
                      )}
                    </div>

                    {/* Price Tag Overlay */}
                    <div className="absolute bottom-3 right-3 bg-black/85 backdrop-blur-md border border-[#C7A56A]/50 px-3 py-1 rounded-lg text-right">
                      <span className="font-serif font-bold text-base text-[#C7A56A]">
                        {item.price}
                      </span>
                    </div>

                    {/* Portion Tag */}
                    {item.portion && (
                      <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-[#ded2bd] border border-white/10">
                        {item.portion}
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div>
                        <h3 className="font-serif font-bold text-lg text-[#F6F0E6] group-hover:text-[#C7A56A] transition-colors leading-snug">
                          {item.name}
                        </h3>
                        {item.bengaliName && (
                          <span className="text-xs font-bengali text-[#85817A]">
                            {item.bengaliName}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-xs text-[#ded2bd]/80 leading-relaxed mt-2 line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer / Verification Status */}
                <div className="px-5 py-3 border-t border-white/5 bg-[#141414] flex items-center justify-between text-[11px]">
                  {item.isVerifiedFromMenuPhoto ? (
                    <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      Verified from Menu Card
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-[#C7A56A] font-medium">
                      <Sparkles className="w-3.5 h-3.5 shrink-0" />
                      Customer Favorite
                    </span>
                  )}

                  <span className="text-[#85817A] text-[10px]">
                    {item.categoryLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Menu Action Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#85817A] mb-4">
            Prices and portions are as indicated on the authentic physical menu card. Taxes or seasonal variations may apply.
          </p>
          <button
            type="button"
            onClick={onOpenMenuModal}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1F1F1F] hover:bg-[#262626] border border-[#C7A56A]/40 text-[#C7A56A] hover:text-white text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Open High-Resolution Menu Card Viewer</span>
          </button>
        </div>
      </div>
    </section>
  );
};
