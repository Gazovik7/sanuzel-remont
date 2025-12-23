
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Target, Building2, Globe2, Zap, Award, Sparkles } from 'lucide-react';
import { useModal } from './Modal';

const questions = [
  {
    title: "Какая у вас ниша бизнеса?",
    options: [
      { label: "Услуги (B2C/B2B)", icon: Target, value: "services" },
      { label: "Интернет-магазин", icon: Building2, value: "ecommerce" },
      { label: "Сложное производство", icon: Building2, value: "factory" },
      { label: "Недвижимость / Стройка", icon: Building2, value: "realestate" }
    ]
  },
  {
    title: "Сколько лет вашему сайту?",
    options: [
      { label: "Совсем новый (0-1 год)", value: "new" },
      { label: "Молодой (1-3 года)", value: "young" },
      { label: "Зрелый (более 3 лет)", value: "old" },
      { label: "Сайта еще нет", value: "none" }
    ]
  },
  {
    title: "Какая ваша главная цель сейчас?",
    options: [
      { label: "Выйти в ТОП по Москве", value: "moscow" },
      { label: "Масштабироваться на всю РФ", value: "russia" },
      { label: "Снизить цену заявки из рекламы", value: "lower_cpa" },
      { label: "Исправить ошибки прошлых SEO", value: "fix_errors" }
    ]
  }
];

const Quiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const { openModal } = useModal();

  const handleOptionClick = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleFinish = () => {
    openModal({
      title: 'Ваша стратегия готова',
      subtitle: 'Оставьте контакты, чтобы мы прислали персональный план роста на основе ваших ответов.',
      extraFields: { quiz_answers: answers }
    });
  };

  return (
    <section className="py-24 bg-[#F5F5F7]">
      <div className="container mx-auto px-6 max-w-[1000px]">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
            
            {/* Sidebar */}
            <div className="bg-[#09090b] text-white p-10 md:w-1/3 flex flex-col justify-between">
                <div>
                    <div className="inline-flex items-center gap-2 text-[#D4AF37] mb-6">
                        <Sparkles size={16} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Интерактив</span>
                    </div>
                    <h3 className="text-2xl font-serif font-medium leading-tight mb-4">
                        Узнайте <span className="italic text-[#D4AF37]">стратегию роста</span> для вашего сайта
                    </h3>
                    <p className="text-gray-500 text-sm font-light">Ответьте на 3 вопроса и получите предварительный план продвижения.</p>
                </div>
                
                <div className="space-y-4 pt-8 border-t border-white/10 mt-8">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                            <Zap size={16} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider">Анализ ниши</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                            <Target size={16} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider">Точки роста</span>
                    </div>
                </div>
            </div>

            {/* Main Quiz Area */}
            <div className="p-10 md:p-16 flex-1 flex flex-col justify-center min-h-[450px]">
                <AnimatePresence mode="wait">
                    {!isCompleted ? (
                        <motion.div 
                            key={currentStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8"
                        >
                            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                                <span>Вопрос {currentStep + 1} из {questions.length}</span>
                                <div className="flex gap-1">
                                    {questions.map((_, i) => (
                                        <div key={i} className={`h-1 w-4 rounded-full ${i <= currentStep ? 'bg-[#D4AF37]' : 'bg-gray-100'}`} />
                                    ))}
                                </div>
                            </div>

                            <h4 className="text-2xl md:text-3xl font-bold text-[#09090b]">{questions[currentStep].title}</h4>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {questions[currentStep].options.map((opt, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleOptionClick(opt.value)}
                                        className="group p-5 text-left border border-gray-100 rounded-2xl hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all flex items-center justify-between"
                                    >
                                        <span className="font-bold text-gray-700 group-hover:text-[#09090b]">{opt.label}</span>
                                        <ArrowRight size={16} className="text-gray-300 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all" />
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center space-y-8"
                        >
                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Check size={40} />
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-3xl font-bold text-[#09090b]">Анализ завершен!</h4>
                                <p className="text-gray-500 max-w-sm mx-auto">Мы подобрали оптимальную стратегию для вашей ниши на 2025 год.</p>
                            </div>
                            <button 
                                onClick={handleFinish}
                                className="inline-flex items-center gap-2 bg-[#D4AF37] text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-[#D4AF37]/20 hover:scale-105 active:scale-95 transition-all"
                            >
                                Получить стратегию
                                <ArrowRight size={18} />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
