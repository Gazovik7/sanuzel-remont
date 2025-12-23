
import React, { useState } from 'react';
import { VIDEO_REVIEWS, LETTERHEAD_REVIEWS } from '../constants';
import { Play, Star, ChevronLeft, ChevronRight, CheckCircle2, ArrowRight, X, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from './Modal';
import UniversalForm from './UniversalForm';

const ReviewsBlock: React.FC = () => {
  const { openModal } = useModal();
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  return (
    <section id="reviews" className="py-32 bg-[#09090b] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-[1400px]">
        
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Репутация</span>
            <h2 className="text-4xl md:text-6xl font-serif font-medium leading-[1.1] mb-6">
              Доверие, подтвержденное <br/>
              <span className="italic text-gradient-gold">результатами</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl font-light">
               Более 500 успешных проектов. Мы не просто обещаем, мы показываем реальные цифры и отзывы клиентов.
            </p>
        </div>

        {/* 1. Video Reviews (Horizontal Scroll) */}
        <div className="mb-24">
           <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                 <Play size={24} className="text-[#D4AF37] fill-[#D4AF37]" />
                 Видео-отзывы клиентов
              </h3>
              <div className="hidden md:flex gap-2">
                 <span className="text-sm text-gray-500 font-medium">Свайпните, чтобы увидеть больше →</span>
              </div>
           </div>

           <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
              {VIDEO_REVIEWS.map((video, idx) => (
                 <motion.div 
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="min-w-[300px] md:min-w-[350px] snap-center bg-[#111] rounded-2xl border border-white/10 overflow-hidden group cursor-pointer relative"
                    onClick={() => openModal({ title: 'Видео-отзыв', subtitle: video.title, extraFields: { videoUrl: video.title } })} // In real app, pass video ID/URL
                 >
                    {/* Thumbnail Area */}
                    <div className="h-48 relative overflow-hidden bg-gray-800">
                        <img src={video.image} alt={video.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105 transform" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Play size={24} className="text-white fill-white ml-1" />
                            </div>
                        </div>
                        {/* Result Tag - Mockup */}
                        <div className="absolute top-4 left-4 bg-[#D4AF37] text-black text-[10px] font-bold uppercase px-2 py-1 rounded shadow-lg">
                           Результат: x3 Рост
                        </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                       <h4 className="font-bold text-white text-lg leading-snug mb-4 line-clamp-2 h-14">
                          "{video.title}"
                       </h4>
                       <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                          <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 font-bold border border-white/10">
                             {video.author[0]}
                          </div>
                          <div>
                             <div className="text-sm font-bold text-gray-200">{video.author}</div>
                             <div className="text-xs text-gray-500">{video.role}</div>
                          </div>
                       </div>
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>

        {/* 2. Official Letters (Grid) */}
        <div className="mb-24">
           <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <CheckCircle2 size={24} className="text-[#D4AF37]" />
              Официальные благодарности
           </h3>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {LETTERHEAD_REVIEWS.map((letter, idx) => (
                 <div 
                    key={idx} 
                    className="relative group cursor-zoom-in"
                    onClick={() => setActiveLetter(letter.image)}
                 >
                    <div className="aspect-[3/4] bg-white rounded-xl overflow-hidden relative shadow-lg shadow-white/5 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-[#D4AF37]/10">
                       <img src={letter.image} alt={letter.alt} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                       
                       {/* Hover Overlay */}
                       <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                          <span className="text-white font-bold text-sm">{letter.company}</span>
                          <span className="text-white/70 text-xs">Нажмите, чтобы увеличить</span>
                       </div>
                    </div>
                 </div>
              ))}
              
              {/* "More" Placeholder */}
              <div className="aspect-[3/4] bg-[#111] rounded-xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center text-center p-4 hover:border-[#D4AF37]/50 transition-colors cursor-pointer group" onClick={() => openModal({ title: 'Все отзывы', subtitle: 'Мы пришлем вам полную презентацию с кейсами и отзывами.' })}>
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 mb-3 group-hover:text-[#D4AF37] transition-colors">
                      <ArrowRight size={20} />
                  </div>
                  <span className="text-sm font-bold text-gray-300 group-hover:text-white">Смотреть еще 50+ отзывов</span>
              </div>
           </div>
        </div>

        {/* 3. Conversion CTA (Upgraded to Inline Form) */}
        <div className="relative rounded-[2rem] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]"></div>
            <div className="relative z-10 px-8 py-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-black max-w-xl text-center lg:text-left">
                    <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                        Хотите такие же результаты?
                    </h3>
                    <p className="text-black/80 text-lg font-medium">
                        Запишитесь на бесплатный аудит. Мы найдем точки роста вашего проекта и покажем, как их реализовать.
                    </p>
                </div>
                <div className="w-full lg:w-auto flex-1 max-w-xl">
                    <UniversalForm 
                       source="Reviews_GoldCTA" 
                       variant="row" 
                       buttonText="Получить стратегию" 
                       buttonClassName="bg-black hover:bg-gray-900 text-white shadow-xl hover:scale-105 transition-transform"
                       inputClassName="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-transparent bg-white/90 backdrop-blur-sm text-black focus:border-black focus:ring-4 focus:ring-black/10 focus:outline-none transition-all text-base font-medium placeholder:text-gray-500 focus:bg-white"
                       iconClassName="text-gray-500 group-focus-within:text-black"
                       showMessengerSelector={false}
                       showUrlField={true}
                       showBudgetField={true}
                       bottomText={
                           <div className="flex items-center justify-center gap-1.5 opacity-60 text-black mt-2">
                               <Lock size={12} />
                               <span>100% конфиденциально. Ваши данные под защитой.</span>
                           </div>
                       }
                    />
                </div>
            </div>
            {/* Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        </div>

      </div>

      {/* Lightbox Modal for Letters */}
      <AnimatePresence>
        {activeLetter && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
                onClick={() => setActiveLetter(null)}
            >
                <div className="relative max-w-3xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl">
                    <button 
                        onClick={() => setActiveLetter(null)}
                        className="absolute top-2 right-2 p-2 bg-black/50 text-white rounded-full hover:bg-black transition-colors z-10"
                    >
                        <X size={20} />
                    </button>
                    <img src={activeLetter} alt="Letter" className="w-full h-full object-contain" />
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ReviewsBlock;
