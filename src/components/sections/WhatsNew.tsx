import { Calendar, Clock, ChevronRight } from 'lucide-react';
import ScrollReveal from '@/components/shared/ScrollReveal';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: '1',
    title: 'State Life Achieves Record PKR 122 Billion in Active Policy Fund',
    excerpt: 'The corporation has reached a new milestone, surpassing all previous records in policy fund accumulation.',
    category: 'Financial',
    published_at: '2024-12-15',
    read_time_minutes: 4,
    thumbnail_url: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800',
    is_featured: true,
  },
  {
    id: '2',
    title: 'New Digital Insurance Portal Launches for Instant Policy Purchase',
    excerpt: 'Buy life insurance completely online in under 10 minutes with our new digital platform.',
    category: 'Technology',
    published_at: '2024-12-10',
    read_time_minutes: 3,
    thumbnail_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
    is_featured: false,
  },
  {
    id: '3',
    title: 'PM National Health Programme Expands to 180M+ Beneficiaries',
    excerpt: 'The Sehat Card programme now covers over 180 million Pakistani citizens nationwide.',
    category: 'Health',
    published_at: '2024-12-05',
    read_time_minutes: 5,
    thumbnail_url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400',
    is_featured: false,
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function WhatsNew() {
  const featured = articles.find((a) => a.is_featured);
  const rest = articles.filter((a) => !a.is_featured);

  return (
    <section className="py-14 md:py-24 bg-ink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-body-xs uppercase tracking-widest text-brand-500 font-semibold">
                Latest News
              </span>
              <h2 className="text-display-xl text-ink-900 font-display mt-2">
                What's New at State Life
              </h2>
            </div>
            <Link to="/news" className="hidden sm:flex items-center gap-1 text-brand-500 text-body-sm font-semibold hover:gap-2 transition-all">
              View All News <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured */}
          {featured && (
            <ScrollReveal className="lg:row-span-2">
              <Link to={`/news/${featured.id}`} className="block group h-full">
                <div className="bg-ink-900 rounded-3xl overflow-hidden relative h-full min-h-[400px]">
                  <img
                    src={featured.thumbnail_url}
                    alt={featured.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <span className="inline-block bg-brand-500 text-white rounded-full px-3 py-1 text-body-xs">
                      {featured.category}
                    </span>
                    <h3 className="text-display-md text-white font-display mt-3 line-clamp-2">
                      {featured.title}
                    </h3>
                    <p className="text-body-sm text-white/70 mt-2 line-clamp-2">{featured.excerpt}</p>
                    <div className="flex gap-4 mt-4">
                      <span className="flex items-center gap-1.5 text-white/50 text-body-xs">
                        <Calendar className="w-3.5 h-3.5" />{formatDate(featured.published_at)}
                      </span>
                      <span className="flex items-center gap-1.5 text-white/50 text-body-xs">
                        <Clock className="w-3.5 h-3.5" />{featured.read_time_minutes} min read
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          )}

          {/* Smaller cards */}
          {rest.map((article, i) => (
            <ScrollReveal key={article.id} delay={i * 0.1}>
              <Link to={`/news/${article.id}`} className="block group">
                <div className="bg-white rounded-2xl overflow-hidden border border-ink-100 hover:shadow-card-hover transition-all duration-300 flex h-full">
                  <div className="w-[120px] md:w-[160px] flex-shrink-0">
                    <img
                      src={article.thumbnail_url}
                      alt={article.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={160}
                      height={200}
                    />
                  </div>
                  <div className="p-5 flex flex-col justify-center">
                    <span className="text-brand-500 text-body-xs font-semibold uppercase">
                      {article.category}
                    </span>
                    <h3 className="text-body-md font-semibold text-ink-900 mt-1 line-clamp-2 group-hover:text-brand-500 transition-colors">
                      {article.title}
                    </h3>
                    <span className="text-body-xs text-ink-400 mt-3">
                      {formatDate(article.published_at)} • {article.read_time_minutes} min
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
