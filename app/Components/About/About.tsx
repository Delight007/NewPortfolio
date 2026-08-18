import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCode,
  FiGlobe,
  FiLayers,
  FiServer,
  FiSmartphone,
  FiZap,
} from "react-icons/fi";
export default function About() {
  const services = [
    {
      icon: FiCode,
      label: "Frontend",
      desc: "React, Next.js & modern CSS — turning Figma frames into living, breathing interfaces.",
    },
    {
      icon: FiSmartphone,
      label: "Mobile",
      desc: "React Native / Expo apps for iOS & Android, with performance that feels native.",
    },
    {
      icon: FiServer,
      label: "Backend",
      desc: "Node.js APIs, database design, and server architecture that scales without breaking a sweat.",
    },
    {
      icon: FiLayers,
      label: "Full-Stack",
      desc: "End-to-end ownership — from schema design to pixel-perfect deployment.",
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className=" container lg:py-28 py-20 relative overflow-hidden font-syne bg-transparent"
    >
      <div className=" mx-auto max-w-6xl relative z-10 px-4 lg:px-0">
        {/* ── Section label ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          variants={headerVariants}
          className="flex items-center gap-3 mb-6"
        >
          <em className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-2 border-gray-300/40 dark:border-gray-700/40 text-black dark:text-white text-xs font-medium tracking-wide uppercase">
            <FiZap className="w-3 h-3" />
            Who I Am
          </em>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-300/40 dark:from-gray-700/30 to-transparent" />
        </motion.div>

        {/* ── H2 Heading ── */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          variants={headerVariants}
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight !mb-5 max-w-3xl"
        >
          Crafting Digital Experiences{" "}
          <span className="relative inline-block">
            <span
              className=" !font-syne  !text-transparent lg:!text-6xl !text-2xl !font-semibold
    ![-webkit-text-stroke:1px_black] dark:![-webkit-text-stroke:1px_white] !p-3 !rounded-full border-b-2 border-black dark:border-white"
            >
              That Actually Matter
            </span>
          </span>
        </motion.h2>

        {/* ── Sub-copy ── */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={headerVariants}
          className="lg:text-lg text-sm text-gray-500 dark:text-gray-400 max-w-2xl mb-16 leading-relaxed "
        >
          I'm Levi Lafiya Gana , a software engineer who obsesses over the details — the
          half-second animation, the API response that never times out, the
          layout that works perfectly on every screen. Four years in, the
          obsession hasn't faded.
        </motion.p>

        {/* ══ BENTO GRID ══ */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* LEFT — Identity card */}
          <div className="md:col-span-4 flex flex-col gap-5">
            {/* Avatar / intro card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={cardVariants}
              className="relative rounded-2xl border border-gray-200 dark:border-white/8 p-7 flex flex-col gap-4 overflow-hidden"
              style={{ background: "transparent" }}
            >
              <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-900/5 to-cyan-900/5 rounded-2xl"></div>
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-white font-bold text-xl ">
                   <span className="logo-text text-xl !text-black">&lt;/&gt;</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-emerald-500  uppercase tracking-widest mb-1">
                    Software Engineer
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Full-Stack Developer
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    Based globally, collaborating seamlessly. I ship clean code,
                    meet deadlines, and actually enjoy the hard problems.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "9+", label: "Projects shipped" },
                { value: "3+", label: "Years building" },
                { value: "3+", label: "Countries served" },
                { value: "100%", label: "Passion-driven" },
              ].map(({ value, label }, idx) => (
                <motion.div
                  key={label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                  variants={cardVariants}
                  className="relative rounded-xl border border-gray-200 dark:border-white/8 p-4 text-center overflow-hidden"
                  style={{ background: "transparent" }}
                >
                  <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-900/5 to-cyan-900/5 rounded-xl"></div>
                  </div>
                  <div className="relative z-10">
                    <div className="text-2xl font-bold text-emerald-500 bg-clip-text  mb-1">
                      {value}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 leading-tight">
                      {label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — Content bento tiles */}
          <div className="md:col-span-8 flex flex-col gap-5">
            {/* Services 2×2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map(({ icon: Icon, label, desc }, idx) => (
                <motion.div
                  key={label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                  variants={cardVariants}
                  className="group relative rounded-2xl border border-gray-200 p-6 hover:border-white/20 hover:shadow-lg hover:shadow-black/10 transition-all duration-300 overflow-hidden"
                  style={{ background: "transparent" }}
                >
                  <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-900/5 to-cyan-900/5 rounded-2xl"></div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition-colors duration-300">
                      <Icon className="w-4.5 h-4.5 text-emerald-500  group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                        {label}
                      </h3>
                      <FiArrowUpRight className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-emerald-500 transition-colors duration-300 mt-0.5 shrink-0" />
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Personal + Global row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Global */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                variants={cardVariants}
                className="relative rounded-2xl border border-cyan-200/60 dark:border-cyan-800/40 p-6 overflow-hidden"
                style={{ background: "transparent" }}
              >
                <div className="absolute inset-0 pointer-events-none z-0">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-900/5 to-cyan-900/5 rounded-2xl"></div>
                </div>
                <div className="relative z-10">
                  <div className="w-9 h-9 rounded-lg bg-cyan-200 dark:bg-cyan-800/60 flex items-center justify-center mb-4">
                    <FiGlobe className="w-4.5 h-4.5 text-cyan-700 dark:text-cyan-300" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                    Resilient by Default
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    I've shipped under pressure, across time zones, and in
                    environments where "it worked in dev" wasn't good enough.
                    Reliability isn't a bonus — it's the baseline.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Quote strip */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              variants={cardVariants}
              className="rounded-2xl border border-gray-200 dark:border-white/8 bg-white dark:bg-gray-900/60 px-4 lg:px-7 py-2 lg:py-5 flex items-center lg:gap-5 gap-2 backdrop-blur-sm"
            >
              <span className="lg:text-5xl text-3xl leading-none text-purple-300 dark:text-purple-600 font-serif select-none">
                "
              </span>
              <p className="lg:text-sm text-xs text-gray-600 dark:text-gray-300 italic leading-relaxed">
                I don't just write code — I engineer confidence. Every project I
                take on is one I'm proud to put my name on.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
