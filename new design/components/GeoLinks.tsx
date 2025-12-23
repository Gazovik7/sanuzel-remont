
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import { CITIES_LIST } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const GeoLinks: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Show first 15 cities initially
  const initialCount = 15;
  const visibleCities = isExpanded ? CITIES_LIST : CITIES_LIST.slice(0, initialCount);

  return (
    <section className="py-24 md:py-32 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        
        {/* Header */}
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#09090b] mb-6">
                Продвижение сайтов <br/>
                <span className="italic text-[#D4AF37]">по всей России</span>
            </h2>
            <p className="text-gray-500 text-lg font-light max-w-3xl mx-auto leading-relaxed">
                Наша команда занимается продвижением сайтов не только в Москве, но и в других городах и регионах России. Мы учитываем региональную специфику выдачи поисковых систем.
            </p>
        </div>

        {/* Cities Grid */}
        <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 gap-x-4 mb-12"
        >
            <AnimatePresence>
                {visibleCities.map((city, idx) => (
                    <motion.div
                        key={city}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-center"
                    >
                        <a 
                            href="#" 
                            className="text-gray-500 hover:text-[#D4AF37] font-medium text-base md:text-lg transition-colors cursor-pointer block py-1"
                            onClick={(e) => e.preventDefault()} // Placeholder link
                        >
                            {city}
                        </a>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>

        {/* Toggle Button */}
        {CITIES_LIST.length > initialCount && (
            <div className="flex justify-center">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="group flex items-center gap-3 px-8 py-4 bg-[#F9F9FB] hover:bg-[#F0F0F2] rounded-xl transition-all duration-300 w-full md:w-auto justify-center"
                >
                    <span className="text-xs font-bold uppercase tracking-widest text-[#09090b]">
                        {isExpanded ? 'Свернуть список' : 'Показать еще города'}
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

export default GeoLinks;
