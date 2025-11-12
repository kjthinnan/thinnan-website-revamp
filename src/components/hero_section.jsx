import foodVideo from '../assets/videos/food_video.webm';
import thinnanLogo from '../assets/images/thinnan_logo.png';

const HeroSection = () => {

  return (
    <>
      {/* Hero Section with Video Background */}
      <section id="hero" className="relative min-h-screen w-full overflow-hidden flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={foodVideo} type="video/mp4" />
          </video>
          
          {/* Video Overlay - Gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/40"></div>
          
        </div>

        {/* Content */}
        <div className="relative z-10 w-full h-full flex flex-col">


          {/* Center Content */}
          <div className="flex-1 flex items-center px-6 sm:px-8 md:px-12">
            <div className="max-w-7xl mx-auto w-full">
              <div className="max-w-4xl">
                {/* Main Heading */}
                <div className="animate-fadeInUp flex flex-col items-start">
                  <img 
                    src={thinnanLogo} 
                    alt="thinnan" 
                    className="mb-4 sm:mb-6 ml-0 sm:-ml-2 w-32 xs:w-36 sm:w-40 md:w-48 lg:w-56 max-w-[200px]"
                  />
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
                    <span className="text-white">for </span>
                    <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-[#FFA726] to-[#FF8A50]">real life</span>
                    <span className="text-white block mt-2">food experiences.</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection; 