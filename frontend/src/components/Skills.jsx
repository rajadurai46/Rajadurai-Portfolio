import React from "react";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaJava,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiRedux,
  SiSpringboot,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiKubernetes,
  SiPostman,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

/* Floating animation */
const float = (d) => ({
  initial: { y: -8 },
  animate: {
    y: [8, -8],
    transition: {
      duration: d,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear",
    },
  },
});

/* Skill Card */
const SkillCard = ({ icon, name, level, percent, duration }) => (
  <motion.div
    variants={float(duration)}
    initial="initial"
    animate="animate"
    viewport={{once: true}}
    className="
    relative group w-full max-w-[160px]
    rounded-2xl border border-neutral-700
    bg-white/70 dark:bg-black/40
    backdrop-blur-xl p-4
    shadow-md hover:shadow-red-500/30
    transition-all
    "
  >
    {/* Icon */}
    <div className="text-4xl mb-2 flex justify-center">{icon}</div>

    {/* Name */}
    <p className="text-sm font-medium text-center">{name}</p>

    {/* Progress */}
    <div className="w-full h-2 bg-neutral-300 dark:bg-neutral-800 rounded-full mt-3 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: percent }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="h-full bg-cyan-500"
      />
    </div>

    {/* Tooltip */}
    <span
      className="
      absolute -top-7 left-1/2 -translate-x-1/2
      bg-red-600 text-white text-xs px-2 py-1 rounded
      opacity-0 group-hover:opacity-100 transition
      "
    >
      {level}
    </span>
  </motion.div>
);

/* Skill Data */
const skills = {
  frontend: [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" />, level: "Expert", percent: "95%", duration: 2.5 },
    { name: "CSS3", icon: <FaCss3 className="text-sky-500" />, level: "Expert", percent: "90%", duration: 3 },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-sky-400" />, level: "Advanced", percent: "90%", duration: 4 },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" />, level: "Advanced", percent: "88%", duration: 2 },
    { name: "React", icon: <FaReact className="text-sky-600" />, level: "Advanced", percent: "90%", duration: 5 },
    { name: "Redux", icon: <SiRedux className="text-purple-600" />, level: "Intermediate", percent: "75%", duration: 4 },
  ],
  backend: [
    { name: "Java", icon: <FaJava className="text-red-500" />, level: "Expert", percent: "75%", duration: 3 },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" />, level: "Expert", percent: "70%", duration: 4 },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: "Expert", percent: "85%", duration: 3.5 },
    { name: "Express.js", icon: <SiExpress />, level: "Expert", percent: "80%", duration: 4 },
  ],
  database: [
    { name: "MySQL", icon: <SiMysql className="text-blue-600" />, level: "Advanced", percent: "75%", duration: 5 },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: "Intermediate", percent: "85%", duration: 4.5 },
  ],
  devops: [
    { name: "Docker", icon: <FaDocker className="text-blue-500" />, level: "Intermediate", percent: "70%", duration: 3 },
    { name: "Kubernetes", icon: <SiKubernetes className="text-blue-400" />, level: "Beginner", percent: "60%", duration: 5 },
  ],
  tools: [
    { name: "Postman", icon: <SiPostman className="text-orange-500" />, level: "Advanced", percent: "85%", duration: 3 },
    { name: "Git", icon: <FaGitAlt className="text-red-600" />, level: "Advanced", percent: "90%", duration: 4 },
    { name: "GitHub", icon: <FaGithub />, level: "Advanced", percent: "90%", duration: 4.5 },
  ],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="
      relative py-24 border-b border-neutral-900
      bg-gradient-to-b from-slate-100 via-white to-white
      dark:from-gray-700 dark:via-black dark:to-black dark:text-white
      "
    >
      {/* Glow */}
      <div
        aria-hidden
        className="
        absolute inset-0
        bg-[radial-gradient(ellipse_at_top,rgba(205, 15, 15, 0.98),transparent_60%)]
        "
      />

      <h1 className="relative text-center text-3xl sm:text-4xl font-semibold mb-16">
        Skills & Technologies
      </h1>

      <div className="relative max-w-screen-xl mx-auto px-4 space-y-20">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h2 className="text-xl font-semibold mb-8 capitalize text-violet-900 dark:text-violet-400">
              {category}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
              {items.map((skill, i) => (
                <SkillCard key={i} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;


