import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('sl_cookie_consent');
    if (consent === 'accepted' || consent === 'declined') return;
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleConsent = (value: 'accepted' | 'declined') => {
    localStorage.setItem('sl_cookie_consent', value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[9998] bg-ink-950/98 backdrop-blur-xl border-t border-brand-800/50 py-5 px-6"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <Cookie className="w-5 h-5 text-brand-400 flex-shrink-0" />
              <p className="text-body-sm text-white/70">
                We use cookies to improve your experience. By continuing, you agree to our{' '}
                <Link to="/privacy-policy" className="text-brand-400 underline hover:text-brand-300">
                  Privacy Policy
                </Link>.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleConsent('declined')}
                className="border border-ink-600 text-white/60 rounded-lg px-5 py-2 text-body-sm hover:bg-ink-800 transition-colors"
              >
                Decline
              </button>
              <button
                onClick={() => handleConsent('accepted')}
                className="bg-brand-500 text-white rounded-lg px-5 py-2 text-body-sm font-semibold hover:bg-brand-600 transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
