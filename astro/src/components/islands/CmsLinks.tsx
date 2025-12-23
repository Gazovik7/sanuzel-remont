
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { CMS_LIST } from '../landing/constants';
import { motion, AnimatePresence } from 'framer-motion';

const CmsLinks: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Show first 8 CMS initially
  const initialCount = 8;
  const visibleCms = isExpanded ? CMS_LIST : CMS_LIST.slice(0, initialCount);

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        
        {/* Header */}
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#09090b] mb-6">
                CMS с которыми <br/>
                <span className="italic text-[#D4AF37]">работаем</span>
            </h2>
            <p className="text-gray-500 text-lg font-light max-w-3xl mx-auto leading-relaxed">
                Мы имеем опыт продвижения сайтов на всех популярных системах управления контентом. 
                Знаем технические нюансы каждой платформы для эффективного SEO.
            </p>
        </div>

        {/* CMS Grid */}
        <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12"
        >
            <AnimatePresence>
                {visibleCms.map((cms, idx) => (
                    <motion.div
                        key={cms.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="group"
                    >
                        <a 
                            href="#" 
                            className="block bg-white border border-gray-100 rounded-xl p-8 text-center hover:shadow-xl hover:border-[#D4AF37]/30 transition-all duration-300 h-full flex flex-col items-center justify-center gap-4 group-hover:-translate-y-1"
                            onClick={(e) => e.preventDefault()}
                        >
                            <div className="w-12 h-12 bg-[#F9F9FB] rounded-full flex items-center justify-center text-gray-400 group-hover:bg-[#09090b] group-hover:text-white transition-colors duration-300">
                                <cms.icon size={24} strokeWidth={1.5} />
                            </div>
                            <div>
                                <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                    Продвижение на
                                </div>
                                <div className="font-bold text-lg text-[#09090b]">
                                    {cms.name}
                                </div>
                            </div>
                        </a>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>

        {/* Toggle Button */}
        {CMS_LIST.length > initialCount && (
            <div className="flex justify-center">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="group flex items-center gap-3 px-8 py-4 bg-[#F9F9FB] hover:bg-[#F0F0F2] rounded-xl transition-all duration-300"
                >
                    <span className="text-xs font-bold uppercase tracking-widest text-[#09090b]">
                        {isExpanded ? 'Свернуть список' : 'Показать все CMS'}
                    </span>
                    <div className={`w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm text-[#09090b] group-hover:text-[#D4AF37] transition-colors duration-300`}>
                        {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </div>
                </button>
            </div>
        )}

      </div>
    </section>
  );
};

export default CmsLinks;
