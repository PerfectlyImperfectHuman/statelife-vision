import type { Slide, Product, Testimonial } from '@/types';
import heroFamily from '@/assets/hero-family.jpg';
import heroCouple from '@/assets/hero-couple.jpg';
import heroCorporate from '@/assets/hero-corporate.png';

export const slides: Slide[] = [
  {
    id: 'platinum-plus',
    eyebrow: 'Premium Savings Plan',
    headline: 'Secure Your Family\'s Future with Platinum Plus',
    subtext: 'A distinctive savings & protection scheme with guaranteed returns from day one. Premiums waived for the first 3 years.',
    cta_primary: { label: 'Explore Plan', href: '/products' },
    cta_secondary: { label: 'Calculate Premium', href: '#quote' },
    badge: 'Most Popular',
    image: heroFamily,
    gradient: 'from-brand-950 via-brand-800/90 to-transparent',
    accent_color: '#1560BD',
  },
  {
    id: 'jeevan-saathi',
    eyebrow: 'Joint Life Plan',
    headline: 'One Policy, Two Lives, Endless Peace of Mind',
    subtext: 'Jeevan Saathi covers both partners — pay premiums together and build a protected future as one.',
    cta_primary: { label: 'Learn More', href: '/products' },
    cta_secondary: { label: 'Talk to an Agent', href: '/policyholder#agent' },
    badge: null,
    image: heroCouple,
    gradient: 'from-[#1a0a2e] via-[#2d1456]/90 to-transparent',
    accent_color: '#9333EA',
  },
  {
    id: 'sehat-salamat',
    eyebrow: 'Corporate Health Insurance',
    headline: 'Healthy Employees, Thriving Organisations',
    subtext: 'Sehat Salamat provides comprehensive health insurance for your entire workforce and their families.',
    cta_primary: { label: 'Get Corporate Quote', href: '/state-health' },
    cta_secondary: { label: 'View Coverage', href: '/state-health' },
    badge: '180M+ Covered',
    image: heroCorporate,
    gradient: 'from-[#002616] via-[#014d28]/90 to-transparent',
    accent_color: '#00A650',
  },
  {
    id: 'takaful',
    eyebrow: 'Islamic Insurance',
    headline: 'Sharia-Compliant Protection for a Blessed Tomorrow',
    subtext: 'Our Takaful products follow Islamic principles — mutual cooperation and solidarity for you and your community.',
    cta_primary: { label: 'Discover Takaful', href: '/products' },
    cta_secondary: { label: 'Find an Agent', href: '/policyholder#agent' },
    badge: 'Sharia Certified',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1400&q=80',
    gradient: 'from-[#1a1200] via-[#3d2c00]/90 to-transparent',
    accent_color: '#D4A017',
  },
];

export const products: Product[] = [
  { id: 'platinum-plus', category: 'Life Insurance', name: 'Platinum Plus', tagline: 'Savings + Protection', description: '10-year guaranteed savings scheme with life cover. Premiums waived for 3 years.', tag: 'Most Popular', tag_color: 'brand', icon: 'Shield', href: '/products', featured: true },
  { id: 'jeevan-saathi', category: 'Life Insurance', name: 'Jeevan Saathi', tagline: 'Joint Life Cover', description: 'Joint policy covering both spouses. Pays out on death of either partner.', tag: null, icon: 'Heart', href: '/products', featured: false },
  { id: 'sehat-zinadgi', category: 'Health', name: 'Sehat Zindagi', tagline: 'Individual Health', description: 'Comprehensive inpatient and outpatient health coverage for individuals.', tag: 'New', tag_color: 'accent', icon: 'Activity', href: '/products', featured: false },
  { id: 'sehat-sahulat', category: 'Health', name: 'Sehat Sahulat', tagline: 'Family Health Plan', description: 'Group health insurance for the entire family under one affordable premium.', tag: null, icon: 'Users', href: '/products', featured: false },
  { id: 'takaful', category: 'Takaful', name: 'Takaful Products', tagline: 'Sharia Compliant', description: 'Community-pooling insurance products following Islamic principles of mutual protection.', tag: 'Certified', tag_color: 'gold', icon: 'Star', href: '/products', featured: false },
  { id: 'corporate', category: 'Corporate', name: 'Protect Your Employees', tagline: 'Group Insurance', description: 'Corporate savings and protection schemes for employee retention and benefit programs.', tag: null, icon: 'Briefcase', href: '/products', featured: false },
  { id: 'digital', category: 'Life Insurance', name: 'Digital Insurance', tagline: 'Buy Online', description: 'Instant, paperless insurance policies purchasable entirely online in under 10 minutes.', tag: 'Online', tag_color: 'brand', icon: 'Smartphone', href: '/products', featured: false },
  { id: 'alpha', category: 'Life Insurance', name: 'Alpha Insurance', tagline: 'Subsidiary Plan', description: 'Alpha Life Insurance — specialized protection products under the State Life umbrella.', tag: null, icon: 'TrendingUp', href: '/products', featured: false },
];

export const testimonials: Testimonial[] = [
  { name: 'Amina Khalid', location: 'Lahore', since: 2015, policy: 'Platinum Plus', quote: 'When my husband passed away, State Life processed our claim in just 8 days. I cannot imagine how we would have survived without this protection.' },
  { name: 'Muhammad Tariq', location: 'Karachi', since: 2018, policy: 'Jeevan Saathi', quote: 'My wife and I enrolled together. The agent explained everything clearly and the online premium payment makes it so convenient.' },
  { name: 'Dr. Sana Baig', location: 'Islamabad', since: 2020, policy: 'Sehat Salamat', quote: 'As an HR Director, enrolling 300 employees was seamless. The Sehat Card is genuinely life-changing for our team.' },
  { name: 'Ahmed Nawaz', location: 'Faisalabad', since: 2012, policy: 'Takaful', quote: 'Being Sharia-compliant was my primary requirement. State Life Takaful gives me protection without compromising my faith.' },
];

export const navLinks = [
  {
    label: 'Products',
    href: '/products',
    megaMenu: [
      {
        heading: 'Life Insurance',
        links: [
          { label: 'Platinum Plus', href: '/products', desc: 'Savings & protection scheme' },
          { label: 'Jeevan Saathi', href: '/products', desc: 'Joint life cover' },
          { label: 'Digital Insurance', href: '/products', desc: 'Buy online in 10 min' },
          { label: 'Alpha Insurance', href: '/products', desc: 'Subsidiary plans' },
        ],
      },
      {
        heading: 'Health',
        links: [
          { label: 'Sehat Zindagi', href: '/products', desc: 'Individual health' },
          { label: 'Sehat Sahulat', href: '/products', desc: 'Family health plan' },
          { label: 'Sehat Salamat', href: '/state-health', desc: 'Corporate health' },
        ],
      },
      {
        heading: 'Takaful',
        links: [
          { label: 'Takaful Products', href: '/products', desc: 'Sharia compliant' },
          { label: 'Health Takaful', href: '/products', desc: 'Islamic health cover' },
        ],
      },
      {
        heading: 'Corporate & Group',
        links: [
          { label: 'Group Insurance', href: '/products', desc: 'Employee protection' },
          { label: 'Corporate Health', href: '/state-health', desc: 'Workforce coverage' },
        ],
      },
    ],
  },
  { label: 'State Health', href: '/state-health' },
  {
    label: 'Policyholder Services',
    href: '/policyholder',
    megaMenu: [
      {
        heading: 'Services',
        links: [
          { label: 'Pay Premium', href: '/policyholder#pay', desc: 'Online premium payment' },
          { label: 'Track Claim', href: '/policyholder#claims', desc: 'Check claim status' },
          { label: 'Find Agent', href: '/policyholder#agent', desc: 'Locate nearest agent' },
        ],
      },
    ],
  },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
