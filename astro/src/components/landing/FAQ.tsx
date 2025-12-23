
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQProps {
  items: { question: string; answer: string }[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [openIndex, setOpenIdex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 max-w-[1000px]">
        
        <div className="text-center mb-20">
            <div className="w-16 h-16 rounded-3xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mx-auto mb-6">
                <HelpCircle size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#09090b] mb-6">Отвечаем на <span className="italic text-[#D4AF37]">вопросы</span></h2>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
                Прозрачность — основа нашего сотрудничества. Если у вас остались вопросы, мы с радостью ответим на них.
            </p>
        </div>

        <div className="space-y-4">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              className={`rounded-[2rem] border transition-all duration-500 ${openIndex === idx ? 'bg-gray-50 border-[#D4AF37]/30 shadow-xl shadow-[#D4AF37]/5' : 'bg-white border-gray-100 hover:border-gray-300'}`}
            >
              <button
                onClick={() => setOpenIdex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-8 flex items-center justify-between text-left gap-6"
              >
                <span className={`text-lg font-bold transition-colors ${openIndex === idx ? 'text-[#09090b]' : 'text-gray-600'}`}>
                  {item.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${openIndex === idx ? 'bg-[#09090b] text-white rotate-180' : 'bg-gray-100 text-gray-400'}`}>
                  {openIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-gray-500 leading-relaxed font-light text-base border-t border-gray-100/50 pt-6 mx-8">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
