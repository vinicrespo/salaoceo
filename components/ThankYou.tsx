import React, { useEffect } from 'react';
import { Mail, Check } from 'lucide-react';

const ThankYou: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF8F5] font-sans antialiased text-[#6B6B6B] min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl overflow-hidden relative">

        <div className="px-8 py-10 flex flex-col items-center text-center">

          {/* SECTION 1: THE CELEBRATION */}
          <div className="w-20 h-20 rounded-full border-4 border-[#FFD700] flex items-center justify-center mb-6 shadow-sm animate-bounce">
            <Check className="text-[#FFD700]" size={40} strokeWidth={4} />
          </div>

          <h1 className="text-[#2D2D2D] text-2xl font-bold leading-tight mb-2">
            Parabéns! Sua inscrição está confirmada.
          </h1>

          <p className="text-gray-500 text-lg mb-8 leading-snug">
            Você acabou de tomar a decisão certa para o crescimento do seu salão.
          </p>

          {/* SECTION 2: ACCESS INSTRUCTIONS (Gold Box) */}
          <div className="w-full bg-[#FAF8F5] border border-[#FFD700]/30 rounded-xl p-6 mb-6 text-left shadow-sm">
            <h3 className="font-bold text-[#2D2D2D] mb-4 border-b border-gray-200 pb-2 text-sm uppercase tracking-wide">
              Como acessar seu material agora:
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex gap-3 items-start">
                <span className="bg-[#FFD700] text-[#3E2700] text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">1</span>
                <div>
                  <span className="font-bold text-gray-900 block text-sm">Vá para o seu e-mail:</span>
                  <span className="text-sm">O mesmo que você cadastrou na compra.</span>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="bg-[#FFD700] text-[#3E2700] text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">2</span>
                <div>
                  <span className="font-bold text-gray-900 block text-sm">Procure pelo título:</span>
                  <span className="text-sm">"Acesso ao Protocolo Salão CEO".</span>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="bg-[#FFD700] text-[#3E2700] text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">3</span>
                <div>
                  <span className="font-bold text-gray-900 block text-sm">Verifique o SPAM:</span>
                  <span className="text-sm">Se não estiver na caixa de entrada, olhe na caixa de SPAM ou na aba "Promoções".</span>
                </div>
              </li>
            </ul>
          </div>

          {/* SECTION 3: THE "NO-PANIC" NOTICE */}
          <div className="bg-blue-50 text-blue-800 px-4 py-3 rounded-lg flex items-start gap-3 text-sm text-left mb-8">
            <Mail size={20} className="flex-shrink-0 mt-0.5" />
            <p>
              O e-mail de acesso pode levar até 5 minutos para chegar. Não feche essa página até confirmar que recebeu.
            </p>
          </div>

          {/* SECTION 4: FOOTER */}
          <p className="font-bold text-[#2D2D2D] text-lg flex items-center gap-2 mb-8">
            Seja bem-vinda ao Salão CEO. <span className="text-red-500">❤️</span>
          </p>

        </div>

        {/* Footer Copyright */}
        <div className="bg-[#FAF8F5] py-4 text-center border-t border-gray-100">
          <p className="text-[10px] text-gray-400">© 2026 Protocolo Salão CEO</p>
        </div>

      </div>
    </div>
  );
};

export default ThankYou;