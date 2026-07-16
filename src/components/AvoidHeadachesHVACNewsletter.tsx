import React from 'react';

interface HeroProps {
  contactFormEmbed: string;
}

const AvoidHeadachesHVACNewsletter: React.FC<HeroProps> = ({ contactFormEmbed }) => {
  const bullets = [
    { label: 'No Hidden Fees', text: 'if it is not in your written quote, you do not pay for it.' },
    { label: 'Price Match Guarantee', text: 'find a better price on comparable equipment or service, and we will match it.' },
    { label: 'Written Estimates', text: 'you get the full price in writing before any work begins.' },
    { label: 'Free Diagnostic With Repair', text: 'book the repair and the diagnostic is on us.' },
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
                <li key={item.label} className="relative pl-6 text-gray-600">
                  <span className="absolute left-0 top-1 inline-block h-5 w-5 bg-[url(/images/next-100_smkyiq.webp)] bg-contain bg-no-repeat bg-center" />
                  <strong className="font-bold text-blue-primary">{item.label}</strong>: {item.text}
                </li>
              ))}
            </ul>
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
