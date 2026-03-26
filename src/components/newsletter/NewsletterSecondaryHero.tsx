import React from 'react';
import { Phone } from 'lucide-react';
import type { SecondaryHeroOffer } from '../../config/newsletterOffers';

interface NewsletterSecondaryHeroProps {
  offer: SecondaryHeroOffer;
}

const NewsletterSecondaryHero: React.FC<NewsletterSecondaryHeroProps> = ({ offer }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('hero_Section-bblanding');
    if (target) {
      const navbarOffset = 90;
      const offsetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - navbarOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-16">
      <div className="relative z-20">
        <div className="mx-auto">
          <div className="relative">
            <img
              src={offer.backgroundImage}
              alt="Limited Time Offer"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0" />
            <div className="absolute bottom-8 left-4 right-4 md:left-1/2 md:transform md:-translate-x-1/2 md:max-w-4xl bg-white/60 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-left md:text-center mb-12 mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-primary mb-4">
                  {offer.heading}
                </h2>
                {offer.mainOfferText && (
                  <p className="text-2xl text-blue-primary max-w-3xl mx-auto">
                    {offer.mainOfferText}
                  </p>
                )}
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {offer.description}
                </p>
              </div>
              <div className="flex flex-col lg:flex-row gap-2 justify-center text-center mt-12">
                <a
                  onClick={handleClick}
                  className="px-11 py-3.5 text-lg bg-gradient-to-b from-orange-600 to-orange-500 text-white text-center ease-out whitespace-pre-wrap rounded-full uppercase font-semibold font-['Kanit'] leading-relaxed hover:cursor-pointer shadow-[0_0.2em_0_#003572] transition duration-300"
                >
                  {offer.ctaText}
                </a>
                <a
                  href="tel:+13852002604"
                  className="flex items-center justify-center px-11 py-3.5 text-lg bg-[#003572] text-white text-center ease-out whitespace-pre-wrap rounded-full uppercase font-semibold font-['Kanit'] leading-relaxed"
                >
                  <Phone size={18} className="mr-2" />
                  (385) 200-2604
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSecondaryHero;
