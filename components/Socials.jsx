import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaFacebook />, path: "" },
  { icon: <FaYoutube />, path: "" },
];

const Socials = ({ containerStyle, iconStyles }) => {
  return (
    <div className={containerStyle}>
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
