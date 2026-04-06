import { useState } from 'react';
import { BookOpen, BarChart2, FileText, PieChart, Star as StarIcon, DownloadCloud, Calendar } from 'lucide-react';
import ScrollReveal from '@/components/shared/ScrollReveal';

const typeIcons: Record<string, { icon: React.FC<{className?: string}>, color: string }> = {
  directors_report: { icon: BookOpen, color: 'text-brand-500' },
  financial_statement: { icon: BarChart2, color: 'text-accent-500' },
  published_accounts: { icon: FileText, color: 'text-gold-500' },
  summary_position: { icon: PieChart, color: 'text-brand-400' },
  takaful_business: { icon: StarIcon, color: 'text-gold-500' },
};

const reports = [
  { id: '1', title: "Directors' Report to the Policyholders", type: 'directors_report', year: 2024, published_date: '2024-06-30', file_size_kb: 2400, page_count: 48 },
  { id: '2', title: 'Financial Statements 2024', type: 'financial_statement', year: 2024, published_date: '2024-06-30', file_size_kb: 5100, page_count: 96 },
  { id: '3', title: 'Published Accounts Summary', type: 'published_accounts', year: 2024, published_date: '2024-07-15', file_size_kb: 1800, page_count: 24 },
  { id: '4', title: 'Statement of Financial Position', type: 'summary_position', year: 2024, published_date: '2024-06-30', file_size_kb: 980, page_count: 12 },
  { id: '5', title: 'Takaful Business Report', type: 'takaful_business', year: 2024, published_date: '2024-08-01', file_size_kb: 1500, page_count: 32 },
  { id: '6', title: "Directors' Report 2023", type: 'directors_report', year: 2023, published_date: '2023-06-30', file_size_kb: 2200, page_count: 44 },
  { id: '7', title: 'Financial Statements 2023', type: 'financial_statement', year: 2023, published_date: '2023-06-30', file_size_kb: 4800, page_count: 88 },
  { id: '8', title: 'Published Accounts 2023', type: 'published_accounts', year: 2023, published_date: '2023-07-10', file_size_kb: 1600, page_count: 22 },
];

const years = [2024, 2023, 2022, 2021];

function formatSize(kb: number) {
  return kb >= 1000 ? `${(kb / 1000).toFixed(1)} MB` : `${kb} KB`;
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export default function FinancialReports() {
  const [activeYear, setActiveYear] = useState(2024);

  const filtered = reports.filter((r) => r.year === activeYear);

  return (
    <section className="py-14 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <span className="text-body-xs uppercase tracking-widest text-brand-500 font-semibold">
              Transparency & Governance
            </span>
            <h2 className="text-display-xl text-ink-900 font-display mt-2">Financial Performance</h2>
            <p className="text-body-lg text-ink-500 max-w-2xl mx-auto mt-4">
              Published accounts, statements, and reports in line with SECP regulations and international accounting standards.
            </p>
          </div>
        </ScrollReveal>

        {/* Year tabs */}
        <div className="flex gap-2 justify-center mt-8">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`rounded-lg px-5 py-2 text-body-sm font-medium transition-all ${
                activeYear === year
                  ? 'bg-brand-500 text-white shadow-md'
                  : 'text-ink-500 hover:text-brand-500 hover:bg-brand-50'
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {filtered.map((report, i) => {
            const typeInfo = typeIcons[report.type] || typeIcons.directors_report;
            const Icon = typeInfo.icon;
            return (
              <ScrollReveal key={report.id} delay={i * 0.05}>
                <div className="bg-ink-50 hover:bg-white border border-ink-100 hover:border-brand-200 rounded-2xl p-5 transition-all duration-200 group h-full flex flex-col">
                  <div className={`w-11 h-11 rounded-xl bg-white shadow-card flex items-center justify-center ${typeInfo.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-body-sm font-semibold text-ink-900 mt-4 line-clamp-2 flex-1">{report.title}</h3>
                  <div className="flex flex-wrap gap-3 mt-2 text-body-xs text-ink-400">
                    <span className="flex items-center gap-1"><FileText className="w-3 h-3" />{formatSize(report.file_size_kb)}</span>
                    <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" />{report.page_count} pages</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{formatDate(report.published_date)}</span>
                  </div>
                  <button className="mt-4 w-full bg-brand-500 hover:bg-brand-600 text-white rounded-xl py-2.5 text-body-sm font-semibold flex items-center justify-center gap-2 transition-colors">
                    <DownloadCloud className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-ink-400 text-body-md mt-10">No reports available for {activeYear} yet.</p>
        )}
      </div>
    </section>
  );
}
