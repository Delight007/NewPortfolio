"use client";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";
import {
  FiCheckCircle,
  FiMail as FiCompose,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";

export default function ContactMe() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      console.error(
        "EmailJS is not configured. Add NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY to your environment variables.",
      );
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const form = formRef.current;
      if (!form) {
        throw new Error("Form reference is missing");
      }

      await emailjs.sendForm(serviceId, templateId, form, publicKey);
      setSubmitStatus("success");
      form.reset();
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Email send error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail className="w-5 h-5" />,
      label: "Email",
      value: "ganalafiyalevi@gmail.com",
      link: "mailto:ganalafiyalevi@gmail.com",
    },
    {
      icon: <FiPhone className="w-5 h-5" />,
      label: "Phone",
      value: "+234 9158883523",
      link: "tel:+234 9158883523",
    },
    {
      icon: <FiGithub className="w-5 h-5" />,
      label: "GitHub",
      value: "/Delight007",
      link: "https://github.com/Delight007",
    },
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/levi-gana-462102348",
      link: "https://linkedin.com/in/levi-gana-462102348",
    },
    {
      icon: <FiMapPin className="w-5 h-5" />,
      label: "Location",
      value: "Remote / Global",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-28 relative overflow-hidden font-syne">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-purple-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-indigo-400/15 blur-[100px]" />

      <div className="container mx-auto max-w-6xl relative z-10 px-4 lg:px-0">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <em className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-2 border-gray-300/40 dark:border-gray-700/40 text-black dark:text-white text-xs font-medium tracking-wide uppercase bg-white/20 dark:bg-black/20 backdrop-blur-sm">
            <FiMail className="w-3 h-3" />
            Get In Touch
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
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight"
          >
            Let's{" "}
            <span className="relative inline-block">
              <span
                className="!font-syne !text-transparent lg:!text-6xl !text-2xl !font-semibold
                ![-webkit-text-stroke:1px_black] dark:![-webkit-text-stroke:1px_white] !p-3 !rounded-full border-b-2 border-black dark:border-white"
              >
                Work Together
              </span>
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:text-lg text-sm text-gray-500 dark:text-gray-400 max-w-2xl mt-5 leading-relaxed"
          >
            Have a project in mind? Let's turn your ideas into reality. I'm just
            one message away.
          </motion.p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side – Contact Info Cards + Buttons */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-syne">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl border border-white/20 bg-transparent p-5 transition-all duration-300 hover:border-white/40 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Gradient Background */}
                  <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-900/5 to-cyan-900/5 rounded-2xl"></div>
                  </div>{" "}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition-colors duration-300 text-emerald-500  group-hover:text-white">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-black dark:text-white font-medium capitalize tracking-wider">
                        {info.label}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-emerald-500 underline font-medium transition-colors text-sm break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-400 font-medium text-sm">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Download Resume Button */}
              <a
                href="/GANA_LEVI_RESUME.pdf"
                download
                className="group relative rounded-xl border border-white/20 bg-emerald-500 px-5 py-3 transition-all duration-300 hover:border-white/40 hover:-translate-y-1 flex items-center justify-center gap-2 overflow-hidden text-white font-medium"
              >
                {/* Gradient Background
                <div className="absolute inset-0 pointer-events-none z-0">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-900/5 to-cyan-900/5 rounded-2xl"></div>
                </div>{" "} */}
                <FiDownload className="w-5 h-5 text-white" />
                <span className="!text-white !text-sm !font-medium !font-syne">
                  Download Resume
                </span>
              </a>

              {/* Compose Email Button */}
              <a
                href="mailto:ganalafiyalevi.com?subject=Let's%20Work%20Together&body=Hi%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project..."
                className="group relative rounded-xl border font-syne border-white/20 bg-emerald-500 px-5 py-3 transition-all duration-300 hover:border-white/40 hover:-translate-y-1 flex items-center justify-center gap-2 overflow-hidden"
              >
                <FiCompose className="w-5 h-5 text-white" />
                <span className="!text-white !text-sm !font-medium !font-syne">
                  Compose Email
                </span>
              </a>
            </div>
          </div>

          {/* Right side – Contact Form */}
          <div className="group relative rounded-2xl font-syne border border-white/20 bg-transparent p-6 transition-all duration-300 hover:border-white/40 overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-900/5 to-cyan-900/5 rounded-2xl"></div>
            </div>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
              Send a Message
            </h3>

            {submitStatus === "success" && (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <FiCheckCircle className="w-16 h-16 text-green-400 mb-4" />
                <p className=" text-black dark:text-white text-lg font-medium">
                  Message sent!
                </p>
                <p className="text-gray-300 text-sm mt-2">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
                  <FiSend className="w-8 h-8 text-red-400" />
                </div>
                <p className="text-black text-lg font-medium">
                  Something went wrong
                </p>
                <p className="text-emerald-500 text-sm mt-2">
                  Please try again later or email me directly.
                </p>
              </div>
            )}

            {submitStatus !== "success" && (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-emerald-500 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-emerald-300 text-emerald-500 placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-emerald-500 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-emerald-300 text-emerald-500 placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="hello@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-emerald-500 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-emerald-300 text-emerald-500 placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500  text-white font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <FiSend className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
