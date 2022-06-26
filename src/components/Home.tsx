import React from "react";
import "../App.css";
import memoji from "../assets/memoji.jpeg";
import FadeIn from "react-fade-in/lib/FadeIn";
import taj from "../assets/taj.png";
import heart from "../assets/heart.png";
import About from "../components/About";
import Header from "../components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./Footer";
import { SiMailchimp } from "react-icons/si";
import { BsCodeSlash, BsPerson } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import Button from "./Button";
import { FaTelegramPlane } from "react-icons/fa";

function Home() {
  const currentTime = new Date().getHours();
  const motionDelay = 800;

  return (
    <div className="home-main-container w-screen flex flex-col items-center select-none dark:text-white">
      <div className="body flex flex-col items-center justify-center w-9/12 min-h-[88vh] gap-10">
        <div className="memoji-container w-[200px]">
          <FadeIn>
            <img className="rounded-full shadow-xl dark:shadow-none" src={memoji} alt="" />
          </FadeIn>
        </div>
        <div className="title-container flex flex-col items-center gap-5">
          <FadeIn delay={motionDelay}>
            <div className="greet text-3xl font-extralight">
              {currentTime < 5
                ? "hello night owl!"
                : currentTime < 12
                ? "good morning!"
                : currentTime < 18
                ? "good afternoon!"
                : "good evening!"}
            </div>
          </FadeIn>
          <FadeIn delay={motionDelay + 500}>
            <div className="greet text-2xl font-extralight text-center">
              welcome to my virtual home
            </div>
          </FadeIn>
        </div>
        <FadeIn className="" delay={motionDelay + 1000}>
          <div className="btn-container flex flex-row gap-10 flex-wrap justify-center">
            <Link to="/about">
              <Button text="About" path="/about">
                <BsPerson />
              </Button>
            </Link>
            <Link to="/projects">
              <Button text="Projects" path="/projects">
                <BsCodeSlash />
              </Button>
            </Link>
            <Link to="/contact">
              <Button text="Contact" path="/contact">
                <FaTelegramPlane />
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

export default Home;
