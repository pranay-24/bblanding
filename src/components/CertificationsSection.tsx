import React from 'react';

const CertificationsSection: React.FC = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4" style={{ maxWidth: '650px'}}>
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted & Certified</h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            BlueBest is proud to be recognized by industry leaders and maintain the highest standards of service.
          </p>
        </div> */}

         <div className="flex items-center justify-center w-full  mx-auto mb-12">
  
        <div className="flex-1 h-0.5 bg-orange-500"></div>
        
       
        <div className="px-4">
            <img 
                src="https://res.cloudinary.com/dwe4p22ut/image/upload/v1748440410/new-blue-best-ornament_jnhios.svg" 
                alt="Logo" 
                className="w-12 h-12 object-contain"
            />
        </div>
        
       
        <div className="flex-1 h-0.5 bg-orange-500"></div>
    </div>

        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"> */}
          {/* These would normally be actual images, using placeholder divs for the example */}
          {/* <div className="h-20 w-48 bg-blue-light rounded flex items-center justify-center">
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
          </div> */}
        {/* </div> */}

 <div className="grid grid-cols-2 md:grid-cols-4 gap-0 items-center justify-items-center">
      {/* Using placeholder images with styled containers */}
      <div className="p-3 h-full w-100 bg-transparent  flex items-center justify-center">
        <img src="https://res.cloudinary.com/dwe4p22ut/image/upload/v1747858371/bbb-accredited-business-logo_hv3udv.webp" alt="BBB Accredited" className="max-h-16" />
      </div>
      <div className="p-3 h-full w-[240px] bg-transparent  flex items-center justify-center">
        <img src="https://res.cloudinary.com/dwe4p22ut/image/upload/v1747858371/04635b494c4e2d7444da429e7ef4ce32.soap-solid-border_rez6j4.webp" alt="HomeAdvisor Pro" className="max-h-16" />
      </div>
      <div className="p-3 h-full w-100 bg-blue-primary flex items-center justify-center">
        <img src="https://res.cloudinary.com/dwe4p22ut/image/upload/v1747858371/lennox-premier-dealer-logo-white_iei5wl.webp" alt="Lennox Premier" className="max-h-16" />
      </div>
      <div className="p-3 h-full w-100 bg-transparent  flex items-center justify-center">
        <img src="https://res.cloudinary.com/dwe4p22ut/image/upload/v1747858371/image_123650291-2_psxo08.webp" alt="Pro Network" className="max-h-16" />
      </div>
    </div>

        <div className="text-center mt-8">
          <p className="text-blue-primary font-medium">Amana Pro Trusted Dealer</p>
        </div>
{/* 
       <div className="grid  bg-blue-primary  grid-cols-1 md:grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto">
      
      <div className="flex items-center justify-center p-4">
        <div className="w-[100px] md:w-full aspect-square ">
          <img 
            src="https://res.cloudinary.com/dwe4p22ut/image/upload/v1747859201/MedalLogo_t4d2x4.webp" 
            alt="Award placeholder" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
   
      <div className="md:col-span-2 pt-0 pb-8 pl-8 pr-8 md:p-8 rounded-lg text-center md:text-left">
        <h3 className="text-2xl font-bold text-white mb-4">Three-Time Winner Best of State, 2023-2025</h3>
        <p className="text-white">
          The Best of State Judges recognize BlueBest for excellence in service, innovation, and contribution to the quality of life in Utah.
        </p>
      </div>
    </div> */}
      </div>
    </section>
  );
};

export default CertificationsSection;