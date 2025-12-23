
import React from 'react';
import { CASES } from '../landing/constants';
import { ArrowUpRight } from 'lucide-react';

const Cases: React.FC = () => {
  return (
    <section id="cases" className="py-20 bg-[#FBF8F3]">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Результаты наших клиентов</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
           {CASES.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group flex flex-col">
                 <div className="h-48 overflow-hidden relative">
                    <img 
                       src={item.image} 
                       alt={item.title} 
                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full p-2">
                       <ArrowUpRight size={20} className="text-gray-900" />
                    </div>
                 </div>
                 <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-bold text-gray-900 leading-tight mb-3 line-clamp-2">{item.title}</h3>
                    
                    <div className="mt-auto pt-4 border-t border-gray-100">
                       <div className="grid grid-cols-2 gap-4">
                          <div>
                             <div className="text-xs text-gray-400 uppercase">Рост</div>
                             <div className="text-xl font-black text-amber-500">{item.result}</div>
                          </div>
                          <div className="text-right">
                             <div className="text-xs text-gray-400 uppercase">Срок</div>
                             <div className="font-bold text-gray-700">{item.period}</div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
