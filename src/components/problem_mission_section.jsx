import { useState, useEffect } from 'react';
import feature4 from '../assets/images/features/feature_4.png';
import feature5 from '../assets/images/features/feature_5.png';
import { handleAppDownload } from '../utils/getStoreLink';

const ProblemMissionSection = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const featureImages = [
    { id: 4, image: feature4, alt: 'Thinnan Feature 4' },
    { id: 5, image: feature5, alt: 'Thinnan Feature 5' },
  ];

  // Auto-rotate through feature images
  useEffect(() => {
    const timer = setInterval(() => {
      handleCardChange((prev) => (prev + 1) % featureImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [featureImages.length]);

  const handleCardChange = (newCardOrFunction) => {
    setIsTransitioning(true);

    setTimeout(() => {
      if (typeof newCardOrFunction === 'function') {
        setCurrentCard(newCardOrFunction);
      } else {
        setCurrentCard(newCardOrFunction);
      }
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  return (
    <section className="relative py-14 sm:py-20 md:py-28 lg:py-32 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        {/* Main Content - Reversed Layout (Image Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Phone Screenshots */}
          <div className="flex items-center justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px]">
              {/* All images stacked with cross-fade effect */}
              {featureImages.map((feature, index) => (
                <img
                  key={feature.id}
                  src={feature.image}
                  alt={feature.alt}
                  className="w-full h-auto transition-opacity duration-700 ease-in-out"
                  style={{
                    opacity: index === currentCard ? 1 : 0,
                    position: index === currentCard ? 'relative' : 'absolute',
                    top: index === currentCard ? 'auto' : 0,
                    left: index === currentCard ? 'auto' : 0,
                    zIndex: index === currentCard ? 10 : 5,
                    pointerEvents: index === currentCard ? 'auto' : 'none',
                  }}
                  loading="lazy"
                />
              ))}
              {/* Progress Dots - Below phone */}
              <div className="flex justify-center gap-3 mt-8">
                {featureImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (index !== currentCard) handleCardChange(index);
                    }}
                    className="transition-all duration-500 ease-out rounded-full hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    style={{
                      width: index === currentCard ? '48px' : '12px',
                      height: '12px',
                      backgroundColor: index === currentCard ? '#7C310A' : '#D1D5DB',
                      transition: 'all 500ms cubic-bezier(0.4, 0.0, 0.2, 1)',
                    }}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="flex flex-col justify-center space-y-8 sm:space-y-10 order-1 lg:order-2">
            {/* Small heading */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-text">
                meet thinnan.
              </h2>
            </div>
            {/* Main Title */}
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary-text">
                We are bringing back the{' '}
                <span className="relative inline-block">
                  <span className="text-primary relative z-10">social</span>
                  <span className="absolute inset-0 bg-primary/10 blur-xl"></span>
                </span>
                {' '}to social media!
              </h2>
            </div>
            {/* Description */}
            <div>
              <p className="text-lg sm:text-xl md:text-2xl text-secondary-grey leading-relaxed max-w-xl">
                Food social media designed for{' '}
                <span className="text-primary font-semibold">real-life experiences</span>{' '}
                around food.
              </p>
            </div>
            {/* Download Button */}
            <div className="pt-4">
              <button
                onClick={handleAppDownload}
                className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-primary text-white rounded-2xl sm:rounded-3xl font-semibold text-base sm:text-lg hover:bg-primary/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-primary/30 transform hover:scale-105 group cursor-pointer"
              >
                <span>Download Now</span>
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemMissionSection;

