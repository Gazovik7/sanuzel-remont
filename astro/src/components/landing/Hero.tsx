
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useModal } from './Modal';
import { Search, TrendingUp, ChevronRight, ChevronLeft, MapPin, Briefcase, BadgeCheck, ArrowUpRight, CheckCircle2, ArrowRight, Play, Volume2, VolumeX, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CASES_DATA, TEAM_MEMBERS, HERO_BULLETS, HERO_TICKER } from './constants';
import type { HeroData } from '../../types';
import Breadcrumbs from '../islands/Breadcrumbs';

const Link = ({href, children, ...props}: any) => <a href={href} {...props}>{children}</a>;

// --- НАСТРОЙКИ ВИДЕО ---
const FOUNDER_VIDEO_URL = "https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-308-large.mp4"; 
const FOUNDER_VIDEO_POSTER = "/img/smirnov-ivan.jpg"; 

interface HeroProps {
  data?: HeroData;
  heroType?: 'slider' | 'wheel';
  factors?: any[];
  breadcrumbs?: any[];
  caseIds?: string[];
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

const Hero: React.FC<HeroProps> = ({ data, heroType = 'slider', factors, breadcrumbs, caseIds }) => {
  const { openModal } = useModal();
  const [websiteUrl, setWebsiteUrl] = useState('');
  
  // Filter cases based on IDs if provided
  const displayCases = React.useMemo(() => {
    if (caseIds && caseIds.length > 0) {
      return caseIds
        .map(id => CASES_DATA.find(c => c.id === id))
        .filter(Boolean);
    }
    return CASES_DATA;
  }, [caseIds]);

  const [activeCase, setActiveCase] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [hoveredFactor, setHoveredFactor] = useState<number | null>(null);

  // Fallback values
  const h1 = data?.h1 || "SEO продвижение | в Москве";
  const description = data?.description || "Комплексное SEO с финансовыми гарантиями. Выводим в ТОП-3, исправляем технические ошибки и увеличиваем конверсию сайта.";
  const founderQuote = data?.founderQuote || "Мы не конвейер. Я лично контролирую стратегию каждого клиента. Посмотрите видео, чтобы узнать о наших гарантиях.";
  const bullets = data?.bullets || HERO_BULLETS;

  const tickerSet = [...HERO_TICKER, ...HERO_TICKER, ...HERO_TICKER]; 

  useEffect(() => {
    if (heroType !== 'slider' || displayCases.length <= 1) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [activeCase, heroType, displayCases]);

  const handleNext = () => { 
    setDirection(1); 
    setActiveCase((prev) => (prev + 1) % displayCases.length); 
  };

  const handlePrev = () => { 
    setDirection(-1); 
    setActiveCase((prev) => (prev - 1 + displayCases.length) % displayCases.length); 
  };

  const handleDotClick = (index: number) => {
    setDirection(index > activeCase ? 1 : -1);
    setActiveCase(index);
  };

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openModal({ title: 'Бесплатный аудит сайта', subtitle: 'Мы подготовим стратегию роста на основе анализа вашего домена.', url: websiteUrl, buttonText: 'Получить стратегию' });
  };

  const sliderVariants = {
    enter: (direction: number) => ({ x: direction > 0 ? 200 : -200, opacity: 0, scale: 0.9 }),
    center: { zIndex: 1, x: 0, opacity: 1, scale: 1 },
    exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? 200 : -200, opacity: 0, scale: 0.9 })
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-40 bg-[#09090b] text-white overflow-hidden">
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 40s linear infinite; }
        .video-ring { animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite; }
        @keyframes pulse-ring { 0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.7); } 70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(212, 175, 55, 0); } 100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.7); } }
      `}</style>

      {/* --- Background Layers --- */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
          <div className="absolute bottom-[-4%] left-0 w-full flex justify-center items-end overflow-hidden opacity-[0.03]">
              <span className="font-serif font-black text-[18vw] leading-none whitespace-nowrap">SMIRNOV</span>
          </div>
          <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-[#D4AF37]/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[150px]"></div>
          <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-black/20"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 mb-12">
        {breadcrumbs && breadcrumbs.length > 0 && (
            <div className="mb-8">
                <Breadcrumbs items={breadcrumbs} theme="light" />
            </div>
        )}
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div initial={false} animate={{ opacity: 1, y: 0 }} className="space-y-10 motion-hero-content">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
                </span>
                Бутиковое SEO-агентство
            </div>

            <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-sans font-bold leading-[1.1] tracking-tight text-white">
                  {h1.split('|').map((part, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && <br />}
                      <span className={i > 0 ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400" : ""}>{part.trim()}</span>
                    </React.Fragment>
                  ))}
                </h1>
                <p className="text-gray-400 text-lg font-light leading-relaxed max-w-xl border-l-2 border-[#D4AF37]/30 pl-4">{description}</p>
            </div>

            <div className="max-w-xl relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <form onSubmit={handleAuditSubmit} className="relative flex flex-col md:flex-row items-stretch md:items-center bg-[#151515] rounded-xl p-1.5 border border-white/10 shadow-2xl gap-2">
                    <div className="flex items-center flex-1 px-3 py-2 md:py-0">
                        <Search className="text-[#D4AF37] shrink-0" size={20} />
                        <input type="text" placeholder="Адрес вашего сайта..." className="w-full bg-transparent text-white placeholder-gray-500 px-4 py-2 outline-none font-medium text-base" value={websiteUrl} onChange={(e) => setWebsiteUrl(e.target.value)} />
                    </div>
                    <button type="submit" className="bg-[#D4AF37] hover:bg-[#c5a028] text-black px-8 py-4 md:py-3.5 rounded-lg font-bold text-sm uppercase tracking-wider transition-all flex items-center gap-2 whitespace-nowrap shadow-lg shadow-[#D4AF37]/20">Рассчитать рост <ArrowUpRight size={18} /></button>
                </form>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
                <div className="relative w-20 h-20 shrink-0 cursor-pointer group" onClick={() => setIsVideoOpen(true)}>
                    <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37] video-ring"></div>
                    <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 relative z-10 border-2 border-[#09090b]">
                        <img src={FOUNDER_VIDEO_POSTER} alt="Иван Смирнов" className="w-full h-full object-cover" loading="eager" />
                        <div className="absolute inset-0 bg-black/10 flex items-center justify-center"><Play size={20} className="text-white drop-shadow-md fill-white opacity-80" /></div>
                    </div>
                </div>
                <Link href="/about" className="block max-w-sm group/card flex-1">
                    <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all flex flex-col justify-center">
                        <div className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider mb-1">Иван Смирнов</div>
                        <p className="text-xs text-gray-400 leading-snug">"{founderQuote}"</p>
                    </div>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-white/10 max-w-2xl">
                {bullets.map((item, idx) => (
                    <div key={idx} className="flex gap-3 items-start group">
                        <CheckCircle2 className="text-[#D4AF37] shrink-0 w-5 h-5 group-hover:scale-110 transition-transform" />
                        <p className="text-sm text-gray-400 leading-tight group-hover:text-gray-200 transition-colors cursor-default">{item}</p>
                    </div>
                ))}
            </div>
          </motion.div>

          {/* Right Content: Premium Visuals */}
          <div className="relative flex h-[600px] w-full flex-col items-center justify-center perspective-1000">
             {heroType === 'slider' ? (
                <div className="relative w-[400px] h-[520px] z-10">
                    {/* Navigation Buttons */}
                    <button 
                        onClick={handlePrev} 
                        className="absolute -left-16 top-1/2 -translate-y-1/2 p-4 text-white/30 hover:text-[#D4AF37] hover:scale-110 transition-all z-20 group"
                        aria-label="Previous Case"
                    >
                        <ChevronLeft size={40} className="filter drop-shadow-lg" />
                    </button>
                    <button 
                        onClick={handleNext} 
                        className="absolute -right-16 top-1/2 -translate-y-1/2 p-4 text-white/30 hover:text-[#D4AF37] hover:scale-110 transition-all z-20 group"
                        aria-label="Next Case"
                    >
                        <ChevronRight size={40} className="filter drop-shadow-lg" />
                    </button>

                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={activeCase}
                            custom={direction} variants={sliderVariants}
                            initial="enter" animate="center" exit="exit"
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0 bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group"
                        >
                            {displayCases[activeCase] && (
                                <>
                                    <img src={displayCases[activeCase].image} alt={displayCases[activeCase].title} className="w-full h-full object-cover opacity-60" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                        <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl">
                                            <div className="text-[10px] text-gray-300 uppercase tracking-wider font-bold mb-1">Рост трафика</div>
                                            <div className="text-[#D4AF37] font-black text-xl flex items-center gap-2"><TrendingUp size={18} />{displayCases[activeCase].result}</div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white leading-tight mb-4">{displayCases[activeCase].title}</h3>
                                        <Link href="/cases" className="py-3 rounded-lg bg-white/10 text-white text-xs font-bold border border-white/10 flex items-center justify-center">Подробнее</Link>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    </AnimatePresence>
                    <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-3">
                        {displayCases.map((_, idx) => (<button key={idx} onClick={() => setActiveCase(idx)} className={`h-1 rounded-full transition-all duration-300 ${idx === activeCase ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-gray-700'}`} />))}
                    </div>
                </div>
             ) : heroType === 'wheel' && factors ? (
                <motion.div initial={{ rotateY: 20, opacity: 0 }} animate={{ rotateY: 5, rotateX: 5, opacity: 1 }} className="relative w-[480px] bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2rem] p-10 shadow-2xl overflow-hidden text-white">
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
                            <div key={i} className={`flex items-center gap-2 text-[9px] uppercase font-bold transition-all duration-300 ${hoveredFactor !== null && hoveredFactor !== i ? 'opacity-20' : 'opacity-100'} ${hoveredFactor === i ? 'text-[#D4AF37] translate-x-1' : 'text-gray-500'}`} onMouseEnter={() => setHoveredFactor(i)} onMouseLeave={() => setHoveredFactor(null)}><div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: f.color }}></div><span className="truncate">{f.label}</span></div>
                        ))}
                    </div>
                </motion.div>
             ) : null}
          </div>
        </div>
      </div>

      {/* INFINITE TICKER */}
      <div className="absolute bottom-0 left-0 w-full z-30 border-t border-white/5 bg-[#09090b]/90 backdrop-blur-md">
          <div className="relative flex items-center h-14 overflow-hidden max-w-[100vw]">
              <div className="absolute left-0 z-20 h-full flex items-center pl-4 md:pl-12 pr-12 bg-gradient-to-r from-[#09090b] via-[#09090b] to-transparent">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-lg shadow-sm">
                      <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </div>
                      <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest whitespace-nowrap">Live Кейсы</span>
                  </div>
              </div>
              <div className="flex animate-marquee hover:[animation-play-state:paused]">
                  <div className="flex gap-6 px-4 items-center shrink-0">
                     {tickerSet.map((item, idx) => (
                        <div key={`t1-${idx}`} className="flex items-center gap-3 px-4 py-2 bg-[#1a1a1a] border border-white/10 rounded-full shadow-lg transition-transform hover:scale-105 text-white">
                            <span className="font-bold text-gray-100 text-sm whitespace-nowrap">{item.text}</span>
                            <span className={`text-xs font-bold px-2 py-0.5 rounded flex items-center ${item.isPositive ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>{item.change}</span>
                        </div>
                     ))}
                  </div>
              </div>
          </div>
      </div>

      <AnimatePresence>
        {isVideoOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setIsVideoOpen(false)}>
                <div className="relative w-full max-w-lg aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl border border-gray-800" onClick={e => e.stopPropagation()}>
                    <button onClick={() => setIsVideoOpen(false)} className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black transition-colors"><X size={24} /></button>
                    <video src={FOUNDER_VIDEO_URL} poster={FOUNDER_VIDEO_POSTER} className="w-full h-full object-cover" controls autoPlay playsInline />
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
