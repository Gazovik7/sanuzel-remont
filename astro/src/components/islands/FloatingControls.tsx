
import React, { useEffect, useState } from 'react';
import { Rocket } from 'lucide-react';
import { useModal } from '../landing/Modal';

const FloatingControls: React.FC = () => {
  const [showCta, setShowCta] = useState(false);
  const [progress, setProgress] = useState(0);
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowCta(scrollY > 500);
      
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((scrollY / docHeight) * 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenAudit = (e: React.MouseEvent) => {
    e.preventDefault();
    openModal({
        title: 'Бесплатный аудит',
        subtitle: 'Оставьте заявку на экспресс-анализ вашего магазина'
    });
  };

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-red-500 to-pink-500 z-[60] transition-all duration-100 ease-out" style={{ width: `${progress}%` }} />

      {/* Floating CTA */}
      <button 
        onClick={handleOpenAudit}
        className={`fixed bottom-8 right-8 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold shadow-2xl z-40 transition-all transform hover:scale-105 flex items-center gap-2 ${showCta ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      >
        <Rocket size={20} /> Бесплатный аудит
      </button>
    </>
  );
};

export default FloatingControls;
