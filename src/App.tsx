import React, { Suspense, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import PageSkeleton from "@/components/shared/PageSkeleton";
import { useUIStore } from '@/store/uiStore';
import Home from "./pages/Home";

const StateHealth = React.lazy(() => import('./pages/StateHealth'));
const Products = React.lazy(() => import('./pages/Products'));
const Policyholder = React.lazy(() => import('./pages/Policyholder'));
const Contact = React.lazy(() => import('./pages/Contact'));
const About = React.lazy(() => import('./pages/About'));
const Financial = React.lazy(() => import('./pages/Financial'));
const ProductDetailPage = React.lazy(() => import('./components/shared/ProductDetailPage'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

function LanguageSync() {
  useEffect(() => {
    const { language } = useUIStore.getState();
    document.documentElement.dir = language === 'ur' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    document.body.classList.toggle('font-urdu', language === 'ur');
  }, []);
  return null;
}

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <LanguageSync />
          <Suspense fallback={<PageSkeleton />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/state-health" element={<StateHealth />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:slug" element={<ProductDetailPage />} />
              <Route path="/policyholder" element={<Policyholder />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
