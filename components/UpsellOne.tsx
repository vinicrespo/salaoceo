import React, { useEffect } from 'react';
import { MessageSquare, X, Check, Lock, ShieldCheck } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const UpsellOne: React.FC = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleYes = () => {
    // Add logic to process the R$ 27 add-on
    console.log('Upsell Accepted: Manual de Conversas Lucrativas (R$ 27)');
    window.location.href = '/upsell2' + window.location.search; // Or next step in funnel
  };

  const handleNo = () => {
    console.log('Upsell Declined');
    window.location.href = '/downsell1' + window.location.search; // Next step if declined (Downsell or Next Upsell depending on funnel)
  };

  return (
    <div className="font-sans antialiased bg-white min-h-screen flex flex-col">

      {/* SECTION 1: THE STOPPER (Hero - Black Background) */}
      <section className="bg-[#1A1A1A] text-white pt-8 pb-10 px-4 md:px-0 text-center border-b border-[#333]">
        <div className="max-w-md mx-auto space-y-4">

          {/* Pre-Headline Warning */}
          <div className="bg-red-600/20 border border-red-600 rounded-md px-4 py-2 inline-flex items-center gap-2 mb-2">
            <span className="text-red-500 font-bold text-sm tracking-wide uppercase flex items-center gap-1">
              ⚠️ ESPERE! Seu pedido ainda não foi finalizado...
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl md:text-3xl font-extrabold leading-tight">
            Você já travou na hora de dizer o preço ou cobrar uma taxa?
          </h1>

          {/* Subheadline */}
          <p className="text-gray-400 text-lg leading-snug">
            A estratégia é metade da batalha. As <span className="text-[#FFD700] font-bold">PALAVRAS</span> são a outra metade. Saiba exatamente o que dizer para vender mais sem parecer "chata" ou "desesperada".
          </p>

        </div>
      </section>

      {/* SECTION 2: THE PROBLEM (Agitation - White Background) */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-[#2D2D2D] text-center mb-8">
            Não deixe o lucro escapar pela boca.
          </h2>

          <div className="space-y-4">
            {[
              "Fica muda quando a cliente pede 'um descontinho'?",
              "Tem vergonha de oferecer produtos no lavatório?",
              "Não sabe cobrar sinal de agendamento sem a cliente ficar brava?",
              "Perde tempo digitando as mesmas mensagens no WhatsApp todo dia?"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
                <X className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: THE SOLUTION (The Product) */}
      <section className="bg-gray-50 py-10 px-4 border-t border-gray-100">
        <div className="max-w-md mx-auto text-center">

          <div className="inline-block p-4 bg-white rounded-full shadow-md mb-6">
            <MessageSquare size={40} className="text-[#F2994A]" />
          </div>

          <h2 className="text-2xl font-extrabold text-[#2D2D2D] mb-2 uppercase">
            MANUAL DE CONVERSAS LUCRATIVAS
          </h2>
          <p className="text-gray-600 mb-8 max-w-sm mx-auto">
            50+ Scripts Prontos para Copiar e Colar. Apenas adapte para o seu tom e envie.
          </p>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-left space-y-4">
            {[
              { icon: "📲", bold: "Scripts de WhatsApp:", text: "Para recuperar clientes sumidas e confirmar horários." },
              { icon: "💇‍♀️", bold: "Scripts de Cadeira:", text: "Como oferecer Reconstrução/Hidratação com elegância." },
              { icon: "🛡️", bold: "Scripts de Blindagem:", text: "Respostas prontas para objeções de preço ('Tá caro!')." },
              { icon: "🚫", bold: "Scripts de Limites:", text: "Como demitir clientes tóxicas e cobrar taxas de no-show sem barraco." },
              { icon: "🎁", bold: "BÔNUS:", text: "Lista de Frases de Poder para fechar vendas." }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <p className="text-sm text-gray-700">
                  <span className="font-bold text-gray-900">{item.bold}</span> {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: THE OFFER (Impulse Buy) */}
      <section className="bg-white py-12 px-4 pb-20">
        <div className="max-w-md mx-auto">

          <div className="border-2 border-dashed border-[#F2C94C] bg-[#FFFCF5] rounded-xl p-6 text-center shadow-lg relative overflow-hidden">
            {/* Ribbon */}
            <div className="absolute top-0 right-0 bg-[#F2C94C] text-[#3E2700] text-[10px] font-bold px-4 py-1 rounded-bl-lg">
              OFERTA ÚNICA
            </div>

            <p className="text-gray-500 text-sm mb-1">Valor Normal: <span className="line-through">R$ 97,00</span></p>
            <p className="text-gray-900 font-bold mb-6">
              Adicionar ao meu pedido por apenas <span className="text-5xl font-extrabold text-[#FFD700] block mt-2 drop-shadow-sm">R$ 27,00</span>
            </p>

            <button
              onClick={handleYes}
              className="w-full bg-gradient-to-r from-[#F2994A] to-[#F2C94C] text-[#3E2700] font-extrabold text-lg py-4 rounded-lg shadow-[0_0_20px_rgba(242,201,76,0.6)] hover:shadow-[0_0_30px_rgba(242,201,76,0.8)] transform transition hover:scale-105 animate-pulse mb-4 leading-tight"
            >
              SIM! ADICIONAR O MANUAL DE SCRIPTS AGORA
            </button>

            <button
              onClick={handleNo}
              className="text-xs text-gray-400 hover:text-gray-600 underline"
            >
              Não, obrigado. Eu prefiro criar meus próprios scripts do zero e arriscar perder vendas.
            </button>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400 opacity-80">
              <ShieldCheck size={14} />
              <span>Compra 100% Segura e Adicionada num Clique</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: FOOTER */}
      <footer className="bg-[#FAF8F5] py-8 border-t border-gray-200 text-center mt-auto">
        <p className="text-gray-400 text-xs font-medium">
          © 2026 Protocolo Salão CEO
        </p>
      </footer>

    </div>
  );
};

export default UpsellOne;