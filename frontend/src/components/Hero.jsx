import Pro from "../assets/dp.jpg";
import { ReactTyped } from "react-typed";
import { LiaFileDownloadSolid } from "react-icons/lia";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Hero = ({ theme }) => {
  const downloadResume = () => {
    window.open("http://localhost:5000/api/resume/download", "_blank");
  };

  return (
    <section
      id="home"
      className="
        relative overflow-hidden border-b border-neutral-900
        bg-white dark:bg-black dark:text-white
      "
    >
      <div className="relative max-w-6xl mx-auto px-4 pt-24 pb-28">
        <div className="grid gap-10 lg:grid-cols-2 items-center text-center lg:text-left">

          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <img
              src={Pro}
              alt="Profile"
              className={`
                w-40 sm:w-52 lg:w-64 rounded-full
                border-4 shadow-xl
                ${theme === "dark" ? "border-cyan-300" : "border-cyan-400"}
              `}
            />

            <Link to="contact" smooth duration={500}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="
                  absolute -bottom-5 right-6
                  px-5 py-2 rounded-full
                  bg-black text-white
                  dark:bg-white dark:text-black
                  text-xs sm:text-sm font-semibold
                  border-2 border-black dark:border-white
                  hover:bg-cyan-400 hover:text-black
                  hover:dark:bg-cyan-400
                  hover:border-cyan-400
                  transition-all
                "
              >
                Hire Me
              </motion.button>
            </Link>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold">
              Rajadurai <span className="text-red-600">A</span>
            </h1>

            <div className="flex mt-4 text-2xl sm:text-3xl">
              <span className="mr-2">I am a</span>
              <ReactTyped
                className="text-cyan-600 font-bold"
                strings={["JAVA", "MERN"]}
                typeSpeed={115}
                backSpeed={95}
                loop
              />
              <span className="ml-2">Full Stack Developer</span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="
                mt-6 text-2xl sm:text-3xl font-semibold
                bg-gradient-to-r from-red-600 via-slate-500 to-purple-600
                bg-clip-text text-transparent
              "
            >
              Turning Vision Into Reality With Code & Design
            </motion.p>

            <p className="mt-6 max-w-xl text-neutral-700 dark:text-neutral-300">
              I build scalable, high-performance web applications with
              modern UI, clean architecture, and robust backend systems.
            </p>

            <button
              onClick={downloadResume}
              className="
                mt-8 inline-flex items-center gap-3
                px-5 py-1 rounded-full
                bg-black text-white
                dark:bg-white dark:text-black
                hover:bg-gradient-to-r
                from-orange-500 via-white to-green-500
                transition-all
              "
            >
              Download CV
              <LiaFileDownloadSolid size={18} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;





