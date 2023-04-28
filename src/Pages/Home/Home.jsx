import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Intro from "../../Components/Intro";
import About from "../About/About";
import { Skills } from "../Skills/Skills";
import Projects from "../Projects/Projects";
import ContactMe from "../ContactMe/ContactMe";

const Home = () => {
  return (
    <Box id="home">
      <Flex minWidth="max-content" gap="30">
        <Intro id="user-detail-intro" />
      </Flex>
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <ContactMe id="contact" />
    </Box>
  );
};

export default Home;
