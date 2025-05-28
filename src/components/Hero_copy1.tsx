import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
interface HeroProps {
  contactFormEmbed: string;
}

const Hero_copy1: React.FC<HeroProps> = ({ contactFormEmbed }) => {
  const [isFormLoaded, setIsFormLoaded] = useState(false);
  const [formHeight, setFormHeight] = useState(0);
  const formRef = useRef<HTMLDivElement>(null);

  const carouselImages = [
    {
      url: 'https://res.cloudinary.com/dwe4p22ut/image/upload/v1748381588/hero-banner-2_o7dlss.jpg',
      title: '0% Financing for 12 Months on New HVAC Systems',
      subTitle: 'Get your free estimate by filling up the form.',
      subTitle2: 'A limited-time offer from Salt Lake City\'s most trusted HVAC & plumbing experts.'
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    adaptiveHeight: false, // Changed to false for consistent height
  };

  // Monitor form loading
  useEffect(() => {
    if (!formRef.current) return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          // Check if form elements are added
          const hasFormElements = formRef.current?.querySelector('form, iframe, input, textarea, button');
          if (hasFormElements && !isFormLoaded) {
            setIsFormLoaded(true);
            
            // Measure form height after a short delay to ensure rendering
            setTimeout(() => {
              if (formRef.current) {
                const height = formRef.current.scrollHeight;
                setFormHeight(height);
              }
            }, 100);
          }
        }
      });
    });

    observer.observe(formRef.current, {
      childList: true,
      subtree: true
    });

    // Cleanup
    return () => observer.disconnect();
  }, [isFormLoaded]);

  // Alternative: Use intersection observer to detect when form is visible
  useEffect(() => {
    if (!formRef.current) return;

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Form container is visible, check if content is loaded
            const checkFormContent = () => {
              const hasContent = entry.target.children.length > 0;
              if (hasContent && !isFormLoaded) {
                setIsFormLoaded(true);
                setTimeout(() => {
                  if (formRef.current) {
                    setFormHeight(formRef.current.scrollHeight);
                  }
                }, 100);
              }
            };
            
            checkFormContent();
            
            // Check again after a delay in case content loads slowly
            setTimeout(checkFormContent, 500);
            setTimeout(checkFormContent, 1000);
          }
        });
      },
      { threshold: 0.1 }
    );

    intersectionObserver.observe(formRef.current);

    return () => intersectionObserver.disconnect();
  }, [isFormLoaded]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('Briggs_Generator');
    
    if (target) {
      const navbarOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="pt-[80px] md:pt-[150px] lg:pt-[130px] relative">
      <div className="w-full relative">
        <Slider {...sliderSettings}>
          {carouselImages.map((slide, index) => (
            <div key={index} className="">
              {/* Fixed height container with responsive heights */}
              <div className="h-[1100px] md:h-[800px] lg:h-[70vh] w-full relative">
                <div
                  className="absolute inset-0 bg-center bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.url})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
                </div>
                
                <div className=" container mx-auto px-4 h-full relative">
                  <div className="flex flex-col lg:flex-row h-full items-center justify-center md:justify-between py-10">
                    {/* Left side - Text content */}
                    <div className="text-white z-10 max-w-md md:max-w-xl md:mr-8 mb-10 md:mb-0 fade-in lg:flex-1">
                      <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                      
                      <p className="text-base md:text-xl mb-6">
                       {slide.subTitle2}
                      </p>
                      <p className="font-bold text-base md:text-xl mb-3">{slide.subTitle}</p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a 
                          onClick={handleClick}
                          className="px-11 py-3.5 text-lg bg-gradient-to-b from-orange-600 to-orange-500 text-white text-center ease-out whitespace-pre-wrap rounded-full uppercase font-semibold font-['Kanit'] leading-relaxed shadow-[0_0.2em_0_#003572] transition duration-300 cursor-pointer"
                        >
                          Learn More
                        </a>
                          <a
                                          href="tel:+13852741575"
                                          className="hidden md:flex items-center px-11 py-3.5 text-lg bg-gradient-to-b from-orange-600 to-orange-500 text-white text-center ease-out whitespace-pre-wrap rounded-full uppercase font-semibold font-['Kanit'] leading-relaxed shadow-[0_0.2em_0_#003572] transition duration-300"
                                        >
                                          <Phone size={18} className="mr-2" />
                                          (385) 274-1575
                                        </a>
                      </div>
                    </div>
                    
                    {/* Right side - Contact form embed with skeleton loader */}
                    <div className="z-10 w-full max-w-md lg:flex-1 bg-transparent rounded-lg fade-in">
                      <div 
                        ref={formRef}
                        className="relative"
                        style={{
    minHeight: '500px', // Increase this fixed value
    height: formHeight > 0 ? `${formHeight}px` : '500px', // Use height instead of minHeight
  }}
                      >
                        {/* Skeleton loader */}
                        {!isFormLoaded && (
                          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-pulse">
                            <div className="space-y-4">
                              <div className="h-6 bg-white/20 rounded w-3/4"></div>
                              <div className="h-10 bg-white/20 rounded"></div>
                              <div className="h-10 bg-white/20 rounded"></div>
                              <div className="h-10 bg-white/20 rounded"></div>
                              <div className="h-24 bg-white/20 rounded"></div>
                              <div className="h-12 bg-white/20 rounded w-1/2"></div>
                            </div>
                          </div>
                        )}
                        
                        {/* Actual form */}
                        {/* <div 
                          className={`transition-opacity duration-300 ${isFormLoaded ? 'opacity-100' : 'opacity-0'}`}
                          dangerouslySetInnerHTML={{ __html: contactFormEmbed }} 
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.8s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero_copy1;