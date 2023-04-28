import { Box, Flex, Grid, Heading, GridItem, Center } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <Box mb={10}>
      <Heading mb="1rem" textAlign={"center"} marginBottom={"10px"}>
        {`{ Github Stats }`}
      </Heading>
      <Box>
        <Flex
          borderRadius={10}
          bg={"black"}
          p={5}
          color={"white"}
          justifyContent={"center"}
          m={"10px"}
          mb={"30px"}
          mt={5}
          className="react-activity-calendar"
        >
          <GitHubCalendar username="bisht1418" />
        </Flex>
      </Box>

      <Grid p={10} display={"flex"} justifyContent={"space-between"}>
        <Grid
          templateColumns={{
            sm: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          <GridItem w="100%">
            <Center>
              <img
                id="github-streak-stats"
                src="https://github-readme-streak-stats.herokuapp.com?user=bisht1418&theme=radical&background=000000
              "
                alt=""
              ></img>
            </Center>
          </GridItem>

          <GridItem w="100%">
            {" "}
            <Center>
              <img
                src="https://github-readme-stats.vercel.app/api?username=bisht1418&show_icons=true&theme=radical&bg_color=000000
              "
                alt=""
                id="github-stats-card"
              ></img>
            </Center>
          </GridItem>

          <Box>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=bisht1418&theme=radical&bg_color=000000

              "
              id="github-top-langs"
              alt=""
              height={"100%"}
              width={"100%"}
              borderRadius={"50px"}
            ></img>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Github;
