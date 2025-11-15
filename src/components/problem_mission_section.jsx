import { handleAppDownload } from '../utils/getStoreLink';
import feature4 from '../assets/images/features/feature_4.webp';

const ProblemMissionSection = () => {
  return (
    <section id="product" className="relative py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* main content - reversed layout (image left, text right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* left side - phone screenshot */}
          <div className="flex items-center justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]">
              <img
                src={feature4}
                alt="thinnan feature 4"
                className="w-full h-auto transition-opacity duration-700 ease-in-out"
                style={{
                  opacity: 1,
                  position: 'relative',
                  zIndex: 10,
                  pointerEvents: 'auto',
                }}
                loading="lazy"
              />
            </div>
          </div>

          {/* right side - text content */}
          <div className="flex flex-col justify-center items-center lg:items-start space-y-6 sm:space-y-8 md:space-y-10 order-1 lg:order-2">
            {/* small heading */}
            <div className="text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-text">
                meet thinnan.
              </h2>
            </div>
            {/* main title */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-primary-text">
                we are bringing back the{' '}
                <span className="relative inline-block">
                  <span className="text-primary relative z-10">social</span>
                  <span className="absolute inset-0 bg-primary/10 blur-xl"></span>
                </span>
                {' '}to social media!
              </h2>
            </div>
            {/* description */}
            <div className="text-center lg:text-left">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-secondary-grey leading-relaxed max-w-xl">
                food social media designed for<br />
                <span className="text-primary font-semibold">real-life experiences</span> around food.
              </p>
            </div>
            {/* download button */}
            <div className="pt-2 sm:pt-4">
              <button
                onClick={handleAppDownload}
                className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-primary text-white rounded-xl sm:rounded-2xl md:rounded-3xl font-semibold text-sm sm:text-base md:text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl hover:shadow-primary/30 transform hover:scale-105 group cursor-pointer"
              >
                <span>download now</span>
                <svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemMissionSection;
