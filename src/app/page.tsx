"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center p-4 bg-white">
      {/* Foto Profil */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <div className="w-48 h-48 rounded-full overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.2)] border-2 border-gray-300">
          <Image
            src="/profile.jpeg"
            alt="Foto Aziza"
            width={192}
            height={192}
            className="rounded-full"
          />
        </div>
      </motion.div>

      <motion.h1
        className="text-5xl font-extrabold mt-6 text-gray-800"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Nur Azizah
      </motion.h1>

      {/* Tagline */}
      <p className="text-xl mt-2 text-gray-600">
        <Typewriter
          words={["Selamat Datang di Website saya <3"]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </p>

      {/* Tombol Navigasi */}
      <div className="mt-8 flex gap-6">
        <Link href="/about">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-gray-500 via-gray-800 to-gray-200 shadow-md hover:opacity-90 transition-all duration-300"
          >
            About Me
          </motion.button>
        </Link>
        <Link href="/projects">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-gray-500 via-gray-800 to-gray-200 shadow-md hover:opacity-90 transition-all duration-300"
          >
            My Projects
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
