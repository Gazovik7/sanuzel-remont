import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { ModalProvider, useModal } from './Modal';
import RequestModal from './RequestModal';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, HelpCircle, Star, Search, Send, MessageCircle, Phone, Globe, Cpu, Gauge, ShieldCheck as ShieldIcon, MousePointer2, TrendingUp, BarChart, Zap, Bot, Store, PhoneCall, Clock, Check, X } from 'lucide-react';
import UniversalForm from '../islands/UniversalForm';
import Breadcrumbs from '../islands/Breadcrumbs';
import { HERO_TICKER, FAQS } from './constants';

// Imports for common blocks
import CasesResults from './CasesResults';
import CasesSlider from './CasesSlider';
import WheelOfBalance from './WheelOfBalance';
import ReviewsBlock from './ReviewsBlock';
import SeoCalculator from './SeoCalculator';
import AwardsBlock from './AwardsBlock';
import MediaBlock from './MediaBlock';
import Team from './Team';
import SeoSpoiler from './SeoSpoiler';
import YoutubeBlock from './YoutubeBlock';
import FAQ from './FAQ';
import DiscussProject from './DiscussProject';
import CmsLinks from './CmsLinks';
import GeoLinks from './GeoLinks';
import Clients from '../islands/Clients';

interface ServiceModernPageProps {
  data: any;
  pathname?: string;
}

const getWedgePath = (index: number, total: number, radius: number) => {
    const startAngle = (index * 360) / total;
    const endAngle = ((index + 1) * 360) / total;
    const startRad = (startAngle - 90) * (Math.PI / 180);
    const endRad = (endAngle - 90) * (Math.PI / 180);
    const x1 = 150 + radius * Math.cos(startRad);
    const y1 = 150 + radius * Math.sin(startRad);
    const x2 = 150 + radius * Math.cos(endRad);
    const y2 = 150 + radius * Math.sin(endRad);
    return `M150,150 L${x1},${y1} A${radius},${radius} 0 0,1 ${x2},${y2} Z`;
};

const WebDevDashboard = () => (
    <motion.div initial={{ rotateY: 15, rotateX: 5, opacity: 0 }} animate={{ rotateY: -5, rotateX: 5, opacity: 1 }} transition={{ duration: 1.2, ease: "easeOut" }} className="relative w-[520px] h-[440px] bg-[#09090b]/40 backdrop-blur-2xl border border-[#D4AF37]/20 rounded-[2.5rem] p-8 shadow-[0_0_50px_rgba(212,175,55,0.1)] overflow-hidden font-sans">
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="relative z-10 flex items-center gap-3 mb-8 bg-white/5 p-3 rounded-xl border border-white/5">
            <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div><div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div><div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div></div>
            <div className="flex-1 bg-black/40 rounded-md px-4 py-1.5 text-[10px] text-[#D4AF37] font-mono tracking-widest flex items-center gap-2"><Globe size={10} /> www.ваш-новый-сайт.рф</div>
        </div>
        <div className="grid grid-cols-[1fr_180px] gap-8 relative z-10">
            <div className="bg-white/5 border border-white/5 rounded-2xl p-5 relative overflow-hidden h-[240px]">
                <div className="text-[9px] font-bold text-gray-400 uppercase mb-4 flex items-center gap-2"><TrendingUp size={12} className="text-[#D4AF37]" /> Динамика лидов</div>
                <svg viewBox="0 0 200 100" className="w-full h-32 mt-4 overflow-visible">
                    <path d="M0,90 Q40,85 80,60 T160,20" fill="none" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="160" cy="20" r="4" fill="#D4AF37" />
                </svg>
                <div className="absolute bottom-5 right-5 text-right"><div className="text-3xl font-black text-white">+124%</div><div className="text-[8px] font-bold text-[#D4AF37] uppercase tracking-widest">Рост конверсии</div></div>
            </div>
            <div className="space-y-4">
                <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-2">Технический аудит</div>
                {[{ label: 'SEO Структура', s: 'OK' }, { label: 'Скорость', s: '0.3s' }, { label: 'PageSpeed', s: '99' }, { label: 'UX Проверка', s: 'OK' }].map((item, i) => (
                    <div key={i} className="bg-white/5 border border-white/5 rounded-xl p-3 group hover:bg-[#D4AF37]/5 transition-colors"><div className="flex justify-between items-center"><span className="text-[8px] font-bold text-gray-400 uppercase">{item.label}</span><span className="text-[8px] font-black text-[#D4AF37]">{item.s}</span></div></div>
                ))}
            </div>
        </div>
        <div className="mt-8 flex justify-center items-center border-t border-white/10 pt-8 relative z-10"><div className="flex items-center gap-12"><div className="flex flex-col items-center"><span className="text-[8px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-2">Mobile Performance</span><span className="text-sm font-black text-white">100 / 100</span></div><div className="w-px h-8 bg-white/10"></div><div className="flex flex-col items-center"><span className="text-[8px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-2">Google E-E-A-T</span><span className="text-sm font-black text-[#D4AF37]">Compliant</span></div></div></div>
    </motion.div>
);

const AdsDashboard = () => (
    <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="relative w-[500px] h-[420px] bg-[#09090b]/60 backdrop-blur-2xl border border-blue-500/20 rounded-[2rem] p-8 shadow-2xl overflow-hidden font-sans text-white">
        <div className="flex items-center justify-between mb-10 text-white">
            <div className="flex items-center gap-3"><div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400"><BarChart size={20} /></div><div><div className="text-white font-bold text-sm leading-none mb-1">Рекламный кабинет</div><div className="text-[8px] text-gray-500 uppercase tracking-widest">Аналитика окупаемости</div></div></div>
            <div className="text-right text-[10px] font-black text-green-400 uppercase tracking-widest">ROAS: 450%</div>
        </div>
        <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-2xl p-5 border border-white/5"><div className="text-[8px] text-gray-500 uppercase mb-2">Показы / Охват</div><div className="text-2xl font-black text-white">1.2M</div><div className="h-1 bg-white/5 rounded-full mt-3 overflow-hidden"><div className="h-full w-[80%] bg-blue-500"></div></div></div>
                <div className="bg-white/5 rounded-2xl p-5 border border-white/5"><div className="text-[8px] text-gray-500 uppercase mb-2">Цена клика (CPC)</div><div className="text-2xl font-black text-white">12.4 руб</div><div className="text-[8px] text-green-400 mt-2">-15% за месяц</div></div>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/5 relative overflow-hidden">
                <div className="text-[9px] font-bold text-gray-400 uppercase mb-6">Воронка продаж</div>
                <div className="space-y-4">
                    {[{ l: 'Клики', v: 45000 }, { l: 'Лиды', v: 3800 }, { l: 'Продажи', v: 1200 }].map((item, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <div className="w-20 text-[8px] font-black text-gray-500 uppercase">{item.l}</div>
                            <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: `${100 - i * 25}%` }} transition={{ delay: 0.5 + i * 0.2 }} className="h-full bg-blue-500/50 border-r-2 border-blue-400" /></div>
                            <div className="w-12 text-[10px] font-bold text-white text-right">{item.v}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);

const AiDashboard = () => (
    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative w-[500px] h-[440px] bg-[#09090b]/80 backdrop-blur-2xl border border-purple-500/20 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden font-sans text-white">
        <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-6 text-white">
            <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 border border-purple-500/30"><Bot size={20} /></div>
            <div className="text-sm font-bold text-white uppercase tracking-widest">AI Marketing Engine v2.0</div>
        </div>
        <div className="space-y-4 font-mono text-white">
            <div className="bg-white/5 rounded-xl p-4 text-[10px] text-gray-400 border border-white/5">
                <span className="text-purple-400">&gt; Prompt:</span> Проанализируй сайт и предложи стратегию...
            </div>
            <div className="bg-purple-500/5 rounded-xl p-5 border border-purple-500/10 space-y-3">
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div><span className="text-[10px] text-white">Анализ E-E-A-T завершен</span></div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></div><span className="text-[10px] text-purple-300">Оптимизация под Gemini...</span></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/5 text-center"><div className="text-[8px] text-gray-500 uppercase mb-1">AI Visibility</div><div className="text-xl font-black text-purple-400">92%</div></div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/5 text-center"><div className="text-[8px] text-gray-500 uppercase mb-1">Citation Flow</div><div className="text-xl font-black text-purple-400">High</div></div>
            </div>
        </div>
    </motion.div>
);

const AvitoDashboard = () => (
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="relative w-[480px] h-[420px] bg-white rounded-[2.5rem] p-8 shadow-2xl overflow-hidden shadow-orange-500/10 font-sans">
        <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3"><div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white"><Store size={20} /></div><div><div className="text-gray-900 font-bold text-sm leading-none mb-1">Магазин на Авито</div><div className="text-[8px] text-gray-400 uppercase tracking-widest">Статус: Максимальный</div></div></div>
            <div className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-green-100">В ТОП-1</div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100"><div className="flex items-center gap-2 text-gray-400 mb-2"><PhoneCall size={14} className="text-blue-500" /><span className="text-[8px] font-bold uppercase">Звонки</span></div><div className="text-2xl font-black text-gray-900">+245</div></div>
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100"><div className="flex items-center gap-2 text-gray-400 mb-2"><MessageCircle size={14} className="text-green-500" /><span className="text-[8px] font-bold uppercase">Сообщения</span></div><div className="text-2xl font-black text-gray-900">+512</div></div>
        </div>
        <div className="bg-gray-900 rounded-2xl p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl"></div>
            <div className="text-[9px] font-bold text-gray-400 uppercase mb-4 relative z-10">Просмотры</div>
            <div className="flex items-end gap-1.5 h-20 relative z-10 text-white">
                {[40, 60, 35, 90, 75, 100, 85].map((h, i) => (
                    <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: 1 + i * 0.1 }} className="flex-1 bg-gradient-to-t from-orange-500 to-orange-300 rounded-t-sm" />
                ))}
            </div>
        </div>
    </motion.div>
);

const PartnerDashboard = () => (
    <motion.div initial={{ rotateY: 15, opacity: 0 }} animate={{ rotateY: -5, opacity: 1 }} transition={{ duration: 1.2 }} className="relative w-[500px] h-[440px] bg-[#09090b]/60 backdrop-blur-2xl border border-[#D4AF37]/20 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden font-sans text-white">
        <div className="flex items-center justify-between mb-10 text-white">
            <div><div className="text-white font-bold text-lg mb-1">Личный кабинет партнера</div><div className="text-[8px] text-[#D4AF37] uppercase tracking-widest font-black">Статус: Gold Partner</div></div>
            <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold text-xl">S</div>
        </div>
        <div className="grid grid-cols-2 gap-6 mb-8 text-white">
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6 text-center"><div className="text-[8px] text-gray-500 uppercase mb-2">Активных клиентов</div><div className="text-4xl font-black text-white">12</div></div>
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6 text-center"><div className="text-[8px] text-gray-500 uppercase mb-2">Выплаты (мес)</div><div className="text-3xl font-black text-green-400">145к руб</div></div>
        </div>
        <div className="bg-white/5 border border-white/5 rounded-2xl p-6 relative overflow-hidden text-white">
            <div className="text-[9px] font-bold text-gray-400 uppercase mb-6">История начислений</div>
            <div className="space-y-4">
                {[{ d: '24.12', v: '+45 000 руб', l: 'SEO: ПромХолдинг' }, { d: '18.12', v: '+12 500 руб', l: 'Ads: Brand Store' }, { d: '05.12', v: '+28 000 руб', l: 'Dev: Landing Page' }].map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-[10px] text-white"><span className="text-gray-500 font-mono">{item.d}</span><span className="text-gray-300 font-medium">{item.l}</span><span className="text-[#D4AF37] font-black">{item.v}</span></div>
                ))}
            </div>
        </div>
        <div className="mt-8 flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-xl text-white"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div><span className="text-[9px] font-black text-green-400 uppercase">Следующая выплата: 05.01.2026</span></div>
    </motion.div>
);

function ServiceContent({ data, pathname }: { data: any, pathname?: string }) {
  const { hero, pricing, faq, breadcrumbs, heroType, factors, symptoms, detailedChecklist, tools, seoText, projects, showSeoCrossSell, hideWheel, hideCalculator, timeline, comparison, passport } = data;
  const { openModal } = useModal();
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [hoveredFactor, setHoveredFactor] = useState<number | null>(null);
  const tickerSet = [...HERO_TICKER, ...HERO_TICKER, ...HERO_TICKER];
  const inputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.placeholder = "Введите URL вашего сайта...";
    }
  }, []);

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openModal({ title: 'Заявка на проект', subtitle: `Обсудим ваш проект. Мы подготовим стратегию и смету.`, url: websiteUrl, buttonText: 'Получить предложение' });
  };

  return (
    <div className="font-sans text-[#09090b] bg-[#09090b] selection:bg-[#D4AF37] selection:text-white min-h-screen text-white">
        <style>{`
            @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
            .animate-marquee { animation: marquee 40s linear infinite; }
        `}</style>
        <Header pathname={pathname} />
        <main>
          {/* 1. Hero */}
          <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/5">
            <div className="absolute inset-0 pointer-events-none opacity-40"><div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#D4AF37]/5 rounded-full blur-[120px]"></div><div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div></div>
            <div className="container mx-auto px-6 relative z-10 mb-12">
              {breadcrumbs && <Breadcrumbs items={breadcrumbs} theme="light" />}
              <div className={(heroType && heroType !== 'none') ? "grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center" : "max-w-4xl mx-auto text-center flex flex-col items-center"}>
                <div className={heroType && heroType !== 'none' ? "" : "flex flex-col items-center"}>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest mb-8">{hero.badge}</div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight text-white">{hero.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">{hero.titleAccent}</span></h1>
                    <p className={`text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12 max-w-2xl border-[#D4AF37]/30 ${heroType && heroType !== 'none' ? 'border-l-2 pl-6 text-left' : 'text-center'}`}>{hero.description}</p>
                    <div className="max-w-2xl w-full relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <form onSubmit={handleAuditSubmit} className="relative flex items-center bg-[#151515] rounded-xl p-1 md:p-2 border border-white/10 shadow-2xl">
                            <Search className="text-gray-500 ml-3 shrink-0" size={20} />
                            <input ref={inputRef} type="text" className="w-full bg-transparent text-white placeholder-gray-500 px-4 py-3 outline-none font-medium text-xs md:text-base" value={websiteUrl} onChange={(e) => setWebsiteUrl(e.target.value)} required />
                            <button type="submit" className="bg-[#D4AF37] hover:bg-[#c5a028] text-black px-6 py-3 rounded-lg font-bold text-xs md:text-sm uppercase tracking-wider transition-all flex items-center gap-2 whitespace-nowrap shadow-lg shadow-[#D4AF37]/20">{hero.buttonText}</button>
                        </form>
                    </div>
                </div>
                <div className="hidden lg:flex perspective-1000">
                    {heroType === 'wheel' && factors && (
                        <motion.div initial={{ rotateY: 20, rotateX: 10, opacity: 0 }} animate={{ rotateY: 5, rotateX: 5, opacity: 1 }} className="relative w-[480px] bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2rem] p-10 shadow-2xl overflow-hidden text-white">
                            <div className="relative flex flex-col items-center">
                                <div className="relative w-[320px] h-[320px]">
                                    <svg viewBox="0 0 300 300" className="w-full h-full transform -rotate-90">
                                        {[1, 2, 3, 4].map(ring => (<circle key={ring} cx="150" cy="150" r={30 * ring} fill="none" stroke="#333" strokeWidth="1" strokeDasharray="4 4" className="opacity-20" />))}
                                        {factors.map((factor: any, idx: number) => (
                                            <motion.path key={idx} d={getWedgePath(idx, factors.length, (factor.value / 100) * 140)} fill={factor.color} stroke="#09090b" strokeWidth="2" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.8 }} whileHover={{ scale: 1.05, opacity: 1 }} className="cursor-help" onMouseEnter={() => setHoveredFactor(idx)} onMouseLeave={() => setHoveredFactor(null)} />
                                        ))}
                                    </svg>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none bg-[#09090b]/95 backdrop-blur-md w-28 h-28 rounded-full flex flex-col items-center justify-center border border-white/10 shadow-2xl p-4 text-white">
                                        <div className="text-2xl font-black text-white">{hoveredFactor !== null ? factors[hoveredFactor].value + '%' : '45%'}</div>
                                        <div className="text-[8px] leading-tight uppercase tracking-wider text-[#D4AF37] font-bold mt-1">{hoveredFactor !== null ? factors[hoveredFactor].label : 'Общий балл'}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-10 pt-8 border-t border-white/5 text-white">
                                {factors.map((f: any, i: number) => (
                                    <div key={i} className={`flex items-center gap-2 text-[9px] uppercase font-bold transition-all duration-300 \${hoveredFactor !== null && hoveredFactor !== i ? 'opacity-20' : 'opacity-100'} \${hoveredFactor === i ? 'text-[#D4AF37] translate-x-1' : 'text-gray-500'}`} onMouseEnter={() => setHoveredFactor(i)} onMouseLeave={() => setHoveredFactor(null)}><div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: f.color }}></div><span className="truncate">{f.label}</span></div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                    {heroType === 'web-dev' && <WebDevDashboard />}
                    {heroType === 'ads' && <AdsDashboard />}
                    {heroType === 'ai' && <AiDashboard />}
                    {heroType === 'avito' && <AvitoDashboard />}
                    {heroType === 'partner' && <PartnerDashboard />}
                </div>
              </div>
            </div>
            {/* Live Case Ticker */}
            <div className="absolute bottom-0 left-0 w-full z-30 border-t border-white/5 bg-[#09090b]/90 backdrop-blur-md">
                <div className="relative flex items-center h-14 overflow-hidden max-w-[100vw]">
                    <div className="absolute left-0 z-20 h-full flex items-center pl-4 md:pl-12 pr-12 bg-gradient-to-r from-[#09090b] via-[#09090b] to-transparent"><div className="flex items-center gap-2 px-3 py-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-lg shadow-sm text-[#D4AF37]"><div className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span></div><span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest whitespace-nowrap">Live Кейсы</span></div></div>
                    <div className="flex animate-marquee hover:[animation-play-state:paused] text-white">
                        <div className="flex gap-6 px-4 items-center shrink-0">
                            {tickerSet.map((item, idx) => (
                                <div key={`t1-\${idx}`} className="flex items-center gap-3 px-4 py-2 bg-[#1a1a1a] border border-white/10 rounded-full shadow-lg transition-transform hover:scale-105 text-white"><span className="font-bold text-gray-100 text-sm whitespace-nowrap">{item.text}</span><span className={`text-xs font-bold px-2 py-0.5 rounded flex items-center \${item.isPositive ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>{item.change}</span></div>
                            ))}
                        </div>
                        <div className="flex gap-6 px-4 items-center shrink-0 text-white">
                            {tickerSet.map((item, idx) => (
                                <div key={`t2-\${idx}`} className="flex items-center gap-3 px-4 py-2 bg-[#1a1a1a] border border-white/10 rounded-full shadow-lg transition-transform hover:scale-105 text-white"><span className="font-bold text-gray-100 text-sm whitespace-nowrap">{item.text}</span><span className={`text-xs font-bold px-2 py-0.5 rounded flex items-center \${item.isPositive ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>{item.change}</span></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
          </section>

          {/* 2. Project Passport (Optional) */}
          {passport && (
            <section className="py-20 bg-white/5 border-b border-white/5 text-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-white">
                        {[ { label: 'Клиент', val: passport.client, icon: Briefcase }, { label: 'Ниша', val: passport.niche, icon: Target }, { label: 'Срок', val: passport.term, icon: Calendar }, { label: 'Цель', val: passport.goal, icon: TrendingUp } ].map((item, i) => (
                            <div key={i} className="space-y-3"><div className="flex items-center gap-2 text-[#D4AF37]"><item.icon size={16} /><span className="text-[10px] font-black uppercase tracking-widest text-gray-500">{item.label}</span></div><div className="text-lg font-bold text-white leading-tight">{item.val}</div></div>
                        ))}
                    </div>
                </div>
            </section>
          )}

          {/* 3. Portfolio SLIDER */}
          <CasesSlider items={projects} />

          {/* 4. Symptoms / Problems */}
          {symptoms && (
            <section className="py-32 border-b border-white/5 relative overflow-hidden text-white">
                <div className="container mx-auto px-6 text-white">
                    <div className="text-center mb-20 text-white"><h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">{symptoms.title} <span className="italic text-[#D4AF37]">{symptoms.titleAccent}</span></h2></div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
                        {symptoms.items.map((item: any, idx: number) => (
                            <div key={idx} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all text-white">
                                <div className="text-[#D4AF37] font-black text-2xl mb-4 text-white">0{idx + 1}</div>
                                <h3 className="text-lg font-bold mb-3 text-white uppercase tracking-tight text-white">{item.title}</h3>
                                <p className="text-sm text-gray-400 font-light leading-relaxed text-white">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
          )}

          {/* 5. Timeline / Process */}
          {timeline && (
            <section className="py-32 bg-[#09090b] relative text-white">
                <div className="container mx-auto px-6 text-white">
                    <div className="text-center mb-20 text-white"><div className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.3em] mb-4">Методология</div><h2 className="text-4xl md:text-5xl font-bold text-white">Этапы <span className="italic font-serif">аудита</span></h2></div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-white">
                        {timeline.map((step: any, idx: number) => (
                            <div key={idx} className="relative group text-white"><div className="bg-white/5 border border-white/10 p-8 rounded-3xl h-full hover:border-[#D4AF37]/30 transition-all duration-500 text-white hover:bg-white/[0.07]"><div className="text-4xl font-black text-white/10 mb-6 group-hover:text-[#D4AF37]/20 transition-colors">{(idx + 1).toString().padStart(2, '0')}</div><h3 className="text-lg font-bold text-white mb-3 uppercase tracking-tight leading-tight">{step.title}</h3><p className="text-xs text-gray-500 font-light leading-relaxed">{step.desc}</p></div></div>
                        ))}
                    </div>
                </div>
            </section>
          )}

          {/* 6. Comparison */}
          {comparison && (
            <section className="py-32 border-y border-white/5 relative overflow-hidden text-white">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[120px] pointer-events-none text-white"></div>
                <div className="container mx-auto px-6 max-w-5xl text-white">
                    <div className="text-center mb-20 text-white"><h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter">Почему <span className="text-[#D4AF37]">мы</span>, а не конкуренты?</h2></div>
                    <div className="grid md:grid-cols-2 gap-8 text-white">
                        <div className="p-10 bg-white/5 border border-white/10 rounded-[3rem] text-white"><h3 className="text-xl font-bold text-gray-500 mb-8 uppercase tracking-widest text-white">Обычный подход</h3><ul className="space-y-6 text-white">{comparison.bad.map((item: string, i: number) => (<li key={i} className="flex gap-4 text-gray-600 text-sm text-white"><X size={18} className="shrink-0 mt-0.5 opacity-50 text-white" /><span className="text-white">{item}</span></li>))}</ul></div>
                        <div className="p-10 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-[3rem] shadow-[0_0_40px_rgba(212,175,55,0.1)] text-white"><h3 className="text-xl font-bold text-[#D4AF37] mb-8 uppercase tracking-widest text-white">Метод Смирнова</h3><ul className="space-y-6 text-white">{comparison.good.map((item: string, i: number) => (<li key={i} className="flex gap-4 text-white text-sm text-white"><Check size={18} className="text-[#D4AF37] shrink-0 mt-0.5 text-white" /><span className="font-medium text-white">{item}</span></li>))}</ul></div>
                    </div>
                </div>
            </section>
          )}

          {!hideWheel && <WheelOfBalance />}

          <section id="pricing" className="py-32 bg-[#09090b] text-white relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20 text-white">
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#D4AF37]/5 rounded-full blur-[120px] text-white"></div>
                <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-purple-900/5 rounded-full blur-[150px] text-white"></div>
            </div>
            <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10 text-white">
                <div className="mb-24 text-center text-white"><div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 backdrop-blur-sm text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest mb-6 text-white">Стоимость услуг</div><h2 className="text-4xl md:text-6xl font-serif font-medium text-white mb-6 text-white">Инвестиции в <span className="italic text-[#D4AF37]">рост</span></h2><p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed text-white">Прозрачное ценообразование. Вы платите за результат.</p></div>
                <div className="grid lg:grid-cols-3 gap-8 text-white">
                    {pricing.map((plan: any, idx: number) => (
                        <div key={idx} className={`p-10 md:p-12 flex flex-col h-full relative transition-all duration-500 rounded-[2.5rem] border ${plan.isPopular ? 'bg-white/10 border-[#D4AF37]/50 shadow-[0_0_40px_rgba(212,175,55,0.1)] scale-105 z-20' : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'} text-white`}>
                            {plan.isPopular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-black text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-lg text-white">Популярный выбор</div>}
                            <div className="mb-10 text-white">
                                <h3 className={`text-xs font-bold uppercase tracking-[0.2em] mb-6 ${plan.isPopular ? 'text-[#D4AF37]' : 'text-gray-400'} text-white`}>{plan.title}</h3>
                                <div className="flex items-baseline gap-2 text-white"><div className="text-4xl lg:text-5xl font-serif font-medium text-white tracking-tight text-white">{plan.price}</div></div>
                                <div className="text-[10px] text-gray-500 mt-3 font-bold uppercase tracking-wider text-white">{plan.isOnetime ? 'Разовый платёж' : 'Ежемесячный бюджет'}</div>
                            </div>
                            <ul className="space-y-5 mb-12 flex-1 text-white">{plan.features.map((feat: string, i: number) => (<li key={i} className="flex gap-4 text-sm leading-relaxed items-start text-gray-300 text-white"><div className="w-5 h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0 mt-0.5 border border-[#D4AF37]/20 text-white"><div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] text-white"></div></div><span className="font-light text-white">{feat}</span></li>))}</ul>
                            <button 
                                onClick={() => openModal({ title: `Заказ тарифа: ${plan.title}` })} 
                                className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-xl active:scale-95 border-2 ${
                                    plan.isPopular 
                                    ? 'bg-[#D4AF37] border-[#D4AF37] text-black hover:bg-white hover:text-black shadow-[#D4AF37]/20' 
                                    : 'bg-white border-white text-black hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37]'
                                }`}
                            >
                                {plan.buttonText || 'Выбрать тариф'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
          </section>

          {!hideCalculator && <SeoCalculator />}
          <Clients />
          <ReviewsBlock />
          <AwardsBlock />
          <MediaBlock />
          
          <CmsLinks />
          <GeoLinks />

          <Team />
          <YoutubeBlock />
          {seoText && <SeoSpoiler title={seoText.title} preview={seoText.preview} fullText={seoText.fullText} />}
          <FAQ items={faq || FAQS} />
          
          <section className="py-24 bg-gray-50 border-t border-gray-100 text-[#09090b]">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-serif italic mb-12">Начнем работу <span className="text-[#D4AF37]">сегодня?</span></h2>
                <div className="max-w-md mx-auto"><UniversalForm source={`Service_${hero.title}`} isDark={false} buttonText="Обсудить проект" /></div>
            </div>
          </section>
        </main>
        <Footer />
        <RequestModal />
    </div>
  );
}

function ServiceModernPage({ data, pathname }: ServiceModernPageProps) {
  return (
    <ModalProvider>
      <ServiceContent data={data} pathname={pathname} />
    </ModalProvider>
  );
}

export default ServiceModernPage;