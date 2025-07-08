import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage1';
import ThankYouPage from './pages/ThankYouPage1';
import HomeRedirect from './pages/HomeRedirect';
import LandingPage2 from './pages/LandingPage2';
import LandingPageWH from './pages/LandingPageWH';

const App: React.FC = () => {
  // Your embed code would go here as a state variable
  // const contactFormEmbed: string = `<div class="elfsight-app-da4ddf7e-f9e6-4e90-8c35-263d1c15f25d" data-elfsight-app-lazy></div>`;
  const contactFormEmbed: string = `<div class="elfsight-app-66cf87e4-4cd5-4498-98e4-93447252644a" data-elfsight-app-lazy></div>`;
const plumbingFormEmbed : string = `<div class="elfsight-app-9ea74b87-b66a-4830-aa5d-c10757a6db11" data-elfsight-app-lazy></div>`;
const waterheaterFormEmbed : string = `<div class="elfsight-app-9fd1aba2-a3c8-4d9e-9f8e-0798ea11031e" data-elfsight-app-lazy></div>`;


  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={<HomeRedirect />} 
            />
            <Route 
              path="/hvac" 
              element={<LandingPage contactFormEmbed={contactFormEmbed} />} 
            />
            <Route 
              path="/plumbing" 
              element={<LandingPage2 contactFormEmbed={plumbingFormEmbed} />} 
            />
            <Route 
              path="/water-heater" 
              element={<LandingPageWH contactFormEmbed={waterheaterFormEmbed} />} 
            />
            <Route 
              path="/thank-you" 
              element={<ThankYouPage />} 
            />
            {/* Add more routes as needed */}
            {/* <Route 
              path="/services" 
              element={<div className="py-20 text-center">Services Page Coming Soons</div>} 
            /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;