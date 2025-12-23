import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import HeroSection from './components/hero_section';
import ProblemSection from './components/problem_section';
import ProblemMissionSection from './components/problem_mission_section';
import HowItWorksSection from './components/how_it_works_section';
import CommunitySection from './components/community_section';
import TrustedBackedSection from './components/trusted_backed_section';
import DownloadSection from './components/download_section';
import Footer from './components/footer';
import SplashScreen from './components/splash_screen';
import ScrollToTopButton from './components/ScrollToTopButton';
import NewsletterModal from './components/newsletter_modal';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from "@vercel/analytics/react";

function App() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(() => {
    // Check if splash has been shown in this session
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    return hasSeenSplash !== 'true';
  });
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  
  // Check if we should open newsletter modal from navigation state
  useEffect(() => {
    if (location.state?.openNewsletter) {
      setIsNewsletterModalOpen(true);
      // Clear the state
      window.history.replaceState({}, document.title);
    }
  }, [location]);
  
  // Prevent scrolling when splash screen is visible
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      // Save that splash has been shown
      sessionStorage.setItem('hasSeenSplash', 'true');
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showSplash]);

  return (
    <div className="min-h-screen font-manrope bg-black">
      
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      
      {/* Always render the main content, but control visibility with opacity */}
      <div 
        className={`transition-opacity duration-500 ${showSplash ? 'opacity-0' : 'opacity-100'}`}
        style={{ visibility: showSplash ? 'hidden' : 'visible' }}
      >
        {/* Navbar - Always visible */}
        <Navbar />
        
        <main>
          <HeroSection />
          <ProblemSection />
          <ProblemMissionSection />
          {/* <FeaturesSection /> */}
          <HowItWorksSection />
          <CommunitySection />
          <TrustedBackedSection />
          {/* <LocationSection /> */}
          <DownloadSection /> 
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
      
      {/* Newsletter Modal */}
      <NewsletterModal 
        isOpen={isNewsletterModalOpen} 
        onClose={() => setIsNewsletterModalOpen(false)} 
      />
      
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
