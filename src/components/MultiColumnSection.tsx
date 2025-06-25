import React, { useState, useEffect, useRef } from 'react';

 export function MultiColumnSection() {
  return (
     <section className=" " id="offers">
        <div className="lg:container mx-auto px-4 py-16">




  {/* Column 1 - Takes 33% on desktop, full width on mobile */}
  
  <div className="flex flex-col bg-white p-2 rounded-lg h-42 md:h-full max-w-xl mx-auto border-4 border-[var(--orange-dark)]">
  
     <div className="text-center">
      <div className="text-2xl md:text-2xl font-bold text-orange-500 uppercase mb-2">
   OFFER
  </div>


  {/* Sub heading */}
  <div className="text-sm md:text-sm font-semibold text-black uppercase mb-1">
   GET UP TO
  </div>
  
  {/* Main heading */}
  <div className="text-2xl md:text-2xl font-bold text-blue-primary-dark uppercase mb-2">
   $6,300 CASH BACK
  </div>
  
  {/* Secondary sub heading */}
  <div className="text-lg md:text-lg font-semibold text-black uppercase mb-2">
    IN REBATES AND TAX INCENTIVES!
  </div>
  
  {/* Paragraph */}
  <p className="text-base md:text-lg text-orange-600 mb-2 leading-tight">
    We planned ahead and have 2024 inventory in stock at great prices!
  </p>
  
  <div className="text-sm md:text-sm text-black italic">
    *25-C tax credit, terms and conditions apply.
  </div>

  {/* Sub text */}
  <div className="text-sm md:text-sm text-black italic">
    *Must present offer at time of service Expires 7/15/25.
  </div>
</div>
  </div>
  
  </div>





        </section>
  )
}



//  export function MultiColumnSection() {
//   return (
//      <section className=" " id="offers">
//         <div className="lg:container mx-auto px-4 py-16">
// <div className="bg-[var(--orange-dark)] rounded-lg flex flex-wrap  mx-auto p-3">

//   {/* Column 1 - Takes 33% on desktop, full width on mobile */}
//   <div className="w-full md:w-1/3  bg-transparent p-3 flex justify-center">
//   <div className="flex flex-col bg-white p-2 rounded-lg h-42 md:h-full ">
  
//      <div className="text-center">
//   {/* Sub heading */}
//   <div className="text-sm md:text-sm font-semibold text-gray-600 uppercase mb-1">
//    GET UP TO
//   </div>
  
//   {/* Main heading */}
//   <div className="text-2xl md:text-2xl font-bold text-blue-primary-dark uppercase mb-2">
//    $6,300 CASH BACK
//   </div>
  
//   {/* Secondary sub heading */}
//   <div className="text-lg md:text-lg font-semibold text-black uppercase mb-2">
//     IN REBATES AND TAX INCENTIVES!
//   </div>
  
//   {/* Paragraph */}
//   <p className="text-base md:text-lg text-orange-600 mb-2 leading-tight">
//     We planned ahead and have 2024 inventory in stock at great prices!
//   </p>
  
//   <div className="text-sm md:text-sm text-black italic">
//     *25-C tax credit, terms and conditions apply.
//   </div>

//   {/* Sub text */}
//   <div className="text-sm md:text-sm text-black italic">
//     *Must present offer at time of service Expires 7/15/25.
//   </div>
// </div>
//   </div>
  
//   </div>

//   Column 2 - Takes 22% on desktop (1/3 of remaining 66%), half width on mobile
//   <div className="w-full md:w-[22%]  p-3 flex justify-center">
//   <div className="flex flex-col bg-white p-2 rounded-lg h-42 md:h-full ">

//    <div className="text-center">
//   {/* Sub heading */}
//   {/* <div className="text-xs md:text-sm font-semibold text-gray-600 uppercase mb-1">
//     AWARD WINNING
//   </div> */}
  
//   {/* Main heading */}
//   <div className="text-2xl md:text-2xl font-bold text-blue-primary-dark uppercase mb-2">
//    Free
//   </div>
  
//   {/* Secondary sub heading */}
//   <div className="text-lg md:text-lg font-semibold text-black uppercase mb-2">
//    CAMERA INSPECTION
//   </div>
  
//   {/* Paragraph */}
//   <p className="text-base md:text-base text-black  mb-2 leading-tight">
//     Recognized for excellence in heating and cooling solutions across the state.
//   </p>
  
//   {/* Sub text */}
//   <div className="text-sm md:text-sm text-black italic">
//    Must present offer at time of service Expires 7/15/25.
//   </div>
// </div>
//   </div>
    
//   </div>

//   {/* Column 3 - Takes 22% on desktop (1/3 of remaining 66%), half width on mobile */}
//   <div className="w-full md:w-[22%] flex  p-3 justify-center">
//    <div className="flex flex-col bg-white p-2 rounded-lg h-42 md:h-full ">

//     <div className="text-center">
//   {/* Sub heading */}
//   {/* <div className="text-xs md:text-sm font-semibold text-gray-600 uppercase mb-1">
//     AWARD WINNING
//   </div> */}
  
//   {/* Main heading */}
//   <div className="text-2xl md:text-2xl font-bold text-blue-primary-dark uppercase mb-2">
//    $99
//   </div>
  
//   {/* Secondary sub heading */}
//   <div className="text-lg md:text-lg font-semibold text-black uppercase mb-2">
//    WATER HEATER TUNE-UP + ANODE ROD CHECK
//   </div>
  
//   {/* Paragraph */}
//   {/* <p className="text-xs md:text-sm text-black  mb-2 leading-tight">
//     Recognized for excellence in heating and cooling solutions across the state.
//   </p> */}
  
//   {/* Sub text */}
//   <div className="text-sm md:text-sm text-black italic">
//    Must present offer at time of service Expires 7/15/25.
//   </div>
// </div>
//    </div>
    
//   </div>

//   {/* Column 4 - Takes 22% on desktop (1/3 of remaining 66%), full width centered on mobile */}
//   <div className="w-full md:w-[22%] flex justify-center p-3 mx-auto md:mx-0">
//      <div className="flex flex-col bg-white p-2 rounded-lg h-42 md:h-full ">

//      <div className="text-center">
//   {/* Sub heading */}
//   {/* <div className="text-xs md:text-sm font-semibold text-gray-600 uppercase mb-1">
//     AWARD WINNING
//   </div> */}
  
//   {/* Main heading */}
//   <div className="text-2xl md:text-2xl font-bold text-blue-primary-dark uppercase mb-2">
//   $500 OFF
//   </div>
  
//   {/* Secondary sub heading */}
//   <div className="text-lg md:text-lg font-semibold text-black uppercase mb-2">
//    OFF A NEW WATER HEATER
//   </div>
  
//   {/* Paragraph */}
//   {/* <p className="text-xs md:text-sm text-black  mb-2 leading-tight">
//     Recognized for excellence in heating and cooling solutions across the state.
//   </p> */}
  
//   {/* Sub text */}
//   <div className="text-sm md:text-sm text-black italic">
//    Must present offer at time of service Expires 7/15/25.
//   </div>
// </div>
//      </div>
    
//   </div>
// </div>
// </div>
//         </section>
//   )
// }



// export function MultiColumnSection() {
//   return (
//      <section className="py-16" id="offers">
//     <div className="bg-white rounded-lg grid grid-cols-2 md:grid-cols-4  max-w-4xl mx-auto  py-6 ">
//       {/* Column 1 - Two images side by side */}
//       <div className="flex flex-col p-4 border-r border-gray-300 border-b md:border-b-0">
//         <div className="mb-4 flex gap-5">
//           <img 
//             src="https://res.cloudinary.com/dwe4p22ut/image/upload/v1748383311/log-2_x9jcve.png"
//             alt="Column 1 Image 1"
//             className="w-24 h-16 object-contain"
//           />
//           <img 
//             src="https://res.cloudinary.com/dwe4p22ut/image/upload/v1748383311/logo-1_hzxybc.png"
//             alt="Column 1 Image 2"
//             className="w-24 h-16 object-contain"
//           />
//         </div>
//         <div className="text-blue-primary-dark text-md font-bold  text-center">
//           3x Best-of-State Winner – Heat & Air
//         </div>
//       </div>

//       {/* Column 2 - Single image */}
//       <div className="flex flex-col p-4 border-b md:border-b-0 md:border-r border-gray-300">
//         <div className="mb-4">
//           <img 
//             src="https://res.cloudinary.com/dwe4p22ut/image/upload/v1748383311/medal-logo-1_mr3xay.png"
//             alt="Column 2"
//             className="w-full h-16 object-contain"
//           />
//         </div>
//         <div className="text-blue-primary-dark text-md font-bold  text-center">
//           Best-of-State Winner – Plumbing
//         </div>
//       </div>

//       {/* Column 3 - Single image */}
//       <div className="flex flex-col p-4 border-r md:border-t-0 md:border-r border-gray-300">
//         <div className="mb-4">
//           <img 
//             src="https://res.cloudinary.com/dwe4p22ut/image/upload/v1748383311/goggle_logo-1_alvocy.png"
//             alt="Column 3"
//             className="w-full h-16 object-contain"
//           />
//         </div>
//         <div className="text-blue-primary-dark text-md font-bold  text-center">
//           2,000+ 5-Star Google Reviews
//         </div>
//       </div>

//       {/* Column 4 - Single image */}
//       <div className="flex flex-col p-4  md:border-t-0">
//         <div className="mb-4">
//           <img 
//             src="https://res.cloudinary.com/dwe4p22ut/image/upload/v1748383311/lennox_logo-1_wlpewc.png"
//             alt="Column 4"
//             className="w-full h-16 object-contain"
//           />
//         </div>
//         <div className="text-blue-primary-dark text-md font-bold  text-center">
//           Lennox Premier Certified Dealer
//         </div>
//       </div>
//     </div>
//     </section>
//   );
// }