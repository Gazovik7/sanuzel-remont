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

import ServiceModernPage from './ServiceModernPage';

interface Props {
  data: ServicePageData;
  pathname: string;
}

const ServicePage: React.FC<Props> = ({ data, pathname }) => {
  if (!data) return null;

  // Если это современный шаблон (GEO, ADS, DEV, AVITO)
  if (['geo', 'ads', 'dev', 'avito'].includes(data.template)) {
    return <ServiceModernPage data={data} pathname={pathname} />;
  }

  const renderContent = () => {
    // 1. ШАБЛОН SEO-АУДИТА (SEO-AUDIT)
    if (data.template === 'seo-audit') {
      return (
        <>
           <Hero 
              data={data.hero} 
              heroType="wheel" 
              factors={data.methodology?.factors}
              breadcrumbs={data.breadcrumbs}
           />
           <DetailedStages data={data.process} />
           <WhyUs data={data.whyUs} />
           <MethodologyComparison data={data.comparison} />
           <ReviewsBlock />
           <LeadMagnetBlock data={data.leadMagnet} />
           <Pricing data={data.pricing} />
           <FAQ items={data.faq || []} />
           <DiscussProject />
           <SeoSpoiler data={data.seoText} />
        </>
      );
    }

    // 4. ШАБЛОН SEO-ПРОДВИЖЕНИЯ (DEFAULT)
    return (
      <>
         <Hero 
            data={data.hero} 
            heroType={data.methodology?.factors ? 'wheel' : 'slider'} 
            factors={data.methodology?.factors}
            breadcrumbs={data.breadcrumbs}
            caseIds={data.caseIds}
         />
         <CasesResults caseIds={data.caseIds} />
         <WhyUs data={data.whyUs} />
         <ExperienceBlock />
         <ComparisonBlock />
         <WheelOfBalance data={data.methodology} />
         <MethodologyComparison data={data.comparison} />
         <FullFunnelBlock data={data.funnel} />
         {data.showQuiz && <Quiz />}
         <ServicesIncluded data={data.servicesIncluded} />
         <GrowthBlock />
         {data.showUrgency && <UrgencyBlock />}
         {data.showCalculator && <SeoCalculator />}
         <Pricing data={data.pricing} />
         <DetailedStages data={data.process} />
         <LeadMagnetBlock data={data.leadMagnet} />
         <SeoBenefits data={data.seoBenefits} />
         <AwardsBlock />
         <MediaBlock />
         <Team />
         <YoutubeBlock />
         <FAQ items={data.faq || []} />
         <DiscussProject />
         <AdditionalServices />
         <GeoLinks />
         <CmsLinks />
         <SeoSpoiler data={data.seoText} />
      </>
    );
  };

  return (
    <ModalProvider>
      <div className="font-sans text-[#09090b] bg-white selection:bg-[#D4AF37] selection:text-white">
        <Header pathname={pathname} />
        <main>{renderContent()}</main>
        <Footer />
        <RequestModal />
      </div>
    </ModalProvider>
  );
};

export default ServicePage;