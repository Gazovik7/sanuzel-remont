import type { ServiceBlock } from '../types';
import {
  BUDGET_PACKAGES,
  BUDGET_PORTFOLIO,
  INCLUDED_WORKS,
  MATERIAL_BRANDS,
  PACKAGES,
  PAPER_REVIEWS,
  PORTFOLIO,
  QUALITY_CHECKLIST,
  STEPS,
  TEAM,
  VIDEO_REVIEWS,
  WHATSAPP_REVIEWS,
} from './datasets';
import {
  CALCULATOR_BLOCK_CONTENT_BUDGET,
  CALCULATOR_BLOCK_CONTENT_DEFAULT,
  COMPARISON_BLOCK_CONTENT,
  GEOGRAPHY_BLOCK_CONTENT,
  GUARANTEE_BLOCK_CONTENT,
  INCLUDED_BLOCK_CONTENT,
  MATERIALS_BLOCK_CONTENT,
  PACKAGES_BLOCK_CONTENT,
  PORTFOLIO_BLOCK_CONTENT,
  QUALITY_BLOCK_CONTENT,
  REVIEWS_BLOCK_CONTENT,
  TEAM_BLOCK_CONTENT,
  VISUALIZATION_BLOCK_CONTENT,
  WHY_US_BLOCK_CONTENT,
  WORKFLOW_BLOCK_CONTENT,
} from './blockContent';

export const SHARED_BLOCKS = {
  comparison: { type: 'comparison', config: COMPARISON_BLOCK_CONTENT },

  portfolioDefault: { type: 'portfolio', variant: 'default', config: PORTFOLIO_BLOCK_CONTENT, items: PORTFOLIO },
  portfolioBudget: { type: 'portfolio', variant: 'budget', config: PORTFOLIO_BLOCK_CONTENT, items: BUDGET_PORTFOLIO },

  quality: { type: 'quality', config: QUALITY_BLOCK_CONTENT, checklist: QUALITY_CHECKLIST },
  whyUs: { type: 'whyUs', config: WHY_US_BLOCK_CONTENT },
  materials: { type: 'materials', config: MATERIALS_BLOCK_CONTENT, brands: MATERIAL_BRANDS },

  calculatorDefault: { type: 'calculator', variant: 'default', config: CALCULATOR_BLOCK_CONTENT_DEFAULT },
  calculatorBudget: { type: 'calculator', variant: 'budget', config: CALCULATOR_BLOCK_CONTENT_BUDGET },

  packagesDefault: { type: 'packages', variant: 'default', config: PACKAGES_BLOCK_CONTENT, packages: PACKAGES },
  packagesBudget: { type: 'packages', variant: 'budget', config: PACKAGES_BLOCK_CONTENT, packages: BUDGET_PACKAGES },

  workflow: { type: 'workflow', config: WORKFLOW_BLOCK_CONTENT, steps: STEPS },
  included: { type: 'included', config: INCLUDED_BLOCK_CONTENT, works: INCLUDED_WORKS },
  visualization: { type: 'visualization', config: VISUALIZATION_BLOCK_CONTENT },
  team: { type: 'team', config: TEAM_BLOCK_CONTENT, members: TEAM },
  guarantee: { type: 'guarantee', config: GUARANTEE_BLOCK_CONTENT },
  reviews: {
    type: 'reviews',
    config: REVIEWS_BLOCK_CONTENT,
    videoReviews: VIDEO_REVIEWS,
    whatsappReviews: WHATSAPP_REVIEWS,
    paperReviews: PAPER_REVIEWS,
  },
  geography: { type: 'geography', config: GEOGRAPHY_BLOCK_CONTENT },
} satisfies Record<string, ServiceBlock>;
