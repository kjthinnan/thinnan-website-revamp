import { useState, useEffect } from 'react';

// Import backed/trusted logos
import logoOne from '../assets/images/backed/one.png';
import logoTwo from '../assets/images/backed/two.png';
import logoThree from '../assets/images/backed/three.png';
import logoFour from '../assets/images/backed/four.png';
import logoFive from '../assets/images/backed/five.png';

const TrustedBackedSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Logo data with actual images
  const logos = [
    { id: 1, name: "Partner 1", image: logoOne },
    { id: 2, name: "Partner 2", image: logoTwo },
    { id: 3, name: "Partner 3", image: logoThree },
    { id: 4, name: "Partner 4", image: logoFour },
    { id: 5, name: "Partner 5", image: logoFive }
  ];

  return (
    <section className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-20 sm:pb-28 md:pb-36 lg:pb-44 relative overflow-hidden bg-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 sm:mb-20 md:mb-24 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-text mb-3 relative lowercase">
              trusted & backed by
              <div className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-secondary-grey mt-8 max-w-2xl mx-auto">
            supported by world-class partners and advisors who believe in our vision
          </p>
        </div>

        {/* Logos in a single static row, plain images only, larger size */}
        <div className="flex justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {logos.map((logo, index) => (
            <img
              key={logo.id}
              src={logo.image}
              alt={logo.name}
              className={`w-auto h-16 sm:h-20 md:h-24 lg:h-28 object-contain transition-all duration-1000 ${
                isLoaded 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            />
          ))}
        </div>

        {/* Optional: Trust statement */}
        <div 
          className={`mt-16 sm:mt-20 md:mt-24 text-center transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <p className="text-sm sm:text-base text-secondary-grey italic">
            building the future of social dining together
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedBackedSection;

