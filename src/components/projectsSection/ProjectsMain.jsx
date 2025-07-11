import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Biodegradable Plastic Lifecycle Simulation",
    year: "Apr 2025 - May 2025",
    align: "right",
    image: "/public/images/biodegradable.jpg",
    link: "https://dulcet-rolypoly-04e896.netlify.app/",
    github: "https://github.com/sanjukumarjha/Biodesim",
    description:
      "A web-based interactive simulation that visually represents the lifecycle of biodegradable plastics—from production to complete decomposition. Built using modern web technologies, the project educates users on how biodegradable plastics behave under different environmental conditions such as soil, water, and light.\nIt features 3D animations, dynamic charts, and informative content to promote awareness about sustainable materials and their environmental impact.\n\n🛠️ Tech Stack: React, Three.js, Node.js, Express.js, MongoDB, Chart.js",
  },
  {
    name: "Nursery Green Fingers",
    year: "Dec 2024 - Jan 2025",
    align: "left",
    image: "/public/images/Nursery.jpg",
    link: "https://nurserygreenfingers.com/",
    github: "#",
    description:
      "A beautifully designed e-commerce website for a plant nursery that allows users to browse, search, and purchase a wide range of indoor and outdoor plants. The platform features intuitive navigation, category filtering, and product details, all tailored to provide a seamless shopping experience for gardening enthusiasts.\n\n The website also promotes eco-friendly practices and plant care tips to inspire a greener lifestyle. Admins can manage inventory, update listings, and track orders via a custom backend dashboard.\n\n 🛠️ Tech Stack: HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB",
  },
  {
    name: "SanSocial",
    year: "Aug 2024 - Oct 2024",
    align: "right",
    image: "/public/images/SanSocial.jpg",
    link: "/public/images/SanSocial.jpg",
    github: "https://github.com/sanjukumarjha/SanSocial",
    description:
      "SanSocial is a dynamic front-end social media web interface built using HTML, CSS, and JavaScript. Designed as a modern, responsive platform, it simulates core features of a social networking site—such as user profiles, post feeds, likes, comments, and notifications—all without the use of a backend.\n\nThe project focuses on creating a visually appealing and interactive user experience, utilizing JavaScript for DOM manipulation, responsive layout techniques for mobile compatibility, and CSS animations for smooth transitions and hover effects.\n\n🛠️ Tech Stack: HTML, CSS, JavaScript (Vanilla)",
  },
  {
    name: "Dashboard of Intecom",
    year: "May 2024 - Jul 2024",
    align: "left",
    image: "/public/images/Dashboard of intecom.jpg",
    link: "https://sanjukumarjha.github.io/Dashboard-of-Intecom/",
    github: "https://github.com/sanjukumarjha/Dashboard-of-Intecom",
    description:
      "Dashboard of Intecom is a sleek and interactive admin interface designed using HTML, CSS, and JavaScript. The project features a clean and responsive layout that displays key analytics, charts, and system controls for monitoring user activity and system status.\n\nOne of its standout features is a light/dark mode toggle, allowing users to switch themes dynamically with smooth visual transitions. JavaScript is used to manage theme states, interactivity, and real-time updates of dashboard elements, while CSS handles the layout and theme styling.\n\n🛠️ Tech Stack: HTML, CSS, JavaScript (Vanilla)\n🌗 Feature Highlight: Light/Dark Mode Toggle with State Persistence",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>

      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
  <div key={index} className="w-full">
    <SingleProject
      name={project.name}
      year={project.year}
      align={project.align}
      image={project.image}
      link={project.link}
      github={project.github}
      description={project.description}
    />
    {/* Separator Line */}
    {index !== projects.length - 1 && (
      <div className="w-full flex justify-center mt-12 relative overflow-hidden">
    <div
      className="h-[2px] w-[80%] bg-gradient-to-r from-transparent via-orange to-transparent 
                 animate-line-appear relative z-10"
    />
    <div
      className="absolute top-full left-2/4 -translate-x-1/2 mt-2 h-2 w-[80%] 
                 bg-orange blur-md opacity-100"
    />
  </div>
    )}
  </div>
))}

      </div>
    </div>
  );
};

export default ProjectsMain;
