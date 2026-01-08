import React, { useState } from 'react';
import Hero from './vsl/Hero';
import SocialProof from './vsl/SocialProof';
import Mechanism from './vsl/Mechanism';
import Offer from './vsl/Offer';
import Guarantee from './vsl/Guarantee';
import FAQ from './vsl/FAQ';
import UpsellModal from './vsl/UpsellModal';
import Footer from './Footer';

const LandingPage: React.FC = () => {
  const [showUpsellModal, setShowUpsellModal] = useState(false);

  // Smooth scroll to pricing section
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBuy = (option: 'complete_37' | 'complete_27' | 'basic_10') => {
    console.log(`User selected purchase option: ${option}`);
    const searchParams = window.location.search;
    // Helper to append params handling existing '?'
    const appendParams = (url: string) => {
      if (!searchParams) return url;
      const separator = url.includes('?') ? '&' : '?';
      return url + separator + searchParams.substring(1);
    };

    if (option === 'basic_10') {
      window.location.href = appendParams('https://pay.zouti.com.br/checkout?poi=prod_offer_pc14qb12aho9ch1l67yufr');
      return;
    }

    if (option === 'complete_37') {
      window.location.href = appendParams('https://pay.zouti.com.br/checkout?product_offer_id=prod_offer_b9uiionlgx7d4zkxx3xxar');
      return;
    }

    if (option === 'complete_27') {
      window.location.href = appendParams('https://pay.zouti.com.br/checkout?poi=prod_offer_epslo86kaif3ive800n08m');
      return;
    }

    alert(`Redirecionando para checkout: ${option} com params: ${searchParams}`);
  };

  return (
    <div className="font-sans antialiased text-[#2D2D2D] bg-white min-h-screen flex flex-col">
      <Hero onCtaClick={scrollToPricing} />

      <SocialProof />

      <Mechanism />

      <Offer
        onBuyComplete={() => handleBuy('complete_37')}
        onBuyBasic={() => setShowUpsellModal(true)}
      />

      <Guarantee />

      <FAQ />

      <Footer />

      <UpsellModal
        isOpen={showUpsellModal}
        onClose={() => setShowUpsellModal(false)}
        onAccept={() => {
          setShowUpsellModal(false);
          handleBuy('complete_27');
        }}
        onDecline={() => {
          setShowUpsellModal(false);
          handleBuy('basic_10');
        }}
      />
    </div>
  );
};

export default LandingPage;
