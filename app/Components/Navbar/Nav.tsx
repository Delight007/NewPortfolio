import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import MobileNav from "../Mobilenav/MobileNav";
import { GlobalContext } from "../context/GlobalContext";

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isHovered, setIsHovered] = useState(false);
  const { theme, toggleTheme } = useContext(GlobalContext);
  const sectionIds = [
    "hero",
    "about",
    "Experience",
    "Service",
    "projects",
    "skills",
    "contact",
  ];
  const linkRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      // Navbar visibility
      if (window.scrollY < 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      // Scrollspy logic (find section closest to top)
      let current = sectionIds[0];
      let minDist = Number.POSITIVE_INFINITY;
      for (let i = 0; i < sectionIds.length; i++) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          const dist = Math.abs(rect.top - 90); // 90px offset for navbar
          if (rect.top - 90 <= 0 && dist < minDist) {
            minDist = dist;
            current = sectionIds[i];
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

  function smoothScrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Approximate height of sticky navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }

  const menuLabel = openMenu ? "Close" : isHovered ? "Open" : "Menu";

  return (
    <>
      <MobileNav
        openMenu={openMenu}
        toggleMenu={toggleMenu}
        smoothScrollToSection={smoothScrollToSection}
      />
      <nav
        className={`bg-white/70 dark:bg-black/40 py-3 fixed w-[80%] top-0 left-0 right-0 mx-auto mt-4 z-50 backdrop-blur-xl border-b rounded-full border-slate-200 dark:border-white/10 transition-transform duration-300 font-syne ${
          isVisible ? "translate-y-0" : "-translate-y-80"
        }`}
      >
        <div className="w-full flex justify-between items-center px-6 mx-auto">
          <div className="flex items-center">
            <span className="logo-text text-2xl lg:text-3xl">&lt;/&gt;</span>
          </div>

          <div className="hidden md:flex items-center space-x-2 relative">
            {sectionIds.map((section, idx) => (
              <a
                key={section}
                ref={(el) => (linkRefs.current[idx] = el)}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollToSection(section);
                }}
                className={`relative mx-3 py-2 font-medium dark:text-white capitalize cursor-pointer hover:text-emerald-500 transition-all duration-300
                  
                  ${
                    activeSection === section
                      ? "text-emerald-500"
                      : "text-black"
                  }
                  hover:text-emerald`}
              >
                {section === "hero"
                  ? "Home"
                  : section === "contact"
                    ? "Contact"
                    : section === "Service"
                      ? "Service"
                      : section}
              </a>
            ))}
            {/* Animated indicator */}
            {(() => {
              const idx = sectionIds.indexOf(activeSection);
              if (idx === -1 || !linkRefs.current[idx]) return null;
              const el = linkRefs.current[idx];
              const rect = el?.getBoundingClientRect();
              const parentRect = el?.parentElement?.getBoundingClientRect();
              // Fallback for SSR or first render
              if (!rect || !parentRect) return null;
              const left = el.offsetLeft;
              const width = el.offsetWidth;
              return (
                <motion.div
                  layoutId="nav-indicator"
                  style={{
                    position: "absolute",
                    left,
                    bottom: 0,
                    width,
                    height: 4,
                    borderRadius: 2,
                    background: "#10b981", // emerald-500
                    zIndex: 1,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              );
            })()}

            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/20 transition-all duration-300 focus:outline-none"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <FaSun className="text-xl text-[#FFD700]" />
              ) : (
                <FaMoon className="text-xl" />
              )}
            </button>
          </div>

          <div className="flex items-center lg:gap-4 gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/20 transition-all duration-300 focus:outline-none"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <FaSun className="lg:text-lg text-sm text-[#FFD700]" />
              ) : (
                <FaMoon className="lg:text-lg text-sm" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="menu-toggle-btn"
              aria-label="Toggle Menu"
              style={{ zIndex: 10001 }}
            >
              <span className="menu-toggle-label !font-syne !text-sm md:!text-sm">{menuLabel}</span>
              <div className="menu-toggle-icon  lg:w-10 lg:h-10 w-5 h-5">
                <span
                  className={`menu-line menu-line-top  ${openMenu ? "menu-line-cross-top" : ""}`}
                />
                <span
                  className={`menu-line menu-line-bottom ${openMenu ? "menu-line-cross-bottom" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
