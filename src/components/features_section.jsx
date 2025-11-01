import cookingEventImage from '../assets/images/cooking_event.jpg';
import foodDiscoveryImage from '../assets/images/food-discovery.jpg';
import story1Image from '../assets/images/story_1.jpg';
import story2Image from '../assets/images/story_2.jpg';
import story3Image from '../assets/images/story_3.jpg';
import indiaFlag from '../assets/images/india_flag.png';
import italyFlag from '../assets/images/italy_flag.png';
import japanFlag from '../assets/images/japan_flag.png';
import mexicoFlag from '../assets/images/mexico_flag.png';

const FeaturesSection = () => {
  const friendImages = [
    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <section id="features" className="py-12 sm:py-16 md:py-24 relative overflow-hidden bg-gray-dark">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-dark via-black to-gray-dark"></div>
      <div className="absolute inset-0 opacity-10 hidden sm:block" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FB6B23' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      {/* Decorative shapes */}
      <div className="absolute top-40 right-0 w-64 h-64 bg-accent opacity-10 rounded-full blur-3xl hidden sm:block"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent opacity-10 rounded-full blur-xl hidden sm:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
        <div className="text-center mb-10 sm:mb-16 relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-24 sm:h-32 bg-accent/10 rounded-full blur-xl"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 relative inline-block text-white">
            features
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-40"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
          {/* Left Column - Main Features */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Host or Join Cookouts */}
            <div className="bg-black/40 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-white/10">
              <div className="grid md:grid-cols-5 gap-4 sm:gap-6">
                <div className="md:col-span-2 p-4 sm:p-6 flex items-center justify-center">
                  <div className="relative w-full aspect-square rounded-lg sm:rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5"></div>
                    <img 
                      src={cookingEventImage} 
                      alt="People cooking together"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-3 p-4 sm:p-6 flex flex-col justify-center">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center shadow-md">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold ml-3 sm:ml-4 text-white group-hover:text-accent transition-colors duration-300">Host or Join Cookouts</h3>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base">Plan a meal, invite friends, and cook together.</p>
                  <div className="mt-4 sm:mt-6 flex items-center space-x-4">
                    <div className="flex -space-x-2 sm:-space-x-3">
                      {friendImages.slice(0, 3).map((image, index) => (
                        <div key={index} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-black relative">
                          <img 
                            src={image} 
                            alt={`Friend ${index + 1}`}
                            className="w-full h-full rounded-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-400">+12 joined today</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Discover Cookouts */}
            <div className="bg-black/40 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-white/10">
              <div className="grid md:grid-cols-5 gap-4 sm:gap-6">
                <div className="md:col-span-2 p-4 sm:p-6 flex items-center justify-center">
                  <div className="relative w-full aspect-square rounded-lg sm:rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5"></div>
                    <img 
                      src={foodDiscoveryImage} 
                      alt="Various dishes"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-3 p-4 sm:p-6 flex flex-col justify-center">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center shadow-md">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold ml-3 sm:ml-4 text-white group-hover:text-accent transition-colors duration-300">Discover Cookouts</h3>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base">Find gatherings hosted by friends or explore new flavors.</p>
                  <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-black/30 rounded-lg p-2 sm:p-3 text-center">
                      <div className="text-accent font-bold text-sm sm:text-base">150+</div>
                      <div className="text-xs sm:text-sm text-gray-400">Active Events</div>
                    </div>
                    <div className="bg-black/30 rounded-lg p-2 sm:p-3 text-center">
                      <div className="text-accent font-bold text-sm sm:text-base">20+</div>
                      <div className="text-xs sm:text-sm text-gray-400">Cuisines</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Additional Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Shared Stories */}
            <div className="bg-black/40 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 group border border-white/10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-md">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-white group-hover:text-accent transition-colors duration-300">Shared Stories</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Create collaborative "hamburger posts" with photos and memories.</p>
              <div className="mt-3 sm:mt-4 grid grid-cols-3 gap-1 sm:gap-2">
                <img 
                  src={story1Image} 
                  alt="Food story 1"
                  className="aspect-square rounded-md sm:rounded-lg object-cover"
                />
                <img 
                  src={story2Image} 
                  alt="Food story 2"
                  className="aspect-square rounded-md sm:rounded-lg object-cover"
                />
                <img 
                  src={story3Image} 
                  alt="Food story 3"
                  className="aspect-square rounded-md sm:rounded-lg object-cover"
                />
              </div>
            </div>

            {/* Build Your Network */}
            <div className="bg-black/40 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 group border border-white/10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-md">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-white group-hover:text-accent transition-colors duration-300">Build Your Network</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Add friends, create groups, and connect over food.</p>
              <div className="mt-3 sm:mt-4 flex items-center space-x-2">
                <div className="flex -space-x-2 sm:-space-x-3">
                  {friendImages.slice(1, 5).map((image, index) => (
                    <div key={index} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-black relative">
                      <img 
                        src={image} 
                        alt={`Network friend ${index + 1}`}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-gray-400">+28 friends</span>
              </div>
            </div>

            {/* Earn Badges */}
            <div className="bg-black/40 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 group border border-white/10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-md">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-white group-hover:text-accent transition-colors duration-300">Earn Badges</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Track your culinary journey with country flag badges.</p>
              <div className="mt-3 sm:mt-4 grid grid-cols-4 gap-1 sm:gap-2 place-items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/30 flex items-center justify-center overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <img src={indiaFlag} alt="India Flag" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/30 flex items-center justify-center overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <img src={italyFlag} alt="Italy Flag" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/30 flex items-center justify-center overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <img src={japanFlag} alt="Japan Flag" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/30 flex items-center justify-center overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <img src={mexicoFlag} alt="Mexico Flag" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Create & Inspire */}
            <div className="bg-black/40 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 group border border-white/10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-md">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-white group-hover:text-accent transition-colors duration-300">Create & Inspire</h3>
              <p className="text-gray-300 text-xs sm:text-sm">Share dishes and engage with others' experiences.</p>
              <div className="mt-3 sm:mt-4 flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black/30 rounded-full flex items-center justify-center">👨‍🍳</div>
                  <span className="text-gray-300">2.5k recipes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black/30 rounded-full flex items-center justify-center">❤️</div>
                  <span className="text-gray-300">15k likes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 