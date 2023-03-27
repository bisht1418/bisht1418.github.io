import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Intro from "../../Components/Intro";
import About from "../About/About";
import { Skills } from "../Skills/Skills";
import Projects from "../Projects/Projects";
import ContactMe from "../ContactMe/ContactMe";
import Resume from "../Resume/Resume";

const Home = () => {
  const sectionIds = [
    "home",
    "about",
    "skills",
    "projects",
    "contact",
    "resume",
  ];

  return (
    <Box id="home">
      <Flex minWidth="max-content" gap="30">
        <Intro id="user-detail-intro" />
      </Flex>
      <About />
      <Skills />
      <Projects />
      <ContactMe />
      <Resume />
    </Box>
  );
};

export default Home;
