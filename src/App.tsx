import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BrandStory } from './components/BrandStory';
import { MenuSection } from './components/MenuSection';
import { FeaturedFood } from './components/FeaturedFood';
import { WhyVisitSection } from './components/WhyVisitSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { MenuModal } from './components/MenuModal';

export const App: React.FC = () => {
  const [menuModalOpen, setMenuModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#171717] text-[#F6F0E6] flex flex-col font-sans relative selection:bg-[#C7A56A] selection:text-[#171717]">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#C7A56A] text-[#171717] font-bold rounded-lg shadow-xl"
      >
        Skip to main content
      </a>

      {/* Sticky Header Navigation */}
      <Navbar onOpenMenuModal={() => setMenuModalOpen(true)} />

      {/* Main Content Landmarks */}
      <main id="main-content" className="flex-1">
        {/* Section B: Cinematic Hero */}
        <HeroSection onOpenMenuModal={() => setMenuModalOpen(true)} />

        {/* Section C: Brand Introduction & Story */}
        <BrandStory onOpenStorefrontModal={() => {}} />

        {/* Section D: Interactive Signature Menu */}
        <MenuSection onOpenMenuModal={() => setMenuModalOpen(true)} />

        {/* Section E: Featured Food Experience */}
        <FeaturedFood />

        {/* Section F: Why Visit Twins? */}
        <WhyVisitSection />

        {/* Section G: Authentic Photo Gallery */}
        <GallerySection onOpenMenuModal={() => setMenuModalOpen(true)} />

        {/* Section H: Customer Reviews & Ratings */}
        <ReviewsSection />

        {/* Section I: Location & Contact */}
        <LocationSection />
      </main>

      {/* Section J: Dark Editorial Footer */}
      <Footer onOpenMenuModal={() => setMenuModalOpen(true)} />

      {/* Mobile Fixed Bottom Action Bar */}
      <MobileActionBar onOpenMenuModal={() => setMenuModalOpen(true)} />

      {/* High-Resolution Printed Menu Card Lightbox Modal */}
      <MenuModal
        isOpen={menuModalOpen}
        onClose={() => setMenuModalOpen(false)}
      />
    </div>
  );
};

export default App;
