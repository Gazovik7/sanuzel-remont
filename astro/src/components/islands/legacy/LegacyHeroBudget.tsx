import React from 'react';
import { Hero } from '../../../legacy/components/Hero';
import type { ServiceHeroConfig } from '../../../data/services';

export default function LegacyHeroBudget({ config }: { config: ServiceHeroConfig }) {
  return (
    <Hero
      onFormSubmit={(data) => {
        window.lead?.capture({ source: config.leadSource, data });
        window.lead?.success();
      }}
      title={config.title}
      subtitle={
        <>
          {config.subtitleLines.map((line, idx) => (
            <React.Fragment key={idx}>
              <span className={line.className}>{line.text}</span>
              {idx < config.subtitleLines.length - 1 ? <br /> : null}
            </React.Fragment>
          ))}
        </>
      }
      badgeText={config.badgeText}
      backgroundImage={config.backgroundImage}
    />
  );
}
