import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Check, X, ShieldCheck, Lock } from 'lucide-react';

const UpsellTwo: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleYes = () => {
    console.log('Upsell 2 Accepted: Roteiro 90 Dias (R$ 47)');
    // Proceed to Thank You page or next step
    navigate('/thank-you');
  };

  const handleNo = () => {
    console.log('Upsell 2 Declined');
    // Proceed to Downsell 2 (if exists) or Thank You
    navigate('/downsell2');
  };

  return (
    <div className="font-sans antialiased bg-white min-h-screen flex flex-col">

      {/* SECTION 1: THE REALITY CHECK (Hero - Dark Background) */}
      <section className="bg-[#1A1A1A] text-white pt-8 pb-10 px-4 text-center border-b border-[#333]">
        <div className="max-w-md mx-auto space-y-4">

          <p className="text-[#FFD700] font-bold text-xs uppercase tracking-widest mb-2">
            PASSO FINAL: Garanta que você não vai desistir.
          </p>

          <h1 className="text-2xl md:text-3xl font-extrabold leading-tight">
            E agora? Você sabe exatamente o que fazer quando acordar amanhã?
          </h1>

          <p className="text-gray-400 text-lg leading-snug">
            Não adianta ter o mapa se você não souber o próximo passo. A maioria das donas de salão trava na segunda semana porque o caos do dia a dia engole a estratégia.
          </p>

        </div>
      </section>

      {/* SECTION 2: THE SOLUTION (White Background) */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-md mx-auto text-center">

          <div className="inline-block p-4 bg-gray-50 rounded-full shadow-sm mb-6 border border-gray-100">
            <Calendar size={40} className="text-[#F2994A]" />
          </div>

          <h2 className="text-2xl font-extrabold text-[#2D2D2D] mb-2 uppercase">
            O ROTEIRO DE AÇÃO DE 90 DIAS
          </h2>
          <p className="text-gray-600 mb-8 max-w-sm mx-auto">
            Um plano dia-a-dia. Não pense. Apenas acorde, olhe a tarefa do dia e execute.
          </p>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-left space-y-4">
            {[
              { bold: "Tarefas Diárias:", text: "A única coisa que você precisa fazer hoje para crescer." },
              { bold: "Foco Semanal:", text: "Semanas de Vendas, Semanas de Gestão, Semanas de Equipe." },
              { bold: "Rastreador de Progresso:", text: "Veja sua evolução visualmente e não desanime." },
              { bold: "O 'Quick Win':", text: "Vitórias rápidas para gerar ânimo imediato." }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className="text-[#FFD700] flex-shrink-0 mt-0.5" size={20} />
                <p className="text-gray-700 text-sm">
                  <span className="font-bold text-gray-900">{item.bold}</span> {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: THE COMPARISON (The "Vs" Box) */}
      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-2 text-sm divide-x divide-gray-200">
            {/* Left Side (Failure) */}
            <div className="p-4 bg-red-50/50 border-r border-red-100">
              <h3 className="font-bold text-gray-900 mb-3 text-center">Sem o Roteiro</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-600 leading-tight">
                  <X size={16} className="text-red-500 flex-shrink-0" />
                  <span>Ações aleatórias (atira pra todo lado)</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600 leading-tight">
                  <X size={16} className="text-red-500 flex-shrink-0" />
                  <span>Sempre ocupada, mas nunca produtiva</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600 leading-tight">
                  <X size={16} className="text-red-500 flex-shrink-0" />
                  <span>Desiste do método em 2 semanas</span>
                </li>
              </ul>
            </div>

            {/* Right Side (Success) */}
            <div className="p-4 bg-green-50/50 border-l border-green-100">
              <h3 className="font-bold text-gray-900 mb-3 text-center">Com o Roteiro CEO</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-800 leading-tight font-medium">
                  <Check size={16} className="text-green-600 flex-shrink-0" />
                  <span>Ações Estratégicas e Claras</span>
                </li>
                <li className="flex items-start gap-2 text-gray-800 leading-tight font-medium">
                  <Check size={16} className="text-green-600 flex-shrink-0" />
                  <span>Progresso Consistente todo dia</span>
                </li>
                <li className="flex items-start gap-2 text-gray-800 leading-tight font-medium">
                  <Check size={16} className="text-green-600 flex-shrink-0" />
                  <span>Transformação completa em 3 meses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 4: THE OFFER (Impulse Buy) */}
      <section className="bg-white py-12 px-4 pb-20">
        <div className="max-w-md mx-auto">

          <div className="border-2 border-[#F2C94C] rounded-xl p-6 text-center shadow-lg relative overflow-hidden bg-white">

            <p className="text-gray-500 text-sm mb-1">Valor Individual: <span className="line-through">R$ 197,00</span></p>
            <p className="text-gray-900 font-bold mb-6">
              Adicionar ao pedido por <span className="bg-[#1A1A1A] text-[#FFD700] rounded-full px-4 py-1 text-4xl font-extrabold inline-block mt-2 shadow-sm">R$ 47,00</span>
            </p>

            <button
              onClick={handleYes}
              className="w-full bg-gradient-to-r from-[#F2994A] to-[#F2C94C] text-black font-extrabold text-lg py-4 rounded-lg shadow-[0_4px_15px_rgba(242,153,74,0.4)] hover:shadow-[0_6px_20px_rgba(242,153,74,0.6)] transform transition hover:scale-105 mb-4 leading-tight border border-[#F2C94C]"
            >
              SIM! QUERO O ROTEIRO DE 90 DIAS
            </button>

            <button
              onClick={handleNo}
              className="text-xs text-gray-400 hover:text-gray-600 underline max-w-xs mx-auto block leading-relaxed"
            >
              Não, obrigado. Eu confio na minha própria disciplina para manter o foco sozinha sem um plano.
            </button>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400 opacity-80">
              <ShieldCheck size={14} />
              <span>Compra 100% Segura</span>
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

export default UpsellTwo;