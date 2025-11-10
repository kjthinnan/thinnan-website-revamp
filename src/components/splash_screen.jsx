import { useEffect, useState } from 'react';
import appIcon from '../assets/icons/app_icon.png';

const SplashScreen = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  
  useEffect(() => {
    // Start the fade out animation after 2500ms
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);
    
    // Complete the transition and hide the splash screen after 3000ms
    const completeTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3000);
    
    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);
  
  return (
    <div 
      className={`fixed inset-0 bg-black z-50 flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center">
        {/* App icon */}
        <div className="w-32 h-32 mb-8 flex items-center justify-center">
          <img 
            src={appIcon} 
            alt="Thinnan App Icon" 
            className="w-20 h-20 object-contain"
          />
        </div>
        
        {/* Logo text with letter animation */}
        <div className="text-center">
          <h1 className="font-bold text-4xl text-white mb-1 flex justify-center">
            {/* Animate each letter with staggered timing */}
            {Array.from('thinnan').map((letter, index) => (
              <span 
                key={index}
                className="inline-block transform opacity-0 animate-[fadeInUp_0.5s_ease_forwards]"
                style={{
                  animationDelay: `${index * 0.05}s`
                }}
              >
                {letter}
              </span>
            ))}
            <span 
              className="text-accent inline-block transform opacity-0 animate-[fadeInUp_0.5s_ease_forwards]"
              style={{
                animationDelay: '0.4s'
              }}
            >
              .
            </span>
          </h1>
          <p 
            className="text-gray-400 text-sm font-light tracking-wide opacity-0 animate-[fadeIn_0.5s_ease_forwards]"
            style={{
              animationDelay: '0.5s'
            }}
          >
            food social media
          </p>
        </div>  
        
        {/* Loading indicator */}
        <div 
          className="mt-12 flex space-x-2 opacity-0 animate-[fadeIn_0.3s_ease_forwards]"
          style={{
            animationDelay: '0.6s'
          }}
        >
          <div className="w-2 h-2 bg-accent rounded-full animate-[bounce_0.6s_infinite_0.1s]"></div>
          <div className="w-2 h-2 bg-accent rounded-full animate-[bounce_0.6s_infinite_0.2s]"></div>
          <div className="w-2 h-2 bg-accent rounded-full animate-[bounce_0.6s_infinite_0.3s]"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen; 