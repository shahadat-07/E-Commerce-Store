import Link from "next/link";
import React from "react";

const TopLink = ({ href, styles = "gap-4", children }) => {
  return (
    <Link
      href={href}
      className={`flex text-white items-center text-sm lg:text-base ${styles}`}
    >
      {children}
    </Link>
  );
};

export default TopLink;
