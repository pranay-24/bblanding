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
              Good Neighbors Share Good Things.
            </h2>
            <div className="space-y-4 text-gray-600 mb-6 mt-4">
              <p>
                Heating season is when neighbors start asking who to call. If Blue Best has taken good care of your home, send them our way, and we will thank you with a cash reward.
              </p>
              <p>
                When your referral installs with us, we send your reward straight to you by Venmo or Zelle. Refer as many neighbors as you like. There is no cap.
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-blue-primary pt-2">
                The Best Compliment Is an Introduction.
              </h3>
              <p>
                An introduction is one of the best ways to build trust with your neighbors. If Blue Best has earned yours, we'd be grateful for the referral and happy to reward you for it.
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
