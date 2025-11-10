import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import appIcon from '../assets/icons/app_icon.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [isPastHero, setIsPastHero] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      // Hero section is min-h-screen, so we check if we're past viewport height
      const heroHeight = window.innerHeight;
      const isPastHeroSection = window.scrollY > heroHeight - 100; // 100px offset for smoother transition
      
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      if (isPastHeroSection !== isPastHero) {
        setIsPastHero(isPastHeroSection);
      }
    };

    // Set active hash based on URL
    const updateActiveHash = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", updateActiveHash);
    updateActiveHash(); // Initialize on mount

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", updateActiveHash);
    };
  }, [scrolled, isPastHero]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isHomePage = window.location.pathname === "/";
  const isContactPage = window.location.pathname === "/contact";
  const isTeamPage = window.location.pathname === "/team";

  // Handle navigation to how-it-works section from other pages
  const handleProductClick = (e) => {
    if (!isHomePage) {
      e.preventDefault();
      navigate('/');
      // Wait for navigation to complete, then scroll to how-it-works section
      setTimeout(() => {
        const howItWorksSection = document.getElementById('how-it-works');
        if (howItWorksSection) {
          howItWorksSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    }
  };

  // Reusable nav link component with hover effect
  const NavLink = ({ href, to, children, onClick }) => {
    const textClass = isContactPage || isTeamPage || isPastHero 
      ? "text-gray-700 hover:text-black" 
      : "text-white hover:text-white/80";
    const underlineClass = isContactPage || isTeamPage || isPastHero
      ? "bg-accent"
      : "bg-white/60";
    
    // Use Link component if 'to' prop is provided
    if (to) {
      return (
        <Link
          to={to}
          onClick={onClick}
          className={`relative ${textClass} transition-colors duration-300 font-medium group`}
        >
          {children}
          <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${underlineClass} transition-all duration-300 group-hover:w-full`}></span>
        </Link>
      );
    }

    // Use regular anchor tag if 'href' prop is provided
    return (
      <a
        href={href}
        onClick={onClick}
        className={`relative ${textClass} transition-colors duration-300 font-medium group`}
      >
        {children}
        <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${underlineClass} transition-all duration-300 group-hover:w-full`}></span>
      </a>
    );
  };

  // Mobile nav link component
  const MobileNavLink = ({ href, to, children }) => {
    const textClass = isContactPage || isTeamPage || isPastHero 
      ? "text-gray-700 hover:text-black" 
      : "text-white hover:text-white/80";
    const underlineClass = isContactPage || isTeamPage || isPastHero
      ? "bg-accent"
      : "bg-white/60";
    
    // Use Link component if 'to' prop is provided
    if (to) {
      return (
        <Link
          to={to}
          onClick={closeMenu}
          className={`relative ${textClass} transition-colors duration-300 font-medium text-center text-lg py-1 group`}
        >
          <span className="relative">
            {children}
            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${underlineClass} transition-all duration-300 group-hover:w-full`}></span>
          </span>
        </Link>
      );
    }

    // Use regular anchor tag if 'href' prop is provided
    return (
      <a
        href={href}
        onClick={closeMenu}
        className={`relative ${textClass} transition-colors duration-300 font-medium text-center text-lg py-1 group`}
      >
        <span className="relative">
          {children}
          <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${underlineClass} transition-all duration-300 group-hover:w-full`}></span>
        </span>
      </a>
    );
  };

  return (
    <div className="fixed w-full top-0 z-50 px-2 sm:px-4 pt-2 sm:pt-4">
      <nav
        className={`max-w-xl mx-auto rounded-xl sm:rounded-2xl transition-all duration-300 relative overflow-hidden ${
          isContactPage || isTeamPage || isPastHero
            ? scrolled 
              ? "bg-white/95 backdrop-blur-sm shadow-lg border border-gray-200" 
              : "bg-white/90 backdrop-blur-sm shadow-md border border-gray-100"
            : scrolled 
              ? "border border-white/20 shadow-2xl" 
              : "border border-white/15 shadow-xl"
        }`}
        style={
          isContactPage || isTeamPage || isPastHero
            ? {}
            : {
                background: scrolled
                  ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(200, 220, 255, 0.12) 100%)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(200, 220, 255, 0.1) 100%)',
                backdropFilter: scrolled ? 'blur(40px) saturate(200%) brightness(1.1)' : 'blur(32px) saturate(200%) brightness(1.05)',
                WebkitBackdropFilter: scrolled ? 'blur(40px) saturate(200%) brightness(1.1)' : 'blur(32px) saturate(200%) brightness(1.05)',
                boxShadow: scrolled 
                  ? '0 8px 32px 0 rgba(0, 0, 0, 0.15), inset 0 1px 1px 0 rgba(255, 255, 255, 0.3)' 
                  : '0 4px 24px 0 rgba(0, 0, 0, 0.1), inset 0 1px 1px 0 rgba(255, 255, 255, 0.25)',
              }
        }
      >
        {/* Apple liquid glass - multiple layered effects (only when not past hero and not on contact page) */}
        {!isContactPage && !isTeamPage && !isPastHero && (
          <>
            {/* Top shine/reflection */}
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/40 via-white/10 to-transparent pointer-events-none opacity-60"></div>
            
            {/* Subtle color tint layer */}
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500/5 via-purple-500/3 to-transparent pointer-events-none"></div>
            
            {/* Inner glow effect */}
            <div className="absolute inset-[1px] rounded-xl sm:rounded-2xl bg-gradient-to-t from-white/10 via-transparent to-transparent pointer-events-none"></div>
            
            {/* Bottom reflection */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 rounded-xl sm:rounded-2xl bg-gradient-to-t from-white/5 to-transparent pointer-events-none"></div>
          </>
        )}
        <div className="px-4 sm:px-6 py-2 sm:py-3 flex justify-between items-center relative z-10">
          {/* Logo */}
          <div className="flex-1 md:flex-none">
            <Link
              to="/"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center"
            >
              <img 
                src={appIcon} 
                alt="thinnan" 
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl"
              />
            </Link>
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex flex-1 max-w-xl mx-auto justify-evenly items-center">
            {isHomePage ? (
              <>
                <NavLink href="#how-it-works">product</NavLink>
                <NavLink to="/team">team</NavLink>
                <NavLink to="/contact">contact</NavLink>
              </>
            ) : (
              <>
                <NavLink href="#how-it-works" onClick={handleProductClick}>product</NavLink>
                <NavLink to="/team">team</NavLink>
                {window.location.pathname === "/contact" ? (
                  <NavLink to="/contact">
                    contact
                  </NavLink>
                ) : (
                  <NavLink to="/contact">contact</NavLink>
                )}
              </>
            )}
          </div>

          {/* Join Thinnan Button - Right Aligned */}
          <div className="hidden md:block flex-1 md:flex-none text-right">
            <a
              href="https://thinnan.page.link/download"
              className="bg-black text-white px-6 py-2 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300"
            >
              join thinnan
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={isContactPage || isTeamPage || isPastHero ? "text-gray-700 focus:outline-none transition-transform duration-100" : "text-white focus:outline-none transition-transform duration-100"}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute left-0 block w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-45 top-3" : "top-1"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 block w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "opacity-0" : "top-3"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 block w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "-rotate-45 top-3" : "top-5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-[calc(100vh-200px)] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div 
            className={isContactPage || isTeamPage || isPastHero 
              ? "bg-white/95 backdrop-blur-sm border border-gray-200 mx-2 sm:mx-4 mb-4 p-4 rounded-xl shadow-lg relative overflow-hidden"
              : "border border-white/20 mx-2 sm:mx-4 mb-4 p-4 rounded-xl relative overflow-hidden"
            }
            style={isContactPage || isTeamPage || isPastHero 
              ? {}
              : {
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(200, 220, 255, 0.12) 100%)',
                  backdropFilter: 'blur(40px) saturate(200%) brightness(1.1)',
                  WebkitBackdropFilter: 'blur(40px) saturate(200%) brightness(1.1)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.15), inset 0 1px 1px 0 rgba(255, 255, 255, 0.3)',
                }
            }
          >
            {/* Apple liquid glass - multiple layered effects (only when not past hero and not on contact page) */}
            {!isContactPage && !isTeamPage && !isPastHero && (
              <>
                {/* Top shine/reflection */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/40 via-white/10 to-transparent pointer-events-none opacity-60"></div>
                
                {/* Subtle color tint layer */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 via-purple-500/3 to-transparent pointer-events-none"></div>
                
                {/* Inner glow effect */}
                <div className="absolute inset-[1px] rounded-xl bg-gradient-to-t from-white/10 via-transparent to-transparent pointer-events-none"></div>
                
                {/* Bottom reflection */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 rounded-xl bg-gradient-to-t from-white/5 to-transparent pointer-events-none"></div>
              </>
            )}
            <div className="flex flex-col space-y-4 relative z-10">
              {isHomePage ? (
                <>
                  <MobileNavLink href="#how-it-works">
                    product
                  </MobileNavLink>
                  <MobileNavLink to="/team">team</MobileNavLink>
                  <MobileNavLink to="/contact">contact</MobileNavLink>
                </>
              ) : (
                <>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      closeMenu();
                      handleProductClick(e);
                    }}
                    className={`relative ${isContactPage || isTeamPage || isPastHero ? "text-gray-700 hover:text-black" : "text-white hover:text-white/80"} transition-colors duration-300 font-medium text-center text-lg py-1 group w-full text-left`}
                  >
                    <span className="relative">
                      product
                      <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${isContactPage || isTeamPage || isPastHero ? "bg-accent" : "bg-white/60"} transition-all duration-300 group-hover:w-full`}></span>
                    </span>
                  </button>
                  <MobileNavLink to="/team">team</MobileNavLink>
                  {window.location.pathname === "/contact" ? (
                    <MobileNavLink to="/contact">
                      contact
                    </MobileNavLink>
                  ) : (
                    <MobileNavLink to="/contact">contact</MobileNavLink>
                  )}
                </>
              )}
              <div className="pt-2">
                <a
                  href="https://thinnan.page.link/download"
                  className="block bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 text-center text-lg"
                  onClick={closeMenu}
                >
                  join thinnan
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
