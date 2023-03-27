import React from "react";
import { UilHome } from "@iconscout/react-unicons";
import { Flex, Spacer, Box, Button, Heading } from "@chakra-ui/react";
import Theme from "../../Components/Theme";
import { NavLink } from "react-router-dom";
import Intro from "../../Components/Intro";

const Home = () => {
  return (
    <Flex id="home" minWidth="max-content" alignItems="center" gap="30">
      <Intro />
    </Flex>
  );
};

export default Home;
