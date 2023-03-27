import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Intro from "../../Components/Intro";

const Home = () => {
  return (
    <Box id="home">
      <Flex minWidth="max-content" gap="30">
        <Intro id="user-detail-intro" />
      </Flex>
    </Box>
  );
};

export default Home;
