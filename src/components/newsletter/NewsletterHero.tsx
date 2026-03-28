import React from 'react';
import Slider from 'react-slick';
import { Phone, Star } from 'lucide-react';
import type { HeroOffer } from '../../config/newsletterOffers';

interface NewsletterHeroProps {
  offer: HeroOffer;
  contactFormEmbed: string;
}

const NewsletterHero: React.FC<NewsletterHeroProps> = ({ offer }) => {
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    adaptiveHeight: false,
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('hero_Section-bblanding');
    if (target) {
      const navbarOffset = document.querySelector('header')?.offsetHeight ?? 100;
      const offsetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - navbarOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-[120px] min-[1150px]:pt-[90px]">
      <div className="w-full relative">
        <Slider {...sliderSettings}>
          <div>
            <div className="min-h-[calc(100vh-120px)] md:min-h-0 md:h-auto lg:h-[85vh] w-full relative">
              <div
                className="absolute inset-0 bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${offer.backgroundImage})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
              </div>

              <div className="lg:container mx-auto px-4 h-full relative">
                <div className="flex flex-col lg:flex-row h-full items-center justify-center md:justify-between py-10">
                  {/* Left — offer text */}
                  <div className="text-white z-10 max-w-[768px] md:mr-8 mb-10 md:mb-0 fade-in lg:flex-1">
                    {/* Google rating badge */}
                    <div className="flex items-center space-x-2 mb-6">
                      <div className="flex items-center h-full">
                        <img
                          src="/google-g-logo.svg"
                          alt="Google"
                          className="w-11 h-full object-contain"
                        />
                      </div>
                      <div className="flex flex-col items-start">
                        <div className="flex items-center space-x-1 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#ffffed] text-[#ffffed]" />
                          ))}
                        </div>
                        <div className="flex flex-row space-x-3 justify-center items-center">
                          <span className="text-lg font-bold text-[#ffffed]">5.0 RATING</span>
                          <span className="text-sm font-bold text-[#ffffed]">(2500+ Reviews)</span>
                        </div>
                      </div>
                    </div>

                    {/* Main offer headline */}
                    <h1 className="text-3xl md:text-5xl font-bold mb-2">{offer.title1}</h1>

                    {/* Optional service name */}
                    {offer.subTitle2 && (
                      <p className="text-xl font-bold md:text-3xl mb-4 text-white/90">
                        {offer.subTitle2}
                      </p>
                    )}

                    {/* Tagline */}
                    <p className="text-lg md:text-2xl font-semibold text-orange-400 mb-2">
                      Put Your Mind to Rest: Call Blue Best!
                    </p>

                    {/* Description */}
                    <p className="font-bold text-base md:text-xl mb-3">{offer.subTitle}</p>

                    {/* CTAs */}
                    <div className="flex flex-col xl:flex-row gap-4 max-w-md lg:max-w-3xl">
                      <a
                        onClick={handleClick}
                        className="px-11 py-3.5 text-base bg-gradient-to-b from-orange-600 to-orange-500 text-white text-center ease-out whitespace-pre-wrap rounded-full uppercase font-semibold font-['Kanit'] leading-relaxed shadow-[0_0.2em_0_#003572] transition duration-300 cursor-pointer"
                      >
                        {offer.ctaText}
                      </a>
                      <a
                        href="tel:+13852002604"
                        className="flex items-center justify-center px-11 py-3.5 text-base bg-blue-primary-dark text-white text-center ease-out whitespace-pre-wrap rounded-full uppercase font-semibold font-['Kanit'] leading-relaxed shadow-[0_0.2em_0_#f97316] transition duration-300"
                      >
                        <Phone size={18} className="mr-2" />
                        (385) 200-2604
                      </a>
                    </div>

                    {/* Trust badges */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-6 text-xs md:text-sm text-white/60 uppercase tracking-wide">
                      <span className="font-semibold">Women-Owned &amp; Operated</span>
                      <span>|</span>
                      <span className="font-semibold">3 Times Best of State Winner</span>
                    </div>
                  </div>

                  <div className="z-10 w-full max-w-md lg:flex-1 bg-transparent rounded-lg fade-in" />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <style>{`
        .fade-in {
          animation: fadeIn 0.8s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default NewsletterHero;
