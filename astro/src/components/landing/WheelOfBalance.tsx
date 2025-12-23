
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FACTORS = [
  { label: 'Хостовые факторы', value: 45, color: '#D946EF' }, // Fuchsia
  { label: 'Коммерческие факторы', value: 55, color: '#8B5CF6' }, // Violet
  { label: 'Контентные факторы', value: 30, color: '#10B981' }, // Emerald
  { label: 'Техническая оптимизация', value: 50, color: '#EC4899' }, // Pink
  { label: 'Поведенческие факторы', value: 25, color: '#F43F5E' }, // Rose
  { label: 'Внешние факторы', value: 15, color: '#EAB308' }, // Yellow
  { label: 'Семантический охват', value: 60, color: '#22C55E' }, // Green
  { label: 'Анти-спам', value: 58, color: '#EF4444' }, // Red
];

const WheelOfBalance: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Helper to calculate SVG path for a wedge
  const getWedgePath = (index: number, total: number, radius: number) => {
    const startAngle = (index * 360) / total;
    const endAngle = ((index + 1) * 360) / total;

    // Convert degrees to radians, subtract 90deg to start at 12 o'clock
    const startRad = (startAngle - 90) * (Math.PI / 180);
    const endRad = (endAngle - 90) * (Math.PI / 180);

    const x1 = 150 + radius * Math.cos(startRad);
    const y1 = 150 + radius * Math.sin(startRad);
    const x2 = 150 + radius * Math.cos(endRad);
    const y2 = 150 + radius * Math.sin(endRad);

    return `M150,150 L${x1},${y1} A${radius},${radius} 0 0,1 ${x2},${y2} Z`;
  };

  return (
    <section className="py-24 md:py-32 bg-[#09090b] text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div>
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Методология</span>
            <h2 className="text-4xl md:text-6xl font-serif font-medium mb-8 leading-tight">
              Метод <br/>
              <span className="italic text-gradient-gold">«Колесо баланса»</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
              <p>
                Алгоритмы поисковых систем регулярно меняются, но общие группы факторов ранжирования сайта остаются практически неизменными.
              </p>
              <p className="border-l-2 border-[#D4AF37] pl-6 text-gray-300">
                Зачастую меняется лишь важность того или иного фактора. Например, в 2014 в руководстве Google появился термин <strong className="text-white">E-E-A-T</strong> (Experience, Expertise, Authoritativeness, Trustworthiness), который стал набирать вес. Однако мы и ранее анализировали факторы доверия к сайту.
              </p>
              <p>
                Работая в комплексе над всеми группами факторов ранжирования (а не только над ссылками или текстами), мы помогаем сайтам занять лидирующие позиции в поиске, несмотря на турбулентность алгоритмов.
              </p>
            </div>
          </div>

          {/* Right: Interactive Chart */}
          <div className="relative flex flex-col items-center">
             
             {/* Title above chart */}
             <div className="mb-8 text-center">
                <span className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em]">Результаты аудита вашего сайта</span>
             </div>

             <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                {/* Chart Rings */}
                <svg viewBox="0 0 300 300" className="w-full h-full transform -rotate-90">
                   {/* Background Rings */}
                   {[1, 2, 3, 4].map(ring => (
                      <circle 
                        key={ring} 
                        cx="150" 
                        cy="150" 
                        r={30 * ring} 
                        fill="none" 
                        stroke="#333" 
                        strokeWidth="1" 
                        strokeDasharray="4 4"
                        className="opacity-30"
                      />
                   ))}

                   {/* Data Wedges */}
                   {FACTORS.map((factor, idx) => {
                      const radius = (factor.value / 100) * 140; // Max radius 140
                      return (
                        <motion.path
                          key={idx}
                          d={getWedgePath(idx, FACTORS.length, radius)}
                          fill={factor.color}
                          stroke="#09090b"
                          strokeWidth="2"
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 0.8 }}
                          whileHover={{ scale: 1.05, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          onMouseEnter={() => setHoveredIndex(idx)}
                          onMouseLeave={() => setHoveredIndex(null)}
                          className="cursor-pointer"
                        />
                      );
                   })}
                </svg>
                
                {/* Center Label */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                   <div className="text-2xl md:text-3xl font-black text-white">
                      {hoveredIndex !== null ? FACTORS[hoveredIndex].value + '%' : '45%'}
                   </div>
                   <div className="text-[10px] uppercase tracking-widest text-gray-400">
                      {hoveredIndex !== null ? 'Оценка' : 'Общий балл'}
                   </div>
                </div>
             </div>

             {/* Legend */}
             <div className="grid grid-cols-2 gap-x-8 gap-y-3 mt-8 w-full max-w-md">
                {FACTORS.map((factor, idx) => (
                   <div 
                      key={idx} 
                      className={`flex items-center gap-3 text-sm transition-opacity duration-300 ${hoveredIndex !== null && hoveredIndex !== idx ? 'opacity-30' : 'opacity-100'}`}
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                   >
                      <div className="w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: factor.color }}></div>
                      <span className="text-gray-300">{factor.label}</span>
                   </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WheelOfBalance;
