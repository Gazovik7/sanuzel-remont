import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from './constants';
import { Send, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

const Team: React.FC = () => {
  const founder = TEAM_MEMBERS[0];
  const members = TEAM_MEMBERS.slice(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const VKIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zM17.6 12.5c.4.4.8.8 1.2 1.2.3.3.5.6.2 1-.2.3-.5.3-.8.3h-2.3c-.6 0-1-.2-1.4-.6-.2-.2-.4-.4-.6-.6-.1-.1-.2-.2-.3-.2-.1 0-.2.1-.2.3v.6c0 .6-.2.8-.8.8-1.8 0-3.7-1.1-5.5-3.7 0 0-.1-.2-.1-.2-.1-.1-.1 0-.1.1-.2.2-.2h2.3c.3 0 .5.1.6.4.2.5 1 1 1.5.1.1.2.2.3.2.1 0 .2-.1.2-.3V10.6c0-1-.3-1.1-1.1-1.1-.2 0-.2-.1-.2-.2 0-.2.4-.4 1.2-.4.4 0 .6.1.7.3.1.2.1.5.1.9v1.3c0 .2 0 .3.1.4.1.1.2.1.3 0 .5-.6.9-1.2 1.3-1.9.1-.2.3-.3.5-.3h2.3c.3 0 .5.1.6.3 0 .3-.3.7-.5 1-.3.4-.6.8-1 1.2-.1.1-.1.2-.1.3 0 .1.1.2.2.3z"/>
    </svg>
  );

  return (
    <section className="py-24 bg-[#09090b] text-white overflow-hidden relative" id="team">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_20%,#D4AF37/0.02,transparent_50%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
        
        {/* Title Above Everything */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
                <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.3em] mb-3 block">Команда экспертов</span>
                <h2 className="text-4xl md:text-6xl font-serif font-medium text-white leading-tight">
                    Кто работает <span className="italic text-gradient-gold text-white">над результатом</span>
                </h2>
            </div>
            <div className="flex gap-2">
                <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all"><ChevronLeft size={24} /></button>
                <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all"><ChevronRight size={24} /></button>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            
            {/* Founder Card: Large size (Approx 2x employee cards) */}
            <div className="lg:w-[600px] flex-shrink-0">
                <div className="h-full bg-white/[0.03] border border-white/10 rounded-[3rem] p-8 md:p-10 shadow-2xl relative group overflow-hidden flex items-center gap-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>
                    
                    <div className="w-44 md:w-52 aspect-[4/5] rounded-[2.5rem] overflow-hidden border-2 border-[#D4AF37]/30 shrink-0 shadow-xl relative z-10">
                        <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1 space-y-5 relative z-10">
                        <div>
                            <div className="text-[9px] font-black text-[#D4AF37] uppercase tracking-widest mb-1">Основатель агентства</div>
                            <h3 className="text-2xl font-bold text-white leading-tight">{founder.name}</h3>
                        </div>

                        <div className="space-y-2">
                            {founder.bio?.map((fact, i) => (
                                <div key={i} className="flex items-start gap-2.5">
                                    <CheckCircle2 size={14} className="text-[#D4AF37] shrink-0 mt-0.5" />
                                    <span className="text-gray-400 text-[11px] leading-snug font-light">{fact}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-2 pt-1">
                            <a href={founder.socials?.telegram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-[#2AABEE] text-white rounded-xl transition-all hover:scale-110">
                                <Send size={16} fill="currentColor" />
                            </a>
                            <a href={founder.socials?.vk} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/10 transition-all hover:scale-110">
                                <VKIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Slider: Employees Cards */}
            <div 
                ref={scrollRef}
                className="flex-1 flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide items-stretch"
            >
                <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
                {members.map((member, idx) => (
                    <motion.div 
                        key={idx} 
                        className="min-w-[240px] md:min-w-[260px] snap-start bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-6 hover:border-[#D4AF37]/30 transition-all duration-500 group flex flex-col"
                    >
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-gray-800">
                            <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100" />
                        </div>
                        <div className="mt-auto">
                            <h4 className="font-bold text-white text-base group-hover:text-[#D4AF37] transition-colors">{member.name}</h4>
                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">{member.role}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
};

export default Team;