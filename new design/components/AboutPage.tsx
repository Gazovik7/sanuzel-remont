
import React from 'react';
import { TEAM, STATS, CLIENTS, MAIN_AWARDS } from '../constants';
import { Quote, Trophy, Users, Briefcase, Target, Calculator, HeartHandshake, Eye, Lightbulb, TrendingUp, CheckCircle2, Building2 } from 'lucide-react';
import UniversalForm from './UniversalForm';
import Breadcrumbs from './Breadcrumbs';

const AboutPage: React.FC = () => {
  
  const VALUES = [
    {
      icon: Calculator,
      color: 'bg-blue-100 text-blue-600',
      border: 'border-l-4 border-blue-500',
      title: 'Математика > Интуиция',
      text: 'Мы не верим в «чуйку» или «удачу». Любое решение — от выбора ниши до ставки в рекламе — опирается на цифры, P&L отчеты и юнит-экономику. Мы не запускаем процессы, пока не увидим прибыль в таблице.'
    },
    {
      icon: Eye,
      color: 'bg-purple-100 text-purple-600',
      border: 'border-l-4 border-purple-500',
      title: 'Радикальная честность',
      text: 'Если мы видим, что ваш товар не "полетит" или юнит-экономика отрицательная, мы скажем об этом прямо на старте. Мы лучше откажемся от проекта, чем будем тратить ваш бюджет впустую.'
    },
    {
      icon: Lightbulb,
      color: 'bg-yellow-100 text-yellow-600',
      border: 'border-l-4 border-yellow-500',
      title: 'Не просто «руки», а «головы»',
      text: 'Многие агентства просто выполняют настройки. Мы — предлагаем гипотезы. Наша задача — не просто выложить карточки, а придумать, как обойти конкурентов и увеличить вашу долю рынка.'
    },
    {
      icon: HeartHandshake,
      color: 'bg-pink-100 text-pink-600',
      border: 'border-l-4 border-pink-500',
      title: 'Играем в долгую',
      text: 'Нам не интересны разовые сделки. Мы строим работу так, чтобы вы росли годами. Средний срок жизни клиента в нашем агентстве — 14 месяцев, и мы этим гордимся.'
    }
  ];

  return (
    <section className="pt-24 pb-16 bg-white min-h-screen animate-fade-in">
      
      {/* 1. Hero Section */}
      <div className="container mx-auto max-w-6xl px-4 mb-16">
        <Breadcrumbs 
            items={[{ label: 'Об агентстве', href: '/about' }]} 
            theme="dark" 
        />
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-gray-200">
             <Building2 size={16} />
             <span>О компании MPAgency</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
            Мы превращаем маркетплейсы в <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">управляемый бизнес</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Не просто "настраиваем рекламу", а строим системные продажи. Наша цель — стать вашим внешним отделом e-commerce, который отвечает за прибыль, а не за процессы.
          </p>
        </div>
      </div>

      {/* 2. Stats Bar */}
      <div className="bg-gray-900 text-white py-16 mb-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-800">
              {STATS.map((stat, idx) => (
                 <div key={idx} className="px-4">
                    <div className="text-4xl md:text-5xl font-black text-primary mb-2">{stat.value}{stat.suffix}</div>
                    <div className="text-gray-400 font-medium text-sm uppercase tracking-wider">{stat.label}</div>
                 </div>
              ))}
              <div className="px-4">
                 <div className="text-4xl md:text-5xl font-black text-primary mb-2">15+</div>
                 <div className="text-gray-400 font-medium text-sm uppercase tracking-wider">Экспертов в штате</div>
              </div>
           </div>
        </div>
      </div>

      {/* 3. Founder Story */}
      <div className="container mx-auto max-w-6xl px-4 mb-20">
         <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-0">
               <div className="h-96 lg:h-auto relative bg-gray-100 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                    alt="Иван Смирнов, основатель MPAgency, фотография" 
                    title="Иван Смирнов - руководитель MPAgency"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
                     <div className="text-white font-bold text-2xl">Иван Смирнов</div>
                     <div className="text-gray-300 text-sm font-medium">Основатель MPAgency</div>
                  </div>
               </div>
               <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white relative">
                  <div className="absolute top-8 right-8 opacity-10 text-primary">
                      <Quote size={80} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 relative z-10">
                     "Маркетплейсы — это не казино, а математика"
                  </h3>
                  <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-8 relative z-10">
                     <p>
                        Я основал MPAgency, когда увидел, что 90% селлеров действуют вслепую. Они запускают товары, не считая юнит-экономику, и сливают бюджеты на рекламу, не понимая реальной эффективности.
                     </p>
                     <p>
                        Мы решили пойти другим путем. Мы не берем проекты, где не видим потенциала роста. Но если берем — мы работаем как партнеры: погружаемся в цифры, выстраиваем процессы и отвечаем за результат по договору.
                     </p>
                  </div>
                  <div className="flex flex-wrap gap-4 relative z-10">
                     <div className="bg-blue-50 px-4 py-2.5 rounded-xl text-sm font-bold text-blue-800 border border-blue-100 flex items-center gap-2">
                        <Target size={18} /> Ориентация на ROI
                     </div>
                     <div className="bg-purple-50 px-4 py-2.5 rounded-xl text-sm font-bold text-purple-800 border border-purple-100 flex items-center gap-2">
                        <Briefcase size={18} /> Опыт > 5 лет
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* 4. OUR VALUES (NEW SECTION) */}
      <div className="bg-gray-50 py-20 mb-20 border-y border-gray-200">
         <div className="container mx-auto max-w-6xl px-4">
             <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">ДНК нашего агентства</h2>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                   Принципы, благодаря которым 8 из 10 клиентов работают с нами больше года.
                </p>
             </div>
             
             <div className="grid md:grid-cols-2 gap-8">
                {VALUES.map((val, idx) => (
                   <div 
                      key={idx} 
                      className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col ${val.border}`}
                   >
                      <div className="flex items-center gap-4 mb-4">
                         <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${val.color}`}>
                            <val.icon size={24} />
                         </div>
                         <h3 className="text-xl font-bold text-gray-900">{val.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                         {val.text}
                      </p>
                   </div>
                ))}
             </div>
         </div>
      </div>

      {/* 5. Team Grid */}
      <div className="container mx-auto max-w-6xl px-4 mb-20">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
               <div>
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Ключевая команда</h2>
                  <p className="text-xl text-gray-500 max-w-2xl">
                     Люди, которые будут работать над вашим проектом.
                  </p>
               </div>
               <div className="bg-gray-100 px-5 py-2.5 rounded-full text-sm font-bold text-gray-700 flex items-center gap-2">
                  <Users size={18} />
                  Штат: 25 человек
               </div>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
               {TEAM.map((member, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all group">
                     <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-5 border-4 border-gray-50 shadow-inner group-hover:scale-105 transition-transform">
                        <img 
                            src={member.image} 
                            alt={member.name + " - " + member.role} 
                            title={member.name + " - член команды MPAgency"}
                            className="w-full h-full object-cover" 
                        />
                     </div>
                     <div className="text-center">
                        <div className="font-bold text-gray-900 text-lg mb-1">{member.name}</div>
                        <div className="text-primary text-xs font-bold uppercase tracking-wider mb-3">{member.role}</div>
                        <div className="h-px w-12 bg-gray-200 mx-auto mb-3"></div>
                        <p className="text-gray-500 text-sm leading-snug">{member.description}</p>
                     </div>
                  </div>
               ))}
               
               {/* Join Us Card */}
               <div className="bg-gray-50 p-6 rounded-3xl border border-dashed border-gray-300 flex flex-col items-center justify-center text-center hover:bg-gray-100 transition-colors cursor-pointer group min-h-[280px]">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-gray-400 mb-4 group-hover:scale-110 transition-transform shadow-sm">
                     <Users size={24} />
                  </div>
                  <div className="font-bold text-gray-900 mb-1">Стать частью команды</div>
                  <p className="text-sm text-gray-500">Ищем таланты</p>
                  <button className="mt-4 text-xs font-bold text-primary uppercase tracking-wider border-b border-primary/20 pb-0.5 hover:border-primary transition-all">
                     Смотреть вакансии
                  </button>
               </div>
            </div>
      </div>

      {/* 6. Awards & Achievements */}
      <div className="bg-[#0F172A] py-20 text-white relative overflow-hidden mb-16">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
         <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-black mb-4">Наши достижения</h2>
               <p className="text-gray-400">Признаны профессиональным сообществом</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {MAIN_AWARDS.map((award, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-5 items-start hover:bg-white/10 transition-colors">
                     <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br ${award.color} text-white shadow-lg`}>
                        <Trophy size={28} />
                     </div>
                     <div>
                        <div className="font-bold text-lg leading-tight mb-2">{award.title}</div>
                        <div className="text-gray-400 text-sm mb-3">{award.description}</div>
                        <div className="inline-block px-2 py-1 rounded bg-white/10 text-[10px] font-bold uppercase tracking-wider">{award.media}</div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* 7. Clients Marquee (Compact) */}
      <div className="py-12 bg-white mb-16 overflow-hidden">
          <div className="container mx-auto px-4 text-center mb-8">
             <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Нам доверяют бренды</p>
          </div>
          <div className="flex animate-marquee gap-16 items-center whitespace-nowrap">
             {[...CLIENTS, ...CLIENTS].map((client, idx) => (
                <span key={idx} className="text-3xl font-black text-gray-200 select-none hover:text-gray-400 transition-colors cursor-default">{client.logoText}</span>
             ))}
          </div>
      </div>

      {/* 8. CTA Block */}
      <div className="container mx-auto max-w-4xl px-4">
         <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Готовы обсудить ваш проект?</h2>
            <p className="text-lg text-gray-500 mb-8 max-w-xl mx-auto">
               Оставьте заявку на бесплатную консультацию. Мы проанализируем вашу нишу и предложим стратегию роста.
            </p>
            <div className="max-w-md mx-auto">
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
