import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  useColorModeValue,
  IconButton,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Intro() {
  return (
    <Container mt={10} maxW={"5xl"} w={"100%"}>
      <Stack
        align={"center"}
        spacing={{ base: 10, md: 5 }}
        py={{ base: 10, md: 10 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text id="user-detail-name">Hi, I'am Neeraj 👋</Text>
            {/* <br /> */}
            <Text fontSize="3xl" as={"span"} color={"red.400"}>
              Full Stack Web Developer
            </Text>
          </Heading>
          <Container>
            <Text fontSize="xl">
              As a motivated Full Stack Developer, I am passionate about
              creating high-quality software solutions that meet the needs of
              clients and end-users. With a strong desire to constantly improve
              and learn new technologies, I strive to stay up-to-date with the
              latest trends and best practices in the field.
            </Text>
          </Container>

          <Box>
            <Link href="https://github.com/bisht1418" isExternal>
              <IconButton
                aria-label="github"
                variant="ghost"
                size="lg"
                fontSize="3xl"
                icon={<BsGithub />}
                _hover={{
                  bg: "blue.500",
                  color: useColorModeValue("white", "gray.700"),
                }}
                isRound
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/neeraj-bisht-96b265243/"
              isExternal
            >
              <IconButton
                aria-label="linkedin"
                variant="ghost"
                size="lg"
                icon={<BsLinkedin size="28px" />}
                _hover={{
                  bg: "blue.500",
                  color: useColorModeValue("white", "gray.700"),
                }}
                isRound
              />
            </Link>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            justifyContent="center"
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"red.400"}
              bg={"red.400"}
              _hover={{ bg: "red.300" }}
            >
              <Box p="2">
                <Button colorScheme="black" variant="link" id="resume-button-2">
                  <a
                    id="resume-link-2"
                    className="nav-link resume"
                    onClick={() => window.open("Neeraj-Bisht-Resume.pdf")}
                    target="_blank"
                    href="Neeraj-Bisht-Resume.pdf"
                    download
                  >
                    Resume
                  </a>
                </Button>
              </Box>
            </Button>
            <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6}>
              Hire Me
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"50%"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"60%"}
            overflow={"hidden"}
          >
            <Image
              className="home-img"
              alt={"Neeraj-Singh-Bisht"}
              fit={"cover"}
              align={"botton"}
              w={"100%"}
              h={"100%"}
              src=" https://avatars.githubusercontent.com/u/112753461?v=4"
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
