import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4 hover:scale-110 transform duration-500 relative">
      <SingleContactSocial link="https://www.linkedin.com/in/sanjujha" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/sanjukumarjha" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/assinabbe0/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
