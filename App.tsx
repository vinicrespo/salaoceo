import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './components/LandingPage';

// Lazy load secondary pages to optimize initial bundle size
const UpsellOne = React.lazy(() => import('./components/UpsellOne'));
const DownsellOne = React.lazy(() => import('./components/DownsellOne'));
const UpsellTwo = React.lazy(() => import('./components/UpsellTwo'));
const DownsellTwo = React.lazy(() => import('./components/DownsellTwo'));
const ThankYou = React.lazy(() => import('./components/ThankYou'));

// ScrollToTop component to ensure pages start at the top
const ScrollToTopWrapper = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Loading fallback component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#C9A227]"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTopWrapper />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/upsell1" element={<UpsellOne />} />
          <Route path="/downsell1" element={<DownsellOne />} />
          <Route path="/upsell2" element={<UpsellTwo />} />
          <Route path="/downsell2" element={<DownsellTwo />} />
          <Route path="/thanks" element={<ThankYou />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;