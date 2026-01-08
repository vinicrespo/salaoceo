import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import UpsellOne from './components/UpsellOne';
import DownsellOne from './components/DownsellOne';
import UpsellTwo from './components/UpsellTwo';
import DownsellTwo from './components/DownsellTwo';
import ThankYou from './components/ThankYou';

// ScrollToTop component to ensure pages start at the top
const ScrollToTopWrapper = () => {
  const { pathname } = React.useMemo(() => ({ pathname: window.location.hash }), []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTopWrapper />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/upsell1" element={<UpsellOne />} />
        <Route path="/downsell1" element={<DownsellOne />} />
        <Route path="/upsell2" element={<UpsellTwo />} />
        <Route path="/upsell2" element={<UpsellTwo />} />
        <Route path="/downsell2" element={<DownsellTwo />} />
        <Route path="/thanks" element={<ThankYou />} />
      </Routes>
    </HashRouter>
  );
};

export default App;