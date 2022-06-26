import React from "react";
import Header from "./Header";
import FadeIn from "react-fade-in/lib/FadeIn";
import Footer from "./Footer";

function About() {
  return (
    <div className="w-screen flex flex-col items-center">
      <Header />
      <FadeIn className="about-container w-[85vw] mt-16 flex flex-col gap-5 font-extralight min-h-[65vh]" delay={400}>
        <div className="name text-3xl">I am Kumar Sambhav</div>
        <div className="interest text-lg">a web development enthusiast</div>
        <div className="education text-lg">
          currently a third year student at Indian Institute of Information
          Technology, Kota
        </div>
        <div className="location text-lg">
          i am from Patna, capital of Bihar, state in India
        </div>
        <div className="interests text-lg">
          my interest lies in designing and developing good looking websites
        </div>
      </FadeIn>
    </div>
  );
}

export default About;
