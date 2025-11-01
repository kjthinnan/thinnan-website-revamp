import { useState, useEffect } from 'react';

const ProblemMissionSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 1,
      title: 'We are bringing back the social to social media!',
      highlight: 'social',
      subtitle: 'hands & food!',
      tagline: 'thinnan',
      description: 'food social media designed for in-real life experiences around food.'
    },
    {
      id: 2,
      title: 'Turn dishes you see online into real meals with friends.',
      highlight: 'real meals',
      subtitle: 'from screen to table',
      tagline: 'thinnan',
      description: 'turn food content into real life experiences.'
    },
    {
      id: 3,
      title: 'Where food brings friends together!',
      highlight: 'friends together',
      subtitle: 'connections over cuisine',
      tagline: 'thinnan',
      description: 'for real life food experiences'
    },
    {
      id: 4,
      title: 'Turn food content into eatouts or cookouts.',
      highlight: 'eatouts or cookouts',
      subtitle: 'make it happen',
      tagline: 'thinnan',
      description: 'food social media, food content → real meals, with friends & others.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide, slides.length]);

  const handleNextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsAnimating(false);
    }, 300);
  };

  const handleSlideChange = (index) => {
    if (index !== currentSlide && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <section className="relative py-20 sm:py-28 md:py-36 bg-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-text">
            meet thinnan
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - Content Carousel */}
          <div className="lg:col-span-1">
            <div className="relative min-h-[400px] flex flex-col justify-center">
              {/* Carousel Content */}
              <div className="relative">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`transition-all duration-500 ease-in-out ${
                      index === currentSlide
                        ? 'opacity-100 translate-x-0 relative'
                        : 'opacity-0 absolute inset-0 translate-x-10 pointer-events-none'
                    }`}
                  >
                    <div className="space-y-6">
                      {/* Tagline */}
                      <div className="text-sm font-medium text-primary-text opacity-70">
                        {slide.tagline}
                      </div>

                      {/* Main Title */}
                      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-text">
                        {slide.title.split(slide.highlight)[0]}
                        <span className="text-primary">{slide.highlight}</span>
                        {slide.title.split(slide.highlight)[1]}
                      </h2>

                      {/* Description */}
                      <p className="text-lg sm:text-xl text-secondary-grey leading-relaxed">
                        {slide.description}
                      </p>

                      {/* Download Button */}
                      <div className="pt-4">
                        <a
                          href="https://thinnan.page.link/download"
                          className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-medium text-base hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20 transform hover:scale-105"
                        >
                          Download Now
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Dots */}
              <div className="flex items-center gap-3 mt-12">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleSlideChange(index)}
                    className="group relative"
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    <div
                      className={`transition-all duration-500 ease-in-out rounded-full ${
                        index === currentSlide
                          ? 'w-12 h-3 bg-primary'
                          : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                      }`}
                    ></div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Visual Cards */}
          <div className="lg:col-span-1 hidden lg:block">
            <div className="relative h-[500px]">
              {/* Card Stack with 3D Effect */}
              <div className="relative w-full h-full">
                {/* Back Card */}
                <div
                  className={`absolute top-0 right-0 w-64 h-80 bg-secondary rounded-3xl shadow-xl transform transition-all duration-700 ease-out ${
                    isAnimating ? 'translate-x-4 translate-y-4 rotate-6' : 'translate-x-8 translate-y-8 rotate-6'
                  }`}
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #FEEEDF 0%, #FFF6EE 100%)',
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="text-center space-y-4">
                      <div className="inline-block px-6 py-3 bg-primary/10 rounded-full">
                        <span className="text-xl font-bold text-primary">Cookouts</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Middle Card */}
                <div
                  className={`absolute top-8 right-4 w-64 h-80 bg-white rounded-3xl shadow-2xl transform transition-all duration-700 ease-out ${
                    isAnimating ? 'translate-x-2 translate-y-2 rotate-3' : 'translate-x-4 translate-y-4 rotate-3'
                  }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="text-center space-y-4">
                      <div className="inline-block px-6 py-3 bg-accent/10 rounded-full">
                        <span className="text-xl font-bold text-accent">Real Meals</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Front Card - Main Focus */}
                <div
                  className={`absolute top-16 right-8 w-64 h-80 bg-white rounded-3xl shadow-2xl transform transition-all duration-700 ease-out ${
                    isAnimating ? 'scale-95 opacity-90' : 'scale-100 opacity-100'
                  }`}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 space-y-6">
                    {/* Placeholder for image */}
                    <div className="w-full h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-primary/40"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="space-y-2 text-center">
                      <div className="inline-block px-6 py-3 bg-primary rounded-full">
                        <span className="text-lg font-bold text-white">Food Social</span>
                      </div>
                      <p className="text-sm text-secondary-grey">Connect over cuisine</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tags */}
              <div
                className={`absolute top-4 left-0 transition-all duration-700 ${
                  isAnimating ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
                }`}
              >
                <div className="inline-block px-5 py-2 bg-white rounded-full shadow-lg border border-gray-100">
                  <span className="text-sm font-medium text-primary-text">hands & food!</span>
                </div>
              </div>

              <div
                className={`absolute bottom-8 left-4 transition-all duration-700 delay-100 ${
                  isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                }`}
              >
                <div className="inline-block px-5 py-2 bg-white rounded-full shadow-lg border border-gray-100">
                  <span className="text-sm font-medium text-primary-text">real experiences</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemMissionSection;

