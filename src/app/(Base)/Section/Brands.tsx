import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Brands = () => {
  const socialNetworks = [
    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/",
    },
    {
      icon: <FaTwitter />,
      link: "https://twitter.com/",
    },
  ];

  return (
    <div className="flex py-5 px-24">
      <div className="rounded-full border flex p-3 gap-5 items-center text-sm px-6 py-2 shadow-sm">
        <span>Follow</span>
        {socialNetworks.map((social, index) => (
          <a
            href={social?.link}
            key={index}
            className="p-2 bg-slate-50 rounded-full"
            target="_blank"
          >
            {social?.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Brands;
