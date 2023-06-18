import React from "react";

const Container = ({ children, styles }) => {
  return <div className={`px-14 ${styles}`}>{children}</div>;
};

export default Container;
