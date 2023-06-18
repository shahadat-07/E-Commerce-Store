import React from "react";

const Counter = ({ count }) => {
  return (
    <span className="bg-secondary rounded-full w-[20px] h-[20px] flex items-center justify-center text-sm">
      {count}
    </span>
  );
};

export default Counter;
