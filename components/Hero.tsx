import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <header className="relative w-full overflow-hidden bg-[#FDF8F3] pt-10 pb-16 px-4">
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl mx-auto text-center">

        {/* Eyebrow */}


        {/* Headline */}
        <h1 className="text-[#2D2D2D] text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight max-w-3xl">
          You didn't open a salon to become the hardest-working, lowest-paid employee.
        </h1>

        {/* Subheadline */}
        <p className="text-gray-600 text-base sm:text-lg font-normal leading-relaxed max-w-2xl mb-4">
          Your best stylist might be making more per hour than you. Here's why — and how to fix it.
        </p>

        {/* Video Placeholder */}
        <div className="w-full max-w-[720px] aspect-video bg-[#1a1a1a] rounded-lg shadow-2xl flex flex-col items-center justify-center text-white/50 mb-6 relative group cursor-pointer border border-gray-800">
          <span className="material-symbols-outlined text-6xl opacity-80 group-hover:scale-110 transition-transform text-[#C9A227]">play_circle</span>
          <p className="mt-2 text-sm font-medium">Video loading...</p>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center w-full gap-2">
          <button
            onClick={onCtaClick}
            className="w-full sm:w-auto bg-[#C9A227] text-white text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:bg-[#B8860B] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            Find My Profit Leaks <span className="material-symbols-outlined">arrow_forward</span>
          </button>

          {/* Micro Proof */}
          <p className="text-gray-400 text-xs mt-2">Join 500+ salon owners who've stopped the chaos</p>
        </div>

      </div>
    </header>
  );
};

export default Hero;
