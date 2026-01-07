import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <header className="relative w-full overflow-hidden bg-[#FAF8F5] pt-8 pb-10 px-4">
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-lg mx-auto text-center">

        {/* Headline */}
        <h1 className="text-[#2D2D2D] text-[32px] sm:text-4xl font-extrabold leading-[1.1] tracking-tight">
          The 'Invisible Tax' That Keeps 88% of Salon Owners Broke <span className="font-normal block text-xl sm:text-2xl mt-2 italic">(Even With a Full Schedule)</span>
        </h1>

        {/* Subheadline */}
        <p className="text-[#2D2D2D] text-lg font-normal leading-snug opacity-90 max-w-md">
          Discover the 5 profit leaks draining your bank account and how to plug them in 15 minutes.
        </p>

        {/* VSL Container */}
        <div className="w-full max-w-[400px] aspect-[9/16] bg-black rounded-xl shadow-2xl relative overflow-hidden border border-gray-200 mt-2">
          {/* Placeholder for Vturb */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
            <span className="material-symbols-outlined text-4xl mb-2 text-[#C9A227]">play_circle</span>
            <p className="font-mono text-xs uppercase tracking-widest text-[#C9A227] font-bold">VTURB PLAYER EMBED HERE</p>
            <p className="text-[10px] text-gray-500 mt-2">Aspect Ratio 9:16 (Vertical)</p>
          </div>
        </div>

        {/* Sticky CTA */}
        <div className="w-full max-w-[400px] flex flex-col items-center gap-2">
          <button
            onClick={onCtaClick}
            className="w-full bg-[#C9A227] text-white text-xl font-bold py-5 px-6 rounded-lg shadow-lg shadow-[#C9A227]/30 hover:bg-[#B8860B] active:scale-[0.98] transition-all animate-pulse-slow flex flex-col items-center justify-center leading-none"
          >
            YES, FIND MY PROFIT LEAKS
          </button>

          {/* Micro-copy */}
          <p className="text-[#666666] text-[13px] font-normal italic text-center">
            Get started for less than the cost of two tubes of color.
          </p>
        </div>

      </div>
    </header>
  );
};

export default Hero;
