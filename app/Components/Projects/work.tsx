import { AnimatePresence, motion, useInView } from "framer-motion";
import type { StaticImageData } from "next/image";
import { useRef, useState, type ReactNode } from "react";
import {
  FiCheckCircle,
  FiChevronRight,
  FiCodesandbox,
  FiExternalLink,
  FiGithub,
  FiMail,
  FiMessageSquare,
  FiShoppingCart,
  FiSmartphone,
  FiStar,
} from "react-icons/fi";
import {
  SiCss,
  SiExpress,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Evoting from "../img/Evoting.jpeg";
import form from "../img/form.jpeg";
import G_express from "../img/G_express.jpeg";
import Krea from "../img/krea.jpeg";
import landing from "../img/landing.png";
import fktDocs from "../img/p.png";
import tracker from "../img/tracker.png";

type Project = {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  image: string | StaticImageData;
  technologies: string[];
  category: "fullstack" | "frontend" | "mobile";
  github?: string | null;
  live: string | null;
  featured: boolean;
  stars: number;
  views: number;
  status: string;
  icon: ReactNode;
};

// Project images
const PROJECT_IMAGES: Record<string, string | StaticImageData> = {
  ecommerce: G_express,
  tribtalk:
    "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&auto=format&fit=crop",
  evoting: Evoting,
  contactform: form,
  kreai: Krea,
  tracker: tracker,
  landing: landing,
  fktDocs: fktDocs,
};

// Projects data (unchanged)
const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Engagement Tracker",
    description:
      "A custom lead tracking and CRM automated system built for Daniekeys Studios to shift the focus from static posting to active relationship building. It automatically streams email inquiries directly from Gmail, processes them via Make.com workflows, stores them in MongoDB via a secure Express.js API, and displays them on a React dashboard.",
    shortDescription: "Automated lead tracking & CRM system",
    image: PROJECT_IMAGES.tracker,
    technologies: [
      "React + TypeScript",
      "Express.js",
      "MongoDB",
      "Make.com",
      "Gmail",
      "Render",
    ],
    category: "fullstack",
    github: "https://github.com/Delight007/daniekeys-tracker",
    live: "https://daniekey-studio-dm-tracker.vercel.app/",
    featured: true,
    stars: 48,
    views: 1450,
    status: "Live",
    icon: <FiCodesandbox className="w-5 h-5" />,
  },
  {
    id: 2,
    title: "Daniekeys Studios Landing Page",
    description:
      "Modern, high-performance landing page designed and built for Daniekeys Studios. Focused on robust SEO optimization, page speed performance, visual UI enhancements, Google Business Profile integration, and Google Analytics setup to capture organic traffic and measure business metrics.",
    shortDescription: "High-performance & SEO-optimized landing page",
    image: PROJECT_IMAGES.landing,
    technologies: ["NEXTJS", "TypeScript", "SEO", "Google Analytics"],
    category: "frontend",
    github: "https://github.com/Delight007/daniekeys-studios",
    live: "https://daniekeysstudios.com",
    featured: true,
    stars: 38,
    views: 1120,
    status: "Live",
    icon: <FiExternalLink className="w-5 h-5" />,
  },
  {
    id: 3,
    title: "E-Commerce Website",
    description:
      "Built responsive e-commerce platform with product management, cart, checkout, and shipping calculations. Used React Query for performance optimization and deployed on Vercel.",
    shortDescription: "Full-featured online shopping platform",
    image: PROJECT_IMAGES.ecommerce,
    technologies: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Tailwind CSS",
      "React Query",
    ],
    category: "fullstack",
    github: "https://github.com/Delight007/e-commerce",
    live: "https://e-commerce-alpha-lemon-48.vercel.app",
    featured: false,
    stars: 42,
    views: 1200,
    status: "Live",
    icon: <FiShoppingCart className="w-5 h-5" />,
  },
  {
    id: 4,
    title: "TribeTalk Chat App",
    description:
      "Real-time chat application with Socket.IO and JWT authentication. Designed responsive UI with online/offline status indicators. Built with React Native for cross-platform compatibility.",
    shortDescription: "Real-time messaging application",
    image: PROJECT_IMAGES.tribtalk,
    technologies: [
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Tailwind CSS",
    ],
    category: "mobile",
    github: "https://github.com/Delight007/TribeTalk",
    live: null,
    featured: false,
    stars: 35,
    views: 980,
    status: "In Development",
    icon: <FiMessageSquare className="w-5 h-5" />,
  },
  {
    id: 5,
    title: "E-Voting System",
    description:
      "Secure voting platform with user authentication and vote tracking. Implemented data security measures with Firebase authentication and real-time vote counting.",
    shortDescription: "Secure digital voting platform",
    image: PROJECT_IMAGES.evoting,
    technologies: ["React.js", "Firebase", "CSS"],
    category: "fullstack",
    github: "https://github.com/Delight007/E-voting",
    live: "https://e-voting-kappa.vercel.app/",
    featured: false,
    stars: 28,
    views: 750,
    status: "Live",
    icon: <FiCheckCircle className="w-5 h-5" />,
  },
  {
    id: 6,
    title: "Contact Form System",
    description:
      "Secure contact form implementation with email notifications using PHP and SMTP integration. Includes MySQL database for message storage and anti-spam protection.",
    shortDescription: "Secure PHP contact form with email",
    image: PROJECT_IMAGES.contactform,
    technologies: ["HTML", "CSS", "PHP", "MySQL", "SMTP"],
    category: "fullstack",
    github: "https://github.com/Delight007/contact-form",
    live: "https://contact-form-9e94.vercel.app/",
    featured: false,
    stars: 19,
    views: 520,
    status: "Live",
    icon: <FiMail className="w-5 h-5" />,
  },
  {
    id: 7,
    title: "Krea AI Content Creator",
    description:
      "Modern UI design for AI-powered content creation platform. Built with Next.js and TypeScript for optimal performance and SEO optimization.",
    shortDescription: "AI content creation platform UI",
    image: PROJECT_IMAGES.kreai,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "frontend",
    github: "https://github.com/yourusername/kreai",
    live: "https://webv-beryl.vercel.app/",
    featured: false,
    stars: 24,
    views: 610,
    status: "Live",
    icon: <FiSmartphone className="w-5 h-5" />,
  },

  {
    id: 8,
    title: "FKT Docs",
    description:
      "The all-in-on platform to create, manage and automate professional invoices and estimate with AI-powered Precision ",
    shortDescription:
      "Documentation and invoicing platform with AI-powered precision",
    image: PROJECT_IMAGES.fktDocs,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "postgreSQL"],
    category: "frontend",
    github: null,
    live: "https://fkt-docs.vercel.app/",
    featured: false,
    stars: 24,
    views: 610,
    status: "Live",
    icon: <FiSmartphone className="w-5 h-5" />,
  },
];

const CATEGORIES = [
  {
    id: "all",
    label: "All Projects",
    count: PROJECTS_DATA.length,
    icon: <FiCodesandbox />,
  },
  {
    id: "featured",
    label: "Featured",
    count: PROJECTS_DATA.filter((p) => p.featured).length,
    icon: <FiStar />,
  },
  {
    id: "fullstack",
    label: "Full Stack",
    count: PROJECTS_DATA.filter((p) => p.category === "fullstack").length,
    icon: <SiNodedotjs />,
  },
  {
    id: "frontend",
    label: "Frontend",
    count: PROJECTS_DATA.filter((p) => p.category === "frontend").length,
    icon: <SiReact />,
  },
  {
    id: "mobile",
    label: "Mobile",
    count: PROJECTS_DATA.filter((p) => p.category === "mobile").length,
    icon: <FiSmartphone />,
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const filteredProjects = PROJECTS_DATA.filter((project: Project) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "featured") return project.featured;
    return project.category === activeCategory;
  });

  const getTechIcon = (tech: string): ReactNode => {
    const iconMap: Record<string, ReactNode> = {
      "Next.js": <SiNextdotjs />,
      React: <SiReact />,
      TypeScript: <SiTypescript />,
      "React + TypeScript": <SiReact />,
      "Tailwind CSS": <SiTailwindcss />,
      "Node.js": <SiNodedotjs />,
      MongoDB: <SiMongodb />,
      Firebase: <SiFirebase />,
      Express: <SiExpress />,
      "Express.js": <SiExpress />,
      "Make.com": <FiCodesandbox />,
      Gmail: <FiMail />,
      Render: <FiExternalLink />,
      SEO: <FiStar />,
      "Google Analytics": <FiCheckCircle />,
      "Socket.IO": <SiSocketdotio />,
      JWT: <SiFirebase />,
      "React Query": <SiReact />,
      PHP: <SiPhp />,
      MySQL: <SiMysql />,
      SMTP: <FiMail />,
      HTML: <SiHtml5 />,
      CSS: <SiCss />,
      "React.js": <SiReact />,
      JavaScript: <SiJavascript />,
    };
    return iconMap[tech] || <FiCodesandbox className="w-3 h-3" />;
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-28 relative overflow-hidden font-syne"
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-black/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-black/15 blur-[100px]" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10  lg:px-0">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <em className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-2 border-gray-300/40 dark:border-gray-700/40 text-black dark:text-white text-xs font-medium tracking-wide uppercase bg-white/20 dark:bg-black/20 backdrop-blur-sm">
            <FiCodesandbox className="w-3 h-3" />
            My Work
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
          Projects That
          <span className="relative inline-block">
            <span
              className=" !font-syne  !text-transparent lg:!text-6xl !text-2xl !font-semibold
    ![-webkit-text-stroke:1px_black] dark:![-webkit-text-stroke:1px_white] !p-3 !rounded-full border-b-2 border-black dark:border-white"
            >
              Solve Real Problems
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
          From e-commerce to real‑time chat – each project is built with care,
          clean code, and user experience in mind.
        </motion.p>

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-5 py-2.5 rounded-full  transition-all duration-300 flex items-center gap-2  border border-gray-400/40 dark:border-gray-700/40 text-black dark:text-white text-xs font-medium tracking-wide uppercase bg-white/20 dark:bg-black/20 backdrop-blur-sm ${
                activeCategory === category.id
                  ? "bg-black/40 dark:bg-black/60 border-white/40 text-white shadow-sm"
                  : "bg-transparent border-gray-400/40 dark:border-gray-700/40 text-gray-300 hover:border-white/40 hover:text-white"
              }`}
            >
              <span className="text-base !text-black dark:!text-white">
                {category.icon}
              </span>
              <span className="flex items-center gap-2 !text-sm !px-2 !py-1   !text-black dark:!text-white !font-syne ">
                {category.label}
                <span className="px-2 py-0.5 text-xs rounded-full bg-white/10 !text-black dark:!text-white !font-syne">
                  {category.count}
                </span>
              </span>
              {activeCategory === category.id && (
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full" />
              )}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project: Project, index: number) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                getTechIcon={getTechIcon}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-6">🚧</div>
            <h3 className="text-2xl font-bold text-white mb-3">
              No Projects Found
            </h3>
            <p className="text-gray-400">
              Check back soon for new projects in this category!
            </p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="https://github.com/Delight007"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl border border-white/20 bg-black/40 backdrop-blur-sm text-gray-200 hover:text-white hover:border-white/40 hover:bg-black/60 transition-all duration-300"
            >
              <FiGithub className="w-5 h-5" />
              View All on GitHub
              <FiChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
            >
              <FiMail className="w-5 h-5" />
              Need a Similar Project?
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

type ProjectCardProps = {
  project: Project;
  index: number;
  getTechIcon: (tech: string) => ReactNode;
};

function ProjectCard({ project, index, getTechIcon }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const isCardInView = useInView(cardRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isCardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full"
    >
      {/* Card container: transparent bg + dark overlay */}
      <div className="relative h-full rounded-2xl border border-white/20 bg-transparent overflow-hidden transition-all duration-300 group-hover:border-white/40 group-hover:-translate-y-1">
        {/* Dark overlay without blur */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-900/10 to-cyan-900/10 rounded-2xl"></div>
        </div>

        {/* Image area */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={
              typeof project.image === "string"
                ? project.image
                : project.image.src
            }
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Icon overlay */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-xl bg-black/40 border border-white/20">
            <div className="text-white/80">{project.icon}</div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col">
          {/* Badges row (inside content, not protruding) */}
          <div className="flex justify-between items-start mb-3">
            {/* Featured Badge */}
            {project.featured && (
              <div className="px-3 py-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs font-semibold rounded-full flex items-center gap-1 shadow-lg">
                <FiStar className="w-3 h-3" />
                Featured
              </div>
            )}
            {/* Status Badge */}
            {project.status && (
              <div
                className={`px-3 py-1 text-xs font-semibold rounded-full flex items-center gap-1 shadow-lg ${
                  project.status === "Live"
                    ? "bg-emerald-500/80 text-emerald-100 border border-emerald-400/40"
                    : "bg-amber-500/80 text-amber-100 border border-amber-400/40"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    project.status === "Live"
                      ? "bg-emerald-300"
                      : "bg-amber-300"
                  }`}
                />
                {project.status}
              </div>
            )}
          </div>

          <h3 className="text-xl font-bold text-black dark:text-white mb-2 transition-all group-hover:text-emerald-500 dark:group-hover:text-emerald-500">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies
              .slice(0, 4)
              .map((tech: string, idx: number) => (
                <div
                  key={idx}
                  className=" inline-flex items-center gap-2 px-3 py-1 rounded-full border-2 border-gray-300/40 dark:border-gray-700/40 text-black dark:text-white text-xs font-medium tracking-wide uppercase bg-white/20 dark:bg-black/20 backdrop-blur-sm"
                  title={tech}
                >
                  <span className="!text-emerald-500 !font-syne">
                    {getTechIcon(tech)}
                  </span>
                  <span className="max-w-[70px] truncate !text-emerald-500 !font-syne !text-xs">
                    {tech}
                  </span>
                </div>
              ))}
            {project.technologies.length > 4 && (
              <div className="px-2 py-1 rounded-md bg-white/5 text-xs text-gray-300">
                +{project.technologies.length - 4}
              </div>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg  border border-black-400/30  text-black dark:text-white hover:border-purple-400 hover:bg-purple-500/20 transition-all"
                title="GitHub"
              >
                <FiGithub className="w-4 h-4" />
              </a>
            ) : null}
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-500/20 to-emerald-500/20 border border-emerald-400/30 text-sm text-white hover:from-emerald-500/40 hover:to-emerald-500/40 transition-all"
              >
                Live Demo
                <FiExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <button
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg  border border-black-400/30 text-sm  hover:from-emerald-500/40 hover:to-emerald-500/40 transition-all cursor-not-allowed"
                disabled
              >
                Coming Soon
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
