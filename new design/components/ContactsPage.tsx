
import React from 'react';
import { Send, Phone, Mail } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';

const ContactsPage: React.FC = () => {
  return (
    <section className="pt-24 pb-16 px-4 bg-gray-50 min-h-screen flex flex-col">
      <div className="container mx-auto max-w-6xl flex-grow">
        <Breadcrumbs 
            items={[{ label: 'Контакты', href: '/contacts' }]} 
            theme="dark" 
        />
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center md:text-left">Наши контакты</h1>

        {/* Top Row: Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Phone Card */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_0_40px_rgba(236,72,153,0.05)] hover:shadow-[0_0_50px_rgba(236,72,153,0.15)] transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="text-sm text-gray-400 mb-2 font-medium uppercase tracking-wider">Номер телефона:</div>
            <a href="tel:+74993017140" className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              +7 (499) 301 71-40
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_0_40px_rgba(99,102,241,0.05)] hover:shadow-[0_0_50px_rgba(99,102,241,0.15)] transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="text-sm text-gray-400 mb-2 font-medium uppercase tracking-wider">Электронная почта:</div>
            <a href="mailto:hello@mpagency.ru" className="text-2xl md:text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              hello@mpagency.ru
            </a>
          </div>

          {/* Socials Card */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_0_40px_rgba(59,130,246,0.05)] hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] transition-shadow duration-300 flex flex-col items-center text-center">
             <div className="text-sm text-gray-400 mb-4 font-medium uppercase tracking-wider">Социальные сети:</div>
             <div className="flex gap-4">
                <a href="https://t.me/mpagencyru" target="_blank" rel="noreferrer" className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
                   <Send size={20} />
                </a>
                <a href="https://vk.com/mp_agency" target="_blank" rel="noreferrer" className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-blue-700/30">
                   <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zM17.6 12.5c.4.4.8.8 1.2 1.2.3.3.5.6.2 1-.2.3-.5.3-.8.3h-2.3c-.6 0-1-.2-1.4-.6-.2-.2-.4-.4-.6-.6-.1-.1-.2-.2-.3-.2-.1 0-.2.1-.2.3v.6c0 .6-.2.8-.8.8-1.8 0-3.7-1.1-5.5-3.7 0 0-.1-.2-.1-.2-.1-.1-.1 0-.1.1-.2.2-.2h2.3c.3 0 .5.1.6.4.2.5 1 1 1.5.1.1.2.2.3.2.1 0 .2-.1.2-.3V10.6c0-1-.3-1.1-1.1-1.1-.2 0-.2-.1-.2-.2 0-.2.4-.4 1.2-.4.4 0 .6.1.7.3.1.2.1.5.1.9v1.3c0 .2 0 .3.1.4.1.1.2.1.3 0 .5-.6.9-1.2 1.3-1.9.1-.2.3-.3.5-.3h2.3c.3 0 .5.1.6.3 0 .3-.3.7-.5 1-.3.4-.6.8-1 1.2-.1.1-.1.2-.1.3 0 .1.1.2.2.3z"/></svg>
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-red-600/30">
                   <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
             </div>
          </div>
        </div>

        {/* Middle Row: Legal Info */}
        <div className="mb-12">
           <h2 className="text-2xl font-bold text-gray-900 mb-6 pl-2 border-l-4 border-primary">ИП Смирнов Иван Николаевич</h2>
           <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                 <div className="flex flex-col">
                    <span className="text-gray-400 text-sm font-medium">ИНН:</span>
                    <span className="text-xl text-gray-800 font-mono font-medium">761901019165</span>
                 </div>
                 <div className="flex flex-col">
                    <span className="text-gray-400 text-sm font-medium">ОГРН:</span>
                    <span className="text-xl text-gray-800 font-mono font-medium">318762700075496</span>
                 </div>
              </div>
              
              <div className="space-y-6 relative">
                 <div className="hidden md:block absolute left-[-20px] top-0 bottom-0 w-px bg-gray-100"></div>
                 <div className="flex flex-col">
                    <span className="text-gray-400 text-sm font-medium">Юридический адрес:</span>
                    <span className="text-lg text-gray-800">152830 Мышкин, ул Энергетиков д. 48, кв 24</span>
                 </div>
                 <div className="flex flex-col">
                    <span className="text-gray-400 text-sm font-medium">Фактический адрес:</span>
                    <span className="text-lg text-gray-800">115280 Москва, Автозаводская улица, 23Бк2</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Bottom Row: Map */}
        <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-lg h-[400px] bg-gray-200 relative">
           <iframe 
             src="https://yandex.ru/map-widget/v1/?ll=37.662856%2C55.705355&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjcyMTIyNBJKUm9zc2l5YSwgTW9za3ZhLCBBdnRvemF2b2Rza2F5YSB1bGl0c2EsIDIz0JEi0LsyICjRgdGC0LDQvdC30LjRjyDQnNCm0JouINCQl9CY0JspIgoNlQIXQhVjBF9C&z=16" 
             width="100%" 
             height="100%" 
             allowFullScreen={true} 
             style={{ border: 0 }}
             title="Office Map"
           ></iframe>
           <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg hidden md:block">
               <div className="text-xs text-gray-500 uppercase font-bold mb-1">Наш офис</div>
               <div className="font-bold text-gray-900">Москва, Автозаводская ул, 23Бк2</div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default ContactsPage;
