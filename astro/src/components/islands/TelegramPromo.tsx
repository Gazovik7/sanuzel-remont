import React from 'react';
import { Send, Bell, BarChart, Lightbulb } from 'lucide-react';

const TelegramPromo: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-[2.5rem] p-12 md:p-16 text-white text-center relative overflow-hidden shadow-2xl">
          {/* Decor */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-bold border border-white/20">
              <Send size={18} />
              TELEGRAM-КАНАЛ
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Бесплатные кейсы и стратегии каждую неделю
            </h2>
            
            <p className="text-xl max-w-2xl mx-auto opacity-90 font-medium">
              Подпишитесь на наш Telegram-канал и получайте эксклюзивные инсайты по продвижению на маркетплейсах.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-left max-w-4xl mx-auto py-4">
              {[
                { icon: BarChart, title: 'Реальные кейсы', sub: 'С цифрами и стратегиями' },
                { icon: Lightbulb, title: 'Лайфхаки', sub: 'Проверенные методы' },
                { icon: Bell, title: 'Новости', sub: 'Изменения платформ' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/10 flex-1 min-w-[250px]">
                  <item.icon size={28} className="mt-1" />
                  <div>
                    <div className="font-bold mb-1">{item.title}</div>
                    <div className="text-sm opacity-80">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <a href="https://t.me/mpagencyru" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-white text-blue-600 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-gray-50 transition-all shadow-xl hover:scale-105">
              <Send size={24} />
              Подписаться на канал
            </a>
            
            <div className="text-sm opacity-80 font-medium">
              Уже с нами 5,200+ подписчиков
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelegramPromo;
