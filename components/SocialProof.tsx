import React from 'react';
import { IMAGES } from '../constants';

const SocialProof: React.FC = () => {
    return (
        <section className="bg-white py-12 px-4 border-b border-gray-100">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-center text-[28px] font-bold text-[#2D2D2D] mb-8">
                    Donas de Salão Reais. Lucro Real.
                </h2>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="bg-[#FAF8F5] p-6 rounded-xl border border-gray-100 flex-1 shadow-sm">
                        <div className="flex gap-2 mb-3">
                            <span className="material-symbols-outlined text-[#C9A227] text-sm">star</span>
                            <span className="material-symbols-outlined text-[#C9A227] text-sm">star</span>
                            <span className="material-symbols-outlined text-[#C9A227] text-sm">star</span>
                            <span className="material-symbols-outlined text-[#C9A227] text-sm">star</span>
                            <span className="material-symbols-outlined text-[#C9A227] text-sm">star</span>
                        </div>
                        <p className="text-[#2D2D2D] text-base leading-relaxed font-medium mb-4">
                            "O Protocolo me mostrou que eu perdia R$ 1.800/mês só com furos na agenda. Arrumei a casa na primeira semana."
                        </p>
                        <div className="flex items-center gap-3">
                            <img
                                src={IMAGES.landing.rachel}
                                alt="Raquel M."
                                className="h-10 w-10 rounded-full object-cover border border-gray-200"
                            />
                            <div>
                                <p className="font-bold text-[#2D2D2D] text-sm">Raquel M.</p>
                                <p className="text-xs text-gray-500">Proprietária (São Paulo, SP)</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#FAF8F5] p-6 rounded-xl border border-gray-100 flex-1 shadow-sm">
                        <div className="flex gap-2 mb-3">
                            <span className="material-symbols-outlined text-[#C9A227] text-sm">star</span>
                            <span className="material-symbols-outlined text-[#C9A227] text-sm">star</span>
                            <span className="material-symbols-outlined text-[#C9A227] text-sm">star</span>
                            <span className="material-symbols-outlined text-[#C9A227] text-sm">star</span>
                            <span className="material-symbols-outlined text-[#C9A227] text-sm">star</span>
                        </div>
                        <p className="text-[#2D2D2D] text-base leading-relaxed font-medium mb-4">
                            "Eu trabalhava 12h por dia. Agora minha equipe sabe o que fazer e eu finalmente tirei férias de verdade."
                        </p>
                        <div className="flex items-center gap-3">
                            <img
                                src={IMAGES.landing.maria}
                                alt="Maria S."
                                className="h-10 w-10 rounded-full object-cover border border-gray-200"
                            />
                            <div>
                                <p className="font-bold text-[#2D2D2D] text-sm">Maria S.</p>
                                <p className="text-xs text-gray-500">Proprietária (Belo Horizonte, MG)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
