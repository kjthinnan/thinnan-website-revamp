import { useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import FoundersSection from '../components/founders_section';
import HowItStartedSection from '../components/how_it_started_section';
import AchievementsSection from '../components/achievements_section';

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    </div>
  );
};

export default Team;

