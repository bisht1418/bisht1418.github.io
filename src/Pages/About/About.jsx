import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const About = () => {
  return (
    <Box id="about" className="about section">
      <Heading pb="10px" lineHeight="tall">
        {`{ About Me }`}
      </Heading>
      <hr />
    </Box>
  );
};

export default About;
