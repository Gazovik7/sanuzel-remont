
import React from 'react';
import { SEO_BENEFITS } from '../landing/constants';

const SeoBenefits: React.FC = () => {
  return (
    <section className="py-32 bg-[#F9F9FB] border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
                
                <div className="lg:sticky lg:top-32">
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#09090b] mb-8 leading-tight">
                        Ценность SEO для <br/>
                        <span className="italic text-[#D4AF37]">бизнеса</span>
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed font-light">
                        SEO — это фундамент вашего онлайн-присутствия. Это не просто позиции, это доверие пользователей и стабильный поток клиентов без оплаты за каждый клик.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {SEO_BENEFITS.map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                            <div className="w-12 h-12 bg-[#F5F5F7] rounded-full flex items-center justify-center mb-6 text-[#D4AF37] group-hover:bg-[#09090b] group-hover:text-white transition-colors">
                                <item.icon size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-lg font-bold text-[#09090b] uppercase tracking-wide mb-2">{item.title}</h3>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </section>
  );
};

export default SeoBenefits;
