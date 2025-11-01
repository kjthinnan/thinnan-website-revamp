import { useState } from 'react';

const ProblemSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const problems = [
    {
      id: 1,
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Endless scrolling, zero experiences',
      description: 'Feeds full of content, empty of connection',
      color: '#FF6B6B',
      gradient: 'from-red-50 to-orange-50'
    },
    {
      id: 2,
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 13.87A4 4 0 017.25 11M18 13.87A4 4 0 0116.75 11M11 10a4 4 0 014-4m-4 4a4 4 0 00-4-4m8 4v6m-4-6v6m-4-6v6M3 21h18" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Restaurants feel routine, cooking feels lonely',
      description: 'Food lost its social spark',
      color: '#FFA726',
      gradient: 'from-orange-50 to-yellow-50'
    },
    {
      id: 3,
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Friends stay digital, connection stays shallow',
      description: 'We crave real moments together',
      color: '#7C310A',
      gradient: 'from-orange-50 to-red-50'
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 md:py-40 bg-background overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-light"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-light" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Dots */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-accent/20 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-32 left-40 w-2 h-2 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        {/* Scroll Indicator */}
        <div className="flex justify-center mb-12 animate-bounce">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-text leading-tight">
            Social media moved online.
            <br />
            <span className="relative inline-block mt-2">
              Life didn't.
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full transform scale-x-0 animate-scaleIn" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}></div>
            </span>
          </h2>
        </div>

        {/* Problems - Creative Diagonal Layout */}
        <div className="relative mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
            {problems.map((problem, index) => (
              <div
                key={problem.id}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {/* Connecting Line (Desktop) */}
                {index < problems.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-6 w-8 lg:w-12 h-0.5 bg-gradient-to-r from-primary/30 to-transparent transform -translate-y-1/2 z-0">
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-primary to-accent transform origin-left transition-transform duration-700 scale-x-0 group-hover:scale-x-100"
                    ></div>
                  </div>
                )}

                {/* Problem Container */}
                <div
                  className={`relative overflow-hidden transition-all duration-700 ease-out ${
                    hoveredIndex === index
                      ? 'transform -translate-y-4'
                      : hoveredIndex !== null
                      ? 'transform scale-95 opacity-70'
                      : 'transform scale-100 opacity-100'
                  }`}
                >
                  {/* Background Gradient - Appears on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} rounded-3xl transition-opacity duration-700 ${
                      hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  ></div>

                  {/* Content */}
                  <div className="relative p-8 sm:p-10">
                    {/* Icon Container */}
                    <div className="mb-8 relative">
                      <div
                        className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center transition-all duration-700 ${
                          hoveredIndex === index
                            ? 'transform rotate-12 scale-110'
                            : 'transform rotate-0 scale-100'
                        }`}
                        style={{
                          backgroundColor: hoveredIndex === index ? `${problem.color}15` : '#FFF6EE',
                          color: problem.color,
                        }}
                      >
                        <div className="w-10 h-10">
                          {problem.icon}
                        </div>
                      </div>
                      
                      {/* Animated Ring */}
                      <div
                        className={`absolute inset-0 mx-auto w-20 h-20 rounded-2xl border-2 transition-all duration-700 ${
                          hoveredIndex === index
                            ? 'scale-125 opacity-0'
                            : 'scale-100 opacity-0'
                        }`}
                        style={{ borderColor: problem.color }}
                      ></div>
                    </div>

                    {/* Text Content */}
                    <div className="text-center space-y-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-primary-text leading-tight px-2">
                        {problem.title}
                      </h3>
                      
                      {/* Description - Slides in on hover */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          hoveredIndex === index
                            ? 'max-h-20 opacity-100'
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-base text-secondary-grey">
                          {problem.description}
                        </p>
                      </div>
                    </div>

                    {/* Decorative Corner Element */}
                    <div
                      className={`absolute top-4 right-4 w-8 h-8 rounded-full transition-all duration-700 ${
                        hoveredIndex === index
                          ? 'scale-100 opacity-100 rotate-180'
                          : 'scale-0 opacity-0 rotate-0'
                      }`}
                      style={{ backgroundColor: `${problem.color}20` }}
                    ></div>
                  </div>

                  {/* Bottom Border Accent */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 rounded-full transition-all duration-700 transform origin-left ${
                      hoveredIndex === index ? 'scale-x-100' : 'scale-x-0'
                    }`}
                    style={{ backgroundColor: problem.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xl sm:text-2xl md:text-3xl text-secondary-grey font-light leading-relaxed">
            We believe food is meant to bring people together—
            <span className="text-primary font-medium">not just fill feeds.</span>
          </p>
        </div>

        {/* Subtle Divider */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

