
import React, { useEffect, useState } from 'react';
import { useModal } from '../landing/Modal';
import UniversalForm from './UniversalForm';
import { CheckCircle2, Zap, Search, PenTool, BarChart3, FileText, Package, ArrowRight, Download, ShoppingBag, Layout, Target, Settings, HelpCircle, Wand2, Video, Rocket, ShieldCheck } from 'lucide-react';
import { AI_SERVICES_PRICING, PRICING, INFOGRAPHIC_PRICING } from '../landing/constants';
import Breadcrumbs from './Breadcrumbs';

const PricesPage: React.FC = () => {
  const { openModal } = useModal();
  const [activeCategory, setActiveCategory] = useState<'all' | 'monthly' | 'one-time' | 'tasks'>('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOrder = (serviceName: string) => {
    openModal({
      title: `Заказ услуги: ${serviceName}`,
      subtitle: 'Оставьте заявку, мы свяжемся для обсуждения деталей.',
      source: 'PricesPage',
      extraFields: { service: serviceName },
      buttonText: 'Заказать'
    });
  };

  const categories = [
    { id: 'all', label: 'Все услуги' },
    { id: 'monthly', label: 'Абонентское обслуживание' },
    { id: 'one-time', label: 'Аудит и Стратегия' },
    { id: 'tasks', label: 'Дизайн, AI и SEO' },
  ];

  return (
    <section className="bg-gray-50 animate-fade-in pt-32 pb-20 min-h-screen">
      
      {/* Header */}
      <div className="container mx-auto max-w-6xl px-4 mb-12">
        <Breadcrumbs 
            items={[{ label: 'Цены на услуги', href: '/prices' }]} 
            theme="dark" 
        />
        <div className="text-center max-w-3xl mx-auto pt-10">
           <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
             Понятные цены
           </h1>
           <p className="text-xl text-gray-500">
             Прозрачное ценообразование без скрытых комиссий. Выбирайте то, что нужно вашему бизнесу.
           </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto max-w-6xl px-4 mb-16">
        <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
                <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id as any)}
                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                        activeCategory === cat.id
                        ? 'bg-gray-900 text-white shadow-lg'
                        : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
                    }`}
                >
                    {cat.label}
                </button>
            ))}
        </div>
      </div>

      {/* Pricing Sections */}
      <div className="container mx-auto max-w-6xl px-4 space-y-20">
        
        {/* Monthly Support */}
        {(activeCategory === 'all' || activeCategory === 'monthly') && (
            <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-8 text-gray-900 border-l-4 border-primary pl-4">Комплексное ведение</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {PRICING.map((plan, idx) => (
                        <div key={idx} className={`bg-white rounded-3xl p-8 border hover:shadow-xl transition-all flex flex-col relative overflow-hidden ${plan.isPopular ? 'border-primary shadow-lg ring-1 ring-primary/10' : 'border-gray-200'}`}>
                            {plan.isPopular && (
                                <div className="absolute top-0 left-0 w-full bg-primary h-1.5"></div>
                            )}
                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-900">{plan.title}</h3>
                                <p className="text-sm text-gray-500 h-10 leading-snug">{plan.description}</p>
                            </div>
                            <div className="text-3xl font-black mb-1 text-gray-900">{plan.price}<span className="text-sm font-normal text-gray-400 ml-1">{plan.priceSuffix}</span></div>
                            <div className="h-px w-full bg-gray-100 my-6"></div>
                            <ul className="space-y-3 mb-8 flex-1">
                                {plan.features.map((feat, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-gray-600">
                                        <CheckCircle2 size={18} className="text-primary shrink-0" />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>
                            <button onClick={() => handleOrder(plan.title)} className={`w-full py-3 rounded-xl font-bold transition-all ${plan.isPopular ? 'bg-primary text-white hover:bg-primary/90' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        )}

        {/* Infographics */}
        {(activeCategory === 'all' || activeCategory === 'tasks') && (
            <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-8 text-gray-900 border-l-4 border-purple-500 pl-4">Дизайн и Инфографика</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {INFOGRAPHIC_PRICING.map((plan, idx) => (
                        <div key={idx} className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all flex flex-col">
                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-900">{plan.title}</h3>
                                <p className="text-sm text-gray-500 min-h-[40px]">{plan.description}</p>
                            </div>
                            <div className="text-3xl font-black mb-8 text-gray-900">{plan.price}</div>
                            <ul className="space-y-3 mb-8 flex-1">
                                {plan.features.map((feat, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-gray-600">
                                        <CheckCircle2 size={18} className="text-purple-500 shrink-0" />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>
                            <button onClick={() => handleOrder(plan.title)} className="w-full py-3 rounded-xl bg-purple-50 text-purple-700 hover:bg-purple-100 font-bold transition-all">
                                Заказать
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        )}

        {/* AI Services */}
        {(activeCategory === 'all' || activeCategory === 'tasks') && (
            <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-8 text-gray-900 border-l-4 border-blue-500 pl-4">AI Услуги (Фото и Видео)</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {AI_SERVICES_PRICING.map((plan, idx) => (
                        <div key={idx} className="bg-white rounded-3xl p-6 border border-gray-200 hover:shadow-xl transition-all flex flex-col">
                            <div className="mb-4">
                                <h3 className="text-lg font-bold mb-1 text-gray-900">{plan.title}</h3>
                                <div className="text-xl font-black text-blue-600">{plan.price}</div>
                            </div>
                            <p className="text-xs text-gray-500 mb-4 h-8 line-clamp-2">{plan.description}</p>
                            <ul className="space-y-2 mb-6 flex-1">
                                {plan.features.slice(0, 3).map((feat, i) => (
                                    <li key={i} className="flex gap-2 text-xs text-gray-600">
                                        <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>
                            <button onClick={() => handleOrder(plan.title)} className="w-full py-2 rounded-lg border border-gray-200 hover:bg-gray-900 hover:text-white text-gray-900 text-sm font-bold transition-all">
                                Заказать
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        )}

      </div>

      {/* Bottom CTA */}
      <div className="container mx-auto max-w-4xl px-4 mt-24">
         <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Не нашли нужную услугу?</h2>
                <p className="text-gray-500 mb-8 max-w-xl mx-auto">
                    Оставьте заявку, мы подготовим индивидуальное коммерческое предложение под ваши задачи и бюджет.
                </p>
                <div className="max-w-md mx-auto">
                   <UniversalForm 
                       source="PricesPage_Footer" 
                       buttonText="Получить КП" 
                       variant="embedded"
                   />
                </div>
            </div>
         </div>
         <div className="mt-8 text-center text-gray-400 text-sm flex justify-center gap-2 items-center">
             <ShieldCheck size={16} /> Работаем по договору с ИП и ООО
         </div>
      </div>

    </section>
  );
};

export default PricesPage;
