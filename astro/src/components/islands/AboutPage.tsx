
import React from 'react';
import { TEAM, STATS, CLIENTS, MAIN_AWARDS } from '../landing/constants';
import { Quote, Trophy, Users, Briefcase, Target, Calculator, HeartHandshake, Eye, Lightbulb, TrendingUp, CheckCircle2, Building2, ArrowRight } from 'lucide-react';
import UniversalForm from './UniversalForm';
import Breadcrumbs from './Breadcrumbs';

const AboutPage: React.FC = () => {
  
  const VALUES = [
    {
      icon: Calculator,
      color: 'bg-[#D4AF37]/10 text-[#D4AF37]',
      border: 'border-[#D4AF37]/30',
      title: 'Математика > Интуиция',
      text: 'Любое решение — от выбора стратегии до ставки в рекламе — опирается на цифры и аналитику данных. Мы не запускаем процессы, пока не увидим потенциальную прибыль.'
    },
    {
      icon: Eye,
      color: 'bg-purple-500/10 text-purple-400',
      border: 'border-purple-500/30',
      title: 'Радикальная честность',
      text: 'Если мы видим, что проект не имеет потенциала роста, мы скажем об этом прямо. Нам важно ваше доверие и реальный результат, а не просто освоение бюджета.'
    },
    {
      icon: Lightbulb,
      color: 'bg-yellow-500/10 text-yellow-400',
      border: 'border-yellow-500/30',
      title: 'Стратегический подход',
      text: 'Мы не просто выполняем настройки. Мы предлагаем гипотезы и строим долгосрочные стратегии захвата рынка, чтобы обойти ваших конкурентов.'
    },
    {
      icon: HeartHandshake,
      color: 'bg-pink-500/10 text-pink-400',
      border: 'border-pink-500/30',
      title: 'Партнерство в долгую',
      text: 'Средний срок работы клиента с нами — более 14 месяцев. Мы становимся вашим внешним отделом маркетинга, ориентированным на ROI.'
    }
  ];

  return (
    <section className="relative pt-32 pb-24 bg-[#09090b] text-white overflow-hidden min-h-screen animate-fade-in">
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#D4AF37]/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/5 rounded-full blur-[150px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      {/* 1. Hero Section */}
      <div className="container mx-auto max-w-6xl px-6 relative z-10 mb-24">
        <Breadcrumbs 
            items={[{ label: 'Об агентстве', href: '/about' }]} 
            theme="light" 
        />
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 backdrop-blur-sm text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest mb-8">
             <Building2 size={14} />
             <span>О компании Smirnov Marketing</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-sans font-bold text-white mb-8 leading-[1.1] tracking-tight">
            Превращаем поисковый трафик в <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D4AF37] to-[#D4AF37]">управляемую прибыль</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl border-l-2 border-[#D4AF37]/30 pl-6">
            Мы — бутиковое агентство цифрового маркетинга. Не просто настраиваем рекламу, а строим системные продажи через глубокую аналитику и экспертное SEO.
          </p>
        </div>
      </div>

      {/* 2. Stats Bar */}
      <div className="bg-white/5 backdrop-blur-md border-y border-white/10 py-20 mb-24 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl px-6 relative z-10">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {STATS.map((stat, idx) => (
                 <div key={idx} className="space-y-2">
                    <div className="text-4xl md:text-6xl font-serif font-medium text-[#D4AF37]">{stat.value}{stat.suffix}</div>
                    <div className="text-gray-500 font-bold text-[10px] uppercase tracking-[0.2em]">{stat.label}</div>
                 </div>
              ))}
              <div className="space-y-2">
                 <div className="text-4xl md:text-6xl font-serif font-medium text-[#D4AF37]">15+</div>
                 <div className="text-gray-500 font-bold text-[10px] uppercase tracking-[0.2em]">Экспертов в штате</div>
              </div>
           </div>
        </div>
      </div>

      {/* 3. Founder Story */}
      <div className="container mx-auto max-w-6xl px-6 mb-32 relative z-10">
         <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 overflow-hidden group hover:border-[#D4AF37]/30 transition-all duration-500">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-0">
               <div className="h-[500px] lg:h-auto relative bg-gray-900 overflow-hidden">
                  <img 
                    src="/img/smirnov-ivan.jpg" 
                    alt="Иван Смирнов, основатель Smirnov Marketing" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#09090b] via-[#09090b]/50 to-transparent p-10">
                     <div className="text-white font-bold text-3xl mb-1">Иван Смирнов</div>
                     <div className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">Основатель агентства</div>
                  </div>
               </div>
               <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center relative">
                  <div className="absolute top-10 right-10 opacity-5 text-[#D4AF37]">
                      <Quote size={120} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif italic text-white mb-10 leading-snug">
                     "Маркетинг — это не творчество, а чистая математика"
                  </h3>
                  <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed mb-12">
                     <p>
                        Я основал агентство, чтобы дать бизнесу прозрачный и прогнозируемый рост. Большинство подрядчиков действуют вслепую, мы же опираемся на P&L отчеты и юнит-экономику.
                     </p>
                     <p>
                        Мы работаем как стратегические партнеры: погружаемся в ваши бизнес-процессы, выстраиваем воронку и отвечаем за результат. Наша цель — ваш кратный рост.
                     </p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                     <div className="bg-[#D4AF37]/10 px-5 py-3 rounded-xl text-[10px] font-black text-[#D4AF37] border border-[#D4AF37]/20 uppercase tracking-widest flex items-center gap-2">
                        <Target size={16} /> Ориентация на ROI
                     </div>
                     <div className="bg-white/5 px-5 py-3 rounded-xl text-[10px] font-black text-gray-300 border border-white/10 uppercase tracking-widest flex items-center gap-2">
                        <Briefcase size={16} /> Опыт {'>'} 8 лет
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* 4. OUR VALUES */}
      <div className="py-32 mb-32 relative">
         <div className="absolute inset-0 bg-white/[0.02] -skew-y-3 transform origin-right"></div>
         <div className="container mx-auto max-w-6xl px-6 relative z-10">
             <div className="text-center mb-20">
                <div className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Наши принципы</div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">ДНК агентства</h2>
             </div>
             
             <div className="grid md:grid-cols-2 gap-8">
                {VALUES.map((val, idx) => (
                   <div 
                      key={idx} 
                      className={`bg-white/5 backdrop-blur-md p-10 rounded-3xl border ${val.border} hover:bg-white/10 transition-all duration-300 flex flex-col`}
                   >
                      <div className="flex items-center gap-5 mb-6">
                         <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${val.color} shadow-lg`}>
                            <val.icon size={28} />
                         </div>
                         <h3 className="text-xl font-bold text-white uppercase tracking-tight">{val.title}</h3>
                      </div>
                      <p className="text-gray-400 font-light leading-relaxed">
                         {val.text}
                      </p>
                   </div>
                ))}
             </div>
         </div>
      </div>

      {/* 5. Team Grid */}
      <div className="container mx-auto max-w-6xl px-6 mb-32 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
               <div className="max-w-2xl">
                  <div className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Команда</div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ключевые эксперты</h2>
                  <p className="text-gray-400 text-lg font-light leading-relaxed">
                     Люди, которые будут ежедневно работать над масштабированием вашего бизнеса.
                  </p>
               </div>
               <div className="bg-white/5 px-6 py-3 rounded-full text-[10px] font-black text-gray-300 border border-white/10 uppercase tracking-widest flex items-center gap-3">
                  <Users size={16} className="text-[#D4AF37]" />
                  Штат: 25 человек
               </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {TEAM.map((member, idx) => (
                  <div key={idx} className="group flex flex-col items-center">
                     <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 relative border border-white/10">
                        <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-60"></div>
                     </div>
                     <div className="text-center">
                        <div className="font-bold text-white text-lg mb-1">{member.name}</div>
                        <div className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest">{member.role}</div>
                     </div>
                  </div>
               ))}
               
               {/* Join Us Card */}
               <div className="bg-white/5 rounded-[2rem] border border-dashed border-white/20 flex flex-col items-center justify-center text-center p-8 hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/30 transition-all cursor-pointer group min-h-[300px]">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-gray-500 mb-6 group-hover:scale-110 transition-transform">
                     <Users size={24} />
                  </div>
                  <div className="font-bold text-white mb-2">Стать частью команды</div>
                  <p className="text-xs text-gray-500 mb-6 uppercase tracking-wider font-bold">Ищем таланты</p>
                  <button className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-3 transition-all">
                     Смотреть вакансии <ArrowRight size={14} />
                  </button>
               </div>
            </div>
      </div>

      {/* 6. CTA Block */}
      <div className="container mx-auto max-w-5xl px-6 relative z-10">
         <div className="bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/10 p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]"></div>
            
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mb-8">Готовы обсудить <span className="italic text-[#D4AF37]">рост?</span></h2>
            <p className="text-gray-400 text-lg font-light mb-12 max-w-2xl mx-auto leading-relaxed">
               Оставьте заявку на бесплатную консультацию. Мы проведем экспресс-аудит вашей ниши и предложим стратегию масштабирования.
            </p>
            <div className="max-w-md mx-auto relative z-10">
               <UniversalForm 
                  source="AboutPage" 
                  buttonText="Получить консультацию" 
                  variant="embedded"
               />
            </div>
         </div>
      </div>

    </section>
  );
};

export default AboutPage;
