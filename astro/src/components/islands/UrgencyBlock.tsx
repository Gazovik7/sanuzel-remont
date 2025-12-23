import React, { useState, useEffect } from 'react';
import { Clock, Flame, ShieldCheck, CheckCircle } from 'lucide-react';
import UniversalForm from './UniversalForm';

const UrgencyBlock: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState('');
  const [spots, setSpots] = useState(3);

  useEffect(() => {
    // Persistent Countdown logic
    const TIMER_DURATION = 1000 * 60 * 60 * 4; // 4 hours
    
    const getEndTime = () => {
      const storedEnd = localStorage.getItem('offerEndTime');
      if (storedEnd && new Date(storedEnd).getTime() > Date.now()) {
        return new Date(storedEnd).getTime();
      }
      const newEnd = Date.now() + TIMER_DURATION;
      localStorage.setItem('offerEndTime', new Date(newEnd).toISOString());
      return newEnd;
    };

    const endTime = getEndTime();

    const updateTimer = () => {
      const now = Date.now();
      const diff = endTime - now;
      
      if (diff <= 0) {
        // Reset if expired (for demo purposes, usually you'd hide the offer)
        const newEnd = Date.now() + TIMER_DURATION;
        localStorage.setItem('offerEndTime', new Date(newEnd).toISOString());
        return;
      }
      
      const h = Math.floor(diff / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeLeft(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`);
    };

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer();

    // Spots logic
    const spotsInterval = setInterval(() => {
      setSpots(prev => (prev > 1 ? prev - 1 : 1));
    }, 1000 * 60 * 15); 

    return () => {
      clearInterval(timerInterval);
      clearInterval(spotsInterval);
    };
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-br from-red-50 via-white to-pink-50 rounded-[2.5rem] p-8 md:p-12 border border-red-100 shadow-2xl shadow-red-500/10 relative overflow-hidden min-h-[500px] flex flex-col justify-center">
          
          {/* Abstract Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-500/5 to-pink-500/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>

          <div className="relative z-10">
              <div className="text-center mb-10">
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-sm font-bold border border-red-100 animate-pulse shadow-sm">
                    <Flame size={16} />
                    <span>Осталось {spots} места на бесплатный аудит</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
                    <Clock size={16} />
                    <span>До конца акции: <span className="text-red-400 font-mono">{timeLeft}</span></span>
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-black mb-4 text-gray-900 tracking-tight">
                  Получите бесплатный аудит магазина
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                  Узнайте, где вы теряете прибыль и как вырасти в 2-5 раз за счет системного подхода.
                </p>
              </div>

              {/* Unified Form in Row Mode */}
              <UniversalForm 
                source="UrgencyBlock" 
                variant="row" 
                buttonText="Получить аудит"
              />

              <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray-500 font-medium">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-red-500" /> Ответим за 15 минут
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-red-500" /> 100% конфиденциально
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencyBlock;
