import React from 'react';
import { Phone, Navigation, BookOpen } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface MobileActionBarProps {
  onOpenMenuModal: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenMenuModal }) => {
  return (
    <aside
      aria-label="Quick mobile contact actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#121212]/95 backdrop-blur-lg border-t border-[#C7A56A]/30 px-4 py-2.5 shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call button */}
        <a
          href={RESTAURANT_INFO.links.callTel}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#1F1F1F] text-white hover:bg-[#262626] border border-white/5 active:scale-95 transition-all text-center"
          aria-label="Call Twins Cafe directly"
        >
          <Phone className="w-4 h-4 text-[#C7A56A] mb-0.5" />
          <span className="text-[10px] font-semibold tracking-wider uppercase">Call Cafe</span>
        </a>

        {/* View Menu */}
        <button
          type="button"
          onClick={onOpenMenuModal}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#1F1F1F] text-white hover:bg-[#262626] border border-white/5 active:scale-95 transition-all text-center"
          aria-label="View menu card"
        >
          <BookOpen className="w-4 h-4 text-[#C7A56A] mb-0.5" />
          <span className="text-[10px] font-semibold tracking-wider uppercase">Menu Card</span>
        </button>

        {/* Get Directions */}
        <a
          href={RESTAURANT_INFO.links.googleMapsDirections}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#C7A56A] text-[#171717] font-bold active:scale-95 transition-all text-center shadow-md shadow-[#C7A56A]/20"
          aria-label="Get directions on Google Maps"
        >
          <Navigation className="w-4 h-4 fill-current mb-0.5" />
          <span className="text-[10px] tracking-wider uppercase">Directions</span>
        </a>
      </div>
    </aside>
  );
};
