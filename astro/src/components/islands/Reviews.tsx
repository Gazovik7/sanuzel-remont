
import React, { useState } from 'react';
import { REVIEWS } from '../landing/constants';
import { Play, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Reviews: React.FC = () => {
  const [activeReviewIndex, setActiveReviewIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 bg-white relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
          Что говорят клиенты о работе с нами
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100 transform hover:-translate-y-1"
              onClick={() => setActiveReviewIndex(idx)}
            >
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={review.image} 
                  alt={"Видео-отзыв клиента: " + review.subtitle}
                  title={review.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-xl z-10 group-hover:scale-110 transition-transform duration-300">
                    <Play className="text-gray-900 ml-1" size={28} fill="currentColor" />
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4">
                   <div className="inline-block bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/20">
                      Видео-отзыв
                   </div>
                </div>
              </div>
              <div className="p-8">
                <div className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-wider">{review.subtitle}</div>
                <h3 className="font-bold text-xl leading-tight text-gray-900">{review.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Video Modal */}
      <AnimatePresence>
        {activeReviewIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveReviewIndex(null)}
          >
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => setActiveReviewIndex(null)}
                className="absolute top-4 right-4 text-white/50 hover:text-white z-10 transition-colors"
              >
                <X size={32} />
              </button>
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                    <Play size={32} className="text-white ml-1" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">{REVIEWS[activeReviewIndex].title}</h3>
                <p className="text-white/50">Здесь должно быть видео-отзыв клиента</p>
                {/* iframe placeholder */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Reviews;
