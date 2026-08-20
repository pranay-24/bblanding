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
              Maximum Efficiency, Maximum Rebates.
            </h2>
            <div className="space-y-4 text-gray-600 mb-6 mt-4">
              <p>
                Our premium tier pairs a 97 percent AFUE modulating furnace with a variable-speed heat pump. It is the equipment that qualifies for the top tier of utility rebates in Utah, and it keeps your home comfortable through both the summer heat and the winter cold.
              </p>
              <p>
                We handle all of the Rocky Mountain Power and ThermWise paperwork, so the savings land in your pocket, not in a pile of forms. And because it is a bigger investment, we make it manageable with low-interest financing, with payments starting around $200 a month for qualified buyers.
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
