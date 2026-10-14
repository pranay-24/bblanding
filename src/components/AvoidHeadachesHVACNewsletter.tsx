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
              Fix It Before the <span className="text-orange-500">First Freeze.</span>
            </h2>
            <div className="space-y-4 text-gray-600 mb-6 mt-4">
              <p>
                Cold weather puts real strain on your heating system, and that is when worn parts tend to give out. For the bigger repairs, the ones with a parts and labor total of $500 or more, we take $75 off.
              </p>
              <p>
                You see the number before any work begins. The $75 comes off your written, upfront quote, so you know exactly what you are paying.
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-blue-primary pt-2">
                DON'T GET CAUGHT <span className="text-orange-500">IN THE COLD.</span>
              </h3>
              <p>
                Small heating problems turn into big ones once temperatures drop. If your system needs more than a quick fix, book now and take $75 off the repair.
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
