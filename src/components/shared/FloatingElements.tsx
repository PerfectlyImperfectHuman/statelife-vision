import { useState, useEffect } from 'react';
import { MessageCircle, ChevronUp, CreditCard, FileSearch, Phone } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

export default function FloatingElements() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-brand-500 z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Back to top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 left-6 w-10 h-10 rounded-full bg-white border border-ink-200 shadow-card text-ink-500 hover:text-brand-500 hover:border-brand-300 flex items-center justify-center z-50 transition-colors"
            aria-label="Back to top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Help button */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {helpOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute bottom-16 right-0 w-72 bg-white rounded-2xl shadow-modal border border-ink-100 p-5 mb-2"
            >
              <h4 className="font-display font-semibold text-body-md text-ink-900">How can we help?</h4>
              <div className="space-y-2 mt-3">
                <a href="/pay" className="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-50 transition-colors">
                  <CreditCard className="w-5 h-5 text-brand-500" />
                  <span className="text-body-sm text-ink-700">Pay Premium</span>
                </a>
                <a href="/claims" className="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-50 transition-colors">
                  <FileSearch className="w-5 h-5 text-accent-500" />
                  <span className="text-body-sm text-ink-700">Track Claim</span>
                </a>
                <a href="tel:0800700900" className="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-50 transition-colors">
                  <Phone className="w-5 h-5 text-gold-500" />
                  <span className="text-body-sm text-ink-700">0800-700-900</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setHelpOpen(!helpOpen)}
          className="w-14 h-14 rounded-full bg-brand-500 shadow-glow-blue hover:bg-brand-600 hover:shadow-xl transition-all duration-200 flex items-center justify-center text-white"
          aria-label="Need help?"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </>
  );
}
