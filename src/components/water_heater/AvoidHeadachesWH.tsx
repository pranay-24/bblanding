import React from 'react';

interface HeroProps {
  contactFormEmbed: string;
}

const AvoidHeadachesWH: React.FC<HeroProps> = ({ contactFormEmbed }) => {
  return (
    <section className=" bg-transparent" id="hero_Section-bblanding">
      
      <div className="lg:container mx-auto px-4 py-4 md:py-10">
        <div className="flex flex-col lg:flex-row items-baseline gap-6">
         
          <div className="w-full lg:w-1/2">
            {/* <span className="text-orange-primary font-medium mb-2 block">Meet Your Home's New Best Friend</span> */}
            <h2 className=" text-3xl md:text-4xl font-bold text-blue-primary mb-4">
             Don’t Let Cold Showers Ruin Your Day
            </h2>
            <p className=" text-gray-600 mb-6">
              When your water heater fails, you need a team that shows up fast and gets the job done right. Whether it’s time to replace an old unit or upgrade to something more efficient, Blue Best is here to help.
            </p>

             <p className=" text-gray-600 mb-6">
              We install all types of water heaters including gas, electric, and tankless models with upfront pricing, fast turnaround, and 5-star service.
            </p>


            {/* <ul className="list-none pl-4 space-y-2 mb-8">
  <li className="relative pl-6 text-gray-600">
    <span className="absolute left-0 top-1 inline-block h-5 w-5 bg-[url(https://res.cloudinary.com/dwe4p22ut/image/upload/v1747842034/next-100_smkyiq.png)] bg-contain bg-no-repeat bg-center"></span>
    Water heater Installation
  </li>
  <li className="relative pl-6 text-gray-600">
    <span className="absolute left-0 top-1 inline-block h-5 w-5 bg-[url(https://res.cloudinary.com/dwe4p22ut/image/upload/v1747842034/next-100_smkyiq.png)] bg-contain bg-no-repeat bg-center"></span>
   Water Heater Repairs and Maintenance

  </li>
  <li className="relative pl-6  text-gray-600">
    <span className="absolute left-0 top-1 inline-block h-5 w-5 bg-[url(https://res.cloudinary.com/dwe4p22ut/image/upload/v1747842034/next-100_smkyiq.png)] bg-contain bg-no-repeat bg-center"></span>
   Pipe and Drain Repairs
  </li>
    <li className="relative pl-6  text-gray-600">
    <span className="absolute left-0 top-1 inline-block h-5 w-5 bg-[url(https://res.cloudinary.com/dwe4p22ut/image/upload/v1747842034/next-100_smkyiq.png)] bg-contain bg-no-repeat bg-center"></span>
  Gas Line Maintenance
  </li>
    <li className="relative pl-6  text-gray-600">
    <span className="absolute left-0 top-1 inline-block h-5 w-5 bg-[url(https://res.cloudinary.com/dwe4p22ut/image/upload/v1747842034/next-100_smkyiq.png)] bg-contain bg-no-repeat bg-center"></span>
  Tankless Water Heaters
  </li>
    <li className="relative pl-6  text-gray-600">
    <span className="absolute left-0 top-1 inline-block h-5 w-5 bg-[url(https://res.cloudinary.com/dwe4p22ut/image/upload/v1747842034/next-100_smkyiq.png)] bg-contain bg-no-repeat bg-center"></span>
  Toilet Repair & Installation
  </li>
    <li className="relative pl-6  text-gray-600">
    <span className="absolute left-0 top-1 inline-block h-5 w-5 bg-[url(https://res.cloudinary.com/dwe4p22ut/image/upload/v1747842034/next-100_smkyiq.png)] bg-contain bg-no-repeat bg-center"></span>
  Water Filtration Systems
  </li>
   <li className="relative pl-6  text-gray-600">
    <span className="absolute left-0 top-1 inline-block h-5 w-5 bg-[url(https://res.cloudinary.com/dwe4p22ut/image/upload/v1747842034/next-100_smkyiq.png)] bg-contain bg-no-repeat bg-center"></span>
  Water Softeners
  </li>
</ul> */}
<p className=" text-gray-600 mb-6">
              With <span className="text-blue-primary-dark ">BlueBest</span>, you're guaranteed a smooth install, certified technicians, and honest pricing.
            </p>
 {/* <span className="text-xl text-orange-primary font-bold mb-8 block">Get $2,000 OFF Your Whole-Home Generator</span> */}

            {/* <a
              href="#contact"
              className="inline-block px-6 py-3 bg-blue-primary text-white font-semibold rounded-lg 
                shadow hover:bg-blue-dark transition duration-300"
            >

              Schedule Service
            </a> */}
            {/* <a
              href="tel:+13852741575"
              className="px-11 py-3.5 text-lg bg-gradient-to-b from-orange-600 to-orange-500 text-white text-center ease-out whitespace-pre-wrap rounded-full uppercase font-semibold font-['Kanit'] leading-relaxed shadow-[0_0.2em_0_#003572] transition duration-300 "
            >

              Call Us Now
            </a> */}
            {/* <span className="text-md mt-8 text-gray-600 font-bold mb-8 block">**For a limited time only (Till 15th May 2025)
</span> */}

          </div>
           <div className="w-full lg:w-1/2">
          {/* Actual form */}
                        <div 
                          className={`transition-opacity duration-300'}`}
                          dangerouslySetInnerHTML={{ __html: contactFormEmbed }} 
                        />
                      </div>
         

        </div>
      </div>
    </section>
  );
};

export default AvoidHeadachesWH;

