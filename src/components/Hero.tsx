import React from 'react';
import Slider from 'react-slick';

interface HeroProps {
  contactFormEmbed: string;
}

const Hero: React.FC<HeroProps> = ({ contactFormEmbed }) => {
  const carouselImages = [
    {
      url: 'https://res.cloudinary.com/dwe4p22ut/image/upload/v1747785381/Blue-Best_Hero-Desktop_iib4qo.png',
      title: 'Limited Time Offer on Stratton & Briggs Generators',
      subTitle: 'Get Up to 30% Off + Free Installation on Select Models',
    },
    {
      url: 'https://res.cloudinary.com/dwe4p22ut/image/upload/v1747786332/banner_2_y5trhj.webp',
      title: 'Whole Home Backup Power Solutions',
      subTitle: 'Never Lose Power Again with Our Premium Generators',
    },
    {
      url: 'https://res.cloudinary.com/dwe4p22ut/image/upload/v1747785381/Blue-Best_Hero-Desktop_iib4qo.png',
      title: 'Professional Generator Installation',
      subTitle: 'Expert Installation by Certified Technicians',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <section className="pt-32 md:pt-24 relative">
      <div className="w-full relative">
        <Slider {...sliderSettings}>
          {carouselImages.map((slide, index) => (
            <div key={index} className="relative">
              <div className="relative h-[70vh] md:h-[80vh] w-full">
                <div
                  className="absolute inset-0 bg-center bg-cover"
                  style={{ backgroundImage: `url(${slide.url})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
                </div>
                
                <div className="container mx-auto px-4 h-full relative">
                  <div className="flex flex-col md:flex-row h-full items-center justify-center md:justify-between py-10">
                    {/* Left side - Text content */}
                    <div className="text-white z-10 max-w-md md:max-w-lg md:mr-8 mb-10 md:mb-0 fade-in">
                      <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                      <p className="text-lg md:text-xl mb-6">{slide.subTitle}</p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a 
                          href="#generators" 
                          className="px-6 py-3 bg-orange-primary text-white font-semibold rounded-lg shadow hover:bg-orange-dark transition duration-300 text-center cta-button"
                        >
                          Learn More
                        </a>
                        <a 
                          href="tel:+13852741575" 
                          className="px-6 py-3 bg-blue-primary text-white font-semibold rounded-lg shadow hover:bg-blue-dark transition duration-300 text-center cta-button"
                        >
                          Call Now
                        </a>
                      </div>
                    </div>
                    
                    {/* Right side - Contact form embed */}
                    <div className="z-10 w-full max-w-md bg-white rounded-lg shadow-lg p-6 fade-in">
                      <h3 className="text-xl font-semibold text-blue-primary mb-4">Get Your Free Quote Today</h3>
                      <div dangerouslySetInnerHTML={{ __html: contactFormEmbed }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;