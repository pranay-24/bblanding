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

function App() {
  // Your embed code would go here as a state variable
  const contactFormEmbed = `<div>Contact Form Embed Code Here</div>`;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* <Hero contactFormEmbed={contactFormEmbed} /> */}
        <AboutSection />
        <HomeGenerator/>
        <ServicesSection />
        <FeaturesSection />
        <SpecialsSection />
        <TestimonialsSection />
        <CertificationsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;