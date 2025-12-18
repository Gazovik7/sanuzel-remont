import React from 'react';
import { GeographySection } from '../../../legacy/components/ContentSections';
import type { GeographyBlockConfig } from '../../../data/services';

export default function LegacyGeographySection({ content }: { content: GeographyBlockConfig }) {
  return (
    <GeographySection
      onAction={() => {
        window.lead?.open('callback');
      }}
      content={content}
    />
  );
}
