import React, { useEffect }  from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage1';
import ThankYouPage from './pages/ThankYouPage1';
import HomeRedirect from './pages/HomeRedirect';
import LandingPage2 from './pages/LandingPage2';
import LandingPageWH from './pages/LandingPageWH';
import LandingPageTU from './pages/LandingPageTU';

const App: React.FC = () => {
  // Your embed code would go here as a state variable
  const contactFormEmbed: string = '<div class="elfsight-app-66cf87e4-4cd5-4498-98e4-93447252644a" data-elfsight-app-lazy></div>';
  const plumbingFormEmbed : string = '<div class="elfsight-app-9ea74b87-b66a-4830-aa5d-c10757a6db11" data-elfsight-app-lazy></div>';
  const waterheaterFormEmbed : string = '<div class="elfsight-app-9fd1aba2-a3c8-4d9e-9f8e-0798ea11031e" data-elfsight-app-lazy></div>';
  const tuneupFormEmbed : string = '<div class="elfsight-app-68a16ab9-1de2-4515-9130-b5b0d11544d3" data-elfsight-app-lazy></div>';

  // Facebook Pixel tracking hook
  function useFacebookPageView() {
    const location = useLocation();
    
    useEffect(() => {
      if (window.fbq) {
        // Check if this is the thank you page
        if (location.pathname === '/thank-you') {
          // Extract the source ID from URL parameters
          const urlParams = new URLSearchParams(location.search);
          const sourceId = urlParams.get('source') || urlParams.get('id') || 'unknown';
          
          // Fire Lead event for thank you page
          window.fbq('track', 'Lead', {
            content_name: getContentNameFromSource(sourceId),
            source: sourceId,
            value: 1.00, // You can adjust this value based on your lead value
            currency: 'USD'
          });
          
          //console.log('Facebook Lead event tracked from source:', sourceId);
        } else {
          // Fire regular PageView for all other pages
          window.fbq('track', 'PageView');
          //console.log('Facebook PageView tracked for:', location.pathname);
        }
      }
    }, [location.pathname, location.search]); // Include location.search to track URL parameter changes
  }

  // Helper function to map source IDs to meaningful content names
  function getContentNameFromSource(sourceId: string): string {
    const sourceMap: { [key: string]: string } = {
      'hvac': 'HVAC Service Lead',
      'plumbing': 'Plumbing Service Lead',
      'water-heater': 'Water Heater Service Lead',
      'hvac-tune-up': 'HVAC Tune-up Service Lead',
      // Add more mappings as needed
    };
    
    return sourceMap[sourceId] || `Lead from ${sourceId}`;
  }

  // Wrapper component to provide pixel tracking
  function PixelWrapper({ children }: { children: React.ReactNode }) {
    useFacebookPageView();
    return <>{children}</>;
  }

  return (
    <Router>
      <PixelWrapper>
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
                path="/hvac-tune-up" 
                element={<LandingPageTU contactFormEmbed={tuneupFormEmbed } />} 
              />
              <Route 
                path="/thank-you" 
                element={<ThankYouPage />} 
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </PixelWrapper>
    </Router>
  );
};

export default App;