
import React, { useState, useEffect } from 'react';
import { Play, Star, MessageCircle, Send, X, ZoomIn, MessageSquare, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Breadcrumbs from './Breadcrumbs';
import { REVIEWS, SCREENSHOT_REVIEWS, TEXT_REVIEWS } from '../constants';
import UniversalForm from './UniversalForm';
import { useModal } from './Modal';

const ReviewsPage: React.FC = () => {
  const { openModal } = useModal();
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-24 animate-fade-in">
      
      {/* 1. Header */}
      <div className="container mx-auto max-w-6xl px-4 mb-16">
        <Breadcrumbs 
            items={[{ label: 'Отзывы', href: '/reviews' }]} 
            theme="dark" 
        />
        <div className="text-center max-w-4xl mx-auto pt-8">
           <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-green-100">
             <Star size={16} fill="currentColor" />
             <span>Репутация MPAgency</span>
           </div>
           <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
             Что говорят наши клиенты
           </h1>
           <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
             Мы гордимся результатами наших партнеров. Здесь собраны видео-интервью, скриншоты переписок и честные отзывы о работе с нами.
           </p>
        </div>
      </div>

      {/* 2. Video Reviews Grid */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto max-w-6xl px-4">
           <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0">
                 <Play size={24} fill="currentColor" />
              </div>
              <h2 className="text-3xl font-black text-gray-900">Видео-отзывы</h2>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {REVIEWS.map((review, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-200 transform hover:-translate-y-1"
                  onClick={() => setActiveVideoIndex(idx)}
                >
                  <div className="h-56 relative overflow-hidden">
                    <img 
                      src={review.image} 
                      alt={"Видео-отзыв: " + review.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border border-white/30 group-hover:scale-110 transition-transform duration-300">
                        <Play className="text-white ml-1" size={32} fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-primary font-bold uppercase tracking-wider mb-2">{review.subtitle}</div>
                    <h3 className="font-bold text-lg leading-snug text-gray-900">{review.title}</h3>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 3. Text Reviews Grid */}
      <section className="py-20 bg-white">
         <div className="container mx-auto max-w-6xl px-4">
            <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <MessageSquare size={24} />
                </div>
                <h2 className="text-3xl font-black text-gray-900">Истории успеха</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
               {TEXT_REVIEWS.map((review) => (
                  <div key={review.id} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-blue-200 transition-colors relative">
                     <Quote className="absolute top-8 right-8 text-gray-200 rotate-180" size={40} fill="currentColor" />
                     
                     <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 font-bold text-lg">
                           {review.name[0]}
                        </div>
                        <div>
                           <div className="font-bold text-gray-900">{review.name}</div>
                           <div className="text-sm text-gray-500">{review.role}</div>
                        </div>
                     </div>

                     <div className="flex gap-1 mb-4 text-yellow-400">
                        {[...Array(review.rating)].map((_, i) => (
                           <Star key={i} size={16} fill="currentColor" />
                        ))}
                     </div>

                     <p className="text-gray-600 leading-relaxed mb-6">
                        "{review.text}"
                     </p>

                     <div className="inline-block bg-white px-3 py-1 rounded-lg text-xs font-bold text-gray-400 border border-gray-200">
                        {review.platform}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Screenshots from Messengers */}
      <section className="py-20 bg-[#F8FAFC] overflow-hidden">
         <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Реальные переписки</h2>
               <p className="text-gray-500">Скриншоты из рабочих чатов с клиентами</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {SCREENSHOT_REVIEWS.map((shot, idx) => (
                  <div 
                     key={shot.id} 
                     className="relative group cursor-pointer"
                     onClick={() => setActiveScreenshotIndex(idx)}
                  >
                     <div className="rounded-2xl overflow-hidden border-4 border-white shadow-lg bg-white relative aspect-[9/16] max-h-[500px]">
                        {/* Placeholder for screenshot - using a blurred background + chat UI elements */}
                        <div className="w-full h-full bg-gray-100 relative">
                            {/* Simulate Chat UI */}
                            <div className={`absolute top-0 w-full p-4 flex items-center gap-3 ${shot.platform === 'whatsapp' ? 'bg-[#075E54]' : 'bg-[#2AABEE]'}`}>
                                <div className="w-8 h-8 rounded-full bg-white/20"></div>
                                <div className="h-3 w-24 bg-white/20 rounded"></div>
                            </div>
                            <div className="p-4 pt-20 space-y-4">
                                <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm w-[80%] ml-0">
                                    <div className="h-2 w-full bg-gray-200 rounded mb-2"></div>
                                    <div className="h-2 w-2/3 bg-gray-200 rounded"></div>
                                </div>
                                <div className={`p-3 rounded-lg rounded-tr-none shadow-sm w-[80%] ml-auto ${shot.platform === 'whatsapp' ? 'bg-[#DCF8C6]' : 'bg-[#EFFDDE]'}`}>
                                    <div className="h-2 w-full bg-gray-400/20 rounded mb-2"></div>
                                    <div className="h-2 w-1/2 bg-gray-400/20 rounded"></div>
                                </div>
                            </div>
                            
                            {/* Actual Image Overlay (if available) or fallback text */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/20 transition-colors">
                                <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 text-gray-900 shadow-xl">
                                        <ZoomIn size={24} />
                                    </div>
                                    <span className="text-white font-bold drop-shadow-md text-sm">Смотреть</span>
                                </div>
                            </div>
                        </div>
                     </div>
                     
                     {/* Platform Badge */}
                     <div className="absolute top-4 right-4 z-10">
                        {shot.platform === 'whatsapp' ? (
                           <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white shadow-md"><MessageCircle size={18} /></div>
                        ) : (
                           <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-md"><Send size={18} /></div>
                        )}
                     </div>
                     
                     <div className="mt-3 text-center">
                        <p className="text-sm font-bold text-gray-700">{shot.title}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. CTA */}
      <section className="py-20 bg-white">
         <div className="container mx-auto max-w-4xl px-4">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2.5rem] p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
               <div className="relative z-10">
                  <h2 className="text-3xl font-black mb-4">Хотите такие же результаты?</h2>
                  <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                     Оставьте заявку, и мы обсудим, как увеличить прибыль в вашем магазине.
                  </p>
                  <div className="max-w-md mx-auto">
                     <UniversalForm 
                        source="ReviewsPage_Footer" 
                        variant="embedded" 
                        buttonText="Обсудить проект"
                        isDark={true}
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideoIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveVideoIndex(null)}
          >
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => setActiveVideoIndex(null)}
                className="absolute top-4 right-4 text-white/50 hover:text-white z-10 transition-colors"
              >
                <X size={32} />
              </button>
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                    <Play size={32} className="text-white ml-1" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">{REVIEWS[activeVideoIndex].title}</h3>
                <p className="text-white/50">Здесь должно быть видео-отзыв клиента</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screenshot Lightbox */}
      <AnimatePresence>
        {activeScreenshotIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setActiveScreenshotIndex(null)}
          >
             <motion.div 
               initial={{ scale: 0.9 }} 
               animate={{ scale: 1 }}
               className="relative max-w-md w-full bg-white rounded-xl overflow-hidden shadow-2xl"
               onClick={(e) => e.stopPropagation()}
             >
                <div className="p-4 bg-gray-50 border-b flex justify-between items-center">
                   <h3 className="font-bold text-gray-900">{SCREENSHOT_REVIEWS[activeScreenshotIndex].title}</h3>
                   <button onClick={() => setActiveScreenshotIndex(null)} className="text-gray-500 hover:text-gray-900">
                      <X size={24} />
                   </button>
                </div>
                <div className="aspect-[9/16] bg-gray-100 relative flex items-center justify-center">
                    {/* Placeholder for full image */}
                    <div className="text-gray-400 font-bold">Скриншот переписки</div>
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ReviewsPage;
