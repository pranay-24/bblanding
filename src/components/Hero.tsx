import React from 'react';
import Slider from 'react-slick';

interface HeroProps {
  contactFormEmbed: string;
}

const Hero: React.FC<HeroProps> = ({ contactFormEmbed }) => {
  const carouselImages = [
    {
      url: 'https://res.cloudinary.com/dwe4p22ut/image/upload/v1747853155/Blue-Best.06_1200px_b8mkxo.jpg',
      title: 'Tired of Power Outages Turning Your Home into a Nightmare?',
      subTitle: 'Spoiled food. Interrupted work. Sleepless nights',
      subTitle2: 'Losing power isn\'t just inconvenient - it\'s costly and disruptive.'
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
    arrows: false,
    adaptiveHeight: true,
  };

 const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const target = document.getElementById('Briggs_Generator');
  
  if (target) {
    const navbarOffset = 90; // Adjust based on your navbar height
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

  return (
    <section className="pt-20 md:pt-[150px] lg:pt-[130px] relative" id="hero_Section-bblanding">
      <div className="w-full relative">
        <Slider {...sliderSettings}>
          {carouselImages.map((slide, index) => (
            <div key={index} className="relative">
              <div className=" md:h-[70vh] w-full">
                <div
                  className="absolute inset-0 bg-center bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.url})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
                </div>
                
                <div className="container mx-auto px-4 h-full relative">
                  <div className="flex flex-col lg:flex-row h-full items-center justify-center md:justify-between py-10">
                    {/* Left side - Text content */}
                    <div className="text-white z-10 max-w-md md:max-w-xl md:mr-8 mb-10 md:mb-0 fade-in">
                      <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                      <p className="font-bold text-lg md:text-xl mb-6">Spoiled food. Interrupted work. Sleepless nights</p>
                      <p className="text-lg md:text-xl mb-6">Losing power isn't just inconvenient - it's <span className="font-bold">costly</span> and <span className="font-bold">disruptive.</span></p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a 
                          
                            onClick={handleClick}
                          className="px-11 py-3.5 text-lg bg-gradient-to-b from-orange-600 to-orange-500 text-white text-center ease-out whitespace-pre-wrap rounded-full uppercase font-semibold font-['Kanit'] leading-relaxed shadow-[0_0.2em_0_#003572] transition duration-300"
                        >
                          Learn More
                        </a>
                        {/* <a 
                          href="tel:+13852741575" 
                          className="px-6 py-3 bg-blue-primary text-white font-semibold rounded-lg shadow hover:bg-blue-dark transition duration-300 text-center cta-button"
                        >
                          Call Now
                        </a> */}
                      </div>
                    </div>
                    
                    {/* Right side - Contact form embed */}
                    <div className="z-10 w-full  bg-transparent rounded-lg  fade-in">
                      {/* <h3 className="text-xl font-semibold text-blue-primary mb-4">Get Your Free Quote Today</h3> */}
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