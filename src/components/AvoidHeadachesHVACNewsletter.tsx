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
              Good Neighbors Share Good Things.
            </h2>
            <div className="space-y-4 text-gray-600 mb-6">
              <p>If your home is finally comfortable this summer, chances are a neighbor could use the same. Send them our way, and we will thank you with a cash reward.</p>
              <p>When your referral installs with us, we send your reward straight to you by Venmo or Zelle. Refer as many neighbors as you like. There is no cap.</p>
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
