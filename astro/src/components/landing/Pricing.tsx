
import React from 'react';
import { PRICING_PLANS } from './constants';
import { Check, Zap, Rocket, Trophy, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useModal } from './Modal';

const Pricing: React.FC = () => {
  const { openModal } = useModal();

  return (
    <section id="pricing" className="py-24 bg-[#09090b] text-white relative overflow-hidden">
      {/* Decor */}
      <div className="absolute top-0 left-1/4 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#D4AF37/0.05,transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
        <div className="text-center mb-20">
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Стоимость услуг</span>
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mb-6">
                Инвестиции в <span className="italic text-gradient-gold">рост</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                Прозрачное ценообразование без скрытых платежей. Выберите подходящий тариф для масштабирования вашего бизнеса.
            </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`relative p-10 rounded-[3rem] border flex flex-col h-full transition-all duration-500 group ${
                        plan.isPopular 
                        ? 'bg-[#D4AF37]/10 border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.1)]' 
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                >
                    {plan.isPopular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-black text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-widest shadow-lg">
                            Популярный выбор
                        </div>
                    )}

                    <div className="mb-10">
                        <div className="flex items-center gap-3 mb-6">
                            {idx === 0 && <Zap className="text-gray-400" size={24} />}
                            {idx === 1 && <Rocket className="text-[#D4AF37]" size={24} />}
                            {idx === 2 && <Trophy className="text-yellow-500" size={24} />}
                            <h3 className="text-xl font-bold uppercase tracking-wider">{plan.title}</h3>
                        </div>
                        <div className="flex items-baseline gap-2 mb-4">
                            <div className="text-4xl lg:text-5xl font-serif font-medium text-white tracking-tight">{plan.price}</div>
                        </div>
                        <p className="text-gray-400 text-sm font-light leading-relaxed">
                            {plan.description}
                        </p>
                    </div>

                    <ul className="space-y-5 mb-12 flex-1">
                        {plan.features.map((feature, i) => (
                            <li key={i} className="flex gap-4 text-sm font-light leading-relaxed items-start group/item">
                                <div className={`mt-1 rounded-full p-0.5 flex items-center justify-center shrink-0 ${plan.isPopular ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'bg-white/10 text-gray-400'}`}>
                                    <Check size={12} strokeWidth={3} />
                                </div>
                                <span className="text-gray-300 group-hover/item:text-white transition-colors">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <button 
                        onClick={() => openModal({ title: `Тариф ${plan.title}`, subtitle: 'Оставьте заявку, и мы обсудим детали сотрудничества.' })}
                        className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl flex items-center justify-center gap-2 group/btn ${
                            plan.isPopular 
                            ? 'bg-[#D4AF37] text-black hover:bg-white' 
                            : 'bg-white text-black hover:bg-[#D4AF37]'
                        }`}
                    >
                        {plan.buttonText}
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
