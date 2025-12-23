
import React from 'react';
import { DETAILED_STAGES } from '../landing/constants';

const DetailedStages: React.FC = () => {
  return (
    <section className="py-32 bg-[#09090b] text-white">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
                
                {/* Sticky Header */}
                <div className="lg:sticky lg:top-32 h-fit">
                    <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Процесс</span>
                    <h2 className="text-4xl md:text-6xl font-serif font-medium mb-8 leading-tight">
                        Как мы <br/>
                        <span className="italic text-gray-500">работаем</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                        Прозрачный процесс от аудита до первых результатов. Мы держим вас в курсе на каждом этапе.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                    {DETAILED_STAGES.map((stage, idx) => (
                        <div key={idx} className="group border-t border-gray-800 pt-8 transition-colors hover:border-[#D4AF37]">
                            <div className="text-5xl font-serif font-bold text-[#D4AF37] mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                                {stage.num}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wide">
                                {stage.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed font-light">
                                {stage.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default DetailedStages;
