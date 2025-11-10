import { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import HeroSection from './components/hero_section';
import ProblemSection from './components/problem_section';
import ProblemMissionSection from './components/problem_mission_section';
import FeaturesSection from './components/features_section';
import HowItWorksSection from './components/how_it_works_section';
import CommunitySection from './components/community_section';
import TrustedBackedSection from './components/trusted_backed_section';
import LocationSection from './components/location_section';
import DownloadSection from './components/download_section';
import Footer from './components/footer';
import SplashScreen from './components/splash_screen';
import ScrollToTopButton from './components/ScrollToTopButton';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from "@vercel/analytics/react";
import SEO from './components/SEO';

function App() {
  const [showSplash, setShowSplash] = useState(() => {
    // Check if splash has been shown in this session
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    return hasSeenSplash !== 'true';
  });
  
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

  // Structured data for the homepage
  const structuredData = [
    // WebApplication Schema
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Thinnan - Social Food Network",
      "url": "https://thinnan.com",
      "description": "Thinnan is a social food network where you can cook together, share recipes, make friends, and discover amazing culinary experiences.",
      "applicationCategory": "SocialNetworking, FoodAndDrink",
      "operatingSystem": "iOS, Android",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "screenshot": "https://thinnan.com/app-screenshot.jpg",
      "featureList": "Host or Join Cookouts, Discover Cookouts, Shared Stories, Build Your Network, Earn Badges",
      "author": {
        "@type": "Organization",
        "name": "Thinnan",
        "url": "https://thinnan.com"
      }
    },
    // SoftwareApplication Schema
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Thinnan App",
      "operatingSystem": "iOS, Android",
      "applicationCategory": "LifestyleApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1250"
      },
      "description": "Connect with food lovers, discover recipes, and create memorable cooking experiences with friends."
    },
    // Organization Schema
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Thinnan",
      "url": "https://thinnan.com",
      "logo": "https://thinnan.com/logo.png",
      "sameAs": [
        "https://facebook.com/thinnanapp",
        "https://twitter.com/thinnanapp",
        "https://instagram.com/thinnanapp"
      ],
      "description": "Thinnan is a social food network platform that connects food enthusiasts, enabling them to cook together, share recipes, and build meaningful relationships through culinary experiences."
    }
  ];

  return (
    <div className="min-h-screen font-manrope bg-black">
      <SEO 
        title="Thinnan – Social Food Network | Cook Together, Share Recipes, Make Friends"
        description="Join Thinnan, the social food network app where you can cook together, share recipes, make friends, and discover amazing culinary experiences."
        keywords="thinnan, social food network, food social media, community, food, happiness, friends, cooking together, recipes, cooking videos, culinary experiences, food sharing, food community, cookouts"
        url="https://thinnan.com"
        image="/src/assets/images/thinnan-social-share.png"
        structuredData={structuredData}
      />
      
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
      
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
