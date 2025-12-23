
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { CMS_LIST } from './constants';
import { motion, AnimatePresence } from 'framer-motion';

const CmsLinks: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Show first 8 CMS initially
  const initialCount = 8;
  const visibleCms = isExpanded ? CMS_LIST : CMS_LIST.slice(0, initialCount);

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        
        {/* Header */}
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#09090b] mb-4">
                CMS с которыми <span className="italic text-[#D4AF37]">работаем</span>
            </h2>
            <p className="text-gray-500 text-sm font-light max-w-2xl mx-auto leading-relaxed">
                Опыт продвижения на всех популярных системах управления контентом.
            </p>
        </div>

        {/* CMS Grid */}
        <motion.div 
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8"
        >
            <AnimatePresence>
                {visibleCms.map((cms, idx) => (
                    <motion.div
                        key={cms.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="group"
                    >
                        <a 
                            href="#" 
                            className="block bg-[#F9F9FB] border border-transparent rounded-lg p-4 text-center hover:bg-white hover:border-[#D4AF37]/30 hover:shadow-lg transition-all duration-300 flex items-center gap-3 group-hover:-translate-y-0.5"
                            onClick={(e) => e.preventDefault()}
                        >
                            <div className="w-8 h-8 shrink-0 bg-white rounded flex items-center justify-center text-gray-400 group-hover:text-[#D4AF37] transition-colors duration-300 shadow-sm">
                                <cms.icon size={18} strokeWidth={1.5} />
                            </div>
                            <div className="font-bold text-sm text-[#09090b] truncate">
                                {cms.name}
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
