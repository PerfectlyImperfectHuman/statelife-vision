import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { slides } from '@/lib/constants';

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const slide = slides[current];

  return (
    <section
      className="relative min-h-[calc(100vh-120px)] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {/* Background image - full on mobile, right side on desktop */}
          <div className="absolute inset-0 md:left-[45%]">
            <img
              src={slide.image}
              alt={slide.headline}
              className="w-full h-full object-cover"
              loading={current === 0 ? 'eager' : 'lazy'}
              width={1400}
              height={900}
            />
          </div>

          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-950/70 to-transparent md:from-brand-950 md:via-brand-950/80 md:to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center min-h-[calc(100vh-120px)]">
        <div className="max-w-2xl py-14 md:py-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id + '-content'}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block bg-white/10 backdrop-blur-sm text-white/80 text-body-xs uppercase tracking-widest rounded-full px-4 py-1.5">
                  {slide.eyebrow}
                </span>
                {slide.badge && (
                  <span className="inline-block bg-accent-500 text-white rounded-full px-3 py-1 text-body-xs font-semibold">
                    {slide.badge}
                  </span>
                )}
              </div>

              {/* Headline */}
              <h1 className="text-display-2xl text-white font-display max-w-[14ch]">
                {slide.headline}
              </h1>

              {/* Subtext */}
              <p className="text-body-lg text-white/75 max-w-[48ch] mt-4">
                {slide.subtext}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  to={slide.cta_primary.href}
                  className="inline-flex items-center gap-2 bg-white text-brand-600 font-semibold rounded-full px-8 py-4 hover:bg-brand-50 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-body-sm"
                >
                  {slide.cta_primary.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to={slide.cta_secondary.href}
                  className="inline-flex items-center gap-2 border-2 border-white/40 text-white rounded-full px-8 py-4 hover:bg-white/10 backdrop-blur-sm transition-all text-body-sm"
                >
                  {slide.cta_secondary.label}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide indicators */}
          <div className="flex items-center gap-2 mt-12">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-8 h-2 bg-white'
                    : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
