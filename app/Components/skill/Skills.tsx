import { motion } from "framer-motion";
import { DiWebplatform } from "react-icons/di";
import {
  FaChartLine,
  FaClock,
  FaCode,
  FaComments,
  FaLightbulb,
  FaRocket,
  FaUsers,
  FaVideo,
} from "react-icons/fa";
import { FiBox, FiShield, FiTarget, FiZap } from "react-icons/fi";
import {
  SiCloudinary,
  SiCss,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiMongodb,
  SiMui,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiSlackware,
  SiSocketdotio,
  SiSvelte,
  SiTailwindcss,
  SiTestinglibrary,
  SiThreedotjs,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbApi, TbBrandReactNative } from "react-icons/tb";

export default function Skills() {
  const techStack = [
    {
      name: "Next.js",
      icon: <SiNextdotjs className="w-7 h-7" style={{ color: "#000000" }} />,
    },
    {
      name: "React",
      icon: <SiReact className="w-7 h-7" style={{ color: "#61DAFB" }} />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="w-7 h-7" style={{ color: "#3178C6" }} />,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="w-7 h-7" style={{ color: "#339933" }} />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="w-7 h-7" style={{ color: "#47A248" }} />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="w-7 h-7" style={{ color: "#FFCA28" }} />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="w-7 h-7" style={{ color: "#06B6D4" }} />,
    },
    {
      name: "Express",
      icon: <SiExpress className="w-7 h-7" style={{ color: "#000000" }} />,
    },
    {
      name: "Git",
      icon: <SiGit className="w-7 h-7" style={{ color: "#F05032" }} />,
    },
    {
      name: "Vercel",
      icon: <SiVercel className="w-7 h-7" style={{ color: "#000000" }} />,
    },
    {
      name: "Figma",
      icon: <SiFigma className="w-7 h-7" style={{ color: "#F24E1E" }} />,
    },
    {
      name: "Cloudinary",
      icon: <SiCloudinary className="w-7 h-7" style={{ color: "#3448C5" }} />,
    },
    {
      name: "HTML5",
      icon: <SiHtml5 className="w-7 h-7" style={{ color: "#E34F26" }} />,
    },
    {
      name: "CSS3",
      icon: <SiCss className="w-7 h-7" style={{ color: "#1572B6" }} />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="w-7 h-7" style={{ color: "#F7DF1E" }} />,
    },

    {
      name: "React Native",
      icon: (
        <TbBrandReactNative className="w-7 h-7" style={{ color: "#61DAFB" }} />
      ),
    },
    {
      name: "Expo",
      icon: <SiExpo className="w-7 h-7" style={{ color: "#000020" }} />,
    },
    {
      name: "Zustand",
      icon: <FiZap className="w-7 h-7" style={{ color: "#443E38" }} />,
    },
    {
      name: "React Query",
      icon: <SiReactquery className="w-7 h-7" style={{ color: "#FF4154" }} />,
    },
    {
      name: "Framer Motion",
      icon: <FiBox className="w-7 h-7" style={{ color: "#0055FF" }} />,
    },
    {
      name: "Jira",
      icon: <SiJira className="w-7 h-7" style={{ color: "#0052CC" }} />,
    },
    {
      name: "Slack",
      icon: <SiSlackware className="w-7 h-7" style={{ color: "#4A154B" }} />,
    },
    {
      name: "Agora (Video Call)",
      icon: <FaVideo className="w-7 h-7" style={{ color: "#0097B2" }} />,
    },
    {
      name: "WebSocket",
      icon: <SiSocketdotio className="w-7 h-7" style={{ color: "#010101" }} />,
    },
    {
      name: "Three.js",
      icon: <SiThreedotjs className="w-7 h-7" style={{ color: "#000000" }} />,
    },
    {
      name: "Docker",
      icon: <SiDocker className="w-7 h-7" style={{ color: "#2496ED" }} />,
    },
    {
      name: "EJS",
      icon: <DiWebplatform className="w-7 h-7" style={{ color: "#B4CA65" }} />,
    },
    {
      name: "Svelte",
      icon: <SiSvelte className="w-7 h-7" style={{ color: "#FF3E00" }} />,
    },
    {
      name: "Mantine UI",
      icon: <SiReactrouter className="w-7 h-7" style={{ color: "#339AF0" }} />,
    },
    {
      name: "Material UI",
      icon: <SiMui className="w-7 h-7" style={{ color: "#007FFF" }} />,
    },
    {
      name: "React Testing Library",
      icon: (
        <SiTestinglibrary className="w-7 h-7" style={{ color: "#E33332" }} />
      ),
    },
    {
      name: "Socket.IO",
      icon: <SiSocketdotio className="w-7 h-7" style={{ color: "#010101" }} />,
    },
    {
      name: "Formik",
      icon: <TbApi className="w-7 h-7" style={{ color: "#2C6BFF" }} />,
    },
    {
      name: "Yup",
      icon: <FaCode className="w-7 h-7" style={{ color: "#32CD32" }} />,
    },
    {
      name: "Netlify",
      icon: <SiNetlify className="w-7 h-7" style={{ color: "#00C7B7" }} />,
    },
    {
      name: "PHP",
      icon: <SiPhp className="w-7 h-7" style={{ color: "#777BB4" }} />,
    },
  ];

  // Soft Skills data
  const softSkills = [
    {
      title: "Problem Solving",
      icon: <FiTarget className="w-6 h-6" />,
      description:
        "Break down complex issues, identify root causes, and implement efficient, scalable solutions.",
    },
    {
      title: "Team Collaboration",
      icon: <FaUsers className="w-6 h-6" />,
      description:
        "Work seamlessly with designers, product managers, and developers across time zones.",
    },
    {
      title: "Agile Delivery",
      icon: <FaRocket className="w-6 h-6" />,
      description:
        "Prioritize tasks, estimate accurately, and deliver MVPs on time without compromising quality.",
    },
    {
      title: "Fast Learner",
      icon: <FaChartLine className="w-6 h-6" />,
      description:
        "Quickly adopt new frameworks, libraries, and best practices to stay ahead of the curve.",
    },
    {
      title: "Communication",
      icon: <FaComments className="w-6 h-6" />,
      description:
        "Translate technical concepts for non‑technical stakeholders and document clearly.",
    },
    {
      title: "Time Management",
      icon: <FaClock className="w-6 h-6" />,
      description:
        "Balance multiple projects, meet deadlines, and maintain work‑life harmony.",
    },
    {
      title: "Creative Thinking",
      icon: <FaLightbulb className="w-6 h-6" />,
      description:
        "Approach challenges from fresh angles and propose innovative UX/UI solutions.",
    },
    {
      title: "Resilience",
      icon: <FiShield className="w-6 h-6" />,
      description:
        "Stay calm under pressure, learn from failures, and persist through tough debugging sessions.",
    },
  ];

  return (
    <section
      id="skills"
      className="container w-full py-28 relative overflow-hidden font-syne bg-transparent"
    >
      <div className="mx-auto max-w-6xl relative z-10 px-4 lg:px-0">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <em className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-2 border-gray-300/40 dark:border-gray-700/40 text-black dark:text-white text-xs font-medium tracking-wide uppercase bg-white/20 dark:bg-black/20 backdrop-blur-sm">
            <FaCode className="w-3 h-3" />
            Tech Stack
          </em>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-300/40 dark:from-gray-700/30 to-transparent" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-5 max-w-3xl"
        >
          Technologies{" "}
          <span className="relative inline-block">
            <span
              className="!font-syne !text-transparent lg:!text-6xl !text-2xl !font-semibold
              ![-webkit-text-stroke:1px_black] dark:![-webkit-text-stroke:1px_white] !p-3 !rounded-full border-b-2 border-black dark:border-white"
            >
              I Work With
            </span>
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:text-lg text-sm text-gray-500 dark:text-gray-400 max-w-2xl mb-12 leading-relaxed"
        >
          Modern tools, frameworks, and platforms I use daily to build fast,
          scalable, and beautiful applications.
        </motion.p>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techStack.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: (idx % 6) * 0.1 }}
              className="group relative rounded-xl border border-white/20 bg-transparent p-4 text-center transition-all duration-300 hover:border-white/40 hover:-translate-y-1"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-900/5 to-cyan-900/5 rounded-2xl"></div>
              </div>
              {/* Icon with brand color */}
              <div className="mb-2 flex justify-center transition-transform group-hover:scale-110">
                {tech.icon}
              </div>
              {/* Label */}
              <span className="!text-xs !font-medium !text-gray-500 !group-hover:text-white !font-syne !cursor-pointer">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ─── Professional Soft Skills Section ─── */}
        <div className="mt-24">
          {/* Section label for soft skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <em className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-2 border-gray-300/40 dark:border-gray-700/40 text-black dark:text-white text-xs font-medium tracking-wide uppercase bg-white/20 dark:bg-black/20 backdrop-blur-sm">
              <FaUsers className="w-3 h-3" />
              Beyond Code
            </em>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-300/40 dark:from-gray-700/30 to-transparent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-5 max-w-3xl"
          >
            Professional{" "}
            <span className="relative inline-block">
              <span
                className="!font-syne !text-transparent lg:!text-6xl !font-semibold
                ![-webkit-text-stroke:1px_black] dark:![-webkit-text-stroke:1px_white] !p-3 !rounded-full border-b-2 border-black dark:border-white"
              >
                Soft Skills
              </span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:text-lg text-sm text-gray-500 dark:text-gray-400 max-w-2xl mb-12 leading-relaxed"
          >
            The human side of engineering – communication, collaboration, and
            mindset that turn good code into great products.
          </motion.p>

          {/* Soft Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, idx) => (
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
                  {skill.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-black dark:text-white mb-2">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
