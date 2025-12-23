import React from 'react';
import Header from './Header';
import Hero from './Hero';
import ServicesIncluded from './ServicesIncluded';
import WhyUs from './WhyUs';
import ReviewsBlock from './ReviewsBlock';
import CasesResults from './CasesResults';
import LeadMagnetBlock from './LeadMagnetBlock';
import Pricing from './Pricing';
import SeoCalculator from './SeoCalculator';
import DiscussProject from './DiscussProject';
import DetailedStages from './DetailedStages';
import AdditionalServices from './AdditionalServices';
import SeoBenefits from './SeoBenefits';
import ExperienceBlock from './ExperienceBlock';
import AwardsBlock from './AwardsBlock';
import MediaBlock from './MediaBlock';
import Team from './Team';
import FAQ from './FAQ';
import Footer from './Footer';
import { ModalProvider } from './Modal';
import RequestModal from './RequestModal';
import GrowthBlock from './GrowthBlock';
import WheelOfBalance from './WheelOfBalance';
import MethodologyComparison from './MethodologyComparison';
import FullFunnelBlock from './FullFunnelBlock';
import GeoLinks from './GeoLinks';
import CmsLinks from './CmsLinks';
import SeoSpoiler from './SeoSpoiler';
import YoutubeBlock from './YoutubeBlock';
import ComparisonBlock from './ComparisonBlock';
import UrgencyBlock from './UrgencyBlock';
import Quiz from './Quiz';
import { SEO_CONTENT, FAQS } from './constants';

function LandingPage({ pathname }: { pathname?: string }) {
  return (
    <ModalProvider>
      <div className="font-sans text-[#09090b] bg-white selection:bg-[#D4AF37] selection:text-white">
        <Header pathname={pathname} />
        
        <main>
           {/* 1. Блок захвата */}
           <Hero />

           {/* 2. Социальное доказательство №1 */}
           <CasesResults />

           {/* 3. Смысловой блок: Почему мы и опыт */}
           <WhyUs />
           <ExperienceBlock />
           <ComparisonBlock />

           {/* 4. Экспертиза и Методология */}
           <WheelOfBalance />
           <MethodologyComparison />
           <FullFunnelBlock />
           
           {/* NEW: Мягкая вовлеченность через Квиз */}
           <Quiz />
           
           <ServicesIncluded />

           {/* 5. Твердый оффер (Аудит) */}
           <GrowthBlock />

           {/* 6. Социальное доказательство №2 */}
           <ReviewsBlock />

           {/* NEW: Создаем Urgency перед расчетами */}
           <UrgencyBlock />

           {/* 7. Коммерческий блок */}
           <SeoCalculator />
           <Pricing />
           <DetailedStages />

           {/* 8. Мягкая конверсия (Plan B) */}
           <LeadMagnetBlock />

           {/* 9. Дожим и Авторитет */}
           <SeoBenefits />
           <AwardsBlock />
           <MediaBlock />
           <Team />
           <YoutubeBlock />

           {/* 10. Закрытие */}
           <FAQ items={FAQS} />
           <DiscussProject />

           {/* 11. SEO-слой (В самый низ) */}
           <AdditionalServices />
           <GeoLinks />
           <CmsLinks />
           <SeoSpoiler {...SEO_CONTENT} />
        </main>

        <Footer />
        <RequestModal />
      </div>
    </ModalProvider>
  );
}

export default LandingPage;