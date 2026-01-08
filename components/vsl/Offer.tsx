import React from 'react';
import { Check, X } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface OfferProps {
    onBuyComplete: () => void;
    onBuyBasic: () => void;
}

const Offer: React.FC<OfferProps> = ({ onBuyComplete, onBuyBasic }) => {
    return (
        <section id="pricing" className="bg-gray-50 py-12 px-4">
            <div className="max-w-md mx-auto space-y-8">

                {/* CARD A - RECOMMENDED (First) */}
                <div className={twMerge(
                    "relative bg-white rounded-2xl shadow-xl border-2 border-[#F2C94C] p-6 overflow-hidden",
                    "transform transition hover:scale-[1.02]"
                )}>
                    {/* Badge */}
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-[#F2994A] to-[#F2C94C] text-[#3E2700] text-xs font-bold px-3 py-1 rounded-bl-lg shadow-sm">
                        RECOMENDADO
                    </div>

                    <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-gray-900 border-b-2 border-[#F2C94C] pb-2 inline-block">
                            Plano Completo
                        </h3>
                        <p className="text-sm text-gray-500 mt-2">
                            O Protocolo Detector + Aceleradores de Lucro
                        </p>
                    </div>

                    <ul className="space-y-3 mb-6">
                        {[
                            "Protocolo Detector de Sócio Oculto (Principal)",
                            "BÔNUS 1: Mapa do Salão de R$ 500k",
                            "BÔNUS 2: Protocolo de Precificação \"Lucro Primeiro\"",
                            "BÔNUS 3: Manual de Retenção de Clientes",
                            "BÔNUS 4: Biblioteca de Processos (POPs)",
                            "BÔNUS 5: Calendário de Ação de 90 Dias",
                            "Acesso Vitalício + Atualizações Futuras"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                <Check className="text-[#F2994A] flex-shrink-0" size={18} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="text-center mb-6">
                        <p className="text-lg text-red-600 line-through font-bold">De R$ 197,00</p>
                        <p className="text-3xl font-extrabold text-[#3E2700]">
                            por R$ 37,00
                        </p>
                    </div>

                    <button
                        onClick={onBuyComplete}
                        className="w-full bg-gradient-to-r from-[#F2994A] to-[#F2C94C] text-[#3E2700] font-bold py-3 rounded-lg shadow-[0_0_15px_rgba(242,201,76,0.5)] hover:shadow-[0_0_25px_rgba(242,201,76,0.7)] transition transform hover:scale-105"
                    >
                        QUERO OBTER PLANO
                    </button>
                </div>

                {/* CARD B - BASIC (Second, Active White Background) */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-300 p-6 hover:shadow-md transition">
                    <div className="text-center mb-6">
                        <h3 className="text-lg font-bold text-gray-700">
                            PLANO BÁSICO
                        </h3>
                        <p className="text-sm text-gray-500 mt-2">
                            Apenas o Protocolo Essencial
                        </p>
                    </div>

                    <ul className="space-y-3 mb-6">
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                            <Check className="text-green-500 flex-shrink-0" size={18} />
                            <span>Acesso ao Protocolo Detector</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                            <Check className="text-green-500 flex-shrink-0" size={18} />
                            <span>Acesso Vitalício</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                            <Check className="text-green-500 flex-shrink-0" size={18} />
                            <span>Atualizações Gratuitas</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-400">
                            <X className="text-red-400 flex-shrink-0" size={18} />
                            <span>Sem os Manuais de Aceleração</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-400">
                            <X className="text-red-400 flex-shrink-0" size={18} />
                            <span>Sem os Bônus de Gestão</span>
                        </li>
                    </ul>

                    <div className="text-center mb-6">
                        <p className="text-2xl font-bold text-gray-800">
                            R$ 10,00
                        </p>
                    </div>

                    <button
                        onClick={onBuyBasic}
                        className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold py-3 rounded-lg border border-gray-300 transition text-sm"
                    >
                        QUERO OBTER PLANO
                    </button>
                </div>

            </div>
        </section >
    );
};

export default Offer;
