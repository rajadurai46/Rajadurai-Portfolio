import { useRef } from "react";
import { motion } from "framer-motion";
import { FaSchool, FaUniversity, FaGraduationCap } from "react-icons/fa";

/* Degree Icon */
const getIcon = (degree) => {
  if (degree.includes("B.E")) return <FaGraduationCap />;
  if (degree.includes("Diploma")) return <FaUniversity />;
  return <FaSchool />;
};

/* Education Card */
const Details = ({
  from,
  college,
  degree,
  marks,
  place,
  collegelink,
  index,
}) => {
  return (
    <li className="relative mb-16 w-full flex justify-center">
      {/* Timeline Dot */}
      <span
        className="
        absolute left-1/2 -translate-x-1/2 top-6 
        w-3 h-3 rounded-full bg-cyan-500 
        shadow-[0_0_10px_rgba(6,182,212,0.8)]
        "
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}   // ✅ animate once
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`
        w-full sm:w-[90%] lg:w-[44%]
        rounded-2xl border border-neutral-700
        bg-white/80 dark:bg-black/40
        backdrop-blur-xl p-5 sm:p-6
        shadow-md hover:shadow-cyan-500/20
        transition-all
        ${
          index % 2 === 0
            ? "lg:mr-auto lg:pr-12"
            : "lg:ml-auto lg:pl-12"
        }
        `}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-1 text-cyan-600 text-lg sm:text-xl">
          {getIcon(degree)}
          <h3 className="font-semibold text-black dark:text-white">
            {degree}
          </h3>
        </div>

        {/* College */}
        <a
          href={collegelink}
          target="_blank"
          rel="noreferrer"
          className="
          block text-sm sm:text-base font-medium
          text-cyan-600 hover:underline
          "
        >
          {college}
        </a>

        {/* Meta */}
        <span
          className="
          block mt-1 text-xs sm:text-sm
          text-neutral-600 dark:text-neutral-400
          "
        >
          {from} • {place}
        </span>

        {/* Marks */}
        <p className="mt-3 text-sm sm:text-base font-medium">
          Score:{" "}
          <span className="text-cyan-600 font-semibold">
            {marks}
          </span>
        </p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const educationData = [
    {
      from: "2017 – 2020",
      college: "Mahendra Institute of Technology",
      degree: "B.E – Automobile Engineering",
      marks: "67%",
      place: "Namakkal, Tamil Nadu",
      collegelink: "https://mahendratech.org/",
    },
    {
      from: "2015 – 2017",
      college: "M.I.E.T Polytechnic College",
      degree: "Diploma – Automobile Engineering",
      marks: "73%",
      place: "Tiruchirappalli, Tamil Nadu",
      collegelink: "https://www.mietpoly.org/",
    },
    {
      from: "2014 – 2015",
      college: "Tagore Vidyalayam Mat Hr Sec School",
      degree: "HSC",
      marks: "51%",
      place: "Madurai, Tamil Nadu",
      collegelink: "https://in.worldorgs.com/catalog/madurai/elementary-school/tagore-vidyalayam-matric-hrsec-school",
    },
    {
      from: "2012 – 2013",
      college: "Tagore Vidyalayam Mat Hr Sec School",
      degree: "SSLC",
      marks: "79%",
      place: "Madurai, Tamil Nadu",
      collegelink: "https://in.worldorgs.com/catalog/madurai/elementary-school/tagore-vidyalayam-matric-hrsec-school",
    },
  ];

  return (
    <section
      id="education"
      className="
      bg-slate-50 dark:bg-neutral-950
      dark:text-white border-b border-neutral-900
      py-20
      "
    >
      <h2
        className="
        text-center text-3xl sm:text-4xl
        font-semibold mb-20
        "
      >
        Education
      </h2>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* STATIC CENTER TIMELINE */}
        <div
          className="
          absolute left-1/2 -translate-x-1/2 top-0
          w-[3px] h-full rounded-full
          bg-gradient-to-b
          from-cyan-500 via-blue-500 to-purple-600
          "
        />

        <ul className="relative flex flex-col">
          {educationData.map((item, index) => (
            <Details key={index} {...item} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;





