
import React, { useState } from 'react';
import { Play, Star, MessageCircle, Send, X, ZoomIn, MessageSquare, Quote, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Breadcrumbs from './Breadcrumbs';
import { REVIEWS, SCREENSHOT_REVIEWS, TEXT_REVIEWS } from '../landing/constants';
import UniversalForm from './UniversalForm';

const ReviewsPage: React.FC = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState<number | null>(null);

  return (
    <section className="relative pt-32 pb-24 bg-[#09090b] text-white overflow-hidden min-h-screen animate-fade-in">
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#D4AF37]/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/5 rounded-full blur-[150px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-20">
          <Breadcrumbs 
            items={[{ label: 'Отзывы', href: '/otzyvy-klientov' }]} 
            theme="light" 
          />
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 backdrop-blur-sm text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest mb-8">
             <Star size={14} fill="currentColor" />
             <span>Репутация Smirnov Marketing</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-sans font-bold text-white mb-8 leading-[1.1] tracking-tight">
            Истории <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">успеха</span>
          </h1>
          <p className="text-xl md:text-2xl font-serif italic text-[#D4AF37] opacity-90">
            Мы гордимся результатами наших партнеров и честными отзывами о нашей работе.
          </p>
        </div>

        {/* Video Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {REVIEWS.map((review, idx) => (
            <div 
              key={idx} 
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-[#D4AF37]/30 transition-all duration-500 cursor-pointer"
              onClick={() => setActiveVideoIndex(idx)}
            >
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={review.image} 
                  alt={review.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 opacity-60"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                  <div className="w-16 h-16 bg-[#D4AF37] text-black rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Play className="ml-1" size={28} fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-10">
                <div className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-widest mb-3">{review.subtitle}</div>
                <h3 className="text-xl font-bold text-white leading-tight group-hover:text-[#D4AF37] transition-colors">{review.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Text Reviews */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
           {TEXT_REVIEWS.map((review) => (
              <div key={review.id} className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 hover:border-white/20 transition-all relative group">
                 <Quote className="absolute top-10 right-10 text-[#D4AF37] opacity-10 rotate-180" size={80} fill="currentColor" />
                 
                 <div className="flex items-center gap-5 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-[#D4AF37] font-bold text-xl border border-white/10 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                       {review.name[0]}
                    </div>
                    <div>
                       <div className="font-bold text-white text-lg">{review.name}</div>
                       <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{review.role}</div>
                    </div>
                 </div>

                 <div className="flex gap-1 mb-6 text-[#D4AF37]">
                    {[...Array(review.rating)].map((_, i) => (
                       <Star key={i} size={14} fill="currentColor" />
                    ))}
                 </div>

                 <p className="text-gray-400 font-light leading-relaxed mb-8 italic">
                    "{review.text}"
                 </p>

                 <div className="inline-block px-3 py-1 rounded-lg text-[10px] font-bold text-gray-500 uppercase tracking-widest border border-white/5 bg-white/5">
                    {review.platform}
                 </div>
              </div>
           ))}
        </div>

        {/* CTA Block */}
        <div className="bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/10 p-12 md:p-20 text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-[80px]"></div>
           <div className="relative z-10">
               <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mb-8">Хотите такие же <span className="italic text-[#D4AF37]">результаты?</span></h2>
               <p className="text-gray-400 text-lg font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                  Оставьте заявку, и мы обсудим, как масштабировать ваш бизнес и увеличить прибыль с помощью экспертного маркетинга.
               </p>
               <div className="max-w-md mx-auto">
                  <UniversalForm 
                     source="ReviewsPage_Footer" 
                     variant="embedded" 
                     buttonText="Обсудить проект"
                  />
               </div>
           </div>
        </div>

      </div>

      {/* Modals */}
      <AnimatePresence>
        {activeVideoIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveVideoIndex(null)}
          >
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden border border-gray-800" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setActiveVideoIndex(null)} className="absolute top-6 right-6 text-white/50 hover:text-white z-10"><X size={32} /></button>
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-8">
                <div className="w-20 h-20 bg-[#D4AF37] text-black rounded-full flex items-center justify-center mb-6"><Play size={40} className="ml-1" fill="currentColor" /></div>
                <h3 className="text-white text-2xl font-bold mb-4">{REVIEWS[activeVideoIndex].title}</h3>
                <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Видео-отзыв готовится к публикации</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default ReviewsPage;
