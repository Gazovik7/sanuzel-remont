
import React from 'react';
import { TARGET_AUDIENCE } from '../landing/constants';
import { ArrowRight } from 'lucide-react';
import { useModal } from '../landing/Modal';

const TargetAudience: React.FC = () => {
  const { openModal } = useModal();

  const handleOpenConsultation = (e: React.MouseEvent) => {
    e.preventDefault();
    openModal({
      title: 'Бесплатная консультация',
      subtitle: 'Давайте обсудим вашу нишу и поймем, чем мы можем быть полезны.',
      source: 'TargetAudience',
      buttonText: 'Записаться'
    });
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-[#0F172A] text-white relative overflow-hidden">
      {/* Gradient Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/20 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-8 leading-tight tracking-tight">
          С кем мы работаем
        </h2>
        <p className="text-2xl text-gray-400 text-center mb-20 max-w-4xl mx-auto leading-relaxed font-light">
          Работаем с теми, для кого маркетплейсы — не разовый эксперимент, а серьёзный канал продаж.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {TARGET_AUDIENCE.map((item, idx) => (
            <div key={idx} className="relative bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-white/5 hover:border-primary/50 overflow-hidden transition-all duration-300 group hover:-translate-y-1 flex flex-col h-full">
              {/* Image Background */}
              <div className="absolute inset-0">
                 <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40"></div>
              </div>
              
              <div className="relative p-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300 text-gray-300 border border-white/10">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg flex-grow">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button 
            onClick={handleOpenConsultation}
            className="inline-flex items-center gap-3 bg-white text-gray-900 px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-lg hover:scale-105"
          >
            Понять, подходим ли мы вам
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
