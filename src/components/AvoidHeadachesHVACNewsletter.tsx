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
              Your Neighbors Said It Best.
            </h2>
            <div className="space-y-4 text-gray-600 mb-6 mt-4">
              <p>
                We could tell you how much we care about doing the job right. But it means more coming from the homeowners we work for.
              </p>
              <p>
                It is why we were voted Best of SLC for Heating and Air in 2025, and why homeowners across the Wasatch Front have left more than 2,900 five-star reviews.
              </p>
              <p className="font-bold text-blue-primary">
                Local, licensed, bonded, and insured.
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-primary mb-1">
              Ready When You Are.
            </h2>
            <div className="space-y-4 text-gray-600 mb-6 mt-4">
              <p>
                Whether it is a repair, a tune-up, or a new system, our team is ready to help this winter. Give us a call and see what your neighbors are talking about.
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
