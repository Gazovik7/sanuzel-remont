
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, Shirt, Smartphone, Home, Sparkles, 
  Baby, Box, Rocket, Coins, TrendingUp, Diamond, Scale, Percent, 
  RefreshCw, Search, Gift 
} from 'lucide-react';
import UniversalForm from './UniversalForm';

interface QuizOption {
  icon: React.ElementType;
  label: string;
}

interface QuizStep {
  id: string;
  question: string;
  subtitle?: string;
  options: QuizOption[];
}

const QUIZ_STEPS: QuizStep[] = [
  {
    id: 'niche',
    question: 'Какая у вас ниша?',
    subtitle: 'Мы подберем кейсы и стратегию именно под вашу категорию',
    options: [
      { icon: Shirt, label: 'Одежда/Обувь' },
      { icon: Smartphone, label: 'Электроника' },
      { icon: Home, label: 'Товары для дома' },
      { icon: Sparkles, label: 'Красота/Здоровье' },
      { icon: Baby, label: 'Детские товары' },
      { icon: Box, label: 'Другое' },
    ]
  },
  {
    id: 'budget',
    question: 'Ежемесячный бюджет на маркетинг?',
    subtitle: 'Это поможет определить оптимальную стратегию старта',
    options: [
      { icon: Coins, label: 'До 100 000 ₽' },
      { icon: TrendingUp, label: '100 000 - 500 000 ₽' },
      { icon: Rocket, label: '500 000 - 1.5 млн ₽' },
      { icon: Diamond, label: 'Более 1.5 млн ₽' },
    ]
  },
  {
    id: 'goal',
    question: 'Главная цель на ближайшие 3 месяца?',
    options: [
      { icon: Scale, label: 'Масштабирование (x2-x3)' },
      { icon: Percent, label: 'Рост чистой прибыли' },
      { icon: RefreshCw, label: 'Снижение ДРР' },
      { icon: Search, label: 'Выход в ТОП выдачи' },
    ]
  }
];

const Quiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleOptionClick = (optionLabel: string) => {
    setAnswers(prev => ({ ...prev, [QUIZ_STEPS[currentStep].id]: optionLabel }));
    
    if (currentStep < QUIZ_STEPS.length - 1) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 250);
    } else {
      setTimeout(() => setIsCompleted(true), 250);
    }
  };

  const progress = ((currentStep + (isCompleted ? 1 : 0)) / (QUIZ_STEPS.length + 1)) * 100;

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" id="quiz">
      <div className="container mx-auto max-w-4xl relative z-10">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Не знаете, какой тариф выбрать?
          </h2>
          <p className="text-gray-500 text-lg">
            Ответьте на 3 вопроса и получите индивидуальную стратегию роста + расчет бюджета
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200 border border-gray-100 overflow-hidden relative min-h-[500px] flex flex-col">
          {/* Progress Bar */}
          <div className="h-2 bg-gray-100 w-full">
            <motion.div 
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="p-6 md:p-10 flex-1 flex flex-col">
            <AnimatePresence mode="wait">
              {!isCompleted ? (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 flex flex-col"
                >
                  <div className="mb-8">
                    <div className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
                      Вопрос {currentStep + 1} из {QUIZ_STEPS.length}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {QUIZ_STEPS[currentStep].question}
                    </h3>
                    {QUIZ_STEPS[currentStep].subtitle && (
                      <p className="text-gray-500">{QUIZ_STEPS[currentStep].subtitle}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {QUIZ_STEPS[currentStep].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOptionClick(option.label)}
                        className={`p-4 rounded-xl border-2 text-left transition-all group flex items-center gap-4 hover:border-primary hover:bg-primary/5 ${
                          answers[QUIZ_STEPS[currentStep].id] === option.label 
                            ? 'border-primary bg-primary/5 ring-2 ring-primary/20' 
                            : 'border-gray-100 bg-gray-50'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                           answers[QUIZ_STEPS[currentStep].id] === option.label
                             ? 'bg-primary text-white'
                             : 'bg-white text-gray-500 group-hover:text-primary'
                        }`}>
                          <option.icon size={24} />
                        </div>
                        <span className="font-bold text-gray-700 group-hover:text-gray-900 text-lg">
                          {option.label}
                        </span>
                        {answers[QUIZ_STEPS[currentStep].id] === option.label && (
                          <div className="ml-auto text-primary animate-scale-in">
                            <Check size={24} />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex-1 flex flex-col items-center justify-center text-center py-8"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 animate-bounce-slow">
                    <Gift size={40} />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Стратегия почти готова!
                  </h3>
                  <p className="text-gray-500 max-w-md mb-8 text-lg">
                    Оставьте контакты, чтобы мы отправили вам расчет бюджета и точки роста для ниши <span className="font-bold text-gray-800">«{answers['niche']}»</span>.
                  </p>

                  <div className="w-full max-w-sm">
                    <UniversalForm 
                        source="Quiz"
                        variant="embedded"
                        buttonText="Получить стратегию"
                        showMessengerSelector={true}
                        extraFields={answers}
                        className="w-full"
                    />
                    <p className="text-xs text-gray-400 mt-4">
                       Выберите удобный способ связи для получения стратегии.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Footer Step Indicator */}
          {!isCompleted && (
            <div className="bg-gray-50 p-4 px-10 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500 font-medium">
               <div className="flex gap-1">
                 {QUIZ_STEPS.map((_, i) => (
                   <div 
                    key={i} 
                    className={`w-2 h-2 rounded-full transition-colors ${i <= currentStep ? 'bg-primary' : 'bg-gray-300'}`}
                   />
                 ))}
                 <div className="w-2 h-2 rounded-full bg-gray-300 border border-gray-400 box-border" title="Final Step"></div>
               </div>
               {currentStep > 0 && (
                 <button onClick={() => setCurrentStep(prev => prev - 1)} className="hover:text-gray-800 underline">
                    Назад
                 </button>
               )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quiz;
