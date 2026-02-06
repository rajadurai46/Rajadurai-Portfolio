import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineGithub } from "react-icons/ai";
import project1 from "../assets/pr-1.jpg";
import project2 from "../assets/pr-2.jpg";
import project3 from "../assets/pr-3.jpg";
import project4 from "../assets/pr-4.jpg";
import project5 from "../assets/pr-5.jpg";

const projects = [
  {
    img: project1,
    title: "Car Rental Website",
    description:
      "A fully functional car rental platform with car listings, booking system, and pricing.",
    tech: "React.js • Tailwind CSS",
    site: "https://templecity-car-rent-website.netlify.app/",
    github: "https://github.com/rajadurai46/Car-Rental-Website",
  },
  {
    img: project2,
    title: "Food Delivery App",
    description:
      "Online food ordering platform with menu browsing, cart, and user authentication.",
    tech: "React.js • Tailwind CSS",
    site: "https://tomato-fooddel.netlify.app",
    github: "https://github.com/rajadurai46/Food-Delivery",
  },
  {
    img: project3,
    title: "Virtual Reality Website",
    description:
      "A futuristic VR-focused website for developers to explore immersive experiences.",
    tech: "React.js • Tailwind CSS",
    site: "https://virtual-reality-dev.netlify.app",
    github: "https://github.com/rajadurai46/virtual-reality",
  },
  {
    img: project4,
    title: "AI Interface Website",
    description:
      "A modern AI-themed UI showcasing intelligent robots and advanced tech concepts.",
    tech: "React.js • Tailwind CSS",
    site: "https://brain-ai.netlify.app",
    github: "https://github.com/rajadurai46/brainwave-ai",
  },
    {
    img: project5,
    title: "Mern Ecommerce",
    description:
      "A full-stack e-commerce application built with MongoDB, Express, React, and Node.js featuring product management, secure authentication, cart functionality, and online order processing with a responsive user interface.",
    tech: "React.js • Node.js • Express.js • MongoDB Atlas",
    site: "https://mern-e-commerce-pearl.vercel.app/",
    github: "https://github.com/rajadurai46/Mern-E-Commerce",
  },
];

const Project = () => {
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [page, setPage] = useState(0);

  /* 🔹 Responsive items per page */
  useEffect(() => {
    const updateItems = () => {
      setItemsPerPage(window.innerWidth < 640 ? 1 : 2);
      setPage(0);
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const start = page * itemsPerPage;
  const currentProjects = projects.slice(start, start + itemsPerPage);

  const nextPage = () => setPage((p) => (p + 1) % totalPages);
  const prevPage = () => setPage((p) => (p - 1 + totalPages) % totalPages);

  return (
    <section
      id="projects"
      className="
      relative py-24 border-b border-neutral-900
      bg-gradient-to-b
      from-violet-500/25 via-indigo-400/10 to-white
      dark:from-violet-950/40 dark:via-black dark:to-black
      "
    >
      {/* Glow */}
      <div
        aria-hidden
        className="absolute inset-0
        bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.35),transparent_60%)]"
      />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-bold mb-20"
        >
          Projects
        </motion.h2>

        {/* Paginated Grid */}
        <motion.div
          key={page}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 sm:grid-cols-1 lg:grid-cols-2"
        >
          {currentProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="
              rounded-2xl overflow-hidden
              bg-white/80 dark:bg-black/50
              backdrop-blur border border-neutral-300 dark:border-neutral-700
              hover:shadow-[0_0_12px_rgba(34,211,238,0.9)]
              shadow-lg transition-all
              "
            >
              {/* Image */}
              <img
                src={project.img}
                alt={project.title}
                className="h-52 w-full object-fill"
              />

              {/* Content */}
              <div className="p-6">
                <h1 className="text-xl font-semibold mb-2 dark:text-white">
                  {project.title}
                </h1>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                  {project.description}
                </p>
                <span className="text-sm font-medium text-green-600">
                  {project.tech}
                </span>

                {/* 🔹 Buttons (Always Visible) */}
                <div className="flex gap-4 mt-5">
                  <a
                    href={project.site}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    px-4 py-2 rounded-full
                    bg-violet-600 text-white text-sm
                    hover:bg-violet-500 transition
                    "
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    px-4 py-2 rounded-full
                    border border-neutral-400
                    flex items-center gap-2
                    text-sm hover:bg-neutral-200
                    dark:text-white
                    dark:hover:bg-neutral-800 transition
                    "
                  >
                    <AiOutlineGithub size={18} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Arrows */}
        <div className="flex justify-center gap-8 mt-14">
          <button
            onClick={prevPage}
            className="
            w-10 h-10 rounded-full
            border border-neutral-400
            flex items-center justify-center
            dark:text-white
            hover:bg-violet-600 hover:text-white
            transition
            "
          >
            ←
          </button>
          <button
            onClick={nextPage}
            className="
            w-10 h-10 rounded-full
            border border-neutral-400
            flex items-center justify-center
            dark:text-white
            hover:bg-violet-600 hover:text-white
            transition
            "
          >
            →
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`
                w-3 h-3 rounded-full transition-all
                ${
                  page === i
                    ? "bg-violet-600 scale-125"
                    : "bg-neutral-400 hover:bg-violet-400"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;


