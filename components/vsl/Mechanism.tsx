import React from 'react';
import { LockOpen, Search, CircleDollarSign } from 'lucide-react';

const Mechanism: React.FC = () => {
    return (
        <section className="bg-white py-12 px-4">
            <div className="max-w-md mx-auto">
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
                    3 Passos para Blindar seu Salão
                </h2>

                <div className="space-y-8">
                    {/* Step 1 */}
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center text-[#FFD700] border-2 border-[#FFD700]">
                            <LockOpen size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900 mb-1">Acesse o Protocolo</h3>
                            <p className="text-gray-600">
                                Receba acesso imediato ao Manual Digital direto no seu celular (sem logins complicados).
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center text-[#FFD700] border-2 border-[#FFD700]">
                            <Search size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900 mb-1">Ative o Rastreio</h3>
                            <p className="text-gray-600">
                                Aplique o check-list que identifica falhas na <span className="font-bold text-gray-800">Precificação</span>, desperdício de <span className="font-bold text-gray-800">Estoque</span> e buracos na <span className="font-bold text-gray-800">Agenda</span>.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center text-[#FFD700] border-2 border-[#FFD700]">
                            <CircleDollarSign size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900 mb-1">Estanque a Sangria</h3>
                            <p className="text-gray-600">
                                Use as correções prontas para fechar esses ralos e ver o lucro real sobrar no final do dia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mechanism;
