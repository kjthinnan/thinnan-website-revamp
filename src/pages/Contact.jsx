import { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

// Import founder images
import kevinImg from '../assets/images/founders/kevin.png';
import vishnuImg from '../assets/images/founders/vishnu.jpg';
import annuImg from '../assets/images/founders/annu.png';

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Trigger animation after component mounts
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  // Founders data with contact information
  const founders = [
    {
      name: "Kevin Jacob",
      role: "Founder & CEO",
      image: kevinImg,
      linkedin: "https://www.linkedin.com/in/jacobkevin/",
      calLink: "https://cal.com/kevin-jacob" // Placeholder - update with actual Cal link
    },
    {
      name: "Annu Mathew",
      role: "Co-Founder, Design & Marketing",
      image: annuImg,
      linkedin: "https://www.linkedin.com/in/annu-mathew-service-designer/",
      calLink: "https://cal.com/annu-mathew" // Placeholder - update with actual Cal link
    },
    {
      name: "Vishnu Aravind",
      role: "Co-Founder, Sales & Operations",
      image: vishnuImg,
      linkedin: "https://www.linkedin.com/in/vishnuaravind01/",
      calLink: "https://cal.com/vishnu-aravind" // Placeholder - update with actual Cal link
    }
  ];

  return (
    <div className="min-h-screen font-manrope bg-background">
      <Navbar />
      <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-28 lg:pb-36 relative overflow-hidden">
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          {/* Section Header */}
          <div 
            className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4 sm:mb-6 relative inline-block">
              we are all eyes and ears
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </h1>
          </div>

          {/* Founders List - Horizontal Layout */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
            {founders.map((founder, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-1000 ${
                  isLoaded 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms` 
                }}
              >
                {/* Founder Card - Horizontal Layout */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 p-6 sm:p-8 rounded-2xl sm:rounded-3xl hover:bg-white/50 transition-all duration-500">
                  {/* Profile Image Container */}
                  <div className="relative w-full sm:w-auto flex-shrink-0">
                    <div className="relative w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] mx-auto sm:mx-0 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500" style={{ aspectRatio: '1 / 1' }}>
                      <img 
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover', 
                          objectPosition: 'center',
                          display: 'block'
                        }}
                      />
                      
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>

                  {/* Text Content - Middle Section */}
                  <div className="flex-1 flex flex-col space-y-2 sm:space-y-3 md:space-y-4 min-w-0">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black group-hover:text-accent transition-colors duration-300">
                      {founder.name}
                    </h2>
                    
                    <p className="text-base sm:text-lg md:text-xl text-black">
                      {founder.role}
                    </p>

                    {/* Cal Link */}
                    <a
                      href={founder.calLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-black hover:text-accent transition-colors duration-300 font-medium text-sm sm:text-base md:text-lg group/link w-fit"
                    >
                      <span>Cal link</span>
                      <svg 
                        className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>

                  {/* LinkedIn Icon - Far Right */}
                  <div className="flex-shrink-0">
                    <a 
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-110 group/linkedin"
                    >
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Contact;

