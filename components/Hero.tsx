
import React, { useState, useEffect } from 'react';
import { CheckCircle, Clock, FileText, Shield, ArrowRight, Star, Zap } from 'lucide-react';
import { formatPhone } from '../constants';

export const Hero = ({ onFormSubmit }: { onFormSubmit: (data: any) => void }) => {
  const [form, setForm] = useState({ name: '', phone: '', type: 'Ванная', method: 'call' });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFormSubmit(form);
  };

  return (
    <div className="relative bg-slate-900 text-white min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Bathroom" 
          className="w-full h-full object-cover" 
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/20 lg:w-[65%]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90 lg:hidden"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-12 lg:pt-0">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className={`flex-1 space-y-6 max-w-3xl transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-sm text-xs font-bold tracking-wider uppercase text-yellow-400">
                <Star className="w-3 h-3 fill-yellow-400" />
                Гарантия 10 лет по договору
            </div>
            
            {/* SEO H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold leading-tight text-white drop-shadow-lg">
              Ремонт ванной комнаты
            </h1>
            
            {/* Strong USP Subheadline */}
            <div className="text-2xl md:text-3xl font-heading font-bold leading-tight">
               <span className="text-blue-400">Без авансов и скрытых доплат.</span> <br/>
               <span className="text-white">Платите только за результат.</span>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl border-l-2 border-blue-500 pl-6 font-sans">
              Работаем честно: сначала делаем этап работ — вы проверяете — потом платите. В штате только граждане РФ и РБ с подтвержденным опытом от 7 лет. Фиксируем цену в договоре на 100%.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                { icon: FileText, text: "0₽ предоплата", sub: "Платите только за результат" },
                { icon: Shield, text: "Гарантия 10 лет", sub: "Юридическая ответственность" },
                { icon: Clock, text: "Смета не растет", sub: "Фиксируем стоимость в договоре" },
                { icon: CheckCircle, text: "Мастера РФ/РБ", sub: "Стаж строго 7+ лет" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm">
                  <div className="bg-blue-600/20 p-2.5 rounded-lg text-blue-400">
                     <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-base text-white">{item.text}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lead Form - High End Style */}
          <div className={`w-full max-w-md relative transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
             
             {/* Badge */}
             <div className="absolute -top-4 -right-2 z-20 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1 animate-bounce">
                <Zap className="w-3 h-3 fill-white" />
                Ответим за 5 минут
             </div>

             <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                
                <h3 className="text-2xl font-heading font-bold mb-2 text-slate-900">Рассчитать стоимость</h3>
                <p className="text-sm text-gray-500 mb-6">Получите 3 варианта сметы (Эконом, Стандарт, Премиум) и скидку 10% на материалы.</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Имя</label>
                    <input 
                        type="text" 
                        required
                        placeholder="Алексей" 
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900 placeholder-gray-400 font-sans"
                        value={form.name}
                        onChange={e => setForm({...form, name: e.target.value})}
                    />
                </div>
                
                <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Телефон</label>
                    <input 
                        type="tel" 
                        required
                        placeholder="+7 (999) 000-00-00" 
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900 placeholder-gray-400 font-sans"
                        value={form.phone}
                        onChange={e => setForm({...form, phone: formatPhone(e.target.value)})}
                    />
                </div>

                <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Куда прислать расчет?</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {['call', 'whatsapp', 'telegram', 'max'].map((m) => (
                             <button 
                                key={m}
                                type="button"
                                onClick={() => setForm({...form, method: m})}
                                className={`py-2 rounded-lg text-xs font-bold transition-all border ${
                                    form.method === m 
                                    ? 'bg-blue-600 text-white border-blue-600' 
                                    : 'bg-gray-50 text-gray-500 border-gray-200 hover:border-blue-300 hover:text-blue-600'
                                }`}
                             >
                                 {m === 'call' && 'Звонок'}
                                 {m === 'whatsapp' && 'WhatsApp'}
                                 {m === 'telegram' && 'Telegram'}
                                 {m === 'max' && 'MAX'}
                             </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Тип ремонта</label>
                    <div className="relative">
                        <select 
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none transition-all cursor-pointer text-slate-900 font-sans"
                        value={form.type}
                        onChange={e => setForm({...form, type: e.target.value})}
                        >
                        <option className="text-slate-900">Ванная комната</option>
                        <option className="text-slate-900">Ванная + туалет</option>
                        <option className="text-slate-900">Совмещённый санузел</option>
                        <option className="text-slate-900">Туалет</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                        </div>
                    </div>
                </div>
                
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 group mt-2">
                    Рассчитать стоимость
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <div className="text-center">
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest">
                        бесплатно и ни к чему не обязывает
                    </span>
                </div>
                </form>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};
