import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage1';
import ThankYouPage from './pages/ThankYouPage1';

const App: React.FC = () => {
  // Your embed code would go here as a state variable
  const contactFormEmbed: string = `<div class="elfsight-app-da4ddf7e-f9e6-4e90-8c35-263d1c15f25d" data-elfsight-app-lazy></div>`;

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={<LandingPage contactFormEmbed={contactFormEmbed} />} 
            />
            <Route 
              path="/thank-you" 
              element={<ThankYouPage />} 
            />
            {/* Add more routes as needed */}
            <Route 
              path="/services" 
              element={<div className="py-20 text-center">Services Page Coming Soons</div>} 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;