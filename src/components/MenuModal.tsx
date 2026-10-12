import React, { useEffect, useState } from 'react';
import { X, ZoomIn, ZoomOut, CheckCircle2, FileText, Info } from 'lucide-react';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeTab, setActiveTab] = useState<'photo' | 'transcription'>('photo');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setIsZoomed(false);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Original Menu Card"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-6 transition-opacity duration-300"
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#171717] border border-[#C7A56A]/30 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#C7A56A]/20 bg-[#121212]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#C7A56A]/10 rounded-lg text-[#C7A56A]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-serif font-semibold text-[#F6F0E6]">
                  Authentic Printed Menu Card
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3" /> Real In-House Reference
                </span>
              </div>
              <p className="text-xs text-[#85817A]">
                TWINS CAFE & RESTAURANT · City Center, Durgapur
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="flex bg-[#262626] rounded-lg p-0.5 text-xs">
              <button
                type="button"
                onClick={() => setActiveTab('photo')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  activeTab === 'photo'
                    ? 'bg-[#C7A56A] text-[#171717] font-medium'
                    : 'text-[#85817A] hover:text-white'
                }`}
              >
                Menu Photo
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('transcription')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  activeTab === 'transcription'
                    ? 'bg-[#C7A56A] text-[#171717] font-medium'
                    : 'text-[#85817A] hover:text-white'
                }`}
              >
                Text Price List
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#C7A56A]"
              aria-label="Close menu modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {activeTab === 'photo' ? (
            <div className="flex flex-col items-center">
              <div className="w-full flex justify-between items-center mb-3 text-xs text-[#85817A]">
                <span>Click image to zoom in/out</span>
                <button
                  type="button"
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#262626] hover:bg-[#333] text-[#C7A56A] rounded-md transition-colors"
                >
                  {isZoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
                  {isZoomed ? 'Reset View' : 'Zoom Card'}
                </button>
              </div>

              <div
                className={`w-full flex justify-center overflow-auto rounded-xl border border-white/10 bg-black/60 p-2 cursor-pointer ${
                  isZoomed ? 'scale-125 transition-transform duration-300 my-8' : ''
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <img
                  src="/images/twins_cafe_menu_original.png"
                  alt="Original printed menu photograph of Twins Cafe & Restaurant Durgapur showing Chinese Soups and Main Courses"
                  className="max-h-[65vh] object-contain rounded-lg shadow-xl"
                />
              </div>

              <p className="mt-3 text-xs text-center text-[#85817A] italic">
                *Photographed directly from the physical menu card provided by the restaurant owner.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-[#1F1F1F] border border-[#C7A56A]/20 p-4 rounded-xl flex items-start gap-3">
                <Info className="w-5 h-5 text-[#C7A56A] shrink-0 mt-0.5" />
                <div className="text-xs text-[#ded2bd] leading-relaxed">
                  Below is the direct, unedited transcription of items and prices confirmed from the physical menu photograph. For items on additional pages (such as pizzas, cold coffee, and desserts), prices are subject to seasonal verification at the restaurant.
                </div>
              </div>

              {/* Chinese Soup Table */}
              <div className="border border-white/10 rounded-xl overflow-hidden bg-[#121212]">
                <div className="bg-[#1F1F1F] px-4 py-3 border-b border-white/10 flex justify-between items-center">
                  <h4 className="font-serif font-medium text-[#C7A56A] text-sm uppercase tracking-wider">
                    Chinese Soup Section
                  </h4>
                  <span className="text-[11px] text-[#85817A]">Veg / Non-Veg Options</span>
                </div>
                <div className="divide-y divide-white/5 text-sm">
                  <div className="grid grid-cols-12 px-4 py-2.5 font-medium text-xs text-[#85817A] uppercase bg-[#181818]">
                    <div className="col-span-7">Soup Name</div>
                    <div className="col-span-2 text-right">Veg</div>
                    <div className="col-span-3 text-right">Non-Veg</div>
                  </div>
                  <div className="grid grid-cols-12 px-4 py-3 items-center hover:bg-white/5 transition-colors">
                    <div className="col-span-7 text-[#F6F0E6] font-medium">Sweet Corn Soup (V/C)</div>
                    <div className="col-span-2 text-right text-emerald-400 font-semibold">₹149</div>
                    <div className="col-span-3 text-right text-rose-400 font-semibold">₹169</div>
                  </div>
                  <div className="grid grid-cols-12 px-4 py-3 items-center hover:bg-white/5 transition-colors">
                    <div className="col-span-7 text-[#F6F0E6] font-medium">Hot & Sour Soup (V/C)</div>
                    <div className="col-span-2 text-right text-emerald-400 font-semibold">₹149</div>
                    <div className="col-span-3 text-right text-rose-400 font-semibold">₹169</div>
                  </div>
                  <div className="grid grid-cols-12 px-4 py-3 items-center hover:bg-white/5 transition-colors">
                    <div className="col-span-7 text-[#F6F0E6] font-medium">Noodles Soup (V/C)</div>
                    <div className="col-span-2 text-right text-emerald-400 font-semibold">₹159</div>
                    <div className="col-span-3 text-right text-rose-400 font-semibold">₹189</div>
                  </div>
                  <div className="grid grid-cols-12 px-4 py-3 items-center hover:bg-white/5 transition-colors">
                    <div className="col-span-7 text-[#F6F0E6] font-medium">Manchow Soup (V/C)</div>
                    <div className="col-span-2 text-right text-emerald-400 font-semibold">₹159</div>
                    <div className="col-span-3 text-right text-rose-400 font-semibold">₹189</div>
                  </div>
                  <div className="grid grid-cols-12 px-4 py-3 items-center hover:bg-white/5 transition-colors">
                    <div className="col-span-7 text-[#F6F0E6] font-medium">Chicken Lemon Coriander Soup</div>
                    <div className="col-span-2 text-right text-[#85817A]">-</div>
                    <div className="col-span-3 text-right text-rose-400 font-semibold">₹189</div>
                  </div>
                  <div className="grid grid-cols-12 px-4 py-3 items-center hover:bg-white/5 transition-colors">
                    <div className="col-span-7 text-[#F6F0E6] font-medium">Twins (TCR) Special Soup (V/C)</div>
                    <div className="col-span-2 text-right text-emerald-400 font-semibold">₹189</div>
                    <div className="col-span-3 text-right text-rose-400 font-semibold">₹209</div>
                  </div>
                </div>
              </div>

              {/* Chinese Main Course Veg */}
              <div className="border border-white/10 rounded-xl overflow-hidden bg-[#121212]">
                <div className="bg-[#1F1F1F] px-4 py-3 border-b border-white/10 flex justify-between items-center">
                  <h4 className="font-serif font-medium text-emerald-400 text-sm uppercase tracking-wider">
                    Chinese Main Course (Veg)
                  </h4>
                  <span className="text-[11px] text-[#85817A]">Verified Prices</span>
                </div>
                <div className="divide-y divide-white/5 text-sm">
                  <div className="flex justify-between px-4 py-3 hover:bg-white/5 transition-colors">
                    <span className="text-[#F6F0E6] font-medium">Veg Manchurian (8 Pcs)</span>
                    <span className="text-emerald-400 font-semibold">₹189</span>
                  </div>
                  <div className="flex justify-between px-4 py-3 hover:bg-white/5 transition-colors">
                    <span className="text-[#F6F0E6] font-medium">Gobi Chilly</span>
                    <span className="text-emerald-400 font-semibold">₹199</span>
                  </div>
                  <div className="flex justify-between px-4 py-3 hover:bg-white/5 transition-colors">
                    <span className="text-[#F6F0E6] font-medium">Paneer Chilly (8 Pcs)</span>
                    <span className="text-emerald-400 font-semibold">₹259</span>
                  </div>
                  <div className="flex justify-between px-4 py-3 hover:bg-white/5 transition-colors">
                    <span className="text-[#F6F0E6] font-medium">Mushroom Manchurian (8 Pcs)</span>
                    <span className="text-emerald-400 font-semibold">₹279</span>
                  </div>
                  <div className="flex justify-between px-4 py-3 hover:bg-white/5 transition-colors">
                    <span className="text-[#F6F0E6] font-medium">Mushroom Chilly</span>
                    <span className="text-emerald-400 font-semibold">₹289</span>
                  </div>
                </div>
              </div>

              {/* Chinese Main Course Non-Veg */}
              <div className="border border-white/10 rounded-xl overflow-hidden bg-[#121212]">
                <div className="bg-[#1F1F1F] px-4 py-3 border-b border-white/10 flex justify-between items-center">
                  <h4 className="font-serif font-medium text-rose-400 text-sm uppercase tracking-wider">
                    Chinese Main Course (Non-Veg)
                  </h4>
                  <span className="text-[11px] text-[#85817A]">Verified Prices</span>
                </div>
                <div className="divide-y divide-white/5 text-sm">
                  <div className="flex justify-between px-4 py-3 hover:bg-white/5 transition-colors">
                    <span className="text-[#F6F0E6] font-medium">Chilly Chicken (8 Pcs)</span>
                    <span className="text-rose-400 font-semibold">₹229</span>
                  </div>
                  <div className="flex justify-between px-4 py-3 hover:bg-white/5 transition-colors">
                    <span className="text-[#F6F0E6] font-medium">Ginger Chicken (8 Pcs)</span>
                    <span className="text-rose-400 font-semibold">₹259</span>
                  </div>
                  <div className="flex justify-between px-4 py-3 hover:bg-white/5 transition-colors">
                    <span className="text-[#F6F0E6] font-medium">Lemon Chicken (8 Pcs)</span>
                    <span className="text-rose-400 font-semibold">₹309</span>
                  </div>
                  <div className="flex justify-between px-4 py-3 hover:bg-white/5 transition-colors">
                    <span className="text-[#F6F0E6] font-medium">Hot Garlic Chicken (8 Pcs)</span>
                    <span className="text-rose-400 font-semibold">₹309</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-white/10 bg-[#121212] flex items-center justify-between text-xs text-[#85817A]">
          <span>Address: B 18, City Center, Durgapur</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-[#C7A56A] text-[#171717] font-semibold rounded-lg hover:bg-[#d8b97c] transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
