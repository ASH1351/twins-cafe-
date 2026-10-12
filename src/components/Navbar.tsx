import React, { useState, useEffect } from 'react';
import { Menu, X, Navigation, Phone, MapPin, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenMenuModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Story', href: '#story' },
    { label: 'Menu', href: '#menu' },
    { label: 'Food Experience', href: '#experience' },
    { label: 'Why Twins', href: '#why-us' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#171717]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#C7A56A]/20'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark & Bengali Subtitle */}
          <a
            href="#home"
            className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A56A] rounded-md"
            aria-label="Twins Cafe and Restaurant Homepage"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C7A56A] group-hover:scale-125 transition-transform"></span>
              <span className="font-serif tracking-wider font-bold text-lg sm:text-xl lg:text-2xl text-[#F6F0E6] group-hover:text-[#C7A56A] transition-colors uppercase">
                Twins Cafe & Restaurant
              </span>
            </div>
            <span className="text-[11px] sm:text-xs text-[#C7A56A] font-bengali font-normal tracking-wide pl-4 group-hover:text-[#F6F0E6] transition-colors">
              টুইন ক্যাফে & রেস্টুরেন্ট · City Center, Durgapur
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-widest text-[#F6F0E6]/80 hover:text-[#C7A56A] font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C7A56A] hover:after:w-full after:transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A56A] rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={RESTAURANT_INFO.links.callTel}
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#F6F0E6] hover:text-[#C7A56A] transition-colors rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A56A]"
              title="Call restaurant"
            >
              <Phone className="w-3.5 h-3.5 text-[#C7A56A]" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>

            <a
              href={RESTAURANT_INFO.links.googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C7A56A] hover:bg-[#d8b97c] text-[#171717] px-4 py-2 rounded-full text-xs uppercase tracking-wider font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C7A56A]"
            >
              <Navigation className="w-3.5 h-3.5 fill-current" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#F6F0E6] hover:text-[#C7A56A] focus:outline-none focus:ring-2 focus:ring-[#C7A56A] rounded-lg transition-colors"
            aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 lg:hidden bg-black/80 backdrop-blur-md flex flex-col justify-between p-6 animate-fade-in"
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#C7A56A]/20">
            <div>
              <div className="font-serif font-bold text-lg text-[#F6F0E6]">
                TWINS CAFE & RESTAURANT
              </div>
              <div className="text-xs text-[#C7A56A] font-bengali">
                টুইন ক্যাফে & রেস্টুরেন্ট
              </div>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white hover:text-[#C7A56A] rounded-full focus:outline-none focus:ring-2 focus:ring-[#C7A56A]"
              aria-label="Close menu drawer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Links */}
          <nav className="flex-1 flex flex-col justify-center space-y-4 my-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif tracking-wide text-[#F6F0E6] hover:text-[#C7A56A] py-2 border-b border-white/5 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[#C7A56A]/50 text-xs">→</span>
              </a>
            ))}
          </nav>

          {/* Drawer Quick Actions */}
          <div className="pt-4 border-t border-[#C7A56A]/20 space-y-3">
            <div className="text-xs text-[#85817A] flex items-center gap-1.5 mb-2">
              <MapPin className="w-3.5 h-3.5 text-[#C7A56A]" />
              <span>B 18, City Center, Durgapur · Open till 10:30 PM</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={RESTAURANT_INFO.links.callTel}
                className="inline-flex items-center justify-center gap-2 py-3 bg-[#262626] border border-white/10 rounded-xl text-xs font-semibold text-white hover:border-[#C7A56A] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C7A56A]" />
                <span>Call Now</span>
              </a>
              <a
                href={RESTAURANT_INFO.links.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 bg-[#C7A56A] text-[#171717] rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#d8b97c] transition-colors"
              >
                <Navigation className="w-4 h-4 fill-current" />
                <span>Directions</span>
              </a>
            </div>

            <div className="text-center pt-2">
              <span className="text-[11px] text-[#85817A] inline-flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#C7A56A]" />
                Rated 4.5/5 from 544+ Google Reviews
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
