import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaDownload } from "react-icons/fa";

/* 🔹 Certification Data */
const certifications = [
  {
    title: "Frontend Web Development Course",
    provider: "Udemy",
    year: "2024",
    description:
      "Hands-on training in HTML, CSS, JavaScript, and React.js with real-world projects.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg",
    certificateUrl: "https://www.udemy.com/certificate/UC-b7990a52-fbe9-4645-8def-814f3548bab6/",
  },
  {
    title: "Product Management Course",
    provider: "Coursera",
    year: "2025",
    description:
      "Covered the product development lifecycle including planning, design, development, testing, and deployment.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg",
    certificateUrl: "https://coursera.org/share/16e2152e7e3f3e4deb1df2947a70c646",
  },
  {
    title: "Java Programming Course",
    provider: "Scaler",
    year: "2025",
    description:
      "Learned Java fundamentals including OOP concepts, collections, and exception handling.",
    logo: "https://img.icons8.com/?size=100&id=GsP9dpq9piub&format=png&color=000000",
    certificateUrl: "https://moonshot.scaler.com/s/li/ZfzzBYKRmS",
  },
];

const Certification = () => {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section
      id="certifications"
      className="
      relative py-24 border-b border-neutral-900
      bg-white dark:bg-black/80 dark:text-white
      "
    >
      {/* Glow */}
      <div
        aria-hidden
        className="
        absolute inset-0
        bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.35),transparent_60%)]
        "
      />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}      // ✅ once only
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">Certifications</h2>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300 font-medium">
            Professional certifications that validate my skills
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}    // ✅ once only
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="
              bg-white/80 dark:bg-black/50
              backdrop-blur-xl
              rounded-2xl p-6
              border border-neutral-300 dark:border-neutral-700
              shadow-lg hover:shadow-purple-500/30
              transition-all
              "
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={cert.logo}
                  alt={cert.provider}
                  className="h-8 w-auto object-contain"
                />
                <h3 className="text-xl font-semibold">
                  {cert.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                {cert.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between text-sm font-medium mb-4">
                <span className="text-purple-600">
                  {cert.provider}
                </span>
                <span className="text-neutral-500">
                  {cert.year}
                </span>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={() => setActiveCert(cert)}
                  className="
                  flex items-center gap-2 px-4 py-2 rounded-full
                  bg-purple-600 text-white text-sm
                  hover:bg-purple-500 transition
                  "
                >
                  <FaExternalLinkAlt />
                  View
                </button>

                <a
                  href={cert.certificateUrl}
                  download
                  className="
                  flex items-center gap-2 px-4 py-2 rounded-full
                  border border-purple-600 text-purple-600 text-sm
                  hover:bg-purple-600 hover:text-white transition
                  "
                >
                  <FaDownload />
                  Download
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔍 MODAL (event-based animation – allowed) */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
            fixed inset-0 z-50
            bg-black/60
            flex items-center justify-center
            px-4
            "
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="
              bg-white dark:bg-neutral-900
              rounded-2xl p-6 max-w-lg w-full
              shadow-xl
              "
            >
              <h3 className="text-2xl font-bold mb-2">
                {activeCert.title}
              </h3>
              <p className="text-sm mb-4 text-neutral-600 dark:text-neutral-300">
                {activeCert.provider} • {activeCert.year}
              </p>
              <p className="mb-6 text-sm">
                {activeCert.description}
              </p>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setActiveCert(null)}
                  className="
                  px-4 py-2 rounded-full
                  bg-neutral-300 dark:bg-neutral-700
                  text-sm
                  "
                >
                  Close
                </button>
                <a
                  href={activeCert.certificateUrl}
                  download
                  className="
                  px-4 py-2 rounded-full
                  bg-purple-600 text-white text-sm
                  hover:bg-purple-500 transition
                  "
                >
                  Download
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certification;

