
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { ModalProvider, useModal } from './Modal';
import RequestModal from './RequestModal';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Briefcase, Calendar, Target, TrendingUp, Info, ChevronRight, Share2, MousePointer2 } from 'lucide-react';
import Breadcrumbs from '../islands/Breadcrumbs';
import UniversalForm from '../islands/UniversalForm';

interface CaseStudyModernPageProps {
  data: any;
}

function CaseStudyContent({ data }: { data: any }) {
  const { hero, passport, challenge, strategy, results, conclusion } = data;
  const [scrollProgress, setScrollProgress] = useState(0);
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(window.scrollY / totalScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-[#09090b] bg-white selection:bg-[#D4AF37] selection:text-white min-h-screen">
        <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-gray-100">
            <motion.div className="h-full bg-[#D4AF37]" style={{ width: `${scrollProgress * 100}%` }} />
        </div>
        
        <Header />
        
        <main>
          {/* 1. Hero Section */}
          <section className="relative pt-40 pb-24 overflow-hidden border-b border-gray-100 bg-gray-50">
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#D4AF37]/10 rounded-full blur-[120px]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
              <Breadcrumbs items={[{ label: 'Кейсы', href: '/portfolio' }, { label: hero.title, href: '#' }]} theme="dark" />
              
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                        {hero.badge}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight text-[#09090b]">
                        {hero.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">{hero.titleAccent}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed mb-12 max-w-2xl border-l-2 border-[#D4AF37] pl-6">
                        {hero.description}
                    </p>
                </div>

                <div className="relative group hidden lg:block">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-purple-600 rounded-[2.5rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                    <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-gray-200 shadow-2xl bg-white">
                        <img src={hero.image} alt={hero.title} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[2s]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent"></div>
                        <div className="absolute bottom-10 left-10">
                            <div className="text-[10px] text-gray-600 font-black uppercase tracking-widest mb-2">Результат</div>
                            <div className="text-6xl font-black text-[#09090b]">{hero.resultValue}</div>
                            <div className="text-sm font-bold text-[#D4AF37] uppercase tracking-widest">{hero.resultLabel}</div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Project Passport */}
          <section className="py-20 bg-white border-b border-gray-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    {[
                        { label: 'Клиент', val: passport.client, icon: Briefcase },
                        { label: 'Ниша', val: passport.niche, icon: Target },
                        { label: 'Срок работы', val: passport.term, icon: Calendar },
                        { label: 'Цель', val: passport.goal, icon: TrendingUp }
                    ].map((item, i) => (
                        <div key={i} className="space-y-3">
                            <div className="flex items-center gap-2 text-[#D4AF37]">
                                <item.icon size={16} />
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{item.label}</span>
                            </div>
                            <div className="text-lg font-bold text-[#09090b] leading-tight">{item.val}</div>
                        </div>
                    ))}
                </div>
            </div>
          </section>

          {/* 3. Challenge */}
          <section className="py-32 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#09090b] tracking-tight">
                            {challenge.title}
                        </h2>
                        <p className="text-xl text-gray-500 font-light leading-relaxed">
                            {challenge.description}
                        </p>
                    </div>
                    <div className="bg-gray-50 border border-gray-100 rounded-[3rem] p-10 md:p-16 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-2xl"></div>
                        <h3 className="text-xl font-bold mb-10 uppercase tracking-widest text-[#09090b] flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                            Задачи проекта
                        </h3>
                        <ul className="space-y-8">
                            {challenge.tasks.map((task: string, i: number) => (
                                <li key={i} className="flex gap-5 items-start text-gray-600">
                                    <div className="text-[#D4AF37] font-black text-sm mt-1">0{i + 1}</div>
                                    <span className="font-light text-lg">{task}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
          </section>

          {/* 4. Strategy */}
          <section className="py-32 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-24">
                    <div className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.3em] mb-4">Методология</div>
                    <h2 className="text-4xl md:text-6xl font-bold text-[#09090b]">Как мы это <span className="italic font-serif text-[#D4AF37]">сделали?</span></h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {strategy.map((step: any, i: number) => (
                        <div key={i} className="bg-white border border-gray-100 p-10 rounded-[2.5rem] relative group hover:border-[#D4AF37]/30 transition-all duration-500 shadow-sm hover:shadow-2xl">
                            <div className="text-5xl font-black text-gray-50 mb-8 group-hover:text-[#D4AF37]/10 transition-colors">0{i + 1}</div>
                            <h3 className="text-xl font-bold text-[#09090b] mb-4 uppercase tracking-tight">{step.title}</h3>
                            <p className="text-gray-500 font-light leading-relaxed text-sm">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
          </section>

          {/* 5. Results */}
          <section className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-[#09090b]">Итоги в <span className="italic font-serif text-[#D4AF37]">цифрах</span></h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {results.stats.map((stat: any, i: number) => (
                        <div key={i} className="bg-gray-50 border border-gray-100 p-10 rounded-[3rem] text-center relative overflow-hidden group hover:bg-white hover:shadow-2xl transition-all duration-500">
                            <div className="text-[9px] text-gray-400 uppercase tracking-[0.2em] mb-6 font-bold">{stat.label}</div>
                            <div className="flex items-center justify-center gap-4 mb-4">
                                <div className="text-gray-300 line-through text-xl">{stat.before}</div>
                                <ArrowRight size={20} className="text-[#D4AF37]" />
                                <div className="text-4xl font-black text-[#09090b]">{stat.after}</div>
                            </div>
                            <div className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-green-600 border border-green-100 text-[10px] font-black uppercase tracking-widest">
                                {stat.growth}
                            </div>
                        </div>
                    ))}
                </div>
                
                {conclusion && (
                    <div className="mt-24 p-12 bg-gray-900 rounded-[3.5rem] max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center md:items-start text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-[80px]"></div>
                        <img src="/img/smirnov-ivan.jpg" className="w-20 h-20 rounded-full border-2 border-[#D4AF37]/30 relative z-10 shrink-0" alt="Иван Смирнов" />
                        <div className="relative z-10">
                            <h4 className="text-xl font-bold text-[#D4AF37] mb-4 uppercase tracking-widest text-[10px]">Резюме эксперта</h4>
                            <p className="text-xl font-light italic leading-relaxed opacity-90">"{conclusion}"</p>
                            <div className="mt-6 text-[10px] font-bold uppercase tracking-widest text-gray-500">Иван Смирнов — CEO Smirnov Marketing</div>
                        </div>
                    </div>
                )}
            </div>
          </section>

          {/* 6. CTA */}
          <section className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-serif italic mb-12 text-[#09090b]">Хотите такой же <span className="text-[#D4AF37]">результат?</span></h2>
                <div className="max-w-md mx-auto">
                    <UniversalForm source={`Case_${passport.client}`} isDark={false} buttonText="Обсудить проект" />
                </div>
            </div>
          </section>
        </main>

        <Footer />
        <RequestModal />
    </div>
  );
}

function CaseStudyModernPage({ data }: CaseStudyModernPageProps) {
  return (
    <ModalProvider>
      <CaseStudyContent data={data} />
    </ModalProvider>
  );
}

export default CaseStudyModernPage;
