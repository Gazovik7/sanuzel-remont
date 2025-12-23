
import React from 'react';
import { ADVANTAGES_GRID } from '../landing/constants';
import { motion } from 'framer-motion';

const WhyUs: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-24">
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-[#09090b] mb-8 leading-[1.1]">
              Почему бренды выбирают <br/>
              <span className="italic text-[#D4AF37]">системный подход?</span>
            </h2>
            <div className="h-px w-32 bg-[#D4AF37]"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {ADVANTAGES_GRID.map((adv, idx) => (
            <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#09090b] text-[#D4AF37] group-hover:scale-110 transition-transform duration-300">
                <adv.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold mb-4 text-[#09090b] uppercase tracking-wide">{adv.title}</h3>
              <p className="text-gray-500 leading-relaxed font-light text-lg">{adv.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
