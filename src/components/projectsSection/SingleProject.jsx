import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, year, align, image, link, github, description }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`}
    >
      <div className="max-w-md">
        <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
        <h2
          className={`text-xl font-thin text-white font-special sm:text-left 
          `}
        >
          {year}
        </h2>
        <p className="text-white my-4 text-[17px] sm:text-[17px] whitespace-pre-line sm:text-left">
  {description}
</p>

        <div className="flex gap-4 mt-4 sm:justify-center md:justify-start">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-orange text-white px-4 py-2 hover:scale-110 transform transition-all duration-500 relative border border-orange block rounded-full hover:bg-orange transition-all duration-300"
          >
            Live Demo <BsFillArrowUpRightCircleFill />
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:scale-110 transform transition-all duration-500 relative border border-orange block gap-2 border border-orange text-white px-4 py-2 rounded-full hover:bg-orange transition-all duration-300"
          >
            GitHub <FaGithub />
          </a>
        </div>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="max-h-[240px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-orange block"
      >
        <div className="w-full h-full bg-cyan opacity-0  absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </a>
    </motion.div>
  );
};

export default SingleProject;
