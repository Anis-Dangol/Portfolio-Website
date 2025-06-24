import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll + hover detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only auto-hide if not hovering
      if (!hovering) {
        setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10);
      }

      setLastScrollY(currentScrollY);

      // Active section logic
      const sections = ["start", "work", "lab", "about", "contact"];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, hovering]);
  // Hover handlers
  const handleMouseEnter = () => {
    setHovering(true);
    setShowNavbar(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
    if (window.scrollY > 10 && window.scrollY > lastScrollY) {
      setShowNavbar(false);
    }
  };

  // Mobile menu handlers
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const linkClasses = (section) =>
    `group transition-colors duration-200 ${
      activeSection === section
        ? "text-white"
        : "text-gray-500 hover:text-gray-300"
    }`;

  const slashClasses = (section) =>
    `ml-1 transition-colors duration-200 ${
      activeSection === section
        ? "text-white"
        : "text-gray-500 group-hover:text-gray-300"
    }`;
  return (
    <>
      {/* Top Hover Zone */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="fixed top-0 left-0 w-full h-10 z-40 hidden md:block"
      />

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-transparent transform transition-transform duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex justify-between items-center px-4 md:px-6">
          {/* Logo */}
          <a
            href="#start"
            className="flex justify-center items-center font-mono p-2 md:p-4 rounded-md transform transition-transform duration-300 hover:scale-110 outline-none focus:outline-none"
            onClick={closeMobileMenu}
          >
            <span className="text-cyan-300 text-xl md:text-3xl pr-1 font-bold">
              &lt;
            </span>
            <span className="text-white text-2xl md:text-4xl font-bold tracking-wider">
              ANISH
            </span>
            <span className="text-cyan-300 text-xl md:text-3xl pl-1 font-bold">
              /&gt;
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex links space-x-3 lg:space-x-5 text-lg lg:text-xl ml-5 font-extrabold font-mono tracking-tighter">
            {["start", "work", "lab", "about", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={linkClasses(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className={`${slashClasses(section)}`}>/&gt;</span>
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transform transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transform transition-transform duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-black/90 backdrop-blur-sm transform transition-all duration-300 ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100 max-h-screen"
              : "-translate-y-full opacity-0 max-h-0"
          } overflow-hidden`}
        >
          <div className="flex flex-col items-center py-6 space-y-4">
            {["start", "work", "lab", "about", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`text-xl font-extrabold font-mono tracking-tighter transition-colors duration-200 ${
                  activeSection === section
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={closeMobileMenu}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="text-cyan-300 ml-1">/&gt;</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};

export default Navbar;
