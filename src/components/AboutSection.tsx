import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2">
            <img
              src="https://res.cloudinary.com/dwe4p22ut/image/upload/v1747854703/Picture1_dz1fru.png"
              alt="Professional HVAC Service"
              className=" w-full h-[400px] object-contain"
            />
          </div>
          <div className="w-full md:w-1/2">
            {/* <span className="text-orange-primary font-medium mb-2 block">Why Choose BlueBest</span>
            <h2 className=" text-3xl md:text-4xl font-bold text-blue-primary mb-4">
              Your Trusted Partner for Home Comfort
            </h2> */}
            <p className=" text-gray-600 mb-9">
              A summer storm knocks your power out. Your fridge stops running, your home security fails, and your family's comfort is compromised. 
              </p>
<span className="text-md mt-8 text-gray-600 font-bold mb-8 block">Suddenly, your home isn't your sanctuary - it’s a source of stress.</span>

              
            {/* <a
              href="#contact"
              className="inline-block px-6 py-3 bg-blue-primary text-white font-semibold rounded-lg 
                shadow hover:bg-blue-dark transition duration-300"
            >

              Schedule Service
            </a> */}
            {/* <a
              href="#contact"
              className="px-11 py-3.5 text-lg bg-gradient-to-b from-orange-600 to-orange-500 text-white text-center ease-out whitespace-pre-wrap rounded-full uppercase font-semibold font-['Kanit'] leading-relaxed shadow-[0_0.2em_0_#003572] transition duration-300"
            >

              Schedule Service
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;