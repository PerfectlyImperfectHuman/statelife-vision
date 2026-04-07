import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <FloatingElements />
        <Suspense fallback={<PageSkeleton />}>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-500 focus:text-white focus:px-6 focus:py-3 focus:rounded-lg focus:font-semibold focus:shadow-lg">
            Skip to main content
          </a>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/state-health" element={<StateHealth />} />
            <Route path="/products" element={<Products />} />
            <Route path="/policyholder" element={<Policyholder />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
