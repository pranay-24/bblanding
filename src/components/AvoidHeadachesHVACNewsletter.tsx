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
            <h2 className="text-3xl md:text-4xl font-bold text-blue-primary mb-1">
              Comfort That Fits Your Budget.
            </h2>
            <div className="space-y-4 text-gray-600 mb-6 mt-4">
              <p>
                One efficient system keeps your home warm in winter and cool in summer, and with payments starting at $119 a month, the upgrade is easier on your budget than you might expect.
              </p>
              <p>
                Every Blue Best install is backed by a 10-year parts and 1-year labor warranty, and it can stack with utility rebates we handle for you. Want to see your options first? Our soft pre-qualification checks your rate with no impact to your credit.
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
