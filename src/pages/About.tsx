import PageLayout from '@/components/layout/PageLayout';
import ScrollReveal from '@/components/shared/ScrollReveal';
import AnimatedCounter from '@/components/shared/AnimatedCounter';

const directors = [
  { name: 'Ahmad Karimi', title: 'Chairman' },
  { name: 'Sana Mirza', title: 'Managing Director' },
  { name: 'Omar Farooq', title: 'Director Finance' },
  { name: 'Aisha Malik', title: 'Director Operations' },
];

const awards = [
  { year: '2024', text: 'AAA Rating maintained for 8th consecutive year' },
  { year: '2023', text: 'Best Life Insurer Pakistan — Global Finance Awards' },
  { year: '2022', text: 'Excellence in Digital Transformation — SECP' },
  { year: '2021', text: 'Top Employer of the Year — Pakistan' },
  { year: '2019', text: '50th Anniversary Platinum Achievement' },
];

export default function About() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative min-h-[60vh] overflow-hidden flex items-center">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80"
          alt="Modern glass office buildings"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          width={1400}
          height={900}
        />
        <div className="absolute inset-0 bg-brand-950/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full py-20">
          <ScrollReveal>
            <span className="inline-block bg-white/10 border border-white/20 text-white/80 rounded-full px-4 py-2 text-body-xs font-semibold uppercase tracking-widest">
              Since 1972
            </span>
            <h1 className="text-display-2xl text-white font-display mt-4">
              Pakistan's Largest Financial Institution
            </h1>
            <p className="text-white/70 text-body-xl max-w-2xl mx-auto mt-4">
              Ensuring trust and securing futures for over 147 million Pakistanis through life and health insurance.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <div className="border-l-4 border-brand-500 pl-6">
                <div className="text-display-2xl text-brand-200 font-display leading-none">"</div>
                <p className="text-body-xl text-ink-700 italic mt-2">
                  Our mission is to provide affordable, accessible, and Sharia-compliant financial protection to every Pakistani citizen.
                </p>
                <p className="text-body-sm text-ink-400 mt-4">— State Life Charter, 1972</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="space-y-4 text-body-md text-ink-600 leading-relaxed">
                <p>
                  Established in 1972 under the Life Insurance (Nationalization) Order, State Life Insurance Corporation has grown to become Pakistan's largest financial institution by assets, managing a policy fund exceeding PKR 122 billion.
                </p>
                <p>
                  With a network spanning all provinces and territories, State Life serves over 147 million Pakistanis through individual life policies, corporate group insurance, health coverage, and government social protection programmes including the Sehat Card initiative.
                </p>
                <p>
                  State Life holds a AAA credit rating from PACRA — the highest achievable rating — reflecting unmatched financial strength and a 98.2% claims settlement ratio that continues to earn the trust of policyholders nationwide.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 md:py-20 bg-ink-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: 60, suffix: '+', label: 'Years of Service' },
              { value: 122, suffix: 'B+', label: 'Active Policy Fund (PKR)' },
              { value: 57, suffix: '%', label: 'Market Share' },
              { value: 147, suffix: 'M+', label: 'Lives Protected' },
            ].map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.1}>
                <div className="text-display-2xl text-white font-display">
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </div>
                <div className="text-body-sm text-white/50 mt-2">{s.label}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-display-xl text-ink-900 font-display text-center">Board of Directors</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {directors.map((d, i) => (
              <ScrollReveal key={d.name} delay={i * 0.05}>
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-brand-100 flex items-center justify-center mx-auto">
                    <span className="text-brand-600 font-display font-bold text-display-md">
                      {d.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-body-md font-semibold text-ink-900 mt-4">{d.name}</h3>
                  <p className="text-body-sm text-ink-500">{d.title}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Timeline */}
      <section className="py-14 md:py-20 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-display-xl text-ink-900 font-display text-center mb-12">Awards & Recognition</h2>
          </ScrollReveal>
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-brand-200" />
            {awards.map((a, i) => (
              <ScrollReveal key={a.year} delay={i * 0.1}>
                <div className="flex items-start gap-6 mb-8 relative">
                  <div className="w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center flex-shrink-0 text-body-xs font-bold z-10">
                    {a.year.slice(-2)}
                  </div>
                  <div className="bg-white rounded-2xl p-5 border border-ink-100 shadow-card flex-1">
                    <span className="text-body-xs text-brand-500 font-semibold">{a.year}</span>
                    <p className="text-body-md text-ink-700 mt-1">{a.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
