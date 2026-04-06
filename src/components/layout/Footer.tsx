import { Link } from 'react-router-dom';
import { Phone, Facebook, Instagram, Linkedin, Youtube, Twitter, Apple } from 'lucide-react';

const footerLinks = [
  {
    heading: 'Quick Links',
    links: [
      { label: 'Downloads', href: '/downloads' },
      { label: 'Policy T&C', href: '/terms' },
      { label: 'Forms', href: '/forms' },
      { label: 'Product Advisor', href: '/advisor' },
      { label: 'Loans', href: '/loans' },
    ],
  },
  {
    heading: 'Products',
    links: [
      { label: 'Life Insurance', href: '/products' },
      { label: 'Health Insurance', href: '/state-health' },
      { label: 'Takaful', href: '/products/takaful' },
      { label: 'Corporate', href: '/products/corporate' },
      { label: 'Digital Insurance', href: '/products/digital' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Pay Premium', href: '/pay' },
      { label: 'Claim Search', href: '/claims' },
      { label: 'Find Agent', href: '/find-agent' },
      { label: 'Surrender Value', href: '/surrender' },
    ],
  },
  {
    heading: 'Legal & Info',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Complaints', href: '/complaints' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'SECP Regulations', href: '/secp' },
      { label: 'AML Policy', href: '/aml' },
    ],
  },
];

const socialIcons = [
  { icon: Facebook, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Youtube, href: '#' },
];

export default function Footer() {
  return (
    <footer>
      {/* App download band */}
      <div className="bg-brand-500 py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-display-md text-white font-display">
            Download the State Life Health Plus App
          </h3>
          <div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
            <a
              href="#"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-6 py-3 text-white transition-colors"
            >
              <Apple className="w-6 h-6" />
              <div className="text-left">
                <div className="text-body-xs text-white/70">Download on the</div>
                <div className="text-body-sm font-semibold">App Store</div>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-6 py-3 text-white transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.74a2.08 2.08 0 0 1-1.18-.93c-.34-.53-.5-1.15-.5-1.85V3.04c0-.83.22-1.5.66-2L8.44 7.4l-5.26 6.34 5.26 5.54L3.18 23.74z" />
                <path d="M14.46 12.68L9.8 17.92l4.86 5.12.8-.46 5.3-3.08c.77-.44 1.24-1.02 1.24-1.76s-.47-1.32-1.24-1.76l-6.3-3.3z" />
                <path d="M9.8 6.88l4.66 5.08 6.1-3.2c.77-.44 1.24-1.02 1.24-1.76 0-.74-.47-1.32-1.24-1.76L14.66.82 9.8 6.88z" />
                <path d="M8.44 7.4L2.16 1.04C2.6.56 3.2.3 3.96.3c.42 0 .88.1 1.38.4l9.12 5.18L8.44 7.4z" />
              </svg>
              <div className="text-left">
                <div className="text-body-xs text-white/70">Get it on</div>
                <div className="text-body-sm font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-brand-950 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
            {/* Brand column */}
            <div className="sm:col-span-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center">
                  <span className="text-white font-display font-bold text-body-lg">SL</span>
                </div>
                <div>
                  <div className="font-display font-bold text-body-md text-white/90">State Life</div>
                  <div className="text-body-xs text-ink-500">Insurance Corporation</div>
                </div>
              </div>
              <p className="text-body-sm text-ink-500 mt-4 italic">
                "Ensuring Trust, Securing Futures"
              </p>
              <address className="text-body-xs text-ink-500 mt-4 leading-relaxed not-italic">
                State Life Insurance Corporation of Pakistan<br />
                State Life Building, Dr. Ziauddin Ahmed Road<br />
                Karachi - 75600
              </address>
              <a href="tel:0800700900" className="flex items-center gap-2 text-brand-400 font-semibold text-body-sm mt-3">
                <Phone className="w-4 h-4" />
                0800-700-900
              </a>
              <div className="flex items-center gap-2 mt-5">
                {socialIcons.map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="w-9 h-9 rounded-lg bg-brand-800 hover:bg-brand-600 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200"
                    aria-label={`Social media link ${i + 1}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {footerLinks.map((group) => (
              <div key={group.heading}>
                <h4 className="text-body-xs text-ink-400 uppercase tracking-widest font-semibold pb-4 border-b border-brand-800 mb-4">
                  {group.heading}
                </h4>
                <nav className="space-y-0.5">
                  {group.links.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="block text-body-sm text-ink-500 hover:text-white transition-colors py-1.5"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="border-t border-brand-800 mt-12 pt-6 pb-4 flex items-center justify-between flex-wrap gap-4">
            <p className="text-body-xs text-ink-500">
              © {new Date().getFullYear()} State Life Insurance Corporation of Pakistan. All rights reserved.
            </p>
            <p className="text-body-xs text-ink-500">
              Regulated by SECP • Federal Insurance Ombudsman
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
