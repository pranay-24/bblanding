import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { Menu, X, Phone, ChevronDown, Star } from 'lucide-react';
interface HeroProps {
  contactFormEmbed: string;
}

const Hero: React.FC<HeroProps> = ({ contactFormEmbed }) => {
  const [isFormLoaded, setIsFormLoaded] = useState(false);
  const [formHeight, setFormHeight] = useState(0);
  const formRef = useRef<HTMLDivElement>(null);

  const carouselImages = [
    {
      url: 'https://res.cloudinary.com/dwe4p22ut/image/upload/v1748381588/hero-banner-2_o7dlss.jpg',
      title1: 'Claim Up to $3,200 in Federal HVAC Credits',
      title2: 'Offer Ending on December 31',
      subTitle: '',
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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('hero_Section-bblanding');
    
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
    <section className="pt-[80px] md:pt-[150px] lg:pt-[150px] relative" id="">
      <div className="w-full relative">
        <Slider {...sliderSettings}>
          {carouselImages.map((slide, index) => (
            <div key={index} className="">
              {/* Fixed height container with responsive heights */}
              <div className="h-auto lg:h-[85vh] w-full relative">
                <div
                  className="absolute inset-0 bg-center bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.url})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
                </div>
                
                <div className=" lg:container mx-auto px-4 h-full relative">
                  <div className="flex flex-col lg:flex-row h-full items-center justify-center md:justify-between py-10">
                    {/* Left side - Text content */}
                    <div className="text-white z-10 max-w-[768px]  md:mr-8 mb-10 md:mb-0 fade-in lg:flex-1">
                      <div className="flex items-center space-x-2 mb-6">
                 <div className="flex items-center  h-full">
              <img 
             src="/google-g-logo.svg"
             alt="Column 1 Image 1"
             className="w-11 h-full object-contain"
           />
            </div>
                <div className="flex flex-col items-start">
              <div className="flex items-center space-x-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 fill-[#ffffed] text-[#ffffed]`} 
                  />
                ))}
              </div>
              <div className="flex flex-row space-x-3 justify-center items-center ">
                <span className="text-lg font-bold text-[#ffffed]">5.0 RATING</span>
                <span className="text-sm font-bold text-[#ffffed]">(2000+ Reviews)</span>
              </div>
            </div>

            </div>  


                      <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.title1}</h1>
                      <h3 className="text-xl md:text-2xl font-bold mb-4">{slide.title2}</h3>

                      <p className="text-base md:text-xl mb-6">
                       {slide.subTitle2}
                      </p>
                      <p className="font-bold text-base md:text-xl mb-3">{slide.subTitle}</p>
                      <div className="flex flex-col xl:flex-row gap-4 max-w-md lg:max-w-3xl">
                        <a 
                          onClick={handleClick}
                          className="px-11 py-3.5 text-base bg-gradient-to-b from-orange-600 to-orange-500 text-white text-center ease-out whitespace-pre-wrap rounded-full uppercase font-semibold font-['Kanit'] leading-relaxed shadow-[0_0.2em_0_#003572] transition duration-300 cursor-pointer"
                        >
                          GET YOUR FREE ESTIMATE
                        </a>
                        <a
                          href="tel:+13852002604"
                          className=" flex items-center justify-center px-11 py-3.5 text-base bg-blue-primary-dark text-white text-center ease-out whitespace-pre-wrap rounded-full uppercase font-semibold font-['Kanit'] leading-relaxed shadow-[0_0.2em_0_#f97316] transition duration-300"
                        >
                          <Phone size={18} className="mr-2" />
                          (385) 200-2604
                        </a>
                      </div>
                    </div>
                    
                    <div className="z-10 w-full max-w-md lg:flex-1 bg-transparent rounded-lg fade-in">
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* <MultiColumnSection/> */}
      </div>

      {/* Fixed: Moved styles to a separate component or use CSS modules */}
      <style>{`
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

export default Hero;

export function MultiColumnSection() {
  return (
    <div className="bg-white rounded-lg grid grid-cols-2 md:grid-cols-4  max-w-4xl mx-auto  py-6 ">
      {/* Column 1 - Two images side by side */}
      <div className="flex flex-col p-4 border-r border-gray-300 border-b md:border-b-0">
        <div className="mb-4 flex gap-5">
          <img 
            src="https://res.cloudinary.com/dwe4p22ut/image/upload/v1748383311/log-2_x9jcve.png"
            alt="Column 1 Image 1"
            className="w-24 h-16 object-contain"
          />
          <img 
            src="https://res.cloudinary.com/dwe4p22ut/image/upload/v1748383311/logo-1_hzxybc.png"
            alt="Column 1 Image 2"
            className="w-24 h-16 object-contain"
          />
        </div>
        <div className="text-blue-primary-dark text-md font-bold  text-center">
          3x Best-of-State Winner – Heat & Air
        </div>
      </div>

      {/* Column 2 - Single image */}
      <div className="flex flex-col p-4 border-b md:border-b-0 md:border-r border-gray-300">
        <div className="mb-4">
          <img 
            src="https://res.cloudinary.com/dwe4p22ut/image/upload/v1748383311/medal-logo-1_mr3xay.png"
            alt="Column 2"
            className="w-full h-16 object-contain"
          />
        </div>
        <div className="text-blue-primary-dark text-md font-bold  text-center">
          Best-of-State Winner – Plumbing
        </div>
      </div>

      {/* Column 3 - Single image */}
      <div className="flex flex-col p-4 border-r md:border-t-0 md:border-r border-gray-300">
        <div className="mb-4">
          <img 
            src="https://res.cloudinary.com/dwe4p22ut/image/upload/v1748383311/goggle_logo-1_alvocy.png"
            alt="Column 3"
            className="w-full h-16 object-contain"
          />
        </div>
        <div className="text-blue-primary-dark text-md font-bold  text-center">
          2,000+ 5-Star Google Reviews
        </div>
      </div>

      {/* Column 4 - Single image */}
      <div className="flex flex-col p-4  md:border-t-0">
        <div className="mb-4">
          <img 
            src="https://res.cloudinary.com/dwe4p22ut/image/upload/v1748383311/lennox_logo-1_wlpewc.png"
            alt="Column 4"
            className="w-full h-16 object-contain"
          />
        </div>
        <div className="text-blue-primary-dark text-md font-bold  text-center">
          Lennox Premier Certified Dealer
        </div>
      </div>
    </div>
  );
}