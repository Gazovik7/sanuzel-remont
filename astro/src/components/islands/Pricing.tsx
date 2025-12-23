
import React from 'react';
import { PRICING_PLANS } from '../landing/constants';
import { Check } from 'lucide-react';
import { useModal } from '../landing/Modal';

const Pricing: React.FC = () => {
  const { openModal } = useModal();

  const handleOrder = (planName: string) => {
    openModal({
      title: `Тариф: ${planName}`,
      subtitle: 'Оставьте заявку для получения полного коммерческого предложения.',
      buttonText: 'Получить КП'
    });
  };

  return (
    <section id="pricing" className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        <div className="mb-24 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-[#09090b] mb-6">
              Инвестиции в <span className="italic text-[#D4AF37]">рост</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl font-light">
                Прозрачное ценообразование. Вы платите за экспертность команды и результат, а не за процесс.
            </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-0 border-t border-b border-gray-200 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
          {PRICING_PLANS.map((plan, idx) => (
            <div 
              key={idx} 
              className={`p-12 md:p-16 flex flex-col h-full relative transition-all duration-500 group ${
                  plan.isPopular 
                  ? 'bg-[#F9F9FB]' 
                  : 'bg-white hover:bg-[#F9F9FB]'
              }`}
            >
              {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#09090b] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-b-lg">
                      Выбор клиентов
                  </div>
              )}

              <div className="mb-12">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
                      {plan.title}
                  </h3>
                  <div className="flex items-baseline gap-2">
                      <div className="text-4xl lg:text-5xl font-serif font-medium text-[#09090b]">{plan.price}</div>
                  </div>
                  <div className="text-xs text-gray-400 mt-2 uppercase tracking-wide">Ежемесячный платеж</div>
              </div>
              
              <ul className="space-y-6 mb-16 flex-1">
                 {plan.features.map((feat, i) => (
                    <li key={i} className="flex gap-4 text-sm font-medium leading-relaxed items-start text-gray-600">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0"></div>
                       <span>{feat}</span>
                    </li>
                 ))}
              </ul>

              <button 
                 onClick={() => handleOrder(plan.title)}
                 className={`w-full py-4 rounded-lg font-bold text-xs uppercase tracking-widest transition-all border border-[#09090b] hover:bg-[#09090b] hover:text-white ${
                    plan.isPopular 
                    ? 'bg-[#09090b] text-white' 
                    : 'bg-transparent text-[#09090b]'
                 }`}
              >
                 {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
