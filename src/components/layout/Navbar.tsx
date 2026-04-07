import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, User, ChevronDown, Menu, X } from 'lucide-react';
import { navLinks } from '@/lib/constants';
import { useUIStore } from '@/store/uiStore';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { mobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname, closeMobileMenu]);

  const handleMouseEnter = (label: string) => {
    clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#quote');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Utility bar */}
      <div className="hidden md:block bg-brand-950 text-ink-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
          <span className="text-body-xs">Pakistan's Largest Life & Health Insurer</span>
          <div className="flex items-center gap-5">
            <a href="tel:0800700900" className="flex items-center gap-1.5 text-body-xs text-ink-300 hover:text-brand-300 transition-colors">
              <Phone className="w-3 h-3" />
              0800-700-900
            </a>
            <Link to="/contact" className="flex items-center gap-1.5 text-body-xs text-ink-300 hover:text-brand-300 transition-colors">
              <User className="w-3 h-3" />
              My Account
            </Link>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`bg-white/95 backdrop-blur-xl border-b border-ink-100 transition-all duration-300 ${
          scrolled ? 'py-2 shadow-nav' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center">
              <span className="text-white font-display font-bold text-body-lg">SL</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-display font-bold text-body-md text-ink-900 leading-tight">State Life</div>
              <div className="text-body-xs text-ink-400 leading-tight">Insurance Corporation</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.megaMenu ? handleMouseEnter(link.label) : undefined}
                onMouseLeave={link.megaMenu ? handleMouseLeave : undefined}
              >
                <Link
                  to={link.href}
                  className={`relative flex items-center gap-1 px-4 py-2 text-body-sm font-medium rounded-lg transition-colors ${
                    isActive(link.href)
                      ? 'text-brand-500 bg-brand-50'
                      : 'text-ink-700 hover:text-brand-500 hover:bg-brand-50/50'
                  }`}
                >
                  {link.label}
                  {link.megaMenu && <ChevronDown className="w-3.5 h-3.5" />}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-brand-500 rounded-full" />
                  )}
                </Link>

                <AnimatePresence>
                  {link.megaMenu && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                      onMouseEnter={() => handleMouseEnter(link.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className={`bg-white rounded-2xl shadow-modal border border-ink-100 p-6 grid ${link.megaMenu.length > 1 ? 'grid-cols-4 w-[700px]' : 'grid-cols-1 w-[250px]'} gap-6`}>
                        {link.megaMenu.map((col) => (
                          <div key={col.heading}>
                            <h4 className="text-body-xs font-semibold uppercase tracking-widest text-brand-500 mb-3">
                              {col.heading}
                            </h4>
                            <div className="space-y-2">
                              {col.links.map((item) => (
                                <Link
                                  key={item.label}
                                  to={item.href}
                                  className="block group/item"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className="text-body-sm font-medium text-ink-800 group-hover/item:text-brand-500 transition-colors">
                                    {item.label}
                                  </div>
                                  <div className="text-body-xs text-ink-400">{item.desc}</div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleQuoteClick}
              className="hidden sm:flex bg-brand-500 hover:bg-brand-600 text-white rounded-full px-6 py-2.5 text-body-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
            >
              Get a Quote
            </button>
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-ink-50 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-ink-700" /> : <Menu className="w-6 h-6 text-ink-700" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-0 bg-brand-950/98 backdrop-blur-xl z-40 lg:hidden overflow-y-auto"
          >
            <div className="pt-24 pb-8 px-6">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
                className="space-y-1"
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.label}
                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                  >
                    <Link
                      to={link.href}
                      className={`block px-4 py-4 text-display-md font-display border-b border-white/10 ${
                        isActive(link.href) ? 'text-brand-400' : 'text-white/90'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-10 space-y-4"
              >
                <a href="tel:0800700900" className="flex items-center gap-3 text-white/70 text-body-lg">
                  <Phone className="w-5 h-5" />
                  0800-700-900
                </a>
                <button
                  onClick={handleQuoteClick}
                  className="block w-full text-center bg-brand-500 text-white rounded-full px-8 py-4 text-body-lg font-semibold mt-6"
                >
                  Get a Quote
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
