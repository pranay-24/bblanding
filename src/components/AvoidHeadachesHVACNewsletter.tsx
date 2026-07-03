import React from 'react';

interface HeroProps {
  contactFormEmbed: string;
}

const AvoidHeadachesHVACNewsletter: React.FC<HeroProps> = ({ contactFormEmbed }) => {
  const bullets = [
    'Get a new AC for as low as $69 a month with low monthly payments for qualified buyers.',
    'Low-interest financing makes it easy, and soft pre-qualification has no impact on your credit score.',
    'Your new system may still qualify for utility rebates, so the savings stack on top of the financing.',
    'You get a written quote up front with fixed pricing, so there are no surprises on install day.',
  ];

  return (
    <section className="bg-transparent" id="hero_Section-bblanding">
      <div className="lg:container mx-auto px-4 py-4 md:py-10">
        <div className="flex flex-col lg:flex-row items-baseline gap-6">

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-primary mb-4">
              Don't Sweat Out Another Summer.
            </h2>
            <ul className="list-none pl-4 space-y-2 mb-6">
              {bullets.map((item) => (
                <li key={item} className="relative pl-6 text-gray-600">
                  <span className="absolute left-0 top-1 inline-block h-5 w-5 bg-[url(/images/next-100_smkyiq.webp)] bg-contain bg-no-repeat bg-center" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base md:text-lg text-gray-700 mb-8">
              Utah summers are only getting hotter. A new high-efficiency AC keeps your home comfortable now, with a payment that fits your monthly budget. Low-interest financing keeps the upfront cost down, and your new system may still qualify for utility rebates on top — installed by a NATE certified Utah crew.
            </p>
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
