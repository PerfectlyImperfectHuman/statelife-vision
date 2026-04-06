import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '@/lib/constants';
import ScrollReveal from '@/components/shared/ScrollReveal';
import AnimatedCounter from '@/components/shared/AnimatedCounter';

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-14 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <ScrollReveal className="lg:col-span-2">
            <span className="text-body-xs uppercase tracking-widest text-brand-500 font-semibold">
              Testimonials
            </span>
            <h2 className="text-display-xl text-ink-900 font-display mt-2">
              Trusted by 147 Million Pakistanis
            </h2>
            <p className="text-body-lg text-ink-500 mt-4">
              From Karachi to Gilgit, families across Pakistan rely on State Life for their most important financial protection.
            </p>

            <div className="mt-8 space-y-5">
              {[
                { value: 4.8, suffix: '/5', label: 'Customer Rating' },
                { value: 98.2, suffix: '%', label: 'Claims Settlement', decimals: 1 },
                { value: 60, suffix: '+', label: 'Years of Service' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-3">
                  <span className="text-display-md text-brand-500 font-display">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} decimals={stat.decimals || 0} />
                  </span>
                  <span className="text-body-sm text-ink-500">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-1 mt-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
              ))}
            </div>
          </ScrollReveal>

          {/* Right */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="bg-ink-50 rounded-3xl p-8"
              >
                <div className="text-display-2xl text-brand-200 font-display leading-none">"</div>
                <p className="text-body-lg text-ink-700 italic mt-2">{t.quote}</p>
                <div className="flex items-center gap-4 mt-6">
                  <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center">
                    <span className="text-brand-500 text-body-sm font-semibold">
                      {t.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-body-sm font-semibold text-ink-900">{t.name}</div>
                    <div className="text-body-xs text-ink-400">Policyholder since {t.since}, {t.location}</div>
                  </div>
                </div>
                <span className="inline-block bg-brand-50 text-brand-600 rounded-full px-3 py-1 text-body-xs mt-4">
                  {t.policy}
                </span>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-3 mt-6">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-ink-200 flex items-center justify-center text-ink-500 hover:text-brand-500 hover:border-brand-300 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-body-xs text-ink-400">
                {current + 1} / {testimonials.length}
              </span>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-ink-200 flex items-center justify-center text-ink-500 hover:text-brand-500 hover:border-brand-300 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
