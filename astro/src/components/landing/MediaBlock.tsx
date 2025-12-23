import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Newspaper, ArrowRight } from 'lucide-react';

const publications = [
  { source: 'vc.ru', title: 'Как масштабировать SEO на западных рынках: опыт и ошибки', link: '#', logo: 'VC' },
  { source: 'РБК Компании', title: 'Тренды поискового продвижения in 2025 году', link: '#', logo: 'РБК' },
  { source: 'Бизнес Инсайт', title: 'Маркетинг как математика: почему важна аналитика', link: '#', logo: 'BI' }
];

const MediaBlock: React.FC = () => {
  return (
    <section className="py-24 bg-white text-[#09090b] overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
            <div>
                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Экспертиза в СМИ</span>
                <h2 className="text-3xl md:text-5xl font-serif font-medium text-[#09090b]">Публикации и <span className="italic text-[#D4AF37]">статьи</span></h2>
            </div>
            <a href="#" className="flex items-center gap-2 text-[#D4AF37] font-bold uppercase tracking-widest text-xs hover:text-[#09090b] transition-colors group">
                Все публикации <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {publications.map((pub, idx) => (
                <motion.a
                    href={pub.link}
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between h-full"
                >
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <div className="text-xl font-black text-gray-300 group-hover:text-[#D4AF37] transition-all font-serif italic">{pub.logo}</div>
                            <Newspaper size={18} className="text-gray-400 group-hover:text-[#D4AF37] transition-colors" />
                        </div>
                        <h3 className="text-lg font-bold text-[#09090b] group-hover:text-[#D4AF37] transition-colors leading-snug mb-4">{pub.title}</h3>
                    </div>
                    <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{pub.source}</span>
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-[#D4AF37] group-hover:text-black transition-all"><ArrowRight size={14} /></div>
                    </div>
                </motion.a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MediaBlock;