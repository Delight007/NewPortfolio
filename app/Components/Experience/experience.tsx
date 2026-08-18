import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

export default function Experience() {
  const experiences = [
    {
      title: "Full-Stack Engineer",
      company: "Daniekeys Studios",
      location: "Remote",
      period: "2026",
      description:
        "Building a client onboarding and project management platform that enables clients to register, onboard, manage proposals, and track project progress in real time. Developed dashboards, workflow systems, and scalable frontend architecture using Next.js, TypeScript, and Tailwind CSS while improving SEO, performance, and AI-powered automation features.",
      achievements: [
        "Next.js + TypeScript",
        "SEO Optimization",
        "AI Integration",
      ],
    },

    {
      title: "Software Engineering Intern",
      company: "Afriment",
      location: "Remote (Internship)",
      period: "2026",
      description:
        "Contributed to frontend development, debugging, and feature implementation for internal web applications. Collaborated with engineers using Git workflows and modern React development practices.",
      achievements: [
        "React Development",
        "Git Collaboration",
        "Frontend Debugging",
      ],
    },

    {
      title: "Full Stack Developer",
      company: "Ryva",
      location: "Nigeria",
      period: "2025 – Present",
      description:
        "Developing and deploying scalable web applications for startups, handling frontend architecture, backend APIs, and production deployments using modern full-stack technologies.",
      achievements: ["Next.js", "Node.js + Express", "Vercel Deployment"],
    },

    {
      title: "Frontend Developer",
      company: "Platter",
      location: "Remote",
      period: "2025",
      description:
        "Built a responsive real estate platform for property listing, buying, and selling with modern UI/UX and optimized frontend performance.",
      achievements: ["Next.js", "Tailwind CSS", "Radix UI"],
    },

    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      location: "Worldwide",
      period: "2023 – Present",
      description:
        "Delivered custom websites and web applications for startups and businesses, handling UI development, backend integration, SEO optimization, deployment, and ongoing maintenance.",
      achievements: ["End-to-End Delivery", "SEO Optimization", "Performance"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section
      id="Experience"
      className="py-20  relative overflow-hidden font-syne"
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-emerald-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full bg-teal-400/15 blur-[100px]" />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10 px-4 lg:px-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Section label */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-3 mb-6"
        >
          <em className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-2 border-gray-300/40 dark:border-gray-700/40 text-black dark:text-white text-xs font-medium tracking-wide uppercase bg-white/20 dark:bg-black/20 backdrop-blur-sm">
            <FiBriefcase className="w-3 h-3" />
            My Journey
          </em>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-300/40 dark:from-gray-700/30 to-transparent" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-5 max-w-3xl"
        >
          Experience That{" "}
          <span className="relative inline-block">
            <span
              className=" !font-syne  !text-transparent lg:!text-6xl !text-2xl !font-semibold
    ![-webkit-text-stroke:1px_black] dark:![-webkit-text-stroke:1px_white] !p-3 !rounded-full border-b-2 border-black dark:border-white"
            >
              Shapes Excellence
            </span>
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="lg:text-lg text-sm text-gray-500 dark:text-gray-400 max-w-2xl mb-16 leading-relaxed"
        >
          Over 3+ years of building products that people actually use. From
          startups to agencies, I've worn many hats — and loved every one.
        </motion.p>

        {/* Timeline with connector */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400/50 via-teal-400/50 to-transparent hidden sm:block" />

          {/* Experience entries */}
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative flex gap-5"
                style={{ background: "transparent" }}
              >
                {/* Connector node (circle) */}
                <div className="relative z-10 hidden sm:flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full bg-emerald-400 border-2 border-white shadow-md" />
                  {idx !== experiences.length - 1 && (
                    <div className="flex-1 w-0.5 bg-emerald-400/30 my-2" />
                  )}
                </div>

                {/* Card content */}
                <div className="group relative rounded-2xl border border-gray-200 p-6 hover:border-white/20 hover:shadow-lg hover:shadow-black/10 transition-all duration-300 overflow-hidden">
                  {/* <div className="absolute inset-0 !bg-black/40 -z-10 group-hover:!bg-black/60 transition-colors" /> */}
                  {/* Gradient Background */}
                  <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-900/5 to-cyan-900/5 rounded-2xl"></div>
                  </div>
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-black dark:text-white">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-gray-300">
                        <span className="flex items-center gap-1 !font-syne !text-emerald-500 !text-sm ">
                          <FiBriefcase className="w-3.5 h-3.5" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1 !font-syne !text-emerald-500 !text-sm ">
                          <FiMapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1 !font-syne !text-emerald-500 !text-sm ">
                          <FiCalendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((ach, i) => (
                      <em
                        key={i}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-2 border-gray-300/40 dark:border-gray-700/40 text-black dark:text-white text-xs font-medium tracking-wide uppercase bg-white/20 dark:bg-black/20 backdrop-blur-sm"
                      >
                        <span className="!px-2 !py-1  !text-xs !text-black dark:!text-white !font-syne ">
                          {ach}
                        </span>
                      </em>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
