
import React, { useState } from 'react';
import { ArrowRight, Check, ChevronLeft, Calculator as CalcIcon, Home, Ruler, Layers, Sparkles } from 'lucide-react';
import { formatPhone } from '../constants';

interface CalculatorProps {
  onComplete: (data: any) => void;
}

const steps = [
  { id: 'params', title: 'Параметры' },
  { id: 'config', title: 'Сложность' },
  { id: 'contact', title: 'Расчет' }
];

const Calculator: React.FC<CalculatorProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    type: 'Ванная комната',
    area: '',
    height: '2.5',
    condition: 'Новостройка (бетон)',
    finish: 'Стандарт (Капитальный)',
    name: '',
    phone: '',
    method: 'call'
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(formData);
  };

  const SelectCard = ({ label, selected, onClick, icon: Icon }: any) => (
    <div 
        onClick={onClick}
        className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 flex flex-col items-center justify-center gap-3 text-center h-full ${
            selected 
            ? 'border-blue-600 bg-blue-50 shadow-md' 
            : 'border-gray-100 bg-white hover:border-blue-200 hover:bg-gray-50'
        }`}
    >
        {Icon && <Icon className={`w-8 h-8 ${selected ? 'text-blue-600' : 'text-gray-400'}`} />}
        <span className={`font-medium text-sm md:text-base leading-tight ${selected ? 'text-blue-900' : 'text-gray-700'}`}>{label}</span>
        {selected && (
            <div className="absolute top-2 right-2 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
            </div>
        )}
    </div>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-300">
            <div>
                <h3 className="text-2xl font-bold font-heading text-slate-900 mb-6">1. Что ремонтируем?</h3>
                <div className="grid grid-cols-3 gap-3">
                    {['Ванная комната', 'Ванная + Туалет', 'Совмещ. санузел'].map(opt => (
                        <SelectCard 
                            key={opt} 
                            label={opt} 
                            selected={formData.type === opt} 
                            onClick={() => updateField('type', opt)} 
                            icon={Home}
                        />
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-xl font-bold font-heading text-slate-900 mb-4">Размеры помещения</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <div>
                        <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">Площадь пола (м²)</label>
                        <div className="relative">
                            <input 
                                type="number" 
                                value={formData.area} 
                                onChange={(e) => updateField('area', e.target.value)} 
                                className="w-full p-4 pl-12 border border-gray-200 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-xl font-bold text-slate-900 bg-white transition-all" 
                                placeholder="4.5" 
                                autoFocus 
                            />
                            <Ruler className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">Высота потолков</label>
                        <select 
                            value={formData.height} 
                            onChange={(e) => updateField('height', e.target.value)} 
                            className="w-full p-4 border border-gray-200 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none bg-white font-bold text-lg cursor-pointer text-slate-900"
                        >
                            <option value="2.5">2.5 м (Стандарт)</option>
                            <option value="2.7">2.7 м (Комфорт)</option>
                            <option value="3.0">3.0+ м (Высокие)</option>
                        </select>
                    </div>
                </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-300">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold font-heading text-slate-900 mb-4 flex items-center gap-2">
                        <Home className="w-5 h-5 text-blue-600" /> Состояние сейчас
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                        {[
                            'Новостройка (бетон)', 
                            'Вторичка (есть плитка)', 
                            'Жилая квартира'
                        ].map(opt => (
                            <SelectCard 
                                key={opt} 
                                label={opt} 
                                selected={formData.condition === opt} 
                                onClick={() => updateField('condition', opt)} 
                                icon={null}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-bold font-heading text-slate-900 mb-4 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-blue-600" /> Желаемый ремонт
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                        {[
                            'Эконом (Панели/Краска)', 
                            'Стандарт (Капитальный)', 
                            'Премиум (Дизайн)'
                        ].map(opt => (
                            <SelectCard 
                                key={opt} 
                                label={opt} 
                                selected={formData.finish === opt} 
                                onClick={() => updateField('finish', opt)} 
                                icon={null}
                            />
                        ))}
                    </div>
                </div>
             </div>
             
             <div className="p-4 bg-blue-50 rounded-xl flex items-start gap-3 text-sm text-blue-800">
                <Check className="w-5 h-5 shrink-0 mt-0.5" />
                <p>Мы учтём демонтаж, выравнивание стен и замену коммуникаций автоматически на основе вашего выбора.</p>
             </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-300 text-center">
            <div className="mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 ring-8 ring-green-50/50 animate-bounce">
                    <CalcIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold font-heading text-slate-900 mb-2">Расчет готов!</h3>
                <p className="text-gray-500 text-lg">Куда отправить смету с разбивкой цен?</p>
            </div>
            
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                  {id: 'WhatsApp', label: 'WhatsApp', color: 'bg-[#25D366] text-white', ring: 'ring-[#25D366]/30'}, 
                  {id: 'Telegram', label: 'Telegram', color: 'bg-[#229ED9] text-white', ring: 'ring-[#229ED9]/30'}, 
                  {id: 'Звонок', label: 'Звонок', color: 'bg-slate-800 text-white', ring: 'ring-slate-800/30'}
                ].map(m => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => updateField('method', m.id)}
                  className={`p-4 rounded-xl text-sm font-bold transition-all ${formData.method === m.id ? `${m.color} shadow-xl ring-4 ${m.ring} scale-105` : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                >
                  {m.label}
                </button>
              ))}
            </div>

            <div className="space-y-4 max-w-md mx-auto">
                <input 
                type="text" 
                placeholder="Ваше имя" 
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none bg-gray-50 focus:bg-white transition-all font-medium text-lg"
                required 
                />
                <input 
                type="tel" 
                placeholder="+7 (999) 000-00-00" 
                value={formData.phone}
                onChange={(e) => updateField('phone', formatPhone(e.target.value))}
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none bg-gray-50 focus:bg-white transition-all font-medium text-lg"
                required 
                />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div id="calculator" className="bg-white rounded-[2rem] shadow-2xl overflow-hidden max-w-3xl mx-auto border border-gray-100 relative ring-1 ring-gray-100">
      {/* Top Bar */}
      <div className="bg-white p-6 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-heading font-bold text-xl text-slate-900">Калькулятор стоимости</span>
        </div>
        <div className="text-xs font-bold bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full">
          Шаг {currentStep + 1} из {steps.length}
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-gray-50 h-1.5">
        <div 
          className="bg-blue-600 h-1.5 transition-all duration-500 ease-out relative"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        ></div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 md:p-10">
        <div className="min-h-[320px]">
          {renderStep()}
        </div>

        <div className="flex justify-between mt-8 pt-8 border-t border-gray-50">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentStep === 0}
            className={`flex items-center px-6 py-3 rounded-xl text-gray-400 hover:bg-gray-50 hover:text-gray-900 font-bold transition-colors ${currentStep === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          >
            <ChevronLeft className="w-5 h-5 mr-1" /> Назад
          </button>

          {currentStep === steps.length - 1 ? (
             <button
             type="submit"
             className="flex items-center px-10 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-1 hover:scale-105 active:scale-95 text-lg"
           >
             Получить смету <Check className="w-5 h-5 ml-2" />
           </button>
          ) : (
            <button
              type="button"
              onClick={handleNext}
              className="flex items-center px-10 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold shadow-lg shadow-slate-900/20 transition-all transform hover:-translate-y-1 hover:scale-105 active:scale-95"
            >
              Далее <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Calculator;
