import React from 'react';

interface HeroProps {
  contactFormEmbed: string;
}

const AvoidHeadachesHVACNewsletter: React.FC<HeroProps> = ({ contactFormEmbed }) => {
  const bullets = [
    'Total heating or cooling loss → We come out the same day',
    'Quote approved by 2pm → Install starts within 24 hours',
    'We miss the window → First annual tune-up free ($89 value)',
    'Standard 1 to 2 day install → Most jobs complete in 1 to 2 days',
  ];

  return (
    <section className="bg-transparent" id="hero_Section-bblanding">
      <div className="lg:container mx-auto px-4 py-4 md:py-10">
        <div className="flex flex-col lg:flex-row items-baseline gap-6">

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-primary mb-4">
              Three Weeks Without AC? Not on Our Watch.
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
              If your heating or cooling fails completely, we guarantee installation start within 24 hours. Miss the window and your first annual tune-up is free — an $89 value.
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
