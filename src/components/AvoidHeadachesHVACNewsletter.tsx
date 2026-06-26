import React from 'react';

interface HeroProps {
  contactFormEmbed: string;
}

const AvoidHeadachesHVACNewsletter: React.FC<HeroProps> = ({ contactFormEmbed }) => {
  const bullets = [
    'A new central AC or heat pump can qualify for up to $1,700 back through RMP Wattsmart.',
    'A high-efficiency gas furnace can qualify for up to $450 through Enbridge ThermWise.',
    'A dual-fuel heat pump can qualify for up to $1,450 through RMP Wattsmart.',
    'A smart thermostat can qualify for up to $150 combined from RMP and ThermWise.',
    'Duct sealing can qualify for up to $300.',
    'Stacked on a qualifying high-efficiency system, that is up to $2,000 back.',
  ];

  return (
    <section className="bg-transparent" id="hero_Section-bblanding">
      <div className="lg:container mx-auto px-4 py-4 md:py-10">
        <div className="flex flex-col lg:flex-row items-baseline gap-6">

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-primary mb-4">
              Upgrading Your AC This Summer? Don't Leave the Rebates Behind.
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
              Exact amounts depend on your equipment and the current utility programs — we confirm what you qualify for when we quote. Rebate amounts and program availability shift through the year, so the simplest way to know exactly what you qualify for today is to let us check it for you, free, when we come out to quote.
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
