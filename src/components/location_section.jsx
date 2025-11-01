import { useState, useEffect } from 'react';
import worldMap from '../assets/images/world_map.png';

const LocationSection = () => {
  const [animatedItems, setAnimatedItems] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  // Animation on scroll effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target.dataset.id) {
            setAnimatedItems(prev => [...prev, entry.target.dataset.id]);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('[data-id]').forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('[data-id]').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="location" className="py-8 xs:py-10 sm:py-14 md:py-20 relative overflow-hidden bg-gray-50">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100"></div>
      
      {/* Animated background pattern - hidden on very small screens */}
      <div className="absolute inset-0 opacity-5 pointer-events-none hidden xs:block" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FB6B23' fill-opacity='0.4'%3E%3Ccircle cx='2' cy='2' r='1' /%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }}
      ></div>
      
      {/* Floating decorative elements - hidden on small screens */}
      <div className="absolute -top-20 left-10 w-64 h-64 bg-accent opacity-5 rounded-full blur-3xl animate-float-slow hidden sm:block"></div>
      <div className="absolute top-40 -right-20 w-40 h-40 bg-blue-400 opacity-5 rounded-full blur-2xl animate-float-slow-reverse hidden sm:block"></div>
      <div className="absolute -bottom-10 right-10 w-72 h-72 bg-accent opacity-5 rounded-full blur-3xl animate-pulse-slow hidden sm:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-4 xs:mb-6 sm:mb-8 relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 xs:w-24 sm:w-32 md:w-24 h-20 xs:h-24 sm:h-32 md:h-24 bg-accent/5 rounded-full blur-xl"></div>
          
          {/* Heading with animated underline */}
          <h2 
            data-id="section-title"
            className={`text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold mb-3 xs:mb-4 relative inline-block text-gray-900 transition-all duration-700 ${
              animatedItems.includes('section-title') ? 'opacity-100' : 'opacity-0 translate-y-4'
            }`}
          >
            our home
            <div className="absolute -bottom-1 xs:-bottom-2 left-0 right-0 h-0.5 xs:h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-80"></div>
          </h2>
          
          {/* Subtitle with subtle animation */}
          <p 
            data-id="section-subtitle"
            className={`text-base xs:text-lg sm:text-lg md:text-lg mt-3 xs:mt-4 text-gray-600 max-w-xs xs:max-w-sm sm:max-w-2xl mx-auto transition-all duration-700 delay-100 px-1 ${
              animatedItems.includes('section-subtitle') ? 'opacity-100' : 'opacity-0 translate-y-4'
            }`}
          >
            thinnan brings people together in the vibrant heart of Helsinki, Finland.
          </p>
        </div>

        <div className="flex flex-col items-center">
          {/* World Map with Finland Highlighted - with hover effects */}
          <div 
            data-id="world-map"
            className={`w-full max-w-full xs:max-w-lg sm:max-w-2xl md:max-w-3xl mx-auto transition-all duration-700 ease-out ${
              animatedItems.includes('world-map') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative rounded-lg xs:rounded-xl sm:rounded-2xl overflow-hidden shadow-md xs:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl">
              {/* Color overlay to add tint on hover */}
              <div className={`absolute inset-0 bg-accent/5 transition-opacity duration-300 z-10 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
              
              {/* Black backdrop for map */}
              <div className="bg-gray-900 p-2 xs:p-3 sm:p-4 md:p-4 flex items-center justify-center">
                <img 
                  src={worldMap} 
                  alt="World map with Finland highlighted" 
                  className="w-full h-auto object-contain relative z-0"
                />
              </div>
              
              {/* Decorative corners - hidden on smallest screens */}
              <div className="absolute top-2 left-2 w-6 h-6 xs:top-3 xs:left-3 xs:w-8 xs:h-8 sm:top-4 sm:left-4 sm:w-10 sm:h-10 border-t-2 border-l-2 border-accent/30 rounded-tl-md hidden xs:block"></div>
              <div className="absolute top-2 right-2 w-6 h-6 xs:top-3 xs:right-3 xs:w-8 xs:h-8 sm:top-4 sm:right-4 sm:w-10 sm:h-10 border-t-2 border-r-2 border-accent/30 rounded-tr-md hidden xs:block"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 xs:bottom-3 xs:left-3 xs:w-8 xs:h-8 sm:bottom-4 sm:left-4 sm:w-10 sm:h-10 border-b-2 border-l-2 border-accent/30 rounded-bl-md hidden xs:block"></div>
              <div className="absolute bottom-2 right-2 w-6 h-6 xs:bottom-3 xs:right-3 xs:w-8 xs:h-8 sm:bottom-4 sm:right-4 sm:w-10 sm:h-10 border-b-2 border-r-2 border-accent/30 rounded-br-md hidden xs:block"></div>
            </div>
          </div>
          
          {/* From Helsinki to the World Component - enhanced */}
          <div 
            data-id="helsinki-card"
            className={`mt-5 xs:mt-6 sm:mt-8 bg-[#FFF8F3] rounded-lg xs:rounded-xl sm:rounded-2xl w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl mx-auto transition-all duration-700 ease-out delay-300 hover:shadow-xl transform hover:-translate-y-1 ${
              animatedItems.includes('helsinki-card') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="p-4 xs:p-5 sm:p-6 md:p-6 relative overflow-hidden">
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 xs:h-1 bg-gradient-to-r from-[#FB6B23]/10 via-[#FB6B23]/50 to-[#FB6B23]/10"></div>
              
              <div className="flex flex-col xs:flex-row items-center xs:items-start sm:items-center gap-4 xs:gap-5">
                <div className="flex-shrink-0 w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-12 md:h-12 bg-[#FFDED1] rounded-full flex items-center justify-center shadow-md transform transition-transform hover:rotate-12">
                  <svg className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-6 md:h-6 text-[#FB6B23]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 3C14.5013 5.76376 15.9228 9.29903 16 13C15.9228 16.701 14.5013 20.2362 12 23C9.49872 20.2362 8.07725 16.701 8 13C8.07725 9.29903 9.49872 5.76376 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-center xs:text-left">
                  <h3 className="text-lg xs:text-xl sm:text-2xl md:text-xl font-bold text-gray-900">
                    From Helsinki to the World
                    <span className="inline-block ml-1 text-[#FB6B23] animate-bounce">•</span>
                  </h3>
                  <p className="text-sm xs:text-base sm:text-lg md:text-base text-gray-600 mt-2 sm:mt-3">
                    While our <span className="text-[#FB6B23] font-medium">roots are in Finland</span>, our mission to connect people through food knows no borders.
                  </p>
                </div>
              </div>
              
              {/* Finland dot animation - hidden on smallest screens */}
              <div className="absolute -right-2 top-6 w-12 h-12 opacity-10 hidden xs:block">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="8" fill="#FB6B23" className="animate-ping">
                    <animate attributeName="opacity" from="1" to="0" dur="2s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add custom animation styles via stylesheet */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slow-reverse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.1; }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-slow-reverse {
          animation: float-slow-reverse 9s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default LocationSection; 