
import React from 'react';
import { CheckCircle2, TrendingUp, Search, MessageCircle, Zap } from 'lucide-react';

const Methodology: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gray-50" id="methodology">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
            Технология <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600">«МПКомплекс»</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light">
            Мы не просто "делаем продвижение". Мы внедряем систему, которая делает бизнес прозрачным и прибыльным.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
            {/* Block 1: Unit Eco & Ads */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-purple-900/5 hover:shadow-2xl transition-all group overflow-hidden flex flex-col">
                {/* Artifact Visual */}
                <div className="bg-gray-50 rounded-2xl p-4 mb-8 border border-gray-200 h-64 overflow-hidden relative select-none flex flex-col">
                    <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-gray-50 to-transparent z-10"></div>
                    {/* Mock Table */}
                    <div className="w-full text-[10px] md:text-xs font-mono">
                        <div className="flex border-b border-gray-200 pb-2 mb-2 font-bold text-gray-400 uppercase tracking-wider">
                            <div className="w-1/4">SKU</div>
                            <div className="w-1/4 text-right">Цена</div>
                            <div className="w-1/4 text-right">Реклама</div>
                            <div className="w-1/4 text-right text-green-600">Прибыль</div>
                        </div>
                        {[1,2,3].map((i) => (
                            <div key={i} className="flex py-2 border-b border-gray-100 items-center">
                                <div className="w-1/4 truncate text-gray-700 font-bold">Платье-W{i}</div>
                                <div className="w-1/4 text-right text-gray-500">2 490 ₽</div>
                                <div className="w-1/4 text-right">
                                   <span className="bg-red-50 text-red-600 px-1 rounded">{(12 - i * 0.5).toFixed(1)}%</span>
                                </div>
                                <div className="w-1/4 text-right font-bold text-green-600">
                                   +{(850 + i * 50)} ₽
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* AI Bidder Badge */}
                    <div className="mt-auto bg-purple-50 border border-purple-100 p-3 rounded-xl flex items-center gap-3 animate-pulse relative z-20">
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                            <Zap size={14} />
                        </div>
                        <div className="min-w-0">
                            <div className="font-bold text-purple-900 text-xs">AI-Биддер активен</div>
                            <div className="text-purple-500 text-[10px] truncate">Ставка изменена: <span className="font-mono font-bold">125 ₽ → 120 ₽</span></div>
                        </div>
                    </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-fuchsia-600">
                   Реклама на основе Unit-экономики
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                   Запускаем рекламу только после расчета медиаплана и точки безубыточности. Используем авто-биддеры для удержания целевого ДРР 24/7 под контролем менеджера.
                </p>
                <ul className="space-y-3 mt-auto">
                    <li className="flex gap-3 items-start">
                        <CheckCircle2 className="text-purple-500 shrink-0 mt-1" size={18} />
                        <span className="text-gray-700 text-base">Расчет эффективного бюджета исходя из маржинальности</span>
                    </li>
                    <li className="flex gap-3 items-start">
                        <CheckCircle2 className="text-purple-500 shrink-0 mt-1" size={18} />
                        <span className="text-gray-700 text-base">Еженедельные спринты по оптимизации кампаний</span>
                    </li>
                    <li className="flex gap-3 items-start">
                        <CheckCircle2 className="text-purple-500 shrink-0 mt-1" size={18} />
                        <span className="text-gray-700 text-base">Моментальные корректировки ставок (AI + Человек)</span>
                    </li>
                </ul>
            </div>

            {/* Block 2: SEO */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-blue-900/5 hover:shadow-2xl transition-all group overflow-hidden flex flex-col">
                {/* Artifact Visual */}
                <div className="bg-gray-50 rounded-2xl p-4 mb-8 border border-gray-200 h-64 overflow-hidden relative">
                     <div className="absolute top-4 right-4 bg-white border border-gray-200 shadow-sm rounded-lg px-3 py-1 text-[10px] font-bold text-gray-500 flex items-center gap-1 z-10">
                        <Search size={10} /> Ядро: 5000+
                     </div>
                     <div className="space-y-2 mt-2 relative z-0">
                        {['Женское платье вечернее', 'Платье на выпускной', 'Сарафан летний длинный', 'Одежда для дома'].map((kw, i) => (
                            <div key={i} className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
                                <span className="text-xs font-medium text-gray-700 truncate pr-2">{kw}</span>
                                <div className="flex items-center gap-2 shrink-0">
                                    <span className="text-[10px] text-gray-400 hidden sm:inline">Freq: {12000 - i*2000}</span>
                                    <div className="w-6 h-6 rounded bg-green-100 text-green-700 text-xs font-bold flex items-center justify-center">
                                        {i + 1}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="bg-blue-50/50 p-3 rounded-xl border border-blue-100 border-dashed text-center text-xs text-blue-600 font-medium">
                            + еще 4850 запросов
                        </div>
                     </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-fuchsia-600">
                   Собственная методика SEO
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                   Полный охват ключевых слов. Используем матрицу запросов, чтобы попасть во все возможные категории и фильтры.
                </p>
                <ul className="space-y-3 mt-auto">
                    <li className="flex gap-3 items-start">
                        <CheckCircle2 className="text-purple-500 shrink-0 mt-1" size={18} />
                        <span className="text-gray-700 text-base">Сбор семантического ядра до 5000 запросов</span>
                    </li>
                    <li className="flex gap-3 items-start">
                        <CheckCircle2 className="text-purple-500 shrink-0 mt-1" size={18} />
                        <span className="text-gray-700 text-base">Ежедневный трекинг позиций (ВЧ и СЧ)</span>
                    </li>
                    <li className="flex gap-3 items-start">
                        <CheckCircle2 className="text-purple-500 shrink-0 mt-1" size={18} />
                        <span className="text-gray-700 text-base">Добавляем ваши товары во все возможные категории</span>
                    </li>
                </ul>
            </div>

            {/* Block 3: Design */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-pink-900/5 hover:shadow-2xl transition-all group overflow-hidden flex flex-col">
                {/* Artifact Visual */}
                <div className="bg-gray-50 rounded-2xl p-4 mb-8 border border-gray-200 h-64 flex items-center justify-center relative">
                     {/* Mock Card */}
                     <div className="w-40 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden relative group/card transform transition-transform hover:scale-105 duration-500">
                        <div className="aspect-[3/4] bg-gray-200 relative">
                            {/* Updated to a Security Camera image placeholder matching the user request */}
                            <img src="https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Wi-Fi Camera Infographic" />
                        </div>
                        <div className="p-2">
                            <div className="h-2 bg-gray-200 rounded w-3/4 mb-1"></div>
                            <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                        </div>

                        {/* Annotations */}
                        <div className="absolute top-6 right-4 translate-x-1/2 w-28 bg-black/80 backdrop-blur text-white text-[9px] p-2 rounded-lg shadow-xl z-20 animate-[bounce_3s_infinite]">
                             <span className="font-bold text-yellow-400">CTR Trigger:</span> <br/> "Закрытие боли" через инфографику
                        </div>
                        <div className="absolute top-6 right-8 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                        <div className="absolute top-6 right-8 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white"></div>
                     </div>
                     
                     <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                        <div className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-lg shadow-sm flex items-center gap-1">
                           <TrendingUp size={12} /> CTR 4.2%
                        </div>
                     </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-fuchsia-600">
                   Маркетинговый подход к дизайну
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                   Дизайн ради продаж, а не ради красоты. Сначала проводим анализ конкурентов и болей ЦА, потом рисуем.
                </p>
                <ul className="space-y-3 mt-auto">
                    <li className="flex gap-3 items-start">
                        <CheckCircle2 className="text-purple-500 shrink-0 mt-1" size={18} />
                        <span className="text-gray-700 text-base">Анализ инфографики топ-конкурентов</span>
                    </li>
                    <li className="flex gap-3 items-start">
                        <CheckCircle2 className="text-purple-500 shrink-0 mt-1" size={18} />
                        <span className="text-gray-700 text-base">A/B тестирование главных фотографий</span>
                    </li>
                    <li className="flex gap-3 items-start">
                        <CheckCircle2 className="text-purple-500 shrink-0 mt-1" size={18} />
                        <span className="text-gray-700 text-base">Закрытие возражений прямо на фото</span>
                    </li>
                </ul>
            </div>

            {/* Block 4: Analytics & P&L */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-green-900/5 hover:shadow-2xl transition-all group overflow-hidden flex flex-col">
                {/* Artifact Visual */}
                <div className="bg-gray-50 rounded-2xl p-4 mb-8 border border-gray-200 h-64 overflow-hidden flex flex-col gap-3">
                    {/* P&L Header */}
                    <div className="flex justify-between items-end border-b border-gray-200 pb-2">
                        <div>
                            <div className="text-[10px] text-gray-400 uppercase font-bold">Чистая прибыль</div>
                            <div className="text-2xl font-black text-gray-900">452 000 ₽</div>
                        </div>
                        <div className="text-right">
                             <div className="text-[10px] text-gray-400 uppercase font-bold">Рентабельность</div>
                             <div className="text-sm font-bold text-green-600">+24%</div>
                        </div>
                    </div>

                    {/* Chart Bars */}
                    <div className="flex items-end gap-2 h-20 mt-2">
                        {[40, 60, 45, 70, 90, 85, 100].map((h, i) => (
                            <div key={i} className="flex-1 bg-gray-200 rounded-t-sm relative group/chart">
                                <div className={`absolute bottom-0 w-full rounded-t-sm bg-green-500 transition-all duration-1000`} style={{ height: `${h}%` }}></div>
                            </div>
                        ))}
                    </div>

                    {/* Chat Overlay */}
                    <div className="mt-auto bg-white border border-gray-200 rounded-xl p-3 shadow-md flex gap-3 items-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white shrink-0">
                             <MessageCircle size={14} />
                        </div>
                        <div className="text-[10px] text-gray-600 leading-tight">
                            <span className="font-bold text-gray-900">Менеджер:</span> Отчет готов! Чистая прибыль выросла на 15% за счет снижения логистики.
                        </div>
                    </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-fuchsia-600">
                   Комплексная аналитика прибыли
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                   Регулярные P&L отчеты. Мы считаем чистую прибыль, а не просто оборот, чтобы вы понимали реальную картину бизнеса.
                </p>
                <ul className="space-y-3 mt-auto">
                    <li className="flex gap-3 items-start">
                        <CheckCircle2 className="text-purple-500 shrink-0 mt-1" size={18} />
                        <span className="text-gray-700 text-base">Еженедельный расчет чистой прибыли (P&L)</span>
                    </li>
                    <li className="flex gap-3 items-start">
                        <CheckCircle2 className="text-purple-500 shrink-0 mt-1" size={18} />
                        <span className="text-gray-700 text-base">Общий чат с командой и регулярные созвоны</span>
                    </li>
                    <li className="flex gap-3 items-start">
                        <CheckCircle2 className="text-purple-500 shrink-0 mt-1" size={18} />
                        <span className="text-gray-700 text-base">Делаем выводы на основании цифр, а не догадок</span>
                    </li>
                </ul>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Methodology;
