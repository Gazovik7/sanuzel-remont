import React from 'react';
import { FaqSection } from '../../../legacy/components/ContentSections';
import type { FaqBlockConfig } from '../../../data/services';
import type { FaqItem } from '../../../legacy/types';

export default function LegacyFaqSection({ content, items }: { content: FaqBlockConfig; items: FaqItem[] }) {
  return <FaqSection faqItems={items} content={content} />;
}
