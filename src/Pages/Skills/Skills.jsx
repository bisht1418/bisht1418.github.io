import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import MySkills from "../../Components/MySkills";

export const Skills = () => {
  return (
    <Box mt={10} mb={20}>
      <Heading>{`{ Skills }`}</Heading>
      <MySkills />
    </Box>
  );
};
