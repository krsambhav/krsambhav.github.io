import React, { useState } from "react";
import memoji from "../assets/memoji.jpeg";
import FadeIn from "react-fade-in/lib/FadeIn";
import { Link, useLocation } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";
import { SiMailchimp, SiTelegram } from "react-icons/si";
import { BsCodeSlash, BsPerson } from "react-icons/bs";
import { IoIosPaper, IoMdContact } from "react-icons/io";
import { VscHome } from "react-icons/vsc";
import Button from "./Button";
import { RiCloseLine } from "react-icons/ri";
import { FaTelegram, FaTelegramPlane } from "react-icons/fa";

function Header() {
  const [navOpened, setNavOpened] = useState(false);
  const handleNavClick = () => {
    setNavOpened(!navOpened);
  };
  return (
    <>
        <div className="mt-10 flex flex-row gap-10 items-center font-light justify-between w-[90vw]">
          <div className="memoji-container">
            <Link to="/">
              <img className="rounded-full w-20" src={memoji} alt="" />
            </Link>
          </div>
          <div className="nav-links hidden flex-row gap-5 md:flex">
            <Link to="/">
              <Button text="Home" path="/">
                <VscHome />
              </Button>
            </Link>
            <Link to="/about">
              <Button text="About" path="/about" >
                <BsPerson />
              </Button>
            </Link>
            <Link to="/projects">
              <Button text="Projects" path="/projects" >
                <BsCodeSlash />
              </Button>
            </Link>
            <Link to="/contact">
              <Button text="Contact" path="/contact">
                <FaTelegramPlane />
              </Button>
            </Link>
            <a href="https://resume.kumarsambhav.me/" rel="noreferrer" target='_blank'>
              <Button text="Resume">
                <IoIosPaper />
              </Button>
              </a>
          </div>
          <FadeIn className="md:hidden" delay={3000} >
          <div className="mobile-nav-btn md:hidden text-3xl" onClick={handleNavClick}>
            <CgMenuRightAlt />
          </div>
          </FadeIn>
        </div>
      {navOpened && (
        <div className="mobile-nav w-screen h-screen md:hidden fixed backdrop-blur-md flex flex-col items-center py-20 gap-10" onClick={handleNavClick}>
          <div className="mobile-nav-child w-[85vw] flex flex-row-reverse text-3xl">
            <RiCloseLine />
          </div>
          <div className="mobile-nav-child w-[85vw] flex flex-row justify-center text-2xl " >
          <Link to="/">
            <Button text="Home" path="/">
              {<VscHome/>}
            </Button>
          </Link>
          </div>
          <div className="mobile-nav-child w-[85vw] flex flex-row justify-center text-2xl" >
          <Link to="/about">
            <Button text="About" path="/about" onClick={() => setNavOpened(false)}>
              {<BsPerson/>}
            </Button>
          </Link>
          </div>
          <div className="mobile-nav-child w-[85vw] flex flex-row justify-center text-2xl">
          <Link to="/projects">
            <Button text="Projects" path="/projects" onClick={() => setNavOpened(false)}>
              {<BsCodeSlash/>}
            </Button>
          </Link>
          </div>
            <div className="mobile-nav-child w-[85vw] flex flex-row justify-center text-2xl">
          <Link to="/contact">
              <Button text="Contact" path="/contact">
                {<FaTelegramPlane/>}
              </Button>
          </Link>
            </div>
            <div className="mobile-nav-child w-[85vw] flex flex-row justify-center text-2xl">
          <a href="https://resume.kumarsambhav.me/" rel='noreferrer' target="_blank">
              <Button text="Resume">
                {<IoIosPaper/>}
              </Button>
          </a>
            </div>
        </div>
      )}
    </>
  );
}

export default Header;
