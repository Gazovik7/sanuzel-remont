
import React from 'react';
import UniversalForm from './UniversalForm';
import { FileText, TrendingUp, CheckCircle2, AlertOctagon, ArrowRight, Download } from 'lucide-react';
import { useModal } from '../landing/Modal';

const GrowthBlock: React.FC = () => {
  const { openModal } = useModal();

  const handlePreview = () => {
      openModal({
          title: 'Пример стратегии',
          subtitle: 'Мы подготовим для вас такой же понятный документ с точками роста.',
          buttonText: 'Хочу такой аудит',
          source: 'Audit_Preview_GrowthBlock',
      });
  };

  return (
    <section className="py-24 bg-[#09090b] text-white relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
            
            <div className="grid lg:grid-cols-12 gap-16 items-center">
                
                {/* LEFT COLUMN: Offer & Form */}
                <div className="lg:col-span-7 space-y-10">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-6 border border-[#D4AF37]/20">
                            <FileText size={12} />
                            Стратегический аудит
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 leading-tight">
                            Получите <span className="italic text-gradient-gold">стратегию роста</span> <br/>
                            вашего проекта
                        </h2>
                        
                        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                            Это не автоматический отчет робота. Вы получите документ с ручным разбором от эксперта: 
                            где вы теряете деньги, какие технические ошибки тянут сайт вниз и пошаговый план выхода в ТОП-3.
                        </p>
                    </div>

                    {/* Checklist */}
                    <div className="space-y-4">
                        {[
                            'Аудит по методу «Колесо Баланса» (8 факторов)',
                            'Список критических ошибок, влияющих на доход',
                            'Медиаплан с прогнозом трафика и лидов'
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-gray-300">
                                <div className="w-6 h-6 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0">
                                    <CheckCircle2 size={14} />
                                </div>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* Form Container */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl relative">
                        <div className="mb-4 flex items-center justify-between text-xs text-gray-400">
                            <span>Готовность: 1-2 рабочих дня</span>
                            <span className="flex items-center gap-1 text-[#D4AF37] cursor-pointer hover:underline" onClick={handlePreview}>
                                <Download size={12} /> Пример отчета
                            </span>
                        </div>
                        <UniversalForm 
                            source="GrowthBlock_Strategy" 
                            variant="default"
                            buttonText="Получить стратегию"
                            isDark={true}
                        />
                    </div>
                </div>

                {/* RIGHT COLUMN: Visual Deliverables */}
                <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-md aspect-[3/4] perspective-1000 group">
                        
                        {/* Background Doc: Media Plan */}
                        <div className="absolute top-0 right-0 w-[90%] h-[90%] bg-gray-100 rounded-xl shadow-lg transform rotate-6 translate-x-4 translate-y-4 border border-gray-200/50 opacity-90 transition-transform duration-500 group-hover:rotate-12 group-hover:translate-x-8">
                            <div className="p-6 h-full flex flex-col opacity-50">
                                <div className="h-4 w-1/3 bg-gray-300 rounded mb-8"></div>
                                <div className="flex-1 flex items-end gap-2">
                                    <div className="w-full bg-blue-200 h-[20%] rounded-t"></div>
                                    <div className="w-full bg-blue-300 h-[40%] rounded-t"></div>
                                    <div className="w-full bg-blue-400 h-[60%] rounded-t"></div>
                                    <div className="w-full bg-blue-500 h-[85%] rounded-t"></div>
                                </div>
                            </div>
                        </div>

                        {/* Foreground Doc: Audit with Wheel */}
                        <div className="absolute top-0 right-0 w-[90%] h-[90%] bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden border border-gray-100 transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:-rotate-2">
                            
                            {/* Header */}
                            <div className="h-14 bg-[#09090b] flex items-center justify-between px-6 shrink-0">
                                <div>
                                    <div className="text-[#D4AF37] font-bold text-[10px] uppercase tracking-widest">SEO Audit</div>
                                    <div className="text-gray-500 text-[8px]">ID: 8492-AB</div>
                                </div>
                                <div className="text-white font-serif text-xs opacity-50">Smirnov.Marketing</div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 p-6 flex flex-col relative">
                                {/* Wheel of Balance Visual (Mini) */}
                                <div className="mb-6 flex justify-center relative">
                                    <div className="w-32 h-32 relative">
                                        {/* Simple CSS/SVG Radar Chart */}
                                        <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90 drop-shadow-md">
                                            {/* Grid */}
                                            <circle cx="50" cy="50" r="40" fill="none" stroke="#eee" strokeWidth="1" />
                                            <circle cx="50" cy="50" r="25" fill="none" stroke="#eee" strokeWidth="1" />
                                            {/* Data Polygon */}
                                            <path 
                                                d="M50,10 L65,30 L85,50 L70,80 L50,90 L30,80 L15,50 L35,30 Z" 
                                                fill="rgba(212, 175, 55, 0.2)" 
                                                stroke="#D4AF37" 
                                                strokeWidth="2"
                                            />
                                            {/* Points */}
                                            <circle cx="50" cy="10" r="2" fill="#09090b" />
                                            <circle cx="85" cy="50" r="2" fill="#09090b" />
                                            <circle cx="50" cy="90" r="2" fill="#09090b" />
                                            <circle cx="15" cy="50" r="2" fill="#09090b" />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-xs font-black text-[#09090b]">45%</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Results List */}
                                <div className="space-y-3">
                                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-1">Результаты анализа</div>
                                    
                                    {/* Critical Errors */}
                                    <div className="flex items-start gap-3 bg-red-50 p-2 rounded-lg border border-red-100">
                                        <AlertOctagon size={16} className="text-red-500 shrink-0 mt-0.5" />
                                        <div>
                                            <div className="text-xs font-bold text-red-700">Критические ошибки (3)</div>
                                            <div className="text-[10px] text-red-600/70 leading-tight">Дубли H1, низкая скорость, 404...</div>
                                        </div>
                                    </div>

                                    {/* Growth Points */}
                                    <div className="flex items-start gap-3 bg-green-50 p-2 rounded-lg border border-green-100">
                                        <TrendingUp size={16} className="text-green-600 shrink-0 mt-0.5" />
                                        <div>
                                            <div className="text-xs font-bold text-green-700">Точки роста (5)</div>
                                            <div className="text-[10px] text-green-600/70 leading-tight">Расширение семантики, LSI...</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Stamp */}
                                <div className="absolute bottom-4 right-4 opacity-10 transform -rotate-12 pointer-events-none">
                                    <div className="w-16 h-16 border-4 border-[#09090b] rounded-full flex items-center justify-center p-1">
                                        <div className="text-[8px] font-black text-[#09090b] text-center uppercase leading-none">
                                            Audit<br/>Passed
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default GrowthBlock;
