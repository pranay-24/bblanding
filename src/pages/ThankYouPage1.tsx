import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Regular service page components (non-newsletter background)
import Hero from '../components/Hero';
import AvoidHeadaches from '../components/AvoidHeadaches';
import SecondaryHero from '../components/SecondaryHero';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ProcessSection from '../components/ProcessSection';
import CertificationsSection from '../components/CertificationsSection';

// Newsletter offer section components
import NewsletterHero from '../components/newsletter/NewsletterHero';
import { NewsletterMultiColumn } from '../components/newsletter/NewsletterMultiColumn';
import NewsletterSecondaryHero from '../components/newsletter/NewsletterSecondaryHero';

// Service-specific components used in the newsletter background
import AvoidHeadachesWH from '../components/water_heater/AvoidHeadachesWH';
import AvoidHeadachesFurnace from '../components/furnace/AvoidHeadachesFurnace';
import AvoidHeadachesPlumbing from '../components/AvoidHeadachesPlumbing';
import TestimonialsSectionPlumbing from '../components/TestimonialsSectionPlumbing';
import TestimonialsSectionFurnace from '../components/furnace/TestimonialsSectionFurnace';
import ProcessSectionWH from '../components/water_heater/ProcessSectionWH';
import ProcessSectionFurnace from '../components/furnace/ProcessSectionFurnace';
import ProcessSectionPlumbing from '../components/ProcessSectionPlumbing';

// Newsletter offer config
import { NEWSLETTER_OFFERS, type ServiceKey } from '../config/newsletterOffers';

// Maps newsletter form_id values → service key + where to send user on close
const NEWSLETTER_FORM_MAP: Record<string, { service: ServiceKey; closeUrl: string }> = {
  'nl-hvac':     { service: 'hvac',            closeUrl: '/newsletter?service=hvac' },
  'nl-wh':       { service: 'water-heater',    closeUrl: '/newsletter?service=water-heater' },
  'nl-furnace':  { service: 'furnace-service', closeUrl: '/newsletter?service=furnace-service' },
  'nl-plumbing': { service: 'plumbing',        closeUrl: '/newsletter?service=plumbing' },
  // 'nl-tu': add this entry once the HVAC Tune-up newsletter form is created in Elfsight
  //          redirect URL in Elfsight should be: /thank-you?form_id=nl-tu
};

const ThankYouPage: React.FC = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const formId: string | null = params.get('form_id');

  const newsletterEntry = formId ? NEWSLETTER_FORM_MAP[formId] : undefined;
  const isNewsletter = Boolean(newsletterEntry);

  const handleClose = () => {
    // Newsletter form submissions → back to the newsletter page for that service
    if (newsletterEntry) {
      window.location.href = newsletterEntry.closeUrl;
      return;
    }
    // Regular service page submissions
    if (formId === 'hvac')     { window.location.href = '/hvac';           return; }
    if (formId === 'plumbing') { window.location.href = '/plumbing';       return; }
    if (formId === 'wh')       { window.location.href = '/water-heater';   return; }
    if (formId === 'tu')       { window.location.href = '/hvac-tune-up';   return; }
    if (formId === 'furnace')  { window.location.href = '/furnace-service'; return; }
    window.location.href = '/hvac';
  };

  const ThankYouOverlay: React.FC = () => (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 p-8 md:p-12 text-center relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors duration-200"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* Main Headline */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-primary mb-6 leading-tight">
          Thank You for Reaching Out to Blue Best!
        </h1>

        {/* Message */}
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
          We appreciate the opportunity to serve you and look forward to helping you with your{' '}
          <span className="text-blue-primary font-semibold">HVAC, plumbing, or generator needs</span>.
        </p>

        {/* Urgent Contact Section */}
        <div className="bg-orange-50 border-l-4 border-orange-primary rounded-lg p-6 mb-8">
          <p className="text-gray-700 text-lg mb-4">
            If your issue is <span className="font-semibold text-orange-primary">urgent</span> or you'd like to speak with someone right away, please don't wait — call us now at:
          </p>
          <a
            href="tel:+13852002604"
            className="inline-block px-8 py-4 text-base bg-gradient-to-b from-orange-600 to-orange-500 text-white font-bold rounded-full shadow-lg hover:from-orange-700 hover:to-orange-600 transition duration-300 transform hover:scale-105"
          >
            📞 (385) 200-2604
          </a>
        </div>

        <button
          onClick={handleClose}
          className="text-gray-500 hover:text-gray-700 text-sm underline mt-4"
        >
          Continue browsing our services
        </button>
      </div>
    </div>
  );

  // Background components don't need a real form embed — the background is non-interactive
  const dummyEmbed = '';

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
        <script>
          {`gtag('event', 'conversion', {'send_to': 'AW-396446063/7BpGCMTNsd8aEO-Shb0B'});`}
        </script>
      </Helmet>

      <ThankYouOverlay />

      {/* ── Newsletter background — mirrors /newsletter?service=<x> ── */}
      {isNewsletter && newsletterEntry && (() => {
        const { service } = newsletterEntry;
        const cfg = NEWSLETTER_OFFERS[service];
        return (
          <div className="opacity-30 pointer-events-none">
            <NewsletterHero offer={cfg.hero} contactFormEmbed={dummyEmbed} />
            <div className="md:mt-[-50px] relative z-100">
              <NewsletterMultiColumn offer={cfg.multiColumn} />
            </div>
            {service === 'hvac'            && <AvoidHeadaches contactFormEmbed={dummyEmbed} />}
            {service === 'water-heater'    && <AvoidHeadachesWH contactFormEmbed={dummyEmbed} />}
            {service === 'furnace-service' && <AvoidHeadachesFurnace contactFormEmbed={dummyEmbed} />}
            {service === 'plumbing'        && <AvoidHeadachesPlumbing contactFormEmbed={dummyEmbed} />}
            <NewsletterSecondaryHero offer={cfg.secondaryHero} />
            <div className="bg-[url('/images/Orange-Tones-BG-1_kf4kpy.webp')] bg-cover bg-center bg-no-repeat">
              <FeaturesSection />
            </div>
            <div className="bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%),url('/images/toparticlewrapperbg_wyeckj.webp')] bg-cover bg-center bg-no-repeat">
              {service === 'hvac'            && <TestimonialsSection />}
              {service === 'water-heater'    && <TestimonialsSectionPlumbing />}
              {service === 'furnace-service' && <TestimonialsSectionFurnace />}
              {service === 'plumbing'        && <TestimonialsSectionPlumbing />}
              {service === 'hvac'            && <ProcessSection />}
              {service === 'water-heater'    && <ProcessSectionWH />}
              {service === 'furnace-service' && <ProcessSectionFurnace />}
              {service === 'plumbing'        && <ProcessSectionPlumbing />}
              <CertificationsSection />
            </div>
          </div>
        );
      })()}

      {/* ── Regular service page background (non-newsletter submissions) ── */}
      {!isNewsletter && (
        <div className="opacity-30 pointer-events-none">
          <Hero contactFormEmbed={dummyEmbed} />
          <AvoidHeadaches contactFormEmbed={dummyEmbed} />
          <SecondaryHero />
          <div className="bg-[url('/images/Orange-Tones-BG-1_kf4kpy.webp')] bg-cover bg-center bg-no-repeat">
            <FeaturesSection />
          </div>
          <div className="bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%),url('/images/toparticlewrapperbg_wyeckj.webp')] bg-cover bg-center bg-no-repeat">
            <TestimonialsSection />
            <ProcessSection />
            <CertificationsSection />
          </div>
        </div>
      )}
    </>
  );
};

export default ThankYouPage;
