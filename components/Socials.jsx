import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Shahriyar001" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/shahriyar-mahbub/",
  },
  {
    icon: <FaFacebook />,
    path: "https://www.facebook.com/shahriyar.mahbub.ayon/",
  },
  {
    icon: <FaYoutube />,
    path: "https://www.facebook.com/shahriyar.mahbub.ayon/",
  },
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
