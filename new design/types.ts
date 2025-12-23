
import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  isPage?: boolean;
  // For Mega Menu structure
  children?: NavItem[]; 
  // Optional: distinct visual groups within the mega menu
  description?: string;
  icon?: LucideIcon;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface AdvantageItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  colorClass?: string;
}

export interface CaseItem {
  id?: string; // Added for navigation
  title: string;
  result: string;
  description: string;
  metrics: {
    before: string[];
    after: string[];
  };
  period: string;
  image: string;
}

export interface InfographicItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description?: string;
  image: string; 
  bio?: string[];
}

export interface PricingItem {
  title: string;
  price: string;
  priceSuffix?: string;
  description: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  isAccent?: boolean;
}

export interface TargetAudienceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string; 
}

export interface MethodologyStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ReviewItem {
  title: string;
  subtitle: string;
  image: string; 
}

export interface ClientItem {
  name?: string;
  logoText: string; 
}

export interface BlogPost {
  id: number;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  colorClass: string;
  content?: string; // HTML content
  author?: string;
  readTime?: string;
}

export interface AwardItem {
  place: number;
  organizer?: string;
  category?: string;
  year?: string;
  description: string;
  title?: string;
  media?: string;
  color?: string;
}

export interface TickerItem {
  text: string;
  change: string;
  isPositive: boolean;
}

// --- NEW: 10-Step Case Study Structure ---

export interface CaseStudyStep {
  title: string;
  description: string;
  resultTag?: string;
  artifactType?: 'audit-table' | 'unit-economy' | 'before-after-design' | 'ads-graph' | 'none';
  image?: string; 
  // CONTENT MANAGER: Paste URLs here to create a Before/After slider automatically
  beforeImage?: string; 
  afterImage?: string;
}

export interface CaseStudyData {
  id: string;
  // 1. Hero
  hero: {
    tags: string[];
    title: string;
    subtitle: string;
    mainResult: string; 
    mainResultLabel: string; 
    backgroundImage?: string;
  };
  // 2. Passport (Context)
  passport: {
    clientName: string; // Can be "Brand N" if NDA
    niche: string;
    service: string;
    timeline: string;
    teamSize: number;
  };
  // 3. Challenge & Audit
  challenge: {
    title: string;
    description: string;
    conditions: string[];
    initialStats: {
      label: string;
      value: string;
      isBad?: boolean; // Highlights red
    }[];
    problems: {
      title: string;
      description: string;
    }[];
    quote?: string;
  };
  // 4. Strategy
  strategy: {
    title: string;
    description: string;
    steps: CaseStudyStep[];
  };
  // 5. Results (Dark Mode Block)
  results: {
    title: string;
    beforePeriod: string;
    afterPeriod: string;
    beforeChartData: number[];
    afterChartData: number[];
    finalRevenue: {
      before: string;
      after: string;
      growthPercent: string;
    };
    metrics: {
      icon: 'fire' | 'chart' | 'rocket' | 'check';
      label: string;
      value: string;
      subValue?: string;
    }[];
    momentOfTruth?: string;
  };
  // 6. Insights / Lessons
  lessons: {
    competitorErrors?: {
      title: string;
      description: string;
    }[];
    businessTakeaways?: string[];
  };
  // 7. Author / Team
  author: {
    name: string;
    role: string;
    image: string;
    quote?: string;
  };
}

// --- NEW: Infographics Page Types ---

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