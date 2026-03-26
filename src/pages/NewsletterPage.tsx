import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Offer config
import {
  NEWSLETTER_OFFERS,
  DEFAULT_SERVICE,
  type ServiceKey,
} from '../config/newsletterOffers';

// Newsletter-specific offer section components
import NewsletterHero from '../components/newsletter/NewsletterHero';
import { NewsletterMultiColumn } from '../components/newsletter/NewsletterMultiColumn';
import NewsletterSecondaryHero from '../components/newsletter/NewsletterSecondaryHero';

// Shared non-offer sections
import FeaturesSection from '../components/FeaturesSection';
import CertificationsSection from '../components/CertificationsSection';

// Service-specific: AvoidHeadaches
import AvoidHeadaches from '../components/AvoidHeadaches';
import AvoidHeadachesWH from '../components/water_heater/AvoidHeadachesWH';
import AvoidHeadachesTU from '../components/tu/AvoidHeadachesTU';
import AvoidHeadachesFurnace from '../components/furnace/AvoidHeadachesFurnace';

// Service-specific: Testimonials
import TestimonialsSection from '../components/TestimonialsSection';
import TestimonialsSectionPlumbing from '../components/TestimonialsSectionPlumbing';
import TestimonialsSectionFurnace from '../components/furnace/TestimonialsSectionFurnace';

// Service-specific: Process
import ProcessSection from '../components/ProcessSection';
import ProcessSectionWH from '../components/water_heater/ProcessSectionWH';
import ProcessSectionTU from '../components/tu/ProcessSectionTU';
import ProcessSectionFurnace from '../components/furnace/ProcessSectionFurnace';

const VALID_SERVICES: ServiceKey[] = ['hvac', 'water-heater', 'hvac-tune-up', 'furnace-service'];

const NewsletterPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const rawService = searchParams.get('service') ?? DEFAULT_SERVICE;
  const service: ServiceKey = VALID_SERVICES.includes(rawService as ServiceKey)
    ? (rawService as ServiceKey)
    : DEFAULT_SERVICE;

  const config = NEWSLETTER_OFFERS[service];
  const formEmbed = `<div class="elfsight-app-${config.formEmbedId}"></div>`;

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

      {/* ── OFFER SECTION 1: Hero ── */}
      <NewsletterHero offer={config.hero} contactFormEmbed={formEmbed} />

      {/* ── OFFER SECTION 2: MultiColumn offer cards ── */}
      <div className="md:mt-[-50px] relative z-100">
        <NewsletterMultiColumn offer={config.multiColumn} />
      </div>

      {/* ── Service-specific: Avoid Headaches + form ── */}
      {service === 'hvac' && <AvoidHeadaches contactFormEmbed={formEmbed} />}
      {service === 'water-heater' && <AvoidHeadachesWH contactFormEmbed={formEmbed} />}
      {service === 'hvac-tune-up' && <AvoidHeadachesTU contactFormEmbed={formEmbed} />}
      {service === 'furnace-service' && <AvoidHeadachesFurnace contactFormEmbed={formEmbed} />}

      {/* ── OFFER SECTION 3: Secondary hero banner ── */}
      <NewsletterSecondaryHero offer={config.secondaryHero} />

      {/* ── Shared: Features ── */}
      <div className="bg-[url('https://res.cloudinary.com/dwe4p22ut/image/upload/v1747858949/Orange-Tones-BG-1_kf4kpy.webp')] bg-cover bg-center bg-no-repeat">
        <FeaturesSection />
      </div>

      {/* ── Service-specific: Testimonials + Process + Certifications ── */}
      <div className="bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%),url('https://res.cloudinary.com/dwe4p22ut/image/upload/v1747853406/toparticlewrapperbg_wyeckj.webp')] bg-cover bg-center bg-no-repeat">
        {service === 'hvac' && <TestimonialsSection />}
        {service === 'water-heater' && <TestimonialsSectionPlumbing />}
        {service === 'hvac-tune-up' && <TestimonialsSection />}
        {service === 'furnace-service' && <TestimonialsSectionFurnace />}

        {service === 'hvac' && <ProcessSection />}
        {service === 'water-heater' && <ProcessSectionWH />}
        {service === 'hvac-tune-up' && <ProcessSectionTU />}
        {service === 'furnace-service' && <ProcessSectionFurnace />}

        <CertificationsSection />
      </div>
    </>
  );
};

export default NewsletterPage;
