
import React from 'react';
import { TOPICS_LIST } from '../constants';

const ExperienceBlock: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto max-w-[1400px] px-6 md:px-12">
            <div className="text-center mb-16">
                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Экспертиза</span>
                <h2 className="text-3xl md:text-5xl font-serif font-medium text-[#09090b]">Опыт в тематиках</h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
                {TOPICS_LIST.map((topic, idx) => (
                    <span 
                        key={idx} 
                        className="px-6 py-3 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-[#09090b] hover:text-[#09090b] transition-all cursor-default bg-white"
                    >
                        {topic}
                    </span>
                ))}
            </div>
        </div>
    </section>
  );
};

export default ExperienceBlock;
