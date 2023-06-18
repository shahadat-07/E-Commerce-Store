import React from "react";
import TopLink from "./TopLink";
import { BiCartAlt, BiUser } from "react-icons/bi";
import { VscHeart } from "react-icons/vsc";
import Counter from "./Counter";

const TopLinkContainer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-8 xl:gap-12 pb-4 xl:pb-0">
      <TopLink href="#" styles="gap-2">
        <BiUser className="text-2xl" /> Sign In
      </TopLink>
      <TopLink href="#">
        <div className="flex items-center gap-1">
          <VscHeart className="text-2xl" />
          <Counter count="0" />
        </div>{" "}
        Wish List
      </TopLink>
      <TopLink href="#">
        <div className="flex items-center gap-1">
          <BiCartAlt className="text-2xl" />
          <Counter count="0" />
        </div>{" "}
        Cart
      </TopLink>
    </div>
  );
};

export default TopLinkContainer;
