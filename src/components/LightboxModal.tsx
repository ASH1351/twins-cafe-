import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, CheckCircle2 } from 'lucide-react';

export interface LightboxImage {
  src: string;
  title: string;
  description?: string;
  badge?: string;
  isAuthentic?: boolean;
}

interface LightboxModalProps {
  isOpen: boolean;
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setIsZoomed(false);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && images.length > 1) {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }
      if (e.key === 'ArrowRight' && images.length > 1) {
        onNavigate((currentIndex + 1) % images.length);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 transition-opacity duration-300"
    >
      {/* Top action bar */}
      <div className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-[#C7A56A] font-semibold bg-[#171717]/80 px-3 py-1.5 rounded-full border border-[#C7A56A]/30">
            {currentIndex + 1} / {images.length}
          </span>
          {current.isAuthentic && (
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-white bg-emerald-950/80 border border-emerald-500/40 px-3 py-1 rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Verified Authentic Photo
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            title={isZoomed ? "Zoom out" : "Zoom in"}
            aria-label="Toggle zoom"
          >
            {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#C7A56A]"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Image Container */}
      <div className="relative max-w-5xl max-h-[82vh] w-full flex flex-col items-center justify-center">
        <div
          className={`relative overflow-auto max-h-[70vh] flex items-center justify-center transition-transform duration-300 ${
            isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <img
            src={current.src}
            alt={current.title}
            className="max-h-[68vh] max-w-full object-contain rounded-lg shadow-2xl border border-white/10 select-none"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <h3 className="text-lg sm:text-xl font-serif text-[#F6F0E6] font-medium">
            {current.title}
          </h3>
          {current.description && (
            <p className="mt-1 text-xs sm:text-sm text-[#85817A] leading-relaxed">
              {current.description}
            </p>
          )}
        </div>
      </div>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#C7A56A] text-white hover:text-[#171717] transition-all border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#C7A56A]"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={() => onNavigate((currentIndex + 1) % images.length)}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#C7A56A] text-white hover:text-[#171717] transition-all border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#C7A56A]"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}
    </div>
  );
};
