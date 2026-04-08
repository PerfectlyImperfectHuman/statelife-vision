import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, User, ChevronDown, Menu, X, ChevronRight, Globe } from 'lucide-react';
import { useUIStore } from '@/store/uiStore';
import { scrollToAnchor } from '@/lib/scrollToAnchor';

const navLinks = [
  {
    label: 'Products', href: '/products',
    megaMenu: [
      { heading: 'Life Insurance', links: [
        { label: 'Platinum Plus', href: '/products/platinum-plus', desc: 'Savings & protection' },
        { label: 'Jeevan Saathi', href: '/products/jeevan-saathi', desc: 'Joint life cover' },
        { label: 'Digital Insurance', href: '/products/digital-insurance', desc: 'Buy online in 10 min' },
        { label: 'Alpha Insurance', href: '/products/alpha-insurance', desc: 'Subsidiary plans' },
      ]},
      { heading: 'Health', links: [
        { label: 'Sehat Zindagi', href: '/products/sehat-zindagi', desc: 'Individual health' },
        { label: 'Sehat Sahulat', href: '/products/sehat-sahulat', desc: 'Family health plan' },
      ]},
      { heading: 'Takaful & Corporate', links: [
        { label: 'Takaful Products', href: '/products/takaful', desc: 'Sharia compliant' },
        { label: 'Corporate Group', href: '/products/corporate', desc: 'Employee protection' },
      ]},
    ],
  },
  { label: 'State Health', href: '/state-health' },
  {
    label: 'Policyholder', href: '/policyholder',
    megaMenu: [
      { heading: 'Services', links: [
        { label: 'Pay Premium', href: '/policyholder#pay', desc: 'Online premium payment' },
        { label: 'Track Claim', href: '/policyholder#claims', desc: 'Check claim status' },
        { label: 'Find Agent', href: '/policyholder#agent', desc: 'Locate nearest agent' },
      ]},
    ],
  },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { mobileMenuOpen, toggleMobileMenu, closeMobileMenu, language, setLanguage } = useUIStore();
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { closeMobileMenu(); }, [location.pathname, closeMobileMenu]);

  // Escape closes mobile menu
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeMobileMenu(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileMenuOpen, closeMobileMenu]);

  const handleMouseEnter = (label: string) => { clearTimeout(dropdownTimeout.current); setActiveDropdown(label); };
  const handleMouseLeave = () => { dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150); };

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      scrollToAnchor('quote');
    } else {
      navigate('/');
      setTimeout(() => scrollToAnchor('quote'), 300);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50" role="banner">
      {/* Utility bar */}
      <div className="hidden md:block bg-brand-950 text-ink-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
          <span className="text-body-xs">Pakistan's Largest Life & Health Insurer</span>
          <div className="flex items-center gap-5">
            <button
              onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}
              className="flex items-center gap-1.5 text-body-xs text-ink-500 hover:text-brand-300 transition-colors"
              aria-label="Toggle language between English and Urdu"
            >
              <Globe className="w-3 h-3" />
              {language === 'en' ? 'اردو' : 'English'}
            </button>
            <a href="tel:0800700900" className="flex items-center gap-1.5 text-body-xs text-ink-500 hover:text-brand-300 transition-colors">
              <Phone className="w-3 h-3" /> 0800-700-900
            </a>
            <Link to="/contact" className="flex items-center gap-1.5 text-body-xs text-ink-500 hover:text-brand-300 transition-colors">
              <User className="w-3 h-3" /> My Account
            </Link>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={`bg-white/95 backdrop-blur-xl border-b border-ink-100 transition-all duration-300 ${scrolled ? 'py-2 shadow-nav' : 'py-4'}`} role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 flex-shrink-0" aria-label="State Life Insurance Corporation of Pakistan logo">
            <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center">
              <span className="text-white font-display font-bold text-body-lg">SL</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-display font-bold text-body-md text-ink-900 leading-tight">State Life</div>
              <div className="text-body-xs text-ink-500 leading-tight">Insurance Corporation</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative"
                onMouseEnter={() => link.megaMenu ? handleMouseEnter(link.label) : undefined}
                onMouseLeave={link.megaMenu ? handleMouseLeave : undefined}
              >
                <Link to={link.href}
                  className={`relative flex items-center gap-1 px-4 py-2 text-body-sm font-medium rounded-lg transition-colors ${
                    isActive(link.href) ? 'text-brand-500 bg-brand-50' : 'text-ink-700 hover:text-brand-500 hover:bg-brand-50/50'
                  }`}
                >
                  {link.label}
                  {link.megaMenu && <ChevronDown className="w-3.5 h-3.5" />}
                  {isActive(link.href) && <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-brand-500 rounded-full" />}
                </Link>

                <AnimatePresence>
                  {link.megaMenu && activeDropdown === link.label && (
                    <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                      onMouseEnter={() => handleMouseEnter(link.label)} onMouseLeave={handleMouseLeave}
                    >
                      <div className={`bg-white rounded-2xl shadow-modal border border-ink-100 p-6 grid ${link.megaMenu.length > 1 ? 'grid-cols-3 w-[600px]' : 'grid-cols-1 w-[250px]'} gap-6`}>
                        {link.megaMenu.map((col) => (
                          <div key={col.heading}>
                            <h4 className="text-body-xs font-semibold uppercase tracking-widest text-brand-500 mb-3">{col.heading}</h4>
                            <div className="space-y-2">
                              {col.links.map((item) => (
                                <Link key={item.label} to={item.href} className="block group/item" onClick={() => setActiveDropdown(null)}>
                                  <div className="text-body-sm font-medium text-ink-800 group-hover/item:text-brand-500 transition-colors">{item.label}</div>
                                  <div className="text-body-xs text-ink-500">{item.desc}</div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                        {link.label === 'Products' && (
                          <div className="col-span-full border-t border-ink-100 pt-3 mt-2">
                            <Link to="/products" className="flex items-center gap-1 text-brand-500 text-body-sm font-semibold hover:gap-2 transition-all" onClick={() => setActiveDropdown(null)}>
                              View All Products <ChevronRight className="w-4 h-4" />
                            </Link>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <button onClick={handleQuoteClick}
              className="hidden sm:flex bg-brand-500 hover:bg-brand-600 text-white rounded-full px-6 py-2.5 text-body-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
            >Get a Quote</button>
            <button onClick={toggleMobileMenu} className="lg:hidden p-3 rounded-lg hover:bg-ink-50 transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-ink-700" /> : <Menu className="w-6 h-6 text-ink-700" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
            className="fixed inset-0 top-0 bg-brand-950/98 backdrop-blur-xl z-40 lg:hidden overflow-y-auto"
            role="navigation" aria-label="Mobile navigation"
          >
            <div className="pt-24 pb-8 px-6">
              <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } } }} className="space-y-1">
                {navLinks.map((link) => (
                  <motion.div key={link.label} variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}>
                    <Link to={link.href}
                      className={`block px-4 py-4 text-display-md font-display border-b border-white/10 ${isActive(link.href) ? 'text-brand-400' : 'text-white/90'}`}
                    >{link.label}</Link>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-8 space-y-4">
                <button onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}
                  className="w-full flex items-center justify-center gap-2 text-white/70 text-body-lg py-3 border border-white/20 rounded-xl"
                  aria-label="Toggle language between English and Urdu"
                >
                  <Globe className="w-5 h-5" /> {language === 'en' ? 'اردو' : 'English'}
                </button>
                <div className="bg-brand-500/10 border border-brand-500/20 rounded-2xl p-4 flex items-center gap-3">
                  <Phone className="w-5 h-5 text-white/70" />
                  <div>
                    <a href="tel:0800700900" className="text-white text-body-lg font-semibold">0800-700-900</a>
                    <p className="text-white/50 text-body-xs">Mon–Sat 9am–5pm</p>
                  </div>
                </div>
                <button onClick={handleQuoteClick}
                  className="block w-full text-center bg-brand-500 text-white rounded-full px-8 py-4 text-body-lg font-semibold"
                >Get a Free Quote</button>
                <p className="text-body-xs text-white/30 text-center mt-6">© {new Date().getFullYear()} State Life Insurance Corporation of Pakistan</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
