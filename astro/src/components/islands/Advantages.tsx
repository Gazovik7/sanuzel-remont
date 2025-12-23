
import React from 'react';
import { ADVANTAGES } from '../landing/constants';

const Advantages: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
            Почему выбирают <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">MPAgency</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light">
                Системный подход, который превращает хаос в управляемую прибыль.
            </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ADVANTAGES.map((adv, idx) => (
            <div 
              key={idx} 
              className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 hover:border-primary/20 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 border border-gray-100 shadow-sm group-hover:scale-110 transition-transform duration-300 group-hover:border-primary/20">
                <adv.icon className="text-gray-400 group-hover:text-primary transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">{adv.title}</h3>
              <p className="text-gray-500 leading-relaxed text-base">{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
