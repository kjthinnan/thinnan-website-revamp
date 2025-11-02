import { useState } from 'react';

// Import all founder images
import kevinImg from '../assets/images/founders/kevin.png';
import vishnuImg from '../assets/images/founders/vishnu.jpg';
import annuImg from '../assets/images/founders/annu.png';
import adriaanImg from '../assets/images/founders/adriaan.png';
import calImg from '../assets/images/founders/cal.png';
import danaImg from '../assets/images/founders/dana.png';
import manyuImg from '../assets/images/founders/manyu.png';
import kishoreImg from '../assets/images/founders/kishore.png';
import adwaithImg from '../assets/images/founders/adwaith.png';

const FoundersSection = () => {
  // State to track which sections are open (all open by default)
  const [openSections, setOpenSections] = useState({
    founders: true,
    advisors: false,
    team: false
  });

  // Organize team members by category
  const categories = {
    founders: [
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
      }
    ],
    advisors: [
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
      }
    ],
    team: [
      {
        name: "adriaan",
        role: "cto",
        areas: ["8 yrs IT experience", "co-founder, Unveiler"],
        image: adriaanImg,
        linkedin: "https://www.linkedin.com/in/adriaan-knapen/"
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
        name: "adwaith",
        role: "developer",
        areas: ["app development"],
        image: adwaithImg,
        linkedin: "https://www.linkedin.com/in/adwaith-jayasankar-156539200/"
      }
    ]
  };

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Render member card
  const renderMemberCard = (member, index) => (
    <div 
      key={index} 
      className="relative group opacity-0 animate-fadeInUp w-full"
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
    >
      {/* Image Container */}
      <div className="relative w-full max-w-[240px] sm:max-w-[260px] md:max-w-[280px] mx-auto rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500" style={{ aspectRatio: '1 / 1' }}>
        <img 
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 transform hover:scale-110"
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
        
        {/* LinkedIn Icon */}
        <a 
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 bg-white rounded-full p-1.5 sm:p-2 shadow-lg hover:bg-accent hover:text-white transition-all duration-300 z-10 transform hover:scale-110"
        >
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
      </div>

      {/* Text Content */}
      <div className="mt-4 sm:mt-5 space-y-1.5 sm:space-y-2 max-w-[240px] sm:max-w-[260px] md:max-w-[280px] mx-auto text-center transform transition-transform duration-300 group-hover:translate-y-[-4px]">
        <h3 className="text-xl sm:text-2xl font-semibold text-black capitalize relative inline-block">
          {member.name}
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></div>
        </h3>
        <div className="space-y-0.5 sm:space-y-1">
          <p className="text-accent font-medium capitalize text-sm sm:text-base">
            {member.role}
          </p>
          {member.areas.map((area, idx) => (
            <p key={idx} className="text-gray-600 text-xs sm:text-sm">
              {area}
            </p>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="team" className="py-16 sm:py-20 md:py-28 lg:py-36 relative overflow-hidden bg-white">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-3 relative">
              meet the team
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-4 sm:mt-6 max-w-2xl mx-auto px-2">
            The passionate people behind thinnan bringing joy through shared meals
          </p>
        </div>

        {/* Accordion Sections */}
        <div className="space-y-4 sm:space-y-6">
          {/* Founders Section */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500">
            <button
              onClick={() => toggleSection('founders')}
              className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 flex items-center justify-between gap-3 sm:gap-4 md:gap-6 hover:bg-gray-50 transition-all duration-300 group"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black group-hover:text-accent transition-colors duration-300 text-center flex-1">
                Founders
              </h3>
              <div 
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gray-100 group-hover:bg-accent/10 flex items-center justify-center transition-all duration-500 shrink-0"
                style={{
                  transform: openSections.founders ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-600 group-hover:text-accent transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            
            {/* Collapsible Content */}
            <div 
              className="overflow-hidden transition-all duration-700 ease-in-out"
              style={{
                maxHeight: openSections.founders ? '1800px' : '0px',
                opacity: openSections.founders ? 1 : 0,
              }}
            >
              <div className="px-4 sm:px-6 md:px-8 pb-8 sm:pb-10 md:pb-8 pt-3 sm:pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
                  {categories.founders.map((member, index) => renderMemberCard(member, index))}
                </div>
              </div>
            </div>
          </div>

          {/* Advisors Section */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500">
            <button
              onClick={() => toggleSection('advisors')}
              className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 flex items-center justify-between gap-3 sm:gap-4 md:gap-6 hover:bg-gray-50 transition-all duration-300 group"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black group-hover:text-accent transition-colors duration-300 text-center flex-1">
                Advisors
              </h3>
              <div 
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gray-100 group-hover:bg-accent/10 flex items-center justify-center transition-all duration-500 shrink-0"
                style={{
                  transform: openSections.advisors ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-600 group-hover:text-accent transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            
            <div 
              className="overflow-hidden transition-all duration-700 ease-in-out"
              style={{
                maxHeight: openSections.advisors ? '1000px' : '0px',
                opacity: openSections.advisors ? 1 : 0,
              }}
            >
              <div className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 pt-3 sm:pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 justify-items-center">
                  {categories.advisors.map((member, index) => renderMemberCard(member, index))}
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500">
            <button
              onClick={() => toggleSection('team')}
              className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 flex items-center justify-between gap-3 sm:gap-4 md:gap-6 hover:bg-gray-50 transition-all duration-300 group"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black group-hover:text-accent transition-colors duration-300 text-center flex-1">
                Team
              </h3>
              <div 
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gray-100 group-hover:bg-accent/10 flex items-center justify-center transition-all duration-500 shrink-0"
                style={{
                  transform: openSections.team ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-600 group-hover:text-accent transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            
            <div 
              className="overflow-hidden transition-all duration-700 ease-in-out"
              style={{
                maxHeight: openSections.team ? '1500px' : '0px',
                opacity: openSections.team ? 1 : 0,
              }}
            >
              <div className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 pt-3 sm:pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
                  {categories.team.map((member, index) => renderMemberCard(member, index))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default FoundersSection; 