import React from 'react';

import { MultiColumnSection } from '../components/MultiColumnSection';
import AboutSection from '../components/AboutSection';
import HomeGenerator from '../components/HomeGenerator';
import FeaturesSection from '../components/FeaturesSection';
import ServicesSection from '../components/ServicesSection';
import SpecialsSection from '../components/SpecialsSection';
import TestimonialsSectionPlumbing from '../components/TestimonialsSectionPlumbing';
import CertificationsSection from '../components/CertificationsSection';

import ProcessSection from '../components/ProcessSection';

import { Helmet } from 'react-helmet';
import HeroWH from '../components/water_heater/HeroWH';
import AvoidHeadachesWH from '../components/water_heater/AvoidHeadachesWH';
import { MultiColumnSectionWH } from '../components/water_heater/MultiColumnSectionWH';
import SecondaryHeroWH from '../components/water_heater/SecondaryHeroWH';
import ProcessSectionWH from '../components/water_heater/ProcessSectionWH';

interface LandingPageProps {
  contactFormEmbed: string;
}

const LandingPage2: React.FC<LandingPageProps> = ({ contactFormEmbed }) => {
  return (
    <>
       <Helmet>
         <script>
          {`
              window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-396446063');
          `}
         </script>
         <script>
          {`
          gtag('config', 'AW-396446063/XYpNCK6y8eIaEO-Shb0B', {
    'phone_conversion_number': '(385) 200-2604'
  });
          `}
         </script>
      </Helmet>  
      <HeroWH contactFormEmbed={contactFormEmbed} />
      <div className="md:mt-[-50px]  relative z-100">
      <MultiColumnSectionWH />
      </div>
      <AvoidHeadachesWH contactFormEmbed={contactFormEmbed} />
      
      <SecondaryHeroWH />
      
      <div className="bg-[url('https://res.cloudinary.com/dwe4p22ut/image/upload/v1747858949/Orange-Tones-BG-1_kf4kpy.webp')] bg-cover bg-center bg-no-repeat">
        <FeaturesSection />
      </div>
      
      <div className="bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%),url('https://res.cloudinary.com/dwe4p22ut/image/upload/v1747853406/toparticlewrapperbg_wyeckj.webp')] bg-cover bg-center bg-no-repeat">
        <TestimonialsSectionPlumbing />
        <ProcessSectionWH />
        <CertificationsSection />
      </div>
    </>
  );
};

export default LandingPage2;