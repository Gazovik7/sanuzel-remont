import React from 'react';
import { PortfolioSection } from '../../../legacy/components/ContentSections';
import type { PortfolioBlockConfig } from '../../../data/services';
import type { PortfolioItem } from '../../../legacy/types';

export default function LegacyPortfolioSection({ content, items }: { content: PortfolioBlockConfig; items: PortfolioItem[] }) {
  return (
    <PortfolioSection
      portfolio={items}
      content={content}
      onAction={() => {
        window.location.href = '/portfolio/';
      }}
      onCalculate={() => {
        document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
      }}
    />
  );
}
