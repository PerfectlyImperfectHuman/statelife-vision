import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import SEOHead from '@/components/shared/SEOHead';

const quickLinks = [
  { label: 'Products', href: '/products' },
  { label: 'Policyholder', href: '/policyholder' },
  { label: 'State Health', href: '/state-health' },
  { label: 'Contact Us', href: '/contact' },
];

export default function NotFound() {
  return (
    <PageLayout>
      <SEOHead title="Page Not Found" description="The page you are looking for does not exist." noIndex />
      <div className="min-h-screen bg-ink-50 flex items-center justify-center">
        <div className="text-center max-w-lg mx-auto px-6 py-32">
          <div className="font-display font-black text-[8rem] leading-none text-brand-100" aria-hidden="true">404</div>
          <h1 className="text-display-xl font-display text-ink-900 mt-4">This Page Doesn't Exist</h1>
          <p className="text-body-md text-ink-500 mt-3">The page may have been moved, renamed, or doesn't exist.</p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <Link to="/" className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white rounded-full px-6 py-3 text-body-sm font-semibold transition-colors">
              <Home className="w-4 h-4" /> Go Home
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-brand-500 text-brand-600 rounded-full px-6 py-3 text-body-sm font-semibold hover:bg-brand-50 transition-colors">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10">
            {quickLinks.map((l) => (
              <Link key={l.href} to={l.href} className="bg-white border border-ink-200 rounded-xl p-3 text-body-sm text-ink-600 hover:border-brand-300 hover:text-brand-500 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
