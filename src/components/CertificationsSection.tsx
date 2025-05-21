import React from 'react';

const CertificationsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-primary mb-4">Trusted & Certified</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            BlueBest is proud to be recognized by industry leaders and maintain the highest standards of service.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {/* These would normally be actual images, using placeholder divs for the example */}
          <div className="h-20 w-48 bg-blue-light rounded flex items-center justify-center">
            <span className="text-blue-primary font-semibold">BBB Accredited</span>
          </div>
          <div className="h-20 w-48 bg-blue-light rounded flex items-center justify-center">
            <span className="text-blue-primary font-semibold">HomeAdvisor Pro</span>
          </div>
          <div className="h-20 w-48 bg-blue-light rounded flex items-center justify-center">
            <span className="text-blue-primary font-semibold">Lennox Premier</span>
          </div>
          <div className="h-20 w-48 bg-blue-light rounded flex items-center justify-center">
            <span className="text-blue-primary font-semibold">Pro Network</span>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-blue-primary font-medium">Amana Pro Trusted Dealer</p>
        </div>

        <div className="text-center mt-12 p-8 bg-blue-light rounded-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-blue-primary mb-4">Three-Time Winner Best of State, 2023-2025</h3>
          <p className="text-gray-600">
            The Best of State Judges recognize BlueBest for excellence in service, innovation, and contribution to the quality of life in Utah.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;