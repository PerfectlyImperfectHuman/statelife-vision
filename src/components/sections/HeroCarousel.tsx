import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { slides } from '@/lib/constants';

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const announcementRef = useRef<HTMLDivElement>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrent(index);
    if (announcementRef.current) {
      announcementRef.current.textContent = `Slide ${index + 1} of ${slides.length}: ${slides[index].headline}`;
    }
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const slide = slides[current];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!carouselRef.current?.contains(document.activeElement)) return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [next]);

  return (
    <section
      ref={carouselRef}
      className="relative min-h-[calc(100vh-120px)] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-label="Featured content carousel"
      aria-roledescription="carousel"
    >
      <div
        ref={announcementRef}
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
          role="group"
          aria-roledescription="slide"
          aria-label={`${current + 1} of ${slides.length}`}
        >
          <div className="absolute inset-0 md:left-[45%]">
            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover"
              loading={current === 0 ? 'eager' : 'lazy'}
              fetchPriority={current === 0 ? 'high' : 'low'}
              sizes="(max-width: 768px) 100vw, 55vw"
              width={1400}
              height={900}
              decoding="async"
            />
          </div>

          <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-950/70 to-transparent md:from-brand-950 md:via-brand-950/80 md:to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-[calc(100vh-120px)]">
        <div className="max-w-2xl py-14 md:py-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id + '-content'}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
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

              <h1 className="text-display-2xl text-white font-display max-w-[14ch]">
                {slide.headline}
              </h1>

              <p className="text-body-lg text-white/75 max-w-[48ch] mt-4">
                {slide.subtext}
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  to={slide.cta_primary.href}
                  className="inline-flex items-center gap-2 bg-white text-brand-600 font-semibold rounded-full px-8 py-4 hover:bg-brand-50 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-body-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-950"
                >
                  {slide.cta_primary.label}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  to={slide.cta_secondary.href}
                  className="inline-flex items-center gap-2 border-2 border-white/40 text-white rounded-full px-8 py-4 hover:bg-white/10 backdrop-blur-sm transition-all text-body-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-950"
                >
                  {slide.cta_secondary.label}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-2 mt-12" role="tablist" aria-label="Carousel navigation">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowLeft' && i > 0) {
                    e.preventDefault();
                    goToSlide(i - 1);
                  } else if (e.key === 'ArrowRight' && i < slides.length - 1) {
                    e.preventDefault();
                    goToSlide(i + 1);
                  }
                }}
                role="tab"
                aria-selected={i === current}
                aria-controls={`slide-${i}`}
                tabIndex={i === current ? 0 : -1}
                className={`rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-950 ${
                  i === current
                    ? 'w-8 h-2 bg-white'
                    : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${i + 1}: ${slides[i].headline}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
