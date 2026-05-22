import React from 'react';

interface HeroProps {
  contactFormEmbed: string;
}

const AvoidHeadachesHVACNewsletter: React.FC<HeroProps> = ({ contactFormEmbed }) => {
  const bullets = [
    'Complete HVAC system — heating and cooling, year-round comfort',
    'New water heater — tanked or tankless, your choice',
    'Both systems installed by certified technicians',
    '$1,000 off when you bundle the upgrade',
  ];

  return (
    <section className="bg-transparent" id="hero_Section-bblanding">
      <div className="lg:container mx-auto px-4 py-4 md:py-10">
        <div className="flex flex-col lg:flex-row items-baseline gap-6">

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-primary mb-4">
              What You're Getting:
            </h2>
            <ul className="list-none pl-4 space-y-2 mb-8">
              {bullets.map((item) => (
                <li key={item} className="relative pl-6 text-gray-600">
                  <span className="absolute left-0 top-1 inline-block h-5 w-5 bg-[url(/images/next-100_smkyiq.webp)] bg-contain bg-no-repeat bg-center" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 mb-6">
              Not sure which water heater is right for you? We&rsquo;ll help you choose based on your
              home, your usage, and your budget.
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
