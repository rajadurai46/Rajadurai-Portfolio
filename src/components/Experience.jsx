import  { useState } from "react";
import { motion } from "framer-motion";

/* EXPERIENCE CARD */
const ExperienceCard = ({
  date,
  position,
  company,
  companylink,
  desc,
  place,
  skills,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="relative flex justify-center pb-20">
      {/* Timeline Marker */}
      <span
        className="
        absolute left-1/2 -translate-x-1/2 top-6
        w-2 h-2 rounded-full bg-cyan-400
        shadow-[0_0_12px_rgba(34,211,238,0.9)]
        "
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}      // ✅ once only
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ y: -4 }}
        className="
        w-full sm:w-[92%] lg:w-[58%]
        rounded-2xl border border-neutral-200/60 dark:border-neutral-800
        bg-white/90 dark:bg-neutral-900/80
        p-6 shadow-sm transition-all duration-300
        hover:bg-neutral-50 dark:hover:bg-neutral-800
        hover:border-cyan-400 hover:shadow-xl
        "
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h3 className="text-lg sm:text-xl font-semibold">
            {position}
          </h3>
          <span className="text-xs sm:text-sm text-neutral-500">
            {date}
          </span>
        </div>

        {/* Company */}
        <a
          href={companylink}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-1 text-cyan-600 font-medium hover:underline"
        >
          {company}
        </a>

        {/* Location */}
        <p className="text-xs sm:text-sm text-neutral-500 mt-1">
          {place}
        </p>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          {desc}
        </p>

        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="mt-4 text-sm font-medium text-cyan-600 hover:underline"
        >
          {open ? "Hide Skills" : "View Skills"}
        </button>

        {/* Skills */}
        {open && (
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="
                text-xs px-3 py-1 rounded-md
                bg-cyan-600/10 text-cyan-700
                dark:bg-neutral-700 dark:text-neutral-200
                "
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const experienceData = [
    {
      date: "Dec 2025 – Present",
      position: "MERN Full Stack Developer Intern",
      company: "Maticz Technologies Pvt Ltd",
      companylink: "https://maticz.com/",
      place: "Madurai, Tamil Nadu",
      desc:
        "Developed full-stack web applications using React.js and Node.js, built secure REST APIs with Express.js and MongoDB, and implemented JWT-based authentication and protected routes.",
      skills: [
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "OAuth",
        "JWT",
      ],
    },
    {
      date: "Aug 2023 – Feb 2025",
      position: "Assistant Business Manager",
      company: "Shriram Finance Limited",
      companylink: "https://www.shriramfinance.in",
      place: "Madurai, Tamil Nadu",
      desc:
        "Managed business operations including collections and recovery, led teams to achieve monthly targets, and strengthened customer relationships.",
      skills: ["Leadership", "CRM", "Negotiation", "Collections"],
    },
    {
      date: "Apr 2021 – Jul 2022",
      position: "Process Associate",
      company: "Solartis Technology Services Pvt Ltd",
      companylink: "https://www.solartis.com/about/contact-info",
      place: "Madurai, Tamil Nadu",
      desc:
        "Supported backend insurance workflows and collaborated with teams to deliver accurate and timely processing.",
      skills: ["Insurance Ops", "Backend Processing", "Documentation"],
    },
  ];

  return (
    <section
      id="experience"
      className="
      relative py-24 border-b border-neutral-900
      bg-slate-100 dark:bg-black dark:text-white
      "
    >
      <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-20">
        Experience
      </h2>

      <div className="relative max-w-5xl mx-auto px-4">
        {/* STATIC TIMELINE */}
        <div
          className="
          absolute left-1/2 -translate-x-1/2 top-0
          w-[2px] h-full rounded-full
          bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600
          "
        />

        <ul className="relative flex flex-col">
          {experienceData.map((item, index) => (
            <ExperienceCard key={index} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;


