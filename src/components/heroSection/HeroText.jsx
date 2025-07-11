import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";


const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
      >
        Full-Stack Web Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Sanju Kumar Jha
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-left text-lg mt-4 max-w-[50ch] text-[20px]"
      >
        Hello, I'm Sanju Jha — a dedicated Web Developer with a strong foundation in front-end and full-stack development.<br></br>
I hold a Bachelor of Computer Applications (BCA) and specialize in technologies such as React, JavaScript, HTML, CSS, Node.js, Express.js, and MongoDB. I am passionate about building responsive, accessible, and performance-driven web applications that provide meaningful user experiences. My approach combines clean design principles with efficient, maintainable code. I continuously strive to expand my skills and contribute to impactful digital solutions. <br /> 
      </motion.p>
    </div>
    
  );
};

export default HeroText;