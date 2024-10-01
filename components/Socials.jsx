"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

const socials = [
  { icon: <FaLinkedin />, path: "/" },
  { icon: <IoLogoVercel />, path: "/" },
  { icon: <FaGithub />, path: "/" },
  { icon: <FaInstagram />, path: "/" },
];

const Socials = ({
  containerStyles = "flex gap-6",
  iconStyles = "text-2xl",
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.path} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
