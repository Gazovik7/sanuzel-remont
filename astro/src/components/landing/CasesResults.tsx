
import React from 'react';
import { CASES_DATA, CLIENTS } from './constants';
import { ArrowRight, TrendingUp, MapPin, Briefcase, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useModal } from './Modal';

const Link = ({href, children, ...props}: any) => <a href={href} {...props}>{children}</a>;

const CasesResults: React.FC = () => {
  const { openModal } = useModal();

  // Duplicate clients list to create seamless loop
  const marqueeClients = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  const handleWantSame = (caseTitle: string) => {
    openModal({
      title: 'Хочу такой же результат',
      subtitle: `Меня заинтересовал кейс: "${caseTitle}". Расскажите подробнее, как мы можем это повторить.`,
      buttonText: 'Получить стратегию'
    });
  };

  return (
    <section id="cases" className="py-16 md:py-24 bg-white relative overflow-hidden">
      
      {/* --- 1. TRUST BLOCK (CLIENTS) --- */}
      <div className="mb-12 md:mb-16 relative z-20">
         <div className="container mx-auto px-4 mb-6 text-center">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Нам доверяют лидеры рынка</p>
         </div>
         <div className="relative w-full border-y border-gray-100 bg-white/50 backdrop-blur-sm py-6">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex animate-marquee-slow gap-16 md:gap-24 items-center whitespace-nowrap">
              {marqueeClients.map((client, idx) => (
                <div 
                  key={idx} 
                  className="text-2xl md:text-4xl font-black text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#F3E5AB] transition-all duration-500 cursor-default select-none transform hover:scale-105"
                >
                  {client.logoText}
                </div>
              ))}
            </div>
         </div>
      </div>

      {/* --- BACKGROUND TEXT --- */}
      <div className="absolute top-[300px] md:top-[240px] left-0 w-full overflow-hidden pointer-events-none z-0 opacity-[0.02]">
          <div className="text-[18vw] md:text-[16vw] font-serif font-black text-[#09090b] leading-none whitespace-nowrap text-center select-none">
              MARKETING
          </div>
      </div>

      {/* --- 2. CASES CONTENT --- */}
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Наши работы</span>
                <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#09090b]">
                    Реальные результаты <br />
                    <span className="italic text-gray-400">продвижения</span>
                </h2>
            </div>
            <Link href="/cases" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[#D4AF37] transition-colors group">
                Все кейсы
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
           {CASES_DATA.slice(0, 7).map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group flex flex-col h-full bg-white hover:bg-[#F9F9FB] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100"
              >
                 {/* Image Area */}
                 <div className="relative h-48 overflow-hidden">
                    <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-[#09090b] flex items-center gap-1 shadow-sm">
                        <TrendingUp size={12} className="text-[#D4AF37]" />
                        {item.result}
                    </div>
                 </div>

                 {/* Content Area */}
                 <div className="p-5 flex flex-col flex-grow">
                    {/* Meta Tags */}
                    <div className="flex items-center gap-3 text-[10px] uppercase font-bold text-gray-400 mb-3 tracking-wide">
                        {item.geo && (
                            <div className="flex items-center gap-1">
                                <MapPin size={12} className="text-[#D4AF37]" />
                                {item.geo}
                            </div>
                        )}
                        {item.niche && (
                            <div className="flex items-center gap-1">
                                <Briefcase size={12} className="text-[#D4AF37]" />
                                {item.niche}
                            </div>
                        )}
                    </div>
                    
                    <h3 className="font-bold text-base text-[#09090b] mb-2 leading-snug line-clamp-2 min-h-[2.5rem]">
                        {item.title}
                    </h3>
                    
                    <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2 flex-grow">
                        {item.desc}
                    </p>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2 mt-auto pt-4 border-t border-gray-100">
                        <Link 
                            href="/cases" 
                            className="flex items-center justify-center py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-wide bg-white border border-gray-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all text-gray-900"
                        >
                            Подробнее
                        </Link>
                        <button 
                            onClick={() => handleWantSame(item.title)}
                            className="flex items-center justify-center gap-1 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-wide bg-[#D4AF37] text-white hover:bg-[#b5952f] transition-all shadow-md shadow-[#D4AF37]/20"
                        >
                            Хочу также
                        </button>
                    </div>
                 </div>
              </motion.div>
           ))}

           {/* SPECIAL 8th CARD: Next Success Story */}
           <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative flex flex-col h-full rounded-xl overflow-hidden transition-all duration-500 border-2 border-dashed border-[#D4AF37]/30 hover:border-[#D4AF37] hover:shadow-2xl hover:shadow-[#D4AF37]/10 bg-gradient-to-b from-white to-[#D4AF37]/5"
           >
                <div className="p-8 flex flex-col h-full items-center text-center justify-center space-y-6">
                    <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform duration-500">
                        <Sparkles size={32} />
                    </div>
                    
                    <div className="space-y-3">
                        <h3 className="font-serif font-bold text-xl text-[#09090b]">
                            Ваш проект может быть <br/> <span className="italic text-[#D4AF37]">следующим</span>
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Мы готовы разработать стратегию роста для вашего бизнеса и вывести сайт в ТОП-3.
                        </p>
                    </div>

                    <button 
                        onClick={() => openModal({ title: 'Обсудить проект', subtitle: 'Давайте сделаем ваш сайт нашим следующим успешным кейсом.' })}
                        className="w-full py-4 rounded-xl bg-[#09090b] text-white font-bold uppercase tracking-widest text-xs hover:bg-[#D4AF37] hover:text-black transition-all shadow-lg"
                    >
                        Повторить результат
                    </button>
                </div>
           </motion.div>
        </div>

        <div className="mt-12 text-center md:hidden">
            <Link href="/cases" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[#D4AF37] transition-colors border-b border-gray-300 pb-1">
                Посмотреть все кейсы
            </Link>
        </div>
      </div>

      <style>{`
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 80s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default CasesResults;
