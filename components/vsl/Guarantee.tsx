import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Guarantee: React.FC = () => {
    return (
        <section className="bg-white py-12 px-4 border-t border-gray-100">
            <div className="max-w-md mx-auto flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                    <ShieldCheck size={32} />
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Garantia de 30 Dias 'Sem Enrolação'
                </h2>

                <p className="text-gray-700 leading-relaxed">
                    Se você aplicar o protocolo e não encontrar pelo menos UM vazamento de dinheiro no seu salão, eu devolvo cada centavo. Sem letras miúdas.
                </p>
            </div>
        </section>
    );
};

export default Guarantee;
