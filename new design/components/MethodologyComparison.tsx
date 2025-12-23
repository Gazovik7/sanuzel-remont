
import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';

const STANDARD_APPROACH = [
  'Автоматическая закупка ссылок на биржах',
  'Написание SEO-текстов ради вхождения ключей',
  'Автоматизированный технический аудит (роботом)',
  'Составление красивых автоматических отчетов без выводов',
  'Работа "на потоке", менеджер ведет 20+ проектов',
];

const OUR_METHOD = [
  'Ручной отбор лучших площадок для внешней оптимизации',
  'Комплексный анализ всех текстовых зон (LSI, TF-IDF) в сравнении с ТОП-10',
  'Анализ прямых и косвенных конкурентов для улучшения конверсии',
  'Ежедневный контроль технического состояния специалистом',
  'Сбор полного семантического ядра (включая НЧ запросы)',
  'Глубокая аналитика и проверка гипотез роста',
];

const MethodologyComparison: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        
        {/* Header */}
        <div className="max-w-4xl mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#09090b] mb-6 leading-tight">
                Собственная <span className="italic text-[#D4AF37]">методология</span> <br/> продвижения
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed font-light">
                Наш подход к раскрутке сайтов в корне отличается от классического SEO в потоковых агентствах. 
                Мы не просто присылаем отчеты, а выполняем большой объем аналитической работы. 
                От достижения ваших бизнес-целей напрямую зависит доход всей нашей команды.
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Left: Standard Agency (The "Old" Way) */}
            <div className="bg-[#F5F5F7] rounded-[2rem] p-8 md:p-12 flex flex-col border border-transparent hover:border-gray-200 transition-colors">
                <div className="mb-8">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Рынок</span>
                    <h3 className="text-2xl font-serif font-bold text-gray-500">Подход обычных SEO-агентств</h3>
                </div>
                
                <ul className="space-y-6 flex-1">
                    {STANDARD_APPROACH.map((item, idx) => (
                        <li key={idx} className="flex gap-4 items-start text-gray-500">
                            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center shrink-0 mt-0.5">
                                <X size={14} className="text-gray-500" />
                            </div>
                            <span className="text-base leading-snug">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right: Wheel of Balance (The Premium Way) */}
            <div className="bg-[#09090b] rounded-[2rem] p-8 md:p-12 flex flex-col text-white shadow-2xl relative overflow-hidden group">
                {/* Gold Glow Effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#D4AF37]/20 transition-all duration-500"></div>
                
                <div className="mb-8 relative z-10">
                    <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-2 block">Smirnov.Marketing</span>
                    <h3 className="text-2xl font-serif font-bold text-white">Метод «Колесо баланса сайта»</h3>
                </div>
                
                <ul className="space-y-6 flex-1 relative z-10">
                    {OUR_METHOD.map((item, idx) => (
                        <li key={idx} className="flex gap-4 items-start">
                            <div className="w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5 shadow-lg shadow-[#D4AF37]/30">
                                <Check size={14} className="text-[#09090b] stroke-[3]" />
                            </div>
                            <span className="text-base leading-snug text-gray-200 font-medium">{item}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                    <div className="flex items-center gap-2 text-[#D4AF37] text-sm font-bold uppercase tracking-widest">
                        Результат <ArrowRight size={16} />
                        <span className="text-white">Лидерство в нише</span>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default MethodologyComparison;
