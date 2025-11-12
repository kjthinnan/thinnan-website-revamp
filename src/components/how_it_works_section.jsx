import { useState, useEffect, useRef } from 'react';
import section1 from '../assets/videos/how_it_works/section_1.webm';
import section2 from '../assets/videos/how_it_works/section_2.webm';
import section3 from '../assets/videos/how_it_works/section_3.webm';
import section4 from '../assets/videos/how_it_works/section_4.webm';
import section5 from '../assets/videos/how_it_works/section_5.webm';
import section6 from '../assets/videos/how_it_works/section_6.webm';

const HowItWorksSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const videoRefs = useRef({});

  const steps = [
    {
      id: 0,
      video: section1,
      title: 'choose your friends',
      subtitle: 'Connect with the people who matter most',
    },
    {
      id: 1,
      video: section2,
      title: 'share your craving',
      subtitle: 'Share what you\'re craving right now',
    },
    {
      id: 2,
      video: section3,
      title: 'match your cravings',
      subtitle: 'Find friends who want the same thing',
    },
    {
      id: 3,
      video: section4,
      title: 'open up a group chat',
      subtitle: 'Start the conversation with matched people',
    },
    {
      id: 4,
      video: section5,
      title: 'make plans together',
      subtitle: 'Make it happen together',
    },
    {
      id: 5,
      video: section6,
      title: 'share your stories',
      subtitle: 'Capture and share your food adventures',
    }
  ];

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Handle video playback and auto-advance
  useEffect(() => {
    if (!isInView) return;

    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      // Move to next step after video ends (10 seconds)
      if (!userInteracted) {
        const nextStep = (currentStep + 1) % steps.length;
        handleStepChange(nextStep);
      }
    };

    // Fallback timer in case video doesn't fire 'ended' event (11 seconds to be safe)
    const fallbackTimer = setTimeout(() => {
      if (!userInteracted) {
        const nextStep = (currentStep + 1) % steps.length;
        handleStepChange(nextStep);
      }
    }, 11000);

    video.addEventListener('ended', handleVideoEnd);
    
    return () => {
      video.removeEventListener('ended', handleVideoEnd);
      clearTimeout(fallbackTimer);
    };
  }, [currentStep, isInView, userInteracted, steps.length]);

  // Reset and play video when step changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isInView) return;

    // Pause and unload previous videos to save memory
    Object.keys(videoRefs.current).forEach(key => {
      const idx = parseInt(key);
      if (idx !== currentStep && videoRefs.current[key]) {
        videoRefs.current[key].pause();
        videoRefs.current[key].currentTime = 0;
      }
    });

    // Small delay to ensure smooth transition
    setTimeout(() => {
      video.load();
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Video play prevented:", error);
        });
      }
    }, 100);
  }, [currentStep, isInView]);

  const handleStepChange = (newStep) => {
    if (newStep === currentStep) return;
    
    setIsTransitioning(true);
    
    // Fade out
    setTimeout(() => {
      setCurrentStep(newStep);
      
      // Fade in
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 400);
  };

  const goToStep = (index) => {
    if (index !== currentStep && index >= 0 && index < steps.length) {
      setUserInteracted(true);
      handleStepChange(index);
    }
  };

  const goToPrevious = () => {
    const prevStep = currentStep === 0 ? steps.length - 1 : currentStep - 1;
    goToStep(prevStep);
  };

  const goToNext = () => {
    const nextStep = (currentStep + 1) % steps.length;
    goToStep(nextStep);
  };

  return (
    <section 
      ref={sectionRef}
      id="how-it-works" 
      className="pt-48 sm:pt-36 md:pt-40 lg:pt-48 pb-20 sm:pb-28 md:pb-36 lg:pb-44 relative overflow-hidden bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        {/* Main Content - Horizontal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center order-1 lg:order-1">
            
            {/* Small heading - Fixed */}
            <div className="mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-text">
                how does it work?
              </h2>
            </div>

            {/* Content area with fixed height to prevent shifting */}
            <div className="min-h-[350px] sm:min-h-[380px] md:min-h-[420px] flex flex-col justify-start">
              {/* Main Title with smooth transition */}
              <div 
                className="transition-all duration-500 ease-out mb-6 sm:mb-8"
                style={{
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning ? 'translateY(-10px)' : 'translateY(0)',
                }}
              >
                <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary-text">
                  {steps[currentStep].title}
                </h3>
              </div>

              {/* Subtitle with smooth transition */}
              <div 
                className="transition-all duration-500 ease-out mb-6 sm:mb-8"
                style={{
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning ? 'translateY(-10px)' : 'translateY(0)',
                  transitionDelay: isTransitioning ? '0ms' : '100ms',
                }}
              >
                <p className="text-lg sm:text-xl md:text-2xl text-secondary-grey leading-relaxed max-w-xl">
                  {steps[currentStep].subtitle}
                </p>
              </div>
            </div>

            {/* Navigation Arrows - Fixed at bottom */}
            <div className="flex items-center gap-4">
              {/* Previous Arrow */}
              <button
                onClick={goToPrevious}
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:bg-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Previous step"
              >
                <svg 
                  className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300 transform group-hover:-translate-x-0.5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Step Counter */}
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full">
                <span className="text-base font-semibold text-primary">
                  {currentStep + 1} / {steps.length}
                </span>
              </div>

              {/* Next Arrow */}
              <button
                onClick={goToNext}
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:bg-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Next step"
              >
                <svg 
                  className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-0.5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Video */}
          <div className="relative flex items-center justify-center lg:justify-end order-2 lg:order-2">
            <div className="relative w-full max-w-[400px] sm:max-w-[460px] md:max-w-[520px] lg:max-w-[580px]">
              {/* Video Container with exact aspect ratio (720:898) */}
              <div 
                className="relative rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden shadow-2xl"
                style={{ aspectRatio: '720/898' }}
              >
                {/* Video Stack with Cross-fade */}
                {steps.map((step, index) => {
                  const isActive = index === currentStep;
                  const isAdjacent = Math.abs(index - currentStep) <= 1;
                  const shouldLoad = isActive || (isInView && isAdjacent);

                  return (
                    <div
                      key={step.id}
                      className="absolute inset-0 transition-all duration-500 ease-in-out"
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive 
                          ? 'scale(1)' 
                          : index < currentStep 
                            ? 'scale(0.95)'
                            : 'scale(1.05)',
                        zIndex: isActive ? 10 : 5,
                        pointerEvents: isActive ? 'auto' : 'none',
                      }}
                    >
                      {shouldLoad && (
                        <video
                          ref={(el) => {
                            if (isActive) {
                              videoRef.current = el;
                            }
                            videoRefs.current[index] = el;
                          }}
                          src={step.video}
                          className="w-full h-full object-cover"
                          playsInline
                          muted
                          preload={isActive ? "auto" : "metadata"}
                          loading="lazy"
                        />
                      )}
                    </div>
                  );
                })}

                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Decorative glow effect */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 blur-3xl opacity-20 transition-opacity duration-700"
                style={{
                  background: 'radial-gradient(circle, #7C310A 0%, transparent 70%)',
                }}
              ></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
