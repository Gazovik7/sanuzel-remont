
import React from 'react';
import { MAIN_AWARDS } from '../landing/constants';
import { Trophy, ArrowUpRight } from 'lucide-react';

const AwardsBlock: React.FC = () => {
  return (
    <section className="py-32 bg-[#09090b] text-white">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                <h2 className="text-4xl md:text-6xl font-serif font-medium leading-tight">
                    Наши <span className="italic text-[#D4AF37]">достижения</span> <br/>
                    и награды
                </h2>
                <p className="text-gray-400 max-w-md text-right md:text-right text-sm uppercase tracking-widest border-t border-gray-800 pt-4">
                    Подтвержденная экспертиза в рейтингах рунета
                </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-px bg-gray-800 border border-gray-800">
                {MAIN_AWARDS.slice(0, 3).map((award, idx) => (
                    <div key={idx} className="bg-[#09090b] p-12 group hover:bg-[#111] transition-colors relative overflow-hidden">
                        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-[#D4AF37]">
                            <ArrowUpRight size={24} />
                        </div>
                        <div className="text-6xl font-serif font-bold text-[#D4AF37] mb-6">#{award.place}</div>
                        <h3 className="text-xl font-bold mb-4 leading-tight">{award.title}</h3>
                        <p className="text-gray-500 text-sm">{award.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default AwardsBlock;
