import React, { useState } from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import taj from "../assets/taj.png";
import heart from "../assets/heart.png";
import PropTypes from "prop-types";
import { FaHeart, FaHeartbeat } from "react-icons/fa";
import { GiIndianPalace } from "react-icons/gi";
import { SiReact } from "react-icons/si";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Heart from "react-animated-heart";

function Footer({
  delay,
  theme,
  onClick,
}: {
  delay?: number;
  theme?: any;
  onClick?: any;
}) 

{
  const [isClick, setClick] = useState(false);
  return (
    <FadeIn
      className="flex flex-col items-center dark:text-white gap-5"
    >
      <DarkModeSwitch
        checked={!theme}
        onChange={onClick}
        size={18}
        moonColor={"white"}
        sunColor={"black"}
      />
        <a href='https://www.github.com/krsambhav' target={'_blank'}>
      <div className="footer font-extralight flex flex-row items-center gap-1 mb-10 select-none">
        <div className="text">made with</div> <IoIosHeartEmpty />
        in
        <SiReact className="mr-1 react-icon" />
      </div>
      </a>
    </FadeIn>
  );
}

export default Footer;
