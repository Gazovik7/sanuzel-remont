
import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  isPage?: boolean;
  children?: NavItem[];
}

export interface StatItem {
  value: number | string;
  suffix: string;
  label: string;
}

export interface AdvantageItem {
  icon: LucideIcon;
  title: string;
  desc?: string;
  description?: string;
}

export interface ServiceItem {
  title: string;
  desc: string;
  image?: string;
  icon?: LucideIcon;
}

export interface CaseItem {
  id?: string;
  title: string;
  result: string;
  desc: string;
  image: string;
  niche?: string;
  geo?: string;
  metrics?: {
    before: string[];
    after: string[];
  };
  period?: string;
}

export interface FAQItem {
  q?: string;
  a?: string;
  question?: string;
  answer?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string[];
  description?: string;
}

export interface PricingItem {
  title: string;
  price: string;
  description: string;
  priceSuffix?: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
}

export interface ReviewItem {
  text?: string;
  author?: string;
  role?: string;
  rating?: number;
  title?: string;
  subtitle?: string;
  image?: string;
}

export interface ClientItem {
  logoText: string;
}

export interface AwardItem {
  place?: number;
  title: string;
  color?: string;
  description: string;
  media?: string;
  category?: string;
  sub?: string;
  source?: string;
}

export interface BlogPost {
  id: number | string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  colorClass: string;
  author: string;
  readTime: string;
  content?: string;
}

export interface CaseStudyData {
    id: string;
    hero: {
        tags: string[];
        title: string;
        subtitle: string;
        mainResult: string;
        mainResultLabel: string;
    };
    passport: {
        clientName: string;
        niche: string;
        service: string;
        timeline: string;
        teamSize: number;
    };
    challenge: {
        title: string;
        description: string;
        conditions: string[];
        initialStats: Array<{ label: string; value: string; isBad?: boolean }>;
        problems: Array<{ title: string; description: string }>;
    };
    strategy: {
        title: string;
        description: string;
        steps: Array<{ title: string; description: string; image?: string; artifactType?: string }>;
    };
    results: {
        title: string;
        beforePeriod: string;
        afterPeriod: string;
        beforeChartData: number[];
        afterChartData: number[];
        finalRevenue: { before: string; after: string; growthPercent: string };
        metrics: Array<{ icon: string; label: string; value: string }>;
    };
    lessons: {
        businessTakeaways: string[];
    };
    author: {
        name: string;
        role: string;
        image: string;
    };
}

export interface InfographicItem {
    id: number | string;
    title: string;
    category: string;
    image: string;
}

export interface InfographicProcessStep {
    number: string;
    title: string;
    description: string;
}

export interface InfographicPriceItem {
    title: string;
    price: string;
    description: string;
    features: string[];
    isPopular?: boolean;
}

export interface TickerItem {
    text: string;
    change: string;
    isPositive: boolean;
}

export interface TargetAudienceItem {
    icon: LucideIcon;
    title: string;
    description: string;
    image: string;
}
