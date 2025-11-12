import { useState, useEffect, useRef } from 'react';

const ProblemSection = () => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const sectionRef = useRef(null);

  const targetValue = 1600000000; // 1.6 billion
  const duration = 3000; // 3 seconds
  const startTimeRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Easing function for smooth animation
  const easeOutCubic = (t) => {
    return 1 - Math.pow(1 - t, 3);
  };

  // Animate counter
  useEffect(() => {
    if (!hasAnimated) return;

    const animate = (currentTime) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
      }

      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const currentValue = Math.floor(easedProgress * targetValue);

      setCount(currentValue);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(targetValue);
        setIsComplete(true); // Trigger completion animation
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [hasAnimated, targetValue, duration]);

  // Intersection Observer to trigger animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            startTimeRef.current = null;
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  // Format number
  const formatNumber = (num) => {
    return Math.floor(num).toString();
  };

  // Source links data
  const sources = [
    { 
      id: 1, 
      url: 'https://news.gallup.com/poll/646718/people-worldwide-feel-lonely-lot.aspx', 
      label: '1',
      title: 'Gallup Poll - Global Loneliness Report'
    },
    { 
      id: 2, 
      url: 'https://theharrispoll.com/briefs/gen-z-social-media-smart-phones/', 
      label: '2',
      title: 'Harris Poll - Gen Z Social Media & Smartphones'
    },
    { 
      id: 3, 
      url: 'https://www.smartinsights.com/social-media-marketing/social-media-strategy/new-global-social-media-research/', 
      label: '3',
      title: 'Smart Insights - Global Social Media Research'
    },
    { 
      id: 4, 
      url: 'https://datareportal.com/reports/digital-2024-deep-dive-the-time-we-spend-on-social-media', 
      label: '4',
      title: 'DataReportal - Digital 2024: Time on Social Media'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 sm:py-28 md:py-36 lg:py-44 bg-background overflow-hidden min-h-screen flex items-center font-manrope"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 w-full relative z-10">
        
        {/* Main Content */}
        <div className="flex flex-col justify-center space-y-8 sm:space-y-12 md:space-y-16">
          
          {/* Tagline */}
          <div 
            style={{
              opacity: hasAnimated ? 1 : 0,
              transform: hasAnimated ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}
          >
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-primary-text leading-tight">
              digital fatigue is real.
            </p>
          </div>

          {/* Large Number */}
          <div 
            style={{
              opacity: hasAnimated ? 1 : 0,
              transform: hasAnimated ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s',
            }}
          >
            <h1 
              className="font-bold leading-none text-primary"
              style={{
                fontFamily: 'Manrope, sans-serif',
                letterSpacing: '-0.018em',
                fontWeight: 900,
                fontSize: 'clamp(4rem, 14vw, 11rem)',
                lineHeight: '1',
                transform: isComplete ? 'scale(1)' : 'scale(1)',
                animation: isComplete ? 'numberPulse 0.6s ease-out' : 'none',
              }}
            >
              {formatNumber(count)}
            </h1>
          </div>

          {/* Animation keyframes */}
          <style>{`
            @keyframes numberPulse {
              0% { transform: scale(1); }
              50% { transform: scale(1.1); }
              100% { transform: scale(1); }
            }
          `}</style>

          {/* Text Below Number */}
          <div 
            className="space-y-3 sm:space-y-4"
            style={{
              opacity: hasAnimated ? 1 : 0,
              transform: hasAnimated ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 1s ease-out 0.4s, transform 1s ease-out 0.4s',
            }}
          >
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-primary-text leading-tight">
              people crave
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-primary-text leading-tight">
              in-person experiences!
            </p>
          </div>
        </div>

        {/* Source Links - Enhanced Design */}
        <div 
          className="mt-16 sm:mt-20"
          style={{
            opacity: hasAnimated ? 1 : 0,
            transition: 'opacity 1s ease-out 0.8s',
          }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <span className="text-sm sm:text-base font-medium text-secondary-grey uppercase tracking-wider">
              Sources:
            </span>
            <div className="flex flex-wrap items-center gap-3">
              {sources.map((source, index) => (
                <div key={source.id} className="group relative">
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary-grey/10 hover:bg-accent text-secondary-grey hover:text-white transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-lg"
                  >
                    <span className="text-sm sm:text-base font-bold">{source.label}</span>
                  </a>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="bg-primary-text text-white text-xs sm:text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-xl max-w-[200px] sm:max-w-xs text-center">
                      {source.title}
                      {/* Arrow */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
                        <div className="border-4 border-transparent border-t-primary-text"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
