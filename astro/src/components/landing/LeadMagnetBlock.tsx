
import React from 'react';
import { motion } from 'framer-motion';
import { Play, CheckCircle2, Clock, Users, Sparkles, Send, ShieldCheck, ArrowRight } from 'lucide-react';

const LeadMagnetBlock: React.FC = () => {
  return (
    <section className="py-24 bg-[#09090b] text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#D4AF37/0.05,transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
        
        {/* 1. Header: Centered and Balanced */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.2em]"
            >
                <Sparkles size={12} />
                Бесплатный мастер-класс
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-serif font-medium leading-[1.1]">
                Как увеличить количество заявок <br/>
                <span className="italic text-gradient-gold">в 2 и более раза</span>
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                Пошаговый разбор системы, которая приносит более 100 лидов в месяц и окупает вложения в SEO в 5 раз.
            </p>
        </div>

        {/* 2. Main Content Grid: Video + CTA */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Video Preview (8 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 group relative"
          >
            <div className="relative h-full aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-black">
                <img 
                    src="/img/lm-seo.png" 
                    alt="Masterclass preview" 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 md:w-28 md:h-28 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.3)] transform group-hover:scale-110 transition-all duration-500 cursor-pointer">
                        <Play size={36} fill="black" className="text-black ml-1" />
                    </div>
                </div>

                {/* Floating Badges */}
                <div className="absolute top-6 left-6 flex gap-3">
                    <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                        HD Quality
                    </div>
                </div>

                <div className="absolute bottom-6 left-6 flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white">
                        <Clock size={12} className="text-[#D4AF37]" />
                        18 минут полезного контента
                    </div>
                </div>
            </div>
          </motion.div>

          {/* CTA Card (4 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="h-full bg-white/[0.03] backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] shadow-2xl flex flex-col justify-center text-center relative overflow-hidden group/card">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-3xl transition-transform group-hover/card:scale-150 duration-700"></div>
                
                <div className="relative z-10 space-y-8">
                    <div className="space-y-3">
                        <div className="w-16 h-16 bg-[#2AABEE]/10 rounded-2xl flex items-center justify-center text-[#2AABEE] mx-auto mb-6">
                            <Send size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-white leading-tight">Смотреть <br/>бесплатно</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Доступ откроется мгновенно в нашем Telegram-боте
                        </p>
                    </div>

                    <a 
                        href="https://t.me/mpagencyru" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 w-full bg-[#2AABEE] hover:bg-[#229ED9] text-white py-6 rounded-2xl font-black uppercase tracking-[0.1em] text-sm transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-1 active:scale-[0.98]"
                    >
                        Получить в Telegram
                        <ArrowRight size={18} />
                    </a>

                    <div className="flex flex-col items-center gap-3 pt-4">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map(i => (
                                <img key={i} src={`https://i.pravatar.cc/100?img=${i+30}`} className="w-8 h-8 rounded-full border-2 border-[#09090b]" alt="user" />
                            ))}
                            <div className="w-8 h-8 rounded-full border-2 border-[#09090b] bg-gray-800 flex items-center justify-center text-[8px] font-bold">
                                +3k
                            </div>
                        </div>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Присоединяйтесь к сообществу</p>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>

        {/* 3. Bottom Benefits: Horizontal Flow */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-white/5">
            {[
                { title: 'Без воды', desc: 'Только рабочие связки и реальные кейсы агентства', icon: ShieldCheck },
                { title: 'Нейровыдача', desc: 'Как забирать трафик из ИИ-ответов Google и Яндекс', icon: Sparkles },
                { title: 'Чек-лист', desc: 'В конце видео получите файл для самопроверки сайта', icon: CheckCircle2 }
            ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500">
                        <item.icon size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-sm text-white mb-1">{item.title}</h4>
                        <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default LeadMagnetBlock;
