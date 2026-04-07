import AnimatedCounter from '@/components/shared/AnimatedCounter';

const stats = [
  { value: 122, suffix: 'B+', label: 'Active Policies Fund' },
  { value: 57, suffix: '%', label: 'Market Share' },
  { value: 190, suffix: 'B+', label: 'Claims Paid' },
  { value: 147, suffix: 'M+', label: 'Pakistanis Served' },
];

export default function StatsBar() {
  return (
    <section className="bg-brand-500" aria-label="Company statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" role="list">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center py-2 ${
                i < stats.length - 1 ? 'lg:border-r lg:border-white/20' : ''
              }`}
              role="listitem"
            >
              <div className="text-display-md text-white font-display">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-body-xs text-white/70 uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
