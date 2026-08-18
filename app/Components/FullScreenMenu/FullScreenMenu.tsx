import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { GlobalContext } from "../context/GlobalContext";

const menuItems = [
  { label: "Home", sectionId: "hero" },
  { label: "About", sectionId: "about" },
  { label: "Experience", sectionId: "Experience" },
  { label: "Services", sectionId: "Service" },
  { label: "Projects", sectionId: "projects" },
  { label: "Skills", sectionId: "skills" },
  { label: "Contact", sectionId: "contact" },
];

const socials = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "https://linkedin.com/" },
  { icon: FaXTwitter, label: "X / Twitter", href: "https://x.com/" },
  { icon: FaInstagram, label: "Instagram", href: "https://instagram.com/" },
];

// Stagger variants for menu items
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.3,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.25 },
  },
};

const socialVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.2 },
  },
};

export default function FullScreenMenu({ isOpen, toggleMenu }) {
  const { theme } = useContext(GlobalContext);

  function smoothScrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  }

  function handleNavClick(sectionId) {
    toggleMenu();
    setTimeout(() => smoothScrollToSection(sectionId), 400);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fullscreen-menu"
          initial={{ clipPath: "circle(0% at calc(100% - 60px) 40px)" }}
          animate={{ clipPath: "circle(150% at calc(100% - 60px) 40px)" }}
          exit={{ clipPath: "circle(0% at calc(100% - 60px) 40px)" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Explore underlay text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
            <h2 className="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold text-gray-400 opacity-10 dark:opacity-5 whitespace-nowrap font-syne leading-none">
              Explore
            </h2>
          </div>

          <div className="fullscreen-menu-inner relative z-10">
            {/* Left side — numbered menu items */}
            <motion.nav
              className="menu-nav-list"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {menuItems.map((item, idx) => (
                <motion.a
                  key={item.sectionId}
                  variants={itemVariants}
                  className="menu-nav-item"
                  onClick={() => handleNavClick(item.sectionId)}
                  href={`#${item.sectionId}`}
                >
                  <span className="menu-nav-number">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="menu-nav-label">{item.label}</span>
                </motion.a>
              ))}
            </motion.nav>

            {/* Right side — social media */}
            <motion.div
              className="menu-socials"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.p className="menu-socials-title" variants={socialVariants}>
                Connect
              </motion.p>
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="menu-social-link"
                  variants={socialVariants}
                  whileHover={{ x: 6 }}
                >
                  <social.icon className="menu-social-icon" />
                  <span className="!font-syne !text-black">{social.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
