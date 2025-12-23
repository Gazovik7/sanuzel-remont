
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SeoBlockProps {
  title: string;
  children: React.ReactNode;
}

const SeoBlock: React.FC<SeoBlockProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-8 px-4 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto max-w-4xl">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition-all shadow-sm group hover:shadow-md"
        >
          <span className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors text-left">
            {title}
          </span>
          <div className={`p-2 rounded-full bg-gray-100 text-gray-500 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            <ChevronDown size={20} />
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-6 px-4 text-gray-600 leading-relaxed text-sm md:text-base space-y-4 border-t border-dashed border-gray-200 mt-4">
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SeoBlock;
