import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, AlertTriangle, ArrowUpRight, Clock, ShieldCheck, Zap } from 'lucide-react';

const UrgencyBlock: React.FC = () => {
  const months = ['1 мес', '2 мес', '3 мес', '4 мес', '5 мес', '6 мес', '7 мес', '8 мес', '9 мес', '10 мес', '11 мес', '12 мес'];
  
  // Calculate Chart Data
  const chartData = useMemo(() => {
    const adsCpc: number[] = [];
    const seoCpc: number[] = [];
    let currentAds = 100;
    let currentSeo = 120; // Starts a bit higher as initial setup cost

    for (let i = 0; i < 12; i++) {
      adsCpc.push(currentAds);
      seoCpc.push(currentSeo);
      
      currentAds = currentAds * 1.08; // 8% growth monthly (approx 10% was too aggressive visually)
      currentSeo = currentSeo * 0.85; // 15% reduction monthly due to traffic growth
    }
    return { adsCpc, seoCpc };
  }, []);

  const width = 500;
  const height = 200;
  const maxVal = 250; // Max CPC to show

  const getPath = (data: number[]) => {
    return data.map((val, i) => {
      const x = (i / 11) * width;
      const y = height - (Math.min(val, maxVal) / maxVal) * height;
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
  };

  return (
    <section className="py-24 bg-[#09090b] text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="space-y-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.2em]">
                    <Clock size={12} />
                    Стратегический момент
                </div>
                
                <div className="space-y-6">
                    <h2 className="text-4xl md:text-6xl font-serif font-medium leading-tight">
                        Лучшее время <br/>
                        начать <span className="italic text-gradient-gold">было вчера</span>
                    </h2>
                    <blockquote className="border-l-2 border-[#D4AF37] pl-6 py-2 italic text-gray-400 text-lg">
                        «Лучшее время, чтобы посадить дерево, было 20 лет назад. Второе лучшее время — сегодня»
                    </blockquote>
                </div>
                
                <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed max-w-xl">
                    <p>
                        Пока вы сомневаетесь, алгоритмы обучаются на данных ваших конкурентов. 
                        В SEO работает <span className="text-white font-bold">сложный процент</span>: чем раньше вы начнете, тем дешевле вам будет обходиться каждый клиент в будущем.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-8 pt-4">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                            <AlertTriangle size={20} />
                        </div>
                        <div>
                            <div className="text-white font-bold">Инфляция клика</div>
                            <p className="text-xs text-gray-500">Контекстная реклама дорожает ежемесячно из-за перегрева аукциона.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                            <ShieldCheck size={20} />
                        </div>
                        <div>
                            <div className="text-white font-bold">Капитал бренда</div>
                            <p className="text-xs text-gray-500">SEO создает актив, который работает на вас даже после остановки работ.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* THE PRICE OF CLICK CHART */}
            <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl relative group">
                <div className="mb-12">
                    <h4 className="text-xl font-bold mb-2">Стоимость клика (CPC)</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">Динамика за 12 месяцев на примере ниши "Услуги"</p>
                </div>

                <div className="relative">
                    {/* Legend */}
                    <div className="absolute -top-6 right-0 flex gap-6 text-[9px] font-black uppercase tracking-widest">
                        <div className="flex items-center gap-1.5 text-red-500">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div> Реклама
                        </div>
                        <div className="flex items-center gap-1.5 text-[#D4AF37]">
                            <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div> SEO
                        </div>
                    </div>

                    <div className="h-64 w-full relative">
                        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
                            {/* Grid Lines */}
                            {[0, 0.25, 0.5, 0.75, 1].map((p, i) => (
                                <line 
                                    key={i} 
                                    x1="0" y1={height * p} x2={width} y2={height * p} 
                                    stroke="white" strokeWidth="1" strokeOpacity="0.05" strokeDasharray="4 4" 
                                />
                            ))}

                            {/* ADS PATH */}
                            <motion.path 
                                d={getPath(chartData.adsCpc)}
                                fill="none"
                                stroke="#EF4444"
                                strokeWidth="3"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />

                            {/* SEO PATH */}
                            <motion.path 
                                d={getPath(chartData.seoCpc)}
                                fill="none"
                                stroke="#D4AF37"
                                strokeWidth="4"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, ease: "easeOut" }}
                            />

                            {/* Intersection Marker */}
                            <motion.g 
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.2 }}
                                transform={`translate(${(2.5 / 11) * width}, ${height - (120 / maxVal) * height})`}
                            >
                                <circle r="20" fill="#D4AF37" fillOpacity="0.1" />
                                <circle r="4" fill="#D4AF37" />
                                <text y="-25" fontSize="10" fontWeight="black" textAnchor="middle" fill="#D4AF37">ТОЧКА ВЫГОДЫ</text>
                            </motion.g>

                            {/* Labels on lines */}
                            <text x={width} y={height - (chartData.adsCpc[11] / maxVal) * height - 10} fontSize="10" fontWeight="bold" textAnchor="end" fill="#EF4444">
                                {Math.round(chartData.adsCpc[11])} ₽
                            </text>
                            <text x={width} y={height - (chartData.seoCpc[11] / maxVal) * height + 20} fontSize="10" fontWeight="bold" textAnchor="end" fill="#D4AF37">
                                {Math.round(chartData.seoCpc[11])} ₽
                            </text>
                        </svg>
                    </div>

                    {/* X-Axis */}
                    <div className="flex justify-between mt-4 border-t border-white/5 pt-4">
                        {['Старт', '6 мес', '12 мес'].map((label, i) => (
                            <span key={i} className="text-[10px] font-bold text-gray-500 uppercase">{label}</span>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-[11px] text-gray-400 leading-relaxed italic">
                        <span className="text-white font-bold uppercase tracking-tighter">Результат:</span> В долгосрочной перспективе SEO снижает стоимость привлечения клиента до 10 раз по сравнению с прямой рекламой.
                    </p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default UrgencyBlock;