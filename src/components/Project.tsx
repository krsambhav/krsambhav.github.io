import React from "react";
import { IoEnterOutline } from "react-icons/io5";
import {
  SiCss3,
  SiFirebase,
  SiGithub,
  SiHtml5,
  SiJava,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

function Project({
  title,
  description,
  github,
  stack,
  href,
}: {
  title: string;
  description: string;
  github: string;
  stack: string[];
  href?: string;
}) {
  const techStacks = {
    javascript: <SiJavascript />,
    typescript: <SiTypescript />,
    python: <SiPython />,
    react: <SiReact className="react-icon" />,
    next: <SiNextdotjs />,
    java: <SiJava />,
    css: <SiCss3 />,
    mongodb: <SiMongodb />,
    firebase: <SiFirebase />,
    html: <SiHtml5 />,
    nodejs: <SiNodedotjs />,
    tailwind: <SiTailwindcss />
  };

  return (
    <div className="project border border-white shadow-md hover:shadow-xl w-[250px] h-[250px] rounded-md flex flex-col p-5 justify-center gap-8 dark:border dark:border-[#773344] dark:text-gray-200 dark:hover:text-white dark:group-hover:border-white">
      <div className="project-title h-[20%]">{title}</div>
      <div className="project-description text-base h-[60%]">{description}</div>
      <div className="flex flex-row-reverse h-[20%] gap-2 text-[#773344] dark:text-[#e15679] dark:group-hover:text-white transition duration-300 justify-between">
        <div className="stack-container flex flex-row-reverse gap-3">
          {stack.map((s, key) => (
            <div key={key}>{techStacks[s as keyof typeof techStacks]}</div>
          ))}
        </div>
        <div className="links-container flex flex-row gap-3">
          {href && (
          <a className="group" href={href} target="_blank">
            <IoEnterOutline />
            </a>
          )}
            <a className="group" href={github} target="_blank">
            <SiGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
