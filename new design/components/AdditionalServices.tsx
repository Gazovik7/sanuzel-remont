
import React from 'react';
import { ADDITIONAL_SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

const AdditionalServices: React.FC = () => {
  return (
    <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
            <div className="text-center mb-24">
                <h2 className="text-4xl md:text-6xl font-serif font-medium text-[#09090b] mb-6">Дополнительные услуги</h2>
                <p className="text-gray-500 text-lg font-light">Комплексные решения для вашего цифрового присутствия</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ADDITIONAL_SERVICES.map((service, idx) => (
                    <div key={idx} className="group p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-500 bg-white hover:border-[#D4AF37]/20 flex flex-col h-full">
                        <h3 className="font-serif font-bold text-2xl mb-6 text-[#09090b] group-hover:text-[#D4AF37] transition-colors">{service.title}</h3>
                        
                        <ul className="space-y-3 mb-8 flex-1">
                            {service.items.map((item, i) => (
                                <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                                    <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-[#D4AF37]"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        
                        <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                            <div className="text-[#09090b] font-bold text-lg">{service.price}</div>
                            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-[#09090b] group-hover:text-white group-hover:border-[#09090b] transition-all">
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default AdditionalServices;
