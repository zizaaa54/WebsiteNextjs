"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaTiktok, FaSpotify } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6 text-center"
      >
        Contact Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-600 mb-8 text-center"
      >
        Reach out via form or social media.
      </motion.p>

      {/*Form Contact*/}
      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-4"
      >
        <input
          type="text"
          placeholder="Nama"
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <textarea
          placeholder="Pesan"
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Kirim
        </button>
      </motion.form>

      {/*Social Media*/}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex justify-center gap-6 mt-10 text-3xl text-gray-700"
      >
        <a
          href="https://github.com/zizaaa54"
          target="_blank"
          className="hover:text-black transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/username"
          target="_blank"
          className="hover:text-pink-600 transition"
        >
          <FaLinkedin/>
        </a>
        <a
          href="https://instagram.com/nurrraziizaaa"
          target="_blank"
          className="hover:text-pink-600 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.tiktok.com/@avo0ocadoo_?"
          target="_blank"
          className="hover:text-pink-600 transition"
        >
          <FaTiktok/>
        </a>
      </motion.div>
    </section>
  );
}
