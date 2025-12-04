import React, { useState, useRef, useEffect } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImage, afterImage, alt }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  // Global mouse up handler to stop dragging even if mouse leaves component
  useEffect(() => {
    const stopDragging = () => setIsDragging(false);
    window.addEventListener('mouseup', stopDragging);
    return () => window.removeEventListener('mouseup', stopDragging);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-64 lg:h-96 rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-xl border border-gray-200"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background) */}
      <img 
        src={afterImage} 
        alt={`После - ${alt}`} 
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" 
      />
      <div className="absolute top-4 right-4 bg-green-600/90 backdrop-blur text-white px-3 py-1 rounded text-xs font-bold tracking-wider shadow-lg z-10 pointer-events-none">
        ПОСЛЕ
      </div>

      {/* Before Image (Foreground, clipped) */}
      <div 
        className="absolute top-0 left-0 h-full overflow-hidden pointer-events-none border-r-2 border-white"
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src={beforeImage} 
          alt={`До - ${alt}`} 
          className="absolute top-0 left-0 max-w-none h-full object-cover"
          style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%' }} 
        />
        <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur text-white px-3 py-1 rounded text-xs font-bold tracking-wider shadow-lg">
          ДО
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)] flex items-center justify-center"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg transform -translate-x-1/2">
          <ChevronsLeftRight className="w-5 h-5 text-blue-600" />
        </div>
      </div>
    </div>
  );
};
