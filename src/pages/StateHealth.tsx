import { CheckCircle, Phone, Smartphone, Heart, Shield, Users } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import ScrollReveal from '@/components/shared/ScrollReveal';
import AnimatedCounter from '@/components/shared/AnimatedCounter';

const plans = [
  { name: 'Shafi o Aafiat', type: 'Individual Health', color: 'brand' },
  { name: 'Sehat Family', type: 'Family Coverage', color: 'accent' },
  { name: 'Haan Plan', type: 'Primary Health Support', color: 'gold' },
  { name: 'Sehat Zindagi', type: 'Comprehensive Health', color: 'brand' },
  { name: 'Sehat Salamat', type: 'Corporate Health Plan', color: 'accent' },
  { name: 'Health Takaful', type: 'Islamic Health Coverage', color: 'gold' },
];

const programs = [
  { name: "Prime Minister's National Health Programme", short: 'PM NHP', color: 'bg-accent-600', description: 'Providing free inpatient treatment to low-income families across all provinces through a network of accredited hospitals.' },
  { name: "Chief Minister's Transparent Programme", short: 'CM TP', color: 'bg-red-800', description: 'Transparent, digitally-verified health coverage ensuring eligible citizens receive timely medical treatment.' },
  { name: "CM Childless Health Surgery Programme", short: 'CM CHSP', color: 'bg-brand-600', description: 'Specialized surgical coverage for couples facing childlessness, funded by the provincial government.' },
  { name: 'Chief Minister Dialysis Programme', short: 'CM Dialysis', color: 'bg-purple-800', description: 'Free dialysis treatment for kidney patients registered under the provincial social health initiative.' },
  { name: 'Aman Card Plus AJK', short: 'Aman Card', color: 'bg-accent-500', description: 'Health insurance coverage for residents of Azad Jammu & Kashmir under the Aman Card social protection scheme.' },
  { name: 'Balochistan Health Card Programme', short: 'BHC', color: 'bg-amber-800', description: 'Comprehensive health protection for Balochistan residents covering inpatient treatment at panel hospitals.' },
];

const steps = [
  { num: 1, label: 'Get Enrolled', icon: '📝' },
  { num: 2, label: 'Receive Sehat Card', icon: '💳' },
  { num: 3, label: 'Visit Panel Hospital', icon: '🏥' },
  { num: 4, label: 'Cashless Treatment', icon: '✅' },
];

const support = [
  { region: 'Punjab Social Health Program', phone: '0800-09009' },
  { region: 'Khyber Pakhtunkhwa (KPK)', phone: '0800-89898' },
  { region: 'Corporate Clients', phone: '0800-07007' },
];

const colorMap: Record<string, { border: string; bg: string; text: string }> = {
  brand: { border: 'border-t-brand-500', bg: 'bg-brand-50', text: 'text-brand-500' },
  accent: { border: 'border-t-accent-500', bg: 'bg-accent-100', text: 'text-accent-500' },
  gold: { border: 'border-t-gold-500', bg: 'bg-gold-100', text: 'text-gold-500' },
};

const heroStats = [
  { value: 180, suffix: 'M+', label: 'Pakistanis Served', Icon: Users },
  { value: 31, suffix: 'M+', label: 'Visitors Annually', Icon: Heart },
  { value: 15, suffix: 'M+', label: 'Current Admissions', Icon: Shield },
];

export default function StateHealth() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative min-h-[70vh] overflow-hidden bg-gradient-to-br from-[#002616] via-[#014d28] to-[#002616]">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=80"
          alt="Medical professionals in a hospital"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          loading="eager"
          width={1400}
          height={900}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center min-h-[70vh]">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-14 md:py-24">
            <ScrollReveal>
              <span className="inline-block bg-accent-500/20 text-accent-300 border border-accent-500/30 rounded-full px-4 py-2 text-body-xs font-semibold uppercase tracking-widest">
                State Health Insurance
              </span>
              <h1 className="text-display-xl text-white font-display mt-4">
                Comprehensive Health Coverage for Every Pakistani
              </h1>
              <p className="text-body-lg text-white/70 mt-4 max-w-lg">
                From individual plans to government social health programs — State Life protects 180 million Pakistanis with cashless treatment at 30,000+ panel hospitals nationwide.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {['✓ Cashless Treatment', '✓ 30,000+ Panel Hospitals', '✓ 24/7 Helpline'].map((pill) => (
                  <span key={pill} className="bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full px-4 py-2 text-body-sm">
                    {pill}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <a href="#plans" className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-full px-8 py-4 text-body-sm transition-colors">
                  Get Sehat Card
                </a>
                <a href="tel:080009009" className="inline-flex items-center gap-2 border-2 border-white/40 text-white rounded-full px-8 py-4 text-body-sm font-semibold hover:bg-white/10 transition-colors">
                  Call 0800-09009
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-4">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-accent-500/20 flex items-center justify-center flex-shrink-0">
                      <stat.Icon className="w-5 h-5 text-accent-300" />
                    </div>
                    <div>
                      <div className="text-display-md text-white font-display font-bold">
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-body-sm text-white/60">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Health Plans */}
      <section id="plans" className="py-14 md:py-24 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-body-xs uppercase tracking-widest text-accent-500 font-semibold">Health Plans</span>
              <h2 className="text-display-xl text-ink-900 font-display mt-2">Choose Your Health Coverage</h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {plans.map((plan, i) => {
              const c = colorMap[plan.color];
              return (
                <ScrollReveal key={plan.name} delay={i * 0.05}>
                  <div className={`bg-white rounded-2xl border border-ink-100 border-t-4 ${c.border} p-6 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1`}>
                    <div className={`w-12 h-12 rounded-xl ${c.bg} ${c.text} flex items-center justify-center mb-4`}>
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h3 className="text-body-xl font-semibold font-display text-ink-900">{plan.name}</h3>
                    <p className="text-body-sm text-ink-500 mt-1">{plan.type}</p>
                    <button className="mt-4 text-brand-500 text-body-sm font-semibold hover:text-brand-600 transition-colors">
                      Learn More →
                    </button>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Government Programs */}
      <section className="py-14 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-body-xs uppercase tracking-widest text-accent-500 font-semibold">Social Health Insurance</span>
              <h2 className="text-display-xl text-ink-900 font-display mt-2">Government Health Programmes</h2>
              <p className="text-body-lg text-ink-500 mt-3">Operated in collaboration with the Government of Pakistan</p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {programs.map((prog, i) => (
              <ScrollReveal key={prog.short} delay={i * 0.05}>
                <div className="bg-white rounded-2xl overflow-hidden border border-ink-100 hover:shadow-card-hover transition-all duration-300 text-center">
                  <div className={`h-1.5 ${prog.color}`} />
                  <div className="p-6">
                    <div className={`w-16 h-16 rounded-full ${prog.color} mx-auto flex items-center justify-center`}>
                      <span className="text-white font-display font-bold text-body-sm">{prog.short}</span>
                    </div>
                    <h3 className="font-display font-semibold text-body-lg text-ink-900 mt-4">{prog.name}</h3>
                    <p className="text-body-sm text-ink-500 mt-2 px-2">
                      {prog.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How Sehat Card Works */}
      <section className="py-14 md:py-24 bg-ink-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-display-xl text-white font-display text-center">How Sehat Card Works</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 relative">
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-ink-700/50" />
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.1}>
                <div className="text-center relative">
                  <div className="text-3xl mb-3">{step.icon}</div>
                  <div className="w-12 h-12 rounded-full bg-brand-500 text-white font-bold flex items-center justify-center mx-auto relative z-10 text-body-lg">
                    {step.num}
                  </div>
                  <p className="text-white text-body-sm font-medium mt-3">{step.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App */}
      <section className="py-14 md:py-24 bg-gradient-to-br from-brand-600 to-brand-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="text-display-xl text-white font-display">State Life Health Plus App</h2>
              <p className="text-body-lg text-white/70 mt-4">Manage your health coverage, find hospitals, and track claims — all from your phone.</p>
              <div className="space-y-4 mt-8">
                {['Find nearest panel hospital instantly', 'View and download Sehat Card', 'Track claim status in real-time', '24/7 customer support via chat'].map((feat) => (
                  <div key={feat} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-300 flex-shrink-0" />
                    <span className="text-white/80 text-body-md">{feat}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="flex justify-center">
                <div className="relative animate-float">
                  <div className="w-64 h-[460px] rounded-[2.5rem] bg-ink-900 border-4 border-ink-700 shadow-modal flex items-center justify-center">
                    <div className="text-center">
                      <Smartphone className="w-16 h-16 text-brand-400 mx-auto" />
                      <p className="text-white/60 text-body-sm mt-3">Health Plus App</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact/Support */}
      <section className="py-14 md:py-24 bg-ink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-display-xl text-ink-900 font-display text-center">Get Support</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-6 mt-10">
            {support.map((item, i) => (
              <ScrollReveal key={item.region} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 text-center border border-ink-100 shadow-card hover:shadow-card-hover transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-brand-100 flex items-center justify-center mx-auto">
                    <Phone className="w-6 h-6 text-brand-500" />
                  </div>
                  <h3 className="font-semibold text-body-md text-ink-900 mt-3">{item.region}</h3>
                  <a href={`tel:${item.phone.replace(/-/g, '')}`} className="text-display-md text-brand-500 font-display font-bold mt-1 block">
                    {item.phone}
                  </a>
                  <p className="text-body-xs text-ink-400 mt-1">Mon-Sat, 9AM - 6PM</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
