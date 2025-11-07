import { useState, useEffect } from 'react';
import feature5 from '../assets/images/features/feature_5.png';
import feature4 from '../assets/images/features/feature_4.png';

const HowItWorksSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  const steps = [
    {
      id: 0,
      image: feature5,
      title: 'add your real friends',
      subtitle: 'From scroll to stove in three taps',
    },
    {
      id: 1,
      image: feature4,
      title: 'Get matched with food lovers',
      subtitle: 'No algorithms. No ads. Just real people and real food.',
    },
    {
      id: 2,
      image: feature5,
      title: 'Start planning together',
      subtitle: 'Turn content into conversation',
    },
    {
      id: 3,
      image: feature4,
      title: 'Create your cookout or eatout',
      subtitle: 'Make it official',
    },
    {
      id: 4,
      image: feature5,
      title: 'Share your story',
      subtitle: 'Capture the memories',
    }
  ];

  // Auto-rotate through steps (only if user hasn't interacted)
  useEffect(() => {
    if (userInteracted) return;
    
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [steps.length, userInteracted]);

  const goToStep = (index) => {
    if (index !== currentStep && !isAnimating && index >= 0 && index < steps.length) {
      setUserInteracted(true);
      setIsAnimating(true);
      setCurrentStep(index);
      setTimeout(() => setIsAnimating(false), 700);
    }
  };

  const goToNext = () => {
    if (currentStep < steps.length - 1 && !isAnimating) {
      goToStep(currentStep + 1);
    }
  };

  const goToPrevious = () => {
    if (currentStep > 0 && !isAnimating) {
      goToStep(currentStep - 1);
    }
  };

  // Get visible cards (previous, current, next)
  const getVisibleCards = () => {
    const visible = [];
    
    // Previous card (left preview) - only if not first slide
    if (currentStep > 0) {
      visible.push({ ...steps[currentStep - 1], position: 'left' });
    }
    
    // Current card (active)
    visible.push({ ...steps[currentStep], position: 'center' });
    
    // Next card (right preview) - only if not last slide
    if (currentStep < steps.length - 1) {
      visible.push({ ...steps[currentStep + 1], position: 'right' });
    }
    
    return visible;
  };

  return (
    <section id="how-it-works" className="py-20 sm:py-28 md:py-36 relative overflow-hidden" style={{ backgroundColor: '#FFF6EE' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        {/* Main Content - Horizontal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: '#1E1E1E' }}>
              how does it work?
            </h2>

            {/* Step Indicator */}
            <div 
              className="transition-all duration-700 flex items-center"
              style={{
                opacity: isAnimating ? 0.7 : 1,
                transform: isAnimating ? 'translateX(-10px)' : 'translateX(0)',
              }}
            >
              <p className="text-lg sm:text-xl md:text-2xl font-medium" style={{ color: '#6C6C6C' }}>
                step {currentStep + 1}
              </p>
            </div>

            {/* Instruction/Title */}
            <div 
              className="transition-all duration-700 flex items-start"
              style={{
                opacity: isAnimating ? 0.7 : 1,
                transform: isAnimating ? 'translateX(-10px)' : 'translateX(0)',
                transitionDelay: '100ms',
              }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" style={{ color: '#1E1E1E' }}>
                {steps[currentStep].title}
              </h3>
            </div>

            {/* Subtitle */}
            <div 
              className="transition-all duration-700 flex items-start"
              style={{
                opacity: isAnimating ? 0.7 : 1,
                transform: isAnimating ? 'translateX(-10px)' : 'translateX(0)',
                transitionDelay: '200ms',
              }}
            >
              <p className="text-base sm:text-lg md:text-xl" style={{ color: '#6C6C6C' }}>
                {steps[currentStep].subtitle}
              </p>
            </div>
          </div>

          {/* Right Side - Horizontal Carousel with Blurred Previews */}
          <div className="relative flex items-center justify-center lg:justify-end py-12 lg:py-16">
            {/* Carousel Container - Fixed height with proper overflow handling */}
            <div className="relative w-full max-w-[420px] h-[700px] sm:h-[800px] md:h-[850px] lg:h-[900px]">
              {getVisibleCards().map((card) => {
                const isActive = card.position === 'center';
                const isLeftPreview = card.position === 'left';
                const isRightPreview = card.position === 'right';

                const handleClick = () => {
                  if (isLeftPreview) {
                    goToPrevious();
                  } else if (isRightPreview) {
                    goToNext();
                  }
                };

                return (
                  <div
                    key={`${card.id}-${currentStep}-${card.position}`}
                    className={`absolute top-1/2 left-1/2 w-[300px] h-[620px] sm:w-[330px] sm:h-[683px] md:w-[360px] md:h-[745px] lg:w-[380px] lg:h-[786px] transition-all duration-700 ease-out group ${
                      !isActive ? 'cursor-pointer hover:scale-[0.87]' : ''
                    }`}
                    onClick={!isActive ? handleClick : undefined}
                    style={{
                      transform: isActive
                        ? 'translate(-50%, -50%) scale(1)'
                        : isLeftPreview
                        ? 'translate(calc(-50% - 160px), -50%) scale(0.85)'
                        : 'translate(calc(-50% + 160px), -50%) scale(0.85)',
                      opacity: isActive ? 1 : 0.6,
                      zIndex: isActive ? 30 : isLeftPreview ? 10 : 20,
                      filter: isActive ? 'blur(0px)' : 'blur(2px)',
                      transition: 'all 700ms cubic-bezier(0.4, 0.0, 0.2, 1)',
                    }}
                  >
                    <div className="relative w-full h-full rounded-3xl overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover block rounded-3xl"
                        style={{
                          transform: isActive ? 'scale(1)' : 'scale(1.05)',
                          transition: 'transform 700ms cubic-bezier(0.4, 0.0, 0.2, 1)',
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Navigation Dots - Centered Below Carousel */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-12 sm:mt-16">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setUserInteracted(true);
                goToStep(index);
              }}
              className="transition-all duration-500 rounded-full hover:scale-110"
              style={{
                width: index === currentStep ? '40px' : '10px',
                height: '10px',
                backgroundColor: index === currentStep ? '#7C310A' : '#D1D5DB',
                transition: 'all 500ms cubic-bezier(0.4, 0.0, 0.2, 1)',
              }}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;