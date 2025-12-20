import React from 'react';
import Calculator from '../../../legacy/components/Calculator';
import type { CalculatorBlockConfig } from '../../../data/services';

export default function LegacyCalculator({ config }: { config: CalculatorBlockConfig }) {
  return (
    <Calculator
      onComplete={(data) => {
        void window.lead?.capture({ source: config.leadSource, data });
      }}
      defaultFinish={config.defaultFinish}
    />
  );
}
