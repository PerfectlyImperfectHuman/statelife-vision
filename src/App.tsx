import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import FloatingElements from "@/components/shared/FloatingElements";
import PageSkeleton from "@/components/shared/PageSkeleton";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const StateHealth = React.lazy(() => import('./pages/StateHealth'));
const Products = React.lazy(() => import('./pages/Products'));
const Policyholder = React.lazy(() => import('./pages/Policyholder'));
const Contact = React.lazy(() => import('./pages/Contact'));
const About = React.lazy(() => import('./pages/About'));
const ProductDetailPage = React.lazy(() => import('./components/shared/ProductDetailPage'));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Sonner />
        <BrowserRouter>
          <FloatingElements />
          <Suspense fallback={<PageSkeleton />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/state-health" element={<StateHealth />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:slug" element={<ProductDetailPage />} />
              <Route path="/policyholder" element={<Policyholder />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
