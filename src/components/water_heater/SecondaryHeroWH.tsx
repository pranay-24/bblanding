import React from 'react';
import {  Phone } from 'lucide-react';

const SecondaryHeroWH: React.FC = () => {

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
    <section className="relative pt-16">
      {/* First Image Section */}
<div className="relative z-20 ">
  <div className="mx-auto ">
    <div className="relative">
      <img
        src="https://res.cloudinary.com/dwe4p22ut/image/upload/v1750980769/BB_Plumbing_3_szlspg.png"
        alt="Plumbing Installation"
        className="w-full h-[600px] object-cover "
      />
      <div className="absolute inset-0  " />
      {/* Updated positioning classes */}
      <div className="absolute bottom-8 left-4 right-4 md:left-1/2 md:transform md:-translate-x-1/2 md:max-w-4xl bg-white/60 p-6 rounded-lg backdrop-blur-sm">
        
        <div className="text-left md:text-center mb-12 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-primary mb-4">Limited-Time Offer – Act Fast!</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            $500 Off on a New Water Heater Installation. This offer is only valid for a short time book your free estimate today before it expires.
          </p>
        </div>
        <div className="flex flex-col max-w-fit gap-2 justify-center text-center mt-12 mx-auto">
          
           <a onClick={handleClick}
            className="max-w-lg px-11 py-3.5 text-lg bg-gradient-to-b from-orange-600 to-orange-500 text-white text-center ease-out whitespace-pre-wrap rounded-full uppercase font-semibold font-['Kanit'] leading-relaxed hover:cursor-pointer shadow-[0_0.2em_0_#003572] transition duration-300"
          >
            GET IMMEDIATE ASSISTANCE
          </a>
          
          <a  href="tel:+13852002604"
            className="flex items-center justify-center px-11 py-3.5 text-lg bg-[#003572] text-white text-center ease-out whitespace-pre-wrap rounded-full uppercase font-semibold font-['Kanit'] leading-relaxed "
          >
            <Phone size={18} className="mr-2" />
            (385) 200-2604
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Gradient Arc */}
      {/* <div className="absolute left-0 right-0 h-[200px] z-10" style={{
        top: '400px',
        background: 'linear-gradient(180deg, #0071BC 0%, #F7941D 100%)',
        clipPath: 'ellipse(75% 100% at 50% 0%)'
      }} /> */}

      {/* Second Image Section */}
      {/* <div className="relative z-0 mt-16">
        <div className=" container mx-auto">
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dwe4p22ut/image/upload/v1748386314/hero-4_gmdtes.jpg"
              alt="Professional Installation"
              className="w-full h-[600px] object-cover "
            />
            <div className="absolute inset-0  " />
            <div className="absolute top-8 left-8 right-8 bg-white/90 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-primary mb-2">
                Professional Installation
              </h2>
              <p className="text-gray-700">
                Expert installation by certified technicians. Quick, efficient,
                and hassle-free setup for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default SecondaryHeroWH;