
import React from 'react';
import { motion } from 'framer-motion';
import { useModal } from './Modal';
import { 
  BarChart3, 
  MousePointer2, 
  Users, 
  Search, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight,
  Sparkles,
  Bot
} from 'lucide-react';

const funnelSteps = [
  {
    icon: Search,
    title: "Захват ТОП-позиций",
    desc: "Выводим сайт на 1-ю страницу поисковиков по коммерческим запросам. Чем выше позиция, тем больше потенциальных клиентов видят ваш бренд.",
    color: "from-blue-500/20 to-blue-600/20",
    accent: "text-blue-400",
    tag: "SEO"
  },
  {
    icon: MousePointer2,
    title: "Борьба за клик (CTR)",
    desc: "Работаем над сниппетами: микроразметка, эмодзи, привлекательные заголовки. Делаем так, чтобы из 10 сайтов в выдаче выбрали именно ваш.",
    color: "from-purple-500/20 to-purple-600/20",
    accent: "text-purple-400",
    tag: "CTR"
  },
  {
    icon: BarChart3,
    title: "Конверсия в продажи",
    desc: "Анализируем поведение пользователей. Улучшаем UX/UI и техническую часть, чтобы превратить каждый клик в реальную заявку и прибыль.",
    color: "from-orange-500/20 to-orange-600/20",
    accent: "text-orange-400",
    tag: "ROI"
  },
  {
    icon: ShieldCheck,
    title: "Доверие и Репутация",
    desc: "Управляем репутацией (SERM): работаем с отзывами и рейтингами. Повышаем лояльность еще до того, как клиент перешел на сайт.",
    color: "from-emerald-500/20 to-emerald-600/20",
    accent: "text-emerald-400",
    tag: "SERM"
  },
  {
    icon: Bot,
    title: "Нейровыдача (AI Search)",
    desc: "Оптимизируем контент для попадания в ответы нейросетей (Perplexity, Gemini, SGE). Обеспечиваем присутствие бренда в поиске будущего.",
    color: "from-[#D4AF37]/20 to-[#F3E5AB]/20",
    accent: "text-[#D4AF37]",
    tag: "AI"
  }
];

const FullFunnelBlock: React.FC = () => {
  const { openModal } = useModal();

  return (
    <section className="py-24 bg-[#09090b] text-white overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1a1a1a,transparent)] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
        
        <div className="text-center mb-20">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-bold uppercase tracking-[0.3em] mb-6"
            >
                <Sparkles size={14} className="text-[#D4AF37]" />
                Комплексный подход
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-serif font-medium leading-tight mb-6">
                Работаем над <span className="italic text-gradient-gold text-white">всей воронкой</span> <br/>
                цифровых продаж
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
                Мы не просто «двигаем ключи». Мы строим систему, где каждый этап — от первого показа в поиске до нажатия кнопки «Купить» — работает на ваш результат.
            </p>
        </div>

        {/* Funnel Visualization */}
        <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
                {funnelSteps.map((step, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative"
                    >
                        {/* Step Card */}
                        <div className="h-full bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 hover:bg-white/[0.05] hover:border-[#D4AF37]/30 transition-all duration-500 flex flex-col items-center text-center">
                            
                            {/* Icon Circle */}
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 relative`}>
                                <step.icon size={28} className={step.accent} />
                                {/* Number Badge */}
                                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#09090b] border border-white/10 flex items-center justify-center text-[10px] font-black">
                                    0{idx + 1}
                                </div>
                            </div>

                            <div className="mb-4">
                                <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded bg-white/5 border border-white/10 ${step.accent}`}>
                                    {step.tag}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-white transition-colors">
                                {step.title}
                            </h3>
                            
                            <p className="text-gray-500 text-sm leading-relaxed font-light group-hover:text-gray-400 transition-colors">
                                {step.desc}
                            </p>

                            {/* Arrow Indicator (Desktop) */}
                            {idx < funnelSteps.length - 1 && (
                                <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 items-center justify-center text-white/20 group-hover:text-[#D4AF37] transition-colors">
                                    <ArrowRight size={20} />
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Results Info */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-20 p-8 rounded-[2.5rem] bg-gradient-to-r from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 flex flex-col md:flex-row items-center justify-between gap-8"
        >
            <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center shrink-0 shadow-lg shadow-[#D4AF37]/20">
                    <TrendingUp size={32} className="text-black" />
                </div>
                <div>
                    <h4 className="text-xl md:text-2xl font-bold mb-1">Итоговый результат: Рост ROI</h4>
                    <p className="text-gray-400 text-sm md:text-base">Комплексная работа над всеми этапами дает кратный рост прибыли, а не просто красивые графики трафика.</p>
                </div>
            </div>
            <button 
                onClick={() => openModal({ title: 'Обсудить стратегию', subtitle: 'Мы проанализируем вашу нишу и предложим пошаговый план роста ROI.' })}
                className="px-8 py-4 rounded-xl bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-[#D4AF37] hover:scale-105 transition-all shadow-xl"
            >
                Обсудить стратегию
            </button>
        </motion.div>

      </div>
    </section>
  );
};

export default FullFunnelBlock;
