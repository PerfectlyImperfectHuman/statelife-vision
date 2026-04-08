import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import ScrollReveal from '@/components/shared/ScrollReveal';
import SEOHead from '@/components/shared/SEOHead';

const productDetails = [
  {
    id: 'platinum-plus',
    category: 'Life Insurance',
    name: 'Platinum Plus',
    tagline: 'Savings + Protection',
    description: 'A 10-year guaranteed savings scheme with comprehensive life cover. Premiums are waived for the first 3 years, making it one of the most accessible plans for new policyholders. Ideal for individuals looking to build wealth while securing their family\'s future.',
    benefits: ['Guaranteed returns from day one', 'Premium waiver for first 3 years', 'Maturity bonus on policy completion'],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
    color: 'brand',
  },
  {
    id: 'jeevan-saathi',
    category: 'Life Insurance',
    name: 'Jeevan Saathi',
    tagline: 'Joint Life Cover',
    description: 'A joint life policy that covers both spouses under a single plan. In the event of either partner\'s passing, the surviving partner receives the full sum assured. Built for couples who want to protect each other and plan their finances together.',
    benefits: ['Single premium covers both partners', 'Full payout on first death', 'Flexible term options from 10-30 years'],
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80',
    color: 'brand',
  },
  {
    id: 'sehat-zindagi',
    category: 'Health',
    name: 'Sehat Zindagi',
    tagline: 'Individual Health',
    description: 'Comprehensive inpatient and outpatient health coverage designed for individuals. Covers hospitalization, surgical procedures, diagnostic tests, and post-discharge care at a network of 30,000+ panel hospitals across Pakistan.',
    benefits: ['Cashless treatment at panel hospitals', 'Coverage for pre/post hospitalization', 'No medical checkup for ages 18-40'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    color: 'accent',
  },
  {
    id: 'sehat-sahulat',
    category: 'Health',
    name: 'Sehat Sahulat',
    tagline: 'Family Health Plan',
    description: 'Group health insurance for the entire family under one affordable premium. Covers spouse, children, and dependent parents with comprehensive inpatient care, maternity benefits, and emergency services.',
    benefits: ['Cover entire family under one plan', 'Maternity and newborn coverage', 'Emergency ambulance services included'],
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    color: 'accent',
  },
  {
    id: 'takaful',
    category: 'Takaful',
    name: 'Takaful Products',
    tagline: 'Sharia Compliant',
    description: 'Community-pooling insurance products following Islamic principles of mutual protection and shared responsibility. Certified by our Sharia Advisory Board, these plans offer ethical financial protection without compromising religious values.',
    benefits: ['Certified Sharia-compliant products', 'Surplus sharing among participants', 'Supervised by Sharia Advisory Board'],
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80',
    color: 'gold',
  },
  {
    id: 'corporate',
    category: 'Corporate',
    name: 'Protect Your Employees',
    tagline: 'Group Insurance',
    description: 'Corporate savings and protection schemes designed for employee retention and comprehensive benefit programs. Scalable solutions for organizations of all sizes, from SMEs to large enterprises, with dedicated account management.',
    benefits: ['Customizable group plans', 'Dedicated corporate account manager', 'Tax advantages for employers'],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
    color: 'brand',
  },
  {
    id: 'digital',
    category: 'Life Insurance',
    name: 'Digital Insurance',
    tagline: 'Buy Online',
    description: 'Instant, paperless insurance policies purchasable entirely online in under 10 minutes. Complete the entire journey from quote to policy issuance without visiting a branch or meeting an agent. Perfect for tech-savvy customers.',
    benefits: ['Buy policy online in under 10 minutes', 'No paperwork or agent visit required', 'Instant policy issuance and e-certificate'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    color: 'brand',
  },
  {
    id: 'alpha',
    category: 'Life Insurance',
    name: 'Alpha Insurance',
    tagline: 'Subsidiary Plan',
    description: 'Alpha Life Insurance is a subsidiary of State Life, offering specialized protection products tailored for specific market segments. With competitive pricing and simplified underwriting, Alpha Insurance makes life coverage accessible to a broader population.',
    benefits: ['Simplified underwriting process', 'Competitive premium rates', 'Backed by State Life Corporation'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    color: 'brand',
  },
];

const categoryColors: Record<string, { pill: string }> = {
  'Life Insurance': { pill: 'bg-brand-50 text-brand-600' },
  Health: { pill: 'bg-accent-100 text-accent-600' },
  Takaful: { pill: 'bg-gold-100 text-gold-600' },
  Corporate: { pill: 'bg-brand-100 text-brand-700' },
};

export default function Products() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-14 md:py-20 bg-brand-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-body-xs text-ink-400 mb-4">
              <Link to="/" className="hover:text-brand-300 transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white/70">Products</span>
            </div>
            <h1 className="text-display-xl text-white font-display">Insurance Products for Every Need</h1>
            <p className="text-white/60 text-body-lg mt-3 max-w-2xl">
              From individual life insurance to corporate health plans, discover the right coverage for you and your family.
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-6 text-body-sm text-white/50">
              <span>8+ Product Categories</span>
              <span className="text-brand-500">·</span>
              <span>60+ Years of Experience</span>
              <span className="text-brand-500">·</span>
              <span>147M+ Lives Protected</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Products */}
      <section className="py-14 md:py-16 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {productDetails.map((product, i) => {
            const isReversed = i % 2 === 1;
            const cat = categoryColors[product.category] || categoryColors['Life Insurance'];
            return (
              <ScrollReveal key={product.id} delay={0.05}>
                <div className={`bg-white rounded-3xl border border-ink-100 p-6 lg:p-12 flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-10 items-center shadow-card hover:shadow-card-hover transition-all duration-300`}>
                  <div className="w-full lg:w-2/5 rounded-2xl overflow-hidden aspect-[4/3]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                  </div>
                  <div className="w-full lg:w-3/5">
                    <span className={`inline-block ${cat.pill} rounded-full px-3 py-1 text-body-xs font-semibold`}>
                      {product.category}
                    </span>
                    <h2 className="text-display-md font-display font-bold text-ink-900 mt-2">{product.name}</h2>
                    <p className="text-brand-500 text-body-lg font-medium mt-1">{product.tagline}</p>
                    <p className="text-body-md text-ink-600 mt-3">{product.description}</p>
                    <div className="space-y-2 mt-5">
                      {product.benefits.map((b) => (
                        <div key={b} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                          <span className="text-body-sm text-ink-600">{b}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3 mt-6">
                      <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-brand-500 text-brand-600 rounded-full px-6 py-3 text-body-sm font-semibold hover:bg-brand-50 transition-colors">
                        Learn More
                      </Link>
                      <Link to="/#quote" className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white rounded-full px-6 py-3 text-body-sm font-semibold transition-colors">
                        Get a Quote <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>
    </PageLayout>
  );
}
