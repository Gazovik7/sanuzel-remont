import React, { useRef } from 'react';
import { CASES_DATA } from './constants';
import { ArrowLeft, ArrowRight, TrendingUp } from 'lucide-react';

interface CasesSliderProps {
  items?: any[];
}

const CasesSlider: React.FC<CasesSliderProps> = ({ items }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const displayItems = items || CASES_DATA;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-[#09090b] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
                <div className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-center md:text-left">Портфолио</div>
                <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter text-center md:text-left">Кейсы <span className="text-[#D4AF37]">роста</span></h2>
            </div>
            <div className="flex gap-3 mx-auto md:mx-0">
                <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black transition-all">
                    <ArrowLeft size={20} />
                </button>
                <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black transition-all">
                    <ArrowRight size={20} />
                </button>
            </div>
        </div>

        <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
            {displayItems.map((item, idx) => (
                <div key={idx} className="min-w-[300px] md:min-w-[400px] snap-start">
                    <div className="group bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-[#D4AF37]/30 transition-all duration-500 h-full">
                        <div className="h-48 overflow-hidden relative">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent"></div>
                            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                                <div className="text-[#D4AF37] font-black text-sm flex items-center gap-2">
                                    <TrendingUp size={14} /> {item.result}
                                </div>
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-lg font-bold text-white leading-tight mb-4 group-hover:text-[#D4AF37] transition-colors line-clamp-2">{item.title}</h3>
                            <a href={item.slug ? `/portfolio/${item.slug}/` : "/portfolio/"} className="text-[10px] font-black text-white uppercase tracking-widest border-b border-[#D4AF37]/30 pb-1 hover:text-[#D4AF37] transition-all">Смотреть кейс</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSlider;