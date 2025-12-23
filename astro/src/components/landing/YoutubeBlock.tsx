
import React from 'react';
import { Play, Youtube, ArrowUpRight } from 'lucide-react';

const YoutubeBlock: React.FC = () => {
  const videos = [
    { id: '1', title: 'Как работает современное SEO: разбор стратегии', duration: '12:45', thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
    { id: '2', title: 'Кейс: Рост лидов в 3 раза через контекстную рекламу', duration: '08:20', thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
    { id: '3', title: 'Тренды нейросетей для бизнеса в 2026 году', duration: '15:10', thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800' }
  ];

  return (
    <section className="py-24 bg-[#09090b] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/5 text-red-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                    <Youtube size={12} />
                    <span>YouTube Channel</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Смотрите нас на <span className="italic font-serif text-[#D4AF37]">видео</span>
                </h2>
                <p className="text-gray-400 text-lg font-light leading-relaxed">
                    Разбираем сложные механики маркетинга простым языком. Показываем внутреннюю «кухню» проектов.
                </p>
            </div>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-white text-xs font-bold uppercase tracking-widest hover:text-[#D4AF37] transition-all">
                Все видео <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {videos.map((vid) => (
                <div key={vid.id} className="group cursor-pointer">
                    <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 mb-6 group-hover:border-[#D4AF37]/30 transition-all duration-500 shadow-2xl">
                        <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                                <Play size={28} fill="currentColor" className="ml-1" />
                            </div>
                        </div>
                        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white uppercase">
                            {vid.duration}
                        </div>
                    </div>
                    <h3 className="text-lg font-bold text-white leading-tight group-hover:text-[#D4AF37] transition-colors">
                        {vid.title}
                    </h3>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default YoutubeBlock;
