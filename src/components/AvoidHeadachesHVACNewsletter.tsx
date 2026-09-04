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
              A New System Deserves a Great First Year.
            </h2>
            <div className="space-y-4 text-gray-600 mb-6 mt-4">
              <p>
                When you install with Blue Best, we do not just set it up and say goodbye. Your first year includes two seasonal tune-ups, on us, so your new system keeps running at its best.
              </p>
              <p>
                We take care of the scheduling, so there is nothing for you to remember. Two visits, a full performance check each time, and a system that keeps performing like new.
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
