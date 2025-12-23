
import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle, Send, Phone, MessageSquare, TrendingUp, Calculator, MousePointer2, HelpCircle } from 'lucide-react';
import { BUDGET_OPTIONS } from '../constants';

const NICHES = [
    { id: 'services', label: 'Услуги', conversion: 0.03, growth: 2.5 },
    { id: 'ecommerce', label: 'Интернет-магазин', conversion: 0.015, growth: 3.0 },
    { id: 'b2b', label: 'B2B / Опт', conversion: 0.01, growth: 1.8 },
    { id: 'realestate', label: 'Недвижимость', conversion: 0.008, growth: 2.2 },
];

const SeoCalculator: React.FC = () => {
  const [step, setStep] = useState<'calc' | 'form'>('calc');
  const [messenger, setMessenger] = useState<'whatsapp' | 'telegram' | 'phone' | 'max'>('whatsapp');
  
  // Calc State
  const [traffic, setTraffic] = useState(1000);
  const [selectedNiche, setSelectedNiche] = useState(NICHES[0]);
  
  // Derived
  const projectedTraffic = Math.floor(traffic * selectedNiche.growth);
  const currentLeads = Math.floor(traffic * selectedNiche.conversion);
  const projectedLeads = Math.floor(projectedTraffic * selectedNiche.conversion);
  const growthLeads = projectedLeads - currentLeads;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    url: '',
    budget: ''
  });

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;
    if (!input) { setFormData(prev => ({ ...prev, phone: '' })); return; }
    let numbers = input.replace(/\D/g, '');
    if (['7', '8', '9'].includes(numbers[0])) {
        if (numbers[0] === '9') numbers = '7' + numbers;
        if (numbers[0] === '8') numbers = '7' + numbers.slice(1);
    } else { numbers = '7' + numbers; }
    numbers = numbers.substring(0, 11);
    let formatted = '';
    if (numbers.length > 0) formatted += '+7';
    if (numbers.length > 1) formatted += ' (' + numbers.substring(1, 4);
    if (numbers.length >= 5) formatted += ') ' + numbers.substring(4, 7);
    if (numbers.length >= 8) formatted += '-' + numbers.substring(7, 9);
    if (numbers.length >= 10) formatted += '-' + numbers.substring(9, 11);
    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Seo Calculator Lead:', { ...formData, messenger, traffic, niche: selectedNiche.label });
      alert('Расчет отправлен! Ожидайте сообщения.');
      setFormData({ name: '', phone: '', url: '', budget: '' });
      setStep('calc');
  };

  return (
    <section className="py-32 bg-[#F5F5F7]" id="calculator">
        <div className="container mx-auto max-w-[1400px] px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                
                {/* Left Content */}
                <div>
                    <h2 className="text-4xl md:text-6xl font-serif font-medium text-[#09090b] mb-8 leading-tight">
                        Рассчитайте <br/>
                        <span className="italic text-[#D4AF37]">потенциал роста</span>
                    </h2>
                    <p className="text-xl text-gray-500 font-light mb-12 leading-relaxed max-w-lg">
                        Двигайте ползунки, чтобы увидеть, сколько клиентов вы недополучаете прямо сейчас из-за слабого SEO.
                    </p>
                    
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#D4AF37] shadow-sm">
                                <Calculator size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#09090b] text-lg">Математическая модель</h4>
                                <p className="text-sm text-gray-500">Прогноз строится на базе 500+ наших кейсов в разных нишах.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#D4AF37] shadow-sm">
                                <TrendingUp size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#09090b] text-lg">Точки роста</h4>
                                <p className="text-sm text-gray-500">Покажем, за счет чего можно увеличить трафик в {selectedNiche.growth} раза.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Interactive Calculator */}
                <div className="bg-white p-8 md:p-12 shadow-2xl rounded-[2rem] relative overflow-hidden border border-gray-100">
                    
                    {step === 'calc' ? (
                        <div className="animate-fade-in space-y-10">
                            {/* Niche Select */}
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Выберите нишу</label>
                                <div className="flex flex-wrap gap-2">
                                    {NICHES.map(niche => (
                                        <button
                                            key={niche.id}
                                            onClick={() => setSelectedNiche(niche)}
                                            className={`px-4 py-2 rounded-full text-sm font-bold transition-all border ${
                                                selectedNiche.id === niche.id 
                                                ? 'bg-[#09090b] text-white border-[#09090b]' 
                                                : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'
                                            }`}
                                        >
                                            {niche.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Traffic Slider */}
                            <div>
                                <div className="flex justify-between items-end mb-4">
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">Текущий трафик (мес)</label>
                                    <div className="text-2xl font-bold text-[#09090b]">{traffic.toLocaleString()} <span className="text-sm text-gray-400 font-normal">чел</span></div>
                                </div>
                                <input 
                                    type="range" 
                                    min="100" max="50000" step="100" 
                                    value={traffic}
                                    onChange={(e) => setTraffic(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                                />
                            </div>

                            {/* Results Display */}
                            <div className="bg-[#F9F9FB] rounded-2xl p-6 border border-gray-100 grid grid-cols-2 gap-6">
                                <div>
                                    <div className="text-xs text-gray-400 font-bold uppercase mb-1">Прогноз трафика</div>
                                    <div className="text-2xl md:text-3xl font-serif font-bold text-[#09090b] flex items-center gap-2">
                                        {projectedTraffic.toLocaleString()}
                                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-sans font-bold">x{selectedNiche.growth}</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 font-bold uppercase mb-1">Рост заявок</div>
                                    <div className="text-2xl md:text-3xl font-serif font-bold text-[#D4AF37]">
                                        +{growthLeads} <span className="text-sm text-gray-400 font-sans font-normal">/ мес</span>
                                    </div>
                                </div>
                            </div>

                            <button 
                                onClick={() => setStep('form')}
                                className="w-full bg-[#D4AF37] hover:bg-[#b5952f] text-white py-5 rounded-xl font-bold uppercase tracking-widest transition-all shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center gap-2 group"
                            >
                                Получить план роста
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    ) : (
                        <form className="animate-fade-in space-y-6" onSubmit={handleSubmit}>
                            <button 
                                type="button" 
                                onClick={() => setStep('calc')}
                                className="text-xs font-bold text-gray-400 hover:text-[#09090b] flex items-center gap-1 mb-2"
                            >
                                ← Назад к расчету
                            </button>
                            
                            <h3 className="text-2xl font-serif font-bold text-[#09090b]">Куда отправить стратегию?</h3>
                            
                            {/* Messenger Selector */}
                            <div className="flex gap-2 flex-wrap">
                                {(['whatsapp', 'telegram', 'phone', 'max'] as const).map(m => (
                                    <button
                                        key={m}
                                        type="button"
                                        onClick={() => setMessenger(m)}
                                        className={`px-3 py-2 rounded-lg border text-xs font-bold flex items-center gap-2 transition-all capitalize ${messenger === m ? 'bg-[#09090b] text-white border-[#09090b]' : 'border-gray-200 text-gray-500'}`}
                                    >
                                        {m}
                                    </button>
                                ))}
                            </div>

                            <div className="space-y-4">
                                <input 
                                    type="text" 
                                    className="w-full bg-[#F5F5F7] border border-transparent focus:bg-white focus:border-[#D4AF37] rounded-xl px-4 py-4 outline-none transition-all" 
                                    placeholder="Ваше имя"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    required
                                />
                                <input 
                                    type="tel" 
                                    className="w-full bg-[#F5F5F7] border border-transparent focus:bg-white focus:border-[#D4AF37] rounded-xl px-4 py-4 outline-none transition-all" 
                                    placeholder="+7 (999)..."
                                    value={formData.phone}
                                    onChange={handlePhoneInput}
                                    required
                                />
                                <input 
                                    type="url" 
                                    className="w-full bg-[#F5F5F7] border border-transparent focus:bg-white focus:border-[#D4AF37] rounded-xl px-4 py-4 outline-none transition-all" 
                                    placeholder="Сайт компании"
                                    value={formData.url}
                                    onChange={(e) => setFormData({...formData, url: e.target.value})}
                                />
                                
                                {/* Budget Select with Tooltip */}
                                <div className="relative">
                                    <label className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                                        Текущий бюджет на маркетинг
                                        <div className="group relative">
                                            <HelpCircle size={14} className="text-gray-400 hover:text-[#D4AF37] cursor-help transition-colors" />
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-gray-900 text-white text-xs p-3 rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-50 font-medium normal-case shadow-xl border border-gray-700">
                                                Укажите текущие среднемесячные инвестиции во весь маркетинг, а не только бюджет на продвижение сайта.
                                                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
                                            </div>
                                        </div>
                                    </label>
                                    <select 
                                        className="w-full bg-[#F5F5F7] border border-transparent focus:bg-white focus:border-[#D4AF37] rounded-xl px-4 py-4 outline-none transition-all appearance-none cursor-pointer" 
                                        value={formData.budget}
                                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                                    >
                                        <option value="" disabled>Выберите сумму</option>
                                        {BUDGET_OPTIONS.map((opt) => (
                                            <option key={opt.value} value={opt.value}>
                                                {opt.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-[#09090b] hover:bg-[#333] text-white py-5 rounded-xl font-bold uppercase tracking-widest transition-all">
                                Отправить
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    </section>
  );
};

export default SeoCalculator;
