import { useState, useEffect, useRef } from 'react';

const CommunitySection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
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
      text: "I must say Chimichurri opened up a new part of my brain.",
      author: "Culinary Adventurer"
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
      text: "I had great time. Very delicious food! The aroma, flavor and taste are incomparable to what we get in restaurants around Helsinki!",
      author: "Happy Diner"
    },
    {
      text: "thankyouuuu for coming from Paris and cooking really nice pastries for us. Visit us more please 😋😋",
      author: "Pastry Fan"
    },
    {
      text: "Buonissimo!!😋",
      author: "Italian Food Lover"
    },
    {
      text: "kidukkachi!!",
      author: "Satisfied Guest"
    },
    {
      text: "De (wait-for-it) licious😋",
      author: "Taste Enthusiast"
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

  return (
    <section 
      ref={sectionRef}
      id="community" 
      className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-20 sm:pb-28 md:pb-36 lg:pb-44 relative overflow-hidden bg-secondary"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div 
          className="text-center mb-16 sm:mb-20 md:mb-24 transition-all duration-1000"
          style={{
            opacity: hasAnimated ? 1 : 0,
            transform: hasAnimated ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-text mb-4 sm:mb-6 relative inline-block">
            what our community says
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-secondary-grey mt-6 sm:mt-8 max-w-2xl mx-auto">
            Real stories from real food lovers sharing authentic experiences
          </p>
        </div>

        {/* Reviews Grid - Masonry Style */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 sm:gap-8 space-y-6 sm:space-y-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="break-inside-avoid mb-6 sm:mb-8 transition-all duration-700"
              style={{
                opacity: hasAnimated ? 1 : 0,
                transform: hasAnimated ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/20 group relative overflow-hidden">
                {/* Decorative element */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Quote icon */}
                <div className="mb-4">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-primary/20 group-hover:text-primary/40 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Review Text */}
                <p className="text-base sm:text-lg text-primary-text leading-relaxed font-normal">
                  {review.text}
                </p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500 rounded-2xl sm:rounded-3xl pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
