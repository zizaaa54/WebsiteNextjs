"use client";

import { motion, Variants } from "framer-motion";
import { SiHtml5, SiCss3, SiFlutter, SiGithub, SiReact, SiNextdotjs } from "react-icons/si";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-600 text-5xl" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-600 text-5xl" /> },
  { name: "Flutter", icon: <SiFlutter className="text-sky-500 text-5xl" /> },
  { name: "Git & GitHub", icon: <SiGithub className="text-gray-800 text-5xl" /> },
  { name: "React", icon: <SiReact className="text-cyan-500 text-5xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black text-5xl" /> },
];

export default function SkillsPage() {
  // Typewriter title
  const [text] = useTypewriter({
    words: ["My Skills"],
    loop: 1,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  // Variants untuk container & cards
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15, when: "beforeChildren" },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      boxShadow: "0px 8px 15px rgba(0,0,0,0.1)", 
      transition: { type: "spring", stiffness: 120, damping: 15 } 
    },
  };

  return (
    <section className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Typewriter Title */}
        <motion.h1
          className="text-5xl font-bold mb-10 text-center text-gray-800 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {text}
          <Cursor cursorStyle="|" />
        </motion.h1>

        {/* Grid container */}
        <motion.div
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center"
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: "0px 20px 35px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.95 }}
            >
              {skill.icon}
              <p className="mt-3 text-lg font-medium text-gray-700">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
