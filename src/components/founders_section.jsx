import { useState, useEffect, useRef } from 'react';

// Import all founder images
import kevinImg from '../assets/images/founders/kevin.png';
import vishnuImg from '../assets/images/founders/vishnu.jpg';
import annuImg from '../assets/images/founders/annu.png';
import calImg from '../assets/images/founders/cal.png';
import danaImg from '../assets/images/founders/dana.png';
import manyuImg from '../assets/images/founders/manyu.png';
import kishoreImg from '../assets/images/founders/kishore.png';
import abelImg from '../assets/images/founders/abel.png';
import shivangiImg from '../assets/images/founders/shivangi.png';

const FoundersSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  // All team members in one array
  const allTeamMembers = [
    {
      name: "kevin",
      role: "founder",
      areas: ["product", "finance", "business development"],
      image: kevinImg,
      linkedin: "https://www.linkedin.com/in/jacobkevin/"
    },
    {
      name: "vishnu",
      role: "co-founder",
      areas: ["sales", "operations"],
      image: vishnuImg,
      linkedin: "https://www.linkedin.com/in/vishnuaravind01/"
    },
    {
      name: "annu",
      role: "co-founder",
      areas: ["design", "marketing"],
      image: annuImg,
      linkedin: "https://www.linkedin.com/in/annu-mathew-service-designer/"
    },
    {
      name: "cal",
      role: "advisor",
      areas: ["co-founder, Slack", "former head of eng, Flickr"],
      image: calImg,
      linkedin: "https://www.linkedin.com/in/iamcal/"
    },    
    {
      name: "dana",
      role: "advisor",
      areas: ["co-founder, Sulapac Ltd", "co-founder, Kuurai Oy"],
      image: danaImg,
      linkedin: "https://www.linkedin.com/in/loredanamoimas/"
    },   
    {
      name: "manyu",
      role: "ui/ux lead design",
      areas: ["8+ years in digital product design"],
      image: manyuImg,
      linkedin: "https://www.linkedin.com/in/manyuvarma/"
    },
    {
      name: "kishore",
      role: "designer",
      areas: ["product design"],
      image: kishoreImg,
      linkedin: "https://www.linkedin.com/in/kishorenataraj/"
    },
    {
      name: "abel",
      role: "developer",
      areas: ["app development"],
      image: abelImg,
      linkedin: "https://www.linkedin.com/in/abelboby/"
    },
    {
      name: "shivangi",
      role: "designer",
      areas: ["product design"],
      image: shivangiImg,
      linkedin: "https://www.linkedin.com/in/shivangirawat24/"
    },    
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
      id="team" 
      className="py-20 sm:py-24 md:py-32 lg:py-40 relative overflow-hidden bg-background"
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-text mb-4 sm:mb-6 relative inline-block">
            meet the team
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-secondary-grey mt-6 sm:mt-8 max-w-2xl mx-auto">
            The passionate people behind thinnan bringing joy through shared meals
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {allTeamMembers.map((member, index) => (
            <div 
              key={index}
              className="group relative transition-all duration-700"
              style={{
                opacity: hasAnimated ? 1 : 0,
                transform: hasAnimated ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Image Container */}
              <div className="relative w-full max-w-[280px] sm:max-w-[300px] mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500" style={{ aspectRatio: '4 / 5' }}>
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                  style={{
                    objectPosition: member.name === 'annu' ? 'center 35%' : 
                                   member.name === 'kevin' ? 'center 20%' : 
                                   'center top'
                  }}
                />
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* LinkedIn Icon */}
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white rounded-full p-2 sm:p-2.5 shadow-lg hover:bg-primary hover:text-white transition-all duration-300 z-10 transform hover:scale-110"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>

              {/* Text Content */}
              <div className="mt-5 sm:mt-6 space-y-2 sm:space-y-3 max-w-[280px] sm:max-w-[300px] mx-auto text-center transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                <h3 className="text-xl sm:text-2xl font-bold text-primary-text capitalize relative inline-block">
                  {member.name}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
                </h3>
                <p className="text-primary font-semibold capitalize text-sm sm:text-base">
                  {member.role}
                </p>
                <div className="space-y-1">
                  {member.areas.map((area, idx) => (
                    <p key={idx} className="text-secondary-grey text-xs sm:text-sm leading-relaxed">
                      {area}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection; 