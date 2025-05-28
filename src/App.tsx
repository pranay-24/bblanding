import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import HomeGenerator from './components/HomeGenerator';
import FeaturesSection from './components/FeaturesSection';
import ServicesSection from './components/ServicesSection';
import SpecialsSection from './components/SpecialsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CertificationsSection from './components/CertificationsSection';
import Footer from './components/Footer';
import AvoidHeadaches from './components/AvoidHeadaches'
import ProcessSection from './components/ProcessSection'
import SecondaryHero from './components/SecondaryHero'

function App() {
  // Your embed code would go here as a state variable
  const contactFormEmbed = `<div class="elfsight-app-da4ddf7e-f9e6-4e90-8c35-263d1c15f25d" data-elfsight-app-lazy></div>`;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero contactFormEmbed={contactFormEmbed} />
       
       <AvoidHeadaches contactFormEmbed={contactFormEmbed}/>
                 
        <SecondaryHero/>
        
       <div className="bg-[url('https://res.cloudinary.com/dwe4p22ut/image/upload/v1747858949/Orange-Tones-BG-1_kf4kpy.webp')] bg-cover bg-center bg-no-repeat">
       <FeaturesSection/>
         </div>
        {/* <FeaturesSection />
        <SpecialsSection /> */}
         <div className="
    bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%),url('https://res.cloudinary.com/dwe4p22ut/image/upload/v1747853406/toparticlewrapperbg_wyeckj.webp')]
    bg-cover
    bg-center
    bg-no-repeat
  ">
        <TestimonialsSection />
        <ProcessSection/>
         <CertificationsSection />
        </div>

        
        
      
       
      </main>
      <Footer />
    </div>
  );
}


export default App;