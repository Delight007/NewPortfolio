import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { PiLineVerticalLight } from "react-icons/pi";
import { useScrollX } from "../../utilis/useScrollX";
import { GlobalContext } from "../context/GlobalContext";
import FullScreenMenu from "../FullScreenMenu/FullScreenMenu";

export default function Hero() {
  const { theme, toggleTheme } = useContext(GlobalContext);
  const scrollX = useScrollX(400);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  // Determine the label text
  const menuLabel = menuOpen ? "Close" : isHovered ? "Open" : "Menu";

  return (
    <>
      <FullScreenMenu isOpen={menuOpen} toggleMenu={toggleMenu} />

      <section
        id="hero"
        className="container  lg:min-h-screen py-5 font-syne w-full relative overflow-x-hidden"
      >
        {/* content */}
        <div className="mx-auto max-w-6xl z-10 px-4 lg:px-0">
          <nav className="flex justify-between items-center">
            <div className="h-auto flex items-center">
               <span className="logo-text text-2xl lg:text-3xl">&lt;/&gt;</span>
            </div>
            <div className="flex items-center lg:gap-4 gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/20 transition-all duration-300 focus:outline-none"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? (
                  <FaSun className="lg:text-lg text-sm text-[#FFD700]" />
                ) : (
                  <FaMoon className="lg:text-lg text-sm text-black" />
                )}
              </button>

              {/* Animated menu button */}
              <button
                onClick={toggleMenu}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="menu-toggle-btn"
                aria-label="Toggle Menu"
                style={{ zIndex: 10001 }}
              >
                <span className="menu-toggle-label !font-syne lg:text-lg text-sm">{menuLabel}</span>
                <div className="menu-toggle-icon lg:w-10 lg:h-10 w-5 h-5">
                  <span
                    className={`menu-line menu-line-top ${menuOpen ? "menu-line-cross-top" : ""}`}
                  />
                  <span
                    className={`menu-line menu-line-bottom ${menuOpen ? "menu-line-cross-bottom" : ""}`}
                  />
                </div>
              </button>
            </div>
          </nav>

          <div className="mt-8 md:mt-18 text-left ml-0 lg:ml-20">
            {/* Main heading - exactly like reference image */}
            <em>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Solution expert,
                <br />
                creative →
                <span
                  className=" !font-syne  !text-transparent dark:!text-transparent lg:!text-8xl !font-semibold
    ![-webkit-text-stroke:1px_black] dark:![-webkit-text-stroke:1px_white]"
                >
                  focused
                </span>
                <br />
                full-stack developer
              </h1>
            </em>
          </div>
          {/* scrool to the next component  */}
          <div className="flex flex-col text-center mt-12 lg:-mt-4 cursor-pointer">
            <button
              onClick={() => {
                const nextSection = document.getElementById("services");
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="!text-black dark:!text-white !w-10 !h-20 flex flex-col items-center justify-center -space-y-5 focus:outline-none"
              aria-label="Scroll to next section"
              style={{
                background: "none",
                border: "none",
                padding: 0,
              }}
            >
              <h3 className="[writing-mode:vertical-rl] rotate-180 text-sm lg:text-lg tracking-widest text-gray-400">
                Scroll
              </h3>

              <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: [1, 0.3, 1] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="origin-center"
              >
                <PiLineVerticalLight className="lg:text-7xl text-5xl font-extralight" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <IoIosArrowDown className="lg:text-3xl text-xl font-extralight lg:-mt-2 mt-0" />
              </motion.div>
            </button>
          </div>
        </div>
        {/* Developer background underlay */}
        <motion.div
          className="absolute ml-10 lg:ml-9rem lg:top-0 -top-10 left-0 h-full flex items-center pointer-events-none select-none z-0 font-syne"
          animate={{ x: -scrollX }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
        >
          <h2 className="text-[8rem] sm:text-[14rem] md:text-[18rem] lg:text-[18rem] font-bold text-gray-400 opacity-20 whitespace-nowrap font-syne leading-none mt-10">
            Developer
          </h2>
        </motion.div>
      </section>
    </>
  );
}
