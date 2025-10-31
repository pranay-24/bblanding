import React, { useState, useEffect, useRef } from 'react';

 export function MultiColumnSectionFurnace() {
  return (
     <section className=" " id="offers">
        <div className="lg:container mx-auto px-4 py-16">


 <h2 className=" text-3xl md:text-4xl font-bold text-blue-primary mb-4 text-center">
            This Season’s Best Furnace Offers
            </h2>

  {/* Column 1 - Takes 33% on desktop, full width on mobile */}
  
  <div className="flex flex-col md:flex-row bg-white p-2 rounded-lg h-42 md:h-full  mx-auto ">
  
     
  

   {/* Column 2 - Takes 22% on desktop (1/3 of remaining 66%), half width on mobile */}
   <div className="w-full md:w-[33%]  p-3 flex justify-center ">
   <div className="flex flex-col bg-white p-2 rounded-lg h-42 md:h-full border-4 border-[var(--orange-dark)] w-full">

    <div className="text-center">
   {/* Sub heading */}
   {/* <div className="text-xs md:text-sm font-semibold text-gray-600 uppercase mb-1">
     AWARD WINNING
   </div> */}
  
   {/* Main heading */}
   <div className="text-3xl md:text-4xl font-bold text-blue-primary-dark uppercase mb-2">
    $49/MONTH
   </div>
  
   {/* Secondary sub heading */}
   <div className="text-lg md:text-lg font-semibold text-black uppercase mb-2">
    FURNACE TUNE-UP + FREE SMART THERMOSTAT
   </div>
  
   {/* Paragraph */}
   {/* <p className="text-base md:text-base text-black  mb-2 leading-tight">
     In rebates and tax incentives!
   </p>
   */}
   {/* Sub text */}
   {/* <div className="text-sm md:text-sm text-black italic">
    *25-C tax credit, terms and conditions apply.
   </div> */}
 </div>
   </div>
    
   </div>

   {/* Column 3 - Takes 22% on desktop (1/3 of remaining 66%), half width on mobile */}
   <div className="w-full md:w-[33%] flex  p-3 justify-center">
    <div className="flex flex-col bg-white p-2 rounded-lg h-42 md:h-full border-4 border-[var(--orange-dark)] w-full">

     <div className="text-center">
   {/* Sub heading */}
   {/* <div className="text-xs md:text-sm font-semibold text-gray-600 uppercase mb-1">
     AWARD WINNING
   </div> */}
  
   {/* Main heading */}
   <div className="text-3xl md:text-4xl font-bold text-blue-primary-dark uppercase mb-2">
    UP TO $2,000 OFF
   </div>
  
   {/* Secondary sub heading */}
   <div className="text-lg md:text-lg font-semibold text-black uppercase mb-2">
    FURNACE TRADE-IN SAVINGS
   </div>
  
   {/* Paragraph */}
   {/* <p className="text-xs md:text-sm text-black  mb-2 leading-tight">
     10-year parts & labor warranty. Lifetime unit replacement. Heat exchanger warranty.
   </p> */}
  
   {/* Sub text */}
   {/* <div className="text-sm md:text-sm text-black italic">
    *Terms and conditions apply.
   </div> */}
 </div>
    </div>
    
   </div>


  
   {/* Column 4 - Takes 22% on desktop (1/3 of remaining 66%), full width centered on mobile */}
   <div className="w-full md:w-[33%] flex justify-center p-3 mx-auto md:mx-0">
      <div className="flex flex-col bg-white p-2 rounded-lg h-42 md:h-full border-4 border-[var(--orange-dark)] w-full">

      <div className="text-center">
   {/* Sub heading */}
   {/* <div className="text-xs md:text-sm font-semibold text-gray-600 uppercase mb-1">
     AWARD WINNING
   </div> */}
  
   {/* Main heading */}
   <div className="text-3xl md:text-4xl font-bold text-blue-primary-dark uppercase mb-2">
   0% FINANCING
   </div>
  
   {/* Secondary sub heading */}
   <div className="text-lg md:text-lg font-semibold text-black uppercase mb-2">
    FOR 12 MONTHS ON NEW FURNACE SYSTEMS
   </div>
  
   {/* Paragraph */}
   {/* <p className="text-xs md:text-sm text-black  mb-2 leading-tight">
     Emergency service available 24/7!
   </p> */}
  
   {/* Sub text */}
   {/* <div className="text-sm md:text-sm text-black italic">
    Must present offer at time of service Expires 6/30/25.
   </div> */}
 </div>
      </div>
    
   </div>


  </div>
  
  </div>




        </section>
  )
}