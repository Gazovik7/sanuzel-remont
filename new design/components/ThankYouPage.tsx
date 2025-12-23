
import React, { useState, useEffect } from 'react';
import { CheckCircle2, Phone, Search, MonitorPlay, FileCheck, HelpCircle, ChevronDown, Clock, BarChart3, Briefcase, ShoppingBag, Send, MessageCircle } from 'lucide-react';
import { CLIENTS } from '../constants';

interface ThankYouPageProps {
  onBack: () => void;
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ onBack }) => {
  const [applicationId, setApplicationId] = useState('00000');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    // Generate a random 5-digit ID for the "Application ID" effect
    setApplicationId(Math.floor(10000 + Math.random() * 90000).toString());
    window.scrollTo(0, 0);
  }, []);

  const STEPS = [
    {
      icon: Phone,
      title: 'Короткий звонок 10–15 минут',
      desc: 'Мы уточним ваши задачи, категории товаров, оборот и текущие каналы продвижения на маркетплейсах.'
    },
    {
      icon: Search,
      title: 'Экспресс-анализ карточек',
      desc: 'Специалист MPAgency смотрит ключевые показатели по вашим товарам: трафик, конверсия, конкуренция.'
    },
    {
      icon: MonitorPlay,
      title: 'Диагностическая консультация',
      desc: 'По телефону или в Zoom с демонстрацией экрана разберём, где вы теряете деньги и какие точки роста есть.'
    },
    {
      icon: FileCheck,
      title: 'Предложение формата работы',
      desc: 'Предложим варианты: от разового аудита до полного ведения. Вы сами решаете, какой формат вам подходит.'
    }
  ];

  const FAQS = [
    {
      q: 'Будут ли мне сразу что-то продавать на первом звонке?',
      a: 'Нет. Первый контакт — диагностический. Наша задача понять, на каком вы этапе сейчас, есть ли точки роста и можем ли мы вообще быть вам полезны. Если видим, что потенциала мало или ниша нам не подходит — честно говорим об этом.'
    },
    {
      q: 'Сколько времени займет консультация?',
      a: 'Обычно 20–30 минут. Если у вас большой ассортимент или сложная аналитика, мы заранее договоримся о полноценном разборе на 40–60 минут с демонстрацией экрана.'
    },
    {
      q: 'Консультация платная?',
      a: 'Первичный разбор и рекомендации — бесплатно. Вы оплачиваете только реальные работы по продвижению, если решаете сотрудничать с нами.'
    },
    {
      q: 'Что будет, если мы поймём, что сейчас не готовы работать с агентством?',
      a: 'Это нормально. Многие клиенты сначала приходят за разбором и пониманием стратегии. Вы можете забрать выводы и чек-лист, а к вопросам работы с агентством вернуться позже.'
    },
    {
      q: 'С кем именно я буду общаться?',
      a: 'С практикующим специалистом по маркетплейсам, а не с «продажником без опыта». Мы соединяем вас с экспертом, который ведет реальные проекты.'
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-24 pb-16 animate-fade-in">
      <div className="container mx-auto max-w-4xl px-4">
        
        {/* Block 1: Hero / Success */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6 shadow-lg shadow-green-100/50 animate-bounce-slow">
            <CheckCircle2 size={48} className="text-green-600" />
          </div>
          <div className="mb-4">
             <span className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-bold border border-green-200">
               Номер заявки: #{applicationId}
             </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Спасибо, заявка отправлена!
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-4">
            Мы уже получили ваши данные. Менеджер MPAgency свяжется с вами в течение <span className="font-bold text-gray-900">30–60 минут</span> в рабочее время или на следующий рабочий день.
          </p>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            Пока мы изучаем ваш проект, посмотрите, что будет дальше и как подготовиться к звонку, чтобы получить максимум пользы.
          </p>
        </div>

        {/* Block 2: What's Next */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-2">Что будет дальше по шагам</h2>
            <p className="text-gray-500">Коротко о том, как мы работаем с заявками</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {STEPS.map((step, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex gap-4 hover:shadow-md transition-shadow">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm font-bold text-lg border border-gray-100">
                    <step.icon size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Block 4: Preparation (Moved up for better flow) */}
        <div className="mb-20 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
           <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 text-center md:text-left">
                Как подготовиться к звонку, чтобы он был максимально полезным
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    <p className="text-gray-600 mb-6 text-lg">
                       Это не обязательно, но наличие этих данных под рукой сильно повысит эффективность консультации:
                    </p>
                    <ul className="space-y-4">
                       {[
                         'Примерный месячный оборот и маржа',
                         'Текущий рекламный бюджет и форматы',
                         'Доступ к кабинету (или демонстрация экрана)',
                         'Список товаров для масштабирования'
                       ].map((item, i) => (
                         <li key={i} className="flex gap-3 items-center bg-white/60 p-3 rounded-xl border border-blue-100/50">
                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                               <CheckCircle2 size={14} />
                            </div>
                            <span className="text-gray-800 font-medium text-sm">{item}</span>
                         </li>
                       ))}
                    </ul>
                 </div>
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 text-center md:text-left">
                    <h4 className="font-bold text-gray-900 mb-2">Нет точных цифр?</h4>
                    <p className="text-gray-600 text-sm mb-4">
                       Ничего страшного! Всё равно оставляйте заявку — мы разберёмся вместе уже на звонке, исходя из того, что есть.
                    </p>
                    <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                       <div className="w-2/3 h-full bg-blue-500 rounded-full"></div>
                    </div>
                    <p className="text-xs text-gray-400 mt-2 text-right">Готовность к аудиту: 100%</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Block 5: CTA Messengers */}
        <div className="mb-20 text-center">
           <h2 className="text-3xl font-black text-gray-900 mb-4">Чтобы не потеряться, давайте свяжемся в мессенджере</h2>
           <p className="text-gray-500 max-w-xl mx-auto mb-8">
              Иногда письма и звонки теряются. Добавьте нашего менеджера в удобный вам мессенджер и напишите «Здравствуйте, это по заявке с сайта».
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
              <a href="https://t.me/mpagencyru" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#2AABEE] hover:bg-[#229ED9] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-1">
                 <Send size={20} /> Написать в Telegram
              </a>
              <a href="https://wa.me/74993017140" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-1">
                 <MessageCircle size={20} /> Написать в WhatsApp
              </a>
           </div>
           <p className="text-xs text-gray-400">
              Отвечаем в рабочее время с 9:00 до 19:00 по Москве
           </p>
        </div>

        {/* Block 3: Mini FAQ */}
        <div className="mb-20 max-w-2xl mx-auto">
           <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">Частые вопросы</h2>
           <div className="space-y-4">
              {FAQS.map((item, idx) => (
                 <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-gray-300 transition-colors">
                    <button 
                      onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-900 hover:bg-gray-50 transition-colors"
                    >
                       {item.q}
                       <ChevronDown size={20} className={`text-gray-400 transition-transform ${openFaqIndex === idx ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaqIndex === idx && (
                       <div className="p-5 pt-0 text-gray-600 text-sm leading-relaxed bg-gray-50 border-t border-gray-100">
                          {item.a}
                       </div>
                    )}
                 </div>
              ))}
           </div>
        </div>

        {/* Block 6: Social Proof */}
        <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 border border-gray-100 text-center">
           <h2 className="text-3xl font-black text-gray-900 mb-8">Почему клиентам комфортно работать с MPAgency</h2>
           
           <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                 <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-primary mb-4">
                    <Briefcase size={24} />
                 </div>
                 <div className="font-bold text-gray-900 mb-1">150+ проектов</div>
                 <p className="text-sm text-gray-500">Одежда, дом, техника, красота и др.</p>
              </div>
              <div className="flex flex-col items-center">
                 <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-green-600 mb-4">
                    <BarChart3 size={24} />
                 </div>
                 <div className="font-bold text-gray-900 mb-1">Рост +30–100%</div>
                 <p className="text-sm text-gray-500">За 3–6 месяцев работы</p>
              </div>
              <div className="flex flex-col items-center">
                 <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-purple-600 mb-4">
                    <ShoppingBag size={24} />
                 </div>
                 <div className="font-bold text-gray-900 mb-1">Фокус на прибыли</div>
                 <p className="text-sm text-gray-500">Следим за маржой, а не только за оборотом</p>
              </div>
           </div>

           <div className="border-t border-gray-200 pt-8 max-w-3xl mx-auto">
              <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-50 mb-8 grayscale hover:grayscale-0 transition-all duration-500">
                 {CLIENTS.slice(0, 4).map((client, idx) => (
                    <span key={idx} className="text-xl font-black text-gray-400 select-none">{client.logoText}</span>
                 ))}
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
                 <div className="text-gray-300 absolute top-4 left-4 text-4xl leading-none">“</div>
                 <p className="text-gray-600 italic relative z-10 px-4">
                    За 4 месяца выручка по ключевым товарам выросла на 62%, при этом рекламный бюджет увеличили всего на 20%. MPAgency помогли выстроить систему, а не просто «крутить ставки».
                 </p>
              </div>
           </div>
        </div>

        <div className="text-center mt-12">
           <button onClick={onBack} className="text-gray-400 hover:text-gray-900 font-medium transition-colors text-sm">
              Вернуться на главную
           </button>
        </div>

      </div>
    </div>
  );
};

export default ThankYouPage;
