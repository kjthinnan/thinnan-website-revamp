import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Set active hash based on URL
    const updateActiveHash = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", updateActiveHash);
    updateActiveHash(); // Initialize on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", updateActiveHash);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isHomePage = window.location.pathname === "/";

  // Reusable nav link component with hover effect
  const NavLink = ({ href, to, children, onClick }) => {
    // Use Link component if 'to' prop is provided
    if (to) {
      return (
        <Link
          to={to}
          onClick={onClick}
          className="relative text-gray-700 hover:text-black transition-colors duration-300 font-medium group"
        >
          {children}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
        </Link>
      );
    }

    // Use regular anchor tag if 'href' prop is provided
    return (
      <a
        href={href}
        onClick={onClick}
        className="relative text-gray-700 hover:text-black transition-colors duration-300 font-medium group"
      >
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
      </a>
    );
  };

  // Mobile nav link component
  const MobileNavLink = ({ href, to, children }) => {
    // Use Link component if 'to' prop is provided
    if (to) {
      return (
        <Link
          to={to}
          onClick={closeMenu}
          className="relative text-gray-700 hover:text-black transition-colors duration-300 font-medium text-center text-lg py-1 group"
        >
          <span className="relative">
            {children}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>
      );
    }

    // Use regular anchor tag if 'href' prop is provided
    return (
      <a
        href={href}
        onClick={closeMenu}
        className="relative text-gray-700 hover:text-black transition-colors duration-300 font-medium text-center text-lg py-1 group"
      >
        <span className="relative">
          {children}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
        </span>
      </a>
    );
  };

  return (
    <div className="fixed w-full top-0 z-50 px-2 sm:px-4 pt-2 sm:pt-4">
      <nav
        className={`max-w-7xl mx-auto rounded-xl sm:rounded-2xl transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white/90"
        }`}
      >
        <div className="px-4 sm:px-6 py-2 sm:py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex-1 md:flex-none">
            <Link
              to="/"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-xl sm:text-2xl font-bold"
            >
              <span className="text-black">thinnan</span>
            </Link>
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-6 lg:space-x-8">
            {isHomePage ? (
              <>
                <NavLink href="#features">features</NavLink>
                <NavLink href="#how-it-works">how it works</NavLink>
                <NavLink href="#community">community</NavLink>
                <NavLink href="#team">team</NavLink>
                <NavLink href="#achievements">achievements</NavLink>
                <NavLink href="#location">our home</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/#features">features</NavLink>
                <NavLink to="/#how-it-works">how it works</NavLink>
                <NavLink to="/#community">community</NavLink>
                <NavLink to="/#team">Team</NavLink>
                {window.location.pathname === "/achievements" ? (
                  <NavLink to="/#achievements" className="text-accent">
                    achievements
                  </NavLink>
                ) : (
                  <NavLink to="/#achievements">achievements</NavLink>
                )}
                <NavLink to="/#location">our home</NavLink>
              </>
            )}
          </div>

          {/* Download Button - Right Aligned */}
          <div className="hidden md:block flex-1 md:flex-none text-right">
            <a
              href="https://thinnan.page.link/download"
              className="bg-black text-white px-6 py-2 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300"
            >
              download app
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none transition-transform duration-100"
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
          <div className="bg-white/95 backdrop-blur-sm mx-2 sm:mx-4 mb-4 p-4 rounded-xl shadow-lg">
            <div className="flex flex-col space-y-4">
              {isHomePage ? (
                <>
                  <MobileNavLink href="#features">features</MobileNavLink>
                  <MobileNavLink href="#how-it-works">
                    how it works
                  </MobileNavLink>
                  <MobileNavLink href="#community">community</MobileNavLink>
                  <MobileNavLink href="#team">team</MobileNavLink>
                  <MobileNavLink href="#achievements">
                    achievements
                  </MobileNavLink>
                  <MobileNavLink href="#location">our home</MobileNavLink>
                </>
              ) : (
                <>
                  <MobileNavLink to="/#features">features</MobileNavLink>
                  <MobileNavLink to="/#how-it-works">
                    how it works
                  </MobileNavLink>
                  <MobileNavLink to="/#community">community</MobileNavLink>
                  <MobileNavLink to="/#team">team</MobileNavLink>
                  {window.location.pathname === "/achievements" ? (
                    <MobileNavLink to="/#achievements" className="text-accent">
                      achievements
                    </MobileNavLink>
                  ) : (
                    <MobileNavLink to="/#achievements">
                      achievements
                    </MobileNavLink>
                  )}
                  <MobileNavLink to="/#location">our home</MobileNavLink>
                </>
              )}
              <div className="pt-2">
                <a
                  href="https://thinnan.page.link/download"
                  className="block bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 text-center text-lg"
                  onClick={closeMenu}
                >
                  download app
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
