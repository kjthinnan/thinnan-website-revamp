import { useEffect, useState } from 'react';
import foodVideo from '../assets/videos/food_video.mp4';
const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [buttonText, setButtonText] = useState('join thinnan');

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY + 100; // Offset for transition
        
        if (scrollPosition > heroBottom) {
          setIsScrolled(true);
          setButtonText('download now');
        } else {
          setIsScrolled(false);
          setButtonText('join thinnan');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section with Video Background */}
      <section id="hero" className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={foodVideo} type="video/mp4" />
          </video>
          
          {/* Video Overlay - Darkened for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Top Logo */}
          <div className="px-6 sm:px-8 md:px-12 py-6 sm:py-8">
            <div className="flex items-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 sm:w-7 sm:h-7">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <span className="ml-3 text-white font-medium text-sm sm:text-base">thinnan</span>
            </div>
          </div>

          {/* Center Content */}
          <div className="flex-1 flex items-center justify-center px-6 sm:px-8 md:px-12 pb-20">
            <div className="max-w-4xl w-full">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6 sm:mb-8">
                <span className="text-white">thinnan</span>
                <br />
                <span className="text-white">for </span>
                <span className="text-[#FFA726]">real life</span>
                <br />
                <span className="text-white">food experiences</span>
              </h1>
            </div>
          </div>

          {/* Bottom Right Button - Static in hero, will become sticky */}
          <div className="absolute bottom-8 right-6 sm:bottom-12 sm:right-8 md:right-12 z-20">
            <a
              href="https://thinnan.page.link/download"
              className="inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-3 sm:py-4 bg-white text-black rounded-full font-medium text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-accent/30 transform hover:scale-105"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </section>

      {/* Sticky Button - Shows after scrolling past hero */}
      <div
        className={`fixed top-6 right-6 sm:top-8 sm:right-8 md:right-12 z-[60] transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        <a
          href="https://thinnan.page.link/download"
          className="inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-3 sm:py-4 bg-white text-black rounded-full font-medium text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-accent/30 transform hover:scale-105 border border-gray-200"
        >
          download now
        </a>
      </div>
    </>
  );
};

export default HeroSection; 