import React from 'react';
import { motion } from 'framer-motion';
import { ADVANTAGES_GRID } from './constants';

const WhyUs: React.FC = () => {
  return (
    <section className="py-24 bg-[#09090b] text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,#D4AF37/0.05,transparent_50%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
        <div className="text-center mb-20">
            <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em] mb-4 block"
            >
                Наши преимущества
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mb-8 leading-[1.1]">
                Почему выбирают <br/> 
                <span className="italic text-gradient-gold">Smirnov Marketing</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                Мы объединили глубокую техническую экспертизу с маркетинговым подходом, чтобы каждый вложенный в SEO рубль приносил прибыль.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ADVANTAGES_GRID.map((item, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-500 group"
                >
                    <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                        <item.icon className="text-[#D4AF37]" size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                        {item.desc}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;