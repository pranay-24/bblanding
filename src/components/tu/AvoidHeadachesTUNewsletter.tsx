import React from 'react';

interface HeroProps {
  contactFormEmbed: string;
}

const AvoidHeadachesTUNewsletter: React.FC<HeroProps> = ({ contactFormEmbed }) => {
  return (
    <section className=" bg-transparent" id="hero_Section-bblanding">

      <div className="lg:container mx-auto px-4 py-4 md:py-10">
        <div className="flex flex-col lg:flex-row items-baseline gap-6">

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-primary mb-8">
              What You Get for $89
            </h2>
            <div className="space-y-6 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block h-6 w-6 shrink-0 bg-[url(/images/next-100_smkyiq.webp)] bg-contain bg-no-repeat bg-center"></span>
                  <h3 className="text-2xl font-bold text-blue-primary-dark leading-none mb-0">Full System Check</h3>
                </div>
                <p className="text-gray-600 ml-8">We inspect, test, and fine-tune your system to make sure everything is working exactly as it should.</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block h-6 w-6 shrink-0 bg-[url(/images/next-100_smkyiq.webp)] bg-contain bg-no-repeat bg-center"></span>
                  <h3 className="text-2xl font-bold text-blue-primary-dark leading-none mb-0">Safety Inspection</h3>
                </div>
                <p className="text-gray-600 ml-8">We check for potential hazards, leaks, and wear, so your home stays safe and secure.</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block h-6 w-6 shrink-0 bg-[url(/images/next-100_smkyiq.webp)] bg-contain bg-no-repeat bg-center"></span>
                  <h3 className="text-2xl font-bold text-blue-primary-dark leading-none mb-0">Peak Performance</h3>
                </div>
                <p className="text-gray-600 ml-8">A tuned system runs more efficiently, helping you lower energy bills and extend system life.</p>
              </div>
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

export default AvoidHeadachesTUNewsletter;
