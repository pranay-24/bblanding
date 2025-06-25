import React from 'react';
import { Shield, Clock, Award, PenTool as Tool, Users, Sparkles } from 'lucide-react';

const FeaturesSection: React.FC = () => {
 

  return (
    <section className=" " id="why-trust-bluebest">
      <div className="lg:container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">Why Salt Lake City Trusts BlueBest</h2>
            <div className="grid   grid-cols-1 sm:grid-cols-2 gap-6">
              
               <div className="flex flex-col p-4 ">
        <div className="mb-4 flex gap-5 mx-auto">
          <img 
            src="https://res.cloudinary.com/dwe4p22ut/image/upload/v1748383311/log-2_x9jcve.png"
            alt="Column 1 Image 1"
            className="w-24 h-20 object-contain"
          />
          <img 
            src="https://res.cloudinary.com/dwe4p22ut/image/upload/v1748383311/logo-1_hzxybc.png"
            alt="Column 1 Image 2"
            className="w-24 h-20 object-contain"
          />
        </div>
        <div className="text-blue-primary-dark text-md font-bold leading-relaxed text-center">
          Three-Time & Current Best-of-State Winner – Heat & Air
        </div>
      </div>

      <div className="flex flex-col p-4 ">
        <div className="mb-4 mx-auto">
          <img 
            src="https://res.cloudinary.com/dwe4p22ut/image/upload/v1748383311/medal-logo-1_mr3xay.png"
            alt="Column 2"
            className="w-full h-20 object-contain"
          />
        </div>
        <div className="text-blue-primary-dark text-md font-bold leading-relaxed text-center">
         Current Best-of-State Winner – Plumbing
        </div>
      </div>

<div className="flex flex-col p-4 ">
        <div className="mb-4 mx-auto">
          <img 
            src="https://res.cloudinary.com/dwe4p22ut/image/upload/v1748383311/goggle_logo-1_alvocy.png"
            alt="Column 3"
            className="w-full h-20 object-contain"
          />
        </div>
        <div className="text-blue-primary-dark text-md font-bold leading-relaxed text-center">
          2,000+ Five-Star Google Reviews
        </div>
      </div>

      <div className="flex flex-col p-4 ">
        <div className="mb-4 mx-auto">
          <img 
            src="https://res.cloudinary.com/dwe4p22ut/image/upload/v1748383311/lennox_logo-1_wlpewc.png"
            alt="Column 4"
            className="w-full h-20 object-contain"
          />
        </div>
        <div className="text-blue-primary-dark text-md font-bold leading-relaxed text-center">
          Lennox-Certified Premier Dealer
        </div>
      </div>

 <div className="flex flex-col p-4 ">
        <div className="mb-4 mx-auto">
          <img 
            src="https://res.cloudinary.com/dwe4p22ut/image/upload/v1748388272/license-svg_k6r6ix.svg"
            alt="Column 4"
            className="w-full h-20 object-contain"
          />
        </div>
        <div className="text-blue-primary-dark text-md font-bold leading-relaxed text-center">
          Local. Licensed. Bonded. Insured.
        </div>
      </div>

            </div>
        
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="https://res.cloudinary.com/dwe4p22ut/image/upload/v1748386314/hero-4_gmdtes.jpg"
              alt="Professional Service Team"
              className=" shadow-lg w-full h-[500px] md:h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;