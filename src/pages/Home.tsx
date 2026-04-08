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
import SEOHead from '@/components/shared/SEOHead';

export default function Home() {
  return (
    <PageLayout>
      <SEOHead
        title="Pakistan's Largest Life & Health Insurer"
        description="State Life Insurance Corporation of Pakistan — protecting 147 million Pakistanis with life insurance, health coverage, Takaful, and corporate plans since 1972. AAA rated."
        canonical="/"
        structuredData={{
          '@context': 'https://schema.org', '@type': 'InsuranceAgency',
          name: 'State Life Insurance Corporation of Pakistan',
          url: 'https://statelife.com.pk',
          description: "Pakistan's largest life and health insurer",
          telephone: '0800-700-900',
          address: { '@type': 'PostalAddress', streetAddress: 'State Life Building, Dr. Ziauddin Ahmed Road', addressLocality: 'Karachi', postalCode: '75600', addressCountry: 'PK' },
          aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '14700000' },
        }}
      />
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
