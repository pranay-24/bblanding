import React from 'react';
import {  Phone } from 'lucide-react';

const ProcessSectionFurnace: React.FC = () => {
  const steps = [
    { number: 1, title: 'Schedule Your Estimate', text: 'Schedule Your Estimate.' },
    { number: 2, title: 'Get Expert Recommnendation + Quote', text: 'Get Expert Recommnendation + Quote' },
    { number: 3, title: 'Enjoy Hassle Free Installation with 0% Financing', text: 'Enjoy Hassle Free Installation with 0% Financing' },
  ];

     const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            const target = document.getElementById('hero_Section-bblanding');
            
               if (target) {
      const navbarOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
          };

  return (
    <section className="" id="request-free-estimate">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-primary text-center mb-16">
          Here's How Easy It Is
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-0 relative">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="flex flex-col items-start relative">
                <div className="w-[190px] md:w-[240px] h-[190px] md:h-[240px] rounded-full bg-blue-primary-dark flex flex-col justify-start pt-7 md:pt-9 items-center relative shadow-[inset_7px_-7px_8px_#ea580c]">
                  <span className="text-2xl md:text-3xl font-bold text-white text-center">
                    {step.number}
                  </span>
                  <span className="text-md md:text-lg max-w-[150px] md:max-w-[200px] font-bold text-white mt-1 text-center px-2">
                    {step.text}
                  </span>
                </div>
                {/* <h3 className="mt-4 font-bold text-gray-800 text-center">
                  {step.title}
                </h3> */}

              </div>
              {index < steps.length - 1 && (
                // <div className="hidden md:block w-30 h-[2px] bg-orange-primary self-start mt-[100px]" />
              <div className="hidden md:block w-20 h-[3px] bg-orange-primary" />
              )}
               {index < steps.length - 1 && (
                
                //  <div className="block md:hidden w-[2px] h-30  self-start ml-[100px]" />
                 <div className="block md:hidden w-[3px] h-16 bg-orange-primary" />
              )}
            </React.Fragment>
          ))}
          
        </div>
         <p className="pt-16 text-xl font-bold text-gray-600 max-w-3xl mx-auto text-center flex justify-center gap-4">
  <span>Simple.</span>
  <span>Fast.</span>
  <span>Done Right.</span>
</p>
           <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-primary mb-4 max-w-3xl text-center mx-auto">Ready to Upgrade Your Furnace System?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Keep your family cozy, lower your energy bills, and enjoy year-round comfort.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 justify-center text-center mt-12">
            <a
               onClick={handleClick}
              className="px-11 py-3.5 text-lg bg-gradient-to-b from-orange-600 to-orange-500 text-white text-center ease-out whitespace-pre-wrap rounded-full uppercase font-semibold font-['Kanit'] leading-relaxed hover:cursor-pointer shadow-[0_0.2em_0_#003572] transition duration-300"
            >
              GET IMMEDIATE ASSISTANCE
            </a>
            <a
                href="tel:+13852002604"
                className="flex items-center justify-center px-11 py-3.5 text-lg bg-[#003572] text-white text-center ease-out whitespace-pre-wrap rounded-full uppercase font-semibold font-['Kanit'] leading-relaxed "
              >
                <Phone size={18} className="mr-2" />
                (385) 200-2604
              </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSectionFurnace;