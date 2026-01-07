import React from 'react';

const SocialProof: React.FC = () => {
    return (
        <section className="bg-gray-50 py-10 px-4">
            <div className="max-w-md mx-auto">
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
                    Donas de Salão Reais. Lucro Real.
                </h2>

                <div className="space-y-6">
                    {/* Testimonial 1 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex gap-1 mb-3 text-[#FFD700] text-sm">
                            {'★★★★★'}
                        </div>
                        <p className="text-gray-700 italic mb-4 text-sm leading-relaxed">
                            "O Protocolo me mostrou que eu perdia R$ 1.800/mês só com furos na agenda. Arrumei a casa na primeira semana."
                        </p>
                        <div className="flex items-center gap-3">
                            <img src="/raquel.png" alt="Raquel M." className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md" />
                            <div>
                                <p className="font-bold text-gray-900 text-sm">Raquel M.</p>
                                <p className="text-xs text-gray-500">Proprietária (São Paulo, SP)</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex gap-1 mb-3 text-[#FFD700] text-sm">
                            {'★★★★★'}
                        </div>
                        <p className="text-gray-700 italic mb-4 text-sm leading-relaxed">
                            "Eu trabalhava 12h por dia. Agora minha equipe sabe o que fazer e eu finalmente tirei férias de verdade."
                        </p>
                        <div className="flex items-center gap-3">
                            <img src="/maria.png" alt="Maria S." className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md" />
                            <div>
                                <p className="font-bold text-gray-900 text-sm">Maria S.</p>
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
