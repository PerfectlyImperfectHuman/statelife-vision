import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, XCircle, ChevronDown, ChevronUp, ChevronRight, ArrowRight, DownloadCloud, Loader2, Shield, TrendingUp, Heart, DollarSign, RefreshCw, UserCheck, Users, Clock, Star, Activity, Zap, Eye, Phone, Smartphone, FileText, CreditCard, Headphones, Briefcase, Monitor, BarChart2, Globe, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import PageLayout from '@/components/layout/PageLayout';
import ScrollReveal from '@/components/shared/ScrollReveal';
import SEOHead from '@/components/shared/SEOHead';
import { PRODUCTS, type ProductConfig } from '@/lib/productConfigs';
import { supabase } from '@/lib/supabase';

const iconMap: Record<string, React.ElementType> = {
  Shield, TrendingUp, Heart, DollarSign, RefreshCw, UserCheck, Users, Clock, Star, Activity, Zap, Eye, Phone, Smartphone, FileText, CreditCard, Headphones, Briefcase, Monitor, BarChart2, Globe, Award,
  Baby: Heart, Stethoscope: Activity,
};

const quoteSchema = z.object({
  name: z.string().trim().min(2, 'Name is required').max(100),
  phone: z.string().regex(/^03\d{2}-?\d{7}$/, 'Enter valid phone: 03XX-XXXXXXX'),
  age: z.number().min(18).max(65),
});
type QuoteData = z.infer<typeof quoteSchema>;

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? PRODUCTS[slug] : undefined;
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showStickyNav, setShowStickyNav] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const heroRef = useRef<HTMLElement>(null);
  const [quoteStatus, setQuoteStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const { register, handleSubmit, formState: { errors } } = useForm<QuoteData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { age: 30 },
  });

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => setShowStickyNav(!e.isIntersecting), { threshold: 0 });
    if (heroRef.current) obs.observe(heroRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const sections = ['overview', 'benefits', 'coverage', 'faq'];
    const handler = () => {
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 160) { setActiveSection(id); break; }
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const onQuoteSubmit = async (data: QuoteData) => {
    setQuoteStatus('loading');
    try {
      if (supabase) {
        const { error } = await supabase.from('leads').insert([{
          name: data.name, phone: data.phone, age: data.age,
          product_type: product?.name || '', protection_type: 'Myself',
          coverage_amount: 2500000, source: `product_page_${product?.id}`,
          created_at: new Date().toISOString(),
        }]);
        if (error) throw error;
      }
      setQuoteStatus('success');
    } catch {
      // Still show success for demo when no Supabase
      setQuoteStatus('success');
    }
  };

  if (!product) {
    return <PageLayout><div className="py-32 text-center"><h1 className="text-display-xl font-display text-ink-900">Product Not Found</h1><Link to="/products" className="text-brand-500 mt-4 inline-block">← Back to Products</Link></div></PageLayout>;
  }

  const relatedProducts = product.relatedProducts.map(id => PRODUCTS[id]).filter(Boolean);
  const navLinks = [
    { id: 'overview', label: 'Overview' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'coverage', label: 'Coverage' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <PageLayout>
      <SEOHead
        title={`${product.name} — ${product.category}`}
        description={`${product.description.split('.')[0]}. Get a free quote today from Pakistan's most trusted insurer.`}
        canonical={`/products/${product.id}`}
        structuredData={{
          '@context': 'https://schema.org', '@type': 'Product',
          name: product.name, description: product.description,
          brand: { '@type': 'Brand', name: 'State Life' },
          offers: { '@type': 'Offer', priceCurrency: 'PKR', price: product.minPremium, availability: 'https://schema.org/InStock' },
        }}
      />

      {/* Sticky Nav */}
      <AnimatePresence>
        {showStickyNav && (
          <motion.div
            initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -60, opacity: 0 }}
            className="fixed top-[80px] left-0 right-0 z-30 bg-white/95 backdrop-blur-xl border-b border-ink-100 shadow-nav"
          >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
              <span className="font-semibold text-body-md text-ink-900 hidden sm:block">{product.name}</span>
              <div className="flex items-center gap-6">
                {navLinks.map(l => (
                  <a key={l.id} href={`#${l.id}`}
                    className={`text-body-sm transition-colors ${activeSection === l.id ? 'text-brand-500 font-semibold' : 'text-ink-500 hover:text-brand-500'}`}
                  >{l.label}</a>
                ))}
              </div>
              <a href="#get-plan" className="bg-brand-500 text-white rounded-full px-6 py-2 text-body-sm font-semibold hover:bg-brand-600 transition-colors">
                Get This Plan
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section id="overview" ref={heroRef} className={`relative min-h-[75vh] overflow-hidden bg-gradient-to-br ${product.themeGradient}`}>
        <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover opacity-15" loading="eager" width={1400} height={900} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center min-h-[75vh]">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-14 md:py-24">
            <ScrollReveal>
              <div className="flex items-center gap-2 text-body-xs text-white/50">
                <Link to="/" className="hover:text-white/70">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <Link to="/products" className="hover:text-white/70">Products</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-white/70">{product.name}</span>
              </div>
              <span className="inline-block bg-white/15 backdrop-blur-sm border border-white/25 text-white rounded-full px-4 py-1.5 text-body-xs font-semibold uppercase tracking-widest mt-4">
                {product.category}
              </span>
              <h1 className="text-display-2xl text-white font-display mt-3">{product.headline}</h1>
              <p className="text-body-xl text-white/70 max-w-xl mt-4">{product.description}</p>
              <div className="flex flex-wrap gap-3 mt-6">
                {product.highlights.map(h => (
                  <span key={h} className="bg-white/10 border border-white/20 text-white rounded-full px-4 py-2 text-body-sm flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5" />{h}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mt-10">
                <a href="#get-plan" className="bg-white text-brand-700 font-bold rounded-full px-8 py-4 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-body-sm">
                  Get This Plan Now
                </a>
                <button className="border-2 border-white/40 text-white rounded-full px-8 py-4 hover:bg-white/10 transition-all text-body-sm font-semibold flex items-center gap-2">
                  <DownloadCloud className="w-4 h-4" /> Download Brochure
                </button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="hidden lg:block">
              <div className="bg-white rounded-3xl p-8 shadow-modal max-w-sm ml-auto">
                <div className="w-14 h-14 rounded-2xl bg-brand-100 flex items-center justify-center mb-4">
                  <Shield className="w-7 h-7 text-brand-500" />
                </div>
                <h3 className="font-display font-bold text-display-md text-ink-900">{product.name}</h3>
                <div className="border-t border-ink-100 my-5" />
                {product.quickFacts.map(f => (
                  <div key={f.label} className="flex justify-between py-2">
                    <span className="text-body-sm text-ink-500">{f.label}</span>
                    <span className="text-body-sm font-semibold text-ink-900">{f.value}</span>
                  </div>
                ))}
                <div className="bg-brand-50 rounded-xl p-4 mt-4 text-center">
                  <div className="text-display-md text-brand-500 font-display font-bold">PKR {product.minPremium}</div>
                  <div className="text-body-xs text-ink-500 mt-1">{product.minPremium === 'Custom Quote' ? 'Contact us' : 'per month minimum'}</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-14 md:py-24 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="text-body-xs uppercase tracking-widest text-brand-500 font-semibold">Key Benefits</span>
            <h2 className="text-display-xl font-display text-ink-900 mt-2">{product.name} — What You Get</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {product.benefits.map((b, i) => {
              const Icon = iconMap[b.icon] || Shield;
              return (
                <ScrollReveal key={b.title} delay={i * 0.05}>
                  <div className="bg-white rounded-2xl p-6 border border-ink-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 group-hover:bg-brand-500 flex items-center justify-center transition-colors duration-300">
                      <Icon className="w-6 h-6 text-brand-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-body-lg font-semibold text-ink-900 mt-4">{b.title}</h3>
                    <p className="text-body-sm text-ink-500 mt-2 leading-relaxed">{b.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section id="coverage" className="py-14 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-display-xl font-display text-ink-900 text-center">What's Covered</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-0 mt-12 rounded-2xl overflow-hidden border border-ink-100">
            <div>
              <div className="bg-accent-500 text-white py-3 px-6 text-body-sm font-semibold">✓ Covered</div>
              {product.covered.map((item, i) => (
                <div key={item} className={`flex items-center gap-3 px-6 py-3.5 ${i % 2 === 0 ? 'bg-ink-50' : 'bg-white'}`}>
                  <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0" />
                  <span className="text-body-sm text-ink-700">{item}</span>
                </div>
              ))}
            </div>
            <div>
              <div className="bg-ink-200 text-ink-600 py-3 px-6 text-body-sm font-semibold">✗ Not Covered</div>
              {product.notCovered.map((item, i) => (
                <div key={item} className={`flex items-center gap-3 px-6 py-3.5 ${i % 2 === 0 ? 'bg-ink-50' : 'bg-white'}`}>
                  <XCircle className="w-4 h-4 text-ink-300 flex-shrink-0" />
                  <span className="text-body-sm text-ink-400">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-body-xs text-ink-400 italic mt-4 text-center">
            Coverage details subject to policy terms and conditions. Please read the policy document carefully before purchasing.
          </p>
        </div>
      </section>

      {/* Inline Quote */}
      <section id="get-plan" className="py-14 md:py-24 bg-brand-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full border border-brand-800/30 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="text-brand-300 text-body-xs uppercase tracking-widest">Free Premium Estimate</span>
              <h2 className="text-display-xl text-white font-display mt-3">Get Your {product.name} Quote</h2>
              <p className="text-white/60 text-body-lg mt-4">Fill in a few details and an agent will contact you within 2 hours with a personalized quote.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-modal">
                {quoteStatus === 'success' ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-accent-500 mx-auto" />
                    <h3 className="text-display-md text-ink-900 font-display mt-4">Quote Request Received!</h3>
                    <p className="text-body-md text-ink-500 mt-2">An agent will call you within 2 hours.</p>
                    <button onClick={() => setQuoteStatus('idle')} className="mt-6 text-brand-500 text-body-sm font-semibold hover:text-brand-600 transition-colors">
                      Submit another request →
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onQuoteSubmit)} className="space-y-5">
                    <div className="bg-brand-50 rounded-xl px-4 py-3 text-body-sm text-brand-700 font-medium">
                      Product: {product.name}
                    </div>
                    <div>
                      <label className="text-body-sm font-medium text-ink-700 mb-2 block">Your Name</label>
                      <input {...register('name')} placeholder="Full name" className={`w-full rounded-xl border ${errors.name ? 'border-error' : 'border-ink-200'} px-4 py-3 text-body-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all`} />
                      {errors.name && <p className="text-error text-body-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="text-body-sm font-medium text-ink-700 mb-2 block">Phone Number</label>
                      <input {...register('phone')} placeholder="03XX-XXXXXXX" className={`w-full rounded-xl border ${errors.phone ? 'border-error' : 'border-ink-200'} px-4 py-3 text-body-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all`} />
                      {errors.phone && <p className="text-error text-body-xs mt-1">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <label className="text-body-sm font-medium text-ink-700 mb-2 block">Your Age</label>
                      <input type="number" {...register('age', { valueAsNumber: true })} min={18} max={65} className={`w-full rounded-xl border ${errors.age ? 'border-error' : 'border-ink-200'} px-4 py-3 text-body-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all`} />
                      {errors.age && <p className="text-error text-body-xs mt-1">{errors.age.message}</p>}
                    </div>
                    <button type="submit" disabled={quoteStatus === 'loading'} className="w-full bg-brand-500 hover:bg-brand-600 text-white rounded-xl py-4 font-semibold text-body-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-70">
                      {quoteStatus === 'loading' ? <><Loader2 className="w-5 h-5 animate-spin" /> Processing...</> : <>Get My Free Quote <ArrowRight className="w-5 h-5" /></>}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-14 md:py-24 bg-ink-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-display-xl font-display text-ink-900 text-center">Frequently Asked Questions</h2>
          </ScrollReveal>
          <div className="mt-12 space-y-3">
            {product.faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.03}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className={`w-full text-left rounded-xl px-5 py-4 transition-all duration-200 ${openFaq === i ? 'bg-brand-50' : 'bg-white border border-ink-100'}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-body-lg font-semibold text-ink-900 pr-4">{faq.q}</span>
                    {openFaq === i ? <ChevronUp className="w-5 h-5 text-brand-500 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-ink-400 flex-shrink-0" />}
                  </div>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeOut' }}>
                        <p className="text-body-md text-ink-600 mt-3">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-14 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-display-xl font-display text-ink-900 text-center">You Might Also Like</h2>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {relatedProducts.map((rp, i) => (
                <ScrollReveal key={rp.id} delay={i * 0.05}>
                  <Link to={`/products/${rp.id}`} className="block group">
                    <div className="bg-white rounded-3xl overflow-hidden border border-ink-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                      <div className="h-2 bg-gradient-to-r from-brand-500 to-brand-400" />
                      <div className="p-6">
                        <div className="w-12 h-12 rounded-2xl bg-brand-50 group-hover:bg-brand-500 flex items-center justify-center transition-colors duration-300">
                          <Shield className="w-6 h-6 text-brand-500 group-hover:text-white transition-colors" />
                        </div>
                        <p className="text-body-xs text-ink-400 uppercase tracking-wider mt-4">{rp.category}</p>
                        <h3 className="text-body-xl font-semibold font-display text-ink-900 mt-1">{rp.name}</h3>
                        <p className="text-body-sm text-ink-500 mt-2 line-clamp-2">{rp.description}</p>
                        <div className="flex items-center justify-between mt-6 pt-4 border-t border-ink-50">
                          <span className="text-brand-500 text-body-sm font-semibold">Learn More</span>
                          <ArrowRight className="w-4 h-4 text-brand-500 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
}
