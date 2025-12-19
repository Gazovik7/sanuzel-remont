
import React, { useState } from 'react';
import {
  Check, X, Hammer, Clock, Shield, Trash2,
  Ruler, Search, ShoppingBag, HardHat, FileText,
  Users, MapPin, Play, Star, BadgeCheck, CheckCircle2, ArrowRight, CheckCheck, MoreVertical, ShieldCheck, Microscope, Factory, PhoneCall, Phone,
  ChevronDown, ChevronUp, Map, Train, Video, FileSignature, MessageCircle
} from 'lucide-react';
import type { Package, PortfolioItem, FaqItem, TeamMember, Review, VideoReview, PaperReview } from '../types';
import type {
  ComparisonBlockConfig,
  PackagesBlockConfig,
  PortfolioBlockConfig,
  QualityControlBlockConfig,
  WhyUsBlockConfig,
  WhyUsIconKey,
  WorkflowBlockConfig,
  IncludedBlockConfig,
  VisualizationBlockConfig,
  MaterialsBlockConfig,
  TeamBlockConfig,
  GuaranteeBlockConfig,
  ReviewsBlockConfig,
  SeoTextBlockConfig,
  FaqBlockConfig,
  GeographyBlockConfig,
} from '../../data/services';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { PriceTableSection } from './PriceTableSection';

// Note: Background classes (bg-white/bg-slate-100) are handled in App.tsx for zebra striping.
// We just remove the hardcoded bg classes here where appropriate.

export const ComparisonSection = ({ onAction, content }: { onAction: () => void; content: ComparisonBlockConfig }) => (
  <section className="py-24" id="comparison">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6 text-slate-900">{content.title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">{content.description}</p>
      </div>

      <div className="overflow-hidden rounded-3xl shadow-xl border border-gray-200 bg-white mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {/* Column 1 */}
          <div className="p-8 hover:bg-gray-50 transition-colors">
             <div className="font-bold text-xl mb-8 text-gray-400 text-center uppercase tracking-widest">{content.privateerTitle}</div>
             <ul className="space-y-6">
               {content.privateerItems.map((text, idx) => (
                 <li key={idx} className="flex items-start gap-4 text-sm text-gray-500">
                   <X className="w-5 h-5 text-red-400 shrink-0" />
                   <span>{text}</span>
                 </li>
               ))}
             </ul>
          </div>

          {/* Column 2 */}
          <div className="p-8 hover:bg-gray-50 transition-colors">
             <div className="font-bold text-xl mb-8 text-gray-400 text-center uppercase tracking-widest">{content.studioTitle}</div>
             <ul className="space-y-6">
               {content.studioItems.map((item, idx) => (
                 <li key={idx} className="flex items-start gap-4 text-sm text-gray-500">
                   {item.kind === 'good' ? (
                     <Check className="w-5 h-5 text-green-500 shrink-0" />
                   ) : (
                     <X className="w-5 h-5 text-red-400 shrink-0" />
                   )}
                   <span>{item.text}</span>
                 </li>
               ))}
             </ul>
          </div>

          {/* Column 3 (Us) */}
          <div className="p-8 bg-slate-900 text-white relative overflow-hidden transform md:scale-105 shadow-2xl z-10 md:-my-4 md:rounded-xl md:border-t-4 md:border-blue-500">
             <div className="font-bold text-2xl mb-8 text-white text-center flex items-center justify-center gap-2">
                {content.usTitle} <BadgeCheck className="w-6 h-6 text-blue-500" />
             </div>
             <ul className="space-y-6">
               {content.usItems.map((text, idx) => (
                 <li key={idx} className="flex items-start gap-4 text-base font-medium">
                   <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                     <Check className="w-3 h-3 text-white" />
                   </div>
                   <span>{text}</span>
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const PackagesSection = ({
  onSelect,
  onShowPriceList,
  packages,
  content,
}: {
  onSelect: (pkg: string) => void;
  onShowPriceList?: () => void;
  packages: Package[];
  content: PackagesBlockConfig;
}) => (
  <section className="py-24" id="packages">
    <div className="container mx-auto px-4 max-w-6xl">
      <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-center mb-6 text-slate-900">{content.title}</h2>
      <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">{content.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
        {packages.map((pkg, idx) => (
          <div key={idx} className={`rounded-3xl transition-all flex flex-col relative group ${idx === 1 ? 'border-2 border-blue-600 shadow-2xl scale-105 z-10 bg-white' : 'border border-gray-200 hover:shadow-xl hover:border-gray-300 bg-white'}`}>
            {idx === 1 && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-max bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wider">
                    {content.featuredBadgeText}
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
                data-lead-open="callback"
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  idx === 1 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30 active:scale-95' 
                    : 'bg-white border-2 border-gray-200 text-slate-900 hover:border-slate-900 hover:bg-slate-900 hover:text-white active:scale-95'
                }`}
              >
                {content.ctaText}
              </button>
            </div>
          </div>
        ))}
      </div>

      <PriceTableSection
        onShowPriceList={onShowPriceList}
        content={content.priceTable}
        categories={content.priceTableCategories}
      />
    </div>
  </section>
);

export const PortfolioSection = ({
  onAction,
  onCalculate,
  portfolio,
  content,
}: {
  onAction: () => void;
  onCalculate?: () => void;
  portfolio: PortfolioItem[];
  content: PortfolioBlockConfig;
}) => (
  <section className="py-24" id="portfolio">
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-4 text-slate-900">{content.title}</h2>
            <p className="text-gray-600 max-w-xl text-lg">{content.description}</p>
        </div>
        <button onClick={onAction} className="hidden md:flex items-center gap-2 font-bold text-blue-600 hover:text-blue-800 transition-colors">
            {content.viewAllText} <ArrowRight className="w-5 h-5" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 gap-16">
        {portfolio.map((item, idx) => (
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
                    <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400">{content.whatWeDidLabel}</h4>
                    <p className="text-gray-700 leading-relaxed border-l-2 border-blue-100 pl-4">{item.workList}</p>
                </div>

                <div className="flex items-center gap-8 border-t border-gray-100 pt-8 mt-auto">
                  <div>
                    <span className="text-xs text-gray-400 block mb-1 uppercase tracking-wide">{content.timeLabel}</span>
                    <span className="font-bold text-xl text-slate-900">{item.time}</span>
                  </div>
                  <div className="w-px h-10 bg-gray-100"></div>
                  <div>
                    <span className="text-xs text-gray-400 block mb-1 uppercase tracking-wide">{content.priceLabel}</span>
                    <span className="font-bold text-2xl text-blue-600">{item.price}</span>
                  </div>
                </div>
                
                <button
                  type="button"
                  data-lead-open="callback"
                  className="mt-8 w-full py-3 rounded-lg border border-gray-200 text-gray-600 font-medium hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
                >
                  {content.ctaText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12 md:hidden">
        <button onClick={onAction} className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg">
          {content.mobileCtaText}
        </button>
      </div>
    </div>
  </section>
);

export const QualityControlSection = ({ content, checklist }: { content: QualityControlBlockConfig; checklist: Array<{ day: string; title: string; desc: string }> }) => {
  return (
    <section className="py-24" id="quality">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
           <span className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-3 block">{content.kicker}</span>
           <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6 text-slate-900">{content.title}</h2>
           <p className="text-gray-600 max-w-2xl mx-auto text-lg">{content.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
           {/* Checklist Card */}
           <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full blur-3xl opacity-50 -mr-10 -mt-10"></div>
              
              <h3 className="text-2xl font-heading font-bold mb-8 flex items-center gap-3">
                 <ShieldCheck className="w-8 h-8 text-green-600" />
                 {content.checklistTitle}
              </h3>
              
              <div className="space-y-6 relative">
                 <div className="absolute left-[11px] top-2 bottom-4 w-0.5 bg-gray-100"></div>
                 {checklist.map((item, idx) => (
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
                     {content.photoReportsTitle}
                  </h3>
                  
                  <p className="text-gray-600 text-base leading-relaxed mb-8 relative z-10">
                     {content.photoReportsDescription}
                  </p>
                  
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100/50 relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{content.whatsappReportLabel}</span>
                      </div>
                      
                      <div className="flex gap-3 mb-3 overflow-x-auto pb-2">
                        {content.reportImages.map((src, i) => (
                          <div key={i} className="w-16 h-16 rounded-lg bg-gray-200 shrink-0 overflow-hidden relative group">
                            <img src={src} className="w-full h-full object-cover" alt={content.reportImageAlt} loading="lazy" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-slate-800 italic">{content.reportMessage}</p>
                  </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}

export const WhyUsSection = ({ content }: { content: WhyUsBlockConfig }) => {
  const iconByKey: Record<WhyUsIconKey, any> = {
    shield: Shield,
    users: Users,
    fileText: FileText,
    hammer: Hammer,
    trash2: Trash2,
    shoppingBag: ShoppingBag,
  };

  return (
    <section className="py-24" id="why-us">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-center mb-16 text-slate-900">{content.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.items.map((item, idx) => {
            const Icon = iconByKey[item.icon];
            return (
              <div
                key={idx}
                className="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-gray-100 transition-all border border-transparent hover:border-gray-100 group cursor-default"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-slate-900">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const WorkflowSection = ({ content, steps }: { content: WorkflowBlockConfig; steps: Array<{ title: string; desc: string }> }) => (
  <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
    <div className="container mx-auto px-4 max-w-6xl relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6">{content.title}</h2>
        <p className="text-gray-400 text-lg">{content.description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        {steps.map((step, idx) => (
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
                  {content.quote}
              </p>
          </div>
      </div>
    </div>
  </section>
);

export const IncludedSection = ({ content, works }: { content: IncludedBlockConfig; works: string[] }) => (
  <section className="py-24">
    <div className="container mx-auto px-4 max-w-6xl">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-3 block">{content.kicker}</span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-8 text-slate-900">{content.title}</h2>
            <p className="text-gray-500 text-lg mb-8">{content.description}</p>
            
            <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-green-50 text-green-800 border border-green-100">
                    <CheckCircle2 className="w-6 h-6 shrink-0" />
                    <span className="font-bold">{content.highlightIncludedCleaning}</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-blue-50 text-blue-800 border border-blue-100">
                    <FileText className="w-6 h-6 shrink-0" />
                    <span className="font-bold">{content.highlightIncludedDocs}</span>
                </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {works.map((work, idx) => (
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

export const VisualizationSection = ({ content }: { content: VisualizationBlockConfig }) => (
    <section className="py-24 overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
                
                <div className="flex-1 space-y-8 relative z-10">
                    <div>
                        <span className="text-blue-400 font-bold tracking-wider uppercase text-xs mb-3 block">{content.kicker}</span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">{content.title}</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            {content.description}
                        </p>
                    </div>
                    
                    <ul className="space-y-4">
                        {content.bullets.map((text, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-white">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <Check className="text-blue-400 w-4 h-4" />
                                </div>
                                <span className="font-medium">{text}</span>
                            </li>
                        ))}
                    </ul>

                    <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:bg-gray-100 transform hover:-translate-y-1">
                        {content.ctaText}
                    </button>
                </div>
                
                <div className="flex-1 w-full max-w-md">
                    <img src={content.imageSrc} alt={content.imageAlt} className="rounded-2xl shadow-2xl border-4 border-white/10 rotate-2 hover:rotate-0 transition-transform duration-500" />
                </div>
            </div>
        </div>
    </section>
);

export const MaterialsSection = ({
  content,
  brands,
}: {
  content: MaterialsBlockConfig;
  brands: Array<{ category: string; desc: string; brands: string[] }>;
}) => (
    <section className="py-24" id="materials">
        <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col gap-16">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-slate-900">{content.title}</h2>
                        <p className="text-gray-500 leading-relaxed text-lg">
                            {content.description}
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                                    <ShoppingBag className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900">{content.benefits[0]?.title}</h4>
                                    <p className="text-sm text-gray-500 mt-1">{content.benefits[0]?.desc}</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                                    <Search className="w-6 h-6 text-slate-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900">{content.benefits[1]?.title}</h4>
                                    <p className="text-sm text-gray-500 mt-1">{content.benefits[1]?.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 relative w-full">
                        <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-3 opacity-10"></div>
                        <img
                          src={content.imageSrc}
                          alt={content.imageAlt}
                          className="rounded-3xl shadow-2xl relative z-10 w-full"
                          data-parallax="materials"
                          data-parallax-max="18"
                        />
                    </div>
                </div>

                {/* Brands Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {brands.map((cat, idx) => (
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

export const TeamSection = ({ content, members, onAction }: { content: TeamBlockConfig; members: TeamMember[]; onAction?: () => void }) => (
    <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-center mb-6 text-slate-900">{content.title}</h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">{content.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {members.map((member, idx) => (
                    <div key={idx} className="bg-white p-2 pb-6 rounded-2xl shadow-sm hover:shadow-xl transition-all group overflow-hidden text-center border border-gray-100">
                         <div className="w-full aspect-square rounded-xl overflow-hidden mb-6 relative">
                              <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                         </div>
                        <h4 className="font-bold text-lg text-slate-900 mb-1">{member.name}</h4>
                        <p className="text-blue-600 text-xs font-bold mb-4 uppercase tracking-wide">{member.role}</p>
                        <p className="text-gray-500 text-sm px-4">{member.description}</p>
                    </div>
                ))}

                {/* CTA Cards to fill empty spaces */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-center border border-blue-500 flex flex-col justify-center items-center sm:col-span-2 lg:col-span-2">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                        <Phone className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-xl text-white mb-2">Нужна консультация?</h4>
                    <p className="text-blue-100 text-sm mb-6">Оставьте заявку, и наш инженер свяжется с вами в течение 15 минут</p>
                    <button
                        onClick={onAction}
                        className="w-full py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg"
                    >
                        Получить консультацию
                    </button>
                    <p className="text-blue-200 text-xs mt-3">Бесплатно • Без обязательств</p>
                </div>
            </div>
        </div>
    </section>
);

export const GuaranteeSection = ({ content }: { content: GuaranteeBlockConfig }) => (
  <section className="py-24">
    <div className="container mx-auto px-4 max-w-5xl">
       <div className="bg-white border-2 border-gray-100 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div>
                <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6 text-slate-900">{content.title}</h2>
                <p className="text-gray-500 text-lg mb-8">
                    {content.description}
                </p>
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold">{content.guaranteeYears}</div>
                        <span className="font-bold text-slate-900">{content.guaranteeText}</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                            <FileText className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-slate-900">{content.contractText}</span>
                    </div>
                </div>
             </div>
             <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
                <div className="font-heading text-xl font-bold mb-4 text-slate-900">{content.excerptTitle}</div>
                <div className="space-y-4 text-sm text-gray-600 italic">
                    {content.excerptParagraphs.map((text, idx) => (
                      <p key={idx}>{text}</p>
                    ))}
                </div>
                <div className="mt-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div>
                        <div className="text-xs font-bold text-gray-900">{content.directorTitle}</div>
                        <div className="text-[10px] text-gray-500">{content.directorName}</div>
                    </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  </section>
);

export const ReviewsSection = ({
    onShowAllReviews,
    content,
    videoReviews,
    whatsappReviews,
    paperReviews,
}: {
    onShowAllReviews?: () => void;
    content: ReviewsBlockConfig;
    videoReviews: VideoReview[];
    whatsappReviews: Review[];
    paperReviews: PaperReview[];
}) => {
    const video = videoReviews[0];

    return (
        <section className="py-24" id="reviews">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6 text-slate-900">{content.title}</h2>
                    <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
                        {content.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    
                    {/* Video Card - Left Column */}
                    <div className="relative group overflow-hidden rounded-[2rem] shadow-xl bg-slate-900 cursor-pointer h-[400px] lg:h-auto min-h-[400px]">
                         <img src={video.preview} alt={video.author} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                         <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/50">
                                   <Play className="w-8 h-8 text-white fill-white ml-1" />
                              </div>
                         </div>
                         <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-slate-900 to-transparent">
                             <div className="flex items-center gap-2 mb-2">
                                <Video className="w-4 h-4 text-blue-400" />
                                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">{content.videoKicker}</span>
                             </div>
                             <h3 className="text-2xl font-bold text-white mb-1">{video.author}</h3>
                             <p className="text-gray-300">{video.location}</p>
                         </div>
                    </div>

                    {/* Stacked Side Column - Right Column */}
                    <div className="flex flex-col gap-6 h-full min-h-[450px]">
                        
                        {/* WhatsApp Screenshot Card - Horizontal Layout of multiple vertical phones */}
                        <div className="flex-1 bg-[#E5DDD5] rounded-3xl overflow-hidden shadow-lg border border-gray-200 relative group cursor-pointer min-h-[220px]">
                             <div className="absolute top-4 left-6 z-20">
                                <div className="bg-white/90 backdrop-blur border border-white/50 px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">{content.whatsappKicker}</span>
                                </div>
                             </div>

                             {/* Fan of phones */}
                             <div className="absolute inset-0 flex items-end justify-center pb-0 translate-y-12 group-hover:translate-y-8 transition-transform duration-500">
                                 {whatsappReviews.slice(0, 3).map((review, i) => (
                                     <div 
                                        key={i} 
                                        className={`w-32 aspect-[9/16] bg-slate-800 rounded-t-2xl border-4 border-slate-800 shadow-xl overflow-hidden relative transform transition-transform duration-500 ${
                                            i === 0 ? '-rotate-12 -mr-12 z-10 translate-y-4' : 
                                            i === 1 ? 'z-20 -translate-y-2 scale-110' : 
                                            'rotate-12 -ml-12 z-10 translate-y-4'
                                        }`}
                                     >
                                         <img src={review.screenshot} className="w-full h-full object-cover" alt="" />
                                     </div>
                                 ))}
                             </div>
                        </div>

                        {/* Paper Stack - Horizontal Fan Layout */}
                        <div className="flex-1 relative group cursor-pointer bg-slate-50 rounded-3xl border border-gray-200 overflow-hidden min-h-[220px]">
                             <div className="absolute top-4 left-6 z-20">
                                <div className="bg-white/90 backdrop-blur border border-white/50 px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                                    <FileSignature className="w-4 h-4 text-blue-600" />
                                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">{content.thanksKicker}</span>
                                </div>
                             </div>

                             {/* Fan of papers */}
                             <div className="absolute inset-0 flex items-center justify-center top-8">
                                 {paperReviews.slice(0, 3).map((paper, idx) => (
                                     <div 
                                        key={idx}
                                        className={`absolute w-36 h-48 bg-white shadow-md border border-gray-100 p-2 transition-all duration-500 transform group-hover:scale-105 ${
                                            idx === 0 ? '-translate-x-16 rotate-[-10deg]' :
                                            idx === 1 ? 'z-10 -translate-y-2' :
                                            'translate-x-16 rotate-[10deg]'
                                        }`}
                                     >
                                         <div className="w-full h-full overflow-hidden bg-gray-50 relative">
                                            <img src={paper.image} className="w-full h-full object-cover opacity-90" alt="review" />
                                            {/* Simulate text lines if image fails or looks plain */}
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20"></div>
                                         </div>
                                     </div>
                                 ))}
                             </div>
                             
                             <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-slate-50 to-transparent z-20 pointer-events-none"></div>
                        </div>

                    </div>
                </div>

                <div className="text-center">
                    <button 
                      onClick={() => onShowAllReviews && onShowAllReviews()}
                      className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 transform hover:-translate-y-1"
                    >
                        {content.buttonText} <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export const SeoTextSection = ({ content }: { content: SeoTextBlockConfig }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <details className="seo-details">
          <summary className="w-full text-left group flex items-start md:items-center justify-between gap-4 select-none cursor-pointer">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              {content.summaryTitle}
            </h2>
            <div className="mt-1 md:mt-0 p-2 rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors shrink-0 border border-gray-100 group-hover:border-blue-100">
              <ChevronDown className="seo-chevron w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-transform duration-300" />
            </div>
          </summary>

          <div className="mt-8">
            <div className="prose prose-slate max-w-none text-gray-600 space-y-4">
               {content.paragraphsHtml.map((html, idx) => (
                  <p key={idx} dangerouslySetInnerHTML={{ __html: html }} />
               ))}
               <p dangerouslySetInnerHTML={{ __html: content.listIntroHtml }} />
               <ul className="list-disc pl-5 space-y-2">
                  {content.listItemsHtml.map((html, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: html }} />
                  ))}
               </ul>
              <p dangerouslySetInnerHTML={{ __html: content.closingHtml }} />
            </div>
          </div>
        </details>
      </div>
    </section>
  );
};

export const FaqSection = ({ faqItems, content }: { faqItems: FaqItem[]; content: FaqBlockConfig }) => {
  const [openIdx, setOpenIdx] = React.useState<number | null>(0);
  
  const items = faqItems;

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
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-center mb-12 text-slate-900">{content.title}</h2>
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

export const GeographySection = ({ onAction, content }: { onAction: () => void; content: GeographyBlockConfig }) => {
   const [isExpandedCity, setIsExpandedCity] = useState(false);
   const [openDistrictIdx, setOpenDistrictIdx] = useState<number | null>(null);

   let MOSCOW_LOCATIONS = [
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
   MOSCOW_LOCATIONS = content.moscowLocations;

   let MO_CITIES = [
      "Балашиха", "Подольск", "Химки", "Мытищи", "Королёв", "Люберцы",
      "Красногорск", "Одинцово", "Домодедово", "Электросталь", "Щёлково",
      "Серпухов", "Коломна", "Долгопрудный", "Раменское", "Реутов", "Пушкино",
      "Жуковский", "Орехово-Зуево", "Видное", "Ногинск", "Сергиев Посад", "Лобня",
      "Ивантеевка", "Лыткарино", "Дзержинский", "Котельники", "Троицк"
   ];
   MO_CITIES = content.moCities;

   // Limit initial view for cities
   const visibleCities = isExpandedCity ? MO_CITIES : MO_CITIES.slice(0, 12);

   return (
      <section className="py-24 border-t border-gray-200 relative" id="geography">
         <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-16">
               
               {/* Left Content Column */}
               <div className="flex-1">
                  <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-8 text-slate-900">{content.title}</h2>
                  
                  {/* SEO / LSI Text Block */}
                  <div className="bg-gray-50 rounded-2xl p-6 mb-10 border border-gray-100">
                      <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: content.seoTextHtml }} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8 items-start">
                      {/* Moscow Districts List (Accordion) */}
                      <div>
                          <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                             <MapPin className="w-5 h-5 text-red-500" />
                             {content.moscowDistrictsTitle}
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
                                                  {loc.stations.map((station, sIdx) => {
                                                      const isLink = typeof station === 'object' && 'url' in station;
                                                      const name = isLink ? station.name : station;
                                                      const url = isLink ? station.url : null;

                                                      return url ? (
                                                          <a
                                                              key={sIdx}
                                                              href={url}
                                                              className="text-xs bg-gray-50 text-gray-500 px-2 py-1 rounded border border-gray-100 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors"
                                                          >
                                                              {name}
                                                          </a>
                                                      ) : (
                                                          <span key={sIdx} className="text-xs bg-gray-50 text-gray-500 px-2 py-1 rounded border border-gray-100">
                                                              {name}
                                                          </span>
                                                      );
                                                  })}
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
                             {content.moCitiesTitle}
                          </h3>
                          <div className="flex flex-wrap gap-2 content-start relative">
                              {visibleCities.map((city, i) => {
                                  const isLink = typeof city === 'object' && 'url' in city;
                                  const name = isLink ? city.name : city;
                                  const url = isLink ? city.url : null;

                                  return url ? (
                                      <a
                                          key={i}
                                          href={url}
                                          className="bg-white border border-gray-200 px-3 py-1.5 rounded-full text-sm text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm"
                                      >
                                          {name}
                                      </a>
                                  ) : (
                                      <span
                                        key={i}
                                        className="bg-white border border-gray-200 px-3 py-1.5 rounded-full text-sm text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm cursor-default"
                                      >
                                          {name}
                                      </span>
                                  );
                              })}
                          </div>
                          
                          <button 
                            onClick={() => setIsExpandedCity(!isExpandedCity)}
                            className="mt-6 flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                          >
                             {isExpandedCity ? (
                                <>{content.collapseCitiesText} <ChevronUp className="w-4 h-4" /></>
                             ) : (
                                <>{content.showAllCitiesText} <ChevronDown className="w-4 h-4" /></>
                             )}
                          </button>
                      </div>
                  </div>
               </div>

               {/* Right Map Column */}
               <div className="lg:w-[40%] w-full h-[400px] lg:h-auto min-h-[400px] bg-gray-200 rounded-[2.5rem] overflow-hidden relative shadow-2xl order-first lg:order-last">
                  <img src={content.mapImageSrc} alt={content.mapImageAlt} className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Floating Card on Map */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-100">
                     <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
                           <PhoneCall className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                           <div className="font-bold text-slate-900">{content.mapCardTitle}</div>
                           <div className="text-xs text-gray-500">{content.mapCardSubtitle}</div>
                        </div>
                     </div>
                     <button 
                        onClick={onAction}
                        className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors"
                     >
                        {content.mapCtaText}
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
