import Abt from "../assets/About.jpg";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect } from "react";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

const stats = [
  { label: "Experience", value: 2, suffix: "+ Years" },
  { label: "Projects", value: 5, suffix: "+" },
  { label: "Clients", value: 2, suffix: "+" },
  { label: "Learning", value: 100, suffix: "%" },
];

const skills = [
  "JavaScript",
  "React.js",
  "Redux",
  "Node.js",
  "Express.js",
  "Java",
  "Spring Boot",
  "MySQL",
  "MongoDB",
];

/* 🔢 Count-up animation (ONCE) */
const Counter = ({ value, suffix }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 1.5,
      ease: "easeOut",
    });
    return controls.stop;
  }, [value]);

  return (
    <span>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="
      relative border-b border-neutral-900
      bg-gradient-to-b
      from-sky-300/80 via-white to-white
      dark:from-cyan-900/60 dark:via-cyan-950 dark:to-black
      dark:text-white
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

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 pb-24">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-16 sm:pt-20 text-center text-3xl sm:text-4xl font-semibold"
        >
          About <span className="text-red-600">Me</span>
        </motion.h1>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mt-14">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <img
              src={Abt}
              alt="About"
              className="
              h-56 sm:h-64 md:h-72 lg:h-80
              rounded-3xl shadow-xl
              ring-1 ring-cyan-400/40
              "
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <p className="text-sm sm:text-base leading-relaxed max-w-prose mx-auto text-neutral-700 dark:text-neutral-300">
              I am a passionate{" "}
              <span className="text-red-600 font-medium">
                JAVA Full Stack Developer
              </span>{" "}
              and{" "}
              <span className="text-red-600 font-medium">
                MERN Full Stack Developer
              </span>{" "}
              with strong experience in building scalable, responsive, and
              high-performance web applications.
              <br />
              <br />
              I specialize in developing end-to-end solutions using MongoDB,
              Express.js, React.js, Node.js, along with Java, Spring Boot, and
              RESTful APIs.
              <br />
              <br />
              I enjoy turning complex problems into clean, efficient, and
              user-friendly applications while following best development
              practices.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 mt-6">
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.12 }}
                  className="
                  px-4 py-1 text-sm rounded-full
                  bg-cyan-600/10
                  text-cyan-700 dark:text-cyan-400
                  border border-cyan-600/30
                  backdrop-blur-sm
                  cursor-default
                  "
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Coding Profiles */}
            <div className="mt-8">
              <p className="text-lg font-semibold mb-3 text-neutral-700 dark:text-neutral-300">
                Coding Profiles
              </p>

              <div className="flex gap-5">
                <motion.a
                  href="https://leetcode.com/u/rajadurai46/"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.15 }}
                  className="
                  p-3 rounded-full
                  bg-white/70 dark:bg-black/40
                  border border-neutral-300 dark:border-neutral-700
                  shadow-md
                  text-yellow-500
                  "
                >
                  <SiLeetcode size={26} />
                </motion.a>

                <motion.a
                  href="https://www.hackerrank.com/profile/rj46jr"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.15 }}
                  className="
                  p-3 rounded-full
                  bg-white/70 dark:bg-black/40
                  border border-neutral-300 dark:border-neutral-700
                  shadow-md
                  text-green-600
                  "
                >
                  <SiHackerrank size={26} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
          mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6
          text-center
          "
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="
              bg-white/70 dark:bg-black/40
              backdrop-blur-xl
              rounded-2xl p-5
              border border-neutral-300 dark:border-neutral-700
              shadow-lg
              "
            >
              <h3 className="text-2xl font-bold text-cyan-600">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-300">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;


