import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hovering, setHovering] = useState(false);

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
        className="fixed top-0 left-0 w-full h-10 z-40"
      />

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-transparent transform transition-transform duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex justify-between items-center pr-6">
          {/* Logo */}
          <a
            href="#start"
            className="flex justify-center items-center font-mono p-4 rounded-md transform transition-transform duration-300 hover:scale-110 outline-none focus:outline-none"
          >
            <span className="text-cyan-300 text-3xl pr-1 font-bold">&lt;</span>
            <span className="text-white text-4xl font-bold tracking-wider">
              ANISH
            </span>
            <span className="text-cyan-300 text-3xl pl-1 font-bold">/&gt;</span>
          </a>

          {/* Links */}
          <div className="links flex space-x-5 text-xl ml-5 font-extrabold font-mono tracking-tighter">
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;
