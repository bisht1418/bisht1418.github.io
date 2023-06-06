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
    <Box id="about" mt={20} className="about section">
      <Heading style={{ textAlign: "center" }}>{`{ About Me }`}</Heading>

      <Stack
        className="about section"
        direction={{ base: "column", md: "row" }}
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={2} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
              <Text
                as={"span"}
                color={"blue.400"}
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
                textDecoration={"underline"}
              >
                Hey! I'm Neeraj Bisht
              </Text>
              <br />
            </Heading>
            <Text
              id="user-detail-intro"
              fontSize={{ base: "18px", lg: "18px" }}
              color={"black.500"}
            >
              A solution-driven Full Stack Web Developer proficient in React,
              Express, MongoDB, NodeJS, HTML, CSS, and JavaScript. I am highly
              passionate about building web applications and confident enough to
              learn new technology with a curious mind. I have an absolute
              passion for coding and the ability to write clean and efficient
              code. I am looking forward to taking up a challenging and
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
                maxW="50%"
                w="70%"
                h="auto"
                style={{
                  maxWidth: "80%",
                  height: "auto",
                  margin: "auto",
                }}
                src={"https://avatars.githubusercontent.com/u/112753461?v=4"}
              />
            </Flex>
          </Stack>
        </Flex>
      </Stack>
    </Box>
  );
}
