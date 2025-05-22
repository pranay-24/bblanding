import React from 'react';

const HomeGenerator: React.FC = () => {
  return (
    <section className="py-4 md:py-16 bg-transparent" id="Briggs_Generator">
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/3">
            <img
              src="https://res.cloudinary.com/dwe4p22ut/image/upload/v1747836331/Heating-Repair_Section-2-Static-Image-1_l5l1ca.webp"
              alt="Professional HVAC Service"
              className=" w-full h-[400px] object-contain"
            />
          </div>
          <div className="w-full md:w-2/3">
            <span className="text-orange-primary font-medium mb-2 block">Meet Your Home's New Best Friend</span>
            <h2 className=" text-3xl md:text-4xl font-bold text-blue-primary mb-4">
             Briggs & Stratton Whole-Home Generator
            </h2>
            <p className=" text-gray-600 mb-6">
              With over 20 years of experience serving Bountiful and surrounding areas, 
              BlueBest has established itself as the region's premier provider of HVAC 
              and plumbing services. Our team of certified professionals is committed 
              to delivering exceptional service and ensuring your complete satisfaction.
            </p>
            <ul className="list-none pl-4 space-y-2 mb-8">
  <li className="relative pl-6 text-gray-600">
    <span className="absolute left-0 top-1 inline-block h-5 w-5 bg-[url(https://res.cloudinary.com/dwe4p22ut/image/upload/v1747842034/next-100_smkyiq.png)] bg-contain bg-no-repeat bg-center"></span>
    Automatically powers your home in seconds.
  </li>
  <li className="relative pl-6 text-gray-600">
    <span className="absolute left-0 top-1 inline-block h-5 w-5 bg-[url(https://res.cloudinary.com/dwe4p22ut/image/upload/v1747842034/next-100_smkyiq.png)] bg-contain bg-no-repeat bg-center"></span>
    Keeps your family safe and comfortable.

  </li>
  <li className="relative pl-6  text-gray-600">
    <span className="absolute left-0 top-1 inline-block h-5 w-5 bg-[url(https://res.cloudinary.com/dwe4p22ut/image/upload/v1747842034/next-100_smkyiq.png)] bg-contain bg-no-repeat bg-center"></span>
    Protects your valuables and appliances.
  </li>
    <li className="relative pl-6  text-gray-600">
    <span className="absolute left-0 top-1 inline-block h-5 w-5 bg-[url(https://res.cloudinary.com/dwe4p22ut/image/upload/v1747842034/next-100_smkyiq.png)] bg-contain bg-no-repeat bg-center"></span>
    Ensures uninterrupted remote work and productivity.
  </li>
</ul>
 <span className="text-xl text-orange-primary font-bold mb-8 block">Get $2,000 OFF Your Whole-Home Generator</span>

            {/* <a
              href="#contact"
              className="inline-block px-6 py-3 bg-blue-primary text-white font-semibold rounded-lg 
                shadow hover:bg-blue-dark transition duration-300"
            >

              Schedule Service
            </a> */}
            <a
              href="tel:+13852741575"
              className="px-11 py-3.5 text-lg bg-gradient-to-b from-orange-600 to-orange-500 text-white text-center ease-out whitespace-pre-wrap rounded-full uppercase font-semibold font-['Kanit'] leading-relaxed shadow-[0_0.2em_0_#003572] transition duration-300 "
            >

              Call Us Now
            </a>
            <span className="text-md mt-8 text-gray-600 font-bold mb-8 block">**For a limited time only (Till 15th May 2025)
</span>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeGenerator;