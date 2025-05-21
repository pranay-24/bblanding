import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="https://res.cloudinary.com/dwe4p22ut/image/upload/v1747836331/Heating-Repair_Section-2-Static-Image-1_l5l1ca.webp"
              alt="Professional HVAC Service"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-orange-primary font-medium mb-2 block">Why Choose BlueBest</span>
            <h2 className=" text-3xl md:text-4xl font-bold text-blue-primary mb-4">
              Your Trusted Partner for Home Comfort
            </h2>
            <p className=" text-gray-600 mb-6">
              With over 20 years of experience serving Bountiful and surrounding areas, 
              BlueBest has established itself as the region's premier provider of HVAC 
              and plumbing services. Our team of certified professionals is committed 
              to delivering exceptional service and ensuring your complete satisfaction.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-blue-primary text-white font-semibold rounded-lg 
                shadow hover:bg-blue-dark transition duration-300"
            >
              Schedule Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;