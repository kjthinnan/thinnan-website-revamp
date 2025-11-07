import { useState, useEffect } from 'react';
import feature1 from '../assets/images/features/feature_1.png';
import feature2 from '../assets/images/features/feature_2.png';
import feature3 from '../assets/images/features/feature_3.png';
import feature4 from '../assets/images/features/feature_4.png';
import feature5 from '../assets/images/features/feature_5.png';

const ProblemMissionSection = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const featureImages = [
    // { id: 1, image: feature1, alt: 'Thinnan Feature 1' },
    // { id: 2, image: feature2, alt: 'Thinnan Feature 2' },
    // { id: 3, image: feature3, alt: 'Thinnan Feature 3' },
    { id: 4, image: feature4, alt: 'Thinnan Feature 4' },
    { id: 5, image: feature5, alt: 'Thinnan Feature 5' },
  ];

  // Auto-rotate through feature images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % featureImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [featureImages.length]);

  const handleNext = () => {
    setCurrentCard((prev) => (prev + 1) % featureImages.length);
  };

  return (
    <section className="relative pt-12 sm:pt-16 md:pt-20 pb-20 sm:pb-28 md:pb-36 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Static Title Content */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Meet Thinnan Title */}
              <div className="inline-block">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-text mb-3 relative">
                  meet thinnan.
                </h2>
              </div>

              {/* Main Static Title */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-primary-text">
                We are bringing back the{' '}
                <span className="relative inline-block">
                  <span className="text-primary relative z-10">social</span>
                  <span className="absolute inset-0 bg-primary/10 blur-xl"></span>
                </span>
                {' '}to social media!
              </h2>

              {/* Description */}
              <p className="text-xl sm:text-2xl text-secondary-grey leading-relaxed max-w-xl">
                Food social media designed for{' '}
                <span className="text-primary font-semibold">real-life experiences</span>{' '}
                around food.
              </p>

              {/* Download Button */}
              <div className="pt-4">
                <a
                  href="https://thinnan.page.link/download"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white rounded-3xl font-semibold text-lg hover:bg-primary/90 transition-all duration-500 shadow-2xl hover:shadow-primary/30 transform hover:scale-105 group"
                  style={{ transition: 'all 500ms cubic-bezier(0.4, 0.0, 0.2, 1)' }}
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
                </a>
              </div>
            </div>
          </div>

          {/* Right - Simple Feature Images Carousel */}
          <div className="lg:col-span-1">
            <div className="relative flex items-center justify-center">
              {/* Image Container with Transitions */}
              <div 
                className="relative w-full max-w-sm mx-auto cursor-pointer group transform transition-transform duration-700 hover:scale-105"
                onClick={handleNext}
              >
                {/* Images with Fade Transition - Similar to how_it_works_section */}
                {featureImages.map((feature, index) => (
                  <div
                    key={feature.id}
                    className={`transition-opacity duration-1000 ${
                      index === currentCard ? 'opacity-100' : 'opacity-0 absolute inset-0'
                    }`}
                    style={{
                      transition: 'opacity 1000ms cubic-bezier(0.4, 0.0, 0.2, 1)',
                      position: index === currentCard ? 'relative' : 'absolute',
                    }}
                  >
                    <img
                      src={feature.image}
                      alt={feature.alt}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
                
              </div>

              {/* Progress Dots */}
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2.5 mt-8">
                {featureImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentCard(index);
                    }}
                    className="transition-all duration-700 rounded-full hover:scale-110"
                    style={{
                      width: index === currentCard ? '40px' : '10px',
                      height: '10px',
                      // Use brown color codes for both active and inactive dots
                      backgroundColor: index === currentCard ? '#8B5C2A' : '#C6A274',
                      transition: 'all 700ms cubic-bezier(0.4, 0.0, 0.2, 1)',
                    }}
                    aria-label={`Go to image ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemMissionSection;

