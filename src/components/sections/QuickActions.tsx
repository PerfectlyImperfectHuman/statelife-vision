import { CreditCard, FileSearch, UserSearch, Calculator, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const actions = [
  { icon: CreditCard, label: 'Pay Premium', sublabel: 'Instant online payment', href: '/pay', color: 'brand' },
  { icon: FileSearch, label: 'Track Claim', sublabel: 'Group & individual claims', href: '/claims', color: 'accent' },
  { icon: UserSearch, label: 'Find Agent', sublabel: 'Locate nearest agent', href: '/find-agent', color: 'gold' },
  { icon: Calculator, label: 'Get Quote', sublabel: 'Free premium estimate', href: '#quote', color: 'brand' },
  { icon: Phone, label: 'Helpline', sublabel: '0800-700-900 (Free)', href: 'tel:0800700900', color: 'accent' },
];

const colorMap: Record<string, { bg: string; text: string; hoverBg: string; hoverBorder: string }> = {
  brand: { bg: 'bg-brand-100', text: 'text-brand-500', hoverBg: 'hover:bg-brand-50', hoverBorder: 'hover:border-brand-200' },
  accent: { bg: 'bg-accent-100', text: 'text-accent-500', hoverBg: 'hover:bg-accent-100/50', hoverBorder: 'hover:border-accent-200' },
  gold: { bg: 'bg-gold-100', text: 'text-gold-500', hoverBg: 'hover:bg-gold-100/50', hoverBorder: 'hover:border-gold-200' },
};

export default function QuickActions() {
  return (
    <section className="bg-white border-b border-ink-100 py-6 shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-1">
          {actions.map(({ icon: Icon, label, sublabel, href, color }) => {
            const c = colorMap[color];
            const Component = href.startsWith('tel:') || href.startsWith('#') ? 'a' : Link;
            const props = href.startsWith('tel:') || href.startsWith('#') ? { href } : { to: href };
            return (
              <Component
                key={label}
                {...(props as any)}
                className={`flex items-center gap-4 min-w-[200px] snap-start bg-ink-50 ${c.hoverBg} border border-ink-100 ${c.hoverBorder} rounded-2xl px-5 py-4 transition-all duration-200 cursor-pointer hover:-translate-y-0.5 hover:shadow-card-hover flex-shrink-0`}
              >
                <div className={`w-10 h-10 rounded-xl ${c.bg} ${c.text} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-body-sm font-semibold text-ink-900">{label}</div>
                  <div className="text-body-xs text-ink-400">{sublabel}</div>
                </div>
              </Component>
            );
          })}
        </div>
      </div>
    </section>
  );
}
