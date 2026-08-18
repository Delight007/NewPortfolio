import { motion } from "framer-motion";
import {
  FiCloud,
  FiCode,
  FiCpu,
  FiEye,
  FiSmartphone,
  FiZap,
} from "react-icons/fi";

export default function Services() {
  const servicesList = [
    {
      title: "Frontend Web Development",
      icon: <FiCode className="w-6 h-6" />,
      description:
        "Modern, responsive, and stunning UI/UX designs using React, Next.js, Vue, and premium glassmorphic aesthetics.",
    },
    {
      title: "Mobile App Development",
      icon: <FiSmartphone className="w-6 h-6" />,
      description:
        "High-performance, native-feeling mobile applications for iOS and Android using React Native/Expo.",
    },
    {
      title: "Performance & Website Optimization",
      icon: <FiZap className="w-6 h-6" />,
      description:
        "High-performance tuning, Core Web Vitals optimization, and best-in-class loading speeds for seamless user experiences.",
    },
    {
      title: "Web Accessibility (a11y)",
      icon: <FiEye className="w-6 h-6" />,
      description:
        "Ensuring applications meet WCAG standards, providing inclusive experiences for all users with screen readers and keyboard navigation.",
    },
    {
      title: "AI Powered Solutions",
      icon: <FiCpu className="w-6 h-6" />,
      description:
        "Integrate smart features like chatbots, recommendations, and automation to give your product a competitive edge.",
    },
    {
      title: "SaaS Development Expertise",
      icon: <FiCloud className="w-6 h-6" />,
      description:
        "Build and scale subscription‑based applications with robust backends, multi‑tenancy, and recurring billing.",
    },
  ];

  return (
    <section id="Service" className="py-28 relative overflow-hidden font-syne">
      {/* Ambient blobs
      <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full bg-indigo-400/15 blur-[100px]" /> */}

      <div className="container mx-auto px-6 max-w-6xl relative z-10 px-4 lg:px-0">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <em className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-2 border-gray-300/40 dark:border-gray-700/40 text-black dark:text-white text-xs font-medium tracking-wide uppercase bg-white/20 dark:bg-black/20 backdrop-blur-sm">
            <FiZap className="w-3 h-3" />
            What I Offer
          </em>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-300/40 dark:from-gray-700/30 to-transparent" />
        </motion.div>

        {/* Heading */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight"
          >
            Services{" "}
            <span className="relative inline-block">
              <span
                className="!font-syne !text-transparent lg:!text-6xl !font-semibold
                ![-webkit-text-stroke:1px_black] dark:![-webkit-text-stroke:1px_white] !p-3 !rounded-full border-b-2 border-black dark:border-white"
              >
                & Solutions
              </span>
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mt-5 leading-relaxed"
          >
            When passion, courage, and craftsmanship are put into something,
            positive things will happen.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-2xl border border-white/20 bg-transparent p-6 transition-all duration-300 hover:border-white/40 hover:-translate-y-1 overflow-hidden"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-900/5 to-cyan-900/5 rounded-2xl"></div>
              </div>
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl  bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition-colors duration-300 text-emerald-500  group-hover:text-white">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold dark:text-white text-black mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full relative mt-20 flex flex-col gap-4 py-20 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-900/5 to-cyan-900/5 rounded-2xl"></div>
        </div>
        {/* LEFT SCROLL */}
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex w-max"
            animate={{ x: [0, -1000] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 4,
            }}
          >
            <h1 className="text-5xl lg:text-8xl font-semibold whitespace-nowrap mr-20">
              With Knowledge of multiple tech stack →
            </h1>

            {/* duplicate */}
            <h1 className="text-5xl lg:text-8xl font-semibold whitespace-nowrap mr-20">
              With Knowledge of multiple tech stack →
            </h1>
          </motion.div>
        </div>

        {/* RIGHT SCROLL */}
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex w-max"
            animate={{ x: [-1000, 0] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 4,
            }}
          >
            <h1
              className="text-5xl lg:text-8xl font-semibold whitespace-nowrap mr-20
            text-transparent [-webkit-text-stroke:1px_black] dark:[-webkit-text-stroke:1px_white]"
            >
              More than 3 years of experience →
            </h1>

            {/* duplicate */}
            <h1
              className="text-5xl lg:text-8xl font-semibold whitespace-nowrap mr-20
            text-transparent [-webkit-text-stroke:1px_black] dark:[-webkit-text-stroke:1px_white]"
            >
              More than 3 years of experience →
            </h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
