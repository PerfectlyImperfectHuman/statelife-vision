import PageLayout from '@/components/layout/PageLayout';
import HeroCarousel from '@/components/sections/HeroCarousel';
import StatsBar from '@/components/sections/StatsBar';
import QuickActions from '@/components/sections/QuickActions';
import ProductsGrid from '@/components/sections/ProductsGrid';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import WhatsNew from '@/components/sections/WhatsNew';
import FinancialReports from '@/components/sections/FinancialReports';
import QuoteWidget from '@/components/sections/QuoteWidget';
import Affiliations from '@/components/sections/Affiliations';

export default function Home() {
  return (
    <PageLayout>
      <HeroCarousel />
      <StatsBar />
      <QuickActions />
      <ProductsGrid />
      <TestimonialsCarousel />
      <WhatsNew />
      <QuoteWidget />
      <FinancialReports />
      <Affiliations />
    </PageLayout>
  );
}
