
import React from 'react';
import { Check, X, Info, Zap, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const ComparisonBlock: React.FC = () => {
  const criteria = [
    { 
        label: 'Экспертиза', 
        agency: 'Целый отдел (SEO, линкбилдер, аналитик, маркетолог)', 
        staff: 'Один человек (ограничен своими знаниями)', 
        freelance: 'Самоучка (риск низкой квалификации)' 
    },
    { 
        label: 'Инструменты', 
        agency: 'Проф. софт на 200к+ руб/мес (Ahrefs, Semrush и др.)', 
        staff: 'Нужно оплачивать отдельно из бюджета', 
        freelance: 'Использует бесплатные или ломаные версии' 
    },
    { 
        label: 'Гарантии', 
        agency: 'Финансовая ответственность по договору', 
        staff: 'Только увольнение (деньги не вернуть)', 
        freelance: 'Честное слово (может пропасть)' 
    },
    { 
        label: 'Стоимость', 
        agency: 'Фиксированная цена за результат', 
        staff: 'Зарплата + налоги + рабочее место + софт', 
        freelance: 'Дешево, но без системности' 
    },
    { 
        label: 'Стабильность', 
        agency: 'Работаем 24/7, нет отпусков и больничных', 
        staff: 'Болеет, уходит в отпуск, увольняется', 
        freelance: 'Зависит от личных обстоятельств' 
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-[#09090b] mb-6">
                Почему <span className="italic text-[#D4AF37]">бутиковое агентство</span> <br/> 
                выгоднее штата или фриланса?
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Вы получаете мощь целого SEO-департамента по цене одного среднего специалиста.
            </p>
        </div>

        <div className="overflow-x-auto">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="border-b-2 border-gray-100">
                        <th className="py-6 px-4 text-left text-xs font-black uppercase tracking-widest text-gray-400">Критерий</th>
                        <th className="py-6 px-4 text-center bg-[#D4AF37]/5 rounded-t-3xl border-x-2 border-t-2 border-[#D4AF37]/20">
                            <div className="flex flex-col items-center gap-2">
                                <Shield className="text-[#D4AF37]" size={24} />
                                <span className="text-[#09090b] font-black uppercase tracking-tighter">Smirnov Marketing</span>
                            </div>
                        </th>
                        <th className="py-6 px-4 text-center text-gray-400 font-bold opacity-50">Штатный SEO</th>
                        <th className="py-6 px-4 text-center text-gray-400 font-bold opacity-50">Фрилансер</th>
                    </tr>
                </thead>
                <tbody>
                    {criteria.map((item, idx) => (
                        <tr key={idx} className="border-b border-gray-50 group hover:bg-gray-50/50 transition-colors">
                            <td className="py-6 px-4 font-bold text-[#09090b] text-sm">{item.label}</td>
                            <td className="py-6 px-6 text-center bg-[#D4AF37]/5 border-x-2 border-[#D4AF37]/10">
                                <div className="flex items-center justify-center gap-2 text-[#09090b] font-medium text-sm">
                                    <Check className="text-green-500 shrink-0" size={16} />
                                    {item.agency}
                                </div>
                            </td>
                            <td className="py-6 px-4 text-center text-gray-500 text-sm italic">{item.staff}</td>
                            <td className="py-6 px-4 text-center text-gray-500 text-sm italic">{item.freelance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        <div className="mt-12 p-8 rounded-[2rem] bg-[#09090b] text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-[#D4AF37] flex items-center justify-center text-black shadow-lg shadow-[#D4AF37]/20">
                    <Zap size={28} />
                </div>
                <div>
                    <div className="text-xl font-bold mb-1">Готовы к системному росту?</div>
                    <p className="text-gray-400 text-sm">Мы внедрим стандарты качества, которые недоступны одиночкам.</p>
                </div>
            </div>
            <button className="px-8 py-4 rounded-xl bg-[#D4AF37] text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all">
                Сравнить условия
            </button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonBlock;
