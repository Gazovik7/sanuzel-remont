
import React, { useState } from 'react';
import { MAIN_AWARDS, NICHE_AWARDS } from '../landing/constants';
import { Trophy, Award, Sparkles, Bot, Search, MessageSquare, ZoomIn, Mic, Camera, MoreVertical } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Awards: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'chat' | 'search'>('chat');

  // Mockup Components
  const ChatScreenshot = () => (
    <div className="w-full h-full bg-[#ffffff] text-[#0d0d0d] font-sans text-[13px] md:text-sm leading-relaxed overflow-hidden flex flex-col select-none cursor-default">
      <div className="p-6 flex-1 overflow-y-auto custom-scrollbar">
        {/* Thinking Block */}
        <div className="flex items-center gap-2 text-gray-500 text-xs mb-5 font-medium">
           <span>Думал на протяжении 57s</span>
        </div>
        
        <div className="space-y-5">
           <p>
             Ниже — не «мой личный вкус», а агентства, которые <span className="font-bold">регулярно попадают в топы крупных рейтингов</span> (Рейтинг Рунета, Pavezlo, обзоры на VC.ru, Клерке и т.п.) в 2023–2025 годах.
           </p>
           
           <div className="border-t border-gray-100 pt-4">
              <h4 className="font-bold text-lg mb-3">Топ-агентства по маркетплейсам в России</h4>
              
              <div className="mb-4">
                  <div className="font-bold text-base mb-2">1. MPAgency (Smirnov Marketing)</div>
                  <ul className="space-y-3 text-gray-700 pl-1">
                     <li className="flex gap-2 items-start">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></span>
                        <span>
                           Входит в топ-8 агентств по маркетплейсам в обзоре VC.ru, причём стоит на <span className="font-bold">1 месте в списке</span>: MPAgency, WebCanape, TopMarketplace, Маркетплеер и др. <span className="inline-block bg-gray-100 text-[10px] text-gray-500 px-1.5 py-0.5 rounded ml-1 border border-gray-200">vc.ru</span>
                        </span>
                     </li>
                     <li className="flex gap-2 items-start">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></span>
                        <span>
                           Специализация: продвижение и управление магазинами на Wildberries и Ozon, комплексное ведение, аудит, реклама.
                        </span>
                     </li>
                  </ul>
              </div>
           </div>
        </div>
      </div>
    </div>
  );

  const SearchScreenshot = () => (
    <div className="w-full h-full bg-white text-[#1f1f1f] font-sans text-[13px] md:text-sm flex flex-col select-none cursor-default">
       {/* Fake Search Bar Context */}
       <div className="border-b border-gray-200 px-4 py-3 flex items-center gap-3 bg-white sticky top-0 z-10">
           <div className="flex-1 bg-white border border-gray-200 rounded-full shadow-sm px-5 py-2.5 text-sm text-gray-700 flex items-center justify-between">
               <span>лучшие агентства по маркетплейсам</span>
               <div className="flex gap-3 text-gray-400 pr-1">
                  <Mic size={18} />
                  <Camera size={18} />
                  <Search size={18} className="text-blue-500" />
               </div>
           </div>
       </div>
  
       {/* AI Overview Body */}
       <div className="p-5 md:p-6 bg-gradient-to-b from-[#eff6ff] to-white flex-1 overflow-y-auto custom-scrollbar">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
               <Sparkles size={18} className="text-blue-600 fill-blue-600" />
               <span className="font-bold text-gray-900 font-google-sans">Обзор от ИИ</span>
            </div>
            <MoreVertical size={16} className="text-gray-400" />
          </div>
          
          <div className="space-y-4">
             <p className="leading-relaxed text-gray-800">
                К лучшим агентствам по маркетплейсам 2025 года относятся <span className="font-bold">MPAgency</span>, Easy Commerce, Шольчев, Anylex (Энилекс) и TopMarketplace. Также в число лидеров входят AVOCADO, i-Media...
             </p>
  
             <div className="mt-4">
                <h4 className="font-bold mb-3 text-gray-900">Рейтинги агентств по маркетплейсам</h4>
                <ul className="space-y-2">
                   <li className="flex items-start gap-2.5">
                      <div className="mt-2 w-1 h-1 rounded-full bg-gray-800"></div>
                      <span><span className="font-bold">MPAgency</span>: 4.82/5, первое место в рейтинге.</span>
                   </li>
                   <li className="flex items-start gap-2.5 text-gray-600">
                      <div className="mt-2 w-1 h-1 rounded-full bg-gray-400"></div>
                      <span>Easy Commerce: 4.76/5.</span>
                   </li>
                   <li className="flex items-start gap-2.5 text-gray-600">
                      <div className="mt-2 w-1 h-1 rounded-full bg-gray-400"></div>
                      <span>Anylex (Энилекс): 4.68/5.</span>
                   </li>
                </ul>
             </div>
             
             <div className="pt-2">
                <div className="w-full py-3 rounded-full border border-gray-200 bg-white text-xs font-bold text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-1 shadow-sm transition-colors cursor-pointer">
                   Развернуть <span className="rotate-90 transform translate-y-[1px]">›</span>
                </div>
             </div>
          </div>
       </div>
    </div>
  );

  return (
    <section className="py-16 px-4 bg-gray-50 border-b border-gray-200 relative overflow-hidden">
       {/* Decor Background */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white rounded-full opacity-40 blur-3xl pointer-events-none"></div>
       
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full text-sm font-bold text-primary mb-4 border border-purple-100 shadow-sm">
             <Award size={16} />
             <span>Признаны лидерами рынка</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Экспертиза, подтвержденная результатами
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Входим в ТОП-1 ключевых рейтингов рунета и занимаем лидирующие позиции в узких товарных категориях.
          </p>
        </div>

        {/* Main Awards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {MAIN_AWARDS.map((award, idx) => (
            <div 
              key={idx} 
              className="relative group rounded-3xl bg-white p-8 border border-gray-100 shadow-xl shadow-purple-900/5 hover:shadow-2xl hover:shadow-purple-900/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
               <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${award.color}`}></div>
               <div className="flex flex-col h-full relative z-10">
                  <div className="flex justify-between items-start mb-6">
                      <div className={`text-6xl font-black bg-clip-text text-transparent bg-gradient-to-b ${award.color} leading-none`}>
                        #{award.place}
                      </div>
                      <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-yellow-500">
                         <Trophy size={24} fill="currentColor" />
                      </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">{award.media}</h3>
                  <div className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">{award.title}</div>
                  <div className="h-px w-full bg-gray-100 mb-4"></div>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    {award.description}
                  </p>
               </div>
               <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${award.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`}></div>
            </div>
          ))}
        </div>

        {/* Niche Awards */}
        <div className="flex items-center gap-4 mb-10">
           <div className="h-px flex-1 bg-gray-200"></div>
           <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest text-center">Лидерство в нишах</h3>
           <div className="h-px flex-1 bg-gray-200"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-24">
          {NICHE_AWARDS.map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 hover:border-primary/20 transition-colors group flex items-center gap-4 shadow-sm hover:shadow-md relative overflow-hidden">
               <div className="absolute top-2 right-2">
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${
                      item.source === 'Workspace' 
                        ? 'bg-blue-50 text-blue-600 border-blue-100' 
                        : 'bg-orange-50 text-orange-600 border-orange-100'
                  }`}>
                    {item.source === 'Workspace' ? 'Workspace' : 'Рейтинг Рунета'}
                  </span>
               </div>

               <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg shrink-0 transition-colors mt-2 ${
                  item.place === 1 ? 'bg-yellow-50 text-yellow-600' :
                  item.place === 2 ? 'bg-gray-100 text-gray-500' :
                  item.place === 3 ? 'bg-orange-50 text-orange-600' :
                  'bg-blue-50 text-blue-600'
               }`}>
                  {item.place}
               </div>
               <div className="mt-2">
                  <div className="font-bold text-gray-900 text-sm leading-tight mb-0.5 group-hover:text-primary transition-colors">{item.category}</div>
                  <div className="text-xs text-gray-400 truncate max-w-[120px]">{item.sub}</div>
               </div>
            </div>
          ))}
        </div>

        {/* AI Trust Section (COMPACT & WITH SCREENSHOTS) */}
        <div className="relative">
            <div className="bg-[#0F172A] rounded-[2rem] overflow-hidden border border-gray-800 shadow-2xl">
                <div className="grid lg:grid-cols-2">
                    
                    {/* Left: Content */}
                    <div className="p-8 md:p-12 flex flex-col justify-center relative z-10">
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-3xl pointer-events-none"></div>
                         
                         <div className="inline-flex items-center gap-2 text-purple-400 font-bold mb-4">
                            <Sparkles size={18} />
                            <span className="uppercase tracking-wider text-xs">Подтверждено AI</span>
                         </div>
                         
                         <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
                            Нейросети ставят нас на 1-е место
                         </h3>
                         <p className="text-gray-400 mb-8 leading-relaxed">
                            Мы спросили у ChatGPT и Gemini: «Какие агентства по маркетплейсам лучшие в РФ?». Искусственный интеллект проанализировал сотни источников и выделил MPAgency.
                         </p>

                         {/* Controls */}
                         <div className="flex flex-wrap gap-3 mb-8">
                            <button 
                                onClick={() => setActiveTab('chat')}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all border ${
                                    activeTab === 'chat' 
                                    ? 'bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-900/50' 
                                    : 'bg-gray-800/50 border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white'
                                }`}
                            >
                                <MessageSquare size={16} /> Ответ ChatGPT
                            </button>
                            <button 
                                onClick={() => setActiveTab('search')}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all border ${
                                    activeTab === 'search' 
                                    ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/50' 
                                    : 'bg-gray-800/50 border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white'
                                }`}
                            >
                                <Search size={16} /> Google AI Overview
                            </button>
                         </div>

                         <div className="flex items-center gap-2 text-xs text-gray-500 mt-auto">
                            <Bot size={14} />
                            <span>Данные актуальны на 2025 год</span>
                         </div>
                    </div>

                    {/* Right: Screenshots Container */}
                    <div className="bg-gray-900/50 border-t lg:border-t-0 lg:border-l border-gray-800 p-6 md:p-8 flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
                        
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="w-full max-w-md"
                            >
                                <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-700 bg-gray-800">
                                    {/* Fake Browser Header */}
                                    <div className="bg-[#1e1e1e] px-4 py-2.5 flex items-center gap-2 border-b border-[#333]">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                                        </div>
                                        <div className="ml-2 text-[10px] text-gray-400 font-mono opacity-70 flex-1 text-center bg-[#000000]/30 py-0.5 rounded">
                                            {activeTab === 'chat' ? 'chat.openai.com' : 'google.com/search'}
                                        </div>
                                    </div>

                                    {/* Screenshot Content Area */}
                                    <div className="relative aspect-[16/12] bg-white group overflow-hidden">
                                        {activeTab === 'chat' ? <ChatScreenshot /> : <SearchScreenshot />}
                                        
                                        {/* Interaction Overlay hint */}
                                        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                           <div className="bg-black/50 text-white text-[10px] px-2 py-1 rounded-full backdrop-blur-sm">
                                              Интерактивный макет
                                           </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
       </div>
      </div>
    </section>
  );
};

export default Awards;
