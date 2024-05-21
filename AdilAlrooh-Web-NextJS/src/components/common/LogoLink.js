import Link from "next/link";
import React from "react";

const LogoLink = ({ icon, url, className }) => {
  return (
    <Link
      href={url}
      className={`text-2xl rounded-full hover:bg-secondary bg-primary w-fit h-fit hover: text-white p-2 ${className}`}
      target="_blank"
    >
      {icon}
    </Link>
  );
};

export default LogoLink;
