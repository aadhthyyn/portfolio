import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Skill from "./Skill";
import Github from "./Github";
import Project from "./Project";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />} />
        <Route path="/github" element={<Github />} />
        
        
      </Routes>
    </div>
  );
}

export default App;
