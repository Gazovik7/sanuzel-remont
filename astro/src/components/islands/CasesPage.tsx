import React, { useState } from 'react';
import { CASES_DATA } from '../landing/constants';
import { ArrowRight, BookOpen, TrendingUp, MapPin, Briefcase, Globe, BarChart3, Code } from 'lucide-react';
import { useModal } from '../landing/Modal';
import UniversalForm from './UniversalForm';
import Breadcrumbs from './Breadcrumbs';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = [
  { id: 'all', label: 'Все проекты', icon: BookOpen },
  { id: 'seo-ru', label: 'SEO в России', icon: MapPin },
  { id: 'seo-global', label: 'SEO за рубежом', icon: Globe },
  { id: 'ads', label: 'Реклама', icon: BarChart3 },
  { id: 'dev', label: 'Разработка', icon: Code },
];

const CasesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const { openModal } = useModal();

  const filteredCases = activeTab === 'all' 
    ? CASES_DATA 
    : CASES_DATA.filter(item => item.category === activeTab);

  const handleOpenCase = (itemTitle: string) => {
    openModal({
        title: 'Хочу такой же результат',
        subtitle: `Кейс: ${itemTitle}. Оставьте заявку, чтобы мы подготовили стратегию для вашего бизнеса.`,
        buttonText: 'Обсудить проект'
    });
  };

  return (
    <section className="relative pt-32 pb-24 bg-[#09090b] text-white overflow-hidden min-h-screen animate-fade-in">
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#D4AF37]/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/5 rounded-full blur-[150px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <Breadcrumbs 
            items={[{ label: 'Кейсы', href: '/portfolio' }]} 
            theme="light" 
          />
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 backdrop-blur-sm text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest mb-8">
             <BookOpen size={14} />
             <span>Портфолио Smirnov Marketing</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-sans font-bold text-white mb-8 leading-[1.1] tracking-tight">
            Наши <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">кейсы</span>
          </h1>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap gap-2 mb-16 bg-white/5 p-2 rounded-[2rem] border border-white/5 w-fit">
            {CATEGORIES.map((cat) => (
                <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                        activeTab === cat.id 
                        ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                    <cat.icon size={14} />
                    {cat.label}
                </button>
            ))}
        </div>

        {/* Cases Grid */}
        <motion.div 
            layout
            className="grid md:grid-cols-2 gap-8 mb-24"
        >
          <AnimatePresence mode="popLayout">
            {filteredCases.length > 0 ? filteredCases.map((item, idx) => (
                <motion.div 
                    key={item.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-[#D4AF37]/30 transition-all duration-500 flex flex-col h-full"
                >
                <div className="h-72 overflow-hidden relative">
                    <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 opacity-60" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent"></div>
                    
                    <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl">
                        <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold mb-1">Результат</div>
                        <div className="text-[#D4AF37] font-black text-xl flex items-center gap-2">
                            <TrendingUp size={18} />
                            {item.result}
                        </div>
                    </div>

                    <div className="absolute bottom-6 left-8 flex gap-2">
                        {item.geo && (
                            <span className="px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md text-white border border-white/10 flex items-center gap-1.5">
                                <MapPin size={10} className="text-[#D4AF37]" /> {item.geo}
                            </span>
                        )}
                        {item.niche && (
                            <span className="px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md text-white border border-white/10 flex items-center gap-1.5">
                                <Briefcase size={10} className="text-[#D4AF37]" /> {item.niche}
                            </span>
                        )}
                    </div>
                </div>
                
                <div className="p-10 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm font-light leading-relaxed mb-10 flex-grow">
                    {item.desc}
                    </p>
                    
                    <div className="flex gap-4 pt-8 border-t border-white/5">
                        <button 
                            onClick={() => handleOpenCase(item.title)}
                            className="flex-1 bg-[#D4AF37] hover:bg-white text-black py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#D4AF37]/10"
                        >
                            Хочу такой же результат
                        </button>
                        <a 
                            href={item.slug ? `/portfolio/${item.slug}/` : '/portfolio/'}
                            className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white/10 transition-all"
                        >
                            <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
                </motion.div>
            )) : (
                <div className="col-span-full py-20 text-center bg-white/5 rounded-[2.5rem] border border-dashed border-white/10">
                    <div className="text-gray-500 font-bold uppercase tracking-widest">В этой категории пока нет опубликованных кейсов</div>
                    <p className="text-gray-600 mt-2">Но мы уже работаем над ними!</p>
                </div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* CTA Block */}
        <div className="bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/10 p-12 md:p-20 text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-[80px]"></div>
           <div className="relative z-10">
               <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mb-8">Хотите стать нашим <span className="italic text-[#D4AF37]">следующим успехом?</span></h2>
               <p className="text-gray-400 text-lg font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                   Мы проанализируем ваш сайт, найдем точки роста и подготовим индивидуальную стратегию продвижения с финансовыми гарантиями.
               </p>
               <div className="max-w-md mx-auto">
                  <UniversalForm 
                      source="CasesPage_Bottom" 
                      buttonText="Получить аудит" 
                      variant="embedded"
                  />
               </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default CasesPage;