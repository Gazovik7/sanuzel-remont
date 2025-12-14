
import React, { useState, useMemo } from 'react';
import { Filter, Clock, Banknote, Hammer, ArrowRight, CheckCircle2, Star, Briefcase } from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { PORTFOLIO, BUDGET_PORTFOLIO } from '../constants';

interface PortfolioPageProps {
  onNavigate: (mode: any) => void;
  onCalculate: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate, onCalculate }) => {
  const [filter, setFilter] = useState<'all' | 'premium' | 'budget'>('all');

  // Объединяем данные для отображения
  const allProjects = useMemo(() => {
    const premium = PORTFOLIO.map(p => ({ ...p, category: 'premium', label: 'Капитальный' }));
    const budget = BUDGET_PORTFOLIO.map(p => ({ ...p, category: 'budget', label: 'Эконом' }));
    return [...premium, ...budget];
  }, []);

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return allProjects;
    return allProjects.filter(p => p.category === filter);
  }, [filter, allProjects]);

  return (
    <div className="min-h-screen bg-slate-50 animate-in fade-in duration-500 pb-12">
      <div className="container mx-auto px-4 pt-6">
        <Breadcrumbs 
            items={[{ label: 'Портфолио', isActive: true }]} 
            onNavigate={onNavigate} 
        />
        
        <div className="mb-12 text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6">Наши выполненные работы</h1>
            <p className="text-gray-600 text-lg">
                Более 500 отремонтированных ванных комнат. Мы не используем 3D-рендеры в портфолио — только реальные фотографии завершенных объектов.
            </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
                onClick={() => setFilter('all')}
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all border flex items-center gap-2 ${
                    filter === 'all' 
                    ? 'bg-slate-900 text-white border-slate-900 shadow-lg' 
                    : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'
                }`}
            >
                <Filter className="w-4 h-4" />
                Все работы
            </button>
            <button 
                onClick={() => setFilter('premium')}
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all border flex items-center gap-2 ${
                    filter === 'premium' 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20' 
                    : 'bg-white text-gray-500 border-gray-200 hover:border-blue-200 hover:text-blue-600'
                }`}
            >
                <Star className="w-4 h-4" />
                Капитальный ремонт
            </button>
            <button 
                onClick={() => setFilter('budget')}
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all border flex items-center gap-2 ${
                    filter === 'budget' 
                    ? 'bg-green-600 text-white border-green-600 shadow-lg shadow-green-600/20' 
                    : 'bg-white text-gray-500 border-gray-200 hover:border-green-200 hover:text-green-600'
                }`}
            >
                <Briefcase className="w-4 h-4" />
                Бюджетный ремонт
            </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {filteredProjects.map((project, idx) => (
                <div key={idx} className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
                    {/* Header Image / Slider */}
                    <div className="relative h-[300px] sm:h-[400px]">
                        <BeforeAfterSlider 
                            beforeImage={project.before}
                            afterImage={project.after}
                            alt={project.title}
                        />
                        <div className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider text-white shadow-md ${project.category === 'premium' ? 'bg-blue-600' : 'bg-green-600'}`}>
                            {project.label}
                        </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-8 flex-1 flex flex-col">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold font-heading text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                {project.desc}
                            </p>
                        </div>

                        {/* Works List */}
                        <div className="mb-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
                             <div className="flex items-center gap-2 mb-3">
                                <Hammer className="w-4 h-4 text-blue-500" />
                                <span className="text-xs font-bold uppercase text-gray-400 tracking-wider">Выполненные работы</span>
                             </div>
                             <p className="text-sm text-gray-700 leading-snug">
                                {project.workList}
                             </p>
                        </div>

                        {/* Metrics Footer */}
                        <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-[10px] text-gray-400 uppercase font-bold">Срок</div>
                                    <div className="font-bold text-slate-900">{project.time}</div>
                                </div>
                            </div>
                            <div className="w-px h-10 bg-gray-100"></div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                                    <Banknote className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-[10px] text-gray-400 uppercase font-bold">Бюджет</div>
                                    <div className="font-bold text-slate-900">{project.price}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
                    Хотите такой же результат?
                </h2>
                <p className="text-blue-100 text-lg mb-8">
                    Рассчитаем точную смету вашего ремонта за 15 минут. Это бесплатно и ни к чему вас не обязывает.
                </p>
                <button 
                    onClick={onCalculate}
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/30 transform hover:-translate-y-1"
                >
                    Рассчитать стоимость <ArrowRight className="w-5 h-5 ml-2" />
                </button>
            </div>
        </div>

      </div>
    </div>
  );
};
