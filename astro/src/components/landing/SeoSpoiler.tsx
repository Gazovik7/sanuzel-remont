import React, { useState } from 'react';
import { ChevronDown, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SeoSpoilerProps {
  title?: string;
  preview?: string;
  fullText?: string;
}

const SeoSpoiler: React.FC<SeoSpoilerProps> = ({ title, preview, fullText }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!title || !fullText) return null;

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div 
          className={`bg-gray-50 rounded-[2rem] border transition-all duration-500 overflow-hidden ${isOpen ? 'border-[#D4AF37]/30 shadow-xl' : 'border-transparent'}`}
        >
          {/* Header/Preview */}
          <div 
            className="p-8 md:p-10 cursor-pointer flex flex-col md:flex-row items-start md:items-center gap-6"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#D4AF37] shadow-sm shrink-0">
              <FileText size={24} />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-[#09090b] mb-2">{title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 md:line-clamp-none">
                {preview}
              </p>
            </div>
            <div className={`w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-400 transition-transform duration-500 ${isOpen ? 'rotate-180 text-[#D4AF37]' : ''}`}>
              <ChevronDown size={20} />
            </div>
          </div>

          {/* Expanded Content */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="px-8 pb-10 md:px-28">
                  <div className="h-px bg-gray-200 mb-8 w-full"></div>
                  <div 
                    className="prose prose-sm max-w-none text-gray-600 
                      [&>h3]:text-lg [&>h3]:font-bold [&>h3]:text-[#09090b] [&>h3]:mt-8 [&>h3]:mb-4
                      [&>p]:mb-4 [&>p]:leading-relaxed
                      [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2 [&>ul]:mb-6
                    "
                    dangerouslySetInnerHTML={{ __html: fullText }}
                  />
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="mt-8 text-[10px] font-black uppercase tracking-[0.2em] text-[#D4AF37] hover:text-black transition-colors"
                  >
                    Свернуть текст
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SeoSpoiler;