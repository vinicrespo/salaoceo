import React, { useEffect } from 'react';
import { Hand, Clock, ShieldCheck, Lock, Check } from 'lucide-react';

const DownsellTwo: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleYes = () => {
    console.log('Downsell 2 Accepted: Roteiro 90 Dias (R$ 27)');
    // Proceed to Thank You page
    window.location.href = '/thank-you' + window.location.search;
  };

  const handleNo = () => {
    console.log('Downsell 2 Declined');
    // Proceed to Thank You page
    window.location.href = '/thank-you' + window.location.search;
  };

  return (
    <div className="font-sans antialiased bg-white min-h-screen flex flex-col">

      {/* SECTION 1: THE EMPATHY HOOK (Hero - Dark Background) */}
      <section className="bg-[#1A1A1A] text-white pt-8 pb-10 px-4 text-center border-b border-[#333]">
        <div className="max-w-md mx-auto space-y-4">

          <div className="flex justify-center mb-2">
            <Hand size={48} className="text-[#FFD700]" />
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold leading-tight">
            Eu não posso deixar você ir embora sem isso.
          </h1>

          <p className="text-gray-400 text-lg leading-snug">
            Vamos ser sinceras: Saber O QUE fazer é fácil. O difícil é manter a constância por 90 dias. Eu prefiro derrubar o preço agora do que te ver desistir na segunda semana.
          </p>

        </div>
      </section>

      {/* SECTION 2: THE "NO EXCUSES" OFFER (White Background) */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-md mx-auto text-center">

          <div className="border-2 border-[#F2C94C] rounded-xl p-6 shadow-lg relative bg-white">
            <p className="text-xs font-bold text-[#F2C94C] uppercase tracking-widest mb-4">
              DESCONTO FINAL DE PARCEIRA
            </p>

            <p className="text-gray-500 text-sm mb-1">De <span className="line-through">R$ 47,00</span></p>

            <p className="text-gray-900 font-bold mb-4">
              <span className="bg-[#1A1A1A] text-[#FFD700] rounded-full px-4 py-1 text-4xl font-extrabold inline-block mt-2 shadow-sm">POR R$ 27,00</span>
            </p>

            <p className="text-gray-500 text-xs font-medium">
              Isso é menos de R$ 0,30 centavos por dia de planejamento.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 3: REASSURANCE (You get everything) */}
      <section className="bg-gray-50 py-10 px-4 border-t border-gray-100">
        <div className="max-w-md mx-auto">
          <h3 className="font-bold text-[#2D2D2D] text-lg text-center mb-6">
            Você ainda recebe o ROTEIRO COMPLETO:
          </h3>

          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm space-y-4">
            {[
              "As tarefas diárias de 'Vitória Rápida'.",
              "Os temas de foco semanal.",
              "O Rastreador de Progresso Visual.",
              "Acesso Vitalício ao Plano."
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <Check className="text-[#FFD700] flex-shrink-0" size={20} />
                <p className="text-gray-700 text-sm font-medium">{item}</p>
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
            <span>Quando você sair dessa página, o preço volta para R$ 97 normais. É agora ou nunca.</span>
          </div>

          <button
            onClick={handleYes}
            className="w-full bg-gradient-to-r from-[#F2994A] to-[#F2C94C] text-[#000000] font-extrabold text-lg py-4 rounded-lg shadow-[0_4px_15px_rgba(242,153,74,0.4)] hover:shadow-[0_6px_20px_rgba(242,153,74,0.6)] transform transition hover:scale-105 mb-4 leading-tight border border-[#F2C94C]"
          >
            SIM! QUERO O PLANO POR R$ 27
            <span className="block text-xs font-medium opacity-80 mt-1 uppercase tracking-wide text-[#000000]">Adicionar ao meu pedido agora</span>
          </button>

          <button
            onClick={handleNo}
            className="text-xs text-gray-400 hover:text-gray-600 underline max-w-xs mx-auto block leading-relaxed"
          >
            Não, obrigado. Eu vou tentar descobrir o que fazer dia a dia sozinha, sem um mapa.
          </button>

          {/* Secure Text */}
          <div className="flex items-center justify-center gap-1 text-xs font-bold text-gray-400 mt-6">
            <Lock size={12} />
            <span>Checkout Seguro</span>
          </div>

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

export default DownsellTwo;