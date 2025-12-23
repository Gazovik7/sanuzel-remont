
import React, { useState } from 'react';
import { Play, CheckCircle, Lock, Users, Send, Mail, ArrowRight, Loader2 } from 'lucide-react';

const LeadMagnet: React.FC = () => {
  const [method, setMethod] = useState<'telegram' | 'email'>('telegram');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-red-600 to-pink-600 text-white relative overflow-hidden">
       {/* Background decorations */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-3xl pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-3xl pointer-events-none"></div>

       <div className="container mx-auto max-w-6xl relative z-10">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
           
           {/* Left */}
           <div className="space-y-8">
              <div className="inline-block bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-sm font-bold border border-white/10">
                🎁 БЕСПЛАТНЫЙ ВИДЕО-ГАЙД
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                Узнайте, как увеличить прибыль на маркетплейсах
              </h2>

              <ul className="space-y-4 text-lg">
                 {[
                   '7 главных ошибок, которые убивают прибыль',
                   'Как снизить ДРР на 40% без потери заказов',
                   'Секретная стратегия масштабирования до 10+ млн ₽',
                   'Чек-лист для проверки вашего магазина (PDF)'
                 ].map((item, idx) => (
                   <li key={idx} className="flex items-start gap-3">
                     <CheckCircle className="flex-shrink-0 mt-1 text-pink-200" size={24} />
                     <span>{item}</span>
                   </li>
                 ))}
              </ul>

              {/* Custom Capture Form for Digital Goods */}
              <div className="bg-white/10 p-6 rounded-3xl border border-white/10 backdrop-blur-md">
                  <div className="flex gap-2 mb-6 p-1 bg-black/20 rounded-xl">
                     <button 
                       onClick={() => setMethod('telegram')}
                       className={`flex-1 py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${method === 'telegram' ? 'bg-white text-blue-600 shadow-md' : 'text-white/70 hover:text-white'}`}
                     >
                        <Send size={16} /> Telegram
                     </button>
                     <button 
                       onClick={() => setMethod('email')}
                       className={`flex-1 py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${method === 'email' ? 'bg-white text-gray-900 shadow-md' : 'text-white/70 hover:text-white'}`}
                     >
                        <Mail size={16} /> Email
                     </button>
                  </div>

                  {method === 'telegram' ? (
                    <div className="text-center">
                       <a 
                         href="https://t.me/mpagencyru" // Replace with your actual bot link
                         target="_blank" 
                         rel="noreferrer"
                         className="w-full bg-[#2AABEE] hover:bg-[#229ED9] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
                       >
                          <Send size={20} />
                          Забрать гайд в боте
                       </a>
                       <p className="text-xs text-white/60 mt-3">
                          Материал придет мгновенно. Никакого спама.
                       </p>
                    </div>
                  ) : (
                    <form onSubmit={handleEmailSubmit} className="relative">
                       {status === 'success' ? (
                          <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 text-center animate-fade-in">
                             <div className="flex items-center justify-center gap-2 font-bold mb-1">
                                <CheckCircle size={20} /> Отправлено!
                             </div>
                             <p className="text-sm text-white/80">Проверьте папку "Входящие" или "Спам"</p>
                             <button onClick={() => setStatus('idle')} className="text-xs underline mt-2 opacity-70">Отправить на другой email</button>
                          </div>
                       ) : (
                          <div className="flex flex-col gap-3">
                             <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input 
                                  type="email" 
                                  required
                                  placeholder="Ваш Email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 font-medium"
                                />
                             </div>
                             <button 
                               type="submit"
                               disabled={status === 'loading'}
                               className="w-full bg-gray-900 hover:bg-black text-white py-4 rounded-xl font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                             >
                                {status === 'loading' ? <Loader2 className="animate-spin" /> : (
                                   <>
                                     Получить на почту <ArrowRight size={20} />
                                   </>
                                )}
                             </button>
                          </div>
                       )}
                    </form>
                  )}
              </div>
              
              <div className="flex items-center justify-between text-sm opacity-70 px-2">
                 <span className="flex items-center gap-1"><Lock size={12} /> Ваши данные защищены</span>
                 <span className="flex items-center gap-1"><Users size={12} /> 2,847 уже скачали</span>
              </div>
           </div>

           {/* Right */}
           <div className="relative hidden lg:block">
             <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black aspect-video border-4 border-white/10 transform rotate-2 hover:rotate-0 transition-all duration-500 group">
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
               <img 
                 src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" 
                 alt="Обложка видео-урока по стратегии на маркетплейсах"
                 title="Смотреть бесплатный гайд по масштабированию"
                 className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
               />
               
               <div className="absolute inset-0 z-20 flex items-center justify-center">
                 <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-2xl hover:scale-110 transition-transform group-hover:bg-red-600 group-hover:text-white text-red-600">
                   <Play className="ml-2" size={40} fill="currentColor" />
                 </div>
               </div>

               <div className="absolute bottom-6 left-6 z-20">
                  <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">Видео-урок</div>
                  <div className="text-white font-bold text-xl">Стратегия масштабирования 2025</div>
                  <div className="text-gray-300 text-sm mt-1">Длительность: 18:34</div>
               </div>
             </div>
           </div>

         </div>
       </div>
    </section>
  );
};

export default LeadMagnet;
