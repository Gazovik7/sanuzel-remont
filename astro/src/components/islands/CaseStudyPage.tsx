
import React, { useEffect, useState } from 'react';
import { ArrowLeft, TrendingUp, CheckCircle2, User, AlertCircle, Send, ArrowRight, ChevronRight, ShieldAlert, Home, BookOpen, Clock, Briefcase, Calendar, Users, ChartBar, Quote, Sparkles, Search, MessageCircle } from 'lucide-react';
import { useModal } from '../landing/Modal';
import UniversalForm from './UniversalForm';
import { CaseStudyData } from '../landing/types';
import { CASES } from '../landing/constants';
import BeforeAfter from './BeforeAfter';

interface CaseStudyPageProps {
  data: CaseStudyData;
  onBack: () => void;
  onNavigateToCase?: (id: string) => void;
}

// --- MOCKUP COMPONENTS ---

const AuditTableMockup = () => (
  <div className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm text-[10px] font-mono select-none">
    <div className="bg-gray-50 border-b border-gray-200 px-3 py-2 flex gap-2">
      <div className="w-3 h-3 rounded-full bg-red-400"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
      <div className="w-3 h-3 rounded-full bg-green-400"></div>
    </div>
    <div className="p-2">
      <div className="grid grid-cols-4 gap-2 font-bold text-gray-400 border-b border-gray-100 pb-1 mb-1">
        <span>Категория</span>
        <span>Выручка</span>
        <span>Упущ.</span>
        <span>Статус</span>
      </div>
      {[
        { name: "Растения", val: "320к", lost: "150к", stat: "Низкий CTR", color: "text-red-500" },
        { name: "Кашпо", val: "180к", lost: "40к", stat: "Нет ключей", color: "text-orange-500" },
        { name: "Цветы", val: "104к", lost: "80к", stat: "Дорогой клик", color: "text-red-500" },
      ].map((row, i) => (
        <div key={i} className="grid grid-cols-4 gap-2 py-1 border-b border-gray-50 text-gray-600">
          <span>{row.name}</span>
          <span>{row.val}</span>
          <span className="text-gray-400">{row.lost}</span>
          <span className={`font-bold ${row.color}`}>{row.stat}</span>
        </div>
      ))}
    </div>
  </div>
);

const UnitEconomyMockup = () => (
  <div className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm text-[10px] select-none">
    <div className="p-3 bg-green-50 border-b border-green-100 flex justify-between items-center">
        <span className="font-bold text-green-700">Юнит-экономика v2.0</span>
        <span className="bg-green-200 text-green-800 px-2 py-0.5 rounded text-[9px]">Оптимизировано</span>
    </div>
    <div className="p-3 space-y-2">
       <div className="flex justify-between items-center">
          <span className="text-gray-500">Себестоимость</span>
          <span className="font-mono">850 ₽</span>
       </div>
       <div className="flex justify-between items-center">
          <span className="text-gray-500">Логистика + Комиссия</span>
          <span className="font-mono text-red-400">-450 ₽</span>
       </div>
       <div className="flex justify-between items-center">
          <span className="text-gray-500">Реклама (ДРР)</span>
          <span className="font-mono text-orange-400">-15%</span>
       </div>
       <div className="border-t border-gray-100 pt-2 flex justify-between items-center font-bold">
          <span className="text-gray-800">Маржа</span>
          <span className="text-green-600">+420 ₽ (22%)</span>
       </div>
    </div>
  </div>
);

const GraphMockup = ({ type = 'growth', data }: { type?: 'growth' | 'ads', data?: number[] }) => {
  const chartValues = data || (type === 'growth' ? [20, 25, 30, 22, 40, 55, 65, 80, 95] : [80, 70, 60, 50, 40, 35, 30, 25, 20]);
  
  return (
    <div className="w-full h-32 bg-white rounded-xl border border-gray-200 p-3 flex items-end gap-1 relative overflow-hidden">
        {chartValues.map((h, i) => (
            <div 
                key={i} 
                className={`flex-1 rounded-t-sm ${type === 'growth' ? 'bg-blue-500 opacity-80' : 'bg-red-400 opacity-60'}`} 
                style={{ height: `${h}%` }}
            ></div>
        ))}
        <div className={`absolute top-2 ${type === 'growth' ? 'left-2 text-blue-600 bg-blue-50' : 'right-2 text-red-600 bg-red-50'} text-[10px] font-bold px-2 py-1 rounded`}>
            {type === 'growth' ? 'Рост показателей' : 'Оптимизация расходов'}
        </div>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const TelegramEmbed = () => (
    <div className="my-12 bg-[#2AABEE]/5 border border-[#2AABEE]/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#2AABEE]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md text-[#2AABEE] shrink-0 z-10">
            <Send size={32} className="ml-1" />
        </div>
        <div className="flex-1 text-center sm:text-left z-10">
            <h4 className="text-lg font-bold text-gray-900 mb-1">Хотите больше таких кейсов?</h4>
            <p className="text-sm text-gray-600">
                Подпишитесь на наш Telegram-канал. Делимся внутренней кухней, лайфхаками и отчетами каждую неделю.
            </p>
        </div>
        <a href="https://t.me/mpagencyru" target="_blank" rel="noreferrer" className="bg-[#2AABEE] hover:bg-[#229ED9] text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-400/30 shrink-0 z-10 flex items-center gap-2">
            Подписаться <ArrowRight size={16} />
        </a>
    </div>
);

const RelatedCases = ({ currentId, onNavigate }: { currentId: string, onNavigate?: (id: string) => void }) => {
    const otherCases = CASES.filter(c => c.id !== currentId).slice(0, 2);
    if (otherCases.length === 0) return null;

    return (
        <div className="mt-16 border-t border-gray-200 pt-12">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Читайте также</h3>
            <div className="grid md:grid-cols-2 gap-6">
                {otherCases.map((item, idx) => (
                    <div key={idx} className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-primary/30 hover:shadow-xl transition-all cursor-pointer" onClick={() => onNavigate && item.id && onNavigate(item.id)}>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{item.period}</span>
                            <span className="text-green-600 font-bold text-xs bg-green-50 px-2 py-1 rounded">{item.result}</span>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{item.description}</p>
                        <div className="text-primary text-sm font-bold flex items-center gap-1">
                            Читать кейс <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- MAIN PAGE ---

const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ data, onBack, onNavigateToCase }) => {
  const { openModal } = useModal();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!data) return <div className="p-10 text-center">Case data not found</div>;

  const renderArtifact = (type?: string) => {
      switch(type) {
          case 'audit-table': return <AuditTableMockup />;
          case 'unit-economy': return <UnitEconomyMockup />;
          case 'ads-graph': return <GraphMockup type="ads" />;
          default: return null;
      }
  };

  const getIcon = (iconName: string) => {
      switch(iconName) {
          case 'fire': return '🔥';
          case 'chart': return '📉';
          case 'rocket': return '🚀';
          case 'check': return '✅';
          default: return '✅';
      }
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-20 animate-fade-in text-gray-900 font-sans">
      
      {/* 1. Progress Bar */}
      <div className="fixed top-[72px] left-0 h-1 bg-primary z-50 transition-all duration-100 ease-out" style={{ width: `${scrollProgress * 100}%` }} />

      {/* 2. Sticky Header */}
      <div className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-[72px] z-40 transition-all">
        <div className="container mx-auto max-w-5xl px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button 
                onClick={onBack}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors text-gray-600"
                title="Назад"
            >
               <ArrowLeft size={18} />
            </button>
            <div className="hidden md:flex items-center gap-2 text-xs font-medium text-gray-500">
                <span className="cursor-pointer hover:text-gray-900" onClick={onBack}><Home size={12} className="inline mb-0.5" /> Главная</span>
                <ChevronRight size={12} />
                <span className="cursor-pointer hover:text-gray-900" onClick={onBack}>Кейсы</span>
                <ChevronRight size={12} />
                <span className="text-gray-900 truncate max-w-[150px]">{data.hero.title}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
             <span className="text-xs font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full hidden sm:inline-block">
                {data.hero.mainResult}
             </span>
             <button 
                onClick={() => openModal({ title: 'Обсудить проект', subtitle: `Хочу результат как в кейсе: ${data.hero.title}`, extraFields: { case: data.hero.title } })}
                className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-black transition-colors shadow-lg shadow-gray-900/20"
             >
                Хочу так же
             </button>
          </div>
        </div>
      </div>

      <article className="container mx-auto max-w-5xl px-4 py-8 md:py-12">
         
         {/* 3. HERO BLOCK */}
         <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-6">
                    {data.hero.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-bold uppercase tracking-wider last:bg-purple-100 last:text-purple-700">
                            {tag}
                        </span>
                    ))}
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-8 text-gray-900 tracking-tight">
                   {data.hero.title}
                </h1>
                <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 items-start">
                    <div className="text-lg text-gray-600 leading-relaxed space-y-4">
                        <p>{data.hero.subtitle}</p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                        <div className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-4">Ключевой результат</div>
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-5xl font-black text-gray-900">{data.hero.mainResult}</span>
                            <span className="text-green-600 font-bold text-lg flex items-center"><TrendingUp size={20} className="mr-1"/> Рост</span>
                        </div>
                        <p className="text-sm text-gray-600">{data.hero.mainResultLabel}</p>
                    </div>
                </div>
            </div>
         </div>

         {/* 4. PASSPORT (CONTEXT) */}
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white p-5 rounded-2xl border border-gray-100 text-center md:text-left">
                <div className="text-gray-400 text-xs font-bold uppercase mb-1 flex items-center justify-center md:justify-start gap-1"><User size={12}/> Клиент</div>
                <div className="font-bold text-gray-900 text-sm md:text-base">{data.passport.clientName}</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100 text-center md:text-left">
                <div className="text-gray-400 text-xs font-bold uppercase mb-1 flex items-center justify-center md:justify-start gap-1"><Briefcase size={12}/> Ниша</div>
                <div className="font-bold text-gray-900 text-sm md:text-base">{data.passport.niche}</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100 text-center md:text-left">
                <div className="text-gray-400 text-xs font-bold uppercase mb-1 flex items-center justify-center md:justify-start gap-1"><Calendar size={12}/> Срок</div>
                <div className="font-bold text-gray-900 text-sm md:text-base">{data.passport.timeline}</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100 text-center md:text-left">
                <div className="text-gray-400 text-xs font-bold uppercase mb-1 flex items-center justify-center md:justify-start gap-1"><Users size={12}/> Команда</div>
                <div className="font-bold text-gray-900 text-sm md:text-base">{data.passport.teamSize} специалистов</div>
            </div>
         </div>

         {/* 5. CHALLENGE & AUDIT */}
         <div className="grid md:grid-cols-2 gap-6 mb-20">
             <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 h-full flex flex-col">
                 <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Search className="text-gray-400" />
                    {data.challenge.title}
                 </h2>
                 <p className="text-gray-600 mb-6 flex-1">
                    {data.challenge.description}
                 </p>
                 {data.challenge.conditions.length > 0 && (
                    <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                        <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                            <AlertCircle size={20} />
                            Задачи и условия:
                        </h3>
                        <ul className="space-y-3">
                            {data.challenge.conditions.map((item, i) => (
                                <li key={i} className="flex gap-3 items-start text-red-700/80 text-sm font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                 )}
             </div>

             <div className="bg-gray-900 text-white rounded-3xl p-8 shadow-xl h-full flex flex-col justify-between relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
                 <div>
                    <h2 className="text-2xl font-bold mb-6">Диагностика на старте</h2>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        {data.challenge.initialStats.map((stat, i) => (
                            <div key={i} className={`bg-white/10 rounded-xl p-4 backdrop-blur-sm border ${stat.isBad ? 'border-red-500/30' : 'border-white/10'}`}>
                                <div className="text-gray-400 text-xs uppercase font-bold mb-1">{stat.label}</div>
                                <div className={`text-xl font-mono font-bold ${stat.isBad ? 'text-red-400' : 'text-white'}`}>{stat.value}</div>
                            </div>
                        ))}
                    </div>
                    <h3 className="font-bold text-gray-300 mb-4">Выявленные проблемы:</h3>
                    <ul className="space-y-4">
                        {data.challenge.problems.map((item, i) => (
                             <li key={i} className="flex gap-3">
                                 <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</div>
                                 <div>
                                     <div className="font-bold text-white text-sm">{item.title}</div>
                                     <div className="text-gray-400 text-xs">{item.description}</div>
                                 </div>
                             </li>
                        ))}
                    </ul>
                 </div>
                 {data.challenge.quote && (
                     <div className="mt-8 pt-6 border-t border-white/10 text-sm text-gray-400 italic">
                        "{data.challenge.quote}"
                     </div>
                 )}
             </div>
         </div>

         {/* 6. STRATEGY & PROCESS - REDESIGNED (ARTICLE STYLE) */}
         <div className="max-w-4xl mx-auto mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">{data.strategy.title}</h2>
                <p className="text-xl text-gray-500 leading-relaxed">{data.strategy.description}</p>
            </div>

            <div className="space-y-16">
                {data.strategy.steps.map((step, index) => {
                    const hasComparison = step.beforeImage && step.afterImage;
                    const hasVisual = hasComparison || (step.artifactType && step.artifactType !== 'none') || step.image;

                    return (
                        <div key={index} className="flex flex-col gap-6">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold shrink-0">
                                        {index + 1}
                                    </span>
                                    {step.title}
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed pl-11">
                                    {step.description}
                                </p>
                            </div>

                            {step.resultTag && (
                                <div className="pl-11">
                                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-50 text-green-700 font-bold text-sm border border-green-100">
                                        <CheckCircle2 size={16} />
                                        {step.resultTag}
                                    </span>
                                </div>
                            )}

                            {hasVisual && (
                                <div className="pl-0 md:pl-11 mt-2">
                                    <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-white">
                                        {hasComparison ? (
                                            <div className="h-[300px] sm:h-[400px] md:h-[500px]">
                                                <BeforeAfter 
                                                    beforeImage={step.beforeImage!} 
                                                    afterImage={step.afterImage!} 
                                                    className="w-full h-full"
                                                />
                                            </div>
                                        ) : step.image ? (
                                            <img src={step.image} alt={step.title} className="w-full h-auto object-cover" />
                                        ) : (
                                            <div className="p-4 md:p-8 bg-gray-50">
                                                {renderArtifact(step.artifactType)}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
         </div>
         
         <TelegramEmbed />

         {/* 7. RESULTS (DARK MODE BLOCK) */}
         <div className="bg-[#0F172A] rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden mb-16">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-900/30 rounded-full blur-[100px] pointer-events-none"></div>
             <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-black text-center mb-12">{data.results.title}</h2>
                
                {/* Before / After Header */}
                <div className="flex justify-between items-end max-w-4xl mx-auto mb-10 border-b border-gray-700 pb-6">
                    <div className="text-left">
                        <div className="text-sm text-gray-400 font-bold uppercase mb-1">{data.results.beforePeriod}</div>
                        <div className="text-2xl font-bold text-gray-500">{data.results.finalRevenue.before}</div>
                    </div>
                    <div className="bg-green-500 text-white text-lg font-bold px-4 py-1 rounded-full shadow-lg shadow-green-500/20 animate-pulse hidden sm:block">
                        {data.results.finalRevenue.growthPercent}
                    </div>
                    <div className="text-right">
                        <div className="text-sm text-green-400 font-bold uppercase mb-1">{data.results.afterPeriod}</div>
                        <div className="text-3xl md:text-5xl font-black text-white">{data.results.finalRevenue.after}</div>
                    </div>
                </div>

                {/* Graph */}
                <div className="max-w-3xl mx-auto bg-white/5 rounded-2xl p-6 border border-white/10 mb-10">
                    <div className="h-40 flex items-end gap-2">
                         {data.results.afterChartData.map((h, i) => (
                             <div key={i} className="flex-1 flex flex-col justify-end h-full gap-1 group cursor-default">
                                 <div 
                                    className="w-full bg-gradient-to-t from-green-500 to-green-300 rounded-t-sm opacity-80 transition-all group-hover:opacity-100"
                                    style={{ height: `${h}%` }}
                                 ></div>
                             </div>
                         ))}
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-2 font-mono">
                        <span>Старт работ</span>
                        <span className="uppercase tracking-widest font-bold">Рост выручки</span>
                        <span>Финал</span>
                    </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {data.results.metrics.map((metric, i) => (
                        <div key={i} className="bg-gray-800/50 p-5 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors group">
                            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform origin-left">{getIcon(metric.icon)}</div>
                            <div className="font-bold text-white text-sm mb-1">{metric.label}</div>
                            <div className="text-green-400 text-lg font-bold">{metric.value}</div>
                            {metric.subValue && <div className="text-xs text-gray-500 mt-1">{metric.subValue}</div>}
                        </div>
                    ))}
                </div>

                {/* Moment of Truth */}
                {data.results.momentOfTruth && (
                    <div className="mt-10 bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-2xl border border-white/10 text-center">
                        <Sparkles className="inline-block text-yellow-400 mb-2" size={20} />
                        <p className="text-lg italic font-light text-gray-200 max-w-3xl mx-auto">
                            "{data.results.momentOfTruth}"
                        </p>
                    </div>
                )}
             </div>
         </div>

         {/* 8. INSIGHTS & RECOMMENDATIONS */}
         <div className="mb-16">
            <h2 className="text-3xl font-black text-center mb-10 text-gray-900">Рекомендации для ниши</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {data.lessons.businessTakeaways && data.lessons.businessTakeaways.length > 0 && (
                    <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-3xl p-8 shadow-lg relative overflow-hidden h-full">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                        <h3 className="font-bold text-xl mb-6 relative z-10 flex items-center gap-2">
                           <BookOpen className="text-white/80" /> Стратегия успеха
                        </h3>
                        <ul className="space-y-4 relative z-10 text-white/90">
                        {data.lessons.businessTakeaways.map((lesson, i) => (
                            <li key={i} className="flex gap-3 items-start text-sm md:text-base leading-relaxed">
                                <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0"></div>
                                <span>{lesson}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                )}
                
                {/* Author Card in Recommendations Section */}
                <div className="bg-white rounded-3xl p-8 border border-gray-200 h-full flex flex-col justify-center">
                     <div className="flex items-center gap-4 mb-6">
                         <img src={data.author.image} alt={data.author.name} className="w-20 h-20 rounded-full object-cover border-4 border-gray-50 shadow-md" />
                         <div>
                             <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">{data.author.role}</div>
                             <div className="font-bold text-gray-900 text-2xl">{data.author.name}</div>
                         </div>
                     </div>
                     <div className="relative bg-gray-50 p-6 rounded-2xl">
                        <Quote className="absolute top-4 left-4 text-gray-300 transform -scale-x-100" size={24} fill="currentColor" />
                        <p className="text-gray-600 italic relative z-10 pl-4 pt-2">
                           {data.author.quote || "В этой нише критически важно работать с визуалом и SEO одновременно. Одного без другого недостаточно для кратного роста."}
                        </p>
                     </div>
                </div>
            </div>
         </div>

         {/* 10. CTA & RELATED */}
         <RelatedCases currentId={data.id} onNavigate={onNavigateToCase} />

         <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden text-white shadow-2xl mt-12">
             <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
             
             <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center relative z-10">
                 <div className="text-left space-y-6">
                    <div>
                       <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold border border-white/20 mb-6 shadow-lg">
                          <Clock size={16} />
                          <span>Отвечаем за 15 минут</span>
                       </div>
                       <h2 className="text-3xl md:text-4xl font-black leading-tight mb-4">
                          Готовы повторить этот результат?
                       </h2>
                       <p className="text-lg text-purple-100 leading-relaxed">
                          Напишите нам — мы не боимся вызовов и умеем превращать хаос в прибыль.
                       </p>
                    </div>
                 </div>
                 <div className="bg-white rounded-3xl shadow-2xl shadow-purple-900/40 p-6 md:p-8 text-gray-900">
                       <div className="mb-6">
                          <h3 className="text-2xl font-black text-gray-900 mb-2">Обсудить проект</h3>
                          <p className="text-gray-500 text-sm">Заполните форму, чтобы получить бесплатный аудит магазина.</p>
                       </div>
                       <UniversalForm 
                          source="CaseStudyPage_Bottom" 
                          variant="embedded" 
                          showUrlField={true}
                          buttonText="Отправить заявку"
                       />
                 </div>
             </div>
         </div>
      </article>
    </div>
  );
};

export default CaseStudyPage;
