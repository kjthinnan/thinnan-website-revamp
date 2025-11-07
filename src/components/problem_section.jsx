import { useState, useEffect, useRef } from 'react';

const ProblemSection = () => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
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
        setCount(targetValue); // Ensure final value is exact
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
        threshold: 0.3, // Trigger when 30% of section is visible
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

  // Format number without commas (no decimals, show all digits) - matches reference
  const formatNumber = (num) => {
    return Math.floor(num).toString();
  };

  // Source links data
  const sources = [
    { id: 1, url: '#', label: '1' },
    { id: 2, url: '#', label: '2' },
    { id: 3, url: '#', label: '3' },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-background overflow-hidden min-h-screen flex items-center font-manrope"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 w-full relative z-10 overflow-x-hidden">
        {/* Main Content Container - Left Aligned */}
        <div className="flex flex-col justify-center min-h-[70vh] w-full">
          
          {/* Tagline Above Number */}
          <div 
            className="mb-8 sm:mb-10 md:mb-12"
            style={{
              opacity: hasAnimated ? 1 : 0,
              transform: hasAnimated ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-primary-text leading-tight">
              digital fatigue is real.
            </p>
          </div>

          {/* Large Filled Number */}
          <div 
            className="mb-6 sm:mb-8 md:mb-10 w-full"
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
                letterSpacing: '-0.02em',
                fontWeight: 700,
                fontSize: 'clamp(1.5rem, 5vw, 8rem)',
                display: 'block',
                maxWidth: '100%',
                wordBreak: 'break-all',
                overflowWrap: 'break-word',
                lineHeight: '1',
              }}
            >
              {formatNumber(count)}
            </h1>
          </div>

          {/* Text Below Number - Left Aligned */}
          <div 
            className="space-y-2 sm:space-y-3"
            style={{
              opacity: hasAnimated ? 1 : 0,
              transform: hasAnimated ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 1s ease-out 0.4s, transform 1s ease-out 0.4s',
            }}
          >
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-primary-text leading-tight">
              billion people
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-primary-text leading-tight">
              long for in person experiences!
            </p>
          </div>
        </div>

        {/* Source Links - Bottom Right */}
        <div 
          className="absolute bottom-6 sm:bottom-8 md:bottom-12 right-6 sm:right-8 md:right-12 lg:right-16"
          style={{
            opacity: hasAnimated ? 1 : 0,
            transition: 'opacity 1s ease-out 0.8s',
          }}
        >
          <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg text-secondary-grey">
            <span className="font-normal">source:</span>
            <div className="flex items-center gap-1">
              {sources.map((source, index) => (
                <span key={source.id} className="flex items-center">
                  <a
                    href={source.url}
                    className="hover:text-primary-text transition-colors duration-200 underline decoration-1 underline-offset-2"
                    style={{
                      textDecorationColor: 'rgba(108, 108, 108, 0.4)',
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      // Add your source link handling here
                      console.log(`Source ${source.id} clicked`);
                    }}
                  >
                    {source.label}
                  </a>
                  {index < sources.length - 1 && <span className="mx-0.5">.</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
