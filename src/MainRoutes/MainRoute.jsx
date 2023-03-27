import { Routes, Route } from "react-router-dom";
import About from "../Pages/About/About";
import ContactMe from "../Pages/ContactMe/ContactMe";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";
import Resume from "../Pages/Resume/Resume";
import { Skills } from "../Pages/Skills/Skills";

function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home id="home" />} />
      <Route path="/about" element={<About id="about" />} />
      <Route path="/skills" element={<Skills id="skills" />} />
      <Route path="/projects" element={<Projects id="projects" />} />
      <Route path="/contact" element={<ContactMe id="contact" />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}

export default MainRoute;
