import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Work from "./components/work/Work";
import Certification from "./components/certification/Certification";
import Chatbot from "./components/chatbot/Chatbot";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Certification />
        <Work />
        <Contact />
        <Chatbot />
      </main>
    </>
  );
}

export default App;
