
import React from 'react';
import { MAIN_AWARDS, CERTIFICATES_2025 } from './constants';
import { Award, Star, Trophy, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const AwardsBlock: React.FC = () => {
  return (
    <section className="py-24 bg-[#09090b] relative overflow-hidden text-white">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="lg:w-1/2 space-y-12">
                <div className="space-y-4 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-[10px] font-black uppercase tracking-widest">
                        <Trophy size={12} />
                        Результаты 2025
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-white leading-tight">Награды и <br/> <span className="italic text-gradient-gold">признание рынка</span></h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {CERTIFICATES_2025.map((cert, idx) => (
                        <motion.div key={idx} whileHover={{ y: -10 }} className="group relative aspect-[3/4] bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/5 transition-all">
                            <img src={cert.image} alt={cert.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4"><span className="text-white text-[10px] font-bold uppercase tracking-wider">{cert.title}</span></div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="lg:w-1/2">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 md:p-12 h-full">
                    <div className="flex items-center justify-between mb-10">
                        <h3 className="text-2xl font-bold text-white">Отраслевые рейтинги</h3>
                        <div className="flex gap-1 text-[#D4AF37]">
                            {[...Array(5)].map((_, i) => (<Star key={i} size={14} fill="currentColor" />))}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
                        {MAIN_AWARDS.map((award, idx) => (
                            <div key={idx} className="flex items-center gap-4 py-4 border-b border-white/5 group hover:bg-white/[0.02] transition-colors rounded-lg px-2 -mx-2">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex flex-col items-center justify-center border border-white/10 shrink-0 group-hover:border-[#D4AF37]/30 transition-all">
                                    <span className="text-[#D4AF37] font-black text-lg leading-none">{award.place}</span>
                                    <span className="text-[7px] text-gray-500 font-bold uppercase">место</span>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-[10px] font-black text-[#D4AF37] uppercase tracking-tighter opacity-60">{award.source}</div>
                                    <div className="text-xs font-bold text-gray-300 group-hover:text-white transition-colors leading-snug">{award.title.replace(`${award.place} место `, '')}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-12 text-gray-500 italic"><div className="h-px w-8 bg-white/10"></div><span className="text-[10px] font-bold">+ еще 40+ наград в узких нишах</span><div className="h-px w-8 bg-white/10"></div></div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsBlock;
