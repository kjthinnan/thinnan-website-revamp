import { useEffect, useRef, useState } from 'react';
import addToCravings from '../assets/images/features/add_to_cravings.png';
import getMatched from '../assets/images/features/get_matched.png';
import addToChat from '../assets/images/features/add_to_chat.png';
import planCookout from '../assets/images/features/plan_cookout.png';
import shareStory from '../assets/images/features/share_story.png';

const HowItWorksSection = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const stepsRef = useRef([]);

  const steps = [
    {
      id: 1,
      image: addToCravings,
      title: 'Find a dish that excites you',
      subtitle: 'From scroll to stove in three taps',
      description: 'Browse through authentic recipes and cooking ideas shared by your friends and community. Get inspired by what others are making.',
      align: 'left'
    },
    {
      id: 2,
      image: getMatched,
      title: 'Get matched with food lovers',
      subtitle: 'No algorithms. No ads. Just real people and real food.',
      description: "When you and your friends crave the same dish, we'll match you together. It's that simple.",
      align: 'right'
    },
    {
      id: 3,
      image: addToChat,
      title: 'Start planning together',
      subtitle: 'Turn content into conversation',
      description: 'Chat with your matches, decide when and where to cook or eat. Bring more friends along for the experience.',
      align: 'left'
    },
    {
      id: 4,
      image: planCookout,
      title: 'Create your cookout or eatout',
      subtitle: 'Make it official',
      description: 'Set the date, time, and location. Invite your group and get ready for a memorable food experience.',
      align: 'right'
    },
    {
      id: 5,
      image: shareStory,
      title: 'Share your story',
      subtitle: 'Capture the memories',
      description: 'Document your culinary adventure with photos and stories. Inspire others in your community to create their own experiences.',
      align: 'left'
    }
  ];

  useEffect(() => {
    const observers = stepsRef.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSteps((prev) => [...new Set([...prev, index])]);
            }
          });
        },
        { threshold: 0.2 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section id="how-it-works" className="py-20 sm:py-28 md:py-36 relative overflow-hidden bg-white">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-28">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-text mb-4">
            how thinnan works
          </h2>
          <p className="text-lg sm:text-xl text-secondary-grey max-w-2xl mx-auto">
            From scroll to stove in three taps
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-24 sm:space-y-32 md:space-y-40">
          {steps.map((step, index) => (
            <div
              key={step.id}
              ref={(el) => (stepsRef.current[index] = el)}
              className={`relative transition-all duration-1000 ${
                visibleSteps.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20'
              }`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                step.align === 'right' ? 'lg:grid-flow-dense' : ''
              }`}>
                {/* Image Side */}
                <div
                  className={`relative ${step.align === 'right' ? 'lg:col-start-2' : ''}`}
                  style={{
                    transitionDelay: visibleSteps.includes(index) ? '200ms' : '0ms',
                  }}
                >
                  {/* Phone Mockup Container */}
                  <div className="relative transform transition-transform duration-700 hover:scale-105">
                    {/* Image */}
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div
                  className={`space-y-6 ${step.align === 'right' ? 'lg:col-start-1' : ''}`}
                  style={{
                    transitionDelay: visibleSteps.includes(index) ? '400ms' : '0ms',
                  }}
                >
                  {/* Title */}
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-text leading-tight">
                    {step.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xl sm:text-2xl text-primary font-medium">
                    {step.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-lg text-secondary-grey leading-relaxed">
                    {step.description}
                  </p>

                  {/* Decorative Line */}
                  <div className="pt-4">
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Connecting Line Between Steps (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-px h-20 bg-gradient-to-b from-primary/30 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 