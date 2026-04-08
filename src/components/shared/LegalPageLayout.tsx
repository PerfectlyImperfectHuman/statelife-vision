import { useState, useEffect, useRef, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';

interface Section {
  id: string;
  title: string;
}

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  sections: Section[];
  children: ReactNode;
}

export default function LegalPageLayout({ title, lastUpdated, sections, children }: LegalPageLayoutProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-100px 0px -60% 0px', threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, [sections]);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-14 md:py-20 bg-ink-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-body-xs text-ink-500 mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-300 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" aria-hidden="true" />
            <span className="text-white/70">{title}</span>
          </nav>
          <h1 className="text-display-xl text-white font-display mt-3">{title}</h1>
          <p className="text-body-sm text-white/40 mt-2">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16 flex gap-12">
        {/* Sidebar */}
        <aside className="hidden lg:block sticky top-[100px] w-64 flex-shrink-0 self-start">
          <p className="text-body-xs font-semibold text-ink-500 uppercase tracking-widest mb-4">On this page</p>
          <nav className="space-y-0">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`block text-body-sm py-2 border-l-2 pl-3 transition-colors ${
                  activeSection === s.id
                    ? 'border-brand-500 text-brand-500 font-semibold'
                    : 'border-transparent text-ink-500 hover:text-brand-500'
                }`}
              >
                {s.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <div className="flex-1 min-w-0 prose-content">
          {children}
        </div>
      </div>
    </PageLayout>
  );
}
