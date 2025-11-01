import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// Import achievements data
import achievements from '../data/achievements';

const AchievementsSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const contentRef = useRef(null);
  const navigate = useNavigate();

  // Number of items to display at once
  const VISIBLE_ITEMS = 4;

  // Calculate which items to show based on selected index
  const getVisibleAchievements = () => {
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
  };

  // Auto-rotate through ALL achievements
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % achievements.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

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
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const openModal = (achievement) => {
    setSelectedAchievement(achievement);
    document.body.style.overflow = 'hidden';
  };

  const visibleAchievements = getVisibleAchievements();

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
    <section id="achievements" className="py-16 sm:py-20 md:py-28 lg:py-32 relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      {/* Floating accent blobs */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Side - Dial/Navigation - Shows 4 items at a time */}
          <div className="lg:col-span-5 relative overflow-hidden">
            <div className="space-y-3">
              {visibleAchievements.map((achievement, displayIndex) => {
                const isSelected = achievement.originalIndex === selectedIndex;
                const distanceFromSelected = Math.abs(displayIndex - Math.floor(VISIBLE_ITEMS / 2));
                
                return (
                  <div
                    key={`${achievement.id}-${achievement.originalIndex}`}
                    onClick={() => handleDialClick(achievement.originalIndex)}
                    className="relative cursor-pointer transform transition-all duration-700 ease-in-out"
                    style={{
                      opacity: isSelected ? 1 : Math.max(0.4, 1 - (distanceFromSelected * 0.2)),
                      transform: `scale(${isSelected ? 1 : 0.95})`,
                    }}
                  >
                    {/* Active indicator line */}
                    <div 
                      className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full transition-all duration-700 ease-in-out"
                      style={{
                        backgroundColor: isSelected ? '#7C310A' : '#E5E7EB',
                        boxShadow: isSelected ? '0 0 10px rgba(124, 49, 10, 0.5)' : 'none',
                      }}
                    ></div>
                    
                    <div 
                      className="pl-6 pr-4 py-6 rounded-xl transition-all duration-700 ease-in-out hover:bg-gray-50"
                      style={{
                        background: isSelected 
                          ? 'linear-gradient(to right, rgba(124, 49, 10, 0.05), transparent)' 
                          : 'transparent',
                      }}
                    >
                      {/* Date badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <div 
                          className="w-2 h-2 rounded-full transition-all duration-700 ease-in-out"
                          style={{
                            backgroundColor: isSelected ? '#7C310A' : '#D1D5DB',
                            transform: isSelected ? 'scale(1.25)' : 'scale(1)',
                          }}
                        ></div>
                        <span 
                          className="text-sm font-medium transition-all duration-700 ease-in-out"
                          style={{
                            color: isSelected ? '#7C310A' : '#6B7280',
                          }}
                        >
                          {achievement.date}
                        </span>
                      </div>
                      
                      {/* Title - smooth size transitions */}
                      <h3 
                        className="font-bold leading-tight transition-all duration-700 ease-in-out"
                        style={{
                          fontSize: isSelected 
                            ? 'clamp(1.5rem, 3vw, 2.25rem)' 
                            : 'clamp(1.25rem, 2.5vw, 1.5rem)',
                          color: isSelected ? '#000000' : '#4B5563',
                        }}
                      >
                        {achievement.title}
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
              className="relative group cursor-pointer transition-all duration-700 ease-in-out"
              style={{
                opacity: isAnimating ? 0.5 : 1,
                transform: isAnimating ? 'scale(0.95)' : 'scale(1)',
              }}
              onClick={() => openModal(achievements[selectedIndex])}
            >
              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-2xl border border-gray-100 hover:shadow-accent/20 transition-all duration-500">
                
                {/* Image Section */}
                <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
                  {/* Image with parallax effect on hover */}
                  <div className="absolute inset-0 transform group-hover:scale-110 transition-transform duration-700 ease-out">
                    <img 
                      src={achievements[selectedIndex].image}
                      alt={achievements[selectedIndex].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Floating badge */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                    <span className="text-white text-sm font-medium">{achievements[selectedIndex].date}</span>
                  </div>
                  
                  {/* Click indicator */}
                  <div className="absolute bottom-4 right-4 bg-accent/90 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
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
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-accent/20 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-accent/20 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Card shadow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/10 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>

            {/* Navigation Dots - for all achievements */}
            <div className="flex justify-center gap-2 mt-8 flex-wrap">
              {achievements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDialClick(index)}
                  className="transition-all duration-700 ease-in-out rounded-full"
                  style={{
                    width: index === selectedIndex ? '48px' : '8px',
                    height: '8px',
                    backgroundColor: index === selectedIndex ? '#7C310A' : '#D1D5DB',
                  }}
                  aria-label={`Go to achievement ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => navigate('/achievements')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-accent/30 group transform hover:scale-105"
          >
            <span>View all achievements</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
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
          <div className="bg-white rounded-2xl sm:rounded-3xl w-full max-w-6xl max-h-[95vh] overflow-hidden flex flex-col relative shadow-2xl animate-scaleIn">
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
                <div className="absolute bottom-6 left-6 bg-accent/90 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 shadow-lg animate-slideUp">
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
                    <div className="animate-bounce bg-accent/20 p-3 rounded-full z-10 backdrop-blur-sm border border-accent/30">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-accent/20 rounded-tr-2xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-accent/20 rounded-bl-2xl opacity-50"></div>
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