
import React, { useState } from 'react';
import { Phone, MapPin, Clock, Mail, ArrowRight, Zap } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_ADDRESS, COMPANY_EMAIL, formatPhone } from '../constants';
import { Breadcrumbs } from './Breadcrumbs';

interface ContactsPageProps {
  onBack: () => void; // Kept for interface compatibility but we use onNavigate for breadcrumbs primarily
  onSubmit: (data: any) => void;
  onNavigate: (mode: any) => void;
}

export const ContactsPage: React.FC<ContactsPageProps> = ({ onSubmit, onNavigate }) => {
  const [activeMap, setActiveMap] = useState<'yandex' | 'google'>('yandex');
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="min-h-screen bg-slate-50 animate-in fade-in duration-500 pb-12">
      <div className="container mx-auto px-4 pt-6">
        <Breadcrumbs 
            items={[{ label: 'Контакты', isActive: true }]} 
            onNavigate={onNavigate} 
        />
        
        <div className="mb-12">
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-4">Наши контакты</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 max-w-6xl mx-auto lg:mx-0">
          {/* Info Side */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900">
              Всегда на связи
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Мы открыты для общения. Позвоните нам для консультации, приезжайте в офис для обсуждения проекта или напишите на почту.
            </p>

            <div className="grid grid-cols-1 gap-4">
              <a href={`tel:${COMPANY_PHONE}`} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-6 hover:shadow-md transition-shadow group">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-1">Телефон</div>
                  <div className="text-2xl font-bold text-slate-900">{COMPANY_PHONE}</div>
                </div>
              </a>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-6">
                <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center text-gray-600">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-1">Офис</div>
                  <div className="text-lg font-bold text-slate-900 leading-tight">{COMPANY_ADDRESS}</div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-2">
                        <Clock className="w-5 h-5 text-gray-400" />
                        <span className="text-sm font-bold text-gray-400 uppercase tracking-wide">Время работы</span>
                    </div>
                    <div className="font-bold text-slate-900 text-lg">09:00 — 21:00</div>
                    <div className="text-sm text-gray-500">Без выходных</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-2">
                        <Mail className="w-5 h-5 text-gray-400" />
                        <span className="text-sm font-bold text-gray-400 uppercase tracking-wide">Email</span>
                    </div>
                    <a href={`mailto:${COMPANY_EMAIL}`} className="font-bold text-slate-900 text-lg hover:text-blue-600 truncate transition-colors">{COMPANY_EMAIL}</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="relative">
             <div className="absolute -top-4 -right-4 z-20 bg-green-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-bounce">
                <Zap className="w-4 h-4 fill-white" />
                Ответим за 5 минут
             </div>
             <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-blue-100 relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <h3 className="text-2xl font-bold font-heading text-slate-900 mb-2">Напишите нам</h3>
                <p className="text-gray-500 mb-8">Есть вопросы по ремонту? Оставьте заявку, и инженер свяжется с вами.</p>

                <div className="space-y-6">
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wide ml-1">Имя</label>
                        <input 
                            type="text" 
                            required
                            placeholder="Ваше имя" 
                            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all font-medium text-slate-900"
                            value={form.name}
                            onChange={e => setForm({...form, name: e.target.value})}
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wide ml-1">Телефон</label>
                        <input 
                            type="tel" 
                            required
                            placeholder="+7 (999) 000-00-00" 
                            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all font-medium text-slate-900"
                            value={form.phone}
                            onChange={e => setForm({...form, phone: formatPhone(e.target.value)})}
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wide ml-1">Сообщение (необязательно)</label>
                        <textarea 
                            rows={3}
                            placeholder="Например: нужна консультация по перепланировке" 
                            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all font-medium text-slate-900 resize-none"
                            value={form.message}
                            onChange={e => setForm({...form, message: e.target.value})}
                        />
                    </div>
                </div>

                <button type="submit" className="w-full mt-8 bg-slate-900 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-slate-800 transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2">
                    Отправить сообщение <ArrowRight className="w-5 h-5" />
                </button>
             </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-200 max-w-6xl mx-auto lg:mx-0">
          <div className="flex border-b border-gray-100">
             <button 
                onClick={() => setActiveMap('yandex')}
                className={`flex-1 py-4 font-bold text-sm uppercase tracking-wider transition-colors ${activeMap === 'yandex' ? 'bg-yellow-400 text-slate-900' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
             >
                Яндекс Карты
             </button>
             <button 
                onClick={() => setActiveMap('google')}
                className={`flex-1 py-4 font-bold text-sm uppercase tracking-wider transition-colors ${activeMap === 'google' ? 'bg-blue-600 text-white' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
             >
                Google Maps
             </button>
          </div>
          <div className="h-[500px] w-full bg-gray-100 relative">
             {activeMap === 'yandex' ? (
               <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=37.568461%2C55.743208&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjcxNDUzORJG0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINJ00L7Qu9GM0YjQvtC5INCh0LDQstCy0LjQvdGB0LrQuNC5INC_0LXRgNC10YPQu9C-0LosIDk!3D%3D&z=17" 
                width="100%" 
                height="100%" 
                allowFullScreen={true} 
                className="border-0"
               ></iframe>
             ) : (
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.877372793766!2d37.56846067664366!3d55.74320797308064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a555909235d%3A0x62391030222718e2!2z0JHQvtC70YzRiNC-0Lkg0KHQsNCy0LLQuNC90YHQutC40Lkg0L_QtdGALiwgOSwg0YHRgtGA0L7QtdC90LjQtSAxLCDQnNC-0YHQutCy0LAsIDExOTQzNQ!5e0!3m2!1sru!2sru!4v1710000000000!5m2!1sru!2sru" 
                width="100%" 
                height="100%" 
                allowFullScreen={true} 
                loading="lazy" 
                className="border-0"
                referrerPolicy="no-referrer-when-downgrade">
                </iframe>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};
