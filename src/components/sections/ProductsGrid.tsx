import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield, Heart, Activity, Users, Star, Briefcase, Smartphone, TrendingUp, ArrowRight
} from 'lucide-react';
import { products } from '@/lib/constants';
import ScrollReveal from '@/components/shared/ScrollReveal';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Shield, Heart, Activity, Users, Star, Briefcase, Smartphone, TrendingUp,
};

const categories = ['All', 'Life Insurance', 'Health', 'Takaful', 'Corporate'];

const categoryColors: Record<string, string> = {
  'Life Insurance': 'from-brand-500 to-brand-400',
  'Health': 'from-accent-500 to-accent-400',
  'Takaful': 'from-gold-500 to-gold-400',
  'Corporate': 'from-brand-700 to-brand-500',
};

const tagColors: Record<string, { bg: string; text: string }> = {
  brand: { bg: 'bg-brand-100', text: 'text-brand-600' },
  accent: { bg: 'bg-accent-100', text: 'text-accent-600' },
  gold: { bg: 'bg-gold-100', text: 'text-gold-600' },
};

export default function ProductsGrid() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section className="py-14 md:py-24 bg-ink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <span className="text-body-xs uppercase tracking-widest text-brand-500 font-semibold">
              Insurance Products
            </span>
            <h2 className="text-display-xl text-ink-900 font-display mt-2">
              Protection Plans Built for Every Pakistani
            </h2>
            <p className="text-body-lg text-ink-500 max-w-2xl mx-auto mt-4">
              From individual life cover to corporate health plans, find the protection that fits your needs.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 justify-center mt-8" role="group" aria-label="Product category filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`relative rounded-full px-5 py-2 text-body-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 ${
                activeCategory === cat
                  ? 'bg-brand-500 text-white shadow-md'
                  : 'bg-white border border-ink-200 text-ink-600 hover:border-brand-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12"
        >
          {filtered.map((product, i) => {
            const Icon = iconMap[product.icon] || Shield;
            const gradient = categoryColors[product.category] || 'from-brand-500 to-brand-400';
            const tc = product.tag_color ? tagColors[product.tag_color] : tagColors.brand;

            if (product.featured) {
              return (
                <ScrollReveal key={product.id} delay={i * 0.05} className="sm:col-span-2">
                  <Link to={product.href} className="block group">
                    <div className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-3xl overflow-hidden border border-brand-500/20 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 p-6 relative">
                      {product.tag && (
                        <span className="absolute top-4 right-4 bg-white text-brand-600 rounded-full px-3 py-1 text-body-xs font-semibold">
                          {product.tag}
                        </span>
                      )}
                      <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-body-xs text-white/60 uppercase tracking-wider">{product.category}</p>
                      <h3 className="text-body-xl font-semibold font-display text-white mt-1">{product.name}</h3>
                      <p className="text-body-sm text-brand-200 font-medium mt-0.5">{product.tagline}</p>
                      <p className="text-body-sm text-white/70 mt-3">{product.description}</p>
                      <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/20">
                        <span className="text-white text-body-sm font-semibold">Learn More</span>
                        <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            }

            return (
              <ScrollReveal key={product.id} delay={i * 0.05}>
                <Link to={product.href} className="block group h-full">
                  <div className="bg-white rounded-3xl overflow-hidden border border-ink-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full flex flex-col relative">
                    <div className={`h-2 bg-gradient-to-r ${gradient}`} />
                    <div className="p-6 flex flex-col flex-1">
                      {product.tag && (
                        <span className={`absolute top-6 right-4 ${tc.bg} ${tc.text} rounded-full px-3 py-1 text-body-xs font-semibold`}>
                          {product.tag}
                        </span>
                      )}
                      <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand-500 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-brand-500 group-hover:text-white transition-colors" />
                      </div>
                      <p className="text-body-xs text-ink-400 uppercase tracking-wider">{product.category}</p>
                      <h3 className="text-body-xl font-semibold font-display text-ink-900 mt-1">{product.name}</h3>
                      <p className="text-body-sm text-brand-500 font-medium mt-0.5">{product.tagline}</p>
                      <p className="text-body-sm text-ink-500 mt-3 line-clamp-2 flex-1">{product.description}</p>
                      <div className="flex items-center justify-between mt-6 pt-4 border-t border-ink-50">
                        <span className="text-brand-500 text-body-sm font-semibold">Learn More</span>
                        <ArrowRight className="w-4 h-4 text-brand-500 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
