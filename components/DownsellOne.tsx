import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Hand, Clock, ShieldCheck, Lock } from 'lucide-react';

const DownsellOne: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleYes = () => {
    // Logic for R$ 17 purchase
    console.log('Downsell Accepted: Manual de Conversas Lucrativas (R$ 17)');
    navigate('/upsell2'); // Proceed to next step
  };

  const handleNo = () => {
    // Logic for decline
    console.log('Downsell Declined');
    navigate('/upsell2'); // Proceed to next step without product
  };

  return (
    <div className="font-sans antialiased bg-white min-h-screen flex flex-col">

      {/* SECTION 1: THE EMPATHETIC HOOK (Hero - Dark Background) */}
      <section className="bg-[#1A1A1A] text-white pt-8 pb-10 px-4 text-center border-b border-[#333]">
        <div className="max-w-md mx-auto space-y-4">

          <div className="flex justify-center mb-2">
            <Hand size={48} className="text-[#FFD700]" />
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold leading-tight">
            R$ 37,00 pesou no bolso agora?
          </h1>

          <p className="text-gray-400 text-lg leading-snug">
            Eu entendo. O momento exige cautela com cada centavo. Mas eu prefiro que você tenha essa solução em mãos do que sair de mãos vazias.
          </p>

        </div>
      </section>

      {/* SECTION 2: THE "NO BRAINER" DEAL (White Background) */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-md mx-auto">

          {/* Offer Card */}
          <div className="border-2 border-[#F2C94C] rounded-xl p-6 text-center shadow-lg relative bg-white">
            <p className="text-xs font-bold text-[#F2C94C] uppercase tracking-widest mb-4">
              OFERTA DE ÚLTIMA CHANCE
            </p>

            <p className="text-gray-500 text-sm font-medium mb-1">Desconto de Parceira:</p>

            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-gray-400 text-xl font-bold line-through decoration-gray-400">De R$ 37,00</span>
              <span className="text-4xl md:text-5xl font-extrabold text-[#FFD700] tracking-tight">POR R$ 17,00</span>
            </div>

            <p className="text-[#27AE60] text-sm font-bold mt-4 mb-2">
              Economize R$ 20,00 instantaneamente. É menos que um lanche.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 3: REASSURANCE (You still get everything) */}
      <section className="bg-gray-50 py-10 px-4 border-t border-gray-100">
        <div className="max-w-md mx-auto">
          <h3 className="font-bold text-[#2D2D2D] text-lg text-center mb-6">
            Você ainda leva o MANUAL COMPLETO:
          </h3>

          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm space-y-4">
            {[
              "Todos os 50+ Scripts de Vendas.",
              "Os modelos de WhatsApp 'Copia e Cola'.",
              "O Script Anti-Calote.",
              "Acesso Vitalício (Sem pegadinhas)."
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-sm">✓</span>
                <p className="text-gray-700 text-base font-medium leading-tight">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: URGENCY & CTA */}
      <section className="bg-white py-12 px-4 pb-20">
        <div className="max-w-md mx-auto text-center">

          <div className="flex items-center justify-center gap-2 text-[#E85D04] font-bold text-xs uppercase tracking-wide mb-6">
            <Clock size={16} />
            <span>Esse desconto desaparece assim que você fechar essa página.</span>
          </div>

          {/* Secure Icon */}
          <div className="flex items-center justify-center gap-1 text-xs font-bold text-gray-400 mb-2">
            <Lock size={12} />
            <span>Checkout Seguro</span>
          </div>

          <button
            onClick={handleYes}
            className="w-full bg-gradient-to-r from-[#F2994A] to-[#F2C94C] text-black font-extrabold text-lg py-4 rounded-lg shadow-[0_4px_15px_rgba(242,153,74,0.4)] hover:shadow-[0_6px_20px_rgba(242,153,74,0.6)] transform transition hover:scale-105 mb-4 leading-tight border border-[#F2C94C]"
          >
            SIM! QUERO PAGAR APENAS R$ 17
            <span className="block text-xs font-medium opacity-80 mt-1 uppercase tracking-wide text-[#3E2700]">Adicionar ao meu pedido agora</span>
          </button>

          <button
            onClick={handleNo}
            className="text-xs text-gray-400 hover:text-gray-600 underline max-w-xs mx-auto block leading-relaxed"
          >
            Não, obrigado. Eu realmente não quero saber o que dizer para vender mais. Vou recusar a oferta de R$ 17.
          </button>

        </div>
      </section>

      {/* SECTION 5: FOOTER */}
      <footer className="bg-[#FAF8F5] py-8 border-t border-gray-200 text-center mt-auto">
        <div className="flex items-center justify-center gap-4 opacity-50 grayscale mb-4">
          <div className="flex items-center gap-1 text-[10px] font-bold text-gray-500 uppercase">
            <Lock size={12} /> SSL Secure
          </div>
          <div className="flex items-center gap-1 text-[10px] font-bold text-gray-500 uppercase">
            <ShieldCheck size={12} /> Privacy Protected
          </div>
        </div>
        <p className="text-gray-400 text-[10px] font-medium">
          © 2026 Protocolo Salão CEO
        </p>
      </footer>

    </div>
  );
};

export default DownsellOne;