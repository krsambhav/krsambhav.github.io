import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import memoji from "./assets/memoji.jpeg";
import FadeIn from "react-fade-in/lib/FadeIn";
import About from "./components/About";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [isDarkMode, setDarkMode] = React.useState(true);

  useEffect(() => {
    if (localStorage.getItem('theme') == 'true')
     {
       setDarkMode(false)
     }
  }, [])
  

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(!isDarkMode);
    const themeData = {
      "theme": isDarkMode
    }
    localStorage.setItem("theme", String(isDarkMode))
  };
  
  return (
    <div className={`${isDarkMode == true ? 'light' : 'dark'} dark:text-white min-h-[100vh] select-none transition-all`}>
    <>
    <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='projects' element={<Projects />} />
      <Route path='contact' element={<Contact />} />
    </Routes>
    </Router>
    <FadeIn delay={3500} >
    <Footer theme={isDarkMode} onClick={toggleDarkMode}  />
    </FadeIn>
    </>
    </div>
  );
}

export default App;
