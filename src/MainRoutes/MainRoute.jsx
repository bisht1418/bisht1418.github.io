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
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<ContactMe />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}

export default MainRoute;
