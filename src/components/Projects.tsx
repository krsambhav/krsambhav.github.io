import React from "react";
import Header from "./Header";
import Project from "./Project";
import FadeIn from "react-fade-in/lib/FadeIn";
import Footer from "./Footer";

function Projects() {
  return (
    <div className="w-screen flex flex-col items-center">
      <Header />
      <div className="">
        <FadeIn
          delay={400}
          className="projects-container flex flex-row flex-wrap gap-10 mt-16 w-[85vw] font-light text-xl mb-10 min-h-[60vh] justify-center"
        >
          <Project
            title="Baatein"
            description="a multi lingual chatting web app for bypassing language barriers"
            github="https://github.com/krsambhav/baatein"
            href="https://baaatein.lol"
            stack={["mongodb", "typescript", "react", "firebase"]}
          />
          <Project
            title="AutoPyOTP"
            description="a python tool to paste time based otp from secret key without hassles"
            github={"https://github.com/krsambhav/autopyotp"}
            stack={["python"]}
          />
          <Project
            title="MyBakeryWorld"
            description="a bakery shop"
            href={"https://github.com/krsambhav/mybakeryworld/"}
            github={"https://mybakeryworldpatna.web.app/"}
            stack={["firebase", "nodejs", "react", "tailwind"]}
          />
          <Project
            title="Periodic Table"
            description="Periodic Table generated using CSS Grids"
            github="https://github.com/krsambhav/periodic-table/"
            stack={["html", "css", "javascript"]}
            href="https://krsambhav.github.io/periodic-table/"
          />
          <Project
            title="DSA 375"
            description="DSA 375 Progress Tracker"
            github={"https://github.com/krsambhav/dsa-375/"}
            stack={["next", "tailwind"]}
            href="https://dsa375.vercel.app/"
          />
          <Project
            title="This Site"
            description="a portfolio site"
            github={"https://github.com/krsambhav/krsambhav.github.io/"}
            stack={["react", "tailwind"]}
          />
        </FadeIn>
      </div>
    </div>
  );
}

export default Projects;
