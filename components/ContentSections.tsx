
import React, { useState } from 'react';
import { 
  Check, X, Hammer, Clock, Shield, Trash2, 
  Ruler, Search, ShoppingBag, HardHat, FileText, 
  Users, MapPin, Play, Star, BadgeCheck, CheckCircle2, ArrowRight, CheckCheck, MoreVertical, ShieldCheck, Microscope, Factory, PhoneCall,
  ChevronDown, ChevronUp, Map, Train, Video, FileSignature
} from 'lucide-react';
import { 
  PACKAGES, PORTFOLIO, 
  STEPS, TEAM, FAQ, INCLUDED_WORKS, INCLUDED_DOCS, REVIEWS, VIDEO_REVIEWS, PAPER_REVIEWS, QUALITY_CHECKLIST, MATERIAL_BRANDS
} from '../constants';
import type { Package, PortfolioItem, FaqItem } from '../types';
import { BeforeAfterSlider } from './BeforeAfterSlider';

// Note: Background classes (bg-white/bg-slate-100) are handled in App.tsx for zebra striping.
// We just remove the hardcoded bg classes here where appropriate.

export const ComparisonSection = ({ onAction }: { onAction: () => void }) => (
  <section className="py-24" id="comparison">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6 text-slate-900">Почему выбирают нас?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">Сравнение подходов к ремонту. Мы устранили все риски, с которыми обычно сталкиваются заказчики.</p>
      </div>

      <div className="overflow-hidden rounded-3xl shadow-xl border border-gray-200 bg-white mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {/* Column 1 */}
          <div className="p-8 hover:bg-gray-50 transition-colors">
             <div className="font-bold text-xl mb-8 text-gray-400 text-center uppercase tracking-widest">Частник</div>
             <ul className="space-y-6">
               <li className="flex items-start gap-4 text-sm text-gray-500">
                 <X className="w-5 h-5 text-red-400 shrink-0" />
                 <span>Цена "растет" в процессе на 30-50%</span>
               </li>
               <li className="flex items-start gap-4 text-sm text-gray-500">
                 <X className="w-5 h-5 text-red-400 shrink-0" />
                 <span>Никаких гарантий, работает без договора</span>
               </li>
               <li className="flex items-start gap-4 text-sm text-gray-500">
                 <X className="w-5 h-5 text-red-400 shrink-0" />
                 <span>Заболел или уехал — ремонт встал</span>
               </li>
             </ul>
          </div>

          {/* Column 2 */}
          <div className="p-8 hover:bg-gray-50 transition-colors">
             <div className="font-bold text-xl mb-8 text-gray-400 text-center uppercase tracking-widest">Студия</div>
             <ul className="space-y-6">
               <li className="flex items-start gap-4 text-sm text-gray-500">
                 <Check className="w-5 h-5 text-green-500 shrink-0" />
                 <span>Красивые проекты и картинки</span>
               </li>
               <li className="flex items-start gap-4 text-sm text-gray-500">
                 <X className="w-5 h-5 text-red-400 shrink-0" />
                 <span>Переплата за бренд до 200%</span>
               </li>
               <li className="flex items-start gap-4 text-sm text-gray-500">
                 <X className="w-5 h-5 text-red-400 shrink-0" />
                 <span>Требуют 100% предоплату</span>
               </li>
             </ul>
          </div>

          {/* Column 3 (Us) */}
          <div className="p-8 bg-slate-900 text-white relative overflow-hidden transform md:scale-105 shadow-2xl z-10 md:-my-4 md:rounded-xl md:border-t-4 md:border-blue-500">
             <div className="font-bold text-2xl mb-8 text-white text-center flex items-center justify-center gap-2">
                Мы <BadgeCheck className="w-6 h-6 text-blue-500" />
             </div>
             <ul className="space-y-6">
               <li className="flex items-start gap-4 text-base font-medium">
                 <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white" />
                 </div>
                 <span>Смета фиксируется в договоре</span>
               </li>
               <li className="flex items-start gap-4 text-base font-medium">
                 <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white" />
                 </div>
                 <span>Гарантия 10 лет на все работы</span>
               </li>
               <li className="flex items-start gap-4 text-base font-medium">
                 <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white" />
                 </div>
                 <span>Оплата только по факту работ</span>
               </li>
               <li className="flex items-start gap-4 text-base font-medium">
                 <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white" />
                 </div>
                 <span>Только граждане РФ и РБ</span>
               </li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const PackagesSection = ({ onSelect, onShowPriceList, packages }: { onSelect: (pkg: string) => void, onShowPriceList?: () => void, packages?: Package[] }) => (
  <section className="py-24" id="packages">
    <div className="container mx-auto px-4 max-w-6xl">
      <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-center mb-6 text-slate-900">Готовые решения</h2>
      <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">Выберите пакет, который подходит под ваши задачи. Материалы можно заменить или исключить.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
        {(packages || PACKAGES).map((pkg, idx) => (
          <div key={idx} className={`rounded-3xl transition-all flex flex-col relative group ${idx === 1 ? 'border-2 border-blue-600 shadow-2xl scale-105 z-10 bg-white' : 'border border-gray-200 hover:shadow-xl hover:border-gray-300 bg-white'}`}>
            {idx === 1 && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-max bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wider">
                    Выбор клиентов
                </div>
            )}
            <div className={`p-8 ${idx === 1 ? 'bg-blue-50/50' : 'bg-transparent'}`}>
              <h3 className="text-2xl font-bold mb-2 text-slate-900 font-heading">{pkg.title}</h3>
              <p className="text-sm text-gray-500 mb-6 h-10">{pkg.subtitle}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900 tracking-tight">{pkg.price}</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg text-sm font-medium text-gray-600">
                   <Clock className="w-4 h-4" /> {pkg.time}
              </div>
            </div>
            
            <div className="p-8 pt-0 flex-1 flex flex-col">
              <ul className="space-y-4 mb-8 flex-1 border-t border-gray-100 pt-6">
                {pkg.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 ${idx === 1 ? 'text-blue-600' : 'text-gray-400'}`} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => onSelect(pkg.title)}
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  idx === 1 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30 active:scale-95' 
                    : 'bg-white border-2 border-gray-200 text-slate-900 hover:border-slate-900 hover:bg-slate-900 hover:text-white active:scale-95'
                }`}
              >
                Рассчитать смету
              </button>
            </div>
          </div>
        ))}
      </div>

      {onShowPriceList && (
        <div className="text-center">
          <button 
            onClick={onShowPriceList}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-bold transition-colors border-b-2 border-blue-600 hover:border-blue-800 pb-0.5"
          >
            Посмотреть подробный прайс-лист <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  </section>
);

export const PortfolioSection = ({ onAction, portfolio }: { onAction: () => void, portfolio?: PortfolioItem[] }) => (
  <section className="py-24" id="portfolio">
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-4 text-slate-900">Наши работы</h2>
            <p className="text-gray-600 max-w-xl text-lg">Реальные примеры ремонтов с ценами и сроками. Потяните ползунок на фото, чтобы оценить качество.</p>
        </div>
        <button onClick={onAction} className="hidden md:flex items-center gap-2 font-bold text-blue-600 hover:text-blue-800 transition-colors">
            Смотреть все работы <ArrowRight className="w-5 h-5" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 gap-16">
        {(portfolio || PORTFOLIO).map((item, idx) => (
          <div key={idx} className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[400px] lg:h-auto">
                <div className="absolute inset-0">
                    <BeforeAfterSlider 
                        beforeImage={item.before} 
                        afterImage={item.after} 
                        alt={item.title}
                    />
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center bg-white relative">
                <div className="mb-6">
                    <h3 className="text-3xl font-heading font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
                
                <div className="mb-8 space-y-4">
                    <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400">Что сделали:</h4>
                    <p className="text-gray-700 leading-relaxed border-l-2 border-blue-100 pl-4">{item.workList}</p>
                </div>

                <div className="flex items-center gap-8 border-t border-gray-100 pt-8 mt-auto">
                  <div>
                    <span className="text-xs text-gray-400 block mb-1 uppercase tracking-wide">Срок реализации</span>
                    <span className="font-bold text-xl text-slate-900">{item.time}</span>
                  </div>
                  <div className="w-px h-10 bg-gray-100"></div>
                  <div>
                    <span className="text-xs text-gray-400 block mb-1 uppercase tracking-wide">Стоимость "под ключ"</span>
                    <span className="font-bold text-2xl text-blue-600">{item.price}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => {
                     // If we are in the portfolio section on landing, clicking usually triggers modal or nav
                     // Reusing onAction for simplicity
                     onAction();
                  }}
                  className="mt-8 w-full py-3 rounded-lg border border-gray-200 text-gray-600 font-medium hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
                >
                  Хочу так же
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12 md:hidden">
        <button onClick={onAction} className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg">
          Рассчитать мой ремонт
        </button>
      </div>
    </div>
  </section>
);

export const QualityControlSection = () => {
  return (
    <section className="py-24" id="quality">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
           <span className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-3 block">Технадзор</span>
           <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6 text-slate-900">15-пунктовый контроль качества</h2>
           <p className="text-gray-600 max-w-2xl mx-auto text-lg">Вы видите процесс ремонта в WhatsApp. Каждый скрытый этап фиксируется на фото и проверяется по чек-листу.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
           {/* Checklist Card */}
           <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full blur-3xl opacity-50 -mr-10 -mt-10"></div>
              
              <h3 className="text-2xl font-heading font-bold mb-8 flex items-center gap-3">
                 <ShieldCheck className="w-8 h-8 text-green-600" />
                 Чек-лист инженера
              </h3>
              
              <div className="space-y-6 relative">
                 <div className="absolute left-[11px] top-2 bottom-4 w-0.5 bg-gray-100"></div>
                 {QUALITY_CHECKLIST.map((item, idx) => (
                    <div key={idx} className="flex gap-4 relative z-10">
                       <div className="w-6 h-6 rounded-full bg-green-100 border-4 border-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          <div className="w-2 h-2 rounded-full bg-green-600"></div>
                       </div>
                       <div>
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1 block">{item.day}</span>
                          <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-500">{item.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Photo Report Card - Adjusted height to match neighbor */}
           <div className="flex flex-col h-full">
              <div className="bg-blue-50 p-8 md:p-10 rounded-[2rem] border border-blue-100 flex flex-col justify-center h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-[80px] opacity-40 -mr-16 -mt-16 pointer-events-none"></div>
                  
                  <h3 className="text-2xl font-bold font-heading text-slate-900 mb-6 flex items-center gap-3 relative z-10">
                     <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <Microscope className="w-6 h-6 text-blue-600" />
                     </div>
                     Фотоотчеты
                  </h3>
                  
                  <p className="text-gray-600 text-base leading-relaxed mb-8 relative z-10">
                     Вы не увидите трубы под плиткой, но будете уверены в их надежности. Мы присылаем фото и видео каждого узла до того, как залить его бетоном или зашить в короб.
                  </p>
                  
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100/50 relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">WhatsApp отчет</span>
                      </div>
                      
                      <div className="flex gap-3 mb-3 overflow-x-auto pb-2">
                        {[1,2,3].map(i => (
                            <div key={i} className="w-16 h-16 rounded-lg bg-gray-200 shrink-0 overflow-hidden relative group">
                                <img src={`https://source.unsplash.com/random/100x100?construction&sig=${i}`} className="w-full h-full object-cover" alt="report" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                            </div>
                        ))}
                        <div className="w-16 h-16 rounded-lg bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center shrink-0">
                            <span className="text-xs font-bold text-gray-400">+12</span>
                        </div>
                      </div>
                      <p className="text-sm text-slate-800 italic">"Алексей, гидроизоляцию закончили. Прошли углы лентой. Можем заливать стяжку."</p>
                  </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}

export const WhyUsSection = () => {
  return (
    <section className="py-24" id="why-us">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-center mb-16 text-slate-900">Стандарты качества</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: "Гарантия 10 лет", desc: "Самая большая гарантия на рынке. Прописана в договоре, потому что мы уверены в качестве." },
            { icon: Users, title: "Граждане РФ и РБ", desc: "Никаких 'гостей' столицы. Штатные проверенные бригады со строгим отбором." },
            { icon: FileText, title: "Без предоплаты", desc: "0₽ аванса. Вы платите только за выполненный этап работ, когда проверите его." },
            { icon: Hammer, title: "Соблюдение технологий", desc: "Гидроизоляция в 3 слоя, углы 90°, запил плитки под 45°." },
            { icon: Trash2, title: "Культура работ", desc: "Укрываем полы, не курим в квартире, вывозим мусор, ставим унитаз для рабочих." },
            { icon: Users, title: "Сервис одного окна", desc: "Сами закупим, доставим и поднимем черновые материалы." }
          ].map((item, idx) => (
            <div key={idx} className="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-gray-100 transition-all border border-transparent hover:border-gray-100 group cursor-default">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-slate-900">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const WorkflowSection = () => (
  <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
    <div className="container mx-auto px-4 max-w-6xl relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6">Как проходит ремонт вашей ванной шаг за шагом</h2>
        <p className="text-gray-400 text-lg">Полная прозрачность процесса от звонка до шампанского при сдаче.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        {STEPS.map((step, idx) => (
          <div key={idx} className="bg-slate-800/50 backdrop-blur border border-white/5 p-8 rounded-2xl hover:bg-slate-800 transition-all group relative overflow-hidden">
             {/* Large background number */}
             <div className="absolute -right-4 -bottom-8 text-9xl font-bold text-white/5 font-heading select-none group-hover:text-blue-600/10 transition-colors">
                {idx + 1}
             </div>
             
             <div className="relative z-10">
                <div className="w-12 h-12 rounded-full border border-blue-500/30 bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                   {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">{step.desc}</p>
             </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-blue-900/40 to-slate-900 border border-blue-500/20 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/30 animate-pulse">
              <PhoneCall className="w-8 h-8 text-white" />
          </div>
          <div>
              <p className="text-lg md:text-xl font-medium text-blue-100 leading-relaxed">
                  "На каждом этапе у вас есть один ответственный, который в курсе всего по объекту и всегда на связи."
              </p>
          </div>
      </div>
    </div>
  </section>
);

export const IncludedSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4 max-w-6xl">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-3 block">Под ключ</span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-8 text-slate-900">Что входит в стоимость ремонта?</h2>
            <p className="text-gray-500 text-lg mb-8">Мы берем на себя весь цикл работ: от демонтажа старой плитки до установки крючков для полотенец.</p>
            
            <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-green-50 text-green-800 border border-green-100">
                    <CheckCircle2 className="w-6 h-6 shrink-0" />
                    <span className="font-bold">Вывоз мусора и клининг включены</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-blue-50 text-blue-800 border border-blue-100">
                    <FileText className="w-6 h-6 shrink-0" />
                    <span className="font-bold">Полный пакет документов для УК</span>
                </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {INCLUDED_WORKS.map((work, idx) => (
                   <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 py-1">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                      {work}
                   </li>
                ))}
             </div>
          </div>
       </div>
    </div>
  </section>
);

export const VisualizationSection = () => (
    <section className="py-24 overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
                
                <div className="flex-1 space-y-8 relative z-10">
                    <div>
                        <span className="text-blue-400 font-bold tracking-wider uppercase text-xs mb-3 block">Бесплатно при заказе</span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">3D-проект вашей ванной</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Увидите будущий интерьер до покупки первой плитки. Рассчитаем раскладку так, чтобы не было "обрезков" на видных местах.
                        </p>
                    </div>
                    
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-white">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                <Check className="text-blue-400 w-4 h-4" />
                            </div>
                            <span className="font-medium">Точный расчет плитки (экономия до 15%)</span>
                        </li>
                        <li className="flex items-center gap-3 text-white">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                <Check className="text-blue-400 w-4 h-4" />
                            </div>
                            <span className="font-medium">Проверка эргономики помещения</span>
                        </li>
                    </ul>

                    <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:bg-gray-100 transform hover:-translate-y-1">
                        Хочу 3D-проект в подарок
                    </button>
                </div>
                
                <div className="flex-1 w-full max-w-md">
                    <img src="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=800" alt="3D Visualization" className="rounded-2xl shadow-2xl border-4 border-white/10 rotate-2 hover:rotate-0 transition-transform duration-500" />
                </div>
            </div>
        </div>
    </section>
);

export const MaterialsSection = () => (
    <section className="py-24" id="materials">
        <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col gap-16">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-slate-900">Закупка материалов</h2>
                        <p className="text-gray-500 leading-relaxed text-lg">
                            Вам не нужно тратить выходные на строительные рынки. Мы работаем с прямыми поставщиками и делимся своими оптовыми скидками. Выбирайте надежные бренды.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                                    <ShoppingBag className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900">Экономия до 20%</h4>
                                    <p className="text-sm text-gray-500 mt-1">Дешевле, чем в розничных магазинах.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                                    <Search className="w-6 h-6 text-slate-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900">Подбор под бюджет</h4>
                                    <p className="text-sm text-gray-500 mt-1">Только оригинальная продукция с сертификатами.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 relative w-full">
                        <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-3 opacity-10"></div>
                        <img src="https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&q=80&w=800" alt="Materials" className="rounded-3xl shadow-2xl relative z-10 w-full" />
                    </div>
                </div>

                {/* Brands Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {MATERIAL_BRANDS.map((cat, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group">
                             <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <Factory className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{cat.category}</h4>
                                    <p className="text-[10px] text-gray-400 uppercase tracking-wide">{cat.desc}</p>
                                </div>
                             </div>
                             <div className="space-y-2">
                                {cat.brands.map((brand, bIdx) => (
                                    <div key={bIdx} className="flex items-center gap-2 text-sm text-gray-600">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-200"></div>
                                        {brand}
                                    </div>
                                ))}
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export const TeamSection = () => (
    <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-center mb-6 text-slate-900">Мастера (РФ и РБ)</h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">Только штатные сотрудники с паспортами РФ и РБ. У нас нет "универсалов". Каждый этап выполняет профильный специалист.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {TEAM.map((member, idx) => (
                    <div key={idx} className="bg-white p-2 pb-6 rounded-2xl shadow-sm hover:shadow-xl transition-all group overflow-hidden text-center border border-gray-100">
                        <div className="w-full aspect-square rounded-xl overflow-hidden mb-6 relative">
                             <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                             <div className="absolute bottom-2 left-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg">Гражданин РФ/РБ</div>
                        </div>
                        <h4 className="font-bold text-lg text-slate-900 mb-1">{member.name}</h4>
                        <p className="text-blue-600 text-xs font-bold mb-4 uppercase tracking-wide">{member.role}</p>
                        <p className="text-gray-500 text-sm px-4">{member.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export const GuaranteeSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4 max-w-5xl">
       <div className="bg-white border-2 border-gray-100 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div>
                <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6 text-slate-900">Гарантия спокойствия</h2>
                <p className="text-gray-500 text-lg mb-8">
                    Ремонт — это стресс, но мы берем его на себя. Все обязательства зафиксированы юридически.
                </p>
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold">10</div>
                        <span className="font-bold text-slate-900">Лет гарантии на все работы</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                            <FileText className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-slate-900">Официальный договор и чеки</span>
                    </div>
                </div>
             </div>
             <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
                <div className="font-heading text-xl font-bold mb-4 text-slate-900">Выписка из договора:</div>
                <div className="space-y-4 text-sm text-gray-600 italic">
                    <p>"...Подрядчик предоставляет гарантию на выполненные работы сроком на 10 (десять) лет с момента подписания Акта..."</p>
                    <p>"...Стоимость работ является твердой и не подлежит изменению. Оплата производится поэтапно..."</p>
                </div>
                <div className="mt-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div>
                        <div className="text-xs font-bold text-gray-900">Генеральный директор</div>
                        <div className="text-[10px] text-gray-500">Смирнов А.В.</div>
                    </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  </section>
);

export const ReviewsSection = ({ onShowAllReviews }: { onShowAllReviews?: () => void }) => {
    // We pick one of each type for the landing page teaser
    const video = VIDEO_REVIEWS[0];
    const paper = PAPER_REVIEWS[0];
    const chat = REVIEWS[0];

    return (
        <section className="py-24" id="reviews">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6 text-slate-900">Отзывы клиентов</h2>
                    <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
                        Мы собираем обратную связь во всех форматах: видео-отзывы, переписки в мессенджерах и официальные благодарственные письма.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    
                    {/* Video Card */}
                    <div className="lg:col-span-2 relative group overflow-hidden rounded-[2rem] shadow-xl bg-slate-900 cursor-pointer h-[350px] lg:h-[450px]">
                         <img src={video.preview} alt={video.author} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                         <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/50">
                                   <Play className="w-8 h-8 text-white fill-white ml-1" />
                              </div>
                         </div>
                         <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-slate-900 to-transparent">
                             <div className="flex items-center gap-2 mb-2">
                                <Video className="w-4 h-4 text-blue-400" />
                                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Видео-отзыв</span>
                             </div>
                             <h3 className="text-2xl font-bold text-white mb-1">{video.author}</h3>
                             <p className="text-gray-300">{video.location}</p>
                         </div>
                    </div>

                    {/* Stacked Side Column */}
                    <div className="flex flex-col gap-8 h-[450px]">
                        
                        {/* Chat Card (Mini) */}
                        <div className="flex-1 bg-[#E5DDD5] rounded-3xl overflow-hidden shadow-lg border border-gray-200 relative p-4 flex flex-col">
                            <div className="flex items-center gap-3 mb-3 pb-3 border-b border-gray-300/50">
                                <img src={chat.avatar} className="w-8 h-8 rounded-full" alt="avatar" />
                                <div>
                                    <div className="text-xs font-bold text-slate-800">{chat.name}</div>
                                    <div className="text-[10px] text-slate-500">WhatsApp</div>
                                </div>
                            </div>
                            <div className="bg-white p-3 rounded-lg shadow-sm rounded-tl-none text-xs text-gray-800 line-clamp-3">
                                {chat.chat[0].text}
                            </div>
                            <div className="mt-auto pt-2 text-right">
                                <span className="text-[10px] text-gray-500 font-bold uppercase">Читать чат</span>
                            </div>
                        </div>

                        {/* Paper Card (Mini) */}
                        <div className="flex-1 bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200 p-6 relative group cursor-pointer hover:bg-gray-50 transition-colors">
                            <div className="absolute top-4 right-4 text-gray-300">
                                <FileSignature className="w-8 h-8" />
                            </div>
                            <div className="h-full flex flex-col justify-end">
                                <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Бланк отзыва</div>
                                <div className="font-bold text-slate-900 mb-1">{paper.author}</div>
                                <div className="text-xs text-gray-400">{paper.date}</div>
                            </div>
                            <img src={paper.image} className="absolute top-4 left-4 w-16 h-20 object-cover shadow-sm -rotate-6 border border-gray-100 bg-white p-1" alt="scan" />
                        </div>

                    </div>
                </div>

                <div className="text-center">
                    <button 
                      onClick={() => onShowAllReviews && onShowAllReviews()}
                      className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 transform hover:-translate-y-1"
                    >
                        Смотреть все отзывы (Видео, Чаты, Фото) <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export const FaqSection = ({ faqItems }: { faqItems?: FaqItem[] }) => {
  const [openIdx, setOpenIdx] = React.useState<number | null>(0);
  
  const items = faqItems || FAQ;

  // Generate Schema.org JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="py-24" id="faq">
      {/* Inject Microdata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-center mb-12 text-slate-900">Вопросы и ответы</h2>
        <div className="space-y-4">
          {items.map((item, idx) => (
            <div key={idx} className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${openIdx === idx ? 'bg-gray-50' : ''}`}>
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`text-lg font-bold font-heading transition-colors ${openIdx === idx ? 'text-blue-700' : 'text-slate-900'}`}>{item.question}</span>
                <span className={`transform transition-transform duration-300 text-blue-600 font-bold text-2xl leading-none ${openIdx === idx ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <div className={`grid transition-all duration-300 ${openIdx === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed text-base border-t border-gray-200/50 mt-2 pt-4">
                        {item.answer}
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

export const GeographySection = ({ onAction }: { onAction: () => void }) => {
   const [isExpandedCity, setIsExpandedCity] = useState(false);
   const [openDistrictIdx, setOpenDistrictIdx] = useState<number | null>(null);

   const MOSCOW_LOCATIONS = [
      {
        district: "Центральный (ЦАО)",
        stations: ["Арбатская", "Бауманская", "Белорусская", "Библиотека им. Ленина", "Китай-город", "Комсомольская", "Краснопресненская", "Курская", "Лубянка", "Марксистская", "Маяковская", "Новокузнецкая", "Охотный Ряд", "Павелецкая", "Парк Культуры", "Полянка", "Пушкинская", "Серпуховская", "Смоленская", "Таганская", "Тверская", "Театральная", "Третьяковская", "Трубная", "Тургеневская", "Улица 1905 года", "Цветной бульвар", "Чеховская", "Чистые пруды"]
      },
      {
        district: "Северный (САО)",
        stations: ["Аэропорт", "Беговая", "Водный стадион", "Войковская", "Динамо", "Дмитровская", "Петровский парк", "Полежаевская", "Речной вокзал", "Сокол", "Тимирязевская", "Ховрино", "ЦСКА"]
      },
      {
        district: "Северо-Восточный (СВАО)",
        stations: ["Алексеевская", "Алтуфьево", "Бабушкинская", "Бибирево", "Ботанический сад", "Бутырская", "ВДНХ", "Владыкино", "Дмитровская", "Медведково", "Марьина Роща", "Отрадное", "Проспект Мира", "Рижская", "Ростокино", "Савеловская", "Свиблово"]
      },
      {
        district: "Восточный (ВАО)",
        stations: ["Авиамоторная", "Бульвар Рокоссовского", "Измайловская", "Новогиреево", "Новокосино", "Партизанская", "Первомайская", "Перово", "Преображенская площадь", "Семеновская", "Сокольники", "Черкизовская", "Щелковская", "Электрозаводская"]
      },
      {
        district: "Юго-Восточный (ЮВАО)",
        stations: ["Авиамоторная", "Братиславская", "Волжская", "Дубровка", "Кожуховская", "Кузьминки", "Лефортово", "Люблино", "Марьино", "Нижегородская", "Печатники", "Рязанский проспект", "Текстильщики"]
      },
      {
        district: "Южный (ЮАО)",
        stations: ["Автозаводская", "Алма-Атинская", "Аннино", "Варшавская", "Домодедовская", "Кантемировская", "Каширская", "Коломенская", "Красногвардейская", "Нагатинская", "Нагорная", "Орехово", "Пражская", "Технопарк", "Тульская", "Царицыно", "Чертановская", "Шаболовская", "Южная"]
      },
      {
        district: "Юго-Западный (ЮЗАО)",
        stations: ["Академическая", "Беляево", "Битцевский парк", "Бульвар Дмитрия Донского", "Калужская", "Коньково", "Ленинский проспект", "Нахимовский проспект", "Новоясеневская", "Профсоюзная", "Севастопольская", "Теплый Стан", "Университет", "Ясенево"]
      },
      {
        district: "Западный (ЗАО)",
        stations: ["Багратионовская", "Киевская", "Крылатское", "Кунцевская", "Мичуринский проспект", "Молодежная", "Парк Победы", "Пионерская", "Проспект Вернадского", "Раменки", "Славянский бульвар", "Солнцево", "Студенческая", "Тропарево", "Филевский парк", "Фили", "Юго-Западная"]
      },
      {
        district: "Северо-Западный (СЗАО)",
        stations: ["Волоколамская", "Митино", "Мякинино", "Октябрьское поле", "Планерная", "Пятницкое шоссе", "Спартак", "Строгино", "Сходненская", "Тушинская", "Щукинская"]
      }
   ];

   const MO_CITIES = [
      "Балашиха", "Подольск", "Химки", "Мытищи", "Королёв", "Люберцы",
      "Красногорск", "Одинцово", "Домодедово", "Электросталь", "Щёлково",
      "Серпухов", "Коломна", "Долгопрудный", "Раменское", "Реутов", "Пушкино",
      "Жуковский", "Орехово-Зуево", "Видное", "Ногинск", "Сергиев Посад", "Лобня",
      "Ивантеевка", "Лыткарино", "Дзержинский", "Котельники", "Троицк"
   ];

   // Limit initial view for cities
   const visibleCities = isExpandedCity ? MO_CITIES : MO_CITIES.slice(0, 12);

   return (
      <section className="py-24 border-t border-gray-200 relative" id="geography">
         <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-16">
               
               {/* Left Content Column */}
               <div className="flex-1">
                  <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-8 text-slate-900">География работ</h2>
                  
                  {/* SEO / LSI Text Block */}
                  <div className="bg-gray-50 rounded-2xl p-6 mb-10 border border-gray-100">
                      <p className="text-gray-600 leading-relaxed">
                          Осуществляем профессиональный <strong>ремонт ванных комнат под ключ</strong> во всех районах Москвы и городах Московской области. 
                          <span className="hidden sm:inline"> Наш инженер-сметчик бесплатно выезжает для замера и составления сметы как в пределах МКАД, так и до 50 км за его пределы. 
                          Мы работаем без предоплаты, гарантируем соблюдение сроков и фиксированную стоимость работ по договору.</span>
                      </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8 items-start">
                      {/* Moscow Districts List (Accordion) */}
                      <div>
                          <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                             <MapPin className="w-5 h-5 text-red-500" />
                             Округа Москвы
                          </h3>
                          <div className="flex flex-col border-t border-gray-100">
                              {MOSCOW_LOCATIONS.map((loc, idx) => (
                                  <div key={idx} className="border-b border-gray-100">
                                      <button 
                                        onClick={() => setOpenDistrictIdx(openDistrictIdx === idx ? null : idx)}
                                        className={`w-full py-3 flex items-center justify-between text-left transition-colors group ${openDistrictIdx === idx ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-600'}`}
                                      >
                                          <span className="text-sm">{loc.district}</span>
                                          {openDistrictIdx === idx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4 text-gray-300 group-hover:text-blue-400" />}
                                      </button>
                                      
                                      {/* Hidden content for SEO, visible on user interaction */}
                                      <div className={`grid transition-all duration-300 ${openDistrictIdx === idx ? 'grid-rows-[1fr] opacity-100 pb-4' : 'grid-rows-[0fr] opacity-0'}`}>
                                          <div className="overflow-hidden">
                                              <div className="flex flex-wrap gap-2 pt-2">
                                                  {loc.stations.map((station, sIdx) => (
                                                      <span key={sIdx} className="text-xs bg-gray-50 text-gray-500 px-2 py-1 rounded border border-gray-100">
                                                          {station}
                                                      </span>
                                                  ))}
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>

                      {/* MO Cities List (Tag Cloud) */}
                      <div>
                          <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                             <Map className="w-5 h-5 text-blue-500" />
                             Города МО
                          </h3>
                          <div className="flex flex-wrap gap-2 content-start relative">
                              {visibleCities.map((city, i) => (
                                  <span 
                                    key={i} 
                                    className="bg-white border border-gray-200 px-3 py-1.5 rounded-full text-sm text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm cursor-default"
                                  >
                                      {city}
                                  </span>
                              ))}
                          </div>
                          
                          <button 
                            onClick={() => setIsExpandedCity(!isExpandedCity)}
                            className="mt-6 flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                          >
                             {isExpandedCity ? (
                                <>Свернуть список <ChevronUp className="w-4 h-4" /></>
                             ) : (
                                <>Показать все города <ChevronDown className="w-4 h-4" /></>
                             )}
                          </button>
                      </div>
                  </div>
               </div>

               {/* Right Map Column */}
               <div className="lg:w-[40%] w-full h-[400px] lg:h-auto min-h-[400px] bg-gray-200 rounded-[2.5rem] overflow-hidden relative shadow-2xl order-first lg:order-last">
                  <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" alt="Map" className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Floating Card on Map */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-100">
                     <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
                           <PhoneCall className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                           <div className="font-bold text-slate-900">Бесплатный выезд</div>
                           <div className="text-xs text-gray-500">Инженер будет у вас завтра</div>
                        </div>
                     </div>
                     <button 
                        onClick={onAction}
                        className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors"
                     >
                        Вызвать замерщика
                     </button>
                  </div>

                  {/* Pin Animation */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                          <div className="w-4 h-4 bg-blue-600 rounded-full animate-ping absolute inset-0"></div>
                          <div className="w-4 h-4 bg-blue-600 rounded-full relative border-2 border-white shadow-lg"></div>
                      </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};
