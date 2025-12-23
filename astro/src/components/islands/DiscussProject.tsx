
import React, { useState } from 'react';
import { ArrowRight, MessageCircle, Send, Phone, MessageSquare, Users, Clock, HelpCircle } from 'lucide-react';
import { BUDGET_OPTIONS } from '../landing/constants';

const DiscussProject: React.FC = () => {
  const [messenger, setMessenger] = useState<'whatsapp' | 'telegram' | 'phone' | 'max'>('whatsapp');
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
      console.log('Discuss Project Form:', { ...formData, messenger });
      alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
      setFormData({ name: '', phone: '', url: '', budget: '' });
  };

  // Scarcity Data
  const currentMonth = new Date().toLocaleString('ru', { month: 'long' });
  const loadPercentage = 87;
  const spotsLeft = 2;

  return (
    <section className="py-32 bg-[#09090b] text-white relative">
        <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
            <div className="grid lg:grid-cols-2 gap-20">
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-serif font-medium mb-8 leading-tight">
                            Готовы обсудить <br/>
                            <span className="italic text-[#D4AF37]">ваш проект?</span>
                        </h2>
                        <p className="text-gray-400 text-lg font-light max-w-md leading-relaxed mb-12">
                            Оставьте заявку, и мы проведем бесплатный аудит вашей ниши, составим смету и предложим стратегию роста.
                        </p>
                        
                        <div className="space-y-8 mb-12">
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 border border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] shrink-0">01</div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Анализ ниши</h4>
                                    <p className="text-gray-500 text-sm">Изучим конкурентов и спрос</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center text-gray-500 shrink-0">02</div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Стратегия</h4>
                                    <p className="text-gray-500 text-sm">Подберем инструменты под бюджет</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scarcity Widget */}
                    <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37]"></div>
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2 text-sm font-bold text-gray-300">
                                <Users size={16} /> Загрузка агентства
                            </div>
                            <div className="text-[#D4AF37] font-bold">{loadPercentage}%</div>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
                            <div className="bg-[#D4AF37] h-2 rounded-full" style={{ width: `${loadPercentage}%` }}></div>
                        </div>
                        <div className="flex items-start gap-3 text-sm text-gray-400">
                            <Clock size={16} className="text-gray-500 mt-0.5" />
                            <p>
                                Возьмем в работу еще <span className="text-white font-bold">{spotsLeft} проекта</span> в {currentMonth}е. Далее — запись в лист ожидания.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#121214] p-10 md:p-14 rounded-[2rem] border border-gray-800">
                    <form className="space-y-8" onSubmit={handleSubmit}>
                        {/* Messenger Selector */}
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Где вам ответить?</label>
                            <div className="flex gap-2 flex-wrap">
                                <button
                                    type="button"
                                    onClick={() => setMessenger('whatsapp')}
                                    className={`px-4 py-2 rounded-lg border text-sm font-bold flex items-center gap-2 transition-all ${messenger === 'whatsapp' ? 'bg-[#25D366]/20 border-[#25D366] text-[#25D366]' : 'border-gray-700 text-gray-500 hover:border-gray-500'}`}
                                >
                                    <MessageCircle size={16} /> WhatsApp
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setMessenger('telegram')}
                                    className={`px-4 py-2 rounded-lg border text-sm font-bold flex items-center gap-2 transition-all ${messenger === 'telegram' ? 'bg-[#2AABEE]/20 border-[#2AABEE] text-[#2AABEE]' : 'border-gray-700 text-gray-500 hover:border-gray-500'}`}
                                >
                                    <Send size={16} /> Telegram
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setMessenger('phone')}
                                    className={`px-4 py-2 rounded-lg border text-sm font-bold flex items-center gap-2 transition-all ${messenger === 'phone' ? 'bg-white/10 border-white text-white' : 'border-gray-700 text-gray-500 hover:border-gray-500'}`}
                                >
                                    <Phone size={16} /> Звонок
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setMessenger('max')}
                                    className={`px-4 py-2 rounded-lg border text-sm font-bold flex items-center gap-2 transition-all ${messenger === 'max' ? 'bg-pink-500/20 border-pink-500 text-pink-500' : 'border-gray-700 text-gray-500 hover:border-gray-500'}`}
                                >
                                    <MessageSquare size={16} /> MAX
                                </button>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="group">
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Имя</label>
                                <input 
                                    type="text" 
                                    className="w-full bg-transparent border-b border-gray-700 py-3 text-white outline-none focus:border-[#D4AF37] transition-colors text-lg" 
                                    placeholder="Как к вам обращаться?" 
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    required
                                />
                            </div>
                            <div className="group">
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Телефон</label>
                                <input 
                                    type="tel" 
                                    className="w-full bg-transparent border-b border-gray-700 py-3 text-white outline-none focus:border-[#D4AF37] transition-colors text-lg" 
                                    placeholder="+7 (___) ___-__-__" 
                                    value={formData.phone}
                                    onChange={handlePhoneInput}
                                    required
                                    maxLength={18}
                                />
                            </div>
                            <div className="group">
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Сайт (необязательно)</label>
                                <input 
                                    type="url" 
                                    className="w-full bg-transparent border-b border-gray-700 py-3 text-white outline-none focus:border-[#D4AF37] transition-colors text-lg" 
                                    placeholder="https://" 
                                    value={formData.url}
                                    onChange={(e) => setFormData({...formData, url: e.target.value})}
                                />
                            </div>
                            <div className="group">
                                <label className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                                    Текущий бюджет на маркетинг
                                    <div className="group/tooltip relative">
                                        <HelpCircle size={14} className="text-gray-600 hover:text-[#D4AF37] cursor-help transition-colors" />
                                                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-gray-800 text-white text-xs p-3 rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-50 font-medium normal-case shadow-xl border border-gray-700">
                                                                            Укажите текущие среднемесячные инвестиции во весь маркетинг, а не только бюджет на продвижение сайта.
                                                                            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-800"></div>
                                                                        </div>                                    </div>
                                </label>
                                <select 
                                    className="w-full bg-transparent border-b border-gray-700 py-3 text-white outline-none focus:border-[#D4AF37] transition-colors text-lg appearance-none cursor-pointer" 
                                    value={formData.budget}
                                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                                >
                                    <option value="" disabled className="bg-[#121214]">Выберите сумму</option>
                                    {BUDGET_OPTIONS.map((opt) => (
                                        <option key={opt.value} value={opt.value} className="bg-[#121214] text-white">
                                            {opt.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        
                        <button type="submit" className="w-full bg-[#D4AF37] hover:bg-[#b5952f] text-black py-5 rounded-xl font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-4 mt-8 group">
                            Отправить заявку
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        
                        <p className="text-xs text-gray-600 text-center">
                            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
};

export default DiscussProject;
