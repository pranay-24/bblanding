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
            <h2 className="text-3xl md:text-4xl font-bold text-blue-primary mb-4">
              When It Is a Real Repair, This Helps.
            </h2>
            <div className="space-y-4 text-gray-600 mb-6">
              <p>Utah summers are hard on a cooling system. When yours is working overtime and something finally gives, a major repair can add up fast. For the bigger jobs — the ones with a parts and labor total of $500 or more — we take $75 off.</p>
              <p>You see the number before any work begins. The $75 comes off your written, upfront quote, so you know exactly what you are paying.</p>
            </div>
            <ul className="space-y-2 text-gray-700 mb-6">
              {[
                'No surprise charges — price is locked in before we start',
                'Applies to any HVAC repair $500 or more in parts and labor',
                '$75 taken off your written quote before you approve the work',
              ].map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-orange-primary flex items-center justify-center text-white text-xs font-bold">✓</span>
                  <span>{point}</span>
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
