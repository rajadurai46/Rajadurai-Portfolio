import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { motion } from "framer-motion";

const socialLinks = [
  {
    icon: <FaFacebook />,
    url: "https://www.facebook.com/irajadurai46",
    color: "text-blue-600",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/irajadurai46",
    color: "text-rose-500",
  },
  {
    icon: <FaWhatsapp />,
    url: "https://wa.me/qr/VX7Y5WNX5VOUG1",
    color: "text-green-500",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/rajadurai-a-a894a71aa",
    color: "text-blue-500",
  },
  {
    icon: <FaGithub />,
    url: "https://github.com/rajadurai46",
    color: "text-neutral-800 dark:text-white",
  },
];

const Footer = () => {
  return (
    <footer
      id="footer"
      className="
      relative border-t border-neutral-800
      bg-white dark:bg-black dark:text-white
      "
    >
      {/* Glow */}
      <div
        aria-hidden
        className="
        absolute inset-0
        bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.35),transparent_60%)]
        "
      />

      <div className="relative max-w-6xl mx-auto px-4 py-12">

        {/* Social Icons (ONE-TIME animation) */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}   // ✅ animate once
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center gap-5 mb-8"
        >
          {socialLinks.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2 }}  // hover allowed
              whileTap={{ scale: 0.95 }}
              className={`
              text-2xl sm:text-3xl
              p-3 rounded-full
              bg-white/70 dark:bg-black/40
              backdrop-blur-xl
              shadow-md
              transition-colors
              ${item.color}
              `}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-neutral-400/40 dark:border-neutral-700 mb-6" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}   // ✅ animate once
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center space-y-1 text-sm sm:text-base"
        >
          <p className="flex justify-center items-center gap-1">
            <FaRegCopyright />
            <span className="text-cyan-600 font-semibold">
              {new Date().getFullYear()}
            </span>
            <span>All Rights Reserved</span>
          </p>

          <p>
            Created by{" "}
            <span className="font-semibold">
              Rajadurai <span className="text-red-600">A</span>
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

