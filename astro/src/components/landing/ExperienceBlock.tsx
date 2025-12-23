
import React, { useState } from 'react';
import { TOPICS_LIST } from './constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ExperienceBlock: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const INITIAL_COUNT = 12;

  const displayedTopics = isExpanded ? TOPICS_LIST : TOPICS_LIST.slice(0, INITIAL_COUNT);

  return (
    <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto max-w-[1400px] px-6 md:px-12">
            <div className="text-center mb-16">
                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Экспертиза</span>
                <h2 className="text-3xl md:text-5xl font-serif font-medium text-[#09090b]">Опыт в тематиках</h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto transition-all duration-500">
                {displayedTopics.map((topic, idx) => (
                    <span 
                        key={idx} 
                        className="px-6 py-3 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-[#09090b] hover:text-[#09090b] transition-all cursor-default bg-white"
                    >
                        {topic}
                    </span>
                ))}
            </div>

            {TOPICS_LIST.length > INITIAL_COUNT && (
                <div className="mt-12 text-center">
                    <button 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[#09090b] text-[#09090b] font-bold hover:bg-[#09090b] hover:text-white transition-all group"
                    >
                        {isExpanded ? (
                            <>Показать меньше <ChevronUp size={18} className="group-hover:-translate-y-1 transition-transform" /></>
                        ) : (
                            <>Показать все тематики <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" /></>
                        )}
                    </button>
                </div>
            )}
        </div>
    </section>
  );
};

export default ExperienceBlock;
