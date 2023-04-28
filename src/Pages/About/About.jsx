import React from "react";
import { Box, Container, Heading, Text, Flex } from "@chakra-ui/react";

const About = () => {
  return (
    <Box id="about" className="about section">
      <Heading pb="10px" lineHeight="tall">
        {`{ About Me }`}
      </Heading>

      <Flex>
        <Container>
          <Text id="user-detail-intro">
            Hey! I'm Neeraj Singh Bisht, Solution driven Full Stack Web
            Developer proficient in React, Express, MongoDB, NodeJS, HTML, CSS
            and JavaScript. Highly passionate about building web applications
            and confident enough to learn new things with a curious mind, an
            absolute passion for coding and the ability to write clean and
            efficient code. Looking forward to taking up a challenging and
            responsible role within an organization as a full-stack web
            developer.
          </Text>
        </Container>
      </Flex>

      <hr />
    </Box>
  );
};

export default About;
