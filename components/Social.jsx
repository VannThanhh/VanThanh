import React from "react";
import Link from "next/link";
import { FaGithub, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/VannThanhh" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/tt.vanthanhh" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/tthhn.a_/" },
  { icon: <FaTwitter />, path: "https://twitter.com/your-profile" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
