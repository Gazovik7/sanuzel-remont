import type { LucideIcon } from 'lucide-react';

export interface SeoMetadata {
  title: string;
  description: string;
}

export interface Breadcrumb {
  label: string;
  href: string;
}

export interface HeroData {
  h1: string;
  description: string;
  founderQuote: string;
  bullets: string[];
}

export interface WhyUsItem {
  icon: string;
  title: string;
  desc: string;
}

export interface WhyUsData {
  title: string;
  subtitle: string;
  items: WhyUsItem[];
}

export interface WheelFactor {
  label: string;
  value: number;
  color: string;
}

export interface WheelOfBalanceData {
  title: string;
  subtitle: string;
  description?: string[];
  factors?: WheelFactor[];
}

export interface ComparisonData {
  title: string;
  subtitle: string;
  bad: string[];
  good: string[];
}

export interface FunnelData {
  title: string;
  subtitle: string;
  description: string;
}

export interface ServiceIncludedItem {
  title: string;
  desc: string;
  image: string;
}

export interface ServicesIncludedData {
  title: string;
  subtitle: string;
  description: string;
  items: ServiceIncludedItem[];
}

export interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  isOnetime?: boolean;
  buttonText?: string;
}

export interface PricingData {
  title: string;
  subtitle: string;
  description: string;
  plans: PricingPlan[];
}

export interface ProcessStage {
  num: string;
  title: string;
  desc: string;
}

export interface ProcessData {
  title: string;
  subtitle: string;
  description: string;
  stages: ProcessStage[];
}

export interface LeadMagnetData {
  title: string;
  subtitle: string;
  image: string;
  botLink: string;
  benefits: { title: string; desc?: string; icon?: string }[];
  buttonText?: string;
}

export interface SeoBenefitsItem {
  title: string;
  icon: string;
}

export interface SeoBenefitsData {
  title: string;
  subtitle: string;
  description: string;
  items: SeoBenefitsItem[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SeoTextData {
  title: string;
  preview: string;
  fullText: string;
}

export type PageTemplate = 'seo' | 'ads' | 'geo' | 'dev' | 'seo-audit' | 'avito';

export interface ServicePageData {
  slug: string;
  template: PageTemplate;
  caseIds?: string[]; // Позволяет выбирать конкретные кейсы
  seo: SeoMetadata;
  breadcrumbs: Breadcrumb[];
  hero: HeroData;
  whyUs: WhyUsData;
  methodology: WheelOfBalanceData;
  comparison: ComparisonData;
  funnel: FunnelData;
  servicesIncluded: ServicesIncludedData;
  pricing: PricingData;
  process: ProcessData;
  leadMagnet: LeadMagnetData;
  seoBenefits: SeoBenefitsData;
  faq: FaqItem[];
  seoText: SeoTextData;
  showCalculator?: boolean;
  showUrgency?: boolean;
  showQuiz?: boolean;
}