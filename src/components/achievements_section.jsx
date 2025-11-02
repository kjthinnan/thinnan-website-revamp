import { useState, useEffect, useRef, useMemo } from 'react';

// Import achievements data
import achievements from '../data/achievements';

const AchievementsSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const contentRef = useRef(null);

  // Number of items to display at once
  const VISIBLE_ITEMS = 3;

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate which items to show based on selected index - memoized to prevent glitching
  const visibleAchievements = useMemo(() => {
    const visibleIndices = [];
    const totalItems = achievements.length;
    
    // Center the selected item in the visible window
    const startOffset = Math.floor(VISIBLE_ITEMS / 2);
    
    for (let i = 0; i < VISIBLE_ITEMS; i++) {
      const index = (selectedIndex - startOffset + i + totalItems) % totalItems;
      visibleIndices.push(index);
    }
    
    return visibleIndices.map(index => ({
      ...achievements[index],
      originalIndex: index
    }));
  }, [selectedIndex]);

  // Auto-rotate through ALL achievements - ONLY on mobile
  useEffect(() => {
    if (!isMobile) return; // Only auto-rotate on mobile
    
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % achievements.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isMobile]);

  // Check if modal content needs scrolling
  useEffect(() => {
    if (contentRef.current) {
      const checkScrollable = () => {
        const element = contentRef.current;
        setShowScrollIndicator(element.scrollHeight > element.clientHeight);
      };
      
      checkScrollable();
      window.addEventListener('resize', checkScrollable);
      
      return () => {
        window.removeEventListener('resize', checkScrollable);
      };
    }
  }, [selectedAchievement]);

  const handleDialClick = (originalIndex) => {
    if (originalIndex !== selectedIndex && !isAnimating) {
      setIsAnimating(true);
      setSelectedIndex(originalIndex);
      setTimeout(() => setIsAnimating(false), 700);
    }
  };

  const openModal = (achievement) => {
    setSelectedAchievement(achievement);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedAchievement(null);
    document.body.style.overflow = 'auto';
  };

  // Handle click outside to close modal
  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      closeModal();
    }
  };

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedAchievement) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedAchievement]);

  // Handle swipe to close on mobile
  const handleTouchStart = useRef({ x: 0, y: 0 });
  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const startX = handleTouchStart.current.x;
    const startY = handleTouchStart.current.y;
    
    const xDiff = startX - touchEndX;
    const yDiff = startY - touchEndY;
    
    if (Math.abs(xDiff) > Math.abs(yDiff) && Math.abs(xDiff) > 50) {
      closeModal();
    }
  };

  return (
    <section id="achievements" className="py-20 sm:py-28 md:py-36 relative overflow-hidden bg-white">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-3 relative">
              our achievements
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Milestones that mark our journey in connecting food lovers
          </p>
        </div>

        {/* Dial Design Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Side - Dial/Navigation - Shows 3 items at a time */}
          <div className="lg:col-span-5 relative overflow-hidden flex">
            <div className="w-full" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '12px', willChange: 'auto' }}>
              {visibleAchievements.map((achievement, displayIndex) => {
                const isSelected = achievement.originalIndex === selectedIndex;
                const distanceFromSelected = Math.abs(displayIndex - Math.floor(VISIBLE_ITEMS / 2));
                
                return (
                  <div
                    key={`${achievement.id}-${achievement.originalIndex}`}
                    onClick={() => handleDialClick(achievement.originalIndex)}
                    className={`relative cursor-pointer transform transition-all duration-700 ease-out group overflow-hidden rounded-3xl ${
                      isSelected ? 'z-10' : 'z-0'
                    }`}
                    style={{
                      opacity: isSelected ? 1 : Math.max(0.5, 1 - (distanceFromSelected * 0.15)),
                      transform: `scale(${isSelected ? 1 : 0.96}) translateY(${isSelected ? '0' : '2px'})`,
                      transition: 'opacity 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94), background 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94), min-height 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94), flex-grow 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      height: 'auto',
                      minHeight: isSelected ? '220px' : '180px',
                      flexGrow: isSelected ? 1.2 : 1,
                      background: isSelected 
                        ? 'linear-gradient(to right, rgba(124, 49, 10, 0.06), rgba(255, 255, 255, 0.3), transparent)' 
                        : 'transparent',
                      willChange: 'transform, opacity, background',
                    }}
                  >
                    {/* Enhanced selection indicator - gradient border with glow */}
                    <div 
                      className={`absolute inset-0 rounded-3xl transition-all duration-700 ease-out ${
                        isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'
                      }`}
                      style={{
                        background: isSelected 
                          ? 'linear-gradient(135deg, rgba(124, 49, 10, 0.15), rgba(124, 49, 10, 0.05), rgba(124, 49, 10, 0.08))' 
                          : 'linear-gradient(135deg, rgba(124, 49, 10, 0.08), rgba(124, 49, 10, 0.03), rgba(124, 49, 10, 0.08))',
                        boxShadow: isSelected 
                          ? 'inset 0 0 0 2px rgba(124, 49, 10, 0.25)' 
                          : 'inset 0 0 0 1px rgba(124, 49, 10, 0.08)',
                        transition: 'all 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      }}
                    ></div>
                    
                    <div 
                      className="pl-6 pr-4 py-6 transition-all duration-700 relative"
                      style={{
                        minHeight: isSelected ? '200px' : '160px',
                        transition: 'min-height 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      }}
                    >
                      {/* Hover shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                      
                      {/* Date badge with dot */}
                      <div className="flex items-center gap-3 mb-4">
                        <div 
                          className={`rounded-full transition-all duration-700 ${
                            isSelected ? 'w-2.5 h-2.5' : 'w-2 h-2'
                          }`}
                          style={{
                            background: isSelected 
                              ? 'linear-gradient(135deg, rgba(124, 49, 10, 1), rgba(124, 49, 10, 0.8))' 
                              : 'linear-gradient(135deg, rgba(124, 49, 10, 0.4), rgba(124, 49, 10, 0.2))',
                            boxShadow: isSelected 
                              ? '0 0 8px rgba(124, 49, 10, 0.5)' 
                              : 'none',
                            transform: isSelected ? 'scale(1.2)' : 'scale(1)',
                            transition: 'all 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                            flexShrink: 0,
                          }}
                        ></div>
                        <span 
                          className={`text-sm font-semibold transition-all duration-700 ${
                            isSelected ? 'text-accent' : 'text-gray-500'
                          } group-hover:text-accent`}
                          style={{
                            transition: 'all 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                          }}
                        >
                          {achievement.date}
                        </span>
                      </div>
                      
                      {/* Title - fixed height to prevent layout shift */}
                      <h3 
                        className={`font-bold leading-tight transition-all duration-700 relative ${
                          isSelected ? 'text-black' : 'text-gray-600 group-hover:text-gray-800'
                        }`}
                        style={{
                          fontSize: isSelected 
                            ? 'clamp(1.5rem, 3vw, 2.25rem)' 
                            : 'clamp(1.25rem, 2.5vw, 1.5rem)',
                          minHeight: 'clamp(2rem, 4vw, 3rem)',
                          lineHeight: '1.2',
                          transition: 'font-size 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94), color 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                          textShadow: isSelected 
                            ? '0 1px 2px rgba(0, 0, 0, 0.03)' 
                            : 'none',
                        }}
                      >
                        {achievement.title}
                        {/* Gradient underline on hover for non-selected */}
                        {!isSelected && (
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-transparent group-hover:w-full transition-all duration-500 ease-out"></span>
                        )}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Expanded Card */}
          <div className="lg:col-span-7">
            <div 
              className="relative group cursor-pointer transition-all duration-700"
              style={{
                opacity: isAnimating ? 0.6 : 1,
                transform: isAnimating ? 'scale(0.97)' : 'scale(1)',
                transition: 'opacity 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                willChange: 'transform, opacity',
              }}
              onClick={() => openModal(achievements[selectedIndex])}
            >
              {/* Card Container */}
              <div className="relative rounded-3xl overflow-hidden bg-white shadow-2xl border border-gray-100 hover:shadow-accent/20 transition-all duration-700 ease-out" style={{ transition: 'all 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}>
                
                {/* Image Section */}
                <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
                  {/* Image with parallax effect on hover */}
                  <div className="absolute inset-0 transform group-hover:scale-110 transition-transform duration-1000" style={{ transition: 'transform 1000ms cubic-bezier(0.4, 0.0, 0.2, 1)' }}>
                    <img 
                      src={achievements[selectedIndex].image}
                      alt={achievements[selectedIndex].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Floating badge */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-5 py-2.5 rounded-2xl border border-white/10 transition-all duration-700" style={{ transition: 'all 700ms cubic-bezier(0.4, 0.0, 0.2, 1)' }}>
                    <span className="text-white text-sm font-medium">{achievements[selectedIndex].date}</span>
                  </div>
                  
                  {/* Click indicator */}
                  <div className="absolute bottom-4 right-4 bg-accent/90 backdrop-blur-sm p-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110" style={{ transition: 'all 500ms cubic-bezier(0.4, 0.0, 0.2, 1)' }}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>

                {/* Content Section - Description below image */}
                <div className="p-6 sm:p-8">
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed line-clamp-3">
                    {achievements[selectedIndex].description}
                  </p>
                  
                  {/* Read More Button */}
                  <div className="flex items-center gap-2 text-accent font-medium group-hover:gap-4 transition-all duration-300 mt-6">
                    <span>Read full story</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-accent/20 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transition: 'opacity 500ms cubic-bezier(0.4, 0.0, 0.2, 1)' }}></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-accent/20 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transition: 'opacity 500ms cubic-bezier(0.4, 0.0, 0.2, 1)' }}></div>
              </div>

              {/* Card shadow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/10 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" style={{ transition: 'opacity 700ms cubic-bezier(0.4, 0.0, 0.2, 1)' }}></div>
            </div>

            {/* Navigation Dots - for all achievements */}
            <div className="flex justify-center gap-2 mt-8 flex-wrap">
              {achievements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDialClick(index)}
                  className="transition-all duration-1000 rounded-full"
                  style={{
                    width: index === selectedIndex ? '48px' : '8px',
                    height: '8px',
                    backgroundColor: index === selectedIndex ? '#7C310A' : '#D1D5DB',
                    transition: 'all 1000ms cubic-bezier(0.4, 0.0, 0.2, 1)',
                  }}
                  aria-label={`Go to achievement ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal - Amazing UI with animations */}
      {selectedAchievement && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[100] p-2 sm:p-4 modal-backdrop animate-fadeIn"
          onClick={handleModalClick}
          onTouchStart={(e) => {
            handleTouchStart.current = {
              x: e.touches[0].clientX,
              y: e.touches[0].clientY
            };
          }}
          onTouchEnd={handleTouchEnd}
        >
          <div className="bg-white rounded-3xl sm:rounded-[2rem] w-full max-w-6xl max-h-[95vh] overflow-hidden flex flex-col relative shadow-2xl animate-scaleIn">
            {/* Close button with beautiful hover effect */}
            <button 
              className="absolute top-4 sm:top-6 right-4 sm:right-6 z-30 bg-white/90 hover:bg-accent rounded-full p-3 text-black hover:text-white transition-all duration-300 shadow-lg hover:shadow-accent/50 transform hover:rotate-90 hover:scale-110 group"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Swipe indicator for mobile */}
            <div className="md:hidden absolute top-1/2 left-4 transform -translate-y-1/2 opacity-40 z-20 pointer-events-none animate-pulse">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            
            <div className="flex flex-col md:flex-row overflow-hidden h-full">
              {/* Image side with stunning overlay */}
              <div className="w-full md:w-1/2 h-56 xs:h-64 sm:h-80 md:h-auto bg-black relative overflow-hidden">
                <img 
                  src={selectedAchievement.image} 
                  alt={selectedAchievement.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Floating date badge */}
                <div className="absolute bottom-6 left-6 bg-accent/90 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/20 shadow-lg animate-slideUp">
                  <span className="text-white font-semibold text-sm">{selectedAchievement.date}</span>
                </div>
              </div>
              
              {/* Content side */}
              <div className="w-full md:w-1/2 relative flex flex-col">
                <div 
                  ref={contentRef}
                  className="p-6 xs:p-8 sm:p-10 md:p-12 overflow-y-auto flex-1 custom-scrollbar"
                >
                  {/* Achievement title */}
                  <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 leading-tight animate-slideUp">
                    {selectedAchievement.title}
                  </h3>
                  
                  {/* Full description */}
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed whitespace-pre-line animate-slideUp" style={{ animationDelay: '0.1s' }}>
                      {selectedAchievement.longDescription}
                    </p>
                  </div>
                </div>
                
                {/* Scroll indicator - beautiful animated arrow */}
                {showScrollIndicator && (
                  <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4 pointer-events-none">
                    <div className="h-20 bg-gradient-to-t from-white via-white to-transparent w-full absolute bottom-0"></div>
                    <div className="animate-bounce bg-accent/20 p-3 rounded-2xl z-10 backdrop-blur-sm border border-accent/30">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-accent/20 rounded-tr-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-accent/20 rounded-bl-3xl opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.05); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { 
            opacity: 0; 
            transform: scale(0.9); 
          }
          to { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }
        
        /* Custom scrollbar for modal */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #7C310A;
          border-radius: 10px;
          opacity: 0.5;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #8B3A0E;
        }
      `}</style>
    </section>
  );
};

export default AchievementsSection; 