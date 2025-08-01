import React , { useEffect }from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CertificationsSection from '../components/CertificationsSection';
import AvoidHeadaches from '../components/AvoidHeadaches';
import ProcessSection from '../components/ProcessSection';
import SecondaryHero from '../components/SecondaryHero';
import { Helmet } from 'react-helmet';

// Declare gtag for TypeScript


const ThankYouPage: React.FC = () => {
  // Extract formId from URL parameters for tracking/analytics
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const formId: string | null = params.get('form_id');; // e.g. "A", "hero-form", "avoid-headaches", etc.
  
 const handleClose = () => {
    // Check if form_id exists and redirect accordingly
    if (formId === 'hvac') {
      window.location.href = '/hvac';
    } else if (formId === 'plumbing') {
      window.location.href = '/plumbing';
    } else if (formId === 'wh') {
      window.location.href = '/water-heater';
    }else if (formId === 'tu') {
      window.location.href = '/havc-tune-up';
    }else {
      // Default redirect if no form_id or unrecognized form_id
      window.location.href = '/hvac';
    }
  };


  // Future use cases for formId:
  // - Custom thank you messages per form
  // - Different contact info based on form type
  // - Analytics tracking
  // - Conditional content display
  // - A/B testing variations

  // Function to handle closing the overlay


  // Thank you content overlay
  const ThankYouOverlay: React.FC = () => (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
      onClick={handleClose} // Click outside to close
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 p-8 md:p-12 text-center relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        
        {/* Close Button (X icon) */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors duration-200"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* Success Icon */}
        {/* <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div> */}

        {/* Main Headline */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-primary mb-6 leading-tight">
          Thank You for Reaching Out to Blue Best!
        </h1>

        {/* Message */}
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
          We appreciate the opportunity to serve you and look forward to helping you with your 
          <span className="text-blue-primary font-semibold"> HVAC, plumbing, or generator needs</span>.
        </p>

        {/* Debug/Development only - remove in production */}
        {/* {formId && <p className="text-sm text-gray-500 mb-4">Form ID: {formId}</p>} */}

        {/* Urgent Contact Section */}
        <div className="bg-orange-50 border-l-4 border-orange-primary rounded-lg p-6 mb-8">
          <p className="text-gray-700 text-lg mb-4">
            If your issue is <span className="font-semibold text-orange-primary">urgent</span> or you'd like to speak with someone right away, please don't wait — call us now at:
          </p>
          
          {/* Phone Button */}
          <a 
            href="tel:+13852002604"
            className="inline-block px-8 py-4 text-base bg-gradient-to-b from-orange-600 to-orange-500 text-white font-bold rounded-full shadow-lg hover:from-orange-700 hover:to-orange-600 transition duration-300 transform hover:scale-105"
          >
            📞 (385) 200-2604
          </a>
        </div>

        {/* Close button - optional */}
        <button 
          onClick={handleClose}
          className="text-gray-500 hover:text-gray-700 text-sm underline mt-4"
        >
          Continue browsing our services
        </button>
        
      </div>
    </div>
  );

  const contactFormEmbed: string = `<div class="elfsight-app-da4ddf7e-f9e6-4e90-8c35-263d1c15f25d" data-elfsight-app-lazy></div>`;

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
    {`
     gtag('event', 'conversion', {'send_to': 'AW-396446063/7BpGCMTNsd8aEO-Shb0B'});
    `}
  </script>
</Helmet>
      {/* Thank You Overlay */}
      <ThankYouOverlay />
      
     
      
      {/* Same Landing Page Content (dimmed in background) */}
      <div className="opacity-30">
        <Hero contactFormEmbed={contactFormEmbed} />
        
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
      </div>
    </>
  );
};

export default ThankYouPage;