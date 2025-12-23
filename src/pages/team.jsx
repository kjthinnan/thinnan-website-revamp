import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import NewsletterModal from '../components/newsletter_modal';
import FoundersSection from '../components/founders_section';
import HowItStartedSection from '../components/how_it_started_section';
import AchievementsSection from '../components/achievements_section';

const Team = () => {
  const location = useLocation();
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);

  useEffect(() => {
    // Check if we should open newsletter modal from navigation state
    if (location.state?.openNewsletter) {
      setIsNewsletterModalOpen(true);
      // Clear the state
      window.history.replaceState({}, document.title);
    }

    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen font-manrope bg-background">
      <Navbar />
      <main>
        <HowItStartedSection />
        <FoundersSection />
        <AchievementsSection />
      </main>
      <Footer />
      <ScrollToTopButton />

      {/* Newsletter Modal */}
      <NewsletterModal 
        isOpen={isNewsletterModalOpen} 
        onClose={() => setIsNewsletterModalOpen(false)} 
      />
    </div>
  );
};

export default Team;

