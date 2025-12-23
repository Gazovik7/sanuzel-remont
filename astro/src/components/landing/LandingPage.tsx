
'use client';

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
import type { ServicePageData } from '../../types';

function LandingPage({ pathname, data }: { pathname?: string, data?: ServicePageData }) {
  return (
    <ModalProvider>
      <div className="font-sans text-[#09090b] bg-white selection:bg-[#D4AF37] selection:text-white">
        <Header pathname={pathname} />
        
        <main>
           {/* 1. Блок захвата */}
           <Hero 
              data={data?.hero} 
              heroType={data?.methodology?.factors ? 'wheel' : 'slider'} 
              factors={data?.methodology?.factors}
              breadcrumbs={data?.breadcrumbs}
              caseIds={data?.caseIds}
           />

           {/* 2. Социальное доказательство №1 */}
           <CasesResults caseIds={data?.caseIds} />

           {/* 3. Смысловой блок */}
           <WhyUs data={data?.whyUs} />
           <ExperienceBlock />
           <ComparisonBlock />

           {/* 4. Экспертиза и Методология */}
           <WheelOfBalance data={data?.methodology} />
           <MethodologyComparison data={data?.comparison} />
           <FullFunnelBlock data={data?.funnel} />
           
           {(!data || data.showQuiz) && <Quiz />}
           
           <ServicesIncluded data={data?.servicesIncluded} />

           {/* 5. Твердый оффер (Аудит) */}
           <GrowthBlock />

           {/* 6. Социальное доказательство №2 */}
           <ReviewsBlock />

           {/* NEW: Создаем Urgency перед расчетами */}
           {(!data || data.showUrgency) && <UrgencyBlock />}

           {/* 7. Коммерческий блок */}
           {(!data || data.showCalculator) && <SeoCalculator />}
           <Pricing data={data?.pricing} />
           <DetailedStages data={data?.process} />

           {/* 8. Мягкая конверсия (Plan B) */}
           <LeadMagnetBlock data={data?.leadMagnet} />

           {/* 9. Дожим и Авторитет */}
           <SeoBenefits data={data?.seoBenefits} />
           <AwardsBlock />
           <MediaBlock />
           <Team />
           <YoutubeBlock />

           {/* 10. Закрытие */}
           <FAQ items={data?.faq || FAQS} />
           <DiscussProject />

           {/* 11. SEO-слой */}
           <AdditionalServices />
           <GeoLinks />
           <CmsLinks />
           <SeoSpoiler data={data?.seoText} />
        </main>

        <Footer />
        <RequestModal />
      </div>
    </ModalProvider>
  );
}

export default LandingPage;
