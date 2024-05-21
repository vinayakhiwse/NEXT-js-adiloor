import Link from "next/link";
import React from "react";

const LinkItem = ({ className, title, url }) => {
  return (
    <Link className={`${className}`} href={url}>
      {title}
    </Link>
  );
};

export default LinkItem;
