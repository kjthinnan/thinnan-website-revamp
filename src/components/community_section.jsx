import { useState, useEffect, useRef } from 'react';

const CommunitySection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);
  
  const reviews = [
    {
      text: "Not sure how I can cycle back home after eating too much 😅 Appam was delicious and unique experience!",
      author: "Anonymous"
    },
    {
      text: "Loved learning cooking stuffed bell peppers Bulgarian way. The sauce made out of Yogurt, milk and eggs served with bell peppers was totally new and it tasted very delicious..",
      author: "Food Explorer"
    },
    {
      text: "Buonissimo!!😋",
      author: "Italian Food Lover"
    },
    {
      text: "I must say Chimichurri opened up a new part of my brain.",
      author: "Culinary Adventurer"
    },
    {
      text: "kidukkachi!!",
      author: "Satisfied Guest"
    },
    {
      text: "I was craving shawarma recently after seeing some reels, and this hit the spot! The chicken shawarma was so flavorful and the rice was just what I needed after a long, stressful day. Perfect combo. Definitely coming back for more! 🔥",
      author: "Shawarma Lover"
    },
    {
      text: "Kekri over the years have started to become the festival and look forward in Autumn. But there soup is so simple and delicious. I'll be taking this to my kitchen :)",
      author: "Festival Foodie"
    },
    {
      text: "cozy, tasty, homely, safe space. bring conversations to make things more interesting, the range of personalities and interests allow for diversity. The hosts are lovely and the food yummy. I hope to be back for more.",
      author: "Community Member"
    },
    {
      text: "First time I had Pho was at Pho viet restaurant at Helsinki. I didn't like and ever since I had stayed away from Pho at all viet restaurants. But today, I realised if done correctly, Pho tastes amazing!! Thanks Basanta and Sisam :)",
      author: "Pho Convert"
    },
    {
      text: "De (wait-for-it) licious😋",
      author: "Taste Enthusiast"
    },
    {
      text: "I had great time. Very delicious food! The aroma, flavor and taste are incomparable to what we get in restaurants around Helsinki!",
      author: "Happy Diner"
    },
    {
      text: "thankyouuuu for coming from Paris and cooking really nice pastries for us. Visit us more please 😋😋",
      author: "Pastry Fan"
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
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

  // Auto-advance carousel on mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [reviews.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section 
      ref={sectionRef}
      id="community" 
      className="pt-10 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24 pb-16 sm:pb-20 md:pb-28 lg:pb-36 xl:py-44 relative overflow-hidden bg-secondary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">

        {/* Section Header */}
        <div
          className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20 xl:mb-24 transition-all duration-1000"
          style={{
            opacity: hasAnimated ? 1 : 0,
            transform: hasAnimated ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-text mb-3 sm:mb-4 md:mb-5 relative inline-block px-4">
          what people have been whispering about us...
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-secondary-grey mt-4 sm:mt-6 md:mt-8 max-w-2xl mx-auto px-4">
            real stories from real food lovers worldwide sharing authentic experiences together
          </p>
        </div>

        {/* Mobile Carousel - Only visible on mobile */}
        <div className="sm:hidden relative">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 min-h-[280px] flex flex-col justify-between relative overflow-hidden">
                    {/* Decorative gradient */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
                    
                    {/* Quote icon */}
                    <div className="mb-4">
                      <svg className="w-8 h-8 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* Review Text */}
                    <p className="text-base text-primary-text leading-relaxed font-normal flex-grow mb-4">
                      {review.text}
                    </p>

                    {/* Author */}
                    <p className="text-sm text-secondary-grey font-medium italic">
                      — {review.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 z-10 border border-gray-200"
            aria-label="Previous review"
          >
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 z-10 border border-gray-200"
            aria-label="Next review"
          >
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? 'w-8 h-2 bg-primary'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-4 text-sm text-secondary-grey">
            {currentSlide + 1} / {reviews.length}
          </div>
        </div>

        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden sm:block">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 md:gap-8 space-y-4 sm:space-y-6 md:space-y-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="break-inside-avoid mb-4 sm:mb-6 md:mb-8 transition-all duration-700"
                style={{
                  opacity: hasAnimated ? 1 : 0,
                  transform: hasAnimated ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/20 group relative overflow-hidden">
                  {/* Decorative element */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Quote icon */}
                  <div className="mb-3 sm:mb-4">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary/20 group-hover:text-primary/40 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Review Text */}
                  <p className="text-sm sm:text-base md:text-lg text-primary-text leading-relaxed font-normal">
                    {review.text}
                  </p>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500 rounded-xl sm:rounded-2xl md:rounded-3xl pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
