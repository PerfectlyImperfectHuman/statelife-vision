import ScrollReveal from '@/components/shared/ScrollReveal';

const affiliations = [
  'PMDA', 'SECP', 'OIC', 'SAARC Insurance Federation', 'Jama Punji', 'Federal Insurance Ombudsman',
  'PMDA', 'SECP', 'OIC', 'SAARC Insurance Federation', 'Jama Punji', 'Federal Insurance Ombudsman',
];

export default function Affiliations() {
  return (
    <section className="py-14 md:py-20 bg-white" aria-label="Affiliations and memberships">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* AAA Rating callout */}
        <ScrollReveal>
          <div className="bg-gradient-to-r from-gold-100 to-gold-50 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
            <div>
              <span className="text-gold-600 text-body-xs uppercase tracking-widest font-semibold">
                Credit Rating
              </span>
              <h2 className="text-display-lg text-ink-900 font-display mt-1">
                Pakistan's Only Insurance Company with AAA Rating
              </h2>
              <p className="text-body-md text-ink-600 max-w-lg mt-2">
                Awarded by PACRA — the highest credit rating achievable, reflecting unmatched financial strength and stability.
              </p>
              <p className="text-body-sm text-ink-500 mt-3">
                Pakistan Credit Rating Agency (PACRA)
              </p>
            </div>
            <div className="flex-shrink-0 text-center">
              <div className="relative">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gold-500 flex items-center justify-center animate-pulse-glow" aria-hidden="true">
                  <span className="text-display-xl text-gold-100 font-display font-black">AAA</span>
                </div>
              </div>
              <span className="text-body-xs text-gold-600 mt-2 block font-medium">PACRA Rated</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Logos marquee */}
        <div className="text-center mb-8">
          <span className="text-body-xs text-ink-400 uppercase tracking-widest">
            Affiliations & Memberships
          </span>
        </div>
        <div className="relative overflow-hidden" role="list" aria-label="List of affiliations">
          <div className="flex animate-[slideMarquee_30s_linear_infinite] hover:[animation-play-state:paused]">
            {affiliations.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="mx-8 flex-shrink-0 opacity-50 hover:opacity-100 transition-all duration-300 flex items-center"
                role="listitem"
              >
                <div className="bg-ink-100 rounded-xl px-6 py-3 text-body-sm text-ink-600 font-medium whitespace-nowrap">
                  {name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
