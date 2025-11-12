import { useState, useEffect, useRef } from 'react';

// Import actual images
import worldMap from '../assets/images/how_it_started/world_map.jpg';
import stickyNotes from '../assets/images/how_it_started/sticky_notes.jpg';
import calAndKevin from '../assets/images/how_it_started/cal_and_kevin.jpg';
import calKevinDana from '../assets/images/how_it_started/cal_kevin_dana.jpg';
import scratchGame from '../assets/images/how_it_started/scratch_game.JPG';
import sisam from '../assets/images/how_it_started/sisam.jpg';
import founderOnStage from '../assets/images/how_it_started/founder_on_stage.jpg';
import cookout from '../assets/images/how_it_started/cookout.jpg';
import candidTeam from '../assets/images/how_it_started/candid_team.jpg';

const HowItStartedSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [flippedCards, setFlippedCards] = useState({});
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            setTimeout(() => setIsLoaded(true), 100);
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
  }, []);

  const handleCardClick = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const storyCards = [
    // First Row
    {
      id: 1,
      image: worldMap,
      title: 'scratch map for cooking',
      description: 'It all started with a scratch map for cooking around the world (2022). 30 countries in 1.5 yrs – soon became a movement, but an organisational nightmare!'
    },
    {
      id: 2,
      image: stickyNotes,
      title: 'early ideation',
      description: 'Sticky notes from an early ideation stage, March 2024. Launched thinnan beta-prototype as an event tech platform for home cookouts. Continued development, releasing updates every week.'
    },
    {
      id: 3,
      image: calAndKevin,
      title: 'slush 2018',
      description: 'Kevin meets Cal at Slush 2018, when he was his Slush buddy. Little did we know this connection would shape our future.'
    },
    // Second Row
    {
      id: 4,
      image: calKevinDana,
      title: 'cal joins advisory',
      description: 'Cal Henderson, co-founder of Slack, joins thinnan\'s advisory board at Slush 2024. A milestone moment for the team!'
    },
    {
      id: 5,
      image: scratchGame,
      title: 'first cookout',
      description: 'One of our first cookouts: "Bulgarian Cuisine". The beginning of something special – bringing people together over authentic food experiences.'
    },
    {
      id: 6,
      image: sisam,
      title: 'parisian baker',
      description: 'Kalyani, a Paris-based baker, visited us and hosted many sessions on how to make macarons to the best madeleines the guests have tasted!'
    },
    // Third Row
    {
      id: 7,
      image: founderOnStage,
      title: 'sharing our vision',
      description: 'We love to pitch and talk about thinnan whenever we get a chance! Every opportunity to share our story brings us closer to our mission.'
    },
    {
      id: 8,
      image: cookout,
      title: 'delicious memories',
      description: 'Another one of our early cookouts from 2024 – appam, stew and cutlets. It was a delicious meal that brought strangers together!'
    },
    {
      id: 9,
      image: candidTeam,
      title: 'building the dream',
      description: 'March 2025: three of our co-founders preparing for a YC application! Late nights, early mornings, and unwavering dedication.'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="how-it-started" 
      className="pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24 relative overflow-hidden bg-background"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        {/* Section Header */}
        <div 
          className={`mb-12 sm:mb-16 md:mb-20 text-center transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-text mb-4 sm:mb-6 relative inline-block">
            how it all started
            <div className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-secondary-grey mt-8 max-w-3xl mx-auto">
            every great journey has a beginning. this is ours — told through moments that shaped thinnan.
          </p>
        </div>

        {/* Organized Grid Layout with Varied Sizes */}
        <div className="space-y-4 sm:space-y-6">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
            <div className="md:col-span-5">
              <StoryCard 
                card={storyCards[0]} 
                index={0} 
                isLoaded={isLoaded}
                flippedCards={flippedCards}
                setFlippedCards={setFlippedCards}
                height="h-[300px] sm:h-[350px] md:h-[400px]"
              />
            </div>
            <div className="md:col-span-4">
              <StoryCard 
                card={storyCards[1]} 
                index={1} 
                isLoaded={isLoaded}
                flippedCards={flippedCards}
                setFlippedCards={setFlippedCards}
                height="h-[300px] sm:h-[350px] md:h-[400px]"
              />
            </div>
            <div className="md:col-span-3">
              <StoryCard 
                card={storyCards[2]} 
                index={2} 
                isLoaded={isLoaded}
                flippedCards={flippedCards}
                setFlippedCards={setFlippedCards}
                height="h-[300px] sm:h-[350px] md:h-[400px]"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
            <div className="md:col-span-3">
              <StoryCard 
                card={storyCards[3]} 
                index={3} 
                isLoaded={isLoaded}
                flippedCards={flippedCards}
                setFlippedCards={setFlippedCards}
                height="h-[300px] sm:h-[350px] md:h-[400px]"
              />
            </div>
            <div className="md:col-span-3">
              <StoryCard 
                card={storyCards[4]} 
                index={4} 
                isLoaded={isLoaded}
                flippedCards={flippedCards}
                setFlippedCards={setFlippedCards}
                height="h-[300px] sm:h-[350px] md:h-[400px]"
              />
            </div>
            <div className="md:col-span-6">
              <StoryCard 
                card={storyCards[5]} 
                index={5} 
                isLoaded={isLoaded}
                flippedCards={flippedCards}
                setFlippedCards={setFlippedCards}
                height="h-[300px] sm:h-[350px] md:h-[400px]"
              />
            </div>
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
            <div className="md:col-span-3">
              <StoryCard 
                card={storyCards[6]} 
                index={6} 
                isLoaded={isLoaded}
                flippedCards={flippedCards}
                setFlippedCards={setFlippedCards}
                height="h-[300px] sm:h-[350px] md:h-[400px]"
              />
            </div>
            <div className="md:col-span-3">
              <StoryCard 
                card={storyCards[7]} 
                index={7} 
                isLoaded={isLoaded}
                flippedCards={flippedCards}
                setFlippedCards={setFlippedCards}
                height="h-[300px] sm:h-[350px] md:h-[400px]"
              />
            </div>
            <div className="md:col-span-6">
              <StoryCard 
                card={storyCards[8]} 
                index={8} 
                isLoaded={isLoaded}
                flippedCards={flippedCards}
                setFlippedCards={setFlippedCards}
                height="h-[300px] sm:h-[350px] md:h-[400px]"
              />
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div 
          className={`mt-16 sm:mt-20 md:mt-24 text-center transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          <p className="text-lg sm:text-xl md:text-2xl text-secondary-grey italic">
            and this is just the beginning of our story...
          </p>
        </div>
      </div>
    </section>
  );
};

// Optimized StoryCard Component with smooth animations
const StoryCard = ({ card, index, isLoaded, flippedCards, setFlippedCards, height = 'h-[400px]' }) => {
  const isFlipped = flippedCards[card.id];

  const handleCardClick = () => {
    setFlippedCards(prev => ({
      ...prev,
      [card.id]: !prev[card.id]
    }));
  };

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      setFlippedCards(prev => ({ ...prev, [card.id]: true }));
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setFlippedCards(prev => ({ ...prev, [card.id]: false }));
    }
  };

  return (
    <div
      className={`transition-all duration-700 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ 
        transitionDelay: `${200 + index * 100}ms`,
      }}
    >
      {/* Flip Card Container */}
      <div 
        className={`relative w-full cursor-pointer group ${height}`}
        style={{ 
          perspective: '1000px'
        }}
        onClick={handleCardClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          className="relative w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transition: 'transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)',
            willChange: 'transform'
          }}
        >
          {/* Front Side - Image */}
          <div 
            className="absolute inset-0 w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg"
            style={{ 
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
          >
            <div className="relative w-full h-full">
              <img 
                src={card.image}
                alt={card.title}
                loading="lazy"
                className="w-full h-full object-cover"
                style={{
                  transform: isFlipped ? 'scale(1)' : 'scale(1)',
                  transition: 'transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)',
                  willChange: 'transform'
                }}
                onMouseEnter={(e) => {
                  if (!isFlipped && window.innerWidth >= 768) {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* Title overlay - always visible */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 mt-2 md:hidden">
                  tap to read more
                </p>
                <p className="text-xs sm:text-sm text-white/80 mt-2 hidden md:block">
                  hover to read more
                </p>
              </div>

              {/* Flip indicator icon */}
              <div 
                className="absolute top-4 right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  backgroundColor: isFlipped ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)'
                }}
              >
                <svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  style={{
                    transform: isFlipped ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)'
                  }}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
            </div>
          </div>

          {/* Back Side - Description */}
          <div 
            className="absolute inset-0 w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-accent via-primary to-accent/80 p-6 sm:p-8 md:p-10 flex flex-col justify-center items-center text-center"
            style={{ 
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                {card.description}
              </p>
            </div>

            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            </div>

            {/* Back indicator icon */}
            <div className="absolute top-4 right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItStartedSection;

