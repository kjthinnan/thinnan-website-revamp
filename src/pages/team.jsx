import { useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import FoundersSection from '../components/founders_section';
import HowItStartedSection from '../components/how_it_started_section';
import AchievementsSection from '../components/achievements_section';
import SEO from '../components/SEO';

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-manrope bg-background">
      <SEO
        title="Thinnan Team – Founders, Story, and Achievements"
        description="Meet the Thinnan team, learn how our journey started, and explore the achievements that shape our social food network."
        keywords="thinnan team, thinnan founders, thinnan achievements, company story"
        url="https://thinnan.com/team"
        image="/src/assets/images/thinnan-social-share.png"
      />
      <Navbar />
      <main className="pt-20 sm:pt-24 md:pt-28">
        <FoundersSection />
        <HowItStartedSection />
        <AchievementsSection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Team;

