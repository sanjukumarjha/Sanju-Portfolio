import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p >
  Hello! I'm <b>Sanju Jha</b>, a dedicated and detail-oriented <b>Web Developer</b> with a strong background in both front-end and back-end technologies.<br /><br />

  🎓 <b>Education:</b><br />
  • Bachelor of Computer Applications (BCA) — with a passion for building real-world digital solutions.<br /><br />

  🚀 <b>What I Love Doing:</b><br />
  • Creating sleek, responsive UIs<br />
  • Solving problems through clean, scalable code<br />
  • Turning ideas into interactive and optimized web experiences<br /><br />

  🎨 <b>Outside of Coding:</b><br />
  • Exploring UI/UX inspirations<br />
  • Listening to music while experimenting with new designs<br />
  • Sharing tech knowledge with peers and contributing to meaningful projects<br /><br />

  Let's build something awesome together! 🚀
</p>


      <a
  href="/public/Sanju Resume.pdf" 
  download
  className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer text-white hover:text-cyan md:self-start sm:self-center"
>
  Download Resume
</a>

    </div>
  );
};

export default AboutMeText;
