import React from 'react';

interface HeroProps {
  contactFormEmbed: string;
}

const AvoidHeadachesHVACNewsletter: React.FC<HeroProps> = ({ contactFormEmbed }) => {
  const bullets = [
    '$600 off your install — straight off a new high-efficiency AC or heat pump.',
    '10-year parts warranty, plus a 1-year labor warranty you can extend.',
    '0% APR financing available for qualified buyers, so it is easier to say yes.',
    'Free in-home sizing — a Manual J load calculation so your system is matched to your home, not oversized, not undersized.',
    'Old equipment removed — we haul away your old system at no extra charge.',
    'Stacks with rebates — combine your $600 with manufacturer and utility rebates.',
  ];

  return (
    <section className="bg-transparent" id="hero_Section-bblanding">
      <div className="lg:container mx-auto px-4 py-4 md:py-10">
        <div className="flex flex-col lg:flex-row items-baseline gap-6">

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-primary mb-4">
              What's Included
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
              Not sure whether to repair or replace? We'll come out, take a look, and give you a straight answer. A new high-efficiency AC keeps your home comfortable now, and $600 off makes the timing easy — installed by a NATE-certified Utah crew.
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
