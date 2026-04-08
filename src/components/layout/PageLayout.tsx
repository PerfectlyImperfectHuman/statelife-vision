import { ReactNode, useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, X, ArrowUp, CreditCard, FileSearch, UserSearch, Phone } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieBanner from '@/components/shared/CookieBanner';
import { useUIStore } from '@/store/uiStore';
import { scrollToAnchor } from '@/lib/scrollToAnchor';

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { isHelpOpen, setHelpOpen, hasOpenedHelp } = useUIStore();
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const navigate = useNavigate();
  const chatRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Escape key closes help panel
  useEffect(() => {
    if (!isHelpOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setHelpOpen(false);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isHelpOpen, setHelpOpen]);

  const handleHelpAction = useCallback((path: string, anchor: string) => {
    setHelpOpen(false);
    navigate(path);
    setTimeout(() => scrollToAnchor(anchor), 100);
  }, [navigate, setHelpOpen]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Scroll progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-brand-500 z-[60] origin-left pointer-events-none"
        style={{ scaleX }}
        aria-hidden="true"
      />

      <Navbar />
      <main id="main-content" className="flex-1 pt-[calc(2.25rem+56px)] md:pt-[calc(2.25rem+72px)]" role="main">
        {children}
      </main>
      <Footer />
      <CookieBanner />

      {/* Back to top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 left-6 w-11 h-11 rounded-full bg-white border border-ink-200 shadow-md hover:shadow-lg hover:border-brand-300 hover:text-brand-500 flex items-center justify-center z-50 transition-all text-ink-500"
            aria-label="Scroll back to top of page"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Help chat */}
      <div className="fixed bottom-6 right-6 z-50" ref={chatRef}>
        <AnimatePresence>
          {isHelpOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 12 }}
              className="absolute bottom-16 right-0 w-80 max-w-[calc(100vw-2rem)] bg-white rounded-3xl shadow-2xl border border-ink-100 mb-2 overflow-hidden"
              role="dialog"
              aria-label="Help menu"
            >
              <div className="bg-brand-500 px-5 py-4 flex items-center justify-between">
                <span className="font-display font-semibold text-white">How can we help?</span>
                <button
                  onClick={() => { setHelpOpen(false); triggerRef.current?.focus(); }}
                  className="p-1 rounded-lg hover:bg-white/20 text-white transition-colors"
                  aria-label="Close help chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 space-y-2">
                {[
                  { icon: CreditCard, label: 'Pay My Premium', path: '/policyholder', anchor: 'pay' },
                  { icon: FileSearch, label: 'Track My Claim', path: '/policyholder', anchor: 'claims' },
                  { icon: UserSearch, label: 'Find an Agent', path: '/policyholder', anchor: 'agent' },
                ].map(({ icon: Icon, label, path, anchor }) => (
                  <button
                    key={label}
                    onClick={() => handleHelpAction(path, anchor)}
                    className="w-full flex items-center gap-3 bg-ink-50 hover:bg-brand-50 rounded-xl p-4 transition-colors text-left"
                  >
                    <Icon className="w-5 h-5 text-brand-500" />
                    <span className="text-body-sm text-ink-700 font-medium">{label}</span>
                  </button>
                ))}
              </div>
              <div className="border-t border-ink-100 p-4">
                <a href="tel:0800700900" className="text-brand-500 text-body-sm font-semibold">0800-700-900</a>
                <p className="text-body-xs text-ink-500 mt-0.5">Mon – Sat, 9am – 5pm</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          ref={triggerRef}
          onClick={() => setHelpOpen(!isHelpOpen)}
          className="w-14 h-14 rounded-full bg-brand-500 shadow-glow-blue hover:bg-brand-600 hover:scale-110 transition-all duration-200 flex items-center justify-center text-white relative"
          aria-label={isHelpOpen ? 'Close help chat' : 'Open help chat'}
        >
          <MessageCircle className="w-6 h-6" />
          {!hasOpenedHelp && (
            <span className="absolute -top-1 -right-1">
              <span className="absolute w-4 h-4 rounded-full bg-accent-400 animate-ping" />
              <span className="relative block w-4 h-4 rounded-full bg-accent-500" />
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
