const HowItWorksSection = () => {
  const memberImages = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <section id="how-it-works" className="py-12 md:py-16 relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute inset-0 bg-white"></div>
      
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 w-32 h-64 bg-accent/5 -rotate-45 blur-3xl opacity-70"></div>
      <div className="absolute right-0 bottom-1/4 w-32 h-64 bg-accent/5 -rotate-45 blur-3xl opacity-70"></div>
      
      {/* Dotted pattern */}
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(0, 0, 0, 0.1) 2px, transparent 0)`,
          backgroundSize: `50px 50px`
        }}
      ></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-accent/5 rounded-full blur-xl"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative text-black">
            how thinnan works
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-40"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            Join our community and start your culinary journey in five simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Lines */}
          <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-accent/20 to-transparent"></div>
          
          <div className="space-y-8">
            {/* Step 1 - Create Profile */}
            <div className="relative group">
              <div className="bg-white backdrop-blur-sm bg-opacity-80 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg mr-4">1</div>
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors duration-300">Create Your Profile</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Set up your bio, dietary preferences, and interests.</p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center p-3 bg-gray-50 rounded-xl group-hover:bg-gray-100 transition-colors duration-300">
                      <span className="text-2xl mr-3">🥗</span>
                      <span className="text-sm">Dietary Preferences</span>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded-xl group-hover:bg-gray-100 transition-colors duration-300">
                      <span className="text-2xl mr-3">👨‍🍳</span>
                      <span className="text-sm">Cooking Skills</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 - Add Friends */}
            <div className="relative group">
              <div className="bg-white backdrop-blur-sm bg-opacity-80 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg mr-4">2</div>
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors duration-300">Add Friends & Groups</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Connect with friends or build your own cooking circles.</p>
                  <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">👥</span>
                      <div>
                        <h4 className="font-medium">Cooking Circle</h4>
                        <p className="text-sm text-gray-500">12 members</p>
                      </div>
                    </div>
                    <div className="flex -space-x-2">
                      {memberImages.map((img, index) => (
                        <div key={index} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                          <img src={img} alt={`Member ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 - Plan Cookout */}
            <div className="relative group">
              <div className="bg-white backdrop-blur-sm bg-opacity-80 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg mr-4">3</div>
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors duration-300">Plan a Cookout</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Share what you're making, invite guests, and cook together.</p>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">🍕</span>
                        <div>
                          <h4 className="font-medium">Pizza Night</h4>
                          <p className="text-sm text-gray-500">Italian Cuisine</p>
                        </div>
                      </div>
                      <span className="text-accent text-sm font-medium">8 spots left</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <span className="mr-2">🕒</span>
                        Tomorrow, 7 PM
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2">📍</span>
                        Helsinki
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 - Share Experience */}
            <div className="relative group">
              <div className="bg-white backdrop-blur-sm bg-opacity-80 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg mr-4">4</div>
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors duration-300">Share the Experience</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Capture the moment with photos and stories.</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <span className="text-3xl mb-2 inline-block">📸</span>
                      <h4 className="font-medium text-sm">Photos</h4>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <span className="text-3xl mb-2 inline-block">📝</span>
                      <h4 className="font-medium text-sm">Stories</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 - Grow Network */}
            <div className="relative group">
              <div className="bg-white backdrop-blur-sm bg-opacity-80 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg mr-4">5</div>
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors duration-300">Grow Your Network</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Meet new people through mutual friends and shared meals.</p>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex -space-x-2">
                        {memberImages.map((img, index) => (
                          <div key={index} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                            <img src={img} alt={`Network Member ${index + 1}`} className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                      <span className="text-accent font-medium">Growing community</span>
                    </div>
                    <div className="text-center bg-white rounded-lg p-2 mt-2">
                      <span className="text-2xl font-bold text-gray-700">500+</span>
                      <span className="text-sm text-gray-500 ml-2">Active Members</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 