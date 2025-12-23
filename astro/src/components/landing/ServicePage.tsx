'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ModalProvider } from './Modal';
import RequestModal from './RequestModal';
import Hero from './Hero';
import WhyUs from './WhyUs';
import ExperienceBlock from './ExperienceBlock';
import ComparisonBlock from './ComparisonBlock';
import WheelOfBalance from './WheelOfBalance';
import MethodologyComparison from './MethodologyComparison';
import FullFunnelBlock from './FullFunnelBlock';
import Quiz from './Quiz';
import ServicesIncluded from './ServicesIncluded';
import GrowthBlock from './GrowthBlock';
import ReviewsBlock from './ReviewsBlock';
import UrgencyBlock from './UrgencyBlock';
import SeoCalculator from './SeoCalculator';
import Pricing from './Pricing';
import DetailedStages from './DetailedStages';
import LeadMagnetBlock from './LeadMagnetBlock';
import SeoBenefits from './SeoBenefits';
import AwardsBlock from './AwardsBlock';
import MediaBlock from './MediaBlock';
import Team from './Team';
import YoutubeBlock from './YoutubeBlock';
import FAQ from './FAQ';
import DiscussProject from './DiscussProject';
import GeoLinks from './GeoLinks';
import CmsLinks from './CmsLinks';
import SeoSpoiler from './SeoSpoiler';
import AdditionalServices from './AdditionalServices';
import CasesResults from './CasesResults';
import type { ServicePageData } from '../../types';
import { FAQS } from './constants';

interface Props {
  data: ServicePageData;
  pathname: string;
}

const ServicePage: React.FC<Props> = ({ data, pathname }) => {
  if (!data) return null;

  // Determine Hero Visual Type
  const heroType = data.methodology?.factors ? 'wheel' : 'slider';

  return (
    <ModalProvider>
      <div className="font-sans text-[#09090b] bg-white selection:bg-[#D4AF37] selection:text-white">
        <Header pathname={pathname} />
        
        <main>
           {/* 1. Блок захвата */}
           <Hero 
              data={data.hero} 
              heroType={heroType as any} 
              factors={data.methodology?.factors}
              breadcrumbs={data.breadcrumbs}
              caseIds={data.caseIds}
           />

           {/* 2. Социальное доказательство №1 */}
           <CasesResults caseIds={data.caseIds} />

           {/* 3. Смысловой блок: Почему мы и опыт */}
           <WhyUs data={data.whyUs} />
           <ExperienceBlock />
           <ComparisonBlock />

           {/* 4. Экспертиза и Методология */}
           <WheelOfBalance data={data.methodology} />
           <MethodologyComparison data={data.comparison} />
           <FullFunnelBlock data={data.funnel} />
           
           {/* NEW: Мягкая вовлеченность через Квиз */}
           {data.showQuiz && <Quiz />}
           
           <ServicesIncluded data={data.servicesIncluded} />

           {/* 5. Твердый оффер (Аудит) */}
           <GrowthBlock />

           {/* 6. Социальное доказательство №2 */}
           <ReviewsBlock />

           {/* NEW: Создаем Urgency перед расчетами */}
           {data.showUrgency && <UrgencyBlock />}

           {/* 7. Коммерческий блок */}
           {data.showCalculator && <SeoCalculator />}
           <Pricing data={data.pricing} />
           <DetailedStages data={data.process} />

           {/* 8. Мягкая конверсия (Plan B) */}
           <LeadMagnetBlock data={data.leadMagnet} />

           {/* 9. Дожим и Авторитет */}
           <SeoBenefits data={data.seoBenefits} />
           <AwardsBlock />
           <MediaBlock />
           <Team />
           <YoutubeBlock />

           {/* 10. Закрытие */}
           <FAQ items={data.faq || []} />
           <DiscussProject />

           {/* 11. SEO-слой (В самый низ) */}
           <AdditionalServices />
           <GeoLinks />
           <CmsLinks />
           <SeoSpoiler data={data.seoText} />
        </main>

        <Footer />
        <RequestModal />
      </div>
    </ModalProvider>
  );
};

export default ServicePage;