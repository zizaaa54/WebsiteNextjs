"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function About() {
  const description = `Halo, saya Nur Azizah, aku siswi di SMKN 08 Malang jurusan Rekayasa Perangkat Lunak. Saya ingin mempelajari coding, desain, dan web development / Software developer, dengan tujuan semoga bisa menciptakan karya digital yang bermanfaat dan menarik.`;

  const wordVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="max-w-5xl mx-auto p-8 pt-16 pb-16">
      {/*Judul*/}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-14 text-center font-serif text-gray-800 dark:text-gray-100"
        initial={{ opacity: 0, y: -30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          textShadow:
            "0 0 8px rgba(0,0,0,0.2), 0 0 15px rgba(0,0,0,0.15)",
        }}
      >
        <TypeAnimation
          sequence={[
            "About Me",
            2000,
            () => {},
            "Get to Know Me",
            2000,
          ]}
          speed={60}
          repeat={Infinity}
          cursor={true}
        />
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/*animasi kata demi kata*/}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
        >
          <p className="text-xl md:text-2xl leading-relaxed font-serif text-gray-700 dark:text-gray-300 flex flex-wrap justify-center md:justify-start">
            {description.split(" ").map((word, index) => (
              <motion.span
                key={index}
                className="mr-2 cursor-default hover:text-indigo-500 transition-colors duration-300"
                variants={wordVariants}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {word}
              </motion.span>
            ))}
          </p>
        </motion.div>

        {/* Foto dengan subtle floating + shadow + ring border */}
        <motion.div
          className="relative flex-shrink-0 flex justify-center"
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="relative w-[260px] h-[260px] rounded-full p-[4px] bg-gray-200 dark:bg-gray-700 shadow-xl ring-2 ring-gray-300 dark:ring-gray-600"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/profile2.jpeg"
              alt="Foto Aziza"
              fill
              className="object-cover rounded-full transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
