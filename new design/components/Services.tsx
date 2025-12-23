
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
            Что входит в стоимость SEO продвижения?
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="text-4xl font-black text-gray-100 mb-4 group-hover:text-amber-100 transition-colors">
                 0{idx + 1}
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-amber-600 transition-colors uppercase tracking-wide">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                {service.description}
              </p>
              <div className="w-8 h-1 bg-gray-200 group-hover:bg-amber-400 transition-colors mt-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
