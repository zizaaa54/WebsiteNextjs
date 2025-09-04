"use client";

import projects from "@/data/projects";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function ProjectsPage() {
  // Typewriter title
  const [text] = useTypewriter({
    words: ["My Projects"],
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
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <section className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Typewriter Title */}
        <h1 className="text-5xl font-bold mb-10 text-center text-gray-800 drop-shadow-lg">
          {text}
          <Cursor cursorStyle="|" />
        </h1>

        {/* Grid container */}
        <motion.div
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                  {project.name}
                </h2>
                <p className="text-gray-600">{project.description}</p>
              </div>

              <div className="mt-4 flex justify-between">
                <Link
                  href={project.github}
                  target="_blank"
                  className="text-blue-500 hover:underline font-medium"
                >
                  GitHub
                </Link>
                <Link
                  href={project.demo}
                  target="_blank"
                  className="text-green-500 hover:underline font-medium"
                >
                  Demo
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
