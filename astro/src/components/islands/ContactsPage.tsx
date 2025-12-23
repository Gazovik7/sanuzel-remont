
import React from 'react';
import { Send, MapPin, Mail, Phone, MessageCircle } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';

const ContactsPage: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 bg-[#09090b] text-white overflow-hidden min-h-screen flex flex-col">
      {/* Background Elements from Hero */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#D4AF37]/5 rounded-full blur-[120px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 md:px-12 relative z-10 flex-grow">
        <Breadcrumbs 
            items={[{ label: 'Контакты', href: '/contacts' }]} 
            theme="light" 
        />
        
        <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 backdrop-blur-sm text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-6">
                Свяжитесь с нами
            </div>
            <h1 className="text-5xl md:text-7xl font-sans font-bold leading-[1.1] tracking-tight text-white mb-6">
                Наши <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">контакты</span>
            </h1>
            <p className="text-xl md:text-2xl font-serif italic text-[#D4AF37] opacity-90">
                Готовы обсудить ваш проект и предложить стратегию роста
            </p>
        </div>

        {/* Top Row: Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Phone Card */}
          <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform">
                <Phone size={24} />
            </div>
            <div className="text-[10px] text-gray-500 mb-2 font-bold uppercase tracking-widest">Номер телефона</div>
            <a href="tel:+74993489777" className="text-xl md:text-2xl font-bold text-white hover:text-[#D4AF37] transition-colors whitespace-nowrap">
              +7 (499) 348-97-77
            </a>
          </div>

          {/* Email Card */}
          <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform">
                <Mail size={24} />
            </div>
            <div className="text-[10px] text-gray-500 mb-2 font-bold uppercase tracking-widest">Электронная почта</div>
            <a href="mailto:account@smirnov.marketing" className="text-lg md:text-xl font-bold text-white hover:text-[#D4AF37] transition-colors break-all">
              account@smirnov.marketing
            </a>
          </div>

          {/* Socials Card */}
          <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 flex flex-col items-center text-center">
             <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform">
                <Send size={24} />
             </div>
             <div className="text-[10px] text-gray-500 mb-4 font-bold uppercase tracking-widest">Мессенджеры</div>
             <div className="flex gap-4">
                <a href="https://t.me/mpagencyru" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black transition-all">
                   <Send size={18} />
                </a>
                <a href="https://wa.me/74993489777" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black transition-all">
                   <MessageCircle size={18} />
                </a>
                <a href="https://vk.com/mp_agency" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black transition-all">
                   <span className="font-bold text-[10px]">VK</span>
                </a>
             </div>
          </div>
        </div>

        {/* Middle Row: Legal & Office */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 mb-16">
           <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                  <div className="w-1 h-6 bg-[#D4AF37] rounded-full"></div>
                  Реквизиты
              </h2>
              <div className="space-y-6">
                 <div className="flex flex-col">
                    <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">Организация</span>
                    <span className="text-lg text-white font-medium">ИП Смирнов Иван Николаевич</span>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">ИНН</span>
                        <span className="text-sm text-gray-300 font-mono">761901019165</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">ОГРН</span>
                        <span className="text-sm text-gray-300 font-mono">318762700075496</span>
                    </div>
                 </div>
                 <div className="pt-6 border-t border-white/5">
                    <div className="flex items-start gap-3">
                        <MapPin size={18} className="text-[#D4AF37] shrink-0 mt-1" />
                        <div className="flex flex-col">
                            <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">Адрес офиса</span>
                            <span className="text-sm text-gray-300 leading-relaxed">Москва, ул. Автозаводская улица, 23к2, БЦ "Парк Легенд"</span>
                        </div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Map */}
           <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-full min-h-[400px] relative group">
              <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=37.662856%2C55.705355&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjcyMTIyNBJKUm9zc2l5YSwgTW9za3ZhLCBBdnRvemF2b2Rza2F5YSB1bGl0c2EsIDIz0JEi0LsyICjRgdGC0LDQvdC30LjRjyDQnNCm0JouINCQl9CY0JspIgoNlQIXQhVjBF9C&z=16" 
                width="100%" 
                height="100%" 
                allowFullScreen={true} 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                title="Office Map"
              ></iframe>
              <div className="absolute top-6 right-6 bg-[#09090b]/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl hidden md:block">
                  <div className="text-[10px] text-[#D4AF37] uppercase font-bold mb-1 tracking-widest">Наш офис</div>
                  <div className="font-bold text-white text-sm">БЦ "Парк Легенд"</div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default ContactsPage;
