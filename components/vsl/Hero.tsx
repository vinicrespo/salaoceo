import React from 'react';

interface HeroProps {
    onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
    // Script injected via index.html deferred loader
    // to improve PageSpeed (removed local injection)

    return (
        <section className="relative w-full bg-[#111111] flex flex-col items-center pt-8 pb-12 px-4 md:px-0 border-b border-[#222]">
            <div className="w-full max-w-lg flex flex-col items-center text-center space-y-6">

                {/* Headline */}
                <h1 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                    O 'Sócio Oculto' que mantém <span className="text-[#FFD700]">88% das Donas de Salão</span> no Vermelho (Mesmo com a Agenda Cheia)
                </h1>

                {/* Subheadline */}
                <p className="text-gray-300 text-lg leading-snug">
                    Descubra os vazamentos de lucro que acabam com seu caixa e aprenda como acabar com eles em 15 minutos.
                </p>

                {/* Video Container 9:16 */}
                <div className="w-full aspect-[9/16] bg-black rounded-xl overflow-hidden shadow-[0_0_30px_rgba(255,215,0,0.15)] border border-[#333] relative flex items-center justify-center">
                    {/* VTurb Player */}
                    {/* @ts-ignore */}
                    <vturb-smartplayer
                        id="vid-695edd7423fc590cf35d19c0"
                        style={{ display: 'block', width: '100%', height: '100%', border: 'none' }}
                    ></vturb-smartplayer>
                </div>

                {/* Main CTA Button */}
                <div className="w-full sticky bottom-4 z-50 px-2 md:static md:px-0 mt-4">
                    <button
                        onClick={onCtaClick}
                        className="w-full bg-gradient-to-r from-[#F2994A] to-[#F2C94C] text-[#3E2700] section-button font-extrabold text-xl py-4 rounded-lg shadow-[0_0_20px_rgba(242,201,76,0.6)] hover:shadow-[0_0_30px_rgba(242,201,76,0.8)] transform transition hover:scale-105 animate-pulse"
                    >
                        QUERO ENCONTRAR MEU LUCRO
                    </button>
                    {/* Micro-copy */}
                    <p className="mt-3 text-sm text-gray-400 italic">
                        Comece por menos que o valor de uma <span className="text-gray-300 font-bold">Escova</span>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
