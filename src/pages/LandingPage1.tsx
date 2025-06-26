import React from 'react';
import Hero from '../components/Hero';
import { MultiColumnSection } from '../components/MultiColumnSection';
import AboutSection from '../components/AboutSection';
import HomeGenerator from '../components/HomeGenerator';
import FeaturesSection from '../components/FeaturesSection';
import ServicesSection from '../components/ServicesSection';
import SpecialsSection from '../components/SpecialsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CertificationsSection from '../components/CertificationsSection';
import AvoidHeadaches from '../components/AvoidHeadaches';
import ProcessSection from '../components/ProcessSection';
import SecondaryHero from '../components/SecondaryHero';
import { Helmet } from 'react-helmet';

interface LandingPageProps {
  contactFormEmbed: string;
}

const LandingPage: React.FC<LandingPageProps> = ({ contactFormEmbed }) => {
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
      <Hero contactFormEmbed={contactFormEmbed} />
      <div className="md:mt-[-50px]  relative z-100">
      <MultiColumnSection />
      </div>
      <AvoidHeadaches contactFormEmbed={contactFormEmbed} />
      
      <SecondaryHero />
      
      <div className="bg-[url('https://res.cloudinary.com/dwe4p22ut/image/upload/v1747858949/Orange-Tones-BG-1_kf4kpy.webp')] bg-cover bg-center bg-no-repeat">
        <FeaturesSection />
      </div>
      
      <div className="bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%),url('https://res.cloudinary.com/dwe4p22ut/image/upload/v1747853406/toparticlewrapperbg_wyeckj.webp')] bg-cover bg-center bg-no-repeat">
        <TestimonialsSection />
        <ProcessSection />
        <CertificationsSection />
      </div>
    </>
  );
};

export default LandingPage;