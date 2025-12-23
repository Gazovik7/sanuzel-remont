import React from 'react';
import { motion } from 'framer-motion';
import { SEO_BENEFITS } from './constants';
import { CheckCircle2 } from 'lucide-react';

const SeoBenefits: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
        <div className="text-center mb-20">
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Эффект от SEO</span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#09090b] mb-8 leading-tight">
                Почему SEO — это <span className="italic text-[#D4AF37]">лучшая инвестиция?</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                В отличие от рекламы, где трафик исчезает сразу после остановки бюджета, SEO создает актив, который работает на вас годами.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SEO_BENEFITS.map((benefit, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:border-[#D4AF37]/30 transition-all duration-500 group"
                >
                    <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 text-[#D4AF37]">
                        <benefit.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-[#09090b] group-hover:text-[#D4AF37] transition-colors">{benefit.title}</h3>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SeoBenefits;