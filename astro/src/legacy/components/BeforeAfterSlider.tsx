import React, { useEffect, useMemo, useState } from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import './beforeAfterSliderOverrides.css';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImage, afterImage, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [percent, setPercent] = useState(50);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setIsLoaded(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  const HIDE_LABEL_THRESHOLD = 20;
  const shouldHideBeforeLabel = percent <= HIDE_LABEL_THRESHOLD;
  const shouldHideAfterLabel = percent >= 100 - HIDE_LABEL_THRESHOLD;

  const delimiterIconStyles = useMemo<React.CSSProperties>(() => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"><path d="m9 7-5 5 5 5" /><path d="m15 7 5 5-5 5" /></svg>`;
    return {
      width: '44px',
      height: '44px',
      borderRadius: '9999px',
      backgroundColor: '#2563eb',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '26px 26px',
      backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(svg)}")`,
      boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
    };
  }, []);

  return (
    <div className="relative w-full h-64 lg:h-96 rounded-2xl overflow-hidden select-none shadow-xl border border-gray-200 bg-gray-100">
      {isLoaded ? (
        <ReactBeforeSliderComponent
          className="h-full w-full"
          firstImage={{ imageUrl: afterImage, alt: `После - ${alt}` }}
          secondImage={{ imageUrl: beforeImage, alt: `До - ${alt}` }}
          currentPercentPosition={percent}
          onChangePercentPosition={(nextPercent) => setPercent(nextPercent)}
          delimiterColor="#fff"
          delimiterIconStyles={delimiterIconStyles}
        />
      ) : null}

      {!shouldHideBeforeLabel && (
        <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur text-white px-3 py-1 rounded text-xs font-bold tracking-wider shadow-lg z-10 pointer-events-none">
          До
        </div>
      )}
      {!shouldHideAfterLabel && (
        <div className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur text-white px-3 py-1 rounded text-xs font-bold tracking-wider shadow-lg z-10 pointer-events-none">
          После
        </div>
      )}
    </div>
  );
};
