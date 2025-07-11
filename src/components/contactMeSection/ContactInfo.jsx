import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-[20px]">
      <SingleInfo text="rjriva00@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 98998-47165" Image={FiPhone} />
      <SingleInfo text="Kapashera, New Delhi, India" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
