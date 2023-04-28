import React from "react";
import ProjectCard from "../../Components/ProjectCard";
import data from "../../data.json";
import { Heading, Box } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import Github from "../../Components/Github";

const Projects = () => {
  return (
    <Box id="projects">
      <Heading pb="10px" lineHeight="tall">
        {`{ Projects }`}
      </Heading>
      <SimpleGrid p={20} mt={-15} columns={[1, 1, 2]} spacing={10}>
        {data.map((ele) => (
          <Box className="project-card" mb={10}>
            <ProjectCard className="project-card" {...ele} />
          </Box>
        ))}
      </SimpleGrid>
      <hr />
      <Github />
      <hr />
    </Box>
  );
};

export default Projects;
