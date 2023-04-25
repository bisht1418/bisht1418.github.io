import React from "react";
import ProjectCard from "../../Components/ProjectCard";
import data from "../../data.json";
import { Heading, Box } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";

console.log(data);

const Projects = () => {
  return (
    <Box p={1} id="projects">
      <Heading pb="10px" lineHeight="tall">
        Project
      </Heading>
      <SimpleGrid p={20} columns={[1, 1, 2]} spacing={10}>
        <Box>
          <ProjectCard />
        </Box>
        <Box>
          <ProjectCard />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
