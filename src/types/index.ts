export interface Slide {
  id: string;
  eyebrow: string;
  headline: string;
  subtext: string;
  cta_primary: { label: string; href: string };
  cta_secondary: { label: string; href: string };
  badge: string | null;
  image: string;
  gradient: string;
  accent_color: string;
}

export interface Product {
  id: string;
  category: string;
  name: string;
  tagline: string;
  description: string;
  tag: string | null;
  tag_color?: string;
  icon: string;
  href: string;
  featured: boolean;
}

export interface Testimonial {
  name: string;
  location: string;
  since: number;
  policy: string;
  quote: string;
}

export interface QuickAction {
  icon: string;
  label: string;
  sublabel: string;
  href: string;
  color: string;
}
