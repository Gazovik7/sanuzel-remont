
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, FileSpreadsheet, Code2, Link as LinkIcon, 
  FileText, MousePointer, Activity, BarChart3, 
  ArrowRight
} from 'lucide-react';

const SERVICES = [
  { 
    id: 'competitors', 
    icon: Search, 
    title: 'Анализ конкурентов', 
    desc: 'Проводим анализ конкурентов больше, чем по 15 метрикам. Полученные данные мы используем в стратегии продвижения в поисковых системах.', 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'semantics', 
    icon: FileSpreadsheet, 
    title: 'Семантическое ядро', 
    desc: 'Собираем максимально полное семантическое ядро (без ограничения по количеству запросов), чистим его и кластеризуем согласно данным из ТОП-10.', 
    image: 'https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'audit', 
    icon: Code2, 
    title: 'Технический аудит', 
    desc: 'Проводим всесторонний аудит вашего сайта по собственному чек-листу из 21 направления технической оптимизации и проверяем результаты.', 
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'links', 
    icon: LinkIcon, 
    title: 'Внешняя оптимизация', 
    desc: 'Анализируем ссылочную стратегию лидеров и дорабатываем её под продвигаемый проект, затем реализуем посредством закупки ссылок.', 
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'content', 
    icon: FileText, 
    title: 'Работа с контентом', 
    desc: 'Проводим текстовый анализ сайтов из ТОП Яндекс и Google по ключевым запросам, пишем ТЗ для копирайтера и внедряем контент.', 
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'ux', 
    icon: MousePointer, 
    title: 'Анализ юзабилити', 
    desc: 'Повышаем конверсию и юзабилити, оптимизируем текстовое наполнение и код сайта. Учитываем особенности каждой сферы.', 
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d0f?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'pf', 
    icon: Activity, 
    title: 'Работа с ПФ', 
    desc: 'Для улучшения поведенческих факторов мы привлекаем маркетолога и аналитика, которые улучшают Last-клик на сайте.', 
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'analytics', 
    icon: BarChart3, 
    title: 'Аналитика', 
    desc: 'По окончанию месяца мы делаем отчет. Регулярная аналитика помогает вам понимать результаты нашей деятельности.', 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' 
  },
];

const ServicesIncluded: React.FC = () => {
  const [activeService, setActiveService] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate logic
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % SERVICES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleHover = (index: number) => {
    setIsAutoPlaying(false);
    setActiveService(index);
  };

  const ActiveIcon = SERVICES[activeService].icon;

  return (
    <section className="py-24 bg-[#F5F5F7] overflow-hidden" id="services">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        
        <div className="mb-16 md:mb-24">
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-[#09090b] mb-6">
                Что входит в <span className="text-[#D4AF37] italic">работу?</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
                Показываем, как выглядит наша работа изнутри. Реальные примеры отчетов, аудитов и документов.
            </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-20 items-start">
            
            {/* Left: Stable Interactive List */}
            <div className="space-y-3">
                {SERVICES.map((service, idx) => (
                    <div 
                        key={idx}
                        onMouseEnter={() => handleHover(idx)}
                        className={`group p-5 rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-between border ${
                            activeService === idx 
                            ? 'bg-white shadow-md border-transparent translate-x-2' 
                            : 'bg-transparent border-transparent hover:bg-white/50'
                        }`}
                    >
                        <div className="flex items-center gap-4">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                                activeService === idx ? 'bg-[#D4AF37] text-white' : 'bg-gray-200 text-gray-500'
                            }`}>
                                {idx + 1}
                            </div>
                            <h3 className={`font-bold text-base md:text-lg transition-colors ${activeService === idx ? 'text-[#09090b]' : 'text-gray-500'}`}>
                                {service.title}
                            </h3>
                        </div>
                        <ArrowRight 
                            size={16} 
                            className={`transition-all duration-300 ${
                                activeService === idx 
                                ? 'text-[#D4AF37] opacity-100' 
                                : 'text-gray-300 opacity-0 -translate-x-2'
                            }`} 
                        />
                    </div>
                ))}
            </div>

            {/* Right: The Workspace (Image Viewer) */}
            <div className="relative h-[500px] lg:h-[600px] w-full hidden lg:block sticky top-24">
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-[#E5E5EA] rounded-[2rem] transform rotate-2 scale-95 opacity-50"></div>
                
                {/* Main Window */}
                <div className="absolute inset-0 bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-200 z-10 flex flex-col">
                    {/* Header Bar */}
                    <div className="h-12 bg-white border-b border-gray-100 flex items-center px-6 justify-between shrink-0">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                        </div>
                        <div className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">
                            Preview Mode
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="relative flex-1 bg-gray-50 overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={activeService}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }} // Fast crossfade, no scale
                                className="absolute inset-0 w-full h-full flex flex-col"
                            >
                                {/* Image Container */}
                                <div className="flex-1 relative overflow-hidden">
                                    <img 
                                        src={SERVICES[activeService].image} 
                                        alt={SERVICES[activeService].title}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Gradient to text */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                                </div>

                                {/* Text Overlay (Stable at bottom) */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-20">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold mb-3 border border-white/20">
                                        <ActiveIcon size={12} />
                                        <span>Этап {activeService + 1}</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-medium mb-2">{SERVICES[activeService].title}</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed max-w-lg">
                                        {SERVICES[activeService].desc}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesIncluded;
