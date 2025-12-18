import type {
  TeamMember,
  Package,
  FaqItem,
  PortfolioItem,
  Review,
  VideoReview,
  PaperReview,
} from '../../legacy/types';
export type HeroOfferIconKey = 'FileText' | 'Shield' | 'Clock' | 'CheckCircle';

export type HeroOffer = {
  icon: HeroOfferIconKey;
  title: string;
  subtitle: string;
};

export type ServiceHeroConfig = {
  leadSource: string;
  title: string;
  badgeText: string;
  backgroundImage: string;
  subtitleLines: Array<{ className: string; text: string }>;
  leadParagraph: string;
  offers: HeroOffer[];
};

export type CalculatorBlockConfig = {
  leadSource: string;
  defaultFinish: string;
  sectionKicker: string;
  sectionTitle: string;
  sectionDescription: string;
};

export type BreadcrumbItem = { label: string; href?: string; isActive?: boolean };

export type PriceTableItem = {
  name: string;
  unit: string;
  price: string;
};

export type PriceTableCategory = {
  title: string;
  items: PriceTableItem[];
};

export type PriceTableConfig = {
  ctaText: string;
  notFoundTitle: string;
  notFoundDescription: string;
  callButtonText: string;
};

export type ComparisonBlockConfig = {
  title: string;
  description: string;
  privateerTitle: string;
  privateerItems: string[];
  studioTitle: string;
  studioItems: Array<{ kind: 'good' | 'bad'; text: string }>;
  usTitle: string;
  usItems: string[];
};

export type PackagesBlockConfig = {
  title: string;
  description: string;
  featuredBadgeText: string;
  ctaText: string;
  priceTable: PriceTableConfig;
  priceTableCategories: PriceTableCategory[];
};

export type PortfolioBlockConfig = {
  title: string;
  description: string;
  viewAllText: string;
  whatWeDidLabel: string;
  timeLabel: string;
  priceLabel: string;
  ctaText: string;
  mobileCtaText: string;
};

export type QualityControlBlockConfig = {
  kicker: string;
  title: string;
  description: string;
  checklistTitle: string;
  photoReportsTitle: string;
  photoReportsDescription: string;
  whatsappReportLabel: string;
  reportImages: string[];
  reportImageAlt: string;
  reportMessage: string;
};

export type WhyUsIconKey = 'shield' | 'users' | 'fileText' | 'hammer' | 'trash2' | 'shoppingBag';

export type WhyUsBlockConfig = {
  title: string;
  items: Array<{ icon: WhyUsIconKey; title: string; desc: string }>;
};

export type WorkflowBlockConfig = {
  title: string;
  description: string;
  quote: string;
};

export type IncludedBlockConfig = {
  kicker: string;
  title: string;
  description: string;
  highlightIncludedCleaning: string;
  highlightIncludedDocs: string;
};

export type VisualizationBlockConfig = {
  kicker: string;
  title: string;
  description: string;
  bullets: string[];
  ctaText: string;
  imageSrc: string;
  imageAlt: string;
};

export type MaterialsBlockConfig = {
  title: string;
  description: string;
  benefits: Array<{ title: string; desc: string }>;
  imageSrc: string;
  imageAlt: string;
};

export type TeamBlockConfig = {
  title: string;
  description: string;
};

export type GuaranteeBlockConfig = {
  title: string;
  description: string;
  guaranteeYears: string;
  guaranteeText: string;
  contractText: string;
  excerptTitle: string;
  excerptParagraphs: string[];
  directorTitle: string;
  directorName: string;
};

export type ReviewsBlockConfig = {
  title: string;
  description: string;
  videoKicker: string;
  whatsappKicker: string;
  thanksKicker: string;
  buttonText: string;
};

export type SeoTextBlockConfig = {
  summaryTitle: string;
  paragraphsHtml: string[];
  listIntroHtml: string;
  listItemsHtml: string[];
  closingHtml: string;
};

export type FaqBlockConfig = { title: string };

export type GeographyBlockConfig = {
  title: string;
  seoTextHtml: string;
  moscowDistrictsTitle: string;
  moCitiesTitle: string;
  showAllCitiesText: string;
  collapseCitiesText: string;
  mapImageSrc: string;
  mapImageAlt: string;
  mapCardTitle: string;
  mapCardSubtitle: string;
  mapCtaText: string;
  moscowLocations: Array<{ district: string; stations: string[] }>;
  moCities: string[];
};

export type MaterialBrand = { category: string; desc: string; brands: string[] };

export type ServiceBlock =
  | { type: 'hero'; config: ServiceHeroConfig; variant: 'default' | 'budget' }
  | { type: 'breadcrumb'; items: BreadcrumbItem[] }
  | { type: 'comparison'; config: ComparisonBlockConfig }
  | { type: 'portfolio'; variant: 'default' | 'budget'; config: PortfolioBlockConfig; items: PortfolioItem[] }
  | {
      type: 'quality';
      config: QualityControlBlockConfig;
      checklist: Array<{ day: string; title: string; desc: string }>;
    }
  | { type: 'whyUs'; config: WhyUsBlockConfig }
  | { type: 'materials'; config: MaterialsBlockConfig; brands: MaterialBrand[] }
  | { type: 'calculator'; config: CalculatorBlockConfig; variant: 'default' | 'budget' }
  | { type: 'packages'; variant: 'default' | 'budget'; config: PackagesBlockConfig; packages: Package[] }
  | { type: 'workflow'; config: WorkflowBlockConfig; steps: Array<{ title: string; desc: string }> }
  | { type: 'included'; config: IncludedBlockConfig; works: string[] }
  | { type: 'visualization'; config: VisualizationBlockConfig }
  | { type: 'team'; config: TeamBlockConfig; members: TeamMember[] }
  | { type: 'guarantee'; config: GuaranteeBlockConfig }
  | {
      type: 'reviews';
      config: ReviewsBlockConfig;
      videoReviews: VideoReview[];
      whatsappReviews: Review[];
      paperReviews: PaperReview[];
    }
  | { type: 'seoText'; config: SeoTextBlockConfig }
  | { type: 'faq'; variant: 'default' | 'budget'; config: FaqBlockConfig; items: FaqItem[] }
  | { type: 'geography'; config: GeographyBlockConfig };

export type ServicePage = {
  slug: string;
  path: string;
  canonicalPath?: string;
  seo: { title: string; description: string };
  blocks: ServiceBlock[];
};
