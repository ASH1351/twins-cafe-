import React, { useState } from 'react';
import { Camera, ZoomIn, CheckCircle2, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/galleryData';
import { LightboxModal } from './LightboxModal';
import type { LightboxImage } from './LightboxModal';

interface GallerySectionProps {
  onOpenMenuModal: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenMenuModal }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const lightboxImages: LightboxImage[] = GALLERY_ITEMS.map((item) => ({
    src: item.src,
    title: item.title,
    description: item.description,
    badge: item.badge,
    isAuthentic: item.isAuthenticAsset
  }));

  const handleOpenPhoto = (index: number) => {
    setCurrentPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#171717] text-[#F6F0E6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F1F1F] border border-[#C7A56A]/30 mb-3">
            <Camera className="w-3.5 h-3.5 text-[#C7A56A]" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#C7A56A]">
              Visual Showcase
            </span>
          </div>

          <div className="text-xs sm:text-sm font-bengali text-[#C7A56A]/90 font-medium tracking-wide mb-2">
            আমাদের ক্যাফে ও রেস্টুরেন্টের কিছু মুহূর্ত
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F6F0E6] tracking-tight">
            A Little Look Inside.
          </h2>

          <div className="w-16 h-0.5 bg-[#C7A56A] mx-auto mt-4 mb-4"></div>

          <p className="text-sm sm:text-base text-[#ded2bd] leading-relaxed font-light">
            Genuine glimpses of TWINS CAFE & RESTAURANT: our authentic storefront, outdoor umbrella patio, interior murals, and verified physical menu card.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-12 gap-6 items-stretch">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className={`${item.aspect || 'col-span-12 sm:col-span-6'} group relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#C7A56A]/60 bg-[#121212] transition-all duration-300 shadow-xl cursor-pointer`}
              onClick={() => handleOpenPhoto(index)}
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 group-hover:via-black/20 transition-colors"></div>

              {/* Top Authentic Verification Badge */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-emerald-500/40 text-[10px] sm:text-xs text-white font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  {item.badge}
                </span>
              </div>

              {/* Zoom Hover Icon Button */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-2.5 rounded-full bg-black/70 backdrop-blur-md text-[#C7A56A] border border-white/20">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col justify-end">
                <span className="text-[11px] uppercase tracking-widest text-[#C7A56A] font-semibold mb-1">
                  {item.categoryLabel}
                </span>

                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#F6F0E6] group-hover:text-[#C7A56A] transition-colors leading-snug">
                  {item.title}
                </h3>

                {item.bengaliTitle && (
                  <span className="text-xs font-bengali text-[#ded2bd]/70 mt-0.5">
                    {item.bengaliTitle}
                  </span>
                )}

                <p className="text-xs text-[#ded2bd]/80 mt-2 line-clamp-2 font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* Transparent Community & Future Upload Placeholder */}
          <div className="col-span-12 sm:col-span-12 lg:col-span-12 p-6 sm:p-8 rounded-2xl border border-dashed border-[#C7A56A]/40 bg-[#1A1A1A]/60 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#C7A56A]/10 border border-[#C7A56A]/30 flex items-center justify-center text-[#C7A56A] shrink-0">
                <ImageIcon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-semibold text-base sm:text-lg text-[#F6F0E6]">
                  Transparent Brand Photography Policy
                </h4>
                <p className="text-xs text-[#85817A] max-w-xl mt-1">
                  We believe in presenting genuine restaurant visuals. Only verified photos of the actual storefront and printed menu card are featured here. Additional diner moments will be added as verified.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenMenuModal}
              className="px-5 py-2.5 rounded-full bg-[#1F1F1F] hover:bg-[#262626] border border-[#C7A56A]/40 text-[#C7A56A] hover:text-white text-xs font-semibold uppercase tracking-wider transition-all shrink-0 cursor-pointer"
            >
              Inspect Printed Menu Card
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={lightboxImages}
        currentIndex={currentPhotoIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setCurrentPhotoIndex(idx)}
      />
    </section>
  );
};
