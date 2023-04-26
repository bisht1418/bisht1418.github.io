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
import {} from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Intro() {
  return (
    <Container id="user-detail-intro" maxW={"7xl"} w={"100%"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}
            >
              Hi, I'am Neeraj 👋
            </Text>
            <br />
            <Text
              id="user-detail-intro"
              fontSize="3xl"
              as={"span"}
              color={"red.400"}
            >
              Full Stack Web Developer
            </Text>
          </Heading>
          <Container>
            <Text id="user-detail-intro" fontSize="xl">
              A motivated Full Stack Developer with a strong desire to
              constantly improve and learn new technologies
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
              colorScheme={"red"}
              bg={"red.400"}
              _hover={{ bg: "red.500" }}
            >
              <Box p="2">
                <Button colorScheme="black" variant="link" id="resume-button-1">
                  <a
                    id="resume-link-1"
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
            height={"300"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"50%"}
            overflow={"hidden"}
          >
            <Image
              className="home-img"
              alt={"Neeraj-Singh-Bisht"}
              fit={"cover"}
              align={"center"}
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
