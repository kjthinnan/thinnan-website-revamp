import { useState, useEffect } from 'react';

const TrustedBackedSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Dummy logo data - replace with actual logos later
  const logos = [
    { id: 1, name: "logo 1" },
    { id: 2, name: "logo 2" },
    { id: 3, name: "logo 3" },
    { id: 4, name: "logo 4" },
    { id: 5, name: "logo 5" }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-background">
     

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-text mb-3 relative lowercase">
              trusted & backed by
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </h2>
          </div>
        </div>

        {/* Logos Grid - Horizontal Row - All in one line */}
        <div className="flex flex-nowrap justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 overflow-x-auto">
          {logos.map((logo, index) => (
            <div
              key={logo.id}
              className={`flex-shrink-0 transition-all duration-1000 ${
                isLoaded 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms` 
              }}
            >
              {/* Logo Placeholder - Cream background with brown accents */}
              <div className="bg-secondary rounded-3xl sm:rounded-[2rem] md:rounded-[2.5rem] px-8 sm:px-10 md:px-12 lg:px-16 py-6 sm:py-8 md:py-10 lg:py-12 border-2 border-secondary hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-md min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px]">
                <div className="text-center">
                  <span className="text-sm sm:text-base md:text-lg font-medium text-primary-text group-hover:text-accent transition-colors duration-300">
                    {logo.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBackedSection;

