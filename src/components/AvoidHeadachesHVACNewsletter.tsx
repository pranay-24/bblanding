import React from 'react';

interface HeroProps {
  contactFormEmbed: string;
}

const AvoidHeadachesHVACNewsletter: React.FC<HeroProps> = ({ contactFormEmbed }) => {
  return (
    <section className="bg-transparent" id="hero_Section-bblanding">
      <div className="lg:container mx-auto px-4 py-4 md:py-10">
        <div className="flex flex-col lg:flex-row items-baseline gap-6">

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-primary mb-4">
              Peace of Mind Comes Standard.
            </h2>
            <div className="space-y-4 text-gray-600 mb-6">
              <p>
                A new system is a big decision. With Blue Best, it comes with a{' '}
                <span className="text-orange-primary font-semibold">10-year manufacturer parts warranty</span>{' '}
                on all major components, plus a 1-year warranty on our workmanship. Not an upsell. Not a line item. It is simply what your install includes.
              </p>
              <p>
                We register the warranty for you, so there is nothing to mail in and nothing to track. And if you ever sell your home, the coverage transfers to the new owners.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div
              className="transition-opacity duration-300"
              dangerouslySetInnerHTML={{ __html: contactFormEmbed }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AvoidHeadachesHVACNewsletter;
