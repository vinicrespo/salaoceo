import React, { useEffect } from 'react';
import { Hand, Clock, ShieldCheck, Lock, Check } from 'lucide-react';

const DownsellTwo: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Set global variables for Zouti
    (window as any).acceptUpsellAction = 'EXTERNAL';
    (window as any).declineUpsellAction = 'EXTERNAL';
    (window as any).acceptUpsellExternalUrl = 'salaoceo.vercel.app/thanks';
    (window as any).declineUpsellExternalUrl = 'salaoceo.vercel.app/thanks';
    (window as any).selectedOfferProductId = 'prod_atvvzism453jeymwbnhc3g';

    // Append script
    const script = document.createElement('script');
    script.src = "https://zouti-prod-core-media-public.s3.us-east-1.amazonaws.com/scripts/zouti_pay_min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

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
              <span className="bg-[#1A1A1A] text-[#FFD700] rounded-full px-4 py-1 text-4xl font-extrabold inline-block mt-2 shadow-sm">POR R$ 37,00</span>
            </p>

            <p className="text-gray-500 text-xs font-medium">
              Isso é menos de R$ 0,42 centavos por dia de planejamento.
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

          <div style={{ textAlign: 'center' }}>
            <button
              id="zouti-upsell-accept-button"
              style={{
                backgroundColor: '#10B978',
                padding: '12px 16px',
                cursor: 'pointer',
                color: '#FFFFFF',
                fontWeight: 600,
                borderRadius: '4px',
                border: '1px solid  #10B978',
                fontSize: '20px',
                display: 'inline-block',
              }}
            >
              Sim, aceito essa oferta
            </button>
            <button
              id="zouti-upsell-cancel-button"
              style={{
                background: 'none',
                border: 'none',
                padding: '0',
                margin: '10px auto 0 auto',
                textDecoration: 'underline',
                fontSize: '16px',
                cursor: 'pointer',
                display: 'block',
                fontFamily: 'sans-serif',
                color: '#616161',
              }}
            >
              Não, quero recusar essa oferta
            </button>
          </div>

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