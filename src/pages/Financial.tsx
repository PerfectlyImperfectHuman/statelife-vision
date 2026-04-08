import { useState } from 'react';
import { FileText, Calendar, HardDrive, DownloadCloud, Inbox, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import ScrollReveal from '@/components/shared/ScrollReveal';
import AnimatedCounter from '@/components/shared/AnimatedCounter';
import SEOHead from '@/components/shared/SEOHead';

const allReports = [
  { id: '1', title: 'Annual Report 2024', type: 'Annual Report', year: 2024, published_date: '2024-12-01', file_url: '#', page_count: 148, file_size_kb: 8200 },
  { id: '2', title: 'Published Accounts 2024', type: 'Financial Accounts', year: 2024, published_date: '2024-11-15', file_url: '#', page_count: 64, file_size_kb: 3100 },
  { id: '3', title: 'Directors Report 2024', type: 'Directors Report', year: 2024, published_date: '2024-11-15', file_url: '#', page_count: 28, file_size_kb: 1400 },
  { id: '4', title: 'Actuarial Valuation 2024', type: 'Actuarial Report', year: 2024, published_date: '2024-10-01', file_url: '#', page_count: 52, file_size_kb: 2600 },
  { id: '5', title: 'Annual Report 2023', type: 'Annual Report', year: 2023, published_date: '2023-12-01', file_url: '#', page_count: 140, file_size_kb: 7900 },
  { id: '6', title: 'Published Accounts 2023', type: 'Financial Accounts', year: 2023, published_date: '2023-11-15', file_url: '#', page_count: 60, file_size_kb: 2900 },
  { id: '7', title: 'Directors Report 2023', type: 'Directors Report', year: 2023, published_date: '2023-11-15', file_url: '#', page_count: 26, file_size_kb: 1300 },
  { id: '8', title: 'Actuarial Valuation 2023', type: 'Actuarial Report', year: 2023, published_date: '2023-10-01', file_url: '#', page_count: 48, file_size_kb: 2400 },
  { id: '9', title: 'Annual Report 2022', type: 'Annual Report', year: 2022, published_date: '2022-12-01', file_url: '#', page_count: 136, file_size_kb: 7600 },
  { id: '10', title: 'Published Accounts 2022', type: 'Financial Accounts', year: 2022, published_date: '2022-11-15', file_url: '#', page_count: 58, file_size_kb: 2800 },
  { id: '11', title: 'Directors Report 2022', type: 'Directors Report', year: 2022, published_date: '2022-11-15', file_url: '#', page_count: 24, file_size_kb: 1200 },
  { id: '12', title: 'Actuarial Valuation 2022', type: 'Actuarial Report', year: 2022, published_date: '2022-10-01', file_url: '#', page_count: 46, file_size_kb: 2300 },
  { id: '13', title: 'Annual Report 2021', type: 'Annual Report', year: 2021, published_date: '2021-12-01', file_url: '#', page_count: 132, file_size_kb: 7300 },
  { id: '14', title: 'Published Accounts 2021', type: 'Financial Accounts', year: 2021, published_date: '2021-11-15', file_url: '#', page_count: 56, file_size_kb: 2700 },
  { id: '15', title: 'Directors Report 2021', type: 'Directors Report', year: 2021, published_date: '2021-11-15', file_url: '#', page_count: 22, file_size_kb: 1100 },
  { id: '16', title: 'Actuarial Valuation 2021', type: 'Actuarial Report', year: 2021, published_date: '2021-10-01', file_url: '#', page_count: 44, file_size_kb: 2200 },
];

const years = [2024, 2023, 2022, 2021];

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export default function Financial() {
  const [activeYear, setActiveYear] = useState(2024);
  const filtered = allReports.filter((r) => r.year === activeYear);

  return (
    <PageLayout>
      <SEOHead
        title="Financial Reports & Published Accounts — State Life"
        description="Download State Life's annual reports, published accounts, financial statements and directors' reports. Full transparency in line with SECP regulations."
        canonical="/financial"
      />

      {/* Hero */}
      <section className="py-14 md:py-20 bg-brand-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(21,96,189,0.15),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <nav className="flex items-center gap-2 text-body-xs text-ink-500 mb-4" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-brand-300 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" aria-hidden="true" />
              <span className="text-white/70">Financial Reports</span>
            </nav>
            <h1 className="text-display-xl text-white font-display mt-3">Financial Performance & Published Reports</h1>
            <div className="flex flex-wrap items-center gap-6 mt-8">
              {[
                { value: 122, suffix: 'B+', label: 'Active Policy Fund (PKR)' },
                { label: 'AAA PACRA Credit Rating' },
                { value: 53, suffix: '+', label: 'Years Consecutive Profitability' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  {'value' in stat && stat.value ? (
                    <div className="text-display-md text-white font-display"><AnimatedCounter end={stat.value} suffix={stat.suffix} /></div>
                  ) : (
                    <div className="text-display-md text-white font-display">AAA</div>
                  )}
                  <div className="text-body-xs text-white/50 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Reports */}
      <section className="py-14 md:py-24 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Year tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`rounded-full px-6 py-2.5 text-body-sm font-semibold transition-all ${
                  activeYear === year
                    ? 'bg-brand-500 text-white shadow-sm'
                    : 'bg-white text-ink-600 border border-ink-200 hover:bg-brand-50'
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {filtered.map((report, i) => (
                <ScrollReveal key={report.id} delay={i * 0.05}>
                  <div className="bg-white rounded-2xl p-6 border border-ink-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 group-hover:bg-brand-500 flex items-center justify-center transition-colors">
                      <FileText className="w-5 h-5 text-brand-500 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-body-xs uppercase tracking-widest text-brand-500 font-semibold mt-4">{report.type}</span>
                    <h3 className="text-body-lg font-semibold text-ink-900 mt-1 leading-snug flex-1">{report.title}</h3>
                    <div className="flex flex-wrap gap-3 mt-3 text-body-xs text-ink-500">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{formatDate(report.published_date)}</span>
                      <span className="flex items-center gap-1"><FileText className="w-3 h-3" />{report.page_count} pages</span>
                      <span className="flex items-center gap-1"><HardDrive className="w-3 h-3" />{(report.file_size_kb / 1024).toFixed(1)} MB</span>
                    </div>
                    <a
                      href={report.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 w-full bg-ink-50 group-hover:bg-brand-500 group-hover:text-white text-ink-600 rounded-xl py-2.5 text-body-sm font-semibold flex items-center justify-center gap-2 transition-colors"
                      aria-label={`Download ${report.title}`}
                    >
                      <DownloadCloud className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Inbox className="w-12 h-12 text-ink-300 mx-auto" />
              <p className="text-body-md text-ink-500 mt-4">No reports published for {activeYear} yet.</p>
              <p className="text-body-sm text-ink-500 mt-1">Contact us for older reports.</p>
            </div>
          )}

          {/* Disclosure */}
          <div className="flex items-start gap-3 mt-12 bg-white rounded-2xl p-5 border border-ink-100">
            <AlertCircle className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
            <p className="text-body-xs text-ink-500">
              Financial reports are prepared in compliance with International Accounting Standards (IAS) and SECP regulations. For detailed inquiries, contact{' '}
              <a href="mailto:finance@statelife.com.pk" className="text-brand-500 underline hover:text-brand-600">finance@statelife.com.pk</a>.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
