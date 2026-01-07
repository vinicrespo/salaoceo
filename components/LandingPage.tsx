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
    // Here you would integrate with your checkout system URL (e.g., Hotmart, Kiwify)
    // Example:
    // if (option === 'complete_37') window.location.href = 'CHECKOUT_URL_37';
    // if (option === 'complete_27') window.location.href = 'CHECKOUT_URL_27_OFFER';
    // if (option === 'basic_10') window.location.href = 'CHECKOUT_URL_10_BASIC';

    alert(`Redirecionando para checkout: ${option}`);
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
