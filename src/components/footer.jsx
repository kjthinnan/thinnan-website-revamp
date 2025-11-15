import appIcon from '../assets/icons/app_icon.png';
import GoogleIcon from '../assets/icons/google_icon';
import AppleIcon from '../assets/icons/apple_icon';

const Footer = () => {
  return (
    <footer id="contact" className="bg-background text-gray-600 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-secondary"></div>
      
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-5 hidden sm:block"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FB6B23' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      {/* Left gradient blur */}
      <div className="absolute -left-32 top-1/3 w-48 sm:w-64 h-48 sm:h-64 bg-accent/5 rounded-full blur-3xl"></div>
      
      {/* Right gradient blur */}
      <div className="absolute -right-32 bottom-1/3 w-48 sm:w-64 h-48 sm:h-64 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-6 sm:py-8 md:py-10 lg:py-12 relative z-10">
        {/* Mobile Layout - Custom structure */}
        <div className="block sm:hidden">
          {/* Top Row - Logo and Thinnan text side by side */}
          <div className="flex items-start justify-between mb-6">
            {/* Left - Logo and Social Icons */}
            <div className="flex flex-col gap-4">
              {/* Icon Container - Increased size */}
              <div className="bg-black rounded-2xl p-5 w-28 h-28 flex items-center justify-center flex-shrink-0">
                <img 
                  src={appIcon} 
                  alt="thinnan" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Social Media Links - Below the logo */}
              <div className="flex items-center justify-start gap-3">
                <a href="https://www.instagram.com/thinnan.app/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@thinnan.app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a href="https://x.com/thinnan_irl" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/thinnan/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Right - Thinnan Definition Text */}
            <div className="flex flex-col justify-start space-y-0.5 text-right mt-2">
              <h3 className="text-2xl font-bold text-primary-text leading-tight">
                thinnan
              </h3>
              <p className="text-sm text-gray-600 font-normal">
                /thin-naan/
              </p>
              <p className="text-sm text-gray-600 font-normal">
                <span className="font-medium">തിന്നാൻ</span> | to eat
              </p>
              <p className="text-xs text-gray-500 font-normal mt-0.5">
                origin: malayalam language
              </p>
            </div>
          </div>
          
          {/* Bottom Row - Two columns of links */}
          <div className="flex justify-between gap-6">
            {/* Left Column - Navigation Links */}
            <div>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#how-it-works" className="text-gray-600 hover:text-accent transition-colors duration-300">product</a>
                </li>
                <li>
                  <a href="/team" className="text-gray-600 hover:text-accent transition-colors duration-300">team</a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-600 hover:text-accent transition-colors duration-300">contact</a>
                </li>
              </ul>
            </div>

            {/* Right Column - Support Links */}
            <div>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="/contact#feedback-form" className="text-gray-600 hover:text-accent transition-colors duration-300">request a feature</a>
                </li>
                <li>
                  <a href="/contact#feedback-form" className="text-gray-600 hover:text-accent transition-colors duration-300">report a bug</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Download Buttons - Mobile */}
          <div className="mt-8 flex flex-col gap-3">
            <a 
              href="https://play.google.com/store/apps/details?id=com.jathikka.thinaan&hl=en" 
              className="w-48 max-w-full sm:w-auto flex items-center justify-center bg-black/40 backdrop-blur-sm text-white px-4 py-2.5 rounded-xl hover:bg-black/60 transition-all duration-300 shadow-lg hover:shadow-accent/10 group relative overflow-hidden border border-white/10 mx-auto"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent/30 to-accent/10 bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500 opacity-0 group-hover:opacity-100"></span>
              <GoogleIcon />
              <div className="ml-3 relative">
                <div className="text-xs">GET IT ON</div>
                <div className="text-sm font-medium">Google Play</div>
              </div>
            </a>
            
            <a 
              href="https://apps.apple.com/fi/app/thinnan/id6502411893" 
              className="w-48 max-w-full sm:w-auto flex items-center justify-center bg-black/40 backdrop-blur-sm text-white px-4 py-2.5 rounded-xl hover:bg-black/60 transition-all duration-300 shadow-lg hover:shadow-accent/10 group relative overflow-hidden border border-white/10 mx-auto"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent/30 to-accent/10 bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500 opacity-0 group-hover:opacity-100"></span>
              <AppleIcon />
              <div className="ml-3 relative">
                <div className="text-xs">Download on the</div>
                <div className="text-sm font-medium">App Store</div>
              </div>
            </a>
          </div>
        </div>

        {/* Desktop Layout - Original structure */}
        <div className="hidden sm:grid sm:grid-cols-6 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Thinnan Definition Card */}
          <div className="col-span-2 mb-6 md:mb-0">
            {/* Logo and Text side by side */}
            <div className="flex items-start gap-4 md:gap-5 lg:gap-6 mb-6 md:mb-8">
              {/* Icon Container - Black with rounded corners */}
              <div className="flex-shrink-0">
                <div className="bg-black rounded-2xl md:rounded-3xl p-5 md:p-6 lg:p-7 xl:p-8 w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 flex items-center justify-center">
                  <img 
                    src={appIcon} 
                    alt="thinnan" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              {/* Definition Text - Right side of logo */}
              <div className="flex-1 flex flex-col justify-start space-y-1 md:space-y-2">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-text leading-tight">
                  thinnan
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-gray-600 font-normal">
                  /thin-naan/
                </p>
                <p className="text-base md:text-lg lg:text-xl text-gray-600 font-normal">
                  <span className="font-medium">തിന്നാൻ</span> | to eat
                </p>
                <p className="text-sm md:text-base lg:text-lg text-gray-500 font-normal mt-1 md:mt-2">
                  origin: malayalam language
                </p>
              </div>
            </div>
            
            {/* Social Media Links - Below the logo */}
            <div className="flex items-center justify-start gap-5 md:gap-6">
              <a href="https://www.instagram.com/thinnan.app/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors duration-300">
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@thinnan.app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors duration-300">
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://x.com/thinnan_irl" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors duration-300">
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/thinnan/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors duration-300">
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side Links - Pushed to the right for symmetry */}
          <div className="col-span-4 flex flex-row justify-end gap-8 md:gap-12 lg:gap-16 xl:gap-20">
            {/* First Column - Navigation Links */}
            <div>
              <ul className="space-y-4 md:space-y-5 lg:space-y-6 text-base md:text-lg lg:text-xl">
                <li>
                  <a href="#how-it-works" className="text-gray-600 hover:text-accent transition-colors duration-300">product</a>
                </li>
                <li>
                  <a href="/team" className="text-gray-600 hover:text-accent transition-colors duration-300">team</a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-600 hover:text-accent transition-colors duration-300">contact</a>
                </li>
              </ul>
            </div>

            {/* Second Column - Support Links */}
            <div>
              <ul className="space-y-4 md:space-y-5 lg:space-y-6 text-base md:text-lg lg:text-xl">
                <li>
                  <a href="/contact#feedback-form" className="text-gray-600 hover:text-accent transition-colors duration-300">request a feature</a>
                </li>
                <li>
                  <a href="/contact#feedback-form" className="text-gray-600 hover:text-accent transition-colors duration-300">report a bug</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Download Buttons - Desktop */}
          <div className="col-span-6 mt-8 md:mt-10 lg:mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://play.google.com/store/apps/details?id=com.jathikka.thinaan&hl=en" 
              className="flex items-center justify-center bg-black/40 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-black/60 transition-all duration-300 shadow-lg hover:shadow-accent/10 hover:-translate-y-1 group relative overflow-hidden border border-white/10"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent/30 to-accent/10 bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500 opacity-0 group-hover:opacity-100"></span>
              <GoogleIcon />
              <div className="ml-3 sm:ml-4 relative">
                <div className="text-sm sm:text-base">GET IT ON</div>
                <div className="text-base sm:text-lg font-medium">Google Play</div>
              </div>
            </a>
            
            <a 
              href="https://apps.apple.com/fi/app/thinnan/id6502411893" 
              className="flex items-center justify-center bg-black/40 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-black/60 transition-all duration-300 shadow-lg hover:shadow-accent/10 hover:-translate-y-1 group relative overflow-hidden border border-white/10"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent/30 to-accent/10 bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500 opacity-0 group-hover:opacity-100"></span>
              <AppleIcon />
              <div className="ml-3 sm:ml-4 relative">
                <div className="text-sm sm:text-base">Download on the</div>
                <div className="text-base sm:text-lg font-medium">App Store</div>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 pt-4 sm:pt-6 md:pt-8 border-t border-gray-200">
          <div className="flex justify-center items-center">
            <p className="text-gray-500 text-xs sm:text-sm text-center">
              © {new Date().getFullYear()} thinnan. all rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;