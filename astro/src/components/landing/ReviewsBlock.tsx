import React, { useState } from 'react';
import { VIDEO_REVIEWS, LETTERHEAD_REVIEWS } from './constants';
import { Play, Star, ChevronLeft, ChevronRight, CheckCircle2, ArrowRight, X, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from './Modal';
import UniversalForm from './UniversalForm';

const ReviewsBlock: React.FC = () => {
  const { openModal } = useModal();
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const videoScrollRef = React.useRef<HTMLDivElement>(null);

  const scrollVideo = (direction: 'left' | 'right') => {
    if (videoScrollRef.current) {
      const { scrollLeft, clientWidth } = videoScrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      videoScrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="reviews" className="bg-white text-[#09090b] overflow-hidden relative">
      <div className="py-24 md:py-32 container mx-auto px-6 md:px-12 relative z-10 max-w-[1400px]">
        
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Репутация</span>
            <h2 className="text-4xl md:text-6xl font-serif font-medium leading-[1.1] mb-6 text-[#09090b]">
              Доверие, подтвержденное <br/>
              <span className="italic text-[#D4AF37]">результатами</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl font-light">
               Более 500 успешных проектов. Мы не просто обещаем, мы показываем реальные цифры и отзывы клиентов.
            </p>
        </div>

        {/* 1. Video Reviews (Horizontal Scroll) */}
        <div className="mb-24">
           <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-[#09090b] flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                    <Play size={20} fill="currentColor" />
                 </div>
                 Видео-отзывы клиентов
              </h3>
              <div className="flex gap-3">
                 <button onClick={() => scrollVideo('left')} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">
                    <ChevronLeft size={20} />
                 </button>
                 <button onClick={() => scrollVideo('right')} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">
                    <ChevronRight size={20} />
                 </button>
              </div>
           </div>

           <div 
              ref={videoScrollRef}
              className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
           >
              <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
              `}</style>
              {VIDEO_REVIEWS.map((video, idx) => (
                 <motion.div 
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="min-w-[300px] md:min-w-[350px] snap-start bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden group cursor-pointer relative"
                    onClick={() => openModal({ title: 'Видео-отзыв', subtitle: video.title })}
                    itemScope 
                    itemType="https://schema.org/Review"
                 >
                    <div className="h-48 relative overflow-hidden bg-gray-200">
                        <img src={video.image} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" itemProp="image" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Play size={24} className="text-white fill-white ml-1" />
                            </div>
                        </div>
                        <div className="absolute top-4 left-4 bg-[#D4AF37] text-black text-[10px] font-black uppercase px-2 py-1 rounded shadow-lg">
                           Результат: x3 Рост
                        </div>
                    </div>
                    <div className="p-6">
                       <h4 className="font-bold text-[#09090b] text-lg leading-snug mb-4 line-clamp-2 h-14" itemProp="name">
                          "{video.title}"
                       </h4>
                       <div className="flex gap-1 mb-4" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} className={i < 5 ? "text-[#D4AF37] fill-[#D4AF37]" : "text-gray-200"} />
                            ))}
                       </div>
                       <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                          <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 font-bold">
                             {video.author[0]}
                          </div>
                          <div itemProp="author" itemScope itemType="https://schema.org/Person">
                             <div className="text-sm font-bold text-[#09090b]" itemProp="name">{video.author}</div>
                             <div className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{video.role}</div>
                          </div>
                       </div>
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>

        {/* 2. Official Letters (Grid) */}
        <div className="mb-24">
           <h3 className="text-2xl font-bold text-[#09090b] mb-8 flex items-center gap-3">
              <CheckCircle2 size={24} className="text-[#D4AF37]" />
              Официальные благодарности
           </h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {LETTERHEAD_REVIEWS.map((letter, idx) => (
                 <div key={idx} className="flex flex-col gap-4">
                    <div 
                        className="relative group cursor-zoom-in"
                        onClick={() => setActiveLetter(letter.image)}
                    >
                        <div className="aspect-[3/4] bg-white rounded-xl overflow-hidden relative shadow-md transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl border border-gray-100">
                           <img src={letter.image} alt={letter.alt} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                           <div className="absolute inset-0 bg-[#09090b]/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-center">
                              <span className="text-white font-bold text-[10px] uppercase tracking-widest">Увеличить</span>
                           </div>
                        </div>
                    </div>
                    <div className="px-1 text-center">
                        <div className="flex justify-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={12} className="text-[#D4AF37] fill-[#D4AF37]" />
                            ))}
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <span className="text-[#09090b] font-bold text-sm leading-tight">{letter.author}</span>
                            <span className="text-gray-400 text-[10px] font-bold uppercase tracking-tighter">{letter.role}</span>
                        </div>
                    </div>
                 </div>
              ))}
           </div>
        </div>

        {/* 3. Conversion CTA - DARK FRAME ON WHITE BACKGROUND */}
        <div className="relative rounded-[3rem] overflow-hidden border border-white/10 bg-[#09090b] text-white shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#D4AF37/0.05,transparent_70%)] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
            
            <div className="relative z-10 px-8 py-16 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-16">
                <div className="text-center lg:text-left max-w-xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-8">
                        <CheckCircle2 size={14} />
                        Результат гарантирован договором
                    </div>
                    <h3 className="text-4xl md:text-5xl font-serif font-medium mb-6 leading-tight text-white">
                        Хотите такие же <br/>
                        <span className="italic text-gradient-gold">результаты?</span>
                    </h3>
                    <p className="text-gray-400 text-lg font-light mb-8 leading-relaxed">
                        Запишитесь на стратегическую сессию. Мы разберем ваш проект, найдем скрытые точки роста и составим план выхода в ТОП-3.
                    </p>
                    
                    <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 border-t border-white/5">
                        <div className="w-14 h-14 rounded-full border-2 border-[#D4AF37]/30 overflow-hidden shrink-0 shadow-lg">
                            <img src="/img/smirnov-ivan.jpg" alt="Иван Смирнов" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-left">
                            <div className="text-white font-bold text-base">Иван Смирнов</div>
                            <div className="text-[#D4AF37] text-[10px] font-black uppercase tracking-tighter">Основатель Smirnov Marketing</div>
                        </div>
                    </div>
                </div>
                
                <div className="w-full lg:w-auto flex-1 max-w-xl">
                    <div className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-inner relative overflow-hidden">
                        <div className="relative z-10">
                            <UniversalForm 
                               source="Reviews_PremiumCTA" 
                               variant="default" 
                               buttonText="Получить стратегию роста" 
                               buttonClassName="w-full bg-[#D4AF37] hover:bg-[#B8952D] text-black font-black py-5 rounded-2xl shadow-xl shadow-[#D4AF37]/20 hover:scale-[1.02] transition-all text-base uppercase tracking-wider"
                               inputClassName="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/10 bg-white/10 text-white focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 focus:outline-none transition-all text-base placeholder:text-gray-500"
                               iconClassName="text-[#D4AF37]/50 group-focus-within:text-[#D4AF37]"
                               isDark={true}
                               showMessengerSelector={true}
                               showUrlField={true}
                               showBudgetField={true}
                               bottomText={
                                   <div className="flex items-center justify-center gap-1.5 opacity-40 text-white mt-4 text-[10px] uppercase tracking-widest font-bold">
                                       <Lock size={10} />
                                       <span>Конфиденциальность гарантирована</span>
                                   </div>
                               }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>

      <AnimatePresence>
        {activeLetter && (
            <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-[#09090b]/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
                onClick={() => setActiveLetter(null)}
            >
                <div className="relative max-w-3xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
                    <button onClick={() => setActiveLetter(null)} className="absolute top-4 right-4 p-2 bg-[#09090b]/50 text-white rounded-full hover:bg-black transition-colors z-10"><X size={20} /></button>
                    <img src={activeLetter} alt="Letter" className="w-full h-full object-contain" />
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ReviewsBlock;