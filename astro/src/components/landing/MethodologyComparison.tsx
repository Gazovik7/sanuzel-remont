
import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, AlertCircle } from 'lucide-react';

const comparison = {
  bad: [
    'Фокус только на позициях и ссылках',
    'Шаблонные тексты для роботов',
    'Отсутствие работы с конверсией сайта',
    'Непрозрачная отчетность в PDF',
    'Риск попасть под фильтры поисковиков'
  ],
  good: [
    'Фокус на окупаемости (ROI) и лидах',
    'Экспертный контент для людей (E-E-A-T)',
    'Постоянный UX/UI аудит и доработки',
    'Онлайн-дашборд с данными из CRM',
    'Авторская система «Колесо баланса»'
  ]
};

const MethodologyComparison: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
        
        <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#09090b] mb-6 leading-tight">
                Как работают другие и <br/> <span className="italic text-[#D4AF37]">как работаем мы</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
                Разница в подходе определяет, станет ли SEO вашим главным активом или просто строчкой в расходах.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* The Old Way */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-10 rounded-[3rem] bg-gray-50 border border-gray-100 relative group"
            >
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-500">
                        <AlertCircle size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest">Стандартное SEO</h3>
                </div>

                <ul className="space-y-6">
                    {comparison.bad.map((item, i) => (
                        <li key={i} className="flex gap-4 items-start opacity-60">
                            <X size={18} className="text-red-500 shrink-0 mt-1" />
                            <span className="text-gray-600 text-sm font-light">{item}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>

            {/* Smirnov Way */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-10 bg-[#09090b] border border-[#D4AF37]/30 rounded-[3rem] shadow-[0_0_40px_rgba(212,175,55,0.1)] relative overflow-hidden text-white"
            >
                {/* Accent background text */}
                <span className="absolute -bottom-4 -right-4 text-6xl font-black text-[#D4AF37]/5 select-none pointer-events-none uppercase">Smirnov</span>
                
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-[#D4AF37] flex items-center justify-center text-[#09090b]">
                        <Check size={24} />
                    </div>
                    <div>
                        <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-1 block">Smirnov.Marketing</span>
                        <h3 className="text-xl font-bold text-white uppercase tracking-widest">Системный подход</h3>
                    </div>
                </div>

                <ul className="space-y-6">
                    {comparison.good.map((item, i) => (
                        <li key={i} className="flex gap-4 items-start">
                            <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0 mt-0.5">
                                <Check size={12} className="text-[#D4AF37]" />
                            </div>
                            <span className="text-base leading-snug text-gray-200 font-medium">{item}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MethodologyComparison;
