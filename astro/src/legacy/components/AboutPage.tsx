
import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { Shield, Users, Banknote, Heart, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (mode: any) => void;
  onCalculate: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onCalculate }) => {
  return (
    <div className="min-h-screen bg-slate-50 animate-in fade-in duration-500 pb-12">
      <div className="container mx-auto px-4 pt-6 max-w-5xl">
        <Breadcrumbs 
            items={[{ label: 'О компании', isActive: true }]} 
            onNavigate={onNavigate} 
        />

        <div className="mb-12">
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">О нашей компании</h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                Честный ремонт с документальной отчетностью. Работаем с физическими и юридическими лицами по договору.
            </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:items-start">
            
            {/* Left Column - Main Text */}
            <div className="lg:col-span-2 space-y-12">
                
                {/* Intro Section */}
                <section className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100">
                    <div className="prose prose-lg text-gray-600 max-w-none">
                        <p className="mb-6">
                            Наша компания уже много лет работает в сфере строительных услуг. Мы осуществляем как косметический ремонт, так и элитный ремонт ванной комнаты. Наши сотрудники учитывают все требования заказчика и уделяют внимание каждой мелочи.
                        </p>
                        <p className="mb-6">
                            Во время ремонтных работ прораб находится в постоянном контакте с заказчиком, что позволяет избегать конфликтных ситуаций. Все мастера приветливые и дружелюбные. 
                        </p>
                        <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100 not-prose">
                            <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                            <p className="m-0 text-blue-900 font-medium">
                                Положительные отзывы наших клиентов на независимых ресурсах подтверждают высокое качество предоставляемых услуг.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Prices Section */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                            <Banknote className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-slate-900">О ценах</h2>
                    </div>
                    
                    <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100 space-y-6">
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Прибегнув к помощи нашего специалиста, вы приятно удивитесь демократичным расценкам. Гонка за большими прибылями отнюдь не наше кредо. Мы предлагаем превосходное качество за умеренную плату.
                        </p>
                        
                        {/* Social Discount Card */}
                        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-3xl border border-yellow-100 relative overflow-hidden">
                             <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                             
                             <div className="flex items-start gap-4 relative z-10">
                                <Heart className="w-8 h-8 text-orange-500 shrink-0 fill-orange-500/20" />
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Социальная скидка 15%</h3>
                                    <p className="text-slate-700 mb-4">
                                        Мы предоставляем скидки незащищённым слоям граждан от стоимости работ мастера:
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {['Пенсионеры', 'Многодетные семьи', 'Инвалиды'].map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-white rounded-lg text-sm font-bold text-orange-600 shadow-sm border border-orange-100">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                             </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-gray-200">
                            <Shield className="w-6 h-6 text-slate-900" />
                            <p className="text-slate-900 font-medium">
                                При капитальном ремонте работы начинаются <span className="font-bold underline decoration-blue-500 decoration-2 underline-offset-2">без предоплаты</span>. Оплата производится после выполнения ремонта.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Masters Section */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                            <Users className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-slate-900">О мастерах</h2>
                    </div>

                    <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100 relative overflow-hidden">
                         {/* Decorative BG */}
                         <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-20 -mt-20 z-0"></div>

                         <div className="relative z-10 space-y-6">
                            <p className="text-gray-600 text-lg leading-relaxed">
                                В нашей компании работают бригады мастеров, состоящие из одного мастера-универсала или из двух мастеров. Каждый мастер — профессионал и сделал уже не один десяток объектов.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Каждый работник имеет на своем счету сотни успешно отремонтированных санузлов и массу благодарных клиентов. Все сотрудники компании вежливы и учтивы, аккуратны и опрятны, пунктуальны и скрупулезны в мелочах.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                                {[
                                    { label: 'Опыт работы', value: '7+ лет' },
                                    { label: 'Гражданство', value: 'РФ и РБ' },
                                    { label: 'Квалификация', value: 'Профильная' },
                                ].map((stat, i) => (
                                    <div key={i} className="text-center p-4 bg-slate-50 rounded-xl border border-gray-100">
                                        <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                                        <div className="text-xs text-gray-500 uppercase font-bold tracking-wide">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                         </div>
                    </div>
                </section>

            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8 lg:sticky lg:top-24 lg:z-20 lg:self-start lg:max-h-[calc(100vh-8rem)] lg:overflow-auto lg:pr-2">
                {/* CTA Card */}
                <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
                     <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-20 pointer-events-none -mr-10 -mt-10"></div>
                     <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-600 rounded-full blur-3xl opacity-20 pointer-events-none -ml-10 -mb-10"></div>

                     <h3 className="text-2xl font-bold font-heading mb-4 relative z-10">Доверьте ремонт профессионалам</h3>
                     <p className="text-gray-400 mb-8 relative z-10">
                        Рассчитайте стоимость вашего ремонта и получите скидку на материалы.
                     </p>
                     
                     <button 
                        onClick={onCalculate}
                        data-lead-open="callback"
                        className="w-full bg-white text-slate-900 font-bold py-4 rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 relative z-10"
                     >
                        Рассчитать смету <ArrowRight className="w-5 h-5" />
                     </button>
                </div>

                {/* Info Block */}
                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                    <h4 className="font-bold text-slate-900 mb-4">Почему мы?</h4>
                    <ul className="space-y-4">
                        {[
                            'Договор и гарантия',
                            'Без скрытых доплат',
                            'Поэтапная оплата',
                            'Помощь с материалами'
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};
