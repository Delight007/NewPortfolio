import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <div key="splash" className="splash-screen">
          {/* Top half - slides up */}
          <motion.div
            className="splash-half splash-top"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Bottom half - slides down */}
          <motion.div
            className="splash-half splash-bottom"
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Logo centered on top of both halves */}
          <motion.div
            className="splash-logo-wrapper"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              enter: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
              exit: { duration: 0.35 },
            }}
          >
            {/* Radial glow */}
            <motion.div
              className="splash-glow"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0, 0.5, 0.3], scale: [0.5, 1.2, 1] }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
            <span className="logo-text text-6xl md:text-8xl relative z-10 !text-white ">&lt;/&gt;</span>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
