import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";

export default function About() {
  return (
    <Box mt={20}>
      <Heading style={{ textAlign: "center" }}>{`{ About Me }`}</Heading>

      <Stack
        id="about"
        className="about section"
        direction={{ base: "column", md: "row" }}
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={2} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
                I'm Neeraj Bisht from
              </Text>
              <br />{" "}
              <Text color={"blue.400"} as={"span"}>
                Pauri, Uttarakhand
              </Text>{" "}
              <br />{" "}
              <Text color={"teal.400"} as={"span"}>
                Full Stack Developer
              </Text>{" "}
            </Heading>
            <Text
              id="user-detail-intro"
              fontSize={{ base: "md", lg: "xl" }}
              color={"black.500"}
            >
              Hey! I'm Neeraj Singh Bisht, Solution driven Full Stack Web
              Developer proficient in React, Express, MongoDB, NodeJS, HTML, CSS
              and JavaScript. Highly passionate about building web applications
              and confident enough to learn new things with a curious mind, an
              absolute passion for coding and the ability to write clean and
              efficient code. Looking forward to taking up a challenging and
              responsible role within an organization as a full-stack web
              developer.
            </Text>
          </Stack>
        </Flex>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={2} w={"full"} maxW={"lg"}>
            <Flex flex={1}>
              <Image
                rounded={"2xl"}
                boxShadow={"2xl"}
                alt={"Neeraj Singh Bisht"}
                objectFit={"cover"}
                maxW="65%"
                w="100%"
                h="auto"
                src={"https://avatars.githubusercontent.com/u/112753461?v=4"}
              />
            </Flex>
          </Stack>
        </Flex>
      </Stack>
    </Box>
  );
}
