
import React from 'react';
import { Handshake, Percent, Users, Zap, Wallet, MessageSquare, ChevronRight, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import UniversalForm from './UniversalForm';

const PartnersPage: React.FC = () => {
  const tiers = [
    { title: 'Bronze', rate: '5%', condition: 'До 3 активных клиентов', color: 'from-orange-400 to-orange-700' },
    { title: 'Silver', rate: '10%', condition: 'От 3 до 10 активных клиентов', color: 'from-slate-300 to-slate-500' },
    { title: 'Gold', rate: '15%', condition: 'Более 10 активных клиентов', color: 'from-[#D4AF37] to-[#F3E5AB]' }
  ];

  return (
    <section className="relative pt-32 pb-24 bg-[#09090b] text-white overflow-hidden min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#D4AF37]/5 rounded-full blur-[120px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="container mx-auto max-w-5xl px-6 relative z-10">
        <Breadcrumbs items={[{ label: 'Партнёрам', href: '/partnership' }]} theme="light" />
        
        <div className="mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                <Handshake size={12} />
                <span>Affiliate Program</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Партнёрская программа <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">Smirnov Marketing</span>
            </h1>
            <p className="text-lg text-gray-400 font-light max-w-2xl leading-relaxed">
                Зарабатывайте на рекомендациях услуг по SEO, рекламе и разработке. Мы выплачиваем агентское вознаграждение ежемесячно на протяжении всего срока работы клиента.
            </p>
        </div>

        {/* Commission Tiers */}
            {tiers.map((tier, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-8 relative group hover:border-[#D4AF37]/30 transition-all shadow-lg hover:shadow-[#D4AF37]/5">
                    <div className="absolute top-8 right-8 text-white/5 group-hover:text-[#D4AF37]/10 transition-colors">
                        <Percent size={64} />
                    </div>
                    <div className={`text-4xl font-black bg-gradient-to-br ${tier.color} bg-clip-text text-transparent mb-2 relative z-10`}>
                        {tier.rate}
                    </div>
                    <div className="text-white font-bold text-lg mb-4 relative z-10">{tier.title}</div>
                    <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest leading-tight relative z-10">
                        {tier.condition}
                    </div>
                </div>
            ))}

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* For Whom */}
            <div className="space-y-8">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <div className="w-1 h-6 bg-[#D4AF37] rounded-full"></div>
                    Кому подходит программа?
                </h2>
                <div className="grid gap-4">
                    {[
                        { t: 'Веб-студии', d: 'Передавайте нам клиентов на SEO, если не занимаетесь им сами.' },
                        { t: 'Фрилансеры', d: 'Получайте пассивный доход, рекомендуя нас своим заказчикам.' },
                        { t: 'Агентства', d: 'Расширьте свою линейку услуг за счет нашей экспертизы.' },
                        { t: 'Блогеры', d: 'Рекомендуйте качественный сервис своей аудитории.' }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                            <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center text-[#D4AF37] shrink-0">
                                <Users size={18} />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-white mb-1">{item.t}</div>
                                <div className="text-xs text-gray-500 font-light">{item.d}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* How it works */}
            <div className="space-y-8">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <div className="w-1 h-6 bg-[#D4AF37] rounded-full"></div>
                    Как начать работу?
                </h2>
                <div className="space-y-6">
                    {[
                        'Вы сообщаете нам о потенциальном клиенте.',
                        'Мы готовим предложение и заключаем договор.',
                        'Клиент оплачивает счет — вы получаете комиссию.',
                        'Выплаты продолжаются каждый месяц.'
                    ].map((step, i) => (
                        <div key={i} className="flex gap-4 items-start">
                            <div className="w-6 h-6 rounded-full bg-[#D4AF37] text-black text-[10px] font-black flex items-center justify-center shrink-0 mt-1">
                                {i + 1}
                            </div>
                            <p className="text-gray-400 font-light leading-relaxed">{step}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Minimal CTA */}
        <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-16 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Стать партнёром</h2>
            <p className="text-gray-500 mb-10 max-w-md">Оставьте заявку, и мы вышлем вам подробные условия и договор.</p>
            <div className="w-full max-w-sm">
                <UniversalForm source="Partnership_Page" isDark={true} buttonText="Отправить запрос" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersPage;
