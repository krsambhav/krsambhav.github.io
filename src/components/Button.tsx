import React, { ReactElement } from "react";
import {useLocation} from 'react-router-dom';

function Button({ text, path, children, onClick }: { text: string, path?: string, children:ReactElement, onClick?: any }) {
  const currentLocation = useLocation().pathname;
  return (
    <div
      className={`nav-link font-light btn px-3 py-2 w-min-[160px] md:w-[120px] border text-center hover:shadow-lg cursor-pointer transition select-none duration-300 flex flex-row items-center gap-2 justify-center border-[#773344] hover:bg-[#773344] hover:text-white dark:hover:bg-[#e15679] ${currentLocation === path ? 'bg-[#773344] text-white dark:text-white dark:bg-[#e15679]' : 'bg-transparent text-[#773344] dark:text-white'} dark:border-[#e15679] rounded-tl-xl rounded-br-xl`}
      onClick={onClick}
    >
      {children}
      {text}
    </div>
  );
}

export default Button;
