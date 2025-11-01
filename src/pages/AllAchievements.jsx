import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

// Import achievements data
import achievements from '../data/achievements';

const AllAchievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const contentRef = useRef(null);
  const navigate = useNavigate();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    // Check if content needs scrolling
    if (contentRef.current) {
      const checkScrollable = () => {
        const element = contentRef.current;
        setShowScrollIndicator(element.scrollHeight > element.clientHeight);
      };
      
      // Initial check
      checkScrollable();
      
      // Add resize listener to check again if window size changes
      window.addEventListener('resize', checkScrollable);
      
      return () => {
        window.removeEventListener('resize', checkScrollable);
      };
    }
  }, [selectedAchievement]);

  // Better navigation back to home page achievements section
  const handleBackClick = (e) => {
    e.preventDefault();
    navigate('/');
    
    // Wait for navigation to complete, then scroll to achievements section
    setTimeout(() => {
      const achievementsSection = document.getElementById('achievements');
      if (achievementsSection) {
        achievementsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const openModal = (achievement) => {
    setSelectedAchievement(achievement);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedAchievement(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Handle click outside to close modal
  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      closeModal();
    }
  };

  // Handle ESC key to close modal
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  // Handle swipe to close on mobile
  const handleTouchStart = useRef({ x: 0, y: 0 });
  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const startX = handleTouchStart.current.x;
    const startY = handleTouchStart.current.y;
    
    const xDiff = startX - touchEndX;
    const yDiff = startY - touchEndY;
    
    // Check if swipe was more horizontal than vertical and significant enough
    if (Math.abs(xDiff) > Math.abs(yDiff) && Math.abs(xDiff) > 50) {
      closeModal();
    }
  };

  return (
    <div className="min-h-screen font-manrope bg-black">
      <Navbar />
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden bg-gray-dark">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-dark to-black"></div>
        
        {/* Decorative patterns */}
        <div className="absolute inset-0 opacity-10 hidden sm:block"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23FB6B23' fill-opacity='0.2'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
        
        {/* Decorative blurs */}
        <div className="absolute -top-10 -right-10 w-32 sm:w-40 md:w-40 h-32 sm:h-40 md:h-40 bg-accent opacity-20 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-32 sm:w-40 md:w-40 h-32 sm:h-40 md:h-40 bg-accent opacity-20 rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-8 lg:px-20 relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 sm:w-24 md:w-24 h-20 sm:h-24 md:h-24 bg-accent opacity-20 rounded-full blur-xl"></div>
            <div className="mb-4">
              <button 
                onClick={handleBackClick}
                className="inline-flex items-center px-4 py-2 text-sm sm:text-base bg-black/40 backdrop-blur-sm rounded-full text-white hover:text-accent border border-white/10 hover:border-accent/30 transition-all duration-300"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </button>
            </div>
            {/* <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold relative inline-block text-white">
              All Achievements
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
            </h2>
            <p className="text-base xs:text-lg sm:text-lg md:text-lg mt-4 sm:mt-5 text-gray-300 max-w-3xl mx-auto">
              Milestones that mark our journey in connecting food lovers
            </p> */}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {achievements.map((achievement) => (
              <div 
                key={achievement.id}
                className="bg-black/40 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-accent/30 cursor-pointer"
                onClick={() => openModal(achievement)}
              >
                <div className="relative h-48 xs:h-56 sm:h-64 md:h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10"></div>
                  <div className="absolute inset-0 bg-accent/30 mix-blend-overlay group-hover:opacity-70 transition-opacity duration-300 z-0"></div>
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className={`w-full h-full object-cover ${achievement.id === 3 ? 'object-top' : ''} transition-transform duration-700 group-hover:scale-105`}
                  />
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20">
                    <span className="text-xs sm:text-sm md:text-sm text-gray-300 bg-black/60 px-2 sm:px-3 py-1 rounded-full">
                      {achievement.date}
                    </span>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6 md:p-8">
                  <h3 className="text-xl xs:text-2xl sm:text-2xl md:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                    {achievement.title}
                  </h3>
                  <p className="text-base xs:text-lg sm:text-lg md:text-lg text-gray-300 line-clamp-3">
                    {achievement.description}
                  </p>
                  
                  <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10 flex justify-between items-center">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm sm:text-base md:text-sm text-gray-400">{achievement.date}</span>
                    </div>
                    <div>
                      <span className="text-sm sm:text-base md:text-base text-accent hover:text-white transition-colors duration-300 flex items-center gap-1 opacity-70 group-hover:opacity-100">
                        Read more
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedAchievement && (
            <div 
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4 modal-backdrop touch-none"
              onClick={handleModalClick}
              onKeyDown={handleKeyDown}
              onTouchStart={(e) => {
                handleTouchStart.current = {
                  x: e.touches[0].clientX,
                  y: e.touches[0].clientY
                };
              }}
              onTouchEnd={handleTouchEnd}
              tabIndex="0"
            >
              <div className="bg-gray-dark border border-white/10 rounded-xl sm:rounded-2xl w-full max-w-5xl max-h-[95vh] overflow-hidden flex flex-col relative shadow-2xl animate-fadeIn">
                {/* Close button */}
                <button 
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 z-30 bg-black/60 rounded-full p-2 text-white hover:text-accent transition-colors duration-300"
                  onClick={closeModal}
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Swipe indicator (mobile only) */}
                <div className="md:hidden absolute top-1/2 left-4 transform -translate-y-1/2 opacity-60 z-20 pointer-events-none">
                  <div className="animate-pulse py-2">
                    <svg className="w-5 h-5 text-accent/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row overflow-hidden">
                  {/* Image side */}
                  <div className="w-full md:w-1/2 h-56 xs:h-64 sm:h-72 md:h-[500px] bg-black flex items-center justify-center">
                    <img 
                      src={selectedAchievement.image} 
                      alt={selectedAchievement.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content side */}
                  <div className="w-full md:w-1/2 relative">
                    <div 
                      ref={contentRef}
                      className="p-5 xs:p-6 sm:p-8 md:p-10 overflow-y-auto max-h-[40vh] xs:max-h-[45vh] sm:max-h-[50vh] md:max-h-[500px] scrollbar-thin scrollbar-thumb-accent/20 scrollbar-track-black/10"
                    >
                      <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 md:px-4 md:py-1.5 bg-accent/20 text-accent text-sm sm:text-base md:text-base rounded-full mb-3 sm:mb-4">
                        {selectedAchievement.date}
                      </div>
                      <h3 className="text-2xl xs:text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                        {selectedAchievement.title}
                      </h3>
                      <p className="text-base xs:text-lg sm:text-lg md:text-lg lg:text-xl text-gray-300 mb-6 leading-relaxed">
                        {selectedAchievement.longDescription}
                      </p>
                    </div>
                    
                    {/* Scroll indicator */}
                    {showScrollIndicator && (
                      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-2 pointer-events-none">
                        <div className="h-12 sm:h-16 md:h-16 bg-gradient-to-t from-gray-dark to-transparent w-full absolute bottom-0"></div>
                        <div className="animate-bounce bg-accent/20 p-1.5 sm:p-2 md:p-2 rounded-full z-10">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default AllAchievements; 