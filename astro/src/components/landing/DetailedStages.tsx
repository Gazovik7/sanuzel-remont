
import React from 'react';
import { motion } from 'framer-motion';
import { DETAILED_STAGES } from './constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const DetailedStages: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="stages">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Наш процесс</span>
                <h2 className="text-4xl md:text-6xl font-serif font-medium text-[#09090b] mb-6 leading-tight">
                    Поэтапный план <br/> <span className="italic text-[#D4AF37]">захвата рынка</span>
                </h2>
                <p className="text-gray-500 text-lg font-light leading-relaxed">
                    Мы не работаем вслепую. Каждый этап имеет четкие KPI и результаты, которые вы видите в режиме реального времени.
                </p>
            </div>
            <div className="hidden lg:flex items-center gap-4 text-gray-300 font-bold uppercase tracking-[0.2em] text-[10px]">
                <span>Analysis</span>
                <ArrowRight size={14} />
                <span>Strategy</span>
                <ArrowRight size={14} />
                <span>Growth</span>
            </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DETAILED_STAGES.map((stage, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:border-[#D4AF37]/20 transition-all duration-500 relative overflow-hidden"
                >
                    {/* Step Number Backdrop */}
                    <div className="absolute -top-4 -right-4 text-9xl font-black text-gray-200/50 group-hover:text-[#D4AF37]/5 transition-colors select-none pointer-events-none font-serif italic">
                        {stage.num}
                    </div>

                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:text-black transition-all">
                            <span className="font-black text-sm">{stage.num}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-[#09090b] mb-4 group-hover:text-[#D4AF37] transition-colors">
                            {stage.title}
                        </h3>
                        
                        <p className="text-gray-500 text-sm leading-relaxed font-light group-hover:text-gray-600">
                            {stage.desc}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-[#09090b] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                    <CheckCircle2 size={24} />
                </div>
                <p className="text-sm font-medium max-w-md">Вы получаете подробные отчеты по каждому этапу в конце каждого месяца.</p>
            </div>
            <button className="px-8 py-4 rounded-xl bg-white text-black font-black uppercase tracking-widest text-[10px] hover:bg-[#D4AF37] transition-all">
                Как мы работаем?
            </button>
        </div>
      </div>
    </section>
  );
};

export default DetailedStages;
