
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-[#F5F5F7]">
      <div className="container mx-auto px-6 md:px-12 max-w-[1000px]">
        <h2 className="text-4xl md:text-5xl font-serif font-medium text-center mb-20 text-[#09090b]">
          Вопросы и ответы
        </h2>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button 
                className="w-full flex items-center justify-between p-8 text-left"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-bold text-lg md:text-xl text-[#09090b] pr-8">{faq.question}</span>
                <div className={`shrink-0 transition-transform duration-300 text-[#D4AF37] ${openIndex === idx ? 'rotate-180' : ''}`}>
                   {openIndex === idx ? <Minus size={24} /> : <Plus size={24} />}
                </div>
              </button>
              
              {openIndex === idx && (
                <div className="px-8 pb-8">
                  <p className="text-gray-500 leading-relaxed text-lg font-light border-t border-gray-100 pt-6">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
