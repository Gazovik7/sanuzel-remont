
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesIncluded from './components/ServicesIncluded';
import WhyUs from './components/WhyUs';
import ReviewsBlock from './components/ReviewsBlock';
import CasesResults from './components/CasesResults';
import Pricing from './components/Pricing';
import SeoCalculator from './components/SeoCalculator';
import DiscussProject from './components/DiscussProject';
import DetailedStages from './components/DetailedStages';
import AdditionalServices from './components/AdditionalServices';
import SeoBenefits from './components/SeoBenefits';
import ExperienceBlock from './components/ExperienceBlock';
import AwardsBlock from './components/AwardsBlock';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { ModalProvider } from './components/Modal';
import RequestModal from './components/RequestModal';
import GrowthBlock from './components/GrowthBlock';
import WheelOfBalance from './components/WheelOfBalance';
import MethodologyComparison from './components/MethodologyComparison';
import GeoLinks from './components/GeoLinks';
import CmsLinks from './components/CmsLinks';

function App() {
  return (
    <ModalProvider>
      <div className="font-sans text-[#09090b] bg-white selection:bg-[#D4AF37] selection:text-white">
        <Header />
        
        <main>
           {/* 1. Главный экран: Оффер и захват внимания */}
           <Hero />

           {/* 2. Результаты + Доверие (Clients inside) */}
           <CasesResults />

           {/* 2.5 High Conversion Form */}
           <GrowthBlock />
           
           {/* 3. Что входит: Показ экспертности и глубины работ */}
           <ServicesIncluded />

           {/* 4. Метод работы: Колесо Баланса (NEW) */}
           <WheelOfBalance />

           {/* 4.5 Сравнение методологий (NEW) */}
           <MethodologyComparison />

           {/* 13. Отзывы: Эмоциональное доказательство (Moved up) */}
           <ReviewsBlock />
           
           {/* 4. Почему мы: УТП и отличия от конкурентов */}
           <WhyUs />
           
           {/* 6. Калькулятор: Вовлечение пользователя (Интерактив) */}
           <SeoCalculator />
           
           {/* 7. Тарифы: Квалификация лида ценой */}
           <Pricing />
           
           {/* 8. Этапы: Прозрачность процесса */}
           <DetailedStages />
           
           {/* 9. Доп. услуги: Cross-sell */}
           <AdditionalServices />
           
           {/* 10. Польза: Образовательный блок */}
           <SeoBenefits />
           
           {/* 11. Опыт: Показ нишевой экспертизы */}
           <ExperienceBlock />
           
           {/* 12. Награды: Авторитет */}
           <AwardsBlock />
           
           {/* 14. Команда: Личный бренд и доверие к людям */}
           <Team />

           {/* 14.5 География: Перелинковка */}
           <GeoLinks />

           {/* 14.6 CMS: Перелинковка */}
           <CmsLinks />
           
           {/* 15. FAQ: Закрытие возражений */}
           <FAQ />
           
           {/* 16. Финальный CTA: Форма захвата */}
           <DiscussProject />
        </main>

        <Footer />
        <RequestModal />
      </div>
    </ModalProvider>
  );
}

export default App;
