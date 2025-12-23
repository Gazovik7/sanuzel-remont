
import React from 'react';
import UniversalForm from './UniversalForm';
import { CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
           <h2 className="text-4xl font-black mb-4">Хотите обсудить ваш проект?</h2>
           <p className="text-gray-400">
              Оставьте заявку в форме ниже, и мы свяжемся с вами для детального обсуждения.
           </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-[#111] p-8 md:p-12 rounded-[2rem] border border-gray-800">
           
           <div className="space-y-8">
              <div>
                 <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle className="text-gray-600" /> Проанализируем вашу нишу
                 </h3>
                 <p className="text-gray-500 text-sm">Изучим ваших конкурентов и проведем аудит сайта, составим план для эффективного продвижения в Яндексе и Google.</p>
              </div>
              <div>
                 <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle className="text-gray-600" /> Составим смету
                 </h3>
                 <p className="text-gray-500 text-sm">Рассчитаем необходимое количество ссылок и текстов. Посчитаем бюджет для реализации.</p>
              </div>
              <div>
                 <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle className="text-gray-600" /> Обсудим проект с экспертом
                 </h3>
                 <p className="text-gray-500 text-sm">Готовы обсудить свой сайт с профессионалом? Оставьте заявку.</p>
              </div>
           </div>

           <div className="bg-[#1a1a1a] p-8 rounded-3xl border border-gray-800">
              <UniversalForm 
                 source="FooterContact" 
                 variant="embedded"
                 buttonText="Обсудить проект"
                 isDark={true}
              />
           </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
